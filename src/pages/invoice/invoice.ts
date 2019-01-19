import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ItemSliding, LoadingController, Item, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { DomSanitizer} from '@angular/platform-browser';

import { ApiStorageService } from '../../services/apiStorageService';
import { ApiResourceService } from '../../services/apiResourceServices'


//bien dinh nghia loai slide page kieu javascript
var slidePage = {
  home: 0,
  create_invoice: 1,
  list_invoice: 2
}


@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html'
})
export class InvoicePage {
  @ViewChild(Slides) slides: Slides;
  slideIndex = 0;
  isSlidingItemOpen: boolean = false;

  cycleFormGroup: FormGroup;

  billCycles:any = [];
  jsonInvoices: any = [];
  current_cycle:any;

  currentBillCycle: any = '201901'; //chu kỳ cước hiện tại
  currentCustIc: any = '';

  isSearch: boolean = false;
  searchString: string = '';
  shouldShowCancel: boolean = true;

  pdfLink:any;
  public resourceServer = ApiStorageService.resourceServer;
  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private storage: ApiStorageService, 
              private resource: ApiResourceService,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(){
    
    this.slides.lockSwipes(true);

    this.cycleFormGroup = this.formBuilder.group({
      bill_cycle: [new Date().toLocaleString("en-GB").slice(3,10),
        [ 
          Validators.required,
          Validators.pattern("/^([0-9]{2})\/([0-9]{4})/"),
        ]]
      ,
      bill_date: [new Date().toLocaleString("en-GB").slice(0,10),
            [
              Validators.required,
              Validators.pattern(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})/),
            ]]
      ,
      invoice_no: ['1',
            [
              Validators.required,
              Validators.pattern("^[0-9]*$"),
              Validators.maxLength(9)]]
      ,
    })

    this.getBillCycles();

  }


  getBillCycles(){
    let loading = this.loadingCtrl.create({
      content: 'Đang kiểm tra các kỳ hóa đơn đã phát hành...'
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

  /**
   * Phat hanh hoa don moi
   */
  createInvoices(){
    this.cycleFormGroup = this.formBuilder.group({
      bill_cycle: [new Date().toLocaleString("en-GB").slice(3,10),
            [ 
              Validators.required,
              Validators.pattern(/^([0-9]{2})\/([0-9]{4})/),
            ]]
      ,
      bill_date: [new Date().toLocaleString("en-GB").slice(0,10),
            [
              Validators.required,
              Validators.pattern(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})/),
            ]]
      ,
      invoice_no: ['1',
            [
              Validators.required,
              Validators.pattern("^[0-9]*$"),
              Validators.maxLength(9)]]
      ,
    })

    this.goToSlide(slidePage.create_invoice); 
  }

   /**
    * Phat hanh lai hoa don/ ghi lai ngay hoa don
    * Lay danh muc chu ky tao hoa don 
    * this.billCycles.lenght>0
    * @param billCycle 
    */
  editInvoices(item: ItemSliding, billCycle:any){
    
    //this.current_cycle = billCycle.bill_cycle_vn;

    this.cycleFormGroup = this.formBuilder.group({
      bill_cycle: [billCycle.bill_cycle_vn,
            [ 
              Validators.required,
              Validators.pattern(/^([0-9]{2})\/([0-9]{4})/),
            ]]
      ,
      bill_date: [new Date().toLocaleString("en-GB").slice(0,10),
            [
              Validators.required,
              Validators.pattern(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})/),
            ]]
      ,
      invoice_no: ['1',
            [
              Validators.required,
              Validators.pattern("^[0-9]*$"),
              Validators.maxLength(9)]]
      ,
    })

    this.goToSlide(slidePage.create_invoice); 
    this.closeSwipeOptions(item);
    
  }
  
  /**
   * Phát hành hóa đơn tháng, ngày phát hành
   */
  onSubmitCreateInvoices(){
    let billCycle = {
      bill_cycle:this.cycleFormGroup.value.bill_cycle.slice(3,7)
      +this.cycleFormGroup.value.bill_cycle.slice(0,2)
      , bill_date: this.cycleFormGroup.value.bill_date.slice(6,10)
      +this.cycleFormGroup.value.bill_date.slice(3,5)
      +this.cycleFormGroup.value.bill_date.slice(0,2)
      , invoice_no:this.cycleFormGroup.value.invoice_no
    }

    //console.log('billCycle OUT',billCycle);
    this.presentConfirm({
      cancel_text:'Bỏ qua',
      ok_text: 'Đồng ý',
      title:'Xác nhận phát hành hóa đơn',
      message:'Tháng: ' + this.cycleFormGroup.value.bill_cycle + '<br>'
              + 'Ngày phát hành: ' + this.cycleFormGroup.value.bill_date + '<br>'
              + 'Với số hóa đơn bắt đầu từ: ' + this.cycleFormGroup.value.invoice_no,
      ok:(isOK)=>{
        if (isOK){
          this.callCreateInvoices(billCycle);
        }
      }
    })
    
  }

  callCreateInvoices(billCycle){
    
    let loading = this.loadingCtrl.create({
      content: 'Đang phát hành hóa đơn tháng: ' 
      + this.cycleFormGroup.value.bill_cycle + '<br>'
      + ' với ngày phát hành: ' +  this.cycleFormGroup.value.bill_date + '<br>'
      + ' từ số hóa đơn: ' +  this.cycleFormGroup.value.invoice_no
    });

    loading.present();

    this.resource.createInvoices(billCycle)
    .then(result=>{
      let tmpResult;
      tmpResult = result;
      if (tmpResult&&tmpResult.status&&tmpResult.data){
        console.log('data',tmpResult.data);
        this.presentAlert({
          cancel_text:'Bỏ qua',
          ok_text: 'Xong',
          title:'ĐÃ PHÁT HÀNH XONG',
          message:'Tháng: ' + tmpResult.data.bill_cycle?tmpResult.data.bill_cycle.slice(4,6)+'/'+tmpResult.data.bill_cycle.slice(0,4):'' + '<br>'
                  + 'Ngày phát hành: ' + tmpResult.data.bill_date?tmpResult.data.bill_date.slice(6,8)+'/'+tmpResult.data.bill_date.slice(4,6)+'/'+tmpResult.data.bill_date.slice(0,4):'' + '<br>'
                  + 'Số lượng phát hành: ' + tmpResult.data.count + '<br>'
                  + 'Số hóa đơn lần tiếp theo: ' + tmpResult.data.invoice_no,
        });
        //tro ve home de xem ky cuoc
        this.getBillCycles(); //goi lay lai cac ky cuoc da 

      }
      this.goToSlide(slidePage.home);
      loading.dismiss();
    })
    .catch(err=>{
      console.log('error',err);

      this.goToSlide(slidePage.home);
      loading.dismiss();
    })
  }
  /**
   * tạo bản in pdf từ máy chủ
   * @param billCycle 
   */
  createPdfInvoices(item: ItemSliding, billCycle:any){
    
    this.goToSlide(slidePage.create_invoice); 
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
    
    this.goToSlide(slidePage.list_invoice); 
    
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
  //--------------------------
  /**
   * Thay đổi kiểu bấm nút mở lệnh trên item sliding
   * @param slidingItem 
   * @param item 
   */
  openSwipeOptions(slidingItem: ItemSliding, item: Item ){
    this.isSlidingItemOpen=true;
    slidingItem.setElementClass("active-sliding", true);
    slidingItem.setElementClass("active-slide", true);
    slidingItem.setElementClass("active-options-right", true);
    item.setElementStyle("transform", "translate3d(-350px, 0px, 0px)"); 
  }

  /**
   * Thay đổi cách bấm nút đóng lệnh bằng nút trên item sliding
   * @param slidingItem 
   */
  closeSwipeOptions(slidingItem: ItemSliding){
    slidingItem.close();
    slidingItem.setElementClass("active-sliding", false);
    slidingItem.setElementClass("active-slide", false);
    slidingItem.setElementClass("active-options-right", false);
    this.isSlidingItemOpen=false;
  }
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


  //----------------
  presentConfirm(jsonConfirm) {
    let alert = this.alertCtrl.create({
      title: jsonConfirm.title, //'Xác nhận phát hành',
      message: jsonConfirm.message, //'Bạn muốn ',
      buttons: [
        {
          text: jsonConfirm.cancel_text, //Bỏ qua
          role: 'cancel',
          handler: () => {
            if (jsonConfirm.ok) jsonConfirm.ok(false);
          }
        },
        {
          text: jsonConfirm.ok_text,//'Đồng ý',
          handler: () => {
            if (jsonConfirm.ok) jsonConfirm.ok(true);
          }
        }
      ]
    });
    alert.present();
  }

  presentAlert(jsonConfirm) {
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
