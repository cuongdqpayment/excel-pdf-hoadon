import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
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

  billCycles:any = [];
  jsonInvoices: any = [];

  currentBillCycle: any = '201901'; //chu kỳ cước hiện tại
  currentCustIc: any = '';


  pdfLink:any;
  public resourceServer = ApiStorageService.resourceServer;
  constructor(private navCtrl: NavController,
              private storage: ApiStorageService, 
              private resource: ApiResourceService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(){
    this.getBillCycles();
  }

  getBillCycles(){
    this.resource.getBillCycle()
    .then(data=>{
      this.billCycles = data;
    })
    .catch(err=>{
      this.billCycles=[];
    })
  }


  gotoSlideInvoices(billCycle){
    this.getInvoices(billCycle.bill_cycle)
  }

  /**
   * 
   * @param cycleCust = yyyymm/<cust_id>
   */
  getInvoices(cycleCust){
    
    this.goToSlide(1); //slide cua invoices

    this.resource.getInvoices(cycleCust)
    .then(data=>{
      this.jsonInvoices = data;

    })
    .catch(err=>{
      this.jsonInvoices=[];

    })
  }

  /**
   * Đi đến slide chi tiết hóa đơn
   * để in đơn lẻ lại hóa đơn
   * @param invoice 
   */
  gotoSlideInvoicesDetail(invoice){

  }
  

  /**
   * Tạo file pdf dựa vào kỳ hiện tại và khách hàng chọn hiện tại
   * lấy kết quả trả về cho khách hàng là file pdf
   */
  createPdfInvoices(){

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
    this.goToSlide(0);
  }
}
