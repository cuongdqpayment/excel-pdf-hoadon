
import { Component } from '@angular/core';
import { CustomerPage } from '../customer/customer';
import { ReportPage } from '../report/report';
import { DynamicListPage } from '../dynamic-list/dynamic-list';
import { NavController, ModalController, Platform, AlertController, LoadingController } from 'ionic-angular';
import { DynamicFormMobilePage } from '../dynamic-form-mobile/dynamic-form-mobile';
import { DynamicFormWebPage } from '../dynamic-form-web/dynamic-form-web';
import { ApiResourceService } from '../../services/apiResourceServices';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DynamicCardPage } from '../dynamic-card/dynamic-card';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs: any = [
    {
      root: HomePage,
      title: 'Home',
      icon: 'home'
    },
    {
      root: DynamicListPage,
      title: 'Hóa đơn',
      icon: 'list-box'
    },
    {
      root: CustomerPage,
      title: 'Khách hàng',
      icon: 'contacts',
      params:{}
    },
    {
      root: DynamicCardPage,
      title: 'Chi tiết',
      icon: 'apps'
    }
  ];

  constructor(private navCtrl: NavController
            , private modalCtrl: ModalController
            , private inAppBrowser: InAppBrowser
            , private platform: Platform
            , private alertCtrl: AlertController
            , private loadingCtrl: LoadingController
            , private resource: ApiResourceService
  ) {
    //console.log('1. constructor tabs')
  }
  
  ngOnInit(){
    //console.log('2. ngOnInit tabs')

    this.tabs[1].params = {
      parent: this,
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
  callWaiting(that){
    return new Promise((resolve, reject) => {
      that.getBillCycles()
      .then(result=>{
        resolve(that.convertResult2DynamicList(result))     
      })
      .catch(err=>{console.log('err',err)});
      })
  }


  
  /**
   * Ham goi lai khi cac lenh yeu cau xu ly ben ngoai
   * ADD, EDIT, PDF, ...
   */
  callbackList( that, res?:{step?:string,data?:any, next?:string, item?:any, error?:any}){
    
    return new Promise((resolve, reject) => {
      console.log('that:', that);
      
      console.log('callback tabs', res);
      
      if (res.next == 'ADD' || res.next == 'EDIT'){
        
        //neu co item de gan du lieu ban dau thi gan lai EDIT
        for (let key in res.item){
          let editItemValue = res.data.items.find(x=>x.key==key);
          if (editItemValue){
            //console.log('editItemValue', key, res.item[key] , editItemValue);
            editItemValue.value = res.item[key];
          }
        }

        //xu ly xong thi dismiss
        that.openModal({
          parent: that,
          callback: that.callbackForm
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

      } else if (res.next == 'PDF' && res.data) {
        
        console.log ('Mo file');

        let file = new Blob([res.data], { type: 'application/pdf' });            
        var fileURL = URL.createObjectURL(file);
        const browser1 = that.inAppBrowser.create(fileURL,'_blank', 'hideurlbar=no,location=no,toolbarposition=top');
      
      } else if (res.next == 'LIST' && res.data) {
        
        console.log ('new list : ', that.convertResult2DynamicListDetails(res.data));

        that.navCtrl.push(DynamicListPage,{
          parent: that,
          step:'invoice-list',
          callback: that.callbackListInvoice,
          list : that.convertResult2DynamicListDetails(res.data)
        })

      }

      
    });
  }

  //xu ly list cua invoice
  callbackListInvoice(that,res?:{step?:string,data?:any, next?:string, item?:any, error?:any}){
  
    return new Promise((resolve, reject) => {
      
      console.log('callbackListInvoice', res);
      
      if (res.next == 'EDIT' && res.item){
        //phat hanh don le hoa don cho khach hang
        //cho phep soan lai ngay phat hanh, so hoa don
 
      } else if (res.next == 'PDF' && res.data) {
        //tao pdf don le tung hoa don
        
      } else if (res.next == 'VIEW' && res.item) {
        //hien thi chi tiet cua mot item

      }

      
    });

  }

  callbackForm = (that, res?:{step?:string,data?:any,error?:any}) => {
    return new Promise((resolve, reject) => {
      //console.log('callback callbackForm', res);
      if (res.step==='add-bill-cycle'&& res.data && res.data.bill_cycle && res.data.bill_date){
        let billCycle = {
          bill_cycle: res.data.bill_cycle.replace(/-/g, '')//res.data.bill_cycle.slice(0,4) + res.data.bill_cycle.slice(5,7)
          , bill_date: res.data.bill_date.replace(/-/g, '')//res.data.bill_date.slice(0,4) + res.data.bill_date.slice(5,7) + res.data.bill_date.slice(8,10)
          , invoice_no: res.data.invoice_no
        }
    
        console.log('billCycle OUT',billCycle);
        that.presentConfirm({
          cancel_text:'Bỏ qua',
          ok_text: 'Đồng ý',
          title:'Xác nhận phát hành hóa đơn',
          message:'Tháng: ' + res.data.bill_cycle + '<br>'
                  + 'Ngày phát hành: ' + res.data.bill_date + '<br>'
                  + 'Với hóa đơn bắt đầu từ số: ' + res.data.invoice_no,
          ok:(isOK)=>{
            if (isOK){
              that.callCreateInvoices(billCycle)
              .then(rtrn=>{
                console.log('Tao xong ky cuoc:',rtrn);
                //tro ve home de xem ky cuoc
                that.getBillCycles()
                .then(result=>{
                  resolve({
                    next:"CLOSE" //DISMISS that FORM
                    , next_data: that.convertResult2DynamicList(result) //RETURN PARAM FOR PARENT
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
        formPopup = DynamicFormWebPage;
      }else{
        formPopup = DynamicFormMobilePage;
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
          , {name:"Tạo bản in", icon:"print", color: "primary", next: "PDF", url: "https://qld-invoices.herokuapp.com/db/pdf-invoices/"+el.bill_cycle, method:"GET"}
          , {name:"Xem danh sách", icon:"list-box", color: "secondary", next: "LIST", url: "https://qld-invoices.herokuapp.com/db/json-invoices/"+el.bill_cycle, method:"GET"}
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

  convertResult2DynamicListDetails(results){
    let items = [];
    results.forEach(el=>{
      items.push({
         cust_id: el.cust_id
         , bill_date: el.bill_date
         , invoice_no: el.invoice_no
        , icon: "contact"
        , color: "secondary"
        , h1: (this.platform.is('core')?"Tên khách hàng: ":"") + el.full_name
        , h2: (this.platform.is('core')?"Địa chỉ: ":"") + el.address
        , p: (this.platform.is('core')?"Số tiền: ":"") + el.sum_charge + " (" + el.bill_sum_charge_spell+")"
        , note: el.invoice_no + "-" + el.bill_date.slice(6,8) + '/' + el.bill_date.slice(4,6) + '/' + el.bill_date.slice(0,4)  
        , options: [
          { name:"Phát hành lẻ", icon:"calculator", color: "danger", next: "EDIT", }
          , {name:"In đơn lẻ", icon:"print", color: "primary", next: "PDF", url: "https://qld-invoices.herokuapp.com/db/pdf-invoices/"+el.bill_cycle + "/"+ el.cust_id , method:"GET"}
          , {name:"Xem chi tiết", icon:"list-box", color: "secondary", next: "VIEW", }
        ]
      })
    })
    return {
      title:"Danh sách hóa đơn đã phát hành"
      , buttons: [
          { next: "BACK", color:"primary", icon:"arrow-round-back"}
      ]
      , items: items
    }
  }

}
