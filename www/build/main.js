webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_setting__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiAuthService__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiStorageService__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(248);
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
    function LoginPage(navCtrl, formBuilder, loadingCtrl, apiStorageService, toastCtrl, events, apiService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.apiStorageService = apiStorageService;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.apiService = apiService;
        this.isImageViewer = false;
        this.resourceImages = [];
        this.isShowInfo = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.reset();
    };
    LoginPage.prototype.reset = function () {
        var _this = this;
        this.apiService.getServerPublicRSAKey()
            .then(function (pk) {
            _this.serverKeyPublic = pk;
            _this.serverTokenUserInfo = _this.apiService.getUserInfo();
            if (_this.apiStorageService.getToken()) {
                _this.apiService.authorize(_this.apiStorageService.getToken())
                    .then(function (status) {
                    console.log('Login page ready authorize: ', status);
                    if (status) {
                        _this.isShowInfo = true;
                    }
                    else {
                        throw 'Your session expired!';
                    }
                })
                    .catch(function (err) {
                    console.log('Login page ready UNauthorize: ', err);
                    _this.isShowInfo = false;
                });
            }
            else {
                _this.isShowInfo = false;
            }
        })
            .catch(function (err) {
            console.log('err get Public Key:');
            console.log(err);
        });
        this.myFromGroup = this.formBuilder.group({
            user: '',
            pass: ''
        });
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        var passEncrypted = '';
        try {
            passEncrypted = this.serverKeyPublic.encrypt(this.myFromGroup.get('pass').value, 'base64', 'utf8');
            var formData = new FormData();
            formData.append("username", this.myFromGroup.get('user').value);
            formData.append("password", passEncrypted);
            //gui lenh login 
            var loading_1 = this.loadingCtrl.create({
                content: 'Saving user info...'
            });
            loading_1.present();
            this.apiService.login(formData)
                .then(function (token) {
                if (token) {
                    _this.serverTokenUserInfo = _this.apiService.getUserInfo();
                    _this.isShowInfo = true;
                    //luu vao may de phien sau su dung khong can login
                    _this.apiStorageService.saveToken(token);
                    loading_1.dismiss();
                    _this.toastCtrl.create({
                        message: "Thank you " + _this.serverTokenUserInfo.username + " and welcome to our system",
                        duration: 3000,
                        position: 'middle'
                    }).present();
                    //chuyen su kien login ve parent
                    _this.reset();
                }
                else {
                    throw 'No Token after login!';
                }
            })
                .catch(function (err) {
                loading_1.dismiss();
                console.log('Login page err catch:', err);
                //error 
                _this.toastCtrl.create({
                    message: "Check again username & password!",
                    duration: 5000,
                    position: 'bottom'
                }).present();
            });
        }
        catch (err) {
            console.log('Login page err try encrypted: ', err);
        }
    };
    /**
     * Dang ky user moi
     */
    LoginPage.prototype.callRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    /**
     * lohout
     */
    LoginPage.prototype.callLogout = function () {
        var _this = this;
        this.apiService.logout()
            .then(function (d) {
            _this.reset();
        })
            .catch(function (e) { });
    };
    /**
     * chinh sua user info
     */
    LoginPage.prototype.callEdit = function () {
        var _this = this;
        this.apiService.getEdit()
            .then(function (user) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__setting_setting__["a" /* SettingPage */]);
        })
            .catch(function (err) {
            _this.toastCtrl.create({
                message: "err get API: : " + JSON.stringify(err),
                duration: 5000,
                position: 'bottom'
            }).present();
        });
    };
    LoginPage.prototype.callHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Login form\n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <img src="assets/imgs/logo.png">\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="card-background-page">\n\n   <ion-item *ngIf="isShowInfo">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-12 col-xl-4 col-lg-6 col-sm-12>\n\n                    <ion-card>\n\n                        <img *ngIf="(serverTokenUserInfo?.image)" [src]="serverTokenUserInfo?.image"/>\n\n                        <ion-card-content>\n\n                            <ion-card-title>\n\n                                {{serverTokenUserInfo?.username}}\n\n                            </ion-card-title>\n\n                            <p>{{serverTokenUserInfo?.nickname}}</p>\n\n                            <p>{{serverTokenUserInfo?.req_time}}</p>\n\n                        </ion-card-content>\n\n                        <ion-row>\n\n                            <ion-col>\n\n                                <button ion-button type="button" clear small color="secondary" icon-start (click)="callLogout()">\n\n                                    <ion-icon name=\'backspace\' ios="ios-backspace" md="md-backspace"></ion-icon>\n\n                                    Logout\n\n                                </button>\n\n                            </ion-col>\n\n                            <ion-col text-right>\n\n                                <button ion-button type="button" clear small color="secondary" icon-start (click)="callEdit()">\n\n                                    <ion-icon name=\'share-alt\'></ion-icon>\n\n                                    Edit\n\n                                </button>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-card>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n  </ion-item>\n\n  <form (ngSubmit)="onSubmit()" [formGroup]="myFromGroup" *ngIf="!(isShowInfo)">\n\n    <ion-card col-12 col-xl-4 col-lg-6 col-sm-12>\n\n      <ion-item>\n\n        <ion-label floating>Username</ion-label>\n\n        <ion-input type="text" formControlName="user"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" formControlName="pass"></ion-input>\n\n      </ion-item>\n\n      <ion-row no-padding>\n\n\n\n          <ion-col>\n\n              <ion-buttons start>\n\n                  <button ion-button type="button" icon-end round (click)="callRegister()">\n\n                      Đăng ký\n\n                      <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n              </ion-buttons>\n\n          </ion-col>\n\n\n\n        <ion-col text-right>\n\n          <ion-buttons start>\n\n            <button ion-button type="submit" icon-end round>\n\n              Đăng nhập\n\n              <ion-icon name="share-alt"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n\n\n    </ion-card>\n\n  </form>\n\n\n\n\n\n  <ion-fab right bottom auto-close-on-click-outside *ngIf="isShowInfo">\n\n    <button ion-fab mini color="primary">\n\n      <ion-icon name="arrow-dropleft"></ion-icon>\n\n    </button>\n\n    <ion-fab-list side="left">\n\n      <button color="primary" ion-fab (click)="callHome()">\n\n        <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n      </button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiAuthService__["a" /* ApiAuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 203:
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
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
            selector: 'page-pdf',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\pdf\pdf.html"*/'<ion-header>\n\n  <ion-navbar>\n\n<ion-title>PDF</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<button color="primary" ion-fab (click)="createPdf()">\n\n    <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n</button>\n\n\n\n<iframe width="600" height="775"></iframe>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\pdf\pdf.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _b || Object])
    ], PdfPage);
    return PdfPage;
    var _a, _b;
}());

//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_print_js__ = __webpack_require__(376);
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



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.printPdf = function () {
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()('/test/manual/test.pdf');
    };
    HomePage.prototype.printPdfWithModal = function () {
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: '/test/manual/test.pdf',
            type: 'pdf',
            showModal: true
        });
    };
    HomePage.prototype.printPdfWithModalAndCloseCallback = function () {
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: '/test/manual/test.pdf',
            type: 'pdf',
            showModal: true,
            onPrintDialogClose: function () { return console.log('The print dialog was closed'); },
            onPdfOpen: function () { return console.log('Pdf was opened in a new tab due to an incompatible browser'); }
        });
    };
    HomePage.prototype.printHtml = function () {
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: 'test',
            type: 'html'
        });
    };
    HomePage.prototype.printHtmlCustomStyle = function () {
        var style = '@page { margin: 0 } @media print { h1 { color: blue } }';
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: 'test',
            type: 'html',
            style: style,
            scanStyles: false
        });
    };
    HomePage.prototype.printHtmlCss = function () {
        __WEBPACK_IMPORTED_MODULE_2_print_js___default()({
            printable: 'test',
            type: 'html',
            css: 'test.css',
            scanStyles: false
        });
    };
    HomePage.prototype.printJson = function () {
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
    HomePage.prototype.printStyledJson = function () {
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
    HomePage.prototype.printNestedJson = function () {
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
    HomePage.prototype.createRandomString = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <button color="primary" ion-fab (click)="printPdfWithModal()">\n\n        <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n    </button>\n\n\n\n    <button color="primary" ion-fab (click)="printJson()">\n\n        <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n    </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(135);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__["a" /* ApiAuthService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 251:
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

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiImageService__ = __webpack_require__(298);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiImageService__["a" /* ApiImageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__["a" /* ApiAuthService */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiImageService; });
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

var ApiImageService = /** @class */ (function () {
    function ApiImageService() {
    }
    //dua vao doi tuong file image
    //tra ve doi tuong file image co kich co nho hon
    ApiImageService.prototype.resizeImage = function (filename, file, newSize) {
        return new Promise(function (resolve, reject) {
            try {
                var canvas = document.createElement('canvas');
                var context = canvas.getContext('2d');
                var maxW = newSize;
                var maxH = newSize;
                var img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.onload = function () {
                    var iw = img.width;
                    var ih = img.height;
                    var scale = Math.min((maxW / iw), (maxH / ih));
                    var iwScaled = iw * scale;
                    var ihScaled = ih * scale;
                    canvas.width = iwScaled;
                    canvas.height = ihScaled;
                    context.drawImage(img, 0, 0, iwScaled, ihScaled);
                    //image.src=canvas.toDataURL(); //gan canvas cho image viewer
                    //xu ly chat luong anh qua cac tham so cua ham toDataURL()
                    //chuyen sang file de ghi xuong dia hoac truyen tren mang
                    //su dung ham toBlob sau
                    canvas.toBlob(function (blob) {
                        var reader = new FileReader();
                        reader.readAsArrayBuffer(blob); //ket qua la mot mang Uint8Array 
                        reader.onload = function () {
                            //console.log(reader.result); //ket qua la mot mang Uint8Array 
                            //newFile la mot file image da duoc resize roi nhe
                            resolve({
                                imageViewer: canvas.toDataURL(),
                                file: new Blob([reader.result], { type: 'image/png' }),
                                name: filename
                            });
                        };
                    });
                };
            }
            catch (err) {
                reject(err);
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

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleIconsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icon_icons__ = __webpack_require__(496);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
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

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(321);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sample_icons_sample_icons__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_config_config__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_pdf_pdf__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_webstorage_service__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_apiStorageService__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_apiAuthService__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_apiImageService__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__interceptors_requestInterceptor__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__interceptors_responseInterceptor__ = __webpack_require__(499);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sample_icons_sample_icons__["a" /* SampleIconsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_config_config__["a" /* ConfigPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular_webstorage_service__["b" /* StorageServiceModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sample_icons_sample_icons__["a" /* SampleIconsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_config_config__["a" /* ConfigPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__services_apiAuthService__["a" /* ApiAuthService */],
                __WEBPACK_IMPORTED_MODULE_18__services_apiImageService__["a" /* ApiImageService */],
                __WEBPACK_IMPORTED_MODULE_16__services_apiStorageService__["a" /* ApiStorageService */],
                __WEBPACK_IMPORTED_MODULE_19__interceptors_requestInterceptor__["a" /* RequestInterceptor */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_19__interceptors_requestInterceptor__["a" /* RequestInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_20__interceptors_responseInterceptor__["a" /* ResponseInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pdf_pdf__ = __webpack_require__(247);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_pdf_pdf__["a" /* PdfPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 496:
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

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sample_icons_sample_icons__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_log_log_debug__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_log_log_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_log_log_debug__);
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
    function ConfigPage(navCtrl, apiStorageService, apiService, events, toastCtrl) {
        this.navCtrl = navCtrl;
        this.apiStorageService = apiStorageService;
        this.apiService = apiService;
        this.events = events;
        this.toastCtrl = toastCtrl;
    }
    ConfigPage.prototype.ngOnInit = function () {
    };
    ConfigPage.prototype.reset = function () {
        location.href = '/';
    };
    ConfigPage.prototype.selectIcon = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sample_icons_sample_icons__["a" /* SampleIconsPage */]);
    };
    ConfigPage.prototype.callSendLog = function () {
        __WEBPACK_IMPORTED_MODULE_5__assets_log_log_debug___default.a.put('TEST');
        __WEBPACK_IMPORTED_MODULE_5__assets_log_log_debug___default.a.print();
    };
    ConfigPage.prototype.callLogout = function () {
        var _this = this;
        this.apiService.logout()
            .then(function (d) {
            _this.reset();
        })
            .catch(function (e) { });
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\config\config.html"*/'<ion-header>\n\n  <ion-navbar>\n\n<ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list no-lines>\n\n    \n\n    <ion-item class=\'item-settings\' (click)="selectIcon()">\n\n        <ion-icon name="images" item-start></ion-icon>\n\n        Icons\n\n    </ion-item>\n\n    <ion-item class=\'item-settings\' (click)="callSendLog()">\n\n        <ion-icon name="add" item-start></ion-icon>\n\n        <ion-label>Send Log To Server</ion-label>\n\n    </ion-item>\n\n    <ion-item class=\'item-settings\' (click)="callLogout()">\n\n        <ion-icon name="add" item-start></ion-icon>\n\n        <ion-label>Logout</ion-label>\n\n    </ion-item>\n\n    \n\n  </ion-list>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\config\config.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

var log = '' //telemetry log
var trackingLog =  (s,o) => { log += Date.now() + ': ' + s + '\n'; if(o)log += JSON.stringify(o)}
var printLog = ()=>{console.log(log)}
var getLog = () =>{return log}
var resetLog = ()=>{log=''}
module.exports = {
    put: trackingLog,
    get: getLog,
    print: printLog,
    reset: resetLog,
}

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http___ = __webpack_require__(76);
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

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiStorageService__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_rsa__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_rsa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_node_rsa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__(480);
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
    ApiAuthService.prototype.getServerPublicRSAKey = function () {
        var _this = this;
        //console.log('get Public key');
        if (this.publicKey && this.publicKey.PUBLIC_KEY) {
            //console.log('Public key from in session');
            return (new Promise(function (resolve, reject) {
                try {
                    _this.serverKey.importKey(_this.publicKey.PUBLIC_KEY);
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
                //console.log('co tra ve');
                if (_this.publicKey && _this.publicKey.PUBLIC_KEY) {
                    try {
                        _this.serverKey.importKey(_this.publicKey.PUBLIC_KEY);
                    }
                    catch (err) {
                        throw err;
                    }
                    return _this.serverKey;
                }
                else {
                    throw new Error('No PUBLIC_KEY exists!');
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
     * Gui len server kiem tra token co verify thi tra ve token, khong thi khong ghi
     * @param token
     */
    ApiAuthService.prototype.authorize = function (token) {
        var _this = this;
        this.reqInterceptor.setRequestToken(token); //login nguoi khac
        return this.httpClient.get(this.authenticationServer + '/authorize')
            .toPromise()
            .then(function (data) {
            //console.log(data);                
            _this.userToken = { token: token };
            return true;
        })
            .catch(function (err) {
            //console.log(err);
            return false;
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

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__ = __webpack_require__(250);
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
    //public static apiServer = ''; 
    ApiStorageService.apiServer = 'https://ql-hoadon.herokuapp.com';
    //public static apiServer = 'http://localhost:9235'; 
    //public static apiServer = 'https://c3.mobifone.vn';
    ApiStorageService.authenticationServer = ApiStorageService_1.apiServer + '/auth';
    ApiStorageService = ApiStorageService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__["a" /* LOCAL_STORAGE */])),
        __metadata("design:paramtypes", [Object])
    ], ApiStorageService);
    return ApiStorageService;
    var ApiStorageService_1;
}());

//# sourceMappingURL=apiStorageService.js.map

/***/ })

},[300]);
//# sourceMappingURL=main.js.map