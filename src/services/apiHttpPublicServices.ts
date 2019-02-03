import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* const dynamicType = {
    title: 1,               //view
    avatar: 11,             //view 
    image: 12,              //view
    text: 2,                //output 
    text_area: 21,          //output 
    password: 3,            //output 
    range: 4,               //output
    check: 5,               //output
    toggle: 51,             //output 
    radio: 6,               //output 
    select: 61,             //output
    select_multiple: 62,    //output
    datetime: 7,                //output 
    button: 9,              //action post this form to api server, exit, reset
  }; */

@Injectable()
export class ApiHttpPublicService {


     sampleFormDynamic: any = {
      title: "Đăng ký"
      , items: [
        {          name: "Thông tin cá nhân", type: "title"}
        , {        name: "Thông tin cá nhân avatar", hint: "Avatar", type: "avatar", url: "https://www.w3schools.com/howto/img_forest.jpg" }
        , { id: 1, name: "Check hay không chọn?", type: "check", value: true }
        , { id: 2, name: "Thanh Trượt", type: "range", value: 50, min: 0, max: 100 }
        , { id: 3, name: "Chọn hay không chọn Toggle?", icon: "plane", type: "toggle" }
        , { id: 4, name: "Chọn radio cái nào", type: "radio", icon: "plane", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] }
        , { id: 5, name: "Chọn 1 cái nào", type: "select", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] }
        , { id: 6, name: "Chọn nhiều cái nào", type: "select_multiple", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] }
        , {        name: "Ảnh cá nhân", hint: "image viewer", type: "image", url: "https://www.w3schools.com/howto/img_forest.jpg" }
        , { id: 8, name: "username", hint: "Số điện thoại di động 9 số bỏ số 0 ở đầu", type: "text", input_type: "userName", icon: "information-circle", validators: [{ required: true, min: 9, max: 9, pattern: "^[0-9]*$" }]}
        , { id: 9, name: "password", hint: "Mật khẩu phải có chữ hoa, chữ thường, ký tự đặc biệt, số", type: "password", input_type: "password", icon: "information-circle", validators: [{ required: true, min: 6, max: 20}]}
        , { id: 10, name: "Họ và tên", type: "text", input_type: "text", icon: "person" }
        , { id: 11, name: "Điện thoại", hint: "Yêu cầu định dạng số điện thoại nhé", type: "text", input_type: "tel", icon: "call", validators: [{ pattern: "^[0-9]*$" }]}
        , { id: 12, name: "email", hint: "Yêu cầu định dạng email nhé", type: "text", input_type: "email", icon: "mail", validators: [{ pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" }]}
        , { id: 13, name: "Ngày bắt đầu", hint: "Chọn ngày", type: "datetime", display:"DD/MM/YYYY", picker:"DD MM YYYY"}
        , { id: 14, name: "Thời gian bắt đầu", hint: "Chọn thời gian", type: "datetime", display:"HH:mm:ss", picker:"HH:mm:ss"}
        , { id: 15, name: "Nội dung nhập", hint: "Nhập nhiều dòng", type: "text_area"}
        , { 
            type: "button"
          , options: [
            { name: "Reset", next: "RESET" }
            , { name: "Exit", next: "EXIT" }
            , { name: "Close", next: "CLOSE" }
            , { name: "Back", next: "BACK"}
            , { name: "Continue", next: "CONTINUE"}
            , { name: "Register", next: "BACK", url: "https://chonsoc3.mobifone.vn/ionic/", command: "USER_LOGIN_REDIRECT" }
            , { name: "LOGIN", next: "CONTINUE" , url: "https://chonsoc3.mobifone.vn/ionic/", command: "USER_CHECK_EXISTS", token: true }
          ]
        }]
  };  

    constructor(private httpClient: HttpClient) {}

    /**
     * Lay danh sach cac quoc gia ve Ma so dien thoai, co, ten, ngon ngu, tien...
     */
    getAllCoutries(){
        return this.httpClient.get('https://restcountries.eu/rest/v2/all')
        .toPromise()                 //kieu chuyen ve promise
        .then(countries=>{
            return countries;
        })
        .catch(err=>{
            throw err;
        })
    }

    /**
     * Lay danh sach user demo phuc vu so lieu demo
     */
    getRandomUser(nRecord: number){
        return this.httpClient.get('https://randomuser.me/api/?results=' + nRecord)
            .map(res => res['results']) //kieu chuyen ve observable
    }

    getDataForm(form:string){
        return this.httpClient.get('assets/data/'+ form)
               .toPromise()
    }

    getUserInfoForm(){
        return this.httpClient.get('assets/data/form-register.json')
               .toPromise()
    }

    getDemoForm(){
        return this.sampleFormDynamic;
    }

    postDynamicForm(url,json_data){
        return this.httpClient.post(url,JSON.stringify(json_data))
                .toPromise()
                .then(data => {
                    return data;
                });
    }
    

}