webpackJsonp([0],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var token;
var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor() {
    }
    RequestInterceptor.prototype.intercept = function (request, next) {
        if (token) {
            //console.log('request with token interceptor!')
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
        return next.handle(request);
    };
    RequestInterceptor.prototype.setRequestToken = function (tk) {
        if (tk) {
            token = tk;
        }
        else {
            token = '';
        }
    };
    RequestInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RequestInterceptor);
    return RequestInterceptor;
}());

//# sourceMappingURL=requestInterceptor.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormWebPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicFormWebPage = /** @class */ (function () {
    function DynamicFormWebPage(platform, authService, pubService, viewCtrl, navCtrl, loadingCtrl, navParams) {
        this.platform = platform;
        this.authService = authService;
        this.pubService = pubService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.dynamicForm = {
            title: "Đăng ký",
            items: [
                { name: "Thông tin cá nhân avatar", hint: "Avatar", type: "avatar", url: "https://www.w3schools.com/howto/img_forest.jpg" },
                { id: 1, name: "Check hay không chọn?", type: "check", value: true },
                { id: 2, name: "Thanh Trượt", type: "range", value: 50, min: 0, max: 100 },
                { id: 3, name: "Chọn hay không chọn Toggle?", icon: "plane", type: "toggle" },
                { id: 4, name: "Chọn radio cái nào", type: "radio", icon: "plane", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                { id: 5, name: "Chọn 1 cái nào", type: "select", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                { id: 6, name: "Chọn nhiều cái nào", type: "select_multiple", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                { name: "Ảnh cá nhân", hint: "image viewer", type: "image", url: "https://www.w3schools.com/howto/img_forest.jpg" },
                { id: 8, key: "username", name: "username", hint: "Số điện thoại di động 9 số bỏ số 0 ở đầu", type: "text", input_type: "userName", icon: "information-circle", validators: [{ required: true, min: 9, max: 9, pattern: "^[0-9]*$" }] },
                { id: 9, key: "password", name: "password", hint: "Mật khẩu phải có chữ hoa, chữ thường, ký tự đặc biệt, số", type: "password", input_type: "password", icon: "information-circle", validators: [{ required: true, min: 6, max: 20 }] },
                { id: 10, name: "Họ và tên", type: "text", input_type: "text", icon: "person" },
                { id: 11, name: "Điện thoại", hint: "Yêu cầu định dạng số điện thoại nhé", type: "text", input_type: "tel", icon: "call", validators: [{ pattern: "^[0-9]*$" }] },
                { id: 12, name: "email", hint: "Yêu cầu định dạng email nhé", type: "text", input_type: "email", icon: "mail", validators: [{ pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" }] },
                { id: 13, name: "Ngày bắt đầu", hint: "Chọn ngày", type: "datetime", display: "DD/MM/YYYY", picker: "DD MM YYYY" },
                { id: 14, name: "Thời gian bắt đầu", hint: "Chọn thời gian", type: "datetime", display: "HH:mm:ss", picker: "HH:mm:ss" },
                { id: 15, name: "Nội dung nhập", hint: "Nhập nhiều dòng", type: "text_area" },
                { name: "Thông tin cá nhân", type: "title" },
                { type: "details",
                    details: [
                        {
                            name: "Mã khách hàng",
                            value: "R012234949883"
                        },
                        {
                            name: "Tên khách hàng",
                            value: "Nguyễn Văn B"
                        },
                        {
                            name: "Địa chỉ",
                            value: "263 Nguyễn Văn Linh, Đà nẵng, Việt Nam"
                        },
                        {
                            name: "Hình thức thanh toán",
                            value: "Tiền mặt"
                        },
                    ]
                },
                {
                    type: "button",
                    options: [
                        { name: "Reset", next: "RESET" },
                        { name: "Exit", next: "EXIT" },
                        { name: "Close", next: "CLOSE" },
                        { name: "Back", next: "BACK" },
                        { name: "Continue", next: "CONTINUE" },
                        { name: "Register", next: "BACK", url: "https://chonsoc3.mobifone.vn/ionic/", command: "USER_LOGIN_REDIRECT" },
                        { name: "LOGIN", next: "CONTINUE", url: "https://chonsoc3.mobifone.vn/ionic/", command: "USER_CHECK_EXISTS", token: true }
                    ]
                }
            ]
        };
        this.initValues = [];
        this.password_type = 'password';
        this.eye = "eye";
    }
    DynamicFormWebPage_1 = DynamicFormWebPage;
    DynamicFormWebPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dynamicForm = this.navParams.get("form") ? this.navParams.get("form") : this.dynamicForm;
        if (this.dynamicForm.items) {
            this.dynamicForm.items.forEach(function (el, idx) {
                _this.initValues.push({
                    idx: idx,
                    value: el.value
                });
            });
        }
        this.callback = this.navParams.get("callback");
        this.step = this.navParams.get("step");
        this.parent = this.navParams.get("parent");
    };
    DynamicFormWebPage.prototype.resetForm = function () {
        var _this = this;
        if (this.dynamicForm.items) {
            this.dynamicForm.items.forEach(function (el, idx) {
                if (el.value !== undefined) {
                    if (_this.initValues.find(function (x) { return x.idx == idx; }).value === undefined) {
                        el.value = '';
                    }
                    else {
                        el.value = _this.initValues.find(function (x) { return x.idx == idx; }).value;
                    }
                }
            });
        }
    };
    // btn ẩn hiện mật khẩu
    DynamicFormWebPage.prototype.togglePasswordMode = function () {
        this.eye = this.eye === 'eye' ? 'eye-off' : 'eye';
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    };
    // Xử lý sự kiện click button theo id
    DynamicFormWebPage.prototype.onClick = function (btn) {
        //console.log('command', btn.url, btn.command);
        var _this = this;
        var valid = false;
        var results = []; //id,value
        var keyResults = {}; //{key:value}
        //chi nhung action xu ly du lieu form moi check
        if (btn.next === 'CALLBACK'
            || btn.next === 'NEXT') {
            this.dynamicForm.items.some(function (el) {
                var validatorFns = [];
                if (el.validators) {
                    el.validators.forEach(function (req) {
                        if (req.required)
                            validatorFns.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
                        if (req.min)
                            validatorFns.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(req.min));
                        if (req.max)
                            validatorFns.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(req.max));
                        if (req.pattern)
                            validatorFns.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(req.pattern));
                    });
                }
                var control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](el.value, validatorFns);
                el.invalid = control.invalid;
                valid = !el.invalid;
                if (valid
                    && el.key
                    && el.value) {
                    Object.defineProperty(keyResults, el.key, { value: el.value, writable: false, enumerable: true });
                }
                else if (valid
                    && el.id
                    && el.value
                    && el.type !== "title"
                    && el.type !== "image"
                    && el.type !== "avatar"
                    && el.type !== "button") {
                    results.push({
                        id: el.id,
                        value: el.value
                    });
                }
                //console.log(el.name, el.id, el.value, 'control:', control.invalid, control.valid);
                return el.invalid;
            });
        }
        else {
            this.next(btn);
            return;
        }
        if (valid) {
            if (btn.url) {
                if (btn.token && keyResults) {
                    var loading_1 = this.loadingCtrl.create({
                        content: 'Đang xử lý dữ liệu từ máy chủ ....'
                    });
                    loading_1.present();
                    this.authService.postDynamicForm(btn.url, keyResults, btn.token)
                        .then(function (data) {
                        //console.log('data --> next', data, btn.next);
                        btn.next_data = {
                            step: _this.step,
                            data: data
                        };
                        _this.next(btn);
                        loading_1.dismiss();
                    })
                        .catch(function (err) {
                        //console.log('err', err);
                        btn.next_data = {
                            step: _this.step,
                            error: err
                        };
                        _this.next(btn);
                        loading_1.dismiss();
                    });
                }
                else if (keyResults) {
                    var loading_2 = this.loadingCtrl.create({
                        content: 'Đang xử lý dữ liệu từ máy chủ ....'
                    });
                    loading_2.present();
                    this.pubService.postDynamicForm(btn.url, keyResults)
                        .then(function (data) {
                        //console.log('data --> next', data, btn.next);
                        btn.next_data = {
                            step: _this.step,
                            data: data
                        };
                        _this.next(btn);
                        loading_2.dismiss();
                    })
                        .catch(function (err) {
                        //console.log('err', err);
                        btn.next_data = {
                            step: _this.step,
                            error: err
                        };
                        _this.next(btn);
                        loading_2.dismiss();
                    });
                }
            }
            else {
                btn.next_data = {
                    step: this.step,
                    data: keyResults
                };
                this.next(btn);
            }
        }
        else {
            //console.log('Form Invalid!');
        }
    };
    DynamicFormWebPage.prototype.next = function (btn) {
        var _this = this;
        if (btn) {
            if (btn.next == 'EXIT') {
                this.platform.exitApp();
            }
            else if (btn.next == 'RESET') {
                this.resetForm();
            }
            else if (btn.next == 'CLOSE') {
                try {
                    this.viewCtrl.dismiss(btn.next_data);
                }
                catch (e) { }
            }
            else if (btn.next == 'BACK') {
                try {
                    this.navCtrl.pop();
                }
                catch (e) { }
                //if (this.navCtrl.length() > 1) this.navCtrl.pop();      //goback 1 step
            }
            else if (btn.next == 'CALLBACK') {
                if (this.callback) {
                    this.callback(this.parent, btn.next_data)
                        .then(function (nextStep) { return _this.next(nextStep); });
                }
                else {
                    try {
                        this.navCtrl.pop();
                    }
                    catch (e) { }
                }
            }
            else if (btn.next == 'NEXT' && btn.next_data && btn.next_data.data) {
                btn.next_data.callback = this.callback; //gan lai cac function object
                btn.next_data.parent = this.parent; //gan lai cac function object
                btn.next_data.form = btn.next_data.data; //gan du lieu tra ve tu server
                this.navCtrl.push(DynamicFormWebPage_1, btn.next_data);
            }
        }
    };
    DynamicFormWebPage = DynamicFormWebPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic-form-web',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-form-web\dynamic-form-web.html"*/'<ion-header *ngIf="dynamicForm.title">\n\n	<ion-navbar>\n\n		<ion-title>{{dynamicForm.title}}</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding class="background-page gradient">\n\n	\n\n	<ion-grid> \n\n		<ion-row>\n\n			<ion-col class="background-card gradient grid-border" text-center col-12 offset-xl-3 col-xl-6 offset-lg-3 col-lg-6\n\n			 offset-md-2 col-md-8 col-sm-12>\n\n\n\n				<ion-list *ngFor="let it of dynamicForm.items">\n\n\n\n					<!-- title -->\n\n					<ion-item class="background-card" *ngIf="it.type == \'title\'">\n\n						<ion-label class="title-item">{{it.name}}</ion-label>\n\n					</ion-item>\n\n\n\n					<!-- form chi tiet -->\n\n					<ion-list class="input-item" *ngIf="it.type == \'details\'">\n\n						<ion-item *ngFor="let dt of it.details">\n\n							<strong item-start>\n\n								{{dt.name}}\n\n							</strong>\n\n							<ion-label text-wrap item-end>\n\n									{{dt.value}}\n\n							</ion-label>\n\n						</ion-item>\n\n					</ion-list>\n\n\n\n					<!-- title with avatar -->\n\n					<ion-item class="background-card" *ngIf="it.type == \'avatar\'">\n\n						<ion-avatar item-start><img [src]="it.url"></ion-avatar>\n\n						<h1 item-left class="title-item">{{it.name}}</h1>\n\n					</ion-item>\n\n\n\n					<!-- image -->\n\n					<ion-grid *ngIf="it.type == \'image\'">\n\n						<ion-row>\n\n							<ion-col style="text-align: center;">\n\n								<img *ngIf="!it.width||!it.height" [src]="it.url">\n\n								<img *ngIf="it.width&&it.height" [width]="it.width" [height]="it.height" [src]="it.url">\n\n							</ion-col>\n\n						</ion-row>\n\n					</ion-grid>\n\n\n\n					<!-- input text -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'text\'">\n\n						<ion-label floating color="danger" *ngIf="it.invalid">{{it.hint}}(*)</ion-label>\n\n						<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n						<ion-input type="{{it.input_type}}" placeholder={{it.name?it.name:it.hint}} [(ngModel)]="it.value"></ion-input>\n\n					</ion-item>\n\n\n\n					<!-- input text-area -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'text_area\'">\n\n						<ion-label floating color="danger" *ngIf="it.invalid">{{it.hint}}(*)</ion-label>\n\n						<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n						<ion-textarea rows="6" cols="20" placeholder={{it.name?it.name:it.hint}} [(ngModel)]="it.value"></ion-textarea>\n\n					</ion-item>\n\n\n\n					<!-- input password -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'password\'">\n\n						<ion-label floating color="danger" *ngIf="it.invalid">{{it.hint}}(*)</ion-label>\n\n						<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n						<ion-input [type]="password_type" placeholder={{it.name?it.name:it.hint}} [(ngModel)]="it.value"></ion-input>\n\n						<button ion-button clear color="dark" type="button" item-right (click)="togglePasswordMode()">\n\n							<ion-icon name="{{eye}}"> </ion-icon>\n\n						</button>\n\n					</ion-item>\n\n\n\n					<!-- check box -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'check\'">\n\n						<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n\n						<ion-checkbox color="primary" [(ngModel)]="it.value"></ion-checkbox>\n\n					</ion-item>\n\n\n\n					<!-- radio select -->\n\n					<ion-list *ngIf="it.type == \'radio\'" radio-group [(ngModel)]="it.value">\n\n						<ion-list-header>\n\n							<ion-icon item-start name="{{it.icon}}"></ion-icon>\n\n							<ion-label color="dark">{{it.name?it.name:it.hint}}</ion-label>\n\n						</ion-list-header>\n\n						<ion-item *ngFor="let myRad of it.options">\n\n							<ion-label color="secondary">{{myRad.name}}</ion-label>\n\n							<ion-radio value="{{myRad.value}}"></ion-radio>\n\n						</ion-item>\n\n					</ion-list>\n\n\n\n					<!-- single select -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'select\'">\n\n						<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n\n						<ion-select [(ngModel)]="it.value">\n\n							<ion-option *ngFor="let mySet of it.options" value="{{mySet.value}}">{{mySet.name}}</ion-option>\n\n						</ion-select>\n\n					</ion-item>\n\n\n\n					<!-- multiple select -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'select_multiple\'">\n\n						<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n\n						<ion-select [(ngModel)]="it.value" multiple="true">\n\n							<ion-option *ngFor="let mySet of it.options" value="{{mySet.value}}">{{mySet.name}}</ion-option>\n\n						</ion-select>\n\n					</ion-item>\n\n\n\n					<!-- toggle check -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'toggle\'">\n\n						<ion-icon name="{{it.icon}}" item-start color="primary"></ion-icon>\n\n						<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n\n						<ion-toggle color="secondary" [(ngModel)]="it.value"></ion-toggle>\n\n					</ion-item>\n\n\n\n					<!-- range adjust -->\n\n					<ion-item class="input-item" *ngIf="it.type == \'range\'">\n\n						<ion-range min="{{it.min}}" max="{{it.max}}" pin="true" [(ngModel)]="it.value" color="primary">\n\n							<ion-icon range-left small name="contrast"></ion-icon>\n\n							<ion-icon range-right name="contrast"></ion-icon>\n\n						</ion-range>\n\n					</ion-item>\n\n\n\n					<!-- date time-->\n\n					<ion-item class="input-item" *ngIf="it.type == \'datetime\'">\n\n						<ion-label color="danger" *ngIf="it.invalid">{{it.hint}}(*)</ion-label>\n\n						<ion-label *ngIf="!it.invalid">{{it.name}}</ion-label>\n\n						<ion-datetime displayFormat="{{it.display}}" pickerFormat="{{it.picker}}" [(ngModel)]="it.value"></ion-datetime>\n\n					</ion-item>\n\n\n\n					<!-- button action -->\n\n					<ion-grid *ngIf="it.type == \'button\'">\n\n						<ion-row>\n\n							<ion-col *ngFor="let myBtn of it.options" style="text-align: center;">\n\n								<button class="button-item" [(ngStyle)]="pageContent" ion-button round (click)="onClick(myBtn)">\n\n									{{myBtn.name}}\n\n								</button>\n\n							</ion-col>\n\n						</ion-row>\n\n					</ion-grid>\n\n\n\n				</ion-list>\n\n			</ion-col>\n\n		</ion-row>\n\n	</ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-form-web\dynamic-form-web.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], DynamicFormWebPage);
    return DynamicFormWebPage;
    var DynamicFormWebPage_1;
}());

//# sourceMappingURL=dynamic-form-web.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_customer__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamic_list_dynamic_list__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dynamic_form_mobile_dynamic_form_mobile__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dynamic_form_web_dynamic_form_web__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiResourceServices__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dynamic_card_dynamic_card__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signature_signature__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, modalCtrl, inAppBrowser, platform, alertCtrl, loadingCtrl, resource) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.inAppBrowser = inAppBrowser;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.resource = resource;
        this.tabs = [
            {
                root: __WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */],
                title: 'Home',
                icon: 'home'
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_2__dynamic_list_dynamic_list__["a" /* DynamicListPage */],
                title: 'Hóa đơn',
                icon: 'list-box'
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_1__customer_customer__["a" /* CustomerPage */],
                title: 'Khách hàng',
                icon: 'contacts',
                params: {}
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_10__signature_signature__["a" /* SignaturePage */],
                title: 'Ký máy',
                icon: 'brush',
                params: {}
            },
            {
                root: __WEBPACK_IMPORTED_MODULE_8__dynamic_card_dynamic_card__["a" /* DynamicCardPage */],
                title: 'Chi tiết',
                icon: 'apps'
            }
        ];
        this.callbackForm = function (that, res) {
            return new Promise(function (resolve, reject) {
                //console.log('callback callbackForm', res);
                if (res.step === 'add-bill-cycle' && res.data && res.data.bill_cycle && res.data.bill_date) {
                    var billCycle_1 = {
                        bill_cycle: res.data.bill_cycle.replace(/-/g, '') //res.data.bill_cycle.slice(0,4) + res.data.bill_cycle.slice(5,7)
                        ,
                        bill_date: res.data.bill_date.replace(/-/g, '') //res.data.bill_date.slice(0,4) + res.data.bill_date.slice(5,7) + res.data.bill_date.slice(8,10)
                        ,
                        invoice_no: res.data.invoice_no
                    };
                    console.log('billCycle OUT', billCycle_1);
                    that.presentConfirm({
                        cancel_text: 'Bỏ qua',
                        ok_text: 'Đồng ý',
                        title: 'Xác nhận phát hành hóa đơn',
                        message: 'Tháng: ' + res.data.bill_cycle + '<br>'
                            + 'Ngày phát hành: ' + res.data.bill_date + '<br>'
                            + 'Với hóa đơn bắt đầu từ số: ' + res.data.invoice_no,
                        ok: function (isOK) {
                            if (isOK) {
                                that.callCreateInvoices(billCycle_1)
                                    .then(function (rtrn) {
                                    console.log('Tao xong ky cuoc:', rtrn);
                                    //tro ve home de xem ky cuoc
                                    that.getBillCycles()
                                        .then(function (result) {
                                        resolve({
                                            next: "CLOSE" //DISMISS that FORM
                                            ,
                                            next_data: that.convertResult2DynamicList(result) //RETURN PARAM FOR PARENT
                                        });
                                    })
                                        .catch(function (err) { return reject(err); });
                                })
                                    .catch(function (err) {
                                    reject(err);
                                });
                            }
                        }
                    });
                }
            });
        };
        //console.log('1. constructor tabs')
    }
    TabsPage.prototype.ngOnInit = function () {
        //console.log('2. ngOnInit tabs')
        this.tabs[1].params = {
            parent: this,
            step: 'bill-cycle',
            callback: this.callbackList,
            call_waiting_data: this.callWaiting
        };
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        //console.log('3. ionViewDidLoad tabs')
    };
    TabsPage.prototype.ionViewWillEnter = function () {
        //console.log('4. ionViewWillEnter tabs')
    };
    /**
     * ham lay du lieu dynamic-list asyn delay
     */
    TabsPage.prototype.callWaiting = function (that) {
        return new Promise(function (resolve, reject) {
            that.getBillCycles()
                .then(function (result) {
                resolve(that.convertResult2DynamicList(result));
            })
                .catch(function (err) { console.log('err', err); });
        });
    };
    /**
     * Ham goi lai khi cac lenh yeu cau xu ly ben ngoai
     * ADD, EDIT, PDF, ...
     */
    TabsPage.prototype.callbackList = function (that, res) {
        return new Promise(function (resolve, reject) {
            console.log('that:', that);
            console.log('callback tabs', res);
            if (res.next == 'ADD' || res.next == 'EDIT') {
                var _loop_1 = function (key) {
                    var editItemValue = res.data.items.find(function (x) { return x.key == key; });
                    if (editItemValue) {
                        //console.log('editItemValue', key, res.item[key] , editItemValue);
                        editItemValue.value = res.item[key];
                    }
                };
                //neu co item de gan du lieu ban dau thi gan lai EDIT
                for (var key in res.item) {
                    _loop_1(key);
                }
                //xu ly xong thi dismiss
                that.openModal({
                    parent: that,
                    callback: that.callbackForm,
                    step: 'add-bill-cycle',
                    form: res.data
                })
                    .then(function (data) {
                    console.log('modal dismiss()', data);
                    //giai quyet xong form modal, tra ve form dynamic-list -- refresh lay lai ds sau khi them, sua
                    resolve({
                        next: 'REFRESH',
                        next_data: data //tra du lieu ve cho form, du lieu nay la danh sach moi can view
                    });
                })
                    .catch(function (err) { return reject(err); });
            }
            else if (res.next == 'PDF' && res.data) {
                console.log('Mo file');
                var file = new Blob([res.data], { type: 'application/pdf' });
                var fileURL = URL.createObjectURL(file);
                var browser1 = that.inAppBrowser.create(fileURL, '_blank', 'hideurlbar=no,location=no,toolbarposition=top');
            }
            else if (res.next == 'LIST' && res.data) {
                console.log('new list : ', that.convertResult2DynamicListDetails(res.data));
                that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dynamic_list_dynamic_list__["a" /* DynamicListPage */], {
                    parent: that,
                    step: 'invoice-list',
                    callback: that.callbackListInvoice,
                    list: that.convertResult2DynamicListDetails(res.data)
                });
            }
        });
    };
    //xu ly list cua invoice
    TabsPage.prototype.callbackListInvoice = function (that, res) {
        return new Promise(function (resolve, reject) {
            console.log('callbackListInvoice', res);
            if (res.next == 'EDIT' && res.item) {
                //phat hanh don le hoa don cho khach hang
                //cho phep soan lai ngay phat hanh, so hoa don
            }
            else if (res.next == 'PDF' && res.data) {
                //tao pdf don le tung hoa don
            }
            else if (res.next == 'VIEW' && res.item) {
                //hien thi chi tiet cua mot item
            }
        });
    };
    TabsPage.prototype.openModal = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formPopup;
            if (_this.platform.is('core')) {
                formPopup = __WEBPACK_IMPORTED_MODULE_5__dynamic_form_web_dynamic_form_web__["a" /* DynamicFormWebPage */];
            }
            else {
                formPopup = __WEBPACK_IMPORTED_MODULE_4__dynamic_form_mobile_dynamic_form_mobile__["a" /* DynamicFormMobilePage */];
            }
            var modal = _this.modalCtrl.create(formPopup, data);
            modal.onDidDismiss(function (data) {
                resolve(data);
            });
            modal.present();
        });
    };
    TabsPage.prototype.presentConfirm = function (jsonConfirm) {
        var alert = this.alertCtrl.create({
            title: jsonConfirm.title,
            message: jsonConfirm.message,
            buttons: [
                {
                    text: jsonConfirm.cancel_text,
                    role: 'cancel',
                    handler: function () {
                        if (jsonConfirm.ok)
                            jsonConfirm.ok(false);
                    }
                },
                {
                    text: jsonConfirm.ok_text,
                    handler: function () {
                        if (jsonConfirm.ok)
                            jsonConfirm.ok(true);
                    }
                }
            ]
        });
        alert.present();
    };
    TabsPage.prototype.presentAlert = function (jsonConfirm) {
        var alert = this.alertCtrl.create({
            title: jsonConfirm.title,
            message: jsonConfirm.message,
            buttons: [
                {
                    text: jsonConfirm.ok_text,
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    // cac ham rieng thuc hien chuc nang he thong nay
    /**
     * Goi API de phat hanh hoa don theo thang
     * @param billCycle
     */
    TabsPage.prototype.callCreateInvoices = function (billCycle) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var loading = _this.loadingCtrl.create({
                content: 'Đang phát hành hóa đơn <br>'
                    + JSON.stringify(billCycle)
            });
            loading.present();
            _this.resource.createInvoices(billCycle)
                .then(function (result) {
                if (result && result.status && result.data) {
                    //console.log('data',result.data);
                    _this.presentAlert({
                        ok_text: 'Xong',
                        title: 'ĐÃ PHÁT HÀNH XONG',
                        message: 'Tháng: ' + (result.data.bill_cycle ? result.data.bill_cycle.slice(4, 6) + '/' + result.data.bill_cycle.slice(0, 4) : '') + '<br>'
                            + 'Ngày phát hành: ' + (result.data.bill_date ? result.data.bill_date.slice(6, 8) + '/' + result.data.bill_date.slice(4, 6) + '/' + result.data.bill_date.slice(0, 4) : '') + '<br>'
                            + 'Số lượng phát hành: ' + result.data.count + '<br>'
                            + 'Số hóa đơn lần tiếp theo: ' + result.data.invoice_no,
                    });
                    resolve(result);
                }
                loading.dismiss();
            })
                .catch(function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    TabsPage.prototype.getBillCycles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var loading = _this.loadingCtrl.create({
                content: 'Đang kiểm tra các kỳ hóa đơn đã phát hành...'
            });
            loading.present();
            _this.resource.getBillCycle()
                .then(function (billCycles) {
                billCycles.forEach(function (el) {
                    el.bill_cycle_vn = el.bill_cycle.slice(4, 6) + "/" + el.bill_cycle.slice(0, 4);
                    el.bill_date_vn = el.bill_date.slice(6, 8) + "/" + el.bill_date.slice(4, 6) + "/" + el.bill_date.slice(0, 4);
                });
                var lastBillCycle;
                var maxBillCycle = Math.max.apply(Math, billCycles.map(function (o) { return o['bill_cycle']; }));
                if (typeof maxBillCycle == 'number')
                    lastBillCycle = billCycles.find(function (x) { return x.bill_cycle === maxBillCycle.toString(); });
                //console.log('lastBillCycle', lastBillCycle ); 
                loading.dismiss();
                resolve({
                    last_bill_cycle: lastBillCycle,
                    bill_cycles: billCycles
                });
            })
                .catch(function (err) {
                loading.dismiss();
                reject(err);
            });
        });
    };
    TabsPage.prototype.convertResult2DynamicList = function (result) {
        var items = [];
        result.bill_cycles.forEach(function (el) {
            items.push({
                bill_cycle: el.bill_cycle.slice(0, 4) + '-' + el.bill_cycle.slice(4, 6),
                bill_date: el.bill_date.slice(0, 4) + '-' + el.bill_date.slice(4, 6) + '-' + el.bill_date.slice(6, 8),
                invoice_no: el.invoice_no_min,
                icon: "calculator",
                color: "danger",
                h1: "Tháng " + el.bill_cycle_vn,
                h2: "Số lượng khách hàng " + el.count_customer,
                p: "Từ hóa đơn số " + el.invoice_no_min + " đến số " + el.invoice_no,
                note: "ngày " + el.bill_date_vn,
                options: [
                    { name: "Phát hành lại", icon: "calculator", color: "danger", next: "EDIT", url: "assets/data/form-add-billcycle.json", method: "GET" },
                    { name: "Tạo bản in", icon: "print", color: "primary", next: "PDF", url: "https://qld-invoices.herokuapp.com/db/pdf-invoices/" + el.bill_cycle, method: "GET" },
                    { name: "Xem danh sách", icon: "list-box", color: "secondary", next: "LIST", url: "https://qld-invoices.herokuapp.com/db/json-invoices/" + el.bill_cycle, method: "GET" }
                ]
            });
        });
        return {
            title: "CÁC KỲ HÓA ĐƠN ĐÃ PHÁT HÀNH",
            buttons: [
                { next: "ADD", url: "assets/data/form-add-billcycle.json", method: "GET", color: "primary", icon: "add" }
            ],
            items: items
        };
    };
    TabsPage.prototype.convertResult2DynamicListDetails = function (results) {
        var _this = this;
        var items = [];
        results.forEach(function (el) {
            items.push({
                cust_id: el.cust_id,
                bill_date: el.bill_date,
                invoice_no: el.invoice_no,
                icon: "contact",
                color: "secondary",
                h1: (_this.platform.is('core') ? "Tên khách hàng: " : "") + el.full_name,
                h2: (_this.platform.is('core') ? "Địa chỉ: " : "") + el.address,
                p: (_this.platform.is('core') ? "Số tiền: " : "") + el.sum_charge + " (" + el.bill_sum_charge_spell + ")",
                note: el.invoice_no + "-" + el.bill_date.slice(6, 8) + '/' + el.bill_date.slice(4, 6) + '/' + el.bill_date.slice(0, 4),
                options: [
                    { name: "Phát hành lẻ", icon: "calculator", color: "danger", next: "EDIT", },
                    { name: "In đơn lẻ", icon: "print", color: "primary", next: "PDF", url: "https://qld-invoices.herokuapp.com/db/pdf-invoices/" + el.bill_cycle + "/" + el.cust_id, method: "GET" },
                    { name: "Xem chi tiết", icon: "list-box", color: "secondary", next: "VIEW", }
                ]
            });
        });
        return {
            title: "Danh sách hóa đơn đã phát hành",
            buttons: [
                { next: "BACK", color: "primary", icon: "arrow-round-back" }
            ],
            items: items
        };
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab *ngFor="let tab of tabs" [root]="tab.root" [rootParams]="tab.params" tabTitle="{{tab.title}}" tabIcon="{{tab.icon}}"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__services_apiResourceServices__["a" /* ApiResourceService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicListPage = /** @class */ (function () {
    function DynamicListPage(platform, authService, pubService, viewCtrl, navCtrl, loadingCtrl, navParams) {
        this.platform = platform;
        this.authService = authService;
        this.pubService = pubService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.dynamicListOrigin = {
            title: "Mạng xã hội",
            search_bar: { hint: "Tìm cái gì đó" },
            buttons: [
                { color: "primary", icon: "add", next: "ADD" },
                { color: "primary", icon: "contacts", next: "FRIENDS" },
                { color: "primary", icon: "notifications", next: "NOTIFY",
                    alerts: [
                        "cuong.dq"
                    ]
                },
                { color: "royal", icon: "cog", next: "SETTINGS" }
            ],
            items: [
                {
                    //icon:"contact",
                    image: "assets/imgs/img_forest.jpg",
                    h1: "H1 Tieu de",
                    h2: "H2 Chuong muc",
                    h3: "H3 Muc luc",
                    p: "Sau khi đánh cồng khai trương phiên giao dịch đầu xuân Kỷ Hợi 2019 tại Sở Giao dịch chứng khoán Hà Nội vào sáng 12-2, Thủ tướng Chính phủ Nguyễn Xuân Phúc khẳng định tầm quan trọng của thị trường chứng khoán Việt Nam.",
                    note: "13/02/2019",
                    options: [
                        { name: "Xóa", color: "danger", icon: "trash", next: "EXIT" },
                        { name: "Chỉnh sửa", color: "primary", icon: "create", next: "NEXT" },
                        { name: "Xem chi tiết", color: "secondary", icon: "list", next: "CALLBACK" }
                    ]
                },
                {
                    icon: "contact"
                    //image: "assets/imgs/img_forest.jpg"
                    ,
                    h1: "H1 Tieu de 2",
                    h2: "H2 Chuong muc 2",
                    h3: "H3 Muc luc 2",
                    p: "Trong những ngày đánh bắt đầu năm, 3 ngư dân Quảng Trị đã thu hoạch được mẻ cá bè gần 140 tấn; trong đó một ngư dân trúng mẻ cá siêu khủng nặng hơn 100 tấn.",
                    note: "14/02/2019",
                    options: [
                        { name: "Xóa", color: "danger", icon: "trash", next: "EXIT" },
                        { name: "Chỉnh sửa", color: "primary", icon: "create", next: "NEXT" },
                        { name: "Xem chi tiết", color: "secondary", icon: "list", next: "CALLBACK" }
                    ]
                }
            ]
        };
        this.isSearch = false;
        this.searchString = '';
        this.shouldShowCancel = true;
        this.isMobile = false;
    }
    DynamicListPage_1 = DynamicListPage;
    DynamicListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dynamicListOrigin = this.navParams.get("list") ? this.navParams.get("list") : this.dynamicListOrigin;
        this.refresh();
        this.offset = this.navParams.get("offset") ? this.navParams.get("offset") : 250;
        this.callback = this.navParams.get("callback");
        this.step = this.navParams.get("step");
        this.parent = this.navParams.get("parent");
        var call_waiting_data = this.navParams.get("call_waiting_data");
        if (call_waiting_data) {
            call_waiting_data(this.parent)
                .then(function (list) {
                _this.refresh(list);
            });
        }
    };
    DynamicListPage.prototype.refresh = function (newList) {
        if (newList)
            this.dynamicListOrigin = newList;
        this.isMobile = (this.platform.platforms()[0] === 'mobile');
        this.dynamicList = this.dynamicListOrigin;
    };
    // Su dung slide Pages
    //--------------------------
    /**
     * Thay đổi kiểu bấm nút mở lệnh trên item sliding
     * @param slidingItem
     * @param item
     */
    DynamicListPage.prototype.openSwipeOptions = function (slidingItem, item, it) {
        var _offset = "translate3d(-" + this.offset + "px, 0px, 0px)";
        it.isSlidingItemOpen = true;
        slidingItem.setElementClass("active-sliding", true);
        slidingItem.setElementClass("active-slide", true);
        slidingItem.setElementClass("active-options-right", true);
        item.setElementStyle("transform", _offset);
    };
    /**
     * Thay đổi cách bấm nút đóng lệnh bằng nút trên item sliding
     * @param slidingItem
     */
    DynamicListPage.prototype.closeSwipeOptions = function (slidingItem, it) {
        slidingItem.close();
        slidingItem.setElementClass("active-sliding", false);
        slidingItem.setElementClass("active-slide", false);
        slidingItem.setElementClass("active-options-right", false);
        it.isSlidingItemOpen = false;
    };
    //----------- end of sliding
    //Su dung search
    //---------------------
    DynamicListPage.prototype.goSearch = function () {
        this.isSearch = true;
    };
    DynamicListPage.prototype.searchEnter = function () {
        this.isSearch = false;
    };
    DynamicListPage.prototype.onInput = function (e) {
        console.log(this.searchString);
    };
    DynamicListPage.prototype.onClick = function (btn) {
        //console.log(btn);
        this.processCommand(btn);
    };
    DynamicListPage.prototype.onClickDetails = function (item, btn, it) {
        this.closeSwipeOptions(item, it);
        btn.item = it;
        console.log(btn);
        this.processCommand(btn);
    };
    DynamicListPage.prototype.processCommand = function (btn) {
        var _this = this;
        if (btn.url) {
            if (btn.method === 'GET') {
                var loading_1 = this.loadingCtrl.create({
                    content: 'Đang xử lý dữ liệu từ máy chủ ....'
                });
                loading_1.present();
                var httpOptions = void 0;
                if (btn.next === 'PDF')
                    httpOptions = { 'responseType': 'blob' };
                this.pubService.getDynamicForm(btn.url, httpOptions)
                    .then(function (data) {
                    //console.log(data);
                    loading_1.dismiss();
                    btn.next_data = {
                        step: _this.step,
                        data: data,
                        next: btn.next,
                        item: btn.item
                    };
                    _this.next(btn);
                })
                    .catch(function (err) {
                    console.log('err getDynamicForm', err);
                    loading_1.dismiss();
                });
            }
            else {
                this.next(btn);
            }
        }
        else {
            this.next(btn);
        }
    };
    DynamicListPage.prototype.next = function (btn) {
        var _this = this;
        if (btn) {
            if (btn.next == 'EXIT') {
                this.platform.exitApp();
            }
            else if (btn.next == 'REFRESH') {
                this.refresh(btn.next_data);
            }
            else if (btn.next == 'CLOSE') {
                try {
                    this.viewCtrl.dismiss(btn.next_data);
                }
                catch (e) { }
            }
            else if (btn.next == 'BACK') {
                try {
                    this.navCtrl.pop();
                }
                catch (e) { }
            }
            else if (btn.next == 'ADD' || btn.next == 'EDIT' || btn.next == 'PDF' || btn.next == 'LIST') {
                if (this.callback) {
                    this.callback(this.parent, btn.next_data)
                        .then(function (nextStep) { return _this.next(nextStep); });
                }
            }
            else if (btn.next == 'NEXT' && btn.next_data && btn.next_data.data) {
                btn.next_data.callback = this.callback; //gan lai cac function object
                btn.next_data.parent = this.parent; //gan lai cac function object
                btn.next_data.list = btn.next_data.data; //gan du lieu tra ve tu server
                this.navCtrl.push(DynamicListPage_1, btn.next_data);
            }
        }
    };
    DynamicListPage = DynamicListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic-list',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-list\dynamic-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n\n\n        <ion-buttons *ngIf="!isSearch && dynamicList?.search_bar" start>\n\n            <button ion-button icon-only color="royal" (click)="goSearch()">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n        <ion-buttons end *ngFor="let btn of dynamicList?.buttons">\n\n            <button ion-button icon-only color="{{btn.color}}" (click)="onClick(btn)">\n\n                <ion-icon name="{{btn.icon}}"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n        <ion-searchbar *ngIf="isSearch && dynamicList?.search_bar" placeholder="{{dynamicList?.search_bar.hint}}"\n\n            [(ngModel)]="searchString" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (keyup.enter)="searchEnter()"\n\n            (keyup.esc)="searchEnter()" start>\n\n        </ion-searchbar>\n\n\n\n        <ion-title *ngIf="!isSearch">{{dynamicList?.title}}</ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="background-page gradient">\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col class="background-card gradient grid-border" text-center col-12 offset-xl-3 col-xl-6 offset-lg-3\n\n                col-lg-6 offset-md-2 col-md-8 col-sm-12>\n\n\n\n                <ion-list>\n\n\n\n                    <ion-item-sliding #slidingItem class="background-list" *ngFor="let it of dynamicList?.items">\n\n                        <ion-item #item class="background-item">\n\n                            <ion-icon item-start *ngIf="!isMobile&&it.icon" name="{{it.icon}}" color="{{it.color}}"></ion-icon>\n\n                            <ion-avatar item-start *ngIf="!isMobile&&it.image">\n\n                                <img [src]="it.image">\n\n                            </ion-avatar>\n\n\n\n                            <h1 *ngIf="it.h1">{{it.h1}}</h1>\n\n                            <h2 *ngIf="it.h2">{{it.h2}}</h2>\n\n                            <p text-wrap *ngIf="it.p">{{it.p}}</p>\n\n                            <ion-note text-wrap item-end *ngIf="it.note">{{it.note}}</ion-note>\n\n\n\n                            <button item-end *ngIf="!it.isSlidingItemOpen\n\n                                        &&!isMobile\n\n                                        &&it.options\n\n                                        &&it.options.length>0\n\n                                        &&it.options.length<=3"\n\n                                ion-button icon-only round color="secondary" (click)="openSwipeOptions(slidingItem, item, it)">\n\n                                <ion-icon name="arrow-dropleft-circle"></ion-icon>\n\n                            </button>\n\n\n\n                        </ion-item>\n\n\n\n                        <ion-item-options>\n\n                            <button ion-button *ngFor="let opt of it.options" color="{{opt.color}}" (click)="onClickDetails(slidingItem, opt, it)">\n\n                                <ion-icon name="{{opt.icon}}"></ion-icon>\n\n                                {{opt.name}}\n\n                            </button>\n\n                        </ion-item-options>\n\n\n\n                    </ion-item-sliding>\n\n\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-list\dynamic-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DynamicListPage);
    return DynamicListPage;
    var DynamicListPage_1;
}());

//# sourceMappingURL=dynamic-list.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiStorageService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_rsa__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_rsa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_node_rsa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiAuthService = /** @class */ (function () {
    function ApiAuthService(httpClient, apiStorageService, reqInterceptor) {
        this.httpClient = httpClient;
        this.apiStorageService = apiStorageService;
        this.reqInterceptor = reqInterceptor;
        this.authenticationServer = __WEBPACK_IMPORTED_MODULE_2__apiStorageService__["a" /* ApiStorageService */].authenticationServer;
        this.clientKey = new __WEBPACK_IMPORTED_MODULE_5_node_rsa___default.a({ b: 512 }, { signingScheme: 'pkcs1-sha256' }); //for decrypte
        this.midleKey = new __WEBPACK_IMPORTED_MODULE_5_node_rsa___default.a(null, { signingScheme: 'pkcs1-sha256' }); //for test
        this.serverKey = new __WEBPACK_IMPORTED_MODULE_5_node_rsa___default.a(null, { signingScheme: 'pkcs1-sha256' }); //for crypte
        //key nay de test thu noi bo
        this.midleKey.importKey(this.clientKey.exportKey('public'));
    }
    /**
     * ham nay phai lay sau khi xac thuc token OTP bang dien thoai
     * tranh viec hacker ma hoa du lieu lung tung gui len server
     */
    ApiAuthService.prototype.getServerPublicRSAKey = function () {
        var _this = this;
        //console.log('get Public key');
        if (this.publicKey && this.publicKey.public_key) {
            //console.log('Public key from in session');
            return (new Promise(function (resolve, reject) {
                try {
                    _this.serverKey.importKey(_this.publicKey.public_key);
                }
                catch (err) {
                    reject(err); //bao loi khong import key duoc
                }
                resolve(_this.serverKey);
            }));
        }
        else {
            //console.log('get Public key from server');
            return this.httpClient.get(this.authenticationServer + '/key-json')
                .toPromise()
                .then(function (jsonData) {
                _this.publicKey = jsonData;
                console.log('Public key: ', jsonData);
                if (_this.publicKey && _this.publicKey.public_key) {
                    try {
                        _this.serverKey.importKey(_this.publicKey.public_key);
                    }
                    catch (err) {
                        throw err;
                    }
                    return _this.serverKey;
                }
                else {
                    throw new Error('No public_key exists!');
                }
            });
        }
    };
    ApiAuthService.prototype.login = function (formData) {
        var _this = this;
        this.reqInterceptor.setRequestToken(null); //login nguoi khac
        return this.httpClient.post(this.authenticationServer + '/login', formData)
            .toPromise()
            .then(function (data) {
            _this.userToken = data;
            _this.reqInterceptor.setRequestToken(_this.userToken.token); //login nguoi khac
            return _this.userToken.token;
        });
    };
    ApiAuthService.prototype.logout = function () {
        var _this = this;
        //xoa bo token luu tru
        this.apiStorageService.deleteToken();
        if (this.userToken && this.userToken.token) {
            //truong hop user co luu tren session thi xoa session di
            this.reqInterceptor.setRequestToken(this.userToken.token); //login nguoi khac
            return this.httpClient.get(this.authenticationServer + '/logout')
                .toPromise()
                .then(function (data) {
                //console.log(data);
                _this.userToken = null; //reset token nay
                _this.reqInterceptor.setRequestToken(null);
                return true; //tra ve nguyen mau data cho noi goi logout xu ly
            })
                .catch(function (err) {
                //xem nhu da logout khong cap luu tru
                //console.log(err);
                _this.reqInterceptor.setRequestToken(null);
                _this.userToken = null; //reset token nay
                return true; //tra ve nguyen mau data cho noi goi logout xu ly
            });
        }
        else {
            return (new Promise(function (resolve, reject) {
                resolve(true);
            }));
        }
    };
    ApiAuthService.prototype.register = function (formData) {
        return this.httpClient.post(this.authenticationServer + '/register', formData)
            .toPromise()
            .then(function (data) {
            console.log(data);
            return true;
        })
            .catch(function (err) {
            console.log(err);
            return false;
        });
    };
    ApiAuthService.prototype.editUser = function (formData) {
        //them token vao truoc khi edit
        this.reqInterceptor.setRequestToken(this.userToken.token);
        return this.httpClient.post(this.authenticationServer + '/edit', formData)
            .toPromise()
            .then(function (data) {
            console.log(data);
            return true;
        })
            .catch(function (err) {
            console.log(err);
            return false;
        });
    };
    //lay thong tin nguoi dung de edit
    ApiAuthService.prototype.getEdit = function () {
        var _this = this;
        if (this.userToken && this.userToken.token) {
            //them token vao truoc khi edit
            this.reqInterceptor.setRequestToken(this.userToken.token);
            return this.httpClient.get(this.authenticationServer + '/get-user')
                .toPromise()
                .then(function (jsonData) {
                _this.userSetting = jsonData;
                return jsonData;
            });
        }
        else {
            return (new Promise(function (resolve, reject) {
                _this.userSetting = null;
                reject({ error: 'No token, please login first' }); //bao loi khong import key duoc
            }));
        }
    };
    //get userInfo from token
    ApiAuthService.prototype.getUserInfo = function () {
        //this.userInfo=null;
        try {
            this.userInfo = __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default.a.decode(this.userToken.token);
            //console.log(this.userInfo);
            //chuyen doi duong dan image de truy cap anh dai dien
            if (this.userInfo.image
                &&
                    this.userInfo.image.toLowerCase()
                &&
                    this.userInfo.image.toLowerCase().indexOf('http://') < 0
                &&
                    this.userInfo.image.toLowerCase().indexOf('https://') < 0) {
                //chuyen doi duong dan lay tai nguyen tai he thong
                this.userInfo.image = this.authenticationServer
                    + '/get-avatar/'
                    + this.userInfo.image
                    + '?token=' + this.userToken.token;
                //console.log(this.userInfo.image);
            }
        }
        catch (err) {
            this.userInfo = null;
        }
        return this.userInfo;
    };
    ApiAuthService.prototype.getUserInfoSetting = function () {
        if (this.userSetting.URL_IMAGE
            &&
                this.userSetting.URL_IMAGE.toLowerCase()
            &&
                this.userSetting.URL_IMAGE.toLowerCase().indexOf('http://') < 0
            &&
                this.userSetting.URL_IMAGE.toLowerCase().indexOf('https://') < 0) {
            //chuyen doi duong dan lay tai nguyen tai he thong
            this.userSetting.URL_IMAGE = this.authenticationServer
                + '/get-avatar/'
                + this.userSetting.URL_IMAGE
                + '?token=' + this.userToken.token;
            //console.log(this.userSetting.URL_IMAGE);
        }
        return this.userSetting;
    };
    /**
     * Thiet lap token tu local xem nhu da login
     * @param token
     */
    /* pushToken(token){
        //gan token cho user de xem nhu da login
        this.userToken={token:token};
    } */
    /**
     * Ham nay luu lai token cho phien lam viec sau do
     * dong thoi luu xuong dia token da login thanh cong
     * @param token
     */
    ApiAuthService.prototype.saveToken = function (token) {
        this.apiStorageService.saveToken(token);
        this.userToken = { token: token };
    };
    /**
     * truong hop logout hoac
     * token da het hieu luc,
     * ta se xoa khoi de khong tu dong login duoc nua
     */
    ApiAuthService.prototype.deleteToken = function () {
        this.apiStorageService.deleteToken();
        this.userToken = null;
    };
    /**
     * Gui len server kiem tra token co verify thi tra ve token, khong thi khong ghi
     * @param token
     */
    ApiAuthService.prototype.authorize = function (token) {
        var _this = this;
        return this.httpClient.post(this.authenticationServer + '/authorize-token', JSON.stringify({
            token: token
        }))
            .toPromise()
            .then(function (data) {
            _this.userToken = { token: token };
            return true;
        });
    };
    //send sms
    ApiAuthService.prototype.sendSMS = function (isdn, sms) {
        return this.httpClient.post(this.authenticationServer + '/send-sms', JSON.stringify({
            isdn: isdn,
            sms: sms
        }))
            .toPromise()
            .then(function (data) {
            return data;
        });
    };
    /**
     * yeu cau mot OTP tu phone
     * @param jsonString
     */
    ApiAuthService.prototype.requestIsdn = function (jsonString) {
        //chuyen len bang form co ma hoa
        return this.httpClient.post(this.authenticationServer + '/request-isdn', jsonString)
            .toPromise()
            .then(function (data) {
            return data;
        });
    };
    /**
     * confirm OTP key
     * @param jsonString
     */
    ApiAuthService.prototype.confirmKey = function (jsonString) {
        var _this = this;
        //chuyen di bang form co ma hoa
        return this.httpClient.post(this.authenticationServer + '/confirm-key', jsonString)
            .toPromise()
            .then(function (data) {
            _this.userToken = data;
            if (_this.userToken && _this.userToken.token) {
                _this.reqInterceptor.setRequestToken(_this.userToken.token); //gan token ap dung cho cac phien tiep theo
                return _this.userToken.token;
            }
            else {
                //neu ho nhap so dien thoai nhieu lan sai so spam thi ??
                throw 'Không đúng máy chủ<br>';
            }
        });
    };
    ApiAuthService.prototype.sendUserInfo = function (jsonString) {
        //gui token + userInfo (pass encrypted) --ghi vao csdl
        //tra ket qua cho user
        return true;
    };
    ApiAuthService.prototype.sendImageBase64 = function (jsonString) {
        //gui token + userInfo (pass encrypted) --ghi vao csdl
        //tra ket qua cho user
        return true;
    };
    ApiAuthService.prototype.injectToken = function () {
        this.reqInterceptor.setRequestToken(this.userToken.token);
    };
    ApiAuthService.prototype.postDynamicForm = function (url, json_data, token) {
        //lay token cua phien xac thuc
        this.reqInterceptor.setRequestToken(token ? token : this.userToken ? this.userToken.token : '');
        return this.httpClient.post(url, JSON.stringify(json_data))
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    ApiAuthService.prototype.postDynamicFormData = function (url, form_data, token) {
        //lay token cua phien xac thuc
        this.reqInterceptor.setRequestToken(token ? token : this.userToken ? this.userToken.token : '');
        return this.httpClient.post(url, form_data)
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    ApiAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__["a" /* RequestInterceptor */]])
    ], ApiAuthService);
    return ApiAuthService;
}());

//# sourceMappingURL=apiAuthService.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 213;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHttpPublicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiHttpPublicService = /** @class */ (function () {
    function ApiHttpPublicService(httpClient) {
        this.httpClient = httpClient;
        this.sampleMediasDynamic = {
            title: "Đa phương tiện"
            /* ,buttons: [
                {color:"primary", icon:"arrow-dropdown-circle",  next:"DOWN"}
                , {color:"primary", icon:"arrow-dropup-circle", next:"UP"}
              ] */
            ,
            medias: [
                { image: "assets/imgs/img_forest.jpg",
                    title: "Miền quê yêu dấu",
                    h1: "Chốn yên bình",
                    p: "Là nơi bình yên nhất. Bạn có thể dạo bước trên con đường rợp bóng mát thanh bình đến lạ" },
                { image: "assets/imgs/anh_vua.png",
                    h1: "Nội dung bài viết vể cao tốc",
                    p: "Một bài viết về cao tốc đây nhé" },
                { image: "assets/imgs/ca_nau.jpg",
                    h2: "Cá Nâu ở Quê Mỹ lợi",
                    p: "Cá ngày mồng 3 tết ở quê" },
                { image: "assets/imgs/ca_the.jpg",
                    h1: "Cá Thệ ở Quê Mỹ lợi",
                    p: "Cá ngày mồng 3 tết ở quê, Cá thệ kho dưa rất tuyệt vời" },
                { image: "assets/imgs/img_forest.jpg" },
                { image: "assets/imgs/anh_nho.png",
                    h1: "Mùa trái cây chín đỏ",
                    p: "Trái cây vựa, miền quê nhiều cá lắm đó" }
            ],
            actions: {
                //file: {name:"Open file", size: 480, color:"primary", icon: "image", next:"FILE"}
                // ,
                files: { name: "Open files", color: "primary", icon: "images", next: "FILES" },
                open: { key: "down", link_key: "up", name: "Expand", color: "primary", icon: "arrow-dropdown", next: "DOWN" },
                close: { key: "up", link_key: "down", name: "Collapse", color: "primary", icon: "arrow-dropup", next: "UP" },
                buttons: [
                    { name: "Save", icon: "share-alt", color: "primary", url: "https://c3.mobifone.vn/api/ext-auth/save-user-avatar", method: "FORM-DATA", token: true, next: "SAVE" }
                ]
            }
        };
        this.sampleFormDynamic = {
            title: "Đăng ký",
            items: [
                { name: "Thông tin cá nhân avatar", hint: "Avatar", type: "avatar", url: "https://www.w3schools.com/howto/img_forest.jpg" },
                { id: 1, name: "Check hay không chọn?", type: "check", value: true },
                { id: 2, name: "Thanh Trượt", type: "range", value: 50, min: 0, max: 100 },
                { id: 3, name: "Chọn hay không chọn Toggle?", icon: "plane", type: "toggle" },
                { id: 4, name: "Chọn radio cái nào", type: "radio", icon: "plane", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                { id: 5, name: "Chọn 1 cái nào", type: "select", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                { id: 6, name: "Chọn nhiều cái nào", type: "select_multiple", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                { name: "Ảnh cá nhân", hint: "image viewer", type: "image", url: "https://www.w3schools.com/howto/img_forest.jpg" },
                { id: 8, key: "username", name: "username", hint: "Số điện thoại di động 9 số bỏ số 0 ở đầu", type: "text", input_type: "userName", icon: "information-circle", validators: [{ required: true, min: 9, max: 9, pattern: "^[0-9]*$" }] },
                { id: 9, key: "password", name: "password", hint: "Mật khẩu phải có chữ hoa, chữ thường, ký tự đặc biệt, số", type: "password", input_type: "password", icon: "information-circle", validators: [{ required: true, min: 6, max: 20 }] },
                { id: 10, name: "Họ và tên", type: "text", input_type: "text", icon: "person" },
                { id: 11, name: "Điện thoại", hint: "Yêu cầu định dạng số điện thoại nhé", type: "text", input_type: "tel", icon: "call", validators: [{ pattern: "^[0-9]*$" }] },
                { id: 12, name: "email", hint: "Yêu cầu định dạng email nhé", type: "text", input_type: "email", icon: "mail", validators: [{ pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" }] },
                { id: 13, name: "Ngày bắt đầu", hint: "Chọn ngày", type: "datetime", display: "DD/MM/YYYY", picker: "DD MM YYYY" },
                { id: 14, name: "Thời gian bắt đầu", hint: "Chọn thời gian", type: "datetime", display: "HH:mm:ss", picker: "HH:mm:ss" },
                { id: 15, name: "Nội dung nhập", hint: "Nhập nhiều dòng", type: "text_area" },
                { name: "Thông tin cá nhân", type: "title" },
                { type: "details",
                    details: [
                        {
                            name: "Mã khách hàng",
                            value: "R012234949883"
                        },
                        {
                            name: "Tên khách hàng",
                            value: "Nguyễn Văn B"
                        },
                        {
                            name: "Địa chỉ",
                            value: "263 Nguyễn Văn Linh, Đà nẵng, Việt Nam"
                        },
                        {
                            name: "Hình thức thanh toán",
                            value: "Tiền mặt"
                        },
                    ]
                },
                {
                    type: "button",
                    options: [
                        { name: "Reset", next: "RESET" },
                        { name: "Exit", next: "EXIT" },
                        { name: "Close", next: "CLOSE" },
                        { name: "Back", next: "BACK" },
                        { name: "Continue", next: "CONTINUE" },
                        { name: "Register", next: "BACK", url: "https://chonsoc3.mobifone.vn/ionic/", command: "USER_LOGIN_REDIRECT" },
                        { name: "LOGIN", next: "CONTINUE", url: "https://chonsoc3.mobifone.vn/ionic/", command: "USER_CHECK_EXISTS", token: true }
                    ]
                }
            ]
        };
        this.sampleCardDynamic = {
            title: "Mạng xã hội",
            search_bar: { hint: "Tìm cái gì đó" },
            buttons: [
                { color: "primary", icon: "add", next: "ADD" },
                { color: "primary", icon: "contacts", next: "FRIENDS" },
                { color: "primary", icon: "notifications", next: "NOTIFY",
                    alerts: [
                        "cuong.dq"
                    ]
                },
                { color: "royal", icon: "cog", next: "SETTINGS" }
            ],
            items: [
                { short_detail: {
                        avatar: "assets/imgs/ca_nau.jpg",
                        h1: "Cuong.dq",
                        p: "Cần thiết là nội dung chi tiết đây, có thể viết tóm lượt nhiều thông tin cũng được",
                        note: "1h ago",
                        action: { color: "primary", icon: "more", next: "MORE" }
                    },
                    title: "Chi tiết các ảnh hiển thị",
                    note: "Bài viết chi tiết kết thúc",
                    medias: [
                        { image: "assets/imgs/img_forest.jpg",
                            title: "Miền quê yêu dấu",
                            h1: "Chốn yên bình",
                            p: "Là nơi bình yên nhất. Bạn có thể dạo bước trên con đường rợp bóng mát thanh bình đến lạ" },
                        { image: "assets/imgs/anh_vua.png",
                            h1: "Nội dung bài viết vể cao tốc",
                            p: "Một bài viết về cao tốc đây nhé" },
                        { image: "assets/imgs/ca_nau.jpg",
                            h2: "Cá Nâu ở Quê Mỹ lợi",
                            p: "Cá ngày mồng 3 tết ở quê" },
                        { image: "assets/imgs/ca_the.jpg",
                            h1: "Cá Thệ ở Quê Mỹ lợi",
                            p: "Cá ngày mồng 3 tết ở quê, Cá thệ kho dưa rất tuyệt vời" },
                        { image: "assets/imgs/img_forest.jpg" },
                        { image: "assets/imgs/anh_nho.png",
                            h1: "Mùa trái cây chín đỏ",
                            p: "Trái cây vựa, miền quê nhiều cá lắm đó" }
                    ],
                    content: {
                        title: "Miền quê yêu dấu",
                        paragraphs: [
                            {
                                h2: "Chốn yên bình",
                                p: "Là nơi bình yên nhất. Bạn có thể dạo bước trên con đường rợp bóng mát thanh bình đến lạ",
                                medias: [
                                    { image: "assets/imgs/img_forest.jpg", title: "Cầu Thê Húc xưa", subtitle: "Đoàn Quốc Cường" },
                                    { image: "assets/imgs/anh_vua.png", title: "Cao tốc 34 nghìn tỷ mới khai trương đã hỏng", subtitle: "ảnh Mượn trên mạng " }
                                ]
                            },
                            {
                                h2: "Chốn bóc mẽ",
                                p: "Đây là nơi bóc mẽ thông tin trên mạng. Một sự kiện mà mọi người không thể biết được bằng những phương tiện truyền thông truyền thống",
                                medias: [
                                    { image: "assets/imgs/anh_vua.png", title: "Cao tốc 34 nghìn tỷ mới khai trương đã hỏng", subtitle: "ảnh Mượn trên mạng " }
                                ]
                            }
                        ],
                        note: "Đoàn Quốc Cường 2019"
                    },
                    results: {
                        likes: {
                            like: ["Cuong.dq", "abc", "xyz"],
                            love: ["love"],
                            unlike: ["dog"],
                            sad: ["cat"],
                            angery: ["tiger"]
                        },
                        comments: [
                            { name: "cuong.dq",
                                comment: "day la cai gi vay",
                                time: new Date().getTime()
                            },
                            { name: "cu.dq",
                                comment: "la cai nay do nhe",
                                time: new Date().getTime()
                            }
                        ],
                        shares: [
                            { name: "cuong.dq",
                                comment: "day la cai gi vay",
                                time: new Date().getTime()
                            },
                            { name: "cu.dq",
                                comment: "la cai nay do nhe",
                                time: new Date().getTime()
                            }
                        ]
                    },
                    actions: {
                        like: { name: "LIKE", color: "primary", icon: "thumbs-up", next: "LIKE" },
                        comment: { name: "COMMENT", color: "primary", icon: "chatbubbles", next: "COMMENT" },
                        share: { name: "SHARE", color: "primary", icon: "share-alt", next: "SHARE" }
                    }
                },
                { short_details: {},
                    medias: [
                        { image: "assets/imgs/img_forest.jpg", title: "1 Ảnh", subtitle: "Tác giả Đoàn Quốc Cường" }
                    ],
                    results: {
                        likes: {
                            like: ["Cuong.dq", "abc", "xyz"],
                            love: ["love"]
                        },
                        shares: [
                            { name: "cu.dq",
                                comment: "la cai nay do nhe",
                                time: new Date().getTime()
                            }
                        ]
                    },
                    actions: {
                        like: { name: "Thích", color: "primary", icon: "thumbs-up", next: "LIKE" },
                        comment: { name: "Trò chuyện", color: "primary", icon: "chatbubbles", next: "COMMENT" },
                        share: { name: "Chia sẻ", color: "primary", icon: "share-alt", next: "SHARE" }
                    }
                },
                { short_details: {},
                    medias: [
                        { image: "assets/imgs/ca_nau.jpg", title: "Ảnh 1", subtitle: "Tác giả Đoàn Quốc Cường" },
                        { image: "assets/imgs/img_forest.jpg", title: "Ảnh 2", subtitle: "Tác giả Đoàn Quốc Cường" }
                    ],
                    results: {
                        likes: {
                            sad: ["cat"]
                        },
                        comments: [
                            { name: "cu.dq",
                                comment: "la cai nay do nhe",
                                time: new Date().getTime()
                            }
                        ]
                    },
                    actions: {
                        like: { name: "Thích", color: "primary", icon: "thumbs-up", next: "LIKE" },
                        comment: { name: "Trò chuyện", color: "primary", icon: "chatbubbles", next: "COMMENT" },
                        share: { name: "Chia sẻ", color: "primary", icon: "share-alt", next: "SHARE" }
                    }
                },
                { short_details: {},
                    medias: [
                        { image: "assets/imgs/img_forest.jpg", title: "3 Ảnh", subtitle: "Tác giả Đoàn Quốc Cường" },
                        { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==" },
                        { image: "data:image/gif;base64,R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8+fhw/v739/f+8PD98fH/8mJl+fn/9ZWb8/PzWlwv///6wWGbImAPgTEMImIN9gUFCEm/gDALULDN8PAD6atYdCTX9gUNKlj8wZAKUsAOzZz+UMAOsJAP/Z2ccMDA8PD/95eX5NWvsJCOVNQPtfX/8zM8+QePLl38MGBr8JCP+zs9myn/8GBqwpAP/GxgwJCPny78lzYLgjAJ8vAP9fX/+MjMUcAN8zM/9wcM8ZGcATEL+QePdZWf/29uc/P9cmJu9MTDImIN+/r7+/vz8/P8VNQGNugV8AAF9fX8swMNgTAFlDOICAgPNSUnNWSMQ5MBAQEJE3QPIGAM9AQMqGcG9vb6MhJsEdGM8vLx8fH98AANIWAMuQeL8fABkTEPPQ0OM5OSYdGFl5jo+Pj/+pqcsTE78wMFNGQLYmID4dGPvd3UBAQJmTkP+8vH9QUK+vr8ZWSHpzcJMmILdwcLOGcHRQUHxwcK9PT9DQ0O/v70w5MLypoG8wKOuwsP/g4P/Q0IcwKEswKMl8aJ9fX2xjdOtGRs/Pz+Dg4GImIP8gIH0sKEAwKKmTiKZ8aB/f39Wsl+LFt8dgUE9PT5x5aHBwcP+AgP+WltdgYMyZfyywz78AAAAAAAD///8AAP9mZv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKgALAAAAAA9AEQAAAj/AFEJHEiwoMGDCBMqXMiwocAbBww4nEhxoYkUpzJGrMixogkfGUNqlNixJEIDB0SqHGmyJSojM1bKZOmyop0gM3Oe2liTISKMOoPy7GnwY9CjIYcSRYm0aVKSLmE6nfq05QycVLPuhDrxBlCtYJUqNAq2bNWEBj6ZXRuyxZyDRtqwnXvkhACDV+euTeJm1Ki7A73qNWtFiF+/gA95Gly2CJLDhwEHMOUAAuOpLYDEgBxZ4GRTlC1fDnpkM+fOqD6DDj1aZpITp0dtGCDhr+fVuCu3zlg49ijaokTZTo27uG7Gjn2P+hI8+PDPERoUB318bWbfAJ5sUNFcuGRTYUqV/3ogfXp1rWlMc6awJjiAAd2fm4ogXjz56aypOoIde4OE5u/F9x199dlXnnGiHZWEYbGpsAEA3QXYnHwEFliKAgswgJ8LPeiUXGwedCAKABACCN+EA1pYIIYaFlcDhytd51sGAJbo3onOpajiihlO92KHGaUXGwWjUBChjSPiWJuOO/LYIm4v1tXfE6J4gCSJEZ7YgRYUNrkji9P55sF/ogxw5ZkSqIDaZBV6aSGYq/lGZplndkckZ98xoICbTcIJGQAZcNmdmUc210hs35nCyJ58fgmIKX5RQGOZowxaZwYA+JaoKQwswGijBV4C6SiTUmpphMspJx9unX4KaimjDv9aaXOEBteBqmuuxgEHoLX6Kqx+yXqqBANsgCtit4FWQAEkrNbpq7HSOmtwag5w57GrmlJBASEU18ADjUYb3ADTinIttsgSB1oJFfA63bduimuqKB1keqwUhoCSK374wbujvOSu4QG6UvxBRydcpKsav++Ca6G8A6Pr1x2kVMyHwsVxUALDq/krnrhPSOzXG1lUTIoffqGR7Goi2MAxbv6O2kEG56I7CSlRsEFKFVyovDJoIRTg7sugNRDGqCJzJgcKE0ywc0ELm6KBCCJo8DIPFeCWNGcyqNFE06ToAfV0HBRgxsvLThHn1oddQMrXj5DyAQgjEHSAJMWZwS3HPxT/QMbabI/iBCliMLEJKX2EEkomBAUCxRi42VDADxyTYDVogV+wSChqmKxEKCDAYFDFj4OmwbY7bDGdBhtrnTQYOigeChUmc1K3QTnAUfEgGFgAWt88hKA6aCRIXhxnQ1yg3BCayK44EWdkUQcBByEQChFXfCB776aQsG0BIlQgQgE8qO26X1h8cEUep8ngRBnOy74E9QgRgEAC8SvOfQkh7FDBDmS43PmGoIiKUUEGkMEC/PJHgxw0xH74yx/3XnaYRJgMB8obxQW6kL9QYEJ0FIFgByfIL7/IQAlvQwEpnAC7DtLNJCKUoO/w45c44GwCXiAFB/OXAATQryUxdN4LfFiwgjCNYg+kYMIEFkCKDs6PKAIJouyGWMS1FSKJOMRB/BoIxYJIUXFUxNwoIkEKPAgCBZSQHQ1A2EWDfDEUVLyADj5AChSIQW6gu10bE/JG2VnCZGfo4R4d0sdQoBAHhPjhIB94v/wRoRKQWGRHgrhGSQJxCS+0pCZbEhAAOw==" }
                    ],
                    results: {
                        likes: {
                            like: ["Cuong.dq", "abc", "xyz"]
                        }
                    },
                    actions: {
                        like: { name: "Thích", color: "primary", icon: "thumbs-up", next: "LIKE" },
                        comment: { name: "Trò chuyện", color: "primary", icon: "chatbubbles", next: "COMMENT" },
                        share: { name: "Chia sẻ", color: "primary", icon: "share-alt", next: "SHARE" }
                    }
                },
                { short_details: {},
                    medias: [
                        { image: "assets/imgs/img_forest.jpg", title: "4 Ảnh" },
                        { image: "assets/imgs/ca_the.jpg" },
                        { image: "assets/imgs/anh_vua.png" },
                        { image: "assets/imgs/ca_nau.jpg" }
                    ],
                    actions: {
                        like: { name: "Thích", color: "primary", icon: "thumbs-up", next: "LIKE" },
                        comment: { name: "Trò chuyện", color: "primary", icon: "chatbubbles", next: "COMMENT" },
                        share: { name: "Chia sẻ", color: "primary", icon: "share-alt", next: "SHARE" }
                    }
                }
            ]
        };
        this.sampleListDynamic = {
            title: "Mạng xã hội",
            search_bar: { hint: "Tìm cái gì đó" },
            buttons: [
                { color: "primary", icon: "add", next: "ADD" },
                { color: "primary", icon: "contacts", next: "FRIENDS" },
                { color: "primary", icon: "notifications", next: "NOTIFY",
                    alerts: [
                        "cuong.dq"
                    ]
                },
                { color: "royal", icon: "cog", next: "SETTINGS" }
            ],
            items: [
                {
                    //icon:"contact",
                    image: "assets/imgs/img_forest.jpg",
                    h1: "H1 Tieu de",
                    h2: "H2 Chuong muc",
                    h3: "H3 Muc luc",
                    p: "Sau khi đánh cồng khai trương phiên giao dịch đầu xuân Kỷ Hợi 2019 tại Sở Giao dịch chứng khoán Hà Nội vào sáng 12-2, Thủ tướng Chính phủ Nguyễn Xuân Phúc khẳng định tầm quan trọng của thị trường chứng khoán Việt Nam.",
                    note: "13/02/2019",
                    options: [
                        { name: "Xóa", color: "danger", icon: "trash", next: "EXIT" },
                        { name: "Chỉnh sửa", color: "primary", icon: "create", next: "NEXT" },
                        { name: "Xem chi tiết", color: "secondary", icon: "list", next: "CALLBACK" }
                    ]
                },
                {
                    icon: "contact"
                    //image: "assets/imgs/img_forest.jpg"
                    ,
                    h1: "H1 Tieu de 2",
                    h2: "H2 Chuong muc 2",
                    h3: "H3 Muc luc 2",
                    p: "Trong những ngày đánh bắt đầu năm, 3 ngư dân Quảng Trị đã thu hoạch được mẻ cá bè gần 140 tấn; trong đó một ngư dân trúng mẻ cá siêu khủng nặng hơn 100 tấn.",
                    note: "14/02/2019",
                    options: [
                        { name: "Xóa", color: "danger", icon: "trash", next: "EXIT" },
                        { name: "Chỉnh sửa", color: "primary", icon: "create", next: "NEXT" },
                        { name: "Xem chi tiết", color: "secondary", icon: "list", next: "CALLBACK" }
                    ]
                }
            ]
        };
    }
    /**
     * Lay danh sach cac quoc gia ve Ma so dien thoai, co, ten, ngon ngu, tien...
     */
    ApiHttpPublicService.prototype.getAllCoutries = function () {
        return this.httpClient.get('https://restcountries.eu/rest/v2/all')
            .toPromise() //kieu chuyen ve promise
            .then(function (countries) {
            return countries;
        })
            .catch(function (err) {
            throw err;
        });
    };
    /**
     * Lay danh sach user demo phuc vu so lieu demo
     */
    ApiHttpPublicService.prototype.getRandomUser = function (nRecord) {
        return this.httpClient.get('https://randomuser.me/api/?results=' + nRecord)
            .map(function (res) { return res['results']; }); //kieu chuyen ve observable
    };
    ApiHttpPublicService.prototype.getDataForm = function (form) {
        return this.httpClient.get('assets/data/' + form)
            .toPromise();
    };
    ApiHttpPublicService.prototype.getUserInfoForm = function () {
        return this.httpClient.get('assets/data/form-register.json')
            .toPromise();
    };
    ApiHttpPublicService.prototype.getDemoList = function () {
        return this.sampleListDynamic;
    };
    ApiHttpPublicService.prototype.getDemoForm = function () {
        return this.sampleFormDynamic;
    };
    ApiHttpPublicService.prototype.getDemoCard = function () {
        return this.sampleCardDynamic;
    };
    ApiHttpPublicService.prototype.getDemoMedias = function () {
        return this.sampleMediasDynamic;
    };
    ApiHttpPublicService.prototype.postDynamicForm = function (url, json_data) {
        return this.httpClient.post(url, JSON.stringify(json_data))
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    ApiHttpPublicService.prototype.postDynamicFormData = function (url, form_data) {
        return this.httpClient.post(url, form_data)
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    ApiHttpPublicService.prototype.getDynamicForm = function (url, httpOptions) {
        return this.httpClient.get(url, httpOptions)
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    ApiHttpPublicService.prototype.getDynamicFile = function (url) {
        return this.httpClient.get(url, { 'responseType': 'blob' })
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    ApiHttpPublicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ApiHttpPublicService);
    return ApiHttpPublicService;
}());

//# sourceMappingURL=apiHttpPublicServices.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiResourceServices__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parameters_parameters__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_config__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomerPage = /** @class */ (function () {
    function CustomerPage(navCtrl, formBuilder, auth, storage, resource, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.storage = storage;
        this.resource = resource;
        this.loadingCtrl = loadingCtrl;
        this.slideIndex = 0;
        this.customers = [];
        this.customersOrigin = [];
        this.isSearch = false;
        this.searchString = '';
        this.maxCurrentId = 0;
    }
    CustomerPage.prototype.ngOnInit = function () {
        //khong cho quet bang tay
        this.slides.lockSwipes(true);
        this.userInfo = this.auth.getUserInfo();
        console.log('Login page ready authorize', this.userInfo);
        this.getCustomers(); //cai nay lay tu load trang dau luon
        this.myFromGroup = this.formBuilder.group({
            full_name: '',
            address: '',
            phone: '',
            email: '',
            area: '',
            type: '',
        });
    };
    CustomerPage.prototype.getCustomers = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Đang lấy danh sách khách hàng...'
        });
        loading.present();
        this.resource.getAllCutomers()
            .then(function (customers) {
            _this.customersOrigin = customers;
            _this.customers = _this.customersOrigin;
            //tim gia tri max cua ma khach hang
            _this.maxCurrentId = Math.max.apply(Math, _this.customersOrigin.map(function (o) { return o.stt; }));
            //console.log('MAX Ma khach hang',this.maxCurrentId);
            loading.dismiss();
        })
            .catch(function (err) {
            _this.customersOrigin = [];
            _this.customers = [];
            loading.dismiss();
        });
    };
    CustomerPage.prototype.goSearch = function () {
        this.isSearch = true;
    };
    CustomerPage.prototype.onInput = function (e) {
        var _this = this;
        this.customers = this.customersOrigin.filter(function (x) { return (x.full_name.toLowerCase().indexOf(_this.searchString.toLowerCase()) >= 0
            ||
                x.cust_id.toLowerCase().indexOf(_this.searchString.toLowerCase()) >= 0
            ||
                x.area.toLowerCase().indexOf(_this.searchString.toLowerCase()) >= 0
            ||
                x.staff.toLowerCase().indexOf(_this.searchString.toLowerCase()) >= 0
            ||
                (x.phone && x.phone.indexOf(_this.searchString) >= 0)); });
    };
    CustomerPage.prototype.searchEnter = function () {
        this.isSearch = false;
    };
    CustomerPage.prototype.gotoSlideEdit = function (cus) {
        //console.log('cus',cus);
        this.currentCustomer = cus;
        this.myFromGroup = this.formBuilder.group({
            full_name: cus.full_name,
            address: cus.address ? cus.address : cus.area,
            phone: cus.phone,
            email: cus.email,
            area: cus.area,
            type: cus.cust_type,
        });
        this.goToSlide(1);
    };
    /**
     * Dieu khien slide
     * @param i
     */
    CustomerPage.prototype.goToSlide = function (i) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(i, 500);
        this.slides.lockSwipes(true);
    };
    /**
     * xac dinh slide
     */
    CustomerPage.prototype.slideChanged = function () {
        this.slideIndex = this.slides.getActiveIndex();
    };
    CustomerPage.prototype.goBack = function () {
        this.goToSlide(0);
    };
    /**
     * Lay noi dung co thay doi
     * luu vao array customers luu xuong dia, luu csdl
     */
    CustomerPage.prototype.onSubmit = function () {
        this.currentCustomer.full_name = this.myFromGroup.get('full_name').value;
        this.currentCustomer.address = this.myFromGroup.get('address').value;
        this.currentCustomer.phone = this.myFromGroup.get('phone').value;
        this.currentCustomer.email = this.myFromGroup.get('email').value;
        this.currentCustomer.change_date = new Date().getTime();
        this.goToSlide(0);
    };
    CustomerPage.prototype.goParameters = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__parameters_parameters__["a" /* ParametersPage */]);
    };
    CustomerPage.prototype.userAction = function () {
        //popup menu logout
    };
    CustomerPage.prototype.newCustomter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__config_config__["a" /* ConfigPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], CustomerPage.prototype, "slides", void 0);
    CustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\customer\customer.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n    <ion-buttons *ngIf="!isSearch" start>\n\n      <button ion-button icon-only color="royal" (click)="goSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="primary" (click)="userAction()" [disabled]="userInfo?false:true">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n    </ion-buttons>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="secondary" (click)="goParameters()">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n    <ion-searchbar *ngIf="isSearch" placeholder="Tìm theo mã/tên khách hàng/khu vực/người quản lý hoặc số điện thoại"\n\n      [(ngModel)]="searchString"\n\n      [showCancelButton]="shouldShowCancel"\n\n      (ionInput)="onInput($event)"\n\n      (keyup.enter)="searchEnter()"\n\n      (keyup.esc)="searchEnter()"\n\n      start>\n\n    </ion-searchbar>\n\n    \n\n    <ion-title *ngIf="!isSearch">CUSTOMER</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n\n      <!-- #id=0 -->\n\n      <ion-slide>\n\n          <ion-list>\n\n              <button ion-item *ngFor="let customer of customers" (click)="gotoSlideEdit(customer)">\n\n                \n\n                <ion-avatar item-start>\n\n                  <img src={{customer.image}} *ngIf="customer.image">\n\n                  \n\n                  <button ion-button icon-only color="secondary" round *ngIf="!customer.image">\n\n                      <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n\n\n                </ion-avatar>\n\n                \n\n                <h2>{{customer.cust_id}} - {{customer.full_name}}</h2>\n\n                <p>{{customer.area}} ({{customer.staff}})</p>\n\n                <ion-note>{{customer.cust_type}} {{customer.charge}} </ion-note>\n\n              </button>\n\n          </ion-list>\n\n      </ion-slide>\n\n      \n\n      <!-- #id=1 -->\n\n      <ion-slide>\n\n          <form [formGroup]="myFromGroup" (ngSubmit)="onSubmit()">\n\n\n\n              <ion-item>\n\n                <ion-label floating>Họ và Tên</ion-label>\n\n                <ion-input formControlName="full_name" type="text"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Địa chỉ</ion-label>\n\n                <ion-input formControlName="address" type="address"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Điện thoại</ion-label>\n\n                <ion-input formControlName="phone" type="phone"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Email</ion-label>\n\n                <ion-input formControlName="email" type="email"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Khu vực quản lý</ion-label>\n\n                <ion-input formControlName="area" type="text"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Loại khách hàng</ion-label>\n\n                <ion-input formControlName="type" type="text"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-row>\n\n                <ion-col text-center col-12 col-xl-3 col-lg-4 col-sm-6>\n\n                  <button ion-button block color="primary" type="button" (click)="goBack()">\n\n                    Trở về\n\n                  </button>\n\n                </ion-col>\n\n                <ion-col text-center col-12 offset-xl-6 col-xl-3 offset-lg-4 col-lg-4 col-sm-6>\n\n                  <button ion-button block color="primary" type="submit">\n\n                    Thay đổi\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n              \n\n            </form>\n\n      </ion-slide>\n\n  \n\n      <!-- #id=2 -->\n\n      <!-- #id=4 -->\n\n      <!-- #id=5 -->\n\n      <!-- #id=6 -->\n\n    </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\customer\customer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiResourceServices__["a" /* ApiResourceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], CustomerPage);
    return CustomerPage;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiStorageService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiResourceServices__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParametersPage = /** @class */ (function () {
    function ParametersPage(navCtrl, apiStorageService, http, events, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.apiStorageService = apiStorageService;
        this.http = http;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isSearch = false;
        this.searchString = '';
        this.iconDefault = "list";
        this.parameters = [];
        this.parametersOrigin = [];
        this.children = [];
        this.editButton = 'Sắp xếp';
        this.editing = false;
    }
    ParametersPage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Đang lấy danh sách tham số...'
        });
        loading.present();
        this.http.getParamters()
            .then(function (parameters) {
            _this.parametersOrigin = parameters;
            _this.parameters = _this.parametersOrigin.filter(function (x) { return x.id !== 0; });
            //console.log('param',this.parameters);
            _this.parameters = _this.apiStorageService.createTree(_this.parameters, { id: 'id', parentId: 'type', startWith: 0 });
            //console.log('tree',this.parameters);
            loading.dismiss();
        })
            .catch(function (err) {
            _this.parameters = [];
            _this.parametersOrigin = [];
            loading.dismiss();
        });
    };
    ParametersPage.prototype.goSearch = function () {
        this.isSearch = true;
    };
    ParametersPage.prototype.onInput = function (e) {
        var _this = this;
        var types = this.parametersOrigin.filter(function (y) { return (y.type == 0 && y.description.toLowerCase().indexOf(_this.searchString.toLowerCase()) >= 0); });
        var typesMax = 0;
        if (types.length == 1)
            typesMax = Math.max.apply(Math, types.map(function (o) { return o.id; }));
        this.parameters = this.parametersOrigin.filter(function (x) { return typesMax == 0 || x.type == typesMax; });
    };
    ParametersPage.prototype.searchEnter = function () {
        this.isSearch = false;
    };
    ParametersPage.prototype.addGroupParameters = function () {
    };
    ParametersPage.prototype.toggleEdit = function () {
        var _this = this;
        this.editing = !this.editing;
        if (this.editing) {
            this.editButton = 'Ghi lại';
        }
        else {
            this.editButton = 'Sắp xếp';
            this.children.forEach(function (el, idx) {
                //console.log(el.description,el,idx,el.order_1)
                el.change_time = new Date().getTime();
                el.order_1 = idx;
            });
            //thay the cac gia tri da thay doi trong mang param
            this.parametersOrigin = this.parametersOrigin.map(function (obj) { return _this.children.find(function (o) { return o.id === obj.id; }) || obj; });
            //sap xep lai theo order moi thay
            this.parametersOrigin = this.parametersOrigin.sort(function (a, b) {
                if (a.type < b.type)
                    return -2;
                if (a.type > b.type)
                    return 2;
                if (a.order_1 < b.order_1)
                    return -1;
                if (a.order_1 > b.order_1)
                    return 1;
                return 0;
            });
            console.log(this.parametersOrigin);
        }
    };
    ParametersPage.prototype.reorderData = function (indexes) {
        this.children = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* reorderArray */])(this.children, indexes);
    };
    ParametersPage.prototype.selectGroup = function (parent) {
        if (parent && parent.$children) {
            this.groupName = parent.description;
            //console.log(this.groupName.length);
            this.children = parent.$children;
        }
        else {
            this.children = [];
        }
    };
    //item sliding
    ParametersPage.prototype.more = function (item) {
        console.log('More');
        item.close();
    };
    ParametersPage.prototype.delete = function (item) {
        console.log('Delete');
        item.close();
    };
    ParametersPage.prototype.mute = function (item) {
        console.log('Mute');
        item.close();
    };
    ParametersPage.prototype.archive = function (item) {
        this.expandAction(item, 'archiving', 'Chat was archived.');
    };
    ParametersPage.prototype.download = function (item) {
        this.expandAction(item, 'downloading', 'Login was downloaded.');
    };
    ParametersPage.prototype.expandAction = function (item, _, text) {
        // TODO item.setElementClass(action, true);
        var _this = this;
        setTimeout(function () {
            var toast = _this.toastCtrl.create({
                message: text
            });
            toast.present();
            // TODO item.setElementClass(action, false);
            item.close();
            setTimeout(function () { return toast.dismiss(); }, 2000);
        }, 1500);
    };
    ParametersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-parameters',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\parameters\parameters.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title *ngIf="!isSearch">CÁC THAM SỐ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n  <ion-list>\n\n    \n\n    <ion-item *ngFor="let p of parameters">\n\n      <ion-row>\n\n        <ion-col text-left col-6 col-xl-3 col-lg-4 col-md-5 col-sm-5>\n\n          <ion-buttons>\n\n            <button ion-button color="secondary" outline icon-only (click)="selectGroup(p)">\n\n              <ion-icon [name]="p.icon?p.icon:\'arrow-dropdown-circle\'"></ion-icon>\n\n              {{ p.type }}.{{ p.code?p.code:p.id }} • {{ p.description }}\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n        <ion-col class="hidden-sm-down" text-center col-xl-2 col-lg-2 col-md-2 col-sm-3>\n\n            {{ p.name }}\n\n        </ion-col>\n\n        <ion-col class="hidden-md-down" text-center col-xl-1 col-lg-1 col-md-1>\n\n            {{ p.code }}\n\n        </ion-col>\n\n        <ion-col text-right col-4 col-xl-2 col-lg-2 col-md-2 col-sm-2>\n\n            {{ p.value }}\n\n        </ion-col>\n\n        <ion-col text-right col-2 offset-xl-2 col-xl-2 offset-lg-1 col-lg-2 col-md-2 col-sm-2>\n\n            {{ p.order_1 }}\n\n        </ion-col>\n\n        </ion-row>\n\n        \n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n\n\n      <ion-toolbar color="primary">\n\n          <ion-buttons start>\n\n            <button ion-button color="secondary" outline icon-only class="activated" (click)="addGroupParameters()"  *ngIf="groupName?.length > 0">\n\n              <ion-icon name="add"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n          <ion-buttons end>\n\n              <button ion-button outline icon-start class="activated" (click)="toggleEdit()" *ngIf="children?.length > 1">\n\n                <ion-icon name="swap"></ion-icon>\n\n                {{editButton}}\n\n              </button>\n\n            </ion-buttons>\n\n          <ion-row>\n\n              <ion-col text-center col-6 col-xl-3 col-lg-4 col-md-5 col-sm-5>\n\n                  <ion-title>{{groupName}}</ion-title>\n\n              </ion-col>\n\n              <ion-col class="hidden-sm-down" text-center col-xl-2 col-lg-2 col-md-2 col-sm-3>\n\n                  <ion-title>Tên</ion-title>\n\n              </ion-col>\n\n              <ion-col class="hidden-md-down" text-center col-xl-1 col-lg-1 col-md-1>\n\n                  <ion-title>Mã(code)</ion-title>\n\n              </ion-col>\n\n              <ion-col text-right col-4 col-xl-2 col-lg-2 col-md-2 col-sm-2>\n\n                  <ion-title>Giá trị</ion-title>\n\n              </ion-col>\n\n              <ion-col text-right col-2 offset-xl-2 col-xl-2 offset-lg-1 col-lg-2 col-md-2 col-sm-2>\n\n                  <ion-title>Thứ tự</ion-title>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-toolbar>\n\n      <ion-item-group [reorder]="editing" (ionItemReorder)="reorderData($event)">\n\n        <ion-item-sliding *ngFor="let ch of children" #item>\n\n          <ion-item>\n\n            <ion-icon [name]="ch.icon?ch.icon:\'logo-google\'" item-start></ion-icon>\n\n            <ion-row>\n\n              <ion-col text-left col-6 col-xl-3 col-lg-4 col-md-5 col-sm-5>\n\n                  {{ ch.type }}.{{ ch.code?ch.code:ch.id }} • {{ ch.description }}\n\n              </ion-col>\n\n              <ion-col class="hidden-sm-down" text-center col-xl-2 col-lg-2 col-md-2 col-sm-3>\n\n                {{ ch.name }}\n\n              </ion-col>\n\n              <ion-col class="hidden-md-down" text-center col-xl-1 col-lg-1 col-md-1>\n\n                {{ ch.code }}\n\n              </ion-col>\n\n              <ion-col text-right col-4 col-xl-2 col-lg-2 col-md-2 col-sm-2>\n\n                {{ ch.value }}\n\n              </ion-col>\n\n              <ion-col text-right col-2 offset-xl-2 col-xl-2 offset-lg-1 col-lg-2 col-md-2 col-sm-2>\n\n                {{ ch.order_1 }}\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-item>\n\n\n\n          <ion-item-options side="left">\n\n              <button ion-button color="danger">\n\n                <ion-icon name="trash"></ion-icon>\n\n              </button>\n\n            </ion-item-options>\n\n\n\n            <ion-item-options (ionSwipe)="download(item)" icon-start>\n\n              <button ion-button color="dark" (click)="more(item)">\n\n                <ion-icon name="volume-off"></ion-icon>\n\n                Mute\n\n              </button>\n\n              <button ion-button color="light" expandable (click)="download(item)">\n\n                <ion-icon name="download" class="expand-hide"></ion-icon>\n\n                <div class="expand-hide">Download</div>\n\n                <ion-spinner id="download-spinner"></ion-spinner>\n\n              </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n      </ion-item-group>\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\parameters\parameters.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiResourceServices__["a" /* ApiResourceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ParametersPage);
    return ParametersPage;
}());

//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiStorageService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, apiStorageService, http, events, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.apiStorageService = apiStorageService;
        this.http = http;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.slideIndex = 0;
        this.isSearch = false;
        this.searchString = '';
        this.parameters = [];
        this.parametersOrigin = [];
        this.notifications = 'mute_1';
        this.rating = 2;
        this.editButton = 'Edit';
        this.editing = false;
        ////////////////////
        this.gender = 'f';
        this.gaming = 'n64';
        this.petAlertOpts = {
            title: 'Like Pets?',
            subTitle: 'Select your favorite'
        };
        this.toppings = ['bacon', 'xcheese'];
        this.petData = [
            { text: 'Bird', value: 'bird' },
            { text: 'Cat', value: 'cat' },
            { text: 'Dog', value: 'dog' },
            { text: 'Honey Badger', value: 'honeybadger' },
        ];
        this.hairColorData = [
            { text: 'Brown', value: 'brown' },
            { text: 'Blonde', value: 'blonde' },
            { text: 'Black', value: 'black' },
            { text: 'Red', value: 'red' }
        ];
        // Pre-selected object with different object reference      
        this.hairColor = { text: 'Brown', value: 'brown' };
        this.skittlesData = [
            { text: 'Red', value: 'red' },
            { text: 'Orange', value: 'orange' },
            { text: 'Yellow', value: 'yellow' },
            { text: 'Green', value: 'green' },
            { text: 'Purple', value: 'purple' }
        ];
        // Pre-selected object with different object reference      
        this.skittles = [
            { text: 'Red', value: 'red' },
            { text: 'Purple', value: 'purple' }
        ];
        this.pets = ['cat', 'dog'];
        ////////////////////
    }
    ConfigPage.prototype.ngOnInit = function () {
        // khong cho keo slide bang tay
        this.slides.lockSwipes(true);
        //REORDER ARRAY:
        this.songs = [
            {
                title: 'Everything Beta',
                band: 'Phoria',
                album: 'Volition'
            },
            {
                title: 'Hello',
                band: 'Adele',
                album: '25'
            },
            {
                title: 'Bohemian Rhapsody',
                band: 'Queen',
                album: 'A Night at the Opera'
            },
            {
                title: 'Don\'t Stop Believin\'',
                band: 'Journey',
                album: 'Escape'
            },
            {
                title: 'Smells Like Teen Spirit',
                band: 'Nirvana',
                album: 'Nevermind'
            },
            {
                title: 'All You Need Is Love',
                band: 'The Beatles',
                album: 'Magical Mystery Tour'
            },
            {
                title: 'Hotel California',
                band: 'The Eagles',
                album: 'Hotel California'
            },
            {
                title: 'The Hand That Feeds',
                band: 'Nine Inch Nails',
                album: 'With Teeth'
            },
            {
                title: 'Who Are You',
                band: 'The Who',
                album: 'Who Are You'
            }
        ];
        //itemsliding
        this.chats = [
            {
                img: './assets/avatar-cher.png',
                name: 'Cher',
                message: 'Ugh. As if.',
                time: '9:38 pm'
            }, {
                img: './assets/avatar-dionne.png',
                name: 'Dionne',
                message: 'Mr. Hall was way harsh.',
                time: '8:59 pm'
            }, {
                img: './assets/avatar-murray.png',
                name: 'Murray',
                message: 'Excuse me, "Ms. Dione."',
                time: 'Wed'
            }
        ];
        this.logins = [
            {
                icon: 'logo-twitter',
                name: 'Twitter',
                username: 'admin',
            }, {
                icon: 'logo-github',
                name: 'GitHub',
                username: 'admin37',
            }, {
                icon: 'logo-instagram',
                name: 'Instagram',
                username: 'imanadmin',
            }, {
                icon: 'logo-codepen',
                name: 'Codepen',
                username: 'administrator',
            }
        ];
    };
    ConfigPage.prototype.goSearch = function () {
        this.isSearch = true;
    };
    ConfigPage.prototype.onInput = function (e) {
        //tim va loc nhom tham so theo ten  
    };
    ConfigPage.prototype.searchEnter = function () {
        this.isSearch = false;
    };
    ConfigPage.prototype.addButton = function () {
    };
    ConfigPage.prototype.itemSample = function (sl) {
        this.goToSlide(sl);
    };
    /**
     * Dieu khien slide
     * @param i
     */
    ConfigPage.prototype.goToSlide = function (i) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(i, 300);
        this.slides.lockSwipes(true);
    };
    /**
     * xac dinh slide
     */
    ConfigPage.prototype.slideChanged = function () {
        this.slideIndex = this.slides.getActiveIndex();
    };
    ////////////////////
    ConfigPage.prototype.compareFn = function (option1, option2) {
        return option1.value === option2.value;
    };
    ConfigPage.prototype.monthChange = function (val) {
        console.log('Month Change:', val);
    };
    ConfigPage.prototype.yearChange = function (val) {
        console.log('Year Change:', val);
    };
    ////////////////////
    //REORDER ARRAY:
    ConfigPage.prototype.toggleEdit = function () {
        this.editing = !this.editing;
        if (this.editing) {
            this.editButton = 'Done';
        }
        else {
            this.editButton = 'Edit';
        }
    };
    ConfigPage.prototype.reorderData = function (indexes) {
        this.songs = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* reorderArray */])(this.songs, indexes);
    };
    //item sliding
    ConfigPage.prototype.more = function (item) {
        console.log('More');
        item.close();
    };
    ConfigPage.prototype.delete = function (item) {
        console.log('Delete');
        item.close();
    };
    ConfigPage.prototype.mute = function (item) {
        console.log('Mute');
        item.close();
    };
    ConfigPage.prototype.archive = function (item) {
        this.expandAction(item, 'archiving', 'Chat was archived.');
    };
    ConfigPage.prototype.download = function (item) {
        this.expandAction(item, 'downloading', 'Login was downloaded.');
    };
    ConfigPage.prototype.expandAction = function (item, _, text) {
        // TODO item.setElementClass(action, true);
        var _this = this;
        setTimeout(function () {
            var toast = _this.toastCtrl.create({
                message: text
            });
            toast.present();
            // TODO item.setElementClass(action, false);
            item.close();
            setTimeout(function () { return toast.dismiss(); }, 2000);
        }, 1500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], ConfigPage.prototype, "slides", void 0);
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\config\config.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n\n\n    <ion-buttons *ngIf="!isSearch" start>\n\n      \n\n      <button ion-button icon-only color="royal" (click)="goSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel1" (click)="itemSample(0)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel2" (click)="itemSample(1)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel3" (click)="itemSample(2)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel4" (click)="itemSample(3)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel5" (click)="itemSample(4)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel6" (click)="itemSample(5)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel7" (click)="itemSample(6)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel8" (click)="itemSample(7)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel9" (click)="itemSample(8)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n    </ion-buttons>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addButton()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-searchbar *ngIf="isSearch" placeholder="Tìm theo loại tham số" [(ngModel)]="searchString" [showCancelButton]="shouldShowCancel"\n\n      (ionInput)="onInput($event)" (keyup.enter)="searchEnter()" (keyup.esc)="searchEnter()" start>\n\n    </ion-searchbar>\n\n\n\n    <ion-title *ngIf="!isSearch">MẪU USER INTERFACE IONIC</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="toggleEdit()">{{editButton}}</button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n\n        <!-- #id=0 style chẵn lẻ và bảng (dùng boostrap và css ion-row:nth-of-type-->\n\n        <ion-slide>\n\n          <ion-row>\n\n            <ion-col>\n\n              dong 1 cot 1\n\n            </ion-col>\n\n            <ion-col>\n\n              dong 1 cot 2\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              dong 2 cot 1\n\n            </ion-col>\n\n            <ion-col>\n\n              dong 2 cot 2\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-slide>\n\n        <!-- #id=1 Select Options - chọn 1 hoặc chọn nhiều-->\n\n        <ion-slide>\n\n\n\n            <ion-item>\n\n                <ion-label>Gender - Single Value</ion-label>\n\n                <ion-select [(ngModel)]="gender">\n\n                  <ion-option value="f">Female</ion-option>\n\n                  <ion-option value="m">Male</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n      \n\n              <ion-item>\n\n                <ion-label>Hair Color</ion-label>\n\n                <ion-select [(ngModel)]="hairColor" okText="Okay" cancelText="Dismiss" [compareWith]="compareFn">\n\n                  <ion-option *ngFor="let o of hairColorData" [value]="o">{{o.text}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label>Gender - Popover Interface select</ion-label>\n\n                  <ion-select [(ngModel)]="gender" interface="popover">\n\n                    <ion-option value="f">Female</ion-option>\n\n                    <ion-option value="m">Male</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n        \n\n                <ion-item>\n\n                  <ion-label>Gaming</ion-label>\n\n                  <ion-select [(ngModel)]="gaming" okText="Okay" cancelText="Dismiss" interface="popover">\n\n                    <ion-option value="nes">NES</ion-option>\n\n                    <ion-option value="n64">Nintendo64</ion-option>\n\n                    <ion-option value="ps">PlayStation</ion-option>\n\n                    <ion-option value="genesis">Sega Genesis</ion-option>\n\n                    <ion-option value="saturn">Sega Saturn</ion-option>\n\n                    <ion-option value="snes">SNES</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n        \n\n                <ion-item>\n\n                  <ion-label>Date</ion-label>\n\n                  <ion-select (ionChange)="monthChange($event)" interface="popover">\n\n                    <ion-option value="01">January</ion-option>\n\n                    <ion-option value="02">February</ion-option>\n\n                    <ion-option value="03" selected="true">March</ion-option>\n\n                    <ion-option value="04">April</ion-option>\n\n                    <ion-option value="05">May</ion-option>\n\n                    <ion-option value="06">June</ion-option>\n\n                    <ion-option value="07">July</ion-option>\n\n                    <ion-option value="08">August</ion-option>\n\n                    <ion-option value="09">September</ion-option>\n\n                    <ion-option value="10">October</ion-option>\n\n                    <ion-option value="11">November</ion-option>\n\n                    <ion-option value="12">December</ion-option>\n\n                  </ion-select>\n\n                  <ion-select (ionChange)="yearChange($event)" interface="popover">\n\n                    <ion-option>1989</ion-option>\n\n                    <ion-option>1990</ion-option>\n\n                    <ion-option>1991</ion-option>\n\n                    <ion-option>1992</ion-option>\n\n                    <ion-option>1993</ion-option>\n\n                    <ion-option selected="true">1994</ion-option>\n\n                    <ion-option>1995</ion-option>\n\n                    <ion-option>1996</ion-option>\n\n                    <ion-option>1997</ion-option>\n\n                    <ion-option>1998</ion-option>\n\n                    <ion-option>1999</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n\n\n\n\n                <ion-item>\n\n                    <ion-label>Toppings - Multiple Select</ion-label>\n\n                    <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!">\n\n                      <ion-option value="bacon">Bacon</ion-option>\n\n                      <ion-option value="olives">Black Olives</ion-option>\n\n                      <ion-option value="xcheese">Extra Cheese</ion-option>\n\n                      <ion-option value="peppers">Green Peppers</ion-option>\n\n                      <ion-option value="mushrooms">Mushrooms</ion-option>\n\n                      <ion-option value="onions">Onions</ion-option>\n\n                      <ion-option value="pepperoni">Pepperoni</ion-option>\n\n                      <ion-option value="pineapple">Pineapple</ion-option>\n\n                      <ion-option value="sausage">Sausage</ion-option>\n\n                      <ion-option value="Spinach">Spinach</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n        \n\n                  <ion-item>\n\n                    <ion-label>Pets</ion-label>\n\n                    <ion-select [(ngModel)]="pets" multiple="true" [selectOptions]="petAlertOpts">\n\n                      <ion-option *ngFor="let o of petData" [value]="o.value">{{o.text}}</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n        \n\n                  <ion-item>\n\n                    <ion-label>Skittles</ion-label>\n\n                    <ion-select [(ngModel)]="skittles" multiple="true" okText="Okay" cancelText="Dismiss" [compareWith]="compareFn">\n\n                      <ion-option *ngFor="let o of skittlesData" [value]="o">{{o.text}}</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n        \n\n                  <ion-item>\n\n                    <ion-label>Disabled</ion-label>\n\n                    <ion-select multiple disabled="true">\n\n                      <ion-option checked="true">Selected Text</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n\n\n\n\n              <ion-item>\n\n                  <ion-label>Mute Notifications - Action sheet interface select</ion-label>\n\n                  <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                    <ion-option value="mute_15">For 15 Minutes</ion-option>\n\n                    <ion-option value="mute_1">For 1 Hour</ion-option>\n\n                    <ion-option value="mute_23">For 24 Hours</ion-option>\n\n                    <ion-option value="mute_inf">Until I turn it back on</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n      \n\n                <ion-item>\n\n                  <ion-label>Rating</ion-label>\n\n                  <ion-select [(ngModel)]="rating" interface="action-sheet">\n\n                    <ion-option value="1">1 Star</ion-option>\n\n                    <ion-option value="2">2 Stars</ion-option>\n\n                    <ion-option value="3">3 Stars</ion-option>\n\n                    <ion-option value="4">4 Stars</ion-option>\n\n                    <ion-option value="5">5 Stars</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n      \n\n        </ion-slide>\n\n        \n\n        <!-- #id=2 Toolbar navbar -- Thanh công cụ có nút kèm theo - nhiều nút - tập nhóm nút - tìm kiếm-->\n\n        <ion-slide>\n\n              <ion-toolbar>\n\n                <ion-title>This is the title that never ends. It just goes on and on my friend.</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar>\n\n                <button ion-button menuToggle>\n\n                  <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only showWhen="ios">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-only>\n\n                    <ion-icon name="search"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button color="secondary" icon-only>\n\n                    <ion-icon name="more"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Default</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="primary">\n\n                <ion-buttons start>\n\n                  <button ion-button showWhen="ios" icon-only>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-only>\n\n                    <ion-icon name="search"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button color="secondary" icon-only>\n\n                    <ion-icon name="more"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Primary</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="primary">\n\n                <ion-buttons start>\n\n                  <button ion-button showWhen="ios" icon-only class="activated">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-only class="activated">\n\n                    <ion-icon name="search"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button color="secondary" icon-only class="activated">\n\n                    <ion-icon name="more"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Primary.activated</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="secondary">\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only color="primary">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-start solid>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                    Solid\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Secondary</ion-title>\n\n                <ion-buttons end>\n\n                  <button ion-button icon-end solid color="danger">\n\n                    Help\n\n                    <ion-icon name="help-circle"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="secondary">\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only color="primary" class="activated">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-start solid class="activated">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                    Solid\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Secondary Activated</ion-title>\n\n                <ion-buttons end>\n\n                  <button ion-button icon-end solid color="danger" class="activated">\n\n                    Help\n\n                    <ion-icon name="help-circle"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="dark">\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only outline>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-start outline>\n\n                    <ion-icon name="star"></ion-icon>\n\n                    Star\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button icon-only color="secondary" outline>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Dark</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="dark">\n\n                <ion-buttons start>\n\n                  <button ion-button outline icon-only class="activated">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button outline icon-start class="activated">\n\n                    <ion-icon name="star"></ion-icon>\n\n                    Star\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button color="secondary" outline icon-only class="activated">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Dark.activated</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="danger">\n\n                <ion-buttons start>\n\n                  <button ion-button icon-start>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                    Clear\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button icon-end>\n\n                    Edit\n\n                    <ion-icon name="create"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Danger</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="danger">\n\n                <button ion-button menuToggle>\n\n                  <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only>\n\n                    <ion-icon name="star"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Danger</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="light">\n\n                <ion-buttons start>\n\n                  <button ion-button icon-start>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                    Clear\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button icon-end>\n\n                    Edit\n\n                    <ion-icon name="create"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Light</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="light">\n\n                <button ion-button menuToggle>\n\n                  <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only>\n\n                    <ion-icon name="star"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Light</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar transparent>\n\n                <ion-buttons end>\n\n                  <button ion-button #button1 icon-only (click)="buttonClick(button1)">\n\n                    <ion-icon name="star"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Transparent</ion-title>\n\n                <button ion-button menuToggle right>\n\n                  <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="greyYellow">\n\n                <ion-title>Grey Yellow</ion-title>\n\n              </ion-toolbar>\n\n              <ion-toolbar color="greyWhite">\n\n                <ion-title>Grey White</ion-title>\n\n              </ion-toolbar>\n\n        </ion-slide>\n\n\n\n        <!-- #id=3 card header card footer - Các thẻ có ảnh, đính ảnh, hiển thị ảnh -->\n\n        <ion-slide>\n\n            <ion-card color="secondary">\n\n                <ion-card-header>\n\n                  Card Header\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                  <ion-card-title>\n\n                    Title\n\n                  </ion-card-title>\n\n                  Some normal text in content.\n\n                  <h3>h3 in content</h3>\n\n                  <p>\n\n                    Paragraph in content.\n\n                  </p>\n\n                  <p>\n\n                    Another paragraph in content.\n\n                  </p>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            \n\n              <ion-card color="primary" class="rainbow-content">\n\n                <ion-card-header>\n\n                  Card Header\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                  <ion-card-title>\n\n                    Title\n\n                  </ion-card-title>\n\n                  Some normal text in content.\n\n                  <h3>h3 in content</h3>\n\n                  <p>\n\n                    Paragraph in content.\n\n                  </p>\n\n                  <p>\n\n                    Another paragraph in content.\n\n                  </p>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            \n\n              <ion-card color="primary">\n\n                <ion-card-header>\n\n                  Card Header\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                  <ion-card-title>\n\n                    Title\n\n                  </ion-card-title>\n\n                  Some normal text in content.\n\n                  <h3>h3 in content</h3>\n\n                  <p>\n\n                    Paragraph in content.\n\n                  </p>\n\n                  <p>\n\n                    Another paragraph in content.\n\n                  </p>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            \n\n              <ion-list>\n\n                <ion-item *ngFor="let item of [0,1,2,3,4,5,6,7,8,9]">\n\n                  {{ item }}\n\n                </ion-item>\n\n              </ion-list>\n\n        </ion-slide>\n\n\n\n        <!-- #id=4 Form nhập liệu -->\n\n        <ion-slide>\n\n            <form>\n\n            <ion-item>\n\n                <ion-label>Username</ion-label>\n\n                <ion-input></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label fixed>Website</ion-label>\n\n                <ion-input type="url"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Email</ion-label>\n\n                <ion-input type="email"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label stacked>Phone</ion-label>\n\n                <ion-input type="tel"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label>Toggle</ion-label>\n\n                <ion-toggle></ion-toggle>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label>Checkbox</ion-label>\n\n                <ion-checkbox></ion-checkbox>\n\n              </ion-item>\n\n\n\n              <ion-buttons start>\n\n                  <button ion-button type="submit" icon-end round>\n\n                      SUBMIT\n\n                      <ion-icon name="share-alt"></ion-icon>\n\n                  </button>\n\n              </ion-buttons>\n\n\n\n            </form>\n\n        </ion-slide>\n\n\n\n        <!-- #id=5 - nút cài đặt - nhóm tiêu đề-->\n\n        <ion-slide>\n\n          \n\n            <ion-list>\n\n                <ion-list-header color="secondary">\n\n                  Các thiết lập mẫu - Settings\n\n                  <button ion-button icon-only item-end clear>\n\n                    <ion-icon name="cog"></ion-icon>\n\n                  </button>\n\n                </ion-list-header>\n\n            \n\n                <ion-item-group>\n\n                  <ion-item>\n\n                    <ion-icon name="plane" item-start color="danger"></ion-icon>\n\n                    <ion-label>Airplane Mode</ion-label>\n\n                    <ion-toggle color="secondary"></ion-toggle>\n\n                  </ion-item>\n\n            \n\n                  <button ion-item>\n\n                    <ion-icon name="wifi" item-start color="primary"></ion-icon>\n\n                    <ion-label>Wi-Fi</ion-label>\n\n                    <ion-note item-end>The Interwebz</ion-note>\n\n                  </button>\n\n            \n\n                  <button ion-item>\n\n                    <ion-icon name="bluetooth" item-start color="primary"></ion-icon>\n\n                    <ion-label>Bluetooth</ion-label>\n\n                    <ion-note item-end>Off</ion-note>\n\n                  </button>\n\n                </ion-item-group>\n\n            \n\n                <ion-item-divider color="primary">\n\n                  Other Settings\n\n                  <button ion-button item-end outline color="light">Clear</button>\n\n                </ion-item-divider>\n\n            \n\n                <button ion-item>\n\n                  <ion-icon name="call" item-start color="secondary"></ion-icon>\n\n                  <ion-label>Cellular</ion-label>\n\n                </button>\n\n            \n\n                <button ion-item>\n\n                  <ion-icon name="link" item-start color="secondary"></ion-icon>\n\n                  <ion-label>Personal Hotspot</ion-label>\n\n                  <ion-note item-end>Off</ion-note>\n\n                </button>\n\n            </ion-list>\n\n            \n\n            <ion-list radio-group>\n\n              <ion-list-header>\n\n                <ion-icon item-start name="phone-portrait"></ion-icon>\n\n                Silence Phone\n\n              </ion-list-header>\n\n          \n\n              <ion-item>\n\n                <ion-label color="dark">Always</ion-label>\n\n                <ion-radio value="always" checked></ion-radio>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label color="dark">Only while phone is locked</ion-label>\n\n                <ion-radio value="locked"></ion-radio>\n\n              </ion-item>\n\n\n\n            </ion-list>\n\n          \n\n            <ion-list>\n\n              <ion-list-header>\n\n                Apps Installed\n\n              </ion-list-header>\n\n          \n\n              <ion-item>\n\n                <ion-icon name="ionic" item-start color="primary"></ion-icon>\n\n                <ion-label>Ionic View</ion-label>\n\n                <button ion-button outline item-end>Uninstall</button>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-icon name="brush" item-start color="primary"></ion-icon>\n\n                <ion-label>Ionic Creator</ion-label>\n\n                <button ion-button outline item-end>Uninstall</button>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-icon name="logo-octocat" item-start color="dark"></ion-icon>\n\n                <ion-label>Hubstruck</ion-label>\n\n                <button ion-button outline item-end>Uninstall</button>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-icon name="paw" item-start color="danger"></ion-icon>\n\n                <ion-label>Barkpark</ion-label>\n\n                <button ion-button outline item-end>Uninstall</button>\n\n              </ion-item>\n\n            </ion-list>    \n\n\n\n        </ion-slide>\n\n\n\n        <!-- #id=6 Sắp xếp lại trật tự của mảng bằng cách kéo thả từng dòng-->\n\n        <ion-slide>\n\n          <ion-list class="chat-sliding-demo">\n\n            <ion-list-header>\n\n              Playlist\n\n            </ion-list-header>\n\n        \n\n            <ion-item-group [reorder]="editing" (ionItemReorder)="reorderData($event)">\n\n              <ion-item *ngFor="let song of songs">\n\n                <h2>{{ song.title }}</h2>\n\n                <p>{{ song.band }} • {{ song.album }}</p>\n\n              </ion-item>\n\n            </ion-item-group>\n\n          </ion-list>\n\n        </ion-slide>\n\n\n\n        <!-- #id=7 Slide quẹt qua/về để thao tác trên từng dòng có nhiều nút đính kèm-->\n\n        <ion-slide>\n\n          \n\n          <ion-list class="chat-sliding-demo">\n\n            <ion-list-header>\n\n              Chats\n\n            </ion-list-header>\n\n        \n\n            <ion-item-sliding *ngFor="let chat of chats" #item>\n\n              <ion-item>\n\n                <ion-avatar item-start>\n\n                  <img [src]="chat.img">\n\n                </ion-avatar>\n\n                <h2>{{chat.name}}</h2>\n\n                <p>{{chat.message}}</p>\n\n                <ion-note item-end>\n\n                  {{chat.time}}\n\n                </ion-note>\n\n              </ion-item>\n\n        \n\n              <ion-item-options>\n\n                <button ion-button color="secondary" (click)="more(item)">\n\n                  <ion-icon name="menu"></ion-icon>\n\n                  More\n\n                </button>\n\n                <button ion-button color="dark" (click)="mute(item)">\n\n                  <ion-icon name="volume-off"></ion-icon>\n\n                  Mute\n\n                </button>\n\n                <button ion-button color="danger" (click)="delete(item)">\n\n                  <ion-icon name="trash"></ion-icon>\n\n                  Delete\n\n                </button>\n\n              </ion-item-options>\n\n        \n\n              <ion-item-options side="left" (ionSwipe)="archive(item)">\n\n                <button ion-button color="primary" expandable (click)="archive(item)">\n\n                  <ion-icon name="archive" class="expand-hide"></ion-icon>\n\n                  <div class="expand-hide">Archive</div>\n\n                  <ion-spinner id="archive-spinner"></ion-spinner>\n\n                </button>\n\n              </ion-item-options>\n\n            </ion-item-sliding>\n\n          </ion-list>\n\n        \n\n          <ion-list class="login-sliding-demo">\n\n            <ion-list-header>\n\n              Logins\n\n            </ion-list-header>\n\n        \n\n            <ion-item-sliding *ngFor="let login of logins" #item>\n\n              <ion-item>\n\n                <ion-icon [name]="login.icon" item-start></ion-icon>\n\n                <h2>{{login.name}}</h2>\n\n                <p>{{login.username}}</p>\n\n              </ion-item>\n\n              <ion-item-options side="left">\n\n                <button ion-button color="danger">\n\n                  <ion-icon name="trash"></ion-icon>\n\n                </button>\n\n              </ion-item-options>\n\n              <ion-item-options (ionSwipe)="download(item)" icon-start>\n\n                <button ion-button color="dark" (click)="more(item)">\n\n                  <ion-icon name="volume-off"></ion-icon>\n\n                  Mute\n\n                </button>\n\n                <button ion-button color="light" expandable (click)="download(item)">\n\n                  <ion-icon name="download" class="expand-hide"></ion-icon>\n\n                  <div class="expand-hide">Download</div>\n\n                  <ion-spinner id="download-spinner"></ion-spinner>\n\n                </button>\n\n              </ion-item-options>\n\n            </ion-item-sliding>\n\n        \n\n          </ion-list>\n\n          \n\n        </ion-slide>\n\n\n\n        <!-- #id=8 Nút chứa nhiều icon, và nút outline phù hợp từng dòng lệnh-->\n\n        <ion-slide>\n\n            <ion-list>\n\n                <ion-item-divider color="primary">\n\n                    CÁC KỲ HÓA ĐƠN ĐÃ PHÁT HÀNH\n\n                  <button *ngIf="billCycles?.length>0" ion-button item-end outline color="danger" (click)="editInvoices()">PHÁT HÀNH LẠI</button>\n\n                  <button ion-button item-end outline color="light">PHÁT HÀNH MỚI</button>\n\n                </ion-item-divider>\n\n                <button ion-item>\n\n                    <ion-icon name="calculator" item-start color="danger"></ion-icon>\n\n                    <h2>Kỳ tháng:</h2>\n\n                    <p>Ngày phát hành </p>\n\n                    <ion-note>Số lượng khách hàng </ion-note>\n\n                    <ion-icon name="print" item-end color="primary"></ion-icon>\n\n                </button>\n\n          </ion-list>\n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\config\config.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicCardPage = /** @class */ (function () {
    function DynamicCardPage(platform, authService, pubService, viewCtrl, navCtrl, loadingCtrl, navParams) {
        this.platform = platform;
        this.authService = authService;
        this.pubService = pubService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.isSearch = false;
        this.searchString = '';
        this.shouldShowCancel = true;
        this.isMobile = false;
    }
    DynamicCardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dynamicCardsOrigin = this.navParams.get("list") ? this.navParams.get("list") : {};
        this.refresh();
        this.callback = this.navParams.get("callback");
        this.step = this.navParams.get("step");
        var call_waiting_data = this.navParams.get("call_waiting_data");
        if (call_waiting_data) {
            call_waiting_data()
                .then(function (list) {
                _this.refresh(list);
            });
        }
    };
    DynamicCardPage.prototype.refresh = function (newList) {
        if (newList)
            this.dynamicCardsOrigin = newList;
        this.isMobile = (this.platform.platforms()[0] === 'mobile');
        this.dynamicCards = this.dynamicCardsOrigin;
    };
    DynamicCardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic-card',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-card\dynamic-card.html"*/'<ion-header>\n\n        <ion-navbar>\n\n                <ion-buttons *ngIf="!isSearch && dynamicCards?.search_bar" start>\n\n                        <button ion-button icon-only color="royal" (click)="goSearch()">\n\n                            <ion-icon name="search"></ion-icon>\n\n                        </button>\n\n                    </ion-buttons>\n\n            \n\n                    <ion-buttons end *ngFor="let btn of dynamicCards?.buttons">\n\n                        <button ion-button icon-only color="{{btn.color}}" (click)="onClick(btn)">\n\n                            <ion-icon name="{{btn.icon}}"></ion-icon>\n\n                        </button>\n\n                    </ion-buttons>\n\n            \n\n                    <ion-searchbar *ngIf="isSearch && dynamicCards?.search_bar" placeholder="{{dynamicCards?.search_bar.hint}}" [(ngModel)]="searchString"\n\n                        [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (keyup.enter)="searchEnter()"\n\n                        (keyup.esc)="searchEnter()" start>\n\n                    </ion-searchbar>\n\n            \n\n                    <ion-title *ngIf="!isSearch">{{dynamicCards?.title}}</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    \n\n    <ion-content no-padding class="background-page gradient">\n\n    \n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-12 offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 offset-md-2 col-md-8 col-sm-12>\n\n                    <!-- Card mô tả hình ảnh nỗi bật với các nội dung liên quan -->\n\n                    <ion-card class="background-card gradient grid-border">\n\n                        <ion-item class="background-card gradient grid-border">\n\n                            <ion-icon item-start name="contact" color="primary"></ion-icon>\n\n                            <!-- <ion-avatar item-start><img src="assets/imgs/img_forest.jpg"></ion-avatar> -->\n\n                            <h2> H1 Group</h2>\n\n                            <h2> H2 Nick name</h2>\n\n                            <h3> H3 Nội dung xem xét hình ảnh</h3>\n\n                            <p> P Nội dung tóm lượt</p>\n\n                            <ion-note item-end>12h ago</ion-note>\n\n                            <button item-end icon-only ion-button clear small color="primary">\n\n                                <ion-icon name=\'more\'></ion-icon>\n\n                            </button>\n\n                        </ion-item>\n\n    \n\n                        <!-- 5+ pics -->\n\n                        <ion-row>\n\n                            <ion-col no-padding class="padding-col" col-6>\n\n                                <div class="image-height-2" [style.background-image]="\'url(assets/imgs/img_forest.jpg)\'"></div>\n\n                            </ion-col>\n\n                            <ion-col no-padding class="padding-col" col-6>\n\n                                <div class="image-height-2" [style.background-image]="\'url(assets/imgs/anh_vua.png)\'"></div>\n\n                            </ion-col>\n\n                            <ion-col no-padding class="padding-col" col-4>\n\n                                <div class="image-height-3" [style.background-image]="\'url(assets/imgs/ca_nau.jpg)\'"></div>\n\n                            </ion-col>\n\n                            <ion-col no-padding class="padding-col" col-4>\n\n                                <div class="image-height-3" [style.background-image]="\'url(assets/imgs/ca_the.jpg)\'"></div>\n\n                            </ion-col>\n\n                            <ion-col no-padding class="padding-col card-background-page" col-4>\n\n                                <div class="image-height-3" [style.background-image]="\'url(assets/imgs/img_forest.jpg)\'"></div>\n\n                                <div class="card-title">12+</div>\n\n                            </ion-col>\n\n                        </ion-row>\n\n    \n\n                        <!-- 1 pics -->\n\n                        <div class="one-image card-background-page">\n\n                            <img src="assets/imgs/img_forest.jpg" />\n\n                            <div class="card-title">Ảnh background</div>\n\n                            <div class="card-subtitle">Tác giả Đoàn Quốc Cường</div>\n\n                        </div>\n\n    \n\n                        <!-- 2 pics -->\n\n                        <ion-row>\n\n                            <ion-col no-padding col-6>\n\n                                <div class="image-height-2" [style.background-image]="\'url(assets/imgs/anh_vua.png)\'"></div>\n\n                            </ion-col>\n\n                            <ion-col no-padding col-6>\n\n                                <div class="image-height-2" [style.background-image]="\'url(assets/imgs/img_forest.jpg)\'"></div>\n\n                            </ion-col>\n\n                        </ion-row>\n\n    \n\n                        <!-- 3 pics -->\n\n                        <ion-row>\n\n                            <ion-col no-padding class="padding-col" col-12 col-md-4 col-xl-4>\n\n                                <div class="image-height-1" [style.background-image]="\'url(assets/imgs/img_forest.jpg)\'"></div>\n\n                            </ion-col>\n\n                            <ion-col no-padding class="padding-col" col-6 col-md-4 col-xl-4>\n\n                                <div class="image-height-2" [style.background-image]="\'url(assets/imgs/ca_nau.jpg)\'"></div>\n\n                            </ion-col>\n\n                            <ion-col no-padding class="padding-col" col-6 col-md-4 col-xl-4>\n\n                                <div class="image-height-2" [style.background-image]="\'url(assets/imgs/img_forest.jpg)\'"></div>\n\n                            </ion-col>\n\n                        </ion-row>\n\n    \n\n                        <!-- 4 pics -->\n\n                        <ion-row>\n\n                            <ion-col no-padding class="padding-col" col-6 col-md-6 col-xl-3>\n\n                                <div class="image-height-2" [style.background-image]="\'url(assets/imgs/img_forest.jpg)\'"></div>\n\n                            </ion-col>\n\n                            <ion-col no-padding class="padding-col" col-6 col-md-6 col-xl-3>\n\n                                <div class="image-height-2" [style.background-image]="\'url(assets/imgs/ca_nau.jpg)\'"></div>\n\n                            </ion-col>\n\n                            <ion-col no-padding class="padding-col" col-6 col-md-6 col-xl-3>\n\n                                <div class="image-height-2" [style.background-image]="\'url(assets/imgs/anh_vua.png)\'"></div>\n\n                            </ion-col>\n\n                            <ion-col no-padding class="padding-col" col-6 col-md-6 col-xl-3>\n\n                                <div class="image-height-2" [style.background-image]="\'url(assets/imgs/img_forest.jpg)\'"></div>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        \n\n                        <ion-card-content>\n\n                            <ion-card-title>\n\n                                Title Nine Inch Nails Live\n\n                            </ion-card-title>\n\n                            <h1>H1 đây nè</h1>\n\n                            <h2>H2 đây nè</h2>\n\n                            <h3>H3 đây nè</h3>\n\n                            <p style="text-align: justify;">\n\n                                P Đoạn văn <br>\n\n                                mages often vary in size, so it is important that they adopt a consistent style throughout\n\n                                your app.\n\n                            </p>\n\n                            <img src="assets/imgs/img_forest.jpg" />\n\n                            <p style="text-align: justify;">\n\n                                P Đoạn văn 2 <br>\n\n                                mages often vary in size, so it is important that they adopt a consistent style throughout\n\n                                your app.\n\n                            </p>\n\n                            <div class="card-background-page">\n\n                                <img src="assets/imgs/img_forest.jpg" />\n\n                                <div class="card-title">Ảnh background</div>\n\n                                <div class="card-subtitle">Tác giả Đoàn Quốc Cường</div>\n\n                            </div>\n\n                            <p style="text-align: justify;">\n\n                                P Đoạn văn 3 <br>\n\n                                mages often vary in size, so it is important that they adopt a consistent style throughout\n\n                                your app.\n\n                            </p>\n\n                            <ion-note>Tác giả ghi chú</ion-note>\n\n                        </ion-card-content>\n\n                        <ion-row no-padding>\n\n                            <ion-col align-self-center text-center>\n\n                                <ion-icon color="primary" icon-start clear small name="thumbs-up"></ion-icon>\n\n                                <ion-icon color="danger" icon-start clear small name="heart"></ion-icon>\n\n                                <ion-icon color="dark" icon-start clear small name="thumbs-down"></ion-icon>\n\n                                <ion-icon color="royal" icon-start clear small name="sad"></ion-icon>\n\n                                <ion-icon color="angery" icon-start clear small name="ios-sad"></ion-icon>\n\n                                <ion-note>12</ion-note>\n\n                            </ion-col>\n\n                            <ion-col align-self-center text-center>\n\n                                <ion-note>4 Comments</ion-note>\n\n                            </ion-col>\n\n                            <ion-col align-self-center text-center>\n\n                                <ion-note>2 Shares</ion-note>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-row no-padding>\n\n                            <ion-col text-center>\n\n                                <button ion-button clear small color="primary" icon-start>\n\n                                    <ion-icon name=\'thumbs-up\'></ion-icon>\n\n                                    Like\n\n                                </button>\n\n                            </ion-col>\n\n                            <ion-col text-center>\n\n                                <button ion-button clear small color="primary" icon-start>\n\n                                    <ion-icon name=\'chatbubbles\'></ion-icon>\n\n                                    Comment\n\n                                </button>\n\n                            </ion-col>\n\n                            <ion-col text-center>\n\n                                <button ion-button clear small color="primary" icon-start>\n\n                                    <ion-icon name=\'share-alt\'></ion-icon>\n\n                                    Share\n\n                                </button>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-card>\n\n                </ion-col>\n\n    \n\n            </ion-row>\n\n    \n\n        </ion-grid>\n\n    \n\n    </ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-card\dynamic-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DynamicCardPage);
    return DynamicCardPage;
}());

//# sourceMappingURL=dynamic-card.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamic_form_mobile_dynamic_form_mobile__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiResourceServices__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiAuthService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dynamic_list_dynamic_list__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, pubService, auth, resources, apiStorageService, platform, modalCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.pubService = pubService;
        this.auth = auth;
        this.resources = resources;
        this.apiStorageService = apiStorageService;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.customers = [];
        this.maxCurrentId = 0;
        //console.log('1. Constructor Home');
    }
    HomePage.prototype.ngOnInit = function () {
        //console.log('2. ngOnInit Home');
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('3. ionViewDidLoad Home');
        var loading = this.loadingCtrl.create({
            content: 'Đang lấy danh sách khách hàng...'
        });
        loading.present();
        this.resources.getAllCutomers()
            .then(function (customers) {
            _this.customers = customers;
            _this.maxCurrentId = Math.max.apply(Math, _this.customers.map(function (o) { return o.stt; }));
            //chuyen doi thanh ds
            var list = {
                title: "Customers",
                search_bar: { hint: "Tìm cái gì đó" },
                buttons: [
                    { color: "primary", icon: "add", next: "ADD" },
                    { color: "primary", icon: "contacts", next: "FRIENDS" },
                    { color: "primary", icon: "notifications", next: "NOTIFY",
                        alerts: [
                            "cuong.dq"
                        ]
                    },
                    { color: "royal", icon: "cog", next: "SETTINGS" }
                ],
                items: []
            };
            customers.forEach(function (el) {
                list.items.push({
                    icon: "contact",
                    h2: el.full_name,
                    h3: el.area,
                    p: el.cust_type,
                    note: el.charge,
                    options: [
                        { name: "Xóa", color: "danger", icon: "trash", next: "EXIT" },
                        { name: "Chỉnh sửa", color: "primary", icon: "create", next: "NEXT" },
                        { name: "Xem chi tiết", color: "secondary", icon: "list", next: "CALLBACK" }
                    ]
                });
            });
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__dynamic_list_dynamic_list__["a" /* DynamicListPage */], {
                parent: _this,
                callback: _this.callbackFunction,
                step: 'list-customers',
                list: list
            });
            loading.dismiss();
        })
            .catch(function (err) {
            _this.customers = [];
            loading.dismiss();
        });
    };
    /**
     *  ham goi lai gui ket qua new button next
     *
     * @param that chinh la this cua parent callback
     * @param res
     */
    HomePage.prototype.callbackFunction = function (that, res) {
        return new Promise(function (resolve, reject) {
            console.log('parent:', that);
            resolve();
        });
    };
    HomePage.prototype.openModal = function (data) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__dynamic_form_mobile_dynamic_form_mobile__["a" /* DynamicFormMobilePage */], data);
        modal.present();
    };
    HomePage.prototype.presentAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'For Administrator',
            subTitle: msg,
            buttons: ['Dismiss']
        }).present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\home\home.html"*/'<ion-content padding class="background-page gradient" ></ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_6__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiResourceServices__["a" /* ApiResourceService */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignaturePage = /** @class */ (function () {
    function SignaturePage(platform) {
        this.platform = platform;
        this.signatureForm = {
            //title:"Ký",
            colors: [
                { name: 'dr-dark', color: "#0f0f0f" },
                { name: 'dr-green', color: "#1abc9c" },
                { name: 'dr-blue', color: "#3498db" },
                { name: 'dr-vilolet', color: "#9b59b6" },
                { name: 'dr-orange', color: "#e67e22" },
                { name: 'dr-red', color: "#e74c3c" }
            ],
            buttons: [
                { color: "primary", icon: "add", next: "ADD" },
                { color: "primary", icon: "contacts", next: "FRIENDS" },
                { color: "primary", icon: "notifications", next: "NOTIFY",
                    alerts: [
                        "cuong.dq"
                    ]
                },
                { color: "royal", icon: "cog", next: "SETTINGS" }
            ],
            brushes: [
                { size: 5, color: "dark", style: "0.25em", icon: "radio-button-on" },
                { size: 10, color: "dark", style: "0.5em", icon: "radio-button-on" },
                { size: 20, color: "dark", style: "1em", icon: "radio-button-on" },
                { size: 50, color: "dark", style: "2em", icon: "radio-button-on" },
                { size: 100, color: "dark", style: "3em", icon: "radio-button-on" }
            ]
        };
        this.storedImages = [];
    }
    SignaturePage.prototype.ngOnInit = function () {
        this.currentColor = this.signatureForm.colors[0];
        this.brushSize = this.signatureForm.brushes[0];
    };
    SignaturePage.prototype.ionViewDidEnter = function () {
        var itemHeight = this.fixedContainer.nativeElement.offsetHeight;
        var scroll = this.content.getScrollElement();
        itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
        scroll.style.marginTop = itemHeight + "px";
    };
    SignaturePage.prototype.ionViewDidLoad = function () {
        this.canvasElement = this.canvas.nativeElement;
        this.canvasElement.width = this.platform.width() + '';
        this.canvasElement.height = "200";
    };
    SignaturePage.prototype.changeColor = function (cl) {
        this.currentColor = cl.color;
        this.signatureForm.brushes.forEach(function (el) {
            el.color = cl.name;
        });
    };
    SignaturePage.prototype.changeSize = function (size) {
        this.brushSize = size;
    };
    SignaturePage.prototype.handleStart = function (ev) {
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        this.lastX = ev.touches[0].pageX - canvasPosition.x;
        this.lastY = ev.touches[0].pageY - canvasPosition.y;
    };
    SignaturePage.prototype.handleMove = function (ev) {
        var canvasPosition = this.canvasElement.getBoundingClientRect();
        var currentX = ev.touches[0].pageX - canvasPosition.x;
        var currentY = ev.touches[0].pageY - canvasPosition.y;
        var ctx = this.canvasElement.getContext('2d');
        ctx.lineJoin = "round";
        ctx.strokeStyle = this.currentColor;
        ctx.lineWidth = this.brushSize;
        ctx.beginPath();
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(currentX, currentY);
        ctx.closePath();
        ctx.stroke();
        this.lastX = currentX;
        this.lastY = currentY;
    };
    SignaturePage.prototype.clearCanvas = function () {
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    SignaturePage.prototype.saveCanvasImage = function () {
        var dataUrl = this.canvasElement.toDataURL();
        var saveObj = { img: dataUrl };
        this.storedImages.push(saveObj);
        var ctx = this.canvasElement.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
        var name = new Date().getTime() + '.png';
        // let path = this.file.dataDirectory;
        // let options: IWriteOptions = { replace: true };
        var data = dataUrl.split(',')[1];
        var blob = this.b64toBlob(data, 'image/png');
        // this.file.writeFile(path, name, blob, options).then(res => {
        //   this.storeImage(name);
        // }, err => {
        //   console.log('error: ', err);
        // });
    };
    SignaturePage.prototype.storeImage = function (imageName) {
        var saveObj = { img: imageName };
        this.storedImages.push(saveObj);
        // this.storage.set(STORAGE_KEY, this.storedImages).then(() => {
        //   setTimeout(() =>  {
        //     this.content.scrollToBottom();
        //   }, 500);
        // });
    };
    SignaturePage.prototype.removeImageAtIndex = function (index) {
        var removed = this.storedImages.splice(index, 1);
        // this.file.removeFile(this.file.dataDirectory, removed[0].img).then(res => {
        // }, err => {
        //   console.log('remove err; ' ,err);
        // });
        // this.storage.set(STORAGE_KEY, this.storedImages);
    };
    SignaturePage.prototype.getImagePath = function (imageName) {
        // let path = this.file.dataDirectory + imageName;
        // // https://ionicframework.com/docs/wkwebview/#my-local-resources-do-not-load
        // path = normalizeURL(path);
        // return path;
    };
    SignaturePage.prototype.b64toBlob = function (b64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('imageCanvas'),
        __metadata("design:type", Object)
    ], SignaturePage.prototype, "canvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], SignaturePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fixedContainer'),
        __metadata("design:type", Object)
    ], SignaturePage.prototype, "fixedContainer", void 0);
    SignaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signature',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\signature\signature.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n\n\n    <ion-buttons left>\n\n      <button *ngFor="let color of signatureForm.colors" icon-only ion-button (click)="changeColor(color)">\n\n        <ion-icon color="{{color.name}}" name="brush"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-title *ngIf="signatureForm.title">{{signatureForm.title}}</ion-title>\n\n\n\n    <ion-buttons right *ngFor="let btn of signatureForm.buttons">\n\n      <button class="badge-background" ion-button icon-only color="{{btn.color}}" (click)="onClickHeader(btn)">\n\n        <ion-icon name="{{btn.icon}}"></ion-icon>\n\n        <ion-badge class="badge-alert" color="danger" *ngIf="btn.alerts">{{\n\n          (btn.alerts?.length>99?\'99+\':btn.alerts?.length) }}</ion-badge>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding no-bounce>\n\n  <div class="draw-background" #fixedContainer ion-fixed>\n\n    <canvas #imageCanvas (touchstart)="handleStart($event)" (touchmove)="handleMove($event)"></canvas>\n\n    <button ion-button full (click)="saveCanvasImage()">Save Image</button>\n\n  </div>\n\n\n\n  <ion-list *ngIf="storedImages.length > 0">\n\n      <ion-list-header>Previous Drawings</ion-list-header>\n\n      <ion-card *ngFor="let obj of storedImages; let i = index">\n\n        <ion-card-content>\n\n          <img [src]="obj.img">\n\n        </ion-card-content>\n\n        <ion-row>\n\n          <button ion-button full icon-only color="danger" (click)="removeImageAtIndex(i)">\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n        </ion-row>\n\n      </ion-card>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons left>\n\n      <button color="dark" ion-button icon-only (click)="clearCanvas()">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons right>\n\n      <button *ngFor="let brush of signatureForm.brushes" color="{{brush.color}}" ion-button icon-only (click)="changeSize(brush.size)">\n\n        <ion-icon [style.font-size]="brush.style" name="{{brush.icon}}"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\signature\signature.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], SignaturePage);
    return SignaturePage;
}());

//# sourceMappingURL=signature.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(329);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var STORAGE_KEY = 'Cng@3500888';
var sessionStorageAvailable = Object(__WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__["c" /* isStorageAvailable */])(sessionStorage);
var ApiStorageService = /** @class */ (function () {
    function ApiStorageService(storage) {
        this.storage = storage;
    }
    ApiStorageService_1 = ApiStorageService;
    ApiStorageService.prototype.doSomethingAwesome = function () {
        var awesomenessLevel = this.storage.get(STORAGE_KEY) || 1337;
        this.storage.set(STORAGE_KEY, awesomenessLevel + 1);
        return awesomenessLevel;
    };
    ApiStorageService.prototype.save = function (key, value) {
        this.storage.set(key, value);
    };
    ApiStorageService.prototype.read = function (key) {
        return this.storage.get(key);
    };
    ApiStorageService.prototype.delete = function (key) {
        this.storage.remove(key);
    };
    ApiStorageService.prototype.getStatus = function () {
        return "Session storage available: " + sessionStorageAvailable;
    };
    ApiStorageService.prototype.saveToken = function (value) {
        this.save('token', value);
    };
    ApiStorageService.prototype.getToken = function () {
        ApiStorageService_1.token = this.read('token');
        return ApiStorageService_1.token;
    };
    ApiStorageService.prototype.deleteToken = function () {
        ApiStorageService_1.token = null;
        this.delete('token');
    };
    ApiStorageService.prototype.saveUserRooms = function (user, rooms) {
        this.save('#rooms#' + user.username, JSON.stringify(rooms));
    };
    ApiStorageService.prototype.deleteUserRooms = function (user) {
        this.delete('#rooms#' + user.username);
    };
    ApiStorageService.prototype.getUserRooms = function (user) {
        try {
            var rooms = JSON.parse(this.read('#rooms#' + user.username));
            return rooms ? rooms : [];
        }
        catch (e) {
            return [];
        }
    };
    ApiStorageService.prototype.saveUserLastTime = function (user, time) {
        this.save('#last_time#' + user.username, time.toString());
    };
    ApiStorageService.prototype.deleteUserLastTime = function (user) {
        this.delete('#last_time#' + user.username);
    };
    ApiStorageService.prototype.getUserLastTime = function (user) {
        try {
            var time = parseInt(this.read('#last_time#' + user.username));
            return time;
        }
        catch (e) {
            return 0;
        }
    };
    ApiStorageService.prototype.saveUserRoomMessages = function (user, room) {
        this.save('#message' + room.name + '#' + user.username, JSON.stringify(room.messages));
        this.saveUserLastTime(user, new Date().getTime());
    };
    ApiStorageService.prototype.getUserRoomMessages = function (user, room) {
        try {
            var messages = JSON.parse(this.read('#message' + room.name + '#' + user.username));
            return messages ? messages : [];
        }
        catch (e) {
            return [];
        }
    };
    /**
     * Chuyển đổi một mảng có cấu trúc thành cấu trúc cây (như oracle)
     * Phục vụ quản lý theo tiêu chí hình cây
     * @param arrIn
     * @param option
     * @param level
     */
    ApiStorageService.prototype.createTree = function (arrIn, option, level) {
        var _this = this;
        var myLevl = level ? level : 0;
        var myOption = option ? option : { id: 'id', parentId: 'parentId', startWith: null };
        var roots = arrIn.filter(function (x) { return x[option.parentId] != x[option.id] && x[option.parentId] == option.startWith; });
        //console.log('roots',roots);
        if (roots.length > 0) {
            myLevl++;
            roots.forEach(function (el) {
                //console.log('myId',el[option.id], myLevl);
                el.$level = myLevl;
                el.$children = arrIn.filter(function (x) { return x[option.parentId] != x[option.id] && x[option.parentId] == el[option.id]; });
                if (el.$children.length > 0) {
                    el.$children.forEach(function (ch) {
                        ch.$level = myLevl + 1;
                        //console.log('myId child',ch[option.id], ch.$level);
                        myOption.startWith = ch[option.id];
                        ch.$children = _this.createTree(arrIn, myOption, ch.$level);
                    });
                }
                else {
                    el.$isleaf = 1;
                    el.$children = undefined;
                }
            });
            return roots;
        }
        else {
            arrIn.forEach(function (el) {
                el.$level = myLevl;
                el.$isleaf = 1;
            });
            return arrIn; //khong tao duoc cay vi khong tim thay
        }
    };
    //public static resourceServer = ''; 
    ApiStorageService.resourceServer = 'https://qld-invoices.herokuapp.com';
    //public static resourceServer = 'http://localhost:8080'; 
    //public static resourceServer = 'https://c3.mobifone.vn';
    ApiStorageService.authenticationServer = 'https://c3.mobifone.vn/api/ext-auth';
    ApiStorageService = ApiStorageService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__["a" /* LOCAL_STORAGE */])),
        __metadata("design:paramtypes", [Object])
    ], ApiStorageService);
    return ApiStorageService;
    var ApiStorageService_1;
}());

//# sourceMappingURL=apiStorageService.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_printer_printer__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_phone_login_phone__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dynamic_form_mobile_dynamic_form_mobile__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_dynamic_form_web_dynamic_form_web__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_dynamic_list_dynamic_list__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dynamic_card_social_dynamic_card_social__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dynamic_medias_dynamic_medias__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_dynamic_card_dynamic_card__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_signature_signature__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sample_icons_sample_icons__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_config_config__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pdf_pdf__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_parameters_parameters__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_customer_customer__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_invoice_invoice__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_report_report__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular_webstorage_service__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_apiStorageService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_in_app_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_apiAuthService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_apiImageService__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_apiHttpPublicServices__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_apiResourceServices__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__interceptors_requestInterceptor__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__interceptors_responseInterceptor__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_phone_login_phone__["a" /* LoginPhonePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dynamic_form_mobile_dynamic_form_mobile__["a" /* DynamicFormMobilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dynamic_form_web_dynamic_form_web__["a" /* DynamicFormWebPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dynamic_list_dynamic_list__["a" /* DynamicListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dynamic_card_social_dynamic_card_social__["a" /* DynamicCardSocialPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dynamic_medias_dynamic_medias__["a" /* DynamicMediasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dynamic_card_dynamic_card__["a" /* DynamicCardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signature_signature__["a" /* SignaturePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_parameters_parameters__["a" /* ParametersPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_invoice_invoice__["a" /* InvoicePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_printer_printer__["a" /* PrinterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sample_icons_sample_icons__["a" /* SampleIconsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_config_config__["a" /* ConfigPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_29_angular_webstorage_service__["b" /* StorageServiceModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_phone_login_phone__["a" /* LoginPhonePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dynamic_form_mobile_dynamic_form_mobile__["a" /* DynamicFormMobilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_dynamic_form_web_dynamic_form_web__["a" /* DynamicFormWebPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_dynamic_list_dynamic_list__["a" /* DynamicListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dynamic_card_social_dynamic_card_social__["a" /* DynamicCardSocialPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dynamic_medias_dynamic_medias__["a" /* DynamicMediasPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_dynamic_card_dynamic_card__["a" /* DynamicCardPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_signature_signature__["a" /* SignaturePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_parameters_parameters__["a" /* ParametersPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_invoice_invoice__["a" /* InvoicePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_printer_printer__["a" /* PrinterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sample_icons_sample_icons__["a" /* SampleIconsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_config_config__["a" /* ConfigPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_32__services_apiAuthService__["a" /* ApiAuthService */],
                __WEBPACK_IMPORTED_MODULE_33__services_apiImageService__["a" /* ApiImageService */],
                __WEBPACK_IMPORTED_MODULE_30__services_apiStorageService__["a" /* ApiStorageService */],
                __WEBPACK_IMPORTED_MODULE_35__services_apiResourceServices__["a" /* ApiResourceService */],
                __WEBPACK_IMPORTED_MODULE_34__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
                __WEBPACK_IMPORTED_MODULE_36__interceptors_requestInterceptor__["a" /* RequestInterceptor */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_36__interceptors_requestInterceptor__["a" /* RequestInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_37__interceptors_responseInterceptor__["a" /* ResponseInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, alertCtrl, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this.platforms = ['android', 'cordova', 'core', 'ios', 'ipad', 'iphone', 'mobile', 'mobileweb', 'phablet', 'tablet', 'windows', 'electron'];
        this.isWeb = false; //platform.is('core');
        this.isWebMobile = false; //platform.is('mobile');
        this.isApp = false; //platform.is('cordova');
        this.isIos = false; //platform.is('ios'); //he dieu hanh ios
        this.isAndroid = false; //platform.is('ios'); //he dieu hanh ios
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //form web = true, form mobile = false
            if (_this.platform.platforms()[0] === 'core')
                _this.isWeb = true;
            var currentPlatform = [];
            _this.platforms.forEach(function (e) {
                if (_this.platform.is(e))
                    currentPlatform.push(e);
            });
            /* this.presentAlert({
              title:"PLATFORM is",
              message: 'Platform is ' + JSON.stringify(currentPlatform)
              + '<br> platform.platforms(): ' +JSON.stringify(this.platform.platforms()),
              ok_text:'OK'
            }); */
            _this.viewDidLoad();
        });
    };
    MyApp.prototype.viewDidLoad = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
    };
    MyApp.prototype.presentAlert = function (jsonConfirm) {
        var alert = this.alertCtrl.create({
            title: jsonConfirm.title,
            message: jsonConfirm.message,
            buttons: [
                {
                    text: jsonConfirm.ok_text,
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiStorageService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiResourceService = /** @class */ (function () {
    function ApiResourceService(httpClient, reqInterceptor //muon thay doi token gui kem thi ghi token moi
    ) {
        this.httpClient = httpClient;
        this.reqInterceptor = reqInterceptor; //muon thay doi token gui kem thi ghi token moi
        this.resourceServer = __WEBPACK_IMPORTED_MODULE_2__apiStorageService__["a" /* ApiStorageService */].resourceServer;
    }
    /**
     * Tao file pdf de in an
     * trả về danh mục các file hóa đơn đã tạo trên máy chủ
     * [{201901_print_all.pdf}]
     * @param billCycle
     */
    ApiResourceService.prototype.createPdfInvoices = function (billCycle) {
        return this.httpClient.post(this.resourceServer + '/db/pdf-invoices', JSON.stringify({
            bill_cycle: billCycle.bill_cycle,
            cust_id: billCycle.cust_id,
            background: billCycle.background
        }))
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    /**
     * get hoa don (phai tao truoc, neu khong se không có file)
     * @param yyyymm_cust_id
     */
    ApiResourceService.prototype.getPdfInvoices = function (yyyymm_cust_id) {
        var httpOptions = {
            'responseType': 'arraybuffer'
            //'responseType'  : 'blob' as 'json'        //This also worked
        };
        return this.httpClient.get(this.resourceServer + '/db/pdf-invoices/' + yyyymm_cust_id, httpOptions)
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    /**
     * billCycle =
     * {
     * bill_cycle:
     * bill_date:
     * invoice_no:
     * cust_id:
     * }
     */
    ApiResourceService.prototype.createInvoices = function (billCycle) {
        return this.httpClient.post(this.resourceServer + '/db/create-invoices', JSON.stringify({
            bill_cycle: billCycle.bill_cycle,
            bill_date: billCycle.bill_date,
            invoice_no: billCycle.invoice_no,
            cust_id: billCycle.cust_id
        }))
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    /**
     * yyyymm_custId = 201901 hoac 201901/R000000001
     */
    ApiResourceService.prototype.getInvoices = function (yyyymm_custId) {
        return this.httpClient.get(this.resourceServer + '/db/json-invoices/' + yyyymm_custId)
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    /**
     * lay ky cuoc da tao trong csdl
     */
    ApiResourceService.prototype.getBillCycle = function () {
        return this.httpClient.get(this.resourceServer + '/db/json-bill-cycles')
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    ApiResourceService.prototype.getAllCutomers = function () {
        return this.httpClient.get(this.resourceServer + '/db/json-customers')
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    ApiResourceService.prototype.getParamters = function () {
        return this.httpClient.get(this.resourceServer + '/db/json-parameters')
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            return rtn;
        });
    };
    /**
     * truyen len {token:'...'}
     * @param jsonString
     */
    ApiResourceService.prototype.authorizeFromResource = function (token) {
        var _this = this;
        this.reqInterceptor.setRequestToken(token); //neu thanh cong thi cac phien sau se gan them bear
        return this.httpClient.post(this.resourceServer + '/auth/authorize-token', JSON.stringify({ check: true }))
            .toPromise()
            .then(function (data) {
            var rtn;
            rtn = data;
            _this.token = token;
            return rtn;
        })
            .catch(function (err) {
            _this.token = null;
            _this.reqInterceptor.setRequestToken(null);
            throw err;
        });
    };
    ApiResourceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__["a" /* RequestInterceptor */] //muon thay doi token gui kem thi ghi token moi
        ])
    ], ApiResourceService);
    return ApiResourceService;
}());

//# sourceMappingURL=apiResourceServices.js.map

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_print_js__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_print_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_print_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrinterPage = /** @class */ (function () {
    function PrinterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PrinterPage.prototype.printPdf = function () {
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()('/test/manual/test.pdf');
    };
    PrinterPage.prototype.printPdfWithModal = function () {
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: '/test/manual/test.pdf',
            type: 'pdf',
            showModal: true
        });
    };
    PrinterPage.prototype.printPdfWithModalAndCloseCallback = function () {
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: '/test/manual/test.pdf',
            type: 'pdf',
            showModal: true,
            onPrintDialogClose: function () { return console.log('The print dialog was closed'); },
            onPdfOpen: function () { return console.log('Pdf was opened in a new tab due to an incompatible browser'); }
        });
    };
    PrinterPage.prototype.printHtml = function () {
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: 'test',
            type: 'html'
        });
    };
    PrinterPage.prototype.printHtmlCustomStyle = function () {
        var style = '@page { margin: 0 } @media print { h1 { color: blue } }';
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: 'test',
            type: 'html',
            style: style,
            scanStyles: false
        });
    };
    PrinterPage.prototype.printHtmlCss = function () {
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: 'test',
            type: 'html',
            css: 'test.css',
            scanStyles: false
        });
    };
    PrinterPage.prototype.printJson = function () {
        var data = [];
        for (var i = 0; i <= 1000; i++) {
            data.push({
                test1: this.createRandomString(),
                test2: this.createRandomString()
            });
        }
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: data,
            properties: [{
                    field: 'test1',
                    displayName: 'test 1',
                    columnSize: 1
                }, {
                    field: 'test2',
                    displayName: 'test 2',
                    columnSize: 4
                }],
            type: 'json'
        });
    };
    PrinterPage.prototype.printStyledJson = function () {
        var data = [
            {
                test1: 'Test1 string',
                test2: 'Test2 string'
            },
            {
                test1: 'more Test1 string',
                test2: 'more Test2 string'
            }
        ];
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({ printable: data, properties: ['test1', 'test2'], type: 'json', gridStyle: 'border: 2px solid #3971A5;', gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;' });
    };
    PrinterPage.prototype.printNestedJson = function () {
        var data = [];
        for (var i = 0; i <= 100; i++) {
            data.push({
                test1: this.createRandomString(),
                test2: {
                    a: this.createRandomString()
                }
            });
        }
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: data,
            properties: [{
                    field: 'test1',
                    displayName: 'test 1',
                    columnSize: 1
                }, {
                    field: 'test2.a',
                    displayName: 'test 2 - a',
                    columnSize: 4
                }],
            type: 'json'
        });
    };
    PrinterPage.prototype.createRandomString = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    PrinterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-printer',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\printer\printer.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <button color="primary" ion-fab (click)="printPdfWithModal()">\n\n        <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n    </button>\n\n\n\n    <button color="primary" ion-fab (click)="printJson()">\n\n        <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n    </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\printer\printer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], PrinterPage);
    return PrinterPage;
}());

//# sourceMappingURL=printer.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiResourceServices__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiImageService__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPhonePage = /** @class */ (function () {
    function LoginPhonePage(formBuilder, auth, resources, alertCtrl, apiStorageService, apiImageService, loadingCtrl, navCtrl) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.resources = resources;
        this.alertCtrl = alertCtrl;
        this.apiStorageService = apiStorageService;
        this.apiImageService = apiImageService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.slideIndex = 0;
        this.isImageViewer = false;
        this.resourceImages = []; //: { imageViewer: any, file: any, name: string }[] = [];
    }
    LoginPhonePage.prototype.ngOnInit = function () {
        var _this = this;
        this.slides.lockSwipes(true);
        this.phoneFormGroup = this.formBuilder.group({
            phone: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("^[0-9]*$"),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(9),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(9)
                ]]
        });
        this.keyFormGroup = this.formBuilder.group({
            key: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(6)
                ]
            ],
        });
        this.userFromGroup = this.formBuilder.group({
            password: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3)
                ]
            ],
            nickname: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(30)
                ]
            ],
            name: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(50)
                ]
            ],
            email: '',
            address: ''
        });
        this.imageFormGroup = this.formBuilder.group({
            image: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]
            ],
        });
        if (this.apiStorageService.getToken()) {
            this.auth.authorize(this.apiStorageService.getToken())
                .then(function (status) {
                _this.auth.getServerPublicRSAKey()
                    .then(function (pk) {
                    var userInfo = _this.auth.getUserInfo();
                    console.log('Save token user', userInfo);
                    //kiem tra token chua khai nickname, va image thi phai nhay vao slide khai thong tin
                    if (userInfo)
                        //cho phep truy cap thi gui token kem theo
                        _this.auth.injectToken(); //Tiêm token cho các phiên làm việc lấy số liệu cần xác thực
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
                })
                    .catch(function (err) {
                    console.log('Public key err', err);
                });
            })
                .catch(function (err) {
                console.log('Token invalid: ', err);
                _this.auth.deleteToken();
            });
        }
    };
    LoginPhonePage.prototype.onSubmit = function () {
        var _this = this;
        var phone = this.phoneFormGroup.value.phone;
        this.auth.requestIsdn(JSON.stringify({
            phone: phone
        }))
            .then(function (data) {
            var a;
            a = data;
            console.log('server response:', a);
            console.log('token', a.token);
            console.log('data.database_out', a.database_out); //hack
            if (a.database_out.status == 1 && a.token) {
                _this.token = a.token;
                _this.goToSlide(1); //ve form confirmKey
            }
            else if (phone === '123456789') {
                _this.presentAlert('Số điện thoại ' + phone + ' chỉ dùng để debug.<br> vui lòng nhập key OTP debug : ' + a.database_out.message + ' để tiếp tục');
                _this.token = a.token;
                _this.goToSlide(1); //ve form confirmKey
            }
            else {
                //neu ho nhap so dien thoai nhieu lan sai so spam thi ??
                _this.presentAlert('Số điện thoại ' + phone + ' không hợp lệ.<br> Vui lòng liên hệ Quản trị hệ thống');
            }
        })
            .catch(function (err) {
            _this.presentAlert('Lỗi xác thực <br>' + JSON.stringify(err ? err.error : 'Unknow!'));
        });
    };
    LoginPhonePage.prototype.onSubmitKey = function () {
        var _this = this;
        var key = this.keyFormGroup.value.key;
        //console.log(key);
        this.auth.confirmKey(JSON.stringify({
            key: key,
            token: this.token
        }))
            .then(function (token) {
            _this.token = token;
            _this.auth.saveToken(token); //luu tru tren xac thuc va xuong dia
            //yeu cau cung cap anh dai dien
            //mat khau luu tru
            _this.auth.getServerPublicRSAKey()
                .then(function (pk) {
                console.log('Public key ok khoi tao user, mat khau ');
                //kiem tra login bang pass, neu co user thi 
                _this.goToSlide(2);
                //neu chua co user thi den 
            })
                .catch(function (err) {
                console.log('Public key err', err);
            });
        })
            .catch(function (err) {
            _this.presentAlert('Mã OTP của bạn không đúng vui lòng kiểm tra lại trên số điện thoại của bạn <br>');
            _this.goToSlide(0); //ve form phone
        });
    };
    LoginPhonePage.prototype.onSubmitUserInfo = function () {
        //gui thong tin len may chu de dang ky user
        this.auth.sendUserInfo(JSON.stringify({}));
        this.goToSlide(3);
    };
    LoginPhonePage.prototype.onSubmitImage = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Đang cập nhập ảnh...'
        });
        loading.present();
        this.auth.sendImageBase64(JSON.stringify({}));
        //may chu cho phep se cap mot token server proxy
        //console.log('token proxy',this.token);
        //gui token nay len server resource chung thuc
        this.resources.authorizeFromResource(this.token)
            .then(function (data) {
            //console.log('data from resource',data);
            var login;
            login = data;
            if (login.status
                && login.user_info
                && login.token) {
                _this.apiStorageService.saveToken(_this.token);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.presentAlert('Dữ liệu xác thực không đúng <br>' + JSON.stringify(data));
                _this.goToSlide(0);
            }
            loading.dismiss();
        })
            .catch(function (err) {
            //console.log('err',err);
            _this.presentAlert('Lỗi xác thực - authorizeFromResource');
            _this.goToSlide(0);
            loading.dismiss();
        });
    };
    LoginPhonePage.prototype.goToSlide = function (i) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(i, 500);
        this.slides.lockSwipes(true);
    };
    LoginPhonePage.prototype.slideChanged = function () {
        this.slideIndex = this.slides.getActiveIndex();
    };
    LoginPhonePage.prototype.goBack = function () {
        this.goToSlide(0);
    };
    LoginPhonePage.prototype.presentAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'For Administrator',
            subTitle: msg,
            buttons: ['Dismiss']
        }).present();
    };
    LoginPhonePage.prototype.fileChange = function (event) {
        var _this = this;
        if (event.target && event.target.files) {
            var files = event.target.files;
            for (var key in files) {
                if (!isNaN(parseInt(key))) {
                    this.apiImageService.resizeImage(files[key].name, files[key], 300)
                        .then(function (data) {
                        _this.resourceImages.push(data);
                        _this.isImageViewer = true;
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
                }
            } //
        }
    };
    LoginPhonePage.prototype.deleteImage = function (evt) {
        this.resourceImages = this.resourceImages.filter(function (value, index, arr) { return value != evt; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], LoginPhonePage.prototype, "slides", void 0);
    LoginPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-phone',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\login-phone\login-phone.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>AUTHENTICATION - XÁC THỰC</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-form-background">\n\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n\n        <!-- #id=0 -->\n\n        <ion-slide>\n\n            <div class="wrapper">\n\n                <form class="login-form" (ngSubmit)="onSubmit()" [formGroup]="phoneFormGroup">\n\n                    <ion-item>\n\n                        <ion-label floating>Nhập số điện thoại (*)</ion-label>\n\n                        <ion-input type="text" formControlName="phone"></ion-input>\n\n                    </ion-item>\n\n                    <p *ngIf="phoneFormGroup.controls.phone.invalid && phoneFormGroup.controls.phone.touched">\n\n                        <span class="error">Vui lòng nhập số điện thoại di động gồm 9 chữ số KHÔNG CÓ số 0 ở đầu</span>\n\n                    </p>\n\n                    <ion-buttons start>\n\n                        <button ion-button type="submit" icon-end round [disabled]="!phoneFormGroup.controls.phone.valid">\n\n                            Yêu cầu xác thực\n\n                            <ion-icon name="share-alt"></ion-icon>\n\n                        </button>\n\n                    </ion-buttons>\n\n                </form>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <!-- #id=1 -->\n\n        <ion-slide>\n\n            <div class="wrapper">\n\n                <form class="login-form" (ngSubmit)="onSubmitKey()" [formGroup]="keyFormGroup">\n\n                    <ion-item>\n\n                        <ion-label floating>Nhập mã OTP gửi đến điện thoại (*)</ion-label>\n\n                        <ion-input type="text" formControlName="key"></ion-input>\n\n                    </ion-item>\n\n                    <p *ngIf="keyFormGroup.controls.key.invalid && keyFormGroup.controls.key.touched">\n\n                        <span class="error">Vui lòng nhập mã OTP có 6 chữ cái và số không có số 0</span>\n\n                    </p>\n\n                    <ion-buttons start>\n\n                        <button ion-button type="submit" icon-end round [disabled]="!keyFormGroup.controls.key.valid">\n\n                            Xác thực OTP\n\n                            <ion-icon name="share-alt"></ion-icon>\n\n                        </button>\n\n                    </ion-buttons>\n\n                </form>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <!-- #id=2 dang ky user, pass, ho ten, dia chi, email,  -->\n\n        <ion-slide>\n\n            <div class="wrapper user-info">\n\n                <form class="login-form" (ngSubmit)="onSubmitUserInfo()" [formGroup]="userFromGroup">\n\n                    <ion-item>\n\n                        <ion-label floating>Password - Mật khẩu(*)</ion-label>\n\n                        <ion-input type="password" formControlName="password"></ion-input>\n\n                    </ion-item>\n\n                    <p *ngIf="userFromGroup.controls.password.invalid && userFromGroup.controls.password.touched">\n\n                        <span class="error">Vui lòng nhập mật khẩu tối thiểu 6 chữ số chứa ít nhất 1 chữ hoa, 1 chữ\n\n                            thường và 1 ký tự đặc biệt</span>\n\n                    </p>\n\n                    <ion-item>\n\n                        <ion-label floating>Nick Name - Tên hiển thị(*)</ion-label>\n\n                        <ion-input type="nickname" formControlName="nickname"></ion-input>\n\n                    </ion-item>\n\n                    <p *ngIf="userFromGroup.controls.nickname.invalid && userFromGroup.controls.nickname.touched">\n\n                        <span class="error">Vui lòng nhập tên bí danh (nickname) để gợi nhớn tối thiểu 10 ký tự</span>\n\n                    </p>\n\n                    <ion-item>\n\n                        <ion-label floating>Full Name - Họ và tên đầy đủ(*)</ion-label>\n\n                        <ion-input type="name" formControlName="name"></ion-input>\n\n                    </ion-item>\n\n                    <p *ngIf="userFromGroup.controls.name.invalid && userFromGroup.controls.name.touched">\n\n                        <span class="error">Vui lòng nhập họ và tên đầy đủ bằng tiếng việt có dấu rõ ràng</span>\n\n                    </p>\n\n                    <ion-item>\n\n                        <ion-label floating>Email - Hộp thư điện tử</ion-label>\n\n                        <ion-input type="email" formControlName="email"></ion-input>\n\n                    </ion-item>\n\n                    <p *ngIf="userFromGroup.controls.email.invalid && userFromGroup.controls.email.touched">\n\n                        <span class="error">nhập định dạng email chính xác</span>\n\n                    </p>\n\n                    <ion-item>\n\n                        <!-- (địa chỉ tự động sinh ra theo location) -->\n\n                        <ion-label floating>Address - Địa chỉ đầy đủ</ion-label>\n\n                        <ion-input type="address" formControlName="address"></ion-input>\n\n                    </ion-item>\n\n                    <p *ngIf="userFromGroup.controls.address.invalid && userFromGroup.controls.address.touched">\n\n                        <span class="error">Vui lòng nhập địa chỉ rõ ràng theo vị trí liên lạc của bạn</span>\n\n                    </p>\n\n\n\n                    <ion-buttons start>\n\n                        <button ion-button type="submit" icon-end round>\n\n                            Cập nhập\n\n                            <ion-icon name="share-alt"></ion-icon>\n\n                        </button>\n\n                    </ion-buttons>\n\n\n\n                </form>\n\n            </div>\n\n\n\n        </ion-slide>\n\n\n\n        <!-- #id=3 dang ky anh dai dien  -->\n\n        <ion-slide>\n\n            <div class="wrapper">\n\n                <form class="login-form" (ngSubmit)="onSubmitImage()" [formGroup]="imageFormGroup">\n\n\n\n                    <ion-item *ngIf="isImageViewer">\n\n                        <ion-row>\n\n                            <ion-col *ngFor="let obj of resourceImages" col-12>\n\n                                <ion-card>\n\n                                    <img [src]="obj?.imageViewer" style="width: 100%; height: 100%;" />\n\n                                </ion-card>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-buttons start>\n\n                            <button ion-button type="button" icon-end round>\n\n                                <input type="file" accept="image/*" formControlName="image" (change)="fileChange($event)">\n\n                                Avantar - Ảnh đại diện\n\n                                <ion-icon name="images"></ion-icon>\n\n                            </button>\n\n                        </ion-buttons>\n\n                    </ion-item>\n\n\n\n                    <ion-buttons start>\n\n                        <button ion-button type="submit" icon-end round>\n\n                            Cập nhập\n\n                            <ion-icon name="share-alt"></ion-icon>\n\n                        </button>\n\n                    </ion-buttons>\n\n\n\n                </form>\n\n            </div>\n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n\n\n    <div class="gradient"></div>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\login-phone\login-phone.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiResourceServices__["a" /* ApiResourceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_6__services_apiImageService__["a" /* ApiImageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], LoginPhonePage);
    return LoginPhonePage;
}());

//# sourceMappingURL=login-phone.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicCardSocialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicCardSocialPage = /** @class */ (function () {
    function DynamicCardSocialPage(platform, authService, pubService, viewCtrl, navCtrl, loadingCtrl, navParams) {
        this.platform = platform;
        this.authService = authService;
        this.pubService = pubService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.dynamicCardsOrigin = {
            title: "Mạng xã hội",
            search_bar: { hint: "Tìm cái gì đó" },
            buttons: [
                { color: "primary", icon: "add", next: "ADD" },
                { color: "primary", icon: "contacts", next: "FRIENDS" },
                { color: "primary", icon: "notifications", next: "NOTIFY",
                    alerts: [
                        "cuong.dq"
                    ]
                },
                { color: "royal", icon: "cog", next: "SETTINGS" }
            ],
            items: [
                { short_detail: {
                        avatar: "assets/imgs/ca_nau.jpg",
                        h1: "Cuong.dq",
                        p: "Cần thiết là nội dung chi tiết đây, có thể viết tóm lượt nhiều thông tin cũng được",
                        note: "1h ago",
                        action: { color: "primary", icon: "more", next: "MORE" }
                    },
                    title: "Chi tiết các ảnh hiển thị",
                    note: "Bài viết chi tiết kết thúc",
                    medias: [
                        { image: "assets/imgs/img_forest.jpg",
                            title: "Miền quê yêu dấu",
                            h1: "Chốn yên bình",
                            p: "Là nơi bình yên nhất. Bạn có thể dạo bước trên con đường rợp bóng mát thanh bình đến lạ" },
                        { image: "assets/imgs/anh_vua.png",
                            h1: "Nội dung bài viết vể cao tốc",
                            p: "Một bài viết về cao tốc đây nhé" },
                        { image: "assets/imgs/ca_nau.jpg",
                            h2: "Cá Nâu ở Quê Mỹ lợi",
                            p: "Cá ngày mồng 3 tết ở quê" },
                        { image: "assets/imgs/ca_the.jpg",
                            h1: "Cá Thệ ở Quê Mỹ lợi",
                            p: "Cá ngày mồng 3 tết ở quê, Cá thệ kho dưa rất tuyệt vời" },
                        { image: "assets/imgs/img_forest.jpg" },
                        { image: "assets/imgs/anh_nho.png",
                            h1: "Mùa trái cây chín đỏ",
                            p: "Trái cây vựa, miền quê nhiều cá lắm đó" }
                    ],
                    content: {
                        title: "Miền quê yêu dấu",
                        paragraphs: [
                            {
                                h2: "Chốn yên bình",
                                p: "Là nơi bình yên nhất. Bạn có thể dạo bước trên con đường rợp bóng mát thanh bình đến lạ",
                                medias: [
                                    { image: "assets/imgs/img_forest.jpg", title: "Cầu Thê Húc xưa", subtitle: "Đoàn Quốc Cường" },
                                    { image: "assets/imgs/anh_vua.png", title: "Cao tốc 34 nghìn tỷ mới khai trương đã hỏng", subtitle: "ảnh Mượn trên mạng " }
                                ]
                            },
                            {
                                h2: "Chốn bóc mẽ",
                                p: "Đây là nơi bóc mẽ thông tin trên mạng. Một sự kiện mà mọi người không thể biết được bằng những phương tiện truyền thông truyền thống",
                                medias: [
                                    { image: "assets/imgs/anh_vua.png", title: "Cao tốc 34 nghìn tỷ mới khai trương đã hỏng", subtitle: "ảnh Mượn trên mạng " }
                                ]
                            }
                        ],
                        note: "Đoàn Quốc Cường 2019"
                    },
                    results: {
                        likes: {
                            like: ["Cuong.dq", "abc", "xyz"],
                            love: ["love"],
                            unlike: ["dog"],
                            sad: ["cat"],
                            angery: ["tiger"]
                        },
                        comments: [
                            { name: "cuong.dq",
                                comment: "day la cai gi vay",
                                time: new Date().getTime()
                            },
                            { name: "cu.dq",
                                comment: "la cai nay do nhe",
                                time: new Date().getTime()
                            }
                        ],
                        shares: [
                            { name: "cuong.dq",
                                comment: "day la cai gi vay",
                                time: new Date().getTime()
                            },
                            { name: "cu.dq",
                                comment: "la cai nay do nhe",
                                time: new Date().getTime()
                            }
                        ]
                    },
                    actions: {
                        like: { name: "LIKE", color: "primary", icon: "thumbs-up", next: "LIKE" },
                        comment: { name: "COMMENT", color: "primary", icon: "chatbubbles", next: "COMMENT" },
                        share: { name: "SHARE", color: "primary", icon: "share-alt", next: "SHARE" }
                    }
                },
                { short_details: {},
                    medias: [
                        { image: "assets/imgs/img_forest.jpg", title: "1 Ảnh", subtitle: "Tác giả Đoàn Quốc Cường" }
                    ],
                    results: {
                        likes: {
                            like: ["Cuong.dq", "abc", "xyz"],
                            love: ["love"]
                        },
                        shares: [
                            { name: "cu.dq",
                                comment: "la cai nay do nhe",
                                time: new Date().getTime()
                            }
                        ]
                    },
                    actions: {
                        like: { name: "Thích", color: "primary", icon: "thumbs-up", next: "LIKE" },
                        comment: { name: "Trò chuyện", color: "primary", icon: "chatbubbles", next: "COMMENT" },
                        share: { name: "Chia sẻ", color: "primary", icon: "share-alt", next: "SHARE" }
                    }
                },
                { short_details: {},
                    medias: [
                        { image: "assets/imgs/ca_nau.jpg", title: "Ảnh 1", subtitle: "Tác giả Đoàn Quốc Cường" },
                        { image: "assets/imgs/img_forest.jpg", title: "Ảnh 2", subtitle: "Tác giả Đoàn Quốc Cường" }
                    ],
                    results: {
                        likes: {
                            sad: ["cat"]
                        },
                        comments: [
                            { name: "cu.dq",
                                comment: "la cai nay do nhe",
                                time: new Date().getTime()
                            }
                        ]
                    },
                    actions: {
                        like: { name: "Thích", color: "primary", icon: "thumbs-up", next: "LIKE" },
                        comment: { name: "Trò chuyện", color: "primary", icon: "chatbubbles", next: "COMMENT" },
                        share: { name: "Chia sẻ", color: "primary", icon: "share-alt", next: "SHARE" }
                    }
                },
                { short_details: {},
                    medias: [
                        { image: "assets/imgs/img_forest.jpg", title: "3 Ảnh", subtitle: "Tác giả Đoàn Quốc Cường" },
                        { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==" },
                        { image: "data:image/gif;base64,R0lGODlhPQBEAPeoAJosM//AwO/AwHVYZ/z595kzAP/s7P+goOXMv8+fhw/v739/f+8PD98fH/8mJl+fn/9ZWb8/PzWlwv///6wWGbImAPgTEMImIN9gUFCEm/gDALULDN8PAD6atYdCTX9gUNKlj8wZAKUsAOzZz+UMAOsJAP/Z2ccMDA8PD/95eX5NWvsJCOVNQPtfX/8zM8+QePLl38MGBr8JCP+zs9myn/8GBqwpAP/GxgwJCPny78lzYLgjAJ8vAP9fX/+MjMUcAN8zM/9wcM8ZGcATEL+QePdZWf/29uc/P9cmJu9MTDImIN+/r7+/vz8/P8VNQGNugV8AAF9fX8swMNgTAFlDOICAgPNSUnNWSMQ5MBAQEJE3QPIGAM9AQMqGcG9vb6MhJsEdGM8vLx8fH98AANIWAMuQeL8fABkTEPPQ0OM5OSYdGFl5jo+Pj/+pqcsTE78wMFNGQLYmID4dGPvd3UBAQJmTkP+8vH9QUK+vr8ZWSHpzcJMmILdwcLOGcHRQUHxwcK9PT9DQ0O/v70w5MLypoG8wKOuwsP/g4P/Q0IcwKEswKMl8aJ9fX2xjdOtGRs/Pz+Dg4GImIP8gIH0sKEAwKKmTiKZ8aB/f39Wsl+LFt8dgUE9PT5x5aHBwcP+AgP+WltdgYMyZfyywz78AAAAAAAD///8AAP9mZv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKgALAAAAAA9AEQAAAj/AFEJHEiwoMGDCBMqXMiwocAbBww4nEhxoYkUpzJGrMixogkfGUNqlNixJEIDB0SqHGmyJSojM1bKZOmyop0gM3Oe2liTISKMOoPy7GnwY9CjIYcSRYm0aVKSLmE6nfq05QycVLPuhDrxBlCtYJUqNAq2bNWEBj6ZXRuyxZyDRtqwnXvkhACDV+euTeJm1Ki7A73qNWtFiF+/gA95Gly2CJLDhwEHMOUAAuOpLYDEgBxZ4GRTlC1fDnpkM+fOqD6DDj1aZpITp0dtGCDhr+fVuCu3zlg49ijaokTZTo27uG7Gjn2P+hI8+PDPERoUB318bWbfAJ5sUNFcuGRTYUqV/3ogfXp1rWlMc6awJjiAAd2fm4ogXjz56aypOoIde4OE5u/F9x199dlXnnGiHZWEYbGpsAEA3QXYnHwEFliKAgswgJ8LPeiUXGwedCAKABACCN+EA1pYIIYaFlcDhytd51sGAJbo3onOpajiihlO92KHGaUXGwWjUBChjSPiWJuOO/LYIm4v1tXfE6J4gCSJEZ7YgRYUNrkji9P55sF/ogxw5ZkSqIDaZBV6aSGYq/lGZplndkckZ98xoICbTcIJGQAZcNmdmUc210hs35nCyJ58fgmIKX5RQGOZowxaZwYA+JaoKQwswGijBV4C6SiTUmpphMspJx9unX4KaimjDv9aaXOEBteBqmuuxgEHoLX6Kqx+yXqqBANsgCtit4FWQAEkrNbpq7HSOmtwag5w57GrmlJBASEU18ADjUYb3ADTinIttsgSB1oJFfA63bduimuqKB1keqwUhoCSK374wbujvOSu4QG6UvxBRydcpKsav++Ca6G8A6Pr1x2kVMyHwsVxUALDq/krnrhPSOzXG1lUTIoffqGR7Goi2MAxbv6O2kEG56I7CSlRsEFKFVyovDJoIRTg7sugNRDGqCJzJgcKE0ywc0ELm6KBCCJo8DIPFeCWNGcyqNFE06ToAfV0HBRgxsvLThHn1oddQMrXj5DyAQgjEHSAJMWZwS3HPxT/QMbabI/iBCliMLEJKX2EEkomBAUCxRi42VDADxyTYDVogV+wSChqmKxEKCDAYFDFj4OmwbY7bDGdBhtrnTQYOigeChUmc1K3QTnAUfEgGFgAWt88hKA6aCRIXhxnQ1yg3BCayK44EWdkUQcBByEQChFXfCB776aQsG0BIlQgQgE8qO26X1h8cEUep8ngRBnOy74E9QgRgEAC8SvOfQkh7FDBDmS43PmGoIiKUUEGkMEC/PJHgxw0xH74yx/3XnaYRJgMB8obxQW6kL9QYEJ0FIFgByfIL7/IQAlvQwEpnAC7DtLNJCKUoO/w45c44GwCXiAFB/OXAATQryUxdN4LfFiwgjCNYg+kYMIEFkCKDs6PKAIJouyGWMS1FSKJOMRB/BoIxYJIUXFUxNwoIkEKPAgCBZSQHQ1A2EWDfDEUVLyADj5AChSIQW6gu10bE/JG2VnCZGfo4R4d0sdQoBAHhPjhIB94v/wRoRKQWGRHgrhGSQJxCS+0pCZbEhAAOw==" }
                    ],
                    results: {
                        likes: {
                            like: ["Cuong.dq", "abc", "xyz"]
                        }
                    },
                    actions: {
                        like: { name: "Thích", color: "primary", icon: "thumbs-up", next: "LIKE" },
                        comment: { name: "Trò chuyện", color: "primary", icon: "chatbubbles", next: "COMMENT" },
                        share: { name: "Chia sẻ", color: "primary", icon: "share-alt", next: "SHARE" }
                    }
                },
                { short_details: {},
                    medias: [
                        { image: "assets/imgs/img_forest.jpg", title: "4 Ảnh" },
                        { image: "assets/imgs/ca_the.jpg" },
                        { image: "assets/imgs/anh_vua.png" },
                        { image: "assets/imgs/ca_nau.jpg" }
                    ],
                    actions: {
                        like: { name: "Thích", color: "primary", icon: "thumbs-up", next: "LIKE" },
                        comment: { name: "Trò chuyện", color: "primary", icon: "chatbubbles", next: "COMMENT" },
                        share: { name: "Chia sẻ", color: "primary", icon: "share-alt", next: "SHARE" }
                    }
                }
            ]
        };
        this.isSearch = false;
        this.searchString = '';
        this.shouldShowCancel = false;
        this.isMobile = false;
    }
    DynamicCardSocialPage_1 = DynamicCardSocialPage;
    DynamicCardSocialPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dynamicCardsOrigin = this.navParams.get("list") ? this.navParams.get("list") : this.dynamicCardsOrigin;
        this.refresh();
        this.callback = this.navParams.get("callback");
        this.step = this.navParams.get("step");
        this.parent = this.navParams.get("parent");
        var call_waiting_data = this.navParams.get("call_waiting_data");
        if (call_waiting_data) {
            call_waiting_data()
                .then(function (list) {
                _this.refresh(list);
            });
        }
    };
    DynamicCardSocialPage.prototype.refresh = function (newList) {
        if (newList)
            this.dynamicCardsOrigin = newList;
        this.isMobile = (this.platform.platforms()[0] === 'mobile');
        this.dynamicCards = this.dynamicCardsOrigin;
        console.log('cards', this.dynamicCardsOrigin);
    };
    //Su dung search
    //---------------------
    DynamicCardSocialPage.prototype.goSearch = function () {
        this.isSearch = true;
    };
    DynamicCardSocialPage.prototype.searchEnter = function () {
        this.isSearch = false;
    };
    DynamicCardSocialPage.prototype.onInput = function (e) {
        console.log(this.searchString);
    };
    DynamicCardSocialPage.prototype.onClickMedia = function (idx, item) {
        console.log(idx, item);
        var viewItems = [];
        var itemDetail = {
            short_detail: item.short_detail,
            results: item.results,
            actions: item.actions,
            content: { title: item.title, note: item.note }
        };
        var paragraphs = [];
        item.medias.forEach(function (el) {
            paragraphs.push({
                h1: el.h1,
                h2: el.h2,
                p: el.p,
                medias: [el]
            });
        });
        itemDetail.content.paragraphs = paragraphs;
        viewItems.push(itemDetail);
        var btn = { next: "NEXT",
            next_data: {
                data: {
                    title: "Tin chi tiết",
                    buttons: [
                        { color: "primary", icon: "close", next: "CLOSE" }
                    ],
                    items: viewItems
                }
            }
        };
        this.processCommand(btn);
    };
    DynamicCardSocialPage.prototype.onClickHeader = function (btn) {
        console.log(btn);
        this.processCommand(btn);
    };
    DynamicCardSocialPage.prototype.onClickShortDetails = function (btn, item) {
        console.log(btn, item);
        this.processCommand(btn);
    };
    DynamicCardSocialPage.prototype.onClickActions = function (btn, item) {
        console.log(btn, item);
        this.processCommand(btn);
    };
    DynamicCardSocialPage.prototype.processCommand = function (btn) {
        var _this = this;
        if (btn.url) {
            if (btn.method === 'GET') {
                var loading_1 = this.loadingCtrl.create({
                    content: 'Đang xử lý dữ liệu từ máy chủ ....'
                });
                loading_1.present();
                var httpOptions = void 0;
                if (btn.next === 'FILE')
                    httpOptions = { 'responseType': 'blob' };
                this.pubService.getDynamicForm(btn.url, httpOptions)
                    .then(function (data) {
                    //console.log(data);
                    loading_1.dismiss();
                    btn.next_data = {
                        step: _this.step,
                        data: data,
                        next: btn.next,
                        item: btn.item
                    };
                    _this.next(btn);
                })
                    .catch(function (err) {
                    console.log('err getDynamicForm', err);
                    loading_1.dismiss();
                });
            }
            else {
                this.next(btn);
            }
        }
        else {
            console.log('do nothing', btn);
            this.next(btn);
        }
    };
    DynamicCardSocialPage.prototype.next = function (btn) {
        var _this = this;
        if (btn) {
            if (btn.next == 'EXIT') {
                this.platform.exitApp();
            }
            else if (btn.next == 'REFRESH') {
                this.refresh(btn.next_data);
            }
            else if (btn.next == 'CLOSE') {
                try {
                    this.viewCtrl.dismiss(btn.next_data);
                }
                catch (e) { }
            }
            else if (btn.next == 'BACK') {
                try {
                    this.navCtrl.pop();
                }
                catch (e) { }
            }
            else if (btn.next == 'ADD'
                || btn.next == 'SETTINGS'
                || btn.next == 'FRIENDS'
                || btn.next == 'NOTIFY'
                || btn.next == 'LIKE'
                || btn.next == 'COMMENT'
                || btn.next == 'SHARE'
                || btn.next == 'MORE') {
                if (this.callback) {
                    this.callback(btn.next_data)
                        .then(function (nextStep) { return _this.next(nextStep); });
                }
            }
            else if (btn.next == 'NEXT' && btn.next_data && btn.next_data.data) {
                btn.next_data.callback = this.callback; //gan lai cac function object
                btn.next_data.parent = this.parent; //gan lai cac function object
                btn.next_data.list = btn.next_data.data; //gan du lieu tra ve tu server
                this.navCtrl.push(DynamicCardSocialPage_1, btn.next_data);
            }
        }
    };
    DynamicCardSocialPage = DynamicCardSocialPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic-card-social',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-card-social\dynamic-card-social.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons start *ngIf="!isSearch && dynamicCards?.search_bar">\n\n            <button ion-button icon-only color="primary" (click)="goSearch()">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n        <ion-searchbar start *ngIf="isSearch && dynamicCards?.search_bar" placeholder="{{dynamicCards?.search_bar.hint}}" [(ngModel)]="searchString"\n\n        [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (keyup.enter)="searchEnter()"\n\n        (keyup.esc)="searchEnter()">\n\n        </ion-searchbar>\n\n        \n\n        <ion-title *ngIf="!isSearch">{{dynamicCards?.title}}</ion-title>\n\n\n\n        <ion-buttons end *ngFor="let btn of dynamicCards?.buttons">\n\n            <button *ngIf="!isSearch" class="badge-background" ion-button icon-only color="{{btn.color}}" (click)="onClickHeader(btn)">\n\n                <ion-icon name="{{btn.icon}}"></ion-icon>\n\n                <ion-badge class="badge-alert" color="danger" *ngIf="btn.alerts">{{ (btn.alerts?.length>99?\'99+\':btn.alerts?.length) }}</ion-badge>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding class="background-page gradient">\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12 offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 offset-md-2 col-md-8 col-sm-12\n\n                *ngFor="let it of dynamicCards?.items">\n\n                <!-- Card mạng xã hội cho một chủ đề liên quan item -->\n\n                <ion-card class="background-card gradient grid-border">\n\n                    <!-- Tóm lượt chủ đề theo tác giả -->\n\n                    <ion-item class="background-card gradient grid-border" *ngIf="it.short_detail">\n\n                        <ion-icon *ngIf="!it.short_detail?.avatar" item-start name="contact" color="primary"></ion-icon>\n\n                        <ion-avatar item-start *ngIf="it.short_detail?.avatar"><img [src]="it.short_detail?.avatar"></ion-avatar>\n\n                        <h1 *ngIf="it.short_detail?.h1">{{it.short_detail?.h1}}</h1>\n\n                        <h2 *ngIf="it.short_detail?.h2">{{it.short_detail?.h2}}</h2>\n\n                        <h3 *ngIf="it.short_detail?.h3">{{it.short_detail?.h3}}</h3>\n\n                        <p *ngIf="it.short_detail?.p" text-wrap>{{it.short_detail?.p}}</p>\n\n                        <ion-note item-end *ngIf="it.short_detail?.note">{{it.short_detail?.note}}</ion-note>\n\n                        <button item-end icon-only ion-button clear small *ngIf="it.short_detail?.action" color="{{it.short_detail?.action?.color}}" (click)="onClickShortDetails(it.short_detail?.action, it)">\n\n                            <ion-icon name="{{it.short_detail?.action?.icon}}"></ion-icon>\n\n                        </button>\n\n                    </ion-item>\n\n\n\n                    \n\n                    <!-- 1 pics -->\n\n                    <div class="one-image card-background-page" *ngIf="it.medias && it.medias.length===1" (click)="onClickMedia(0,it)">\n\n                        <img [src]="it.medias[0].image"/>\n\n                        <div class="card-title" *ngIf="it.medias[0].title">{{it.medias[0].title}}</div>\n\n                        <div class="card-subtitle" *ngIf="it.medias[0].subtitle">{{it.medias[0].subtitle}}</div>\n\n                    </div>\n\n                    \n\n                    <!-- 2 pics -->\n\n                    <ion-row *ngIf="it.medias && it.medias.length===2">\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 (click)="onClickMedia(0,it)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+it.medias[0].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="it.medias[0].title">{{it.medias[0].title}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 (click)="onClickMedia(1,it)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+it.medias[1].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="it.medias[1].title">{{it.medias[1].title}}</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    \n\n                    <!-- 3 pics -->\n\n                    <ion-row *ngIf="it.medias && it.medias.length===3">\n\n                        <ion-col no-padding class="padding-col card-background-page" col-12 col-md-4 col-xl-4 (click)="onClickMedia(0,it)">\n\n                            <div class="image-height-1" [style.background-image]="\'url(\'+it.medias[0].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="it.medias[0].title">{{it.medias[0].title}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-4 col-xl-4 (click)="onClickMedia(1,it)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+it.medias[1].image+\')\'"></div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-4 col-xl-4 (click)="onClickMedia(2,it)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+it.medias[2].image+\')\'"></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    \n\n                    <!-- 4 pics -->\n\n                    <ion-row *ngIf="it.medias && it.medias.length===4">\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-6 col-xl-3 (click)="onClickMedia(0,it)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+it.medias[0].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="it.medias[0].title">{{it.medias[0].title}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-6 col-xl-3 (click)="onClickMedia(1,it)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+it.medias[1].image+\')\'"></div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-6 col-xl-3 (click)="onClickMedia(2,it)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+it.medias[2].image+\')\'"></div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-6 col-xl-3 (click)="onClickMedia(3,it)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+it.medias[3].image+\')\'"></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    \n\n                    <!-- 5+ pics -->\n\n                    <ion-row *ngIf="it.medias && it.medias.length>=5">\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 (click)="onClickMedia(0,it)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+it.medias[0].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="it.medias[0].title">{{it.medias[0].title}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 (click)="onClickMedia(1,it)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+it.medias[1].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="it.medias[1].title">{{it.medias[1].title}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-4 (click)="onClickMedia(2,it)">\n\n                            <div class="image-height-3" [style.background-image]="\'url(\'+it.medias[2].image+\')\'"></div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-4 (click)="onClickMedia(3,it)">\n\n                            <div class="image-height-3" [style.background-image]="\'url(\'+it.medias[3].image+\')\'"></div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-4 (click)="onClickMedia(4,it)">\n\n                            <div class="image-height-3" [style.background-image]="\'url(\'+it.medias[4].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="it.medias.length>5">+{{(it.medias.length-5)}}</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    \n\n                    <ion-card-content *ngIf="it.content">\n\n                        <ion-card-title *ngIf="it.content.title">\n\n                            {{it.content.title}}\n\n                        </ion-card-title>\n\n                        <div *ngFor="let ph of it.content.paragraphs">\n\n                            <h1 *ngIf="ph.h1">{{ph.h1}}</h1>\n\n                            <div *ngFor="let md of ph.medias" class="card-background-page-top">\n\n                                <img class="one-image" [src]="md.image" />\n\n                                <div *ngIf="md.title" class="card-title-top">{{md.title}}</div>\n\n                                <div *ngIf="md.subtitle" class="card-subtitle-top">{{md.subtitle}}</div>\n\n                            </div>\n\n                            <h2 *ngIf="ph.h2">{{ph.h2}}</h2>\n\n                            <h3 *ngIf="ph.h3">{{ph.h3}}</h3>\n\n                            <p *ngIf="ph.p" style="text-align: justify;">{{ph.p}}</p>\n\n                        </div>\n\n                        <ion-note *ngIf="it.content.note">{{it.content.note}}</ion-note>\n\n                    </ion-card-content>\n\n\n\n                    <ion-row no-padding *ngIf="it.results">\n\n                        <ion-col align-self-center text-center>\n\n                            <div *ngIf="it.results.likes">\n\n                                <ion-icon *ngIf="it.results.likes.like" color="primary" icon-start clear small name="thumbs-up"></ion-icon>\n\n                                <ion-icon *ngIf="it.results.likes.love" color="danger" icon-start clear small name="heart"></ion-icon>\n\n                                <ion-icon *ngIf="it.results.likes.unlike" color="dark" icon-start clear small name="thumbs-down"></ion-icon>\n\n                                <ion-icon *ngIf="it.results.likes.sad" color="royal" icon-start clear small name="sad"></ion-icon>\n\n                                <ion-icon *ngIf="it.results.likes.angery" color="angery" icon-start clear small name="ios-sad"></ion-icon>\n\n                                <ion-note>{{(it.results.likes.like?.length\n\n                                            +it.results.likes.love?.length\n\n                                            +it.results.likes.unlike?.length\n\n                                            +it.results.likes.sad?.length\n\n                                            +it.results.likes.angery?.length\n\n                                            )}}</ion-note>\n\n                            </div>\n\n                        </ion-col>\n\n                        <ion-col align-self-center text-center>\n\n                            <ion-note *ngIf="it.results.comments&&it.results.comments.length>0">{{(it.results.comments.length)}} Comments</ion-note>\n\n                        </ion-col>\n\n                        <ion-col align-self-center text-center>\n\n                            <ion-note *ngIf="it.results.shares&&it.results.shares.length>0">{{(it.results.shares.length)}} Shares</ion-note>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row no-padding *ngIf="it.actions">\n\n                        <ion-col text-center>\n\n                            <button *ngIf="it.actions.like" ion-button clear small color="{{it.actions.like.color}}" (click)="onClickActions(it.actions.like, it)" icon-start>\n\n                                <ion-icon name="{{it.actions.like.icon}}"></ion-icon>\n\n                                {{it.actions.like.name}}\n\n                            </button>\n\n                        </ion-col>\n\n                        <ion-col text-center>\n\n                            <button *ngIf="it.actions.comment" ion-button clear small color="{{it.actions.comment.color}}" (click)="onClickActions(it.actions.comment, it)" icon-start>\n\n                                <ion-icon name=\'{{it.actions.comment.icon}}\'></ion-icon>\n\n                                {{it.actions.comment.name}}\n\n                            </button>\n\n                        </ion-col>\n\n                        <ion-col text-center>\n\n                            <button *ngIf="it.actions.share" ion-button clear small color="{{it.actions.share.color}}" (click)="onClickActions(it.actions.share, it)" icon-start>\n\n                                <ion-icon name=\'{{it.actions.share.icon}}\'></ion-icon>\n\n                                {{it.actions.share.name}}\n\n                            </button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-card-social\dynamic-card-social.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DynamicCardSocialPage);
    return DynamicCardSocialPage;
    var DynamicCardSocialPage_1;
}());

//# sourceMappingURL=dynamic-card-social.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicMediasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiImageService__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicMediasPage = /** @class */ (function () {
    function DynamicMediasPage(platform, authService, apiImageService, pubService, viewCtrl, navCtrl, loadingCtrl, navParams) {
        this.platform = platform;
        this.authService = authService;
        this.apiImageService = apiImageService;
        this.pubService = pubService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.dynamicMediasOrigin = {
            title: "Đa phương tiện"
            /* ,buttons: [
                {color:"primary", icon:"arrow-dropdown-circle",  next:"DOWN"}
                , {color:"primary", icon:"arrow-dropup-circle", next:"UP"}
              ] */
            ,
            medias: [
                { image: "assets/imgs/img_forest.jpg",
                    title: "Miền quê yêu dấu",
                    h1: "Chốn yên bình",
                    p: "Là nơi bình yên nhất. Bạn có thể dạo bước trên con đường rợp bóng mát thanh bình đến lạ" },
                { image: "assets/imgs/anh_vua.png",
                    h1: "Nội dung bài viết vể cao tốc",
                    p: "Một bài viết về cao tốc đây nhé" },
                { image: "assets/imgs/ca_nau.jpg",
                    h2: "Cá Nâu ở Quê Mỹ lợi",
                    p: "Cá ngày mồng 3 tết ở quê" },
                { image: "assets/imgs/ca_the.jpg",
                    h1: "Cá Thệ ở Quê Mỹ lợi",
                    p: "Cá ngày mồng 3 tết ở quê, Cá thệ kho dưa rất tuyệt vời" },
                { image: "assets/imgs/img_forest.jpg" },
                { image: "assets/imgs/anh_nho.png",
                    h1: "Mùa trái cây chín đỏ",
                    p: "Trái cây vựa, miền quê nhiều cá lắm đó" }
            ],
            actions: {
                //file: {name:"Open file", size: 480, color:"primary", icon: "image", next:"FILE"}
                // ,
                files: { name: "Open files", color: "primary", icon: "images", next: "FILES" },
                open: { key: "down", link_key: "up", name: "Expand", color: "primary", icon: "arrow-dropdown", next: "DOWN" },
                close: { key: "up", link_key: "down", name: "Collapse", color: "primary", icon: "arrow-dropup", next: "UP" },
                buttons: [
                    { name: "Save", icon: "share-alt", color: "primary", url: "https://c3.mobifone.vn/api/ext-auth/save-user-avatar", method: "FORM-DATA", token: true, next: "SAVE" }
                ]
            }
        };
        this.isSearch = false;
        this.searchString = '';
        this.shouldShowCancel = true;
        this.isMobile = false;
        this.isHide = true;
        this.showButton = { key: "down", link_key: "up", name: "Mở rộng", color: "primary", icon: "arrow-dropdown-circle", next: "DOWN" };
        this.hideButton = { key: "up", link_key: "down", name: "Thu gọn", color: "primary", icon: "arrow-dropup-circle", next: "UP" };
        this.isHideNote = false;
    }
    DynamicMediasPage_1 = DynamicMediasPage;
    DynamicMediasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.dynamicMediasOrigin = this.navParams.get("list") ? this.navParams.get("list") : this.dynamicMediasOrigin;
        this.refresh();
        this.myShow = this.showButton;
        this.callback = this.navParams.get("callback");
        this.step = this.navParams.get("step");
        this.parent = this.navParams.get("parent");
        var call_waiting_data = this.navParams.get("call_waiting_data");
        if (call_waiting_data) {
            call_waiting_data()
                .then(function (list) {
                _this.refresh(list);
                _this.myShow = _this.showButton;
            });
        }
    };
    DynamicMediasPage.prototype.refresh = function (newList) {
        if (newList)
            this.dynamicMediasOrigin = newList;
        this.isMobile = (this.platform.platforms()[0] === 'mobile');
        this.dynamicMedias = this.dynamicMediasOrigin;
        this.showButton = (this.dynamicMedias.actions && this.dynamicMedias.actions.open) ? this.dynamicMedias.actions.open : this.showButton;
        this.hideButton = (this.dynamicMedias.actions && this.dynamicMedias.actions.close) ? this.dynamicMedias.actions.close : this.hideButton;
    };
    DynamicMediasPage.prototype.fileChange = function (event, action) {
        var _this = this;
        if (event.target && event.target.files) {
            var size_1 = (action && action.size !== undefined && action.size !== null) ? action.size : 480; //default site anh
            var files_1 = event.target.files;
            var processImages = new Promise(function (resolve, reject) {
                var fileProcessed = [];
                var countFile = Object.keys(files_1).length, countResize = 0;
                if (files_1.length === 0)
                    resolve();
                for (var key in files_1) {
                    if (!isNaN(parseInt(key))) {
                        _this.apiImageService.resizeImage(files_1[key].name, files_1[key], size_1)
                            .then(function (data) {
                            fileProcessed.push(data);
                            if (++countResize >= countFile) {
                                resolve(fileProcessed);
                            }
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    }
                }
            });
            var loading_1 = this.loadingCtrl.create({
                content: 'Đang xử lý các ảnh theo định dạng lưu trữ tiết kiệm ....'
            });
            loading_1.present();
            processImages.then(function (data) {
                if (data) {
                    _this.dynamicMediasOrigin.medias = data;
                    _this.refresh();
                }
                loading_1.dismiss();
            })
                .catch(function (err) {
                loading_1.dismiss();
            });
            setTimeout(function () {
                //1 phut ma ko x ly duoc thi thoat ra cho cai khac thuc hien
                loading_1.dismiss();
            }, 60000);
        }
    };
    DynamicMediasPage.prototype.onClickShowNote = function () {
        this.isHideNote = !this.isHideNote;
    };
    DynamicMediasPage.prototype.onClickShowHide = function (btn) {
        this.isHide = !this.isHide;
        this.myShow = this.myShow == this.hideButton ? this.showButton : this.hideButton;
    };
    DynamicMediasPage.prototype.onClickHeader = function (btn) {
        console.log(btn);
        this.processCommand(btn);
    };
    DynamicMediasPage.prototype.onClickMedia = function (idx, item) {
        console.log(idx, item);
        var btn = {};
        this.processCommand(btn);
    };
    DynamicMediasPage.prototype.onClickAction = function (btn) {
        console.log(btn);
        this.processCommand(btn);
    };
    DynamicMediasPage.prototype.processCommand = function (btn) {
        var _this = this;
        if (btn.url) {
            if (btn.method === 'GET') {
                var loading_2 = this.loadingCtrl.create({
                    content: 'Đang xử lý dữ liệu từ máy chủ ....'
                });
                loading_2.present();
                var httpOptions = void 0;
                if (btn.next === 'FILE')
                    httpOptions = { 'responseType': 'blob' };
                this.pubService.getDynamicForm(btn.url, httpOptions)
                    .then(function (data) {
                    //console.log(data);
                    loading_2.dismiss();
                    btn.next_data = {
                        step: _this.step,
                        data: data,
                        next: btn.next,
                        item: btn.item
                    };
                    _this.next(btn);
                })
                    .catch(function (err) {
                    console.log('err getDynamicForm', err);
                    loading_2.dismiss();
                });
            }
            else if (btn.method === 'FORM-DATA'
                && this.dynamicMedias
                && this.dynamicMedias.medias
                && this.dynamicMedias.medias.length > 0) {
                var loading_3 = this.loadingCtrl.create({
                    content: 'Đang xử lý dữ liệu từ máy chủ ....'
                });
                loading_3.present();
                var form_data_1 = new FormData();
                form_data_1.append("count_image", this.dynamicMedias.medias.length);
                this.dynamicMedias.medias.forEach(function (el, idx) {
                    if (el.file && el.filename)
                        form_data_1.append("image" + idx, el.file, el.filename);
                });
                if (btn.token) {
                    this.authService.postDynamicFormData(btn.url, form_data_1)
                        .then(function (data) {
                        console.log('receive form data:', data);
                        loading_3.dismiss();
                        _this.next(btn);
                    })
                        .catch(function (err) {
                        console.log('err postDynamicFormData', err);
                        loading_3.dismiss();
                    });
                }
                else {
                    this.pubService.postDynamicFormData(btn.url, form_data_1)
                        .then(function (data) {
                        console.log('receive form data:', data);
                        loading_3.dismiss();
                        _this.next(btn);
                    })
                        .catch(function (err) {
                        console.log('err postDynamicFormData', err);
                        loading_3.dismiss();
                    });
                }
            }
            else if (btn.method === 'POST'
                && this.dynamicMedias
                && this.dynamicMedias.medias
                && this.dynamicMedias.medias.length > 0) {
                var loading_4 = this.loadingCtrl.create({
                    content: 'Đang xử lý dữ liệu từ máy chủ ....'
                });
                loading_4.present();
                var json_data_1 = { medias: [] };
                this.dynamicMedias.medias.forEach(function (el) {
                    json_data_1.medias.push({ image: el.image });
                });
                if (btn.token) {
                    this.authService.postDynamicForm(btn.url, json_data_1)
                        .then(function (data) {
                        console.log('receive:', data);
                        loading_4.dismiss();
                        _this.next(btn);
                    })
                        .catch(function (err) {
                        console.log('err postDynamicForm', err);
                        loading_4.dismiss();
                    });
                }
                else {
                    this.pubService.postDynamicForm(btn.url, json_data_1)
                        .then(function (data) {
                        console.log('receive:', data);
                        loading_4.dismiss();
                        _this.next(btn);
                    })
                        .catch(function (err) {
                        console.log('err postDynamicForm', err);
                        loading_4.dismiss();
                    });
                }
            }
            else {
                this.next(btn);
            }
        }
        else {
            //console.log('do nothing',btn);
            this.next(btn);
        }
    };
    DynamicMediasPage.prototype.next = function (btn) {
        var _this = this;
        if (btn) {
            if (btn.next == 'EXIT') {
                this.platform.exitApp();
            }
            else if (btn.next == 'REFRESH') {
                this.refresh(btn.next_data);
            }
            else if (btn.next == 'CLOSE') {
                try {
                    this.viewCtrl.dismiss(btn.next_data);
                }
                catch (e) { }
            }
            else if (btn.next == 'BACK') {
                try {
                    this.navCtrl.pop();
                }
                catch (e) { }
            }
            else if (btn.next == 'ADD'
                || btn.next == 'SETTINGS'
                || btn.next == 'FRIENDS'
                || btn.next == 'NOTIFY'
                || btn.next == 'LIKE'
                || btn.next == 'COMMENT'
                || btn.next == 'SHARE'
                || btn.next == 'MORE') {
                if (this.callback) {
                    this.callback(btn.next_data)
                        .then(function (nextStep) { return _this.next(nextStep); });
                }
            }
            else if (btn.next == 'NEXT' && btn.next_data && btn.next_data.data) {
                btn.next_data.callback = this.callback; //gan lai cac function object
                btn.next_data.parent = this.parent; //gan lai cac function object
                btn.next_data.list = btn.next_data.data; //gan du lieu tra ve tu server
                this.navCtrl.push(DynamicMediasPage_1, btn.next_data);
            }
        }
    };
    DynamicMediasPage = DynamicMediasPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic-medias',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-medias\dynamic-medias.html"*/'<ion-header *ngIf="dynamicMedias.title || dynamicMedias.buttons">\n\n    <ion-navbar>\n\n        <ion-title>{{dynamicMedias?.title}}</ion-title>\n\n\n\n        <ion-buttons end *ngFor="let btn of dynamicMedias.buttons">\n\n            <button *ngIf="!btn.invisible" class="badge-background" ion-button icon-only color="{{btn.color}}" (click)="onClickHeader(btn)">\n\n                <ion-icon name="{{btn.icon}}"></ion-icon>\n\n                <ion-badge class="badge-alert" color="danger" *ngIf="btn.alerts">{{ (btn.alerts?.length>99?\'99+\':btn.alerts?.length) }}</ion-badge>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding class="background-page gradient">\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12 offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 offset-md-2 col-md-8 col-sm-12>\n\n                <ion-card *ngIf="isHide" class="background-card gradient grid-border">\n\n\n\n                    <!-- 1 pics -->\n\n                    <div class="one-image card-background-page" *ngIf="dynamicMedias.medias && dynamicMedias.medias.length===1" (click)="onClickMedia(0,dynamicMedias)">\n\n                        <img [src]="dynamicMedias.medias[0].image" />\n\n                        <div class="card-title" *ngIf="dynamicMedias.medias[0].title">{{dynamicMedias.medias[0].title}}</div>\n\n                        <div class="card-subtitle" *ngIf="dynamicMedias.medias[0].subtitle">{{dynamicMedias.medias[0].subtitle}}</div>\n\n\n\n                    </div>\n\n\n\n                    <!-- 2 pics -->\n\n                    <ion-row *ngIf="dynamicMedias.medias && dynamicMedias.medias.length===2">\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 (click)="onClickMedia(0,dynamicMedias)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+dynamicMedias.medias[0].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="dynamicMedias.medias[0].title">{{dynamicMedias.medias[0].title}}</div>\n\n                            <div class="card-subtitle" *ngIf="dynamicMedias.medias[0].subtitle">{{dynamicMedias.medias[0].subtitle}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 (click)="onClickMedia(1,dynamicMedias)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+dynamicMedias.medias[1].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="dynamicMedias.medias[1].title">{{dynamicMedias.medias[1].title}}</div>\n\n                            <div class="card-subtitle" *ngIf="dynamicMedias.medias[1].subtitle">{{dynamicMedias.medias[1].subtitle}}</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    \n\n                    <!-- 3 pics -->\n\n                    <ion-row *ngIf="dynamicMedias.medias && dynamicMedias.medias.length===3">\n\n                        <ion-col no-padding class="padding-col card-background-page" col-12 col-md-4 col-xl-4 (click)="onClickMedia(0,dynamicMedias)">\n\n                            <div class="image-height-1" [style.background-image]="\'url(\'+dynamicMedias.medias[0].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="dynamicMedias.medias[0].title">{{dynamicMedias.medias[0].title}}</div>\n\n                            <div class="card-subtitle" *ngIf="dynamicMedias.medias[0].subtitle">{{dynamicMedias.medias[0].subtitle}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-4 col-xl-4 (click)="onClickMedia(1,dynamicMedias)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+dynamicMedias.medias[1].image+\')\'"></div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-4 col-xl-4 (click)="onClickMedia(2,dynamicMedias)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+dynamicMedias.medias[2].image+\')\'"></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    \n\n                    <!-- 4 pics -->\n\n                    <ion-row *ngIf="dynamicMedias.medias && dynamicMedias.medias.length===4">\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-6 col-xl-3 (click)="onClickMedia(0,dynamicMedias)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+dynamicMedias.medias[0].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="dynamicMedias.medias[0].title">{{dynamicMedias.medias[0].title}}</div>\n\n                            <div class="card-subtitle" *ngIf="dynamicMedias.medias[0].subtitle">{{dynamicMedias.medias[0].subtitle}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-6 col-xl-3 (click)="onClickMedia(1,dynamicMedias)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+dynamicMedias.medias[1].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="dynamicMedias.medias[1].title">{{dynamicMedias.medias[1].title}}</div>\n\n                            <div class="card-subtitle" *ngIf="dynamicMedias.medias[1].subtitle">{{dynamicMedias.medias[1].subtitle}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-6 col-xl-3 (click)="onClickMedia(2,dynamicMedias)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+dynamicMedias.medias[2].image+\')\'"></div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 col-md-6 col-xl-3 (click)="onClickMedia(3,dynamicMedias)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+dynamicMedias.medias[3].image+\')\'"></div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    \n\n                    <!-- 5+ pics -->\n\n                    <ion-row *ngIf="dynamicMedias.medias && dynamicMedias.medias.length>=5">\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 (click)="onClickMedia(0,dynamicMedias)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+dynamicMedias.medias[0].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="dynamicMedias.medias[0].title">{{dynamicMedias.medias[0].title}}</div>\n\n                            <div class="card-subtitle" *ngIf="dynamicMedias.medias[0].subtitle">{{dynamicMedias.medias[0].subtitle}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-6 (click)="onClickMedia(1,dynamicMedias)">\n\n                            <div class="image-height-2" [style.background-image]="\'url(\'+dynamicMedias.medias[1].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="dynamicMedias.medias[1].title">{{dynamicMedias.medias[1].title}}</div>\n\n                            <div class="card-subtitle" *ngIf="dynamicMedias.medias[1].subtitle">{{dynamicMedias.medias[1].subtitle}}</div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-4 (click)="onClickMedia(2,dynamicMedias)">\n\n                            <div class="image-height-3" [style.background-image]="\'url(\'+dynamicMedias.medias[2].image+\')\'"></div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-4 (click)="onClickMedia(3,dynamicMedias)">\n\n                            <div class="image-height-3" [style.background-image]="\'url(\'+dynamicMedias.medias[3].image+\')\'"></div>\n\n                        </ion-col>\n\n                        <ion-col no-padding class="padding-col card-background-page" col-4 (click)="onClickMedia(4,dynamicMedias)">\n\n                            <div class="image-height-3" [style.background-image]="\'url(\'+dynamicMedias.medias[4].image+\')\'"></div>\n\n                            <div class="card-title" *ngIf="dynamicMedias.medias.length>5">+{{(dynamicMedias.medias.length-5)}}</div>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-card>\n\n\n\n                <ion-card *ngIf="!isHide" class="background-card gradient grid-border">\n\n                    <ion-card-content>\n\n                        <div *ngFor="let md of dynamicMedias.medias">\n\n                                <h1 *ngIf="md.h1">{{md.h1}}</h1>\n\n                                <img class="one-image" [src]="md.image" />\n\n                                <div *ngIf="md.title">{{md.title}}</div>\n\n                                <div *ngIf="md.subtitle">{{md.subtitle}}</div>\n\n                            <h2 *ngIf="md.h2">{{md.h2}}</h2>\n\n                            <h3 *ngIf="md.h3">{{md.h3}}</h3>\n\n                            <p *ngIf="md.p" style="text-align: justify;">{{md.p}}</p>\n\n                            <button *ngIf="!isHideNote&&md.note" ion-button icon-only round color="royal" (click)="onClickShowNote()">\n\n                                <ion-icon name="arrow-dropdown"></ion-icon>\n\n                            </button>\n\n                            <ion-note *ngIf="isHideNote&&md.note">{{md.note}}</ion-note>\n\n                            <button *ngIf="isHideNote&&md.note" ion-button icon-only round color="royal" (click)="onClickShowNote()">\n\n                                <ion-icon name="arrow-dropup"></ion-icon>\n\n                            </button>\n\n                        </div>\n\n                    </ion-card-content>\n\n                </ion-card>\n\n\n\n                <ion-row *ngIf="dynamicMedias.actions" no-padding >\n\n\n\n                    <ion-col *ngFor="let myBtn of dynamicMedias.actions.buttons" text-center>\n\n                        <button icon-start class="file-background" ion-button round color="{{myBtn.color}}" (click)="onClickAction(myBtn)">\n\n                            <ion-icon name="{{myBtn.icon}}"></ion-icon>\n\n                            {{myBtn.name}}\n\n                        </button>\n\n                    </ion-col>\n\n\n\n                    <ion-col *ngIf="dynamicMedias.actions.files" text-center>\n\n                        <button icon-start class="file-background" ion-button round color="{{dynamicMedias.actions.files.color}}">\n\n                            <input class="file-over" type="file" multiple accept="image/*" (change)="fileChange($event,dynamicMedias.actions.files)">\n\n                            <ion-icon name="{{dynamicMedias.actions.files.icon}}"></ion-icon>\n\n                            {{dynamicMedias.actions.files.name}}\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col *ngIf="dynamicMedias.actions.file" text-center>\n\n                        <button icon-start class="file-background" ion-button round color="{{dynamicMedias.actions.file.color}}">\n\n                            <input class="file-over" type="file" expandable accept="image/*" (change)="fileChange($event,dynamicMedias.actions.file)">\n\n                            <ion-icon name="{{dynamicMedias.actions.file.icon}}"></ion-icon>\n\n                            {{dynamicMedias.actions.file.name}}\n\n                        </button>\n\n                    </ion-col>\n\n                    <ion-col  *ngIf="dynamicMedias.actions.open" text-center>\n\n                        <button icon-start class="file-background" ion-button round color="{{myShow.color}}" (click)="onClickShowHide(myShow)">\n\n                            <ion-icon name="{{myShow.icon}}"></ion-icon>\n\n                            {{myShow.name}}\n\n                        </button>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n            </ion-col>\n\n\n\n        </ion-row>\n\n\n\n    </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-medias\dynamic-medias.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiImageService__["a" /* ApiImageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], DynamicMediasPage);
    return DynamicMediasPage;
    var DynamicMediasPage_1;
}());

//# sourceMappingURL=dynamic-medias.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, loadingCtrl, toastCtrl, formBuilder, apiService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.isImageViewer = false;
        this.resourceImages = [];
    }
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getServerPublicRSAKey()
            .then(function (pk) { return _this.serverKey = pk; })
            .catch(function (err) { return console.log(err); });
        this.myFromGroup = this.formBuilder.group({
            user: '',
            pass: ''
        });
    };
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        //ma hoa du lieu truoc khi truyen di
        var passEncrypted = '';
        try {
            passEncrypted = this.serverKey.encrypt(this.myFromGroup.get('pass').value, 'base64', 'utf8');
        }
        catch (err) {
            console.log(err);
        }
        var formData = new FormData();
        formData.append("username", this.myFromGroup.get('user').value);
        formData.append("password", passEncrypted);
        //gui lenh login 
        var loading = this.loadingCtrl.create({
            content: 'Saving user info...'
        });
        loading.present();
        this.apiService.register(formData)
            .then(function (status) {
            loading.dismiss();
            if (status) {
                _this.toastCtrl.create({
                    message: "Thank you " + _this.myFromGroup.get('user').value + "! You are registered!",
                    duration: 3000,
                    position: 'middle'
                }).present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
            else {
                _this.toastCtrl.create({
                    message: "Your new " + _this.myFromGroup.get('user').value + ". Existed in our System, please choose another...",
                    duration: 5000,
                    position: 'bottom'
                }).present();
            }
        })
            .catch(function (err) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: "result: " + JSON.stringify(err),
                duration: 5000,
                position: 'bottom'
            }).present();
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Register form\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="card-background-page">\n\n  <form (ngSubmit)="onSubmit()" [formGroup]="myFromGroup">\n\n    <ion-card col-12 col-xl-4 col-lg-6 col-sm-12>\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text" formControlName="user"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" formControlName="pass"></ion-input>\n\n      </ion-item>\n\n      <ion-row no-padding>\n\n\n\n        <ion-col text-right>\n\n          <ion-buttons start>\n\n            <button ion-button type="submit" icon-end round>\n\n              Đăng ký\n\n              <ion-icon name="share-alt"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n        \n\n      </ion-row>\n\n\n\n    </ion-card>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__["a" /* ApiAuthService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiImageService__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, loadingCtrl, toastCtrl, formBuilder, apiImageService, apiService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.apiImageService = apiImageService;
        this.apiService = apiService;
        this.isImageViewer = false;
        this.resourceImages = []; //: { imageViewer: any, file: any, name: string }[] = [];
    }
    SettingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getServerPublicRSAKey()
            .then(function (pk) { return _this.serverKey = pk; })
            .catch(function (err) { return console.log(err); });
        this.userInfo = this.apiService.getUserInfoSetting();
        //console.log(this.userInfo);
        this.myFromGroup = this.formBuilder.group({
            DISPLAY_NAME: (this.userInfo) ? this.userInfo.DISPLAY_NAME : '',
            FULL_NAME: (this.userInfo) ? this.userInfo.FULL_NAME : '',
            PHONE: (this.userInfo) ? this.userInfo.PHONE : '',
            EMAIL: (this.userInfo) ? this.userInfo.EMAIL : '',
            FULL_ADDRESS: (this.userInfo) ? this.userInfo.FULL_ADDRESS : '',
            fileload: '',
        });
    };
    SettingPage.prototype.fileChange = function (event) {
        var _this = this;
        if (event.target && event.target.files) {
            var files = event.target.files;
            for (var key in files) {
                if (!isNaN(parseInt(key))) {
                    this.apiImageService.resizeImage(files[key].name, files[key], 300)
                        .then(function (data) {
                        _this.resourceImages.push(data);
                        _this.isImageViewer = true;
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
                }
            } //
        }
    };
    SettingPage.prototype.deleteImage = function (evt) {
        this.resourceImages = this.resourceImages.filter(function (value, index, arr) {
            return value != evt;
        });
    };
    //thuc hien submit
    SettingPage.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        //bo cai nay di vi da xu ly interceptor roi
        //formData.append("Authorization", 'Bearer ' + this.apiService.getUserToken());
        if (this.myFromGroup.get("DISPLAY_NAME").value)
            formData.append("DISPLAY_NAME", this.myFromGroup.get("DISPLAY_NAME").value);
        if (this.myFromGroup.get("FULL_NAME").value)
            formData.append("FULL_NAME", this.myFromGroup.get("FULL_NAME").value);
        if (this.myFromGroup.get("PHONE").value)
            formData.append("PHONE", this.myFromGroup.get("PHONE").value);
        if (this.myFromGroup.get("EMAIL").value)
            formData.append("EMAIL", this.myFromGroup.get("EMAIL").value);
        if (this.myFromGroup.get("FULL_ADDRESS").value)
            formData.append("FULL_ADDRESS", this.myFromGroup.get("FULL_ADDRESS").value);
        var i = 0;
        this.resourceImages.forEach(function (fileObj) {
            //console.log(fileObj.name);
            formData.append('file2Upload' + i++, fileObj.file, fileObj.name);
            //gui tung file hoac tat ca cac file
        });
        //gui lenh user/save 
        var loading = this.loadingCtrl.create({
            content: 'Saving user info...'
        });
        loading.present();
        this.apiService.editUser(formData)
            .then(function (status) {
            loading.dismiss();
            if (status) {
                _this.toastCtrl.create({
                    message: "Thank you for your setting successful!",
                    duration: 3000,
                    position: 'middle'
                }).present();
            }
            else {
                _this.toastCtrl.create({
                    message: "CAN NOT edit this user! Some reason unknow, please try again later",
                    duration: 5000,
                    position: 'bottom'
                }).present();
            }
            _this.apiService.logout()
                .then(function (d) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            })
                .catch(function (e) { });
        })
            .catch(function (err) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: "result: " + JSON.stringify(err),
                duration: 5000,
                position: 'bottom'
            }).present();
        });
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\setting\setting.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Thay đổi thông tin cá nhân\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="card-background-page">\n\n  <form (ngSubmit)="onSubmit()" [formGroup]="myFromGroup">\n\n    <ion-card col-12 col-xl-4 col-lg-6 col-sm-12>\n\n      <ion-item>\n\n        <ion-label floating>Nick Name - Tên hiển thị</ion-label>\n\n        <ion-input type="text" formControlName="DISPLAY_NAME"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label floating>Full Name - Tên Đầy đủ</ion-label>\n\n          <ion-input type="text" formControlName="FULL_NAME"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label floating>Phone - Điện thoại</ion-label>\n\n          <ion-input type="text" formControlName="PHONE"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label floating>Email - Hộp thư điện tử</ion-label>\n\n          <ion-input type="text" formControlName="EMAIL"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label floating>Address - Địa chỉ đầy đủ</ion-label>\n\n          <ion-input type="text" formControlName="FULL_ADDRESS"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="(userInfo?.URL_IMAGE)">\n\n          <ion-grid>\n\n              <ion-row>\n\n                  <ion-col col-12>\n\n                      <ion-card>\n\n                          <img [src]="userInfo?.URL_IMAGE"/>\n\n                      </ion-card>\n\n                  </ion-col>\n\n              </ion-row>\n\n          </ion-grid>\n\n      </ion-item>\n\n\n\n      <ion-item *ngIf="isImageViewer">\n\n          <ion-grid>\n\n              <ion-row>\n\n                  <ion-col *ngFor="let obj of resourceImages" col-12>\n\n                      <ion-card>\n\n                          <img [src]="obj?.imageViewer" style="width: 100%; height: 100%;" />\n\n                          <ion-row>\n\n                              <ion-col>\n\n                                  <button ion-button type="button" clear small color="secondary" icon-start (click)="deleteImage(obj)">\n\n                                      <ion-icon name=\'backspace\' ios="ios-backspace" md="md-backspace"></ion-icon>\n\n                                      Xóa bỏ\n\n                                  </button>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                      </ion-card>\n\n                  </ion-col>\n\n              </ion-row>\n\n          </ion-grid>\n\n      </ion-item>\n\n      \n\n    <ion-item>  \n\n      <ion-buttons start>\n\n          <button ion-button type="button" icon-end round>\n\n              <input type="file" expandable accept="image/*" formControlName="fileload" (change)="fileChange($event)">\n\n              Avantar - Chọn ảnh đại diện\n\n              <ion-icon name="images"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n    </ion-item>\n\n\n\n      <ion-row no-padding>\n\n        <ion-col text-right>\n\n          <ion-buttons start>\n\n            <button ion-button type="submit" icon-end round>\n\n              Cập nhập\n\n              <ion-icon name="share-alt"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\setting\setting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiImageService__["a" /* ApiImageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__["a" /* ApiAuthService */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleIconsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icon_icons__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icon_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_icon_icons__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SampleIconsPage = /** @class */ (function () {
    function SampleIconsPage() {
        this.icons = [];
        this.iconTypes = {
            icon: 1,
            list: 2,
            button: 3,
            avatar: 4,
        };
        this.iconTypeList = [
            { name: 'icon', value: 1 },
            { name: 'list', value: 2 },
            { name: 'button', value: 3 },
            { name: 'avatar', value: 4 },
        ];
        this.iconType = this.iconTypes.icon;
    }
    SampleIconsPage.prototype.ngOnInit = function () {
        this.icons = __WEBPACK_IMPORTED_MODULE_2__assets_icon_icons___default.a;
    };
    SampleIconsPage.prototype.searchIcons = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.icons = __WEBPACK_IMPORTED_MODULE_2__assets_icon_icons___default.a.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.icons = __WEBPACK_IMPORTED_MODULE_2__assets_icon_icons___default.a;
        }
    };
    SampleIconsPage.prototype.selectIcon = function (icon) {
        console.log(icon);
    };
    SampleIconsPage.prototype.resetFilter = function (e) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], SampleIconsPage.prototype, "slides", void 0);
    SampleIconsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sample-icons',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\sample-icons\sample-icons.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-item>\n\n\n\n      <ion-searchbar item-start placeholder="Tìm để lọc biểu tượng" (ionInput)="searchIcons($event)" (ionClear)="resetFilter($event)"></ion-searchbar>\n\n      <ion-select item-end [(ngModel)]="iconType">\n\n          <ion-option *ngFor="let type of iconTypeList" value="{{type.value}}">{{type.name}}</ion-option>\n\n      </ion-select>\n\n\n\n    </ion-item>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list *ngIf="iconType==iconTypes.icon">\n\n    <ion-icon *ngFor="let icon of icons" (click)="selectIcon(icon)" name={{icon}} color="primary"></ion-icon>\n\n  </ion-list>\n\n      \n\n  <ion-list *ngIf="iconType==iconTypes.list">\n\n    <ion-item *ngFor="let icon of icons" (click)="selectIcon(icon)">\n\n        <ion-icon name={{icon}} item-start></ion-icon>\n\n        <ion-label>{{icon}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf="iconType==iconTypes.avatar">\n\n      <ion-grid>\n\n          <ion-row *ngFor="let icon of icons" (click)="selectIcon(icon)">\n\n            <ion-col>\n\n              <ion-avatar item-start>\n\n                <ion-icon name={{icon}} item-start></ion-icon>\n\n              </ion-avatar>\n\n              <h1>{{icon}}</h1>\n\n              <h2>Finn</h2>\n\n              <h3>Don\'t Know What To Do!</h3>\n\n              <p>I\'ve had a pretty messed up day. If we just...</p>\n\n            </ion-col>\n\n          </ion-row>  \n\n      </ion-grid>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf="iconType==iconTypes.button">\n\n    <button ion-button type="button" round *ngFor="let icon of icons" (click)="selectIcon(icon)" color="primary">\n\n      <ion-icon name={{icon}}></ion-icon>\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\sample-icons\sample-icons.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SampleIconsPage);
    return SampleIconsPage;
}());

//# sourceMappingURL=sample-icons.js.map

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

module.exports =
        [     "add"
            , "add-circle"
            , "alarm"
            , "albums"
            , "alert"
            , "american-football"
            , "analytics"
            , "logo-android"
            , "logo-angular"
            , "aperture"
            , "logo-apple"
            , "apps"
            , "appstore"
            , "archive"
            , "arrow-back"
            , "arrow-down"
            , "arrow-dropdown"
            , "arrow-dropdown-circle"
            , "arrow-dropleft"
            , "arrow-dropleft-circle"
            , "arrow-dropright"
            , "arrow-dropright-circle"
            , "arrow-dropup"
            , "arrow-dropup-circle"
            , "arrow-forward"
            , "arrow-round-back"
            , "arrow-round-down"
            , "arrow-round-forward"
            , "arrow-round-up"
            , "arrow-up"
            , "at"
            , "attach"
            , "backspace"
            , "barcode"
            , "baseball"
            , "basket"
            , "basketball"
            , "battery-charging"
            , "battery-dead"
            , "battery-full"
            , "beaker"
            , "beer"
            , "bicycle"
            , "logo-bitcoin"
            , "bluetooth"
            , "boat"
            , "body"
            , "bonfire"
            , "book"
            , "bookmark"
            , "bookmarks"
            , "bowtie"
            , "briefcase"
            , "browsers"
            , "brush"
            , "logo-buffer"
            , "bug"
            , "build"
            , "bulb"
            , "bus"
            , "cafe"
            , "calculator"
            , "calendar"
            , "call"
            , "camera"
            , "car"
            , "card"
            , "cart"
            , "cash"
            , "chatboxes"
            , "chatbubbles"
            , "checkbox"
            , "checkbox-outline"
            , "checkmark"
            , "checkmark-circle"
            , "checkmark-circle-outline"
            , "logo-chrome"
            , "clipboard"
            , "clock"
            , "close"
            , "close-circle"
            , "closed-captioning"
            , "cloud"
            , "cloud-circle"
            , "cloud-done"
            , "cloud-download"
            , "cloud-outline"
            , "cloud-upload"
            , "cloudy"
            , "cloudy-night"
            , "code"
            , "code-download"
            , "code-working"
            , "logo-codepen"
            , "cog"
            , "color-fill"
            , "color-filter"
            , "color-palette"
            , "color-wand"
            , "compass"
            , "construct"
            , "contact"
            , "contacts"
            , "contract"
            , "contrast"
            , "copy"
            , "create"
            , "crop"
            , "logo-css3"
            , "cube"
            , "cut"
            , "logo-designernews"
            , "desktop"
            , "disc"
            , "document"
            , "done-all"
            , "download"
            , "logo-dribbble"
            , "logo-dropbox"
            , "easel"
            , "egg"
            , "logo-euro"
            , "exit"
            , "expand"
            , "eye"
            , "eye-off"
            , "logo-facebook"
            , "fastforward"
            , "female"
            , "filing"
            , "film"
            , "finger-print"
            , "flag"
            , "flame"
            , "flash"
            , "flask"
            , "flower"
            , "folder"
            , "folder-open"
            , "football"
            , "logo-foursquare"
            , "logo-freebsd-devil"
            , "funnel"
            , "game-controller-a"
            , "game-controller-b"
            , "git-branch"
            , "git-commit"
            , "git-compare"
            , "git-merge"
            , "git-network"
            , "git-pull-request"
            , "logo-github"
            , "glasses"
            , "globe"
            , "logo-google"
            , "logo-googleplus"
            , "grid"
            , "logo-hackernews"
            , "hammer"
            , "hand"
            , "happy"
            , "headset"
            , "heart"
            , "heart-outline"
            , "help"
            , "help-buoy"
            , "help-circle"
            , "home"
            , "logo-html5"
            , "ice-cream"
            , "image"
            , "images"
            , "infinite"
            , "information"
            , "information-circle"
            , "logo-instagram"
            , "ionic"
            , "ionitron"
            , "logo-javascript"
            , "jet"
            , "key"
            , "keypad"
            , "laptop"
            , "leaf"
            , "link"
            , "logo-linkedin"
            , "list"
            , "list-box"
            , "locate"
            , "lock"
            , "log-in"
            , "log-out"
            , "magnet"
            , "mail"
            , "mail-open"
            , "male"
            , "man"
            , "map"
            , "logo-markdown"
            , "medal"
            , "medical"
            , "medkit"
            , "megaphone"
            , "menu"
            , "mic"
            , "mic-off"
            , "microphone"
            , "moon"
            , "more"
            , "move"
            , "musical-note"
            , "musical-notes"
            , "navigate"
            , "no-smoking"
            , "logo-nodejs"
            , "notifications"
            , "notifications-off"
            , "notifications-outline"
            , "nuclear"
            , "nutrition"
            , "logo-octocat"
            , "open"
            , "options"
            , "outlet"
            , "paper"
            , "paper-plane"
            , "partly-sunny"
            , "pause"
            , "paw"
            , "people"
            , "person"
            , "person-add"
            , "phone-landscape"
            , "phone-portrait"
            , "photos"
            , "pie"
            , "pin"
            , "pint"
            , "logo-pinterest"
            , "pizza"
            , "plane"
            , "planet"
            , "play"
            , "logo-playstation"
            , "podium"
            , "power"
            , "pricetag"
            , "pricetags"
            , "print"
            , "pulse"
            , "logo-python"
            , "qr-scanner"
            , "quote"
            , "radio"
            , "radio-button-off"
            , "radio-button-on"
            , "rainy"
            , "recording"
            , "logo-reddit"
            , "redo"
            , "refresh"
            , "refresh-circle"
            , "remove"
            , "remove-circle"
            , "reorder"
            , "repeat"
            , "resize"
            , "restaurant"
            , "return-left"
            , "return-right"
            , "reverse-camera"
            , "rewind"
            , "ribbon"
            , "rose"
            , "logo-rss"
            , "sad"
            , "logo-sass"
            , "school"
            , "search"
            , "send"
            , "settings"
            , "share"
            , "share-alt"
            , "shirt"
            , "shuffle"
            , "skip-backward"
            , "skip-forward"
            , "logo-skype"
            , "logo-snapchat"
            , "snow"
            , "speedometer"
            , "square"
            , "square-outline"
            , "star"
            , "star-half"
            , "star-outline"
            , "stats"
            , "logo-steam"
            , "stopwatch"
            , "subway"
            , "sunny"
            , "swap"
            , "switch"
            , "sync"
            , "tablet-landscape"
            , "tablet-portrait"
            , "tennisball"
            , "text"
            , "thermometer"
            , "thumbs-down"
            , "thumbs-up"
            , "thunderstorm"
            , "time"
            , "timer"
            , "train"
            , "transgender"
            , "trash"
            , "trending-down"
            , "trending-up"
            , "trophy"
            , "logo-tumblr"
            , "tux"
            , "logo-twitch"
            , "logo-twitter"
            , "umbrella"
            , "undo"
            , "unlock"
            , "logo-usd"
            , "videocam"
            , "logo-vimeo"
            , "volume-down"
            , "volume-mute"
            , "volume-off"
            , "volume-up"
            , "walk"
            , "warning"
            , "watch"
            , "water"
            , "logo-whatsapp"
            , "wifi"
            , "logo-windows"
            , "wine"
            , "woman"
            , "logo-wordpress"
            , "logo-xbox"
            , "logo-yahoo"
            , "logo-yen"
            , "logo-youtube"
        ]

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PdfPage = /** @class */ (function () {
    function PdfPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    PdfPage.prototype.ngOnInit = function () {
    };
    PdfPage.prototype.createPdf = function () {
        //mo file pdf view ra thoi
    };
    PdfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pdf',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\pdf\pdf.html"*/'\n\n<ion-header>\n\n\n\n    <ion-toolbar>\n\n      <ion-title>Select Item: Multiple Value</ion-title>\n\n    </ion-toolbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content class="outer-content">\n\n  \n\n    <ion-item>\n\n      <ion-label>Toppings</ion-label>\n\n      <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!" class="e2eSelectToppings">\n\n        <ion-option value="bacon">Bacon</ion-option>\n\n        <ion-option value="olives">Black Olives</ion-option>\n\n        <ion-option value="xcheese">Extra Cheese</ion-option>\n\n        <ion-option value="peppers">Green Peppers</ion-option>\n\n        <ion-option value="mushrooms">Mushrooms</ion-option>\n\n        <ion-option value="onions">Onions</ion-option>\n\n        <ion-option value="pepperoni">Pepperoni</ion-option>\n\n        <ion-option value="pineapple" (ionSelect)="toppingsSelect($event)">Pineapple</ion-option>\n\n        <ion-option value="sausage">Sausage</ion-option>\n\n        <ion-option value="Spinach">Spinach</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Car Features</ion-label>\n\n      <ion-select [(ngModel)]="carFeatures" [multiple]="true" (ionChange)="carChange($event)">\n\n        <ion-option value="backupcamera">Backup Camera</ion-option>\n\n        <ion-option value="heatedseats">Headted Seats</ion-option>\n\n        <ion-option value="keyless">Keyless Entry</ion-option>\n\n        <ion-option value="navigation">Navigation</ion-option>\n\n        <ion-option value="parkingassist">Parking Assist</ion-option>\n\n        <ion-option value="sunroof">Sun Roof</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Pets</ion-label>\n\n      <ion-select [(ngModel)]="pets" multiple>\n\n        <ion-option *ngFor="let o of petOptions" [value]="o.value">{{o.text}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Disabled</ion-label>\n\n      <ion-select multiple disabled>\n\n        <ion-option selected="true">Selected Text</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Statuses</ion-label>\n\n      <ion-select multiple [(ngModel)]="status">\n\n        <ion-option value="selected" selected="true">Selected</ion-option>\n\n        <ion-option value="default">Default</ion-option>\n\n        <ion-option value="disabled" disabled="true">Disabled</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n    <p aria-hidden="true" padding>\n\n      <code>toppings: {{toppings}}</code><br>\n\n      <code>carFeatures: {{carFeatures}}</code><br>\n\n      <code>pets: {{pets}}</code><br>\n\n    </p>\n\n  \n\n    <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n      <ion-list padding-vertical>\n\n        <ion-item>\n\n          <ion-input formControlName="name" type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="no-border">\n\n          <ion-label>Select</ion-label>\n\n          <ion-select multiple="true" formControlName="select">\n\n            <ion-option>1</ion-option>\n\n            <ion-option>2</ion-option>\n\n            <ion-option>3</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <button ion-button full block class="no-margin" type="submit">Submit</button>\n\n      </ion-list>\n\n    </form>\n\n  \n\n    <ion-item>\n\n      <ion-label floating>Floating label</ion-label>\n\n      <ion-select multiple="true">\n\n        <ion-option value="bacon">Bacon</ion-option>\n\n        <ion-option value="olives">Black Olives</ion-option>\n\n        <ion-option value="xcheese">Extra Cheese</ion-option>\n\n        <ion-option value="peppers">Green Peppers</ion-option>\n\n        <ion-option value="mushrooms">Mushrooms</ion-option>\n\n        <ion-option value="onions">Onions</ion-option>\n\n        <ion-option value="pepperoni">Pepperoni</ion-option>\n\n        <ion-option value="pineapple">Pineapple</ion-option>\n\n        <ion-option value="sausage">Sausage</ion-option>\n\n        <ion-option value="Spinach">Spinach</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n  </ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\pdf\pdf.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PdfPage);
    return PdfPage;
}());

//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiResourceServices__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//bien dinh nghia loai slide page kieu javascript
var slidePage = {
    home: 0,
    create_invoice: 1,
    list_invoice: 2,
    load_pdf: 3,
};
/**
 * tra ve thang ke tiep
 * neu thang 12, quay ve 1 va tang nam len 1
 * @param yyyymm
 */
var getNextMonth = (function (yyyymm) {
    return Number(yyyymm) ? ((Number(yyyymm) + 1).toString().slice(4, 6) !== '13') ? (Number(yyyymm) + 1).toString() : (Number(yyyymm.slice(0, 4)) + 1).toString() + '01' : yyyymm;
});
var InvoicePage = /** @class */ (function () {
    function InvoicePage(navCtrl, formBuilder, platform, inAppBrowser, storage, resource, alertCtrl, loadingCtrl, sanitizer) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.inAppBrowser = inAppBrowser;
        this.storage = storage;
        this.resource = resource;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
        this.slideIndex = 0;
        this.isSlidingItemOpen = false;
        this.isMobile = false;
        this.billCycles = [];
        this.jsonInvoices = [];
        this.currentBillCycle = '201901'; //chu kỳ cước hiện tại
        this.currentCustIc = '';
        this.isSearch = false;
        this.searchString = '';
        this.shouldShowCancel = true;
        this.resourceServer = __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__["a" /* ApiStorageService */].resourceServer;
    }
    InvoicePage.prototype.ngOnInit = function () {
        //dang dd/mm/20yy = 
        //let control = new FormControl('01/12/2019',Validators.pattern(/^([0-3]{1})([0-9]{1})\/([0-1]{1})([0-9]{1})\/([2]{1})([0]{1})([0-9]{2})/));
        //console.log(control);
        this.isMobile = (this.platform.platforms()[0] === 'mobile');
        //console.log('Platform is Mobile: ', this.platform.platforms())
        this.slides.lockSwipes(true);
        this.cycleFormGroup = this.formBuilder.group({
            bill_cycle: [new Date().toLocaleString("en-GB").slice(3, 10),
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("/^([0-9]{2})\/([0-9]{4})/"),
                ]],
            bill_date: [new Date().toLocaleString("en-GB").slice(0, 10),
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})/),
                ]],
            invoice_no: ['1',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("^[0-9]*$"),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(9)
                ]],
        });
        this.getBillCycles();
    };
    InvoicePage.prototype.getBillCycles = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Đang kiểm tra các kỳ hóa đơn đã phát hành...'
        });
        loading.present();
        this.resource.getBillCycle()
            .then(function (data) {
            _this.billCycles = data;
            _this.billCycles.forEach(function (el) {
                //console.log('typeof el.bill_cycle', typeof el.bill_cycle);
                el.bill_cycle_vn = el.bill_cycle.slice(4, 6) + "/" + el.bill_cycle.slice(0, 4);
                el.bill_date_vn = el.bill_date.slice(6, 8) + "/" + el.bill_date.slice(4, 6) + "/" + el.bill_date.slice(0, 4);
            });
            var maxBillCycle = Math.max.apply(Math, _this.billCycles.map(function (o) { return o['bill_cycle']; }));
            if (typeof maxBillCycle == 'number')
                _this.lastBillCycle = _this.billCycles.find(function (x) { return x.bill_cycle === maxBillCycle.toString(); });
            //console.log('lastBillCycle', this.lastBillCycle ); 
            loading.dismiss();
        })
            .catch(function (err) {
            _this.billCycles = [];
            loading.dismiss();
        });
    };
    /**
     * Phat hanh hoa don moi
     */
    InvoicePage.prototype.createInvoices = function () {
        //lay thang hien tai max, add 1
        var newBillCycle;
        if (this.lastBillCycle) {
            var nextBillCycle = getNextMonth(this.lastBillCycle.bill_cycle);
            newBillCycle = {
                bill_cycle_vn: nextBillCycle.slice(4, 6) + "/" + nextBillCycle.slice(0, 4),
                bill_date_vn: new Date().toLocaleString("en-GB").slice(0, 10),
                invoice_no: this.lastBillCycle.invoice_no + 1
            };
        }
        else {
            newBillCycle = {
                bill_cycle_vn: new Date().toLocaleString("en-GB").slice(3, 10),
                bill_date_vn: new Date().toLocaleString("en-GB").slice(0, 10),
                invoice_no: 1
            };
        }
        this.cycleFormGroup = this.formBuilder.group({
            bill_cycle: [newBillCycle.bill_cycle_vn,
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^([0-9]{2})\/([0-9]{4})/),
                ]],
            bill_date: [newBillCycle.bill_date_vn,
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^([0-3]{1})([0-9]{1})\/([0-1]{1})([0-9]{1})\/([2]{1})([0]{1})([0-9]{2})/),
                ]],
            invoice_no: [newBillCycle.invoice_no,
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("^[0-9]*$"),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(9)
                ]],
        });
        this.goToSlide(slidePage.create_invoice);
    };
    /**
     * Phat hanh lai hoa don/ ghi lai ngay hoa don
     * Lay danh muc chu ky tao hoa don
     * this.billCycles.lenght>0
     * @param billCycle
     */
    InvoicePage.prototype.editInvoices = function (item, billCycle) {
        this.cycleFormGroup = this.formBuilder.group({
            bill_cycle: [billCycle.bill_cycle_vn,
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^([0-9]{2})\/([0-9]{4})/),
                ]],
            bill_date: [billCycle.bill_date_vn,
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})/),
                ]],
            invoice_no: [billCycle.invoice_no + 1 - billCycle.count_customer,
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("^[0-9]*$"),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(9)
                ]],
        });
        this.goToSlide(slidePage.create_invoice);
        this.closeSwipeOptions(item);
    };
    /**
     * Phát hành hóa đơn tháng, ngày phát hành
     */
    InvoicePage.prototype.onSubmitCreateInvoices = function () {
        var _this = this;
        var billCycle = {
            bill_cycle: this.cycleFormGroup.value.bill_cycle.slice(3, 7)
                + this.cycleFormGroup.value.bill_cycle.slice(0, 2),
            bill_date: this.cycleFormGroup.value.bill_date.slice(6, 10)
                + this.cycleFormGroup.value.bill_date.slice(3, 5)
                + this.cycleFormGroup.value.bill_date.slice(0, 2),
            invoice_no: this.cycleFormGroup.value.invoice_no
        };
        //console.log('billCycle OUT',billCycle);
        this.presentConfirm({
            cancel_text: 'Bỏ qua',
            ok_text: 'Đồng ý',
            title: 'Xác nhận phát hành hóa đơn',
            message: 'Tháng: ' + this.cycleFormGroup.value.bill_cycle + '<br>'
                + 'Ngày phát hành: ' + this.cycleFormGroup.value.bill_date + '<br>'
                + 'Với hóa đơn bắt đầu từ số: ' + this.cycleFormGroup.value.invoice_no,
            ok: function (isOK) {
                if (isOK) {
                    _this.callCreateInvoices(billCycle);
                }
            }
        });
    };
    /**
     * Goi API de phat hanh hoa don theo thang
     * @param billCycle
     */
    InvoicePage.prototype.callCreateInvoices = function (billCycle) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Đang phát hành hóa đơn tháng: '
                + this.cycleFormGroup.value.bill_cycle + '<br>'
                + ' với ngày phát hành: ' + this.cycleFormGroup.value.bill_date + '<br>'
                + ' từ hóa đơn số: ' + this.cycleFormGroup.value.invoice_no
        });
        loading.present();
        this.resource.createInvoices(billCycle)
            .then(function (result) {
            var tmpResult;
            tmpResult = result;
            if (tmpResult && tmpResult.status && tmpResult.data) {
                //console.log('data',tmpResult.data);
                _this.presentAlert({
                    ok_text: 'Xong',
                    title: 'ĐÃ PHÁT HÀNH XONG',
                    message: 'Tháng: ' + (tmpResult.data.bill_cycle ? tmpResult.data.bill_cycle.slice(4, 6) + '/' + tmpResult.data.bill_cycle.slice(0, 4) : '') + '<br>'
                        + 'Ngày phát hành: ' + (tmpResult.data.bill_date ? tmpResult.data.bill_date.slice(6, 8) + '/' + tmpResult.data.bill_date.slice(4, 6) + '/' + tmpResult.data.bill_date.slice(0, 4) : '') + '<br>'
                        + 'Số lượng phát hành: ' + tmpResult.data.count + '<br>'
                        + 'Số hóa đơn lần tiếp theo: ' + tmpResult.data.invoice_no,
                });
                //tro ve home de xem ky cuoc
                _this.getBillCycles(); //goi lay lai cac ky cuoc da 
            }
            _this.goToSlide(slidePage.home);
            loading.dismiss();
        })
            .catch(function (err) {
            console.log('error', err);
            _this.goToSlide(slidePage.home);
            loading.dismiss();
        });
    };
    /**
     * tạo bản in pdf từ máy chủ
     * @param billCycle
     */
    InvoicePage.prototype.createPdfInvoices = function (item, billCycle) {
        //console.log('billCycle', billCycle);
        /* let loading = this.loadingCtrl.create({
          content: 'Đang tạo bản in tháng : ' + billCycle.bill_cycle_vn
        });
        loading.present();
    
        this.resource.createPdfInvoices({
    
        })
        .then(data=>{
    
          console.log('pdf data',data);
          let jsonFileList;
          jsonFileList = data;
    
          this.goToSlide(slidePage.load_pdf);
    
          loading.dismiss();
        })
        .catch(err=>{
          this.presentAlert({
            title:'Lỗi trong lúc tạo bản in',
            message:'Err' + JSON.stringify(err),
            ok_text:'Quay về'
          })
          //this.goToSlide(slidePage.home);
          loading.dismiss();
        }) */
        this.getPdfInvoices(billCycle);
        this.closeSwipeOptions(item);
    };
    InvoicePage.prototype.getPdfInvoices = function (billCycle) {
        //console.log('billCycle', billCycle);
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Đang lấy bản in tháng : ' + billCycle.bill_cycle_vn
        });
        loading.present();
        this.resource.getPdfInvoices(billCycle.bill_cycle) // + '/R000000009?background=yes')
            .then(function (data) {
            var bufferPdf;
            bufferPdf = data;
            var file = new Blob([bufferPdf], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
            _this.presentAlert({
                title: 'Tạo bản in thành công',
                message: 'Mở trình duyệt hệ thống để xem file pdf bản in',
                ok_text: 'OK'
            });
            // if (this.isMobile){
            var browser1 = _this.inAppBrowser.create(fileURL, '_blank', 'hideurlbar=no,location=no,toolbarposition=top');
            // }else{
            var browser2 = _this.inAppBrowser.create(fileURL, '_system');
            // }
            // this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
            // this.goToSlide(slidePage.load_pdf);
            loading.dismiss();
        })
            .catch(function (err) {
            _this.presentAlert({
                title: 'Lỗi trong lúc lấy bản in',
                message: 'Err' + JSON.stringify(err),
                ok_text: 'Quay về'
            });
            loading.dismiss();
        });
    };
    /**
     * Lấy danh sách hóa đơn từ máy chủ
     * cho phép xem từng hóa đơn, tìm kiếm hóa đơn để kiểm tra
     * hoăc cho phép in đơn lẻ từng hóa đơn tìm được
     * hoặc in lại bản in lọc theo danh sách tìm được
     * @param billCycle
     */
    InvoicePage.prototype.getInvoices = function (item, billCycle) {
        var _this = this;
        this.goToSlide(slidePage.list_invoice);
        var loading = this.loadingCtrl.create({
            content: 'Đang lấy danh sách chi tiết hóa đơn...'
        });
        loading.present();
        this.resource.getInvoices(billCycle.bill_cycle)
            .then(function (data) {
            _this.jsonInvoices = data;
            loading.dismiss();
        })
            .catch(function (err) {
            _this.jsonInvoices = [];
            loading.dismiss();
        });
        this.closeSwipeOptions(item);
    };
    InvoicePage.prototype.gotoSlideInvoices = function (billCycle) {
        // this.getInvoices(billCycle.bill_cycle)
    };
    /**
     *
     * @param cycleCust = yyyymm/<cust_id>
     */
    InvoicePage.prototype.getInvoicesDetails = function (cycleCust) {
    };
    /**
     * Đi đến slide chi tiết hóa đơn
     * để in đơn lẻ lại hóa đơn
     * @param invoice
     */
    InvoicePage.prototype.gotoSlideInvoicesDetail = function (invoice) {
    };
    /**
     *
     */
    InvoicePage.prototype.createInvoice = function () {
        //alert roi kiem tra dieu kien de tao ky cuoc 
        /* this.resource.createInvoices({
            bill_cycle: '201901',
            bill_date: '20190120',
            invoice_no: 1,
            cust_id: undefined
        })
        .then(data=>{
          console.log(data);
        })
        .catch(err=>{
          console.log(err);
        }) */
    };
    // Su dung slide Pages
    //--------------------------
    /**
     * Thay đổi kiểu bấm nút mở lệnh trên item sliding
     * @param slidingItem
     * @param item
     */
    InvoicePage.prototype.openSwipeOptions = function (slidingItem, item) {
        this.isSlidingItemOpen = true;
        slidingItem.setElementClass("active-sliding", true);
        slidingItem.setElementClass("active-slide", true);
        slidingItem.setElementClass("active-options-right", true);
        item.setElementStyle("transform", "translate3d(-350px, 0px, 0px)");
    };
    /**
     * Thay đổi cách bấm nút đóng lệnh bằng nút trên item sliding
     * @param slidingItem
     */
    InvoicePage.prototype.closeSwipeOptions = function (slidingItem) {
        slidingItem.close();
        slidingItem.setElementClass("active-sliding", false);
        slidingItem.setElementClass("active-slide", false);
        slidingItem.setElementClass("active-options-right", false);
        this.isSlidingItemOpen = false;
    };
    /**
     * Dieu khien slide
     * @param i
     */
    InvoicePage.prototype.goToSlide = function (i) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(i, 500);
        this.slides.lockSwipes(true);
    };
    /**
     * xac dinh slide
     */
    InvoicePage.prototype.slideChanged = function () {
        this.slideIndex = this.slides.getActiveIndex();
    };
    InvoicePage.prototype.goBack = function () {
        if (this.slideIndex > 0)
            this.goToSlide(this.slideIndex - 1);
    };
    //----------- end of sliding
    //Su dung search
    //---------------------
    InvoicePage.prototype.goSearch = function () {
        this.isSearch = true;
    };
    InvoicePage.prototype.searchEnter = function () {
        this.isSearch = false;
    };
    InvoicePage.prototype.onInput = function (e) {
        console.log(this.searchString);
    };
    //----------------
    InvoicePage.prototype.presentConfirm = function (jsonConfirm) {
        var alert = this.alertCtrl.create({
            title: jsonConfirm.title,
            message: jsonConfirm.message,
            buttons: [
                {
                    text: jsonConfirm.cancel_text,
                    role: 'cancel',
                    handler: function () {
                        if (jsonConfirm.ok)
                            jsonConfirm.ok(false);
                    }
                },
                {
                    text: jsonConfirm.ok_text,
                    handler: function () {
                        if (jsonConfirm.ok)
                            jsonConfirm.ok(true);
                    }
                }
            ]
        });
        alert.present();
    };
    InvoicePage.prototype.presentAlert = function (jsonConfirm) {
        var alert = this.alertCtrl.create({
            title: jsonConfirm.title,
            message: jsonConfirm.message,
            buttons: [
                {
                    text: jsonConfirm.ok_text,
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], InvoicePage.prototype, "slides", void 0);
    InvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoice',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\invoice\invoice.html"*/'<ion-header>\n\n    <ion-navbar>\n\n\n\n        <ion-buttons *ngIf="!isSearch&&slideIndex>0" start>\n\n            <button ion-button icon-only color="royal" (click)="goBack()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n            </ion-buttons>\n\n            \n\n            <ion-buttons *ngIf="!isSearch" end>\n\n                <button ion-button icon-only color="primary" [disabled]="userInfo?false:true">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n        \n\n            <ion-buttons *ngIf="!isSearch&&slideIndex===1" end>\n\n            <button ion-button icon-only color="royal" (click)="goSearch()">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n            </ion-buttons>\n\n        \n\n            <ion-searchbar *ngIf="isSearch" placeholder="Tìm theo mã/tên khách hàng/khu vực/người quản lý hoặc số điện thoại"\n\n            [(ngModel)]="searchString" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (keyup.enter)="searchEnter()"\n\n            (keyup.esc)="searchEnter()" start>\n\n            </ion-searchbar>\n\n        \n\n            <ion-title *ngIf="!isSearch">INVOICES - HÓA ĐƠN</ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <div class="gradient"></div>\n\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n\n        <!-- #id=0 - home : Liệt kê các kỳ của hóa đơn-->\n\n        <ion-slide>\n\n\n\n            <ion-list>\n\n\n\n                <ion-toolbar color="primary">\n\n                    <ion-buttons end>\n\n                        <button ion-button icon-start outline color="light" class="activated" (click)="createInvoices()">\n\n                            <ion-icon name="contact"></ion-icon>\n\n                            PHÁT HÀNH MỚI\n\n                        </button>\n\n                    </ion-buttons>\n\n                    <ion-title class="left">CÁC KỲ HÓA ĐƠN ĐÃ PHÁT HÀNH</ion-title>\n\n                </ion-toolbar>\n\n\n\n                <ion-item-sliding #slidingItem *ngFor="let billCycle of billCycles">\n\n                    <ion-item #item>\n\n                        <ion-avatar item-start *ngIf="!isMobile">\n\n                            <button ion-item item-start>\n\n                                <ion-icon name="calculator" item-start color="danger"></ion-icon>\n\n                            </button>\n\n                        </ion-avatar>\n\n                        <h1>Kỳ tháng: {{billCycle.bill_cycle_vn}}</h1>\n\n                        <h2>Ngày phát hành: {{billCycle.bill_date_vn}}</h2>\n\n                        <p>Số lượng khách hàng: {{billCycle.count_customer}}</p>\n\n                        <ion-note>Số hóa đơn cuối: {{billCycle.invoice_no_min}} - {{billCycle.invoice_no}}</ion-note>\n\n\n\n                        <ion-avatar item-end *ngIf="!isSlidingItemOpen&&!isMobile">\n\n                            <button ion-item item-end (click)="openSwipeOptions(slidingItem,item)">\n\n                                <ion-icon name="arrow-dropleft-circle" item-end color="secondary"></ion-icon>\n\n                            </button>\n\n                        </ion-avatar>\n\n\n\n                        <ion-buttons item-end *ngIf="isSlidingItemOpen&&!isMobile">\n\n                            <button icon-only color="primary" (click)="closeSwipeOptions(slidingItem)">\n\n                                <ion-icon name="arrow-dropright-circle" color="primary"></ion-icon>\n\n                            </button>\n\n                        </ion-buttons>\n\n\n\n                    </ion-item>\n\n\n\n                    <ion-item-options>\n\n                        <button ion-button color="danger" (click)="editInvoices(slidingItem,billCycle)">\n\n                            <ion-icon name="calculator" ios="ios-calculator" md="md-calculator"></ion-icon>\n\n                            Phát hành lại\n\n                        </button>\n\n                        <button ion-button color="primary" (click)="createPdfInvoices(slidingItem,billCycle)">\n\n                            <ion-icon name="print" ios="ios-print" md="md-print"></ion-icon>\n\n                            Tạo bản in\n\n                        </button>\n\n                        <button ion-button color="secondary" (click)="getInvoices(slidingItem,billCycle)">\n\n                            <ion-icon name="list-box" ios="ios-list-box" md="md-list-box"></ion-icon>\n\n                            Xem danh sách\n\n                        </button>\n\n                    </ion-item-options>\n\n\n\n                </ion-item-sliding>\n\n\n\n            </ion-list>\n\n\n\n        </ion-slide>\n\n\n\n        <!-- #id=1 - create_invoice : Gọi phát hành/phát hành lại kỳ cước -->\n\n        <ion-slide>\n\n            <div class="wrapper">\n\n                <form class="login-form" (ngSubmit)="onSubmitCreateInvoices()" [formGroup]="cycleFormGroup">\n\n                    <ion-item>\n\n                        <ion-label floating>Tháng - MM/YYYY(*)</ion-label>\n\n                        <ion-input [disabled]="true" type="text" formControlName="bill_cycle"></ion-input>\n\n                        <ion-label *ngIf="cycleFormGroup.controls.bill_cycle.invalid && cycleFormGroup.controls.bill_cycle.touched">\n\n                            <span class="error">Vui lòng nhập kỳ phát hành dạng MM/YYYY</span>\n\n                        </ion-label>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-label floating>Ngày phát hành (*)</ion-label>\n\n                        <ion-input type="text" formControlName="bill_date"></ion-input>\n\n                        <ion-label *ngIf="cycleFormGroup.controls.bill_date.invalid && cycleFormGroup.controls.bill_date.touched">\n\n                            <span class="error">Vui lòng nhập ngày phát hành hóa đơn dạng DD/MM/YYYY</span>\n\n                        </ion-label>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-label floating>Số hóa đơn bắt đầu (*)</ion-label>\n\n                        <ion-input type="text" formControlName="invoice_no"></ion-input>\n\n                        <ion-label *ngIf="cycleFormGroup.controls.invoice_no.invalid && cycleFormGroup.controls.invoice_no.touched">\n\n                            <span class="error">Vui lòng nhập chỉ số hóa đơn bắt đầu</span>\n\n                        </ion-label>\n\n                    </ion-item>\n\n\n\n                    <ion-buttons start>\n\n                        <button ion-button type="submit" icon-end round [disabled]="cycleFormGroup.controls.bill_cycle.invalid || cycleFormGroup.controls.bill_date.invalid || cycleFormGroup.controls.invoice_no.invalid">\n\n                            Phát hành hóa đơn\n\n                            <ion-icon name="share-alt"></ion-icon>\n\n                        </button>\n\n                    </ion-buttons>\n\n                </form>\n\n            </div>\n\n        </ion-slide>\n\n\n\n        <!-- #id=2 - list_invoice : Gọi lấy bản phát hành tìm kiếm và phát hành lẻ, bản in lẻ ..  -->\n\n        <ion-slide>\n\n\n\n            <ion-list>\n\n                <button ion-item *ngFor="let invoice of jsonInvoices" (click)="gotoSlideInvoicesDetail(invoice)">\n\n                    <ion-avatar item-start>\n\n                        <img src={{invoice.image}} *ngIf="invoice.image">\n\n                        <button ion-button icon-only color="primary" round *ngIf="!invoice.image">\n\n                            <ion-icon name="contact"></ion-icon>\n\n                        </button>\n\n                    </ion-avatar>\n\n                    <h2>{{invoice.full_name}}</h2>\n\n                    <p>{{invoice.address}}</p>\n\n                    <ion-note>{{invoice.sum_charge}} - {{invoice.bill_date}}</ion-note>\n\n                </button>\n\n            </ion-list>\n\n\n\n        </ion-slide>\n\n\n\n        <!-- #id=3 - load_pdf : Gọi tạo file pdf và hiển thị bản in pdf trong khung -->\n\n        <ion-slide>\n\n\n\n            <iframe *ngIf="pdfLink" [src]="pdfLink" width=100% height=100% frameborder="1" allowfullscreen sandbox="allow-same-origin allow-scripts"></iframe>\n\n\n\n        </ion-slide>\n\n\n\n\n\n        <!-- #id=4 -->\n\n        <!-- #id=5 -->\n\n        <!-- #id=6 -->\n\n    </ion-slides>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\invoice\invoice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_6__services_apiResourceServices__["a" /* ApiResourceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], InvoicePage);
    return InvoicePage;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportPage = /** @class */ (function () {
    function ReportPage(toastCtrl) {
        this.toastCtrl = toastCtrl;
        this.chats = [
            {
                img: './assets/avatar-cher.png',
                name: 'Cher',
                message: 'Ugh. As if.',
                time: '9:38 pm'
            }, {
                img: './assets/avatar-dionne.png',
                name: 'Dionne',
                message: 'Mr. Hall was way harsh.',
                time: '8:59 pm'
            }, {
                img: './assets/avatar-murray.png',
                name: 'Murray',
                message: 'Excuse me, "Ms. Dione."',
                time: 'Wed'
            }
        ];
        this.logins = [
            {
                icon: 'logo-twitter',
                name: 'Twitter',
                username: 'admin',
            }, {
                icon: 'logo-github',
                name: 'GitHub',
                username: 'admin37',
            }, {
                icon: 'logo-instagram',
                name: 'Instagram',
                username: 'imanadmin',
            }, {
                icon: 'logo-google',
                name: 'Google',
                username: 'cuongdq3500888',
            }, {
                icon: 'logo-codepen',
                name: 'Codepen',
                username: 'administrator',
            }
        ];
    }
    ReportPage.prototype.more = function (item) {
        console.log('More');
        item.close();
    };
    ReportPage.prototype.delete = function (item) {
        console.log('Delete');
        item.close();
    };
    ReportPage.prototype.mute = function (item) {
        console.log('Mute');
        item.close();
    };
    ReportPage.prototype.archive = function (item) {
        this.expandAction(item, 'archiving', 'Chat was archived.');
    };
    ReportPage.prototype.download = function (item) {
        this.expandAction(item, 'downloading', 'Login was downloaded.');
    };
    ReportPage.prototype.expandAction = function (item, _, text) {
        // TODO item.setElementClass(action, true);
        var _this = this;
        setTimeout(function () {
            var toast = _this.toastCtrl.create({
                message: text
            });
            toast.present();
            // TODO item.setElementClass(action, false);
            item.close();
            setTimeout(function () { return toast.dismiss(); }, 2000);
        }, 1500);
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\report\report.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Item Reorder</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="outer-content">\n\n\n\n  <ion-list class="chat-sliding-demo">\n\n    <ion-list-header>\n\n      Chats\n\n    </ion-list-header>\n\n\n\n    <ion-item-sliding *ngFor="let chat of chats" #item>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img [src]="chat.img">\n\n        </ion-avatar>\n\n        <h2>{{chat.name}}</h2>\n\n        <p>{{chat.message}}</p>\n\n        <ion-note item-end>\n\n          {{chat.time}}\n\n        </ion-note>\n\n      </ion-item>\n\n\n\n      <ion-item-options>\n\n        <button ion-button color="secondary" (click)="more(item)">\n\n          <ion-icon name="menu"></ion-icon>\n\n          More\n\n        </button>\n\n        <button ion-button color="dark" (click)="mute(item)">\n\n          <ion-icon name="volume-off"></ion-icon>\n\n          Mute\n\n        </button>\n\n        <button ion-button color="danger" (click)="delete(item)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Delete\n\n        </button>\n\n      </ion-item-options>\n\n\n\n      <ion-item-options side="left" (ionSwipe)="archive(item)">\n\n        <button ion-button color="primary" expandable (click)="archive(item)">\n\n          <ion-icon name="archive" class="expand-hide"></ion-icon>\n\n          <div class="expand-hide">Archive</div>\n\n          <ion-spinner id="archive-spinner"></ion-spinner>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <ion-list class="login-sliding-demo">\n\n    <ion-list-header>\n\n      Logins\n\n    </ion-list-header>\n\n\n\n    <ion-item-sliding *ngFor="let login of logins" #item>\n\n      <ion-item>\n\n        <ion-icon [name]="login.icon" item-start></ion-icon>\n\n        <h2>{{login.name}}</h2>\n\n        <p>{{login.username}}</p>\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button color="danger">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n      <ion-item-options (ionSwipe)="download(item)" icon-start>\n\n        <button ion-button color="dark" (click)="more(item)">\n\n          <ion-icon name="volume-off"></ion-icon>\n\n          Mute\n\n        </button>\n\n        <button ion-button color="light" expandable (click)="download(item)">\n\n          <ion-icon name="download" class="expand-hide"></ion-icon>\n\n          <div class="expand-hide">Download</div>\n\n          <ion-spinner id="download-spinner"></ion-spinner>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\report\report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http___ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponseInterceptor = /** @class */ (function () {
    function ResponseInterceptor() {
    }
    ResponseInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http___["e" /* HttpResponse */]) {
                //console.log('May chu cho phep va truy cap voi event:');
                //console.log(event);
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http___["d" /* HttpErrorResponse */]) {
                console.log('May chu Khong cho phep hoac loi:');
                console.log(err);
            }
        });
    };
    ResponseInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ResponseInterceptor);
    return ResponseInterceptor;
}());

//# sourceMappingURL=responseInterceptor.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamic_form_mobile_dynamic_form_mobile__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dynamic_form_web_dynamic_form_web__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiStorageService__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_apiResourceServices__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_apiAuthService__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, pubService, auth, resources, apiStorageService, platform, modalCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.pubService = pubService;
        this.auth = auth;
        this.resources = resources;
        this.apiStorageService = apiStorageService;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
        //console.log('2. ngOnInit Home');
        //hien thi kieu popup info -- dissmiss
        //this.openModal(data);
        var _this = this;
        if (this.apiStorageService.getToken()) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Đang kiểm tra xác thực ....'
            });
            loading_1.present();
            this.auth.authorize(this.apiStorageService.getToken())
                .then(function (status) {
                loading_1.dismiss();
                _this.auth.getServerPublicRSAKey()
                    .then(function (pk) {
                    var userInfo = _this.auth.getUserInfo();
                    console.log('Save token user', userInfo);
                    //kiem tra token chua khai nickname, va image thi phai nhay vao slide khai thong tin
                    if (userInfo)
                        //cho phep truy cap thi gui token kem theo
                        _this.auth.injectToken(); //Tiêm token cho các phiên làm việc lấy số liệu cần xác thực
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                })
                    .catch(function (err) {
                    console.log('Public key err', err);
                });
            })
                .catch(function (err) {
                loading_1.dismiss();
                //console.log('Token invalid: ', err);
                _this.auth.deleteToken();
            });
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        //console.log('3. ionViewDidLoad Home');
        var _this = this;
        this.pubService.getDataForm('form-phone.json')
            .then(function (data) {
            if (_this.platform.platforms()[0] === 'core') {
                setTimeout(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dynamic_form_web_dynamic_form_web__["a" /* DynamicFormWebPage */], {
                        parent: _this,
                        callback: _this.callbackFunction,
                        step: 'form-phone',
                        form: data
                    });
                }, 1000);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dynamic_form_mobile_dynamic_form_mobile__["a" /* DynamicFormMobilePage */], {
                    parent: _this,
                    callback: _this.callbackFunction,
                    step: 'form-phone',
                    form: data
                });
            }
        })
            .catch(function (err) { return console.log("err ngOnInit()", err); });
    };
    /**
     *  ham goi lai gui ket qua new button next
     *
     * @param that chinh la this cua parent callback
     * @param res
     */
    LoginPage.prototype.callbackFunction = function (that, res) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('parent:', that);
            console.log('this:', _this);
            if (res && res.error && res.error.error) {
                //console.log('callback error:', res.error.error);
                that.presentAlert('Lỗi:<br>' + JSON.stringify(res.error.error.error));
                resolve();
            }
            else if (res && res.step === 'form-phone' && res.data) {
                console.log('forward data:', res.data.database_out);
                if (res.data.database_out && res.data.database_out.status === 0) {
                    that.presentAlert('Chú ý:<br>' + JSON.stringify(res.data.database_out.message));
                }
                //gui nhu mot button forward
                resolve({
                    next: "NEXT" //mo form tiep theo
                    ,
                    next_data: {
                        step: 'form-key',
                        data: //new form 
                        {
                            items: [
                                { name: "Nhập mã OTP", type: "title" },
                                { key: "key", name: "Mã OTP", hint: "Nhập mã OTP gửi đến điện thoại", type: "text", input_type: "text", validators: [{ required: true, min: 6, max: 6, pattern: "^[0-9A-Z]*$" }] },
                                { type: "button",
                                    options: [
                                        { name: "Trở về", next: "BACK" },
                                        { name: "Xác nhận OTP", next: "CALLBACK", url: "https://c3.mobifone.vn/api/ext-auth/confirm-key", token: res.data.token }
                                    ]
                                }
                            ]
                        }
                    }
                });
            }
            else if (res && res.step === 'form-key' && res.data.token) {
                //lay duoc token
                //ktra token co user, image thi pass new ko thi gui ...
                console.log('token verified:', res.data.token);
                // neu nhu gai quyet xong
                var loading_2 = that.loadingCtrl.create({
                    content: 'Đang xử lý dữ liệu từ máy chủ ....'
                });
                loading_2.present();
                that.resources.authorizeFromResource(res.data.token)
                    .then(function (login) {
                    console.log('data', login);
                    if (login.status
                        && login.user_info
                        && login.token) {
                        that.apiStorageService.saveToken(res.data.token);
                        that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                    }
                    else {
                        that.presentAlert('Dữ liệu xác thực không đúng <br>' + JSON.stringify(login));
                    }
                    loading_2.dismiss();
                    resolve();
                })
                    .catch(function (err) {
                    console.log('err', err);
                    that.presentAlert('Lỗi xác thực - authorizeFromResource');
                    loading_2.dismiss();
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    };
    LoginPage.prototype.openModal = function (data) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__dynamic_form_mobile_dynamic_form_mobile__["a" /* DynamicFormMobilePage */], data);
        modal.present();
    };
    LoginPage.prototype.presentAlert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'For Administrator',
            subTitle: msg,
            buttons: ['Dismiss']
        }).present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\login\login.html"*/'<ion-content padding class="background-page gradient" ></ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_8__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_7__services_apiResourceServices__["a" /* ApiResourceService */],
            __WEBPACK_IMPORTED_MODULE_6__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormMobilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicFormMobilePage = /** @class */ (function () {
    function DynamicFormMobilePage(platform, authService, pubService, viewCtrl, navCtrl, loadingCtrl, navParams) {
        this.platform = platform;
        this.authService = authService;
        this.pubService = pubService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.dynamicForm = {
            title: "Đăng ký",
            items: [
                { name: "Thông tin cá nhân avatar", hint: "Avatar", type: "avatar", url: "https://www.w3schools.com/howto/img_forest.jpg" },
                { id: 1, name: "Check hay không chọn?", type: "check", value: true },
                { id: 2, name: "Thanh Trượt", type: "range", value: 50, min: 0, max: 100 },
                { id: 3, name: "Chọn hay không chọn Toggle?", icon: "plane", type: "toggle" },
                { id: 4, name: "Chọn radio cái nào", type: "radio", icon: "plane", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                { id: 5, name: "Chọn 1 cái nào", type: "select", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                { id: 6, name: "Chọn nhiều cái nào", type: "select_multiple", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                { name: "Ảnh cá nhân", hint: "image viewer", type: "image", url: "https://www.w3schools.com/howto/img_forest.jpg" },
                { id: 8, key: "username", name: "username", hint: "Số điện thoại di động 9 số bỏ số 0 ở đầu", type: "text", input_type: "userName", icon: "information-circle", validators: [{ required: true, min: 9, max: 9, pattern: "^[0-9]*$" }] },
                { id: 9, key: "password", name: "password", hint: "Mật khẩu phải có chữ hoa, chữ thường, ký tự đặc biệt, số", type: "password", input_type: "password", icon: "information-circle", validators: [{ required: true, min: 6, max: 20 }] },
                { id: 10, name: "Họ và tên", type: "text", input_type: "text", icon: "person" },
                { id: 11, name: "Điện thoại", hint: "Yêu cầu định dạng số điện thoại nhé", type: "text", input_type: "tel", icon: "call", validators: [{ pattern: "^[0-9]*$" }] },
                { id: 12, name: "email", hint: "Yêu cầu định dạng email nhé", type: "text", input_type: "email", icon: "mail", validators: [{ pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" }] },
                { id: 13, name: "Ngày bắt đầu", hint: "Chọn ngày", type: "datetime", display: "DD/MM/YYYY", picker: "DD MM YYYY" },
                { id: 14, name: "Thời gian bắt đầu", hint: "Chọn thời gian", type: "datetime", display: "HH:mm:ss", picker: "HH:mm:ss" },
                { id: 15, name: "Nội dung nhập", hint: "Nhập nhiều dòng", type: "text_area" },
                { name: "Thông tin cá nhân", type: "title" },
                { type: "details",
                    details: [
                        {
                            name: "Mã khách hàng",
                            value: "R012234949883"
                        },
                        {
                            name: "Tên khách hàng",
                            value: "Nguyễn Văn B"
                        },
                        {
                            name: "Địa chỉ",
                            value: "263 Nguyễn Văn Linh, Đà nẵng, Việt Nam"
                        },
                        {
                            name: "Hình thức thanh toán",
                            value: "Tiền mặt"
                        },
                    ]
                },
                {
                    type: "button",
                    options: [
                        { name: "Reset", next: "RESET" },
                        { name: "Exit", next: "EXIT" },
                        { name: "Close", next: "CLOSE" },
                        { name: "Back", next: "BACK" },
                        { name: "Continue", next: "CONTINUE" },
                        { name: "Register", next: "BACK", url: "https://chonsoc3.mobifone.vn/ionic/", command: "USER_LOGIN_REDIRECT" },
                        { name: "LOGIN", next: "CONTINUE", url: "https://chonsoc3.mobifone.vn/ionic/", command: "USER_CHECK_EXISTS", token: true }
                    ]
                }
            ]
        };
        this.initValues = [];
        this.password_type = 'password';
        this.eye = "eye";
    }
    DynamicFormMobilePage_1 = DynamicFormMobilePage;
    DynamicFormMobilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.dynamicForm = this.navParams.get("form") ? this.navParams.get("form") : this.dynamicForm;
        if (this.dynamicForm.items) {
            this.dynamicForm.items.forEach(function (el, idx) {
                _this.initValues.push({
                    idx: idx,
                    value: el.value
                });
            });
        }
        this.callback = this.navParams.get("callback");
        this.step = this.navParams.get("step");
        this.parent = this.navParams.get("parent");
    };
    DynamicFormMobilePage.prototype.resetForm = function () {
        var _this = this;
        if (this.dynamicForm.items) {
            this.dynamicForm.items.forEach(function (el, idx) {
                if (el.value !== undefined) {
                    if (_this.initValues.find(function (x) { return x.idx == idx; }).value === undefined) {
                        el.value = '';
                    }
                    else {
                        el.value = _this.initValues.find(function (x) { return x.idx == idx; }).value;
                    }
                }
            });
        }
    };
    // btn ẩn hiện mật khẩu
    DynamicFormMobilePage.prototype.togglePasswordMode = function () {
        this.eye = this.eye === 'eye' ? 'eye-off' : 'eye';
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    };
    // Xử lý sự kiện click button theo id
    DynamicFormMobilePage.prototype.onClick = function (btn) {
        //console.log('command', btn.url, btn.command);
        var _this = this;
        var valid = false;
        var results = []; //id,value
        var keyResults = {}; //{key:value}
        //chi nhung action xu ly du lieu form moi check
        if (btn.next === 'CALLBACK'
            || btn.next === 'NEXT') {
            this.dynamicForm.items.some(function (el) {
                var validatorFns = [];
                if (el.validators) {
                    el.validators.forEach(function (req) {
                        if (req.required)
                            validatorFns.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
                        if (req.min)
                            validatorFns.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(req.min));
                        if (req.max)
                            validatorFns.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(req.max));
                        if (req.pattern)
                            validatorFns.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(req.pattern));
                    });
                }
                var control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](el.value, validatorFns);
                el.invalid = control.invalid;
                valid = !el.invalid;
                if (valid
                    && el.key
                    && el.value) {
                    Object.defineProperty(keyResults, el.key, { value: el.value, writable: false, enumerable: true });
                }
                else if (valid
                    && el.id
                    && el.value
                    && el.type !== "title"
                    && el.type !== "image"
                    && el.type !== "avatar"
                    && el.type !== "button") {
                    results.push({
                        id: el.id,
                        value: el.value
                    });
                }
                //console.log(el.name, el.id, el.value, 'control:', control.invalid, control.valid);
                return el.invalid;
            });
        }
        else {
            this.next(btn);
            return;
        }
        if (valid) {
            if (btn.url) {
                if (btn.token && keyResults) {
                    var loading_1 = this.loadingCtrl.create({
                        content: 'Đang xử lý dữ liệu từ máy chủ token....'
                    });
                    loading_1.present();
                    this.authService.postDynamicForm(btn.url, keyResults, btn.token)
                        .then(function (data) {
                        btn.next_data = {
                            step: _this.step,
                            data: data
                        };
                        console.log('data token --> next btn', btn);
                        _this.next(btn);
                        loading_1.dismiss();
                    })
                        .catch(function (err) {
                        console.log('err token', err);
                        btn.next_data = {
                            step: _this.step,
                            error: err
                        };
                        _this.next(btn);
                        loading_1.dismiss();
                    });
                }
                else if (keyResults) {
                    var loading_2 = this.loadingCtrl.create({
                        content: 'Đang xử lý dữ liệu từ máy chủ ....'
                    });
                    loading_2.present();
                    this.pubService.postDynamicForm(btn.url, keyResults)
                        .then(function (data) {
                        console.log('data --> next', data, btn.next);
                        btn.next_data = {
                            step: _this.step,
                            data: data
                        };
                        _this.next(btn);
                        loading_2.dismiss();
                    })
                        .catch(function (err) {
                        console.log('err', err);
                        btn.next_data = {
                            step: _this.step,
                            error: err
                        };
                        _this.next(btn);
                        loading_2.dismiss();
                    });
                }
            }
            else {
                btn.next_data = {
                    step: this.step,
                    data: keyResults
                };
                this.next(btn);
            }
        }
        else {
            //console.log('Form Invalid!');
        }
    };
    DynamicFormMobilePage.prototype.next = function (btn) {
        var _this = this;
        if (btn) {
            if (btn.next == 'EXIT') {
                this.platform.exitApp();
            }
            else if (btn.next == 'RESET') {
                this.resetForm();
            }
            else if (btn.next == 'CLOSE') {
                try {
                    this.viewCtrl.dismiss(btn.next_data);
                }
                catch (e) { }
            }
            else if (btn.next == 'BACK') {
                try {
                    this.navCtrl.pop();
                }
                catch (e) { }
            }
            else if (btn.next == 'CALLBACK') {
                //console.log(btn,this.callback);
                if (this.callback) {
                    this.callback(this.parent, btn.next_data)
                        .then(function (nextStep) { return _this.next(nextStep); });
                }
                else {
                    try {
                        this.navCtrl.pop();
                    }
                    catch (e) { }
                }
            }
            else if (btn.next == 'NEXT' && btn.next_data && btn.next_data.data) {
                btn.next_data.callback = this.callback; //gan lai cac function object
                btn.next_data.parent = this.parent; //gan lai cac function object
                btn.next_data.form = btn.next_data.data; //gan du lieu tra ve tu server
                this.navCtrl.push(DynamicFormMobilePage_1, btn.next_data);
            }
        }
    };
    DynamicFormMobilePage = DynamicFormMobilePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic-form-mobile',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-form-mobile\dynamic-form-mobile.html"*/'<ion-header *ngIf="dynamicForm.title">\n\n	<ion-navbar>\n\n		<ion-title>{{dynamicForm.title}}</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="background-page gradient">\n\n\n\n	<ion-list *ngFor="let it of dynamicForm.items">\n\n\n\n		<!-- title -->\n\n		<ion-item class="background-page" *ngIf="it.type == \'title\'">\n\n			<ion-label class="title-item">{{it.name}}</ion-label>\n\n		</ion-item>\n\n\n\n		<!-- form chi tiet -->\n\n		<ion-list class="input-item" *ngIf="it.type == \'details\'">\n\n			<ion-item *ngFor="let dt of it.details">\n\n				<strong item-start>\n\n					{{dt.name}}\n\n				</strong>\n\n				<ion-label text-wrap item-end>\n\n						{{dt.value}}\n\n				</ion-label>\n\n			</ion-item>\n\n		</ion-list>\n\n\n\n		<!-- title with avatar -->\n\n		<ion-item class="background-page" *ngIf="it.type == \'avatar\'">\n\n			<ion-avatar item-start *ngIf="it.url"><img [src]="it.url"></ion-avatar>\n\n			<h1 item-left class="title-item">{{it.name}}</h1>\n\n		</ion-item>\n\n\n\n		<!-- image -->\n\n		<ion-grid *ngIf="it.type == \'image\'">\n\n			<ion-row>\n\n				<ion-col style="text-align: center;">\n\n					<img *ngIf="!it.width||!it.height" [src]="it.url">\n\n					<img *ngIf="it.width&&it.height" [width]="it.width" [height]="it.height" [src]="it.url">\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n\n\n		<!-- input text -->\n\n		<ion-item class="input-item" *ngIf="it.type == \'text\'">\n\n			<ion-label floating color="danger" *ngIf="it.invalid">{{it.hint}}(*)</ion-label>\n\n			<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n			<ion-input type="{{it.input_type}}" placeholder={{it.name?it.name:it.hint}} [(ngModel)]="it.value"></ion-input>\n\n		</ion-item>\n\n\n\n		<!-- input text-area -->\n\n		<ion-item class="input-item" *ngIf="it.type == \'text_area\'">\n\n			<ion-label floating color="danger" *ngIf="it.invalid">{{it.hint}}(*)</ion-label>\n\n			<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n			<ion-textarea rows="6" cols="20" placeholder={{it.name?it.name:it.hint}} [(ngModel)]="it.value"></ion-textarea>\n\n		</ion-item>\n\n\n\n		<!-- input password -->\n\n		<ion-item class="input-item" *ngIf="it.type == \'password\'">\n\n			<ion-label floating color="danger" *ngIf="it.invalid">{{it.hint}}</ion-label>\n\n			<ion-icon item-left name="{{it.icon}}" *ngIf="it.icon"></ion-icon>\n\n			<ion-input [type]="password_type" placeholder={{it.name?it.name:it.hint}} [(ngModel)]="it.value"></ion-input>\n\n			<button ion-button clear color="dark" type="button" item-right (click)="togglePasswordMode()">\n\n				<ion-icon name="{{eye}}"> </ion-icon>\n\n			</button>\n\n		</ion-item>\n\n\n\n		<!-- check box -->\n\n		<ion-item class="input-item" *ngIf="it.type == \'check\'">\n\n			<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n\n			<ion-checkbox color="primary" [(ngModel)]="it.value"></ion-checkbox>\n\n		</ion-item>\n\n\n\n		<!-- radio select -->\n\n		<ion-list *ngIf="it.type == \'radio\'" radio-group [(ngModel)]="it.value">\n\n			<ion-list-header>\n\n				<ion-icon item-start name="{{it.icon}}"></ion-icon>\n\n				<ion-label color="dark">{{it.name?it.name:it.hint}}</ion-label>\n\n			</ion-list-header>\n\n			<ion-item *ngFor="let myRad of it.options">\n\n				<ion-label color="secondary">{{myRad.name}}</ion-label>\n\n				<ion-radio value="{{myRad.value}}"></ion-radio>\n\n			</ion-item>\n\n		</ion-list>\n\n\n\n		<!-- single select -->\n\n		<ion-item class="input-item" *ngIf="it.type == \'select\'">\n\n			<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n\n			<ion-select [(ngModel)]="it.value">\n\n				<ion-option *ngFor="let mySet of it.options" value="{{mySet.value}}">{{mySet.name}}</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n\n\n		<!-- multiple select -->\n\n		<ion-item class="input-item" *ngIf="it.type == \'select_multiple\'">\n\n			<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n\n			<ion-select [(ngModel)]="it.value" multiple="true">\n\n				<ion-option *ngFor="let mySet of it.options" value="{{mySet.value}}">{{mySet.name}}</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n\n\n		<!-- toggle check -->\n\n		<ion-item class="input-item" *ngIf="it.type == \'toggle\'">\n\n			<ion-icon name="{{it.icon}}" item-start color="primary"></ion-icon>\n\n			<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n\n			<ion-toggle color="secondary" [(ngModel)]="it.value"></ion-toggle>\n\n		</ion-item>\n\n\n\n		<!-- range adjust -->\n\n		<ion-item class="input-item" *ngIf="it.type == \'range\'">\n\n			<ion-range min="{{it.min}}" max="{{it.max}}" pin="true" [(ngModel)]="it.value" color="primary">\n\n				<ion-icon range-left small name="contrast"></ion-icon>\n\n				<ion-icon range-right name="contrast"></ion-icon>\n\n			</ion-range>\n\n		</ion-item>\n\n\n\n		<!-- date time-->\n\n		<ion-item class="input-item" *ngIf="it.type == \'datetime\'">\n\n			<ion-label color="danger" *ngIf="it.invalid">{{it.hint}}(*)</ion-label>\n\n			<ion-label *ngIf="!it.invalid">{{it.name}}</ion-label>\n\n			<ion-datetime displayFormat="{{it.display}}" pickerFormat="{{it.picker}}" [(ngModel)]="it.value"></ion-datetime>\n\n		</ion-item>\n\n\n\n		<!-- button action -->\n\n		<ion-grid *ngIf="it.type == \'button\'">\n\n			<ion-row>\n\n				<ion-col *ngFor="let myBtn of it.options" style="text-align: center;">\n\n					<button class="button-item" [(ngStyle)]="pageContent" ion-button round (click)="onClick(myBtn)">\n\n						{{myBtn.name}}\n\n					</button>\n\n				</ion-col>\n\n			</ion-row>\n\n		</ion-grid>\n\n\n\n	</ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\dynamic-form-mobile\dynamic-form-mobile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
    ], DynamicFormMobilePage);
    return DynamicFormMobilePage;
    var DynamicFormMobilePage_1;
}());

//# sourceMappingURL=dynamic-form-mobile.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_exif_js__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_exif_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_exif_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var orientation_standard = {
    1: 0,
    3: 180,
    6: 90,
    8: 270
};
var ApiImageService = /** @class */ (function () {
    function ApiImageService() {
    }
    //dua vao doi tuong file image
    //tra ve doi tuong file image co kich co nho hon
    ApiImageService.prototype.resizeImage = function (filename, file, newSize) {
        return new Promise(function (resolve, reject) {
            if (file) {
                var allMetaData_1;
                var originOrientation_1;
                __WEBPACK_IMPORTED_MODULE_1_exif_js__["getData"](file, function () {
                    allMetaData_1 = __WEBPACK_IMPORTED_MODULE_1_exif_js__["getAllTags"](this);
                    originOrientation_1 = allMetaData_1.Orientation;
                    //console.log("get Tags Orientation",allMetaData);
                });
                try {
                    var canvas_1 = document.createElement('canvas');
                    var context_1 = canvas_1.getContext('2d');
                    var img_1 = document.createElement('img');
                    var maxW_1 = newSize;
                    var maxH_1 = newSize;
                    img_1.src = URL.createObjectURL(file);
                    img_1.onload = function () {
                        var iw = img_1.width;
                        var ih = img_1.height;
                        var scale = Math.min((maxW_1 / iw), (maxH_1 / ih));
                        var iwScaled = (scale <= 0 || scale > 1) ? iw : iw * scale;
                        var ihScaled = (scale <= 0 || scale > 1) ? ih : ih * scale;
                        //giam kich thuoc
                        canvas_1.width = iwScaled;
                        canvas_1.height = ihScaled;
                        context_1.drawImage(img_1, 0, 0, iwScaled, ihScaled);
                        //quay
                        var imageNew = document.createElement('img');
                        imageNew.src = canvas_1.toDataURL();
                        imageNew.onload = function () {
                            if (originOrientation_1 > 2 && originOrientation_1 <= 4) {
                                //console.log('rotate 180');
                                canvas_1.width = imageNew.width;
                                canvas_1.height = imageNew.height;
                                context_1.rotate(180 * Math.PI / 180);
                                context_1.drawImage(imageNew, -imageNew.width, -imageNew.height);
                            }
                            else if (originOrientation_1 > 4 && originOrientation_1 <= 7) {
                                //rotate 90
                                //console.log('rotate 90');
                                canvas_1.width = imageNew.height;
                                canvas_1.height = imageNew.width;
                                context_1.rotate(90 * Math.PI / 180);
                                context_1.drawImage(imageNew, 0, -imageNew.height);
                            }
                            else if (originOrientation_1 > 7 && originOrientation_1 <= 9) {
                                //rotate 270
                                //console.log('rotate 270');
                                canvas_1.width = imageNew.height;
                                canvas_1.height = imageNew.width;
                                context_1.rotate(270 * Math.PI / 180);
                                context_1.drawImage(imageNew, -imageNew.width, 0);
                            }
                            canvas_1.toBlob(function (blob) {
                                var reader = new FileReader();
                                reader.readAsArrayBuffer(blob);
                                reader.onload = function () {
                                    var newFile = new Blob([reader.result], { type: 'image/jpeg' });
                                    resolve({
                                        image: canvas_1.toDataURL(),
                                        file: newFile //formData post
                                        ,
                                        filename: filename,
                                        h1: filename,
                                        p: " ***Kích cỡ cũ: " + file.size
                                            + "(" + img_1.width + "x" + img_1.height + ")"
                                            + " * Kiểu file cũ: " + file.type
                                            + " * Hướng ảnh chụp: " + orientation_standard[(originOrientation_1 ? originOrientation_1 : 1)]
                                            + "(" + (originOrientation_1 ? "(" + originOrientation_1 + ")" : "1") + ")"
                                            + " ***Kích cỡ mới: BIN=" + newFile.size
                                            + "(" + canvas_1.width + "x" + canvas_1.height + ") Base64=" + canvas_1.toDataURL().length + ""
                                            + " * Kiểu file mới: " + newFile.type
                                            + " ***Các tham số tạo ảnh: "
                                            + (allMetaData_1 && allMetaData_1.Make ? " * Hãng sx máy ảnh: " + allMetaData_1.Make : "")
                                            + (allMetaData_1 && allMetaData_1.Make ? " * Đời máy ảnh: " + allMetaData_1.Model : "")
                                            + (allMetaData_1 && allMetaData_1.Software ? " * Phần mềm: " + allMetaData_1.Software : "")
                                            + (allMetaData_1 && allMetaData_1.DateTime ? " * Ngày giờ: " + allMetaData_1.DateTime : "")
                                            + (allMetaData_1 && allMetaData_1.DateTimeOriginal ? " * Ngày giờ gốc: " + allMetaData_1.DateTimeOriginal : "")
                                            + (allMetaData_1 && allMetaData_1.DateTimeDigitized ? " * Ngày giờ số hóa: " + allMetaData_1.DateTimeDigitized : "")
                                            + (allMetaData_1 && allMetaData_1.GPSLatitude ? " * Vĩ Độ: " + allMetaData_1.GPSLatitude + allMetaData_1.GPSLatitudeRef : "")
                                            + (allMetaData_1 && allMetaData_1.GPSLongitude ? " * Kinh Độ: " + allMetaData_1.GPSLongitude + allMetaData_1.GPSLongitudeRef : "")
                                            + (allMetaData_1 && allMetaData_1.GPSDateStamp ? " * Ngày giờ tọa độ: " + allMetaData_1.GPSDateStamp + allMetaData_1.GPSTimeStamp : ""),
                                        h3: (file.lastModified ? new Date(file.lastModified).toISOString() : file.lastModifiedDate),
                                        note: JSON.stringify(allMetaData_1),
                                        last_modified: file.lastModified ? file.lastModified : file.lastModifiedDate.getTime(),
                                        subtitle: (file.lastModified ? new Date(file.lastModified).toLocaleDateString() : file.lastModifiedDate) + (originOrientation_1 ? "(" + originOrientation_1 + ")" : ""),
                                        width: canvas_1.width //cho biet anh nam doc hay nam ngang
                                        ,
                                        height: canvas_1.height,
                                        orientation_old: originOrientation_1,
                                        size_old: file.size,
                                        type_old: file.type,
                                        size: newFile.size,
                                        type: newFile.type
                                    });
                                };
                            });
                        };
                    };
                }
                catch (err) {
                    reject(err);
                }
            }
            else {
                reject("No file!");
            }
        });
    };
    ApiImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiImageService);
    return ApiImageService;
}());

//# sourceMappingURL=apiImageService.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map