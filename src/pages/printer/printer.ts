import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import printJS from 'print-js';

@Component({
  selector: 'page-printer',
  templateUrl: 'printer.html'
})
export class PrinterPage {

  constructor(public navCtrl: NavController) {

  }

  printPdf() {
    printJS('/test/manual/test.pdf');
  }

  printPdfWithModal() {
      printJS({
          printable: '/test/manual/test.pdf',
          type: 'pdf',
          showModal: true
      });
  }
  
  printPdfWithModalAndCloseCallback() {
      printJS({
          printable: '/test/manual/test.pdf',
          type: 'pdf',
          showModal: true,
          onPrintDialogClose: () => console.log('The print dialog was closed'),
          onPdfOpen: () => console.log('Pdf was opened in a new tab due to an incompatible browser')
      });
  }

 printHtml() {
    printJS({
      printable: 'test',
      type: 'html'
    });
  }

 printHtmlCustomStyle() {
    const style = '@page { margin: 0 } @media print { h1 { color: blue } }'

    printJS({
      printable: 'test',
      type: 'html',
      style: style,
      scanStyles: false
    });
  }

 printHtmlCss() {
      printJS({
          printable: 'test',
          type: 'html',
          css: 'test.css',
          scanStyles: false
      });
  }

 printJson() {
    let data = [];
    for (let i=0; i <= 1000; i++){
      data.push({
        test1: this.createRandomString(),
        test2: this.createRandomString()
      });
    }

    printJS(
      {
        printable: data,
        properties: [{
          field: 'test1',
          displayName: 'test 1',
          columnSize: 1
        },{
          field: 'test2',
          displayName: 'test 2',
          columnSize: 4
        }],
        type: 'json'
      })
  }

 printStyledJson() {
      let data = [
          {
              test1: 'Test1 string',
              test2: 'Test2 string'
          },
          {
              test1: 'more Test1 string',
              test2: 'more Test2 string'
          }
      ]

      printJS({printable: data, properties: ['test1', 'test2'], type: 'json', gridStyle: 'border: 2px solid #3971A5;', gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;'})
  }

 printNestedJson() {
    let data = [];
    for (let i=0; i <= 100; i++){
      data.push({
        test1: this.createRandomString(),
        test2: {
          a: this.createRandomString()
        }
      });
    }

    printJS(
      {
        printable: data,
        properties: [{
          field: 'test1',
          displayName: 'test 1',
          columnSize: 1
        },{
          field: 'test2.a',
          displayName: 'test 2 - a',
          columnSize: 4
        }],
        type: 'json'
      })
  }

 createRandomString() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }


}
