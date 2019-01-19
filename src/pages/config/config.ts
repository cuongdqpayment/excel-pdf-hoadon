import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Events, ToastController, Slides, reorderArray, ItemSliding} from 'ionic-angular';

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
//REORDER ARRAY
  songs: any[];
  editButton: string = 'Edit';
  editing: boolean = false;
////////////////////////

//itemsliding
chats: any[];
logins: any[];


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

    // khong cho keo slide bang tay
    this.slides.lockSwipes(true);

    //REORDER ARRAY:
    this.songs = [
      {
        title: 'Everything Beta',
        band: 'Phoria',
        album: 'Volition'
      },
      {
        title: 'Hello',
        band: 'Adele',
        album: '25'
      },
      {
        title: 'Bohemian Rhapsody',
        band: 'Queen',
        album: 'A Night at the Opera'
      },
      {
        title: 'Don\'t Stop Believin\'',
        band: 'Journey',
        album: 'Escape'
      },
      {
        title: 'Smells Like Teen Spirit',
        band: 'Nirvana',
        album: 'Nevermind'
      },
      {
        title: 'All You Need Is Love',
        band: 'The Beatles',
        album: 'Magical Mystery Tour'
      },
      {
        title: 'Hotel California',
        band: 'The Eagles',
        album: 'Hotel California'
      },
      {
        title: 'The Hand That Feeds',
        band: 'Nine Inch Nails',
        album: 'With Teeth'
      },
      {
        title: 'Who Are You',
        band: 'The Who',
        album: 'Who Are You'
      }];

    //itemsliding
    this.chats = [
      {
        img: './assets/avatar-cher.png',
        name: 'Cher',
        message: 'Ugh. As if.',
        time: '9:38 pm'
      }, {
        img: './assets/avatar-dionne.png',
        name: 'Dionne',
        message: 'Mr. Hall was way harsh.',
        time: '8:59 pm'
      }, {
        img: './assets/avatar-murray.png',
        name: 'Murray',
        message: 'Excuse me, "Ms. Dione."',
        time: 'Wed'
      }];
  
      this.logins = [
      {
          icon: 'logo-twitter', //ten cua ionicicons
          name: 'Twitter',
          username: 'admin',
      }, {
          icon: 'logo-github',
          name: 'GitHub',
          username: 'admin37',
      }, {
          icon: 'logo-instagram',
          name: 'Instagram',
          username: 'imanadmin',
      }, {
          icon: 'logo-codepen',
          name: 'Codepen',
          username: 'administrator',
      }];

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

  //REORDER ARRAY:
  toggleEdit() {
    this.editing = !this.editing;
    if (this.editing) {
      this.editButton = 'Done';
    } else {
      this.editButton = 'Edit';
    }
  }

  reorderData(indexes: any) {
    this.songs = reorderArray(this.songs, indexes);
  }


  //item sliding
  more(item: ItemSliding) {
    console.log('More');
    item.close();
  }

  delete(item: ItemSliding) {
    console.log('Delete');
    item.close();
  }

  mute(item: ItemSliding) {
    console.log('Mute');
    item.close();
  }

  archive(item: ItemSliding) {
    this.expandAction(item, 'archiving', 'Chat was archived.');
  }

  download(item: ItemSliding) {
    this.expandAction(item, 'downloading', 'Login was downloaded.');
  }

  expandAction(item: ItemSliding, _: any, text: string) {
    // TODO item.setElementClass(action, true);

    setTimeout(() => {
      const toast = this.toastCtrl.create({
        message: text
      });
      toast.present();
      // TODO item.setElementClass(action, false);
      item.close();

      setTimeout(() => toast.dismiss(), 2000);
    }, 1500);
  }

}