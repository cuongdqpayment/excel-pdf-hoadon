import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiHttpPublicService } from '../../services/apiHttpPublicServices'


@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html'
})
export class CustomerPage {
  customers:any = [];
  customersOrigin:any = [];
  isSearch: boolean = false;
  searchString:string='';
  maxCurrentId:number=0;

  constructor(
              private navCtrl: NavController,
              private http: ApiHttpPublicService
              ) {

  }

  ngOnInit(){
    this.getCustomers();
  }

  getCustomers(){

    this.http.getAllCutomers()
    .then(customers=>{
      this.customersOrigin = customers;
      this.customers = this.customersOrigin;
      //tim gia tri max cua ma khach hang
      this.maxCurrentId = Math.max.apply(Math, this.customersOrigin.map((o)=>{return o.stt}));
      console.log('MAX Ma khach hang',this.maxCurrentId);
    })
    .catch(err=>{
      this.customersOrigin = [];
      this.customers =  [];
    })

  }

  goSearch(){
    this.isSearch = true;
  }

  onInput(e){
    this.customers = this.customersOrigin.filter(x=>(
      x.full_name.toLowerCase().indexOf(this.searchString.toLowerCase())>=0
      ||
      x.cus_id.toLowerCase().indexOf(this.searchString.toLowerCase())>=0
      ||
      x.area.toLowerCase().indexOf(this.searchString.toLowerCase())>=0
      ||
      x.staff.toLowerCase().indexOf(this.searchString.toLowerCase())>=0
      ||
      (x.phone&&x.phone.indexOf(this.searchString)>=0)
      ))
  }

  searchEnter(){
    this.isSearch = false;
  }

}
