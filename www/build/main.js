webpackJsonp([0],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(139);
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
            selector: 'page-config',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/config/config.html"*/'<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-buttons *ngIf="!isSearch" start>\n      \n      <button ion-button icon-only color="royal" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="excel1" (click)="itemSample(0)">\n          <ion-icon name="contact"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="excel2" (click)="itemSample(1)">\n          <ion-icon name="contact"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="excel3" (click)="itemSample(2)">\n          <ion-icon name="contact"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="excel4" (click)="itemSample(3)">\n          <ion-icon name="contact"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="excel5" (click)="itemSample(4)">\n          <ion-icon name="contact"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="excel6" (click)="itemSample(5)">\n          <ion-icon name="contact"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="excel7" (click)="itemSample(6)">\n          <ion-icon name="contact"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="excel8" (click)="itemSample(7)">\n          <ion-icon name="contact"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="excel9" (click)="itemSample(8)">\n          <ion-icon name="contact"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addButton()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar *ngIf="isSearch" placeholder="Tìm theo loại tham số" [(ngModel)]="searchString" [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput($event)" (keyup.enter)="searchEnter()" (keyup.esc)="searchEnter()" start>\n    </ion-searchbar>\n\n    <ion-title *ngIf="!isSearch">MẪU USER INTERFACE IONIC</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="toggleEdit()">{{editButton}}</button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n        <!-- #id=0 style chẵn lẻ và bảng (dùng boostrap và css ion-row:nth-of-type-->\n        <ion-slide>\n          <ion-row>\n            <ion-col>\n              dong 1 cot 1\n            </ion-col>\n            <ion-col>\n              dong 1 cot 2\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              dong 2 cot 1\n            </ion-col>\n            <ion-col>\n              dong 2 cot 2\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n        <!-- #id=1 Select Options - chọn 1 hoặc chọn nhiều-->\n        <ion-slide>\n\n            <ion-item>\n                <ion-label>Gender - Single Value</ion-label>\n                <ion-select [(ngModel)]="gender">\n                  <ion-option value="f">Female</ion-option>\n                  <ion-option value="m">Male</ion-option>\n                </ion-select>\n              </ion-item>\n      \n              <ion-item>\n                <ion-label>Hair Color</ion-label>\n                <ion-select [(ngModel)]="hairColor" okText="Okay" cancelText="Dismiss" [compareWith]="compareFn">\n                  <ion-option *ngFor="let o of hairColorData" [value]="o">{{o.text}}</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label>Gender - Popover Interface select</ion-label>\n                  <ion-select [(ngModel)]="gender" interface="popover">\n                    <ion-option value="f">Female</ion-option>\n                    <ion-option value="m">Male</ion-option>\n                  </ion-select>\n                </ion-item>\n        \n                <ion-item>\n                  <ion-label>Gaming</ion-label>\n                  <ion-select [(ngModel)]="gaming" okText="Okay" cancelText="Dismiss" interface="popover">\n                    <ion-option value="nes">NES</ion-option>\n                    <ion-option value="n64">Nintendo64</ion-option>\n                    <ion-option value="ps">PlayStation</ion-option>\n                    <ion-option value="genesis">Sega Genesis</ion-option>\n                    <ion-option value="saturn">Sega Saturn</ion-option>\n                    <ion-option value="snes">SNES</ion-option>\n                  </ion-select>\n                </ion-item>\n        \n                <ion-item>\n                  <ion-label>Date</ion-label>\n                  <ion-select (ionChange)="monthChange($event)" interface="popover">\n                    <ion-option value="01">January</ion-option>\n                    <ion-option value="02">February</ion-option>\n                    <ion-option value="03" selected="true">March</ion-option>\n                    <ion-option value="04">April</ion-option>\n                    <ion-option value="05">May</ion-option>\n                    <ion-option value="06">June</ion-option>\n                    <ion-option value="07">July</ion-option>\n                    <ion-option value="08">August</ion-option>\n                    <ion-option value="09">September</ion-option>\n                    <ion-option value="10">October</ion-option>\n                    <ion-option value="11">November</ion-option>\n                    <ion-option value="12">December</ion-option>\n                  </ion-select>\n                  <ion-select (ionChange)="yearChange($event)" interface="popover">\n                    <ion-option>1989</ion-option>\n                    <ion-option>1990</ion-option>\n                    <ion-option>1991</ion-option>\n                    <ion-option>1992</ion-option>\n                    <ion-option>1993</ion-option>\n                    <ion-option selected="true">1994</ion-option>\n                    <ion-option>1995</ion-option>\n                    <ion-option>1996</ion-option>\n                    <ion-option>1997</ion-option>\n                    <ion-option>1998</ion-option>\n                    <ion-option>1999</ion-option>\n                  </ion-select>\n                </ion-item>\n\n\n                <ion-item>\n                    <ion-label>Toppings - Multiple Select</ion-label>\n                    <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!">\n                      <ion-option value="bacon">Bacon</ion-option>\n                      <ion-option value="olives">Black Olives</ion-option>\n                      <ion-option value="xcheese">Extra Cheese</ion-option>\n                      <ion-option value="peppers">Green Peppers</ion-option>\n                      <ion-option value="mushrooms">Mushrooms</ion-option>\n                      <ion-option value="onions">Onions</ion-option>\n                      <ion-option value="pepperoni">Pepperoni</ion-option>\n                      <ion-option value="pineapple">Pineapple</ion-option>\n                      <ion-option value="sausage">Sausage</ion-option>\n                      <ion-option value="Spinach">Spinach</ion-option>\n                    </ion-select>\n                  </ion-item>\n        \n                  <ion-item>\n                    <ion-label>Pets</ion-label>\n                    <ion-select [(ngModel)]="pets" multiple="true" [selectOptions]="petAlertOpts">\n                      <ion-option *ngFor="let o of petData" [value]="o.value">{{o.text}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n        \n                  <ion-item>\n                    <ion-label>Skittles</ion-label>\n                    <ion-select [(ngModel)]="skittles" multiple="true" okText="Okay" cancelText="Dismiss" [compareWith]="compareFn">\n                      <ion-option *ngFor="let o of skittlesData" [value]="o">{{o.text}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n        \n                  <ion-item>\n                    <ion-label>Disabled</ion-label>\n                    <ion-select multiple disabled="true">\n                      <ion-option checked="true">Selected Text</ion-option>\n                    </ion-select>\n                  </ion-item>\n\n\n              <ion-item>\n                  <ion-label>Mute Notifications - Action sheet interface select</ion-label>\n                  <ion-select [(ngModel)]="notifications" interface="action-sheet">\n                    <ion-option value="mute_15">For 15 Minutes</ion-option>\n                    <ion-option value="mute_1">For 1 Hour</ion-option>\n                    <ion-option value="mute_23">For 24 Hours</ion-option>\n                    <ion-option value="mute_inf">Until I turn it back on</ion-option>\n                  </ion-select>\n                </ion-item>\n      \n                <ion-item>\n                  <ion-label>Rating</ion-label>\n                  <ion-select [(ngModel)]="rating" interface="action-sheet">\n                    <ion-option value="1">1 Star</ion-option>\n                    <ion-option value="2">2 Stars</ion-option>\n                    <ion-option value="3">3 Stars</ion-option>\n                    <ion-option value="4">4 Stars</ion-option>\n                    <ion-option value="5">5 Stars</ion-option>\n                  </ion-select>\n                </ion-item>\n      \n        </ion-slide>\n        \n        <!-- #id=2 Toolbar navbar -- Thanh công cụ có nút kèm theo - nhiều nút - tập nhóm nút - tìm kiếm-->\n        <ion-slide>\n              <ion-toolbar>\n                <ion-title>This is the title that never ends. It just goes on and on my friend.</ion-title>\n              </ion-toolbar>\n            \n              <ion-toolbar>\n                <button ion-button menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n                <ion-buttons start>\n                  <button ion-button icon-only showWhen="ios">\n                    <ion-icon name="contact"></ion-icon>\n                  </button>\n                  <button ion-button icon-only>\n                    <ion-icon name="search"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-buttons end>\n                  <button ion-button color="secondary" icon-only>\n                    <ion-icon name="more"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-title>Default</ion-title>\n              </ion-toolbar>\n            \n              <ion-toolbar color="primary">\n                <ion-buttons start>\n                  <button ion-button showWhen="ios" icon-only>\n                    <ion-icon name="contact"></ion-icon>\n                  </button>\n                  <button ion-button icon-only>\n                    <ion-icon name="search"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-buttons end>\n                  <button ion-button color="secondary" icon-only>\n                    <ion-icon name="more"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-title>Primary</ion-title>\n              </ion-toolbar>\n            \n              <ion-toolbar color="primary">\n                <ion-buttons start>\n                  <button ion-button showWhen="ios" icon-only class="activated">\n                    <ion-icon name="contact"></ion-icon>\n                  </button>\n                  <button ion-button icon-only class="activated">\n                    <ion-icon name="search"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-buttons end>\n                  <button ion-button color="secondary" icon-only class="activated">\n                    <ion-icon name="more"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-title>Primary.activated</ion-title>\n              </ion-toolbar>\n            \n              <ion-toolbar color="secondary">\n                <ion-buttons start>\n                  <button ion-button icon-only color="primary">\n                    <ion-icon name="contact"></ion-icon>\n                  </button>\n                  <button ion-button icon-start solid>\n                    <ion-icon name="contact"></ion-icon>\n                    Solid\n                  </button>\n                </ion-buttons>\n                <ion-title>Secondary</ion-title>\n                <ion-buttons end>\n                  <button ion-button icon-end solid color="danger">\n                    Help\n                    <ion-icon name="help-circle"></ion-icon>\n                  </button>\n                </ion-buttons>\n              </ion-toolbar>\n            \n              <ion-toolbar color="secondary">\n                <ion-buttons start>\n                  <button ion-button icon-only color="primary" class="activated">\n                    <ion-icon name="contact"></ion-icon>\n                  </button>\n                  <button ion-button icon-start solid class="activated">\n                    <ion-icon name="contact"></ion-icon>\n                    Solid\n                  </button>\n                </ion-buttons>\n                <ion-title>Secondary Activated</ion-title>\n                <ion-buttons end>\n                  <button ion-button icon-end solid color="danger" class="activated">\n                    Help\n                    <ion-icon name="help-circle"></ion-icon>\n                  </button>\n                </ion-buttons>\n              </ion-toolbar>\n            \n              <ion-toolbar color="dark">\n                <ion-buttons start>\n                  <button ion-button icon-only outline>\n                    <ion-icon name="contact"></ion-icon>\n                  </button>\n                  <button ion-button icon-start outline>\n                    <ion-icon name="star"></ion-icon>\n                    Star\n                  </button>\n                </ion-buttons>\n                <ion-buttons end>\n                  <button ion-button icon-only color="secondary" outline>\n                    <ion-icon name="contact"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-title>Dark</ion-title>\n              </ion-toolbar>\n            \n              <ion-toolbar color="dark">\n                <ion-buttons start>\n                  <button ion-button outline icon-only class="activated">\n                    <ion-icon name="contact"></ion-icon>\n                  </button>\n                  <button ion-button outline icon-start class="activated">\n                    <ion-icon name="star"></ion-icon>\n                    Star\n                  </button>\n                </ion-buttons>\n                <ion-buttons end>\n                  <button ion-button color="secondary" outline icon-only class="activated">\n                    <ion-icon name="contact"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-title>Dark.activated</ion-title>\n              </ion-toolbar>\n            \n              <ion-toolbar color="danger">\n                <ion-buttons start>\n                  <button ion-button icon-start>\n                    <ion-icon name="contact"></ion-icon>\n                    Clear\n                  </button>\n                </ion-buttons>\n                <ion-buttons end>\n                  <button ion-button icon-end>\n                    Edit\n                    <ion-icon name="create"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-title>Danger</ion-title>\n              </ion-toolbar>\n            \n              <ion-toolbar color="danger">\n                <button ion-button menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n                <ion-buttons start>\n                  <button ion-button icon-only>\n                    <ion-icon name="star"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-title>Danger</ion-title>\n              </ion-toolbar>\n            \n              <ion-toolbar color="light">\n                <ion-buttons start>\n                  <button ion-button icon-start>\n                    <ion-icon name="contact"></ion-icon>\n                    Clear\n                  </button>\n                </ion-buttons>\n                <ion-buttons end>\n                  <button ion-button icon-end>\n                    Edit\n                    <ion-icon name="create"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-title>Light</ion-title>\n              </ion-toolbar>\n            \n              <ion-toolbar color="light">\n                <button ion-button menuToggle>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n                <ion-buttons start>\n                  <button ion-button icon-only>\n                    <ion-icon name="star"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-title>Light</ion-title>\n              </ion-toolbar>\n            \n              <ion-toolbar transparent>\n                <ion-buttons end>\n                  <button ion-button #button1 icon-only (click)="buttonClick(button1)">\n                    <ion-icon name="star"></ion-icon>\n                  </button>\n                </ion-buttons>\n                <ion-title>Transparent</ion-title>\n                <button ion-button menuToggle right>\n                  <ion-icon name="menu"></ion-icon>\n                </button>\n              </ion-toolbar>\n            \n              <ion-toolbar color="greyYellow">\n                <ion-title>Grey Yellow</ion-title>\n              </ion-toolbar>\n              <ion-toolbar color="greyWhite">\n                <ion-title>Grey White</ion-title>\n              </ion-toolbar>\n        </ion-slide>\n\n        <!-- #id=3 card header card footer - Các thẻ có ảnh, đính ảnh, hiển thị ảnh -->\n        <ion-slide>\n            <ion-card color="secondary">\n                <ion-card-header>\n                  Card Header\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-card-title>\n                    Title\n                  </ion-card-title>\n                  Some normal text in content.\n                  <h3>h3 in content</h3>\n                  <p>\n                    Paragraph in content.\n                  </p>\n                  <p>\n                    Another paragraph in content.\n                  </p>\n                </ion-card-content>\n              </ion-card>\n            \n              <ion-card color="primary" class="rainbow-content">\n                <ion-card-header>\n                  Card Header\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-card-title>\n                    Title\n                  </ion-card-title>\n                  Some normal text in content.\n                  <h3>h3 in content</h3>\n                  <p>\n                    Paragraph in content.\n                  </p>\n                  <p>\n                    Another paragraph in content.\n                  </p>\n                </ion-card-content>\n              </ion-card>\n            \n              <ion-card color="primary">\n                <ion-card-header>\n                  Card Header\n                </ion-card-header>\n                <ion-card-content>\n                  <ion-card-title>\n                    Title\n                  </ion-card-title>\n                  Some normal text in content.\n                  <h3>h3 in content</h3>\n                  <p>\n                    Paragraph in content.\n                  </p>\n                  <p>\n                    Another paragraph in content.\n                  </p>\n                </ion-card-content>\n              </ion-card>\n            \n              <ion-list>\n                <ion-item *ngFor="let item of [0,1,2,3,4,5,6,7,8,9]">\n                  {{ item }}\n                </ion-item>\n              </ion-list>\n        </ion-slide>\n\n        <!-- #id=4 Form nhập liệu -->\n        <ion-slide>\n            <form>\n            <ion-item>\n                <ion-label>Username</ion-label>\n                <ion-input></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label fixed>Website</ion-label>\n                <ion-input type="url"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input type="email"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label stacked>Phone</ion-label>\n                <ion-input type="tel"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label>Toggle</ion-label>\n                <ion-toggle></ion-toggle>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label>Checkbox</ion-label>\n                <ion-checkbox></ion-checkbox>\n              </ion-item>\n\n              <ion-buttons start>\n                  <button ion-button type="submit" icon-end round>\n                      SUBMIT\n                      <ion-icon name="share-alt"></ion-icon>\n                  </button>\n              </ion-buttons>\n\n            </form>\n        </ion-slide>\n\n        <!-- #id=5 - nút cài đặt - nhóm tiêu đề-->\n        <ion-slide>\n          \n            <ion-list>\n                <ion-list-header color="secondary">\n                  Các thiết lập mẫu - Settings\n                  <button ion-button icon-only item-end clear>\n                    <ion-icon name="cog"></ion-icon>\n                  </button>\n                </ion-list-header>\n            \n                <ion-item-group>\n                  <ion-item>\n                    <ion-icon name="plane" item-start color="danger"></ion-icon>\n                    <ion-label>Airplane Mode</ion-label>\n                    <ion-toggle color="secondary"></ion-toggle>\n                  </ion-item>\n            \n                  <button ion-item>\n                    <ion-icon name="wifi" item-start color="primary"></ion-icon>\n                    <ion-label>Wi-Fi</ion-label>\n                    <ion-note item-end>The Interwebz</ion-note>\n                  </button>\n            \n                  <button ion-item>\n                    <ion-icon name="bluetooth" item-start color="primary"></ion-icon>\n                    <ion-label>Bluetooth</ion-label>\n                    <ion-note item-end>Off</ion-note>\n                  </button>\n                </ion-item-group>\n            \n                <ion-item-divider color="primary">\n                  Other Settings\n                  <button ion-button item-end outline color="light">Clear</button>\n                </ion-item-divider>\n            \n                <button ion-item>\n                  <ion-icon name="call" item-start color="secondary"></ion-icon>\n                  <ion-label>Cellular</ion-label>\n                </button>\n            \n                <button ion-item>\n                  <ion-icon name="link" item-start color="secondary"></ion-icon>\n                  <ion-label>Personal Hotspot</ion-label>\n                  <ion-note item-end>Off</ion-note>\n                </button>\n            </ion-list>\n            \n            <ion-list radio-group>\n              <ion-list-header>\n                <ion-icon item-start name="phone-portrait"></ion-icon>\n                Silence Phone\n              </ion-list-header>\n          \n              <ion-item>\n                <ion-label color="dark">Always</ion-label>\n                <ion-radio value="always" checked></ion-radio>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label color="dark">Only while phone is locked</ion-label>\n                <ion-radio value="locked"></ion-radio>\n              </ion-item>\n\n            </ion-list>\n          \n            <ion-list>\n              <ion-list-header>\n                Apps Installed\n              </ion-list-header>\n          \n              <ion-item>\n                <ion-icon name="ionic" item-start color="primary"></ion-icon>\n                <ion-label>Ionic View</ion-label>\n                <button ion-button outline item-end>Uninstall</button>\n              </ion-item>\n              <ion-item>\n                <ion-icon name="brush" item-start color="primary"></ion-icon>\n                <ion-label>Ionic Creator</ion-label>\n                <button ion-button outline item-end>Uninstall</button>\n              </ion-item>\n              <ion-item>\n                <ion-icon name="logo-octocat" item-start color="dark"></ion-icon>\n                <ion-label>Hubstruck</ion-label>\n                <button ion-button outline item-end>Uninstall</button>\n              </ion-item>\n              <ion-item>\n                <ion-icon name="paw" item-start color="danger"></ion-icon>\n                <ion-label>Barkpark</ion-label>\n                <button ion-button outline item-end>Uninstall</button>\n              </ion-item>\n            </ion-list>    \n\n        </ion-slide>\n\n        <!-- #id=6 Sắp xếp lại trật tự của mảng bằng cách kéo thả từng dòng-->\n        <ion-slide>\n          <ion-list class="chat-sliding-demo">\n            <ion-list-header>\n              Playlist\n            </ion-list-header>\n        \n            <ion-item-group [reorder]="editing" (ionItemReorder)="reorderData($event)">\n              <ion-item *ngFor="let song of songs">\n                <h2>{{ song.title }}</h2>\n                <p>{{ song.band }} • {{ song.album }}</p>\n              </ion-item>\n            </ion-item-group>\n          </ion-list>\n        </ion-slide>\n\n        <!-- #id=7 Slide quẹt qua/về để thao tác trên từng dòng có nhiều nút đính kèm-->\n        <ion-slide>\n          \n          <ion-list class="chat-sliding-demo">\n            <ion-list-header>\n              Chats\n            </ion-list-header>\n        \n            <ion-item-sliding *ngFor="let chat of chats" #item>\n              <ion-item>\n                <ion-avatar item-start>\n                  <img [src]="chat.img">\n                </ion-avatar>\n                <h2>{{chat.name}}</h2>\n                <p>{{chat.message}}</p>\n                <ion-note item-end>\n                  {{chat.time}}\n                </ion-note>\n              </ion-item>\n        \n              <ion-item-options>\n                <button ion-button color="secondary" (click)="more(item)">\n                  <ion-icon name="menu"></ion-icon>\n                  More\n                </button>\n                <button ion-button color="dark" (click)="mute(item)">\n                  <ion-icon name="volume-off"></ion-icon>\n                  Mute\n                </button>\n                <button ion-button color="danger" (click)="delete(item)">\n                  <ion-icon name="trash"></ion-icon>\n                  Delete\n                </button>\n              </ion-item-options>\n        \n              <ion-item-options side="left" (ionSwipe)="archive(item)">\n                <button ion-button color="primary" expandable (click)="archive(item)">\n                  <ion-icon name="archive" class="expand-hide"></ion-icon>\n                  <div class="expand-hide">Archive</div>\n                  <ion-spinner id="archive-spinner"></ion-spinner>\n                </button>\n              </ion-item-options>\n            </ion-item-sliding>\n          </ion-list>\n        \n          <ion-list class="login-sliding-demo">\n            <ion-list-header>\n              Logins\n            </ion-list-header>\n        \n            <ion-item-sliding *ngFor="let login of logins" #item>\n              <ion-item>\n                <ion-icon [name]="login.icon" item-start></ion-icon>\n                <h2>{{login.name}}</h2>\n                <p>{{login.username}}</p>\n              </ion-item>\n              <ion-item-options side="left">\n                <button ion-button color="danger">\n                  <ion-icon name="trash"></ion-icon>\n                </button>\n              </ion-item-options>\n              <ion-item-options (ionSwipe)="download(item)" icon-start>\n                <button ion-button color="dark" (click)="more(item)">\n                  <ion-icon name="volume-off"></ion-icon>\n                  Mute\n                </button>\n                <button ion-button color="light" expandable (click)="download(item)">\n                  <ion-icon name="download" class="expand-hide"></ion-icon>\n                  <div class="expand-hide">Download</div>\n                  <ion-spinner id="download-spinner"></ion-spinner>\n                </button>\n              </ion-item-options>\n            </ion-item-sliding>\n        \n          </ion-list>\n          \n        </ion-slide>\n\n        <!-- #id=8 Nút chứa nhiều icon, và nút outline phù hợp từng dòng lệnh-->\n        <ion-slide>\n            <ion-list>\n                <ion-item-divider color="primary">\n                    CÁC KỲ HÓA ĐƠN ĐÃ PHÁT HÀNH\n                  <button *ngIf="billCycles?.length>0" ion-button item-end outline color="danger" (click)="editInvoices()">PHÁT HÀNH LẠI</button>\n                  <button ion-button item-end outline color="light">PHÁT HÀNH MỚI</button>\n                </ion-item-divider>\n                <button ion-item>\n                    <ion-icon name="calculator" item-start color="danger"></ion-icon>\n                    <h2>Kỳ tháng:</h2>\n                    <p>Ngày phát hành </p>\n                    <ion-note>Số lượng khách hàng </ion-note>\n                    <ion-icon name="print" item-end color="primary"></ion-icon>\n                </button>\n          </ion-list>\n        </ion-slide>\n\n    </ion-slides>\n \n</ion-content>\n'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/config/config.html"*/
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

/***/ 139:
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

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_setting__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(254);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login form\n    </ion-title>\n    <ion-buttons start>\n      <img src="assets/imgs/logo.png">\n   </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="card-background-page">\n   <ion-item *ngIf="isShowInfo">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-12 col-xl-4 col-lg-6 col-sm-12>\n                    <ion-card>\n                        <img *ngIf="(serverTokenUserInfo?.image)" [src]="serverTokenUserInfo?.image"/>\n                        <ion-card-content>\n                            <ion-card-title>\n                                {{serverTokenUserInfo?.username}}\n                            </ion-card-title>\n                            <p>{{serverTokenUserInfo?.nickname}}</p>\n                            <p>{{serverTokenUserInfo?.req_time}}</p>\n                        </ion-card-content>\n                        <ion-row>\n                            <ion-col>\n                                <button ion-button type="button" clear small color="secondary" icon-start (click)="callLogout()">\n                                    <ion-icon name=\'backspace\' ios="ios-backspace" md="md-backspace"></ion-icon>\n                                    Logout\n                                </button>\n                            </ion-col>\n                            <ion-col text-right>\n                                <button ion-button type="button" clear small color="secondary" icon-start (click)="callEdit()">\n                                    <ion-icon name=\'share-alt\'></ion-icon>\n                                    Edit\n                                </button>\n                            </ion-col>\n                        </ion-row>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n  </ion-item>\n  <form (ngSubmit)="onSubmit()" [formGroup]="myFromGroup" *ngIf="!(isShowInfo)">\n    <ion-card col-12 col-xl-4 col-lg-6 col-sm-12>\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" formControlName="user"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" formControlName="pass"></ion-input>\n      </ion-item>\n      <ion-row no-padding>\n\n          <ion-col>\n              <ion-buttons start>\n                  <button ion-button type="button" icon-end round (click)="callRegister()">\n                      Đăng ký\n                      <ion-icon name="contact"></ion-icon>\n                  </button>\n              </ion-buttons>\n          </ion-col>\n\n        <ion-col text-right>\n          <ion-buttons start>\n            <button ion-button type="submit" icon-end round>\n              Đăng nhập\n              <ion-icon name="share-alt"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n  </form>\n\n\n  <ion-fab right bottom auto-close-on-click-outside *ngIf="isShowInfo">\n    <button ion-fab mini color="primary">\n      <ion-icon name="arrow-dropleft"></ion-icon>\n    </button>\n    <ion-fab-list side="left">\n      <button color="primary" ion-fab (click)="callHome()">\n        <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/login/login.html"*/
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

/***/ 157:
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

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 209:
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
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicPage = /** @class */ (function () {
    function DynamicPage(platform) {
        this.platform = platform;
        this.itemType = {
            avatar: 10,
            title: 1,
            image: 4,
            text: 2,
            password: 3,
            check: 5,
            radio: 6,
            select: 7,
            toggle: 8,
            button: 9,
            range: 12,
            select_multiple: 17 //output
        };
        this.password_type = 'password';
        this.eye = "eye";
        this.sample = {
            status: "1",
            message: "Form Đăng ký",
            form: {
                id: 1,
                title: "Đăng ký",
                items: [
                    { id: 11, name: "Thông tin cá nhân", type: 1, required: false, options: null },
                    { id: 111, name: "Thông tin cá nhân", hint: "Avatar", type: 10, url: "https://www.w3schools.com/howto/img_forest.jpg" },
                    { id: 21, name: "Chọn hay không chọn?", hint: "Check nào", type: 5, value: 1 },
                    { id: 25, name: "Thanh Trượt", hint: "Kéo nào", type: 12, value: 50, min: 0, max: 100 },
                    { id: 24, name: "Chọn hay không chọn Toggle?", icon: "plane", hint: "Check nào", type: 8 },
                    { id: 22, name: "Chọn radio cái nào", hint: "Check nào", type: 6, icon: "plane", value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                    { id: 23, name: "Chọn cái nào", hint: "Check nào", type: 7, value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                    { id: 26, name: "Chọn nhiều cái nào", hint: "Check nào", type: 17, value: 2, options: [{ name: "Tùy chọn 1", value: 1 }, { name: "Tùy chọn 2", value: 2 }] },
                    { id: 112, name: "Ảnh cá nhân", hint: "image viewer", type: 4, url: "https://www.w3schools.com/howto/img_forest.jpg" },
                    { id: 14, hint: "username", type: 2, input_type: "userName", icon: "information-circle", validators: [{ required: true, min: 9, max: 9, pattern: "^[0-9]*$" }], options: null },
                    { id: 15, hint: "password", type: 3, input_type: "password", icon: "information-circle", required: true, options: null },
                    { id: 12, hint: "Họ và tên", type: 2, input_type: "text", icon: "person", required: false, options: null },
                    { id: 13, hint: "Điện thoại", type: 2, input_type: "tel", icon: "call", required: false, options: null },
                    { id: 16, hint: "email", type: 2, input_type: "email", icon: "mail", required: false, options: null },
                    {
                        id: 19, name: "BUTTON GROUP", type: 9,
                        options: [
                            { name: "Reset", url: "RESET", command: "RESET" },
                            { name: "Exit", url: "EXIT", command: "EXIT" },
                            { name: "Register", url: "http://101.99.50.87/", command: "USER_LOGIN_REDIRECT" },
                            { name: "LOGIN", url: "http://101.99.50.87/", command: "USER_LOGIN_REDIRECT" }
                        ]
                    }
                ]
            }
        };
    }
    DynamicPage.prototype.ngOnInit = function () {
        this.dynamicForm = this.sample.form;
    };
    // btn ẩn hiện mật khẩu
    DynamicPage.prototype.togglePasswordMode = function () {
        this.eye = this.eye === 'eye' ? 'eye-off' : 'eye';
        this.password_type = this.password_type === 'text' ? 'password' : 'text';
    };
    // Xử lý sự kiện click button theo id
    DynamicPage.prototype.onClick = function (btn) {
        console.log('command', btn.url, btn.command);
        if (btn.url == 'EXIT') {
            this.platform.exitApp();
        }
        else if (btn.url == 'RESET') {
            //gan gia tri default parse 
        }
        else if (btn.url) {
            //co link de post
            //kiem tra validator
            //neu valid thi post len server
            //neu khong thi bat invalid 
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
                console.log(el.name, el.id, el.value, 'control:', control.invalid, control.valid);
                return el.invalid;
            });
        }
    };
    DynamicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dynamic',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/dynamic/dynamic.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>{{dynamicForm.title}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-blue gradient">\n\n	<ion-list *ngFor="let it of dynamicForm.items">\n\n		<!-- title -->\n		<ion-item class="background-blue" *ngIf="it.type == itemType.title">\n			<ion-label class="title-item">{{it.name}}</ion-label>\n		</ion-item>\n\n		<!-- title with avatar -->\n		<ion-item class="background-blue" *ngIf="it.type == itemType.avatar">\n			<ion-avatar item-start><img [src]="it.url"></ion-avatar>\n			<h1 item-start class="title-item">{{it.name}}</h1>\n		</ion-item>\n\n		<!-- image -->\n		<ion-grid *ngIf="it.type == itemType.image">\n			<ion-row>\n				<ion-col style="text-align: center;">\n					<img *ngIf="!it.width||!it.height" [src]="it.url">\n					<img *ngIf="it.width&&it.height" [width]="it.width" [height]="it.height" [src]="it.url">\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n\n		<!-- input text -->\n		<ion-item class="input-item" *ngIf="it.type == itemType.text">\n			<ion-label>\n				<ion-icon name="{{it.icon}}"></ion-icon>\n			</ion-label>\n			<ion-input type="{{it.input_type}}" placeholder={{it.name?it.name:it.hint}} [(ngModel)]="it.value"></ion-input>\n			<ion-label color="danger" *ngIf="it.invalid">\n				<span>{{it.hint}}</span>\n			</ion-label>\n		</ion-item>\n\n		<!-- input password -->\n		<ion-item class="input-item" *ngIf="it.type == itemType.password">\n			<ion-label>\n				<ion-icon name="{{it.icon}}"></ion-icon>\n			</ion-label>\n			<ion-input [type]="password_type" placeholder={{it.name?it.name:it.hint}} [(ngModel)]="it.value"></ion-input>\n			<button ion-button clear color="dark" type="button" item-right (click)="togglePasswordMode()">\n				<ion-icon name="{{eye}}"> </ion-icon>\n			</button>\n			<ion-label color="danger" *ngIf="it.invalid">\n				<span>{{it.hint}}</span>\n			</ion-label>\n		</ion-item>\n\n		<!-- check box -->\n		<ion-item class="input-item" *ngIf="it.type == itemType.check">\n			<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n			<ion-checkbox color="primary" [(ngModel)]="it.value"></ion-checkbox>\n		</ion-item>\n\n		<!-- radio select -->\n		<ion-list *ngIf="it.type == itemType.radio" radio-group [(ngModel)]="it.value">\n			<ion-list-header>\n				<ion-icon item-start name="{{it.icon}}"></ion-icon>\n				<ion-label color="dark">{{it.name?it.name:it.hint}}</ion-label>\n			</ion-list-header>\n			<ion-item *ngFor="let myRad of it.options">\n				<ion-label color="secondary">{{myRad.name}}</ion-label>\n				<ion-radio value="{{myRad.value}}"></ion-radio>\n			</ion-item>\n		</ion-list>\n\n		<!-- single select -->\n		<ion-item class="input-item" *ngIf="it.type == itemType.select">\n			<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n			<ion-select [(ngModel)]="it.value">\n				<ion-option *ngFor="let mySet of it.options" value="{{mySet.value}}" >{{mySet.name}}</ion-option>\n			</ion-select>\n		</ion-item>\n\n		<!-- multiple select -->\n		<ion-item class="input-item" *ngIf="it.type == itemType.select_multiple">\n			<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n			<ion-select [(ngModel)]="it.value" multiple="true">\n				<ion-option *ngFor="let mySet of it.options" value="{{mySet.value}}">{{mySet.name}}</ion-option>\n			</ion-select>\n		</ion-item>\n\n		<!-- toggle check -->\n		<ion-item class="input-item" *ngIf="it.type == itemType.toggle">\n			<ion-icon name="{{it.icon}}" item-start color="primary"></ion-icon>\n			<ion-label color="primary">{{it.name?it.name:it.hint}}</ion-label>\n			<ion-toggle color="secondary" [(ngModel)]="it.value"></ion-toggle>\n		</ion-item>\n\n		<!-- range adjust -->\n		<ion-item class="input-item" *ngIf="it.type == itemType.range">\n			<ion-range min="{{it.min}}" max="{{it.max}}" pin="true" [(ngModel)]="it.value" color="primary">\n				<ion-icon range-left small name="contrast"></ion-icon>\n				<ion-icon range-right name="contrast"></ion-icon>\n			</ion-range>\n		</ion-item>\n\n		<!-- button action -->\n		<ion-grid *ngIf="it.type == itemType.button">\n			<ion-row>\n				<ion-col *ngFor="let myBtn of it.options" style="text-align: center;">\n					<button class="button-item" [(ngStyle)]="pageContent" ion-button round (click)="onClick(myBtn)">\n						{{myBtn.name}}\n					</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/dynamic/dynamic.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */]) === "function" && _a || Object])
    ], DynamicPage);
    return DynamicPage;
    var _a;
}());

//# sourceMappingURL=dynamic.js.map

/***/ }),

/***/ 254:
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-form-background">\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n    <!-- #id=0 -->\n    <ion-slide>\n      <div class="wrapper">\n        <form class="login-form">\n\n            <ion-item>\n                <ion-buttons start>\n                    <button ion-button type="button" icon-end round>\n                        <input type="file" accept="image/*" (change)="fileChange($event)">\n                        Avantar - Ảnh đại diện\n                        <ion-icon name="images"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </ion-item>\n\n          <ion-item>\n            <ion-label floating>Nhập số điện thoại</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n\n          <ion-buttons start>\n            <button ion-button type="button" icon-end round>\n              Yêu cầu xác thực\n              <ion-icon name="share-alt"></ion-icon>\n            </button>\n          </ion-buttons>\n        </form>\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(140);
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
            selector: 'page-register',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Register form\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="card-background-page">\n  <form (ngSubmit)="onSubmit()" [formGroup]="myFromGroup">\n    <ion-card col-12 col-xl-4 col-lg-6 col-sm-12>\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" formControlName="user"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" formControlName="pass"></ion-input>\n      </ion-item>\n      <ion-row no-padding>\n\n        <ion-col text-right>\n          <ion-buttons start>\n            <button ion-button type="submit" icon-end round>\n              Đăng ký\n              <ion-icon name="share-alt"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        \n      </ion-row>\n\n    </ion-card>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/register/register.html"*/
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_webstorage_service__ = __webpack_require__(253);
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

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiImageService__ = __webpack_require__(157);
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
            selector: 'page-setting',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/setting/setting.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Thay đổi thông tin cá nhân\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="card-background-page">\n  <form (ngSubmit)="onSubmit()" [formGroup]="myFromGroup">\n    <ion-card col-12 col-xl-4 col-lg-6 col-sm-12>\n      <ion-item>\n        <ion-label floating>Nick Name - Tên hiển thị</ion-label>\n        <ion-input type="text" formControlName="DISPLAY_NAME"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label floating>Full Name - Tên Đầy đủ</ion-label>\n          <ion-input type="text" formControlName="FULL_NAME"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label floating>Phone - Điện thoại</ion-label>\n          <ion-input type="text" formControlName="PHONE"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label floating>Email - Hộp thư điện tử</ion-label>\n          <ion-input type="text" formControlName="EMAIL"></ion-input>\n      </ion-item>\n      <ion-item>\n          <ion-label floating>Address - Địa chỉ đầy đủ</ion-label>\n          <ion-input type="text" formControlName="FULL_ADDRESS"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="(userInfo?.URL_IMAGE)">\n          <ion-grid>\n              <ion-row>\n                  <ion-col col-12>\n                      <ion-card>\n                          <img [src]="userInfo?.URL_IMAGE"/>\n                      </ion-card>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-item>\n\n      <ion-item *ngIf="isImageViewer">\n          <ion-grid>\n              <ion-row>\n                  <ion-col *ngFor="let obj of resourceImages" col-12>\n                      <ion-card>\n                          <img [src]="obj?.imageViewer" style="width: 100%; height: 100%;" />\n                          <ion-row>\n                              <ion-col>\n                                  <button ion-button type="button" clear small color="secondary" icon-start (click)="deleteImage(obj)">\n                                      <ion-icon name=\'backspace\' ios="ios-backspace" md="md-backspace"></ion-icon>\n                                      Xóa bỏ\n                                  </button>\n                              </ion-col>\n                          </ion-row>\n                      </ion-card>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-item>\n      \n    <ion-item>  \n      <ion-buttons start>\n          <button ion-button type="button" icon-end round>\n              <input type="file" expandable accept="image/*" formControlName="fileload" (change)="fileChange($event)">\n              Avantar - Chọn ảnh đại diện\n              <ion-icon name="images"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-item>\n\n      <ion-row no-padding>\n        <ion-col text-right>\n          <ion-buttons start>\n            <button ion-button type="submit" icon-end round>\n              Cập nhập\n              <ion-icon name="share-alt"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n\n    </ion-card>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/setting/setting.html"*/
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

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_customer__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_invoice__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report__ = __webpack_require__(307);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Khách hàng" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Hóa đơn" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Báo cáo" tabIcon="document"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiResourceServices__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parameters_parameters__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_config__ = __webpack_require__(138);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], CustomerPage.prototype, "slides", void 0);
    CustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/customer/customer.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-buttons *ngIf="!isSearch" start>\n      <button ion-button icon-only color="royal" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n\n      <button ion-button icon-only color="primary" (click)="userAction()" [disabled]="userInfo?false:true">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only color="secondary" (click)="goParameters()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n    <ion-searchbar *ngIf="isSearch" placeholder="Tìm theo mã/tên khách hàng/khu vực/người quản lý hoặc số điện thoại"\n      [(ngModel)]="searchString"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="onInput($event)"\n      (keyup.enter)="searchEnter()"\n      (keyup.esc)="searchEnter()"\n      start>\n    </ion-searchbar>\n    \n    <ion-title *ngIf="!isSearch">CUSTOMER</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n      <!-- #id=0 -->\n      <ion-slide>\n          <ion-list>\n              <button ion-item *ngFor="let customer of customers" (click)="gotoSlideEdit(customer)">\n                \n                <ion-avatar item-start>\n                  <img src={{customer.image}} *ngIf="customer.image">\n                  \n                  <button ion-button icon-only color="secondary" round *ngIf="!customer.image">\n                      <ion-icon name="contact"></ion-icon>\n                  </button>\n\n                </ion-avatar>\n                \n                <h2>{{customer.cust_id}} - {{customer.full_name}}</h2>\n                <p>{{customer.area}} ({{customer.staff}})</p>\n                <ion-note>{{customer.cust_type}} {{customer.charge}} </ion-note>\n              </button>\n          </ion-list>\n      </ion-slide>\n      \n      <!-- #id=1 -->\n      <ion-slide>\n          <form [formGroup]="myFromGroup" (ngSubmit)="onSubmit()">\n\n              <ion-item>\n                <ion-label floating>Họ và Tên</ion-label>\n                <ion-input formControlName="full_name" type="text"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label floating>Địa chỉ</ion-label>\n                <ion-input formControlName="address" type="address"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label floating>Điện thoại</ion-label>\n                <ion-input formControlName="phone" type="phone"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label floating>Email</ion-label>\n                <ion-input formControlName="email" type="email"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label floating>Khu vực quản lý</ion-label>\n                <ion-input formControlName="area" type="text"></ion-input>\n              </ion-item>\n              \n              <ion-item>\n                <ion-label floating>Loại khách hàng</ion-label>\n                <ion-input formControlName="type" type="text"></ion-input>\n              </ion-item>\n              \n              <ion-row>\n                <ion-col text-center col-12 col-xl-3 col-lg-4 col-sm-6>\n                  <button ion-button block color="primary" type="button" (click)="goBack()">\n                    Trở về\n                  </button>\n                </ion-col>\n                <ion-col text-center col-12 offset-xl-6 col-xl-3 offset-lg-4 col-lg-4 col-sm-6>\n                  <button ion-button block color="primary" type="submit">\n                    Thay đổi\n                  </button>\n                </ion-col>\n              </ion-row>\n              \n            </form>\n      </ion-slide>\n  \n      <!-- #id=2 -->\n      <!-- #id=4 -->\n      <!-- #id=5 -->\n      <!-- #id=6 -->\n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/customer/customer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__["a" /* ApiAuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiResourceServices__["a" /* ApiResourceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CustomerPage);
    return CustomerPage;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiHttpPublicServices__ = __webpack_require__(139);
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
            selector: 'page-parameters',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/parameters/parameters.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title *ngIf="!isSearch">CÁC THAM SỐ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    \n    <ion-item *ngFor="let p of parameters">\n      <ion-row>\n        <ion-col text-left col-6 col-xl-3 col-lg-4 col-md-5 col-sm-5>\n          <ion-buttons>\n            <button ion-button color="secondary" outline icon-only (click)="selectGroup(p)">\n              <ion-icon [name]="p.icon?p.icon:\'arrow-dropdown-circle\'"></ion-icon>\n              {{ p.type }}.{{ p.code?p.code:p.id }} • {{ p.description }}\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col class="hidden-sm-down" text-center col-xl-2 col-lg-2 col-md-2 col-sm-3>\n            {{ p.name }}\n        </ion-col>\n        <ion-col class="hidden-md-down" text-center col-xl-1 col-lg-1 col-md-1>\n            {{ p.code }}\n        </ion-col>\n        <ion-col text-right col-4 col-xl-2 col-lg-2 col-md-2 col-sm-2>\n            {{ p.value }}\n        </ion-col>\n        <ion-col text-right col-2 offset-xl-2 col-xl-2 offset-lg-1 col-lg-2 col-md-2 col-sm-2>\n            {{ p.order_1 }}\n        </ion-col>\n        </ion-row>\n        \n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n      <ion-toolbar color="primary">\n          <ion-buttons start>\n            <button ion-button color="secondary" outline icon-only class="activated" (click)="addGroupParameters()"  *ngIf="groupName?.length > 0">\n              <ion-icon name="add"></ion-icon>\n            </button>\n          </ion-buttons>\n          <ion-buttons end>\n              <button ion-button outline icon-start class="activated" (click)="toggleEdit()" *ngIf="children?.length > 1">\n                <ion-icon name="swap"></ion-icon>\n                {{editButton}}\n              </button>\n            </ion-buttons>\n          <ion-row>\n              <ion-col text-center col-6 col-xl-3 col-lg-4 col-md-5 col-sm-5>\n                  <ion-title>{{groupName}}</ion-title>\n              </ion-col>\n              <ion-col class="hidden-sm-down" text-center col-xl-2 col-lg-2 col-md-2 col-sm-3>\n                  <ion-title>Tên</ion-title>\n              </ion-col>\n              <ion-col class="hidden-md-down" text-center col-xl-1 col-lg-1 col-md-1>\n                  <ion-title>Mã(code)</ion-title>\n              </ion-col>\n              <ion-col text-right col-4 col-xl-2 col-lg-2 col-md-2 col-sm-2>\n                  <ion-title>Giá trị</ion-title>\n              </ion-col>\n              <ion-col text-right col-2 offset-xl-2 col-xl-2 offset-lg-1 col-lg-2 col-md-2 col-sm-2>\n                  <ion-title>Thứ tự</ion-title>\n              </ion-col>\n          </ion-row>\n      </ion-toolbar>\n      <ion-item-group [reorder]="editing" (ionItemReorder)="reorderData($event)">\n        <ion-item-sliding *ngFor="let ch of children" #item>\n          <ion-item>\n            <ion-icon [name]="ch.icon?ch.icon:\'logo-google\'" item-start></ion-icon>\n            <ion-row>\n              <ion-col text-left col-6 col-xl-3 col-lg-4 col-md-5 col-sm-5>\n                  {{ ch.type }}.{{ ch.code?ch.code:ch.id }} • {{ ch.description }}\n              </ion-col>\n              <ion-col class="hidden-sm-down" text-center col-xl-2 col-lg-2 col-md-2 col-sm-3>\n                {{ ch.name }}\n              </ion-col>\n              <ion-col class="hidden-md-down" text-center col-xl-1 col-lg-1 col-md-1>\n                {{ ch.code }}\n              </ion-col>\n              <ion-col text-right col-4 col-xl-2 col-lg-2 col-md-2 col-sm-2>\n                {{ ch.value }}\n              </ion-col>\n              <ion-col text-right col-2 offset-xl-2 col-xl-2 offset-lg-1 col-lg-2 col-md-2 col-sm-2>\n                {{ ch.order_1 }}\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n          <ion-item-options side="left">\n              <button ion-button color="danger">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-item-options>\n\n            <ion-item-options (ionSwipe)="download(item)" icon-start>\n              <button ion-button color="dark" (click)="more(item)">\n                <ion-icon name="volume-off"></ion-icon>\n                Mute\n              </button>\n              <button ion-button color="light" expandable (click)="download(item)">\n                <ion-icon name="download" class="expand-hide"></ion-icon>\n                <div class="expand-hide">Download</div>\n                <ion-spinner id="download-spinner"></ion-spinner>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n      </ion-item-group>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/parameters/parameters.html"*/
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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiResourceServices__ = __webpack_require__(86);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], InvoicePage.prototype, "slides", void 0);
    InvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoice',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/invoice/invoice.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-buttons *ngIf="!isSearch&&slideIndex>0" start>\n      <button ion-button icon-only color="royal" (click)="goBack()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n    <ion-buttons *ngIf="!isSearch" end>\n        <button ion-button icon-only color="primary" [disabled]="userInfo?false:true">\n            <ion-icon name="contact"></ion-icon>\n        </button>\n    </ion-buttons>\n\n    <ion-buttons *ngIf="!isSearch&&slideIndex===1" end>\n      <button ion-button icon-only color="royal" (click)="goSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-searchbar *ngIf="isSearch" placeholder="Tìm theo mã/tên khách hàng/khu vực/người quản lý hoặc số điện thoại"\n      [(ngModel)]="searchString" [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" (keyup.enter)="searchEnter()"\n      (keyup.esc)="searchEnter()" start>\n    </ion-searchbar>\n\n    <ion-title *ngIf="!isSearch">INVOICES - HÓA ĐƠN</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="gradient"></div>\n  <ion-slides (ionSlideDidChange)="slideChanged()">\n    <!-- #id=0 - home : Liệt kê các kỳ của hóa đơn-->\n    <ion-slide>\n        \n        <ion-list>\n\n            <ion-toolbar color="primary">\n                <ion-buttons end>\n                  <button ion-button icon-start outline color="light" class="activated" (click)="createInvoices()">\n                    <ion-icon name="contact"></ion-icon>\n                    PHÁT HÀNH MỚI\n                  </button>\n                </ion-buttons>\n                <ion-title class="left">CÁC KỲ HÓA ĐƠN ĐÃ PHÁT HÀNH</ion-title>\n            </ion-toolbar>\n\n            <ion-item-sliding #slidingItem *ngFor="let billCycle of billCycles">\n              <ion-item #item>\n                  <ion-avatar item-start *ngIf="!isMobile">\n                    <button ion-item item-start>\n                        <ion-icon name="calculator" item-start color="danger"></ion-icon>\n                    </button>\n                  </ion-avatar>\n                  <h1>Kỳ tháng: {{billCycle.bill_cycle_vn}}</h1>\n                  <h2>Ngày phát hành: {{billCycle.bill_date_vn}}</h2>\n                  <p>Số lượng khách hàng: {{billCycle.count_customer}}</p>\n                  <ion-note>Số hóa đơn cuối: {{billCycle.invoice_no_min}} - {{billCycle.invoice_no}}</ion-note>\n                 \n                  <ion-avatar item-end *ngIf="!isSlidingItemOpen&&!isMobile">\n                      <button ion-item item-end (click)="openSwipeOptions(slidingItem,item)">\n                          <ion-icon name="arrow-dropleft-circle" item-end color="secondary"></ion-icon>\n                      </button>\n                  </ion-avatar>\n                  \n                  <ion-buttons item-end *ngIf="isSlidingItemOpen&&!isMobile">\n                      <button icon-only color="primary" (click)="closeSwipeOptions(slidingItem)">\n                          <ion-icon name="arrow-dropright-circle" color="primary"></ion-icon> \n                      </button>\n                  </ion-buttons>\n\n              </ion-item>\n    \n              <ion-item-options>\n                <button ion-button color="danger" (click)="editInvoices(slidingItem,billCycle)">\n                  <ion-icon name="calculator" ios="ios-calculator" md="md-calculator"></ion-icon>\n                  Phát hành lại\n                </button>\n                <button ion-button color="primary" (click)="createPdfInvoices(slidingItem,billCycle)">\n                  <ion-icon name="print" ios="ios-print" md="md-print"></ion-icon>\n                  Tạo bản in\n                </button>\n                <button ion-button color="secondary" (click)="getInvoices(slidingItem,billCycle)">\n                  <ion-icon name="list-box" ios="ios-list-box" md="md-list-box"></ion-icon>\n                  Xem danh sách\n                </button>\n              </ion-item-options>\n        \n            </ion-item-sliding>\n\n          </ion-list>\n            \n    </ion-slide>\n\n    <!-- #id=1 - create_invoice : Gọi phát hành/phát hành lại kỳ cước -->\n    <ion-slide>\n        <div class="wrapper">\n            <form class="login-form" (ngSubmit)="onSubmitCreateInvoices()" [formGroup]="cycleFormGroup">\n                <ion-item>\n                    <ion-label floating>Tháng - MM/YYYY(*)</ion-label>\n                    <ion-input  [disabled]="true" type="text" formControlName="bill_cycle"></ion-input>\n                    <ion-label *ngIf="cycleFormGroup.controls.bill_cycle.invalid && cycleFormGroup.controls.bill_cycle.touched">\n                        <span class="error">Vui lòng nhập kỳ phát hành dạng MM/YYYY</span>\n                    </ion-label>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label floating>Ngày phát hành (*)</ion-label>\n                    <ion-input type="text" formControlName="bill_date"></ion-input>\n                    <ion-label *ngIf="cycleFormGroup.controls.bill_date.invalid && cycleFormGroup.controls.bill_date.touched">\n                      <span class="error">Vui lòng nhập ngày phát hành hóa đơn dạng DD/MM/YYYY</span>\n                    </ion-label>  \n                </ion-item>\n\n                <ion-item>\n                    <ion-label floating>Số hóa đơn bắt đầu (*)</ion-label>\n                    <ion-input type="text" formControlName="invoice_no"></ion-input>\n                    <ion-label *ngIf="cycleFormGroup.controls.invoice_no.invalid && cycleFormGroup.controls.invoice_no.touched">\n                        <span class="error">Vui lòng nhập chỉ số hóa đơn bắt đầu</span>\n                    </ion-label>\n                </ion-item>\n\n                <ion-buttons start>\n                    <button ion-button type="submit" icon-end round [disabled]="cycleFormGroup.controls.bill_cycle.invalid || cycleFormGroup.controls.bill_date.invalid || cycleFormGroup.controls.invoice_no.invalid">\n                        Phát hành hóa đơn\n                        <ion-icon name="share-alt"></ion-icon>\n                    </button>\n                </ion-buttons>\n            </form>\n        </div>\n    </ion-slide>\n\n    <!-- #id=2 - list_invoice : Gọi lấy bản phát hành tìm kiếm và phát hành lẻ, bản in lẻ ..  -->\n    <ion-slide>\n\n      <ion-list>\n        <button ion-item *ngFor="let invoice of jsonInvoices" (click)="gotoSlideInvoicesDetail(invoice)">\n            <ion-avatar item-start>\n                <img src={{invoice.image}} *ngIf="invoice.image">\n                <button ion-button icon-only color="primary" round *ngIf="!invoice.image">\n                    <ion-icon name="contact"></ion-icon>\n                </button>\n              </ion-avatar>\n          <h2>{{invoice.full_name}}</h2>\n          <p>{{invoice.address}}</p>\n          <ion-note>{{invoice.sum_charge}} - {{invoice.bill_date}}</ion-note>\n        </button>\n      </ion-list>\n\n    </ion-slide>\n    \n    <!-- #id=3 - load_pdf : Gọi tạo file pdf và hiển thị bản in pdf trong khung -->\n    <ion-slide>\n\n        <iframe *ngIf="pdfLink" [src]="pdfLink" width=100% height=100% frameborder="1" allowfullscreen sandbox="allow-same-origin allow-scripts"></iframe>\n\n    </ion-slide>\n\n\n    <!-- #id=4 -->\n    <!-- #id=5 -->\n    <!-- #id=6 -->\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/invoice/invoice.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__["a" /* ApiStorageService */],
            __WEBPACK_IMPORTED_MODULE_6__services_apiResourceServices__["a" /* ApiResourceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], InvoicePage);
    return InvoicePage;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 307:
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
            selector: 'page-report',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/report/report.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Item Reorder</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n\n  <ion-list class="chat-sliding-demo">\n    <ion-list-header>\n      Chats\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor="let chat of chats" #item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img [src]="chat.img">\n        </ion-avatar>\n        <h2>{{chat.name}}</h2>\n        <p>{{chat.message}}</p>\n        <ion-note item-end>\n          {{chat.time}}\n        </ion-note>\n      </ion-item>\n\n      <ion-item-options>\n        <button ion-button color="secondary" (click)="more(item)">\n          <ion-icon name="menu"></ion-icon>\n          More\n        </button>\n        <button ion-button color="dark" (click)="mute(item)">\n          <ion-icon name="volume-off"></ion-icon>\n          Mute\n        </button>\n        <button ion-button color="danger" (click)="delete(item)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="left" (ionSwipe)="archive(item)">\n        <button ion-button color="primary" expandable (click)="archive(item)">\n          <ion-icon name="archive" class="expand-hide"></ion-icon>\n          <div class="expand-hide">Archive</div>\n          <ion-spinner id="archive-spinner"></ion-spinner>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-list class="login-sliding-demo">\n    <ion-list-header>\n      Logins\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor="let login of logins" #item>\n      <ion-item>\n        <ion-icon [name]="login.icon" item-start></ion-icon>\n        <h2>{{login.name}}</h2>\n        <p>{{login.username}}</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="danger">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n      <ion-item-options (ionSwipe)="download(item)" icon-start>\n        <button ion-button color="dark" (click)="more(item)">\n          <ion-icon name="volume-off"></ion-icon>\n          Mute\n        </button>\n        <button ion-button color="light" expandable (click)="download(item)">\n          <ion-icon name="download" class="expand-hide"></ion-icon>\n          <div class="expand-hide">Download</div>\n          <ion-spinner id="download-spinner"></ion-spinner>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/report/report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

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

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_printer_printer__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_phone_login_phone__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dynamic_dynamic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_setting_setting__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sample_icons_sample_icons__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_config_config__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_pdf_pdf__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_parameters_parameters__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_customer_customer__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_invoice_invoice__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_report_report__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angular_webstorage_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_apiImageService__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_apiHttpPublicServices__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_apiResourceServices__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__interceptors_requestInterceptor__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__interceptors_responseInterceptor__ = __webpack_require__(509);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_dynamic_dynamic__["a" /* DynamicPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_parameters_parameters__["a" /* ParametersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_invoice_invoice__["a" /* InvoicePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_printer_printer__["a" /* PrinterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sample_icons_sample_icons__["a" /* SampleIconsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_config_config__["a" /* ConfigPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23_angular_webstorage_service__["b" /* StorageServiceModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_phone_login_phone__["a" /* LoginPhonePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dynamic_dynamic__["a" /* DynamicPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_parameters_parameters__["a" /* ParametersPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_invoice_invoice__["a" /* InvoicePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_printer_printer__["a" /* PrinterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_sample_icons_sample_icons__["a" /* SampleIconsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_config_config__["a" /* ConfigPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_26__services_apiAuthService__["a" /* ApiAuthService */],
                __WEBPACK_IMPORTED_MODULE_27__services_apiImageService__["a" /* ApiImageService */],
                __WEBPACK_IMPORTED_MODULE_24__services_apiStorageService__["a" /* ApiStorageService */],
                __WEBPACK_IMPORTED_MODULE_29__services_apiResourceServices__["a" /* ApiResourceService */],
                __WEBPACK_IMPORTED_MODULE_28__services_apiHttpPublicServices__["a" /* ApiHttpPublicService */],
                __WEBPACK_IMPORTED_MODULE_30__interceptors_requestInterceptor__["a" /* RequestInterceptor */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_30__interceptors_requestInterceptor__["a" /* RequestInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_31__interceptors_responseInterceptor__["a" /* ResponseInterceptor */],
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

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dynamic_dynamic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_config_config__ = __webpack_require__(138);
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
        if (this.isWeb) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_config_config__["a" /* ConfigPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_dynamic_dynamic__["a" /* DynamicPage */];
        }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
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

/***/ 426:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 427:
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
                console.log('Public key: ', jsonData);
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
    ApiAuthService.prototype.injectToken = function () {
        this.reqInterceptor.setRequestToken(this.userToken.token);
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

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
            selector: 'page-printer',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/printer/printer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <button color="primary" ion-fab (click)="printPdfWithModal()">\n        <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n    </button>\n\n    <button color="primary" ion-fab (click)="printJson()">\n        <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/printer/printer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_apiAuthService__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiResourceServices__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiStorageService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiImageService__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(302);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], LoginPhonePage.prototype, "slides", void 0);
    LoginPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-phone',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/login-phone/login-phone.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>AUTHENTICATION - XÁC THỰC</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-form-background">\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n        <!-- #id=0 -->\n        <ion-slide>\n            <div class="wrapper">\n                <form class="login-form" (ngSubmit)="onSubmit()" [formGroup]="phoneFormGroup">\n                    <ion-item>\n                        <ion-label floating>Nhập số điện thoại (*)</ion-label>\n                        <ion-input type="text" formControlName="phone"></ion-input>\n                    </ion-item>\n                    <p *ngIf="phoneFormGroup.controls.phone.invalid && phoneFormGroup.controls.phone.touched">\n                        <span class="error">Vui lòng nhập số điện thoại di động gồm 9 chữ số KHÔNG CÓ số 0 ở đầu</span>\n                    </p>\n                    <ion-buttons start>\n                        <button ion-button type="submit" icon-end round [disabled]="!phoneFormGroup.controls.phone.valid">\n                            Yêu cầu xác thực\n                            <ion-icon name="share-alt"></ion-icon>\n                        </button>\n                    </ion-buttons>\n                </form>\n            </div>\n        </ion-slide>\n\n        <!-- #id=1 -->\n        <ion-slide>\n            <div class="wrapper">\n                <form class="login-form" (ngSubmit)="onSubmitKey()" [formGroup]="keyFormGroup">\n                    <ion-item>\n                        <ion-label floating>Nhập mã OTP gửi đến điện thoại (*)</ion-label>\n                        <ion-input type="text" formControlName="key"></ion-input>\n                    </ion-item>\n                    <p *ngIf="keyFormGroup.controls.key.invalid && keyFormGroup.controls.key.touched">\n                        <span class="error">Vui lòng nhập mã OTP có 6 chữ cái và số không có số 0</span>\n                    </p>\n                    <ion-buttons start>\n                        <button ion-button type="submit" icon-end round [disabled]="!keyFormGroup.controls.key.valid">\n                            Xác thực OTP\n                            <ion-icon name="share-alt"></ion-icon>\n                        </button>\n                    </ion-buttons>\n                </form>\n            </div>\n        </ion-slide>\n\n        <!-- #id=2 dang ky user, pass, ho ten, dia chi, email,  -->\n        <ion-slide>\n            <div class="wrapper user-info">\n                <form class="login-form" (ngSubmit)="onSubmitUserInfo()" [formGroup]="userFromGroup">\n                    <ion-item>\n                        <ion-label floating>Password - Mật khẩu(*)</ion-label>\n                        <ion-input type="password" formControlName="password"></ion-input>\n                    </ion-item>\n                    <p *ngIf="userFromGroup.controls.password.invalid && userFromGroup.controls.password.touched">\n                        <span class="error">Vui lòng nhập mật khẩu tối thiểu 6 chữ số chứa ít nhất 1 chữ hoa, 1 chữ\n                            thường và 1 ký tự đặc biệt</span>\n                    </p>\n                    <ion-item>\n                        <ion-label floating>Nick Name - Tên hiển thị(*)</ion-label>\n                        <ion-input type="nickname" formControlName="nickname"></ion-input>\n                    </ion-item>\n                    <p *ngIf="userFromGroup.controls.nickname.invalid && userFromGroup.controls.nickname.touched">\n                        <span class="error">Vui lòng nhập tên bí danh (nickname) để gợi nhớn tối thiểu 10 ký tự</span>\n                    </p>\n                    <ion-item>\n                        <ion-label floating>Full Name - Họ và tên đầy đủ(*)</ion-label>\n                        <ion-input type="name" formControlName="name"></ion-input>\n                    </ion-item>\n                    <p *ngIf="userFromGroup.controls.name.invalid && userFromGroup.controls.name.touched">\n                        <span class="error">Vui lòng nhập họ và tên đầy đủ bằng tiếng việt có dấu rõ ràng</span>\n                    </p>\n                    <ion-item>\n                        <ion-label floating>Email - Hộp thư điện tử</ion-label>\n                        <ion-input type="email" formControlName="email"></ion-input>\n                    </ion-item>\n                    <p *ngIf="userFromGroup.controls.email.invalid && userFromGroup.controls.email.touched">\n                        <span class="error">nhập định dạng email chính xác</span>\n                    </p>\n                    <ion-item>\n                        <!-- (địa chỉ tự động sinh ra theo location) -->\n                        <ion-label floating>Address - Địa chỉ đầy đủ</ion-label>\n                        <ion-input type="address" formControlName="address"></ion-input>\n                    </ion-item>\n                    <p *ngIf="userFromGroup.controls.address.invalid && userFromGroup.controls.address.touched">\n                        <span class="error">Vui lòng nhập địa chỉ rõ ràng theo vị trí liên lạc của bạn</span>\n                    </p>\n\n                    <ion-buttons start>\n                        <button ion-button type="submit" icon-end round>\n                            Cập nhập\n                            <ion-icon name="share-alt"></ion-icon>\n                        </button>\n                    </ion-buttons>\n\n                </form>\n            </div>\n\n        </ion-slide>\n\n        <!-- #id=3 dang ky anh dai dien  -->\n        <ion-slide>\n            <div class="wrapper">\n                <form class="login-form" (ngSubmit)="onSubmitImage()" [formGroup]="imageFormGroup">\n\n                    <ion-item *ngIf="isImageViewer">\n                        <ion-row>\n                            <ion-col *ngFor="let obj of resourceImages" col-12>\n                                <ion-card>\n                                    <img [src]="obj?.imageViewer" style="width: 100%; height: 100%;" />\n                                </ion-card>\n                            </ion-col>\n                        </ion-row>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-buttons start>\n                            <button ion-button type="button" icon-end round>\n                                <input type="file" accept="image/*" formControlName="image" (change)="fileChange($event)">\n                                Avantar - Ảnh đại diện\n                                <ion-icon name="images"></ion-icon>\n                            </button>\n                        </ion-buttons>\n                    </ion-item>\n\n                    <ion-buttons start>\n                        <button ion-button type="submit" icon-end round>\n                            Cập nhập\n                            <ion-icon name="share-alt"></ion-icon>\n                        </button>\n                    </ion-buttons>\n\n                </form>\n            </div>\n        </ion-slide>\n\n    </ion-slides>\n\n    <div class="gradient"></div>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/login-phone/login-phone.html"*/
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

//# sourceMappingURL=login-phone.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleIconsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_icon_icons__ = __webpack_require__(507);
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
            selector: 'page-sample-icons',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/sample-icons/sample-icons.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-item>\n\n      <ion-searchbar item-start placeholder="Tìm để lọc biểu tượng" (ionInput)="searchIcons($event)" (ionClear)="resetFilter($event)"></ion-searchbar>\n      <ion-select item-end [(ngModel)]="iconType">\n          <ion-option *ngFor="let type of iconTypeList" value="{{type.value}}">{{type.name}}</ion-option>\n      </ion-select>\n\n    </ion-item>\n\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf="iconType==iconTypes.icon">\n    <ion-icon *ngFor="let icon of icons" (click)="selectIcon(icon)" name={{icon}} color="primary"></ion-icon>\n  </ion-list>\n      \n  <ion-list *ngIf="iconType==iconTypes.list">\n    <ion-item *ngFor="let icon of icons" (click)="selectIcon(icon)">\n        <ion-icon name={{icon}} item-start></ion-icon>\n        <ion-label>{{icon}}</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngIf="iconType==iconTypes.avatar">\n      <ion-grid>\n          <ion-row *ngFor="let icon of icons" (click)="selectIcon(icon)">\n            <ion-col>\n              <ion-avatar item-start>\n                <ion-icon name={{icon}} item-start></ion-icon>\n              </ion-avatar>\n              <h1>{{icon}}</h1>\n              <h2>Finn</h2>\n              <h3>Don\'t Know What To Do!</h3>\n              <p>I\'ve had a pretty messed up day. If we just...</p>\n            </ion-col>\n          </ion-row>  \n      </ion-grid>\n  </ion-list>\n\n  <ion-list *ngIf="iconType==iconTypes.button">\n    <button ion-button type="button" round *ngFor="let icon of icons" (click)="selectIcon(icon)" color="primary">\n      <ion-icon name={{icon}}></ion-icon>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/sample-icons/sample-icons.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SampleIconsPage);
    return SampleIconsPage;
}());

//# sourceMappingURL=sample-icons.js.map

/***/ }),

/***/ 507:
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

/***/ 508:
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
            selector: 'page-pdf',template:/*ion-inline-start:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/pdf/pdf.html"*/'\n<ion-header>\n\n    <ion-toolbar>\n      <ion-title>Select Item: Multiple Value</ion-title>\n    </ion-toolbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class="outer-content">\n  \n    <ion-item>\n      <ion-label>Toppings</ion-label>\n      <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Nah" okText="Okay!" class="e2eSelectToppings">\n        <ion-option value="bacon">Bacon</ion-option>\n        <ion-option value="olives">Black Olives</ion-option>\n        <ion-option value="xcheese">Extra Cheese</ion-option>\n        <ion-option value="peppers">Green Peppers</ion-option>\n        <ion-option value="mushrooms">Mushrooms</ion-option>\n        <ion-option value="onions">Onions</ion-option>\n        <ion-option value="pepperoni">Pepperoni</ion-option>\n        <ion-option value="pineapple" (ionSelect)="toppingsSelect($event)">Pineapple</ion-option>\n        <ion-option value="sausage">Sausage</ion-option>\n        <ion-option value="Spinach">Spinach</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Car Features</ion-label>\n      <ion-select [(ngModel)]="carFeatures" [multiple]="true" (ionChange)="carChange($event)">\n        <ion-option value="backupcamera">Backup Camera</ion-option>\n        <ion-option value="heatedseats">Headted Seats</ion-option>\n        <ion-option value="keyless">Keyless Entry</ion-option>\n        <ion-option value="navigation">Navigation</ion-option>\n        <ion-option value="parkingassist">Parking Assist</ion-option>\n        <ion-option value="sunroof">Sun Roof</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Pets</ion-label>\n      <ion-select [(ngModel)]="pets" multiple>\n        <ion-option *ngFor="let o of petOptions" [value]="o.value">{{o.text}}</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Disabled</ion-label>\n      <ion-select multiple disabled>\n        <ion-option selected="true">Selected Text</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Statuses</ion-label>\n      <ion-select multiple [(ngModel)]="status">\n        <ion-option value="selected" selected="true">Selected</ion-option>\n        <ion-option value="default">Default</ion-option>\n        <ion-option value="disabled" disabled="true">Disabled</ion-option>\n      </ion-select>\n    </ion-item>\n  \n    <p aria-hidden="true" padding>\n      <code>toppings: {{toppings}}</code><br>\n      <code>carFeatures: {{carFeatures}}</code><br>\n      <code>pets: {{pets}}</code><br>\n    </p>\n  \n    <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n      <ion-list padding-vertical>\n        <ion-item>\n          <ion-input formControlName="name" type="text"></ion-input>\n        </ion-item>\n        <ion-item class="no-border">\n          <ion-label>Select</ion-label>\n          <ion-select multiple="true" formControlName="select">\n            <ion-option>1</ion-option>\n            <ion-option>2</ion-option>\n            <ion-option>3</ion-option>\n          </ion-select>\n        </ion-item>\n        <button ion-button full block class="no-margin" type="submit">Submit</button>\n      </ion-list>\n    </form>\n  \n    <ion-item>\n      <ion-label floating>Floating label</ion-label>\n      <ion-select multiple="true">\n        <ion-option value="bacon">Bacon</ion-option>\n        <ion-option value="olives">Black Olives</ion-option>\n        <ion-option value="xcheese">Extra Cheese</ion-option>\n        <ion-option value="peppers">Green Peppers</ion-option>\n        <ion-option value="mushrooms">Mushrooms</ion-option>\n        <ion-option value="onions">Onions</ion-option>\n        <ion-option value="pepperoni">Pepperoni</ion-option>\n        <ion-option value="pineapple">Pineapple</ion-option>\n        <ion-option value="sausage">Sausage</ion-option>\n        <ion-option value="Spinach">Spinach</ion-option>\n      </ion-select>\n    </ion-item>\n  \n  </ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/excel-pdf-hoadon/src/pages/pdf/pdf.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], PdfPage);
    return PdfPage;
}());

//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(510);
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
            .toPromise();
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
            .toPromise();
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
            .toPromise();
    };
    /**
     * yyyymm_custId = 201901 hoac 201901/R000000001
     */
    ApiResourceService.prototype.getInvoices = function (yyyymm_custId) {
        return this.httpClient.get(this.resourceServer + '/db/json-invoices/' + yyyymm_custId)
            .toPromise()
            .then(function (results) {
            if (results) {
                return results;
            }
            else {
                throw [];
            }
        });
    };
    /**
     * lay ky cuoc da tao trong csdl
     */
    ApiResourceService.prototype.getBillCycle = function () {
        return this.httpClient.get(this.resourceServer + '/db/json-bill-cycles')
            .toPromise()
            .then(function (results) {
            if (results) {
                return results;
            }
            else {
                throw [];
            }
        });
    };
    ApiResourceService.prototype.getAllCutomers = function () {
        return this.httpClient.get(this.resourceServer + '/db/json-customers')
            .toPromise()
            .then(function (results) {
            if (results) {
                return results;
            }
            else {
                throw [];
            }
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
                throw [];
            }
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

/***/ })

},[308]);
//# sourceMappingURL=main.js.map