import { Component } from '@angular/core';
import { NavController, LoadingController, Events, ToastController } from 'ionic-angular';

import { ApiStorageService } from '../../services/apiStorageService';
import { ApiHttpPublicService } from '../../services/apiHttpPublicServices';

@Component({
  selector: 'page-parameters',
  templateUrl: 'parameters.html'
})

export class ParametersPage {
  
  isSearch: boolean = false;
  searchString:string='';

  parameters:any=[];
  parametersOrigin:any=[];

  constructor(private navCtrl: NavController, 
              private apiStorageService: ApiStorageService,
              private http: ApiHttpPublicService,
              private events: Events,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {}

  ngOnInit() {    
    let loading = this.loadingCtrl.create({
      content: 'Đang lấy danh sách tham số...'
    });
    loading.present();

    this.http.getParamters()
    .then(parameters=>{
      this.parametersOrigin = parameters;
      this.parameters = this.parametersOrigin;
      loading.dismiss();
    })
    .catch(err=>{
      this.parameters = [];
      this.parametersOrigin = [];
      loading.dismiss();
    })
  }

  goSearch(){
    this.isSearch = true;
  }

  onInput(e){
    //tim va loc nhom tham so theo ten  
  }

  searchEnter(){
    this.isSearch = false;
  }

  addGroupParameters(){

  }




}