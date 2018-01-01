webpackJsonp([8,25],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngui_map__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_directives_directives_module__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__History_history_component__ = __webpack_require__(731);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'history', pathMatch: 'full' },
    { path: 'history', component: __WEBPACK_IMPORTED_MODULE_8__History_history_component__["a" /* HistoryComponent */], data: { breadcrumb: 'History' } }
];
var HistoryModule = (function () {
    function HistoryModule() {
    }
    return HistoryModule;
}());
HistoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_6__theme_directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBhsDCgh8QEdmm7YOkRulewQYadB_6iU50' })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__History_history_component__["a" /* HistoryComponent */]
        ]
    })
], HistoryModule);

//# sourceMappingURL=history.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncAction_1 = __webpack_require__(290);
var AsyncScheduler_1 = __webpack_require__(291);
/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return InternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return NgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return NgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return REQUIRED_VALIDATOR; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.1.3
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 * \@stable
 * @abstract
 */
var AbstractControlDirective = (function () {
    function AbstractControlDirective() {
    }
    /**
     * @abstract
     * @return {?}
     */
    AbstractControlDirective.prototype.control = function () { };
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.value : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.valid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.invalid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.pending : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.errors : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.pristine : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.dirty : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.touched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.untouched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.disabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
        /**
         * @return {?}
         */
        get: function () { return this.control ? this.control.enabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        /**
         * @return {?}
         */
        get: function () {
            return this.control ? this.control.statusChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        /**
         * @return {?}
         */
        get: function () {
            return this.control ? this.control.valueChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} value
     * @return {?}
     */
    AbstractControlDirective.prototype.reset = function (value) {
        if (value === void 0) { value = undefined; }
        if (this.control)
            this.control.reset(value);
    };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    };
    /**
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControlDirective.prototype.getError = function (errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    };
    return AbstractControlDirective;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A directive that contains multiple {\@link NgControl}s.
 *
 * Only used by the forms module.
 *
 * \@stable
 * @abstract
 */
var ControlContainer = (function (_super) {
    __extends(ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * Get the form to which this container belongs.
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * Get the path to this container.
         * @return {?}
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __assign = (undefined && undefined.__assign) || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
    }
    return t;
};
/**
 * @param {?} value
 * @return {?}
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * Providers for validators to be used for {\@link FormControl}s in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * \@stable
 */
var NG_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgValidators');
/**
 * Providers for asynchronous validators to be used for {\@link FormControl}s
 * in a form.
 *
 * Provide this using `multi: true` to add validators.
 *
 * See {\@link NG_VALIDATORS} for more details.
 *
 * \@stable
 */
var NG_ASYNC_VALIDATORS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgAsyncValidators');
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * Provides a set of validators used by form controls.
 *
 * A validator is a function that processes a {\@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 *
 * ### Example
 *
 * ```typescript
 * var loginControl = new FormControl("", Validators.required)
 * ```
 *
 * \@stable
 */
var Validators = (function () {
    function Validators() {
    }
    /**
     * Validator that requires controls to have a non-empty value.
     * @param {?} control
     * @return {?}
     */
    Validators.required = function (control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
    /**
     * Validator that requires control value to be true.
     * @param {?} control
     * @return {?}
     */
    Validators.requiredTrue = function (control) {
        return control.value === true ? null : { 'required': true };
    };
    /**
     * Validator that performs email validation.
     * @param {?} control
     * @return {?}
     */
    Validators.email = function (control) {
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * Validator that requires controls to have a value of a minimum length.
     * @param {?} minLength
     * @return {?}
     */
    Validators.minLength = function (minLength) {
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires controls to have a value of a maximum length.
     * @param {?} maxLength
     * @return {?}
     */
    Validators.maxLength = function (maxLength) {
        return function (control) {
            var /** @type {?} */ length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * Validator that requires a control to match a regex to its value.
     * @param {?} pattern
     * @return {?}
     */
    Validators.pattern = function (pattern) {
        if (!pattern)
            return Validators.nullValidator;
        var /** @type {?} */ regex;
        var /** @type {?} */ regexStr;
        if (typeof pattern === 'string') {
            regexStr = "^" + pattern + "$";
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var /** @type {?} */ value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        };
    };
    /**
     * No-op validator.
     * @param {?} c
     * @return {?}
     */
    Validators.nullValidator = function (c) { return null; };
    /**
     * @param {?} validators
     * @return {?}
     */
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = (validators.filter(isPresent));
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    /**
     * @param {?} validators
     * @return {?}
     */
    Validators.composeAsync = function (validators) {
        if (!validators)
            return null;
        var /** @type {?} */ presentValidators = (validators.filter(isPresent));
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var /** @type {?} */ observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_forkJoin__["forkJoin"])(observables), _mergeErrors);
        };
    };
    return Validators;
}());
/**
 * @param {?} o
 * @return {?}
 */
function isPresent(o) {
    return o != null;
}
/**
 * @param {?} r
 * @return {?}
 */
function toObservable(r) {
    var /** @type {?} */ obs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisPromise"])(r) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_fromPromise__["fromPromise"])(r) : r;
    if (!(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵisObservable"])(obs))) {
        throw new Error("Expected validator to return Promise or Observable.");
    }
    return obs;
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} control
 * @param {?} validators
 * @return {?}
 */
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
/**
 * @param {?} arrayOfErrors
 * @return {?}
 */
function _mergeErrors(arrayOfErrors) {
    var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
        return errors != null ? __assign({}, /** @type {?} */ ((res)), errors) : ((res));
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a {\@link ControlValueAccessor} for form controls.
 *
 * See {\@link DefaultValueAccessor} for how to implement one.
 * \@stable
 */
var NG_VALUE_ACCESSOR = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('NgValueAccessor');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CheckboxControlValueAccessor; }),
    multi: true,
};
/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 *  ### Example
 *  ```
 *  <input type="checkbox" name="rememberLogin" ngModel>
 *  ```
 *
 *  \@stable
 */
var CheckboxControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return CheckboxControlValueAccessor;
}());
CheckboxControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                providers: [CHECKBOX_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
CheckboxControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return DefaultValueAccessor; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 * @return {?}
 */
function _isAndroid() {
    var /** @type {?} */ userAgent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* ɵgetDOM */])() ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* ɵgetDOM */])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * Turn this mode on if you want form directives to buffer IME input until compositionend
 * \@experimental
 */
var COMPOSITION_BUFFER_MODE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('CompositionEventMode');
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" name="searchQuery" ngModel>
 *  ```
 *
 *  \@stable
 */
var DefaultValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _compositionMode
     */
    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype.writeValue = function (value) {
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    };
    /**
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
    /**
     * @param {?} value
     * @return {?}
     */
    DefaultValueAccessor.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    };
    return DefaultValueAccessor;
}());
DefaultValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                // TODO: vsavkin replace the above selector with the one below it once
                // https://github.com/angular/angular/issues/3011 is implemented
                // selector: '[ngModel],[formControl],[formControlName]',
                host: {
                    '(input)': '_handleInput($event.target.value)',
                    '(blur)': 'onTouched()',
                    '(compositionstart)': '_compositionStart()',
                    '(compositionend)': '_compositionEnd($event.target.value)'
                },
                providers: [DEFAULT_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
DefaultValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [COMPOSITION_BUFFER_MODE,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeValidator(validator) {
    if (((validator)).validate) {
        return function (c) { return ((validator)).validate(c); };
    }
    else {
        return (validator);
    }
}
/**
 * @param {?} validator
 * @return {?}
 */
function normalizeAsyncValidator(validator) {
    if (((validator)).validate) {
        return function (c) { return ((validator)).validate(c); };
    }
    else {
        return (validator);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NumberValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a number value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="number" [(ngModel)]="age">
 *  ```
 */
var NumberValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function NumberValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NumberValueAccessor.prototype.writeValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var /** @type {?} */ normalizedValue = value == null ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return NumberValueAccessor;
}());
NumberValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [NUMBER_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
NumberValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * A base class that all control directive extend.
 * It binds a {\@link FormControl} object to a DOM element.
 *
 * Used internally by Angular forms.
 *
 * \@stable
 * @abstract
 */
var NgControl = (function (_super) {
    __extends(NgControl, _super);
    function NgControl() {
        var _this = _super.apply(this, arguments) || this;
        /**
         * \@internal
         */
        _this._parent = null;
        _this.name = null;
        _this.valueAccessor = null;
        /**
         * \@internal
         */
        _this._rawValidators = [];
        /**
         * \@internal
         */
        _this._rawAsyncValidators = [];
        return _this;
    }
    Object.defineProperty(NgControl.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControl.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () { return (unimplemented()); },
        enumerable: true,
        configurable: true
    });
    /**
     * @abstract
     * @param {?} newValue
     * @return {?}
     */
    NgControl.prototype.viewToModelUpdate = function (newValue) { };
    return NgControl;
}(AbstractControlDirective));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RadioControlValueAccessor; }),
    multi: true
};
/**
 * Internal class used by Angular to uncheck radio buttons with the matching name.
 */
var RadioControlRegistry = (function () {
    function RadioControlRegistry() {
        this._accessors = [];
    }
    /**
     * @param {?} control
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.add = function (control, accessor) {
        this._accessors.push([control, accessor]);
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.remove = function (accessor) {
        for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    /**
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype.select = function (accessor) {
        var _this = this;
        this._accessors.forEach(function (c) {
            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    };
    /**
     * @param {?} controlPair
     * @param {?} accessor
     * @return {?}
     */
    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    };
    return RadioControlRegistry;
}());
RadioControlRegistry.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
RadioControlRegistry.ctorParameters = function () { return []; };
/**
 * \@whatItDoes Writes radio control values and listens to radio control changes.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any radio control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use radio buttons with form directives
 *
 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
 * in the same group have the same `name` attribute.  Radio buttons with different `name`
 * attributes do not affect each other.
 *
 * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
 *
 * When using radio buttons in a reactive form, radio buttons in the same group should have the
 * same `formControlName`. You can also add a `name` attribute, but it's optional.
 *
 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  \@stable
 */
var RadioControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _registry
     * @param {?} _injector
     */
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnInit = function () {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.writeValue = function (value) {
        this._state = value === this.value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function () {
            fn(_this.value);
            _this._registry.select(_this);
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    };
    /**
     * @return {?}
     */
    RadioControlValueAccessor.prototype._throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    };
    return RadioControlValueAccessor;
}());
RadioControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                providers: [RADIO_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
RadioControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: RadioControlRegistry, },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
]; };
RadioControlValueAccessor.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'formControlName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RangeValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a range value and listening to changes that is used by the
 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="range" [(ngModel)]="age" >
 *  ```
 */
var RangeValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function RangeValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    RangeValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    return RangeValueAccessor;
}());
RangeValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                },
                providers: [RANGE_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
RangeValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString(id, value) {
    if (id == null)
        return "" + value;
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * \@whatItDoes Writes values and listens to changes on a select element.
 *
 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
 * to keep the view synced with the {\@link FormControl} model.
 *
 * \@howToUse
 *
 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
 * value accessor will be active on any select control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use select controls with form directives
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * If your option values are simple strings, you can bind to the normal `value` property
 * on the option.  If your option values happen to be objects (and you'd like to save the
 * selection in your form as an object), use `ngValue` instead:
 *
 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * In reactive forms, you'll also want to add your form directive (`formControlName` or
 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
 * choice of binding to the  `value` or `ngValue` property on the select's options.
 *
 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Caveat: Option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * Note: We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var SelectControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
        var /** @type {?} */ id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setElementProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        var /** @type {?} */ valueString = _buildValueString(id, value);
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (valueString) {
            _this.value = valueString;
            fn(_this._getOptionValue(valueString));
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * \@internal
     * @return {?}
     */
    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionId = function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(this._optionMap.get(id), value))
                return id;
        }
        return null;
    };
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var /** @type {?} */ id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    };
    return SelectControlValueAccessor;
}());
SelectControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                providers: [SELECT_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SelectControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
SelectControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * \@howToUse
 *
 * See docs for {\@link SelectControlValueAccessor} for usage examples.
 *
 * \@stable
 */
var NgSelectOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectOption.prototype, "value", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._setElementValue(value);
            if (this._select)
                this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectOption.prototype._setElementValue = function (value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * @return {?}
     */
    NgSelectOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    return NgSelectOption;
}());
NgSelectOption.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'option' },] },
];
/**
 * @nocollapse
 */
NgSelectOption.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: SelectControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
NgSelectOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngValue',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return SelectMultipleControlValueAccessor; }),
    multi: true
};
/**
 * @param {?} id
 * @param {?} value
 * @return {?}
 */
function _buildValueString$1(id, value) {
    if (id == null)
        return "" + value;
    if (typeof value === 'string')
        value = "'" + value + "'";
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
/**
 * @param {?} valueString
 * @return {?}
 */
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 *
 *  ### Caveat: Options selection
 *
 * Angular uses object identity to select options. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects options by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * \@stable
 */
var SelectMultipleControlValueAccessor = (function () {
    /**
     * @param {?} _renderer
     * @param {?} _elementRef
     */
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * \@internal
         */
        this._optionMap = new Map();
        /**
         * \@internal
         */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
        /**
         * @param {?} fn
         * @return {?}
         */
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
        var _this = this;
        this.value = value;
        var /** @type {?} */ optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
        }
        else {
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (_) {
            var /** @type {?} */ selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                var /** @type {?} */ options = _.selectedOptions;
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    var /** @type {?} */ val = _this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            else {
                var /** @type {?} */ options = (_.options);
                for (var /** @type {?} */ i = 0; i < options.length; i++) {
                    var /** @type {?} */ opt = options.item(i);
                    if (opt.selected) {
                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            _this.value = selected;
            fn(selected);
        };
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
        var /** @type {?} */ id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
            var id = _a[_i];
            if (this._compareWith(/** @type {?} */ ((this._optionMap.get(id)))._value, value))
                return id;
        }
        return null;
    };
    /**
     * \@internal
     * @param {?} valueString
     * @return {?}
     */
    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var /** @type {?} */ id = _extractId$1(valueString);
        return this._optionMap.has(id) ? ((this._optionMap.get(id)))._value : valueString;
    };
    return SelectMultipleControlValueAccessor;
}());
SelectMultipleControlValueAccessor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
            },] },
];
/**
 * @nocollapse
 */
SelectMultipleControlValueAccessor.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
SelectMultipleControlValueAccessor.propDecorators = {
    'compareWith': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * ### Example
 *
 * ```
 * <select multiple name="city" ngModel>
 *   <option *ngFor="let c of cities" [value]="c"></option>
 * </select>
 * ```
 */
var NgSelectMultipleOption = (function () {
    /**
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _select
     */
    function NgSelectMultipleOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select == null)
                return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
            else {
                this._setElementValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setElementValue = function (value) {
        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
    };
    /**
     * \@internal
     * @param {?} selected
     * @return {?}
     */
    NgSelectMultipleOption.prototype._setSelected = function (selected) {
        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
    };
    /**
     * @return {?}
     */
    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    return NgSelectMultipleOption;
}());
NgSelectMultipleOption.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'option' },] },
];
/**
 * @nocollapse
 */
NgSelectMultipleOption.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: SelectMultipleControlValueAccessor, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
]; };
NgSelectMultipleOption.propDecorators = {
    'ngValue': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngValue',] },],
    'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['value',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
function controlPath(name, parent) {
    return ((parent.path)).concat([name]);
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([/** @type {?} */ ((control.validator)), dir.validator]);
    control.asyncValidator = Validators.composeAsync([/** @type {?} */ ((control.asyncValidator)), dir.asyncValidator]); /** @type {?} */
    ((dir.valueAccessor)).writeValue(control.value); /** @type {?} */
    ((
    // view -> model
    dir.valueAccessor)).registerOnChange(function (newValue) {
        dir.viewToModelUpdate(newValue);
        control.markAsDirty();
        control.setValue(newValue, { emitModelToViewChange: false });
    }); /** @type {?} */
    ((
    // touched
    dir.valueAccessor)).registerOnTouched(function () { return control.markAsTouched(); });
    control.registerOnChange(function (newValue, emitModelEvent) {
        ((
        // control -> view
        dir.valueAccessor)).writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    });
    if (((dir.valueAccessor)).setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) { /** @type {?} */ ((((dir.valueAccessor)).setDisabledState))(isDisabled); });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if (((validator)).registerOnValidatorChange)
            ((((validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (((validator)).registerOnValidatorChange)
            ((((validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
    });
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function cleanUpControl(control, dir) {
    ((dir.valueAccessor)).registerOnChange(function () { return _noControlError(dir); }); /** @type {?} */
    ((dir.valueAccessor)).registerOnTouched(function () { return _noControlError(dir); });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control)
        control._clearChangeFns();
}
/**
 * @param {?} control
 * @param {?} dir
 * @return {?}
 */
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
/**
 * @param {?} dir
 * @return {?}
 */
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
/**
 * @param {?} dir
 * @param {?} message
 * @return {?}
 */
function _throwError(dir, message) {
    var /** @type {?} */ messageEnd;
    if (((dir.path)).length > 1) {
        messageEnd = "path: '" + ((dir.path)).join(' -> ') + "'";
    }
    else if (((dir.path))[0]) {
        messageEnd = "name: '" + dir.path + "'";
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + " " + messageEnd);
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
/**
 * @param {?} validators
 * @return {?}
 */
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
/**
 * @param {?} changes
 * @param {?} viewModel
 * @return {?}
 */
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    var /** @type {?} */ change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
var BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
/**
 * @param {?} valueAccessor
 * @return {?}
 */
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
}
/**
 * @param {?} dir
 * @param {?} valueAccessors
 * @return {?}
 */
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    var /** @type {?} */ defaultAccessor = undefined;
    var /** @type {?} */ builtinAccessor = undefined;
    var /** @type {?} */ customAccessor = undefined;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
 *
 * \@stable
 */
var AbstractFormGroupDirective = (function (_super) {
    __extends(AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnInit = function () {
        this._checkParentType(); /** @type {?} */
        ((this.formDirective)).addFormGroup(this);
    };
    /**
     * @return {?}
     */
    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * Get the {\@link FormGroup} backing this binding.
         * @return {?}
         */
        get: function () { return ((this.formDirective)).getFormGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * Get the path to this control group.
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * Get the {\@link Form} to which this group belongs.
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @return {?}
     */
    AbstractFormGroupDirective.prototype._checkParentType = function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AbstractControlStatus = (function () {
    /**
     * @param {?} cd
     */
    function AbstractControlStatus(cd) {
        this._cd = cd;
    }
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.touched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.valid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
        /**
         * @return {?}
         */
        get: function () { return this._cd.control ? this._cd.control.pending : false; },
        enumerable: true,
        configurable: true
    });
    return AbstractControlStatus;
}());
var ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatus = (function (_super) {
    __extends(NgControlStatus, _super);
    /**
     * @param {?} cd
     */
    function NgControlStatus(cd) {
        return _super.call(this, cd) || this;
    }
    return NgControlStatus;
}(AbstractControlStatus));
NgControlStatus.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
];
/**
 * @nocollapse
 */
NgControlStatus.ctorParameters = function () { return [
    { type: NgControl, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
/**
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 * \@stable
 */
var NgControlStatusGroup = (function (_super) {
    __extends(NgControlStatusGroup, _super);
    /**
     * @param {?} cd
     */
    function NgControlStatusGroup(cd) {
        return _super.call(this, cd) || this;
    }
    return NgControlStatusGroup;
}(AbstractControlStatus));
NgControlStatusGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                host: ngControlStatusHost
            },] },
];
/**
 * @nocollapse
 */
NgControlStatusGroup.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
 */
var VALID = 'VALID';
/**
 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
 */
var INVALID = 'INVALID';
/**
 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
 * errors are not yet available for the input value.
 */
var PENDING = 'PENDING';
/**
 * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
 * calculations of validity or value.
 */
var DISABLED = 'DISABLED';
/**
 * @param {?} control
 * @param {?} path
 * @param {?} delimiter
 * @return {?}
 */
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = ((path)).split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return ((path)).reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls[name] || null;
        }
        if (v instanceof FormArray) {
            return v.at(/** @type {?} */ (name)) || null;
        }
        return null;
    }, control);
}
/**
 * @param {?=} validator
 * @return {?}
 */
function coerceToValidator(validator) {
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
/**
 * @param {?=} asyncValidator
 * @return {?}
 */
function coerceToAsyncValidator(asyncValidator) {
    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) :
        asyncValidator || null;
}
/**
 * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
 * {\@link FormArray}.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * \@stable
 * @abstract
 */
var AbstractControl = (function () {
    /**
     * @param {?} validator
     * @param {?} asyncValidator
     */
    function AbstractControl(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /**
         * \@internal
         */
        this._onCollectionChange = function () { };
        this._pristine = true;
        this._touched = false;
        /**
         * \@internal
         */
        this._onDisabledChange = [];
    }
    Object.defineProperty(AbstractControl.prototype, "value", {
        /**
         * The value of the control.
         * @return {?}
         */
        get: function () { return this._value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         * @return {?}
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "status", {
        /**
         * The validation status of the control. There are four possible
         * validation statuses:
         *
         * * **VALID**:  control has passed all validation checks
         * * **INVALID**: control has failed at least one validation check
         * * **PENDING**: control is in the midst of conducting a validation check
         * * **DISABLED**: control is exempt from validation checks
         *
         * These statuses are mutually exclusive, so a control cannot be
         * both valid AND invalid or invalid AND disabled.
         * @return {?}
         */
        get: function () { return this._status; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         * @return {?}
         */
        get: function () { return this._status === VALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         * @return {?}
         */
        get: function () { return this._status === INVALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         * @return {?}
         */
        get: function () { return this._status == PENDING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         * @return {?}
         */
        get: function () { return this._status === DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         * @return {?}
         */
        get: function () { return this._status !== DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "errors", {
        /**
         * Returns any errors generated by failing validation. If there
         * are no errors, it will return null.
         * @return {?}
         */
        get: function () { return this._errors; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pristine", {
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        get: function () { return this._pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         * @return {?}
         */
        get: function () { return !this.pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "touched", {
        /**
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         * @return {?}
         */
        get: function () { return this._touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "untouched", {
        /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         * @return {?}
         */
        get: function () { return !this._touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
        /**
         * Emits an event every time the value of the control changes, in
         * the UI or programmatically.
         * @return {?}
         */
        get: function () { return this._valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
        /**
         * Emits an event every time the validation status of the control
         * is re-calculated.
         * @return {?}
         */
        get: function () { return this._statusChanges; },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this will overwrite any existing sync validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setValidators = function (newValidator) {
        this.validator = coerceToValidator(newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * will overwrite any existing async validators.
     * @param {?} newValidator
     * @return {?}
     */
    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    };
    /**
     * Empties out the sync validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
    /**
     * Empties out the async validator list.
     * @return {?}
     */
    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
    /**
     * Marks the control as `touched`.
     *
     * This will also mark all direct ancestors as `touched` to maintain
     * the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsTouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = true;
        if (this._parent && !onlySelf) {
            this._parent.markAsTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, it will also mark all children as `untouched`
     * to maintain the model, and re-calculate the `touched` status of all parent
     * controls.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsUntouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = false;
        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
        if (this._parent && !onlySelf) {
            this._parent._updateTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `dirty`.
     *
     * This will also mark all direct ancestors as `dirty` to maintain
     * the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsDirty = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = false;
        if (this._parent && !onlySelf) {
            this._parent.markAsDirty({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, it will also mark all children as `pristine`
     * to maintain the model, and re-calculate the `pristine` status of all parent
     * controls.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsPristine = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = true;
        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
        if (this._parent && !onlySelf) {
            this._parent._updatePristine({ onlySelf: onlySelf });
        }
    };
    /**
     * Marks the control as `pending`.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.markAsPending = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._status = PENDING;
        if (this._parent && !onlySelf) {
            this._parent.markAsPending({ onlySelf: onlySelf });
        }
    };
    /**
     * Disables the control. This means the control will be exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children will be disabled to maintain the model.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.disable = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._status = DISABLED;
        this._errors = null;
        this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
        this._updateValue();
        if (emitEvent !== false) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        this._updateAncestors(!!onlySelf);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
    };
    /**
     * Enables the control. This means the control will be included in validation checks and
     * the aggregate value of its parent. Its status is re-calculated based on its value and
     * its validators.
     *
     * If the control has children, all children will be enabled.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.enable = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._status = VALID;
        this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
        this._updateAncestors(!!onlySelf);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
    };
    /**
     * @param {?} onlySelf
     * @return {?}
     */
    AbstractControl.prototype._updateAncestors = function (onlySelf) {
        if (this._parent && !onlySelf) {
            this._parent.updateValueAndValidity();
            this._parent._updatePristine();
            this._parent._updateTouched();
        }
    };
    /**
     * @param {?} parent
     * @return {?}
     */
    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
    /**
     * Sets the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.setValue = function (value, options) { };
    /**
     * Patches the value of the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.patchValue = function (value, options) { };
    /**
     * Resets the control. Abstract method (implemented in sub-classes).
     * @abstract
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    AbstractControl.prototype.reset = function (value, options) { };
    /**
     * Re-calculates the value and validation status of the control.
     *
     * By default, it will also update the value and validity of its ancestors.
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype.updateValueAndValidity = function (_a) {
        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this._errors = this._runValidator();
            this._status = this._calculateStatus();
            if (this._status === VALID || this._status === PENDING) {
                this._runAsyncValidator(emitEvent);
            }
        }
        if (emitEvent !== false) {
            this._valueChanges.emit(this._value);
            this._statusChanges.emit(this._status);
        }
        if (this._parent && !onlySelf) {
            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
        }
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updateTreeValidity = function (_a) {
        var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
    /**
     * @return {?}
     */
    AbstractControl.prototype._runValidator = function () {
        return this.validator ? this.validator(this) : null;
    };
    /**
     * @param {?=} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
        var _this = this;
        if (this.asyncValidator) {
            this._status = PENDING;
            var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
        }
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._cancelExistingSubscription = function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * Sets errors on a form control.
     *
     * This is used when validations are run manually by the user, rather than automatically.
     *
     * Calling `setErrors` will also update the validity of the parent control.
     *
     * ### Example
     *
     * ```
     * const login = new FormControl("someLogin");
     * login.setErrors({
     *   "notUnique": true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({"notUnique": true});
     *
     * login.setValue("someOtherLogin");
     *
     * expect(login.valid).toEqual(true);
     * ```
     * @param {?} errors
     * @param {?=} __1
     * @return {?}
     */
    AbstractControl.prototype.setErrors = function (errors, _a) {
        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
        this._errors = errors;
        this._updateControlsErrors(emitEvent !== false);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * Paths can be passed in as an array or a string delimited by a dot.
     *
     * To get a control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     * @param {?} path
     * @return {?}
     */
    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.getError = function (errorCode, path) {
        var /** @type {?} */ control = path ? this.get(path) : this;
        return control && control._errors ? control._errors[errorCode] : null;
    };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     * @param {?} errorCode
     * @param {?=} path
     * @return {?}
     */
    AbstractControl.prototype.hasError = function (errorCode, path) { return !!this.getError(errorCode, path); };
    Object.defineProperty(AbstractControl.prototype, "root", {
        /**
         * Retrieves the top-level ancestor of this control.
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} emitEvent
     * @return {?}
     */
    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
        this._status = this._calculateStatus();
        if (emitEvent) {
            this._statusChanges.emit(this._status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._initObservables = function () {
        this._valueChanges = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._statusChanges = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    };
    /**
     * @return {?}
     */
    AbstractControl.prototype._calculateStatus = function () {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this._errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @abstract
     * @param {?} cb
     * @return {?}
     */
    AbstractControl.prototype._forEachChild = function (cb) { };
    /**
     * \@internal
     * @abstract
     * @param {?} condition
     * @return {?}
     */
    AbstractControl.prototype._anyControls = function (condition) { };
    /**
     * \@internal
     * @abstract
     * @return {?}
     */
    AbstractControl.prototype._allControlsDisabled = function () { };
    /**
     * \@internal
     * @param {?} status
     * @return {?}
     */
    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
        return this._anyControls(function (control) { return control.status === status; });
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsDirty = function () {
        return this._anyControls(function (control) { return control.dirty; });
    };
    /**
     * \@internal
     * @return {?}
     */
    AbstractControl.prototype._anyControlsTouched = function () {
        return this._anyControls(function (control) { return control.touched; });
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updatePristine = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._pristine = !this._anyControlsDirty();
        if (this._parent && !onlySelf) {
            this._parent._updatePristine({ onlySelf: onlySelf });
        }
    };
    /**
     * \@internal
     * @param {?=} __0
     * @return {?}
     */
    AbstractControl.prototype._updateTouched = function (_a) {
        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
        this._touched = this._anyControlsTouched();
        if (this._parent && !onlySelf) {
            this._parent._updateTouched({ onlySelf: onlySelf });
        }
    };
    /**
     * \@internal
     * @param {?} formState
     * @return {?}
     */
    AbstractControl.prototype._isBoxedValue = function (formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    };
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
    return AbstractControl;
}());
/**
 * \@whatItDoes Tracks the value and validation status of an individual form control.
 *
 * It is one of the three fundamental building blocks of Angular forms, along with
 * {\@link FormGroup} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormControl}, you can pass in an initial value as the
 * first argument. Example:
 *
 * ```ts
 * const ctrl = new FormControl('some value');
 * console.log(ctrl.value);     // 'some value'
 * ```
 *
 * You can also initialize the control with a form state object on instantiation,
 * which includes both the value and whether or not the control is disabled.
 * You can't use the value key without the disabled key; both are required
 * to use this way of initialization.
 *
 * ```ts
 * const ctrl = new FormControl({value: 'n/a', disabled: true});
 * console.log(ctrl.value);     // 'n/a'
 * console.log(ctrl.status);   // 'DISABLED'
 * ```
 *
 * To include a sync validator (or an array of sync validators) with the control,
 * pass it in as the second argument. Async validators are also supported, but
 * have to be passed in separately as the third arg.
 *
 * ```ts
 * const ctrl = new FormControl('', Validators.required);
 * console.log(ctrl.value);     // ''
 * console.log(ctrl.status);   // 'INVALID'
 * ```
 *
 * See its superclass, {\@link AbstractControl}, for more properties and methods.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormControl = (function (_super) {
    __extends(FormControl, _super);
    /**
     * @param {?=} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormControl(formState, validator, asyncValidator) {
        if (formState === void 0) { formState = null; }
        var _this = _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)) || this;
        /**
         * \@internal
         */
        _this._onChange = [];
        _this._applyFormState(formState);
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._initObservables();
        return _this;
    }
    /**
     * Set the value of the form control to `value`.
     *
     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
     * and not its parent component. This defaults to false.
     *
     * If `emitEvent` is `true`, this
     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
     * to true (as it falls through to `updateValueAndValidity`).
     *
     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
     * specified.
     *
     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._value = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, options.emitViewToModelChange !== false); });
        }
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {\@link FormControl#setValue} at this level.
     * It exists for symmetry with {\@link FormGroup#patchValue} on `FormGroups` and `FormArrays`,
     * where it does behave differently.
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.patchValue = function (value, options) {
        if (options === void 0) { options = {}; }
        this.setValue(value, options);
    };
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * You can also reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * Ex:
     *
     * ```ts
     * this.control.reset('Nancy');
     *
     * console.log(this.control.value);  // 'Nancy'
     * ```
     *
     * OR
     *
     * ```
     * this.control.reset({value: 'Nancy', disabled: true});
     *
     * console.log(this.control.value);  // 'Nancy'
     * console.log(this.control.status);  // 'DISABLED'
     * ```
     * @param {?=} formState
     * @param {?=} options
     * @return {?}
     */
    FormControl.prototype.reset = function (formState, options) {
        if (formState === void 0) { formState = null; }
        if (options === void 0) { options = {}; }
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this._value, options);
    };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._updateValue = function () { };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormControl.prototype._anyControls = function (condition) { return false; };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
    /**
     * Register a listener for change events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
    /**
     * \@internal
     * @return {?}
     */
    FormControl.prototype._clearChangeFns = function () {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = function () { };
    };
    /**
     * Register a listener for disabled events.
     * @param {?} fn
     * @return {?}
     */
    FormControl.prototype.registerOnDisabledChange = function (fn) {
        this._onDisabledChange.push(fn);
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormControl.prototype._forEachChild = function (cb) { };
    /**
     * @param {?} formState
     * @return {?}
     */
    FormControl.prototype._applyFormState = function (formState) {
        if (this._isBoxedValue(formState)) {
            this._value = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this._value = formState;
        }
    };
    return FormControl;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
 * instances.
 *
 * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
 * with each control name as the key.  It calculates its status by reducing the statuses
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormArray}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
 * argument. The key for each child will be the name under which it is registered.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * You can also include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Example
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormGroup = (function (_super) {
    __extends(FormGroup, _super);
    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormGroup(controls, validator, asyncValidator) {
        var _this = _super.call(this, validator || null, asyncValidator || null) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update value or validity of the control, so for
     * most cases you'll want to use {\@link FormGroup#addControl} instead.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.registerControl = function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    };
    /**
     * Add a control to this group.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.addControl = function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove a control from this group.
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype.removeControl = function (name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     * @param {?} name
     * @param {?} control
     * @return {?}
     */
    FormGroup.prototype.setControl = function (name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * It will return false for disabled controls. If you'd like to check for
     * existence in the group only, use {\@link AbstractControl#get} instead.
     * @param {?} controlName
     * @return {?}
     */
    FormGroup.prototype.contains = function (controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    };
    /**
     *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
     *  the structure of the group, with control names as keys.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.setValue({first: 'Nancy', last: 'Drew'});
     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     *
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormGroup.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(function (name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     *  Patches the value of the {\@link FormGroup}. It accepts an object with control
     *  names as keys, and will do its best to match the values to the correct controls
     *  in the group.
     *
     *  It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.patchValue({first: 'Nancy'});
     *  console.log(form.value);   // {first: 'Nancy', last: null}
     *
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormGroup.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        Object.keys(value).forEach(function (name) {
            if (_this.controls[name]) {
                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the {\@link FormGroup}. This means by default:
     *
     * * The group and all descendants are marked `pristine`
     * * The group and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * can be a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * ### Example
     *
     * ```ts
     * this.form.reset({first: 'name', last: 'last name'});
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * - OR -
     *
     * ```
     * this.form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    FormGroup.prototype.reset = function (value, options) {
        if (value === void 0) { value = {}; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, name) {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the {\@link FormGroup}, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the group.
     * @return {?}
     */
    FormGroup.prototype.getRawValue = function () {
        return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : ((control)).getRawValue();
            return acc;
        });
    };
    /**
     * \@internal
     * @param {?} name
     * @return {?}
     */
    FormGroup.prototype._throwIfControlMissing = function (name) {
        if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormGroup.prototype._forEachChild = function (cb) {
        var _this = this;
        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) {
            control.setParent(_this);
            control._registerOnCollectionChange(_this._onCollectionChange);
        });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormGroup.prototype._anyControls = function (condition) {
        var _this = this;
        var /** @type {?} */ res = false;
        this._forEachChild(function (control, name) {
            res = res || (_this.contains(name) && condition(control));
        });
        return res;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._reduceValue = function () {
        var _this = this;
        return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    };
    /**
     * \@internal
     * @param {?} initValue
     * @param {?} fn
     * @return {?}
     */
    FormGroup.prototype._reduceChildren = function (initValue, fn) {
        var /** @type {?} */ res = initValue;
        this._forEachChild(function (control, name) { res = fn(res, control, name); });
        return res;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroup.prototype._allControlsDisabled = function () {
        for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
            var controlName = _a[_i];
            if (this.controls[controlName].enabled) {
                return false;
            }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormGroup.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '" + name + "'.");
            }
        });
    };
    return FormGroup;
}(AbstractControl));
/**
 * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
 * {\@link FormGroup} or {\@link FormArray} instances.
 *
 * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
 * It calculates its status by reducing the statuses of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with {\@link FormControl} and {\@link FormGroup}.
 *
 * \@howToUse
 *
 * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
 * argument.
 *
 * ### Example
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * You can also include array-level validators as the second arg, or array-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ### Adding or removing controls
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that will result in strange and unexpected behavior such
 * as broken change detection.
 *
 * * **npm package**: `\@angular/forms`
 *
 * \@stable
 */
var FormArray = (function (_super) {
    __extends(FormArray, _super);
    /**
     * @param {?} controls
     * @param {?=} validator
     * @param {?=} asyncValidator
     */
    function FormArray(controls, validator, asyncValidator) {
        var _this = _super.call(this, validator || null, asyncValidator || null) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.at = function (index) { return this.controls[index]; };
    /**
     * Insert a new {\@link AbstractControl} at the end of the array.
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.push = function (control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Insert a new {\@link AbstractControl} at the given `index` in the array.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.insert = function (index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove the control at the given `index` in the array.
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype.removeAt = function (index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     * @param {?} index
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype.setControl = function (index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         * @return {?}
         */
        get: function () { return this.controls.length; },
        enumerable: true,
        configurable: true
    });
    /**
     *  Sets the value of the {\@link FormArray}. It accepts an array that matches
     *  the structure of the control.
     *
     * This method performs strict checks, so it will throw an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.setValue(['Nancy', 'Drew']);
     *  console.log(arr.value);   // ['Nancy', 'Drew']
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormArray.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
     *  structure of the control, and will do its best to match the values to the correct
     *  controls in the group.
     *
     *  It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     *  ### Example
     *
     *  ```
     *  const arr = new FormArray([
     *     new FormControl(),
     *     new FormControl()
     *  ]);
     *  console.log(arr.value);   // [null, null]
     *
     *  arr.patchValue(['Nancy']);
     *  console.log(arr.value);   // ['Nancy', null]
     *  ```
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    FormArray.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        value.forEach(function (newValue, index) {
            if (_this.at(index)) {
                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the {\@link FormArray}. This means by default:
     *
     * * The array and all descendants are marked `pristine`
     * * The array and all descendants are marked `untouched`
     * * The value of all descendants will be null or null maps
     *
     * You can also reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state can be a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Example
     *
     * ```ts
     * this.arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * - OR -
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     * @param {?=} value
     * @param {?=} options
     * @return {?}
     */
    FormArray.prototype.reset = function (value, options) {
        if (value === void 0) { value = []; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, index) {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * If you'd like to include all values regardless of disabled status, use this method.
     * Otherwise, the `value` property is the best way to get the value of the array.
     * @return {?}
     */
    FormArray.prototype.getRawValue = function () {
        return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : ((control)).getRawValue();
        });
    };
    /**
     * \@internal
     * @param {?} index
     * @return {?}
     */
    FormArray.prototype._throwIfControlMissing = function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /**
     * \@internal
     * @param {?} cb
     * @return {?}
     */
    FormArray.prototype._forEachChild = function (cb) {
        this.controls.forEach(function (control, index) { cb(control, index); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._updateValue = function () {
        var _this = this;
        this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
            .map(function (control) { return control.value; });
    };
    /**
     * \@internal
     * @param {?} condition
     * @return {?}
     */
    FormArray.prototype._anyControls = function (condition) {
        return this.controls.some(function (control) { return control.enabled && condition(control); });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) { return _this._registerControl(control); });
    };
    /**
     * \@internal
     * @param {?} value
     * @return {?}
     */
    FormArray.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: " + i + ".");
            }
        });
    };
    /**
     * \@internal
     * @return {?}
     */
    FormArray.prototype._allControlsDisabled = function () {
        for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
            var control = _a[_i];
            if (control.enabled)
                return false;
        }
        return this.controls.length > 0 || this.disabled;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormArray.prototype._registerControl = function (control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    };
    return FormArray;
}(AbstractControl));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgForm; })
};
var resolvedPromise = Promise.resolve(null);
/**
 * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * \@howToUse
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You can export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
 * will give you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, you'll want to use {\@link NgModel} with a
 * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
 * sub-groups within the form.
 *
 * You can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgForm = (function (_super) {
    __extends(NgForm, _super);
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgForm(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._submitted = false;
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this;
    }
    Object.defineProperty(NgForm.prototype, "submitted", {
        /**
         * @return {?}
         */
        get: function () { return this._submitted; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "controls", {
        /**
         * @return {?}
         */
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            dir._control = (container.registerControl(dir.name, dir.control));
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.addFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            var /** @type {?} */ group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.removeFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.updateModel = function (dir, value) {
        var _this = this;
        resolvedPromise.then(function () {
            var /** @type {?} */ ctrl = (_this.form.get(/** @type {?} */ ((dir.path))));
            ctrl.setValue(value);
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgForm.prototype.onSubmit = function ($event) {
        this._submitted = true;
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    NgForm.prototype.onReset = function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    NgForm.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this._submitted = false;
    };
    /**
     * \@internal
     * @param {?} path
     * @return {?}
     */
    NgForm.prototype._findContainer = function (path) {
        path.pop();
        return path.length ? (this.form.get(path)) : this.form;
    };
    return NgForm;
}(ControlContainer));
NgForm.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                providers: [formDirectiveProvider],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                outputs: ['ngSubmit'],
                exportAs: 'ngForm'
            },] },
];
/**
 * @nocollapse
 */
NgForm.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FormErrorExamples = {
    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TemplateDrivenErrors = (function () {
    function TemplateDrivenErrors() {
    }
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelParentException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.formGroupNameException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.missingNameException = function () {
        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    };
    /**
     * @return {?}
     */
    TemplateDrivenErrors.modelGroupParentException = function () {
        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    return TemplateDrivenErrors;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var modelGroupProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgModelGroup; })
};
/**
 * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used as a child of {\@link NgForm} (or in other words,
 * within `<form>` tags).
 *
 * Use this directive if you'd like to create a sub-group within a form. This can
 * come in handy if you want to validate a sub-group of your form separately from
 * the rest of your form, or if some values in your domain model make more sense to
 * consume together in a nested object.
 *
 * Pass in the name you'd like this sub-group to have and it will become the key
 * for the sub-group in the form's full value. You can also export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 * \@stable
 */
var NgModelGroup = (function (_super) {
    __extends(NgModelGroup, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function NgModelGroup(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * \@internal
     * @return {?}
     */
    NgModelGroup.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    };
    return NgModelGroup;
}(AbstractFormGroupDirective));
NgModelGroup.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
];
/**
 * @nocollapse
 */
NgModelGroup.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
NgModelGroup.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModelGroup',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgModel; })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var resolvedPromise$1 = Promise.resolve(null);
/**
 * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
 * to a form control element.
 *
 * The {\@link FormControl} instance will track the value, user interaction, and
 * validation status of the control and keep the view synced with the model. If used
 * within a parent form, the directive will also register itself with the form as a child
 * control.
 *
 * \@howToUse
 *
 * This directive can be used by itself or as part of a larger form. All you need is the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional {\@link Input}. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
 * the domain model in your class as well.
 *
 * If you wish to inspect the properties of the associated {\@link FormControl} (like
 * validity state), you can also export the directive into a local template variable using
 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
 * will fall through to the control anyway, so you can access them directly. You can see a
 * full list of properties directly available in {\@link AbstractControlDirective}.
 *
 * The following is an example of a simple standalone control using `ngModel`:
 *
 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * It's worth noting that in the context of a parent form, you often can skip one-way or
 * two-way binding because the parent form will sync the value for you. You can access
 * its properties by exporting it into a local template variable using `ngForm` (ex:
 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * Take a look at an example of using `ngModel` within a form:
 *
 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * To see `ngModel` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: `FormsModule`
 *
 *  \@stable
 */
var NgModel = (function (_super) {
    __extends(NgModel, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        /**
         * \@internal
         */
        _this._control = new FormControl();
        /**
         * \@internal
         */
        _this._registered = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype.ngOnChanges = function (changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
    Object.defineProperty(NgModel.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    NgModel.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpControl = function () {
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    };
    /**
     * @return {?}
     */
    NgModel.prototype._isStandalone = function () {
        return !this._parent || !!(this.options && this.options.standalone);
    };
    /**
     * @return {?}
     */
    NgModel.prototype._setUpStandalone = function () {
        setUpControl(this._control, this);
        this._control.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkForErrors = function () {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    };
    /**
     * @return {?}
     */
    NgModel.prototype._checkName = function () {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgModel.prototype._updateValue = function (value) {
        var _this = this;
        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgModel.prototype._updateDisabled = function (changes) {
        var _this = this;
        var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
        var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(function () {
            if (isDisabled && !_this.control.disabled) {
                _this.control.disable();
            }
            else if (!isDisabled && _this.control.disabled) {
                _this.control.enable();
            }
        });
    };
    return NgModel;
}(NgControl));
NgModel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[ngModel]:not([formControlName]):not([formControl])',
                providers: [formControlBinding],
                exportAs: 'ngModel'
            },] },
];
/**
 * @nocollapse
 */
NgModel.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
NgModel.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModelOptions',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ReactiveErrors = (function () {
    function ReactiveErrors() {
    }
    /**
     * @return {?}
     */
    ReactiveErrors.controlParentException = function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.ngModelGroupException = function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.missingFormException = function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.groupParentException = function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.arrayParentException = function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
    };
    /**
     * @return {?}
     */
    ReactiveErrors.disabledAttrWarning = function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    return ReactiveErrors;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding$1 = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormControlDirective; })
};
/**
 * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
 * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
 * {\@link FormControlDirective}.
 *
 * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
 * it does not require that your {\@link FormControl} instance be part of any parent
 * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
 * exists above it.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormControl} instance. See a full list of available properties in
 * {\@link AbstractControl}.
 *
 * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
 * or you can set it programmatically later using {\@link AbstractControl#setValue} or
 * {\@link AbstractControl#patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl#valueChanges} event.  You can also listen to
 * {\@link AbstractControl#statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 *  \@stable
 */
var FormControlDirective = (function (_super) {
    __extends(FormControlDirective, _super);
    /**
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlDirective(validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype.ngOnChanges = function (changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && ((this.valueAccessor)).setDisabledState) {
                ((((this.valueAccessor)).setDisabledState))(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    };
    Object.defineProperty(FormControlDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlDirective.prototype._isControlChanged = function (changes) {
        return changes.hasOwnProperty('form');
    };
    return FormControlDirective;
}(NgControl));
FormControlDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
];
/**
 * @nocollapse
 */
FormControlDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
FormControlDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formControl',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormGroupDirective; })
};
/**
 * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive accepts an existing {\@link FormGroup} instance. It will then use this
 * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
 * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
 * and {\@link FormArrayName} directives.
 *
 * **Set value**: You can set the form's initial value when instantiating the
 * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
 * {\@link AbstractControl#setValue} or {\@link AbstractControl#patchValue} methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
 * to the {\@link FormGroup}'s {\@link AbstractControl#valueChanges} event.  You can also listen to
 * its {\@link AbstractControl#statusChanges} event to be notified when the validation status is
 * re-calculated.
 *
 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormGroupDirective = (function (_super) {
    __extends(FormGroupDirective, _super);
    /**
     * @param {?} _validators
     * @param {?} _asyncValidators
     */
    function FormGroupDirective(_validators, _asyncValidators) {
        var _this = _super.call(this) || this;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this._submitted = false;
        _this.directives = [];
        _this.form = ((null));
        _this.ngSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    FormGroupDirective.prototype.ngOnChanges = function (changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    };
    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
        /**
         * @return {?}
         */
        get: function () { return this._submitted; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addControl = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeControl = function (dir) { remove(this.directives, dir); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormGroup = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.addFormArray = function (dir) {
        var /** @type {?} */ ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.removeFormArray = function (dir) { };
    /**
     * @param {?} dir
     * @return {?}
     */
    FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
    /**
     * @param {?} dir
     * @param {?} value
     * @return {?}
     */
    FormGroupDirective.prototype.updateModel = function (dir, value) {
        var /** @type {?} */ ctrl = (this.form.get(dir.path));
        ctrl.setValue(value);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    FormGroupDirective.prototype.onSubmit = function ($event) {
        this._submitted = true;
        this.ngSubmit.emit($event);
        return false;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
    /**
     * @param {?=} value
     * @return {?}
     */
    FormGroupDirective.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this._submitted = false;
    };
    /**
     * \@internal
     * @return {?}
     */
    FormGroupDirective.prototype._updateDomValue = function () {
        var _this = this;
        this.directives.forEach(function (dir) {
            var /** @type {?} */ newCtrl = _this.form.get(dir.path);
            if (dir._control !== newCtrl) {
                cleanUpControl(dir._control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                dir._control = newCtrl;
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateRegistrations = function () {
        var _this = this;
        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange(function () { });
        this._oldForm = this.form;
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._updateValidators = function () {
        var /** @type {?} */ sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([/** @type {?} */ ((this.form.validator)), /** @type {?} */ ((sync))]);
        var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([/** @type {?} */ ((this.form.asyncValidator)), /** @type {?} */ ((async))]);
    };
    /**
     * @return {?}
     */
    FormGroupDirective.prototype._checkFormPresent = function () {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    };
    return FormGroupDirective;
}(ControlContainer));
FormGroupDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[formGroup]',
                providers: [formDirectiveProvider$1],
                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                exportAs: 'ngForm'
            },] },
];
/**
 * @nocollapse
 */
FormGroupDirective.ctorParameters = function () { return [
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormGroupDirective.propDecorators = {
    'form': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formGroup',] },],
    'ngSubmit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
/**
 * @template T
 * @param {?} list
 * @param {?} el
 * @return {?}
 */
function remove(list, el) {
    var /** @type {?} */ index = list.indexOf(el);
    if (index > -1) {
        list.splice(index, 1);
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormGroupName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
 *
 * \@howToUse
 *
 * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormGroup} you want to link, and
 * will look for a {\@link FormGroup} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form groups can come in handy when you want to validate a sub-group of a
 * form separately from the rest or when you'd like to group the values of certain
 * controls into their own nested object.
 *
 * **Access the group**: You can access the associated {\@link FormGroup} using the
 * {\@link AbstractControl#get} method. Ex: `this.form.get('name')`.
 *
 * You can also access individual controls within the group using dot syntax.
 * Ex: `this.form.get('name.first')`
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormGroup}, or you can set it programmatically later using
 * {\@link AbstractControl#setValue} or {\@link AbstractControl#patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the group, you can
 * subscribe to the {\@link AbstractControl#valueChanges} event.  You can also listen to
 * {\@link AbstractControl#statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormGroupName = (function (_super) {
    __extends(FormGroupName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * \@internal
     * @return {?}
     */
    FormGroupName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    return FormGroupName;
}(AbstractFormGroupDirective));
FormGroupName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
];
/**
 * @nocollapse
 */
FormGroupName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormGroupName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formGroupName',] },],
};
var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormArrayName; })
};
/**
 * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested {\@link FormArray} you want to link, and
 * will look for a {\@link FormArray} registered with that name in the parent
 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
 *
 * Nested form arrays can come in handy when you have a group of form controls but
 * you're not sure how many there will be. Form arrays allow you to create new
 * form controls dynamically.
 *
 * **Access the array**: You can access the associated {\@link FormArray} using the
 * {\@link AbstractControl#get} method on the parent {\@link FormGroup}.
 * Ex: `this.form.get('cities')`.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the {\@link FormArray}, or you can set the value programmatically later using the
 * {\@link FormArray}'s {\@link AbstractControl#setValue} or {\@link AbstractControl#patchValue}
 * methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the array, you can
 * subscribe to the {\@link FormArray}'s {\@link AbstractControl#valueChanges} event.  You can also
 * listen to its {\@link AbstractControl#statusChanges} event to be notified when the validation
 * status is re-calculated.
 *
 * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
 * calling its {\@link FormArray#push} method.
 *  Ex: `this.form.get('cities').push(new FormControl());`
 *
 * ### Example
 *
 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * * **npm package**: `\@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * \@stable
 */
var FormArrayName = (function (_super) {
    __extends(FormArrayName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     */
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnInit = function () {
        this._checkParentType(); /** @type {?} */
        ((this.formDirective)).addFormArray(this);
    };
    /**
     * @return {?}
     */
    FormArrayName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return ((this.formDirective)).getFormArray(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () {
            return this._parent ? (this._parent.formDirective) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormArrayName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    return FormArrayName;
}(ControlContainer));
FormArrayName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
];
/**
 * @nocollapse
 */
FormArrayName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
]; };
FormArrayName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formArrayName',] },],
};
/**
 * @param {?} parent
 * @return {?}
 */
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var controlNameBinding = {
    provide: NgControl,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return FormControlName; })
};
/**
 * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
 * element by name.
 *
 * In other words, this directive ensures that any values written to the {\@link FormControl}
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * {\@link FormControl} instance (view -> model).
 *
 * \@howToUse
 *
 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the {\@link FormControl} instance you want to
 * link, and will look for a {\@link FormControl} registered with that name in the
 * closest {\@link FormGroup} or {\@link FormArray} above it.
 *
 * **Access the control**: You can access the {\@link FormControl} associated with
 * this directive by using the {\@link AbstractControl#get} method.
 * Ex: `this.form.get('first');`
 *
 * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
 * See a full list of available properties in {\@link AbstractControl}.
 *
 *  **Set value**: You can set an initial value for the control when instantiating the
 *  {\@link FormControl}, or you can set it programmatically later using
 *  {\@link AbstractControl#setValue} or {\@link AbstractControl#patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {\@link AbstractControl#valueChanges} event.  You can also listen to
 * {\@link AbstractControl#statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: {\@link RadioControlValueAccessor}
 * * Selects: {\@link SelectControlValueAccessor}
 *
 * **npm package**: `\@angular/forms`
 *
 * **NgModule**: {\@link ReactiveFormsModule}
 *
 *  \@stable
 */
var FormControlName = (function (_super) {
    __extends(FormControlName, _super);
    /**
     * @param {?} parent
     * @param {?} validators
     * @param {?} asyncValidators
     * @param {?} valueAccessors
     */
    function FormControlName(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this._added = false;
        _this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlName.prototype, "isDisabled", {
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlName.prototype.ngOnChanges = function (changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    };
    /**
     * @param {?} newValue
     * @return {?}
     */
    FormControlName.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    Object.defineProperty(FormControlName.prototype, "path", {
        /**
         * @return {?}
         */
        get: function () { return controlPath(this.name, /** @type {?} */ ((this._parent))); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "formDirective", {
        /**
         * @return {?}
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "validator", {
        /**
         * @return {?}
         */
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
        /**
         * @return {?}
         */
        get: function () {
            return ((composeAsyncValidators(this._rawAsyncValidators)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "control", {
        /**
         * @return {?}
         */
        get: function () { return this._control; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormControlName.prototype._checkParentType = function () {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    };
    /**
     * @return {?}
     */
    FormControlName.prototype._setUpControl = function () {
        this._checkParentType();
        this._control = this.formDirective.addControl(this);
        if (this.control.disabled && ((this.valueAccessor)).setDisabledState) {
            ((((this.valueAccessor)).setDisabledState))(true);
        }
        this._added = true;
    };
    return FormControlName;
}(NgControl));
FormControlName.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
];
/**
 * @nocollapse
 */
FormControlName.ctorParameters = function () { return [
    { type: ControlContainer, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_ASYNC_VALIDATORS,] },] },
    { type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [NG_VALUE_ACCESSOR,] },] },
]; };
FormControlName.propDecorators = {
    'name': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['formControlName',] },],
    'model': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['ngModel',] },],
    'update': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['ngModelChange',] },],
    'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['disabled',] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RequiredValidator; }),
    multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CheckboxRequiredValidator; }),
    multi: true
};
/**
 * A Directive that adds the `required` validator to any controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 * \@stable
 */
var RequiredValidator = (function () {
    function RequiredValidator() {
    }
    Object.defineProperty(RequiredValidator.prototype, "required", {
        /**
         * @return {?}
         */
        get: function () { return this._required; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._required = value != null && value !== false && "" + value !== 'false';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    RequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.required(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    return RequiredValidator;
}());
RequiredValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                providers: [REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] },
];
/**
 * @nocollapse
 */
RequiredValidator.ctorParameters = function () { return []; };
RequiredValidator.propDecorators = {
    'required': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * \@experimental
 */
var CheckboxRequiredValidator = (function (_super) {
    __extends(CheckboxRequiredValidator, _super);
    function CheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    CheckboxRequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.requiredTrue(c) : null;
    };
    return CheckboxRequiredValidator;
}(RequiredValidator));
CheckboxRequiredValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                providers: [CHECKBOX_REQUIRED_VALIDATOR],
                host: { '[attr.required]': 'required ? "" : null' }
            },] },
];
/**
 * @nocollapse
 */
CheckboxRequiredValidator.ctorParameters = function () { return []; };
/**
 * Provider which adds {@link EmailValidator} to {@link NG_VALIDATORS}.
 */
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmailValidator; }),
    multi: true
};
/**
 * A Directive that adds the `email` validator to controls marked with the
 * `email` attribute, via the {\@link NG_VALIDATORS} binding.
 *
 * ### Example
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * \@experimental
 */
var EmailValidator = (function () {
    function EmailValidator() {
    }
    Object.defineProperty(EmailValidator.prototype, "email", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EmailValidator.prototype.validate = function (c) {
        return this._enabled ? Validators.email(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    return EmailValidator;
}());
EmailValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EmailValidator.ctorParameters = function () { return []; };
EmailValidator.propDecorators = {
    'email': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='min'}
 */
var MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MinLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
 *
 * \@stable
 */
var MinLengthValidator = (function () {
    function MinLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MinLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MinLengthValidator.prototype.validate = function (c) {
        return this.minlength == null ? null : this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MinLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    };
    return MinLengthValidator;
}());
MinLengthValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                providers: [MIN_LENGTH_VALIDATOR],
                host: { '[attr.minlength]': 'minlength ? minlength : null' }
            },] },
];
/**
 * @nocollapse
 */
MinLengthValidator.ctorParameters = function () { return []; };
MinLengthValidator.propDecorators = {
    'minlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='max'}
 */
var MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MaxLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
 * `formControl`,
 * or control with `ngModel` that also has a `maxlength` attribute.
 *
 * \@stable
 */
var MaxLengthValidator = (function () {
    function MaxLengthValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MaxLengthValidator.prototype.validate = function (c) {
        return this.maxlength != null ? this._validator(c) : null;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    MaxLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    };
    return MaxLengthValidator;
}());
MaxLengthValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                providers: [MAX_LENGTH_VALIDATOR],
                host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
            },] },
];
/**
 * @nocollapse
 */
MaxLengthValidator.ctorParameters = function () { return []; };
MaxLengthValidator.propDecorators = {
    'maxlength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
var PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return PatternValidator; }),
    multi: true
};
/**
 * A Directive that adds the `pattern` validator to any controls marked with the
 * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
 * as the regex to validate Control value against.  Follows pattern attribute
 * semantics; i.e. regex must match entire Control value.
 *
 * ### Example
 *
 * ```
 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
 * ```
 * \@stable
 */
var PatternValidator = (function () {
    function PatternValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    PatternValidator.prototype.ngOnChanges = function (changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
    /**
     * @param {?} fn
     * @return {?}
     */
    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    /**
     * @return {?}
     */
    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
    return PatternValidator;
}());
PatternValidator.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                providers: [PATTERN_VALIDATOR],
                host: { '[attr.pattern]': 'pattern ? pattern : null' }
            },] },
];
/**
 * @nocollapse
 */
PatternValidator.ctorParameters = function () { return []; };
PatternValidator.propDecorators = {
    'pattern': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
 *
 * It is essentially syntactic sugar that shortens the `new FormGroup()`,
 * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
 * forms.
 *
 * \@howToUse
 *
 * To use, inject `FormBuilder` into your component class. You can then call its methods
 * directly.
 *
 * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
 *
 *  * **npm package**: `\@angular/forms`
 *
 *  * **NgModule**: {\@link ReactiveFormsModule}
 *
 * \@stable
 */
var FormBuilder = (function () {
    function FormBuilder() {
    }
    /**
     * Construct a new {\@link FormGroup} with the given map of configuration.
     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
     *
     * See the {\@link FormGroup} constructor for more details.
     * @param {?} controlsConfig
     * @param {?=} extra
     * @return {?}
     */
    FormBuilder.prototype.group = function (controlsConfig, extra) {
        if (extra === void 0) { extra = null; }
        var /** @type {?} */ controls = this._reduceControls(controlsConfig);
        var /** @type {?} */ validator = extra != null ? extra['validator'] : null;
        var /** @type {?} */ asyncValidator = extra != null ? extra['asyncValidator'] : null;
        return new FormGroup(controls, validator, asyncValidator);
    };
    /**
     * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
     * `asyncValidator`.
     *
     * `formState` can either be a standalone value for the form control or an object
     * that contains both a value and a disabled status.
     *
     * @param {?} formState
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
        return new FormControl(formState, validator, asyncValidator);
    };
    /**
     * Construct a {\@link FormArray} from the given `controlsConfig` array of
     * configuration, with the given optional `validator` and `asyncValidator`.
     * @param {?} controlsConfig
     * @param {?=} validator
     * @param {?=} asyncValidator
     * @return {?}
     */
    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
        var _this = this;
        var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validator, asyncValidator);
    };
    /**
     * \@internal
     * @param {?} controlsConfig
     * @return {?}
     */
    FormBuilder.prototype._reduceControls = function (controlsConfig) {
        var _this = this;
        var /** @type {?} */ controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /**
     * \@internal
     * @param {?} controlConfig
     * @return {?}
     */
    FormBuilder.prototype._createControl = function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var /** @type {?} */ value = controlConfig[0];
            var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    return FormBuilder;
}());
FormBuilder.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
FormBuilder.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('4.1.3');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * \@experimental
 */
var NgNoValidate = (function () {
    function NgNoValidate() {
    }
    return NgNoValidate;
}());
NgNoValidate.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                host: { 'novalidate': '' },
            },] },
];
/**
 * @nocollapse
 */
NgNoValidate.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
var InternalFormsSharedModule = (function () {
    function InternalFormsSharedModule() {
    }
    return InternalFormsSharedModule;
}());
InternalFormsSharedModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: SHARED_FORM_DIRECTIVES,
                exports: SHARED_FORM_DIRECTIVES,
            },] },
];
/**
 * @nocollapse
 */
InternalFormsSharedModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The ng module for forms.
 * \@stable
 */
var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                providers: [RadioControlRegistry],
                exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
FormsModule.ctorParameters = function () { return []; };
/**
 * The ng module for reactive forms.
 * \@stable
 */
var ReactiveFormsModule = (function () {
    function ReactiveFormsModule() {
    }
    return ReactiveFormsModule;
}());
ReactiveFormsModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                providers: [FormBuilder, RadioControlRegistry],
                exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
ReactiveFormsModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * This module is used for handling user input, by defining and building a {@link FormGroup} that
 * consists of {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl}
 * objects can then be used to read information from the form DOM elements.
 *
 * Forms providers are not included in default providers; you must import these providers
 * explicitly.
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the forms package.
 */
// This file only reexports content of the `src` folder. Keep it that way.
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=forms.es5.js.map


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_component__ = __webpack_require__(296);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastConfig; });
/* unused harmony export ToastrIconClasses */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToastrConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastData; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* tslint:disable:no-inferrable-types */


/**
 * Configuration for an individual toast.
 */
var ToastConfig = (function () {
    function ToastConfig(config) {
        if (config === void 0) { config = {}; }
        /** show close button */
        this.closeButton = false;
        /** time to close after a user hovers over toast */
        this.extendedTimeOut = 1000;
        /** show progress bar */
        this.progressBar = false;
        /** time to live */
        this.timeOut = 5000;
        /** allow html in message */
        this.enableHtml = false;
        this.toastClass = 'toast';
        this.positionClass = 'toast-top-right';
        this.titleClass = 'toast-title';
        this.messageClass = 'toast-message';
        /** clicking on toast dismisses it */
        this.tapToDismiss = true;
        /** the Angular component to be shown */
        this.toastComponent = __WEBPACK_IMPORTED_MODULE_1__toast_component__["a" /* Toast */];
        /** Helps show toast from a websocket or from event outside Angular */
        this.onActivateTick = false;
        function use(source, defaultValue) {
            return config && source !== undefined ? source : defaultValue;
        }
        this.closeButton = use(config.closeButton, this.closeButton);
        this.extendedTimeOut = use(config.extendedTimeOut, this.extendedTimeOut);
        this.progressBar = use(config.progressBar, this.progressBar);
        this.timeOut = use(config.timeOut, this.timeOut);
        this.enableHtml = use(config.enableHtml, this.enableHtml);
        this.toastClass = use(config.toastClass, this.toastClass);
        this.positionClass = use(config.positionClass, this.positionClass);
        this.titleClass = use(config.titleClass, this.titleClass);
        this.messageClass = use(config.messageClass, this.messageClass);
        this.tapToDismiss = use(config.tapToDismiss, this.tapToDismiss);
        this.toastComponent = use(config.toastComponent, this.toastComponent);
        this.onActivateTick = use(config.onActivateTick, this.onActivateTick);
    }
    return ToastConfig;
}());

var ToastrIconClasses = (function () {
    function ToastrIconClasses() {
    }
    return ToastrIconClasses;
}());

ToastrIconClasses.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ToastrIconClasses.ctorParameters = function () { return []; };
/**
 * Global Toast configuration
 */
var ToastrConfig = (function (_super) {
    __extends(ToastrConfig, _super);
    function ToastrConfig(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, config) || this;
        /** max toasts opened. Toasts will be queued */
        _this.maxOpened = 0;
        /** dismiss current toast when max is reached */
        _this.autoDismiss = false;
        _this.iconClasses = {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
        };
        /** new toast placement */
        _this.newestOnTop = true;
        /** block duplicate messages */
        _this.preventDuplicates = false;
        function use(source, defaultValue) {
            return config && source !== undefined ? source : defaultValue;
        }
        _this.maxOpened = use(config.maxOpened, _this.maxOpened);
        _this.autoDismiss = use(config.autoDismiss, _this.autoDismiss);
        _this.newestOnTop = use(config.newestOnTop, _this.newestOnTop);
        _this.preventDuplicates = use(config.preventDuplicates, _this.preventDuplicates);
        if (config.iconClasses) {
            _this.iconClasses.error = _this.iconClasses.error || config.iconClasses.error;
            _this.iconClasses.info = _this.iconClasses.info || config.iconClasses.info;
            _this.iconClasses.success = _this.iconClasses.success || config.iconClasses.success;
            _this.iconClasses.warning = _this.iconClasses.warning || config.iconClasses.warning;
        }
        return _this;
    }
    return ToastrConfig;
}(ToastConfig));

ToastrConfig.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ToastrConfig.ctorParameters = function () { return [
    { type: ToastrConfig, },
]; };
var ToastData = (function () {
    function ToastData() {
    }
    return ToastData;
}());



/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (immutable) */ __webpack_exports__["a"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["c"] = __param;
/* harmony export (immutable) */ __webpack_exports__["d"] = __metadata;
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(16);
var Action_1 = __webpack_require__(360);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.delay = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(359);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ForkJoinObservable_1 = __webpack_require__(305);
exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayContainer; });
/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
var OverlayContainer = (function () {
    function OverlayContainer() {
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    OverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());



/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal_dom_portal_host__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_ref__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_container__ = __webpack_require__(293);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Overlay; });
/* unused harmony export OVERLAY_PROVIDERS */




/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef, _ngZone) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._ngZone = _ngZone;
        this._paneElements = {};
    }
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    Overlay.prototype.create = function (positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    Overlay.prototype.getPaneElement = function (positionClass, overlayContainer) {
        if (!this._paneElements[positionClass]) {
            this._paneElements[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements[positionClass];
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function (positionClass, overlayContainer) {
        var pane = document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new __WEBPACK_IMPORTED_MODULE_1__portal_dom_portal_host__["a" /* DomPortalHost */](pane, this._componentFactoryResolver, this._appRef);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    Overlay.prototype._createOverlayRef = function (pane) {
        return new __WEBPACK_IMPORTED_MODULE_2__overlay_ref__["a" /* OverlayRef */](this._createPortalHost(pane), pane, this._ngZone);
    };
    return Overlay;
}());

Overlay.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
Overlay.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__overlay_container__["a" /* OverlayContainer */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
]; };
/** Providers for Overlay and its related injectables. */
var OVERLAY_PROVIDERS = [
    Overlay,
    __WEBPACK_IMPORTED_MODULE_3__overlay_container__["a" /* OverlayContainer */],
];


/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BasePortalHost; });
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = (function () {
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /** Attach this portal to a host. */
    ComponentPortal.prototype.attach = function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /** Detach this portal from its host */
    ComponentPortal.prototype.detach = function () {
        var host = this._attachedHost;
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    ComponentPortal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());

/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 */
var BasePortalHost = (function () {
    function BasePortalHost() {
    }
    BasePortalHost.prototype.attach = function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());



/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toastr_config__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toastr_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_injector__ = __webpack_require__(297);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });





var Toast = (function () {
    function Toast(toastrService, data, toastRef, appRef, sanitizer) {
        var _this = this;
        this.toastrService = toastrService;
        this.data = data;
        this.toastRef = toastRef;
        this.appRef = appRef;
        this.sanitizer = sanitizer;
        /** width of progress bar */
        this.width = -1;
        /** a combination of toast type and options.toastClass */
        this.toastClasses = '';
        /** controls animation */
        this.state = 'inactive';
        this.options = data.optionsOverride;
        this.toastId = data.toastId;
        this.message = data.message;
        if (this.message && this.options.enableHtml) {
            this.message = sanitizer.bypassSecurityTrustHtml(data.message);
        }
        this.title = data.title;
        this.onTap = data.onTap;
        this.onAction = data.onAction;
        this.toastClasses = data.toastType + " " + this.options.toastClass;
        this.options.timeOut = +this.options.timeOut;
        this.sub = toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
    }
    Toast.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    Toast.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    /**
     * updates progress bar width
     */
    Toast.prototype.updateProgress = function () {
        if (this.width === 0) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    Toast.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () { return _this.toastrService.remove(_this.toastId); }, 300);
    };
    Toast.prototype.tapToast = function () {
        if (this.state === 'removed') {
            return;
        }
        this.onTap.next();
        this.onTap.complete();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    Toast.prototype.stickAround = function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    Toast.prototype.delayedHideToast = function () {
        var _this = this;
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    return Toast;
}());

Toast.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: '[toast-component]',
                template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\">\n    &times;\n  </button>\n  <div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n    {{title}}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n    {{message}}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width.%]=\"width\"></div>\n  </div>\n  ",
                animations: [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('flyInOut', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                            display: 'none',
                            opacity: 0
                        })),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-in')),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-in')),
                    ]),
                ],
            },] },
];
/** @nocollapse */
Toast.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_3__toastr_service__["a" /* ToastrService */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__toastr_config__["a" /* ToastData */], },
    { type: __WEBPACK_IMPORTED_MODULE_4__toast_injector__["a" /* ToastRef */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], },
]; };
Toast.propDecorators = {
    'toastClasses': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['class',] },],
    'state': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['@flyInOut',] },],
    'tapToast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
    'stickAround': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseenter',] },],
    'delayedHideToast': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] },],
};


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toastr_config__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastInjector; });


/**
 * Reference to a toast opened via the Toastr service.
 */
var ToastRef = (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the toast has finished closing. */
        this._afterClosed = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._activate = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._manualClose = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    ToastRef.prototype.manualClose = function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    ToastRef.prototype.manualClosed = function () {
        return this._manualClose.asObservable();
    };
    /**
     * Close the toast.
     */
    ToastRef.prototype.close = function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
    };
    /** Gets an observable that is notified when the toast is finished closing. */
    ToastRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    ToastRef.prototype.isInactive = function () {
        return this._activate.isStopped;
    };
    ToastRef.prototype.activate = function () {
        this._activate.next();
        this._activate.complete();
    };
    /** Gets an observable that is notified when the toast has started opening. */
    ToastRef.prototype.afterActivate = function () {
        return this._activate.asObservable();
    };
    return ToastRef;
}());

/** Custom injector type specifically for instantiating components with a toast. */
var ToastInjector = (function () {
    function ToastInjector(_dialogRef, _data, _parentInjector) {
        this._dialogRef = _dialogRef;
        this._data = _data;
        this._parentInjector = _parentInjector;
    }
    ToastInjector.prototype.get = function (token, notFoundValue) {
        if (token === ToastRef) {
            return this._dialogRef;
        }
        if (token === __WEBPACK_IMPORTED_MODULE_1__toastr_config__["a" /* ToastData */] && this._data) {
            return this._data;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return ToastInjector;
}());



/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_overlay__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portal_portal__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_config__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_injector__ = __webpack_require__(297);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });






var ToastrService = (function () {
    function ToastrService(toastrConfig, overlay, _injector) {
        this.toastrConfig = toastrConfig;
        this.overlay = overlay;
        this._injector = _injector;
        this.index = 0;
        this.toasts = [];
        this.previousToastMessage = '';
        this.currentlyActive = 0;
    }
    /** show successful toast */
    ToastrService.prototype.show = function (message, title, optionsOverride, type) {
        if (type === void 0) { type = ''; }
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    /** show successful toast */
    ToastrService.prototype.success = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    /** show error toast */
    ToastrService.prototype.error = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    /** show info toast */
    ToastrService.prototype.info = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    /** show warning toast */
    ToastrService.prototype.warning = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    ToastrService.prototype.createToastConfig = function (optionsOverride) {
        if (!optionsOverride) {
            return Object.create(this.toastrConfig);
        }
        if (optionsOverride instanceof __WEBPACK_IMPORTED_MODULE_4__toastr_config__["b" /* ToastConfig */]) {
            return optionsOverride;
        }
        return new __WEBPACK_IMPORTED_MODULE_4__toastr_config__["b" /* ToastConfig */](optionsOverride);
    };
    /**
     * Remove all or a single toast by id
     */
    ToastrService.prototype.clear = function (toastId) {
        // Call every toastRef manualClose function
        for (var _i = 0, _a = this.toasts; _i < _a.length; _i++) {
            var toast = _a[_i];
            if (toastId !== undefined) {
                if (toast.toastId === toastId) {
                    toast.toastRef.manualClose();
                    return;
                }
            }
            else {
                toast.toastRef.manualClose();
            }
        }
    };
    /**
     * Remove and destroy a single toast by id
     */
    ToastrService.prototype.remove = function (toastId) {
        var _a = this._findToast(toastId), index = _a.index, activeToast = _a.activeToast;
        if (!activeToast) {
            return false;
        }
        activeToast.toastRef.close();
        this.toasts.splice(index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive <= +this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
            var p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    /**
     * Find toast object by id
     */
    ToastrService.prototype._findToast = function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return { index: null, activeToast: null };
    };
    /**
     * Determines if toast message is already shown
     */
    ToastrService.prototype.isDuplicate = function (message) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    /**
     * Creates and attaches toast data to component
     */
    ToastrService.prototype._buildNotification = function (toastType, message, title, optionsOverride) {
        var _this = this;
        if (optionsOverride === void 0) { optionsOverride = Object.create(this.toastrConfig); }
        // max opened and auto dismiss = true
        if (this.toastrConfig.preventDuplicates && this.isDuplicate(message)) {
            return;
        }
        this.previousToastMessage = message;
        var keepInactive = false;
        if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        var overlayRef = this.overlay.create(optionsOverride.positionClass, this.overlayContainer);
        var ins = {
            toastId: this.index++,
            message: message,
            toastRef: new __WEBPACK_IMPORTED_MODULE_5__toast_injector__["a" /* ToastRef */](overlayRef),
        };
        ins.onShown = ins.toastRef.afterActivate();
        ins.onHidden = ins.toastRef.afterClosed();
        var data = new __WEBPACK_IMPORTED_MODULE_4__toastr_config__["a" /* ToastData */]();
        data.toastId = ins.toastId;
        data.optionsOverride = optionsOverride;
        data.message = message;
        data.title = title;
        data.toastType = toastType;
        data.onTap = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        ins.onTap = data.onTap.asObservable();
        data.onAction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        ins.onAction = data.onAction.asObservable();
        var toastInjector = new __WEBPACK_IMPORTED_MODULE_5__toast_injector__["b" /* ToastInjector */](ins.toastRef, data, this._injector);
        var component = new __WEBPACK_IMPORTED_MODULE_3__portal_portal__["a" /* ComponentPortal */](optionsOverride.toastComponent, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    return ToastrService;
}());

ToastrService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
ToastrService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_4__toastr_config__["c" /* ToastrConfig */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__overlay_overlay__["a" /* Overlay */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
]; };


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_option_builder__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navigator_geolocation__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_geo_coder__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_ngui_map__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_loader__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_debounceTime__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_util__ = __webpack_require__(636);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguiMapComponent; });










var INPUTS = [
    'backgroundColor', 'center', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor',
    'draggingCursor', 'heading', 'keyboardShortcuts', 'mapMaker', 'mapTypeControl', 'mapTypeId', 'maxZoom', 'minZoom',
    'noClear', 'overviewMapControl', 'panControl', 'panControlOptions', 'rotateControl', 'scaleControl', 'scrollwheel',
    'streetView', 'styles', 'tilt', 'zoom', 'streetViewControl', 'zoomControl', 'zoomControlOptions', 'mapTypeControlOptions',
    'overviewMapControlOptions', 'rotateControlOptions', 'scaleControlOptions', 'streetViewControlOptions', 'fullscreenControl', 'fullscreenControlOptions',
    'options',
    // ngui-map-specific inputs
    'geoFallbackCenter'
];
var OUTPUTS = [
    'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'heading_changed', 'idle',
    'typeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick',
    'tilesloaded', 'tile_changed', 'zoom_changed',
    // to avoid DOM event conflicts
    'mapClick', 'mapMouseover', 'mapMouseout', 'mapMousemove', 'mapDrag', 'mapDragend', 'mapDragstart'
];
var NguiMapComponent = (function () {
    function NguiMapComponent(optionBuilder, elementRef, geolocation, geoCoder, nguiMap, apiLoader, zone) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.geolocation = geolocation;
        this.geoCoder = geoCoder;
        this.nguiMap = nguiMap;
        this.apiLoader = apiLoader;
        this.zone = zone;
        this.mapReady$ = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.mapOptions = {};
        this.inputChanges$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        // map objects by group
        this.infoWindows = {};
        // map has been fully initialized
        this.mapIdledOnce = false;
        this.initializeMapAfterDisplayed = false;
        apiLoader.load();
        // all outputs needs to be initialized,
        // http://stackoverflow.com/questions/37765519/angular2-directive-cannot-read-property-subscribe-of-undefined-with-outputs
        OUTPUTS.forEach(function (output) { return _this[output] = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"](); });
    }
    NguiMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.apiLoaderSub = this.apiLoader.api$.subscribe(function () { return _this.initializeMap(); });
    };
    NguiMapComponent.prototype.ngAfterViewChecked = function () {
        if (this.initializeMapAfterDisplayed && this.el && this.el.offsetWidth > 0) {
            this.initializeMap();
        }
    };
    NguiMapComponent.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    NguiMapComponent.prototype.initializeMap = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement.querySelector('.google-map');
        if (this.el && this.el.offsetWidth === 0) {
            this.initializeMapAfterDisplayed = true;
            return;
        }
        this.initializeMapAfterDisplayed = false;
        this.mapOptions = this.optionBuilder.googlizeAllInputs(INPUTS, this);
        this.mapOptions.zoom = this.mapOptions.zoom || 15;
        typeof this.mapOptions.center === 'string' && (delete this.mapOptions.center);
        this.zone.runOutsideAngular(function () {
            _this.map = new google.maps.Map(_this.el, _this.mapOptions);
            _this.map['mapObjectName'] = 'NguiMapComponent';
            if (!_this.mapOptions.center) {
                _this.setCenter();
            }
            // set google events listeners and emits to this outputs listeners
            _this.nguiMap.setObjectEvents(OUTPUTS, _this, 'map');
            _this.map.addListener('idle', function () {
                if (!_this.mapIdledOnce) {
                    _this.mapIdledOnce = true;
                    setTimeout(function () {
                        _this.mapReady$.emit(_this.map);
                    });
                }
            });
            // update map when input changes
            __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_debounceTime__["debounceTime"].call(_this.inputChanges$, 1000)
                .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.map, changes); });
            if (typeof window !== 'undefined' && window['nguiMapRef']) {
                // expose map object for test and debugging on (<any>window)
                window['nguiMapRef'].map = _this.map;
            }
        });
    };
    NguiMapComponent.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this.geolocation.getCurrentPosition().subscribe(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.map.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map: Error finding the current position');
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
        else if (typeof this['center'] === 'string') {
            this.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                _this.map.setCenter(results[0].geometry.location);
            }, function (error) {
                _this.map.setCenter(_this.mapOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            });
        }
    };
    NguiMapComponent.prototype.openInfoWindow = function (id, anchor) {
        this.infoWindows[id].open(anchor);
    };
    NguiMapComponent.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.el && !this.initializeMapAfterDisplayed) {
            this.nguiMap.clearObjectEvents(OUTPUTS, this, 'map');
        }
        if (this.apiLoaderSub) {
            this.apiLoaderSub.unsubscribe();
        }
    };
    // map.markers, map.circles, map.heatmapLayers.. etc
    NguiMapComponent.prototype.addToMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__services_util__["c" /* toCamelCase */])(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        this.map[groupName] = this.map[groupName] || [];
        this.map[groupName].push(mapObject);
    };
    NguiMapComponent.prototype.removeFromMapObjectGroup = function (mapObjectName, mapObject) {
        var groupName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__services_util__["c" /* toCamelCase */])(mapObjectName.toLowerCase()) + 's'; // e.g. markers
        if (this.map && this.map[groupName]) {
            var index = this.map[groupName].indexOf(mapObject);
            (index > -1) && this.map[groupName].splice(index, 1);
        }
    };
    return NguiMapComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], NguiMapComponent.prototype, "mapReady$", void 0);
NguiMapComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'ngui-map',
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_ngui_map__["a" /* NguiMap */], __WEBPACK_IMPORTED_MODULE_2__services_option_builder__["a" /* OptionBuilder */], __WEBPACK_IMPORTED_MODULE_4__services_geo_coder__["a" /* GeoCoder */], __WEBPACK_IMPORTED_MODULE_3__services_navigator_geolocation__["a" /* NavigatorGeolocation */]],
        styles: ["\n    ngui-map {display: block; height: 300px;}\n    .google-map {width: 100%; height: 100%}\n  "],
        inputs: INPUTS,
        outputs: OUTPUTS,
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        template: "\n    <div class=\"google-map\"></div>\n    <ng-content></ng-content>\n  ",
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_option_builder__["a" /* OptionBuilder */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_3__services_navigator_geolocation__["a" /* NavigatorGeolocation */],
        __WEBPACK_IMPORTED_MODULE_4__services_geo_coder__["a" /* GeoCoder */],
        __WEBPACK_IMPORTED_MODULE_5__services_ngui_map__["a" /* NguiMap */],
        __WEBPACK_IMPORTED_MODULE_6__services_api_loader__["a" /* NgMapApiLoader */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
], NguiMapComponent);

//# sourceMappingURL=ngui-map.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(2);
var EmptyObservable_1 = __webpack_require__(71);
var isArray_1 = __webpack_require__(70);
var subscribeToResult_1 = __webpack_require__(36);
var OuterSubscriber_1 = __webpack_require__(35);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var ForkJoinObservable = (function (_super) {
    __extends(ForkJoinObservable, _super);
    function ForkJoinObservable(sources, resultSelector) {
        _super.call(this);
        this.sources = sources;
        this.resultSelector = resultSelector;
    }
    /* tslint:enable:max-line-length */
    /**
     * @param sources
     * @return {any}
     * @static true
     * @name forkJoin
     * @owner Observable
     */
    ForkJoinObservable.create = function () {
        var sources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sources[_i - 0] = arguments[_i];
        }
        if (sources === null || arguments.length === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        var resultSelector = null;
        if (typeof sources[sources.length - 1] === 'function') {
            resultSelector = sources.pop();
        }
        // if the first and only other argument besides the resultSelector is an array
        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
            sources = sources[0];
        }
        if (sources.length === 0) {
            return new EmptyObservable_1.EmptyObservable();
        }
        return new ForkJoinObservable(sources, resultSelector);
    };
    ForkJoinObservable.prototype._subscribe = function (subscriber) {
        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
    };
    return ForkJoinObservable;
}(Observable_1.Observable));
exports.ForkJoinObservable = ForkJoinObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ForkJoinSubscriber = (function (_super) {
    __extends(ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources, resultSelector) {
        _super.call(this, destination);
        this.sources = sources;
        this.resultSelector = resultSelector;
        this.completed = 0;
        this.haveValues = 0;
        var len = sources.length;
        this.total = len;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
            if (innerSubscription) {
                innerSubscription.outerIndex = i;
                this.add(innerSubscription);
            }
        }
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var destination = this.destination;
        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            var value = resultSelector ? resultSelector.apply(this, values) : values;
            destination.next(value);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=ForkJoinObservable.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
/* unused harmony export BrowserXhr */
/* unused harmony export JSONPBackend */
/* unused harmony export JSONPConnection */
/* unused harmony export CookieXSRFStrategy */
/* unused harmony export XHRBackend */
/* unused harmony export XHRConnection */
/* unused harmony export BaseRequestOptions */
/* unused harmony export RequestOptions */
/* unused harmony export BaseResponseOptions */
/* unused harmony export ResponseOptions */
/* unused harmony export ReadyState */
/* unused harmony export RequestMethod */
/* unused harmony export ResponseContentType */
/* unused harmony export ResponseType */
/* unused harmony export Headers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Http; });
/* unused harmony export Jsonp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpModule; });
/* unused harmony export JsonpModule */
/* unused harmony export Connection */
/* unused harmony export ConnectionBackend */
/* unused harmony export XSRFStrategy */
/* unused harmony export Request */
/* unused harmony export Response */
/* unused harmony export QueryEncoder */
/* unused harmony export URLSearchParams */
/* unused harmony export VERSION */
/* unused harmony export ɵg */
/* unused harmony export ɵa */
/* unused harmony export ɵf */
/* unused harmony export ɵb */
/* unused harmony export ɵc */
/* unused harmony export ɵd */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @license Angular v4.1.3
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */



/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * \@experimental
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = function () { return ((new XMLHttpRequest())); };
    return BrowserXhr;
}());
BrowserXhr.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BrowserXhr.ctorParameters = function () { return []; };
var RequestMethod = {};
RequestMethod.Get = 0;
RequestMethod.Post = 1;
RequestMethod.Put = 2;
RequestMethod.Delete = 3;
RequestMethod.Options = 4;
RequestMethod.Head = 5;
RequestMethod.Patch = 6;
RequestMethod[RequestMethod.Get] = "Get";
RequestMethod[RequestMethod.Post] = "Post";
RequestMethod[RequestMethod.Put] = "Put";
RequestMethod[RequestMethod.Delete] = "Delete";
RequestMethod[RequestMethod.Options] = "Options";
RequestMethod[RequestMethod.Head] = "Head";
RequestMethod[RequestMethod.Patch] = "Patch";
var ReadyState = {};
ReadyState.Unsent = 0;
ReadyState.Open = 1;
ReadyState.HeadersReceived = 2;
ReadyState.Loading = 3;
ReadyState.Done = 4;
ReadyState.Cancelled = 5;
ReadyState[ReadyState.Unsent] = "Unsent";
ReadyState[ReadyState.Open] = "Open";
ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
ReadyState[ReadyState.Loading] = "Loading";
ReadyState[ReadyState.Done] = "Done";
ReadyState[ReadyState.Cancelled] = "Cancelled";
var ResponseType = {};
ResponseType.Basic = 0;
ResponseType.Cors = 1;
ResponseType.Default = 2;
ResponseType.Error = 3;
ResponseType.Opaque = 4;
ResponseType[ResponseType.Basic] = "Basic";
ResponseType[ResponseType.Cors] = "Cors";
ResponseType[ResponseType.Default] = "Default";
ResponseType[ResponseType.Error] = "Error";
ResponseType[ResponseType.Opaque] = "Opaque";
var ContentType = {};
ContentType.NONE = 0;
ContentType.JSON = 1;
ContentType.FORM = 2;
ContentType.FORM_DATA = 3;
ContentType.TEXT = 4;
ContentType.BLOB = 5;
ContentType.ARRAY_BUFFER = 6;
ContentType[ContentType.NONE] = "NONE";
ContentType[ContentType.JSON] = "JSON";
ContentType[ContentType.FORM] = "FORM";
ContentType[ContentType.FORM_DATA] = "FORM_DATA";
ContentType[ContentType.TEXT] = "TEXT";
ContentType[ContentType.BLOB] = "BLOB";
ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
var ResponseContentType = {};
ResponseContentType.Text = 0;
ResponseContentType.Json = 1;
ResponseContentType.ArrayBuffer = 2;
ResponseContentType.Blob = 3;
ResponseContentType[ResponseContentType.Text] = "Text";
ResponseContentType[ResponseContentType.Json] = "Json";
ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
ResponseContentType[ResponseContentType.Blob] = "Blob";
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '\@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * \@experimental
 */
var Headers = (function () {
    /**
     * @param {?=} headers
     */
    function Headers(headers) {
        var _this = this;
        /**
         * \@internal header names are lower case
         */
        this._headers = new Map();
        /**
         * \@internal map lower case names to actual names
         */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var /** @type {?} */ headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var /** @type {?} */ index = line.indexOf(':');
            if (index > 0) {
                var /** @type {?} */ name = line.slice(0, index);
                var /** @type {?} */ value = line.slice(index + 1).trim();
                headers.set(name, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.append = function (name, value) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.delete = function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.get = function (name) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     * @return {?}
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     * @return {?}
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * @return {?}
     */
    Headers.prototype.toJSON = function () {
        var _this = this;
        var /** @type {?} */ serialized = {};
        this._headers.forEach(function (values, name) {
            var /** @type {?} */ split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[((_this._normalizedNames.get(name)))] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     * @return {?}
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    /**
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {\@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {\@link Response Responses} for
 * mock responses (see {\@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '\@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * \@experimental
 */
var ResponseOptions = (function () {
    /**
     * @param {?=} __0
     */
    function ResponseOptions(_a) {
        var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {\@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link ResponseOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create {\@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '\@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * \@experimental
 */
var BaseResponseOptions = (function (_super) {
    __extends(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    return BaseResponseOptions;
}(ResponseOptions));
BaseResponseOptions.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BaseResponseOptions.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {\@link Request}.
 *
 * \@experimental
 * @abstract
 */
var ConnectionBackend = (function () {
    function ConnectionBackend() {
    }
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    ConnectionBackend.prototype.createConnection = function (request) { };
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * \@experimental
 * @abstract
 */
var Connection = (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * \@experimental
 * @abstract
 */
var XSRFStrategy = (function () {
    function XSRFStrategy() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    XSRFStrategy.prototype.configureRequest = function (req) { };
    return XSRFStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} method
 * @return {?}
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
/**
 * @param {?} xhr
 * @return {?}
 */
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * @param {?} input
 * @return {?}
 */
/**
 * @param {?} input
 * @return {?}
 */
function stringToArrayBuffer(input) {
    var /** @type {?} */ view = new Uint16Array(input.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @param {?=} rawParams
 * @return {?}
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var /** @type {?} */ map = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * \@experimental
 *
 */
var QueryEncoder = (function () {
    function QueryEncoder() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${\@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '\@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * \@experimental
 */
var URLSearchParams = (function () {
    /**
     * @param {?=} rawParams
     * @param {?=} queryEncoder
     */
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    /**
     * @return {?}
     */
    URLSearchParams.prototype.clone = function () {
        var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.get = function (param) {
        var /** @type {?} */ storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @return {?}
     */
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var /** @type {?} */ paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {\@link Request} and {\@link Response}
 * https://fetch.spec.whatwg.org/#body
 * @abstract
 */
var Body = (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(/** @type {?} */ (this._body));
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(/** @type {?} */ (this._body)));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return (this._body);
        }
        return stringToArrayBuffer(this.text());
    };
    /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return (this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * \@experimental
 */
var Response = (function (_super) {
    __extends(Response, _super);
    /**
     * @param {?} responseOptions
     */
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    /**
     * @return {?}
     */
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
/**
 * @return {?}
 */
function _getJsonpConnections() {
    var /** @type {?} */ w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
var BrowserJsonp = (function () {
    function BrowserJsonp() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    BrowserJsonp.prototype.build = function (url) {
        var /** @type {?} */ node = document.createElement('script');
        node.src = url;
        return node;
    };
    /**
     * @return {?}
     */
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = connection;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.removeConnection = function (id) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = null;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(/** @type {?} */ ((node)));
        }
    };
    return BrowserJsonp;
}());
BrowserJsonp.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BrowserJsonp.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Abstract base class for an in-flight JSONP request.
 *
 * \@experimental
 * @abstract
 */
var JSONPConnection = (function () {
    function JSONPConnection() {
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @abstract
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection.prototype.finished = function (data) { };
    return JSONPConnection;
}());
var JSONPConnection_ = (function (_super) {
    __extends(JSONPConnection_, _super);
    /**
     * @param {?} req
     * @param {?} _dom
     * @param {?=} baseResponseOptions
     */
    function JSONPConnection_(req, _dom, baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._dom = _dom;
        _this.baseResponseOptions = baseResponseOptions;
        _this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        _this.request = req;
        _this.response = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
        return _this;
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection_.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection_;
}(JSONPConnection));
/**
 * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * \@experimental
 * @abstract
 */
var JSONPBackend = (function (_super) {
    __extends(JSONPBackend, _super);
    function JSONPBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JSONPBackend;
}(ConnectionBackend));
var JSONPBackend_ = (function (_super) {
    __extends(JSONPBackend_, _super);
    /**
     * @param {?} _browserJSONP
     * @param {?} _baseResponseOptions
     */
    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    JSONPBackend_.prototype.createConnection = function (request) {
        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
    };
    return JSONPBackend_;
}(JSONPBackend));
JSONPBackend_.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
JSONPBackend_.ctorParameters = function () { return [
    { type: BrowserJsonp, },
    { type: ResponseOptions, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {\@link MockConnection} may be interacted with in tests.
 *
 * \@experimental
 */
var XHRConnection = (function () {
    /**
     * @param {?} req
     * @param {?} browserXHR
     * @param {?=} baseResponseOptions
     */
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var /** @type {?} */ blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * \@experimental
 */
var CookieXSRFStrategy = (function () {
    /**
     * @param {?=} _cookieName
     * @param {?=} _headerName
     */
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var /** @type {?} */ xsrfToken = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* ɵgetDOM */])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {\@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
 * \@Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * \@experimental
 */
var XHRBackend = (function () {
    /**
     * @param {?} _browserXHR
     * @param {?} _baseResponseOptions
     * @param {?} _xsrfStrategy
     */
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    return XHRBackend;
}());
XHRBackend.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
XHRBackend.ctorParameters = function () { return [
    { type: BrowserXhr, },
    { type: ResponseOptions, },
    { type: XSRFStrategy, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {\@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * \@experimental
 */
var RequestOptions = (function () {
    /**
     * @param {?=} __0
     */
    function RequestOptions(_a) {
        var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search, params = _b.params, withCredentials = _b.withCredentials, responseType = _b.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         * @return {?}
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         * @param {?} params
         * @return {?}
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    /**
     * @param {?=} params
     * @return {?}
     */
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    /**
     * @param {?=} objParams
     * @return {?}
     */
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var /** @type {?} */ params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var /** @type {?} */ value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {\@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {\@link RequestMethod RequestMethod.Get}
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link RequestOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create and send {\@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '\@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {\@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * \@experimental
 */
var BaseRequestOptions = (function (_super) {
    __extends(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    return BaseRequestOptions;
}(RequestOptions));
BaseRequestOptions.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BaseRequestOptions.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {\@link Http} and
 * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {\@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '\@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
 *
 * \@Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * \@experimental
 */
var Request = (function (_super) {
    __extends(Request, _super);
    /**
     * @param {?} requestOptions
     */
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
/**
 * @param {?} params
 * @return {?}
 */
function urlEncodeParams(params) {
    var /** @type {?} */ searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var /** @type {?} */ value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = ((w) /** TODO #9100 */)['FormData'] || noop;
var Blob$1 = ((w) /** TODO #9100 */)['Blob'] || noop;
var ArrayBuffer$1 = ((w) /** TODO #9100 */)['ArrayBuffer'] || noop;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} backend
 * @param {?} request
 * @return {?}
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
/**
 * @param {?} defaultOpts
 * @param {?} providedOpts
 * @param {?} method
 * @param {?} url
 * @return {?}
 */
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var /** @type {?} */ newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return (newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        })));
    }
    return (newOptions.merge(new RequestOptions({ method: method, url: url })));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {\@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '\@angular/http';
 * import 'rxjs/add/operator/map'
 * \@Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {\@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '\@angular/http';
 * import {MockBackend} from '\@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * \@experimental
 */
var Http = (function () {
    /**
     * @param {?} _backend
     * @param {?} _defaultOptions
     */
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.request = function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url))));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    return Http;
}());
Http.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Http.ctorParameters = function () { return [
    { type: ConnectionBackend, },
    { type: RequestOptions, },
]; };
/**
 * \@experimental
 */
var Jsonp = (function (_super) {
    __extends(Jsonp, _super);
    /**
     * @param {?} backend
     * @param {?} defaultOptions
     */
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Jsonp.prototype.request = function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url)));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    return Jsonp;
}(Http));
Jsonp.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Jsonp.ctorParameters = function () { return [
    { type: ConnectionBackend, },
    { type: RequestOptions, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The http module provides services to perform http requests. To get started, see the {@link Http}
 * class.
 */
/**
 * @return {?}
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
/**
 * @param {?} xhrBackend
 * @param {?} requestOptions
 * @return {?}
 */
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
/**
 * @param {?} jsonpBackend
 * @param {?} requestOptions
 * @return {?}
 */
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * \@experimental
 */
var HttpModule = (function () {
    function HttpModule() {
    }
    return HttpModule;
}());
HttpModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                providers: [
                    // TODO(pascal): use factory type annotations once supported in DI
                    // issue: https://github.com/angular/angular/issues/3183
                    { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                    BrowserXhr,
                    { provide: RequestOptions, useClass: BaseRequestOptions },
                    { provide: ResponseOptions, useClass: BaseResponseOptions },
                    XHRBackend,
                    { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpModule.ctorParameters = function () { return []; };
/**
 * The module that includes jsonp's providers
 *
 * \@experimental
 */
var JsonpModule = (function () {
    function JsonpModule() {
    }
    return JsonpModule;
}());
JsonpModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                providers: [
                    // TODO(pascal): use factory type annotations once supported in DI
                    // issue: https://github.com/angular/angular/issues/3183
                    { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                    BrowserJsonp,
                    { provide: RequestOptions, useClass: BaseRequestOptions },
                    { provide: ResponseOptions, useClass: BaseResponseOptions },
                    { provide: JSONPBackend, useClass: JSONPBackend_ },
                ],
            },] },
];
/**
 * @nocollapse
 */
JsonpModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Version"]('4.1.3');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the http package.
 */
// This file only reexports content of the `src` folder. Keep it that way.
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=http.es5.js.map


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectSearchFilter; });

var MultiSelectSearchFilter = (function () {
    function MultiSelectSearchFilter() {
    }
    MultiSelectSearchFilter.prototype.transform = function (options, args) {
        var matchPredicate = function (option) { return option.name.toLowerCase().indexOf((args || '').toLowerCase()) > -1; }, getChildren = function (option) { return options.filter(function (child) { return child.parentId === option.id; }); }, getParent = function (option) { return options.find(function (parent) { return option.parentId === parent.id; }); };
        return options.filter(function (option) {
            return matchPredicate(option) ||
                (typeof (option.parentId) === 'undefined' && getChildren(option).some(matchPredicate)) ||
                (typeof (option.parentId) !== 'undefined' && matchPredicate(getParent(option)));
        });
    };
    return MultiSelectSearchFilter;
}());

MultiSelectSearchFilter.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'searchFilter'
            },] },
];
/** @nocollapse */
MultiSelectSearchFilter.ctorParameters = function () { return []; };
//# sourceMappingURL=search-filter.pipe.js.map

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(19);
var queue_1 = __webpack_require__(332);
var Subscription_1 = __webpack_require__(25);
var observeOn_1 = __webpack_require__(135);
var ObjectUnsubscribedError_1 = __webpack_require__(74);
var SubjectSubscription_1 = __webpack_require__(140);
/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = (function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
        _super.call(this);
        this.scheduler = scheduler;
        this._events = [];
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
        var now = this._getNow();
        this._events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _events = this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var subscription;
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscription = Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
        }
        var len = _events.length;
        for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || queue_1.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(Subject_1.Subject));
exports.ReplaySubject = ReplaySubject;
var ReplayEvent = (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlUtility; });
var UrlUtility = (function () {
    function UrlUtility() {
    }
    return UrlUtility;
}());

UrlUtility.Domain = 'http://127.0.0.1:8000/';
UrlUtility.success = 'Success';
UrlUtility.errMsg = 'Something is Wrong Please Try Again';
/** Vehicle */
UrlUtility.getAllVehicle = UrlUtility.Domain + 'dashboard/vehicle/?format=json';
UrlUtility.getGps = UrlUtility.Domain + 'dashboard/gps/';
UrlUtility.getVehicleById = UrlUtility.Domain + 'dashboard/getvehiclebyid/';
UrlUtility.saveVehicle = UrlUtility.Domain + 'dashboard/vehicle/';
UrlUtility.getVehicleRegNo = UrlUtility.Domain + 'dashboard/vehicleforregistration/';
/** Driver */
UrlUtility.saveDriver = UrlUtility.Domain + 'dashboard/driver/';
UrlUtility.getAllDriver = UrlUtility.Domain + 'dashboard/driver/';
UrlUtility.getDriverById = UrlUtility.Domain + 'dashboard/getdriverbyid/';
UrlUtility.assignDriverVehicle = UrlUtility.Domain + 'dashboard/assignment/';
UrlUtility.allDriver = UrlUtility.Domain + 'dashboard/driver/';
UrlUtility.unassignedDriver = UrlUtility.Domain + 'dashboard/unassigneddrivers/';
/** History */
UrlUtility.getHistory = UrlUtility.Domain + 'dashboard/gethistory/';
/** Task */
UrlUtility.createTask = UrlUtility.Domain + 'dashboard/createtask/';
UrlUtility.assignTask = UrlUtility.Domain + 'dashboard/assigntask/';
UrlUtility.getAssignTask = UrlUtility.Domain + 'dashboard/taskassignmentdetail/';
UrlUtility.VehicleforTask = UrlUtility.Domain + 'dashboard/vehiclefortaskassignment/';
UrlUtility.displayTask = UrlUtility.Domain + 'dashboard/displaytask/';
UrlUtility.deleteTask = UrlUtility.Domain + 'dashboard/deletetask/';
/** Reports */
UrlUtility.TripByTask = UrlUtility.Domain + 'dashboard/gettripbytaskid/';
UrlUtility.UpdateTripStatus = UrlUtility.Domain + 'dashboard/updatetripstatus/';
UrlUtility.RealtimeReport = UrlUtility.Domain + 'dashboard/realtimereport/';
UrlUtility.VehicletaskReport = UrlUtility.Domain + 'dashboard/vehicletaskreport/';
UrlUtility.VehicleUtilization = UrlUtility.Domain + 'dashboard/vehicleutilization/';
//# sourceMappingURL=pages.httpurl.js.map

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

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseMapDirective; });


var BaseMapDirective = (function () {
    function BaseMapDirective(nguiMapComponent, mapObjectName, inputs, outputs) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.mapObjectName = mapObjectName;
        this.inputs = inputs;
        this.outputs = outputs;
        // this should be redefined on each childr directive
        this.initialized$ = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this._subscriptions = [];
        this.nguiMap = this.nguiMapComponent['nguiMap'];
        this.optionBuilder = this.nguiMapComponent['optionBuilder'];
        // all outputs must be initialized
        this.outputs.forEach(function (output) { return _this[output] = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"](); });
        this.mapObjectName = mapObjectName;
    }
    // Initialize this map object when map is ready
    BaseMapDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    // only called when map is ready
    BaseMapDirective.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        typeof this.objectOptions.center === 'string' && (delete this.objectOptions.center);
        // noinspection TypeScriptUnresolvedFunction
        if (this.libraryName) {
            this.mapObject = new google.maps[this.libraryName][this.mapObjectName](this.objectOptions);
        }
        else {
            this.mapObject = new google.maps[this.mapObjectName](this.objectOptions);
        }
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    // When input is changed, update object too.
    // e.g., when map center is changed by user, update center on the map
    BaseMapDirective.prototype.ngOnChanges = function (changes) {
        this.nguiMap.updateGoogleObject(this.mapObject, changes);
    };
    // When destroyed, remove event listener, and delete this object to prevent memory leak
    BaseMapDirective.prototype.ngOnDestroy = function () {
        this._subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
        this.nguiMapComponent.removeFromMapObjectGroup(this.mapObjectName, this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
    return BaseMapDirective;
}());

__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], BaseMapDirective.prototype, "initialized$", void 0);
//# sourceMappingURL=base-map-directive.js.map

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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayRef; });
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = (function () {
    function OverlayRef(_portalHost, _pane, _ngZone) {
        this._portalHost = _portalHost;
        this._pane = _pane;
        this._ngZone = _ngZone;
    }
    OverlayRef.prototype.attach = function (portal, newestOnTop) {
        return this._portalHost.attach(portal, newestOnTop);
    };
    /**
     * Detaches an overlay from a portal.
     * @returns Resolves when the overlay has been detached.
     */
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());



/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var map_1 = __webpack_require__(129);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

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

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal_portal__ = __webpack_require__(295);
/* unused harmony reexport BasePortalHost */
/* unused harmony reexport ComponentPortal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_overlay__ = __webpack_require__(294);
/* unused harmony reexport Overlay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_overlay_container__ = __webpack_require__(293);
/* unused harmony reexport OverlayContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_overlay_ref__ = __webpack_require__(321);
/* unused harmony reexport OverlayRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_toast_directive__ = __webpack_require__(350);
/* unused harmony reexport ToastContainerModule */
/* unused harmony reexport ToastContainerDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toastr_toast_component__ = __webpack_require__(296);
/* unused harmony reexport Toast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toastr_toastr_service__ = __webpack_require__(298);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__toastr_toastr_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toastr_toastr_config__ = __webpack_require__(288);
/* unused harmony reexport ToastrConfig */
/* unused harmony reexport ToastConfig */
/* unused harmony reexport ToastData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toastr_toastr_module__ = __webpack_require__(351);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__toastr_toastr_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toastr_toast_injector__ = __webpack_require__(297);
/* unused harmony reexport ToastRef */












/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var catch_1 = __webpack_require__(142);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_filter_pipe__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(287);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiselectDropdown; });
/*
 * Angular 2 Dropdown Multiselect for Bootstrap
 *
 * Simon Lindh
 * https://github.com/softsimon/angular-2-dropdown-multiselect
 */



var MULTISELECT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return MultiselectDropdown; }),
    multi: true
};
var MultiselectDropdown = (function () {
    function MultiselectDropdown(element, differs) {
        this.element = element;
        this.disabled = false;
        this.selectionLimitReached = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.dropdownClosed = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.dropdownOpened = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.onAdded = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.onRemoved = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.numSelected = 0;
        this.isVisible = false;
        this.searchFilterText = '';
        this.defaultSettings = {
            pullRight: false,
            enableSearch: false,
            checkedStyle: 'checkboxes',
            buttonClasses: 'btn btn-default btn-secondary',
            containerClasses: 'dropdown-inline',
            selectionLimit: 0,
            closeOnSelect: false,
            autoUnselect: false,
            showCheckAll: false,
            showUncheckAll: false,
            fixedTitle: false,
            dynamicTitleMaxItems: 3,
            maxHeight: '300px',
        };
        this.defaultTexts = {
            checkAll: 'Check all',
            uncheckAll: 'Uncheck all',
            checked: 'checked',
            checkedPlural: 'checked',
            searchPlaceholder: 'Search...',
            defaultTitle: 'Select',
            allSelected: 'All selected',
        };
        this.onModelChange = function (_) { };
        this.onModelTouched = function () { };
        this.differ = differs.find([]).create(null);
    }
    MultiselectDropdown.prototype.onClick = function (target) {
        if (!this.isVisible)
            return;
        var parentFound = false;
        while (target != null && !parentFound) {
            if (target === this.element.nativeElement) {
                parentFound = true;
            }
            target = target.parentElement;
        }
        if (!parentFound) {
            this.isVisible = false;
            this.dropdownClosed.emit();
        }
    };
    MultiselectDropdown.prototype.getItemStyle = function (option) {
        if (!option.isLabel) {
            return { 'cursor': 'pointer' };
        }
    };
    MultiselectDropdown.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
        this.texts = Object.assign(this.defaultTexts, this.texts);
        this.title = this.texts.defaultTitle || '';
    };
    MultiselectDropdown.prototype.ngOnChanges = function (changes) {
        if (changes['options']) {
            this.options = this.options || [];
            this.parents = this.options
                .filter(function (option) { return typeof option.parentId === 'number'; })
                .map(function (option) { return option.parentId; });
        }
        if (changes['texts'] && !changes['texts'].isFirstChange()) {
            this.updateTitle();
        }
    };
    MultiselectDropdown.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            this.model = value;
        }
        else {
            this.model = [];
        }
    };
    MultiselectDropdown.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    MultiselectDropdown.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    MultiselectDropdown.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MultiselectDropdown.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.model);
        if (changes) {
            this.updateNumSelected();
            this.updateTitle();
        }
    };
    MultiselectDropdown.prototype.validate = function (_c) {
        return (this.model && this.model.length) ? null : {
            required: {
                valid: false,
            },
        };
    };
    MultiselectDropdown.prototype.registerOnValidatorChange = function (_fn) {
        throw new Error('Method not implemented.');
    };
    MultiselectDropdown.prototype.clearSearch = function (event) {
        event.stopPropagation();
        this.searchFilterText = '';
    };
    MultiselectDropdown.prototype.toggleDropdown = function () {
        this.isVisible = !this.isVisible;
        this.isVisible ? this.dropdownOpened.emit() : this.dropdownClosed.emit();
    };
    MultiselectDropdown.prototype.isSelected = function (option) {
        return this.model && this.model.indexOf(option.id) > -1;
    };
    MultiselectDropdown.prototype.setSelected = function (_event, option) {
        var _this = this;
        if (!this.model) {
            this.model = [];
        }
        var index = this.model.indexOf(option.id);
        if (index > -1) {
            this.model.splice(index, 1);
            this.onRemoved.emit(option.id);
            var parentIndex = option.parentId && this.model.indexOf(option.parentId);
            if (parentIndex >= 0) {
                this.model.splice(parentIndex, 1);
                this.onRemoved.emit(option.parentId);
            }
            else if (this.parents.indexOf(option.id) > -1) {
                var childIds_1 = this.options.filter(function (child) { return _this.model.indexOf(child.id) > -1 && child.parentId == option.id; }).map(function (child) { return child.id; });
                this.model = this.model.filter(function (id) { return childIds_1.indexOf(id) < 0; });
                childIds_1.forEach(function (childId) { return _this.onRemoved.emit(childId); });
            }
        }
        else {
            if (this.settings.selectionLimit === 0 || (this.settings.selectionLimit && this.model.length < this.settings.selectionLimit)) {
                this.model.push(option.id);
                this.onAdded.emit(option.id);
                if (option.parentId) {
                    var children = this.options.filter(function (child) { return child.id !== option.id && child.parentId == option.parentId; });
                    if (children.every(function (child) { return _this.model.indexOf(child.id) > -1; })) {
                        this.model.push(option.parentId);
                        this.onAdded.emit(option.parentId);
                    }
                }
                else if (this.parents.indexOf(option.id) > -1) {
                    var children = this.options.filter(function (child) { return _this.model.indexOf(child.id) < 0 && child.parentId == option.id; });
                    children.forEach(function (child) {
                        _this.model.push(child.id);
                        _this.onAdded.emit(child.id);
                    });
                }
            }
            else {
                if (this.settings.autoUnselect) {
                    this.model.push(option.id);
                    this.onAdded.emit(option.id);
                    var removedOption = this.model.shift();
                    this.onRemoved.emit(removedOption);
                }
                else {
                    this.selectionLimitReached.emit(this.model.length);
                    return;
                }
            }
        }
        if (this.settings.closeOnSelect) {
            this.toggleDropdown();
        }
        this.onModelChange(this.model);
        this.onModelTouched();
    };
    MultiselectDropdown.prototype.updateNumSelected = function () {
        var _this = this;
        this.numSelected = this.model && this.model.filter(function (id) { return _this.parents.indexOf(id) < 0; }).length || 0;
    };
    MultiselectDropdown.prototype.updateTitle = function () {
        var _this = this;
        if (this.numSelected === 0 || this.settings.fixedTitle) {
            this.title = this.texts.defaultTitle || '';
        }
        else if (this.settings.displayAllSelectedText && this.model.length === this.options.length) {
            this.title = this.texts.allSelected || '';
        }
        else if (this.settings.dynamicTitleMaxItems && this.settings.dynamicTitleMaxItems >= this.numSelected) {
            this.title = this.options
                .filter(function (option) {
                return _this.model && _this.model.indexOf(option.id) > -1;
            })
                .map(function (option) { return option.name; })
                .join(', ');
        }
        else {
            this.title = this.numSelected
                + ' '
                + (this.numSelected === 1 ? this.texts.checked : this.texts.checkedPlural);
        }
    };
    MultiselectDropdown.prototype.searchFilterApplied = function () {
        return this.settings.enableSearch && this.searchFilterText && this.searchFilterText.length > 0;
    };
    MultiselectDropdown.prototype.checkAll = function () {
        var _this = this;
        var checkedOptions = (!this.searchFilterApplied() ? this.options :
            (new __WEBPACK_IMPORTED_MODULE_0__search_filter_pipe__["a" /* MultiSelectSearchFilter */]()).transform(this.options, this.searchFilterText))
            .filter(function (option) {
            if (_this.model.indexOf(option.id) === -1) {
                _this.onAdded.emit(option.id);
                return true;
            }
            return false;
        }).map(function (option) { return option.id; });
        this.model = this.model.concat(checkedOptions);
        this.onModelChange(this.model);
        this.onModelTouched();
    };
    MultiselectDropdown.prototype.uncheckAll = function () {
        var _this = this;
        var unCheckedOptions = (!this.searchFilterApplied() ? this.model
            : (new __WEBPACK_IMPORTED_MODULE_0__search_filter_pipe__["a" /* MultiSelectSearchFilter */]()).transform(this.options, this.searchFilterText).map(function (option) { return option.id; }));
        this.model = this.model.filter(function (id) {
            if (unCheckedOptions.indexOf(id) < 0) {
                return true;
            }
            else {
                _this.onRemoved.emit(id);
                return false;
            }
        });
        this.onModelChange(this.model);
        this.onModelTouched();
    };
    MultiselectDropdown.prototype.preventCheckboxCheck = function (event, option) {
        if (this.settings.selectionLimit && !this.settings.autoUnselect &&
            this.model.length >= this.settings.selectionLimit &&
            this.model.indexOf(option.id) === -1) {
            event.preventDefault();
        }
    };
    return MultiselectDropdown;
}());

MultiselectDropdown.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"], args: [{
                selector: 'ss-multiselect-dropdown',
                template: '<div class="dropdown" [ngClass]="settings.containerClasses" [class.open]="isVisible"><button type="button" class="dropdown-toggle" [ngClass]="settings.buttonClasses" (click)="toggleDropdown()" [disabled]="disabled">{{ title }}<span class="caret"></span></button><ul *ngIf="isVisible" class="dropdown-menu" [class.pull-right]="settings.pullRight" [class.dropdown-menu-right]="settings.pullRight" [style.max-height]="settings.maxHeight" style="display: block; height: auto; overflow-y: auto"><li class="dropdown-item search" *ngIf="settings.enableSearch"><div class="input-group input-group-sm"><span class="input-group-addon" id="sizing-addon3"><i class="fa fa-search"></i></span> <input type="text" class="form-control" placeholder="{{ texts.searchPlaceholder }}" aria-describedby="sizing-addon3" [(ngModel)]="searchFilterText" [ngModelOptions]="{standalone: true}" autofocus> <span class="input-group-btn" *ngIf="searchFilterText.length > 0"><button class="btn btn-default btn-secondary" type="button" (click)="clearSearch($event)"><i class="fa fa-times"></i></button></span></div></li><li class="dropdown-divider divider" *ngIf="settings.enableSearch"></li><li class="dropdown-item check-control check-control-check" *ngIf="settings.showCheckAll"><a href="javascript:;" role="menuitem" tabindex="-1" (click)="checkAll()"><span style="width: 16px" [ngClass]="{\'glyphicon glyphicon-ok\': settings.checkedStyle !== \'fontawesome\',\'fa fa-check\': settings.checkedStyle === \'fontawesome\'}"></span> {{ texts.checkAll }}</a></li><li class="dropdown-item check-control check-control-uncheck" *ngIf="settings.showUncheckAll"><a href="javascript:;" role="menuitem" tabindex="-1" (click)="uncheckAll()"><span style="width: 16px" [ngClass]="{\'glyphicon glyphicon-remove\': settings.checkedStyle !== \'fontawesome\',\'fa fa-times\': settings.checkedStyle === \'fontawesome\'}"></span> {{ texts.uncheckAll }}</a></li><li *ngIf="settings.showCheckAll || settings.showUncheckAll" class="dropdown-divider divider"></li><li class="dropdown-item" [ngStyle]="getItemStyle(option)" *ngFor="let option of options | searchFilter:searchFilterText" (click)="!option.isLabel && setSelected($event, option)" [class.dropdown-header]="option.isLabel"><ng-template [ngIf]="option.isLabel">{{ option.name }}</ng-template><a *ngIf="!option.isLabel" href="javascript:;" role="menuitem" tabindex="-1" [style.padding-left]="this.parents.length>0&&this.parents.indexOf(option.id)<0&&\'30px\'"><input *ngIf="settings.checkedStyle === \'checkboxes\'" type="checkbox" [checked]="isSelected(option)" (click)="preventCheckboxCheck($event, option)"> <span *ngIf="settings.checkedStyle === \'glyphicon\'" style="width: 16px" class="glyphicon" [class.glyphicon-ok]="isSelected(option)"></span> <span *ngIf="settings.checkedStyle === \'fontawesome\'" style="width: 16px;display: inline-block"><i *ngIf="isSelected(option)" class="fa fa-check" aria-hidden="true"></i> </span><span [ngClass]="settings.itemClasses" [style.font-weight]="this.parents.indexOf(option.id)>=0?\'bold\':\'normal\'">{{ option.name }}</span></a></li></ul></div>',
                styles: ['a {  outline: none !important;}.dropdown-inline {  display: inline-block;}.dropdown-toggle .caret {  margin-left: 4px;  white-space: nowrap;  display: inline-block;}'],
                providers: [MULTISELECT_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
MultiselectDropdown.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"], },
]; };
MultiselectDropdown.propDecorators = {
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    'settings': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    'texts': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"] },],
    'selectionLimitReached': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    'dropdownClosed': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    'dropdownOpened': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    'onAdded': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    'onRemoved': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"], args: ['document: click', ['$event.target'],] },],
};
//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var QueueAction_1 = __webpack_require__(379);
var QueueScheduler_1 = __webpack_require__(380);
/**
 *
 * Queue Scheduler
 *
 * <span class="informal">Put every next task on a queue, instead of executing it immediately</span>
 *
 * `queue` scheduler, when used with delay, behaves the same as {@link async} scheduler.
 *
 * When used without delay, it schedules given task synchronously - executes it right when
 * it is scheduled. However when called recursively, that is when inside the scheduled task,
 * another task is scheduled with queue scheduler, instead of executing immediately as well,
 * that task will be put on a queue and wait for current one to finish.
 *
 * This means that when you execute task with `queue` scheduler, you are sure it will end
 * before any other task scheduled with that scheduler will start.
 *
 * @examples <caption>Schedule recursively first, then do something</caption>
 *
 * Rx.Scheduler.queue.schedule(() => {
 *   Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue
 *
 *   console.log('first');
 * });
 *
 * // Logs:
 * // "first"
 * // "second"
 *
 *
 * @example <caption>Reschedule itself recursively</caption>
 *
 * Rx.Scheduler.queue.schedule(function(state) {
 *   if (state !== 0) {
 *     console.log('before', state);
 *     this.schedule(state - 1); // `this` references currently executing Action,
 *                               // which we reschedule with new state
 *     console.log('after', state);
 *   }
 * }, 0, 3);
 *
 * // In scheduler that runs recursively, you would expect:
 * // "before", 3
 * // "before", 2
 * // "before", 1
 * // "after", 1
 * // "after", 2
 * // "after", 3
 *
 * // But with queue it logs:
 * // "before", 3
 * // "after", 3
 * // "before", 2
 * // "after", 2
 * // "before", 1
 * // "after", 1
 *
 *
 * @static true
 * @name queue
 * @owner Scheduler
 */
exports.queue = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
//# sourceMappingURL=queue.js.map

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(6);
var async_1 = __webpack_require__(286);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
}
exports.debounceTime = debounceTime;
var DebounceTimeOperator = (function () {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceTimeSubscriber = (function (_super) {
    __extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        _super.call(this, destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    DebounceTimeSubscriber.prototype._next = function (value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function () {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function () {
        this.clearDebounce();
        if (this.hasValue) {
            this.destination.next(this.lastValue);
            this.lastValue = null;
            this.hasValue = false;
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function () {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal__ = __webpack_require__(295);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomPortalHost; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    DomPortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) {
        var _this = this;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    /** Gets the root HTMLElement for an instantiated component. */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(__WEBPACK_IMPORTED_MODULE_0__portal__["b" /* BasePortalHost */]));



/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export ToastContainerDirective */
/* unused harmony export ToastContainerModule */

var ToastContainerDirective = (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    return ToastContainerDirective;
}());

ToastContainerDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[toastContainer]',
                exportAs: 'toastContainer',
            },] },
];
/** @nocollapse */
ToastContainerDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
var ToastContainerModule = (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.forRoot = function () {
        return {
            ngModule: ToastContainerModule,
            providers: []
        };
    };
    return ToastContainerModule;
}());

ToastContainerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                exports: [ToastContainerDirective],
                declarations: [ToastContainerDirective],
            },] },
];
/** @nocollapse */
ToastContainerModule.ctorParameters = function () { return []; };


/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_component__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toastr_service__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_config__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overlay_overlay_container__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__overlay_overlay__ = __webpack_require__(294);
/* unused harmony export TOAST_CONFIG */
/* unused harmony export provideToastrConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrModule; });







var TOAST_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('ToastConfig');
function provideToastrConfig(config) {
    return new __WEBPACK_IMPORTED_MODULE_4__toastr_config__["c" /* ToastrConfig */](config);
}
var ToastrModule = (function () {
    function ToastrModule() {
    }
    ToastrModule.forRoot = function (config) {
        return {
            ngModule: ToastrModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                { provide: __WEBPACK_IMPORTED_MODULE_4__toastr_config__["c" /* ToastrConfig */], useFactory: provideToastrConfig, deps: [TOAST_CONFIG] },
                __WEBPACK_IMPORTED_MODULE_5__overlay_overlay_container__["a" /* OverlayContainer */],
                __WEBPACK_IMPORTED_MODULE_6__overlay_overlay__["a" /* Overlay */],
                __WEBPACK_IMPORTED_MODULE_3__toastr_service__["a" /* ToastrService */]
            ]
        };
    };
    return ToastrModule;
}());

ToastrModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
                exports: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* Toast */]],
                declarations: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* Toast */]],
                entryComponents: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* Toast */]],
            },] },
];
/** @nocollapse */
ToastrModule.ctorParameters = function () { return []; };


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(25);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_filter_pipe__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(287);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiselectDropdownModule; });





var MultiselectDropdownModule = (function () {
    function MultiselectDropdownModule() {
    }
    return MultiselectDropdownModule;
}());

MultiselectDropdownModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"]],
                exports: [__WEBPACK_IMPORTED_MODULE_0__dropdown_component__["a" /* MultiselectDropdown */], __WEBPACK_IMPORTED_MODULE_1__search_filter_pipe__["a" /* MultiSelectSearchFilter */]],
                declarations: [__WEBPACK_IMPORTED_MODULE_0__dropdown_component__["a" /* MultiselectDropdown */], __WEBPACK_IMPORTED_MODULE_1__search_filter_pipe__["a" /* MultiSelectSearchFilter */]],
            },] },
];
/** @nocollapse */
MultiselectDropdownModule.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dropdown_search_filter_pipe__ = __webpack_require__(307);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_dropdown_module__ = __webpack_require__(361);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__dropdown_dropdown_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropdown_dropdown_component__ = __webpack_require__(331);
/* unused harmony namespace reexport */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(290);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = (function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(AsyncAction_1.AsyncAction));
exports.QueueAction = QueueAction;
//# sourceMappingURL=QueueAction.js.map

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(291);
var QueueScheduler = (function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=QueueScheduler.js.map

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".completer-limit /deep/ .completer-dropdown {\r\n  overflow-y: auto;\r\n  max-height: 20rem;\r\n}\r\n\r\n/** info button */\r\n.mybutton{\r\n\tdisplay: inline-block;\r\n    border-radius: 3px;\r\n    border: 1px solid #248dad;\r\n    background-color: transparent;\r\n    padding: 4px 10px;\r\n    cursor: pointer;\r\n    color: #248dad;\r\n}\r\n.mybutton:HOVER {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #248dad;\r\n}\r\n\r\n.mybutton:DISABLED {\r\n\tbackground-color: transparent;\r\n\tcolor: #5bc0de;\r\n    cursor: not-allowed;\r\n}\r\n\r\n/** success button */\r\n.successbutton{\r\n\tdisplay: inline-block;\r\n    border-radius: 3px;\r\n    border: 1px solid #2d922d;\r\n    background-color: transparent;\r\n    padding: 4px 10px;\r\n    cursor: pointer;\r\n    color: #2d922d;\r\n}\r\n.successbutton:HOVER {\r\n\tcolor: #ffffff;\r\n\tbackground-color: #2d922d;\r\n}\r\n\r\n.successbutton:DISABLED {\r\n\tbackground-color: transparent;\r\n\tcolor: #73d573;\r\n    cursor: not-allowed;\r\n}\r\n\r\n/** primary button */\r\n.primarybutton{\r\n\tdisplay: inline-block;\r\n    border-radius: 3px;\r\n    border: 1px solid #0275d8;\r\n    background-color: transparent;\r\n    padding: 4px 10px;\r\n    cursor: pointer;\r\n    color: #0275d8;\r\n}\r\n.primarybutton:HOVER {\r\n\tcolor: #ffffff;\r\n\tbackground-color: rgba(2, 74, 136, 0.8);\r\n}\r\n\r\n.primarybutton:DISABLED {\r\n\tbackground-color: transparent;\r\n\tcolor: #0275d8;\r\n    cursor: not-allowed;\r\n}\r\n\r\n/** secondary button */\r\n.secondarybutton{\r\n\tdisplay: inline-block;\r\n    border-radius: 3px;\r\n    border: 1px solid #ccc;\r\n    background-color: transparent;\r\n    padding: 4px 10px;\r\n    cursor: pointer;\r\n    color: #292b2c;\r\n}\r\n.secondarybutton:HOVER {\r\n\tcolor: #292b2c;\r\n\tbackground-color: #e6e5e5;\r\n\tborder-color: #adadad;\r\n}\r\n\r\n.secondarybutton:DISABLED {\r\n\tbackground-color: transparent;\r\n\tcolor: #ccc;\r\n    cursor: not-allowed;\r\n}\r\n\r\n/** link button */\r\n.linkbutton{\r\n    border-radius: 0;\r\n    border-color: transparent;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    color: #0275d8;\r\n}\r\n.linkbutton:HOVER {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.linkbutton:DISABLED {\r\n\tbackground-color: transparent;\r\n\tcolor: #0275d8;\r\n    cursor: not-allowed;\r\n}\r\n\r\n/** link Success */\r\n.linksuccess{\r\n    border-radius: 0;\r\n    border-color: transparent;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    color: #2d922d;\r\n}\r\n.linksuccess:HOVER {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.linksuccess:DISABLED {\r\n\tbackground-color: transparent;\r\n\tcolor: #2d922d;\r\n    cursor: not-allowed;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgMapApiLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgMapAsyncCallbackApiLoader; });
/* unused harmony export NgMapAsyncApiLoader */






var NgMapApiLoader = (function () {
    function NgMapApiLoader(config) {
        this.config = config;
        this.api$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_first__["first"].call(new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"](1));
        this.config = this.config || { apiUrl: 'https://maps.google.com/maps/api/js' };
    }
    NgMapApiLoader.prototype.ngOnDestroy = function () {
        this.api$.complete();
    };
    return NgMapApiLoader;
}());

var NgMapAsyncCallbackApiLoader = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](NgMapAsyncCallbackApiLoader, _super);
    function NgMapAsyncCallbackApiLoader(zone, config) {
        var _this = _super.call(this, config) || this;
        _this.zone = zone;
        return _this;
    }
    NgMapAsyncCallbackApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["a" /* isMapsApiLoaded */])()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            window['nguiMapRef'] = window['nguiMapRef'] || [];
            window['nguiMapRef'].push({ zone: this.zone, componentFn: function () { return _this.api$.next(google.maps); } });
            this.addGoogleMapsApi();
        }
    };
    NgMapAsyncCallbackApiLoader.prototype.addGoogleMapsApi = function () {
        window['initNguiMap'] = window['initNguiMap'] || function () {
            window['nguiMapRef'].forEach(function (nguiMapRef) {
                nguiMapRef.zone.run(function () { nguiMapRef.componentFn(); });
            });
            window['nguiMapRef'].splice(0, window['nguiMapRef'].length);
        };
        var script = document.createElement('script');
        script.id = 'ngui-map-api';
        // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";
        var apiUrl = this.config.apiUrl;
        apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
        script.src = apiUrl + 'callback=initNguiMap';
        document.querySelector('body').appendChild(script);
    };
    return NgMapAsyncCallbackApiLoader;
}(NgMapApiLoader));
NgMapAsyncCallbackApiLoader = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __param */](1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()), __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __param */](1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* NG_MAP_CONFIG_TOKEN */])),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], Object])
], NgMapAsyncCallbackApiLoader);

var NgMapAsyncApiLoader = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](NgMapAsyncApiLoader, _super);
    function NgMapAsyncApiLoader(config) {
        return _super.call(this, config) || this;
    }
    NgMapAsyncApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["a" /* isMapsApiLoaded */])()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            var script = document.createElement('script');
            script.id = 'ngui-map-api';
            script.async = true;
            script.onload = function () { return _this.api$.next(google.maps); };
            script.src = this.config.apiUrl;
            document.querySelector('body').appendChild(script);
        }
    };
    return NgMapAsyncApiLoader;
}(NgMapApiLoader));
NgMapAsyncApiLoader = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __param */](0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()), __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __param */](0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* NG_MAP_CONFIG_TOKEN */])),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [Object])
], NgMapAsyncApiLoader);

//# sourceMappingURL=api-loader.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__option_builder__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geo_coder__ = __webpack_require__(624);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguiMap; });




/**
 * collection of map instance-related properties and methods
 */
var NguiMap = (function () {
    function NguiMap(geoCoder, optionBuilder, zone) {
        var _this = this;
        this.geoCoder = geoCoder;
        this.optionBuilder = optionBuilder;
        this.zone = zone;
        this.updateGoogleObject = function (object, changes) {
            var val, currentValue, setMethodName;
            if (object) {
                for (var key in changes) {
                    setMethodName = "set" + key.replace(/^[a-z]/, function (x) { return x.toUpperCase(); });
                    currentValue = changes[key].currentValue;
                    if (['position', 'center'].indexOf(key) !== -1 && typeof currentValue === 'string') {
                        // To preserve setMethod name in Observable callback, wrap it as a function, then execute
                        (function (setMethodName) {
                            _this.geoCoder.geocode({ address: currentValue }).subscribe(function (results) {
                                if (typeof object[setMethodName] === 'function') {
                                    object[setMethodName](results[0].geometry.location);
                                }
                                else {
                                    console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                        'Please check Google Maps API documentation, and use "setOptions" instead.');
                                }
                            });
                        })(setMethodName);
                    }
                    else {
                        val = _this.optionBuilder.googlize(currentValue);
                        if (typeof object[setMethodName] === 'function') {
                            object[setMethodName](val);
                        }
                        else {
                            console.error('Not all options are dynamically updatable according to Googles Maps API V3 documentation.\n' +
                                'Please check Google Maps API documentation, and use "setOptions" instead.');
                        }
                    }
                }
            }
        };
    }
    NguiMap.prototype.setObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var eventName = definedEvent
                .replace(/([A-Z])/g, function ($1) { return "_" + $1.toLowerCase(); }) // positionChanged -> position_changed
                .replace(/^map_/, ''); // map_click -> click  to avoid DOM conflicts
            var zone = _this.zone;
            zone.runOutsideAngular(function () {
                thisObj[prefix].addListener(eventName, function (event) {
                    var param = event ? event : {};
                    param.target = this;
                    zone.run(function () { return thisObj[definedEvent].emit(param); });
                });
            });
        });
    };
    NguiMap.prototype.clearObjectEvents = function (definedEvents, thisObj, prefix) {
        var _this = this;
        definedEvents.forEach(function (definedEvent) {
            var eventName = definedEvent
                .replace(/([A-Z])/g, function ($1) { return "_" + $1.toLowerCase(); }) // positionChanged -> position_changed
                .replace(/^map_/, ''); // map_click -> click  to avoid DOM conflicts
            _this.zone.runOutsideAngular(function () {
                google.maps.event.clearListeners(thisObj[prefix], eventName);
            });
        });
        if (thisObj[prefix]) {
            if (thisObj[prefix].setMap) {
                thisObj[prefix].setMap(null);
            }
            delete thisObj[prefix].nguiMapComponent;
            delete thisObj[prefix];
        }
    };
    return NguiMap;
}());
NguiMap = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__geo_coder__["a" /* GeoCoder */],
        __WEBPACK_IMPORTED_MODULE_2__option_builder__["a" /* OptionBuilder */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
], NguiMap);

//# sourceMappingURL=ngui-map.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(636);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionBuilder; });



/**
 * change any object to google object options
 * e.g. [1,2] -> new google.maps.LatLng(1,2);
 */
var OptionBuilder = (function () {
    function OptionBuilder() {
    }
    OptionBuilder.prototype.googlizeAllInputs = function (definedInputs, userInputs) {
        var _this = this;
        var options = {};
        // if options given from user, only take options and ignore other inputs
        if (userInputs.options) {
            console.log('userInputs.options .................', userInputs.options);
            options = userInputs.options;
            if (!this.onlyOptionsGiven(definedInputs, userInputs)) {
                console.error('when "options" are used, other options are ignored');
            }
        }
        else {
            definedInputs.forEach(function (input) {
                if (userInputs[input] !== undefined) {
                    options[input] = _this.googlize(userInputs[input], { key: input });
                }
            });
        }
        return options;
    };
    OptionBuilder.prototype.googlizeMultiple = function (inputs, options) {
        options = options || {};
        for (var key in inputs) {
            var val = inputs[key];
            // (non-strings are fully converted)
            if (typeof val !== 'string') {
                options[key] = val;
            } // sometimes '0' needed to stay as it is
            else if (!(options['doNotConverStringToNumber'] && val.match(/^[0-9]+$/))) {
                options[key] = this.googlize(val, { key: key });
            }
        } // for(var key in attrs)
        return options;
    };
    OptionBuilder.prototype.googlize = function (input, options) {
        options = options || {};
        var output = input;
        if (typeof input === 'string') {
            if (input === 'false') {
                output = false;
            }
            else if (input === '0') {
                output = 0;
            }
            else {
                output =
                    // -> googlize -> getJsonParsed -> googlizeMultiple -> googlize until all elements are parsed
                    this.getJSONParsed(input, options)
                        || this.getAnyMapObject(input)
                        || this.getAnyMapConstant(input, options)
                        || this.getDateObject(input)
                        || input;
            }
        }
        if (options['key']) {
            var key = options['key'];
            if (output instanceof Array) {
                if (key === 'bounds') {
                    output = new google.maps.LatLngBounds(output[0], output[1]);
                }
                else if (key === 'icons') {
                    output = this.getMapIcons(output);
                }
                else if (key === 'position' || key.match(/^geoFallback/)) {
                    output = this.getLatLng(output);
                }
            }
            else if (output instanceof Object) {
                if (key === 'icon') {
                    output = this.getMarkerIcon(output);
                }
                else if (key.match(/ControlOptions$/)) {
                    output = this.getMapControlOption(output);
                }
            }
        }
        // delete keys only for processing, not used by google
        delete output['doNotConverStringToNumber'];
        delete output['key'];
        return output;
    };
    OptionBuilder.prototype.getLatLng = function (input) {
        var output;
        if (input[0].constructor === Array) {
            output = input.map(function (el) { return new google.maps.LatLng(el[0], el[1]); });
        }
        else if (!isNaN(parseFloat(input[0])) && isFinite(input[0])) {
            output = new google.maps.LatLng(input[0], input[1]);
        }
        return output;
    };
    OptionBuilder.prototype.getJSONParsed = function (input, options) {
        var output;
        try {
            output = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* getJSON */])(input);
            if (output instanceof Array) {
                // [{a:1}] : not lat/lng ones
                if (output[0].constructor !== Object) {
                    output = this.getLatLng(output);
                }
            }
            else if (output === Object(output)) {
                // check for nested hashes and convert to Google API options
                var newOptions = options;
                newOptions['doNotConverStringToNumber'] = true;
                output = this.googlizeMultiple(output, newOptions);
            }
        }
        catch (e) {
        }
        return output;
    };
    OptionBuilder.prototype.getAnyMapObject = function (input) {
        var output;
        if (input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/)) {
            try {
                output = Function("return new google.maps." + input + ";")();
            }
            catch (e) { }
        }
        return output;
    };
    OptionBuilder.prototype.getAnyMapConstant = function (input, options) {
        var output;
        if (input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/)) {
            try {
                var matches = input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);
                output = google.maps[matches[1]][matches[2]];
            }
            catch (e) { }
        }
        else if (input.match(/^[A-Z]+$/)) {
            try {
                var capitalizedKey = options['key'].charAt(0).toUpperCase() +
                    options['key'].slice(1);
                output = google.maps[capitalizedKey][input];
            }
            catch (e) { }
        }
        return output;
    };
    /**
     * streetviewControl, panControl, etc, not a general control
     */
    OptionBuilder.prototype.getMapControlOption = function (controlOptions) {
        var newControlOptions = controlOptions;
        for (var key in newControlOptions) {
            if (newControlOptions[key]) {
                var value = newControlOptions[key];
                if (typeof value === 'string') {
                    value = value.toUpperCase();
                }
                else if (key === 'mapTypeIds') {
                    value = value.map(function (str) {
                        if (str.match(/^[A-Z]+$/)) {
                            return google.maps.MapTypeId[str.toUpperCase()];
                        }
                        else {
                            return str;
                        }
                    });
                }
                if (key === 'style') {
                    var objName = key.replace(/Options$/, '') + 'Style';
                    newControlOptions[key] = google.maps[objName][value];
                }
                else if (key === 'position') {
                    newControlOptions[key] = google.maps.ControlPosition[value];
                }
                else {
                    newControlOptions[key] = value;
                }
            }
        }
        return newControlOptions;
    };
    OptionBuilder.prototype.getDateObject = function (input) {
        var output;
        if (input.match(/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/)) {
            try {
                output = new Date(input);
            }
            catch (e) { }
        }
        return output;
    };
    OptionBuilder.prototype.getMapIcons = function (input) {
        return input.map(function (el) {
            if (el.icon.path.match(/^[A-Z_]+$/)) {
                el.icon.path = google.maps.SymbolPath[el.icon.path];
            }
            return el;
        });
    };
    OptionBuilder.prototype.getMarkerIcon = function (input) {
        var output = input;
        if (('' + output.path).match(/^[A-Z_]+$/)) {
            output.path = google.maps.SymbolPath[output.path];
        }
        for (var key in output) {
            var arr = output[key];
            if (key === 'anchor' || key === 'origin' || key === 'labelOrigin') {
                output[key] = new google.maps.Point(arr[0], arr[1]);
            }
            else if (key === 'size' || key === 'scaledSize') {
                output[key] = new google.maps.Size(arr[0], arr[1]);
            }
        }
        return output;
    };
    OptionBuilder.prototype.onlyOptionsGiven = function (definedInputs, userInputs) {
        for (var i = 0; i < definedInputs.length; i++) {
            var input = definedInputs[i];
            if (input !== 'options' && typeof userInputs[input] !== 'undefined') {
                return false;
            }
        }
        return true;
    };
    return OptionBuilder;
}());
OptionBuilder = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], OptionBuilder);

//# sourceMappingURL=option-builder.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_loader__ = __webpack_require__(618);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoCoder; });




/**
 *   Provides [defered/promise API](https://docs.angularjs.org/api/ng/service/$q)
 *   service for Google Geocoder service
 */
var GeoCoder = (function () {
    function GeoCoder(apiLoader) {
        this.apiLoader = apiLoader;
        this.apiLoaderSubs = [];
    }
    GeoCoder.prototype.geocode = function (options) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            _this.apiLoaderSubs.push(_this.apiLoader.api$
                .subscribe(function () { return _this.requestGeocode(options, responseObserver); }));
        });
    };
    GeoCoder.prototype.ngOnDestroy = function () {
        this.apiLoaderSubs.map(function (sub) { return sub.unsubscribe(); });
    };
    GeoCoder.prototype.requestGeocode = function (options, observer) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode(options, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                observer.next(results);
                observer.complete();
            }
            else {
                observer.error(results);
            }
        });
    };
    return GeoCoder;
}());
GeoCoder = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__api_loader__["a" /* NgMapApiLoader */]])
], GeoCoder);

//# sourceMappingURL=geo-coder.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigatorGeolocation; });



/**
 *  service for navigator.geolocation methods
 */
var NavigatorGeolocation = (function () {
    function NavigatorGeolocation() {
    }
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    responseObserver.next(position);
                    responseObserver.complete();
                }, function (evt) { return responseObserver.error(evt); }, geoLocationOptions);
            }
            else {
                responseObserver.error('Browser Geolocation service failed.');
            }
        });
    };
    ;
    return NavigatorGeolocation;
}());
NavigatorGeolocation = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], NavigatorGeolocation);

//# sourceMappingURL=navigator-geolocation.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MapService = MapService_1 = (function () {
    function MapService() {
        this.configObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    MapService.prototype.emitConfig = function (val) {
        this.configObservable.next(val);
    };
    MapService.prototype.setMapPath = function (value) {
        MapService_1.mapPath = value;
    };
    MapService.prototype.getMapPath = function () {
        return MapService_1.mapPath;
    };
    MapService.prototype.setdirectionsRenderer = function (value) {
        MapService_1.direction = value;
    };
    MapService.prototype.getdirectionsRenderer = function () {
        return MapService_1.direction;
    };
    MapService.prototype.setPosition = function (v) {
        MapService_1.pos = v;
    };
    MapService.prototype.getPosition = function () {
        return MapService_1.pos;
    };
    return MapService;
}());
MapService.pos = {};
MapService.mapPath = [];
MapService.direction = {};
MapService = MapService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MapService);

var MapService_1;
//# sourceMappingURL=pages.mapservice.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NG_MAP_CONFIG_TOKEN; });

var NG_MAP_CONFIG_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('NG_MAP_CONFIG_TOKEN');
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export jsonize */
/* harmony export (immutable) */ __webpack_exports__["b"] = getJSON;
/* harmony export (immutable) */ __webpack_exports__["c"] = toCamelCase;
/* harmony export (immutable) */ __webpack_exports__["a"] = isMapsApiLoaded;
/**
 * return json string from json-like string
 */
/**
 * return json string from json-like string
 */ function jsonize(str) {
    try {
        JSON.parse(str);
        return str;
    }
    catch (e) {
        return str
            .replace(/([\$\w]+)\s*:/g, // wrap keys without double quote
        function (_, $1) {
            return '"' + $1 + '":';
        })
            .replace(/'([^']+)'/g, // replacing single quote to double quote
        function (_, $1) {
            return '"' + $1 + '"';
        });
    }
}
;
/**
 * Returns string to an object by using JSON.parse()
 */
function getJSON(input) {
    if (typeof input === 'string') {
        var re = /^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/; // lat,lng
        if (input.match(re)) {
            input = '[' + input + ']';
        }
        return JSON.parse(jsonize(input));
    }
    else {
        return input;
    }
}
;
/* tslint:enable */
/**
 * Returns camel-cased from string 'Foo Bar' to 'fooBar'
 */
function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
}
function isMapsApiLoaded() {
    return typeof google === 'object' && typeof google.maps === 'object';
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ngui_map__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMarker; });






var INPUTS = [
    'position'
];
// to avoid DOM event conflicts map_*
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged',
    'map_click', 'map_mouseover', 'map_mouseout', 'map_mouseup', 'map_mousedown', 'map_drag', 'map_dragend'
];
/**
 * Wrapper to a create extend OverlayView at runtime, only after google maps is loaded.
 * Otherwise throws a google is unknown error.
 */
function getCustomMarkerOverlayView(htmlEl, position) {
    var CustomMarkerOverlayView = (function (_super) {
        __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](CustomMarkerOverlayView, _super);
        function CustomMarkerOverlayView(htmlEl, position) {
            var _this = _super.call(this) || this;
            _this.visible = true;
            _this.setPosition = function (position) {
                _this.htmlEl.style.visibility = 'hidden';
                if (position.constructor.name === 'Array') {
                    _this.position = new google.maps.LatLng(position[0], position[1]);
                }
                else if (typeof position === 'string') {
                    var geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ address: position }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            _this.setPosition(results[0].geometry.location);
                        }
                        else {
                        }
                    });
                }
                else if (position && typeof position.lng === 'function') {
                    _this.position = position;
                }
                if (_this.getProjection() && typeof _this.position.lng === 'function') {
                    var positionOnMap_1 = function () {
                        var posPixel = _this.getProjection().fromLatLngToDivPixel(_this.position);
                        var x = Math.round(posPixel.x - (_this.htmlEl.offsetWidth / 2));
                        var y = Math.round(posPixel.y - _this.htmlEl.offsetHeight / 2);
                        _this.htmlEl.style.left = x + 'px';
                        _this.htmlEl.style.top = y + 'px';
                        _this.htmlEl.style.visibility = 'visible';
                    };
                    if (_this.htmlEl.offsetWidth && _this.htmlEl.offsetHeight) {
                        positionOnMap_1();
                    }
                    else {
                        setTimeout(function () { return positionOnMap_1(); });
                    }
                }
            };
            _this.htmlEl = htmlEl;
            _this.position = position;
            return _this;
        }
        CustomMarkerOverlayView.prototype.onAdd = function () {
            this.getPanes().overlayMouseTarget.appendChild(this.htmlEl);
            // required for correct display inside google maps container
            this.htmlEl.style.position = 'absolute';
        };
        CustomMarkerOverlayView.prototype.draw = function () {
            this.setPosition(this.position);
            this.setZIndex(this.zIndex);
            this.setVisible(this.visible);
        };
        CustomMarkerOverlayView.prototype.onRemove = function () {
            //
        };
        CustomMarkerOverlayView.prototype.getPosition = function () {
            return this.position;
        };
        ;
        CustomMarkerOverlayView.prototype.setZIndex = function (zIndex) {
            zIndex && (this.zIndex = zIndex); /* jshint ignore:line */
            this.htmlEl.style.zIndex = this.zIndex;
        };
        CustomMarkerOverlayView.prototype.setVisible = function (visible) {
            this.htmlEl.style.display = visible ? 'inline-block' : 'none';
            this.visible = visible;
        };
        ;
        return CustomMarkerOverlayView;
    }(google.maps.OverlayView));
    return new CustomMarkerOverlayView(htmlEl, position);
}
var CustomMarker = (function () {
    function CustomMarker(nguiMapComponent, elementRef, nguiMap) {
        var _this = this;
        this.nguiMapComponent = nguiMapComponent;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.initialized$ = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.inputChanges$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS.forEach(function (output) { return _this[output] = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"](); });
    }
    // Initialize this map object when map is ready
    CustomMarker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    CustomMarker.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    CustomMarker.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        this.nguiMapComponent.removeFromMapObjectGroup('CustomMarker', this.mapObject);
        if (this.mapObject) {
            this.nguiMap.clearObjectEvents(OUTPUTS, this, 'mapObject');
        }
    };
    CustomMarker.prototype.initialize = function () {
        var _this = this;
        this.el = this.elementRef.nativeElement;
        this.mapObject = getCustomMarkerOverlayView(this.el, this['position']);
        this.mapObject.setMap(this.nguiMapComponent.map);
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS, this, 'mapObject');
        // update object when input changes
        __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__["debounceTime"].call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.mapObject, changes); });
        this.nguiMapComponent.addToMapObjectGroup('CustomMarker', this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return CustomMarker;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], CustomMarker.prototype, "initialized$", void 0);
CustomMarker = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'ngui-map > custom-marker',
        inputs: INPUTS,
        outputs: OUTPUTS,
        template: "\n    <ng-content></ng-content>\n  ",
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngui_map_component__["a" /* NguiMapComponent */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_4__services_ngui_map__["a" /* NguiMap */]])
], CustomMarker);

//# sourceMappingURL=custom-marker.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ngui_map__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoWindow; });






var INPUTS = [
    'content', 'disableAutoPan', 'maxWidth', 'pixelOffset', 'position', 'zIndex', 'options'
];
var OUTPUTS = [
    'closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'
];
var InfoWindow = (function () {
    function InfoWindow(elementRef, nguiMap, nguiMapComponent) {
        var _this = this;
        this.elementRef = elementRef;
        this.nguiMap = nguiMap;
        this.nguiMapComponent = nguiMapComponent;
        this.initialized$ = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.objectOptions = {};
        this.inputChanges$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.elementRef.nativeElement.style.display = 'none';
        OUTPUTS.forEach(function (output) { return _this[output] = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"](); });
    }
    // Initialize this map object when map is ready
    InfoWindow.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    InfoWindow.prototype.ngOnChanges = function (changes) {
        this.inputChanges$.next(changes);
    };
    // called when map is ready
    InfoWindow.prototype.initialize = function () {
        var _this = this;
        this.objectOptions = this.nguiMapComponent.optionBuilder.googlizeAllInputs(INPUTS, this);
        this.infoWindow = new google.maps.InfoWindow(this.objectOptions);
        this.infoWindow['mapObjectName'] = 'InfoWindow';
        // register infoWindow ids to NguiMap, so that it can be opened by id
        if (this.elementRef.nativeElement.id) {
            this.nguiMapComponent.infoWindows[this.elementRef.nativeElement.id] = this;
        }
        else {
            console.error('An InfoWindow must have an id. e.g. id="detail"');
        }
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(OUTPUTS, this, 'infoWindow');
        // update object when input changes
        __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_debounceTime__["debounceTime"].call(this.inputChanges$, 1000)
            .subscribe(function (changes) { return _this.nguiMap.updateGoogleObject(_this.infoWindow, changes); });
        this.nguiMapComponent.addToMapObjectGroup('InfoWindow', this.infoWindow);
        this.initialized$.emit(this.infoWindow);
    };
    InfoWindow.prototype.open = function (anchor) {
        // set content and open it
        this.infoWindow.setContent(this.template.element.nativeElement);
        this.infoWindow.open(this.nguiMapComponent.map, anchor);
    };
    InfoWindow.prototype.ngOnDestroy = function () {
        this.inputChanges$.complete();
        if (this.infoWindow) {
            this.nguiMap.clearObjectEvents(OUTPUTS, this, 'infoWindow');
            delete this.infoWindow;
        }
    };
    return InfoWindow;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], InfoWindow.prototype, "initialized$", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('template', { read: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"] }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"])
], InfoWindow.prototype, "template", void 0);
InfoWindow = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'ngui-map > info-window',
        inputs: INPUTS,
        outputs: OUTPUTS,
        template: "<div #template><ng-content></ng-content></div>",
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_4__services_ngui_map__["a" /* NguiMap */],
        __WEBPACK_IMPORTED_MODULE_5__ngui_map_component__["a" /* NguiMapComponent */]])
], InfoWindow);

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BicyclingLayer; });




var INPUTS = [];
var OUTPUTS = [];
var BicyclingLayer = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](BicyclingLayer, _super);
    // declare INPUTS for AOT compiler
    // declare OUTPUTS for AOT compiler
    function BicyclingLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'BicyclingLayer', INPUTS, OUTPUTS) || this;
    }
    return BicyclingLayer;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
BicyclingLayer = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > bicycling-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], BicyclingLayer);

//# sourceMappingURL=bicycling-layer.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circle; });




var INPUTS = [
    'center', 'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'map', 'radius',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
    // ngui-map specific inputs
    'geoFallbackCenter'
];
var OUTPUTS = [
    'centerChanged', 'click', 'dblclick', 'drag', 'dragend', 'dragstart',
    'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'radiusChanged', 'rightclick',
];
var Circle = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Circle, _super);
    function Circle(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Circle', INPUTS, OUTPUTS) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = {};
        return _this;
    }
    Circle.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setCenter();
    };
    Circle.prototype.setCenter = function () {
        var _this = this;
        if (!this['center']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (center) {
                var latLng = new google.maps.LatLng(center.coords.latitude, center.coords.longitude);
                _this.mapObject.setCenter(latLng);
            }, function (error) {
                console.error('ngui-map, error in finding the current position');
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['center'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['center'] }).subscribe(function (results) {
                _this.mapObject.setCenter(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error in finding location from', _this['center']);
                _this.mapObject.setCenter(_this.objectOptions['geoFallbackCenter'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    return Circle;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
Circle = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map>circle, ngui-map>map-circle',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], Circle);

//# sourceMappingURL=circle.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataLayer; });




var INPUTS = ['controlPosition', 'controls', 'drawingMode', 'featureFactory', 'style', 'geoJson'];
var OUTPUTS = [
    'addfeature', 'click', 'dblclick', 'mousedown', 'mouseout', 'mouseover',
    'mouseup', 'removefeature', 'removeproperty', 'rightclick', 'setgeometry', 'setproperty'
];
var DataLayer = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](DataLayer, _super);
    function DataLayer(nguiMapComponent) {
        return _super.call(this, nguiMapComponent, 'Data', INPUTS, OUTPUTS) || this;
    }
    // only called when map is ready
    DataLayer.prototype.initialize = function () {
        if (this['geoJson']) {
            // addGeoJson from an object
            this.nguiMapComponent.map.data.addGeoJson(this['geoJson']);
        }
        else if (this['geoJsonUrl']) {
            // loadGeoJson from a URL
            this.nguiMapComponent.map.data.loadGeoJson(this['geoJsonUrl']);
        }
        else {
            this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
            this.nguiMapComponent.map.data.add(this.objectOptions);
        }
        // unlike others, data belongs to map. e.g., map.data.loadGeoJson(), map.data.add()
        this.mapObject = this.nguiMapComponent.map.data;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return DataLayer;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
DataLayer = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > data-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], DataLayer);

//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_navigator_geolocation__ = __webpack_require__(625);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionsRenderer; });





var INPUTS = [
    'directions', 'draggable', 'hideRouteList', 'infoWindow', 'panel', 'markerOptions',
    'polylineOptions', 'preserveViewport', 'routeIndex', 'suppressBicyclingLayer',
    'suppressInfoWindows', 'suppressMarkers', 'suppressPolylines'
];
var OUTPUTS = ['directions_changed'];
var DirectionsRenderer = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](DirectionsRenderer, _super);
    function DirectionsRenderer(nguiMapComponent, geolocation) {
        var _this = _super.call(this, nguiMapComponent, 'DirectionsRenderer', INPUTS, OUTPUTS) || this;
        _this.geolocation = geolocation;
        return _this;
    }
    // only called when map is ready
    DirectionsRenderer.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        if (typeof this.objectOptions['panel'] === 'string') {
            this.objectOptions['panel'] = document.querySelector(this.objectOptions['panel']);
        }
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer(this.objectOptions);
        this.directionsRenderer.setMap(this.nguiMapComponent.map);
        // set google events listeners and emidirectionsRenderer to this outputs listeners
        this.showDirections(this.directionsRequest);
        this.nguiMap.setObjectEvents(this.outputs, this, 'directionsRenderer');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.directionsRenderer);
    };
    DirectionsRenderer.prototype.ngOnChanges = function (changes) {
        var newOptions = {};
        for (var key in changes) {
            if (this.inputs.indexOf(key) !== -1) {
                newOptions[key] = this.optionBuilder.googlize(changes[key].currentValue);
            }
        }
        if (changes['directionsRequest'] && this.directionsRenderer) {
            this.directionsService && this.showDirections(this.directionsRequest);
        }
    };
    DirectionsRenderer.prototype.showDirections = function (directionsRequest) {
        var _this = this;
        this.directionsService.route(directionsRequest, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsRenderer.setDirections(response);
            }
            else {
                console.error('Directions request failed due to ' + status);
            }
        });
    };
    DirectionsRenderer.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.nguiMap.clearObjectEvents(this.outputs, this, 'directionsRenderer');
    };
    return DirectionsRenderer;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('directions-request'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
], DirectionsRenderer.prototype, "directionsRequest", void 0);
DirectionsRenderer = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > directions-renderer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */],
        __WEBPACK_IMPORTED_MODULE_4__services_navigator_geolocation__["a" /* NavigatorGeolocation */]])
], DirectionsRenderer);

//# sourceMappingURL=directions-renderer.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingManager; });




var INPUTS = [
    'options',
    'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
    'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
var OUTPUTS = [
    'circlecomplete', 'markercomplete', 'overlaycomplete',
    'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];
var DrawingManager = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](DrawingManager, _super);
    function DrawingManager(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'DrawingManager', INPUTS, OUTPUTS) || this;
        _this.libraryName = 'drawing';
        return _this;
    }
    return DrawingManager;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
DrawingManager = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > drawing-manager',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], DrawingManager);

//# sourceMappingURL=drawing-manager.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroundOverlay; });




var INPUTS = ['url', 'bounds', 'clickable', 'opacity'];
var OUTPUTS = ['click', 'dblclick'];
var GroundOverlay = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](GroundOverlay, _super);
    function GroundOverlay(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'GroundOverlay', INPUTS, OUTPUTS) || this;
        _this.objectOptions = {};
        return _this;
    }
    // re-declaring initialize function. called when map is ready
    GroundOverlay.prototype.initialize = function () {
        // url, bounds are not the options of GroundOverlay
        this.objectOptions = this.optionBuilder.googlizeAllInputs(['clickable', 'opacity'], this);
        // noinspection TypeScriptUnresolvedFunction
        this.mapObject = new google.maps.GroundOverlay(this['url'], this['bounds'], this.objectOptions);
        this.mapObject.setMap(this.nguiMapComponent.map);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    return GroundOverlay;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
GroundOverlay = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > ground-overlay',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], GroundOverlay);

//# sourceMappingURL=ground-overlay.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatmapLayer; });




var INPUTS = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS = [];
var HeatmapLayer = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](HeatmapLayer, _super);
    function HeatmapLayer(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'HeatmapLayer', INPUTS, OUTPUTS) || this;
        // declare OUTPUTS for AOT compiler
        _this.libraryName = 'visualization';
        return _this;
    }
    return HeatmapLayer;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
HeatmapLayer = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > heatmap-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], HeatmapLayer);

//# sourceMappingURL=heatmap-layer.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KmlLayer; });




var INPUTS = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS = ['click', 'defaultviewport_changed', 'status_changed'];
var KmlLayer = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](KmlLayer, _super);
    function KmlLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'KmlLayer', INPUTS, OUTPUTS) || this;
    }
    return KmlLayer;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
KmlLayer = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > kml-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], KmlLayer);

//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Marker; });




var INPUTS = [
    'anchorPoint', 'animation', 'clickable', 'cursor', 'draggable', 'icon', 'label', 'opacity',
    'optimized', 'place', 'position', 'shape', 'title', 'visible', 'zIndex', 'options',
    // ngui-map specific inputs
    'geoFallbackPosition'
];
var OUTPUTS = [
    'animationChanged', 'click', 'clickableChanged', 'cursorChanged', 'dblclick', 'drag', 'dragend', 'draggableChanged',
    'dragstart', 'flatChanged', 'iconChanged', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'positionChanged', 'rightclick',
    'shapeChanged', 'titleChanged', 'visibleChanged', 'zindexChanged'
];
var Marker = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Marker, _super);
    function Marker(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'Marker', INPUTS, OUTPUTS) || this;
        _this.nguiMapComp = nguiMapComp;
        _this.objectOptions = {};
        return _this;
    }
    // Initialize this map object when map is ready
    Marker.prototype.ngOnInit = function () {
        var _this = this;
        if (this.nguiMapComponent.mapIdledOnce) {
            this.initialize();
        }
        else {
            this.nguiMapComponent.mapReady$.subscribe(function (map) { return _this.initialize(); });
        }
    };
    Marker.prototype.initialize = function () {
        _super.prototype.initialize.call(this);
        this.setPosition();
    };
    Marker.prototype.setPosition = function () {
        var _this = this;
        if (!this['position']) {
            this._subscriptions.push(this.nguiMapComp.geolocation.getCurrentPosition().subscribe(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                _this.mapObject.setPosition(latLng);
            }, function (error) {
                console.error('ngui-map, error finding the current location');
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
        else if (typeof this['position'] === 'string') {
            this._subscriptions.push(this.nguiMapComp.geoCoder.geocode({ address: this['position'] }).subscribe(function (results) {
                _this.mapObject.setPosition(results[0].geometry.location);
            }, function (error) {
                console.error('ngui-map, error finding the location from', _this['position']);
                _this.mapObject.setPosition(_this.objectOptions['geoFallbackPosition'] || new google.maps.LatLng(0, 0));
            }));
        }
    };
    return Marker;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
Marker = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > marker',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], Marker);

//# sourceMappingURL=marker.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_loader__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_option_builder__ = __webpack_require__(620);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesAutoComplete; });




var PlacesAutoComplete = (function () {
    function PlacesAutoComplete(optionBuilder, elementRef, apiLoader) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.apiLoader = apiLoader;
        this.place_changed = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.initialized$ = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        // only called when map is ready
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            _this.autocomplete.addListener('place_changed', function (place) {
                _this.place_changed.emit(_this.autocomplete.getPlace());
            });
            _this.initialized$.emit(_this.autocomplete);
        };
        apiLoader.load();
        apiLoader.api$.subscribe(function () { return _this.initialize(); });
    }
    return PlacesAutoComplete;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('bounds'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
], PlacesAutoComplete.prototype, "bounds", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('componentRestrictions'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Object)
], PlacesAutoComplete.prototype, "componentRestrictions", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('types'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", Array)
], PlacesAutoComplete.prototype, "types", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])('place_changed'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], PlacesAutoComplete.prototype, "place_changed", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], PlacesAutoComplete.prototype, "initialized$", void 0);
PlacesAutoComplete = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[places-auto-complete]'
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_option_builder__["a" /* OptionBuilder */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"],
        __WEBPACK_IMPORTED_MODULE_2__services_api_loader__["a" /* NgMapApiLoader */]])
], PlacesAutoComplete);

//# sourceMappingURL=places-auto-complete.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Polygon; });




var INPUTS = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'paths',
    'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'options',
];
var OUTPUTS = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick',
];
var Polygon = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Polygon, _super);
    function Polygon(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polygon', INPUTS, OUTPUTS) || this;
    }
    return Polygon;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
Polygon = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map>polygon, ngui-map>map-polygon',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], Polygon);

//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Polyline; });




var INPUTS = [
    'clickable', 'draggable', 'editable', 'geodesic', 'icons', 'path', 'strokeColor',
    'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'options'
];
var OUTPUTS = [
    'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'mousedown',
    'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'
];
var Polyline = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Polyline, _super);
    function Polyline(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'Polyline', INPUTS, OUTPUTS) || this;
    }
    return Polyline;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
Polyline = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > polyline',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], Polyline);

//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreetViewPanorama; });




var INPUTS = [
    'selector', 'options',
    'addressControl', 'addressControlOptions', 'clickToGo', 'disableDefaultUI', 'disableDoubleClickZoom',
    'enableCloseButton', 'fullscreenControl', 'fullscreenControlOptions', 'imageDateControl', 'linksControl',
    'motionTracking', 'motionTrackingControl', 'panControl', 'panControlOptions', 'pano',
    'position', 'pov', 'scrollwheel', 'showRoadLabels', 'visible', 'zoomControl', 'zoomControlOptions'
];
var OUTPUTS = [
    'closeclick', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'status_changed',
    'visible_changed', 'zoom_changed'
];
var StreetViewPanorama = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](StreetViewPanorama, _super);
    function StreetViewPanorama(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'StreetViewPanorama', INPUTS, OUTPUTS) || this;
    }
    // only called when map is ready
    StreetViewPanorama.prototype.initialize = function () {
        this.objectOptions = this.optionBuilder.googlizeAllInputs(this.inputs, this);
        var element;
        if (this.objectOptions.selector) {
            // noinspection TypeScriptValidateTypes
            element = document.querySelector(this['selector']);
            delete this.objectOptions.selector;
        }
        else {
            element = this.nguiMapComponent.el;
        }
        // will be set after geocoded
        typeof this.objectOptions.position === 'string' && (delete this.objectOptions.position);
        this.mapObject = new google.maps[this.mapObjectName](element, this.objectOptions);
        this.mapObject['mapObjectName'] = this.mapObjectName;
        this.mapObject['nguiMapComponent'] = this.nguiMapComponent;
        // set google events listeners and emits to this outputs listeners
        this.nguiMap.setObjectEvents(this.outputs, this, 'mapObject');
        this.nguiMapComponent.addToMapObjectGroup(this.mapObjectName, this.mapObject);
        this.initialized$.emit(this.mapObject);
    };
    // When destroyed, remove event listener, and delete this object to prevent memory leak
    StreetViewPanorama.prototype.ngOnDestroy = function () {
        if (this.nguiMapComponent.el) {
            this.nguiMap.clearObjectEvents(this.outputs, this, 'mapObject');
        }
    };
    return StreetViewPanorama;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
StreetViewPanorama = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > street-view-panorama',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], StreetViewPanorama);

//# sourceMappingURL=street-view-panorama.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficLayer; });




var INPUTS = ['autoRefresh', 'options'];
var OUTPUTS = [];
var TrafficLayer = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](TrafficLayer, _super);
    // declare OUTPUTS for AOT compiler
    function TrafficLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TrafficLayer', INPUTS, OUTPUTS) || this;
    }
    return TrafficLayer;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
TrafficLayer = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > traffic-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], TrafficLayer);

//# sourceMappingURL=traffic-layer.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_map_directive__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransitLayer; });




var INPUTS = [];
var OUTPUTS = [];
var TransitLayer = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](TransitLayer, _super);
    // declare INPUTS for AOT compiler
    // declare OUTPUTS for AOT compiler
    function TransitLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TransitLayer', INPUTS, OUTPUTS) || this;
    }
    return TransitLayer;
}(__WEBPACK_IMPORTED_MODULE_2__base_map_directive__["a" /* BaseMapDirective */]));
TransitLayer = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'ngui-map > transit-layer',
        inputs: INPUTS,
        outputs: OUTPUTS,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__components_ngui_map_component__["a" /* NguiMapComponent */]])
], TransitLayer);

//# sourceMappingURL=transit-layer.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_bicycling_layer__ = __webpack_require__(639);
/* unused harmony reexport BicyclingLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_navigator_geolocation__ = __webpack_require__(625);
/* unused harmony reexport NavigatorGeolocation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_option_builder__ = __webpack_require__(620);
/* unused harmony reexport OptionBuilder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config__ = __webpack_require__(635);
/* unused harmony reexport NG_MAP_CONFIG_TOKEN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_loader__ = __webpack_require__(618);
/* unused harmony reexport NgMapApiLoader */
/* unused harmony reexport NgMapAsyncApiLoader */
/* unused harmony reexport NgMapAsyncCallbackApiLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ngui_map_component__ = __webpack_require__(299);
/* unused harmony reexport NguiMapComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_info_window__ = __webpack_require__(638);
/* unused harmony reexport InfoWindow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_custom_marker__ = __webpack_require__(637);
/* unused harmony reexport CustomMarker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_circle__ = __webpack_require__(640);
/* unused harmony reexport Circle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_data_layer__ = __webpack_require__(641);
/* unused harmony reexport DataLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_directions_renderer__ = __webpack_require__(642);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_10__directives_directions_renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_drawing_manager__ = __webpack_require__(643);
/* unused harmony reexport DrawingManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_geo_coder__ = __webpack_require__(624);
/* unused harmony reexport GeoCoder */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_ground_overlay__ = __webpack_require__(644);
/* unused harmony reexport GroundOverlay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_heatmap_layer__ = __webpack_require__(645);
/* unused harmony reexport HeatmapLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_kml_layer__ = __webpack_require__(646);
/* unused harmony reexport KmlLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_marker__ = __webpack_require__(647);
/* unused harmony reexport Marker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_ngui_map__ = __webpack_require__(619);
/* unused harmony reexport NguiMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_places_auto_complete__ = __webpack_require__(648);
/* unused harmony reexport PlacesAutoComplete */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_polygon__ = __webpack_require__(649);
/* unused harmony reexport Polygon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_polyline__ = __webpack_require__(650);
/* unused harmony reexport Polyline */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_street_view_panorama__ = __webpack_require__(651);
/* unused harmony reexport StreetViewPanorama */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_traffic_layer__ = __webpack_require__(652);
/* unused harmony reexport TrafficLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_transit_layer__ = __webpack_require__(653);
/* unused harmony reexport TransitLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngui_map_module__ = __webpack_require__(660);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_24__ngui_map_module__["a"]; });

























//# sourceMappingURL=index.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_option_builder__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_geo_coder__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_navigator_geolocation__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_config__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_api_loader__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ngui_map_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_info_window__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_custom_marker__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_bicycling_layer__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_circle__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_data_layer__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_directions_renderer__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_drawing_manager__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_ground_overlay__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_heatmap_layer__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_kml_layer__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_marker__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_ngui_map__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_places_auto_complete__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_polygon__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_polyline__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__directives_street_view_panorama__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_traffic_layer__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_transit_layer__ = __webpack_require__(653);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NguiMapModule; });



























var COMPONENTS_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_8__components_ngui_map_component__["a" /* NguiMapComponent */], __WEBPACK_IMPORTED_MODULE_9__components_info_window__["a" /* InfoWindow */],
    __WEBPACK_IMPORTED_MODULE_19__directives_marker__["a" /* Marker */], __WEBPACK_IMPORTED_MODULE_12__directives_circle__["a" /* Circle */], __WEBPACK_IMPORTED_MODULE_10__components_custom_marker__["a" /* CustomMarker */], __WEBPACK_IMPORTED_MODULE_22__directives_polygon__["a" /* Polygon */], __WEBPACK_IMPORTED_MODULE_9__components_info_window__["a" /* InfoWindow */], __WEBPACK_IMPORTED_MODULE_23__directives_polyline__["a" /* Polyline */], __WEBPACK_IMPORTED_MODULE_16__directives_ground_overlay__["a" /* GroundOverlay */],
    __WEBPACK_IMPORTED_MODULE_26__directives_transit_layer__["a" /* TransitLayer */], __WEBPACK_IMPORTED_MODULE_25__directives_traffic_layer__["a" /* TrafficLayer */], __WEBPACK_IMPORTED_MODULE_17__directives_heatmap_layer__["a" /* HeatmapLayer */], __WEBPACK_IMPORTED_MODULE_11__directives_bicycling_layer__["a" /* BicyclingLayer */], __WEBPACK_IMPORTED_MODULE_18__directives_kml_layer__["a" /* KmlLayer */], __WEBPACK_IMPORTED_MODULE_13__directives_data_layer__["a" /* DataLayer */],
    __WEBPACK_IMPORTED_MODULE_24__directives_street_view_panorama__["a" /* StreetViewPanorama */], __WEBPACK_IMPORTED_MODULE_21__directives_places_auto_complete__["a" /* PlacesAutoComplete */], __WEBPACK_IMPORTED_MODULE_14__directives_directions_renderer__["a" /* DirectionsRenderer */],
    __WEBPACK_IMPORTED_MODULE_15__directives_drawing_manager__["a" /* DrawingManager */],
];
var NguiMapModule = NguiMapModule_1 = (function () {
    function NguiMapModule() {
    }
    NguiMapModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NguiMapModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_6__services_config__["a" /* NG_MAP_CONFIG_TOKEN */], useValue: config }
            ],
        };
    };
    return NguiMapModule;
}());
NguiMapModule = NguiMapModule_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
        declarations: COMPONENTS_DIRECTIVES,
        exports: [COMPONENTS_DIRECTIVES],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_geo_coder__["a" /* GeoCoder */],
            __WEBPACK_IMPORTED_MODULE_5__services_navigator_geolocation__["a" /* NavigatorGeolocation */],
            __WEBPACK_IMPORTED_MODULE_20__services_ngui_map__["a" /* NguiMap */],
            __WEBPACK_IMPORTED_MODULE_3__services_option_builder__["a" /* OptionBuilder */],
            { provide: __WEBPACK_IMPORTED_MODULE_7__services_api_loader__["a" /* NgMapApiLoader */], useClass: __WEBPACK_IMPORTED_MODULE_7__services_api_loader__["b" /* NgMapAsyncCallbackApiLoader */] },
        ]
    })
], NguiMapModule);

var NguiMapModule_1;
//# sourceMappingURL=ngui-map.module.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_service__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_mapservice__ = __webpack_require__(629);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HistoryComponent = (function () {
    function HistoryComponent(router, fb, historyService, toastrService, mapService) {
        this.mapService = mapService;
        this.responseJson = {};
        this.vehicleJson = [];
        this.latlngitude = "18.571635, 73.7707283";
        this.zoom = 16;
        this.mapPath = [];
        this.router = router;
        this.historyService = historyService;
        this.toastrService = toastrService;
        this.vehicleHistory = fb.group({
            'device_id': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'start': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'end': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.device_id = this.vehicleHistory.controls['device_id'];
        this.start = this.vehicleHistory.controls['start'];
        this.end = this.vehicleHistory.controls['end'];
        this.vehicleHistory.controls['device_id'].setValue('0');
        this.vehicleHistory.controls['start'].setValue('2018-02-14T06:02:00');
        this.vehicleHistory.controls['end'].setValue('2018-03-20T23:59:00');
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.getVehicle();
    };
    HistoryComponent.prototype.getVehicle = function () {
        var _this = this;
        this.historyService.getVehicle().subscribe(function (data) {
            _this.vehicleJson = data["fleet_status"];
        });
    };
    HistoryComponent.prototype.onSubmit = function (values) {
        var _this = this;
        if (this.vehicleHistory.valid) {
            this.historyService.getHistory(values).subscribe(function (data) {
                _this.responseJson = data;
                if (data["flag"] == "0") {
                    _this.toastrService.error('No Data Found');
                }
                else {
                    _this.setMapPath();
                }
            });
        }
    };
    HistoryComponent.prototype.setMapPath = function () {
        var _this = this;
        this.zoom = 18;
        this.mapPath = [];
        this.responseJson.forEach(function (item, index) {
            var latObject = {};
            latObject["lat"] = Number(item.Latitude);
            latObject["lng"] = Number(item.Longitude);
            _this.mapPath.push(latObject);
        });
        this.mapService.setMapPath(this.mapPath);
    };
    return HistoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closeBtn'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], HistoryComponent.prototype, "closeBtn", void 0);
HistoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-layouts',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(867),
        styles: [__webpack_require__(381)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__history_service__["a" /* HistoryService */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_5__pages_mapservice__["a" /* MapService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__history_service__["a" /* HistoryService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__pages_mapservice__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pages_mapservice__["a" /* MapService */]) === "function" && _f || Object])
], HistoryComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_httpurl__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HistoryService = (function () {
    function HistoryService(http) {
        this.http = http;
    }
    HistoryService.prototype.getHistory = function (value) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__pages_httpurl__["a" /* UrlUtility */].getHistory, value)
            .map(function (res) { return res.json(); });
    };
    HistoryService.prototype.getVehicle = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__pages_httpurl__["a" /* UrlUtility */].getAllVehicle)
            .map(function (res) { return res.json(); });
    };
    return HistoryService;
}());
HistoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HistoryService);

var _a;
//# sourceMappingURL=history.service.js.map

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "<!-- <ngui-map  [zoom]=\"zoom\" [center]=\"latlngitude\" style=\"width: 1650px;height: 850px;margin-left:-30px;\">\n    <polyline [editable]=\"true\"\n      [path]=\"mapPath\"\n      [geodesic]=\"true\"\n      [strokeColor]=\"'#1583F0'\"\n      [strokeOpacity]=\"5\"\n      [strokeWeight]=\"5\"></polyline>\n  </ngui-map>\n<div style=\"position: absolute;top: 5px;left: 2;width: 20%;\">\t\n -->\n<div class=\"row\">\n\n\t<div class=\"col-xl-12 col-lg-12 col-12 bottom-30\">\n\t\t<div widget class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<span>Vehicle History</span>\n\t\t\t\t<div class=\"widget-controls\">\n\t\t\t\t\t<a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i\n\t\t\t\t\t\tclass=\"fa fa-chevron-down\"></i></a> <a data-widgster=\"collapse\"\n\t\t\t\t\t\thref=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-block widget-body\">\n\n\t\t\t\t<form [formGroup]=\"vehicleHistory\"\n\t\t\t\t\t(ngSubmit)=\"onSubmit(vehicleHistory.value)\" class=\" text-left\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t  <select class=\"form-control\" [formControl]=\"device_id\">\n\t\t\t\t\t\t\t<option selected=\"selected\" value=\"0\">-- Select Vehicle --</option>\n\t\t\t\t\t\t\t<option *ngFor=\"let key of vehicleJson;\" value=\"{{key?.device_imei}}\">{{key?.vehicle}}</option>\n\t\t\t\t\t  </select> \n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input [formControl]=\"start\" class=\"form-control checking-field\"\n\t\t\t\t\t\t\tplaceholder=\"Start Date\" type=\"datetime-local\"\n\t\t\t\t\t\t\tvalue=\"2018-02-14T06:02:00\"> <span\n\t\t\t\t\t\t\tclass=\"help-block text-danger\"\n\t\t\t\t\t\t\t*ngIf=\"vehicleHistory.get('start').touched && vehicleHistory.get('start').hasError('required')\">Start\n\t\t\t\t\t\t\tDate required</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input [formControl]=\"end\" class=\"form-control checking-field\"\n\t\t\t\t\t\t\tplaceholder=\"End Date\" type=\"datetime-local\"\n\t\t\t\t\t\t\tvalue=\"2018-03-20T23:59:00\"> <span\n\t\t\t\t\t\t\tclass=\"help-block text-danger\"\n\t\t\t\t\t\t\t*ngIf=\"vehicleHistory.get('end').touched && vehicleHistory.get('end').hasError('required')\">End\n\t\t\t\t\t\t\tDate required</span>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button [disabled]=\"!vehicleHistory.valid\"\n\t\t\t\t\t\t\tclass=\"successbutton\" type=\"submit\"><i class=\"fa fa-save\"></i>&nbsp;Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n"

/***/ })

});
//# sourceMappingURL=8.chunk.js.map