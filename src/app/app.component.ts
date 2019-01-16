import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
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

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

