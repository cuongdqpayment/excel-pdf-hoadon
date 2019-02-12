import { Component } from '@angular/core';
import { NavController, ModalController, Platform, LoadingController, AlertController } from 'ionic-angular';

import { DynamicFormMobilePage } from '../dynamic-form-mobile/dynamic-form-mobile';
import { ApiHttpPublicService } from '../../services/apiHttpPublicServices';
import { ApiStorageService } from '../../services/apiStorageService';
import { ApiResourceService } from '../../services/apiResourceServices';
import { ApiAuthService } from '../../services/apiAuthService';
import { DynamicFormWebPage } from '../dynamic-form-web/dynamic-form-web';
import { DynamicListPage } from '../dynamic-list/dynamic-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  customers:any = [];
  maxCurrentId:number=0;

  constructor(private navCtrl: NavController
            , private pubService: ApiHttpPublicService
            , private auth : ApiAuthService
            , private resources : ApiResourceService
            , private apiStorageService: ApiStorageService
            , private platform: Platform
            , private modalCtrl: ModalController
            , private loadingCtrl: LoadingController
            , private alertCtrl: AlertController
              ) {
                //console.log('1. Constructor Home');
              }

  ngOnInit(){
    //console.log('2. ngOnInit Home');
    
  }

  ionViewDidLoad() {
    //console.log('3. ionViewDidLoad Home');
    let loading = this.loadingCtrl.create({
      content: 'Đang lấy danh sách khách hàng...'
    });
    loading.present();

    this.resources.getAllCutomers()
    .then(customers=>{
      this.customers = customers;
      this.maxCurrentId = Math.max.apply(Math, this.customers.map((o)=>{return o.stt}));
      //chuyen doi thanh ds
      let list = {
        title: "Customers"
        , search_bar: {hint: "Tìm cái gì đó"} 
        , buttons: [
            {color:"primary", icon:"add", next:"ADD"}
            , {color:"primary", icon:"contacts", next:"FRIENDS"}
            , {color:"primary", icon:"notifications", next:"NOTIFY"
              , alerts:[
                  "cuong.dq"
                  ]
              }
            , {color:"royal", icon:"cog", next:"SETTINGS"}
          ]
        , items: []
      };
      customers.forEach(el => {
        list.items.push({
             icon:"contact"
            ,h2: el.full_name
            ,h3: el.area
            ,p: el.cust_type
            ,note: el.charge
            ,options:[
                { name: "Xóa", color:"danger", icon:"trash", next:"EXIT"}
              , { name: "Chỉnh sửa", color:"primary", icon:"create", next: "NEXT"}
              , { name: "Xem chi tiết", color:"secondary", icon:"list", next: "CALLBACK"}
            ]
        });
      });
      this.navCtrl.push(DynamicListPage
        ,{
        parent: this, //bind this for call
        callback: this.callbackFunction,
        step: 'list-customers',
        list: list
        });

      loading.dismiss();
    })
    .catch(err=>{
      this.customers =  [];
      loading.dismiss();
    })
  }


   /**
    *  ham goi lai gui ket qua new button next
    * 
    * @param that chinh la this cua parent callback
    * @param res 
    */
  callbackFunction(that,res?:{step?:string,data?:any,error?:any}){
    
    return new Promise((resolve, reject) => {

      console.log('parent:',that);

      resolve();
    
    });
  }

  openModal(data) {
    let modal = this.modalCtrl.create(DynamicFormMobilePage, data);
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
