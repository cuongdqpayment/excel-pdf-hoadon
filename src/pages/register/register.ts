import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiAuthService } from '../../services/apiAuthService';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public myFromGroup: FormGroup;
  public isImageViewer: boolean = false;
  public resourceImages: {imageViewer: any,file:any, name: string }[] = [];
  public serverKey:any;
  
  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private apiService: ApiAuthService) { }

  ngOnInit() {
    this.apiService.getServerPublicRSAKey()
    .then(pk=>this.serverKey=pk)
    .catch(err=>console.log(err));

    this.myFromGroup = this.formBuilder.group({
      user: '',
      pass: ''
    });
  }

  onSubmit() {
    //ma hoa du lieu truoc khi truyen di
    var passEncrypted='';
    try{
      passEncrypted = this.serverKey.encrypt(this.myFromGroup.get('pass').value, 'base64', 'utf8');
    }catch(err){
      console.log(err);
    }

    var formData: FormData = new FormData();
    formData.append("username",this.myFromGroup.get('user').value);
    formData.append("password",passEncrypted);
    
    //gui lenh login 
    let loading = this.loadingCtrl.create({
      content: 'Saving user info...'
    });
    loading.present();

    this.apiService.register(formData)
    .then(status=>{
        loading.dismiss();
        if (status){
          this.toastCtrl.create({
            message: "Thank you "+ this.myFromGroup.get('user').value +"! You are registered!",
            duration: 3000,
            position: 'middle'
          }).present();
  
          this.navCtrl.setRoot(LoginPage);
        }else{
          this.toastCtrl.create({
            message: "Your new "+ this.myFromGroup.get('user').value +". Existed in our System, please choose another...",
            duration: 5000,
            position: 'bottom'
          }).present();        
        }
      })
    .catch(err=>{
      loading.dismiss();
      this.toastCtrl.create({
        message:"result: " + JSON.stringify(err),
        duration: 5000,
        position: 'bottom'
      }).present();
    }
    );
    
  }
}
