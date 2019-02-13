import { Component, ViewChild, Renderer } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html'
})
export class SignaturePage {
  @ViewChild('myCanvas') canvas: any;

  signatureForm:any = {
    //title:"Ký",
    colors: [
      'dr-dark'
      ,'dr-green'
      ,'dr-blue'
      ,'dr-vilolet'
      ,'dr-orange'
      ,'dr-red'          
    ]
    ,buttons:[
      {color:"primary", icon:"add", next:"ADD"}
      , {color:"primary", icon:"contacts", next:"FRIENDS"}
      , {color:"primary", icon:"notifications", next:"NOTIFY"
      , alerts:[
        "cuong.dq"
      ]
    }
    , {color:"royal", icon:"cog", next:"SETTINGS"}
  ]
  ,brushes:[
            {size:5, color:"dark", style:"0.25em", icon:"radio-button-on"}
            ,{size:10, color:"dark", style:"0.5em", icon:"radio-button-on"}
            ,{size:20, color:"dark", style:"1em", icon:"radio-button-on"}
            ,{size:50, color:"dark", style:"2em", icon:"radio-button-on"}
            ,{size:100, color:"dark", style:"3em", icon:"radio-button-on"}
  ]
}

  canvasElement: any;
  lastX: number;
  lastY: number;

  currentColor: string;
  brushSize: number;

  constructor(
    private platform: Platform
    , private renderer: Renderer
    , private navCtrl: NavController) {
    
  }

  ngOnInit(){
    console.log('ngOnInit()');

    this.currentColor = this.signatureForm.colors[0];
    this.brushSize = this.signatureForm.brushes[0];
    
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
    this.canvasElement = this.canvas.nativeElement;
    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform.width() + '');
    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform.height() + '');
  }

  changeColor(color) {
    this.currentColor = color;
    this.signatureForm.brushes.forEach(el => {
      el.color = color;
    });
  }

  changeSize(size) {
    this.brushSize = size;
  }

  handleStart(ev) {
    console.log(ev,this.canvasElement.width);
    this.lastX = ev.touches[0].pageX;
    this.lastY = ev.touches[0].pageY;
  }

  handleMove(ev) {

    let ctx = this.canvasElement.getContext('2d');
    let currentX = ev.touches[0].pageX;
    let currentY = ev.touches[0].pageY;

    ctx.beginPath();
    ctx.lineJoin = "round";
    ctx.moveTo(this.lastX, this.lastY);
    ctx.lineTo(currentX, currentY);
    ctx.closePath();
    ctx.strokeStyle = this.currentColor;
    ctx.lineWidth = this.brushSize;
    ctx.stroke();

    this.lastX = currentX;
    this.lastY = currentY;
  }
  clearCanvas() {
    let ctx = this.canvasElement.getContext('2d');
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }

  showImage() {
   
  }
}