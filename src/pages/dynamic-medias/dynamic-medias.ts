import { Component } from '@angular/core';
import { NavController, Platform, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { ApiAuthService } from '../../services/apiAuthService';
import { ApiHttpPublicService } from '../../services/apiHttpPublicServices';
import { ApiImageService } from '../../services/apiImageService';

@Component({
  selector: 'page-dynamic-medias',
  templateUrl: 'dynamic-medias.html'
})
export class DynamicMediasPage {

  dynamicMedias: any; 
  dynamicMediasOrigin: any;
  callback: any;
  step: any;
  
  isSearch: boolean = false;
  searchString: string = '';
  shouldShowCancel: boolean = true;

  isMobile: boolean = false;

  constructor(  private platform: Platform
              , private authService: ApiAuthService
              , private apiImageService: ApiImageService
              , private pubService: ApiHttpPublicService
              , private viewCtrl: ViewController
              , private navCtrl: NavController
              , private loadingCtrl: LoadingController
              , private navParams: NavParams
             ) {}

  ngOnInit(){

    this.dynamicMediasOrigin = this.navParams.get("list") ? this.navParams.get("list") : this.pubService.getDemoMedias();
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
    if (newList) this.dynamicMediasOrigin = newList;
    this.isMobile = (this.platform.platforms()[0]==='mobile');
    this.dynamicMedias = this.dynamicMediasOrigin;
  }

  fileChange(event) {
    if (event.target && event.target.files) {
      const files: { [key: string]: File } = event.target.files;

      const processImages = new Promise((resolve,reject)=>{
        let fileProcessed = [];
        let countFile = Object.keys(files).length, countResize = 0;
        for (let key in files) { //index, length, item
          if (!isNaN(parseInt(key))) {
            this.apiImageService.resizeImage(files[key].name,files[key],480)
            .then(data=>{
              fileProcessed.push(data);
              if (++countResize>=countFile){
                resolve(fileProcessed);
              }
            })
            .catch(err=>{
              reject(err);
            })
          }
        }
      });

      let loading = this.loadingCtrl.create({
        content: 'Đang xử lý các ảnh theo định dạng lưu trữ tiết kiệm ....'
      });
      loading.present();

      processImages.then(data=>{
        this.dynamicMediasOrigin.medias = data;
        this.refresh();
        loading.dismiss();
      })
      .catch(err=>{
        console.log(err);
        loading.dismiss();
      });

      setTimeout(() => {
        //1 phut ma ko x ly duoc thi thoat ra cho cai khac thuc hien
        loading.dismiss();
      }, 60000);

    }
  }


  onClickMedia(idx,item){

    console.log(idx,item);

    
    let btn = {}

    this.processCommand(btn); 
  }

  onClickHeader(btn){
    console.log(btn);
    this.processCommand(btn); 
  }
  
  onClickShortDetails(btn,item){
    console.log(btn, item);
    this.processCommand(btn); 
  }

  onClickActions(btn,item){
    console.log(btn, item);
    this.processCommand(btn); 
  }

  processCommand(btn){

    if (btn.url){
      if (btn.method==='GET'){
        let loading = this.loadingCtrl.create({
          content: 'Đang xử lý dữ liệu từ máy chủ ....'
        });
        loading.present();

        let httpOptions;
        if (btn.next === 'FILE') httpOptions = {'responseType'  : 'blob' as 'json'}
        this.pubService.getDynamicForm(btn.url,httpOptions)
        .then(data=>{
          //console.log(data);
          loading.dismiss();

          btn.next_data = {
            step: this.step,
            data: data,
            next: btn.next,
            item: btn.item
          }
          this.next(btn);

        })
        .catch(err=>{
          console.log('err getDynamicForm',err);
          loading.dismiss();
        })
      } else {
        this.next(btn);
      }

    } else {
      console.log('do nothing',btn);
      this.next(btn);
    }
  }

  next(btn) {

    if (btn) {
      if (btn.next == 'EXIT') {
        this.platform.exitApp();
      } else if (btn.next == 'REFRESH') {
        this.refresh(btn.next_data);
      } else if (btn.next == 'CLOSE') {
        try { this.viewCtrl.dismiss(btn.next_data) } catch (e) { }
      } else if (btn.next == 'BACK') {
        try { this.navCtrl.pop() } catch (e) { }
      } else if (
        btn.next == 'ADD' 
      || btn.next == 'SETTINGS' 
      || btn.next == 'FRIENDS' 
      || btn.next == 'NOTIFY' 
      || btn.next == 'LIKE' 
      || btn.next == 'COMMENT' 
      || btn.next == 'SHARE' 
      || btn.next == 'MORE' ) {
        if (this.callback) {
          this.callback(btn.next_data)
            .then(nextStep => this.next(nextStep));
        }
      } else if (btn.next == 'NEXT' && btn.next_data && btn.next_data.data) {
        btn.next_data.list = btn.next_data.data; //gan du lieu tra ve tu server
        console.log('next',btn);
        this.navCtrl.push(DynamicMediasPage, btn.next_data);
      }
    }
  }

}
