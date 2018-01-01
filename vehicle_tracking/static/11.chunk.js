webpackJsonp([11,25],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_directives_directives_module__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__buttons_buttons_component__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cards_cards_component__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_component__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid_grid_component__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_group_list_group_component__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__media_objects_media_objects_component__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabs_accordions_tabs_accordions_component__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__ = __webpack_require__(774);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: 'buttons', pathMatch: 'full' },
    { path: 'buttons', component: __WEBPACK_IMPORTED_MODULE_4__buttons_buttons_component__["a" /* ButtonsComponent */], data: { breadcrumb: 'Buttons' } },
    { path: 'cards', component: __WEBPACK_IMPORTED_MODULE_5__cards_cards_component__["a" /* CardsComponent */], data: { breadcrumb: 'Cards' } },
    { path: 'components', component: __WEBPACK_IMPORTED_MODULE_6__components_components_component__["a" /* ComponentsComponent */], data: { breadcrumb: 'Components' } },
    { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__["a" /* IconsComponent */], data: { breadcrumb: 'Icons' } },
    { path: 'grid', component: __WEBPACK_IMPORTED_MODULE_8__grid_grid_component__["a" /* GridComponent */], data: { breadcrumb: 'Grid' } },
    { path: 'list-group', component: __WEBPACK_IMPORTED_MODULE_9__list_group_list_group_component__["a" /* ListGroupComponent */], data: { breadcrumb: 'List Group' } },
    { path: 'media-objects', component: __WEBPACK_IMPORTED_MODULE_10__media_objects_media_objects_component__["a" /* MediaObjectsComponent */], data: { breadcrumb: 'Media Objects' } },
    { path: 'tabs-accordions', component: __WEBPACK_IMPORTED_MODULE_11__tabs_accordions_tabs_accordions_component__["a" /* TabsAccordionsComponent */], data: { breadcrumb: 'Tabs & Accordions' } },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__["a" /* TypographyComponent */], data: { breadcrumb: 'Typography' } }
];
var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__buttons_buttons_component__["a" /* ButtonsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__cards_cards_component__["a" /* CardsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_components_component__["a" /* ComponentsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__grid_grid_component__["a" /* GridComponent */],
            __WEBPACK_IMPORTED_MODULE_9__list_group_list_group_component__["a" /* ListGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_10__media_objects_media_objects_component__["a" /* MediaObjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__tabs_accordions_tabs_accordions_component__["a" /* TabsAccordionsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__typography_typography_component__["a" /* TypographyComponent */]
        ]
    })
], UiModule);

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Counter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Counter = (function () {
    function Counter(_elementRef) {
        this.element = jQuery(_elementRef.nativeElement);
    }
    Counter.prototype.ngAfterViewInit = function () {
        var elem = this.element, count = this.count, increment = this.increment, interval = this.interval;
        function counter() {
            count = count + increment;
            setTimeout(function () { return counter(); }, interval * 1000);
            elem.html(count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        counter();
    };
    return Counter;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Counter.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Counter.prototype, "interval", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Counter.prototype, "increment", void 0);
Counter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[counter]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Counter);

var _a;
//# sourceMappingURL=counter.directive.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slim_scroll_slim_scroll_directive__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widget_widget_directive__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skycon_skycon_directive__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__counter_counter_directive__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_tile_live_tile_directive__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_animate_progress_animate_directive__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dropzone_dropzone_directive__ = __webpack_require__(312);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__slim_scroll_slim_scroll_directive__["a" /* SlimScroll */],
            __WEBPACK_IMPORTED_MODULE_3__widget_widget_directive__["a" /* Widget */],
            __WEBPACK_IMPORTED_MODULE_4__skycon_skycon_directive__["a" /* Skycon */],
            __WEBPACK_IMPORTED_MODULE_5__counter_counter_directive__["a" /* Counter */],
            __WEBPACK_IMPORTED_MODULE_6__live_tile_live_tile_directive__["a" /* LiveTile */],
            __WEBPACK_IMPORTED_MODULE_7__progress_animate_progress_animate_directive__["a" /* ProgressAnimate */],
            __WEBPACK_IMPORTED_MODULE_8__dropzone_dropzone_directive__["a" /* DropzoneUpload */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__slim_scroll_slim_scroll_directive__["a" /* SlimScroll */],
            __WEBPACK_IMPORTED_MODULE_3__widget_widget_directive__["a" /* Widget */],
            __WEBPACK_IMPORTED_MODULE_4__skycon_skycon_directive__["a" /* Skycon */],
            __WEBPACK_IMPORTED_MODULE_5__counter_counter_directive__["a" /* Counter */],
            __WEBPACK_IMPORTED_MODULE_6__live_tile_live_tile_directive__["a" /* LiveTile */],
            __WEBPACK_IMPORTED_MODULE_7__progress_animate_progress_animate_directive__["a" /* ProgressAnimate */],
            __WEBPACK_IMPORTED_MODULE_8__dropzone_dropzone_directive__["a" /* DropzoneUpload */]
        ]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneUpload; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropzoneUpload = (function () {
    function DropzoneUpload(el) {
        this.$el = jQuery(el.nativeElement);
    }
    DropzoneUpload.prototype.ngOnInit = function () {
        var dropzone = new Dropzone(this.$el[0], {
            addRemoveLinks: true
        });
        Dropzone.autoDiscover = false;
        // Dropzone.options.myAwesomeDropzone = false;
    };
    return DropzoneUpload;
}());
DropzoneUpload = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[dropzone]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], DropzoneUpload);

var _a;
//# sourceMappingURL=dropzone.directive.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metrojs_release_MetroJs_Full_MetroJs__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metrojs_release_MetroJs_Full_MetroJs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metrojs_release_MetroJs_Full_MetroJs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveTile; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveTile = (function () {
    function LiveTile(el) {
        this.$el = jQuery(el.nativeElement);
    }
    LiveTile.prototype.ngOnInit = function () {
        this.$el
            .css('height', this.$el.data('height'))
            .liveTile();
    };
    return LiveTile;
}());
LiveTile = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[live-tile]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], LiveTile);

var _a;
//# sourceMappingURL=live-tile.directive.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressAnimate; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressAnimate = (function () {
    function ProgressAnimate(_elementRef) {
        this._elementRef = _elementRef;
        this.element = jQuery(_elementRef.nativeElement);
    }
    ProgressAnimate.prototype.ngOnInit = function () {
        var elem = this.element, progress = 0, timeout = 0, increment = 1, maxprogress = elem.attr('aria-valuenow');
        function animate() {
            setTimeout(function () {
                progress += increment;
                if (progress < maxprogress) {
                    elem.css('width', progress + '%');
                    animate();
                }
            }, timeout);
        }
        ;
        animate();
    };
    return ProgressAnimate;
}());
ProgressAnimate = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[progress-animate]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ProgressAnimate);

var _a;
//# sourceMappingURL=progress-animate.directive.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_skycons_skycons__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_skycons_skycons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_skycons_skycons__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skycon; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Skycon = (function () {
    function Skycon(el) {
        this.$el = jQuery(el.nativeElement);
    }
    Skycon.prototype.ngOnInit = function () {
        var icons = new Skycons({ 'color': this.color });
        icons.set(this.$el[0], this.weather);
        icons.play();
    };
    return Skycon;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Skycon.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Skycon.prototype, "weather", void 0);
Skycon = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[skycon]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Skycon);

var _a;
//# sourceMappingURL=skycon.directive.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlimScroll; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlimScroll = (function () {
    function SlimScroll(_elementRef) {
        this._elementRef = _elementRef;
    }
    SlimScroll.prototype.ngOnChanges = function (changes) {
        this._scroll();
    };
    SlimScroll.prototype._scroll = function () {
        this._destroy();
        this._init();
    };
    SlimScroll.prototype._init = function () {
        jQuery(this._elementRef.nativeElement).slimScroll(this.slimScrollOptions);
    };
    SlimScroll.prototype._destroy = function () {
        jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
    };
    return SlimScroll;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SlimScroll.prototype, "slimScrollOptions", void 0);
SlimScroll = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[slim-scroll]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SlimScroll);

var _a;
//# sourceMappingURL=slim-scroll.directive.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgster__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_widgster__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Widget = (function () {
    function Widget(el) {
        this.$el = jQuery(el.nativeElement);
        jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';
        jQuery(document).on('close.widgster', function (e) {
            var $colWrap = jQuery(e.target).closest(' [class*="col-"]:not(.widget-container)');
            if (!$colWrap.find('.widget').not(e.target).length) {
                $colWrap.remove();
            }
        });
        jQuery(document).on("fullscreened.widgster", function (e) {
            jQuery(e.target).find('div.widget-body').addClass('scrolling');
        }).on("restored.widgster", function (e) {
            jQuery(e.target).find('div.widget-body').removeClass('scrolling');
        });
    }
    Widget.prototype.ngOnInit = function () {
        this.$el.widgster();
    };
    return Widget;
}());
Widget = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[widget]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Widget);

var _a;
//# sourceMappingURL=widget.directive.js.map

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);


/***/ }),

/***/ 320:
/***/ (function(module, exports) {

/*!
* Metro JS for jQuery
* http://drewgreenwell.com/ 
* For details and usage info see: http://drewgreenwell.com/projects/metrojs

Copyright (C) 2013, Drew Greenwell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;(function ($) {
    // the metrojs object contains helper methods and theme settings
    $.fn.metrojs = {
        capabilities: null,
        checkCapabilities: function(stgs, recheck){
            if($.fn.metrojs.capabilities == null || (typeof(recheck) != "undefined" && recheck == true))
                $.fn.metrojs.capabilities = new $.fn.metrojs.MetroModernizr(stgs);
            return  $.fn.metrojs.capabilities;
        }
    };
	var metrojs = $.fn.metrojs,
		console = window.console;	
	if (typeof console !== "object") {
		console = {};
		console.log = function() {};
		console.error=function() {};
	}
	var throwError = typeof ($.error) === "function" ? $.error : console.error;
var MAX_LOOP_COUNT = 99000;
// .liveTile
$.fn.liveTile = function (method) {
	if (pubMethods[method]) {
		var args = [];
		for (var i = 1; i <= arguments.length; i++) {
			args[i - 1] = arguments[i];
		}
		return pubMethods[method].apply(this, args);
	} else if (typeof method === 'object' || !method) {
		return pubMethods.init.apply(this, arguments);
	} else {
		$.error('Method ' + method + ' does not exist on jQuery.liveTile');
		return null;
	}
};


$.fn.liveTile.contentModules = {
	modules: [],
	/* the default module layout
    [
        defaultModules.imageSwap,
        defaultModules.htmlSwap
    ],*/
	addContentModule: function (moduleName, module) {
		if (!(this.modules instanceof Array))
			this.modules = [];
		this.modules.push(module);
	},
	hasContentModule: function (moduleName) {
		if (typeof (moduleName) === "undefined" || !(this.modules instanceof Array))
			return -1;
		for (var i = 0; i < this.modules.length; i++) {
			if (typeof (this.modules[i].moduleName) != "undefined" && this.modules[i].moduleName == moduleName)
				return i;
		}
		return -1;
	}
};

// default option values for .liveTile
$.fn.liveTile.defaults = {
	mode: 'slide',                          // 'fade', 'slide', 'flip', 'flip-list', carousel
	speed: 500,                             // how fast should animations be performed, in milliseconds
	initDelay: -1,                          // how long to wait before the initial animation
	delay: 5000,                            // how long to wait between animations 
	stops: "100%",                          // how much of the back tile should 'slide' reveal before starting a delay
	stack: false,                           // should tiles in slide mode appear stacked (e.g Me tile) 
	direction: 'vertical',                  // which direction should animations be performed(horizontal | vertical)
	animationDirection: 'forward',          // the direction that carousel mode uses to determine which way to slide in tiles
	tileSelector: '>div,>li,>p,>img,>a',    // the selector used by carousel mode and flip-list to choose tile containers
	tileFaceSelector: '>div,>li,>p,>img,>a',// the selector used to choose the front and back containers
	ignoreDataAttributes: false,            // should data attributes be ignored
	click: null,                            // function ($tile, tdata) { return true; }
	link: '',                               // a url to go to when clicked
	newWindow: false,                       // should the link be opened in a new window
	bounce: false,                          // should the tile shrink when tapped
	bounceDirections: 'all',                // which direction the tile will tile 'all', 'edges, 'corners'
	bounceFollowsMove: true,                // should a tile in bounce state tilt in the direction of the mouse as it moves
	pauseOnHover: false,                    // should tile animations be paused on hover in and restarted on hover out
	pauseOnHoverEvent: 'both',              // pause is called on mouseover, mouseout, or both
	playOnHover: false,                     // should "play" be called on hover
	playOnHoverEvent: 'both',               // play is called on mouseover, mouseout, or both
	onHoverDelay: 0,						// the amount of time to wait before the onHover event is fired
	onHoverOutDelay: 200,					// the amount of time in addition to the speed to wait before the onHoverOut event is fired
	repeatCount: -1,                        // number of times to repeat the animation        
	appendBack: true,                       // appends the .last tile if one doesnt exist (slide and flip only)        
	alwaysTrigger: false,                   // should every item in a flip list trigger every time a delay passes 
	flipListOnHover: false,                 // should items in flip-list flip and stop when hovered
	flipListOnHoverEvent: 'mouseout',       // which event should be used to trigger the flip-list faces
	noHAflipOpacity: '1',                   // the opacity level set for the backside of the flip animation on unaccelerated browsers
	haTransFunc: 'ease',                    // the tranisiton-timing function to use in hardware accelerated mode
	noHaTransFunc: 'linear',                // the tranisiton-timing function to use in non hardware accelerated mode
	currentIndex: 0,                        // what is the current stop index for slide mode or slide index for carousel mode
	startNow: true,                         // should the tile immediately start or wait util play or restart has been called
	useModernizr: (typeof (window.Modernizr) !== "undefined"), // checks to see if modernizer is already in use
	useHardwareAccel: true,                 // should css animations, transitions and transforms be used when available
	useTranslate: true,
	faces: {
		$front: null,                        // the jQuery element to use as the front face of the tile; this will bypass tileCssSelector
		$back: null                          // the jQuery element to use as the back face of the tile; this will bypass tileCssSelector
	},
	animationStarting: function (tileData, $front, $back) {
		// returning false will cancel the animation
	},
	animationComplete: function (tileData, $front, $back) {
	},
	triggerDelay: function (idx) {          // used by flip-list to decide how random the tile flipping should be
		return Math.random() * 3000;
	},
	swap: '',                               // which swap modules are active for this tile (image, html)
	swapFront: '-',                         // override the available swap modules for the front face
	swapBack: '-',                          // override the available swap modules for the back face
	contentModules: [],
	rebindMessage: "tile data is missing. Are you missing a call to rebind or destroy? You may also be able to avoid this error by calling stop or pause"
};
// public methods that can be called via .liveTile(method name)
var pubMethods = {
	init: function (options) {
		// Setup the public options for the livetile
		var settings = $.extend({}, $.fn.liveTile.defaults, options);
		// checks for browser feature support to enable hardware acceleration                        
		metrojs.checkCapabilities(settings);
		helperMethods.getBrowserPrefix();
		// setup the default content modules
		if ($.fn.liveTile.contentModules.hasContentModule("image") == -1)
			$.fn.liveTile.contentModules.addContentModule("image", defaultModules.imageSwap);
		if ($.fn.liveTile.contentModules.hasContentModule("html") == -1)
			$.fn.liveTile.contentModules.addContentModule("html", defaultModules.htmlSwap);
		// this is where the magic happens
		return $(this).each(function (tileIndex, ele) {
			var $this = $(ele),
            data = privMethods.initTileData($this, settings);
			// append back tiles and add appropriate classes to prepare tiles
			data.faces = privMethods.prepTile($this, data);
			// action methods
			data.fade = function (count) { privMethods.fade($this, count); };
			data.slide = function (count) { privMethods.slide($this, count); };
			data.carousel = function (count) { privMethods.carousel($this, count); };
			data.flip = function (count) { privMethods.flip($this, count); };
			data.flipList = function (count) { privMethods.flipList($this, count); };
			var actions = {
				fade: data.fade,
				slide: data.slide,
				carousel: data.carousel,
				flip: data.flip,
				'flip-list': data.flipList
			};
			data.doAction = function (count) {
				// get the action for the current mode
				var action = actions[data.mode];
				if (typeof (action) === "function") {
					action(count);
					data.hasRun = true;
				}
				// prevent pauseOnHover from resuming a tile that has finished
				if (count == data.timer.repeatCount)
					data.runEvents = false;
			};

			// create a new tile timer
			data.timer = new $.fn.metrojs.TileTimer(data.delay, data.doAction, data.repeatCount);
			// apply the data
			$this.data("LiveTile", data);
			// handle events
			// only bind pause / play on hover if we are not using a fliplist or flipListOnHover isn't set set
			if (data.mode !== "flip-list" || data.flipListOnHover == false) {
				if (data.pauseOnHover) {
					privMethods.bindPauseOnHover($this);
				} else if (data.playOnHover) {
					privMethods.bindPlayOnHover($this, data);
				}
			}
			// add a click / link to the tile
			if (data.link.length > 0 || typeof (data.click) === "function") {
				$this.css({ cursor: 'pointer' }).bind("click.liveTile", function (e) {
					var proceed = true;
					if (typeof (data.click) === "function") {
						proceed = data.click($this, data) || false;
					}
					if (proceed && data.link.length > 0) {
						e.preventDefault();
						if (data.newWindow)
							window.open(data.link);
						else
							window.location = data.link;
					}
				});
			}
			// add bounce if set            
			privMethods.bindBounce($this, data);
			// start timer
			if (data.startNow && data.mode != "none") {
				data.runEvents = true;
				data.timer.start(data.initDelay);
			}
		});
	},
	// goto is a future reserved word
	'goto': function (options) {
		var opts, t = typeof (options);
		if (t === "undefined") {
			opts = {
				index: -99, //  same as next
				delay: 0,
				autoAniDirection: false
			};
		}
		if (t === "number" || !isNaN(options)) {
			opts = {
				index: parseInt(options, 10),
				delay: 0
			};
		} else if (t === "string") {
			if (options == "next") {
				opts = {
					index: -99,
					delay: 0
				};
			} else if (options.indexOf("prev") === 0) {
				opts = {
					index: -100,
					delay: 0
				};
			} else {
				$.error(options + " is not a recognized action for .liveTile(\"goto\")");
				return $(this);
			}
		} else if (t === "object") {
			if (typeof (options.delay) === "undefined") {
				options.delay = 0;
			}
			var ti = typeof (options.index);
			if (ti === "undefined") {
				options.index = 0;
			} else if (ti === "string") {
				if (options.index === "next")
					options.index = -99;
				else if (options.index.indexOf("prev") === 0)
					options.index = -100;
			}
			opts = options;
		}
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile"),
                aniData = $tile.data("metrojs.tile"),
                goTo = opts.index;
			if (aniData.animating === true)
				return $(this);
			if (data.mode === "carousel") {
				// get the index based off of the active carousel slide
				var $cur = data.faces.$listTiles.filter(".active");
				var curIdx = data.faces.$listTiles.index($cur);
				// carousel will look for these values as triggers
				if (goTo === -100) { // prev
					// autoAniDirection determines if a forward or backward animation should be used based on the goTo index
					if (typeof (opts.autoAniDirection) === "undefined" || opts.autoAniDirection == true)
						data.tempValues.animationDirection = typeof (opts.animationDirection) === "undefined" ? "backward" : opts.animationDirection;
					goTo = curIdx === 0 ? data.faces.$listTiles.length - 1 : curIdx - 1;
				} else if (goTo === -99) { // next
					if (typeof (opts.autoAniDirection) === "undefined" || opts.autoAniDirection == true)
						data.tempValues.animationDirection = typeof (opts.animationDirection) === "undefined" ? "forward" : opts.animationDirection;
					goTo = curIdx + 1;
				}
				if (curIdx == goTo) {
					return;
				}
				if (typeof (opts.direction) !== "undefined") {
					data.tempValues.direction = opts.direction;
				}
				if (typeof (opts.animationDirection) !== "undefined") {
					data.tempValues.animationDirection = opts.animationDirection;
				}
				// the index is offset by 1 and incremented on animate
				if (goTo == 0)
					data.currentIndex = data.faces.$listTiles.length;
				else
					data.currentIndex = goTo - 1;
			} else // slide mode will use the index directly
				data.currentIndex = goTo;
			// start the timer
			data.runEvents = true;
			data.timer.start(opts.delay >= 0 ? opts.delay : data.delay);
		});
	},
	play: function (options) {
		var opts, t = typeof (options);
		if (t === "undefined") {
			opts = {
				delay: -1
			};
		} else if (t === "number") {
			opts = {
				delay: options
			};
		} else if (t === "object") {
			if (typeof (options.delay) === "undefined") {
				options.delay = -1;
			}
			opts = options;
		}
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile");
			data.runEvents = true;
			if (opts.delay < 0 && !data.hasRun)
				opts.delay = data.initDelay;
			data.timer.start(opts.delay >= 0 ? opts.delay : data.delay);
		});
	},
	animate: function () { // this is really only useful for certain edge cases in slide mode, use 'play' to toggle animations
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile");
			data.doAction();
		});
	},
	stop: function () {
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile");
			data.hasRun = false;
			data.runEvents = false;
			data.timer.stop();
			window.clearTimeout(data.eventTimeout);
			window.clearTimeout(data.flCompleteTimeout);
			window.clearTimeout(data.completeTimeout);
			if (data.mode === "flip-list") {
				data.faces.$listTiles.each(function (idx, li) {
					var ldata = $(li).data("metrojs.tile");
					window.clearTimeout(ldata.eventTimeout);
					window.clearTimeout(ldata.flCompleteTimeout);
					window.clearTimeout(ldata.completeTimeout);
				});
			}
		});
	},
	pause: function () {
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile");
			data.timer.pause();
			data.runEvents = false;
			window.clearTimeout(data.eventTimeout);
			window.clearTimeout(data.flCompleteTimeout);
			window.clearTimeout(data.completeTimeout);
			if (data.mode === "flip-list") {
				data.faces.$listTiles.each(function (idx, li) {
					var ldata = $(li).data("metrojs.tile");
					window.clearTimeout(ldata.eventTimeout);
					window.clearTimeout(ldata.flCompleteTimeout);
					window.clearTimeout(ldata.completeTimeout);
				});
			}
		});
	},
	restart: function (options) {
		var opts, t = typeof (options);
		if (t === "undefined") {
			opts = {
				delay: -1
			};
		} else if (t === "number") {
			opts = {
				delay: options
			};
		} else if (t === "object") {
			if (typeof (options.delay) === "undefined") {
				options.delay = -1;
			}
			opts = options;
		}
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile");
			if (opts.delay < 0 && !data.hasRun)
				opts.delay = data.initDelay;
			data.hasRun = false;
			data.runEvents = true;
			data.timer.restart(opts.delay >= 0 ? opts.delay : data.delay);
		});
	},
	rebind: function (options) {
		return $(this).each(function (tileIndex, ele) {
			if (typeof (options) !== "undefined") {
				if (typeof (options.timer) !== "undefined" && options.timer != null) {
					options.timer.stop();
				}
				options.hasRun = false;
				pubMethods["init"].apply(ele, [options]);
			} else {
				pubMethods["init"].apply(ele, [{}]);
			}
		});
	},
	destroy: function (options) {
		var t = typeof (options), opts;
		if (t === "undefined") {
			opts = {
				removeCss: false
			};
		} else if (t === "boolean") {
			opts = {
				removeCss: options
			};
		} else if (t === "object") {
			if (typeof (options.removeCss) === "undefined") {
				options.removeCss = false;
			}
			opts = options;
		}
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele);
			var data = $tile.data("LiveTile");
			if (typeof (data) === "undefined")
				return;
			$tile.unbind(".liveTile");
			var resetCss = helperMethods.appendStyleProperties({ margin: '', cursor: '' }, ['transform', 'transition'], ['', '']);
			data.timer.stop();
			window.clearTimeout(data.eventTimeout);
			window.clearTimeout(data.flCompleteTimeout);
			window.clearTimeout(data.completeTimeout);
			if (data.faces.$listTiles != null) {
				data.faces.$listTiles.each(function (idx, li) {
					var $li = $(li);
					if (data.mode === "flip-list") {
						var ldata = $li.data("metrojs.tile");
						window.clearTimeout(ldata.eventTimeout);
						window.clearTimeout(ldata.flCompleteTimeout);
						window.clearTimeout(ldata.completeTimeout);
					} else if (data.mode === "carousel") {
						var sdata = data.listData[idx];
						if (sdata.bounce) {
							privMethods.unbindMsBounce($li, sdata);
						}
					}
					if (opts.removeCss) {
						$li.removeClass("ha");
						$li.find(data.tileFaceSelector)
                            .unbind(".liveTile")
                            .removeClass("bounce flip-front flip-back ha slide slide-front slide-back")
                            .css(resetCss);
					} else {
						$li.find(data.tileFaceSelector).unbind(".liveTile");
					}
					$li.removeData("metrojs.tile");
				}).unbind(".liveTile");
			}
			if (data.faces.$front != null && opts.removeCss) {
				data.faces.$front.removeClass("flip-front flip-back ha slide slide-front slide-back")
                    .css(resetCss);
			}
			if (data.faces.$back != null && opts.removeCss) {
				data.faces.$back.removeClass("flip-front flip-back ha slide slide-front slide-back")
                    .css(resetCss);
			}
			// remove the bounce and hover methods
			// todo: combine all mouse/touch events (down, move, up)
			if (data.bounce) {
				privMethods.unbindMsBounce($tile, data);
			}
			if (data.playOnHover) {
				privMethods.unbindMsPlayOnHover($tile, data);
			}
			if (data.pauseOnhover) {
				privMethods.unbindMsPauseOnHover($tile, data);
			}
			$tile.removeClass("ha");
			$tile.removeData("LiveTile");
			$tile.removeData("metrojs.tile");
			data = null;
		});
	}
};

// private methods that are called by .liveTile
var privMethods = {
	//getDataOrDefault for older versions of jQuery that dont look for 'data-' properties
	dataAtr: function ($ele, name, def) {
		return typeof ($ele.attr('data-' + name)) !== "undefined" ? $ele.attr('data-' + name) : def;
	},
	dataMethod: function ($ele, name, def) {
		return typeof ($ele.data(name)) !== "undefined" ? $ele.data(name) : def;
	},
	getDataOrDefault: null,
	initTileData: function ($tile, stgs) {
		var useData = stgs.ignoreDataAttributes == false,
            tdata = null;
		if (this.getDataOrDefault == null)
			this.getDataOrDefault = metrojs.capabilities.isOldJQuery ? this.dataAtr : this.dataMethod;
		if (useData) {
			tdata = { //an object to store settings for later access                
				speed: this.getDataOrDefault($tile, "speed", stgs.speed),
				delay: this.getDataOrDefault($tile, "delay", stgs.delay),
				stops: this.getDataOrDefault($tile, "stops", stgs.stops),
				stack: this.getDataOrDefault($tile, "stack", stgs.stack),
				mode: this.getDataOrDefault($tile, "mode", stgs.mode),
				direction: this.getDataOrDefault($tile, "direction", stgs.direction),
				useHardwareAccel: this.getDataOrDefault($tile, "ha", stgs.useHardwareAccel),
				repeatCount: this.getDataOrDefault($tile, "repeat", stgs.repeatCount),
				swap: this.getDataOrDefault($tile, "swap", stgs.swap),
				appendBack: this.getDataOrDefault($tile, "appendback", stgs.appendBack),
				currentIndex: this.getDataOrDefault($tile, "start-index", stgs.currentIndex),
				animationDirection: this.getDataOrDefault($tile, "ani-direction", stgs.animationDirection),
				startNow: this.getDataOrDefault($tile, "start-now", stgs.startNow),
				tileSelector: this.getDataOrDefault($tile, "tile-selector", stgs.tileSelector),
				tileFaceSelector: this.getDataOrDefault($tile, "face-selector", stgs.tileFaceSelector),
				bounce: this.getDataOrDefault($tile, "bounce", stgs.bounce),
				bounceDirections: this.getDataOrDefault($tile, "bounce-dir", stgs.bounceDirections),
				bounceFollowsMove: this.getDataOrDefault($tile, "bounce-follows", stgs.bounceFollowsMove),
				click: this.getDataOrDefault($tile, "click", stgs.click),
				link: this.getDataOrDefault($tile, "link", stgs.link),
				newWindow: this.getDataOrDefault($tile, "new-window", stgs.newWindow),
				alwaysTrigger: this.getDataOrDefault($tile, "always-trigger", stgs.alwaysTrigger),
				flipListOnHover: this.getDataOrDefault($tile, "flip-onhover", stgs.flipListOnHover),
				pauseOnHover: this.getDataOrDefault($tile, "pause-onhover", stgs.pauseOnHover),
				playOnHover: this.getDataOrDefault($tile, "play-onhover", stgs.playOnHover),
				onHoverDelay: this.getDataOrDefault($tile, "hover-delay", stgs.onHoverDelay),
				onHoverOutDelay: this.getDataOrDefault($tile, "hoverout-delay", stgs.onHoverOutDelay),
				noHAflipOpacity: this.getDataOrDefault($tile, "flip-opacity", stgs.noHAflipOpacity),
				useTranslate: this.getDataOrDefault($tile, "use-translate", stgs.useTranslate),
				runEvents: false,
				isReversed: false,
				loopCount: 0,
				contentModules: [],
				listData: [],
				height: $tile.height(),
				width: $tile.width(),
				tempValues: {}
			};
		} else {
			tdata = $.extend(true, {
				runEvents: false,
				isReversed: false,
				loopCount: 0,
				contentModules: [],
				listData: [],
				height: $tile.height(),
				width: $tile.width(),
				tempValues: {}
			}, stgs);
		}
		tdata.useTranslate = tdata.useTranslate && tdata.useHardwareAccel && metrojs.capabilities.canTransform && metrojs.capabilities.canTransition;
		// set the margin to half of the height or width based on the direction
		tdata.margin = (tdata.direction === "vertical") ? tdata.height / 2 : tdata.width / 2;
		// convert stops if needed
		tdata.stops = (typeof (stgs.stops) === "object" && (stgs.stops instanceof Array)) ? stgs.stops : ("" + tdata.stops).split(",");
		// add a return stop
		if (tdata.stops.length === 1)
			tdata.stops.push("0px");
		// add content modules, start with global swaps            
		var swaps = tdata.swap instanceof Array ? tdata.swap : tdata.swap.replace(' ', '').split(",");
		// get the front and back swap data
		var sf = useData ? this.getDataOrDefault($tile, "swap-front", stgs.swapFront) : stgs.swapFront;
		var sb = useData ? this.getDataOrDefault($tile, "swap-back", stgs.swapBack) : stgs.swapBack;
		// set the data to the global value if its still the default
		if (sf instanceof Array) {
			tdata.swapFront = sf;
		} else {
			tdata.swapFront = sf === '-' ? swaps : sf.replace(' ', '').split(",");
		}

		if (sb instanceof Array) {
			tdata.swapBack = sb;
		} else {
			tdata.swapBack = sb === '-' ? swaps : sb.replace(' ', '').split(",");
		}
		// make sure the swaps includes all front and back swaps
		var i;
		for (i = 0; i < tdata.swapFront.length; i++) {
			if (tdata.swapFront[i].length > 0 && $.inArray(tdata.swapFront[i], swaps) === -1)
				swaps.push(tdata.swapFront[i]);
		}
		for (i = 0; i < tdata.swapBack.length; i++) {
			if (tdata.swapBack[i].length > 0 && $.inArray(tdata.swapBack[i], swaps) === -1)
				swaps.push(tdata.swapBack[i]);
		}
		tdata.swap = swaps;
		// add all required content modules for the swaps
		for (i = 0; i < swaps.length; i++) {
			if (swaps[i].length > 0) {
				var moduleIdx = $.fn.liveTile.contentModules.hasContentModule(swaps[i]);
				if (moduleIdx > -1) {
					tdata.contentModules.push($.fn.liveTile.contentModules.modules[moduleIdx]);
				}
			}
		}
		// set the initDelay value to the delay if it's not set
		tdata.initDelay = useData ? this.getDataOrDefault($tile, "initdelay", stgs.initDelay) : stgs.initDelay;
		// if the delay is -1 call the triggerDelay function to get a value
		if (tdata.delay < -1)
			tdata.delay = stgs.triggerDelay(1);
		else if (tdata.delay < 0)
			tdata.delay = 3500 + (Math.random() * 4501);
		// match the delay value if less than 0
		if (tdata.initDelay < 0)
			tdata.initDelay = tdata.delay;
		// merge the objects
		var mergedData = {};
		for (i = 0; i < tdata.contentModules.length; i++)
			$.extend(mergedData, tdata.contentModules[i].data);
		$.extend(mergedData, stgs, tdata);
		// add flip-list / carousel data
		var $tiles;
		if (mergedData.mode === "flip-list") {
			$tiles = $tile.find(mergedData.tileSelector).not(".tile-title");
			$tiles.each(function (idx, ele) {
				var $li = $(ele);
				var ldata = {
					direction: useData ? privMethods.getDataOrDefault($li, "direction", mergedData.direction) : mergedData.direction,
					newWindow: useData ? privMethods.getDataOrDefault($li, "new-window", false) : false,
					link: useData ? privMethods.getDataOrDefault($li, "link", "") : "",
					faces: { $front: null, $back: null },
					height: $li.height(),
					width: $li.width(),
					isReversed: false
				};
				ldata.margin = ldata.direction === "vertical" ? ldata.height / 2 : ldata.width / 2;
				mergedData.listData.push(ldata);
			});
		} else if (mergedData.mode === "carousel") {
			mergedData.stack = true;
			$tiles = $tile.find(mergedData.tileSelector).not(".tile-title");
			$tiles.each(function (idx, ele) {
				var $slide = $(ele);
				var sdata = {
					bounce: useData ? privMethods.getDataOrDefault($slide, "bounce", false) : false,
					bounceDirections: useData ? privMethods.getDataOrDefault($slide, "bounce-dir", "all") : "all",
					link: useData ? privMethods.getDataOrDefault($slide, "link", "") : "",
					newWindow: useData ? privMethods.getDataOrDefault($slide, "new-window", false) : false,
					animationDirection: useData ? privMethods.getDataOrDefault($slide, "ani-direction", "") : "",
					direction: useData ? privMethods.getDataOrDefault($slide, "direction", "") : ""
				};
				mergedData.listData.push(sdata);
			});
		}
		// get any additional options from the modules
		for (i = 0; i < tdata.contentModules.length; i++) {
			if (typeof (mergedData.contentModules[i].initData) === "function")
				mergedData.contentModules[i].initData(mergedData, $tile);
		}
		tdata = null;
		return mergedData;
	},
	prepTile: function ($tile, tdata) {
		//add the mode to the tile if it's not already there.
		$tile.addClass(tdata.mode);
		var ret = {
			$tileFaces: null,     // all possible tile faces in a liveTile in a non list mode
			$listTiles: null,     // all possible tiles in a liveTile in a list mode
			$front: null,         // the front face of a tile in a non list mode
			$back: null          // the back face of a tile in a non list mode
		};
		var rotateDir, frontCss, backCss, tileCss;
		// prepare the tile based on the current mode
		switch (tdata.mode) {
			case "fade":
				// front and back tile faces
				ret.$tileFaces = $tile.find(tdata.tileFaceSelector).not(".tile-title");
				ret.$front = (tdata.faces.$front != null && tdata.faces.$front.length > 0) ?
                               tdata.faces.$front.addClass('fade-front') :
                               ret.$tileFaces.filter(":first").addClass('fade-front');
				// get back face from settings, via selector, or append it if necessary
				if (tdata.faces.$back != null && tdata.faces.$back.length > 0)    // use $back option
					ret.$back = tdata.faces.$back.addClass('fade-back');
				else if (ret.$tileFaces.length > 1)                             // get the last tile face
					ret.$back = ret.$tileFaces.filter(":last").addClass('fade-back');
				else if (tdata.appendBack)                                       // append the back tile
					ret.$back = $('<div class="fade-back"></div>').appendTo($tile);
				else                                                            // just keep an empty placeholder
					ret.$back = $('<div></div>');
				break;
			case "slide":
				// front and back tile faces
				ret.$tileFaces = $tile.find(tdata.tileFaceSelector).not(".tile-title");
				// get front face from settings or via selector
				ret.$front = (tdata.faces.$front != null && tdata.faces.$front.length > 0) ?
                                tdata.faces.$front.addClass('slide-front') :
                                ret.$tileFaces.filter(":first").addClass('slide-front'); // using :first for pre jQuery 1.4
				// get back face from settings, via selector, or append it if necessary
				if (tdata.faces.$back != null && tdata.faces.$back.length > 0)    // use $back option
					ret.$back = tdata.faces.$back.addClass('slide-back');
				else if (ret.$tileFaces.length > 1)                             // get the last tile face
					ret.$back = ret.$tileFaces.filter(":last").addClass('slide-back');
				else if (tdata.appendBack)                                       // append the back tile
					ret.$back = $('<div class="slide-back"></div>').appendTo($tile);
				else                                                            // just keep an empty placeholder
					ret.$back = $('<div></div>');
				// stack mode
				if (tdata.stack == true) {
					var prop,
                        translate;
					if (tdata.direction === "vertical") {
						prop = "top",
                        translate = 'translate(0%, -100%) translateZ(0)';
					} else {
						prop = "left",
                        translate = 'translate(-100%, 0%) translateZ(0)';
					}
					backCss = {};
					if (tdata.useTranslate)
						helperMethods.appendStyleProperties(backCss, ['transform'], [translate]);
					else
						backCss[prop] = "-100%";
					ret.$back.css(backCss);
				}
				$tile.data("metrojs.tile", { animating: false });
				if (metrojs.capabilities.canTransition && tdata.useHardwareAccel) {   // hardware accelerated :)                        
					$tile.addClass("ha");
					ret.$front.addClass("ha");
					ret.$back.addClass("ha");
				}
				break;
			case "carousel":
				ret.$listTiles = $tile.find(tdata.tileSelector).not(".tile-title");
				var numberOfSlides = ret.$listTiles.length;
				$tile.data("metrojs.tile", { animating: false });
				tdata.currentIndex = Math.min(tdata.currentIndex, numberOfSlides - 1);
				ret.$listTiles.each(function (idx, ele) {
					var $slide = $(ele).addClass("slide");
					var sdata = tdata.listData[idx],
                        aniDir = typeof (sdata.animationDirection) === "string" && sdata.animationDirection.length > 0 ? sdata.animationDirection : tdata.animationDirection,
                        dir = typeof (sdata.direction) === "string" && sdata.direction.length > 0 ? sdata.direction : tdata.direction;
					if (idx == tdata.currentIndex) {
						$slide.addClass("active");
					} else if (aniDir === "forward") {
						if (dir === "vertical") {
							tileCss = tdata.useTranslate ? helperMethods.appendStyleProperties({}, ['transform'], ['translate(0%, 100%) translateZ(0)']) :
                                                   { left: '0%', top: '100%' };
							$slide.css(tileCss);
						} else {
							tileCss = tdata.useTranslate ? helperMethods.appendStyleProperties({}, ['transform'], ['translate(100%, 0%) translateZ(0)']) :
                                                   { left: '100%', top: '0%' };
							$slide.css(tileCss);
						}
					} else if (aniDir === "backward") {
						if (dir === "vertical") {
							tileCss = tdata.useTranslate ? helperMethods.appendStyleProperties({}, ['transform'], ['translate(0%, -100%) translateZ(0)']) :
                                                   { left: '0%', top: '-100%' };
							$slide.css(tileCss);
						} else {
							tileCss = tdata.useTranslate ? helperMethods.appendStyleProperties({}, ['transform'], ['translate(-100%, 0%) translateZ(0)']) :
                                                   { left: '-100%', top: '0%' };
							$slide.css(tileCss);
						}
					}
					// link and bounce can be bound per slide
					// add the click handler and link property
					privMethods.bindLink($slide, sdata);
					// add the bounce effect
					if (tdata.useHardwareAccel && metrojs.capabilities.canTransition)
						privMethods.bindBounce($slide, sdata);
					$slide = null;
					sdata = null;
				});
				// hardware accelerated :)
				if (metrojs.capabilities.canFlip3d && tdata.useHardwareAccel) {
					$tile.addClass("ha");
					ret.$listTiles.addClass("ha");
				}
				break;
			case "flip-list":
				// the tile containers inside the list
				ret.$listTiles = $tile.find(tdata.tileSelector).not(".tile-title");
				ret.$listTiles.each(function (idx, ele) {
					var $li = $(ele).addClass("tile-" + (idx + 1));
					// add the flip class to the front face
					var $lFront = $li.find(tdata.tileFaceSelector).filter(":first").addClass("flip-front").css({ margin: "0px" });
					// append a back tile face if one isnt present
					if ($li.find(tdata.tileFaceSelector).length === 1 && tdata.appendBack == true)
						$li.append("<div></div>");
					// add the flip class to the back face
					var $lBack = $li.find(tdata.tileFaceSelector).filter(":last").addClass("flip-back").css({ margin: "0px" });
					// update the tdata object with the faces
					tdata.listData[idx].faces.$front = $lFront;
					tdata.listData[idx].faces.$back = $lBack;
					// set data for overrides and easy access
					$li.data("metrojs.tile", {
						animating: false,
						count: 1,
						completeTimeout: null,
						flCompleteTimeout: null,
						index: idx
					});
					var ldata = $li.data("metrojs.tile");
					// add the hardware accelerated classes
					if (metrojs.capabilities.canFlip3d && tdata.useHardwareAccel) {   // hardware accelerated :)
						$li.addClass("ha");
						$lFront.addClass("ha");
						$lBack.addClass("ha");
						rotateDir = tdata.listData[idx].direction === "vertical" ? "rotateX(180deg)" : "rotateY(180deg)";
						backCss = helperMethods.appendStyleProperties({}, ["transform"], [rotateDir]);
						$lBack.css(backCss);
					} else { // not hardware accelerated :(
						// the front tile face will take up the entire tile
						frontCss = (tdata.listData[idx].direction === "vertical") ?
				{ height: '100%', width: '100%', marginTop: '0px', opacity: '1' } :
				{ height: '100%', width: '100%', marginLeft: '0px', opacity: '1' };
						// the back tile face is hidden by default and expanded halfway through a flip
						backCss = (tdata.listData[idx].direction === "vertical") ?
				{ height: '0px', width: '100%', marginTop: tdata.listData[idx].margin + 'px', opacity: tdata.noHAflipOpacity } :
				{ height: '100%', width: '0px', marginLeft: tdata.listData[idx].margin + 'px', opacity: tdata.noHAflipOpacity };
						$lFront.css(frontCss);
						$lBack.css(backCss);
					}
					var flipEnded = function () {
						ldata.count++;
						if (ldata.count >= MAX_LOOP_COUNT)
							ldata.count = 1;
					};
					if (tdata.flipListOnHover) {
						var event = tdata.flipListOnHoverEvent + ".liveTile";
						$lFront.bind(event, function () {
							privMethods.flip($li, ldata.count, tdata, flipEnded);
						});
						$lBack.bind(event, function () {
							privMethods.flip($li, ldata.count, tdata, flipEnded);
						});
					}
					if (tdata.listData[idx].link.length > 0) {
						$li.css({ cursor: 'pointer' }).bind("click.liveTile", function () {
							if (tdata.listData[idx].newWindow)
								window.open(tdata.listData[idx].link);
							else
								window.location = tdata.listData[idx].link;
						});
					}
				});
				break;
			case "flip":
				// front and back tile faces
				ret.$tileFaces = $tile.find(tdata.tileFaceSelector).not(".tile-title");
				// get front face from settings or via selector
				ret.$front = (tdata.faces.$front != null && tdata.faces.$front.length > 0) ?
                                tdata.faces.$front.addClass('flip-front') :
                                ret.$tileFaces.filter(":first").addClass('flip-front');
				// get back face from settings, via selector, or append it if necessary
				if (tdata.faces.$back != null && tdata.faces.$back.length > 0) {
					// use $back option
					ret.$back = tdata.faces.$back.addClass('flip-back');
				} else if (ret.$tileFaces.length > 1) {
					// get the last tile face
					ret.$back = ret.$tileFaces.filter(":last").addClass('flip-back');
				} else if (tdata.appendBack) {
					// append the back tile
					ret.$back = $('<div class="flip-back"></div>').appendTo($tile);
				} else {
					// just keep an empty placeholder
					ret.$back = $('<div></div>');
				}
				$tile.data("metrojs.tile", { animating: false });
				if (metrojs.capabilities.canFlip3d && tdata.useHardwareAccel) {
					// hardware accelerated :)
					$tile.addClass("ha");
					ret.$front.addClass("ha");
					ret.$back.addClass("ha");
					rotateDir = tdata.direction === "vertical" ? "rotateX(180deg)" : "rotateY(180deg)";
					backCss = helperMethods.appendStyleProperties({}, ["transform"], [rotateDir]);
					ret.$back.css(backCss);

				} else {
					// not hardware accelerated :(
					// the front tile face will take up the entire tile
					frontCss = (tdata.direction === "vertical") ?
			{ height: '100%', width: '100%', marginTop: '0px', opacity: '1' } :
			{ height: '100%', width: '100%', marginLeft: '0px', opacity: '1' };
					// the back tile face is hidden by default and expanded halfway through a flip
					backCss = (tdata.direction === "vertical") ?
			{ height: '0%', width: '100%', marginTop: tdata.margin + 'px', opacity: '0' } :
			{ height: '100%', width: '0%', marginLeft: tdata.margin + 'px', opacity: '0' };
					ret.$front.css(frontCss);
					ret.$back.css(backCss);
				}
				break;
		}
		return ret;
	},
	bindPauseOnHover: function ($tile) {
		// stop the tile when hovered and resume after a delay
		(function () {
			var data = $tile.data("LiveTile"),
                isOver = false,
                isPending = false,
				touchStartedOver = false,
				touchStartedOut = false,
                pauseIn = (data.pauseOnHoverEvent == "both" || data.pauseOnHoverEvent == "mouseover" || data.pauseOnHoverEvent == "mouseenter"),
                pauseOut = (data.pauseOnHoverEvent == "both" || data.pauseOnHoverEvent == "mouseout" || data.pauseOnHoverEvent == "mouseleave");
			data.pOnHoverMethods = {
				pause: function () {
					data.timer.pause();
					if (data.mode === "flip-list") {
						data.faces.$listTiles.each(function (idx, li) {
							window.clearTimeout($(li).data("metrojs.tile").completeTimeout);
						});
					}
				},
				over: function (e, isTouch) {
					isTouch = typeof (isTouch) == "undefined" ? false : isTouch;
					if (!isTouch && touchStartedOver) {
						return;
					}
					if (isOver || isPending)
						return;
					if (data.runEvents) {
						isPending = true;
						data.eventTimeout = window.setTimeout(function () {
							isPending = false;
							if (pauseOut)
								isOver = true;
							touchStartedOver = false;
							data.pOnHoverMethods.pause();
						}, data.onHoverDelay);
					}
				},
				out: function (e, isTouch) {
					isTouch = typeof (isTouch) == "undefined" ? false : isTouch;
					if (!isTouch && touchStartedOut == true) {
						return;
					}
					if (isPending) {
						window.clearTimeout(data.eventTimeout);
						isPending = false;
						return;
					}
					if (pauseIn) {
						if (!isOver && !isPending)
							return;
						if (data.runEvents) {
							// todo: use a custom value if provided
							data.timer.start(data.hasRun ? data.delay : data.initDelay);
						}
					} else {
						data.pOnHoverMethods.pause();
					}
					isOver = false;
					touchStartedOut = false;
				}
			};
			if (!metrojs.capabilities.canTouch) {
				if (pauseIn)
					$tile.bind("mouseover.liveTile", data.pOnHoverMethods.over);
				if (pauseOut)
					$tile.bind("mouseout.liveTile", data.pOnHoverMethods.out);
			} else {
				if (window.PointerEvent || window.MSPointerEvent) { // pointer
					var eventPrefix = window.MSPointerEvent ? "MS" : "";
					if (pauseIn) {
						$tile[0].addEventListener(eventPrefix + 'PointerOver', data.pOnHoverMethods.over, false);
					}
					if (pauseOut) {
						$tile[0].addEventListener(eventPrefix + 'PointerOut', data.pOnHoverMethods.out, false);
					}
				} else { // touch events
					if (pauseIn) {
						$tile.bind("mouseover.liveTile", data.pOnHoverMethods.over);
						$tile.bind("touchstart.liveTile", function (event) {
							touchStartedOver = false;
							data.pOnHoverMethods.over.apply($tile[0], [event, true]);
						});
					}
					if (pauseOut) {
						$tile.bind("mouseout.liveTile", data.pOnHoverMethods.out);
						$tile.bind("touchend.liveTile", function (event) {
							touchStartedOut = false;
							data.pOnHoverMethods.out.apply($tile[0], [event, true]);
						});
					}
				}
			}
		})();
	},
	unbindMsPauseOnHover: function ($tile, data) {
		if (typeof (data.pOnHoverMethods) !== "undefined" && (window.PointerEvent || window.MSPointerEvent)) {
			var eventPrefix = window.MSPointerEvent ? "MS" : "";
			$tile[0].removeEventListener(eventPrefix + 'PointerOver', data.pOnHoverMethods.over, false);
			$tile[0].removeEventListener(eventPrefix + 'PointerOut', data.pOnHoverMethods.out, false);
		}
	},
	bindPlayOnHover: function ($tile, data) {
		// play the tile immediately when hovered
		(function () {
			var isOver = false,
                isPending = false,
				touchStartedOver = false,
				touchStartedOut = false,
                playIn = (data.playOnHoverEvent == "both" || data.playOnHoverEvent == "mouseover" || data.playOnHoverEvent == "mouseenter"),
                playOut = (data.playOnHoverEvent == "both" || data.playOnHoverEvent == "mouseout" || data.playOnHoverEvent == "mouseleave");
			data.onHoverMethods = {
				over: function (event, isTouch) {
					isTouch = typeof (isTouch) == "undefined" ? false : isTouch;
					if (!isTouch && touchStartedOver) {
						return;
					}
					if (isOver || isPending || (data.bounce && data.bounceMethods.down != "no"))
						return;
					// if startNow is set use the opposite of isReversed so we're in sync            
					var rev = (data.mode == "flip") || (data.startNow ? !data.isReversed : data.isReversed);
					window.clearTimeout(data.eventTimeout);
					if ((data.runEvents && rev) || !data.hasRun) {
						isPending = true;
						data.eventTimeout = window.setTimeout(function () {
							isPending = false;
							if (playOut)
								isOver = true;
							pubMethods["play"].apply($tile[0], [0]);
							touchStartedOver = false;
						}, data.onHoverDelay);
					}
				},
				out: function (event, isTouch) {
					isTouch = typeof(isTouch) == "undefined" ? false : isTouch;
					if (!isTouch && touchStartedOut == true) {
						return;
					}
					if (isPending) {
						window.clearTimeout(data.eventTimeout);
						isPending = false;
						return;
					}
					if (playIn) {
						if (!isOver && !isPending) {
							return;
						}
					}
					window.clearTimeout(data.eventTimeout);
					data.eventTimeout = window.setTimeout(function () {
						var rev = (data.mode == "flip") || (data.startNow ? data.isReversed : !data.isReversed);
						if (data.runEvents && rev) {
							pubMethods["play"].apply($tile[0], [0]);
						}
						touchStartedOut = false;
						isOver = false;
					}, data.speed + data.onHoverOutDelay);
				}
			};
			if (!metrojs.capabilities.canTouch) {
				if (playIn)
					$tile.bind('mouseenter.liveTile', data.onHoverMethods.over);
				if (playOut)
					$tile.bind('mouseleave.liveTile', data.onHoverMethods.out);
			} else {
				if (window.PointerEvent || window.MSPointerEvent) { // pointer
					var eventPrefix = window.MSPointerEvent ? "MS" : "";
					if (playIn) {
						//$tile[0].addEventListener(eventPrefix + 'PointerDown', data.onHoverMethods.over, false);
						$tile[0].addEventListener(eventPrefix + 'PointerEnter', data.onHoverMethods.over, false);
					}
					// mouseleave gives a more consistent effect than out when the children are transformed
					if (playOut)
						$tile[0].addEventListener(eventPrefix + 'PointerLeave', data.onHoverMethods.out, false);
				} else { // touch events
					if (playIn) {
						$tile.bind("touchstart.liveTile", function (event) {
							touchStartedOver = true;
							data.onHoverMethods.over.apply($tile[0], [event, true]);
						});
						$tile.bind("mouseenter.liveTile", data.onHoverMethods.over);
					}
					if (playOut) {
						$tile.bind("touchend.liveTile,touchcancel.liveTile", function (event) {
							touchStartedOut = false;
							data.onHoverMethods.out.apply($tile[0], [event, true]);
						});
						$tile.bind("mouseleave.liveTile", data.onHoverMethods.out);
					}
				}

			}
		})();
	},
	unbindMsPlayOnHover: function ($tile, data) {
		if (typeof (data.onHoverMethods) !== "undefined" && (window.PointerEvent || window.MSPointerEvent)) {
			var eventPrefix = window.MSPointerEvent ? "MS" : "";
			$tile[0].removeEventListener(eventPrefix + 'PointerOver', data.onHoverMethods.over, false);
		}
	},
	bindBounce: function ($tile, data) {
		// add bounce
		if (data.bounce) {
			$tile.addClass("bounce");
			$tile.addClass("noselect");
			(function () {
				data.bounceMethods = {
					down: "no",
					threshold: 30,
					zeroPos: { x: 0, y: 0 },
					eventPos: { x: 0, y: 0 },
					inTilePos: { x: 0, y: 0 },
					pointPos: { x: 0, y: 0 },
					regions: {
						c: [0, 0],      // center
						tl: [-1, -1],   // top left
						tr: [1, -1],    // top right
						bl: [-1, 1],    // bottom left
						br: [1, 1],     // bottom right
						t: [null, -1],  // top
						r: [1, null],   // right
						b: [null, 1],   // bottom
						l: [-1, null]   // left
					},
					targets: {
						all: ['c', 't', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br'],
						edges: ['c', 't', 'r', 'b', 'l'],
						corners: ['c', 'tl', 'tr', 'bl', 'br']
					},
					hitTest: function ($el, pos, targetRegions, omegaC) {
						var regions = data.bounceMethods.regions,
                            checkFor = data.bounceMethods.targets[targetRegions],
                            i = 0,
                            strictMatch = null,
                            looseMatch = null,
                            defResult = { hit: [0, 0], name: 'c' };
						// scale only for android 2.x and old ie
						if (metrojs.capabilities.isOldAndroid || !metrojs.capabilities.canTransition)
							return defResult;
						if (typeof (checkFor) == "undefined") {
							if (typeof (targetRegions) === "string")
								checkFor = targetRegions.split(',');
							// only default to center if explicitly requested
							if ($.isArray(checkFor) && $.inArray('c') == -1) {
								omegaC = 0;
								defResult = null;
							}
						}
						// check for a matching region
						var w = $el.width(),
                           h = $el.height(),
                           // center threshold -  maximum amount from center
                           ct = [w * omegaC, h * omegaC],
                           // how far from the center is the point
                           diffX = pos.x - (w * 0.5),
                           diffY = pos.y - (h * 0.5),
                            // if we're beyond the center threshold, set -1 or 1 else 0
                           hit = [
                               diffX > 0 ? (Math.abs(diffX) <= ct[0] ? 0 : 1) : (Math.abs(diffX) <= ct[0] ? 0 : -1),
                               diffY > 0 ? (Math.abs(diffY) <= ct[1] ? 0 : 1) : (Math.abs(diffY) <= ct[1] ? 0 : -1)
                           ];
						for (; i < checkFor.length; i++) {
							if (strictMatch != null)
								return strictMatch;
							var r = checkFor[i],
                                region = regions[r];
							if (r == "*") {
								r = checkFor[i + 1];
								return { region: regions[r], name: r };
							}
							if (hit[0] == region[0] && hit[1] == region[1]) {
								// found the region with a strict lookup
								strictMatch = { hit: region, name: r };
							} else if ((hit[0] == region[0] || region[0] == null) && (hit[1] == region[1] || region[1] == null)) {
								// found the region with a loose lookup
								looseMatch = { hit: region, name: r };
							}
						}
						// prefer a strict match
						if (strictMatch != null)
							return strictMatch;
						else if (looseMatch != null)
							return looseMatch;
						else // no matches were found, return center
							return defResult;
					},
					bounceDown: function (e) {
						if (e.target.tagName == "A" && !$(e).is(".bounce"))
							return;
						var point = e.originalEvent && e.originalEvent.touches ? e.originalEvent.touches[0] : e,
                            offsetOfTile = $tile.offset(),
                            scrollX = window.pageXOffset,
                            scrollY = window.pageYOffset;
						data.bounceMethods.pointPos = {
							x: point.pageX,
							y: point.pageY
						};
						data.bounceMethods.inTilePos = {
							x: point.pageX - offsetOfTile.left,
							y: point.pageY - offsetOfTile.top
						};

						if (!data.$tileParent) {
							data.$tileParent = $tile.parent();
						}
						var offsetOfParent = data.$tileParent.offset();
						data.bounceMethods.eventPos = {
							x: (offsetOfTile.left - offsetOfParent.left) + ($tile.width() / 2),
							y: (offsetOfTile.top - offsetOfParent.top) + ($tile.height() / 2)
						};
						var hit = data.bounceMethods.hitTest($tile, data.bounceMethods.inTilePos, data.bounceDirections, 0.25);
						if (hit == null)
							data.bounceMethods.down = "no";
						else {
							if (window.PointerEvent || window.MSPointerEvent) {
								var eventPrefix = window.MSPointerEvent ? "MS" : "";
								document.addEventListener(eventPrefix + 'PointerUp', data.bounceMethods.bounceUp, false);
								$tile[0].addEventListener(eventPrefix + 'PointerUp', data.bounceMethods.bounceUp, false);
								document.addEventListener(eventPrefix + 'PointerCancel', data.bounceMethods.bounceUp, false);
								if (data.bounceFollowsMove)
									$tile[0].addEventListener(eventPrefix + 'PointerMove', data.bounceMethods.bounceMove, false);
							} else {
								$(document).bind("mouseup.liveTile, touchend.liveTile, touchcancel.liveTile, dragstart.liveTile", data.bounceMethods.bounceUp);
								if (data.bounceFollowsMove) {
									$tile.bind("touchmove.liveTile", data.bounceMethods.bounceMove);
									$tile.bind("mousemove.liveTile", data.bounceMethods.bounceMove);
								}
							}
							var bClass = "bounce-" + hit.name;
							$tile.addClass(bClass);
							data.bounceMethods.down = bClass;
							data.bounceMethods.downPcss = helperMethods.appendStyleProperties({}, ['perspective-origin'], [data.bounceMethods.eventPos.x + "px " + data.bounceMethods.eventPos.y + "px"]);
							data.$tileParent.css(data.bounceMethods.downPcss);
						}
					},
					bounceUp: function () {
						if (data.bounceMethods.down != "no") {
							data.bounceMethods.unBounce();
							if (window.PointerEvent || window.MSPointerEvent) {
								var eventPrefix = window.MSPointerEvent ? "MS" : "";
								document.removeEventListener(eventPrefix + 'PointerUp', data.bounceMethods.bounceUp, false);
								$tile[0].removeEventListener(eventPrefix + 'PointerUp', data.bounceMethods.bounceUp, false);
								document.removeEventListener(eventPrefix + 'PointerCancel', data.bounceMethods.bounceUp, false);
								if (data.bounceFollowsMove)
									$tile[0].removeEventListener(eventPrefix + 'PointerMove', data.bounceMethods.bounceMove, false);

							} else
								$(document).unbind("mouseup.liveTile, touchend.liveTile, touchcancel.liveTile, dragstart.liveTile", data.bounceMethods.bounceUp);
							if (data.bounceFollowsMove) {
								$tile.unbind("touchmove.liveTile", data.bounceMethods.bounceMove);
								$tile.unbind("mousemove.liveTile", data.bounceMethods.bounceMove);
							}
						}
					},
					bounceMove: function (e) {
						if (data.bounceMethods.down != "no") {
							var point = e.originalEvent && e.originalEvent.touches ? e.originalEvent.touches[0] : e,
                                x = Math.abs(point.pageX - data.bounceMethods.pointPos.x),
                                y = Math.abs(point.pageY - data.bounceMethods.pointPos.y);
							if (x > data.bounceMethods.threshold || y > data.bounceMethods.threshold) {
								var bounceClass = data.bounceMethods.down;
								data.bounceMethods.bounceDown(e);
								if (bounceClass != data.bounceMethods.down)
									$tile.removeClass(bounceClass);
							}
						}
					},
					unBounce: function () {
						$tile.removeClass(data.bounceMethods.down);
						if (typeof (data.bounceMethods.downPcss) == "object") {
							var names = ['perspective-origin', 'perspective-origin-x', 'perspective-origin-y'],
                                vals = ['', '', ''];
							data.bounceMethods.downPcss = helperMethods.appendStyleProperties({}, names, vals);
							// let the bounce finish and then strip out the perspective
							window.setTimeout(function () {
								data.$tileParent.css(data.bounceMethods.downPcss);
							}, 200);
						}
						data.bounceMethods.down = "no";
						data.bounceMethods.inTilePos = data.bounceMethods.zeroPos;
						data.bounceMethods.eventPos = data.bounceMethods.zeroPos;
					}
				};
				// IE 10+
				if (window.PointerEvent || window.MSPointerEvent) {// touch only -> // && window.navigator.msMaxTouchPoints) {
					var eventPrefix = window.MSPointerEvent ? "MS" : "";
					$tile[0].addEventListener(eventPrefix + 'PointerDown', data.bounceMethods.bounceDown, false);
				} else if (metrojs.capabilities.canTouch) {
					// everybody else                    
					$tile.bind("touchstart.liveTile", data.bounceMethods.bounceDown);
					$tile.bind("mousedown.liveTile", data.bounceMethods.bounceDown);

				} else {
					$tile.bind("mousedown.liveTile", data.bounceMethods.bounceDown);
				}
			})();
		}
	},
	unbindMsBounce: function ($tile, data) {
		if (data.bounce && (window.PointerEvent || window.MSPointerEvent)) {// touch only -> // && window.navigator.msMaxTouchPoints) {
			var eventPrefix = window.MSPointerEvent ? "MS" : "";
			$tile[0].removeEventListener(eventPrefix + 'PointerDown', data.bounceMethods.bounceDown, false);
			$tile[0].removeEventListener(eventPrefix + 'PointerCancel', data.bounceMethods.bounceUp, false);
			$tile[0].removeEventListener(eventPrefix + 'PointerOut', data.bounceMethods.bounceUp, false);
			//$tile[0].removeEventListener(eventPrefix + 'PointerMove', data.bounceMethods.bounceMove, false);
		}
	},
	bindLink: function ($tile, data) {
		if (data.link.length > 0) {
			$tile.css({ cursor: 'pointer' }).bind("click.liveTile", function (e) {
				if (e.target.tagName == "A" && !$(e).is(".live-tile,.slide,.flip"))
					return;
				if (data.newWindow)
					window.open(data.link);
				else
					window.location = data.link;
			});
		}
	},
	runContenModules: function (data, $front, $back, index) {
		for (var i = 0; i < data.contentModules.length; i++) {
			var currentModule = data.contentModules[i];
			if (typeof (currentModule.action) == "function")
				currentModule.action(data, $front, $back, index);
		}
	},
	fade: function ($tile, count, data) {
		var tdata = typeof (data) === "object" ? data : $tile.data("LiveTile"),
            resumeTimer = function () {
            	// if the tile should run again start the timer back with the current delay
            	if (tdata.timer.repeatCount > 0 || tdata.timer.repeatCount == -1) {
            		if (tdata.timer.count != tdata.timer.repeatCount) {
            			tdata.timer.start(tdata.delay);
            		}
            	}
            };
		if (typeof (tdata) === "undefined") {
			throwError($.fn.liveTile.defaults.rebindMessage);
			return;
		}
		if (tdata.faces.$front.is(":animated"))
			return;
		tdata.timer.pause();
		var loopCount = tdata.loopCount + 1;
		tdata.isReversed = loopCount % 2 === 0; // the count starts at 1
		var start = tdata.animationStarting.call($tile[0], tdata, tdata.faces.$front, tdata.faces.$back);
		if (typeof (start) != "undefined" && start == false) {
			resumeTimer();
			return;
		}
		tdata.loopCount = loopCount;
		var faded = function () {
			resumeTimer();
			// run content modules and animationComplete callback
			privMethods.runContenModules(tdata, tdata.faces.$front, tdata.faces.$back);
			tdata.animationComplete.call($tile[0], tdata, tdata.faces.$front, tdata.faces.$back);
		};
		if (tdata.isReversed)
			tdata.faces.$front.fadeIn(tdata.speed, tdata.noHaTransFunc, faded);
		else
			tdata.faces.$front.fadeOut(tdata.speed, tdata.noHaTransFunc, faded);
	},
	slide: function ($tile, count, data, stopIndex, callback) {
		var tdata = typeof (data) === "object" ? data : $tile.data("LiveTile"),
            aniData = $tile.data("metrojs.tile");
		if (typeof (tdata) === "undefined") {
			throwError($.fn.liveTile.defaults.rebindMessage);
			return;
		}
		if (aniData.animating == true || $tile.is(":animated")) {
			tdata = null;
			aniData = null;
			return;
		}
		var resumeTimer = function () {
			// if the tile should run again start the timer back with the current delay
			if (tdata.timer.repeatCount > 0 || tdata.timer.repeatCount == -1) {
				if (tdata.timer.count != tdata.timer.repeatCount) {
					tdata.timer.start(tdata.delay);
				}
			}
		};
		if (tdata.mode !== "carousel") {
			tdata.isReversed = tdata.currentIndex % 2 !== 0;  // the count starts at 1
			// carousel mode maintains its own timer
			tdata.timer.pause();
			var start = tdata.animationStarting.call($tile[0], tdata, tdata.faces.$front, tdata.faces.$back);
			if (typeof (start) != "undefined" && start == false) {
				resumeTimer();
				return;
			}
			tdata.loopCount = tdata.loopCount + 1;
		} else {
			// in carousel mode the face that just left the stage is always the $back
			tdata.isReversed = true;
		}
		// get temp values passed in from data methods
		var direction;
		if (typeof (tdata.tempValues.direction) === "string" && tdata.tempValues.direction.length > 0)
			direction = tdata.tempValues.direction;
		else
			direction = tdata.direction;
		tdata.tempValues.direction = null;
		var css = {},
            cssback = {},
            // the stop index is overridden in carousel mode
            stopIdx = typeof (stopIndex) === "undefined" ? tdata.currentIndex : stopIndex,
            stop = $.trim(tdata.stops[Math.min(stopIdx, tdata.stops.length - 1)]),
            pxIdx = stop.indexOf('px'),
            offset = 0,
            amount = 0,
            metric = (direction === "vertical") ? tdata.height : tdata.width,
            tProp = (direction === "vertical") ? "top" : "left",
            stack = tdata.stack == true;
		// when the slide is complete increment the index or call the callback
		var slideFinished = function () {
			if (typeof (callback) === "undefined") {
				tdata.currentIndex = tdata.currentIndex + 1;
				if (tdata.currentIndex > tdata.stops.length - 1) {
					tdata.currentIndex = 0;
				}
			} else {
				callback();
			}
			if (tdata.mode != "carousel") {
				resumeTimer();
			}
			// run content modules and animationComplete callback            
			privMethods.runContenModules(tdata, tdata.faces.$front, tdata.faces.$back, tdata.currentIndex);
			tdata.animationComplete.call($tile[0], tdata, tdata.faces.$front, tdata.faces.$back);
			tdata = null;
			aniData = null;
		};
		if (pxIdx > 0) {
			amount = parseInt(stop.substring(0, pxIdx), 10);
			offset = (amount - metric) + 'px';
		} else {
			//is a percentage
			amount = parseInt(stop.replace('%', ''), 10);
			offset = (amount - 100) + '%';
		}
		// hardware accelerated :)
		if (metrojs.capabilities.canTransition && tdata.useHardwareAccel) {
			if (typeof (aniData.animating) !== "undefined" && aniData.animating == true)
				return;
			aniData.animating = true;
			var props = ['transition-property', 'transition-duration', 'transition-timing-function'],
                vals = [tdata.useTranslate ? "transform" : tProp, tdata.speed + 'ms', tdata.haTransFunc];
			vals[helperMethods.browserPrefix + 'transition-property'] = helperMethods.browserPrefix + "transform";
			css = helperMethods.appendStyleProperties(css, props, vals);
			cssback = helperMethods.appendStyleProperties(cssback, props, vals);
			var vertical = direction === "vertical",
                prop = vertical ? "top" : "left",
                translateTo;
			if (!tdata.useTranslate) {
				css[prop] = stop;
				if (stack)
					cssback[prop] = offset;
			} else {
				translateTo = vertical ? "translate(0%, " + stop + ")" : "translate(" + stop + ", 0%)";
				css = helperMethods.appendStyleProperties(css, ['transform'], [translateTo + "translateZ(0)"]);
				if (stack) {
					translateTo = vertical ? "translate(0%, " + offset + ")" : "translate(" + offset + ", 0%)";
					cssback = helperMethods.appendStyleProperties(cssback, ['transform'], [translateTo + "translateZ(0)"]);
				}
			}
			tdata.faces.$front.css(css);
			if (stack)
				tdata.faces.$back.css(cssback);
			window.clearTimeout(tdata.completeTimeout);
			tdata.completeTimeout = window.setTimeout(function () {
				aniData.animating = false;
				slideFinished();
			}, tdata.speed);
		} else {
			// not hardware accelerated :(
			css[tProp] = stop;
			cssback[tProp] = offset;
			aniData.animating = true;
			var $front = tdata.faces.$front.stop(),
                $back = tdata.faces.$back.stop();
			$front.animate(css, tdata.speed, tdata.noHaTransFunc, function () {
				aniData.animating = false;
				slideFinished();
			});
			// change the css value to the offset
			if (stack)
				$back.animate(cssback, tdata.speed, tdata.noHaTransFunc, function () { });
		}
	},
	carousel: function ($tile, count) {
		var tdata = $tile.data("LiveTile");
		if (typeof (tdata) === "undefined") {
			throwError($.fn.liveTile.defaults.rebindMessage);
			return;
		}
		// dont update css or call slide if animated or if there's only one face
		var aniData = $tile.data("metrojs.tile");
		if (aniData.animating == true || tdata.faces.$listTiles.length <= 1) {
			aniData = null;
			return;
		}
		var resumeTimer = function () {
			if (tdata.timer.repeatCount > 0 || tdata.timer.repeatCount == -1) {
				if (tdata.timer.count != tdata.timer.repeatCount) {
					tdata.timer.start(tdata.delay);
				}
			}
		};
		// pause the timer and use a per slide delay
		tdata.timer.pause();
		var $cur = tdata.faces.$listTiles.filter(".active"),
            idx = tdata.faces.$listTiles.index($cur),
            goTo = tdata.currentIndex,
            eq = goTo != idx ? goTo : idx,
            nxtIdx = eq + 1 >= tdata.faces.$listTiles.length ? 0 : eq + 1,
            sdata = tdata.listData[nxtIdx];
		if (idx == nxtIdx) {
			aniData = null;
			$cur = null;
			return;
		}
		// get temp values passed in from data methods
		var animationDirection;
		if (typeof (tdata.tempValues.animationDirection) === "string" && tdata.tempValues.animationDirection.length > 0)
			animationDirection = tdata.tempValues.animationDirection;
		else if (typeof (sdata.animationDirection) === "string" && sdata.animationDirection.length > 0) {
			animationDirection = sdata.animationDirection;
		} else
			animationDirection = tdata.animationDirection;
		// the temp value for animation direction is not used in slide so i'm setting it to null
		tdata.tempValues.animationDirection = null;
		var direction;
		if (typeof (tdata.tempValues.direction) === "string" && tdata.tempValues.direction.length > 0) {
			direction = tdata.tempValues.direction;
		} else if (typeof (sdata.direction) === "string" && sdata.direction.length > 0) {
			direction = sdata.direction;
			tdata.tempValues.direction = direction;
		} else {
			direction = tdata.direction;
		}
		var $nxt = tdata.faces.$listTiles.eq(nxtIdx),
            start = tdata.animationStarting.call($tile[0], tdata, $cur, $nxt);
		if (typeof (start) != "undefined" && start == false) {
			resumeTimer();
			return;
		}
		tdata.loopCount = tdata.loopCount + 1;
		var nxtCss = helperMethods.appendStyleProperties({}, ['transition-duration'], ['0s']),
            vertical = direction === "vertical",
            translateTo;
		if (animationDirection === "backward") {
			if (!tdata.useTranslate || !metrojs.capabilities.canTransition) {
				if (vertical) {
					nxtCss.top = "-100%";
					nxtCss.left = "0%";
				} else {
					nxtCss.top = "0%";
					nxtCss.left = "-100%";
				}
				tdata.stops = ['100%'];
			} else {
				translateTo = vertical ? "translate(0%, -100%)" : "translate(-100%, 0%)";
				nxtCss = helperMethods.appendStyleProperties(nxtCss, ["transform"], [translateTo + " translateZ(0)"]);
				tdata.stops = ['100%'];
			}
			tdata.faces.$front = $cur;
			tdata.faces.$back = $nxt;

		} else {
			if (!tdata.useTranslate || !metrojs.capabilities.canTransition) {
				if (vertical) {
					nxtCss.top = "100%";
					nxtCss.left = "0%";
				} else {
					nxtCss.top = "0%";
					nxtCss.left = "100%";
				}
			} else {
				translateTo = vertical ? "translate(0%, 100%)" : "translate(100%, 0%)";
				nxtCss = helperMethods.appendStyleProperties(nxtCss, ["transform"], [translateTo + " translateZ(0)"]);
			}
			tdata.faces.$front = $nxt;
			tdata.faces.$back = $cur;
			tdata.stops = ['0%'];
		}
		$nxt.css(nxtCss);
		// the timeout wrapper gives the css call above enough time to finish in case we dynamically set the direction
		window.setTimeout(function () {
			$cur.removeClass("active");
			$nxt.addClass("active");
			privMethods.slide($tile, count, tdata, 0, function () {
				tdata.currentIndex = nxtIdx;
				aniData = null;
				$cur = null;
				$nxt = null;
				resumeTimer();
			});
		}, 150);

	},
	flip: function ($tile, count, data, callback) {
		var aniData = $tile.data("metrojs.tile");
		if (typeof (aniData) !== "undefined" && aniData.animating == true) {
			aniData = null;
			return;
		}
		var tdata = typeof (data) === "object" ? data : $tile.data("LiveTile");
		if (typeof (tdata) === "undefined") {
			throwError($.fn.liveTile.defaults.rebindMessage);
			return;
		}
		var $front, $back, direction, deg, rotateDir, css,
            raiseEvt = typeof (callback) === "undefined",
            index = 0,
            isReversed,  // the count starts at 1
            resumeTimer = function () {
            	// if the tile should run again start the timer back with the current delay
            	if (tdata.timer.repeatCount > 0 || tdata.timer.repeatCount == -1) {
            		if (tdata.timer.count != tdata.timer.repeatCount) {
            			tdata.timer.start(tdata.delay);
            		}
            	}
            };
		// the timer is only paused if animationComplete is fired
		if (raiseEvt) {
			tdata.timer.pause();
			var loopCount = tdata.loopCount + 1;
			isReversed = loopCount % 2 === 0;
			tdata.isReversed = isReversed;
			$front = tdata.faces.$front;
			$back = tdata.faces.$back;
			var args = isReversed ? [tdata, $back, $front] : [tdata, $front, $back];
			var start = tdata.animationStarting.apply($tile[0], args);
			if (typeof (start) != "undefined" && start == false) {
				resumeTimer();
				return;
			}
			direction = tdata.direction;
			height = tdata.height;
			width = tdata.width;
			margin = tdata.margin;
			tdata.loopCount = loopCount;
		} else {
			isReversed = count % 2 === 0;
			index = aniData.index;
			$front = tdata.listData[index].faces.$front;
			$back = tdata.listData[index].faces.$back;
			tdata.listData[index].isReversed = isReversed;
			direction = tdata.listData[index].direction;
			height = tdata.listData[index].height;
			width = tdata.listData[index].width;
			margin = tdata.listData[index].margin;
		}

		if (metrojs.capabilities.canFlip3d && tdata.useHardwareAccel) { // Hardware accelerated :)
			deg = !isReversed ? "180deg" : "360deg";
			rotateDir = direction === "vertical" ? "rotateX(" + deg + ")" : "rotateY(" + deg + ")";
			css = helperMethods.appendStyleProperties({}, ["transform", "transition"], [rotateDir, "all " + tdata.speed + "ms " + tdata.haTransFunc + " 0s"]);
			var bDeg = !isReversed ? "360deg" : "540deg";
			var bRotateDir = direction === "vertical" ? "rotateX(" + bDeg + ")" : "rotateY(" + bDeg + ")";
			var bCss = helperMethods.appendStyleProperties({}, ["transform", "transition"], [bRotateDir, "all " + tdata.speed + "ms " + tdata.haTransFunc + " 0s"]);
			$front.css(css);
			$back.css(bCss);

			var action = function () {
				aniData.animating = false;
				var resetDir, newCss;
				if (!isReversed) {
					privMethods.runContenModules(tdata, $back, $front, index);
					if (raiseEvt) {
						resumeTimer();
						tdata.animationComplete.call($tile[0], tdata, $back, $front);
					} else
						callback(tdata, $back, $front);
				} else {
					resetDir = direction === "vertical" ? "rotateX(0deg)" : "rotateY(0deg)";
					newCss = helperMethods.appendStyleProperties({}, ["transform", "transition"], [resetDir, "all 0s " + tdata.haTransFunc + " 0s"]);
					$front.css(newCss);
					//call content modules
					privMethods.runContenModules(tdata, $front, $back, index);
					if (raiseEvt) {
						resumeTimer();
						tdata.animationComplete.call($tile[0], tdata, $front, $back);
					} else
						callback(tdata, $front, $back);
					$front = null;
					$back = null;
					tdata = null;
					aniData = null;
				}
			};
			if (tdata.mode === "flip-list") {
				window.clearTimeout(tdata.listData[index].completeTimeout);
				tdata.listData[index].completeTimeout = window.setTimeout(action, tdata.speed);
			} else {
				window.clearTimeout(tdata.completeTimeout);
				tdata.completeTimeout = window.setTimeout(action, tdata.speed);
			}
		} else { // not Hardware accelerated :(
			var speed = tdata.speed / 2;
			var hideCss = (direction === "vertical") ?
						{ height: '0px', width: '100%', marginTop: margin + 'px', opacity: tdata.noHAflipOpacity } :
						{ height: '100%', width: '0px', marginLeft: margin + 'px', opacity: tdata.noHAflipOpacity };
			var showCss = (direction === "vertical") ?
                        { height: '100%', width: '100%', marginTop: '0px', opacity: '1' } :
                        { height: '100%', width: '100%', marginLeft: '0px', opacity: '1' };
			var noHaAction;
			if (!isReversed) {
				aniData.animating = true;
				$front.stop().animate(hideCss, { duration: speed });
				noHaAction = function () {
					aniData.animating = false;
					$back.stop().animate(showCss, {
						duration: speed,
						complete: function () {
							privMethods.runContenModules(tdata, $back, $front, index);
							if (raiseEvt) {
								resumeTimer();
								tdata.animationComplete.call($tile[0], tdata, $back, $front);
							} else
								callback(tdata, $back, $front);
							$front = null;
							$back = null;
							tdata = null;
							aniData = null;
						}
					});
				};
				if (tdata.mode === "flip-list") {
					window.clearTimeout(tdata.listData[aniData.index].completeTimeout);
					tdata.listData[aniData.index].completeTimeout = window.setTimeout(noHaAction, speed);
				} else {
					window.clearTimeout(tdata.completeTimeout);
					tdata.completeTimeout = window.setTimeout(noHaAction, speed);
				}
			} else {
				aniData.animating = true;
				$back.stop().animate(hideCss, { duration: speed });
				noHaAction = function () {
					aniData.animating = false;
					$front.stop().animate(showCss, {
						duration: speed,
						complete: function () {
							privMethods.runContenModules(tdata, $front, $back, index);
							if (raiseEvt) {
								resumeTimer();
								tdata.animationComplete.call($tile[0], tdata, $front, $back);
							} else
								callback(tdata, $front, $back);
							aniData = null;
							$front = null;
							$back = null;
						}
					});
				};
				if (tdata.mode === "flip-list") {
					window.clearTimeout(tdata.listData[aniData.index].completeTimeout);
					tdata.listData[aniData.index].completeTimeout = window.setTimeout(noHaAction, speed);
				} else {
					window.clearTimeout(tdata.completeTimeout);
					tdata.completeTimeout = window.setTimeout(noHaAction, speed);
				}
			}

		}
	},
	flipList: function ($tile, count) {
		var tdata = $tile.data("LiveTile"),
            maxDelay = tdata.speed,
            triggered = false,
            resumeTimer = function () {
            	if (tdata.timer.repeatCount > 0 || tdata.timer.repeatCount == -1) {
            		if (tdata.timer.count != tdata.timer.repeatCount) {
            			tdata.timer.start(tdata.delay);
            		}
            	}
            };
		if (typeof (tdata) === "undefined") {
			throwError($.fn.liveTile.defaults.rebindMessage);
			return;
		}
		tdata.timer.pause();
		var start = tdata.animationStarting.call($tile[0], tdata, null, null);
		if (typeof (start) != "undefined" && start == false) {
			resumeTimer();
			return;
		}
		tdata.loopCount = tdata.loopCount + 1;
		tdata.faces.$listTiles.each(function (idx, ele) {
			var $li = $(ele),
                ldata = $li.data("metrojs.tile"),
                tDelay = tdata.triggerDelay(idx),
                triggerDelay = tdata.speed + Math.max(tDelay, 0),
                trigger = tdata.alwaysTrigger;
			if (!trigger)
				trigger = (Math.random() * 351) > 150 ? true : false;
			if (trigger) {
				triggered = true;
				maxDelay = Math.max(triggerDelay + tdata.speed, maxDelay);
				window.clearTimeout(ldata.flCompleteTimeout);
				ldata.flCompleteTimeout = window.setTimeout(function () {
					// call the flip method with the merged data, but dont fire animationComplete
					privMethods.flip($li, ldata.count, tdata, function (data) {
						ldata.count++;
						if (ldata.count >= MAX_LOOP_COUNT)
							ldata.count = 1;
						$li = null;
						ldata = null;
					});
				}, triggerDelay);
			}
		});
		if (triggered) {
			window.clearTimeout(tdata.flCompleteTimeout);
			tdata.flCompleteTimeout = window.setTimeout(function () {
				privMethods.runContenModules(tdata, null, null, -1);
				tdata.animationComplete.call($tile[0], tdata, null, null);
				resumeTimer();
			}, maxDelay + tdata.speed); // add some padding to make sure the final callback finished

		}
	}
};


// methods that can be called more universally
var helperMethods = {
	stylePrefixes: 'Webkit Moz O ms Khtml '.split(' '),
	domPrefixes: '-webkit- -moz- -o- -ms- -khtml- '.split(' '),
	browserPrefix: null,
	// a method to append css3 properties for each browser
	// note: values are identical for each property
	appendStyleProperties: function (obj, names, values) {
		for (var i = 0; i <= names.length - 1; i++) {
			obj[$.trim(this.browserPrefix + names[i])] = values[i];
			obj[$.trim(names[i])] = values[i];
		}
		return obj;
	},
	applyStyleValue: function (obj, name, value) {
		obj[$.trim(this.browserPrefix + name)] = value;
		obj[name] = value;
		return obj;
	},
	getBrowserPrefix: function () {
		if (this.browserPrefix == null) {
			var prefix = "";
			for (var i = 0; i <= this.domPrefixes.length - 1; i++) {
				if (typeof (document.body.style[this.domPrefixes[i] + "transform"]) != "undefined")
					prefix = this.domPrefixes[i];
			}
			return this.browserPrefix = prefix;
		}
		return this.browserPrefix;
	},
	//a shuffle method to provide more randomness than sort
	//credit: http://javascript.about.com/library/blshuffle.htm
	//note: avoiding prototype for sharepoint compatability
	shuffleArray: function (array) {
		var s = [];
		while (array.length) s.push(array.splice(Math.random() * array.length, 1));
		while (s.length) array.push(s.pop());
		return array;
	}
};

var defaultModules = {
	moduleName: 'custom',
	customSwap: {
		data: {
			customDoSwapFront: function () { return false; },
			customDoSwapBack: function () { return false; },
			customGetContent: function (tdata, $front, $back, index) { return null; }
		},
		initData: function (tdata, $ele) {
			var swapData = {};
			swapData.doSwapFront = $.inArray('custom', tdata.swapFront) > -1 && tdata.customDoSwapFront();
			swapData.doSwapBack = $.inArray('custom', tdata.swapBack) > -1 && tdata.customDoSwapBack();
			if (typeof (tdata.customSwap) !== "undefined")
				tdata.customSwap = $.extend(swapData, tdata.customSwap);
			else
				tdata.customSwap = swapData;
		},
		action: function (tdata, $front, $back, index) {

		}
	},
	htmlSwap: {
		moduleName: 'html',
		data: { // public data for the swap module                
			frontContent: [],                       // a list of html to use for the front
			frontIsRandom: true,                    // should html be chosen at random or in order                
			frontIsInGrid: false,                   // only chooses one item for each iteration in flip-list                
			backContent: [],                        // a list of html to use for the back
			backIsRandom: true,                     // should html be chosen at random or in order                
			backIsInGrid: false                     // only chooses one item for each iteration in flip-list                
		},
		initData: function (tdata, $ele) {
			var swapData = { // private data for the swap module
				backBag: [],
				backIndex: 0,
				backStaticIndex: 0,
				backStaticRndm: -1,
				prevBackIndex: -1,
				frontBag: [],
				frontIndex: 0,
				frontStaticIndex: 0,
				frontStaticRndm: -1,
				prevFrontIndex: -1
			};
			if (!tdata.ignoreDataAttributes) {
				swapData.frontIsRandom = privMethods.getDataOrDefault($ele, "front-israndom", tdata.frontIsRandom);
				swapData.frontIsInGrid = privMethods.getDataOrDefault($ele, "front-isingrid", tdata.frontIsInGrid);
				swapData.backIsRandom = privMethods.getDataOrDefault($ele, "back-israndom", tdata.backIsRandom);
				swapData.backIsInGrid = privMethods.getDataOrDefault($ele, "back-isingrid", tdata.backIsInGrid);
			} else {
				swapData.frontIsRandom = tdata.frontIsRandom;
				swapData.frontIsInGrid = tdata.frontIsInGrid;
				swapData.backIsRandom = tdata.backIsRandom;
				swapData.backIsInGrid = tdata.backIsInGrid;
			}
			swapData.doSwapFront = $.inArray('html', tdata.swapFront) > -1 && (tdata.frontContent instanceof Array) && tdata.frontContent.length > 0;
			swapData.doSwapBack = $.inArray('html', tdata.swapBack) > -1 && (tdata.backContent instanceof Array) && tdata.backContent.length > 0;
			if (typeof (tdata.htmlSwap) !== "undefined")
				tdata.htmlSwap = $.extend(swapData, tdata.htmlSwap);
			else
				tdata.htmlSwap = swapData;
			if (tdata.htmlSwap.doSwapFront) {
				tdata.htmlSwap.frontBag = this.prepBag(tdata.htmlSwap.frontBag, tdata.frontContent, tdata.htmlSwap.prevFrontIndex);
				tdata.htmlSwap.frontStaticRndm = tdata.htmlSwap.frontBag.pop();
			}
			if (tdata.htmlSwap.doSwapBack) {
				tdata.htmlSwap.backBag = this.prepBag(tdata.htmlSwap.backBag, tdata.backContent, tdata.htmlSwap.prevBackIndex);
				tdata.htmlSwap.backStaticRndm = tdata.htmlSwap.backBag.pop();
			}
		},
		prepBag: function (bag, content, prevIdx) {
			bag = bag || [];
			var bagCount = 0;
			for (var i = 0; i < content.length; i++) {
				//make sure there's not an immediate repeat
				if (i != prevIdx || bag.length === 1) {
					bag[bagCount] = i;
					bagCount++;
				}
			}
			return helperMethods.shuffleArray(bag);
		},
		getFrontSwapIndex: function (tdata) {
			var idx = 0;
			if (!tdata.htmlSwap.frontIsRandom) {
				idx = tdata.htmlSwap.frontIsInGrid ? tdata.htmlSwap.frontStaticIndex : tdata.htmlSwap.frontIndex;
			} else {
				if (tdata.htmlSwap.frontBag.length === 0) {
					tdata.htmlSwap.frontBag = this.prepBag(tdata.htmlSwap.frontBag, tdata.frontContent, tdata.htmlSwap.prevFrontIndex);
				}
				if (tdata.htmlSwap.frontIsInGrid) {
					idx = tdata.htmlSwap.frontStaticRndm;
				} else {
					idx = tdata.htmlSwap.frontBag.pop();
				}
			}
			return idx;
		},
		getBackSwapIndex: function (tdata) {
			var idx = 0;
			if (!tdata.htmlSwap.backIsRandom) {
				idx = tdata.htmlSwap.backIsInGrid ? tdata.htmlSwap.backStaticIndex : tdata.htmlSwap.backIndex;
			} else {
				if (tdata.htmlSwap.backBag.length === 0) {
					tdata.htmlSwap.backBag = this.prepBag(tdata.htmlSwap.backBag, tdata.backContent, tdata.htmlSwap.prevBackIndex);
				}
				if (tdata.htmlSwap.backIsInGrid) {
					idx = tdata.htmlSwap.backStaticRndm;
				} else {
					idx = tdata.htmlSwap.backBag.pop();
				}
			}
			return idx;
		},
		action: function (tdata, $front, $back, index) {
			if (!tdata.htmlSwap.doSwapFront && !tdata.htmlSwap.doSwapBack)
				return;
			var isList = tdata.mode === "flip-list";
			var swapIndex = 0;
			var isReversed = isList ? tdata.listData[Math.max(index, 0)].isReversed : tdata.isReversed;
			if (isList && index == -1) {
				// flip list completed
				if (!isReversed) {
					if (tdata.htmlSwap.doSwapFront) {
						// update the random value for grid mode
						if (tdata.htmlSwap.frontBag.length === 0)
							tdata.htmlSwap.frontBag = this.prepBag(tdata.htmlSwap.frontBag, tdata.frontContent, tdata.htmlSwap.frontStaticRndm);
						tdata.htmlSwap.frontStaticRndm = tdata.htmlSwap.frontBag.pop();
						// update the static index
						tdata.htmlSwap.frontStaticIndex++;
						if (tdata.htmlSwap.frontStaticIndex >= tdata.frontContent.length)
							tdata.htmlSwap.frontStaticIndex = 0;
					}
				} else {
					if (tdata.htmlSwap.doSwapBack) {
						// update the random value for grid mode
						if (tdata.htmlSwap.backBag.length === 0)
							tdata.htmlSwap.backBag = this.prepBag(tdata.htmlSwap.backBag, tdata.backContent, tdata.htmlSwap.backStaticRndm);
						tdata.htmlSwap.backStaticRndm = tdata.htmlSwap.backBag.pop();
						// update the static index
						tdata.htmlSwap.backStaticIndex++;
						if (tdata.htmlSwap.backStaticIndex >= tdata.backContent.length)
							tdata.htmlSwap.backStaticIndex = 0;
					}
				}
				return;
			}
			if (!isReversed) {
				if (!tdata.htmlSwap.doSwapFront)
					return;
				swapIndex = this.getFrontSwapIndex(tdata);
				tdata.htmlSwap.prevFrontIndex = swapIndex;
				if (tdata.mode === "slide") {
					if (!tdata.startNow)
						$front.html(tdata.frontContent[swapIndex]);
					else
						$back.html(tdata.frontContent[swapIndex]);
				} else
					$back.html(tdata.frontContent[swapIndex]);
				// increment the front index to get the next item from the list
				tdata.htmlSwap.frontIndex++;
				if (tdata.htmlSwap.frontIndex >= tdata.frontContent.length)
					tdata.htmlSwap.frontIndex = 0;
				if (!isList) {
					// increment the static index if we're not in list mode
					tdata.htmlSwap.frontStaticIndex++;
					if (tdata.htmlSwap.frontStaticIndex >= tdata.frontContent.length)
						tdata.htmlSwap.frontStaticIndex = 0;
				} else {
					// flip list
				}
			} else {
				if (!tdata.htmlSwap.doSwapBack)
					return;
				swapIndex = this.getBackSwapIndex(tdata);
				tdata.htmlSwap.prevBackIndex = swapIndex;
				$back.html(tdata.backContent[tdata.htmlSwap.backIndex]);
				tdata.htmlSwap.backIndex++;
				if (tdata.htmlSwap.backIndex >= tdata.backContent.length)
					tdata.htmlSwap.backIndex = 0;
				if (!isList) {
					tdata.htmlSwap.backStaticIndex++;
					if (tdata.htmlSwap.backStaticIndex >= tdata.backContent.length)
						tdata.htmlSwap.backStaticIndex = 0;
				} else {
					// flip list
				}
			}
		}
	},
	imageSwap: {
		moduleName: 'image',
		data: {
			preloadImages: false,
			imageCssSelector: '>img,>a>img',        // the selector used to choose a an image to apply a src or background to
			fadeSwap: false,                        // fade the image before swapping
			frontImages: [],                        // a list of images to use for the front
			frontIsRandom: true,                    // should images be chosen at random or in order
			frontIsBackgroundImage: false,          // set the src attribute or css background-image property
			frontIsInGrid: false,                   // only chooses one item for each iteration in flip-list
			backImages: null,                       // a list of images to use for the back
			backIsRandom: true,                     // should images be chosen at random or in order
			backIsBackgroundImage: false,           // set the src attribute or css background-image property
			backIsInGrid: false                     // only chooses one item for each iteration in flip-list                
		},
		initData: function (tdata, $ele) {
			var swapData = {
				backBag: [],
				backIndex: 0,
				backStaticIndex: 0,
				backStaticRndm: -1,
				frontBag: [],
				frontIndex: 0,
				frontStaticIndex: 0,
				frontStaticRndm: -1,
				prevBackIndex: -1,
				prevFrontIndex: -1
			}, useData = tdata.ignoreDataAttributes;
			if (useData) {
				swapData.imageCssSelector = privMethods.getDataOrDefault($ele, "image-css", tdata.imageCssSelector);
				swapData.fadeSwap = privMethods.getDataOrDefault($ele, "fadeswap", tdata.fadeSwap);
				swapData.frontIsRandom = privMethods.getDataOrDefault($ele, "front-israndom", tdata.frontIsRandom);
				swapData.frontIsInGrid = privMethods.getDataOrDefault($ele, "front-isingrid", tdata.frontIsInGrid);
				swapData.frontIsBackgroundImage = privMethods.getDataOrDefault($ele, "front-isbg", tdata.frontIsBackgroundImage);
				swapData.backIsRandom = privMethods.getDataOrDefault($ele, "back-israndom", tdata.backIsRandom);
				swapData.backIsInGrid = privMethods.getDataOrDefault($ele, "back-isingrid", tdata.backIsInGrid);
				swapData.backIsBackgroundImage = privMethods.getDataOrDefault($ele, "back-isbg", tdata.backIsBackgroundImage);
				swapData.doSwapFront = $.inArray('image', tdata.swapFront) > -1 && (tdata.frontImages instanceof Array) && tdata.frontImages.length > 0;
				swapData.doSwapBack = $.inArray('image', tdata.swapBack) > -1 && (tdata.backImages instanceof Array) && tdata.backImages.length > 0;
				swapData.alwaysSwapFront = privMethods.getDataOrDefault($ele, "front-alwaysswap", tdata.alwaysSwapFront);
				swapData.alwaysSwapBack = privMethods.getDataOrDefault($ele, "back-alwaysswap", tdata.alwaysSwapBack);
			} else {
				swapData.imageCssSelector = tdata.imageCssSelector;
				swapData.fadeSwap = tdata.fadeSwap;
				swapData.frontIsRandom = tdata.frontIsRandom;
				swapData.frontIsInGrid = tdata.frontIsInGrid;
				swapData.frontIsBackgroundImage = tdata.frontIsBackgroundImage;
				swapData.backIsRandom = tdata.backIsRandom;
				swapData.backIsInGrid = tdata.backIsInGrid;
				swapData.backIsBackgroundImage = tdata.backIsBackgroundImage;
				swapData.doSwapFront = $.inArray('image', tdata.swapFront) > -1 && (tdata.frontImages instanceof Array) && tdata.frontImages.length > 0;
				swapData.doSwapBack = $.inArray('image', tdata.swapBack) > -1 && (tdata.backImages instanceof Array) && tdata.backImages.length > 0;
				swapData.alwaysSwapFront = tdata.alwaysSwapFront;
				swapData.alwaysSwapBack = tdata.alwaysSwapBack;
			}
			if (typeof (tdata.imgSwap) !== "undefined")
				tdata.imgSwap = $.extend(swapData, tdata.imgSwap);
			else
				tdata.imgSwap = swapData;
			if (tdata.imgSwap.doSwapFront) {
				tdata.imgSwap.frontBag = this.prepBag(tdata.imgSwap.frontBag, tdata.frontImages, tdata.imgSwap.prevFrontIndex);
				tdata.imgSwap.frontStaticRndm = tdata.imgSwap.frontBag.pop();
				if (tdata.preloadImages)
					$(tdata.frontImages).metrojs.preloadImages(function () { });
			}
			if (tdata.imgSwap.doSwapBack) {
				tdata.imgSwap.backBag = this.prepBag(tdata.imgSwap.backBag, tdata.backImages, tdata.imgSwap.prevBackIndex);
				tdata.imgSwap.backStaticRndm = tdata.imgSwap.backBag.pop();
				if (tdata.preloadImages)
					$(tdata.backImages).metrojs.preloadImages(function () { });
			}
		},
		prepBag: function (bag, content, prevIdx) {
			bag = bag || [];
			var bagCount = 0;
			for (var i = 0; i < content.length; i++) {
				//make sure there's not an immediate repeat
				if (i != prevIdx || content.length === 1) {
					bag[bagCount] = i;
					bagCount++;
				}
			}
			return helperMethods.shuffleArray(bag);
		},
		getFrontSwapIndex: function (tdata) {
			var idx = 0;
			if (!tdata.imgSwap.frontIsRandom) {
				idx = tdata.imgSwap.frontIsInGrid ? tdata.imgSwap.frontStaticIndex : tdata.imgSwap.frontIndex;
			} else {
				if (tdata.imgSwap.frontBag.length === 0) {
					tdata.imgSwap.frontBag = this.prepBag(tdata.imgSwap.frontBag, tdata.frontImages, tdata.imgSwap.prevFrontIndex);
				}
				if (tdata.imgSwap.frontIsInGrid) {
					idx = tdata.imgSwap.frontStaticRndm;
				} else {
					idx = tdata.imgSwap.frontBag.pop();
				}
			}
			return idx;
		},
		getBackSwapIndex: function (tdata) {
			var idx = 0;
			if (!tdata.imgSwap.backIsRandom) {
				idx = tdata.imgSwap.backIsInGrid ? tdata.imgSwap.backStaticIndex : tdata.imgSwap.backIndex;
			} else {
				if (tdata.imgSwap.backBag.length === 0) {
					tdata.imgSwap.backBag = this.prepBag(tdata.imgSwap.backBag, tdata.backImages, tdata.imgSwap.prevBackIndex);
				}
				if (tdata.imgSwap.backIsInGrid) {
					idx = tdata.imgSwap.backStaticRndm;
				} else {
					idx = tdata.imgSwap.backBag.pop();
				}
			}
			return idx;
		},
		setImageProperties: function ($img, image, isBackground) {
			var css = {}, // css object to apply
                attr = {}; // attribute values to apply
			// get image source
			if (typeof (image.src) !== 'undefined') {
				if (!isBackground)
					attr.src = image.src;
				else
					css.backgroundImage = "url('" + image.src + "')";
			}
			// get alt text
			if (typeof (image.alt) !== 'undefined')
				attr.alt = image.alt;
			// set css
			if (typeof (image.css) === 'object')
				$img.css($.extend(css, image.css));
			else
				$img.css(css);
			// set attributes
			if (typeof (image.attr) === 'object')
				$img.attr($.extend(attr, image.attr));
			else
				$img.attr(attr);
		},
		action: function (tdata, $front, $back, index) {
			if (!tdata.imgSwap.doSwapFront && !tdata.imgSwap.doSwapBack)
				return;
			var isList = tdata.mode === "flip-list",
                isSlide = tdata.mode == "slide",
                swapIndex = 0,
                isReversed = isList ? tdata.listData[Math.max(index, 0)].isReversed : tdata.isReversed;
			if (isList && index == -1) {
				// flip list completed
				if (tdata.alwaysSwapFront || !isReversed) {
					if (tdata.imgSwap.doSwapFront) {
						// update the random value for grid mode
						if (tdata.imgSwap.frontBag.length === 0)
							tdata.imgSwap.frontBag = this.prepBag(tdata.imgSwap.frontBag, tdata.frontImages, tdata.imgSwap.frontStaticRndm);
						tdata.imgSwap.frontStaticRndm = tdata.imgSwap.frontBag.pop();
						// update the static index
						tdata.imgSwap.frontStaticIndex++;
						if (tdata.imgSwap.frontStaticIndex >= tdata.frontImages.length)
							tdata.imgSwap.frontStaticIndex = 0;
					}
				}
				if (tdata.alwaysSwapBack || isReversed) {
					if (tdata.imgSwap.doSwapBack) {
						// update the random value for grid mode
						if (tdata.imgSwap.backBag.length === 0)
							tdata.imgSwap.backBag = this.prepBag(tdata.imgSwap.backBag, tdata.backImages, tdata.imgSwap.backStaticRndm);
						tdata.imgSwap.backStaticRndm = tdata.imgSwap.backBag.pop();
						// update the static index
						tdata.imgSwap.backStaticIndex++;
						if (tdata.imgSwap.backStaticIndex >= tdata.backImages.length)
							tdata.imgSwap.backStaticIndex = 0;
					}
				}
				return;
			}
			var $face, // face being swapped
                $img, // image to apply values
                image,// image object to hold properties
                swap; // wrapper for setimageProperties for fade
			if (tdata.alwaysSwapFront || !isReversed) {
				if (!tdata.imgSwap.doSwapFront)
					return;
				swapIndex = this.getFrontSwapIndex(tdata);
				tdata.imgSwap.prevFrontIndex = swapIndex;
				// slide mode has a static front and back face
				$face = (tdata.mode === "slide") ? $front : $back;
				$img = $face.find(tdata.imgSwap.imageCssSelector);
				image = typeof (tdata.frontImages[swapIndex]) === "object" ? tdata.frontImages[swapIndex] : { src: tdata.frontImages[swapIndex] };
				swap = function (callback) {
					// set src, alt, css and attribute values
					var isBg = tdata.imgSwap.frontIsBackgroundImage;
					if (typeof (callback) == "function") {
						if (isBg)
							window.setTimeout(callback, 100);
						else
							$img[0].onload = callback;
					}
					defaultModules.imageSwap.setImageProperties($img, image, isBg);

				};
				if (tdata.fadeSwap) {
					$img.fadeOut(function () {
						swap(function () {
							$img.fadeIn();
						});
					});
				} else
					swap();
				// increment indexes
				tdata.imgSwap.frontIndex++;
				if (tdata.imgSwap.frontIndex >= tdata.frontImages.length)
					tdata.imgSwap.frontIndex = 0;
				if (!isList) {
					tdata.imgSwap.frontStaticIndex++;
					if (tdata.imgSwap.frontStaticIndex >= tdata.frontImages.length)
						tdata.imgSwap.frontStaticIndex = 0;
				} else {

				}
			}
			if (tdata.alwaysSwapBack || isReversed) {
				if (!tdata.imgSwap.doSwapBack)
					return;
				// get the new index
				swapIndex = this.getBackSwapIndex(tdata);
				tdata.imgSwap.prevBackIndex = swapIndex;
				// use the $face var for consistency
				$face = $back;
				$img = $face.find(tdata.imgSwap.imageCssSelector);
				image = typeof (tdata.backImages[swapIndex]) === "object" ? tdata.backImages[swapIndex] : { src: tdata.backImages[swapIndex] };
				swap = function () {
					// set src, alt, css and attribute values
					defaultModules.imageSwap.setImageProperties($img, image, tdata.imgSwap.backIsBackgroundImage);
				};
				if (tdata.fadeSwap) {
					$img.fadeOut(function () {
						swap(function () {
							$img.fadeIn();
						});
					});
				} else
					swap();
				// increment indexes
				tdata.imgSwap.backIndex++;
				if (tdata.imgSwap.backIndex >= tdata.backImages.length)
					tdata.imgSwap.backIndex = 0;
				if (!isList) {
					tdata.imgSwap.backStaticIndex++;
					if (tdata.imgSwap.backStaticIndex >= tdata.backImages.length)
						tdata.imgSwap.backStaticIndex = 0;
				} else {

				}
			}
		}
	}
};

// object to maintain timer state
$.fn.metrojs.TileTimer = function (interval, callback, repeatCount) {
	this.timerId = null;                                                        // the id of the current timeout
	this.interval = interval;                                                   // the amount of time to wait between each action call
	this.action = callback;                                                     // the method that is fired on each tick
	this.count = 0;                                                             // the number of times the action has been fired
	this.repeatCount = typeof (repeatCount) === "undefined" ? 0 : repeatCount;   // the number of times the action will be fired        
	// call the action method after a delay and call start | stop based on repeat count
	this.start = function (delay) {
		window.clearTimeout(this.timerId);
		var t = this;
		this.timerId = window.setTimeout(function () {
			t.tick.call(t, interval);
		}, delay);
	};

	this.tick = function (when) {
		this.action(this.count + 1);
		this.count++;
		// reset the loop count
		if (this.count >= MAX_LOOP_COUNT)
			this.count = 0;
		if (this.repeatCount > 0 || this.repeatCount == -1) {
			if (this.count != this.repeatCount) {
				this.start(when);
			} else
				this.stop();
		}
	}
	// clear the timer and reset the count
	this.stop = function () {
		this.timerId = window.clearTimeout(this.timerId);
		this.reset();
	};

	this.resume = function () {
		if (this.repeatCount > 0 || this.repeatCount == -1) {
			if (this.count != this.repeatCount) {
				this.start(interval);
			}
		}
	};

	// clear the timer but leave the count intact
	this.pause = function () {
		this.timerId = window.clearTimeout(this.timerId);
	};

	// reset count
	this.reset = function () {
		this.count = 0;
	};

	// reset count and timer
	this.restart = function (delay) {
		this.stop();
		this.start(delay);
	};
};
jQuery.fn.metrojs.theme = {
	loadDefaultTheme: function (stgs) {
		if (typeof (stgs) === "undefined" || stgs == null) {
			stgs = jQuery.fn.metrojs.theme.defaults;
		} else {
			var stg = jQuery.fn.metrojs.theme.defaults;
			jQuery.extend(stg, stgs);
			stgs = stg;
		}
		//get theme from local storage or set base theme
		var hasLocalStorage = typeof (window.localStorage) !== "undefined";
		var hasKeyAndValue = function (key) {
			return (typeof (window.localStorage[key]) !== "undefined" && window.localStorage[key] != null);
		};
		if (hasLocalStorage && (!hasKeyAndValue("Metro.JS.AccentColor") || !hasKeyAndValue("Metro.JS.BaseAccentColor"))) {
			//base theme
			window.localStorage["Metro.JS.AccentColor"] = stgs.accentColor;
			window.localStorage["Metro.JS.BaseAccentColor"] = stgs.baseTheme;
			jQuery(stgs.accentCssSelector).addClass(stgs.accentColor).data("accent", stgs.accentColor);
			jQuery(stgs.baseThemeCssSelector).addClass(stgs.baseTheme);
			if (typeof (stgs.loaded) === "function")
				stgs.loaded(stgs.baseTheme, stgs.accentColor);
			//preload light theme image
			if (typeof (stgs.preloadAltBaseTheme) !== "undefined" && stgs.preloadAltBaseTheme)
				jQuery([(stgs.baseTheme == 'dark') ? stgs.metroLightUrl : stgs.metroDarkUrl]).metrojs.preloadImages(function () { });
		} else {
			if (hasLocalStorage) {
				stgs.accentColor = window.localStorage["Metro.JS.AccentColor"];
				stgs.baseTheme = window.localStorage["Metro.JS.BaseAccentColor"];
				jQuery(stgs.accentCssSelector).addClass(stgs.accentColor).data("accent", stgs.accentColor);
				jQuery(stgs.baseThemeCssSelector).addClass(stgs.baseTheme);
				if (typeof (stgs.loaded) === "function")
					stgs.loaded(stgs.baseTheme, stgs.accentColor);
			} else {
				jQuery(stgs.accentCssSelector).addClass(stgs.accentColor).data("accent", stgs.accentColor);
				jQuery(stgs.baseThemeCssSelector).addClass(stgs.baseTheme);
				if (typeof (stgs.loaded) === "function")
					stgs.loaded(stgs.baseTheme, stgs.accentColor);
				//preload light theme image
				if (typeof (stgs.preloadAltBaseTheme) !== "undefined" && stgs.preloadAltBaseTheme)
					jQuery([(stgs.baseTheme == 'dark') ? stgs.metroLightUrl : stgs.metroDarkUrl]).metrojs.preloadImages(function () { });
			}
		}
	},
	applyTheme: function (tColor, aColor, stgs) {
		if (typeof (stgs) === "undefined" || stgs == null) {
			stgs = jQuery.fn.metrojs.theme.defaults;
		} else {
			var stg = jQuery.fn.metrojs.theme.defaults;
			stgs = jQuery.extend({}, stg, stgs);
		}

		if (typeof (tColor) !== "undefined" && tColor != null) {
			if (typeof (window.localStorage) !== "undefined") {
				window.localStorage["Metro.JS.BaseAccentColor"] = tColor;
			}
			var $theme = jQuery(stgs.baseThemeCssSelector);
			if ($theme.length > 0) {
				if (tColor == "dark")
					$theme.addClass("dark").removeClass("light");
				else if (tColor == "light")
					$theme.addClass("light").removeClass("dark");
			}
		}
		if (typeof (aColor) !== "undefined" && aColor != null) {
			if (typeof (window.localStorage) !== "undefined") {
				window.localStorage["Metro.JS.AccentColor"] = aColor;
			}
			var $accent = jQuery(stgs.accentCssSelector);
			if ($accent.length > 0) {
				var themeset = false;
				$accent.each(function () {
					jQuery(this).addClass(aColor);
					var dAccent = jQuery(this).data("accent");
					if (dAccent != aColor) {
						var cleanClass = jQuery(this).attr("class").replace(dAccent, "");
						cleanClass = cleanClass.replace(/(\s)+/, ' ');
						jQuery(this).attr("class", cleanClass);
						jQuery(this).data("accent", aColor);
						themeset = true;
					}
				});
				if (themeset && typeof (stgs.accentPicked) === "function")
					stgs.accentPicked(aColor);
			}
		}
	},
	appendAccentColors: function (stgs) {
		if (typeof (stgs) === "undefined" || stgs == null) {
			stgs = jQuery.fn.metrojs.theme.defaults;
		} else {
			var stg = jQuery.fn.metrojs.theme.defaults;
			stgs = jQuery.extend({}, stg, stgs);
		}
		var themeList = "";
		var themes = stgs.accentColors;
		var template = stgs.accentListTemplate;
		for (var i = 0; i < themes.length; i++) {
			themeList += template.replace(/\{0\}/g, themes[i]);
		}
		$(themeList).appendTo(stgs.accentListContainer);
	},
	appendBaseThemes: function (stgs) {
		if (typeof (stgs) === "undefined" || stgs == null) {
			stgs = jQuery.fn.metrojs.theme.defaults;
		} else {
			var stg = jQuery.fn.metrojs.theme.defaults;
			stgs = jQuery.extend({}, stg, stgs);
		}
		var themeList = "",
            themes = stgs.baseThemes,
            template = stgs.baseThemeListTemplate;
		for (var i = 0; i < themes.length; i++) {
			themeList += template.replace(/\{0\}/g, themes[i]);
		}
		$(themeList).appendTo(stgs.baseThemeListContainer);
	},
	// default options for theme
	defaults: {
		baseThemeCssSelector: 'body',                           // selector to place dark or light class after load or selection
		accentCssSelector: '.tiles',                            // selector to place accent color class after load or selection
		accentColor: 'blue',                                    // the default accent color. options are blue, brown, green, lime, magenta, mango, pink, purple, red, teal
		baseTheme: 'dark',                                      // the default theme color. options are dark, light
		accentColors: [
             'amber', 'blue', 'brown', 'cobalt', 'crimson', 'cyan',
             'magenta', 'lime', 'indigo', 'green', 'emerald',
             'mango', 'mauve', 'olive', 'orange', 'pink', 'red',
             'sienna', 'steel', 'teal', 'violet', 'yellow'
		],
		baseThemes: [
            'light',
            'dark'
		],
		accentListTemplate: "<li><a href='javascript:;' title='{0}' class='accent {0}'></a></li>", // template to generate accent options
		accentListContainer: "ul.theme-options,.theme-options>ul",                   // selector of container to append accents
		baseThemeListTemplate: "<li><a href='javascript:;' title='{0}' class='accent {0}'></a></li>", // template to generate accent options
		baseThemeListContainer: "ul.base-theme-options,.base-theme-options>ul"                    // selector of container to append accents
	}
};

jQuery.fn.applicationBar = function (options) {    
    /* Setup the public options for the applicationBar  */
    var stgs = typeof (jQuery.fn.metrojs.theme) !== "undefined" ? jQuery.fn.metrojs.theme.defaults : {};
    jQuery.extend(stgs, jQuery.fn.applicationBar.defaults, options);
    if (typeof (jQuery.fn.metrojs.theme) != "undefined") {
        var theme = jQuery.fn.metrojs.theme;
        if (stgs.shouldApplyTheme) {         
            theme.loadDefaultTheme(stgs);
        }
        var themeContainer = stgs.accentListContainer.replace(",", " a,") + " a";
        var themeContainerClick = function () {
            var accent = jQuery(this).attr("class").replace("accent", "").replace(" ", "");
            theme.applyTheme(null, accent, stgs);
            if (typeof (stgs.accentPicked) == "function")
                stgs.accentPicked(accent);
        };
        var baseContainer = stgs.baseThemeListContainer.replace(","," a,") + " a";
        var baseContainerClick = function () {
            var accent = jQuery(this).attr("class").replace("accent", '').replace(' ', '');
            theme.applyTheme(accent, null, stgs);
            if (typeof (stgs.themePicked) == "function")
                stgs.themePicked(accent);
        };
        if (typeof ($.fn.on) === "function") {
            $(this).on("click.appBar", themeContainer, themeContainerClick);
            $(this).on("click.appBar", baseContainer, baseContainerClick);
        } else {
            $(themeContainer).live("click.appBar", themeContainerClick);
            $(baseContainer).live("click.appBar", baseContainerClick);
        }
    }
    //this should really only run once but we can support multiple application bars
    return $(this).each(function (idx, ele) {
    	var $this = $(ele),
            data = $.extend({}, stgs);
    	if(data.collapseHeight == "auto")
        	data.collapseHeight = $(this).outerHeight();

        //unfortunately we have to sniff out mobile browsers because of the inconsistent implementation of position:fixed
        //most desktop methods return false positives on a mobile
        //todo: find/come up with a better fixed position test
        if (navigator.userAgent.match(/(Android|webOS|iPhone|iPod|BlackBerry|PIE|IEMobile)/i)) {
            // IEMobile10 supports position:fixed. This should cover up to IE20 or at least until fixed positioning gets sorted            
            // let iOS 5+ pass as well, hopefully by iOS 9 fixed pos will be standard :/
            if (!navigator.userAgent.match(/(IEMobile\/1)/i) && !navigator.userAgent.match(/(iPhone OS [56789])/i)) {
                $this.css({ position: 'absolute', bottom: '0px' });
            }
        }
        data.slideOpen = function () {
            if (!$this.hasClass("expanded"))
                data.animateAppBar(false);
        };
        data.slideClosed = function () {
            if ($this.hasClass("expanded"))
                data.animateAppBar(true);
        };
        data.animateAppBar = function (isExpanded) {
        	var hgt = isExpanded ? data.collapseHeight : data.expandHeight,
        		t;
        	if (isExpanded) {
        		t = stgs.collapse();
        		if (typeof (t) != "undefined" && t === false)
        			return;
        		$this.removeClass("expanded");
        	} else {
        		t = stgs.expand();
        		if (typeof (t) != "undefined" && t === false)
					return
        		if (!$this.hasClass("expanded"))
        			$this.addClass("expanded");
        	}
            $this.stop().animate({ height: hgt }, { duration: data.duration }, function () {
            	if (isExpanded) {
            		stgs.collapsed();
            	} else {
            		stgs.expanded();
            	}
            });
        };
        $this.data("ApplicationBar", data)

        $this.find(stgs.handleSelector).click(function () {
            data.animateAppBar($this.hasClass("expanded"));
        });

        if (data.bindKeyboard == true) {
            jQuery(document.documentElement).keyup(function (event) {
                // handle cursor keys
                if (event.keyCode == 38) {
                    // expand
                    if (event.target && event.target.tagName.match(/INPUT|TEXTAREA|SELECT/i) == null) {
                        if (!$this.hasClass("expanded")) {
                            data.animateAppBar(false);
                        }
                    }
                    
                } else if (event.keyCode == 40) {
                    // collapse
                    if (event.target && event.target.tagName.match(/INPUT|TEXTAREA|SELECT/i) == null) {
                        if ($this.hasClass("expanded")) {
                            data.animateAppBar(true);
                        }
                    }
                }
            });            
        }
    });
};

// default options for applicationBar, the theme defaults are merged with this object when the applicationBar function is called
jQuery.fn.applicationBar.defaults = {
    applyTheme: true,                                       // should the theme be loaded from local storage and applied to the page
    themePicked: function (tColor) { },                     // called when a new theme is chosen. the chosen theme (dark | light)
    accentPicked: function (aColor) { },                    // called when a new accent is chosen. the chosen theme (blue, mango, purple, etc.)
    loaded: function (tColor, aColor) { },                  // called if applyTheme is true onload when a theme has been loaded from local storage or overridden by options
    duration: 300,                                          // how fast should animation be performed, in milliseconds
    expandHeight: "320px",                                  // height the application bar to expand to when opened
    collapseHeight: "auto",                                 // height the application bar will collapse back to when closed
    bindKeyboard: true,                                     // should up and down keys on keyborad be bound to the application bar
    handleSelector: "a.etc",
    metroLightUrl: 'images/metroIcons_light.jpg',  // the url for the metro light icons (only needed if preload 'preloadAltBaseTheme' is true)
    metroDarkUrl: 'images/metroIcons.jpg',         // the url for the metro dark icons (only needed if preload 'preloadAltBaseTheme' is true)
    preloadAltBaseTheme: false,                             // should the applicationBar icons be pre loaded for the alternate theme to enable fast theme switching
    expand: function () { },								// called before expanding. return false to cancel
    collapse: function() { },								// called before collapsing. return false to cancel
    expanded: function () { },								// called after expanding
    collapsed: function () { }								// called agter collapsing
};
/* Preload Images */
// Usage: jQuery(['img1.jpg', { src: 'img2.jpg' }]).metrojs.preloadImages(function(){ ... });
// Callback function gets called after all images are preloaded
$.fn.metrojs.preloadImages = function (callback) {
        var checklist = $(this).toArray();
        var $img = $("<img style='display:none;' />").appendTo("body");
        $(this).each(function () {
                var src = this;
                if (typeof(this) == "object")
                        src = this.src;
                $img.attr({ src: src }).load(function() {
                        for (var i = 0; i < checklist.length; i++) {
                                if (checklist[i] == element) {
                                        checklist.splice(i, 1);
                                }
                        }
                        if (checklist.length == 0) {
                                callback();
                        }
                });
               
        });
    $img.remove();
};
// object used for compatibility checks
$.fn.metrojs.MetroModernizr = function (stgs) {
    if(typeof(stgs) === "undefined") {
                stgs = { useHardwareAccel: true, useModernizr: typeof(window.Modernizr) !== "undefined" };
        }
    this.isOldJQuery =  /^1\.[0123]/.test($.fn.jquery),
    this.isOldAndroid = (function(){
        try{
            var ua = navigator.userAgent;        
            if( ua.indexOf("Android") >= 0 )
            {
                var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8));
                if (androidversion < 2.3)
                    return true;
            }
        }catch(err){ $.error(err); }
        return false;
    })();
    this.canTransform = false;
    this.canTransition = false;
    this.canTransform3d = false;
    this.canAnimate = false;
    this.canTouch = false;
    this.canFlip3d = stgs.useHardwareAccel;
    if (stgs.useHardwareAccel == true) {
        if (stgs.useModernizr == false) {
            //determine if the browser supports the neccessary accelerated features
            if (typeof (window.MetroModernizr) !== "undefined") {
                this.canTransform = window.MetroModernizr.canTransform;
                this.canTransition = window.MetroModernizr.canTransition;
                this.canTransform3d = window.MetroModernizr.canTransform3d;
                this.canAnimate = window.MetroModernizr.canAnimate;
                this.canTouch = window.MetroModernizr.canTouch;
            } else {
                window.MetroModernizr = {};
                /***** check for browser capabilities credit: modernizr-1.7 http://modernizr.com/ *****/
                var mod = 'metromodernizr';
                var docElement = document.documentElement;
                var docHead = document.head || document.getElementsByTagName('head')[0];
                var modElem = document.createElement(mod);
                var m_style = modElem.style;
                var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
                var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
                var test_props = function (props, callback) {
                    for (var i in props) {
                        if (m_style[props[i]] !== undefined && (!callback || callback(props[i], modElem))) {
                            return true;
                        }
                    }
                };
                var test_props_all = function (prop, callback) {
                    var uc_prop = prop.charAt(0).toUpperCase() + prop.substr(1),
                    props = (prop + ' ' + domPrefixes.join(uc_prop + ' ') + uc_prop).split(' ');
                    return !!test_props(props, callback);
                };
                var test_3d = function () {
                    var ret = !!test_props(['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']);
                    if (ret && 'webkitPerspective' in docElement.style) {
                        // Webkit allows this media query to succeed only if the feature is enabled.
                        // '@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d),(modernizr){ ... }'
                        ret = testMediaQuery(['@media (',prefixes.join('transform-3d),('),mod,')','{#metromodernizr{left:9px;position:absolute;height:3px;}}'].join(''), function(div){
                            return div.offsetHeight === 3 && div.offsetLeft === 9;
                        });
                    }
                    return ret;
                };
                var testMediaQuery = function (mq, predicate) {
                    var st = document.createElement('style'),
                        div = document.createElement('div'),
                        ret;
                    st.textContent = mq;
                    docHead.appendChild(st);
                    div.id = mod;
                    docElement.appendChild(div);
                    ret = predicate(div);
                    st.parentNode.removeChild(st);
                    div.parentNode.removeChild(div);
                    return !!ret;
                };
                var test_touch = function() {
                    return canTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch ||
                        (window.PointerEvent && window.navigator.maxTouchPoints > 0) ||
                        (window.MSPointerEvent && window.navigator.msMaxTouchPoints > 0) ||
                        testMediaQuery(['@media (',prefixes.join('touch-enabled),('),mod,')','{#metromodernizr{top:9px;position:absolute}}'].join(''), function(div){
                            return div.offsetTop === 9;
                        });
                };
                this.canTransform = !!test_props(['transformProperty', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform']);
                this.canTransition = test_props_all('transitionProperty');
                this.canTransform3d = test_3d();
                this.canAnimate = test_props_all('animationName');
                this.canTouch = test_touch();
                window.MetroModernizr.canTransform = this.canTransform;
                window.MetroModernizr.canTransition = this.canTransition;
                window.MetroModernizr.canTransform3d = this.canTransform3d;
                window.MetroModernizr.canAnimate = this.canAnimate;
                window.MetroModernizr.canTouch = this.canTouch;
                docElement = null;
                docHead = null;
                modElem = null;
                m_style = null;
            }
        } else {
            this.canTransform = $("html").hasClass("csstransforms");
            this.canTransition = $("html").hasClass("csstransitions");
            this.canTransform3d = $("html").hasClass("csstransforms3d");
            this.canAnimate = $("html").hasClass("cssanimations");
            this.canTouch = $("html").hasClass("touch") || (typeof(window.navigator.msMaxTouchPoints) !== "undefined" && window.navigator.msMaxTouchPoints > 0);
        }
    }
    this.canFlip3d = this.canFlip3d && this.canAnimate && this.canTransform && this.canTransform3d;
};

})(jQuery);


/***/ }),

/***/ 323:
/***/ (function(module, exports) {

(function(global) {
  "use strict";

  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
   * GREAT JUSTICE. */
  var requestInterval, cancelInterval;

  (function() {
    var raf = global.requestAnimationFrame       ||
              global.webkitRequestAnimationFrame ||
              global.mozRequestAnimationFrame    ||
              global.oRequestAnimationFrame      ||
              global.msRequestAnimationFrame     ,
        caf = global.cancelAnimationFrame        ||
              global.webkitCancelAnimationFrame  ||
              global.mozCancelAnimationFrame     ||
              global.oCancelAnimationFrame       ||
              global.msCancelAnimationFrame      ;

    if(raf && caf) {
      requestInterval = function(fn, delay) {
        var handle = {value: null};

        function loop() {
          handle.value = raf(loop);
          fn();
        }

        loop();
        return handle;
      };

      cancelInterval = function(handle) {
        caf(handle.value);
      };
    }

    else {
      requestInterval = setInterval;
      cancelInterval = clearInterval;
    }
  }());

  /* Catmull-rom spline stuffs. */
  /*
  function upsample(n, spline) {
    var polyline = [],
        len = spline.length,
        bx  = spline[0],
        by  = spline[1],
        cx  = spline[2],
        cy  = spline[3],
        dx  = spline[4],
        dy  = spline[5],
        i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

    for(i = 6; i !== spline.length; i += 2) {
      ax = bx;
      bx = cx;
      cx = dx;
      dx = spline[i    ];
      px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
      qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
      rx = -0.5 * ax            + 0.5 * cx           ;
      sx =                   bx                      ;

      ay = by;
      by = cy;
      cy = dy;
      dy = spline[i + 1];
      py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
      qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
      ry = -0.5 * ay            + 0.5 * cy           ;
      sy =                   by                      ;

      for(j = 0; j !== n; ++j) {
        t = j / n;

        polyline.push(
          ((px * t + qx) * t + rx) * t + sx,
          ((py * t + qy) * t + ry) * t + sy
        );
      }
    }

    polyline.push(
      px + qx + rx + sx,
      py + qy + ry + sy
    );

    return polyline;
  }

  function downsample(n, polyline) {
    var len = 0,
        i, dx, dy;

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      len += Math.sqrt(dx * dx + dy * dy);
    }

    len /= n;

    var small = [],
        target = len,
        min = 0,
        max, t;

    small.push(polyline[0], polyline[1]);

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      max = min + Math.sqrt(dx * dx + dy * dy);

      if(max > target) {
        t = (target - min) / (max - min);

        small.push(
          polyline[i - 2] + dx * t,
          polyline[i - 1] + dy * t
        );

        target += len;
      }

      min = max;
    }

    small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

    return small;
  }
  */

  /* Define skycon things. */
  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
   * I'll try to clean it up eventually! Promise! */
  var KEYFRAME = 500,
      STROKE = 0.08,
      TAU = 2.0 * Math.PI,
      TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

  function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
  }

  function line(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
        s = Math.sin(t * TAU);

    rmax -= rmin;

    circle(
      ctx,
      cx - s * rx,
      cy + c * ry + rmax * 0.5,
      rmin + (1 - c * 0.5) * rmax
    );
  }

  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for(i = 5; i--; )
      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
  }

  function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.12,
        c = cw * 0.24,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  function sun(ctx, t, cx, cy, cw, s, color) {
    t /= 120000;

    var a = cw * 0.25 - s * 0.5,
        b = cw * 0.32 + s * 0.5,
        c = cw * 0.50 - s * 0.5,
        i, p, cos, sin;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();

    for(i = 8; i--; ) {
      p = (t + i / 8) * TAU;
      cos = Math.cos(p);
      sin = Math.sin(p);
      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
  }

  function moon(ctx, t, cx, cy, cw, s, color) {
    t /= 15000;

    var a = cw * 0.29 - s * 0.5,
        b = cw * 0.05,
        c = Math.cos(t * TAU),
        p = c * TAU / -16;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    cx += c * b;

    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
    ctx.closePath();
    ctx.stroke();
  }

  function rain(ctx, t, cx, cy, cw, s, color) {
    t /= 1350;

    var a = cw * 0.16,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.fillStyle = color;

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
      y = cy + p * p * cw;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.5);
      ctx.arc(x, y, s * 0.75, b, c, false);
      ctx.fill();
    }
  }

  function sleet(ctx, t, cx, cy, cw, s, color) {
    t /= 750;

    var a = cw * 0.1875,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
      y = cy + p * cw;
      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
  }

  function snow(ctx, t, cx, cy, cw, s, color) {
    t /= 3000;

    var a  = cw * 0.16,
        b  = s * 0.75,
        u  = t * TAU * 0.7,
        ux = Math.cos(u) * b,
        uy = Math.sin(u) * b,
        v  = u + TAU / 3,
        vx = Math.cos(v) * b,
        vy = Math.sin(v) * b,
        w  = u + TAU * 2 / 3,
        wx = Math.cos(w) * b,
        wy = Math.sin(w) * b,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + Math.sin((p + i / 4) * TAU) * a;
      y = cy + p * cw;

      line(ctx, x - ux, y - uy, x + ux, y + uy);
      line(ctx, x - vx, y - vy, x + vx, y + vy);
      line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
  }

  function fogbank(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.06,
        c = cw * 0.21,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  /*
  var WIND_PATHS = [
        downsample(63, upsample(8, [
          -1.00, -0.28,
          -0.75, -0.18,
          -0.50,  0.12,
          -0.20,  0.12,
          -0.04, -0.04,
          -0.07, -0.18,
          -0.19, -0.18,
          -0.23, -0.05,
          -0.12,  0.11,
           0.02,  0.16,
           0.20,  0.15,
           0.50,  0.07,
           0.75,  0.18,
           1.00,  0.28
        ])),
        downsample(31, upsample(16, [
          -1.00, -0.10,
          -0.75,  0.00,
          -0.50,  0.10,
          -0.25,  0.14,
           0.00,  0.10,
           0.25,  0.00,
           0.50, -0.10,
           0.75, -0.14,
           1.00, -0.10
        ]))
      ];
  */

  var WIND_PATHS = [
        [
          -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
          -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
          -0.6083,  0.0065, -0.5868,  0.0396, -0.5643,  0.0731,
          -0.5372,  0.1041, -0.5033,  0.1259, -0.4662,  0.1406,
          -0.4275,  0.1493, -0.3881,  0.1530, -0.3487,  0.1526,
          -0.3095,  0.1488, -0.2708,  0.1421, -0.2319,  0.1342,
          -0.1943,  0.1217, -0.1600,  0.1025, -0.1290,  0.0785,
          -0.1012,  0.0509, -0.0764,  0.0206, -0.0547, -0.0120,
          -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
          -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
          -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
          -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
          -0.2064,  0.0033, -0.1853,  0.0362, -0.1613,  0.0672,
          -0.1350,  0.0961, -0.1051,  0.1213, -0.0706,  0.1397,
          -0.0332,  0.1512,  0.0053,  0.1580,  0.0442,  0.1624,
           0.0833,  0.1636,  0.1224,  0.1615,  0.1613,  0.1565,
           0.1999,  0.1500,  0.2378,  0.1402,  0.2749,  0.1279,
           0.3118,  0.1147,  0.3487,  0.1015,  0.3858,  0.0892,
           0.4236,  0.0787,  0.4621,  0.0715,  0.5012,  0.0702,
           0.5398,  0.0766,  0.5768,  0.0890,  0.6123,  0.1055,
           0.6466,  0.1244,  0.6805,  0.1440,  0.7147,  0.1630,
           0.7500,  0.1800
        ],
        [
          -0.7500,  0.0000, -0.7033,  0.0195, -0.6569,  0.0399,
          -0.6104,  0.0600, -0.5634,  0.0789, -0.5155,  0.0954,
          -0.4667,  0.1089, -0.4174,  0.1206, -0.3676,  0.1299,
          -0.3174,  0.1365, -0.2669,  0.1398, -0.2162,  0.1391,
          -0.1658,  0.1347, -0.1157,  0.1271, -0.0661,  0.1169,
          -0.0170,  0.1046,  0.0316,  0.0903,  0.0791,  0.0728,
           0.1259,  0.0534,  0.1723,  0.0331,  0.2188,  0.0129,
           0.2656, -0.0064,  0.3122, -0.0263,  0.3586, -0.0466,
           0.4052, -0.0665,  0.4525, -0.0847,  0.5007, -0.1002,
           0.5497, -0.1130,  0.5991, -0.1240,  0.6491, -0.1325,
           0.6994, -0.1380,  0.7500, -0.1400
        ]
      ],
      WIND_OFFSETS = [
        {start: 0.36, end: 0.11},
        {start: 0.56, end: 0.16}
      ];

  function leaf(ctx, t, x, y, cw, s, color) {
    var a = cw / 8,
        b = a / 3,
        c = 2 * b,
        d = (t % 1) * TAU,
        e = Math.cos(d),
        f = Math.sin(d);

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(x        , y        , a, d          , d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d          , false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d          , true );
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
    t /= 2500;

    var path = WIND_PATHS[index],
        a = (t + index - WIND_OFFSETS[index].start) % total,
        c = (t + index - WIND_OFFSETS[index].end  ) % total,
        e = (t + index                            ) % total,
        b, d, f, i;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if(a < 1) {
      ctx.beginPath();

      a *= path.length / 2 - 1;
      b  = Math.floor(a);
      a -= b;
      b *= 2;
      b += 2;

      ctx.moveTo(
        cx + (path[b - 2] * (1 - a) + path[b    ] * a) * cw,
        cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
      );

      if(c < 1) {
        c *= path.length / 2 - 1;
        d  = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;

        for(i = b; i !== d; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

        ctx.lineTo(
          cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
          cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
        );
      }

      else
        for(i = b; i !== path.length; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.stroke();
    }

    else if(c < 1) {
      ctx.beginPath();

      c *= path.length / 2 - 1;
      d  = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;

      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

      for(i = 2; i !== d; i += 2)
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.lineTo(
        cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
      );

      ctx.stroke();
    }

    if(e < 1) {
      e *= path.length / 2 - 1;
      f  = Math.floor(e);
      e -= f;
      f *= 2;
      f += 2;

      leaf(
        ctx,
        t,
        cx + (path[f - 2] * (1 - e) + path[f    ] * e) * cw,
        cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
        cw,
        s,
        color
      );
    }
  }

  var Skycons = function(opts) {
        this.list        = [];
        this.interval    = null;
        this.color       = opts && opts.color ? opts.color : "black";
        this.resizeClear = !!(opts && opts.resizeClear);
      };

  Skycons.CLEAR_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.CLEAR_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.CLOUDY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.RAIN = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SLEET = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SNOW = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.WIND = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
  };

  Skycons.FOG = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h),
        k = s * STROKE;

    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);

    t /= 5000;

    var a = Math.cos((t       ) * TAU) * s * 0.02,
        b = Math.cos((t + 0.25) * TAU) * s * 0.02,
        c = Math.cos((t + 0.50) * TAU) * s * 0.02,
        d = Math.cos((t + 0.75) * TAU) * s * 0.02,
        n = h * 0.936,
        e = Math.floor(n - k * 0.5) + 0.5,
        f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
  };

  Skycons.prototype = {
    _determineDrawingFunction: function(draw) {
      if(typeof draw === "string")
        draw = Skycons[draw.toUpperCase().replace(/-/g, "_")] || null;

      return draw;
    },
    add: function(el, draw) {
      var obj;

      if(typeof el === "string")
        el = document.getElementById(el);

      // Does nothing if canvas name doesn't exists
      if(el === null)
        return;

      draw = this._determineDrawingFunction(draw);

      // Does nothing if the draw function isn't actually a function
      if(typeof draw !== "function")
        return;

      obj = {
        element: el,
        context: el.getContext("2d"),
        drawing: draw
      };

      this.list.push(obj);
      this.draw(obj, KEYFRAME);
    },
    set: function(el, draw) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list[i].drawing = this._determineDrawingFunction(draw);
          this.draw(this.list[i], KEYFRAME);
          return;
        }

      this.add(el, draw);
    },
    remove: function(el) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list.splice(i, 1);
          return;
        }
    },
    draw: function(obj, time) {
      var canvas = obj.context.canvas;

      if(this.resizeClear)
        canvas.width = canvas.width;

      else
        obj.context.clearRect(0, 0, canvas.width, canvas.height);

      obj.drawing(obj.context, time, this.color);
    },
    play: function() {
      var self = this;

      this.pause();
      this.interval = requestInterval(function() {
        var now = Date.now(),
            i;

        for(i = self.list.length; i--; )
          self.draw(self.list[i], now);
      }, 1000 / 60);
    },
    pause: function() {
      var i;

      if(this.interval) {
        cancelInterval(this.interval);
        this.interval = null;
      }
    }
  };

  global.Skycons = Skycons;
}(this));


/***/ }),

/***/ 324:
/***/ (function(module, exports) {

/**
 * Widgster plugin.
 */
!function ($) {

    "use strict";

    // WIDGSTER CLASS DEFINITION
    // ======================

    var Widgster = function (el, options) {
        this.$element = $(el);
        this.$collapse = this.$element.find('[data-widgster=collapse]');
        this.$expand = this.$element.find('[data-widgster=expand]');
        this.$fullscreen = this.$element.find('[data-widgster=fullscreen]');
        this.$restore = this.$element.find('[data-widgster=restore]');
        this.options = options;
        this.collapsed = options.collapsed;
        this.fullscreened = options.fullscreened;

        this._initHandlers();

        if (this.collapsed){
            this.collapse(false);
        } else {
            this.$expand.hide();
        }

        if (this.fullscreened){
            this.fullscreen();
        } else {
            this.$restore.hide();
        }

        this.options.autoload && this.load();
        var interval = parseInt(this.options.autoload);
        if (!isNaN(interval)){
            var widgster = this;
            this._autoloadInterval = setInterval(function(){
                widgster.load();
            }, interval)
        }
    };

    Widgster.DEFAULTS = {
        collapsed: false,
        fullscreened: false,
        transitionDuration: 150,
        bodySelector: '.body',
        showLoader: true,
        autoload: false,
        loaderTemplate: '<div style="text-align: center; margin-top: 10px;">Loading...</div>',
        /**
         * provide a way to insert a prompt before removing widget
         * @param callback
         */
        closePrompt: function(callback){
            callback()
        }
    };

    Widgster.prototype.collapse = function(animate){
        animate = typeof animate == "undefined" ? true : animate;
        var e = $.Event('collapse.widgster');
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) return;

        var widgster = this,
            duration = animate ? this.options.transitionDuration : 0;
        this.$element.find(this.options.bodySelector).slideUp(duration, function(){
            widgster.$element.addClass('collapsed');
            widgster.$element.trigger($.Event('collapsed.widgster'));
            widgster.collapsed = true;
        });

        this.$collapse.hide();
        this.$expand.show();

        return false;
    };

    Widgster.prototype.expand = function(animate){
        animate = typeof animate == "undefined" ? true : animate;
        var e = $.Event('expand.widgster');
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) return;

        var widgster = this,
            duration = animate ? this.options.transitionDuration : 0;
        this.$element.find(this.options.bodySelector).slideDown(duration, function(){
            widgster.$element.removeClass('collapsed');
            widgster.$element.trigger($.Event('expanded.widgster'));
            widgster.collapsed = false;
        });

        this.$collapse.show();
        this.$expand.hide();

        return false;
    };

    Widgster.prototype.close = function(){

        this.options.closePrompt && this.options.closePrompt($.proxy(this._doClose, this));

        return false;
    };

    Widgster.prototype.load = function(){
        var e = $.Event('load.widgster');

        this.$element.trigger(e);

        if (e.isDefaultPrevented()) return;

        var widgster = this;
        this.$element.find(this.options.bodySelector).load(this.options.load, function(responseText, textStatus, xhr){
            widgster.expand();
            widgster.options.showLoader && widgster._hideLoader();
            widgster.$element.trigger($.Event('loaded.widgster', {
                responseText: responseText,
                textStatus: textStatus,
                xhr: xhr
            }))
        });
        this.options.showLoader && this._showLoader();

        return false;
    };

    Widgster.prototype.fullscreen = function(){
        var e = $.Event('fullscreen.widgster');

        this.$element.trigger(e);

        if (e.isDefaultPrevented()) return;

        this.$element.css({
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: 0,
            'z-index': 10000
        });
        $('body').css('overflow', 'hidden');

        this.wasCollapsed = this.collapsed;
        this.expand(false);

        this.$fullscreen.hide();
        this.$restore.show();

        this.$collapse.hide(); this.$expand.hide();

        this.$element.addClass('fullscreened');

        this.$element.trigger($.Event('fullscreened.widgster'));

        return false;
    };

    Widgster.prototype.restore = function(){
        var e = $.Event('restore.widgster');

        this.$element.trigger(e);

        if (e.isDefaultPrevented()) return;

        this.$element.css({
            position: '',
            top: '',
            right: '',
            bottom: '',
            left: '',
            margin: '',
            'z-index': ''
        });
        $('body').css('overflow', '');

        this.$fullscreen.show();
        this.$restore.hide();

        if (this.collapsed){
            this.$collapse.hide(); this.$expand.show();
        } else {
            this.$collapse.show(); this.$expand.hide();
        }

        this.wasCollapsed && this.collapse(false);

        this.$element.removeClass('fullscreened');

        this.$element.trigger($.Event('restored.widgster'));

        return false;
    };

    Widgster.prototype._doClose = function(){
        //could have been remove.widgster, but http://bugs.jquery.com/ticket/14600
        var e = $.Event('close.widgster');

        this.$element.trigger(e);

        if (e.isDefaultPrevented()) return;

        $('body').css('overflow', '');

        this.$element.detach();

        e = $.Event('closed.widgster', {$element: this.$element});

        this.$element.trigger(e);
    };

    Widgster.prototype._showLoader = function(){
        var $body = this.$element.find(this.options.bodySelector);

        this.$loaderWrap = this.$element.find('.widgster-loader-wrap');

        //create loader html if does not exist
        if (this.$loaderWrap.length == 0){
            this.$loaderWrap = $('<div class="widgster-loader-wrap" style="position: absolute; top: 0; right: 0; bottom: 0; ' +
                'left: 0; display: none"></div>');
            this.$element.append(this.$loaderWrap);
        }
        this.$loaderWrap.html(this.options.loaderTemplate);
        this.$loaderWrap.css({
            'margin-top': $body.position().top
        });
        if (!this.collapsed){
            $body.fadeTo(this.options.transitionDuration, 0);
            this.$loaderWrap.fadeIn(this.options.transitionDuration)
        }
    };

    Widgster.prototype._hideLoader = function(){
        this.$loaderWrap.fadeOut(this.options.transitionDuration);
        this.$element.find(this.options.bodySelector).fadeTo(this.options.transitionDuration, 1);
    };

    /**
     * Attach all required widgster functions to data-widgster elements.
     * @private
     */
    Widgster.prototype._initHandlers = function(){
        this.$element.on('click.collapse.widgster', '[data-widgster=collapse]', $.proxy(this.collapse, this));
        this.$element.on('click.expand.widgster', '[data-widgster=expand]', $.proxy(this.expand, this));
        this.$element.on('click.close.widgster', '[data-widgster=close]', $.proxy(this.close, this));
        this.$element.on('click.load.widgster', '[data-widgster=load]', $.proxy(this.load, this));
        this.$element.on('click.fullscreen.widgster', '[data-widgster=fullscreen]', $.proxy(this.fullscreen, this));
        this.$element.on('click.restore.widgster', '[data-widgster=restore]', $.proxy(this.restore, this));
    };


    // NAMESPACED DATA ATTRIBUTES
    // =======================

    function getNamespacedData(namespace, data){
        var namespacedData = {};
        for (var key in data){
            // key starts with namespace
            if (key.slice(0, namespace.length) == namespace){
                var namespacedKey = key.slice(namespace.length, key.length);
                namespacedKey = namespacedKey.charAt(0).toLowerCase() + namespacedKey.slice(1);
                namespacedData[namespacedKey] = data[key];
            }
        }

        return namespacedData;
    }

    // WIDGSTER PLUGIN DEFINITION
    // =======================

    $.fn.widgster = function (option) {
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('widgster');
            var options = $.extend({}, Widgster.DEFAULTS, getNamespacedData('widgster', $this.data()), typeof option == 'object' && option);

            if (!data) $this.data('widgster', new Widgster(this, options));
            if (typeof option == 'string') data[option]();
        })
    };

    $.fn.widgster.Constructor = Widgster;


}(window.jQuery);


/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = (function () {
    function ButtonsComponent() {
    }
    return ButtonsComponent;
}());
ButtonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-buttons',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(890),
        styles: [__webpack_require__(826)]
    })
], ButtonsComponent);

//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CardsComponent = (function () {
    function CardsComponent() {
    }
    return CardsComponent;
}());
CardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-cards',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(891)
    })
], CardsComponent);

//# sourceMappingURL=cards.component.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComponentsComponent = (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent.prototype.ngOnInit = function () {
        jQuery('[data-toggle="tooltip"]').tooltip();
        jQuery('[data-toggle="popover"]').popover();
    };
    return ComponentsComponent;
}());
ComponentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-components',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(892)
    })
], ComponentsComponent);

//# sourceMappingURL=components.component.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridComponent = (function () {
    function GridComponent() {
    }
    return GridComponent;
}());
GridComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-grid',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(893),
        styles: [__webpack_require__(827)]
    })
], GridComponent);

//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons_service__ = __webpack_require__(770);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconsComponent = (function () {
    function IconsComponent(_iconsService) {
        this._iconsService = _iconsService;
        this.icons = _iconsService.getAll();
    }
    IconsComponent.prototype.changeBg = function (param) {
        this.bgColor = param;
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-icons',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(894),
        styles: [__webpack_require__(828)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__icons_service__["a" /* IconsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__icons_service__["a" /* IconsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__icons_service__["a" /* IconsService */]) === "function" && _a || Object])
], IconsComponent);

var _a;
//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsService = (function () {
    function IconsService() {
        this.icons = {
            fontAwesome: [
                'fa-glass', 'fa-music', 'fa-search', 'fa-envelope-o', 'fa-heart', 'fa-star', 'fa-star-o', 'fa-user', 'fa-film', 'fa-th-large', 'fa-th', 'fa-th-list', 'fa-check', 'fa-remove', 'fa-close', 'fa-times', 'fa-search-plus', 'fa-search-minus', 'fa-power-off', 'fa-signal', 'fa-gear', 'fa-cog', 'fa-trash-o', 'fa-home', 'fa-file-o', 'fa-clock-o', 'fa-road', 'fa-download', 'fa-arrow-circle-o-down', 'fa-arrow-circle-o-up', 'fa-inbox', 'fa-play-circle-o', 'fa-rotate-right', 'fa-repeat', 'fa-refresh', 'fa-list-alt', 'fa-lock', 'fa-flag', 'fa-headphones', 'fa-volume-off', 'fa-volume-down', 'fa-volume-up', 'fa-qrcode', 'fa-barcode', 'fa-tag', 'fa-tags', 'fa-book', 'fa-bookmark', 'fa-print', 'fa-camera', 'fa-font', 'fa-bold', 'fa-italic', 'fa-text-height', 'fa-text-width', 'fa-align-left', 'fa-align-center', 'fa-align-right', 'fa-align-justify', 'fa-list', 'fa-dedent', 'fa-outdent', 'fa-indent', 'fa-video-camera', 'fa-photo', 'fa-image', 'fa-picture-o', 'fa-pencil', 'fa-map-marker', 'fa-adjust', 'fa-tint', 'fa-edit', 'fa-pencil-square-o', 'fa-share-square-o', 'fa-check-square-o', 'fa-arrows', 'fa-step-backward', 'fa-fast-backward', 'fa-backward', 'fa-play', 'fa-pause', 'fa-stop', 'fa-forward', 'fa-fast-forward', 'fa-step-forward', 'fa-eject', 'fa-chevron-left', 'fa-chevron-right', 'fa-plus-circle', 'fa-minus-circle', 'fa-times-circle', 'fa-check-circle', 'fa-question-circle', 'fa-info-circle', 'fa-crosshairs', 'fa-times-circle-o', 'fa-check-circle-o', 'fa-ban', 'fa-arrow-left', 'fa-arrow-right', 'fa-arrow-up', 'fa-arrow-down', 'fa-mail-forward', 'fa-share', 'fa-expand', 'fa-compress', 'fa-plus', 'fa-minus', 'fa-asterisk', 'fa-exclamation-circle', 'fa-gift', 'fa-leaf', 'fa-fire', 'fa-eye', 'fa-eye-slash', 'fa-warning', 'fa-exclamation-triangle', 'fa-plane', 'fa-calendar', 'fa-random', 'fa-comment', 'fa-magnet', 'fa-chevron-up', 'fa-chevron-down', 'fa-retweet', 'fa-shopping-cart', 'fa-folder', 'fa-folder-open', 'fa-arrows-v', 'fa-arrows-h', 'fa-bar-chart-o', 'fa-bar-chart', 'fa-twitter-square', 'fa-facebook-square', 'fa-camera-retro', 'fa-key', 'fa-gears', 'fa-cogs', 'fa-comments', 'fa-thumbs-o-up', 'fa-thumbs-o-down', 'fa-star-half', 'fa-heart-o', 'fa-sign-out', 'fa-linkedin-square', 'fa-thumb-tack', 'fa-external-link', 'fa-sign-in', 'fa-trophy', 'fa-github-square', 'fa-upload', 'fa-lemon-o', 'fa-phone', 'fa-square-o', 'fa-bookmark-o', 'fa-phone-square', 'fa-twitter', 'fa-facebook-f', 'fa-facebook', 'fa-github', 'fa-unlock', 'fa-credit-card', 'fa-rss', 'fa-hdd-o', 'fa-bullhorn', 'fa-bell', 'fa-certificate', 'fa-hand-o-right', 'fa-hand-o-left', 'fa-hand-o-up', 'fa-hand-o-down', 'fa-arrow-circle-left', 'fa-arrow-circle-right', 'fa-arrow-circle-up', 'fa-arrow-circle-down', 'fa-globe', 'fa-wrench', 'fa-tasks', 'fa-filter', 'fa-briefcase', 'fa-arrows-alt', 'fa-group', 'fa-users', 'fa-chain', 'fa-link', 'fa-cloud', 'fa-flask', 'fa-cut', 'fa-scissors', 'fa-copy', 'fa-files-o', 'fa-paperclip', 'fa-save', 'fa-floppy-o', 'fa-square', 'fa-navicon', 'fa-reorder', 'fa-bars', 'fa-list-ul', 'fa-list-ol', 'fa-strikethrough', 'fa-underline', 'fa-table', 'fa-magic', 'fa-truck', 'fa-pinterest', 'fa-pinterest-square', 'fa-google-plus-square', 'fa-google-plus', 'fa-money', 'fa-caret-down', 'fa-caret-up', 'fa-caret-left', 'fa-caret-right', 'fa-columns', 'fa-unsorted', 'fa-sort', 'fa-sort-down', 'fa-sort-desc', 'fa-sort-up', 'fa-sort-asc', 'fa-envelope', 'fa-linkedin', 'fa-rotate-left', 'fa-undo', 'fa-legal', 'fa-gavel', 'fa-dashboard', 'fa-tachometer', 'fa-comment-o', 'fa-comments-o', 'fa-flash', 'fa-bolt', 'fa-sitemap', 'fa-umbrella', 'fa-paste', 'fa-clipboard', 'fa-lightbulb-o', 'fa-exchange', 'fa-cloud-download', 'fa-cloud-upload', 'fa-user-md', 'fa-stethoscope', 'fa-suitcase', 'fa-bell-o', 'fa-coffee', 'fa-cutlery', 'fa-file-text-o', 'fa-building-o', 'fa-hospital-o', 'fa-ambulance', 'fa-medkit', 'fa-fighter-jet', 'fa-beer', 'fa-h-square', 'fa-plus-square', 'fa-angle-double-left', 'fa-angle-double-right', 'fa-angle-double-up', 'fa-angle-double-down', 'fa-angle-left', 'fa-angle-right', 'fa-angle-up', 'fa-angle-down', 'fa-desktop', 'fa-laptop', 'fa-tablet', 'fa-mobile-phone', 'fa-mobile', 'fa-circle-o', 'fa-quote-left', 'fa-quote-right', 'fa-spinner', 'fa-circle', 'fa-mail-reply', 'fa-reply', 'fa-github-alt', 'fa-folder-o', 'fa-folder-open-o', 'fa-smile-o', 'fa-frown-o', 'fa-meh-o', 'fa-gamepad', 'fa-keyboard-o', 'fa-flag-o', 'fa-flag-checkered', 'fa-terminal', 'fa-code', 'fa-mail-reply-all', 'fa-reply-all', 'fa-star-half-empty', 'fa-star-half-full', 'fa-star-half-o', 'fa-location-arrow', 'fa-crop', 'fa-code-fork', 'fa-unlink', 'fa-chain-broken', 'fa-question', 'fa-info', 'fa-exclamation', 'fa-superscript', 'fa-subscript', 'fa-eraser', 'fa-puzzle-piece', 'fa-microphone', 'fa-microphone-slash', 'fa-shield', 'fa-calendar-o', 'fa-fire-extinguisher', 'fa-rocket', 'fa-maxcdn', 'fa-chevron-circle-left', 'fa-chevron-circle-right', 'fa-chevron-circle-up', 'fa-chevron-circle-down', 'fa-html5', 'fa-css3', 'fa-anchor', 'fa-unlock-alt', 'fa-bullseye', 'fa-ellipsis-h', 'fa-ellipsis-v', 'fa-rss-square', 'fa-play-circle', 'fa-ticket', 'fa-minus-square', 'fa-minus-square-o', 'fa-level-up', 'fa-level-down', 'fa-check-square', 'fa-pencil-square', 'fa-external-link-square', 'fa-share-square', 'fa-compass', 'fa-toggle-down', 'fa-caret-square-o-down', 'fa-toggle-up', 'fa-caret-square-o-up', 'fa-toggle-right', 'fa-caret-square-o-right', 'fa-euro', 'fa-eur', 'fa-gbp', 'fa-dollar', 'fa-usd', 'fa-rupee', 'fa-inr', 'fa-cny', 'fa-rmb', 'fa-yen', 'fa-jpy', 'fa-ruble', 'fa-rouble', 'fa-rub', 'fa-won', 'fa-krw', 'fa-bitcoin', 'fa-btc', 'fa-file', 'fa-file-text', 'fa-sort-alpha-asc', 'fa-sort-alpha-desc', 'fa-sort-amount-asc', 'fa-sort-amount-desc', 'fa-sort-numeric-asc', 'fa-sort-numeric-desc', 'fa-thumbs-up', 'fa-thumbs-down', 'fa-youtube-square', 'fa-youtube', 'fa-xing', 'fa-xing-square', 'fa-youtube-play', 'fa-dropbox', 'fa-stack-overflow', 'fa-instagram', 'fa-flickr', 'fa-adn', 'fa-bitbucket', 'fa-bitbucket-square', 'fa-tumblr', 'fa-tumblr-square', 'fa-long-arrow-down', 'fa-long-arrow-up', 'fa-long-arrow-left', 'fa-long-arrow-right', 'fa-apple', 'fa-windows', 'fa-android', 'fa-linux', 'fa-dribbble', 'fa-skype', 'fa-foursquare', 'fa-trello', 'fa-female', 'fa-male', 'fa-gittip', 'fa-gratipay', 'fa-sun-o', 'fa-moon-o', 'fa-archive', 'fa-bug', 'fa-vk', 'fa-weibo', 'fa-renren', 'fa-pagelines', 'fa-stack-exchange', 'fa-arrow-circle-o-right', 'fa-arrow-circle-o-left', 'fa-toggle-left', 'fa-caret-square-o-left', 'fa-dot-circle-o', 'fa-wheelchair', 'fa-vimeo-square', 'fa-turkish-lira', 'fa-try', 'fa-plus-square-o', 'fa-space-shuttle', 'fa-slack', 'fa-envelope-square', 'fa-wordpress', 'fa-openid', 'fa-institution', 'fa-bank', 'fa-university', 'fa-mortar-board', 'fa-graduation-cap', 'fa-yahoo', 'fa-google', 'fa-reddit', 'fa-reddit-square', 'fa-stumbleupon-circle', 'fa-stumbleupon', 'fa-delicious', 'fa-digg', 'fa-pied-piper', 'fa-pied-piper-alt', 'fa-drupal', 'fa-joomla', 'fa-language', 'fa-fax', 'fa-building', 'fa-child', 'fa-paw', 'fa-spoon', 'fa-cube', 'fa-cubes', 'fa-behance', 'fa-behance-square', 'fa-steam', 'fa-steam-square', 'fa-recycle', 'fa-automobile', 'fa-car', 'fa-cab', 'fa-taxi', 'fa-tree', 'fa-spotify', 'fa-deviantart', 'fa-soundcloud', 'fa-database', 'fa-file-pdf-o', 'fa-file-word-o', 'fa-file-excel-o', 'fa-file-powerpoint-o', 'fa-file-photo-o', 'fa-file-picture-o', 'fa-file-image-o', 'fa-file-zip-o', 'fa-file-archive-o', 'fa-file-sound-o', 'fa-file-audio-o', 'fa-file-movie-o', 'fa-file-video-o', 'fa-file-code-o', 'fa-vine', 'fa-codepen', 'fa-jsfiddle', 'fa-life-bouy', 'fa-life-buoy', 'fa-life-saver', 'fa-support', 'fa-life-ring', 'fa-circle-o-notch', 'fa-ra', 'fa-rebel', 'fa-ge', 'fa-empire', 'fa-git-square', 'fa-git', 'fa-hacker-news', 'fa-tencent-weibo', 'fa-qq', 'fa-wechat', 'fa-weixin', 'fa-send', 'fa-paper-plane', 'fa-send-o', 'fa-paper-plane-o', 'fa-history', 'fa-genderless', 'fa-circle-thin', 'fa-header', 'fa-paragraph', 'fa-sliders', 'fa-share-alt', 'fa-share-alt-square', 'fa-bomb', 'fa-soccer-ball-o', 'fa-futbol-o', 'fa-tty', 'fa-binoculars', 'fa-plug', 'fa-slideshare', 'fa-twitch', 'fa-yelp', 'fa-newspaper-o', 'fa-wifi', 'fa-calculator', 'fa-paypal', 'fa-google-wallet', 'fa-cc-visa', 'fa-cc-mastercard', 'fa-cc-discover', 'fa-cc-amex', 'fa-cc-paypal', 'fa-cc-stripe', 'fa-bell-slash', 'fa-bell-slash-o', 'fa-trash', 'fa-copyright', 'fa-at', 'fa-eyedropper', 'fa-paint-brush', 'fa-birthday-cake', 'fa-area-chart', 'fa-pie-chart', 'fa-line-chart', 'fa-lastfm', 'fa-lastfm-square', 'fa-toggle-off', 'fa-toggle-on', 'fa-bicycle', 'fa-bus', 'fa-ioxhost', 'fa-angellist', 'fa-cc', 'fa-shekel', 'fa-sheqel', 'fa-ils', 'fa-meanpath', 'fa-buysellads', 'fa-connectdevelop', 'fa-dashcube', 'fa-forumbee', 'fa-leanpub', 'fa-sellsy', 'fa-shirtsinbulk', 'fa-simplybuilt', 'fa-skyatlas', 'fa-cart-plus', 'fa-cart-arrow-down', 'fa-diamond', 'fa-ship', 'fa-user-secret', 'fa-motorcycle', 'fa-street-view', 'fa-heartbeat', 'fa-venus', 'fa-mars', 'fa-mercury', 'fa-transgender', 'fa-transgender-alt', 'fa-venus-double', 'fa-mars-double', 'fa-venus-mars', 'fa-mars-stroke', 'fa-mars-stroke-v', 'fa-mars-stroke-h', 'fa-neuter', 'fa-facebook-official', 'fa-pinterest-p', 'fa-whatsapp', 'fa-server', 'fa-user-plus', 'fa-user-times', 'fa-hotel', 'fa-bed', 'fa-viacoin', 'fa-train', 'fa-subway', 'fa-medium'
            ],
            socicons: [
                { "id": "twitter", "name": "Twitter", "character": "a", "color": "#4da7de" },
                { "id": "facebook", "name": "Facebook", "character": "b", "color": "#3e5b98" },
                { "id": "google", "name": "Google+", "character": "c", "color": "#d93e2d" },
                { "id": "pinterest", "name": "Pinterest", "character": "d", "color": "#c92619" },
                { "id": "foursquare", "name": "foursquare", "character": "e", "color": "#F94877" },
                { "id": "yahoo", "name": "Yahoo!", "character": "f", "color": "#6E2A85" },
                { "id": "skype", "name": "skype", "character": "g", "color": "#28abe3" },
                { "id": "yelp", "name": "yelp", "character": "h", "color": "#c83218" },
                { "id": "feedburner", "name": "FeedBurner", "character": "i", "color": "#FFCC00" },
                { "id": "linkedin", "name": "Linkedin", "character": "j", "color": "#3371b7" },
                { "id": "viadeo", "name": "Viadeo", "character": "k", "color": "#e4a000" },
                { "id": "xing", "name": "Xing", "character": "l", "color": "#005a60" },
                { "id": "myspace", "name": "Myspace", "character": "m", "color": "#323232" },
                { "id": "soundcloud", "name": "soundcloud", "character": "n", "color": "#fe3801" },
                { "id": "spotify", "name": "Spotify", "character": "o", "color": "#7bb342" },
                { "id": "grooveshark", "name": "grooveshark", "character": "p", "color": "#000000" },
                { "id": "lastfm", "name": "last.fm", "character": "q", "color": "#d41316" },
                { "id": "youtube", "name": "YouTube", "character": "r", "color": "#e02a20" },
                { "id": "vimeo", "name": "vimeo", "character": "s", "color": "#51b5e7" },
                { "id": "dailymotion", "name": "Dailymotion", "character": "t", "color": "#004e72" },
                { "id": "vine", "name": "Vine", "character": "u", "color": "#00b389" },
                { "id": "flickr", "name": "flickr", "character": "v", "color": "#1e1e1b" },
                { "id": "500px", "name": "500px", "character": "w", "color": "#58a9de" },
                { "id": "instagram", "name": "Instagram", "character": "x", "color": "#9c7c6e" },
                { "id": "wordpress", "name": "WordPress", "character": "y", "color": "#464646" },
                { "id": "tumblr", "name": "tumblr", "character": "z", "color": "#45556c" },
                { "id": "blogger", "name": "Blogger", "character": "A", "color": "#ec661c" },
                { "id": "technorati", "name": "Technorati", "character": "B", "color": "#5cb030" },
                { "id": "reddit", "name": "reddit", "character": "C", "color": "#e74a1e" },
                { "id": "dribbble", "name": "dribbble", "character": "D", "color": "#e84d88" },
                { "id": "stumbleupon", "name": "StumbleUpon", "character": "E", "color": "#e64011" },
                { "id": "digg", "name": "Digg", "character": "F", "color": "#1d1d1b" },
                { "id": "envato", "name": "Envato", "character": "G", "color": "#597c3a" },
                { "id": "behance", "name": "Behance", "character": "H", "color": "#000000" },
                { "id": "delicious", "name": "Delicious", "character": "I", "color": "#020202" },
                { "id": "deviantart", "name": "deviantART", "character": "J", "color": "#c5d200" },
                { "id": "forrst", "name": "Forrst", "character": "K", "color": "#5B9A68" },
                { "id": "play", "name": "Play Store", "character": "L", "color": "#000000" },
                { "id": "zerply", "name": "Zerply", "character": "M", "color": "#9DBC7A" },
                { "id": "wikipedia", "name": "Wikipedia", "character": "N", "color": "#000000" },
                { "id": "apple", "name": "Apple", "character": "O", "color": "#B9BFC1" },
                { "id": "flattr", "name": "Flattr", "character": "P", "color": "#F67C1A" },
                { "id": "github", "name": "GitHub", "character": "Q", "color": "#221e1b" },
                { "id": "chimein", "name": "Chime.in", "character": "R", "color": "#888688" },
                { "id": "friendfeed", "name": "FriendFeed", "character": "S", "color": "#2F72C4" },
                { "id": "newsvine", "name": "NewsVine", "character": "T", "color": "#075B2F" },
                { "id": "identica", "name": "Identica", "character": "U", "color": "#000000" },
                { "id": "bebo", "name": "bebo", "character": "V", "color": "#EF1011" },
                { "id": "zynga", "name": "zynga", "character": "W", "color": "#DC0606" },
                { "id": "steam", "name": "steam", "character": "X", "color": "#8F8D8A" },
                { "id": "xbox", "name": "XBOX", "character": "Y", "color": "#92C83E" },
                { "id": "windows", "name": "Windows", "character": "Z", "color": "#00BDF6" },
                { "id": "outlook", "name": "Outlook", "character": "1", "color": "#0072C6" },
                { "id": "coderwall", "name": "coderwall", "character": "2", "color": "#3E8DCC" },
                { "id": "tripadvisor", "name": "tripadvisor", "character": "3", "color": "#000000" },
                { "id": "appnet", "name": "appnet", "character": "4", "color": "#494949" },
                { "id": "goodreads", "name": "goodreads", "character": "5", "color": "#463020" },
                { "id": "tripit", "name": "Tripit", "character": "6", "color": "#1982C3" },
                { "id": "lanyrd", "name": "Lanyrd", "character": "7", "color": "#3c80c9" },
                { "id": "slideshare", "name": "SlideShare", "character": "8", "color": "#4ba3a6" },
                { "id": "buffer", "name": "Buffer", "character": "9", "color": "#000000" },
                { "id": "rss", "name": "RSS", "character": ",", "color": "#f26109" },
                { "id": "vkontakte", "name": "VKontakte", "character": ";", "color": "#5a7fa6" },
                { "id": "disqus", "name": "DISQUS", "character": ":", "color": "#2e9fff" },
                { "id": "houzz", "name": "houzz", "character": "+", "color": "#7CC04B" },
                { "id": "mail", "name": "Mail", "character": "@", "color": "#000000" },
                { "id": "patreon", "name": "Patreon", "character": "=", "color": "#E44727" },
                { "id": "paypal", "name": "Paypal", "character": "-", "color": "#009cde" },
                { "id": "playstation", "name": "PlayStation", "character": "^", "color": "#000000" },
                { "id": "smugmug", "name": "SmugMug", "character": "¨", "color": "#ACFD32" },
                { "id": "swarm", "name": "Swarm", "character": "$", "color": "#FC9D3C" },
                { "id": "triplej", "name": "triplej", "character": "*", "color": "#E53531" },
                { "id": "yammer", "name": "Yammer", "character": "&", "color": "#1175C4" },
                { "id": "stackoverflow", "name": "stackoverflow", "character": "(", "color": "#FD9827" },
                { "id": "drupal", "name": "Drupal", "character": "#", "color": "#00598e" },
                { "id": "odnoklassniki", "name": "Odnoklassniki", "character": ".", "color": "#f48420" },
                { "id": "android", "name": "Android", "character": "_", "color": "#8ec047" },
                { "id": "meetup", "name": "Meeptup", "character": "]", "color": "#e2373c" },
                { "id": "persona", "name": "Mozilla Persona", "character": ")", "color": "#e6753d" }
            ]
        };
    }
    IconsService.prototype.getAll = function () {
        return this.icons;
    };
    return IconsService;
}());
IconsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], IconsService);

//# sourceMappingURL=icons.service.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListGroupComponent = (function () {
    function ListGroupComponent() {
    }
    return ListGroupComponent;
}());
ListGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-list-group',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(895)
    })
], ListGroupComponent);

//# sourceMappingURL=list-group.component.js.map

/***/ }),

/***/ 772:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaObjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MediaObjectsComponent = (function () {
    function MediaObjectsComponent() {
    }
    return MediaObjectsComponent;
}());
MediaObjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-media-objects',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(896)
    })
], MediaObjectsComponent);

//# sourceMappingURL=media-objects.component.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsAccordionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsAccordionsComponent = (function () {
    function TabsAccordionsComponent() {
    }
    return TabsAccordionsComponent;
}());
TabsAccordionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-tabs-accordions',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(897)
    })
], TabsAccordionsComponent);

//# sourceMappingURL=tabs-accordions.component.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-typography',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(898),
        styles: [__webpack_require__(829)]
    }),
    __metadata("design:paramtypes", [])
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ 826:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".buttons {\n  text-align: center; }\n  .buttons .d-inline-block {\n    margin-bottom: 8px;\n    margin-right: 6px; }\n  .buttons p {\n    margin-top: 4px;\n    margin-bottom: 0;\n    font-size: 13px;\n    white-space: nowrap; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.grid .card {\n  padding: 6px;\n  background: #248dad;\n  color: #fff;\n  margin-bottom: 12px; }\n  .grid .card .card-block {\n    padding: 2px 0;\n    text-align: center; }\n\n.responsive-utilities td {\n  text-align: center;\n  vertical-align: middle; }\n  .responsive-utilities td.is-visible {\n    color: #468847;\n    background-color: #dff0d8; }\n  .responsive-utilities td.is-hidden {\n    color: #ccc;\n    background-color: #f9f9f9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#242D3A\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#344154\",\"gray\":\"#555\",\"gray-light\":\"#ccc\"}';\n  display: none; }\n\n.icon-font-awesome {\n  margin-bottom: 15px; }\n  .icon-font-awesome .card {\n    float: left;\n    width: 100%;\n    background: #248dad;\n    color: #fff; }\n    .icon-font-awesome .card:hover {\n      background: #024a88; }\n    .icon-font-awesome .card .card-block {\n      padding: 2px 6px; }\n      .icon-font-awesome .card .card-block p {\n        font-size: 14px;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n        .icon-font-awesome .card .card-block p i {\n          margin-right: 8px; }\n\n.icon-socicon .card {\n  float: left;\n  height: 100px;\n  width: 100%;\n  line-height: 1.4;\n  background: #248dad;\n  color: #fff; }\n  .icon-socicon .card:hover {\n    background: #024a88; }\n  .icon-socicon .card .card-block {\n    padding: 15px; }\n  .icon-socicon .card p {\n    font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".typography .card {\n  padding: 6px; }\n  .typography .card .card-block {\n    padding: 4px; }\n\n.typography .card-block {\n  padding: 4px; }\n\n.typography .d-inline-block {\n  margin-bottom: 8px;\n  margin-right: 10px; }\n  .typography .d-inline-block img {\n    margin-bottom: 4px; }\n  .typography .d-inline-block p {\n    margin-bottom: 0; }\n\n.typography p.desc {\n  font-size: 13px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>GENERAL BUTTON</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a> \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body buttons\"> \n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-secondary\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-secondary</code></p>\n                </div>\n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-primary\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-primary</code></p>\n                </div>\n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-success\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-success</code></p>\n                </div>\n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-info\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-info</code></p>\n                </div>\n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-warning\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-warning</code></p>\n                </div>\n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-danger\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-danger</code></p>\n                </div>\n\n                <div class=\"d-inline-block\">\n                   <button type=\"button\" class=\"btn btn-main\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-main</code></p>\n                </div>\n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-link\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-link</code></p>\n                </div>               \n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>ROUNDED BUTTON</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a> \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body buttons\">\n           \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-secondary btn-rounded\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-secondary</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>             \n                        \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-primary btn-rounded\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-primary</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>               \n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-success btn-rounded\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-success</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>               \n            \n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-info btn-rounded\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-info</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>               \n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-warning btn-rounded\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-warning</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>         \n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-danger btn-rounded\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-danger</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>              \n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-dark btn-rounded\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-dark</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>\n        \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-main btn-rounded\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-main</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>             \n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>OUTLINE BUTTON</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a> \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body buttons\"> \n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-secondary transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-secondary</code></p>\n                </div>\n        \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-primary transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-primary</code></p>\n                </div>                \n\n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-success transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-success</code></p>\n                </div>\n        \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-info transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-info</code></p>\n                </div>\n        \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-warning transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-warning</code></p>\n                </div>              \n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-danger transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-danger</code></p>\n                </div>               \n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-dark transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-dark</code></p>\n                </div>               \n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-main transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-main</code></p>\n                </div>          \n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>OUTLINE ROUNDED BUTTON</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a> \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body buttons\">\n             \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-secondary btn-rounded transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-secondary</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>\n        \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-rounded transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-primary</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>\n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-success btn-rounded transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-success</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>\n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-info btn-rounded transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-info</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>\n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-rounded transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-warning</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>                  \n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-rounded transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-danger</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>                 \n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-dark btn-rounded transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-dark</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>\n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-main btn-rounded transition\">Button Text</button>\n                    <p class=\"card-text\"><code>.btn-outline-main</code></p>\n                    <p class=\"card-text\"><code>.btn-rounded</code></p>\n                </div>              \n            \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>BUTTON SIZES</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a> \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body buttons\">\n             \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-main btn-lg transition\">Button Large</button>\n                    <p class=\"card-text\"><code>.btn-lg</code></p>\n                </div>\n                            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-main transition\">Button Normal</button>\n                    <p class=\"card-text\"><code>No class required</code></p>\n                </div>\n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-main btn-sm transition\">Button Small</button>\n                    <p class=\"card-text\"><code>.btn-sm</code></p>\n                </div>                    \n        \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-main btn-xs transition\">Button XS</button>\n                    <p class=\"card-text\"><code>.btn-xs</code></p>\n                </div>             \n            \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>DISABLED BUTTONS</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a> \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body buttons\">\n           \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-main transition\" disabled=\"disabled\">Button Disabled</button>\n                    <p class=\"card-text\"><code>disabled</code></p> \n                </div>              \n    \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-main btn-rounded transition\" disabled=\"disabled\">Button Disabled</button>\n                    <p class=\"card-text\"><code>disabled</code></p> \n                </div>              \n        \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-main transition\" disabled=\"disabled\">Button Disabled</button>\n                    <p class=\"card-text\"><code>disabled</code></p>   \n                </div>               \n            \n                <div class=\"d-inline-block\">\n                    <button type=\"button\" class=\"btn btn-outline-main btn-rounded transition\" disabled=\"disabled\">Button Disabled</button>\n                    <p class=\"card-text\"><code>disabled</code></p> \n                </div>            \n           \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>BLOCK BUTTONS</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a> \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body row\">\n\n                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 bottom-15 buttons\">\n                    <div class=\"card-block text-xs-center\">\n                        <button type=\"button\" class=\"btn btn-main btn-block transition\">Button Block</button>                            \n                        <p class=\"card-text\"><code>.btn-block</code></p> \n                    </div>                   \n                </div>\n\n                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 bottom-15 buttons\">\n                    <div class=\"card-block text-xs-center\">\n                        <button type=\"button\" class=\"btn btn-outline-main btn-block transition\">Button Block</button>\n                        <p class=\"card-text\"><code>.btn-block</code></p> \n                    </div>                   \n                </div>\n\n                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 bottom-15 buttons\">\n                    <div class=\"card-block text-xs-center\">\n                        <button type=\"button\" class=\"btn btn-main btn-rounded btn-block transition\" disabled=\"disabled\">Button Block</button>\n                        <p class=\"card-text\"><code>.btn-block</code></p> \n                    </div>                   \n                </div>\n            \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>GROUP BUTTONS</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a> \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <div class=\"row\">\n                    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 bottom-15 buttons\">\n                    \n                        <div class=\"d-inline-block\">\n                            <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"Basic example\">\n                                <button type=\"button\" class=\"btn btn-secondary\">Left</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">Right</button>\n                            </div>\n                            <p class=\"card-text\"><code>.btn-group .btn-group-lg</code></p>    \n                        </div>\n\n                        <div class=\"d-inline-block\">\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                                <button type=\"button\" class=\"btn btn-secondary\">Left</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">Right</button>\n                            </div>\n                                <p class=\"card-text\"><code>.btn-group</code></p>  \n                        </div>\n\n                        <div class=\"d-inline-block\">\n                            <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\n                                <button type=\"button\" class=\"btn btn-secondary\">Left</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">Right</button>\n                            </div>\n                            <p class=\"card-text\"><code>.btn-group .btn-group-sm</code></p>   \n                        </div>\n                        \n                    </div>\n\n                    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 bottom-15 buttons\">\n                    \n                        <div class=\"d-inline-block\">\n                            <div class=\"btn-group-vertical\" role=\"group\" aria-label=\"Basic example\">\n                                <button type=\"button\" class=\"btn btn-secondary\">Left</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\n                                <button type=\"button\" class=\"btn btn-secondary\">Right</button>\n                            </div>\n                            <p class=\"card-text\"><code>.btn-group-vertical</code></p>  \n                        </div> \n\n                        <div class=\"d-inline-block\">\n                            <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                                <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">\n                                    <button type=\"button\" class=\"btn btn-secondary\">1</button>\n                                    <button type=\"button\" class=\"btn btn-secondary\">2</button>\n                                    <button type=\"button\" class=\"btn btn-secondary\">3</button>\n                                </div>\n                                <div class=\"btn-group\" role=\"group\" aria-label=\"Second group\">\n                                    <button type=\"button\" class=\"btn btn-secondary\">5</button>\n                                    <button type=\"button\" class=\"btn btn-secondary\">6</button>\n                                </div>\n                                <div class=\"btn-group\" role=\"group\" aria-label=\"Third group\">\n                                    <button type=\"button\" class=\"btn btn-secondary\">8</button>\n                                </div>\n                            </div>\n                            <p class=\"card-text\"><code>.btn-toolbar</code></p>  \n                        </div>              \n                        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>GENERAL</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>               \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n                <div class=\"row mbm-20\">\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">              \n                        <div class=\"card\">\n                            <div class=\"card-header\">\n                                Default card\n                            </div>\n                            <div class=\"card-block\">\n                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            </div>\n                            <div class=\"card-footer\">\n                                card footer\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">       \n                        <div class=\"card card-primary\">\n                            <div class=\"card-header\">\n                                Primary card\n                            </div>\n                            <div class=\"card-block\">\n                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            </div>\n                            <div class=\"card-footer\">\n                                card footer\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">       \n                        <div class=\"card card-success\">\n                            <div class=\"card-header\">\n                                Success card\n                            </div>\n                            <div class=\"card-block\">\n                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            </div>\n                            <div class=\"card-footer\">\n                                card footer\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">              \n                        <div class=\"card card-info\">\n                            <div class=\"card-header\">\n                                Info card\n                            </div>\n                            <div class=\"card-block\">\n                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            </div>\n                            <div class=\"card-footer\">\n                                card footer\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">              \n                        <div class=\"card card-warning\">\n                            <div class=\"card-header\">\n                                Warning card\n                            </div>\n                            <div class=\"card-block\">\n                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            </div>\n                            <div class=\"card-footer\">\n                                card footer\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">              \n                        <div class=\"card card-danger\">\n                            <div class=\"card-header\">\n                                Danger card\n                            </div>\n                            <div class=\"card-block\">\n                                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                            </div>\n                            <div class=\"card-footer\">\n                                card footer\n                            </div>\n                        </div>\n                    </div> \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>OUTLINE CARD</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>               \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n\n                <div class=\"row mbm-20\">   \n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">              \n                        <div class=\"card card-outline-default text-center\">\n                            <div class=\"card-block\">\n                                <blockquote class=\"card-blockquote\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                                    <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n                                </blockquote>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">       \n                        <div class=\"card card-outline-primary text-center\">\n                            <div class=\"card-block\">\n                                <blockquote class=\"card-blockquote\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                                    <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n                                </blockquote>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">       \n                        <div class=\"card card-outline-success text-center\">\n                            <div class=\"card-block\">\n                                <blockquote class=\"card-blockquote\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                                    <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n                                </blockquote>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">              \n                        <div class=\"card card-outline-info text-center\">\n                            <div class=\"card-block\">\n                                <blockquote class=\"card-blockquote\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                                    <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n                                </blockquote>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">              \n                        <div class=\"card card-outline-warning text-center\">\n                            <div class=\"card-block\">\n                                <blockquote class=\"card-blockquote\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                                    <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n                                </blockquote>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30\">              \n                        <div class=\"card card-outline-danger text-center\">\n                            <div class=\"card-block\">\n                                <blockquote class=\"card-blockquote\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                                    <footer>Someone famous in <cite title=\"Source Title\">Source Title</cite></footer>\n                                </blockquote>\n                            </div>\n                        </div>\n                    </div>\n                </div>                           \n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CARD WITH IMAGE</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>               \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n                <div class=\"row mbm-20\">   \n                    <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12 bottom-30\">              \n                        <div class=\"card card-success\">\n                            <img class=\"card-img-top w-100\" src=\"assets/img/app/snow.jpg\" alt=\"Card image cap\">\n                            <div class=\"card-block\"> Card image top </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12 bottom-30\">       \n                        <div class=\"card card-info\">\n                            <div class=\"card-header\">\n                                Card middle image\n                            </div>\n                            <img class=\"w-100\" src=\"assets/img/app/snow.jpg\" alt=\"Card image\">\n                            <div class=\"card-footer text-right\">\n                                Card footer\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12 bottom-30\">       \n                        <div class=\"card card-danger\">\n                            <div class=\"card-block\"> Card bottom image </div>\n                            <img class=\"card-img-bottom w-100\" src=\"assets/img/app/snow.jpg\" alt=\"Card image cap\">\n                        </div>\n                    </div>   \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CARD WITH OVERLAY</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>               \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n                <div class=\"row mbm-20\">   \n                    <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12 bottom-30\">              \n                        <div class=\"card overlay\">\n                            <img class=\"card-img w-100 transition\" src=\"assets/img/app/sky-full.jpg\" alt=\"Card image\">\n                            <div class=\"card-img-overlay slide-down transition\">\n                                <h6>I'm text that has a background image!</h6>\n                            </div>\n                            <div class=\"card-img-overlay overlay-bottom text-right slide-up transition\">\n                                Lorem ipsum\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12 bottom-30\">       \n                        <div class=\"card overlay\">\n                            <img class=\"card-img w-100 transition\" src=\"assets/img/app/sky-full.jpg\" alt=\"Card image\">\n                            <div class=\"card-img-overlay slide-left transition\">\n                                <h6>I'm text that has a background image!</h6>\n                            </div>\n                            <div class=\"card-img-overlay overlay-bottom text-right slide-right transition\">\n                                Lorem ipsum\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12 bottom-30\">       \n                        <div class=\"card overlay\">\n                            <img class=\"card-img w-100 transition\" src=\"assets/img/app/sky-full.jpg\" alt=\"Card image\">\n                            <div class=\"card-img-overlay hover-opacity transition\">\n                                <h6>I'm text that has a background image!</h6>\n                            </div>\n                            <div class=\"card-img-overlay overlay-bottom text-right hover-opacity transition\">\n                                Lorem ipsum\n                            </div>\n                        </div>\n                    </div>   \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CARD GROUP</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>               \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">                 \n                <div class=\"row\">   \n                    <div class=\"col\">\n                        <div class=\"card-group\">\n                            <div class=\"card\">\n                                <div class=\"card-block\">\n                                    <h5 class=\"card-title\">Card title</h5>\n                                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n                                </div>\n                            </div>\n                            <div class=\"card\">\n                                <div class=\"card-block\">\n                                    <h5 class=\"card-title\">Card title</h5>\n                                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n                                </div>\n                            </div>\n                            <div class=\"card\">\n                                <div class=\"card-block\">\n                                    <h5 class=\"card-title\">Card title</h5>\n                                    <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>  \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CARD WRAPPER</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>               \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n                <div class=\"row\">   \n                    <div class=\"col\">\n                        <div class=\"card-deck-wrapper\">\n                            <div class=\"card-deck\">\n                                <div class=\"card card-info\">\n                                    <div class=\"card-block\">\n                                        <h4 class=\"card-title\">Card title</h4>\n                                        <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n                                    </div>\n                                </div>\n                                <div class=\"card card-info\">\n                                    <div class=\"card-block\">\n                                        <h4 class=\"card-title\">Card title</h4>\n                                        <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n                                    </div>\n                                </div>\n                                <div class=\"card card-info\">\n                                    <div class=\"card-block\">\n                                        <h4 class=\"card-title\">Card title</h4>\n                                        <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>  \n                </div> \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CARD COLUMNS</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>               \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <div class=\"row\">   \n                    <div class=\"col\">\n                        <div class=\"card-columns\">\n                            <div class=\"card card-success\">\n                                <div class=\"card-block\">\n                                    <h4 class=\"card-title\">Card title that wraps to a new line</h4>\n                                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n                                </div>\n                            </div>\n                            <div class=\"card card-block\">\n                                <blockquote class=\"card-blockquote\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                                    <footer>\n                                        <small class=\"text-muted\">\n                                        Someone famous in <cite title=\"Source Title\">Source Title</cite>\n                                        </small>\n                                    </footer>\n                                </blockquote>\n                            </div>\n                            <div class=\"card\">\n                                <div class=\"card-block\">\n                                    <h4 class=\"card-title\">Card title</h4>\n                                    <p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>\n                                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                                </div>\n                            </div>\n                            <div class=\"card card-block card-inverse card-primary text-center\">\n                                <blockquote class=\"card-blockquote\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\n                                    <footer>\n                                        <small>\n                                        Someone famous in <cite title=\"Source Title\">Source Title</cite>\n                                        </small>\n                                    </footer>\n                                </blockquote>\n                            </div>\n                            <div class=\"card card-danger card-block text-right\">\n                                <blockquote class=\"card-blockquote\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                                    <footer>\n                                        <small class=\"text-muted\">\n                                        Someone famous in <cite title=\"Source Title\">Source Title</cite>\n                                        </small>\n                                    </footer>\n                                </blockquote>\n                            </div>\n                            <div class=\"card card-warning card-block\">\n                                <h4 class=\"card-title\">Card title</h4>\n                                <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>\n                                <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                            </div>\n                        </div>\n                    </div>  \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">    \n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>DEFAULT ALERTS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a> \n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <div class=\"alert alert-success\" role=\"alert\">\n                    <strong>Well done!</strong> You successfully read this important alert message.\n                </div>\n\n                <div class=\"alert alert-info\" role=\"alert\">\n                    <strong>Heads up!</strong> This alert needs your attention.\n                </div>\n\n                <div class=\"alert alert-warning\" role=\"alert\">\n                    <strong>Warning!</strong> Better check yourself, you're not looking too good.\n                </div>\n\n                <div class=\"alert alert-danger\" role=\"alert\">\n                    <strong>Oh snap!</strong> Change a few things up and try submitting again.\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n     <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>DISMISSIBLE ALERTS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a> \n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <strong>Well!</strong> You successfully read this important alert message.\n                </div>\n\n                <div class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <strong>Heads up!</strong> This alert needs your attention.\n                </div>\n\n                <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <strong>Warning!</strong> Better check yourself, you're not looking too good.\n                </div>\n\n                <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <strong>Oh snap!</strong> Change a few things up and try submitting again.\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">    \n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>LABELS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                 <p>\n                    <span class=\"badge badge-default\">Default</span>\n                    <span class=\"badge badge-primary\">Primary</span>\n                    <span class=\"badge badge-info\">Info</span>\n                    <span class=\"badge badge-success\">Success</span>\n                    <span class=\"badge badge-warning\">Warning</span>\n                    <span class=\"badge badge-danger\">Danger</span>\n                    <span class=\"badge badge-dark\">Dark</span>\n                    <span class=\"badge badge-main\">Main</span>\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>BADGE</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <p>\n                    <span class=\"badge badge-pill badge-default\">23</span>\n                    <span class=\"badge badge-pill badge-danger\">01</span>\n                    <span class=\"badge badge-pill badge-warning\">20</span>\n                    <span class=\"badge badge-pill badge-success\">31</span>\n                    <span class=\"badge badge-pill badge-info\">18</span>\n                    <span class=\"badge badge-pill badge-dark\">41</span>\n                    <span class=\"badge badge-pill badge-primary\">33</span>\n                    <span class=\"badge badge-pill badge-main\">17</span>\n                </p>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row\">    \n    <div class=\"col-xl-5 col-lg-5 col-md-12 col-sm-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>TOOLTIPS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-animation=\"false\"\n                        data-placement=\"top\" title=\"Tooltip on top\"> On top\n                </button>\n                <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-animation=\"false\"\n                        data-placement=\"right\" title=\"Tooltip on right\"> On right\n                </button>\n                <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-animation=\"false\"\n                        data-placement=\"bottom\" title=\"Tooltip on bottom\"> On bottom\n                </button>\n                <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"tooltip\" data-animation=\"false\"\n                        data-placement=\"left\" title=\"Tooltip on left\"> On left\n                </button>\n               \n            </div>\n        </div>\n    </div>\n\n     <div class=\"col-xl-7 col-lg-7 col-md-12 col-sm-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>POPOVERS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\"\n                        data-toggle=\"popover\" data-placement=\"top\"\n                        data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n                On top\n                </button>\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\"\n                        data-toggle=\"popover\" data-placement=\"right\"\n                        data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n                On right\n                </button>\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\"\n                        data-toggle=\"popover\" data-placement=\"bottom\"\n                        data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n                On bottom\n                </button>\n\n                <button type=\"button\" class=\"btn btn-secondary\" data-container=\"body\"\n                        data-toggle=\"popover\" data-placement=\"left\"\n                        data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\n                On left\n                </button>\n\n                <a tabindex=\"0\" class=\"btn btn-danger\" role=\"button\" data-placement=\"top\"\n                        data-toggle=\"popover\" data-trigger=\"focus\" title=\"Dismissible popover\"\n                        data-content=\"Click anywhere to dismiss this popover\">\n                Dismissible\n                </a>\n               \n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row\">    \n    <div class=\"col-xl-5 col-lg-5 col-md-12 col-sm-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>PAGINATION</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <nav aria-label=\"Page navigation\">\n                    <ul class=\"pagination\">\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                                <span aria-hidden=\"true\">&laquo;</span>\n                                <span class=\"sr-only\">Previous</span>\n                            </a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                                <span aria-hidden=\"true\">&raquo;</span>\n                                <span class=\"sr-only\">Next</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n\n                <nav aria-label=\"Page navigation\">\n                    <ul class=\"pagination\">\n                        <li class=\"page-item disabled\">\n                            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                                <span aria-hidden=\"true\">&laquo;</span>\n                                <span class=\"sr-only\">Previous</span>\n                            </a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                        <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">2</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                                <span aria-hidden=\"true\">&raquo;</span>\n                                <span class=\"sr-only\">Next</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n\n                <nav aria-label=\"Page navigation\">\n                    <ul class=\"pagination pagination-sm\">\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                                <span aria-hidden=\"true\">&laquo;</span>\n                                <span class=\"sr-only\">Previous</span>\n                            </a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                                <span aria-hidden=\"true\">&raquo;</span>\n                                <span class=\"sr-only\">Next</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n\n                <nav aria-label=\"Page navigation\">\n                    <ul class=\"pagination pagination-lg\">\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\n                                <span aria-hidden=\"true\">&laquo;</span>\n                                <span class=\"sr-only\">Previous</span>\n                            </a>\n                        </li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n                        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                        <li class=\"page-item\">\n                            <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                                <span aria-hidden=\"true\">&raquo;</span>\n                                <span class=\"sr-only\">Next</span>\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n               \n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-7 col-lg-7 col-md-12 col-sm-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>MODALS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <div class=\"row col bottom-15\">\n                    <h6 class=\"card-title w-100\">Basic Modal</h6>\n                    \n                    <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#default-modal\">Default</button>\n                    <div class=\"modal fade\" id=\"default-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-label\" style=\"display: none;\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <h4 class=\"modal-title\" id=\"modal-label\">Default Modal</h4>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem!\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#noheader-modal\">No Header</button>\n                    <div class=\"modal fade\" id=\"noheader-modal\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem!\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#nofooter-modal\">No Footer</button>\n                    <div class=\"modal fade\" id=\"nofooter-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-nofooter-label\" style=\"display: none;\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">                                    \n                                    <h4 class=\"modal-title\" id=\"modal-nofooter-label\">No Footer Modal</h4>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem!\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"row col bottom-15\">\n                    <h6 class=\"card-title w-100\">Sizes of the Modals</h6>\n\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#md-modal\">Default</button>\n                    <div class=\"modal fade\" id=\"md-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-default-label\" style=\"display: none;\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header state modal-primary\">                                    \n                                    <h4 class=\"modal-title\" id=\"modal-default-label\">Default modal</h4>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem!\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#sm-modal\">Small</button>\n                    <div class=\"modal fade\" id=\"sm-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-small-label\" style=\"display: none;\">\n                        <div class=\"modal-dialog modal-sm\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header state modal-primary\">                                    \n                                    <h4 class=\"modal-title\" id=\"modal-small-label\">Small modal</h4>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem!\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#lg-modal\">Large</button>\n                    <div class=\"modal fade\" id=\"lg-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-large-label\" style=\"display: none;\">\n                        <div class=\"modal-dialog modal-lg\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header state modal-primary\">                                    \n                                    <h4 class=\"modal-title\" id=\"modal-large-label\">Large modal</h4>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur dignissimos minima nostrum omnis sapiente! Aut, culpa cum cupiditate, delectus dolor eos esse, harum id illo in maxime minima molestiae nostrum odio recusandae sunt voluptates? Autem esse ipsum libero saepe.\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n             \n                <div class=\"row col\">\n                    <h6 class=\"card-title w-100\">Styles of the Modals</h6>\n\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#primary-modal\">Primary</button>\n                    <div class=\"modal fade\" id=\"primary-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-primary-label\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header state modal-primary\">                                    \n                                    <h4 class=\"modal-title\" id=\"modal-primary-label\"><i class=\"fa fa-user\"></i>Primary Modal</h4>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem!\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#success-modal\">Success</button>\n                    <div class=\"modal fade\" id=\"success-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-success-label\" style=\"display: none;\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header state modal-success\">                                   \n                                    <h4 class=\"modal-title\" id=\"modal-success-label\"><i class=\"fa fa-check\"></i>Success Modal</h4>\n                                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem!\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Ok</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#info-modal\">Info</button>\n                    <div class=\"modal fade\" id=\"info-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-info-label\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header state modal-info\">                                   \n                                    <h4 class=\"modal-title\" id=\"modal-info-label\"><i class=\"fa fa-info\"></i>Info Modal</h4>\n                                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem!\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Ok</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#warning-modal\">Warning</button>\n                    <div class=\"modal fade\" id=\"warning-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-warning-label\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header state modal-warning\">                                   \n                                    <h4 class=\"modal-title\" id=\"modal-warning-label\"><i class=\"fa fa-exclamation\"></i>Warning Modal</h4>\n                                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem!\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\">Ok</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#error-modal\">Danger</button>\n                    <div class=\"modal fade\" id=\"error-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-error-label\">\n                        <div class=\"modal-dialog\" role=\"document\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header state modal-danger\">                                    \n                                    <h4 class=\"modal-title\" id=\"modal-error-label\"><i class=\"fa fa-warning\"></i>Danger Modal</h4>\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                                </div>\n                                <div class=\"modal-body\">\n                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, magni suscipit. Dicta dolorem earum esse, fugiat harum minus neque nesciunt, quas reiciendis rem repudiandae rerum? Adipisci et labore laborum quidem!\n                                </div>\n                                <div class=\"modal-footer\">\n                                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Ok</button>\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n               \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row mbm-20\">    \n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>PROGRESS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n               <div class=\"progress bottom-15\">\n                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"progress bottom-15\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 45%\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"progress bottom-15\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"progress bottom-15\">\n                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"progress bottom-15\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"progress bottom-15\">\n                    <div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"progress progress-xs bottom-15\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 45%\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"progress progress-sm bottom-15\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"progress progress-md bottom-15\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n                <div class=\"progress\">\n                    <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 15%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 30%\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n     <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CAROUSEL</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                  \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <ol class=\"carousel-indicators\">\n                      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                    </ol>\n                    <div class=\"carousel-inner\" role=\"listbox\">\n                      <div class=\"carousel-item active\">\n                        <img class=\"d-block w-100p h-100p\" src=\"assets/img/app/snow.jpg\" alt=\"First slide\">\n                        <div class=\"carousel-caption d-none d-md-block\">\n                            <h3>Image caption</h3>\n                            <p>Image description</p>\n                        </div>\n                      </div>\n                      <div class=\"carousel-item\">\n                        <img class=\"d-block w-100p h-100p\" src=\"assets/img/app/sky-full.jpg\" alt=\"Second slide\">\n                      </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                      <span class=\"sr-only\">Previous</span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                      <span class=\"sr-only\">Next</span>\n                    </a>\n                </div>\n              \n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "<div class=\"row bottom-30\">\n  <div class=\"col\">\n        <div widget class=\"card\">\n          <div class=\"card-header\">\n            <span>INLINE FORM</span>\n            <div class=\"widget-controls\"> \n                <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n            </div>        \n          </div>\n          <div class=\"card-block widget-body\"> \n                <h5 class=\"card-title\">Stacked to horizontal</h5>\n                <p>Using a single set of <code>.col-md-*</code> grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns within any <code>.row</code>.</p>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-md-12\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-12</div>\n                        </div>                    \n                    </div>\n                </div>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-6</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-6</div>\n                        </div>                    \n                    </div>\n                </div>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-4</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-4</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-4</div>\n                        </div>                    \n                    </div>\n                </div>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-md-3\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-3</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-3</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-3</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-3</div>\n                        </div>                    \n                    </div>\n                </div>\n                \n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-md-2\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-2</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-2</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-2</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-2</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-2</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-2</div>\n                        </div>                    \n                    </div>              \n                </div>\n\n                <div class=\"row bottom-15 grid\">   \n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-1\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-1</div>\n                        </div>                    \n                    </div>               \n                </div>\n\n                <hr>\n                <h5 class=\"card-title\">Mobile and desktop</h5>\n                <p>Don’t want your columns to simply stack in smaller devices? Use the extra small and medium device grid classes by adding <code>.col-*</code> and <code>.col-md-*</code> to your columns. See the example below for a better idea of how it all works.</p>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-12 col-md-8\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-12 .col-md-8</div>\n                        </div>                   \n                    </div>\n                    <div class=\"col-6 col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6 .col-md-4</div>\n                        </div> \n                    </div>\n                </div>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-6 col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6 .col-md-4</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-6 col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6 .col-md-4</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-6 col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6 .col-md-4</div>\n                        </div>                    \n                    </div>\n                </div>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-6\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6</div>\n                        </div>                    \n                    </div>\n                </div>\n\n                <hr>\n                <h5 class=\"card-title\">Mobile, tablet, desktop</h5>\n                <p>Build on the previous example by creating even more dynamic and powerful layouts with tablet <code>.col-sm-*</code> classes.</p>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-12 col-sm-6 col-md-8\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-12 .col-sm-6 .col-md-8</div>\n                        </div>                   \n                    </div>\n                    <div class=\"col-6 col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6 .col-md-4</div>\n                        </div> \n                    </div>\n                </div>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-6 col-sm-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6 .col-sm-4</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-6 col-sm-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6 .col-sm-4</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-6 col-sm-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6 .col-sm-4</div>\n                        </div>                    \n                    </div>\n                </div>\n\n                <hr>\n                <h5 class=\"card-title\">Column wrapping</h5>\n                <p>If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.</p>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-9\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-9</div>\n                        </div>                    \n                    </div>\n                </div>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-4<br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-6\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-6<br>Subsequent columns continue along the new line.</div>\n                        </div>                    \n                    </div>\n                </div>  \n\n                <hr>\n                <h5 class=\"card-title\">Offsetting columns</h5>\n                <p>Move columns to the right using <code>.offset-md-*</code> classes. These classes increase the left margin of a column by <code>*</code> columns. For example, <code>.offset-md-4</code> moves <code>.col-md-4</code> over four columns.</p>        \n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-4</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-4 offset-md-4\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-4 .offset-md-4</div>\n                        </div>                    \n                    </div>\n                </div>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-md-3 offset-md-3\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-3 .offset-md-3</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-3 offset-md-3\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-3 .offset-md-3</div>\n                        </div>                    \n                    </div>\n                </div>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-md-6 offset-md-3\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-6 .offset-md-3</div>\n                        </div>                    \n                    </div>\n                </div>\n\n                <hr>\n                <h5 class=\"card-title\">Column ordering</h5>\n\n                <div class=\"row bottom-15 grid\">\n                    <div class=\"col-md-3 col-md-pull-9\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-3 .col-md-pull-9</div>\n                        </div>                    \n                    </div>\n                    <div class=\"col-md-9 col-md-push-3\">\n                        <div class=\"card\">\n                            <div class=\"card-block\">.col-md-9 .col-md-push-3</div>\n                        </div>                    \n                    </div>\n                </div>\n            \n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n  <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>GRID OPTIONS</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a> \n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-striped\">\n                        <thead>\n                            <tr>\n                                <th></th>\n                                <th> Extra small devices\n                                    <small>Phones (&lt;576px)</small>\n                                </th>\n                                <th> Small devices\n                                    <small>Tablets (≥576px)</small>\n                                </th>\n                                <th> Medium devices\n                                    <small>Desktops (≥768px)</small>\n                                </th>\n                                <th> Large devices\n                                    <small>Desktops (≥992px)</small>\n                                </th>\n                                <th> Large devices\n                                    <small>Desktops (≥1200px)</small>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <th class=\"text-nowrap\" scope=\"row\">Grid behavior</th>\n                                <td>Horizontal at all times</td>\n                                <td colspan=\"4\">Collapsed to start, horizontal above breakpoints</td>\n                            </tr>\n                            <tr>\n                                <th class=\"text-nowrap\" scope=\"row\">Container width</th>\n                                <td>None (auto)</td>\n                                <td>540px</td>\n                                <td>720px</td>\n                                <td>940px</td>\n                                <td>1140px</td>\n                            </tr>\n                            <tr>\n                                <th class=\"text-nowrap\" scope=\"row\">Class prefix</th>\n                                <td><code>.col-</code></td>\n                                <td><code>.col-sm-</code></td>\n                                <td><code>.col-md-</code></td>\n                                <td><code>.col-lg-</code></td>\n                                <td><code>.col-xl-</code></td>\n                            </tr>\n                            <tr>\n                                <th class=\"text-nowrap\" scope=\"row\"># of columns</th>\n                                <td colspan=\"5\">12</td>\n                            </tr>\n                            <tr>\n                                <th class=\"text-nowrap\" scope=\"row\">Gutter width</th>\n                                <td colspan=\"5\">1.875rem / 30px (15px on each side of a column)</td>\n                            </tr>\n                            <tr>\n                                <th class=\"text-nowrap\" scope=\"row\">Nestable</th>\n                                <td colspan=\"5\">Yes</td>\n                            </tr>\n                            <tr>\n                                <th class=\"text-nowrap\" scope=\"row\">Offsets</th>\n                                <td colspan=\"5\">Yes</td>\n                            </tr>\n                            <tr>\n                                <th class=\"text-nowrap\" scope=\"row\">Column ordering</th>\n                                <td colspan=\"5\">Yes</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n         \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row mbm-20\">\n  <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>RESPONSIVE UTILITIES</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n\n              <div class=\"table-responsive\">\n                   <table class=\"table table-bordered responsive-utilities\">\n                        <thead>\n                        <tr>\n                            <th></th>\n                            <th>\n                            Extra small devices\n                            <small>Portrait phones (&lt;544px)</small>\n                            </th>\n                            <th>\n                            Small devices\n                            <small>Landscape phones (≥544px - &lt;768px)</small>\n                            </th>\n                            <th>\n                            Medium devices\n                            <small>Tablets (≥768px - &lt;992px)</small>\n                            </th>\n                            <th>\n                            Large devices\n                            <small>Desktops (≥992px - &lt;1200px)</small>\n                            </th>\n                            <th>\n                            Extra large devices\n                            <small>Desktops (≥1200px)</small>\n                            </th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <th scope=\"row\"><code>.hidden-xs-down</code></th>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><code>.hidden-sm-down</code></th>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><code>.hidden-md-down</code></th>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><code>.hidden-lg-down</code></th>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-visible\">Visible</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><code>.hidden-xl-down</code></th>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><code>.hidden-xs-up</code></th>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><code>.hidden-sm-up</code></th>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><code>.hidden-md-up</code></th>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><code>.hidden-lg-up</code></th>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><code>.hidden-xl-up</code></th>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-visible\">Visible</td>\n                            <td class=\"is-hidden\">Hidden</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<div class=\"row bottom-30\">\n    <div class=\"col\">\n      <div widget class=\"card card-{{bgColor}}\">\n          <div class=\"card-header\">\n            <span>FONT AWESOME ICONS</span>\n            <div class=\"widget-controls\">\n                <a href=\"#\" class=\"dropdown-toggle transition setting\" data-toggle=\"dropdown\">\n                    <i class=\"fa fa-gear\"></i>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li><a title=\"Default BG\" href=\"javascript:void(0)\" (click)=\"changeBg('')\">Default BG</a></li>                  \n                    <li><a title=\"Success BG\" href=\"javascript:void(0)\" (click)=\"changeBg('success')\">Success BG</a></li>                  \n                    <li><a title=\"Warning BG\" href=\"javascript:void(0)\" (click)=\"changeBg('warning')\">Warning BG</a></li>\n                    <li><a title=\"Danger BG\" href=\"javascript:void(0)\" (click)=\"changeBg('danger')\">Danger BG</a></li>\n                </ul>\n                <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>   \n            </div>        \n          </div>\n          <div class=\"card-block widget-body\"> \n              <div class=\"row\">       \n                  <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-4 icon-font-awesome\"               \n                      *ngFor=\"let icon of icons.fontAwesome\">\n                      <div class=\"card transition\">\n                          <div class=\"card-block\">\n                              <p class=\"card-text\">\n                                  <i class=\"fa {{ icon }}\" aria-hidden=\"true\"></i>\n                                  <span class=\"sr-only\"></span>fa {{ icon }} \n                              </p>\n                          </div>\n                      </div>\n                  </div>\n              </div>  \n          </div>\n      </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n          <div class=\"card-header\">\n            <span>SOCICONS</span>\n            <div class=\"widget-controls\"> \n                <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n            </div>        \n          </div>\n          <div class=\"card-block widget-body\">  \n              <div class=\"row\">      \n                  <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 bottom-15 icon-socicon\"               \n                      *ngFor=\"let icon of icons.socicons\">\n                      <div class=\"card transition\">\n                          <div class=\"card-block text-center\">\n                              <h4 class=\"socicon socicon-{{ icon.id }}\" [style.color]=\"icon.color\"></h4>\n                              <p class=\"card-text\">socicon socicon-{{ icon.id }} </p>\n                          </div>\n                      </div>\n                    </div>\n                </div>  \n            </div>\n        </div>\n    </div>\n</div>  \n"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>DEFAULT</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <p>Use the <code>list-group-item</code> class inside a <code>list-group</code> element.</p>\n\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item\">Cras justo odio</li>\n                    <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                    <li class=\"list-group-item\">Morbi leo risus</li>\n                    <li class=\"list-group-item\">Porta ac consectetur ac</li>\n                    <li class=\"list-group-item\">Vestibulum at eros</li>\n                </ul>\n\n            </div>\n        </div>\n    </div>\n\n     <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>WITH TAGS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <p>Add badges to any list group item to show unread counts, activity, etc.</p>\n                <ul class=\"list-group\">\n                    <li class=\"list-group-item justify-content-between\">                        \n                        Cras justo odio\n                        <span class=\"badge badge-main badge-pill\">14</span>\n                    </li>\n                    <li class=\"list-group-item justify-content-between\">                       \n                        Dapibus ac facilisis in\n                        <span class=\"badge badge-main badge-pill\">22</span>\n                    </li>\n                    <li class=\"list-group-item justify-content-between\">                        \n                        Morbi leo risus\n                        <span class=\"badge badge-main badge-pill\">31</span>\n                    </li>\n                    <li class=\"list-group-item justify-content-between\">                        \n                        Porta ac consectetur ac\n                        <span class=\"badge badge-main badge-pill\">17</span>\n                    </li>\n                    <li class=\"list-group-item justify-content-between\">                        \n                        Vestibulum at eros\n                        <span class=\"badge badge-main badge-pill\">44</span>\n                    </li>\n                </ul>            \n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row\">\n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>DISABLED ITEM</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <p>Add <code>disabled</code> to a <code>list-group-item</code> to show it as disabled.</p>\n\n               <div class=\"list-group\">\n                    <a href=\"javascript:void(0);\" class=\"list-group-item disabled\">\n                        Cras justo odio\n                    </a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item\">Dapibus ac facilisis in</a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item\">Morbi leo risus</a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item\">Porta ac consectetur ac</a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item\">Vestibulum at eros</a>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n     <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>ACTIONS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <p>Use anchors or buttons to create actionable list group items with hover, disabled, and active states by adding <code>list-group-item-action</code>. This separate class contains a few overrides to add compatibility for <code>&lt;a&gt;</code>s and <code>&lt;button&gt;</code>s, as well as the hover and focus states.</p>\n\n               <div class=\"list-group\">\n                    <a href=\"javascript:void(0);\" class=\"list-group-item active\">\n                        Cras justo odio\n                    </a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action\">Dapibus ac facilisis in</a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action\">Morbi leo risus</a>                   \n                </div>        \n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row mbm-20\">\n    \n    <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CONTEXTUAL CLASSES</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <p>Use contextual classes to style list items, default or linked.</p>\n                <div class=\"list-group\">\n                    <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-primary\">Cras justo odio</a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-success\">Dapibus ac facilisis in</a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-info\">Cras sit amet nibh libero</a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-warning\">Porta ac consectetur ac</a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action list-group-item-danger\">Vestibulum at eros</a>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n     <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>CUSTOM CONTENT</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <div class=\"list-group\">\n                    <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action active\">\n                        <h5 class=\"list-group-item-heading\">List group item heading</h5>\n                        <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus.</p>\n                    </a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action\">\n                        <h5 class=\"list-group-item-heading\">List group item heading</h5>\n                        <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus.</p>\n                    </a>\n                    <a href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action\">\n                        <h5 class=\"list-group-item-heading\">List group item heading</h5>\n                        <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus.</p>\n                    </a>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">   \n    <div class=\"col-xl-4 col-lg-4 col-12 bottom-30\">              \n          <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>DEFAULT</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n                <div class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/profile/tereza.jpg\" width=\"70\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                        <h4 class=\"mt-0\">Media heading</h4>\n                        Cras sit amet nibh libero, in gravida nulla.<br>\n                        Nulla vel metus scelerisque ante sollicitudin commodo.<br>\n                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.<br>\n                    </div>\n                </div> \n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-4 col-lg-4 col-12 bottom-30\">              \n          <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>MIDDLE</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <div class=\"media\">\n                    <img class=\"d-flex align-self-center mr-3\" src=\"assets/img/profile/bruno.jpg\" width=\"70\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                        <h4 class=\"mt-0\">Media heading</h4>\n                        Cras sit amet nibh libero, in gravida nulla.<br>\n                        Nulla vel metus scelerisque ante sollicitudin commodo.<br>\n                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.<br>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-4 col-lg-4 col-12 bottom-30\">              \n          <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>BOTTOM</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <div class=\"media\">\n                    <img class=\"d-flex align-self-end mr-3\" src=\"assets/img/profile/michael.jpg\" width=\"70\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                        <h4 class=\"mt-0\">Media heading</h4>\n                        Cras sit amet nibh libero, in gravida nulla.<br>\n                        Nulla vel metus scelerisque ante sollicitudin commodo.<br>\n                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.<br>\n                    </div>\n                </div>                \n            </div>\n        </div>\n    </div>    \n  \n</div>\n\n<div class=\"row\">   \n    <div class=\"col-xl-4 col-lg-4 col-12 bottom-30\">              \n          <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>RIGHT</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n                <div class=\"media\">\n                    <div class=\"media-body\">\n                       <h4 class=\"media-heading\">Media heading</h4>\n                        Cras sit amet nibh libero, in gravida nulla.<br>\n                        Nulla vel metus scelerisque ante sollicitudin commodo.<br>\n                        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.<br>\n                    </div>\n                    <img class=\"d-flex ml-3\" src=\"assets/img/profile/tereza.jpg\" width=\"70\" alt=\"Generic placeholder image\">\n                </div>               \n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-4 col-lg-4 col-12 bottom-30\">              \n          <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>LIST</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n                <ul class=\"list-unstyled\">\n                    <li class=\"media\">\n                      <img class=\"d-flex mr-3\" src=\"assets/img/profile/bruno.jpg\" width=\"70\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                         <h4 class=\"media-heading\">Media heading</h4>\n                         <p>A short sentence to save some space in the code sample</p>\n                      </div>\n                    </li>\n                    <li class=\"media\">\n                      <img class=\"d-flex mr-3\" src=\"assets/img/profile/tereza.jpg\" width=\"70\" alt=\"Generic placeholder image\">\n                      <div class=\"media-body\">\n                       <h4 class=\"media-heading\">Media heading</h4>\n                            <p>A short sentence to save some space in the code sample</p>\n                      </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"col-xl-4 col-lg-4 col-12 bottom-30\">              \n          <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>NESTED</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">  \n\n                <div class=\"media\">\n                    <img class=\"d-flex mr-3\" src=\"assets/img/profile/ashley.jpg\" width=\"70\" alt=\"Generic placeholder image\">\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\">Media heading</h4>\n                        Cras sit amet nibh libero, in gravida nulla.\n                        <div class=\"media mt-3\">\n                            <img class=\"d-flex mr-3\" src=\"assets/img/profile/adam.jpg\" width=\"70\" alt=\"Generic placeholder image\">                     \n                            <div class=\"media-body\">\n                              <h4 class=\"media-heading\">Nested media heading</h4>\n                              Cras sit amet nibh libero, in gravida nulla.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>    \n  \n</div>\n"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<div class=\"row bottom-30\">\n   <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>TOP / BOTTOM HORIZONTAL TABS</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n                <div class=\"row mbm-20\">\n                    <div class=\"col-lg-6 col-12 bottom-30\">\n                        <div class=\"clearfix\">\n                            <ul class=\"nav nav-tabs top pull-left w-100p\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#ta\">Active</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tb\">Link</a>\n                                </li>\n                                <li class=\"nav-item dropdown\">\n                                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n                                    <div class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item\" href=\"#tdropdown1\" data-toggle=\"tab\">Action</a>\n                                        <a class=\"dropdown-item\" href=\"#tdropdown2\" data-toggle=\"tab\">Another action</a>\n                                    </div>\n                                </li>                          \n                            </ul>\n                        </div>\n                        <div class=\"tab-content top\">\n                            <div class=\"tab-pane active\" id=\"ta\">\n                                <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>\n                            </div>\n                            <div class=\"tab-pane\" id=\"tb\">\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>\n                            </div>\n                            <div class=\"tab-pane\" id=\"tdropdown1\">\n                                <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar.</p>\n                            </div>\n                            <div class=\"tab-pane\" id=\"tdropdown2\">\n                            <p>Aliquam pulvinar lacinia euismod. Sed ante nisi, volutpat a ex vel, dapibus lacinia lacus. Nam pellentesque, ligula nec aliquet fermentum, lectus justo luctus mi.</p>\n                            </div>\n                        </div>                   \n                    </div>\n\n                    <div class=\"col-lg-6 col-12 bottom-30\">                    \n                        <div class=\"tab-content bottom\">\n                            <div class=\"tab-pane active\" id=\"ba\">\n                                <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>\n                            </div>\n                            <div class=\"tab-pane\" id=\"bb\">\n                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.</p>\n                            </div>\n                            <div class=\"tab-pane\" id=\"bdropdown1\">\n                                <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar.</p>\n                            </div>\n                            <div class=\"tab-pane\" id=\"bdropdown2\">\n                            <p>Aliquam pulvinar lacinia euismod. Sed ante nisi, volutpat a ex vel, dapibus lacinia lacus. Nam pellentesque, ligula nec aliquet fermentum, lectus justo luctus mi.</p>\n                            </div>\n                        </div> \n                        <div class=\"clearfix\">\n                            <ul class=\"nav nav-tabs bottom pull-left w-100p\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#ba\">Active</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#bb\">Link</a>\n                                </li>\n                                <li class=\"nav-item dropup\">\n                                    <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropup</a>\n                                    <div class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item\" href=\"#bdropdown1\" data-toggle=\"tab\">Action</a>\n                                        <a class=\"dropdown-item\" href=\"#bdropdown2\" data-toggle=\"tab\">Another action</a>\n                                    </div>\n                                </li>                          \n                            </ul>\n                        </div>        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n              <span>LEFT / RIGHT VERTICAL TABS</span>\n              <div class=\"widget-controls\"> \n                  <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                  <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                  <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                  <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                  <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n              </div>        \n            </div>\n            <div class=\"card-block widget-body\"> \n                \n                <div class=\"row mbm-20\">\n                    \n                    <div class=\"col-lg-6 col-12 vertical-tabs bottom-30\">\n                        <div class=\"row pl-3 pr-3\">\n                            <ul class=\"nav flex-column left col-3\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" href=\"#la\" data-toggle=\"tab\">Active</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#lb\" data-toggle=\"tab\">Link</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link disabled\" href=\"javascript:void(0);\">Disabled</a>\n                            </li>\n                            </ul>\n                            <div class=\"tab-content col-9\">\n                                <div class=\"tab-pane active\" id=\"la\">Lorem ipsum dolor sit amet, charetra varius rci quis tortor imperdiet venenatis quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Pellentesque dapibus molestie eleifend. Nam rhoncus justo sapien, a euismod turpis maximus a. </div>                  \n                                <div class=\"tab-pane\" id=\"lb\">Thirdamuno, ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum auctor accumsan. Duis pharetra\n                                varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae. Pellentesque dapibus molestie eleifend. Nam rhoncus justo sapien, a euismod turpis maximus a.</div>\n                            </div>\n                        </div>                      \n                    </div>\n                      \n                    <div class=\"col-lg-6 col-12 vertical-tabs bottom-30\">\n                        <div class=\"row pl-3 pr-3\">\n                            <div class=\"tab-content col-9\">\n                                <div class=\"tab-pane active\" id=\"ra\">Lorem ipsum dolor sit amet, charetra varius rci quis tortor imperdiet venenatis quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Pellentesque dapibus molestie eleifend. Nam rhoncus justo sapien, a euismod turpis maximus a.</div>\n                                <div class=\"tab-pane\" id=\"rb\">Thirdamuno, ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum auctor accumsan. Duis pharetra\n                                varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae. Pellentesque dapibus molestie eleifend. Nam rhoncus justo sapien, a euismod turpis maximus a.</div>\n                            </div>\n                            <ul class=\"nav flex-column right col-3\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link active\" href=\"#ra\" data-toggle=\"tab\">Active</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#rb\" data-toggle=\"tab\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link disabled\" href=\"javascript:void(0);\">Disabled</a>\n                                </li>\n                            </ul>\n                        </div>                        \n                    </div> \n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">    \n    <div class=\"col bottom-30\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>TABS COLORS</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n                <div class=\"row bottom-30\">\n                    <div class=\"col\">\n                         <ul class=\"nav nav-tabs top tabs-primary\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" href=\"#p1\" role=\"tab\" data-toggle=\"tab\">Active</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#p2\" role=\"tab\" data-toggle=\"tab\">Link</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#p3\" role=\"tab\" data-toggle=\"tab\">Other</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content tab-content-primary\">\n                            <div class=\"tab-pane fade show active\" id=\"p1\">Curabitur dignissim molestie erat a eleifend.</div>\n                            <div class=\"tab-pane fade\" id=\"p2\">Nunc feugiat dolor id quam accumsan, eu hendrerit massa dignissim.</div>\n                            <div class=\"tab-pane fade\" id=\"p3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row bottom-30\">\n                    <div class=\"col\">\n                         <ul class=\"nav nav-tabs top tabs-success\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" href=\"#s1\" role=\"tab\" data-toggle=\"tab\">Active</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#s2\" role=\"tab\" data-toggle=\"tab\">Link</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#s3\" role=\"tab\" data-toggle=\"tab\">Other</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content tab-content-success\">\n                            <div class=\"tab-pane fade show active\" id=\"s1\">Curabitur dignissim molestie erat a eleifend.</div>\n                            <div class=\"tab-pane fade\" id=\"s2\">Nunc feugiat dolor id quam accumsan, eu hendrerit massa dignissim.</div>\n                            <div class=\"tab-pane fade\" id=\"s3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row bottom-30\">\n                    <div class=\"col\">\n                         <ul class=\"nav nav-tabs top tabs-info\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" href=\"#i1\" role=\"tab\" data-toggle=\"tab\">Active</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#i2\" role=\"tab\" data-toggle=\"tab\">Link</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#i3\" role=\"tab\" data-toggle=\"tab\">Other</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content tab-content-info\">\n                            <div class=\"tab-pane fade show active\" id=\"i1\">Curabitur dignissim molestie erat a eleifend.</div>\n                            <div class=\"tab-pane fade\" id=\"i2\">Nunc feugiat dolor id quam accumsan, eu hendrerit massa dignissim.</div>\n                            <div class=\"tab-pane fade\" id=\"i3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row bottom-30\">\n                    <div class=\"col\">\n                         <ul class=\"nav nav-tabs top tabs-warning\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" href=\"#w1\" role=\"tab\" data-toggle=\"tab\">Active</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#w2\" role=\"tab\" data-toggle=\"tab\">Link</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#w3\" role=\"tab\" data-toggle=\"tab\">Other</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content tab-content-warning\">\n                            <div class=\"tab-pane fade show active\" id=\"w1\">Curabitur dignissim molestie erat a eleifend.</div>\n                            <div class=\"tab-pane fade\" id=\"w2\">Nunc feugiat dolor id quam accumsan, eu hendrerit massa dignissim.</div>\n                            <div class=\"tab-pane fade\" id=\"w3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col\">\n                         <ul class=\"nav nav-tabs top tabs-danger\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link active\" href=\"#d1\" role=\"tab\" data-toggle=\"tab\">Active</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#d2\" role=\"tab\" data-toggle=\"tab\">Link</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#d3\" role=\"tab\" data-toggle=\"tab\">Other</a>\n                            </li>\n                        </ul>\n                        <div class=\"tab-content tab-content-danger\">\n                            <div class=\"tab-pane fade show active\" id=\"d1\">Curabitur dignissim molestie erat a eleifend.</div>\n                            <div class=\"tab-pane fade\" id=\"d2\">Nunc feugiat dolor id quam accumsan, eu hendrerit massa dignissim.</div>\n                            <div class=\"tab-pane fade\" id=\"d3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n                        </div>\n                    </div>\n                </div>\n\n              \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row mbm-20\">    \n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>ACCORDION</span>\n                <div class=\"widget-controls\">              \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body\">\n\n               <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                    <div class=\"card\">\n                        <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                            <h5 class=\"mb-0\">\n                                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Collapsible Group Item #1\n                                </a>\n                            </h5>\n                        </div>\n                        <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                            <div class=\"card-block\">\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-primary\">\n                        <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n                            <h5 class=\"mb-0\">\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                                Collapsible Group Item #2\n                                </a>\n                            </h5>\n                        </div>\n                        <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                            <div class=\"card-block\">\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-success\">\n                        <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n                            <h5 class=\"mb-0\">\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                                Collapsible Group Item #3\n                                </a>\n                            </h5>\n                        </div>\n                        <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                            <div class=\"card-block\">\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-info\">\n                        <div class=\"card-header\" role=\"tab\" id=\"headingFour\">\n                            <h5 class=\"mb-0\">\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n                                Collapsible Group Item #4\n                                </a>\n                            </h5>\n                        </div>\n                        <div id=\"collapseFour\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\n                            <div class=\"card-block\">\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-warning\">\n                        <div class=\"card-header\" role=\"tab\" id=\"headingFive\">\n                            <h5 class=\"mb-0\">\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\n                                Collapsible Group Item #5\n                                </a>\n                            </h5>\n                        </div>\n                        <div id=\"collapseFive\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFive\">\n                            <div class=\"card-block\">\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card card-danger\">\n                        <div class=\"card-header\" role=\"tab\" id=\"headingSix\">\n                            <h5 class=\"mb-0\">\n                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseSix\">\n                                Collapsible Group Item #6\n                                </a>\n                            </h5>\n                        </div>\n                        <div id=\"collapseSix\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingSix\">\n                            <div class=\"card-block\">\n                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>HEADINGS</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body row\"> \n\n                <div class=\"col-xl-6 col-lg-6 col-12 bottom-30\">                \n                    <div class=\"card-block\">\n                        <h1>Heading 1 <small>Sub-heading</small></h1>\n                        <h2>Heading 2 <small>Sub-heading</small></h2>\n                        <h3>Heading 3 <small>Sub-heading</small></h3>\n                        <h4>Heading 4 <small>Sub-heading</small></h4>\n                        <h5>Heading 5 <small>Sub-heading</small></h5>\n                        <h6>Heading 6 <small>Sub-heading</small></h6>\n                    </div>\n                    <div class=\"card-block\">\n                        <p class=\"card-text desc\">All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.</p>                 \n                    </div> \n                </div>\n\n                <div class=\"col-xl-6 col-lg-6 col-12 typography\">\n                    <div class=\"card-block\">\n                        <h1 class=\"display-1\">Display 1</h1>\n                        <h1 class=\"display-2\">Display 2</h1>\n                        <h1 class=\"display-3\">Display 3</h1>\n                        <h1 class=\"display-4\">Display 4</h1>                       \n                    </div> \n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n              <span>TEXT COLORS</span>\n              <div class=\"widget-controls\"> \n                  <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                  <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                  <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                  <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                  <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n              </div>        \n            </div>\n            <div class=\"card-block widget-body row mbm-20\"> \n\n                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30 typography\">\n                    <div class=\"card\">\n                        <div class=\"card-block text-center\">\n                            <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\"><code>.text-muted</code></p>                      \n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30 typography\">\n                    <div class=\"card card-outline-primary\">\n                        <div class=\"card-block text-center\">\n                            <p class=\"text-primary\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\"><code>.text-primary</code></p>                      \n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30 typography\">\n                    <div class=\"card card-outline-success\">\n                        <div class=\"card-block text-center\">\n                            <p class=\"text-success\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\"><code>.text-success</code></p>                      \n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30 typography\">\n                    <div class=\"card card-outline-info\">\n                        <div class=\"card-block text-center\">\n                            <p class=\"text-info\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\"><code>.text-info</code></p>                      \n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30 typography\">\n                    <div class=\"card card-outline-warning\">\n                        <div class=\"card-block text-center\">\n                            <p class=\"text-warning\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\"><code>.text-warning</code></p>                      \n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12 bottom-30 typography\">\n                    <div class=\"card card-outline-danger\">\n                        <div class=\"card-block text-center\">\n                            <p class=\"text-danger\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\"><code>.text-danger</code></p>                      \n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>TEXT ALIGMENT</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body row mbm-20\"> \n\n                <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12 bottom-30 typography\">\n                    <div class=\"card card-info\">\n                        <div class=\"card-block\">\n                            <p class=\"text-left\">Left aligned text on all viewport sizes.</p>\n                            <p class=\"text-sm-left\">Left aligned text on viewports sized SM (small) or wider.</p>\n                            <p class=\"text-md-left\">Left aligned text on viewports sized MD (medium) or wider.</p>\n                            <p class=\"text-lg-left\">Left aligned text on viewports sized LG (large) or wider.</p>\n                            <p class=\"text-xl-left\">Left aligned text on viewports sized XL (extra-large) or wider.</p>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\"><code>.text-*-left</code></p>                      \n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12 bottom-30 typography\">\n                    <div class=\"card card-info\">\n                        <div class=\"card-block\">\n                            <p class=\"text-center\">Center aligned text on all viewport sizes.</p>\n                            <p class=\"text-sm-center\">Center aligned text on viewports sized SM (small) or wider.</p>\n                            <p class=\"text-md-center\">Center aligned text on viewports sized MD (medium) or wider.</p>\n                            <p class=\"text-lg-center\">Center aligned text on viewports sized LG (large) or wider.</p>\n                            <p class=\"text-xl-center\">Center aligned text on viewports sized XL (extra-large) or wider.</p>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\"><code>.text-*-center</code></p>                      \n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12 bottom-30 typography\">\n                    <div class=\"card card-info\">\n                        <div class=\"card-block\">\n                            <p class=\"text-right\">Right aligned text on all viewport sizes.</p>\n                            <p class=\"text-sm-right\">Right aligned text on viewports sized SM (small) or wider.</p>\n                            <p class=\"text-md-right\">Right aligned text on viewports sized MD (medium) or wider.</p>\n                            <p class=\"text-lg-right\">Right aligned text on viewports sized LG (large) or wider.</p>\n                            <p class=\"text-xl-right\">Right aligned text on viewports sized XL (extra-large) or wider.</p>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\"><code>.text-*-right</code></p>                      \n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>BLOCKQUOTES</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body row mbm-20\"> \n\n                <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 bottom-30 typography\">                    \n                    <div class=\"card-block\">\n                        <blockquote class=\"blockquote\">\n                            <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n                            <footer class=\"blockquote-footer\">Someone famous in\n                                <cite title=\"Source Title\">Source Title</cite>\n                            </footer>\n                        </blockquote>\n                        <p class=\"card-text desc text-center\">Use class <code>blockquote</code></p> \n                    </div>\n                </div>\n\n                <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 bottom-30 typography\">                  \n                    <div class=\"card-block\">\n                        <blockquote class=\"blockquote blockquote-reverse\">\n                            <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>\n                            <footer class=\"blockquote-footer\">Someone famous in\n                                <cite title=\"Source Title\">Source Title</cite>\n                            </footer>\n                        </blockquote>\n                        <p class=\"card-text desc text-center\">Add class <code>blockquote-reverse</code></p> \n                    </div>                   \n                </div>      \n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row bottom-30\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>LIST</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body row mbm-20\"> \n\n                <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 bottom-30 typography\">\n                    <div class=\"card card-outline-info\">\n                        <div class=\"card-block\">\n                            <ul class=\"list-unstyled\">\n                                <li>Integer molestie lorem at massa</li>\n                                <li>Facilisis in pretium nisl aliquet</li>\n                                <li>Nulla volutpat aliquam velit\n                                    <ul>\n                                    <li>Phasellus iaculis neque</li>\n                                    <li>Purus sodales ultricies</li>\n                                    </ul>\n                                </li>\n                                <li>Faucibus porta lacus fringilla vel</li>\n                                <li>Eget porttitor lorem</li>\n                            </ul>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\"><code>.list-unstyled</code></p>                      \n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-xl-6 col-lg-6 col-md-6 col-sm-12 bottom-30 typography\">\n                    <div class=\"card card-outline-info bottom-15\">\n                        <div class=\"card-block\">\n                            <ul class=\"list-inline\">\n                                <li class=\"list-inline-item\">Lorem ipsum</li>\n                                <li class=\"list-inline-item\">Phasellus iaculis</li>\n                                <li class=\"list-inline-item\">Nulla volutpat</li>\n                            </ul>\n                            <p class=\"card-text desc text-center\"><code>.list-inline</code></p>   \n                        </div>\n                    </div>\n\n                    <div class=\"card card-outline-info\">\n                        <div class=\"card-block\">\n                            <ol>\n                                <li>Facilisis in pretium nisl aliquet.</li>\n                                <li>Nulla volutpat aliquam velit.</li>\n                                <li>Faucibus porta lacus fringilla vel.</li>\n                                <li>Integer molestie lorem at massa.</li>\n                            </ol>\n                        </div>\n                    </div>\n                </div>\n\n                 <div class=\"col bottom-30 typography\">\n                    <div class=\"card card-outline-info\">\n                        <div class=\"card-block\">\n                            <dl class=\"row\">\n                                <dt class=\"col-sm-3\">Description lists</dt>\n                                <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\n\n                                <dt class=\"col-sm-3\">Euismod</dt>\n                                <dd class=\"col-sm-9\">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n                                <dd class=\"col-sm-9 offset-sm-3\">Donec id elit non mi porta gravida at eget metus.</dd>\n\n                                <dt class=\"col-sm-3\">Malesuada porta</dt>\n                                <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>\n\n                                <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>\n                                <dd class=\"col-sm-9\">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\n\n                                <dt class=\"col-sm-3\">Nesting</dt>\n                                <dd class=\"col-sm-9\">\n                                    <dl class=\"row\">\n                                    <dt class=\"col-sm-4\">Nested definition list</dt>\n                                    <dd class=\"col-sm-8\">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>\n                                    </dl>\n                                </dd>\n                            </dl>\n                        </div>\n                        <div class=\"card-block text-center\">\n                            <p class=\"card-text desc\">Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code>text-truncate</code> class to truncate the text with an ellipsis.</p>  \n                        </div>\n                    </div>\n                </div>\n            \n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col\">\n        <div widget class=\"card\">\n            <div class=\"card-header\">\n                <span>OTHER</span>\n                <div class=\"widget-controls\"> \n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                    <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\n                    <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>                          \n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\n                </div>        \n            </div>\n            <div class=\"card-block widget-body row mbm-20\"> \n\n                <div class=\"col-12 bottom-30 typography text-center\">                 \n                    <div class=\"d-inline-block\">\n                        <span class=\"align-baseline\">baseline</span>\n                        <span class=\"align-top\">top</span>\n                        <span class=\"align-middle\">middle</span>\n                        <span class=\"align-bottom\">bottom</span>\n                        <span class=\"align-text-top\">text-top</span>\n                        <span class=\"align-text-bottom\">text-bottom</span>\n                        <p class=\"desc\">Use class <code>align-baseline, align-top, align-middle, align-bottom, align-text-top, align-text-bottom</code></p>                      \n                    </div>                  \n                </div>\n\n                <div class=\"col-12 bottom-30 typography text-center\">\n\n                    <div class=\"d-inline-block\">\n                        <p class=\"font-weight-bold\">Bold text.</p>\n                        <p class=\"desc\"><code>.font-weight-bold</code></p> \n                    </div>\n\n                    <div class=\"d-inline-block\">\n                        <p class=\"font-weight-normal\">Normal weight text.</p>\n                        <p class=\"desc\"><code>.font-weight-normal</code></p> \n                    </div>\n\n                    <div class=\"d-inline-block\">\n                        <p class=\"font-italic\">Italicized text.</p>\n                        <p class=\"desc\"><code>.font-italic</code></p> \n                    </div>\n\n                    <div class=\"d-inline-block\">\n                        <p class=\"text-lowercase\">lowercased text.</p>\n                        <p class=\"desc\"><code>.text-lowercase</code></p> \n                    </div>\n\n                    <div class=\"d-inline-block\">\n                        <p class=\"text-uppercase\">uppercased text.</p>\n                        <p class=\"desc\"><code>.text-uppercase</code></p> \n                    </div>\n\n                    <div class=\"d-inline-block\">\n                        <p class=\"text-capitalize\">capitalized text.</p>\n                        <p class=\"desc\"><code>.text-capitalize</code></p> \n                    </div>\n\n                </div>\n\n                <div class=\"col-12 bottom-30 typography text-center\">\n                    <div class=\"d-inline-block\">\n                        <img class=\"rounded\" src=\"assets/img/app/sample.jpg\" alt=\"Rounded image\">\n                        <p class=\"desc\"><code>.rounded</code></p> \n                    </div>\n                    <div class=\"d-inline-block\">\n                        <img class=\"rounded-circle\" src=\"assets/img/app/sample.jpg\" alt=\"Rounded circle image\">\n                        <p class=\"desc\"><code>.rounded-circle</code></p> \n                    </div>\n                    <div class=\"d-inline-block\">\n                        <img class=\"rounded-top\" src=\"assets/img/app/sample.jpg\" alt=\"Rounded top image\">\n                        <p class=\"desc\"><code>.rounded-top</code></p> \n                    </div>\n                    <div class=\"d-inline-block\">\n                        <img class=\"rounded-right\" src=\"assets/img/app/sample.jpg\" alt=\"Rounded right image\">\n                        <p class=\"desc\"><code>.rounded-right</code></p> \n                    </div>\n                    <div class=\"d-inline-block\">\n                        <img class=\"rounded-bottom\" src=\"assets/img/app/sample.jpg\" alt=\"Rounded bottom image\">\n                        <p class=\"desc\"><code>.rounded-bottom</code></p> \n                    </div>\n                    <div class=\"d-inline-block\">\n                        <img class=\"rounded-left\" src=\"assets/img/app/sample.jpg\" alt=\"Rounded left image\">\n                        <p class=\"desc\"><code>.rounded-left</code></p> \n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=11.chunk.js.map