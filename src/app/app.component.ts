import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  platforms = ['android', 'cordova', 'core', 'ios', 'ipad', 'iphone', 'mobile', 'mobileweb', 'phablet', 'tablet', 'windows', 'electron'];
  isWeb:boolean = false;        //platform.is('core');
  isWebMobile:boolean = false;  //platform.is('mobile');
  isApp: boolean = false;       //platform.is('cordova');
  isIos: boolean = false;       //platform.is('ios'); //he dieu hanh ios
  isAndroid: boolean = false;   //platform.is('ios'); //he dieu hanh ios


  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private alertCtrl: AlertController,
              private splashScreen: SplashScreen) {}

  ngOnInit() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //form web = true, form mobile = false
      if (this.platform.platforms()[0] === 'core') this.isWeb = true; 
      
      let currentPlatform = [];

      this.platforms.forEach(e=>{
        if (this.platform.is(e)) currentPlatform.push(e); 
      })

      /* this.presentAlert({
        title:"PLATFORM is",
        message: 'Platform is ' + JSON.stringify(currentPlatform) 
        + '<br> platform.platforms(): ' +JSON.stringify(this.platform.platforms()),
        ok_text:'OK'
      }); */


      this.viewDidLoad();

    });
  }


  viewDidLoad() {

    this.rootPage  = LoginPage;
        
  }

  presentAlert(jsonConfirm:{title:string,message:string,ok_text:string}) {
    let alert = this.alertCtrl.create({
      title: jsonConfirm.title, //'Xác nhận phát hành',
      message: jsonConfirm.message, //'Bạn muốn ',
      buttons: [
        {
          text: jsonConfirm.ok_text,//'Đồng ý',
          handler: () => {}
        }
      ]
    });
    alert.present();
  }

}

