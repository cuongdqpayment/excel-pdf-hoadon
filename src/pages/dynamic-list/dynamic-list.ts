import { Component } from '@angular/core';
import { NavController, ItemSliding, Item, Platform, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { ApiAuthService } from '../../services/apiAuthService';
import { ApiHttpPublicService } from '../../services/apiHttpPublicServices';

@Component({
  selector: 'page-dynamic-list',
  templateUrl: 'dynamic-list.html'
})
export class DynamicListPage {

  dynamicList: any; 
  dynamicListOrigin: any;
  callback: any; 
  step: any;  
  
  isSearch: boolean = false;
  searchString: string = '';
  shouldShowCancel: boolean = true;

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
    this.dynamicListOrigin = this.navParams.get("list") ? this.navParams.get("list") : {};
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
    if (newList) this.dynamicListOrigin = newList;
    this.isMobile = (this.platform.platforms()[0]==='mobile');
    this.dynamicList = this.dynamicListOrigin;
  }

// Su dung slide Pages
  //--------------------------
  /**
   * Thay đổi kiểu bấm nút mở lệnh trên item sliding
   * @param slidingItem 
   * @param item 
   */
  openSwipeOptions(slidingItem: ItemSliding, item: Item, it:any ){
    it.isSlidingItemOpen=true;
    slidingItem.setElementClass("active-sliding", true);
    slidingItem.setElementClass("active-slide", true);
    slidingItem.setElementClass("active-options-right", true);
    item.setElementStyle("transform", "translate3d(-350px, 0px, 0px)"); 
  }

  /**
   * Thay đổi cách bấm nút đóng lệnh bằng nút trên item sliding
   * @param slidingItem 
   */
  closeSwipeOptions(slidingItem: ItemSliding, it:any){
    slidingItem.close();
    slidingItem.setElementClass("active-sliding", false);
    slidingItem.setElementClass("active-slide", false);
    slidingItem.setElementClass("active-options-right", false);
    it.isSlidingItemOpen=false;
  }
  //----------- end of sliding


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

  onClick(btn){
    //console.log(btn);
    this.processCommand(btn); 
  }

  onClickDetails(item: ItemSliding, btn: any, it: any){
    this.closeSwipeOptions(item, it);
    btn.item = it;
    console.log(btn);
    this.processCommand(btn);
  }

  processCommand(btn){

    if (btn.url){
      if (btn.method==='GET'){
        let loading = this.loadingCtrl.create({
          content: 'Đang xử lý dữ liệu từ máy chủ ....'
        });
        loading.present();

        this.pubService.getDynamicForm(btn.url)
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
      }

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
      } else if (btn.next == 'ADD') {
        if (this.callback) {
          this.callback(btn.next_data)
            .then(nextStep => this.next(nextStep));
        }
      } else if (btn.next == 'EDIT') {
        if (this.callback) {
          this.callback(btn.next_data)
            .then(nextStep => this.next(nextStep));
        }
      } else if (btn.next == 'NEXT' && btn.next_data && btn.next_data.data) {
        btn.next_data.form = btn.next_data.data; //gan du lieu tra ve tu server
        this.navCtrl.push(DynamicListPage, btn.next_data);
      }
    }

  }

}