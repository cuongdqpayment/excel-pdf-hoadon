import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PrinterPage } from '../pages/printer/printer';

import { LoginPhonePage } from '../pages/login-phone/login-phone';
import { DynamicFormMobilePage } from '../pages/dynamic-form-mobile/dynamic-form-mobile'
import { DynamicFormWebPage } from '../pages/dynamic-form-web/dynamic-form-web';
import { DynamicListPage } from '../pages/dynamic-list/dynamic-list';
import { DynamicCardSocialPage } from '../pages/dynamic-card-social/dynamic-card-social';
import { DynamicMediasPage } from '../pages/dynamic-medias/dynamic-medias';
import { DynamicCardPage } from '../pages/dynamic-card/dynamic-card';
import { SignaturePage } from '../pages/signature/signature';

import { RegisterPage } from '../pages/register/register';
import { SettingPage } from '../pages/setting/setting';
import { SampleIconsPage } from '../pages/sample-icons/sample-icons';
import { ConfigPage } from '../pages/config/config';
import { PdfPage } from '../pages/pdf/pdf';


import { ParametersPage } from '../pages/parameters/parameters';
import { CustomerPage } from '../pages/customer/customer';
import { InvoicePage } from '../pages/invoice/invoice';
import { ReportPage } from '../pages/report/report';
import { TabsPage } from '../pages/tabs/tabs';

import { StorageServiceModule } from 'angular-webstorage-service';
import { ApiStorageService } from '../services/apiStorageService';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ApiAuthService } from '../services/apiAuthService';
import { ApiImageService } from '../services/apiImageService';

import { ApiHttpPublicService } from '../services/apiHttpPublicServices'
import { ApiResourceService } from '../services/apiResourceServices';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../interceptors/requestInterceptor';
import { ResponseInterceptor } from '../interceptors/responseInterceptor';


@NgModule({
  declarations: [
    MyApp,
    LoginPhonePage,
    DynamicFormMobilePage,
    DynamicFormWebPage,
    DynamicListPage,
    DynamicCardSocialPage,
    DynamicMediasPage,
    DynamicCardPage,
    SignaturePage,
    
    ParametersPage,
    CustomerPage,
    InvoicePage,
    ReportPage,
    TabsPage,

    PrinterPage,
    HomePage,
    RegisterPage,
    LoginPage,
    SettingPage,
    SampleIconsPage,
    PdfPage,
    ConfigPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPhonePage,
    DynamicFormMobilePage,
    DynamicFormWebPage,
    DynamicListPage,
    DynamicCardSocialPage,
    DynamicMediasPage,
    DynamicCardPage,
    SignaturePage,
    
    ParametersPage,
    CustomerPage,
    InvoicePage,
    ReportPage,
    TabsPage,

    PrinterPage,
    HomePage,
    RegisterPage,
    LoginPage,
    SettingPage,
    SampleIconsPage,
    PdfPage,
    ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    ApiAuthService,
    ApiImageService,
    ApiStorageService,
    ApiResourceService,
    ApiHttpPublicService,
    RequestInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
