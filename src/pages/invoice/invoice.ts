import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer} from '@angular/platform-browser';

import { ApiStorageService } from '../../services/apiStorageService';

@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html'
})
export class InvoicePage {
  pdfLink:any;
  public resourceServer = ApiStorageService.apiServer;
  constructor(private navCtrl: NavController,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(){
    this.getInvoices();
  }

  getInvoices(){
    this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.resourceServer + "/db/pdf-invoices");
  }
}
