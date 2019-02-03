import { Component } from '@angular/core';
import { NavController, ModalController, Platform, LoadingController, AlertController } from 'ionic-angular';

import { DynamicPage } from '../dynamic/dynamic';
import { ApiHttpPublicService } from '../../services/apiHttpPublicServices';
import { DynamicReponsivePage } from '../dynamic-reponsive/dynamic-reponsive';
import { TabsPage } from '../tabs/tabs';
import { ApiStorageService } from '../../services/apiStorageService';
import { ApiResourceService } from '../../services/apiResourceServices';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController
            , private pubService: ApiHttpPublicService
            , private resources : ApiResourceService
            , private apiStorageService: ApiStorageService
            , private platform: Platform
            , private modalCtrl: ModalController
            , private loadingCtrl: LoadingController
            , private alertCtrl: AlertController
              ) {}

  ngOnInit(){
    
    console.log('2. ngOnInit');
    //hien thi kieu popup info -- dissmiss
    //this.openModal(data);

  }

  ionViewDidLoad() {
    console.log('3. ionViewDidLoad');

    this.pubService.getDataForm('form-phone.json')
      .then(data=>{
    if (this.platform.platforms()[0] === 'core'){
      
          setTimeout(()=>{
            this.navCtrl.push(DynamicReponsivePage
              ,{
              callback: this.callbackFunction,
              step: 'form-phone',
              form: data
              });
          },1000);
      
    }else{

          this.navCtrl.push(DynamicPage
            ,{
            callback: this.callbackFunction,
            step: 'form-phone',
            form: data
            });

    }
  })
  .catch(err=> console.log("err ngOnInit()",err)) 
  }

  /**
   * ham goi lai gui ket qua new button next
   */
  callbackFunction = (res?:{step?:string,callback?:any,data?:any,error?:any}) => {
    return new Promise((resolve, reject) => {
      
      //console.log('callback data:', res);

      if (res&&res.error&&res.error.error){
        console.log('callback error:', res.error.error);
        this.presentAlert('Lỗi:<br>' + JSON.stringify(res.error.error.error));
        resolve();
      } else if (res&&res.step==='form-phone'&&res.data){
        console.log('forward data:', res.data.database_out);
        if (res.data.database_out&&res.data.database_out.status===0){
          this.presentAlert('Chú ý:<br>' + JSON.stringify(res.data.database_out.message));
        }
        //gui nhu mot button forward
        resolve({
          next:"CONTINUE" //mo form tiep theo
          , next_data:{
            callback: this.callbackFunction,
            step: 'form-key',
            data: //new form 
                  {
                    items: [
                      { name: "Nhập mã OTP",type: "title"}
                      , { key: "key", name: "Mã OTP", hint: "Nhập mã OTP gửi đến điện thoại",type: "text", input_type: "text", validators: [{ required: true, min: 6, max: 6, pattern: "^[0-9A-Z]*$" }]}
                      , { type: "button"
                        , options: [
                            { name: "Trở về", next: "BACK"}
                            , { name: "Xác nhận OTP", next: "CALLBACK", url: "https://c3.mobifone.vn/api/ext-auth/confirm-key", token: res.data.token}
                        ]
                      }]
                }
          }
        });
      } else if (res&&res.step==='form-key'&&res.data.token){
        //lay duoc token
        //ktra token co user, image thi pass new ko thi gui ...
        //console.log('token verified:', res.data.token);
        // neu nhu gai quyet xong
        let loading = this.loadingCtrl.create({
          content: 'Đang xử lý dữ liệu từ máy chủ ....'
        });
        loading.present();

        this.resources.authorizeFromResource(res.data.token)
        .then(data=>{
          //console.log('data',data);
          let login;
          login = data;
          if (login.status
            &&login.user_info
            &&login.token
            ){
              this.apiStorageService.saveToken(res.data.token);
              this.navCtrl.setRoot(TabsPage);
          }else{
            this.presentAlert('Dữ liệu xác thực không đúng <br>' + JSON.stringify(data))
          }
          loading.dismiss();
          resolve();
        })
        .catch(err=>{
          console.log('err',err);
          this.presentAlert('Lỗi xác thực - authorizeFromResource')
          loading.dismiss();
          resolve();
        })
      } else {
        resolve();
      }
      
    });
  }

  openModal(data) {
    let modal = this.modalCtrl.create(DynamicPage, data);
    modal.present();
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'For Administrator',
      subTitle: msg,
      buttons: ['Dismiss']
    }).present();
  }

}
