import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Slides } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiAuthService } from '../../services/apiAuthService';
import { ApiStorageService } from '../../services/apiStorageService';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login-isdn',
  templateUrl: 'login-isdn.html'
})
export class LoginIsdnPage {
  @ViewChild(Slides) slides: Slides;
  slideIndex = 0;
  token:any;

  isdnFormGroup: FormGroup;
  keyFormGroup: FormGroup;
  

  constructor( private formBuilder: FormBuilder,
               private auth : ApiAuthService,
               private alertCtrl: AlertController,
               private apiStorageService: ApiStorageService,
               private navCtrl: NavController) {}


  ngOnInit(){

    this.slides.lockSwipes(true);

    this.isdnFormGroup = this.formBuilder.group({
      isdn: ['',
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          phoneNumberValidator,
          Validators.minLength(9),
          Validators.maxLength(9)]]
    })

    this.keyFormGroup = this.formBuilder.group({
      key: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6)
        ]
      ],
    })


    if (this.apiStorageService.getToken()){
      this.auth.authorize(this.apiStorageService.getToken())
      .then(status=>{
        //get public key de truyen ma hoa mat khau
        //chi khi nao token duoc xac thuc moi cho public key
        //ktra public key phai ycau token key bang dien thoai
        this.auth.getServerPublicRSAKey()
        .then(pk => {
          
          console.log('Public key ok');
          this.navCtrl.setRoot(TabsPage);
        })
        .catch(err=>{
          console.log('Public key err', err);
        });
      })
      .catch(err=>{
        console.log('Token invalid: ', err);
        this.auth.deleteToken();
      });
    }

    


  }

  onSubmit() {
    let isdn = this.isdnFormGroup.value.isdn;
    this.auth.requestIsdn(JSON.stringify({
      isdn:isdn
      }))
    .then(data=>{
      let a;
      a = data;
      let b = JSON.parse(a.v_out);
      console.log('token',a.token); 
      console.log('status',b); //hack
      this.token = a.token;
      this.goToSlide(1); //ve form confirmKey
      if (b.status==1&&a.token){
      }else{
        //neu ho nhap so dien thoai nhieu lan sai so spam thi ??
        this.presentAlert('Số điện thoại '+isdn+' không hợp lệ.<br> Vui lòng liên hệ Quản trị hệ thống');
      }
    })
    .catch(err=>{

      this.presentAlert('Lỗi xác thực <br>' + JSON.stringify(err));
    })
  }

  onSubmitKey(){
    let key = this.keyFormGroup.value.key;
    //console.log(key);
    
    this.auth.confirmKey(JSON.stringify({
      key:key,
      token:this.token
      }))
    .then(token=>{
        this.token = token;
        this.auth.saveToken(token); //luu tru tren xac thuc va xuong dia
        
        this.navCtrl.setRoot(TabsPage);
    })
    .catch(err=>{
      this.presentAlert('Mã OTP của bạn không đúng vui lòng kiểm tra lại trên số điện thoại của bạn <br>'
               );
      this.goToSlide(0); //ve form isdn
    })
  }

  goToSlide(i) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(i, 500);
    this.slides.lockSwipes(true);
  }

  slideChanged() {
    this.slideIndex = this.slides.getActiveIndex();
  }

  goBack(){
    this.goToSlide(0);
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'For Administrator',
      subTitle: msg,
      buttons: ['Dismiss']
    }).present();
  }



  
}
function phoneNumberValidator(formControl: FormControl) {
  if (formControl.value.charAt(0) != "0") return null;
  else return { phoneNumber: true };
}

