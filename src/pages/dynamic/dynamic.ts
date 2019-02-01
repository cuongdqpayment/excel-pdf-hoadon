import { Component, } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Platform } from 'ionic-angular';
import { ApiHttpPublicService } from '../../services/apiHttpPublicServices';
import { ApiAuthService } from '../../services/apiAuthService';

@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html',
})
export class DynamicPage {


  itemType: any;

  dynamicForm: any;

  password_type: string = 'password';
  eye: string = "eye";


  constructor(
              private platform: Platform
              , private authService: ApiAuthService
              , private pubService: ApiHttpPublicService
              ) { }

  ngOnInit() {
    this.itemType = this.pubService.getItemType();
    this.dynamicForm = this.pubService.getDemoForm();
  }

  // btn ẩn hiện mật khẩu
  togglePasswordMode() {
    this.eye = this.eye === 'eye' ? 'eye-off' : 'eye';
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  // Xử lý sự kiện click button theo id
  onClick(btn) {

    console.log('command', btn.url, btn.command);
    if (btn.url == 'EXIT') {
      this.platform.exitApp();
    } else if (btn.url == 'RESET') {
      //gan gia tri default parse 
    } else if (btn.url) {
      //co link de post
      //kiem tra validator
      let valid = false;
      let results = [];
      //neu valid thi post len server
      //neu khong thi bat invalid 
      this.dynamicForm.items.some(el => {
        let validatorFns = [];
        if (el.validators) {
          el.validators.forEach(req => {
            if (req.required) validatorFns.push(Validators.required);
            if (req.min) validatorFns.push(Validators.minLength(req.min));
            if (req.max) validatorFns.push(Validators.maxLength(req.max));
            if (req.pattern) validatorFns.push(Validators.pattern(req.pattern));
          })
        }
        let control = new FormControl(el.value, validatorFns);
        el.invalid = control.invalid;
        valid = !el.invalid;
        if (valid
          && el.id
          && el.value
          && el.type !== this.itemType.title
          && el.type !== this.itemType.image
          && el.type !== this.itemType.avatar
          && el.type !== this.itemType.button
        ) {
          results.push({
            id: el.id,
            value: el.value
          })
        }

        //console.log(el.name, el.id, el.value, 'control:', control.invalid, control.valid);
        return el.invalid;
      });

      if (valid) {
        console.log('Form ok: ', btn.url, btn.command, results);

        if (btn.token) {

          this.authService.postDynamicForm(btn.url,
            {
              command: btn.command,
              results: results
            }
          )
            .then(data => {
              console.log('data', data);
            })
            .catch(err => {
              console.log('err', err);
            });

        } else {

          this.pubService.postDynamicForm(btn.url,
            {
              command: btn.command,
              results: results
            }
          )
            .then(data => {
              console.log('data', data);
            })
            .catch(err => {
              console.log('err', err);
            });

        }

      } else {

        console.log('Form Invalid!');
      }


    }

  }

}
