import { Component, } from '@angular/core';

@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html',
})
export class DynamicPage {

  itemType = {
    avatar: 10,  //view 
    title: 1,    //view
    image: 4,    //view
    text: 2,     //output it.value
    password: 3, //output it.value
    check: 5,    //output 
    radio: 6,    //output 
    select: 7,   //output
    toggle: 8,   //output 
    button: 9,    //action post this form to api server
    range: 12,    //output
    select_multiple: 17   //output
  };

  dynamicForm:any;
  password_type: string = 'password';
  eye: string = "eye";

  sample: string =
    '{"status":"1", "message":"Form Đăng ký", "form":{\
    "id":1\
    ,"title":"Đăng ký"\
    ,"items":[\
    {"id":11,"name":"Thông tin cá nhân","type":1,"required":false,"options":null}\
    ,{"id":111, "name":"Thông tin cá nhân", "hint":"Avatar","type":10, "url":"https://www.w3schools.com/howto/img_forest.jpg"}\
    ,{"id":21, "name":"Chọn hay không chọn?", "hint":"Check nào","type":5, "value":1}\
    ,{"id":25, "name":"Thanh Trượt", "hint":"Kéo nào","type":12, "value": 50, "min":0, "max":100}\
    ,{"id":24, "name":"Chọn hay không chọn Toggle?", "hint":"Check nào","type":8}\
    ,{"id":22, "name":"Chọn cái nào", "hint":"Check nào","type":6,"value":2,"options":[{"name":"Tùy chọn 1","value":1},{"name":"Tùy chọn 2","value":2}]}\
    ,{"id":23, "name":"Chọn cái nào", "hint":"Check nào","type":7,"value":2,"options":[{"name":"Tùy chọn 1","value":1},{"name":"Tùy chọn 2","value":2}]}\
    ,{"id":23, "name":"Chọn nhiều cái nào", "hint":"Check nào","type":17,"value":2,"options":[{"name":"Tùy chọn 1","value":1},{"name":"Tùy chọn 2","value":2}]}\
    ,{"id":112, "name":"Ảnh cá nhân", "hint":"image viewer","type":4, "url":"https://www.w3schools.com/howto/img_forest.jpg"}\
    ,{"id":14,"hint":"username","type":2,"input_type":"userName","icon":"information-circle","required":true,"options":null}\
    ,{"id":15,"hint":"password","type":3,"input_type":"password","icon":"information-circle","required":true,"options":null}\
    ,{"id":12,"hint":"Họ và tên","type":2,"input_type":"text","icon":"person","required":false,"options":null}\
    ,{"id":13,"hint":"Điện thoại","type":2,"input_type":"tel","icon":"call","required":false,"options":null}\
    ,{"id":16,"hint":"email","type":2,"input_type":"email","icon":"mail","required":false,"options":null}\
    ,{"id":19,"name":"BUTTON GROUP","type":9\
    ,"options":[{"id":17,"name":"Đăng ký","url":"http://101.99.50.87/","command":"USER_REGISTER"}\
    ,{"id":191,"name":"LOGIN","url":"http://101.99.50.87/","command":"USER_LOGIN_REDIRECT"}]}]\
    }\
    }';


  constructor() { }

  ngOnInit() {

    let command = JSON.parse(this.sample);

    console.log('command', command);
    this.dynamicForm = command.form;

  }

  // btn ẩn hiện mật khẩu
  togglePasswordMode() {
    this.eye = this.eye === 'eye' ? 'eye-off' : 'eye';
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  // Xử lý sự kiện click button theo id
  onClick(idValue) {

    this.dynamicForm.items.forEach(el => {
      console.log(el.name,el.id,el.value);
    });

    /* for (var i = 0; i <= this.items.length - 1; i++) {
      if (this.items[i].type == 9) {
        for (var j = this.items[i].options.length - 1; j >= 0; j--) {
          if (this.items[i].options[j].id == idValue) {
            this.btnUrl = this.items[i].options[j].url
            if (this.btnUrl == "EXIT") {
              this.platform.exitApp();
            } else {
              LoginPage.postJson["command"] = this.items[i].options[j].command;
            }
          }
        }
      }

    } */


  }

}
