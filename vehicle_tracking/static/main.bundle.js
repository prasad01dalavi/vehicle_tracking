webpackJsonp([23,25],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pages/calendar/calendar.module": [
		266,
		15
	],
	"app/pages/charting/charting.module": [
		267,
		18
	],
	"app/pages/dashboard/dashboard.module": [
		268,
		9
	],
	"app/pages/driver/driver.module": [
		269,
		3
	],
	"app/pages/editors/editors.module": [
		270,
		17
	],
	"app/pages/events/events.module": [
		271,
		12
	],
	"app/pages/fleetstatus/fleetstatus.module": [
		272,
		5
	],
	"app/pages/form-elements/form-elements.module": [
		273,
		10
	],
	"app/pages/history/history.module": [
		274,
		8
	],
	"app/pages/login/login.module": [
		275,
		16
	],
	"app/pages/mail/mail.module": [
		276,
		14
	],
	"app/pages/maps/maps.module": [
		277,
		13
	],
	"app/pages/pages.module": [
		278,
		0
	],
	"app/pages/register/register.module": [
		279,
		19
	],
	"app/pages/reports/reports.module": [
		280,
		2
	],
	"app/pages/tables/tables.module": [
		281,
		6
	],
	"app/pages/task/task.module": [
		282,
		1
	],
	"app/pages/tools/tools.module": [
		283,
		7
	],
	"app/pages/ui/ui.module": [
		284,
		11
	],
	"app/pages/vehicle/vehicle.module": [
		285,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 104;


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(167);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_color__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sass_to_js_js_src_sass_to_js_js__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sass_to_js_js_src_sass_to_js_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sass_to_js_js_src_sass_to_js_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppConfig = (function () {
    function AppConfig() {
        this.sassVariables = this.getSassVariables();
        this.config = {
            name: 'Eyeway',
            title: 'Vehicle Tracking System',
            version: '1.4.0',
            colors: {
                main: this.sassVariables['main-color'],
                default: this.sassVariables['default-color'],
                dark: this.sassVariables['dark-color'],
                primary: this.sassVariables['primary-color'],
                info: this.sassVariables['info-color'],
                success: this.sassVariables['success-color'],
                warning: this.sassVariables['warning-color'],
                danger: this.sassVariables['danger-color'],
                sidebarBgColor: this.sassVariables['sidebar-bg-color'],
                gray: this.sassVariables['gray'],
                grayLight: this.sassVariables['gray-light']
            }
        };
    }
    AppConfig.prototype.getSassVariables = function () {
        var variables = jQuery('body').sassToJs({ pseudoEl: "::after", cssProperty: "content" });
        return variables;
    };
    AppConfig.prototype.rgba = function (color, opacity) {
        if (color.indexOf('#') >= 0) {
            if (color.slice(1).length == 3) {
                color = '#' + color.slice(1) + '' + color.slice(1);
            }
            return new __WEBPACK_IMPORTED_MODULE_1__app_color__["a" /* Color */](new __WEBPACK_IMPORTED_MODULE_1__app_color__["b" /* HEX */](color)).setAlpha(opacity).toString();
        }
        else {
            console.log("incorrect color: " + color);
            return 'rgba(255,255,255,0.7)';
        }
    };
    return AppConfig;
}());
AppConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppConfig);

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RGB */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
var RGB = (function () {
    function RGB(r, g, b) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.alpha = 1;
        this.value = 0;
        this.setRed(r).setGreen(g).setBlue(b);
        this.updateValue();
    }
    RGB.prototype.getHexPart = function (v) {
        var h = v.toString(16);
        return (h.length > 1) ? h : "0" + h;
    };
    RGB.prototype.updateValue = function () {
        this.value = (this.getRed() + this.getGreen() + this.getBlue());
        return this;
    };
    RGB.prototype.getValue = function () {
        return this.value;
    };
    RGB.prototype.toHex = function () {
        var hexString = (this.getAlpha() < 1) ? this.toHexAlpha().toString() : "#" + this.getHexPart(this.getRed()) + this.getHexPart(this.getGreen()) + this.getHexPart(this.getBlue());
        return new HEX(hexString);
    };
    RGB.prototype.toHexAlpha = function (light) {
        if (light === void 0) { light = true; }
        var tmpRgb = new RGB(this.getRed(), this.getGreen(), this.getBlue());
        if (this.getAlpha() < 1) {
            var tmp = (1 - this.getAlpha());
            tmpRgb.setRed(tmpRgb.getRed() * tmp);
            tmpRgb.setGreen(tmpRgb.getGreen() * tmp);
            tmpRgb.setBlue(tmpRgb.getBlue() * tmp);
        }
        var adjustValue = (this.getAlpha() < 1) ? Math.floor(255 * this.getAlpha()) : 0;
        return (light) ? tmpRgb.lighten(adjustValue).toHex() : tmpRgb.darken(adjustValue).toHex();
    };
    RGB.prototype.setRed = function (value) {
        this.r = (value > 255) ? 255 : ((value < 0) ? 0 : Math.floor(value));
        return this.updateValue();
    };
    RGB.prototype.getRed = function () {
        return this.r;
    };
    RGB.prototype.setGreen = function (value) {
        this.g = (value > 255) ? 255 : ((value < 0) ? 0 : Math.floor(value));
        return this.updateValue();
    };
    RGB.prototype.getGreen = function () {
        return this.g;
    };
    RGB.prototype.setBlue = function (value) {
        this.b = (value > 255) ? 255 : ((value < 0) ? 0 : Math.floor(value));
        return this.updateValue();
    };
    RGB.prototype.getBlue = function () {
        return this.b;
    };
    RGB.prototype.setAlpha = function (a) {
        this.alpha = (a <= 1 && a >= 0) ? a : 1;
        return this;
    };
    RGB.prototype.getAlpha = function () {
        return this.alpha;
    };
    RGB.prototype.lighten = function (by) {
        this.setRed(this.getRed() + by)
            .setBlue(this.getBlue() + by)
            .setGreen(this.getGreen() + by);
        return this.updateValue();
    };
    RGB.prototype.darken = function (by) {
        this.setRed(this.getRed() - by)
            .setBlue(this.getBlue() - by)
            .setGreen(this.getGreen() - by);
        return this.updateValue();
    };
    RGB.prototype.toString = function () {
        return (this.alpha < 1) ? 'rgba(' + this.getRed() + ',' + this.getGreen() + ',' + this.getBlue() + ',' + this.getAlpha() + ')' : 'rgb(' + this.getRed() + ',' + this.getGreen() + ',' + this.getBlue() + ')';
    };
    return RGB;
}());

var HEX = (function () {
    function HEX(hex) {
        this.hex = "#000000";
        this.hex = (hex.toString().length == 6) ? "#" + hex : (hex.toString().length == 7) ? hex : null;
    }
    HEX.prototype.toRGB = function () {
        var hexString = this.hex.substr(1).toString();
        return new RGB(parseInt(hexString.substr(0, 2), 16), parseInt(hexString.substr(2, 2), 16), parseInt(hexString.substr(4, 2), 16));
    };
    HEX.prototype.toString = function () {
        return this.hex;
    };
    return HEX;
}());

var Color = (function () {
    function Color(color) {
        if (color instanceof HEX) {
            this.hex = color;
            this.rgb = color.toRGB();
        }
        else if (color instanceof RGB) {
            this.rgb = color;
            this.hex = color.toHex();
        }
    }
    Color.prototype.lighten = function (by) {
        this.rgb = this.rgb.lighten(by);
        this.hex = this.rgb.toHex();
        return this;
    };
    Color.prototype.darken = function (by) {
        this.rgb = this.rgb.darken(by);
        this.hex = this.rgb.toHex();
        return this;
    };
    Color.prototype.toString = function (rgb) {
        if (rgb === void 0) { rgb = true; }
        return (rgb) ? this.rgb.toString() : this.hex.toString();
    };
    Color.prototype.setAlpha = function (a) {
        this.rgb.setAlpha(a);
        this.hex = this.rgb.toHex();
        return this;
    };
    return Color;
}());

//# sourceMappingURL=app.color.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-root',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__(228)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pace__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pace___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pace__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_error_error_component__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_error_error_component__["a" /* ErrorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
            }),
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_error_error_component__ = __webpack_require__(86);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
    { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
    { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__pages_error_error_component__["a" /* ErrorComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes, {
    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* PreloadAllModules */],
});
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    myapi: 'https://maps.googleapis.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n/* This is a compiled file, you should be editing the file in the templates directory */\n.pace {\n  -webkit-pointer-events: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n\n.pace-inactive {\n  display: none; }\n\n.pace .pace-progress {\n  background: #29d;\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  left: 0;\n  height: 2px;\n  transition: width 1s; }\n\n.pace .pace-progress-inner {\n  display: block;\n  position: absolute;\n  right: 0px;\n  width: 100px;\n  height: 100%;\n  box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n  opacity: 1.0;\n  -webkit-transform: rotate(3deg) translate(0px, -4px);\n  transform: rotate(3deg) translate(0px, -4px); }\n\n.pace .pace-activity {\n  display: block;\n  position: fixed;\n  z-index: 2000;\n  top: 15px;\n  right: 15px;\n  width: 14px;\n  height: 14px;\n  border: solid 2px transparent;\n  border-top-color: #29d;\n  border-left-color: #29d;\n  border-radius: 10px;\n  -webkit-animation: pace-spinner 400ms linear infinite;\n  animation: pace-spinner 400ms linear infinite; }\n\n@-webkit-keyframes pace-spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes pace-spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.abc-checkbox {\n  padding-left: 20px; }\n  .abc-checkbox label {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n    padding-left: 5px; }\n    .abc-checkbox label::before {\n      cursor: pointer;\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      width: 17px;\n      height: 17px;\n      left: 0;\n      margin-left: -20px;\n      border: 1px solid rgba(0, 0, 0, 0.15);\n      border-radius: 3px;\n      background-color: #fff;\n      transition: border 0.15s ease-in-out, color 0.15s ease-in-out; }\n    .abc-checkbox label::after {\n      cursor: pointer;\n      display: inline-block;\n      position: absolute;\n      width: 16px;\n      height: 16px;\n      left: 0;\n      top: 0;\n      margin-left: -20px;\n      padding-left: 3px;\n      padding-top: 1px;\n      font-size: 11px;\n      color: #555; }\n  .abc-checkbox input[type=\"checkbox\"],\n  .abc-checkbox input[type=\"radio\"] {\n    cursor: pointer;\n    opacity: 0;\n    z-index: 1; }\n    .abc-checkbox input[type=\"checkbox\"]:focus + label::before,\n    .abc-checkbox input[type=\"radio\"]:focus + label::before {\n      outline: 5px auto -webkit-focus-ring-color;\n      outline-offset: -2px; }\n    .abc-checkbox input[type=\"checkbox\"]:checked + label::after,\n    .abc-checkbox input[type=\"radio\"]:checked + label::after {\n      font-family: \"FontAwesome\";\n      content: \"\\F00C\"; }\n    .abc-checkbox input[type=\"checkbox\"]:indeterminate + label::after,\n    .abc-checkbox input[type=\"radio\"]:indeterminate + label::after {\n      display: block;\n      content: \"\";\n      width: 10px;\n      height: 3px;\n      background-color: #555555;\n      border-radius: 2px;\n      margin-left: -16.5px;\n      margin-top: 7px; }\n    .abc-checkbox input[type=\"checkbox\"]:disabled + label,\n    .abc-checkbox input[type=\"radio\"]:disabled + label {\n      opacity: 0.65; }\n      .abc-checkbox input[type=\"checkbox\"]:disabled + label::before,\n      .abc-checkbox input[type=\"radio\"]:disabled + label::before {\n        background-color: #eceeef;\n        cursor: not-allowed; }\n  .abc-checkbox.abc-checkbox-circle label::before {\n    border-radius: 50%; }\n  .abc-checkbox.checkbox-inline {\n    margin-top: 0; }\n\n.abc-checkbox-primary input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-primary input[type=\"radio\"]:checked + label::before {\n  background-color: #024a88;\n  border-color: #024a88; }\n\n.abc-checkbox-primary input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-primary input[type=\"radio\"]:checked + label::after {\n  color: #fff; }\n\n.abc-checkbox-danger input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-danger input[type=\"radio\"]:checked + label::before {\n  background-color: #bf1725;\n  border-color: #bf1725; }\n\n.abc-checkbox-danger input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-danger input[type=\"radio\"]:checked + label::after {\n  color: #fff; }\n\n.abc-checkbox-info input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-info input[type=\"radio\"]:checked + label::before {\n  background-color: #248dad;\n  border-color: #248dad; }\n\n.abc-checkbox-info input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-info input[type=\"radio\"]:checked + label::after {\n  color: #fff; }\n\n.abc-checkbox-warning input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-warning input[type=\"radio\"]:checked + label::before {\n  background-color: #f79a17;\n  border-color: #f79a17; }\n\n.abc-checkbox-warning input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-warning input[type=\"radio\"]:checked + label::after {\n  color: #fff; }\n\n.abc-checkbox-success input[type=\"checkbox\"]:checked + label::before,\n.abc-checkbox-success input[type=\"radio\"]:checked + label::before {\n  background-color: #2d922d;\n  border-color: #2d922d; }\n\n.abc-checkbox-success input[type=\"checkbox\"]:checked + label::after,\n.abc-checkbox-success input[type=\"radio\"]:checked + label::after {\n  color: #fff; }\n\n.abc-checkbox-primary input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-primary input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #024a88;\n  border-color: #024a88; }\n\n.abc-checkbox-primary input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-primary input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff; }\n\n.abc-checkbox-danger input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-danger input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #bf1725;\n  border-color: #bf1725; }\n\n.abc-checkbox-danger input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-danger input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff; }\n\n.abc-checkbox-info input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-info input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #248dad;\n  border-color: #248dad; }\n\n.abc-checkbox-info input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-info input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff; }\n\n.abc-checkbox-warning input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-warning input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #f79a17;\n  border-color: #f79a17; }\n\n.abc-checkbox-warning input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-warning input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff; }\n\n.abc-checkbox-success input[type=\"checkbox\"]:indeterminate + label::before,\n.abc-checkbox-success input[type=\"radio\"]:indeterminate + label::before {\n  background-color: #2d922d;\n  border-color: #2d922d; }\n\n.abc-checkbox-success input[type=\"checkbox\"]:indeterminate + label::after,\n.abc-checkbox-success input[type=\"radio\"]:indeterminate + label::after {\n  background-color: #fff; }\n\n.abc-radio {\n  padding-left: 20px; }\n  .abc-radio label {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n    padding-left: 5px; }\n    .abc-radio label::before {\n      cursor: pointer;\n      content: \"\";\n      display: inline-block;\n      position: absolute;\n      width: 17px;\n      height: 17px;\n      left: 0;\n      margin-left: -20px;\n      border: 1px solid rgba(0, 0, 0, 0.15);\n      border-radius: 50%;\n      background-color: #fff;\n      transition: border 0.15s ease-in-out; }\n    .abc-radio label::after {\n      cursor: pointer;\n      display: inline-block;\n      position: absolute;\n      content: \" \";\n      width: 11px;\n      height: 11px;\n      left: 3px;\n      top: 3px;\n      margin-left: -20px;\n      border-radius: 50%;\n      background-color: #555;\n      -webkit-transform: scale(0, 0);\n              transform: scale(0, 0);\n      transition: -webkit-transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);\n      transition: transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33);\n      transition: transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33), -webkit-transform 0.1s cubic-bezier(0.8, -0.33, 0.2, 1.33); }\n  .abc-radio input[type=\"radio\"] {\n    cursor: pointer;\n    opacity: 0;\n    z-index: 1; }\n    .abc-radio input[type=\"radio\"]:focus + label::before {\n      outline: 5px auto -webkit-focus-ring-color;\n      outline-offset: -2px; }\n    .abc-radio input[type=\"radio\"]:checked + label::after {\n      -webkit-transform: scale(1, 1);\n              transform: scale(1, 1); }\n    .abc-radio input[type=\"radio\"]:disabled + label {\n      opacity: 0.65; }\n      .abc-radio input[type=\"radio\"]:disabled + label::before {\n        cursor: not-allowed; }\n  .abc-radio.radio-inline {\n    margin-top: 0; }\n\n.abc-radio-primary input[type=\"radio\"] + label::after {\n  background-color: #024a88; }\n\n.abc-radio-primary input[type=\"radio\"]:checked + label::before {\n  border-color: #024a88; }\n\n.abc-radio-primary input[type=\"radio\"]:checked + label::after {\n  background-color: #024a88; }\n\n.abc-radio-danger input[type=\"radio\"] + label::after {\n  background-color: #bf1725; }\n\n.abc-radio-danger input[type=\"radio\"]:checked + label::before {\n  border-color: #bf1725; }\n\n.abc-radio-danger input[type=\"radio\"]:checked + label::after {\n  background-color: #bf1725; }\n\n.abc-radio-info input[type=\"radio\"] + label::after {\n  background-color: #248dad; }\n\n.abc-radio-info input[type=\"radio\"]:checked + label::before {\n  border-color: #248dad; }\n\n.abc-radio-info input[type=\"radio\"]:checked + label::after {\n  background-color: #248dad; }\n\n.abc-radio-warning input[type=\"radio\"] + label::after {\n  background-color: #f79a17; }\n\n.abc-radio-warning input[type=\"radio\"]:checked + label::before {\n  border-color: #f79a17; }\n\n.abc-radio-warning input[type=\"radio\"]:checked + label::after {\n  background-color: #f79a17; }\n\n.abc-radio-success input[type=\"radio\"] + label::after {\n  background-color: #2d922d; }\n\n.abc-radio-success input[type=\"radio\"]:checked + label::before {\n  border-color: #2d922d; }\n\n.abc-radio-success input[type=\"radio\"]:checked + label::after {\n  background-color: #2d922d; }\n\ninput[type=\"checkbox\"].styled:checked + label:after,\ninput[type=\"radio\"].styled:checked + label:after {\n  font-family: \"FontAwesome\";\n  content: \"\\F00C\"; }\n\ninput[type=\"checkbox\"] .styled:checked + label::before,\ninput[type=\"radio\"] .styled:checked + label::before {\n  color: #fff; }\n\ninput[type=\"checkbox\"] .styled:checked + label::after,\ninput[type=\"radio\"] .styled:checked + label::after {\n  color: #fff; }\n\n@-webkit-keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@-webkit-keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.dropzone, .dropzone * {\n  box-sizing: border-box; }\n\n.dropzone {\n  min-height: 150px;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  background: white;\n  padding: 20px 20px; }\n\n.dropzone.dz-clickable {\n  cursor: pointer; }\n\n.dropzone.dz-clickable * {\n  cursor: default; }\n\n.dropzone.dz-clickable .dz-message, .dropzone.dz-clickable .dz-message * {\n  cursor: pointer; }\n\n.dropzone.dz-started .dz-message {\n  display: none; }\n\n.dropzone.dz-drag-hover {\n  border-style: solid; }\n\n.dropzone.dz-drag-hover .dz-message {\n  opacity: 0.5; }\n\n.dropzone .dz-message {\n  text-align: center;\n  margin: 2em 0; }\n\n.dropzone .dz-preview {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  margin: 16px;\n  min-height: 100px; }\n\n.dropzone .dz-preview:hover {\n  z-index: 1000; }\n\n.dropzone .dz-preview:hover .dz-details {\n  opacity: 1; }\n\n.dropzone .dz-preview.dz-file-preview .dz-image {\n  border-radius: 20px;\n  background: #999;\n  background: linear-gradient(to bottom, #eee, #ddd); }\n\n.dropzone .dz-preview.dz-file-preview .dz-details {\n  opacity: 1; }\n\n.dropzone .dz-preview.dz-image-preview {\n  background: white; }\n\n.dropzone .dz-preview.dz-image-preview .dz-details {\n  transition: opacity 0.2s linear; }\n\n.dropzone .dz-preview .dz-remove {\n  font-size: 14px;\n  text-align: center;\n  display: block;\n  cursor: pointer;\n  border: none; }\n\n.dropzone .dz-preview .dz-remove:hover {\n  text-decoration: underline; }\n\n.dropzone .dz-preview:hover .dz-details {\n  opacity: 1; }\n\n.dropzone .dz-preview .dz-details {\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  font-size: 13px;\n  min-width: 100%;\n  max-width: 100%;\n  padding: 2em 1em;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.9);\n  line-height: 150%; }\n\n.dropzone .dz-preview .dz-details .dz-size {\n  margin-bottom: 1em;\n  font-size: 16px; }\n\n.dropzone .dz-preview .dz-details .dz-filename {\n  white-space: nowrap; }\n\n.dropzone .dz-preview .dz-details .dz-filename:hover span {\n  border: 1px solid rgba(200, 200, 200, 0.8);\n  background-color: rgba(255, 255, 255, 0.8); }\n\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span {\n  border: 1px solid transparent; }\n\n.dropzone .dz-preview .dz-details .dz-filename span, .dropzone .dz-preview .dz-details .dz-size span {\n  background-color: rgba(255, 255, 255, 0.4);\n  padding: 0 0.4em;\n  border-radius: 3px; }\n\n.dropzone .dz-preview:hover .dz-image img {\n  -webkit-transform: scale(1.05, 1.05);\n  transform: scale(1.05, 1.05);\n  -webkit-filter: blur(8px);\n  filter: blur(8px); }\n\n.dropzone .dz-preview .dz-image {\n  border-radius: 20px;\n  overflow: hidden;\n  width: 120px;\n  height: 120px;\n  position: relative;\n  display: block;\n  z-index: 10; }\n\n.dropzone .dz-preview .dz-image img {\n  display: block; }\n\n.dropzone .dz-preview.dz-success .dz-success-mark {\n  -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n  animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone .dz-preview.dz-error .dz-error-mark {\n  opacity: 1;\n  -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n  animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone .dz-preview .dz-success-mark, .dropzone .dz-preview .dz-error-mark {\n  pointer-events: none;\n  opacity: 0;\n  z-index: 500;\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 50%;\n  margin-left: -27px;\n  margin-top: -27px; }\n\n.dropzone .dz-preview .dz-success-mark svg, .dropzone .dz-preview .dz-error-mark svg {\n  display: block;\n  width: 54px;\n  height: 54px; }\n\n.dropzone .dz-preview.dz-processing .dz-progress {\n  opacity: 1;\n  transition: all 0.2s linear; }\n\n.dropzone .dz-preview.dz-complete .dz-progress {\n  opacity: 0;\n  transition: opacity 0.4s ease-in; }\n\n.dropzone .dz-preview:not(.dz-processing) .dz-progress {\n  -webkit-animation: pulse 6s ease infinite;\n  animation: pulse 6s ease infinite; }\n\n.dropzone .dz-preview .dz-progress {\n  opacity: 1;\n  z-index: 1000;\n  pointer-events: none;\n  position: absolute;\n  height: 16px;\n  left: 50%;\n  top: 50%;\n  margin-top: -8px;\n  width: 80px;\n  margin-left: -40px;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-transform: scale(1);\n  border-radius: 8px;\n  overflow: hidden; }\n\n.dropzone .dz-preview .dz-progress .dz-upload {\n  background: #333;\n  background: linear-gradient(to bottom, #666, #444);\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 0;\n  transition: width 300ms ease-in-out; }\n\n.dropzone .dz-preview.dz-error .dz-error-message {\n  display: block; }\n\n.dropzone .dz-preview.dz-error:hover .dz-error-message {\n  opacity: 1;\n  pointer-events: auto; }\n\n.dropzone .dz-preview .dz-error-message {\n  pointer-events: none;\n  z-index: 1000;\n  position: absolute;\n  display: block;\n  display: none;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  border-radius: 8px;\n  font-size: 13px;\n  top: 130px;\n  left: -10px;\n  width: 140px;\n  background: #be2626;\n  background: linear-gradient(to bottom, #be2626, #a92222);\n  padding: 0.5em 1.2em;\n  color: white; }\n\n.dropzone .dz-preview .dz-error-message:after {\n  content: '';\n  position: absolute;\n  top: -6px;\n  left: 64px;\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid #be2626; }\n\na:hover, a:focus {\n  text-decoration: none; }\n\n* {\n  outline: none !important; }\n\nbutton, input, optgroup, select, textarea {\n  font-family: inherit; }\n\nth {\n  font-weight: bold; }\n\n/*Progress*/\n.progress {\n  border-radius: 0; }\n\n.progress-xs {\n  height: 7px; }\n\n.progress-sm {\n  height: 10px; }\n\n.progress-md {\n  height: 13px; }\n\n/*BG*/\n.bg-primary {\n  background-color: #024a88 !important; }\n  .bg-primary.medium-opacity {\n    background-color: rgba(2, 74, 136, 0.5) !important; }\n\n.bg-success {\n  background-color: #2d922d !important; }\n  .bg-success.medium-opacity {\n    background-color: rgba(45, 146, 45, 0.5) !important; }\n\n.bg-info {\n  background-color: #248dad !important; }\n  .bg-info.medium-opacity {\n    background-color: rgba(36, 141, 173, 0.5) !important; }\n\n.bg-warning {\n  background-color: #f79a17 !important; }\n  .bg-warning.medium-opacity {\n    background-color: rgba(247, 154, 23, 0.5) !important; }\n\n.bg-danger {\n  background-color: #bf1725 !important; }\n  .bg-danger.medium-opacity {\n    background-color: rgba(191, 23, 37, 0.5) !important; }\n\n.bg-main {\n  background-color: #242d3a !important; }\n  .bg-main.medium-opacity {\n    background-color: rgba(36, 45, 58, 0.5) !important; }\n\n.bg-dark {\n  background-color: black !important; }\n  .bg-dark.medium-opacity {\n    background-color: rgba(0, 0, 0, 0.5) !important; }\n\n/*Card*/\n.card {\n  border: none;\n  border-radius: 0;\n  overflow: hidden;\n  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.25); }\n  .card .card-header {\n    background: #344154;\n    color: #fff;\n    line-height: 10px;\n    border-radius: 0;\n    border: none; }\n    .card .card-header a {\n      color: #fff; }\n      .card .card-header a:hover {\n        color: rgba(255, 255, 255, 0.8); }\n  .card .card-footer {\n    background: #344154;\n    color: #fff;\n    line-height: 6px;\n    border-radius: 0;\n    border: none; }\n  .card.card-outline-default {\n    background: transparent;\n    border: 1px solid #fff; }\n  .card.card-primary {\n    background: #024a88; }\n    .card.card-primary.medium-opacity {\n      background: rgba(2, 74, 136, 0.5); }\n  .card.card-outline-primary {\n    background: transparent;\n    border: 1px solid #024a88; }\n  .card.card-success {\n    background: #2d922d; }\n    .card.card-success.medium-opacity {\n      background: rgba(45, 146, 45, 0.5); }\n  .card.card-outline-success {\n    background: transparent;\n    border: 1px solid #2d922d; }\n  .card.card-info {\n    background: #248dad; }\n    .card.card-info.medium-opacity {\n      background: rgba(36, 141, 173, 0.5); }\n  .card.card-outline-info {\n    background: transparent;\n    border: 1px solid #248dad; }\n  .card.card-warning {\n    background: #f79a17; }\n    .card.card-warning.medium-opacity {\n      background: rgba(247, 154, 23, 0.5); }\n  .card.card-outline-warning {\n    background: transparent;\n    border: 1px solid #f79a17; }\n  .card.card-danger {\n    background: #bf1725; }\n    .card.card-danger.medium-opacity {\n      background: rgba(191, 23, 37, 0.5); }\n  .card.card-outline-danger {\n    background: transparent;\n    border: 1px solid #bf1725; }\n  .card.card-primary .card-header, .card.card-success .card-header, .card.card-info .card-header, .card.card-danger .card-header, .card.card-warning .card-header {\n    background: rgba(0, 0, 0, 0.4); }\n  .card.card-primary .card-block, .card.card-success .card-block, .card.card-info .card-block, .card.card-danger .card-block, .card.card-warning .card-block {\n    color: #fff; }\n  .card.card-primary .card-footer, .card.card-success .card-footer, .card.card-info .card-footer, .card.card-danger .card-footer, .card.card-warning .card-footer {\n    background: rgba(0, 0, 0, 0.2); }\n  .card.overlay .card-img {\n    border-radius: 0;\n    -webkit-filter: brightness(100%);\n    -moz-filter: brightness(100%);\n    -ms-filter: brightness(100%);\n    -o-filter: brightness(100%);\n    filter: brightness(100%); }\n  .card.overlay:hover .card-img {\n    -webkit-filter: brightness(80%);\n    -moz-filter: brightness(80%);\n    -ms-filter: brightness(80%);\n    -o-filter: brightness(80%);\n    filter: brightness(80%); }\n  .card.overlay .card-img-overlay {\n    color: #fff; }\n    .card.overlay .card-img-overlay.overlay-bottom {\n      top: auto; }\n    .card.overlay .card-img-overlay.slide-up {\n      -webkit-transform: translateY(100%);\n      transform: translateY(100%); }\n    .card.overlay .card-img-overlay.slide-down {\n      -webkit-transform: translateY(-100%);\n      transform: translateY(-100%); }\n    .card.overlay .card-img-overlay.slide-left {\n      -webkit-transform: translateX(-100%);\n      transform: translateX(-100%); }\n    .card.overlay .card-img-overlay.slide-right {\n      -webkit-transform: translateX(100%);\n      transform: translateX(100%); }\n    .card.overlay .card-img-overlay.hover-opacity {\n      opacity: 0; }\n  .card.overlay:hover .slide-up {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  .card.overlay:hover .slide-down {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  .card.overlay:hover .slide-left {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  .card.overlay:hover .slide-right {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  .card.overlay:hover .hover-opacity {\n    opacity: 1; }\n\n.card-img-top {\n  border-radius: 0; }\n\n@media (min-width: 576px) {\n  .card-columns {\n    -moz-column-count: 3;\n    -moz-column-gap: 1.25rem; } }\n\n/*Buttons*/\n.btn {\n  border-radius: 0; }\n  .btn:focus {\n    outline: 0; }\n  .btn:active {\n    outline: 0 !important; }\n\n.btn-rounded {\n  border-radius: 25rem; }\n\n.btn-xs {\n  padding: 0.2rem 0.4rem;\n  font-size: 0.715rem; }\n\n.btn-primary {\n  background: rgba(2, 74, 136, 0.8);\n  border-color: rgba(2, 74, 136, 0.8); }\n  .btn-primary.medium-opacity {\n    background: rgba(2, 74, 136, 0.5);\n    border-color: rgba(2, 74, 136, 0.1); }\n  .btn-primary:hover, .btn-primary:focus {\n    background: #024a88;\n    border-color: #024a88;\n    color: #fff; }\n  .btn-primary:active {\n    background: rgba(2, 74, 136, 0.95) !important;\n    border-color: rgba(2, 74, 136, 0.95) !important; }\n\n.btn-success {\n  background: rgba(45, 146, 45, 0.8);\n  border-color: rgba(45, 146, 45, 0.8); }\n  .btn-success.medium-opacity {\n    background: rgba(45, 146, 45, 0.5);\n    border-color: rgba(45, 146, 45, 0.1); }\n  .btn-success:hover, .btn-success:focus {\n    background: #2d922d;\n    border-color: #2d922d;\n    color: #fff; }\n  .btn-success:active {\n    background: rgba(45, 146, 45, 0.95) !important;\n    border-color: rgba(45, 146, 45, 0.95) !important; }\n\n.btn-info {\n  background: rgba(36, 141, 173, 0.8);\n  border-color: rgba(36, 141, 173, 0.8); }\n  .btn-info.medium-opacity {\n    background: rgba(36, 141, 173, 0.5);\n    border-color: rgba(36, 141, 173, 0.1); }\n  .btn-info:hover, .btn-info:focus {\n    background: #248dad;\n    border-color: #248dad;\n    color: #fff; }\n  .btn-info:active {\n    background: rgba(36, 141, 173, 0.95) !important;\n    border-color: rgba(36, 141, 173, 0.95) !important; }\n\n.btn-warning {\n  background: rgba(247, 154, 23, 0.8);\n  border-color: rgba(247, 154, 23, 0.8); }\n  .btn-warning.medium-opacity {\n    background: rgba(247, 154, 23, 0.5);\n    border-color: rgba(247, 154, 23, 0.1); }\n  .btn-warning:hover, .btn-warning:focus {\n    background: #f79a17;\n    border-color: #f79a17;\n    color: #fff; }\n  .btn-warning:active {\n    background: rgba(247, 154, 23, 0.95) !important;\n    border-color: rgba(247, 154, 23, 0.95) !important; }\n\n.btn-danger {\n  background: rgba(191, 23, 37, 0.8);\n  border-color: rgba(191, 23, 37, 0.8); }\n  .btn-danger.medium-opacity {\n    background: rgba(191, 23, 37, 0.5);\n    border-color: rgba(191, 23, 37, 0.1); }\n  .btn-danger:hover, .btn-danger:focus {\n    background: #bf1725;\n    border-color: #bf1725;\n    color: #fff; }\n  .btn-danger:active {\n    background: rgba(191, 23, 37, 0.95) !important;\n    border-color: rgba(191, 23, 37, 0.95) !important; }\n\n.btn-dark {\n  background: rgba(0, 0, 0, 0.8);\n  border-color: rgba(0, 0, 0, 0.8);\n  color: #fff; }\n  .btn-dark.medium-opacity {\n    background: rgba(0, 0, 0, 0.5);\n    border-color: rgba(0, 0, 0, 0.1); }\n  .btn-dark:hover {\n    background: black;\n    border-color: black; }\n  .btn-dark:active {\n    background: rgba(0, 0, 0, 0.95) !important;\n    border-color: rgba(0, 0, 0, 0.95) !important; }\n\n.btn-main {\n  background: rgba(36, 45, 58, 0.8);\n  border-color: rgba(36, 45, 58, 0.8);\n  color: #fff; }\n  .btn-main.medium-opacity {\n    background: rgba(36, 45, 58, 0.5);\n    border-color: rgba(36, 45, 58, 0.1); }\n  .btn-main:hover {\n    background: #242d3a;\n    border-color: #242d3a; }\n  .btn-main:active {\n    background: rgba(36, 45, 58, 0.95) !important;\n    border-color: rgba(36, 45, 58, 0.95) !important; }\n\n.btn-outline-primary {\n  color: #024a88;\n  border-color: #024a88; }\n  .btn-outline-primary:hover, .btn-outline-primary:focus {\n    color: #fff;\n    background: #024a88;\n    border-color: #024a88; }\n  .btn-outline-primary:active, .btn-outline-primary.active {\n    color: #fff !important;\n    background: #024a88 !important;\n    border-color: #024a88 !important; }\n\n.btn-outline-success {\n  color: #2d922d;\n  border-color: #2d922d; }\n  .btn-outline-success:hover, .btn-outline-success:focus {\n    color: #fff;\n    background: #2d922d;\n    border-color: #2d922d; }\n  .btn-outline-success:active, .btn-outline-success.active {\n    color: #fff !important;\n    background: #2d922d !important;\n    border-color: #2d922d !important; }\n\n.btn-outline-info {\n  color: #248dad;\n  border-color: #248dad; }\n  .btn-outline-info:hover, .btn-outline-info:focus {\n    color: #fff;\n    background: #248dad;\n    border-color: #248dad; }\n  .btn-outline-info:active, .btn-outline-info.active {\n    color: #fff !important;\n    background: #248dad !important;\n    border-color: #248dad !important; }\n\n.btn-outline-warning {\n  color: #f79a17;\n  border-color: #f79a17; }\n  .btn-outline-warning:hover, .btn-outline-warning:focus {\n    color: #fff;\n    background: #f79a17;\n    border-color: #f79a17; }\n  .btn-outline-warning:active, .btn-outline-warning.active {\n    color: #fff !important;\n    background: #f79a17 !important;\n    border-color: #f79a17 !important; }\n\n.btn-outline-danger {\n  color: #bf1725;\n  border-color: #bf1725; }\n  .btn-outline-danger:hover, .btn-outline-danger:focus {\n    color: #fff;\n    background: #bf1725;\n    border-color: #bf1725; }\n  .btn-outline-danger:active, .btn-outline-danger.active {\n    color: #fff !important;\n    background: #bf1725 !important;\n    border-color: #bf1725 !important; }\n\n.btn-outline-dark {\n  color: #000;\n  border-color: #000;\n  background: transparent; }\n  .btn-outline-dark:hover, .btn-outline-dark:focus {\n    color: #fff;\n    background: #000;\n    border-color: #000; }\n\n.btn-outline-main {\n  color: #242D3A;\n  border-color: #242D3A;\n  background: transparent; }\n  .btn-outline-main:hover, .btn-outline-main:focus {\n    color: #fff;\n    background: #242D3A;\n    border-color: #242D3A; }\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn:last-child:not(:first-child), .btn-group > .dropdown-toggle:not(:first-child) {\n  border-radius: 0; }\n\n.form-control-sm,\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  border-radius: 0; }\n\n/*Tables*/\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n  .table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #2d922d; }\n\n.table-hover .table-success:hover {\n  background-color: #277f27; }\n  .table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #277f27; }\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #248dad; }\n\n.table-hover .table-info:hover {\n  background-color: #207c98; }\n  .table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #207c98; }\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #f79a17; }\n\n.table-hover .table-warning:hover {\n  background-color: #ec8e08; }\n  .table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ec8e08; }\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #bf1725; }\n\n.table-hover .table-danger:hover {\n  background-color: #a81421; }\n  .table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #a81421; }\n\n.table-reflow thead {\n  float: left; }\n\n.table-reflow tbody {\n  display: block;\n  white-space: nowrap; }\n\n.table-reflow th,\n.table-reflow td {\n  border-top: 1px solid #eceeef;\n  border-left: 1px solid #eceeef; }\n  .table-reflow th:last-child,\n  .table-reflow td:last-child {\n    border-right: 1px solid #eceeef; }\n\n.table-reflow thead:last-child tr:last-child th,\n.table-reflow thead:last-child tr:last-child td,\n.table-reflow tbody:last-child tr:last-child th,\n.table-reflow tbody:last-child tr:last-child td,\n.table-reflow tfoot:last-child tr:last-child th,\n.table-reflow tfoot:last-child tr:last-child td {\n  border-bottom: 1px solid #eceeef; }\n\n.table-reflow tr {\n  float: left; }\n  .table-reflow tr th,\n  .table-reflow tr td {\n    display: block !important;\n    border: 1px solid #eceeef; }\n\n/*Text*/\n.text-primary {\n  color: #024a88 !important; }\n\n.text-success {\n  color: #2d922d !important; }\n\n.text-info {\n  color: #248dad !important; }\n\n.text-warning {\n  color: #f79a17 !important; }\n\n.text-danger {\n  color: #bf1725 !important; }\n\n.text-muted {\n  color: #ccc !important; }\n\n.blockquote {\n  font-size: 1.2rem; }\n\n.blockquote-footer {\n  font-size: 70%; }\n\n/*Tabs*/\n.nav-tabs {\n  background-color: #ccc;\n  border: 1px solid #ccc; }\n  .nav-tabs .nav-item .nav-link {\n    color: rgba(36, 45, 58, 0.8);\n    background-color: transparent;\n    border: none;\n    cursor: default; }\n    .nav-tabs .nav-item .nav-link.active {\n      background-color: #fff;\n      color: #242D3A; }\n    .nav-tabs .nav-item .nav-link:not(.active):hover {\n      background-color: transparent;\n      color: #242D3A;\n      cursor: pointer; }\n  .nav-tabs.top {\n    border-top-left-radius: 0.3rem;\n    border-top-right-radius: 0.3rem; }\n  .nav-tabs.bottom {\n    border-bottom-left-radius: 0.3rem;\n    border-bottom-right-radius: 0.3rem; }\n    .nav-tabs.bottom .nav-item {\n      margin-bottom: 0;\n      margin-top: -1px; }\n      .nav-tabs.bottom .nav-item .nav-link {\n        border-radius: 0 0 0.3rem 0.3rem; }\n  .nav-tabs.tabs-primary {\n    background-color: rgba(2, 74, 136, 0.4);\n    border: 1px solid #024a88; }\n    .nav-tabs.tabs-primary .nav-item .nav-link {\n      color: rgba(255, 255, 255, 0.8); }\n      .nav-tabs.tabs-primary .nav-item .nav-link.active {\n        background-color: #024a88;\n        color: #fff; }\n      .nav-tabs.tabs-primary .nav-item .nav-link:not(.active):hover {\n        color: #fff; }\n  .nav-tabs.tabs-success {\n    background-color: rgba(45, 146, 45, 0.4);\n    border: 1px solid #2d922d; }\n    .nav-tabs.tabs-success .nav-item .nav-link {\n      color: rgba(255, 255, 255, 0.8); }\n      .nav-tabs.tabs-success .nav-item .nav-link.active {\n        background-color: #2d922d;\n        color: #fff; }\n      .nav-tabs.tabs-success .nav-item .nav-link:not(.active):hover {\n        color: #fff; }\n  .nav-tabs.tabs-info {\n    background-color: rgba(36, 141, 173, 0.4);\n    border: 1px solid #248dad; }\n    .nav-tabs.tabs-info .nav-item .nav-link {\n      color: rgba(255, 255, 255, 0.8); }\n      .nav-tabs.tabs-info .nav-item .nav-link.active {\n        background-color: #248dad;\n        color: #fff; }\n      .nav-tabs.tabs-info .nav-item .nav-link:not(.active):hover {\n        color: #fff; }\n  .nav-tabs.tabs-warning {\n    background-color: rgba(247, 154, 23, 0.4);\n    border: 1px solid #f79a17; }\n    .nav-tabs.tabs-warning .nav-item .nav-link {\n      color: rgba(255, 255, 255, 0.8); }\n      .nav-tabs.tabs-warning .nav-item .nav-link.active {\n        background-color: #f79a17;\n        color: #fff; }\n      .nav-tabs.tabs-warning .nav-item .nav-link:not(.active):hover {\n        color: #fff; }\n  .nav-tabs.tabs-danger {\n    background-color: rgba(191, 23, 37, 0.4);\n    border: 1px solid #bf1725; }\n    .nav-tabs.tabs-danger .nav-item .nav-link {\n      color: rgba(255, 255, 255, 0.8); }\n      .nav-tabs.tabs-danger .nav-item .nav-link.active {\n        background-color: #bf1725;\n        color: #fff; }\n      .nav-tabs.tabs-danger .nav-item .nav-link:not(.active):hover {\n        color: #fff; }\n\n.tab-content {\n  position: relative;\n  z-index: 1;\n  border: 1px solid #ccc;\n  background: #fff; }\n  .tab-content .tab-pane {\n    padding: 1rem; }\n  .tab-content.tab-content-primary {\n    background-color: #024a88;\n    color: #fff;\n    border-color: #024a88; }\n  .tab-content.tab-content-success {\n    background-color: #2d922d;\n    color: #fff;\n    border-color: #2d922d; }\n  .tab-content.tab-content-info {\n    background-color: #248dad;\n    color: #fff;\n    border-color: #248dad; }\n  .tab-content.tab-content-warning {\n    background-color: #f79a17;\n    color: #fff;\n    border-color: #f79a17; }\n  .tab-content.tab-content-danger {\n    background-color: #bf1725;\n    color: #fff;\n    border-color: #bf1725; }\n  .tab-content.top {\n    border-top: none; }\n  .tab-content.bottom {\n    border-bottom: none; }\n\n.vertical-tabs .nav {\n  padding-right: 0;\n  overflow: hidden;\n  background-color: #ccc;\n  border: 1px solid #ccc; }\n  .vertical-tabs .nav.left {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n    border-right: none;\n    margin-right: -1px;\n    z-index: 2; }\n  .vertical-tabs .nav.right {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-left: none;\n    margin-left: -1px;\n    z-index: 2; }\n  .vertical-tabs .nav .nav-item .nav-link {\n    color: rgba(36, 45, 58, 0.8);\n    background-color: transparent;\n    border-radius: 0;\n    cursor: default; }\n    .vertical-tabs .nav .nav-item .nav-link.active {\n      background-color: #fff; }\n    .vertical-tabs .nav .nav-item .nav-link:not(.active):hover {\n      background-color: transparent;\n      color: #242D3A;\n      cursor: pointer; }\n    .vertical-tabs .nav .nav-item .nav-link.disabled {\n      color: rgba(36, 45, 58, 0.6);\n      cursor: not-allowed !important; }\n\n/*ALERTS*/\n.alert.alert-success {\n  background-color: #2d922d;\n  border-color: #2d922d;\n  color: #fff; }\n  .alert.alert-success.medium-opacity {\n    background: rgba(45, 146, 45, 0.5);\n    border-color: rgba(45, 146, 45, 0.6); }\n\n.alert.alert-info {\n  background-color: #248dad;\n  border-color: #248dad;\n  color: #fff; }\n  .alert.alert-info.medium-opacity {\n    background-color: rgba(36, 141, 173, 0.5);\n    border-color: rgba(36, 141, 173, 0.6); }\n\n.alert.alert-warning {\n  background-color: #f79a17;\n  border-color: #f79a17;\n  color: #fff; }\n  .alert.alert-warning.medium-opacity {\n    background-color: rgba(247, 154, 23, 0.5);\n    border-color: rgba(247, 154, 23, 0.6); }\n\n.alert.alert-danger {\n  background-color: #bf1725;\n  border-color: #bf1725;\n  color: #fff; }\n  .alert.alert-danger.medium-opacity {\n    background-color: rgba(191, 23, 37, 0.5);\n    border-color: rgba(191, 23, 37, 0.6); }\n\n/* MODALS */\n.modal {\n  z-index: 99999;\n  padding-top: 10%; }\n\n.modal-dialog .modal-content {\n  color: #000; }\n  .modal-dialog .modal-content .modal-header {\n    border-top-left-radius: 0.2rem;\n    border-top-right-radius: 0.2rem;\n    padding: 10px 15px; }\n    .modal-dialog .modal-content .modal-header.modal-primary {\n      color: #fff;\n      background-color: #024a88; }\n    .modal-dialog .modal-content .modal-header.modal-success {\n      color: #fff;\n      background-color: #2d922d; }\n    .modal-dialog .modal-content .modal-header.modal-info {\n      color: #fff;\n      background-color: #248dad; }\n    .modal-dialog .modal-content .modal-header.modal-warning {\n      color: #fff;\n      background-color: #f79a17; }\n    .modal-dialog .modal-content .modal-header.modal-danger {\n      color: #fff;\n      background-color: #bf1725; }\n    .modal-dialog .modal-content .modal-header i {\n      margin-right: 10px; }\n  .modal-dialog .modal-content .modal-footer {\n    padding: 10px 15px; }\n\n/*List Group*/\n.list-group .list-group-item {\n  border-radius: 0;\n  padding: 0.55rem 1.25rem;\n  color: rgba(0, 0, 0, 0.8); }\n  .list-group .list-group-item.active {\n    color: rgba(255, 255, 255, 0.9);\n    background-color: #024a88;\n    border-color: #024a88; }\n    .list-group .list-group-item.active:hover, .list-group .list-group-item.active:focus {\n      color: #fff !important; }\n  .list-group .list-group-item.disabled {\n    color: #818a91;\n    background-color: #ddd; }\n  .list-group .list-group-item:not(.disabled):focus {\n    color: #000; }\n  .list-group .list-group-item.list-group-item-primary {\n    color: #fff;\n    background-color: #024a88; }\n  .list-group .list-group-item.list-group-item-success {\n    color: #fff;\n    background-color: #2d922d; }\n  .list-group .list-group-item.list-group-item-info {\n    color: #fff;\n    background-color: #248dad; }\n  .list-group .list-group-item.list-group-item-warning {\n    color: #fff;\n    background-color: #f79a17; }\n  .list-group .list-group-item.list-group-item-danger {\n    color: #fff;\n    background-color: #bf1725; }\n\n/*Forms*/\n.has-success .form-control-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%232d922d' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\"); }\n\n.has-success .form-control {\n  border-color: rgba(45, 146, 45, 0.8); }\n  .has-success .form-control:focus {\n    box-shadow: none;\n    border-color: rgba(45, 146, 45, 0.5); }\n\n.has-success .form-control-feedback, .has-success .form-control-label, .has-success .form-check-label, .has-success .form-check-inline, .has-success .custom-control {\n  color: #2d922d; }\n\n.has-warning .form-control-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f79a17' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\"); }\n\n.has-warning .form-control {\n  border-color: rgba(247, 154, 23, 0.8); }\n  .has-warning .form-control:focus {\n    box-shadow: none;\n    border-color: rgba(247, 154, 23, 0.5); }\n\n.has-warning .form-control-feedback, .has-warning .form-control-label, .has-warning .form-check-label, .has-warning .form-check-inline, .has-warning .custom-control {\n  color: #f79a17; }\n\n.has-danger .form-control-danger {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23bf1725' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\"); }\n\n.has-danger .form-control {\n  border-color: rgba(191, 23, 37, 0.8); }\n  .has-danger .form-control:focus {\n    box-shadow: none;\n    border-color: rgba(191, 23, 37, 0.5); }\n\n.has-danger .form-control-feedback, .has-danger .form-control-label, .has-danger .form-check-label, .has-danger .form-check-inline, .has-danger .custom-control {\n  color: #bf1725; }\n\n.form-group label {\n  margin-bottom: 2px; }\n\n.help-block {\n  color: #555;\n  font-size: 12px; }\n\n.form-control {\n  border-radius: 0;\n  font-size: 14px; }\n  .form-control:focus {\n    border-color: rgba(85, 85, 85, 0.5); }\n  .form-control.checking-field.ng-touched {\n    padding-right: 2.25rem;\n    background-repeat: no-repeat;\n    background-position: center right 0.625rem;\n    background-size: 1.25rem 1.25rem; }\n    .form-control.checking-field.ng-touched.ng-invalid {\n      border-color: #bf1725;\n      background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23bf1725' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\"); }\n    .form-control.checking-field.ng-touched.ng-valid {\n      border-color: #2d922d;\n      background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%232d922d' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\"); }\n\n.form-control-rounded {\n  border-radius: 16px; }\n\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n  color: rgba(85, 85, 85, 0.7); }\n\n.input-group .input-group-addon {\n  padding: .3rem .7rem .3rem .7rem;\n  border-radius: 0; }\n\n.input-group-btn .btn {\n  padding: .36rem .9rem .36rem .9rem;\n  font-size: 17px; }\n\n.input-group .form-control:not(:first-child),\n.input-group-addon:not(:first-child),\n.input-group-btn:not(:first-child) > .btn,\n.input-group-btn:not(:first-child) > .btn-group > .btn,\n.input-group-btn:not(:first-child) > .dropdown-toggle,\n.input-group-btn:not(:last-child) > .btn:not(:first-child),\n.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n  border-radius: 0; }\n\nselect.form-control:not([multiple]) option {\n  color: rgba(0, 0, 0, 0.8); }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.5rem - 5px); }\n\ninput[type=\"color\"].form-control {\n  padding: 0; }\n\n.form-inline .form-group input {\n  width: 100%; }\n\n.dropdown-menu {\n  padding-top: 0;\n  padding-bottom: 0;\n  border-radius: 0;\n  font-size: 14px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); }\n  .dropdown-menu a {\n    color: #242D3A; }\n    .dropdown-menu a:hover {\n      color: #fff;\n      background-color: #242D3A; }\n  .dropdown-menu:before {\n    content: \" \";\n    position: absolute;\n    top: -12px;\n    left: 30px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 6px solid transparent;\n    border-bottom-color: #fff; }\n\n.dropdown-divider {\n  margin: 0.2rem 0; }\n\n.custom-control.custom-checkbox .custom-control-indicator {\n  border-radius: 0.1rem; }\n\n.custom-control.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\n  background-color: rgba(85, 85, 85, 0.7);\n  border: 1px solid #555;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\"); }\n\n.custom-control.custom-checkbox .custom-control-input.checkbox-primary:checked ~ .custom-control-indicator {\n  background-color: #024a88;\n  border: none; }\n\n.custom-control.custom-checkbox .custom-control-input.checkbox-success:checked ~ .custom-control-indicator {\n  background-color: #2d922d;\n  border: none; }\n\n.custom-control.custom-checkbox .custom-control-input.checkbox-info:checked ~ .custom-control-indicator {\n  background-color: #248dad;\n  border: none; }\n\n.custom-control.custom-checkbox .custom-control-input.checkbox-warning:checked ~ .custom-control-indicator {\n  background-color: #f79a17;\n  border: none; }\n\n.custom-control.custom-checkbox .custom-control-input.checkbox-danger:checked ~ .custom-control-indicator {\n  background-color: #bf1725;\n  border: none; }\n\n.custom-control.custom-checkbox .custom-control-input.checkbox-main:checked ~ .custom-control-indicator {\n  background-color: #242D3A;\n  border: none; }\n\n.custom-control.custom-checkbox .custom-control-input.checkbox-circle ~ .custom-control-indicator {\n  border-radius: 50%; }\n\n.custom-control.custom-radio .custom-control-input:checked ~ .custom-control-indicator {\n  background-color: rgba(85, 85, 85, 0.7);\n  border: 1px solid #555;\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\n  background-origin: border-box; }\n\n.custom-control.custom-radio .custom-control-input.radio-primary:checked ~ .custom-control-indicator {\n  background-color: #024a88;\n  border: none; }\n\n.custom-control.custom-radio .custom-control-input.radio-success:checked ~ .custom-control-indicator {\n  background-color: #2d922d;\n  border: none; }\n\n.custom-control.custom-radio .custom-control-input.radio-info:checked ~ .custom-control-indicator {\n  background-color: #248dad;\n  border: none; }\n\n.custom-control.custom-radio .custom-control-input.radio-warning:checked ~ .custom-control-indicator {\n  background-color: #f79a17;\n  border: none; }\n\n.custom-control.custom-radio .custom-control-input.radio-danger:checked ~ .custom-control-indicator {\n  background-color: #bf1725;\n  border: none; }\n\n.custom-control.custom-radio .custom-control-input.radio-main:checked ~ .custom-control-indicator {\n  background-color: #242D3A;\n  border: none; }\n\n.custom-control .custom-control-input:focus ~ .custom-control-indicator {\n  box-shadow: none !important; }\n\n.custom-control .custom-control-description {\n  margin-top: 2px; }\n\n.custom-select, .custom-select:focus {\n  background: rgba(255, 255, 255, 0.1) url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px; }\n\n/*Inputs, Select*/\n.custom-select {\n  width: 100%; }\n\n/*Badge*/\n.badge {\n  font-weight: normal;\n  line-height: 1.4;\n  letter-spacing: 0.03em; }\n  .badge.badge-primary {\n    background-color: #024a88; }\n  .badge.badge-info {\n    background-color: #248dad; }\n  .badge.badge-danger {\n    background-color: #bf1725; }\n  .badge.badge-success {\n    background-color: #2d922d; }\n  .badge.badge-warning {\n    background-color: #f79a17; }\n  .badge.badge-dark {\n    background-color: #000; }\n  .badge.badge-main {\n    background-color: #242D3A; }\n\n/*Media objects*/\ncode {\n  background-color: #e9ebee; }\n\n/*** Slim-scroll ***/\n.slimScrollBar, .slimScrollRail {\n  border-radius: 0px !important;\n  width: 4px !important; }\n\n/*** Pace ***/\n.pace .pace-progress {\n  background: #637CA0;\n  position: absolute;\n  height: 3px;\n  z-index: 0; }\n\n.pace .pace-activity {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  border-width: 1px;\n  right: auto;\n  width: 18px;\n  height: 18px;\n  border-top-color: #242D3A;\n  border-left-color: #242D3A; }\n\n/*** Full Calendar ***/\n.fc {\n  color: #242424; }\n\n.fc-toolbar button {\n  border-radius: 0 !important;\n  background: transparent;\n  border: 1px solid #555;\n  color: #242424;\n  text-shadow: none !important;\n  box-shadow: none !important; }\n  .fc-toolbar button:hover, .fc-toolbar button:focus, .fc-toolbar button.fc-state-active {\n    background: #242D3A;\n    color: #fff; }\n  .fc-toolbar button:first-letter {\n    text-transform: capitalize; }\n  .fc-toolbar button.fc-state-disabled {\n    background: #ccc; }\n    .fc-toolbar button.fc-state-disabled:hover {\n      cursor: not-allowed; }\n\n.fc-toolbar .fc-center h2 {\n  font-size: 22px;\n  margin-top: 3px; }\n\n.fc-event {\n  border: none; }\n\n.fc-day-grid-event {\n  padding: 2px 4px; }\n\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n  background: #ccc; }\n\n.fc-list-item:hover td {\n  background-color: #ccc; }\n\n@media (max-width: 543px) {\n  .fc .fc-toolbar > * > * {\n    float: none; }\n  .fc-toolbar .fc-left {\n    float: none; }\n  .fc-toolbar .fc-right {\n    float: none; }\n  .fc .fc-toolbar > * > :first-child {\n    vertical-align: top; } }\n\n.draggable {\n  cursor: move; }\n\n/*** Dropzone ***/\n.dropzone {\n  border: 2px dashed #ccc;\n  background: #f1f1f1;\n  min-height: 220px; }\n  .dropzone .dz-preview .dz-remove {\n    font-size: 12px;\n    border: 1px solid #ccc;\n    border-radius: 10px;\n    color: #fff; }\n  .dropzone .dz-preview.dz-image-preview {\n    background: transparent; }\n  .dropzone .dz-preview .dz-error-mark, .dropzone .dz-preview .dz-success-mark {\n    margin-top: -38px; }\n\n/*** Froala editor ***/\n.fr-wrapper {\n  min-height: 300px; }\n\n/* perfect-scrollbar v0.6.16 */\n.ps-container {\n  -ms-touch-action: auto;\n  touch-action: auto;\n  overflow: hidden !important;\n  -ms-overflow-style: none; }\n\n@supports (-ms-overflow-style: none) {\n  .ps-container {\n    overflow: auto !important; } }\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps-container {\n    overflow: auto !important; } }\n\n.ps-container.ps-active-x > .ps-scrollbar-x-rail,\n.ps-container.ps-active-y > .ps-scrollbar-y-rail {\n  display: block;\n  background-color: transparent; }\n\n.ps-container.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail > .ps-scrollbar-x {\n  background-color: #999;\n  height: 7px; }\n\n.ps-container.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  background-color: #999;\n  width: 5px; }\n\n.ps-container > .ps-scrollbar-x-rail {\n  display: none;\n  position: absolute;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  bottom: 0px;\n  height: 10px; }\n\n.ps-container > .ps-scrollbar-x-rail > .ps-scrollbar-x {\n  position: absolute;\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\n  bottom: 1px;\n  height: 5px; }\n\n.ps-container > .ps-scrollbar-x-rail:hover > .ps-scrollbar-x, .ps-container > .ps-scrollbar-x-rail:active > .ps-scrollbar-x {\n  height: 11px; }\n\n.ps-container > .ps-scrollbar-y-rail {\n  display: none;\n  position: absolute;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  right: 0;\n  width: 7px; }\n\n.ps-container > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  position: absolute;\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s linear, width .2s ease-in-out, border-radius .2s ease-in-out;\n  right: 1px;\n  width: 5px; }\n\n.ps-container > .ps-scrollbar-y-rail:hover > .ps-scrollbar-y, .ps-container > .ps-scrollbar-y-rail:active > .ps-scrollbar-y {\n  width: 5px; }\n\n.ps-container:hover.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container:hover.ps-in-scrolling.ps-x > .ps-scrollbar-x-rail > .ps-scrollbar-x {\n  background-color: #999;\n  height: 5px; }\n\n.ps-container:hover.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container:hover.ps-in-scrolling.ps-y > .ps-scrollbar-y-rail > .ps-scrollbar-y {\n  background-color: #999;\n  width: 5px; }\n\n.ps-container:hover > .ps-scrollbar-x-rail,\n.ps-container:hover > .ps-scrollbar-y-rail {\n  opacity: 0.6; }\n\n.ps-container:hover > .ps-scrollbar-x-rail:hover {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container:hover > .ps-scrollbar-x-rail:hover > .ps-scrollbar-x {\n  background-color: #999; }\n\n.ps-container:hover > .ps-scrollbar-y-rail:hover {\n  background-color: #eee;\n  opacity: 0.9; }\n\n.ps-container:hover > .ps-scrollbar-y-rail:hover > .ps-scrollbar-y {\n  background-color: #999; }\n\n* {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400; }\n\nhtml {\n  height: 100%;\n  min-height: 100%; }\n\nbody {\n  height: 100%;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  color: #242424; }\n\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  font-weight: normal; }\n  h1 small, h2 small, h3 small, h4 small, h5 small, h6 small, .h1 small, .h2 small, .h3 small, .h4 small, .h5 small, .h6 small {\n    font-size: 70%; }\n\n.transition {\n  transition: .3s; }\n\n.widget-controls {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  padding: 10px 20px;\n  font-size: 14px; }\n  .widget-controls a {\n    color: #fff;\n    margin-left: 7px;\n    line-height: 1;\n    vertical-align: top;\n    display: inline-block; }\n    .widget-controls a:hover {\n      color: rgba(255, 255, 255, 0.7); }\n    .widget-controls a.dropdown-toggle:after {\n      display: none; }\n  .widget-controls ul.dropdown-menu {\n    min-width: 9rem;\n    padding: 0;\n    border-radius: 0; }\n    .widget-controls ul.dropdown-menu li {\n      padding: 4px;\n      overflow: hidden; }\n      .widget-controls ul.dropdown-menu li a {\n        color: #242D3A;\n        font-size: 13px;\n        width: 100%; }\n      .widget-controls ul.dropdown-menu li:hover {\n        background-color: #242D3A; }\n      .widget-controls ul.dropdown-menu li:hover a {\n        color: #fff; }\n\n.card.fullscreened .card-header {\n  line-height: 35px; }\n  .card.fullscreened .card-header .widget-controls {\n    padding: 20px; }\n    .card.fullscreened .card-header .widget-controls a {\n      margin-left: 12px; }\n    .card.fullscreened .card-header .widget-controls a.setting {\n      display: none; }\n\n.card.fullscreened.card-primary {\n  background: #024a88; }\n\n.card.fullscreened.card-success {\n  background: #2d922d; }\n\n.card.fullscreened.card-info {\n  background: #248dad; }\n\n.card.fullscreened.card-warning {\n  background: #f79a17; }\n\n.card.fullscreened.card-danger {\n  background: #bf1725; }\n\n.scrolling {\n  height: 100%;\n  overflow-y: scroll;\n  padding-bottom: 60px; }\n\n.no-margin {\n  margin: 0; }\n\n.bottom-15 {\n  margin-bottom: 15px; }\n\n.bottom-30 {\n  margin-bottom: 30px; }\n\n.m-t-5 {\n  margin-top: 5px; }\n\n.m-t-15 {\n  margin-top: 15px; }\n\n.mbm-20 {\n  margin-bottom: -20px; }\n\n.res-img {\n  width: 100%; }\n\n.chart-outher {\n  width: 55%;\n  margin: 0 auto; }\n\n.p-t-10 {\n  padding-top: 10%; }\n\n.o-visible {\n  overflow: visible; }\n\n.w-150 {\n  width: 150px; }\n\n.w-200 {\n  width: 200px; }\n\n.w-100p {\n  width: 100%; }\n\n.h-100p {\n  height: 100%; }\n\n@media (max-width: 543px) {\n  .chart-outher {\n    width: 100%; } }\n\n@media (min-width: 544px) and (max-width: 767px) {\n  .chart-outher {\n    width: 85%; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .chart-outher {\n    width: 65%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n         <div class=\"col-xl-4 col-md-6 col-10 offset-xl-4 offset-md-3 offset-1 p-t-10\">             \n             <div class=\"card\">\n                <div class=\"card-block text-center\">\n                    <h1 class=\"display-1\">404</h1>\n                    <h6 class=\"card-title\">Opps, it seems that this page does not exist.</h6>\n                    <p class=\"card-text\"> If you are sure it should, search for it.</p>\n                    \n                    <form method=\"get\">\n                        <div class=\"form-group\">\n                            <input class=\"form-control\" placeholder=\"Enter search keyword...\" type=\"text\">\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-main\" type=\"button\" (click)=\"searchResult()\"><i class=\"fa fa-search\"></i> Submit</button>\n                        </div>\n                    </form>\n\n                </div>\n             </div>\n         </div>\n    </div>\n </div>\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent(router) {
        this.router = router;
    }
    ErrorComponent.prototype.searchResult = function () {
        this.router.navigate(['pages/search']);
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-error',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(248)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=error.component.js.map

/***/ })

},[263]);
//# sourceMappingURL=main.bundle.js.map