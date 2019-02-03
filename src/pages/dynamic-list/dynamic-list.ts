import { Component } from '@angular/core';
import { NavController, ItemSliding, Item, Platform } from 'ionic-angular';

@Component({
  selector: 'page-dynamic-list',
  templateUrl: 'dynamic-list.html'
})
export class DynamicListPage {

  dynamicList: any = {
    title:"CÁC KỲ HÓA ĐƠN ĐÃ PHÁT HÀNH"
    , search_bar:{hint:"Tìm kiếm cái gì thích"}
    , buttons: [
        { next: "NEW", url: "https://qld-invoices.herokuapp.com/db/json-parameters", color:"primary", icon:"add"}
      , { next: "CALLBACK", url: "https://qld-invoices.herokuapp.com/db/json-parameters", color:"primary", icon:"more"}
    ]
    , items: [
      {icon: "calculator"
      , color: "danger"
      , h1: "Tiêu đề H1"
      , h2: "Chương h2"
      , p: "Đoạn văn bản gggjkh k hhjk jkh jhlhhh jhjhjhjhjh hjh hj hjhj hjh jh jhjhjh jhjh jhj hj jhjh j h g hgf kkk cuong da"
      , note: "ghi chú chỉ thị nho nhỏ"
      , options: [
        {name:"Phát hành lại", icon:"calculator", color: "danger"}
        , {name:"Tạo bản in", icon:"print", color: "primary"}
        , {name:"Xem danh sách", icon:"list-box", color: "secondary"}
      ]}
      ,{icon: "calculator", color: "danger", h1: "Dòng số 2", h2: "Chương h2", p: "Đoạn văn bản", note: "ghi chú chỉ thị nho nhỏ"
      , options: [
        {name:"Phát hành lại", icon:"calculator", color: "danger"}
        , {name:"Tạo bản in", icon:"print", color: "primary"}
        , {name:"Xem danh sách", icon:"list-box", color: "secondary"}
      ]}
    ]
  }
  
  isSearch: boolean = false;
  searchString: string = '';
  shouldShowCancel: boolean = true;

  isMobile: boolean = false;

  constructor(  private navCtrl: NavController
              , private platform: Platform
             ) {}

  ngOnInit(){
    this.isMobile = (this.platform.platforms()[0]==='mobile');
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

  }

  onClickDetails(item: ItemSliding,btn: any, it: any){
    this.closeSwipeOptions(item, it);
  }

}
