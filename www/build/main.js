webpackJsonp([0],{

/***/ 153:
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_setting__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(304);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiAuthService__["a" /* ApiAuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 206:
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
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiResourceServices__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiImageService__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(298);
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
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^[0-9]*$"),
                    phoneNumberValidator,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(9),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(9)
                ]]
        });
        this.keyFormGroup = this.formBuilder.group({
            key: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(6)
                ]
            ],
        });
        this.userFromGroup = this.formBuilder.group({
            password: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)
                ]
            ],
            nickname: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)
                ]
            ],
            name: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)
                ]
            ],
            email: '',
            address: ''
        });
        this.imageFormGroup = this.formBuilder.group({
            image: ['',
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
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
                    if (userInfo && userInfo.image && userInfo.nickname)
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
            _this.presentAlert('Lỗi xác thực <br>' + JSON.stringify(err));
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
            if (login.status && login.user_info && login.token) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], LoginPhonePage);
    return LoginPhonePage;
}());

function phoneNumberValidator(formControl) {
    if (formControl.value.charAt(0) != "0")
        return null;
    else
        return { phoneNumber: true };
}
//# sourceMappingURL=login-phone.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__ = __webpack_require__(251);
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

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiResourceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__ = __webpack_require__(78);
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
    ApiResourceService.prototype.getAllCutomers = function () {
        return this.httpClient.get(this.resourceServer + '/db/json-customers')
            .toPromise()
            .then(function (results) {
            if (results) {
                return results;
            }
            else {
                throw 'No customer!';
            }
        })
            .catch(function (err) {
            throw err;
        });
    };
    ApiResourceService.prototype.getParamters = function () {
        return this.httpClient.get(this.resourceServer + '/db/json-parameters')
            .toPromise()
            .then(function (results) {
            if (results) {
                return results;
            }
            else {
                throw 'No paramter!';
            }
        })
            .catch(function (err) {
            throw err;
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
            _this.token = token;
            return data;
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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_customer__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_invoice__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report__ = __webpack_require__(303);
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
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__customer_customer__["a" /* CustomerPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__invoice_invoice__["a" /* InvoicePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__report_report__["a" /* ReportPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Khách hàng" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Hóa đơn" tabIcon="list-box"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Báo cáo" tabIcon="document"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiHttpPublicServices__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parameters_parameters__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_config__ = __webpack_require__(301);
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
    function CustomerPage(navCtrl, formBuilder, auth, apiStorageService, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.apiStorageService = apiStorageService;
        this.http = http;
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
        this.http.getAllCutomers()
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], CustomerPage.prototype, "slides", void 0);
    CustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\customer\customer.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n    <ion-buttons *ngIf="!isSearch" start>\n\n      <button ion-button icon-only color="royal" (click)="goSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="primary" (click)="userAction()" [disabled]="userInfo?false:true">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n    </ion-buttons>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="secondary" (click)="goParameters()">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n    <ion-searchbar *ngIf="isSearch" placeholder="Tìm theo mã/tên khách hàng/khu vực/người quản lý hoặc số điện thoại"\n\n      [(ngModel)]="searchString"\n\n      [showCancelButton]="shouldShowCancel"\n\n      (ionInput)="onInput($event)"\n\n      (keyup.enter)="searchEnter()"\n\n      (keyup.esc)="searchEnter()"\n\n      start>\n\n    </ion-searchbar>\n\n    \n\n    <ion-title *ngIf="!isSearch">CUSTOMER</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n\n      <!-- #id=0 -->\n\n      <ion-slide>\n\n          <ion-list>\n\n              <button ion-item *ngFor="let customer of customers" (click)="gotoSlideEdit(customer)">\n\n                \n\n                <ion-avatar item-start>\n\n                  <img src={{customer.image}} *ngIf="customer.image">\n\n                  \n\n                  <button ion-button icon-only color="secondary" round *ngIf="!customer.image">\n\n                      <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n\n\n                </ion-avatar>\n\n                \n\n                <h2>{{customer.cust_id}} - {{customer.full_name}}</h2>\n\n                <p>{{customer.area}} ({{customer.staff}})</p>\n\n                <ion-note>{{customer.cust_type}} {{customer.charge}} </ion-note>\n\n              </button>\n\n          </ion-list>\n\n      </ion-slide>\n\n      \n\n      <!-- #id=1 -->\n\n      <ion-slide>\n\n          <form [formGroup]="myFromGroup" (ngSubmit)="onSubmit()">\n\n\n\n              <ion-item>\n\n                <ion-label floating>Họ và Tên</ion-label>\n\n                <ion-input formControlName="full_name" type="text"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Địa chỉ</ion-label>\n\n                <ion-input formControlName="address" type="address"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Điện thoại</ion-label>\n\n                <ion-input formControlName="phone" type="phone"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Email</ion-label>\n\n                <ion-input formControlName="email" type="email"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Khu vực quản lý</ion-label>\n\n                <ion-input formControlName="area" type="text"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Loại khách hàng</ion-label>\n\n                <ion-input formControlName="type" type="text"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-row>\n\n                <ion-col text-center col-12 col-xl-3 col-lg-4 col-sm-6>\n\n                  <button ion-button block color="secondary" type="button" (click)="goBack()">\n\n                    Trở về\n\n                  </button>\n\n                </ion-col>\n\n                <ion-col text-center col-12 offset-xl-6 col-xl-3 offset-lg-4 col-lg-4 col-sm-6>\n\n                  <button ion-button block color="secondary" type="submit">\n\n                    Thay đổi\n\n                  </button>\n\n                </ion-col>\n\n              </ion-row>\n\n              \n\n            </form>\n\n      </ion-slide>\n\n  \n\n      <!-- #id=2 -->\n\n      <!-- #id=4 -->\n\n      <!-- #id=5 -->\n\n      <!-- #id=6 -->\n\n    </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\customer\customer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CustomerPage);
    return CustomerPage;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(86);
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
        this.children = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* reorderArray */])(this.children, indexes);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ParametersPage);
    return ParametersPage;
}());

//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(86);
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
        this.songs = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* reorderArray */])(this.songs, indexes);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], ConfigPage.prototype, "slides", void 0);
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\config\config.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n\n\n    <ion-buttons *ngIf="!isSearch" start>\n\n      \n\n      <button ion-button icon-only color="royal" (click)="goSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel1" (click)="itemSample(0)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel2" (click)="itemSample(1)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel3" (click)="itemSample(2)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel4" (click)="itemSample(3)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel5" (click)="itemSample(4)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel6" (click)="itemSample(5)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel7" (click)="itemSample(6)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel8" (click)="itemSample(7)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="excel9" (click)="itemSample(8)">\n\n          <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n\n\n    </ion-buttons>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addButton()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n    <ion-searchbar *ngIf="isSearch" placeholder="Tìm theo loại tham số" [(ngModel)]="searchString" [showCancelButton]="shouldShowCancel"\n\n      (ionInput)="onInput($event)" (keyup.enter)="searchEnter()" (keyup.esc)="searchEnter()" start>\n\n    </ion-searchbar>\n\n\n\n    <ion-title *ngIf="!isSearch">MẪU USER INTERFACE IONIC</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="toggleEdit()">{{editButton}}</button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n\n        <!-- #id=0 Select Options-->\n\n        <ion-slide>\n\n          <ion-row>\n\n            <ion-col>\n\n              dong 1 cot 1\n\n            </ion-col>\n\n            <ion-col>\n\n              dong 1 cot 2\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col>\n\n              dong 2 cot 1\n\n            </ion-col>\n\n            <ion-col>\n\n              dong 2 cot 2\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-slide>\n\n        <!-- #id=0 Select Options-->\n\n        <ion-slide>\n\n\n\n            <ion-item>\n\n                <ion-label>Gender - Single Value</ion-label>\n\n                <ion-select [(ngModel)]="gender">\n\n                  <ion-option value="f">Female</ion-option>\n\n                  <ion-option value="m">Male</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n      \n\n              <ion-item>\n\n                <ion-label>Hair Color</ion-label>\n\n                <ion-select [(ngModel)]="hairColor" okText="Okay" cancelText="Dismiss" [compareWith]="compareFn">\n\n                  <ion-option *ngFor="let o of hairColorData" [value]="o">{{o.text}}</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label>Gender - Popover Interface select</ion-label>\n\n                  <ion-select [(ngModel)]="gender" interface="popover">\n\n                    <ion-option value="f">Female</ion-option>\n\n                    <ion-option value="m">Male</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n        \n\n                <ion-item>\n\n                  <ion-label>Gaming</ion-label>\n\n                  <ion-select [(ngModel)]="gaming" okText="Okay" cancelText="Dismiss" interface="popover">\n\n                    <ion-option value="nes">NES</ion-option>\n\n                    <ion-option value="n64">Nintendo64</ion-option>\n\n                    <ion-option value="ps">PlayStation</ion-option>\n\n                    <ion-option value="genesis">Sega Genesis</ion-option>\n\n                    <ion-option value="saturn">Sega Saturn</ion-option>\n\n                    <ion-option value="snes">SNES</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n        \n\n                <ion-item>\n\n                  <ion-label>Date</ion-label>\n\n                  <ion-select (ionChange)="monthChange($event)" interface="popover">\n\n                    <ion-option value="01">January</ion-option>\n\n                    <ion-option value="02">February</ion-option>\n\n                    <ion-option value="03" selected="true">March</ion-option>\n\n                    <ion-option value="04">April</ion-option>\n\n                    <ion-option value="05">May</ion-option>\n\n                    <ion-option value="06">June</ion-option>\n\n                    <ion-option value="07">July</ion-option>\n\n                    <ion-option value="08">August</ion-option>\n\n                    <ion-option value="09">September</ion-option>\n\n                    <ion-option value="10">October</ion-option>\n\n                    <ion-option value="11">November</ion-option>\n\n                    <ion-option value="12">December</ion-option>\n\n                  </ion-select>\n\n                  <ion-select (ionChange)="yearChange($event)" interface="popover">\n\n                    <ion-option>1989</ion-option>\n\n                    <ion-option>1990</ion-option>\n\n                    <ion-option>1991</ion-option>\n\n                    <ion-option>1992</ion-option>\n\n                    <ion-option>1993</ion-option>\n\n                    <ion-option selected="true">1994</ion-option>\n\n                    <ion-option>1995</ion-option>\n\n                    <ion-option>1996</ion-option>\n\n                    <ion-option>1997</ion-option>\n\n                    <ion-option>1998</ion-option>\n\n                    <ion-option>1999</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n\n\n\n\n                <ion-item>\n\n                    <ion-label>Toppings - Multiple Select</ion-label>\n\n                    <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!">\n\n                      <ion-option value="bacon">Bacon</ion-option>\n\n                      <ion-option value="olives">Black Olives</ion-option>\n\n                      <ion-option value="xcheese">Extra Cheese</ion-option>\n\n                      <ion-option value="peppers">Green Peppers</ion-option>\n\n                      <ion-option value="mushrooms">Mushrooms</ion-option>\n\n                      <ion-option value="onions">Onions</ion-option>\n\n                      <ion-option value="pepperoni">Pepperoni</ion-option>\n\n                      <ion-option value="pineapple">Pineapple</ion-option>\n\n                      <ion-option value="sausage">Sausage</ion-option>\n\n                      <ion-option value="Spinach">Spinach</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n        \n\n                  <ion-item>\n\n                    <ion-label>Pets</ion-label>\n\n                    <ion-select [(ngModel)]="pets" multiple="true" [selectOptions]="petAlertOpts">\n\n                      <ion-option *ngFor="let o of petData" [value]="o.value">{{o.text}}</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n        \n\n                  <ion-item>\n\n                    <ion-label>Skittles</ion-label>\n\n                    <ion-select [(ngModel)]="skittles" multiple="true" okText="Okay" cancelText="Dismiss" [compareWith]="compareFn">\n\n                      <ion-option *ngFor="let o of skittlesData" [value]="o">{{o.text}}</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n        \n\n                  <ion-item>\n\n                    <ion-label>Disabled</ion-label>\n\n                    <ion-select multiple disabled="true">\n\n                      <ion-option checked="true">Selected Text</ion-option>\n\n                    </ion-select>\n\n                  </ion-item>\n\n\n\n\n\n              <ion-item>\n\n                  <ion-label>Mute Notifications - Action sheet interface select</ion-label>\n\n                  <ion-select [(ngModel)]="notifications" interface="action-sheet">\n\n                    <ion-option value="mute_15">For 15 Minutes</ion-option>\n\n                    <ion-option value="mute_1">For 1 Hour</ion-option>\n\n                    <ion-option value="mute_23">For 24 Hours</ion-option>\n\n                    <ion-option value="mute_inf">Until I turn it back on</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n      \n\n                <ion-item>\n\n                  <ion-label>Rating</ion-label>\n\n                  <ion-select [(ngModel)]="rating" interface="action-sheet">\n\n                    <ion-option value="1">1 Star</ion-option>\n\n                    <ion-option value="2">2 Stars</ion-option>\n\n                    <ion-option value="3">3 Stars</ion-option>\n\n                    <ion-option value="4">4 Stars</ion-option>\n\n                    <ion-option value="5">5 Stars</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n      \n\n        </ion-slide>\n\n        \n\n        <!-- #id=1 Toolbar navbar-->\n\n        <ion-slide>\n\n            <ion-toolbar>\n\n                <ion-title>This is the title that never ends. It just goes on and on my friend.</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar>\n\n                <button ion-button menuToggle>\n\n                  <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only showWhen="ios">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-only>\n\n                    <ion-icon name="search"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button color="secondary" icon-only>\n\n                    <ion-icon name="more"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Default</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="primary">\n\n                <ion-buttons start>\n\n                  <button ion-button showWhen="ios" icon-only>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-only>\n\n                    <ion-icon name="search"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button color="secondary" icon-only>\n\n                    <ion-icon name="more"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Primary</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="primary">\n\n                <ion-buttons start>\n\n                  <button ion-button showWhen="ios" icon-only class="activated">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-only class="activated">\n\n                    <ion-icon name="search"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button color="secondary" icon-only class="activated">\n\n                    <ion-icon name="more"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Primary.activated</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="secondary">\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only color="primary">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-start solid>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                    Solid\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Secondary</ion-title>\n\n                <ion-buttons end>\n\n                  <button ion-button icon-end solid color="danger">\n\n                    Help\n\n                    <ion-icon name="help-circle"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="secondary">\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only color="primary" class="activated">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-start solid class="activated">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                    Solid\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Secondary Activated</ion-title>\n\n                <ion-buttons end>\n\n                  <button ion-button icon-end solid color="danger" class="activated">\n\n                    Help\n\n                    <ion-icon name="help-circle"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="dark">\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only outline>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button icon-start outline>\n\n                    <ion-icon name="star"></ion-icon>\n\n                    Star\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button icon-only color="secondary" outline>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Dark</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="dark">\n\n                <ion-buttons start>\n\n                  <button ion-button outline icon-only class="activated">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                  <button ion-button outline icon-start class="activated">\n\n                    <ion-icon name="star"></ion-icon>\n\n                    Star\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button color="secondary" outline icon-only class="activated">\n\n                    <ion-icon name="contact"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Dark.activated</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="danger">\n\n                <ion-buttons start>\n\n                  <button ion-button icon-start>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                    Clear\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button icon-end>\n\n                    Edit\n\n                    <ion-icon name="create"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Danger</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="danger">\n\n                <button ion-button menuToggle>\n\n                  <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only>\n\n                    <ion-icon name="star"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Danger</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="light">\n\n                <ion-buttons start>\n\n                  <button ion-button icon-start>\n\n                    <ion-icon name="contact"></ion-icon>\n\n                    Clear\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-buttons end>\n\n                  <button ion-button icon-end>\n\n                    Edit\n\n                    <ion-icon name="create"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Light</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="light">\n\n                <button ion-button menuToggle>\n\n                  <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n                <ion-buttons start>\n\n                  <button ion-button icon-only>\n\n                    <ion-icon name="star"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Light</ion-title>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar transparent>\n\n                <ion-buttons end>\n\n                  <button ion-button #button1 icon-only (click)="buttonClick(button1)">\n\n                    <ion-icon name="star"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n                <ion-title>Transparent</ion-title>\n\n                <button ion-button menuToggle right>\n\n                  <ion-icon name="menu"></ion-icon>\n\n                </button>\n\n              </ion-toolbar>\n\n            \n\n              <ion-toolbar color="greyYellow">\n\n                <ion-title>Grey Yellow</ion-title>\n\n              </ion-toolbar>\n\n              <ion-toolbar color="greyWhite">\n\n                <ion-title>Grey White</ion-title>\n\n              </ion-toolbar>\n\n        </ion-slide>\n\n\n\n        <!-- #id=2 card header card footer-->\n\n        <ion-slide>\n\n            <ion-card color="secondary">\n\n                <ion-card-header>\n\n                  Card Header\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                  <ion-card-title>\n\n                    Title\n\n                  </ion-card-title>\n\n                  Some normal text in content.\n\n                  <h3>h3 in content</h3>\n\n                  <p>\n\n                    Paragraph in content.\n\n                  </p>\n\n                  <p>\n\n                    Another paragraph in content.\n\n                  </p>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            \n\n              <ion-card color="primary" class="rainbow-content">\n\n                <ion-card-header>\n\n                  Card Header\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                  <ion-card-title>\n\n                    Title\n\n                  </ion-card-title>\n\n                  Some normal text in content.\n\n                  <h3>h3 in content</h3>\n\n                  <p>\n\n                    Paragraph in content.\n\n                  </p>\n\n                  <p>\n\n                    Another paragraph in content.\n\n                  </p>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            \n\n              <ion-card color="primary">\n\n                <ion-card-header>\n\n                  Card Header\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                  <ion-card-title>\n\n                    Title\n\n                  </ion-card-title>\n\n                  Some normal text in content.\n\n                  <h3>h3 in content</h3>\n\n                  <p>\n\n                    Paragraph in content.\n\n                  </p>\n\n                  <p>\n\n                    Another paragraph in content.\n\n                  </p>\n\n                </ion-card-content>\n\n              </ion-card>\n\n            \n\n              <ion-list>\n\n                <ion-item *ngFor="let item of [0,1,2,3,4,5,6,7,8,9]">\n\n                  {{ item }}\n\n                </ion-item>\n\n              </ion-list>\n\n        </ion-slide>\n\n\n\n        <!-- #id=3 -->\n\n        <ion-slide>\n\n            <ion-item>\n\n                <ion-label>Username</ion-label>\n\n                <ion-input></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label fixed>Website</ion-label>\n\n                <ion-input type="url"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label floating>Email</ion-label>\n\n                <ion-input type="email"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label stacked>Phone</ion-label>\n\n                <ion-input type="tel"></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label>Toggle</ion-label>\n\n                <ion-toggle></ion-toggle>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-label>Checkbox</ion-label>\n\n                <ion-checkbox></ion-checkbox>\n\n              </ion-item>\n\n        </ion-slide>\n\n\n\n        <!-- #id=4 -->\n\n        <ion-slide>\n\n          <ion-list>\n\n            <ion-list-header>\n\n              Settings\n\n              <button ion-button icon-only item-end clear>\n\n                <ion-icon name="cog"></ion-icon>\n\n              </button>\n\n            </ion-list-header>\n\n        \n\n            <ion-item-group>\n\n              <ion-item>\n\n                <ion-icon name="plane" item-start color="danger"></ion-icon>\n\n                <ion-label>Airplane Mode</ion-label>\n\n                <ion-toggle color="secondary"></ion-toggle>\n\n              </ion-item>\n\n        \n\n              <button ion-item>\n\n                <ion-icon name="wifi" item-start color="primary"></ion-icon>\n\n                <ion-label>Wi-Fi</ion-label>\n\n                <ion-note item-end>The Interwebz</ion-note>\n\n              </button>\n\n        \n\n              <button ion-item>\n\n                <ion-icon name="bluetooth" item-start color="primary"></ion-icon>\n\n                <ion-label>Bluetooth</ion-label>\n\n                <ion-note item-end>Off</ion-note>\n\n              </button>\n\n            </ion-item-group>\n\n        \n\n            <ion-item-divider color="primary">\n\n              Other Settings\n\n              <button ion-button item-end outline color="light">Clear</button>\n\n            </ion-item-divider>\n\n        \n\n            <button ion-item>\n\n              <ion-icon name="call" item-start color="secondary"></ion-icon>\n\n              <ion-label>Cellular</ion-label>\n\n            </button>\n\n        \n\n            <button ion-item>\n\n              <ion-icon name="link" item-start color="secondary"></ion-icon>\n\n              <ion-label>Personal Hotspot</ion-label>\n\n              <ion-note item-end>Off</ion-note>\n\n            </button>\n\n          </ion-list>\n\n        \n\n          <ion-list radio-group>\n\n            <ion-list-header>\n\n              <ion-icon item-start name="phone-portrait"></ion-icon>\n\n              Silence Phone\n\n            </ion-list-header>\n\n        \n\n            <ion-item>\n\n              <ion-label color="dark">Always</ion-label>\n\n              <ion-radio value="always" checked></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label color="dark">Only while phone is locked</ion-label>\n\n              <ion-radio value="locked"></ion-radio>\n\n            </ion-item>\n\n          </ion-list>\n\n        \n\n          <ion-list>\n\n            <ion-list-header>\n\n              Apps Installed\n\n            </ion-list-header>\n\n        \n\n            <ion-item>\n\n              <ion-icon name="ionic" item-start color="primary"></ion-icon>\n\n              <ion-label>Ionic View</ion-label>\n\n              <button ion-button outline item-end>Uninstall</button>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name="brush" item-start color="primary"></ion-icon>\n\n              <ion-label>Ionic Creator</ion-label>\n\n              <button ion-button outline item-end>Uninstall</button>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name="logo-octocat" item-start color="dark"></ion-icon>\n\n              <ion-label>Hubstruck</ion-label>\n\n              <button ion-button outline item-end>Uninstall</button>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-icon name="paw" item-start color="danger"></ion-icon>\n\n              <ion-label>Barkpark</ion-label>\n\n              <button ion-button outline item-end>Uninstall</button>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-slide>\n\n\n\n        <!-- #id=5 -->\n\n        <ion-slide>\n\n          <ion-list class="chat-sliding-demo">\n\n            <ion-list-header>\n\n              Playlist\n\n            </ion-list-header>\n\n        \n\n            <ion-item-group [reorder]="editing" (ionItemReorder)="reorderData($event)">\n\n              <ion-item *ngFor="let song of songs">\n\n                <h2>{{ song.title }}</h2>\n\n                <p>{{ song.band }} • {{ song.album }}</p>\n\n              </ion-item>\n\n            </ion-item-group>\n\n          </ion-list>\n\n        </ion-slide>\n\n\n\n        <!-- #id=6 -->\n\n        <ion-slide>\n\n          <ion-list class="chat-sliding-demo">\n\n            <ion-list-header>\n\n              Chats\n\n            </ion-list-header>\n\n        \n\n            <ion-item-sliding *ngFor="let chat of chats" #item>\n\n              <ion-item>\n\n                <ion-avatar item-start>\n\n                  <img [src]="chat.img">\n\n                </ion-avatar>\n\n                <h2>{{chat.name}}</h2>\n\n                <p>{{chat.message}}</p>\n\n                <ion-note item-end>\n\n                  {{chat.time}}\n\n                </ion-note>\n\n              </ion-item>\n\n        \n\n              <ion-item-options>\n\n                <button ion-button color="secondary" (click)="more(item)">\n\n                  <ion-icon name="menu"></ion-icon>\n\n                  More\n\n                </button>\n\n                <button ion-button color="dark" (click)="mute(item)">\n\n                  <ion-icon name="volume-off"></ion-icon>\n\n                  Mute\n\n                </button>\n\n                <button ion-button color="danger" (click)="delete(item)">\n\n                  <ion-icon name="trash"></ion-icon>\n\n                  Delete\n\n                </button>\n\n              </ion-item-options>\n\n        \n\n              <ion-item-options side="left" (ionSwipe)="archive(item)">\n\n                <button ion-button color="primary" expandable (click)="archive(item)">\n\n                  <ion-icon name="archive" class="expand-hide"></ion-icon>\n\n                  <div class="expand-hide">Archive</div>\n\n                  <ion-spinner id="archive-spinner"></ion-spinner>\n\n                </button>\n\n              </ion-item-options>\n\n            </ion-item-sliding>\n\n          </ion-list>\n\n        \n\n          <ion-list class="login-sliding-demo">\n\n            <ion-list-header>\n\n              Logins\n\n            </ion-list-header>\n\n        \n\n            <ion-item-sliding *ngFor="let login of logins" #item>\n\n              <ion-item>\n\n                <ion-icon [name]="login.icon" item-start></ion-icon>\n\n                <h2>{{login.name}}</h2>\n\n                <p>{{login.username}}</p>\n\n              </ion-item>\n\n              <ion-item-options side="left">\n\n                <button ion-button color="danger">\n\n                  <ion-icon name="trash"></ion-icon>\n\n                </button>\n\n              </ion-item-options>\n\n              <ion-item-options (ionSwipe)="download(item)" icon-start>\n\n                <button ion-button color="dark" (click)="more(item)">\n\n                  <ion-icon name="volume-off"></ion-icon>\n\n                  Mute\n\n                </button>\n\n                <button ion-button color="light" expandable (click)="download(item)">\n\n                  <ion-icon name="download" class="expand-hide"></ion-icon>\n\n                  <div class="expand-hide">Download</div>\n\n                  <ion-spinner id="download-spinner"></ion-spinner>\n\n                </button>\n\n              </ion-item-options>\n\n            </ion-item-sliding>\n\n        \n\n          </ion-list>\n\n          \n\n        </ion-slide>\n\n\n\n        <!-- #id=7 -->\n\n        <ion-slide>\n\n\n\n        </ion-slide>\n\n\n\n    </ion-slides>\n\n \n\n</ion-content>\n\n\n\n<!-- \n\n<ion-header>\n\n    <ion-navbar >\n\n  \n\n      <ion-buttons start>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="contact"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only color="secondary">\n\n          <ion-icon name="more"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>Subheader</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content fullscreen="true">\n\n    \n\n  \n\n  -->'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\config\config.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiStorageService__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoicePage = /** @class */ (function () {
    function InvoicePage(navCtrl, apiStorageService, sanitizer) {
        this.navCtrl = navCtrl;
        this.apiStorageService = apiStorageService;
        this.sanitizer = sanitizer;
        this.slideIndex = 0;
        this.resourceServer = __WEBPACK_IMPORTED_MODULE_3__services_apiStorageService__["a" /* ApiStorageService */].resourceServer;
    }
    InvoicePage.prototype.ngOnInit = function () {
        //this.getInvoices();
    };
    InvoicePage.prototype.readInvoices = function () {
    };
    InvoicePage.prototype.getInvoices = function () {
        this.pdfLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.resourceServer + "/db/pdf-invoices/201901?background=yes&&token=" + this.apiStorageService.getToken());
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
        this.goToSlide(0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], InvoicePage.prototype, "slides", void 0);
    InvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoice',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\invoice\invoice.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Invoice\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n\n    <!-- #id=0 -->\n\n    <ion-slide>\n\n\n\n        <ion-buttons start>\n\n            <button ion-button type="button" icon-end round (click)="readInvoices()">\n\n                Đọc hóa đơn\n\n                <ion-icon name="share-alt"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-slide>\n\n\n\n    <!-- #id=1 -->\n\n    <ion-slide>\n\n\n\n      <iframe *ngIf="pdfLink" [src]="pdfLink" width="100%" height="100%" frameborder="0"></iframe>\n\n\n\n    </ion-slide>\n\n\n\n    <!-- #id=2 -->\n\n    <!-- #id=4 -->\n\n    <!-- #id=5 -->\n\n    <!-- #id=6 -->\n\n  </ion-slides>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\invoice\invoice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], InvoicePage);
    return InvoicePage;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-form-background">\n\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n\n    <!-- #id=0 -->\n\n    <ion-slide>\n\n      <div class="wrapper">\n\n        <form class="login-form">\n\n\n\n            <ion-item>\n\n                <ion-buttons start>\n\n                    <button ion-button type="button" icon-end round>\n\n                        <input type="file" accept="image/*" (change)="fileChange($event)">\n\n                        Avantar - Ảnh đại diện\n\n                        <ion-icon name="images"></ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Nhập số điện thoại</ion-label>\n\n            <ion-input type="text"></ion-input>\n\n          </ion-item>\n\n\n\n          <ion-buttons start>\n\n            <button ion-button type="button" icon-end round>\n\n              Yêu cầu xác thực\n\n              <ion-icon name="share-alt"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </form>\n\n      </div>\n\n\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(154);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__["a" /* ApiAuthService */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiImageService__ = __webpack_require__(153);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiImageService__["a" /* ApiImageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__["a" /* ApiAuthService */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(328);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_printer_printer__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_phone_login_phone__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sample_icons_sample_icons__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_config_config__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pdf_pdf__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_parameters_parameters__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_customer_customer__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_invoice_invoice__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_report_report__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_webstorage_service__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_apiImageService__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_apiHttpPublicServices__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_apiResourceServices__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__interceptors_requestInterceptor__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__interceptors_responseInterceptor__ = __webpack_require__(507);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_parameters_parameters__["a" /* ParametersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_invoice_invoice__["a" /* InvoicePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_printer_printer__["a" /* PrinterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sample_icons_sample_icons__["a" /* SampleIconsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_config_config__["a" /* ConfigPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22_angular_webstorage_service__["b" /* StorageServiceModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_phone_login_phone__["a" /* LoginPhonePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_parameters_parameters__["a" /* ParametersPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_invoice_invoice__["a" /* InvoicePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_printer_printer__["a" /* PrinterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_sample_icons_sample_icons__["a" /* SampleIconsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_config_config__["a" /* ConfigPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_24__services_apiAuthService__["a" /* ApiAuthService */],
                __WEBPACK_IMPORTED_MODULE_25__services_apiImageService__["a" /* ApiImageService */],
                __WEBPACK_IMPORTED_MODULE_23__services_apiStorageService__["a" /* ApiStorageService */],
                __WEBPACK_IMPORTED_MODULE_27__services_apiResourceServices__["a" /* ApiResourceService */],
                __WEBPACK_IMPORTED_MODULE_26__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
                __WEBPACK_IMPORTED_MODULE_28__interceptors_requestInterceptor__["a" /* RequestInterceptor */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_28__interceptors_requestInterceptor__["a" /* RequestInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_29__interceptors_responseInterceptor__["a" /* ResponseInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */]
                }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_phone_login_phone__ = __webpack_require__(250);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_phone_login_phone__["a" /* LoginPhonePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\IONIC\excel-pdf-hoadon\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\IONIC\excel-pdf-hoadon\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_rsa__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_node_rsa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_node_rsa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__(486);
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

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_print_js__ = __webpack_require__(503);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PrinterPage);
    return PrinterPage;
}());

//# sourceMappingURL=printer.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleIconsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icon_icons__ = __webpack_require__(505);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
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

/***/ 505:
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

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], PdfPage);
    return PdfPage;
}());

//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http___ = __webpack_require__(47);
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

/***/ 78:
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiHttpPublicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__ = __webpack_require__(78);
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
    function ApiHttpPublicService(httpClient, reqInterceptor //muon thay doi token gui kem thi ghi token moi
    ) {
        this.httpClient = httpClient;
        this.reqInterceptor = reqInterceptor; //muon thay doi token gui kem thi ghi token moi
        this.resourceServer = __WEBPACK_IMPORTED_MODULE_2__apiStorageService__["a" /* ApiStorageService */].resourceServer;
    }
    /**
     * Lay danh sach cac quoc gia ve Ma so dien thoai, co, ten, ngon ngu, tien...
     */
    ApiHttpPublicService.prototype.getAllCoutries = function () {
        return this.httpClient.get('https://restcountries.eu/rest/v2/all')
            .toPromise()
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
    ApiHttpPublicService.prototype.getRandomUser = function () {
    };
    ApiHttpPublicService.prototype.getAllCutomers = function () {
        return this.httpClient.get(this.resourceServer + '/db/json-customers')
            .toPromise()
            .then(function (results) {
            if (results) {
                return results;
            }
            else {
                throw 'No customer!';
            }
        })
            .catch(function (err) {
            throw err;
        });
    };
    ApiHttpPublicService.prototype.getParamters = function () {
        return this.httpClient.get(this.resourceServer + '/db/json-parameters')
            .toPromise()
            .then(function (results) {
            if (results) {
                return results;
            }
            else {
                throw 'No paramter!';
            }
        })
            .catch(function (err) {
            throw err;
        });
    };
    /**
     * truyen len {token:'...'}
     * @param jsonString
     */
    ApiHttpPublicService.prototype.authorizeFromResource = function (token) {
        this.reqInterceptor.setRequestToken(token);
        return this.httpClient.post(this.resourceServer + '/auth/authorize-token', JSON.stringify({ token: token }))
            .toPromise()
            .then(function (data) {
            return data;
        });
    };
    ApiHttpPublicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__interceptors_requestInterceptor__["a" /* RequestInterceptor */] //muon thay doi token gui kem thi ghi token moi
        ])
    ], ApiHttpPublicService);
    return ApiHttpPublicService;
}());

//# sourceMappingURL=apiHttpPublicServices.js.map

/***/ })

},[307]);
//# sourceMappingURL=main.js.map