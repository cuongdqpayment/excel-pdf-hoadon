import { Component } from '@angular/core';
import { CustomerPage } from '../customer/customer';
import { InvoicePage } from '../invoice/invoice';
import { ReportPage } from '../report/report';
import { DynamicListPage } from '../dynamic-list/dynamic-list';
import { NavController, ModalController, Platform, AlertController, LoadingController } from 'ionic-angular';
import { DynamicPage } from '../dynamic/dynamic';
import { DynamicReponsivePage } from '../dynamic-reponsive/dynamic-reponsive';
import { ApiResourceService } from '../../services/apiResourceServices';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs: any = [
    {
      root: DynamicListPage,
      title: 'Dynamic',
      icon: 'contacts'
    },
    {
      root: CustomerPage,
      title: 'Khách hàng',
      icon: 'contacts',
      params:{}
    },
    {
      root: InvoicePage,
      title: 'Hóa đơn',
      icon: 'list-box',
      params:{}
    },
    {
      root: ReportPage,
      title: 'Báo cáo',
      icon: 'document',
      params:{}
    }
  ];

  constructor(private navCtrl: NavController
            , private modalCtrl: ModalController
            , private platform: Platform
            , private alertCtrl: AlertController
            , private loadingCtrl: LoadingController
            , private resource: ApiResourceService
  ) {
    //console.log('1. constructor tabs')
  }
  
  ngOnInit(){
    //console.log('2. ngOnInit tabs')

    this.tabs[0].params = {
      step:'bill-cycle',
      callback: this.callbackList,
      call_waiting_data: this.callWaiting
    }

  }

  ionViewDidLoad() {
    //console.log('3. ionViewDidLoad tabs')
  }

  ionViewWillEnter(){
    //console.log('4. ionViewWillEnter tabs')
  }

  /**
   * ham lay du lieu dynamic-list asyn delay
   */
  callWaiting = ()=>{
    return new Promise((resolve, reject) => {
      this.getBillCycles()
      .then(result=>{
        resolve(this.convertResult2DynamicList(result))     
      })
      .catch(err=>{console.log('err',err)});
      })
  }

  callbackList = (res?:{step?:string,data?:any, next?:string, item?:any, error?:any}) => {
    return new Promise((resolve, reject) => {
      console.log('callback tabs', res);

      for (let key in res.item){
        let editItemValue = res.data.items.find(x=>x.key==key);
        if (editItemValue){
          //console.log('editItemValue', key, res.item[key] , editItemValue);
          editItemValue.value = res.item[key];
        }
      }

      //xu ly xong thi dismiss
      this.openModal({
        callback: this.callbackForm
        , step:'add-bill-cycle'
        , form: res.data
      })
      .then(data=>{
        console.log('modal dismiss()', data);
        //giai quyet xong form modal, tra ve form dynamic-list -- refresh lay lai ds sau khi them, sua
        resolve({
          next: 'REFRESH'
          , next_data: data //tra du lieu ve cho form, du lieu nay la danh sach moi can view
        }); 
      })
      .catch(err=>reject(err));
      
    });
  }

  callbackForm = (res?:{step?:string,data?:any,error?:any}) => {
    return new Promise((resolve, reject) => {
      //console.log('callback callbackForm', res);
      if (res.step==='add-bill-cycle'&& res.data && res.data.bill_cycle && res.data.bill_date){
        let billCycle = {
          bill_cycle: res.data.bill_cycle.replace(/-/g, '')//res.data.bill_cycle.slice(0,4) + res.data.bill_cycle.slice(5,7)
          , bill_date: res.data.bill_date.replace(/-/g, '')//res.data.bill_date.slice(0,4) + res.data.bill_date.slice(5,7) + res.data.bill_date.slice(8,10)
          , invoice_no: res.data.invoice_no
        }
    
        console.log('billCycle OUT',billCycle);
        this.presentConfirm({
          cancel_text:'Bỏ qua',
          ok_text: 'Đồng ý',
          title:'Xác nhận phát hành hóa đơn',
          message:'Tháng: ' + res.data.bill_cycle + '<br>'
                  + 'Ngày phát hành: ' + res.data.bill_date + '<br>'
                  + 'Với hóa đơn bắt đầu từ số: ' + res.data.invoice_no,
          ok:(isOK)=>{
            if (isOK){
              this.callCreateInvoices(billCycle)
              .then(rtrn=>{
                console.log('Tao xong ky cuoc:',rtrn);
                //tro ve home de xem ky cuoc
                this.getBillCycles()
                .then(result=>{
                  resolve({
                    next:"CLOSE" //DISMISS THIS FORM
                    , next_data: this.convertResult2DynamicList(result) //RETURN PARAM FOR PARENT
                  });
                })
                .catch(err=>reject(err)); 
    
              })
              .catch(err=>{
                reject(err);
              });
            }
          }
        })
      }
      
      
    });
  }

  
  openModal(data) {

    return new Promise( (resolve, reject) => { 
      let formPopup:any;
     
      if (this.platform.is('core')){
        formPopup = DynamicReponsivePage;
      }else{
        formPopup = DynamicPage;
      }

      let modal = this.modalCtrl.create(formPopup, data);
          modal.onDidDismiss(data=>{
            resolve(data);
          })
      modal.present();
    })
    
  }


  presentConfirm(jsonConfirm:{title:string,message:string,cancel_text:string,ok_text:string,ok:any}) {
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

  presentAlert(jsonConfirm:{title:string,message:string,ok_text:string}) {
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


  // cac ham rieng thuc hien chuc nang he thong nay
  /**
   * Goi API de phat hanh hoa don theo thang
   * @param billCycle 
   */
  callCreateInvoices(billCycle){

    return new Promise((resolve, reject) => {

      let loading = this.loadingCtrl.create({
        content: 'Đang phát hành hóa đơn <br>' 
        + JSON.stringify(billCycle)
      });
      loading.present();

      this.resource.createInvoices(billCycle)
      .then(result=>{
        if (result&&result.status&&result.data){
          //console.log('data',result.data);
          this.presentAlert({
            ok_text: 'Xong',
            title:'ĐÃ PHÁT HÀNH XONG',
            message:'Tháng: ' + (result.data.bill_cycle?result.data.bill_cycle.slice(4,6)+'/'+result.data.bill_cycle.slice(0,4):'') + '<br>'
                    + 'Ngày phát hành: ' + (result.data.bill_date?result.data.bill_date.slice(6,8)+'/'+result.data.bill_date.slice(4,6)+'/'+result.data.bill_date.slice(0,4):'') + '<br>'
                    + 'Số lượng phát hành: ' + result.data.count + '<br>'
                    + 'Số hóa đơn lần tiếp theo: ' + result.data.invoice_no,
          });
          resolve(result);
        }
        loading.dismiss();
      })
      .catch(err=>{
        loading.dismiss();
        reject(err);
      })
    })
  }

  getBillCycles(){

    return new Promise((resolve, reject) => {
      let loading = this.loadingCtrl.create({
        content: 'Đang kiểm tra các kỳ hóa đơn đã phát hành...'
      });
      loading.present();
  
      this.resource.getBillCycle()
      .then(billCycles=>{
        billCycles.forEach(el => {
          el.bill_cycle_vn = el.bill_cycle.slice(4,6)+"/"+el.bill_cycle.slice(0,4)
          el.bill_date_vn = el.bill_date.slice(6,8)+"/"+el.bill_date.slice(4,6)+"/"+el.bill_date.slice(0,4)
        });
        let lastBillCycle;
        let maxBillCycle = Math.max.apply(Math, billCycles.map((o)=>{ return o['bill_cycle']}));
        if (typeof maxBillCycle == 'number') lastBillCycle = billCycles.find(x=>x.bill_cycle===maxBillCycle.toString()); 
        //console.log('lastBillCycle', lastBillCycle ); 
        loading.dismiss();
        resolve({
            last_bill_cycle: lastBillCycle,
            bill_cycles : billCycles
          })
      })
      .catch(err=>{
        loading.dismiss();
        reject(err);
      })
    })
  }

  convertResult2DynamicList(result){
    let items = [];
    result.bill_cycles.forEach(el=>{
      items.push({
         bill_cycle: el.bill_cycle.slice(0,4) + '-' + el.bill_cycle.slice(4,6)
         , bill_date: el.bill_date.slice(0,4) + '-' + el.bill_date.slice(4,6) + '-' + el.bill_date.slice(6,8) 
         , invoice_no: el.invoice_no_min
        , icon: "calculator"
        , color: "danger"
        , h1: "Tháng " + el.bill_cycle_vn
        , h2: "Số lượng khách hàng " + el.count_customer
        , p: "Từ hóa đơn số " + el.invoice_no_min + " đến số " + el.invoice_no
        , note: "ngày " + el.bill_date_vn
        , options: [
          { name:"Phát hành lại", icon:"calculator", color: "danger", next: "EDIT", url: "assets/data/form-add-billcycle.json", method:"GET"}
          , {name:"Tạo bản in", icon:"print", color: "primary"}
          , {name:"Xem danh sách", icon:"list-box", color: "secondary"}
        ]
      })
    })
    return {
      title:"CÁC KỲ HÓA ĐƠN ĐÃ PHÁT HÀNH"
      , buttons: [
          { next: "ADD", url: "assets/data/form-add-billcycle.json", method:"GET", color:"primary", icon:"add"}
      ]
      , items: items
    }
  }
}
