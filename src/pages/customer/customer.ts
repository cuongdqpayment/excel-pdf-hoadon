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
