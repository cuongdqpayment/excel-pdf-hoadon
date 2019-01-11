import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiAuthService } from '../../services/apiAuthService';

@Component({
  selector: 'page-login-isdn',
  templateUrl: 'login-isdn.html'
})
export class LoginIsdnPage {

  myFormGroup: FormGroup;
  constructor( private formBuilder: FormBuilder,
               private auth : ApiAuthService,
               private navCtrl: NavController) {
    this.myFormGroup = this.formBuilder.group({
      number: ['',
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
          phoneNumberValidator,
          Validators.minLength(9),
          Validators.maxLength(9)]],
    })
  }
  onSubmit() {
    var a = this.myFormGroup.value.number;
    this.auth.sendSMS(a,'my key ' + a)
    .then(data=>{
      let a;
      a = data;
      let b = JSON.parse(a);
      console.log('data',b);

      
    })
    .catch(err=>{
      console.log('err',err);

    })
  }
}
function phoneNumberValidator(formControl: FormControl) {
  if (formControl.value.charAt(0) != "0") return null;
  else return { phoneNumber: true };
}