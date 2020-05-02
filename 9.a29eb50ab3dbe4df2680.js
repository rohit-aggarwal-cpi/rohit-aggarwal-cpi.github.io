(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/app/modules/comp-off/apply-comp-off/apply-comp-off.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/comp-off/apply-comp-off/apply-comp-off.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <form #compoffForm=\"ngForm\">\n\n            <div class=\"form-group row\">\n\n              <label for=\"date\" class=\"col-md-3 col-form-label\">Date</label>\n              <div class=\"col-md-3 input-group\">\n                <input type=\"text\" name=\"date\" class=\"form-control\" id=\"date\" [(ngModel)]=\"compoff.date\" bsDatepicker #date=\"bsDatepicker\" [bsConfig]=\"dateConfig\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn\" (click)=\"date.show()\" [attr.aria-expanded]=\"date.isOpen\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"summary\" class=\"col-md-3 col-form-label\">Summary</label>\n              <div class=\"col-md-9\">\n                <textarea name=\"summary\" class=\"form-control\" id=\"summary\" [(ngModel)]=\"compoff.summary\"></textarea>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"notify-people\">Notify</label>\n              <div class=\"col-md-9\">\n                <ng-select name=\"notify-people\" id=\"notify-people\" [loading]=\"loading_users\" [items]=\"user_list\" [multiple]=\"true\"\n                           [addTag]=\"false\" [closeOnSelect]=\"false\" [clearable]=\"true\" [searchable]=\"true\" [searchFn]=\"filterUsers\"\n                           [clearSearchOnAdd]=\"true\" [hideSelected]=\"true\" bindLabel=\"name\" bindValue=\"user_id\"\n                           placeholder=\"Select Employees\" notFoundText=\"No employees found\" [(ngModel)]=\"notify_users\">\n\n                  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                    {{item.name}} <{{item.email_id}}>\n                  </ng-template>\n\n                </ng-select>\n              </div>\n            </div>\n\n          </form>\n\n          <div class=\"form-actions row mt-4\">\n            <div class=\"col-12\">\n              <button type=\"button\" class=\"btn btn-link pull-right\" routerLink=\"/comp-off\" (click)=\"exatask.trackEvent('compensatory-off', 'cancel')\">Cancel</button>\n              <button [disabled]=\"!compoffForm.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"exatask.trackEvent('compensatory-off', 'submit'); applyCompOff()\">Apply</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    Compensatory-Off Applied Successfully\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    <p>There was an error applying for Compensatory-Off. {{error}}</p>\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes\">{{attribute}}</li>\n    </ul>\n  </div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/comp-off/apply-comp-off/apply-comp-off.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/comp-off/apply-comp-off/apply-comp-off.component.ts ***!
  \*****************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! ../comp-off.service */ "./src/app/modules/comp-off/comp-off.service.ts"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! ../../employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! ../../../core/providers/user.service */ "./src/app/core/providers/user.service.ts"), __webpack_require__(/*! ../../leave/leave.service */ "./src/app/modules/leave/leave.service.ts"), __webpack_require__(/*! ../../user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, lodash_1, success_modal_component_1, error_modal_component_1, comp_off_service_1, common_1, exatask_service_1, employee_service_1, user_service_1, leave_service_1, profile_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserSearchItem = (function () {
        function UserSearchItem() {
        }
        return UserSearchItem;
    }());
    var error_map = {
        date: 'Date',
        summary: 'Summary'
    };
    var ApplyCompOffComponent = (function () {
        function ApplyCompOffComponent(compoffService, employeeService, user, datePipe, exatask) {
            this.compoffService = compoffService;
            this.employeeService = employeeService;
            this.user = user;
            this.datePipe = datePipe;
            this.exatask = exatask;
            this.user_list = [];
            this.notify_users = [];
            this.loading_users = false;
            this.exatask.setTitle('Apply Compensatory-Off');
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
                    this.__loadUsers();
                    return [2];
                });
            });
        };
        ApplyCompOffComponent.prototype.__validate = function () {
            return true;
        };
        ApplyCompOffComponent.prototype.__loadUsers = function () {
            var _this = this;
            var self = this;
            this.loading_users = true;
            this.employeeService.getEmployees(null, 0, 0, ['_id', 'email_id', 'name'])
                .then(function (response) {
                _this.user_list = response.users.filter(function (user) {
                    if (self.user.user_id !== user._id) {
                        return user;
                    }
                }).map(function (user) {
                    var item = new UserSearchItem();
                    item.user_id = user._id;
                    item.email_id = user.email_id;
                    item.name = profile_service_1.Name.getFullName(user.name);
                    return item;
                });
                _this.loading_users = false;
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ApplyCompOffComponent.prototype.__sanitizeCompoff = function (compOff) {
            if (compOff.date !== undefined) {
                compOff.date = this.datePipe.transform(compOff.date, 'yyyy-MM-dd');
            }
            if (this.notify_users.length > 0) {
                compOff.notify_users = [];
                for (var _i = 0, _a = this.notify_users; _i < _a.length; _i++) {
                    var user_id = _a[_i];
                    var user = lodash_1.find(this.user_list, lodash_1.matchesProperty('user_id', user_id));
                    var employee = new leave_service_1.EmployeeBasic();
                    employee.email_id = user.email_id;
                    employee.name = user.name;
                    compOff.notify_users.push(employee);
                }
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
                    _this.successModal.show('/comp-off');
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
        ApplyCompOffComponent.prototype.filterUsers = function (term, item) {
            var regex = new RegExp(term, 'i');
            return item.email_id.match(regex) || item.name.match(regex);
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
                template: __webpack_require__(/*! ./apply-comp-off.component.html */ "./src/app/modules/comp-off/apply-comp-off/apply-comp-off.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [comp_off_service_1.CompensatoryOffService, employee_service_1.EmployeeService, common_1.DatePipe]
            }),
            __metadata("design:paramtypes", [comp_off_service_1.CompensatoryOffService,
                employee_service_1.EmployeeService,
                user_service_1.User,
                common_1.DatePipe,
                exatask_service_1.ExaTask])
        ], ApplyCompOffComponent);
        return ApplyCompOffComponent;
    }());
    exports.ApplyCompOffComponent = ApplyCompOffComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/comp-off/comp-off.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/comp-off/comp-off.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./comp-off.routing */ "./src/app/modules/comp-off/comp-off.routing.ts"), __webpack_require__(/*! ./apply-comp-off/apply-comp-off.component */ "./src/app/modules/comp-off/apply-comp-off/apply-comp-off.component.ts"), __webpack_require__(/*! ./list-comp-off/list-comp-off.component */ "./src/app/modules/comp-off/list-comp-off/list-comp-off.component.ts"), __webpack_require__(/*! ./review-comp-off/review-comp-off.component */ "./src/app/modules/comp-off/review-comp-off/review-comp-off.component.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, comp_off_routing_1, apply_comp_off_component_1, list_comp_off_component_1, review_comp_off_component_1, ngx_bootstrap_1, application_components_module_1, application_pipes_module_1, ng_select_1) {
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
                    ngx_bootstrap_1.ModalModule,
                    ngx_bootstrap_1.BsDatepickerModule,
                    ng_select_1.NgSelectModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule
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

/***/ "./src/app/modules/comp-off/comp-off.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/comp-off/comp-off.routing.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./list-comp-off/list-comp-off.component */ "./src/app/modules/comp-off/list-comp-off/list-comp-off.component.ts"), __webpack_require__(/*! ./apply-comp-off/apply-comp-off.component */ "./src/app/modules/comp-off/apply-comp-off/apply-comp-off.component.ts"), __webpack_require__(/*! ./review-comp-off/review-comp-off.component */ "./src/app/modules/comp-off/review-comp-off/review-comp-off.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, list_comp_off_component_1, apply_comp_off_component_1, review_comp_off_component_1) {
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
                            module: 'compensatory-off',
                            entity: 'compensatory-off',
                            action: 'find'
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
                            module: 'compensatory-off',
                            entity: 'compensatory-off',
                            action: 'create'
                        }
                    },
                    component: apply_comp_off_component_1.ApplyCompOffComponent
                },
                {
                    path: 'review',
                    data: {
                        title: 'Review',
                        access: {
                            module: 'compensatory-off',
                            entity: 'compensatory-off',
                            action: 'find'
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

/***/ "./src/app/modules/comp-off/comp-off.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/comp-off/comp-off.service.ts ***!
  \******************************************************/
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
    var EmployeeBasic = (function () {
        function EmployeeBasic() {
        }
        return EmployeeBasic;
    }());
    exports.EmployeeBasic = EmployeeBasic;
    var ApplyCompOff = (function () {
        function ApplyCompOff() {
            this.date = '';
            this.summary = '';
        }
        return ApplyCompOff;
    }());
    exports.ApplyCompOff = ApplyCompOff;
    var CompOff = (function () {
        function CompOff() {
        }
        return CompOff;
    }());
    exports.CompOff = CompOff;
    var CompensatoryOffService = (function (_super) {
        __extends(CompensatoryOffService, _super);
        function CompensatoryOffService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._base_url = '/compoffs';
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
        CompensatoryOffService.prototype.getReviewCompOffs = function (query) {
            return this.get(this._base_url + '?review=true', query)
                .then(function (response) { return response['data']; });
        };
        CompensatoryOffService.prototype.approve = function (comp_off_id) {
            return this.patch(this._base_url + '/review/' + comp_off_id, {})
                .then(function (response) { return response; });
        };
        CompensatoryOffService.prototype.reject = function (comp_off_id, reject_reason) {
            return this.put(this._base_url + '/review/' + comp_off_id, { reason: reject_reason })
                .then(function (response) { return response; });
        };
        CompensatoryOffService.prototype.cancel = function (compoff_id) {
            return this.delete(this._base_url + '/' + compoff_id)
                .then(function (response) { return response; });
        };
        CompensatoryOffService = __decorate([
            core_1.Injectable()
        ], CompensatoryOffService);
        return CompensatoryOffService;
    }(api_service_1.Api));
    exports.CompensatoryOffService = CompensatoryOffService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/comp-off/list-comp-off/list-comp-off.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/comp-off/list-comp-off/list-comp-off.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn btn-primary mr-1\" type=\"button\" routerLink=\"/comp-off/review\" *ngIf=\"reviewAllowed\" (click)=\"exatask.trackEvent('compensatory-off', 'review', 'list')\">+ Review Comp-Off(s)</button>\n              <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/comp-off/apply\" *ngIf=\"applyAllowed\" (click)=\"exatask.trackEvent('compensatory-off', 'apply', 'list')\">+ Apply Comp-Off</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading Compensatory-Offs</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && compoffs.length == 0\">\n            <h3>No Compensatory-Off applied</h3>\n            <br/>\n            <h5 *ngIf=\"!compOffPolicyExists\" class=\"font-italic\">\n              Your organization doesn't have an active Compensatory-Off policy.<br/>\n              Can't apply or review compensatory-off requests.\n            </h5>\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" *ngIf=\"!loading && compoffs.length > 0\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Date</th>\n                  <th>Summary</th>\n                  <th>Reviewed By</th>\n                  <th>Expiry Date</th>\n                  <th>Status</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let compoff of compoffs; let i = index\">\n                  <td>{{i+1}}.</td>\n                  <td>{{compoff.date | date: 'dd-MM-yyyy'}}</td>\n                  <td>{{compoff.summary}}</td>\n                  <td>\n                    <span *ngIf=\"compoff.reviewed_by\">{{compoff.reviewed_by.name}}</span>\n                  </td>\n                  <td>\n                    <span *ngIf=\"compoff.expiry_date\">{{compoff.expiry_date | date: 'dd-MM-yyyy'}}</span>\n                  </td>\n                  <td>\n                    <span class=\"badge\" [ngClass]=\"getStatusBadge(compoff.comp_off_status)\">{{compoff.comp_off_status | constants: 'compensatory_off.status'}}</span>\n                  </td>\n                  <td>\n\n                    <button *ngIf=\"compoff.comp_off_status === 1\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"exatask.trackEvent('compensatory-off', 'cancel'); cancelCompOff(i)\" [disabled]=\"cancelling[i]\">\n                      <span class=\"fa fa-spinner fa-spin\" *ngIf=\"cancelling[i]\"></span>&nbsp;Cancel\n                    </button>\n\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/comp-off/list-comp-off/list-comp-off.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/comp-off/list-comp-off/list-comp-off.component.ts ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/comp-off/comp-off.service */ "./src/app/modules/comp-off/comp-off.service.ts"), __webpack_require__(/*! config/constants/compensatory-off */ "./src/app/config/constants/compensatory-off.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! ../../user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, comp_off_service_1, compensatory_off_1, access_service_1, exatask_service_1, profile_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListCompOffComponent = (function () {
        function ListCompOffComponent(compOffService, profileService, access, exatask) {
            this.compOffService = compOffService;
            this.profileService = profileService;
            this.access = access;
            this.exatask = exatask;
            this.compoffs = [];
            this.applyAllowed = false;
            this.reviewAllowed = false;
            this.compOffPolicyExists = false;
            this.loading = false;
            this.exatask.setTitle('Compensatory-Off List');
            this.cancelling = new Array();
        }
        ListCompOffComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'compensatory-off',
                                    entity: 'compensatory-off',
                                    action: 'create'
                                })];
                        case 1:
                            _a.applyAllowed = _c.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'compensatory-off',
                                    entity: 'compensatory-off',
                                    action: 'review'
                                })];
                        case 2:
                            _b.reviewAllowed = _c.sent();
                            this.profileService.getProfile('policies').then(function (profile) {
                                if (profile.policies && profile.policies.comp_off && profile.policies.comp_off.length > 0) {
                                    _this.compOffPolicyExists = true;
                                }
                                else {
                                    _this.applyAllowed = false;
                                }
                            });
                            this.loadCompOffs();
                            return [2];
                    }
                });
            });
        };
        ListCompOffComponent.prototype.loadCompOffs = function () {
            var self = this;
            this.loading = true;
            this.compOffService.getCompOffs().then(function (compoffs) {
                self.loading = false;
                self.compoffs = compoffs;
            });
        };
        ListCompOffComponent.prototype.cancelCompOff = function (index) {
            var leave_id = this.compoffs[index]._id;
            var self = this;
            this.cancelling[index] = true;
            this.compOffService.cancel(leave_id).then(function (response) {
                self.compoffs[index].comp_off_status = compensatory_off_1.STATUS.DELETED;
                self.cancelling[index] = false;
            });
        };
        ListCompOffComponent.prototype.getStatusBadge = function (status) {
            switch (status) {
                case compensatory_off_1.STATUS.APPROVED:
                case compensatory_off_1.STATUS.AVAILED:
                    return 'badge-success';
                case compensatory_off_1.STATUS.REJECTED:
                    return 'badge-danger';
                case compensatory_off_1.STATUS.DELETED:
                case compensatory_off_1.STATUS.EXPIRED:
                    return 'badge-dark';
                default:
                    return 'badge-default';
            }
        };
        ListCompOffComponent = __decorate([
            core_1.Component({
                selector: 'app-list-comp-off',
                template: __webpack_require__(/*! ./list-comp-off.component.html */ "./src/app/modules/comp-off/list-comp-off/list-comp-off.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [comp_off_service_1.CompensatoryOffService, profile_service_1.ProfileService]
            }),
            __metadata("design:paramtypes", [comp_off_service_1.CompensatoryOffService,
                profile_service_1.ProfileService,
                access_service_1.Access,
                exatask_service_1.ExaTask])
        ], ListCompOffComponent);
        return ListCompOffComponent;
    }());
    exports.ListCompOffComponent = ListCompOffComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/comp-off/review-comp-off/review-comp-off.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/comp-off/review-comp-off/review-comp-off.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn btn-link\" type=\"button\" routerLink=\"/comp-off/list\" (click)=\"exatask.trackEvent('compensatory-off', 'back', 'review')\">Back</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading compensatory-off for review</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && compoffs.length == 0\">\n            <h3>No Compensatory-Offs to review</h3>\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" *ngIf=\"!loading && compoffs.length > 0\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Employee</th>\n                  <th>Date</th>\n                  <th>Summary</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let compoff of compoffs; let i = index\">\n                  <td>{{i+1}}.</td>\n                  <td>{{compoff.name}}</td>\n                  <td>{{compoff.date | date: 'dd-MM-yyyy'}}</td>\n                  <td>{{compoff.summary}}</td>\n                  <td>\n\n                    <div *ngIf=\"!reviewed[compoff._id]\">\n                      <button type=\"button\" class=\"btn btn-success btn-sm mr-1\" (click)=\"exatask.trackEvent('compensatory-off', 'confirmation', 'approve', compoff._id.toString()); compOffConfirmation(1, compoff._id)\" [disabled]=\"approving[compoff._id] || rejecting[compoff._id]\" *ngIf=\"approveAllowed\">\n                        <span class=\"fa fa-spinner\" [ngClass]=\"{'fa-spin': approving[compoff._id]}\" *ngIf=\"approving[compoff._id]\"></span>\n                        &nbsp;Approve\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"exatask.trackEvent('compensatory-off', 'confirmation', 'reject', compoff._id.toString()); compOffConfirmation(2, compoff._id)\" [disabled]=\"approving[compoff._id] || rejecting[compoff._id]\" *ngIf=\"rejectAllowed\">\n                        <span class=\"fa fa-spinner\" [ngClass]=\"{'fa-spin': rejecting[compoff._id]}\" *ngIf=\"rejecting[compoff._id]\"></span>\n                        &nbsp;Reject\n                      </button>\n                    </div>\n\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #confirmModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" [ngClass]=\"{'modal-success': operation === 1, 'modal-danger': operation === 2}\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <span class=\"mb-0\" *ngIf=\"operation === 1\">Confirm compensatory-off approval</span>\n          <span class=\"mb-0\" *ngIf=\"operation === 2\">Confirm compensatory-off rejection</span>\n        </h4>\n        <button type=\"button\" class=\"close\" (click)=\"exatask.trackEvent('compensatory-off', 'confirmation', 'close', compoff_id); confirmModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h5 *ngIf=\"operation === 1\">Are you sure you would like to approve compensatory-off of {{ compoff.name }}?</h5>\n        <div class=\"row\" *ngIf=\"operation === 2\">\n          <h5>Kindly provide reason for rejecting compensatory-off of {{ compoff.name }}</h5>\n          <div class=\"form-group row\">\n            <label class=\"col-3 col-form-label\" for=\"reason\">\n              Reason <span class=\"required\">*</span>\n            </label>\n            <div class=\"col-9\">\n              <textarea name=\"reason\" class=\"form-control\" id=\"reason\" [(ngModel)]=\"reject_reason\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"operation === 1\" type=\"button\" (click)=\"exatask.trackEvent('compensatory-off', 'approve', compoff_id); approve(compoff_id)\" class=\"btn btn-success\">Approve</button>\n        <button *ngIf=\"operation === 2\" type=\"button\" (click)=\"exatask.trackEvent('compensatory-off', 'reject', compoff_id); reject(compoff_id)\" class=\"btn btn-danger\">Reject</button>\n        <button type=\"button\" (click)=\"exatask.trackEvent('compensatory-off', 'confirmation', 'cancel', compoff_id); confirmModal.hide()\" class=\"btn btn-link\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/comp-off/review-comp-off/review-comp-off.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/comp-off/review-comp-off/review-comp-off.component.ts ***!
  \*******************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! config/constants/leave */ "./src/app/config/constants/leave.ts"), __webpack_require__(/*! ../comp-off.service */ "./src/app/modules/comp-off/comp-off.service.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, leave_1, comp_off_service_1, access_service_1, exatask_service_1, ngx_bootstrap_1, lodash_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Operation;
    (function (Operation) {
        Operation[Operation["APPROVE"] = 1] = "APPROVE";
        Operation[Operation["REJECT"] = 2] = "REJECT";
    })(Operation || (Operation = {}));
    var ReviewCompOffComponent = (function () {
        function ReviewCompOffComponent(compoffService, access, exatask) {
            this.compoffService = compoffService;
            this.access = access;
            this.exatask = exatask;
            this.compoffs = [];
            this.loading = false;
            this.operation = Operation.APPROVE;
            this.reject_reason = '';
            this.reviewed = [];
            this.approving = [];
            this.rejecting = [];
            this.exatask.setTitle('Compensatory-Off Review List');
        }
        ReviewCompOffComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.loadCompOffs();
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'compensatory-off',
                                    entity: 'review',
                                    action: 'approve'
                                })];
                        case 1:
                            _a.approveAllowed = _c.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'compensatory-off',
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
        ReviewCompOffComponent.prototype.loadCompOffs = function () {
            var self = this;
            var query = new Map();
            query.set('comp_off_status', leave_1.STATUS.APPLIED);
            this.loading = true;
            this.compoffService.getReviewCompOffs(query).then(function (compoffs) {
                self.loading = false;
                self.compoffs = compoffs;
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
            this.compoffService.reject(comp_off_id, this.reject_reason).then(function (response) {
                _this.reviewed[comp_off_id] = true;
                _this.rejecting[comp_off_id] = false;
                _this.reject_reason = '';
            });
        };
        ReviewCompOffComponent.prototype.compOffConfirmation = function (operation, compoff_id) {
            this.operation = operation;
            this.compoff_id = compoff_id;
            this.compoff = lodash_1.find(this.compoffs, lodash_1.matchesProperty('_id', compoff_id));
            this.reject_reason = '';
            this.confirmModal.show();
        };
        __decorate([
            core_1.ViewChild('confirmModal'),
            __metadata("design:type", ngx_bootstrap_1.ModalDirective)
        ], ReviewCompOffComponent.prototype, "confirmModal", void 0);
        ReviewCompOffComponent = __decorate([
            core_1.Component({
                selector: 'app-review-comp-off',
                template: __webpack_require__(/*! ./review-comp-off.component.html */ "./src/app/modules/comp-off/review-comp-off/review-comp-off.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [comp_off_service_1.CompensatoryOffService]
            }),
            __metadata("design:paramtypes", [comp_off_service_1.CompensatoryOffService,
                access_service_1.Access,
                exatask_service_1.ExaTask])
        ], ReviewCompOffComponent);
        return ReviewCompOffComponent;
    }());
    exports.ReviewCompOffComponent = ReviewCompOffComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/employee.service.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/employee/employee.service.ts ***!
  \******************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! core/services/api.service */ "./src/app/core/services/api.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, api_service_1, profile_service_1, lodash_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserReference = (function () {
        function UserReference() {
        }
        return UserReference;
    }());
    exports.UserReference = UserReference;
    var Employee = (function () {
        function Employee() {
            this.name = new profile_service_1.Name();
            this.email_id = '';
        }
        return Employee;
    }());
    exports.Employee = Employee;
    var EmployeeList = (function () {
        function EmployeeList() {
            this.name = new profile_service_1.Name();
            this.email_id = '';
        }
        return EmployeeList;
    }());
    exports.EmployeeList = EmployeeList;
    var Leave = (function () {
        function Leave() {
        }
        return Leave;
    }());
    exports.Leave = Leave;
    var EmployeeDetails = (function () {
        function EmployeeDetails() {
        }
        return EmployeeDetails;
    }());
    exports.EmployeeDetails = EmployeeDetails;
    var EmployeeService = (function (_super) {
        __extends(EmployeeService, _super);
        function EmployeeService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._base_url = '/employees';
            _this._file_url = '/files';
            return _this;
        }
        EmployeeService.prototype.getEmployees = function (query, page, limit, fields) {
            if (!query) {
                query = new Map();
            }
            if (page > 0) {
                query.set('page', page);
            }
            if (limit > 0) {
                query.set('limit', limit);
            }
            if (fields) {
                query.set('fields', fields.join(','));
            }
            return this.get(this._base_url, query)
                .then(function (response) {
                return {
                    count: response['count'],
                    users: response['data']
                };
            });
        };
        EmployeeService.prototype.postEmployee = function (user) {
            return this.post(this._base_url, user)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.putEmployee = function (id, user) {
            return this.put(this._base_url + '/' + id, user)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.getEmployeeDetails = function (id) {
            return this.get(this._base_url + '/' + id)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.markAsSupervisor = function (employee_id) {
            return this.patch(this._base_url + '/supervisors/' + employee_id)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.unmarkAsSupervisor = function (employee_id) {
            return this.delete(this._base_url + '/supervisors/' + employee_id)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.markAsChiefExecutive = function (employee_id) {
            return this.patch(this._base_url + '/chiefexecutives/' + employee_id)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.unmarkAsChiefExecutive = function (employee_id) {
            return this.delete(this._base_url + '/chiefexecutives/' + employee_id)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.markAsSuperAdmin = function (employee_id) {
            return this.patch(this._base_url + '/superadmins/' + employee_id)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.unmarkAsSuperAdmin = function (employee_id) {
            return this.delete(this._base_url + '/superadmins/' + employee_id)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.resetPassword = function (user_id) {
            return this.patch(this._base_url + '/reset/' + user_id)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.uploadBulkEmployee = function (file) {
            var _this = this;
            var formData = new FormData();
            formData.append('file', file);
            var query_params = new Map();
            query_params.set('type', 'bulk_employee');
            var headers = lodash_1.clone(this.headers);
            headers = headers.delete('Content-Type');
            var config = new Map();
            config.set('headers', headers);
            return this.post(this._file_url + '/upload', formData, query_params, config)
                .then(function (response) {
                var body = {
                    file: response.file
                };
                return _this.post(_this._file_url + '/parse', body, query_params)
                    .then(function (data) { return data; });
            });
        };
        EmployeeService.prototype.exportEmployees = function (query, fields) {
            if (!query) {
                query = new Map();
            }
            if (fields) {
                query.set('fields', fields.join(','));
            }
            query.set('export', 1);
            return this.get(this._base_url, query)
                .then(function (data) { return data; });
        };
        EmployeeService = __decorate([
            core_1.Injectable()
        ], EmployeeService);
        return EmployeeService;
    }(api_service_1.Api));
    exports.EmployeeService = EmployeeService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=9.a29eb50ab3dbe4df2680.js.map