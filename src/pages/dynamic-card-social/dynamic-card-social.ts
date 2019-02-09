import { Component } from '@angular/core';
import { NavController, Platform, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { ApiAuthService } from '../../services/apiAuthService';
import { ApiHttpPublicService } from '../../services/apiHttpPublicServices';

@Component({
  selector: 'page-dynamic-card-social',
  templateUrl: 'dynamic-card-social.html'
})
export class DynamicCardSocialPage {

  dynamicCards: any; 
  dynamicCardsOrigin: any;
  callback: any; 
  step: any;  
  
  isSearch: boolean = false;
  searchString: string = '';
  shouldShowCancel: boolean = false;

  isMobile: boolean = false;

  constructor(  private platform: Platform
              , private authService: ApiAuthService
              , private pubService: ApiHttpPublicService
              , private viewCtrl: ViewController
              , private navCtrl: NavController
              , private loadingCtrl: LoadingController
              , private navParams: NavParams
             ) {}

  ngOnInit(){

    this.dynamicCardsOrigin = this.navParams.get("list") ? this.navParams.get("list") : this.pubService.getDemoCard();
    this.refresh();
    
    this.callback = this.navParams.get("callback");
    this.step = this.navParams.get("step");
    let call_waiting_data = this.navParams.get("call_waiting_data");
    
    if (call_waiting_data){
      call_waiting_data()
      .then(list=>{
        this.refresh(list);
      })
    }
  }

  refresh(newList?:any){
    if (newList) this.dynamicCardsOrigin = newList;
    this.isMobile = (this.platform.platforms()[0]==='mobile');
    this.dynamicCards = this.dynamicCardsOrigin;

    console.log('cards', this.dynamicCardsOrigin);
  }

  //Su dung search
  //---------------------
  goSearch(){
    this.isSearch = true;
  }

  searchEnter(){
    this.isSearch = false;
  }

  onInput(e){
    console.log(this.searchString);
  }

  onClickHeader(btn){
    console.log(btn);
    //this.processCommand(btn); 
  }
  
  onClickShortDetails(btn,item){
    console.log(btn, item);

  }

  onClickActions(btn,item){
    console.log(btn, item);

  }

}
