(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comp-off-comp-off-module"],{

/***/ "./src/app/modules/leave/comp-off/apply-comp-off/apply-comp-off.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/leave/comp-off/apply-comp-off/apply-comp-off.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n\n              <form #compoffForm=\"ngForm\">\n\n                <div class=\"form-group row\">\n\n                  <label class=\"col-3 col-form-label\">Date</label>\n                  <div class=\"col-3 input-group\">\n                    <input type=\"text\" name=\"date\" class=\"form-control\" id=\"date\" [(ngModel)]=\"compoff.date\" bsDatepicker #date=\"bsDatepicker\" [bsConfig]=\"dateConfig\">\n                    <span class=\"input-group-append\">\n                      <button class=\"btn\" (click)=\"date.show()\" [attr.aria-expanded]=\"date.isOpen\">\n                        <i class=\"fa fa-calendar\"></i>\n                      </button>\n                    </span>\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-3 col-form-label\">Summary</label>\n                  <div class=\"col-9\">\n                    <textarea name=\"summary\" class=\"form-control\" id=\"summary\" [(ngModel)]=\"compoff.summary\"></textarea>\n                  </div>\n                </div>\n\n              </form>\n\n              <div class=\"form-actions row mt-4\">\n                <div class=\"col-12\">\n                  <button type=\"button\" class=\"btn btn-link pull-right\" routerLink=\"/leave/comp-off\">Cancel</button>\n                  <button [disabled]=\"!compoffForm.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"applyCompOff()\">Apply</button>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <content>\n    Compensatory-Off Applied Successfully\n  </content>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <content>\n    <p>There was an error applying for Compensatory-Off. {{error}}</p>\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes\">{{attribute}}</li>\n    </ul>\n  </content>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/leave/comp-off/apply-comp-off/apply-comp-off.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/leave/comp-off/apply-comp-off/apply-comp-off.component.ts ***!
  \***********************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! ../comp-off.service */ "./src/app/modules/leave/comp-off/comp-off.service.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, success_modal_component_1, error_modal_component_1, comp_off_service_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var error_map = {
        date: 'Date',
        summary: 'Summary'
    };
    var ApplyCompOffComponent = (function () {
        function ApplyCompOffComponent(compoffService, datePipe) {
            this.compoffService = compoffService;
            this.datePipe = datePipe;
            this.compoff = new comp_off_service_1.ApplyCompOff();
            this.dateConfig = {
                dateInputFormat: 'YYYY-MM-DD',
                containerClass: 'theme-blue',
                showWeekNumbers: false,
                maxDate: new Date()
            };
        }
        ApplyCompOffComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2];
                });
            });
        };
        ApplyCompOffComponent.prototype.__validate = function () {
            return true;
        };
        ApplyCompOffComponent.prototype.__sanitizeCompoff = function (compOff) {
            if (compOff.date !== undefined) {
                compOff.date = this.datePipe.transform(compOff.date, 'yyyy-MM-dd');
            }
            return compOff;
        };
        ApplyCompOffComponent.prototype.applyCompOff = function () {
            var _this = this;
            if (this.__validate()) {
                var compOff = JSON.parse(JSON.stringify(this.compoff));
                compOff = this.__sanitizeCompoff(compOff);
                this.error = '';
                this.invalid_attributes = [];
                this.compoffService.apply(compOff).then(function (data) {
                    _this.successModal.show();
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
        ], ApplyCompOffComponent.prototype, "errorModal", void 0);
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ApplyCompOffComponent.prototype, "successModal", void 0);
        ApplyCompOffComponent = __decorate([
            core_1.Component({
                selector: 'app-apply-comp-off',
                template: __webpack_require__(/*! ./apply-comp-off.component.html */ "./src/app/modules/leave/comp-off/apply-comp-off/apply-comp-off.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [comp_off_service_1.CompensatoryOffService, common_1.DatePipe]
            }),
            __metadata("design:paramtypes", [comp_off_service_1.CompensatoryOffService,
                common_1.DatePipe])
        ], ApplyCompOffComponent);
        return ApplyCompOffComponent;
    }());
    exports.ApplyCompOffComponent = ApplyCompOffComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/comp-off/comp-off.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/leave/comp-off/comp-off.module.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./comp-off.routing */ "./src/app/modules/leave/comp-off/comp-off.routing.ts"), __webpack_require__(/*! ./apply-comp-off/apply-comp-off.component */ "./src/app/modules/leave/comp-off/apply-comp-off/apply-comp-off.component.ts"), __webpack_require__(/*! ./list-comp-off/list-comp-off.component */ "./src/app/modules/leave/comp-off/list-comp-off/list-comp-off.component.ts"), __webpack_require__(/*! ./review-comp-off/review-comp-off.component */ "./src/app/modules/leave/comp-off/review-comp-off/review-comp-off.component.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, comp_off_routing_1, apply_comp_off_component_1, list_comp_off_component_1, review_comp_off_component_1, ngx_bootstrap_1, application_components_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CompensatoryOffModule = (function () {
        function CompensatoryOffModule() {
        }
        CompensatoryOffModule = __decorate([
            core_1.NgModule({
                imports: [
                    comp_off_routing_1.CompensatoryOffRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    ngx_bootstrap_1.BsDatepickerModule,
                    application_components_module_1.ApplicationComponentsModule
                ],
                declarations: [
                    apply_comp_off_component_1.ApplyCompOffComponent,
                    list_comp_off_component_1.ListCompOffComponent,
                    review_comp_off_component_1.ReviewCompOffComponent
                ],
                providers: []
            })
        ], CompensatoryOffModule);
        return CompensatoryOffModule;
    }());
    exports.CompensatoryOffModule = CompensatoryOffModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/comp-off/comp-off.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/leave/comp-off/comp-off.routing.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./list-comp-off/list-comp-off.component */ "./src/app/modules/leave/comp-off/list-comp-off/list-comp-off.component.ts"), __webpack_require__(/*! ./apply-comp-off/apply-comp-off.component */ "./src/app/modules/leave/comp-off/apply-comp-off/apply-comp-off.component.ts"), __webpack_require__(/*! ./review-comp-off/review-comp-off.component */ "./src/app/modules/leave/comp-off/review-comp-off/review-comp-off.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, list_comp_off_component_1, apply_comp_off_component_1, review_comp_off_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Comp-Off'
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
                            entity: 'leave:compensatory_off',
                            action: 'find:get'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: list_comp_off_component_1.ListCompOffComponent
                },
                {
                    path: 'apply',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Apply',
                        access: {
                            entity: 'leave:compensatory_off',
                            action: 'create:post'
                        }
                    },
                    component: apply_comp_off_component_1.ApplyCompOffComponent
                },
                {
                    path: 'review',
                    data: {
                        title: 'Review',
                        access: {
                            entity: 'leave:compensatory_off',
                            action: 'approve:put'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: review_comp_off_component_1.ReviewCompOffComponent
                }
            ]
        }
    ];
    var CompensatoryOffRoutingModule = (function () {
        function CompensatoryOffRoutingModule() {
        }
        CompensatoryOffRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], CompensatoryOffRoutingModule);
        return CompensatoryOffRoutingModule;
    }());
    exports.CompensatoryOffRoutingModule = CompensatoryOffRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/comp-off/comp-off.service.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/leave/comp-off/comp-off.service.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! core/services/api.service */ "./src/app/core/services/api.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, http_1, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReviewedBy = (function () {
        function ReviewedBy() {
        }
        return ReviewedBy;
    }());
    ;
    var ApplyCompOff = (function () {
        function ApplyCompOff() {
            this.date = '';
            this.summary = '';
        }
        return ApplyCompOff;
    }());
    exports.ApplyCompOff = ApplyCompOff;
    ;
    var CompOff = (function () {
        function CompOff() {
        }
        return CompOff;
    }());
    exports.CompOff = CompOff;
    var CompensatoryOffService = (function (_super) {
        __extends(CompensatoryOffService, _super);
        function CompensatoryOffService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/leaves/compoffs';
            return _this;
        }
        CompensatoryOffService.prototype.apply = function (compOff) {
            return this.post(this._base_url, compOff)
                .then(function (response) { return response; });
        };
        CompensatoryOffService.prototype.getCompOffs = function (query) {
            return this.get(this._base_url, query)
                .then(function (response) { return response['data']; });
        };
        CompensatoryOffService.prototype.approve = function (comp_off_id) {
            return this.post(this._base_url + '/approve/' + comp_off_id, {})
                .then(function (response) { return response; });
        };
        CompensatoryOffService.prototype.reject = function (comp_off_id) {
            return this.post(this._base_url + '/reject/' + comp_off_id, {})
                .then(function (response) { return response; });
        };
        CompensatoryOffService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], CompensatoryOffService);
        return CompensatoryOffService;
    }(api_service_1.Api));
    exports.CompensatoryOffService = CompensatoryOffService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/comp-off/list-comp-off/list-comp-off.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/leave/comp-off/list-comp-off/list-comp-off.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn btn-primary mr-1\" type=\"button\" routerLink=\"/leave/comp-off/review\" *ngIf=\"reviewAllowed\">+ Review Comp-Off(s)</button>\n              <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/leave/comp-off/apply\" *ngIf=\"applyAllowed\">+ Apply Comp-Off</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"compoffs.length == 0\">\n            <h3>No Compensatory-Off applied</h3>\n          </div>\n\n          <table class=\"table table-striped\" *ngIf=\"compoffs.length > 0\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Date</th>\n                <th>Summary</th>\n                <th>Reviewed By</th>\n                <th>Expiry Date</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let compoff of compoffs; let i = index\">\n                <td>{{i+1}}.</td>\n                <td>{{compoff.date | date: 'dd-MM-yyyy'}}</td>\n                <td>{{compoff.summary}}</td>\n                <td>\n                  <span *ngIf=\"compoff.reviewed_by\">{{compoff.reviewed_by.name}}</span>\n                </td>\n                <td>\n                  <span *ngIf=\"compoff.expiry_date\">{{compoff.expiry_date | date: 'dd-MM-yyyy'}}</span>\n                </td>\n                <td>\n                  <span class=\"badge\" [ngClass]=\"getStatusBadge(compoff.comp_off_status)\">{{compoff.comp_off_status}}</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/leave/comp-off/list-comp-off/list-comp-off.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/leave/comp-off/list-comp-off/list-comp-off.component.ts ***!
  \*********************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! modules/leave/comp-off/comp-off.service */ "./src/app/modules/leave/comp-off/comp-off.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, authorization_service_1, comp_off_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListCompOffComponent = (function () {
        function ListCompOffComponent(compOffService, authorization) {
            this.compOffService = compOffService;
            this.authorization = authorization;
            this.compoffs = [];
            this.applyAllowed = false;
            this.reviewAllowed = false;
        }
        ListCompOffComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this;
                            return [4, this.authorization.hasAccess({
                                    entity: 'leave:compensatory_off',
                                    action: 'create:post'
                                })];
                        case 1:
                            _a.applyAllowed = _c.sent();
                            _b = this;
                            return [4, this.authorization.hasAccess({
                                    entity: 'leave:compensatory_off',
                                    action: 'approve:put'
                                })];
                        case 2:
                            _b.reviewAllowed = _c.sent();
                            this.loadCompOffs();
                            return [2];
                    }
                });
            });
        };
        ListCompOffComponent.prototype.loadCompOffs = function () {
            var self = this;
            this.compOffService.getCompOffs().then(function (compoffs) {
                self.compoffs = compoffs;
            });
        };
        ListCompOffComponent.prototype.getStatusBadge = function (status) {
            switch (status) {
                case 2:
                case 5:
                    return 'badge-success';
                case 3: return 'badge-danger';
                case 4:
                case 6:
                    return 'badge-dark';
                default: return 'badge-default';
            }
        };
        ListCompOffComponent = __decorate([
            core_1.Component({
                selector: 'app-list-comp-off',
                template: __webpack_require__(/*! ./list-comp-off.component.html */ "./src/app/modules/leave/comp-off/list-comp-off/list-comp-off.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [comp_off_service_1.CompensatoryOffService, authorization_service_1.Authorization]
            }),
            __metadata("design:paramtypes", [comp_off_service_1.CompensatoryOffService,
                authorization_service_1.Authorization])
        ], ListCompOffComponent);
        return ListCompOffComponent;
    }());
    exports.ListCompOffComponent = ListCompOffComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/comp-off/review-comp-off/review-comp-off.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/leave/comp-off/review-comp-off/review-comp-off.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"text-center m-5\" *ngIf=\"compoffs.length == 0\">\n            <h3>No Compensatory-Offs to review</h3>\n          </div>\n\n          <table class=\"table table-striped\" *ngIf=\"compoffs.length > 0\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Employee</th>\n                <th>Date</th>\n                <th>Summary</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let compoff of compoffs; let i = index\">\n                <td>{{i+1}}.</td>\n                <td>{{compoff.name}}</td>\n                <td>{{compoff.date | date: 'dd-MM-yyyy'}}</td>\n                <td>{{compoff.summary}}</td>\n                <td *ngIf=\"!reviewed[compoff._id]\">\n\n                  <button type=\"button\" class=\"btn btn-success mr-1\" (click)=\"approve(compoff._id)\" [disabled]=\"approving[compoff._id] || rejecting[compoff._id]\">\n                    <span class=\"fa fa-spinner\" [ngClass]=\"{'fa-spin': approving[compoff._id]}\" *ngIf=\"approving[compoff._id]\"></span>\n                    &nbsp;Approve\n                  </button>\n\n                  <button type=\"button\" class=\"btn btn-danger\" (click)=\"reject(compoff._id)\" [disabled]=\"approving[compoff._id] || rejecting[compoff._id]\">\n                    <span class=\"fa fa-spinner\" [ngClass]=\"{'fa-spin': rejecting[compoff._id]}\" *ngIf=\"rejecting[compoff._id]\"></span>\n                    &nbsp;Reject\n                  </button>\n\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/leave/comp-off/review-comp-off/review-comp-off.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/leave/comp-off/review-comp-off/review-comp-off.component.ts ***!
  \*************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! config/constants/leave */ "./src/app/config/constants/leave.ts"), __webpack_require__(/*! ../comp-off.service */ "./src/app/modules/leave/comp-off/comp-off.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, leave_1, comp_off_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReviewCompOffComponent = (function () {
        function ReviewCompOffComponent(compoffService) {
            this.compoffService = compoffService;
            this.compoffs = [];
            this.reviewed = [];
            this.approving = [];
            this.rejecting = [];
        }
        ReviewCompOffComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.loadCompOffs();
                    return [2];
                });
            });
        };
        ReviewCompOffComponent.prototype.loadCompOffs = function () {
            var _this = this;
            var self = this;
            var userId = localStorage.getItem('userId');
            var query = new Map();
            query.set('approval_by', userId);
            query.set('leave_status', leave_1.STATUS.APPLIED);
            this.compoffService.getCompOffs(query).then(function (compoffs) {
                self.compoffs = _this.compoffs;
            });
        };
        ReviewCompOffComponent.prototype.approve = function (comp_off_id) {
            var _this = this;
            this.approving[comp_off_id] = true;
            this.compoffService.approve(comp_off_id).then(function (response) {
                _this.reviewed[comp_off_id] = true;
                _this.approving[comp_off_id] = false;
            });
        };
        ReviewCompOffComponent.prototype.reject = function (comp_off_id) {
            var _this = this;
            this.rejecting[comp_off_id] = true;
            this.compoffService.reject(comp_off_id).then(function (response) {
                _this.reviewed[comp_off_id] = true;
                _this.rejecting[comp_off_id] = false;
            });
        };
        ReviewCompOffComponent = __decorate([
            core_1.Component({
                selector: 'app-review-comp-off',
                template: __webpack_require__(/*! ./review-comp-off.component.html */ "./src/app/modules/leave/comp-off/review-comp-off/review-comp-off.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [comp_off_service_1.CompensatoryOffService]
            }),
            __metadata("design:paramtypes", [comp_off_service_1.CompensatoryOffService])
        ], ReviewCompOffComponent);
        return ReviewCompOffComponent;
    }());
    exports.ReviewCompOffComponent = ReviewCompOffComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=comp-off-comp-off-module.js.map