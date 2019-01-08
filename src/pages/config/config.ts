import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Events, ToastController, Slides } from 'ionic-angular';

import { ApiStorageService } from '../../services/apiStorageService';
import { ApiHttpPublicService } from '../../services/apiHttpPublicServices';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})

export class ConfigPage {
  @ViewChild(Slides) slides: Slides;
  slideIndex = 0;

  isSearch: boolean = false;
  searchString:string='';

  parameters:any=[];
  parametersOrigin:any=[];


////////////////////
  gender: string;
  gaming: string;
  toppings: Array<string>;
  petAlertOpts: any;
  petData: any;
  pets: Array<string>;
  hairColorData: any;
  hairColor: any;
  skittlesData: any;
  skittles: Array<any>;  
  notifications: string = 'mute_1';
  rating: number = 2;
////////////////////

  constructor(private navCtrl: NavController, 
              private apiStorageService: ApiStorageService,
              private http: ApiHttpPublicService,
              private events: Events,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
////////////////////
                this.gender = 'f';
                this.gaming = 'n64';
            
                this.petAlertOpts = {
                  title: 'Like Pets?',
                  subTitle: 'Select your favorite'
                };
            
                this.toppings = ['bacon', 'xcheese'];
            
                this.petData = [
                  { text: 'Bird', value: 'bird' },
                  { text: 'Cat', value: 'cat' },
                  { text: 'Dog', value: 'dog' },
                  { text: 'Honey Badger', value: 'honeybadger' },
                ];
            
                this.hairColorData = [
                    { text: 'Brown', value: 'brown' },
                    { text: 'Blonde', value: 'blonde' },
                    { text: 'Black', value: 'black' },
                    { text: 'Red', value: 'red' }
                ];
            
                // Pre-selected object with different object reference      
                this.hairColor = { text: 'Brown', value: 'brown' };
            
                this.skittlesData = [
                    { text: 'Red', value: 'red' },
                    { text: 'Orange', value: 'orange' },
                    { text: 'Yellow', value: 'yellow' },
                    { text: 'Green', value: 'green' },
                    { text: 'Purple', value: 'purple' }
                ];
            
                // Pre-selected object with different object reference      
                this.skittles = [
                    { text: 'Red', value: 'red' },
                    { text: 'Purple', value: 'purple' }
                ];
            
                this.pets = ['cat', 'dog'];
////////////////////
              }

  ngOnInit() {    
    
  }

  goSearch(){
    this.isSearch = true;
  }

  onInput(e){
    //tim va loc nhom tham so theo ten  
  }

  searchEnter(){
    this.isSearch = false;
  }

  addButton(){

  }

  itemSample(sl){
    this.goToSlide(sl);
  }

  /**
   * Dieu khien slide
   * @param i 
   */
  goToSlide(i) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(i, 300);
    this.slides.lockSwipes(true);
  }

  /**
   * xac dinh slide
   */
  slideChanged() {
    this.slideIndex = this.slides.getActiveIndex();
  }


  ////////////////////
  compareFn(option1: any, option2: any) {
    return option1.value === option2.value;
  }

  monthChange(val: any) {
    console.log('Month Change:', val);
  }

  yearChange(val: any) {
    console.log('Year Change:', val);
  }
  ////////////////////

}