import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, Slides } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiAuthService } from '../../services/apiAuthService';

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
               private navCtrl: NavController) {
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
      if (b.status==1&&a.token){
        this.token = a.token;
        this.goToSlide(1); //ve form confirmKey
      }else{
        //neu ho nhap so dien thoai nhieu lan sai so spam thi ??
        throw 'So dien thoai '+isdn+' khong hop le';
      }
    })
    .catch(err=>{
      this.presentAlert(JSON.stringify(err))
    })
  }

  onSubmitKey(){
    let key = this.keyFormGroup.value.key;
    console.log(key);
    
    this.auth.confirmKey(JSON.stringify({
      key:key,
      token:this.token
      }))
    .then(data=>{
      let a;
      a = data;
      console.log('status',a); //hack
      /* let b = JSON.parse(a.v_out);
      console.log('token',a.token); 
      if (b.status==1&&a.token){
        this.token = a.token;
        this.goToSlide(1); //ve form confirmKey
      }else{
        //neu ho nhap so dien thoai nhieu lan sai so spam thi ??
        throw 'So dien thoai '+isdn+' khong hop le';
      } */
    })
    .catch(err=>{
      this.presentAlert(JSON.stringify(err))
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

