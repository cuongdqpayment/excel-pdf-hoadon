import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPhonePage } from '../pages/login-phone/login-phone';
import { HomePage } from '../pages/home/home';
import { ConfigPage } from '../pages/config/config';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPhonePage;
  platforms = ['android', 'cordova', 'core', 'ios', 'ipad', 'iphone', 'mobile', 'mobileweb', 'phablet', 'tablet', 'windows', 'electron'];
  isWeb:boolean = false;        //platform.is('core');
  isWebMobile:boolean = false;  //platform.is('mobile');
  isApp: boolean = false;       //platform.is('cordova');
  isIos: boolean = false;       //platform.is('ios'); //he dieu hanh ios
  isAndroid: boolean = false;   //platform.is('ios'); //he dieu hanh ios


  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private alertCtrl: AlertController,
              private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      if (platform.platforms()[0] === 'core'){
        this.isWeb = true;
      }
      
      let currentPlatform = [];

      this.platforms.forEach(e=>{
        if (platform.is(e)) currentPlatform.push(e); 
      })

      this.presentAlert({
        title:"PLATFORM is",
        message: 'Platform is ' + JSON.stringify(currentPlatform) + '<br> platform.platforms(): ' +JSON.stringify(platform.platforms()),
        ok_text:'OK'
      })

    });
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

