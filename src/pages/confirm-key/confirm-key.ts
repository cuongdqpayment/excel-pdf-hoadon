import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-confirm-key',
  templateUrl: 'confirm-key.html',
})
export class ConfirmKeyPage {

  myFormGroup: FormGroup;
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController) {
    this.myFormGroup = this.formBuilder.group({
      code: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ]
      ],
    })
  }
  onSubmit(){
    console.log(this.myFormGroup.value);
  }

}
