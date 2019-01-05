import { Component } from '@angular/core';
import { NavController, Events, ToastController } from 'ionic-angular';

import PDFDocument from 'pdfkit';
import blobStream  from 'blob-stream';

@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html'
})

export class PdfPage {
  
  constructor(private navCtrl: NavController, 
              private toastCtrl: ToastController) {}

  ngOnInit() {    
   
  }

  createPdf(){
    console.log(PDFDocument);
    console.log(blobStream);


  }

}