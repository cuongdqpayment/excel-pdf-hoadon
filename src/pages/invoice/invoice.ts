import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ItemSliding, LoadingController, Item } from 'ionic-angular';
import { DomSanitizer} from '@angular/platform-browser';

import { ApiStorageService } from '../../services/apiStorageService';
import { ApiResourceService } from '../../services/apiResourceServices'

@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html'
})
export class InvoicePage {
  @ViewChild(Slides) slides: Slides;
  slideIndex = 0;
  isSlidingItemOpen: boolean = false;

  billCycles:any = [];
  jsonInvoices: any = [];

  currentBillCycle: any = '201901'; //chu kỳ cước hiện tại
  currentCustIc: any = '';

  isSearch: boolean = false;
  searchString: string = '';
  shouldShowCancel: boolean = true;

  pdfLink:any;
  public resourceServer = ApiStorageService.resourceServer;
  constructor(private navCtrl: NavController,
              private storage: ApiStorageService, 
              private resource: ApiResourceService,
              private loadingCtrl: LoadingController,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(){
    
    this.slides.lockSwipes(true);

    this.getBillCycles();

  }



  getBillCycles(){
    let loading = this.loadingCtrl.create({
      content: 'Đang kiểm tra kỳ hóa đơn đã phát hành...'
    });
    loading.present();

    this.resource.getBillCycle()
    .then(data=>{
      this.billCycles = data;
      this.billCycles.forEach(el => {
        el.bill_cycle_vn = el.bill_cycle.slice(4,6)+"/"+el.bill_cycle.slice(0,4)
      });
      loading.dismiss();
    })
    .catch(err=>{
      this.billCycles=[];
      loading.dismiss();
    })
  }


  openSwipeOptions(slidingItem: ItemSliding, item: Item ){
    this.isSlidingItemOpen=true;
    slidingItem.setElementClass("active-sliding", true);
    slidingItem.setElementClass("active-slide", true);
    slidingItem.setElementClass("active-options-right", true);
    item.setElementStyle("transform", "translate3d(-350px, 0px, 0px)"); 
  }

  closeSwipeOptions(slidingItem: ItemSliding){
    slidingItem.close();
    slidingItem.setElementClass("active-sliding", false);
    slidingItem.setElementClass("active-slide", false);
    slidingItem.setElementClass("active-options-right", false);
    this.isSlidingItemOpen=false;
  }

  

   /**
    * Phat hanh lai hoa don/ ghi lai ngay hoa don
    * Lay danh muc chu ky tao hoa don 
    * this.billCycles.lenght>0
    * @param billCycle 
    */
  editInvoices(item: ItemSliding, billCycle:any){
    console.log(billCycle);
    //this.billCycles
    //item.close();
    this.closeSwipeOptions(item);
  }


  /**
   * tạo bản in pdf từ máy chủ
   * @param billCycle 
   */
  createPdfInvoices(item: ItemSliding, billCycle:any){
    console.log(billCycle);
    this.closeSwipeOptions(item);
  }
  
  /**
   * Lấy danh sách hóa đơn từ máy chủ
   * cho phép xem từng hóa đơn, tìm kiếm hóa đơn để kiểm tra
   * hoăc cho phép in đơn lẻ từng hóa đơn tìm được
   * hoặc in lại bản in lọc theo danh sách tìm được
   * @param billCycle 
   */
  getInvoices(item: ItemSliding, billCycle:any){
    
    this.goToSlide(1); //slide cua invoices
    let loading = this.loadingCtrl.create({
      content: 'Đang lấy danh sách chi tiết hóa đơn...'
    });
    loading.present();

    this.resource.getInvoices(billCycle.bill_cycle)
    .then(data=>{
      this.jsonInvoices = data;
      loading.dismiss();
    })
    .catch(err=>{
      this.jsonInvoices=[];
      loading.dismiss();
    })

    this.closeSwipeOptions(item);
  }


  /**
   * Tao hoa don
   */
  createInvoices(){

  }

  gotoSlideInvoices(billCycle){
    // this.getInvoices(billCycle.bill_cycle)
  }

  /**
   * 
   * @param cycleCust = yyyymm/<cust_id>
   */
  getInvoicesDetails(cycleCust){
    
    
  }

  /**
   * Đi đến slide chi tiết hóa đơn
   * để in đơn lẻ lại hóa đơn
   * @param invoice 
   */
  gotoSlideInvoicesDetail(invoice){

  }
  

  /**
   * 
   */
  createInvoice(){

    //alert roi kiem tra dieu kien de tao ky cuoc 

    /* this.resource.createInvoices({
        bill_cycle: '201901',
        bill_date: '20190120',
        invoice_no: 1,
        cust_id: undefined
    })
    .then(data=>{
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    }) */

  }
  //this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.resourceServer + "/db/pdf-invoices/201901?background=yes&&token="+this.apiStorageService.getToken());
  

  // Su dung slide Pages
  /**
   * Dieu khien slide
   * @param i 
   */
  goToSlide(i) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(i, 500);
    this.slides.lockSwipes(true);
  }

  /**
   * xac dinh slide
   */
  slideChanged() {
    this.slideIndex = this.slides.getActiveIndex();
  }

  goBack(){
    if (this.slideIndex>0) this.goToSlide(this.slideIndex - 1);
  }

  //Su dung search
  goSearch(){
    this.isSearch = true;
  }

  searchEnter(){
    this.isSearch = false;
  }

  onInput(e){
    console.log(this.searchString);
  }


  //su dung 
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

}
