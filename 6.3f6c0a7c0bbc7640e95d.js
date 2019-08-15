(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/app/config/constants/wfh.ts":
/*!*****************************************!*\
  !*** ./src/app/config/constants/wfh.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var STATUS;
    (function (STATUS) {
        STATUS[STATUS["APPLIED"] = 1] = "APPLIED";
        STATUS[STATUS["APPROVED"] = 2] = "APPROVED";
        STATUS[STATUS["REJECTED"] = 3] = "REJECTED";
        STATUS[STATUS["DELETED"] = 4] = "DELETED";
    })(STATUS = exports.STATUS || (exports.STATUS = {}));
    var OPERATION;
    (function (OPERATION) {
        OPERATION[OPERATION["APPLIED"] = 1] = "APPLIED";
        OPERATION[OPERATION["APPROVED"] = 2] = "APPROVED";
        OPERATION[OPERATION["REJECTED"] = 3] = "REJECTED";
        OPERATION[OPERATION["DELETED"] = 4] = "DELETED";
    })(OPERATION = exports.OPERATION || (exports.OPERATION = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/config/locales/en.json":
/*!****************************************!*\
  !*** ./src/app/config/locales/en.json ***!
  \****************************************/
/*! exports provided: access_control, addon, compensatory_off, entity, feedback, leave, leave_policy, metadata, organization, department, holiday, user, wfh_policy, wfh, default */
/***/ (function(module) {

module.exports = {"access_control":{"status":{"0":"Inactive","1":"Active"},"type":{"1":"Locked Entity User","2":"Locked Entity","3":"Custom","4":"Locked User"},"operation":{"1":"Create","2":"Update"}},"addon":{"price":{"1":"Monthly","2":"Quaterly","3":"Half-Yearly","4":"Yearly","5":"One-Time"},"currency":{"INR":"INR"},"type":{"1":"Employee","2":"Module"},"status":{"0":"Inactive","1":"Active"}},"compensatory_off":{"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"},"expiry":{"1":"Never","2":"End of Leave Policy","3":"After Month(s)","4":"After Day(s)"}},"entity":{"type":{"1":"Core","2":"Addon","3":"Private"},"status":{"0":"Inactive","1":"Active"},"access":{"1":"Public","2":"Private","3":"Unrestricted","4":"Exclusive"}},"feedback":{"status":{"0":"Inactive","1":"Active"},"operation":{"1":"Create"}},"leave":{"type":{"EL":"Earned Leave","CL":"Casual Leave","SL":"Sick Leave","ML":"Maternity Leave","PL":"Paternity Leave","LWP":"Leave without Pay","COMP":"Compensatory-Off"},"duration":{"1":"Full-Day","2":"First-Half","3":"Second-Half"},"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"},"operation":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"}},"leave_policy":{"status":{"0":"Inactive","1":"Active","2":"Scheduled","3":"Expired"},"operation":{"1":"Create","2":"Activate","3":"Expire"},"allocation":{"1":"One-Time","2":"Quarterly","3":"Monthly","4":"On-Demand"}},"metadata":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"level":{"1":"High School","2":"Graduate","3":"Post-Graduate","4":"Doctorate","5":"Diploma"}},"organization":{"status":{"0":"Inactive","1":"Active","2":"Pending"},"operation":{"1":"Create","2":"Confirm","3":"Update"},"mfa":{"1":"Optional","2":"Mandatory"},"mfa_type":{"1":"QR Code","2":"Security Questions"},"auth_type":{"1":"Password","2":"OAuth","3":"SAML"}},"department":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"operation":{"1":"Create","2":"Update"}},"holiday":{"operation":{"1":"Create","2":"Update"}},"user":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"gender":{"1":"Male","2":"Female","3":"Other"},"marital_status":{"1":"Unmarried","2":"Married"},"operation":{"1":"Create","2":"Set Password","3":"Reset Password","4":"Change Password","5":"Update","6":"Assign Leaves"},"social_security":{"pan":"PAN Card","aadhaar":"Aadhaar Card","passport":"Passport"},"calendar_date":{"1":"Leave"},"mfa":{"1":"E-Mail ID","2":"QR Code","3":"Question & Answer","4":"Security Key"}},"wfh_policy":{"allowed_period":{"1":"Forever","2":"Weekly","3":"Monthly","4":"Quarterly","5":"Yearly"},"status":{"0":"Inactive","1":"Active","2":"Expired"}},"wfh":{"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"}}};

/***/ }),

/***/ "./src/app/modules/application-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/application-pipes.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! shared/pipes/constants.pipe */ "./src/app/shared/pipes/constants.pipe.ts"), __webpack_require__(/*! shared/pipes/constants-array.pipe */ "./src/app/shared/pipes/constants-array.pipe.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, forms_1, constants_pipe_1, constants_array_pipe_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApplicationPipesModule = (function () {
        function ApplicationPipesModule() {
        }
        ApplicationPipesModule = __decorate([
            core_1.NgModule({
                imports: [
                    forms_1.FormsModule,
                    common_1.CommonModule
                ],
                declarations: [
                    constants_pipe_1.ConstantsPipe,
                    constants_array_pipe_1.ConstantsArrayPipe
                ],
                exports: [
                    constants_pipe_1.ConstantsPipe,
                    constants_array_pipe_1.ConstantsArrayPipe
                ]
            })
        ], ApplicationPipesModule);
        return ApplicationPipesModule;
    }());
    exports.ApplicationPipesModule = ApplicationPipesModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/apply-wfh/apply-wfh.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/work-from-home/apply-wfh/apply-wfh.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n\n              <form #wfhForm=\"ngForm\">\n\n                <div class=\"form-group row\">\n\n                  <label class=\"col-3 col-form-label\">\n                    Date <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-3 input-group\">\n                    <input type=\"text\" name=\"date\" class=\"form-control\" id=\"date\" [(ngModel)]=\"wfh.date\" bsDatepicker #date=\"bsDatepicker\" [bsConfig]=\"dateConfig\">\n                    <span class=\"input-group-append\">\n                      <button class=\"btn\" (click)=\"date.show()\" [attr.aria-expanded]=\"date.isOpen\">\n                        <i class=\"fa fa-calendar\"></i>\n                      </button>\n                    </span>\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-3 col-form-label\">\n                    Summary <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-9\">\n                    <textarea name=\"summary\" class=\"form-control\" id=\"summary\" [(ngModel)]=\"wfh.summary\"></textarea>\n                  </div>\n                </div>\n\n              </form>\n\n              <div class=\"form-actions row mt-4\">\n                <div class=\"col-12\">\n                  <button type=\"button\" class=\"btn btn-link pull-right\" routerLink=\"/work-from-home\">Cancel</button>\n                  <button [disabled]=\"!wfhForm.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"applyWfh()\">Apply</button>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    Work from Home Applied Successfully\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    <p>There was an error applying for Work from Home.</p>\n    <p>{{error}}</p>\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes \">{{attribute}}</li>\n    </ul>\n  </div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/work-from-home/apply-wfh/apply-wfh.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/work-from-home/apply-wfh/apply-wfh.component.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/work-from-home/work-from-home.service */ "./src/app/modules/work-from-home/work-from-home.service.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, success_modal_component_1, error_modal_component_1, work_from_home_service_1, ngx_bootstrap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var error_map = {
        date: 'Date',
        summary: 'Summary'
    };
    var ApplyWfhComponent = (function () {
        function ApplyWfhComponent(wfhService, datePipe) {
            this.wfhService = wfhService;
            this.datePipe = datePipe;
            this.wfh = new work_from_home_service_1.ApplyWfh();
            this.dateConfig = {
                dateInputFormat: 'YYYY-MM-DD',
                containerClass: 'theme-blue',
                showWeekNumbers: false
            };
        }
        ApplyWfhComponent.prototype.__validate = function () {
            return true;
        };
        ApplyWfhComponent.prototype.__sanitizeWfh = function (wfh) {
            if (wfh.date !== undefined) {
                wfh.date = this.datePipe.transform(wfh.date, 'yyyy-MM-dd');
            }
            return wfh;
        };
        ApplyWfhComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        ApplyWfhComponent.prototype.applyWfh = function () {
            var _this = this;
            if (this.__validate()) {
                var wfh = JSON.parse(JSON.stringify(this.wfh));
                wfh = this.__sanitizeWfh(wfh);
                this.error = '';
                this.invalid_attributes = [];
                this.wfhService.apply(wfh).then(function (data) {
                    _this.successModal.show('/work-from-home/list');
                }).catch(function (err) {
                    _this.error = err.error.message.text;
                    if (err.error.invalid_attributes) {
                        for (var key in err.error.invalid_attributes) {
                            if (err.error.invalid_attributes.hasOwnProperty(key)) {
                                _this.invalid_attributes.push(error_map[key] ? error_map[key] : err.error.invalid_attributes[key]);
                            }
                        }
                    }
                    _this.errorModal.show();
                });
            }
        };
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ApplyWfhComponent.prototype, "errorModal", void 0);
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ApplyWfhComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('date'),
            __metadata("design:type", ngx_bootstrap_1.BsDatepickerDirective)
        ], ApplyWfhComponent.prototype, "date", void 0);
        ApplyWfhComponent = __decorate([
            core_1.Component({
                selector: 'app-apply-wfh',
                template: __webpack_require__(/*! ./apply-wfh.component.html */ "./src/app/modules/work-from-home/apply-wfh/apply-wfh.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [work_from_home_service_1.WfhService, common_1.DatePipe]
            }),
            __metadata("design:paramtypes", [work_from_home_service_1.WfhService,
                common_1.DatePipe])
        ], ApplyWfhComponent);
        return ApplyWfhComponent;
    }());
    exports.ApplyWfhComponent = ApplyWfhComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/list-wfh/list-wfh.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/work-from-home/list-wfh/list-wfh.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn btn-primary mr-1\" type=\"button\" routerLink=\"/work-from-home/review\" *ngIf=\"reviewAllowed\">+ Review WFH(s)</button>\n              <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/work-from-home/apply\" *ngIf=\"applyAllowed\">+ Apply WFH</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading WFHs</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && wfhs.length == 0\">\n            <h3>No WFHs applied</h3>\n          </div>\n\n          <table class=\"table table-striped\" *ngIf=\"!loading && wfhs.length > 0\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Date</th>\n                <th>Summary</th>\n                <th>Reviewed By</th>\n                <th>Status</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let wfh of wfhs; let i = index\">\n                <td>{{i+1}}.</td>\n                <td>{{wfh.date | date: 'dd-MM-yyyy'}}</td>\n                <td>{{wfh.summary}}</td>\n                <td>\n                  <span *ngIf=\"wfh.reviewed_by\">{{wfh.reviewed_by.name}}</span>\n                </td>\n                <td>\n                  <span class=\"badge\" [ngClass]=\"getStatusBadge(wfh.wfh_status)\">\n                    {{'wfh.status.' + wfh.wfh_status | constants}}\n                  </span>\n                </td>\n                <td>\n\n                  <button *ngIf=\"wfh.wfh_status === 1\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"cancelWfh(i)\" [disabled]=\"cancelling[i]\">\n                    <span class=\"fa fa-spinner fa-spin\" *ngIf=\"cancelling[i]\"></span>&nbsp;Cancel\n                  </button>\n\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/work-from-home/list-wfh/list-wfh.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/work-from-home/list-wfh/list-wfh.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/work-from-home/work-from-home.service */ "./src/app/modules/work-from-home/work-from-home.service.ts"), __webpack_require__(/*! config/constants/wfh */ "./src/app/config/constants/wfh.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, work_from_home_service_1, wfh_1, access_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListWfhComponent = (function () {
        function ListWfhComponent(wfhService, access) {
            this.wfhService = wfhService;
            this.access = access;
            this.wfhs = [];
            this.applyAllowed = false;
            this.reviewAllowed = false;
            this.loading = false;
            this.cancelling = new Array();
        }
        ListWfhComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'work-from-home',
                                    entity: 'work-from-home',
                                    action: 'create'
                                })];
                        case 1:
                            _a.applyAllowed = _c.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'work-from-home',
                                    entity: 'work-from-home',
                                    action: 'review'
                                })];
                        case 2:
                            _b.reviewAllowed = _c.sent();
                            this.loadWfhs();
                            return [2];
                    }
                });
            });
        };
        ListWfhComponent.prototype.loadWfhs = function () {
            var _this = this;
            var self = this;
            this.loading = true;
            this.wfhService.getWfhs().then(function (wfhs) {
                _this.loading = false;
                _this.wfhs = wfhs;
            });
        };
        ListWfhComponent.prototype.cancelWfh = function (index) {
            var wfh_id = this.wfhs[index]._id;
            var self = this;
            this.cancelling[index] = true;
            this.wfhService.cancel(wfh_id).then(function (response) {
                self.wfhs[index].wfh_status = wfh_1.STATUS.DELETED;
                self.cancelling[index] = false;
            });
        };
        ListWfhComponent.prototype.getStatusBadge = function (status) {
            switch (status) {
                case 2: return 'badge-success';
                case 3: return 'badge-danger';
                case 4: return 'badge-dark';
                default: return 'badge-default';
            }
        };
        ListWfhComponent = __decorate([
            core_1.Component({
                selector: 'app-list-wfh',
                template: __webpack_require__(/*! ./list-wfh.component.html */ "./src/app/modules/work-from-home/list-wfh/list-wfh.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [work_from_home_service_1.WfhService]
            }),
            __metadata("design:paramtypes", [work_from_home_service_1.WfhService,
                access_service_1.Access])
        ], ListWfhComponent);
        return ListWfhComponent;
    }());
    exports.ListWfhComponent = ListWfhComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/review-wfh/review-wfh.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/work-from-home/review-wfh/review-wfh.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn btn-link\" type=\"button\" routerLink=\"/work-from-home/list\">Back</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading WFH for review</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && wfhs.length == 0\">\n            <h3>No Work from Home to review</h3>\n          </div>\n\n          <table class=\"table table-striped\" *ngIf=\"!loading && wfhs.length > 0\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Employee</th>\n                <th>Date</th>\n                <th>Summary</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let wfh of wfhs; let i = index\">\n                <td>{{i+1}}.</td>\n                <td>{{wfh.name}}</td>\n                <td>{{wfh.date | date: 'dd-MM-yyyy'}}</td>\n                <td>{{wfh.summary}}</td>\n                <td>\n\n                  <div *ngIf=\"!reviewed[wfh._id]\">\n                    <button type=\"button\" class=\"btn btn-success btn-sm mr-1\" (click)=\"approve(wfh._id)\" [disabled]=\"approving[wfh._id] || rejecting[wfh._id]\" *ngIf=\"approveAllowed\">\n                      <span class=\"fa fa-spinner fa-spin\" *ngIf=\"approving[wfh._id]\"></span>&nbsp;Approve\n                    </button>\n\n                    <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"reject(wfh._id)\" [disabled]=\"approving[wfh._id] || rejecting[wfh._id]\" *ngIf=\"rejectAllowed\">\n                      <span class=\"fa fa-spinner fa-spin\" *ngIf=\"rejecting[wfh._id]\"></span>&nbsp;Reject\n                    </button>\n                  </div>\n\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/work-from-home/review-wfh/review-wfh.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/work-from-home/review-wfh/review-wfh.component.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/work-from-home/work-from-home.service */ "./src/app/modules/work-from-home/work-from-home.service.ts"), __webpack_require__(/*! config/constants/wfh */ "./src/app/config/constants/wfh.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, work_from_home_service_1, wfh_1, access_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReviewWfhComponent = (function () {
        function ReviewWfhComponent(wfhService, access) {
            this.wfhService = wfhService;
            this.access = access;
            this.wfhs = [];
            this.loading = false;
            this.reviewed = [];
            this.approving = [];
            this.rejecting = [];
        }
        ReviewWfhComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.loadWfhs();
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'work-from-home',
                                    entity: 'review',
                                    action: 'approve'
                                })];
                        case 1:
                            _a.approveAllowed = _c.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'work-from-home',
                                    entity: 'review',
                                    action: 'reject'
                                })];
                        case 2:
                            _b.rejectAllowed = _c.sent();
                            return [2];
                    }
                });
            });
        };
        ReviewWfhComponent.prototype.loadWfhs = function () {
            var self = this;
            var query = new Map();
            query.set('wfh_status', wfh_1.STATUS.APPLIED);
            this.loading = true;
            this.wfhService.getReviewWfhs(query).then(function (wfhs) {
                self.loading = false;
                self.wfhs = wfhs;
            });
        };
        ReviewWfhComponent.prototype.approve = function (wfh_id) {
            var _this = this;
            this.approving[wfh_id] = true;
            this.wfhService.approve(wfh_id).then(function (response) {
                _this.reviewed[wfh_id] = true;
                _this.approving[wfh_id] = false;
            });
        };
        ReviewWfhComponent.prototype.reject = function (wfh_id) {
            var _this = this;
            this.rejecting[wfh_id] = true;
            this.wfhService.reject(wfh_id).then(function (response) {
                _this.reviewed[wfh_id] = true;
                _this.rejecting[wfh_id] = false;
            });
        };
        ReviewWfhComponent = __decorate([
            core_1.Component({
                selector: 'app-review-wfh',
                template: __webpack_require__(/*! ./review-wfh.component.html */ "./src/app/modules/work-from-home/review-wfh/review-wfh.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [work_from_home_service_1.WfhService]
            }),
            __metadata("design:paramtypes", [work_from_home_service_1.WfhService,
                access_service_1.Access])
        ], ReviewWfhComponent);
        return ReviewWfhComponent;
    }());
    exports.ReviewWfhComponent = ReviewWfhComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/work-from-home.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/work-from-home/work-from-home.module.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! ./work-from-home.routing */ "./src/app/modules/work-from-home/work-from-home.routing.ts"), __webpack_require__(/*! ./apply-wfh/apply-wfh.component */ "./src/app/modules/work-from-home/apply-wfh/apply-wfh.component.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! ./review-wfh/review-wfh.component */ "./src/app/modules/work-from-home/review-wfh/review-wfh.component.ts"), __webpack_require__(/*! ./list-wfh/list-wfh.component */ "./src/app/modules/work-from-home/list-wfh/list-wfh.component.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, ngx_bootstrap_1, work_from_home_routing_1, apply_wfh_component_1, application_components_module_1, review_wfh_component_1, list_wfh_component_1, application_pipes_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WorkFromHomeModule = (function () {
        function WorkFromHomeModule() {
        }
        WorkFromHomeModule = __decorate([
            core_1.NgModule({
                imports: [
                    work_from_home_routing_1.WorkFromHomeRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    ngx_bootstrap_1.CollapseModule,
                    ngx_bootstrap_1.BsDatepickerModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    apply_wfh_component_1.ApplyWfhComponent,
                    review_wfh_component_1.ReviewWfhComponent,
                    list_wfh_component_1.ListWfhComponent
                ],
                providers: []
            })
        ], WorkFromHomeModule);
        return WorkFromHomeModule;
    }());
    exports.WorkFromHomeModule = WorkFromHomeModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/work-from-home.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/work-from-home/work-from-home.routing.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./apply-wfh/apply-wfh.component */ "./src/app/modules/work-from-home/apply-wfh/apply-wfh.component.ts"), __webpack_require__(/*! ./review-wfh/review-wfh.component */ "./src/app/modules/work-from-home/review-wfh/review-wfh.component.ts"), __webpack_require__(/*! ./list-wfh/list-wfh.component */ "./src/app/modules/work-from-home/list-wfh/list-wfh.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, apply_wfh_component_1, review_wfh_component_1, list_wfh_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Work from Home'
            },
            children: [
                {
                    path: '',
                    redirectTo: 'list'
                },
                {
                    path: 'list',
                    data: {
                        title: 'List',
                        access: {
                            module: 'work-from-home',
                            entity: 'work-from-home',
                            action: 'find'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: list_wfh_component_1.ListWfhComponent
                },
                {
                    path: 'review',
                    data: {
                        title: 'Review',
                        access: {
                            module: 'work-from-home',
                            entity: 'work-from-home',
                            action: 'review'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: review_wfh_component_1.ReviewWfhComponent
                },
                {
                    path: 'apply',
                    data: {
                        title: 'Apply',
                        access: {
                            module: 'work-from-home',
                            entity: 'work-from-home',
                            action: 'create'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: apply_wfh_component_1.ApplyWfhComponent
                },
                {
                    path: 'policy',
                    loadChildren: './policy/wfh-policy.module#WfhPolicyModule'
                }
            ]
        }
    ];
    var WorkFromHomeRoutingModule = (function () {
        function WorkFromHomeRoutingModule() {
        }
        WorkFromHomeRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], WorkFromHomeRoutingModule);
        return WorkFromHomeRoutingModule;
    }());
    exports.WorkFromHomeRoutingModule = WorkFromHomeRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/work-from-home.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/work-from-home/work-from-home.service.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! core/services/api.service */ "./src/app/core/services/api.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReviewedBy = (function () {
        function ReviewedBy() {
        }
        return ReviewedBy;
    }());
    ;
    var ApplyWfh = (function () {
        function ApplyWfh() {
            this.date = '';
            this.summary = '';
        }
        return ApplyWfh;
    }());
    exports.ApplyWfh = ApplyWfh;
    ;
    var Wfh = (function () {
        function Wfh() {
        }
        return Wfh;
    }());
    exports.Wfh = Wfh;
    ;
    var WfhService = (function (_super) {
        __extends(WfhService, _super);
        function WfhService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._base_url = '/wfhs';
            return _this;
        }
        WfhService.prototype.apply = function (wfh) {
            return this.post(this._base_url, wfh)
                .then(function (response) { return response; });
        };
        WfhService.prototype.getWfhs = function (query) {
            return this.get(this._base_url, query)
                .then(function (response) { return response['data']; });
        };
        WfhService.prototype.getReviewWfhs = function (query) {
            return this.get(this._base_url + '?review=true', query)
                .then(function (response) { return response['data']; });
        };
        WfhService.prototype.approve = function (wfh_id) {
            return this.patch(this._base_url + '/review/' + wfh_id, {})
                .then(function (response) { return response; });
        };
        WfhService.prototype.reject = function (wfh_id) {
            return this.delete(this._base_url + '/review/' + wfh_id, {})
                .then(function (response) { return response; });
        };
        WfhService.prototype.cancel = function (wfh_id) {
            return this.delete(this._base_url + '/' + wfh_id)
                .then(function (response) { return response; });
        };
        WfhService = __decorate([
            core_1.Injectable()
        ], WfhService);
        return WfhService;
    }(api_service_1.Api));
    exports.WfhService = WfhService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/shared/pipes/constants-array.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/constants-array.pipe.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConstantsArrayPipe = (function () {
        function ConstantsArrayPipe() {
        }
        ConstantsArrayPipe.prototype.transform = function (value, args) {
            value = Object.keys(value).map(function (key) {
                if (!Number.isNaN(Number.parseInt(key))) {
                    if (value[value[key]] !== undefined) {
                        return key;
                    }
                }
                else if (value[value[key]] === undefined) {
                    return value[key];
                }
                else if (value[value[key]] === value[key]) {
                    return value[key];
                }
            }).filter(function (val) {
                return val && val.length > 0;
            });
            return value;
        };
        ConstantsArrayPipe = __decorate([
            core_1.Pipe({
                name: 'constantsarray'
            })
        ], ConstantsArrayPipe);
        return ConstantsArrayPipe;
    }());
    exports.ConstantsArrayPipe = ConstantsArrayPipe;
    ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/shared/pipes/constants.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/constants.pipe.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! config/locales/en.json */ "./src/app/config/locales/en.json")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, constants) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConstantsPipe = (function () {
        function ConstantsPipe() {
        }
        ConstantsPipe.prototype.transform = function (value, args) {
            value = args ? (args + '.' + value) : value;
            var keys = value.split('.');
            var constant = constants[keys[0]], text = '';
            if (constant) {
                for (var i = 1; i < keys.length; i++) {
                    constant = constant[keys[i]];
                    if (constant === undefined) {
                        break;
                    }
                }
                if (constant !== undefined) {
                    text = constant;
                }
            }
            return text;
        };
        ConstantsPipe = __decorate([
            core_1.Pipe({
                name: 'constants'
            })
        ], ConstantsPipe);
        return ConstantsPipe;
    }());
    exports.ConstantsPipe = ConstantsPipe;
    ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=6.3f6c0a7c0bbc7640e95d.js.map