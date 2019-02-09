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
        , { type:"details",
            details: [
                {
                name:"Mã khách hàng",
                value: "R012234949883"
                },
                {
                name:"Tên khách hàng",
                value: "Nguyễn Văn B"
                },
                {
                name:"Địa chỉ",
                value: "Tổ 1, Đội 1, Thôn 2, xã Vinh Hưng, huyện Phú Lộc, tỉnh Thừa Thiên Huế"
                },
                {
                name:"Hình thức thanh toán",
                value: "Tiền mặt"
                },
            ]
         }
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

  sampleCardDynamic: any = {
      title: "Mạng xã hội"
      , search_bar: {hint: "Tìm cái gì đó"} 
      , buttons: [
          {color:"primary", icon:"add"}
          , {color:"secondary", icon:"more"}
        ]
      , items: [
        {   short_detail:{
                avatar: "assets/imgs/ca_nau.jpg"
                ,h1:"Cuong.dq"
                ,p:"Cần thiết là nội dung chi tiết đây, có thể viết tóm lượt nhiều thông tin cũng được"
                ,note:"1h ago"
                ,action: {color:"primary", icon: "more", next:"MORE" }
            }
            ,medias: [
                {image:"assets/imgs/img_forest.jpg"}
                ,{image:"assets/imgs/anh_vua.png"}
                ,{image:"assets/imgs/ca_nau.jpg"}
                ,{image:"assets/imgs/ca_the.jpg"}
                ,{image:"assets/imgs/img_forest.jpg"}
                ,{image:"assets/imgs/anh_vua.png"}
            ]
            ,content:{
                title:"Miền quê yêu dấu"
                ,paragraphs:[
                    {
                        h2: "Chốn yên bình"
                        ,p: "Là nơi bình yên nhất. Bạn có thể dạo bước trên con đường rợp bóng mát thanh bình đến lạ"
                        ,medias: [
                            {image:"assets/imgs/img_forest.jpg",title:"Cầu Thê Húc xưa",subtitle:"Đoàn Quốc Cường"}
                            ,{image:"assets/imgs/anh_vua.png",title:"Cao tốc 34 nghìn tỷ mới khai trương đã hỏng",subtitle:"ảnh Mượn trên mạng "}
                        ]
                    }
                    ,
                    {
                        h2: "Chốn bóc mẽ"
                        ,p: "Đây là nơi bóc mẽ thông tin trên mạng. Một sự kiện mà mọi người không thể biết được bằng những phương tiện truyền thông truyền thống"
                        ,medias: [
                            {image:"assets/imgs/anh_vua.png",title:"Cao tốc 34 nghìn tỷ mới khai trương đã hỏng",subtitle:"ảnh Mượn trên mạng "}
                        ]
                    }
                ]
                ,note:"Đoàn Quốc Cường 2019"
            }
            ,results:{ 
                likes:{
                    like:["Cuong.dq","abc","xyz"]
                    ,love:["love"]
                    ,unlike:["dog"]
                    ,sad:["cat"]
                    ,angery:["tiger"]
                }
                ,comments:[
                    {name:"cuong.dq"
                    ,comment:"day la cai gi vay"
                    ,time:new Date().getTime()
                    }
                    ,
                    {name:"cu.dq"
                    ,comment:"la cai nay do nhe"
                    ,time:new Date().getTime()
                    }
                ]
                ,shares:[
                    {name:"cuong.dq"
                    ,comment:"day la cai gi vay"
                    ,time:new Date().getTime()
                    }
                    ,
                    {name:"cu.dq"
                    ,comment:"la cai nay do nhe"
                    ,time:new Date().getTime()
                    }
                ]
                
            }
            ,actions:{
                like: {name:"LIKE", color:"primary", icon: "thumbs-up", next:"LIKE"}
                ,comment: {name:"COMMENT", color:"primary", icon: "chatbubbles", next:"COMMENT"}
                ,share: {name:"SHARE", color:"primary", icon: "share-alt", next:"SHARE"}
            }

        }
        , { short_details:{

            }
            ,medias: [
                {image:"assets/imgs/img_forest.jpg",title:"1 Ảnh",subtitle:"Tác giả Đoàn Quốc Cường"}
            ]
            ,results:{ 
                likes:{
                    like:["Cuong.dq","abc","xyz"]
                    ,love:["love"]
                }
                ,shares:[
                    {name:"cu.dq"
                    ,comment:"la cai nay do nhe"
                    ,time:new Date().getTime()
                    }
                ]
                
            }
            ,actions:{
                like: {name:"Thích", color:"primary", icon: "thumbs-up", next:"LIKE"}
                ,comment: {name:"Trò chuyện", color:"primary", icon: "chatbubbles", next:"COMMENT"}
                ,share: {name:"Chia sẻ", color:"primary", icon: "share-alt", next:"SHARE"}
            }
        }
        , { short_details:{

            }
            ,medias: [
                {image:"assets/imgs/ca_nau.jpg",title:"Ảnh 1",subtitle:"Tác giả Đoàn Quốc Cường"}
                ,{image:"assets/imgs/img_forest.jpg",title:"Ảnh 2",subtitle:"Tác giả Đoàn Quốc Cường"}
            ]
            ,results:{ 
                likes:{
                    sad:["cat"]
                }
                ,comments:[
                    {name:"cu.dq"
                    ,comment:"la cai nay do nhe"
                    ,time:new Date().getTime()
                    }
                ]
            }
            ,actions:{
                like: {name:"Thích", color:"primary", icon: "thumbs-up", next:"LIKE"}
                ,comment: {name:"Trò chuyện", color:"primary", icon: "chatbubbles", next:"COMMENT"}
                ,share: {name:"Chia sẻ", color:"primary", icon: "share-alt", next:"SHARE"}
            }
        }
        , { short_details:{

            }
            ,medias: [
                {image:"assets/imgs/img_forest.jpg",title:"3 Ảnh",subtitle:"Tác giả Đoàn Quốc Cường"}
                ,{image:"assets/imgs/ca_nau.jpg"}
                ,{image:"assets/imgs/ca_the.jpg"}
            ]
            ,results:{ 
                likes:{
                    like:["Cuong.dq","abc","xyz"]
                }
            
            }
            ,actions:{
                like: {name:"Thích", color:"primary", icon: "thumbs-up", next:"LIKE"}
                ,comment: {name:"Trò chuyện", color:"primary", icon: "chatbubbles", next:"COMMENT"}
                ,share: {name:"Chia sẻ", color:"primary", icon: "share-alt", next:"SHARE"}
            }
        }
        , { short_details:{

            }
            ,medias: [
                {image:"assets/imgs/img_forest.jpg",title:"4 Ảnh"}
                ,{image:"assets/imgs/ca_the.jpg"}
                ,{image:"assets/imgs/anh_vua.png"}
                ,{image:"assets/imgs/ca_nau.jpg"}
            ]
            ,results:{ 
                likes:{
                    like:["Cuong.dq","abc","xyz"]
                }
            
            }
            ,actions:{
                like: {name:"Thích", color:"primary", icon: "thumbs-up", next:"LIKE"}
                ,comment: {name:"Trò chuyện", color:"primary", icon: "chatbubbles", next:"COMMENT"}
                ,share: {name:"Chia sẻ", color:"primary", icon: "share-alt", next:"SHARE"}
            }
        }
        
        ]
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

    getDemoCard(){
        return this.sampleCardDynamic;
    }

    postDynamicForm(url:string,json_data:any){
        return this.httpClient.post(url,JSON.stringify(json_data))
                .toPromise()
                .then(data => {
                    let rtn:any;
                    rtn = data;
                    return rtn;
                });
    }

    getDynamicForm(url:string, httpOptions?:any){
        return this.httpClient.get(url,httpOptions)
               .toPromise()
               .then(data => {
                    let rtn:any;
                    rtn = data;
                    return rtn;
                });
    }

    getDynamicFile(url:string){
        return this.httpClient.get(url,{'responseType'  : 'blob' as 'json'})
               .toPromise()
               .then(data => {
                    let rtn:any;
                    rtn = data;
                    return rtn;
                });
    }

}