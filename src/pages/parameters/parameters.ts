import { Component } from '@angular/core';
import { NavController, LoadingController, Events, ToastController, reorderArray } from 'ionic-angular';

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

  editButton: string = 'Sắp xếp';
  editing: boolean = false;

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
      //console.log(this.parameters);
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

    let types = this.parametersOrigin.filter(y=>(y.type==0&&y.description.toLowerCase().indexOf(this.searchString.toLowerCase())>=0))
    
    let typesMax = 0;
    if (types.length==1) typesMax = Math.max.apply(Math, types.map((o)=>{ return o.id}))
    
    this.parameters = this.parametersOrigin.filter(x=> typesMax ==0 || x.type == typesMax);

  }

  searchEnter(){
    this.isSearch = false;
  }

  addGroupParameters(){

  }


  toggleEdit() {
    this.editing = !this.editing;
    if (this.editing) {
      this.editButton = 'Ghi lại';
    } else {
      this.editButton = 'Sắp xếp';
      this.parameters.forEach((el,idx) => {
        console.log(el.description,el,idx,el.order_1)
      });
    }
  }

  reorderData(indexes: any) {
    this.parameters = reorderArray(this.parameters, indexes);
  }



}