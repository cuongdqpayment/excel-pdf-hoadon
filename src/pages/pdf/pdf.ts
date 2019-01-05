import { Component } from '@angular/core';
import { NavController, Events, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html'
})

export class PdfPage {

  constructor(private navCtrl: NavController,
    private toastCtrl: ToastController) { }

  ngOnInit() {

  }

  createPdf() {
    //mo file pdf view ra thoi
  }

}