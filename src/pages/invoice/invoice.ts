import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { DomSanitizer} from '@angular/platform-browser';

import { ApiStorageService } from '../../services/apiStorageService';

@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html'
})
export class InvoicePage {
  @ViewChild(Slides) slides: Slides;
  slideIndex = 0;


  pdfLink:any;
  public resourceServer = ApiStorageService.resourceServer;
  constructor(private navCtrl: NavController,
              private apiStorageService: ApiStorageService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(){
    //this.getInvoices();
  }

  readInvoices(){

  }
  
  getInvoices(){
    this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.resourceServer + "/db/pdf-invoices/201901?background=yes&&token="+this.apiStorageService.getToken());
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
    this.goToSlide(0);
  }
}
