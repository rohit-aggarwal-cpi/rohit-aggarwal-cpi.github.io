(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/app/modules/leave/apply-leave/apply-leave.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/leave/apply-leave/apply-leave.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <form #leaveForm=\"ngForm\">\n\n            <div class=\"form-group row\">\n\n              <label class=\"col-md-3 col-form-label\" for=\"leave-type\">\n                Leave Type <span class=\"required\">*</span>\n              </label>\n              <div class=\"col-md-3\">\n                <select name=\"leave-type\" id=\"leave-type\" class=\"form-control\" [(ngModel)]=\"leave.leave_type\">\n                  <option *ngFor=\"let type of 'leave.type' | constantsarray\" [value]=\"type.key\" [disabled]=\"leaveTypeDisabled(type.key)\">\n                    {{ type.value }}\n                  </option>\n                </select>\n              </div>\n\n            </div>\n\n            <div class=\"form-group row\">\n\n              <label class=\"col-md-3 col-form-label\" for=\"start-date\">\n                Start Date <span class=\"required\">*</span>\n              </label>\n              <div class=\"col-md-3 input-group\">\n                <input type=\"text\" name=\"start-date\" class=\"form-control\" id=\"start-date\" [(ngModel)]=\"leave.start_date\" bsDatepicker #startDate=\"bsDatepicker\" [bsConfig]=\"sdConfig\" (bsValueChange)=\"setStartDate($event)\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn\" (click)=\"startDate.show()\" [attr.aria-expanded]=\"startDate.isOpen\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n\n              <label class=\"col-md-3 col-form-label\" for=\"end-date\">\n                End Date <span class=\"required\">*</span>\n              </label>\n              <div class=\"col-md-3 input-group\">\n                <input type=\"text\" name=\"end-date\" class=\"form-control\" id=\"end-date\" [(ngModel)]=\"leave.end_date\" bsDatepicker #endDate=\"bsDatepicker\"\n                  [bsConfig]=\"edConfig\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn\" (click)=\"endDate.show()\" [attr.aria-expanded]=\"endDate.isOpen\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"summary\">\n                Summary <span class=\"required\">*</span>\n              </label>\n              <div class=\"col-md-9\">\n                <textarea name=\"summary\" class=\"form-control\" id=\"summary\" [(ngModel)]=\"leave.summary\"></textarea>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"notify-people\">Notify</label>\n              <div class=\"col-md-9\">\n                <ng-select name=\"notify-people\" id=\"notify-people\" [loading]=\"loading_users\" [items]=\"user_list\" [multiple]=\"true\"\n                           [addTag]=\"false\" [closeOnSelect]=\"false\" [clearable]=\"true\" [searchable]=\"true\" [searchFn]=\"filterUsers\"\n                           [clearSearchOnAdd]=\"true\" [hideSelected]=\"true\" bindLabel=\"name\" bindValue=\"user_id\"\n                           placeholder=\"Select Employees\" notFoundText=\"No employees found\" [(ngModel)]=\"notify_users\">\n\n                  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                    {{item.name}} <{{item.email_id}}>\n                  </ng-template>\n\n                </ng-select>\n              </div>\n            </div>\n\n          </form>\n\n          <div class=\"form-actions row mt-4\">\n            <div class=\"col-12\">\n              <button type=\"button\" class=\"btn btn-link pull-right\" routerLink=\"/leave\" (click)=\"exatask.trackEvent('leave', 'cancel')\">Cancel</button>\n              <button [disabled]=\"!leaveForm.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"exatask.trackEvent('leave', 'apply'); applyLeave()\">Apply</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    Leave Applied Successfully\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    <p>There was an error applying for Leave.</p>\n    <p>{{error}}</p>\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes \">{{attribute}}</li>\n    </ul>\n  </div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/leave/apply-leave/apply-leave.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/leave/apply-leave/apply-leave.component.ts ***!
  \********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/leave/policy/leave-policy.service */ "./src/app/modules/leave/policy/leave-policy.service.ts"), __webpack_require__(/*! modules/leave/leave.service */ "./src/app/modules/leave/leave.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! ../../employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! ../../../core/providers/user.service */ "./src/app/core/providers/user.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, lodash_1, success_modal_component_1, error_modal_component_1, leave_policy_service_1, leave_service_1, profile_service_1, ngx_bootstrap_1, exatask_service_1, employee_service_1, user_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserSearchItem = (function () {
        function UserSearchItem() {
        }
        return UserSearchItem;
    }());
    var error_map = {
        start_date: 'Start Date',
        end_date: 'End Date',
        leave_type: 'Leave Type',
        summary: 'Summary'
    };
    var ApplyLeaveComponent = (function () {
        function ApplyLeaveComponent(leavePolicyService, leaveService, profileService, employeeService, user, datePipe, exatask) {
            this.leavePolicyService = leavePolicyService;
            this.leaveService = leaveService;
            this.profileService = profileService;
            this.employeeService = employeeService;
            this.user = user;
            this.datePipe = datePipe;
            this.exatask = exatask;
            this.leave_type = [];
            this.user_list = [];
            this.notify_users = [];
            this.loading_users = false;
            this.exatask.setTitle('Apply Leave');
            this.leave = new leave_service_1.ApplyLeave();
            this.sdConfig = {
                dateInputFormat: 'YYYY-MM-DD',
                containerClass: 'theme-blue',
                showWeekNumbers: false
            };
            this.edConfig = {
                dateInputFormat: 'YYYY-MM-DD',
                containerClass: 'theme-blue',
                showWeekNumbers: false
            };
        }
        ApplyLeaveComponent.prototype.__validate = function () {
            return true;
        };
        ApplyLeaveComponent.prototype.__sanitizeLeave = function (leave) {
            if (leave.start_date !== undefined) {
                leave.start_date = this.datePipe.transform(leave.start_date, 'yyyy-MM-dd');
            }
            if (leave.end_date !== undefined) {
                leave.end_date = this.datePipe.transform(leave.end_date, 'yyyy-MM-dd');
            }
            if (this.notify_users.length > 0) {
                leave.notify_users = [];
                for (var _i = 0, _a = this.notify_users; _i < _a.length; _i++) {
                    var user_id = _a[_i];
                    var user = lodash_1.find(this.user_list, lodash_1.matchesProperty('user_id', user_id));
                    var employee = new leave_service_1.EmployeeBasic();
                    employee.email_id = user.email_id;
                    employee.name = user.name;
                    leave.notify_users.push(employee);
                }
            }
            return leave;
        };
        ApplyLeaveComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.__loadUsers();
                    this.profileService.getProfile('leaves')
                        .then(function (profile) {
                        var leave_types = [];
                        if (profile.leaves) {
                            profile.leaves.forEach(function (leave) {
                                if (leave.leaves > 0) {
                                    leave_types.push(leave.leave_type);
                                }
                            });
                        }
                        _this.leave_type = leave_types;
                    }).catch(function (err) {
                        _this.error = err;
                        _this.errorModal.show();
                    });
                    return [2];
                });
            });
        };
        ApplyLeaveComponent.prototype.__loadUsers = function () {
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
        ApplyLeaveComponent.prototype.setStartDate = function (value) {
            this.edConfig['minDate'] = value;
            this.endDate.setConfig();
        };
        ApplyLeaveComponent.prototype.applyLeave = function () {
            var _this = this;
            if (this.__validate()) {
                var leave = JSON.parse(JSON.stringify(this.leave));
                leave = this.__sanitizeLeave(leave);
                this.error = '';
                this.invalid_attributes = [];
                this.leaveService.apply(leave).then(function (data) {
                    _this.successModal.show('/leave/list');
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
        ApplyLeaveComponent.prototype.leaveTypeDisabled = function (leave_type) {
            return this.leave_type.indexOf(leave_type) === -1;
        };
        ApplyLeaveComponent.prototype.filterUsers = function (term, item) {
            var regex = new RegExp(term, 'i');
            return item.email_id.match(regex) || item.name.match(regex);
        };
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ApplyLeaveComponent.prototype, "errorModal", void 0);
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ApplyLeaveComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('startDate'),
            __metadata("design:type", ngx_bootstrap_1.BsDatepickerDirective)
        ], ApplyLeaveComponent.prototype, "startDate", void 0);
        __decorate([
            core_1.ViewChild('endDate'),
            __metadata("design:type", ngx_bootstrap_1.BsDatepickerDirective)
        ], ApplyLeaveComponent.prototype, "endDate", void 0);
        ApplyLeaveComponent = __decorate([
            core_1.Component({
                selector: 'app-apply-leave',
                template: __webpack_require__(/*! ./apply-leave.component.html */ "./src/app/modules/leave/apply-leave/apply-leave.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [leave_service_1.LeaveService, leave_policy_service_1.LeavePolicyService, employee_service_1.EmployeeService, common_1.DatePipe]
            }),
            __metadata("design:paramtypes", [leave_policy_service_1.LeavePolicyService,
                leave_service_1.LeaveService,
                profile_service_1.ProfileService,
                employee_service_1.EmployeeService,
                user_service_1.User,
                common_1.DatePipe,
                exatask_service_1.ExaTask])
        ], ApplyLeaveComponent);
        return ApplyLeaveComponent;
    }());
    exports.ApplyLeaveComponent = ApplyLeaveComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/leave.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/leave/leave.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js"), __webpack_require__(/*! ./leave.routing */ "./src/app/modules/leave/leave.routing.ts"), __webpack_require__(/*! ./apply-leave/apply-leave.component */ "./src/app/modules/leave/apply-leave/apply-leave.component.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-directives.module */ "./src/app/modules/application-directives.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! ./list-leave/list-leave.component */ "./src/app/modules/leave/list-leave/list-leave.component.ts"), __webpack_require__(/*! ./review-leave/review-leave.component */ "./src/app/modules/leave/review-leave/review-leave.component.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, datepicker_1, leave_routing_1, apply_leave_component_1, application_components_module_1, application_directives_module_1, application_pipes_module_1, list_leave_component_1, review_leave_component_1, ngx_bootstrap_1, ng_select_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LeaveModule = (function () {
        function LeaveModule() {
        }
        LeaveModule = __decorate([
            core_1.NgModule({
                imports: [
                    leave_routing_1.LeaveRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    ngx_bootstrap_1.ModalModule,
                    datepicker_1.BsDatepickerModule,
                    ng_select_1.NgSelectModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_directives_module_1.ApplicationDirectivesModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    apply_leave_component_1.ApplyLeaveComponent,
                    list_leave_component_1.ListLeaveComponent,
                    review_leave_component_1.ReviewLeaveComponent
                ],
                providers: []
            })
        ], LeaveModule);
        return LeaveModule;
    }());
    exports.LeaveModule = LeaveModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/leave.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/leave/leave.routing.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./apply-leave/apply-leave.component */ "./src/app/modules/leave/apply-leave/apply-leave.component.ts"), __webpack_require__(/*! ./list-leave/list-leave.component */ "./src/app/modules/leave/list-leave/list-leave.component.ts"), __webpack_require__(/*! ./review-leave/review-leave.component */ "./src/app/modules/leave/review-leave/review-leave.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, apply_leave_component_1, list_leave_component_1, review_leave_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Leave'
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
                            module: 'leave',
                            entity: 'leave',
                            action: 'find'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: list_leave_component_1.ListLeaveComponent
                },
                {
                    path: 'review',
                    data: {
                        title: 'Review',
                        access: {
                            module: 'leave',
                            entity: 'leave',
                            action: 'review'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: review_leave_component_1.ReviewLeaveComponent
                },
                {
                    path: 'apply',
                    data: {
                        title: 'Apply',
                        access: {
                            module: 'leave',
                            entity: 'leave',
                            action: 'create'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: apply_leave_component_1.ApplyLeaveComponent
                },
                {
                    path: 'policy',
                    loadChildren: './policy/leave-policy.module#LeavePolicyModule'
                }
            ]
        }
    ];
    var LeaveRoutingModule = (function () {
        function LeaveRoutingModule() {
        }
        LeaveRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], LeaveRoutingModule);
        return LeaveRoutingModule;
    }());
    exports.LeaveRoutingModule = LeaveRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/list-leave/list-leave.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/leave/list-leave/list-leave.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-6 text-left\">\n              <button class=\"btn btn-primary mr-1\" type=\"button\" routerLink=\"/leave/policy\" (click)=\"exatask.trackEvent('leave', 'manage', 'leave-policy')\" *ngIf=\"leavePolicyAllowed\">Manage Leave Policies</button>\n            </div>\n            <div class=\"col-6 text-right\">\n              <button class=\"btn btn-primary mr-1\" type=\"button\" routerLink=\"/leave/review\" (click)=\"exatask.trackEvent('leave', 'review')\" *ngIf=\"reviewAllowed\">+ Review Leave(s)</button>\n              <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/leave/apply\" (click)=\"exatask.trackEvent('leave', 'apply')\" *ngIf=\"applyAllowed\">+ Apply Leave</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading Leaves</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && leaves.length == 0\">\n            <h3>No Leaves applied</h3>\n            <br/>\n            <h5 *ngIf=\"!leavePolicyExists\" class=\"font-italic\">\n              Your organization doesn't have an active Leave policy.<br/>\n              Can't apply or review leave requests.\n            </h5>\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" *ngIf=\"!loading && leaves.length > 0\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Date(s)</th>\n                  <th>Leave</th>\n                  <th>Summary</th>\n                  <th>Reviewed By</th>\n                  <th>Status</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let leave of leaves; let i = index\">\n                  <td>{{i+1}}.</td>\n                  <td>\n                    <span *ngIf=\"leave.start_date === leave.end_date\">\n                      {{leave.start_date | date: 'EEEE, dd MMMM, yyyy'}}\n                    </span>\n                    <span *ngIf=\"leave.start_date !== leave.end_date\">\n                      From {{leave.start_date | date: 'EEEE, dd MMMM, yyyy'}}<br/>\n                      To {{leave.end_date | date: 'EEEE, dd MMMM, yyyy'}}\n                    </span>\n                  </td>\n                  <td>{{'leave.type.' + leave.leave_type | constants}}</td>\n                  <td>{{leave.summary}}</td>\n                  <td>\n                    <span *ngIf=\"leave.reviewed_by\">{{leave.reviewed_by.name}}</span>\n                    <span *ngIf=\"!leave.reviewed_by\" class=\"badge badge-secondary\">System</span>\n                  </td>\n                  <td>\n                    <span class=\"badge\" [ngClass]=\"getStatusBadge(leave.leave_status)\">\n                      {{'leave.status.' + leave.leave_status | constants}}\n                    </span>\n                  </td>\n                  <td>\n\n                    <button *ngIf=\"leave.leave_status === 1\" type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"exatask.trackEvent('leave', 'cancel', leave._id.toString()); cancelLeave(i)\" [disabled]=\"cancelling[i]\">\n                      <span class=\"fa fa-spinner fa-spin\" *ngIf=\"cancelling[i]\"></span>&nbsp;Cancel\n                    </button>\n\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/leave/list-leave/list-leave.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/leave/list-leave/list-leave.component.ts ***!
  \******************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/leave/leave.service */ "./src/app/modules/leave/leave.service.ts"), __webpack_require__(/*! config/constants/leave */ "./src/app/config/constants/leave.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! ../../employee/employee-leave-policy/employee-leave-policy.service */ "./src/app/modules/employee/employee-leave-policy/employee-leave-policy.service.ts"), __webpack_require__(/*! ../../../core/providers/user.service */ "./src/app/core/providers/user.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, leave_service_1, leave_1, access_service_1, exatask_service_1, employee_leave_policy_service_1, user_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListLeaveComponent = (function () {
        function ListLeaveComponent(leaveService, employeeLeavePolicyService, user, access, exatask) {
            this.leaveService = leaveService;
            this.employeeLeavePolicyService = employeeLeavePolicyService;
            this.user = user;
            this.access = access;
            this.exatask = exatask;
            this.leaves = [];
            this.loading = false;
            this.applyAllowed = false;
            this.reviewAllowed = false;
            this.leavePolicyAllowed = false;
            this.leavePolicyExists = false;
            this.cancelling = new Array();
            this.exatask.setTitle('Leave List');
        }
        ListLeaveComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'leave',
                                    entity: 'leave',
                                    action: 'create'
                                })];
                        case 1:
                            _a.applyAllowed = _d.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'leave',
                                    entity: 'leave',
                                    action: 'review'
                                })];
                        case 2:
                            _b.reviewAllowed = _d.sent();
                            _c = this;
                            return [4, this.access.hasAccess({
                                    module: 'leave',
                                    entity: 'policy',
                                    action: 'create'
                                })];
                        case 3:
                            _c.leavePolicyAllowed = _d.sent();
                            this.employeeLeavePolicyService.getEmployeeLeavePolicy(this.user.user_id).then(function (policy) {
                                if (policy) {
                                    _this.leavePolicyExists = true;
                                }
                                else {
                                    _this.applyAllowed = false;
                                    _this.reviewAllowed = false;
                                }
                            }).catch(function (err) {
                                _this.applyAllowed = false;
                                _this.reviewAllowed = false;
                            });
                            this.loadLeaves();
                            return [2];
                    }
                });
            });
        };
        ListLeaveComponent.prototype.loadLeaves = function () {
            var _this = this;
            var self = this;
            this.loading = true;
            this.leaveService.getLeaves().then(function (leaves) {
                self.loading = false;
                _this.leaves = leaves;
            });
        };
        ListLeaveComponent.prototype.cancelLeave = function (index) {
            var leave_id = this.leaves[index]._id;
            var self = this;
            this.cancelling[index] = true;
            this.leaveService.cancel(leave_id).then(function (response) {
                self.leaves[index].leave_status = leave_1.STATUS.DELETED;
                self.cancelling[index] = false;
            });
        };
        ListLeaveComponent.prototype.getStatusBadge = function (status) {
            switch (status) {
                case 2: return 'badge-success';
                case 3: return 'badge-danger';
                case 4: return 'badge-dark';
                default: return 'badge-default';
            }
        };
        ListLeaveComponent = __decorate([
            core_1.Component({
                selector: 'app-list-leave',
                template: __webpack_require__(/*! ./list-leave.component.html */ "./src/app/modules/leave/list-leave/list-leave.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [leave_service_1.LeaveService, employee_leave_policy_service_1.EmployeeLeavePolicyService]
            }),
            __metadata("design:paramtypes", [leave_service_1.LeaveService,
                employee_leave_policy_service_1.EmployeeLeavePolicyService,
                user_service_1.User,
                access_service_1.Access,
                exatask_service_1.ExaTask])
        ], ListLeaveComponent);
        return ListLeaveComponent;
    }());
    exports.ListLeaveComponent = ListLeaveComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/review-leave/review-leave.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/leave/review-leave/review-leave.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn btn-link\" type=\"button\" routerLink=\"/leave/list\" (click)=\"exatask.trackEvent('leave', 'back')\">Back</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading leaves for review</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && leaves.length == 0\">\n            <h3>No Leaves to review</h3>\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" *ngIf=\"!loading && leaves.length > 0\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Employee</th>\n                  <th>Leave Type</th>\n                  <th>Duration</th>\n                  <th>Summary</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let leave of leaves; let i = index\">\n                  <td>{{i+1}}.</td>\n                  <td>{{leave.name}}</td>\n                  <td>{{leave.leave_type | constants: 'leave.type'}}</td>\n                  <td>\n                    <span *ngIf=\"leave.start_date === leave.end_date\">\n                      {{leave.start_date | date: 'dd-MM-yyyy'}}\n                    </span>\n                    <span *ngIf=\"leave.start_date !== leave.end_date\">\n                      Start Date: {{leave.start_date | date: 'dd-MM-yyyy'}}<br/>\n                      End Date: {{leave.end_date | date: 'dd-MM-yyyy'}}\n                    </span>\n                  </td>\n                  <td>{{leave.summary}}</td>\n                  <td>\n\n                    <div *ngIf=\"!reviewed[leave._id]\">\n                      <button type=\"button\" class=\"btn btn-success btn-sm mr-1\" (click)=\"exatask.trackEvent('leave', 'confirmation', 'approve', leave._id.toString()); leaveConfirmation(1, leave._id);\" [disabled]=\"approving[leave._id] || rejecting[leave._id]\" *ngIf=\"approveAllowed\">\n                        <span class=\"fa fa-spinner fa-spin\" *ngIf=\"approving[leave._id]\"></span>&nbsp;Approve\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"exatask.trackEvent('leave', 'confirmation', 'reject', leave._id.toString()); leaveConfirmation(2, leave._id);\" [disabled]=\"approving[leave._id] || rejecting[leave._id]\" *ngIf=\"rejectAllowed\">\n                        <span class=\"fa fa-spinner fa-spin\" *ngIf=\"rejecting[leave._id]\"></span>&nbsp;Reject\n                      </button>\n                    </div>\n\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #confirmModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" [ngClass]=\"{'modal-success': operation === 1, 'modal-danger': operation === 2}\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <span class=\"mb-0\" *ngIf=\"operation === 1\">Confirm leave approval</span>\n          <span class=\"mb-0\" *ngIf=\"operation === 2\">Confirm leave rejection</span>\n        </h4>\n        <button type=\"button\" class=\"close\" (click)=\"exatask.trackEvent('leave', 'confirmation', 'close', leave_id); confirmModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h5 *ngIf=\"operation === 1\">Are you sure you would like to approve leave of {{ leave.name }}?</h5>\n        <div class=\"row\" *ngIf=\"operation === 2\">\n          <h5>Kindly provide reason for rejecting leave of {{ leave.name }}</h5>\n          <div class=\"form-group row\">\n            <label class=\"col-md-3 col-form-label\" for=\"reason\">\n              Reason <span class=\"required\">*</span>\n            </label>\n            <div class=\"col-md-9\">\n              <textarea name=\"reason\" class=\"form-control\" id=\"reason\" [(ngModel)]=\"reject_reason\"></textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"operation === 1\" type=\"button\" (click)=\"exatask.trackEvent('leave', 'approve', leave_id); approve(leave_id)\" class=\"btn btn-success\">Approve</button>\n        <button *ngIf=\"operation === 2\" type=\"button\" (click)=\"exatask.trackEvent('leave', 'reject', leave_id); reject(leave_id)\" class=\"btn btn-danger\">Reject</button>\n        <button type=\"button\" (click)=\"exatask.trackEvent('leave', 'confirmation', 'cancel', leave_id); confirmModal.hide()\" class=\"btn btn-link\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/leave/review-leave/review-leave.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/leave/review-leave/review-leave.component.ts ***!
  \**********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/leave/leave.service */ "./src/app/modules/leave/leave.service.ts"), __webpack_require__(/*! config/constants/leave */ "./src/app/config/constants/leave.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, leave_service_1, leave_1, access_service_1, exatask_service_1, ngx_bootstrap_1, lodash_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Operation;
    (function (Operation) {
        Operation[Operation["APPROVE"] = 1] = "APPROVE";
        Operation[Operation["REJECT"] = 2] = "REJECT";
    })(Operation || (Operation = {}));
    var ReviewLeaveComponent = (function () {
        function ReviewLeaveComponent(leaveService, access, exatask) {
            this.leaveService = leaveService;
            this.access = access;
            this.exatask = exatask;
            this.leaves = [];
            this.loading = false;
            this.operation = Operation.APPROVE;
            this.reject_reason = '';
            this.reviewed = [];
            this.approving = [];
            this.rejecting = [];
            this.exatask.setTitle('Leave Review List');
        }
        ReviewLeaveComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.loadLeaves();
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'leave',
                                    entity: 'review',
                                    action: 'approve'
                                })];
                        case 1:
                            _a.approveAllowed = _c.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'leave',
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
        ReviewLeaveComponent.prototype.loadLeaves = function () {
            var self = this;
            var query = new Map();
            query.set('leave_status', leave_1.STATUS.APPLIED);
            this.loading = true;
            this.leaveService.getReviewLeaves(query).then(function (leaves) {
                self.loading = false;
                self.leaves = leaves;
            });
        };
        ReviewLeaveComponent.prototype.approve = function (leave_id) {
            var _this = this;
            this.approving[leave_id] = true;
            this.leaveService.approve(leave_id).then(function (response) {
                _this.reviewed[leave_id] = true;
                _this.approving[leave_id] = false;
            });
        };
        ReviewLeaveComponent.prototype.reject = function (leave_id) {
            var _this = this;
            this.rejecting[leave_id] = true;
            this.leaveService.reject(leave_id, this.reject_reason).then(function (response) {
                _this.reviewed[leave_id] = true;
                _this.rejecting[leave_id] = false;
                _this.reject_reason = '';
            });
        };
        ReviewLeaveComponent.prototype.leaveConfirmation = function (operation, leave_id) {
            this.operation = operation;
            this.leave_id = leave_id;
            this.leave = lodash_1.find(this.leaves, lodash_1.matchesProperty('_id', leave_id));
            this.reject_reason = '';
            this.confirmModal.show();
        };
        __decorate([
            core_1.ViewChild('confirmModal'),
            __metadata("design:type", ngx_bootstrap_1.ModalDirective)
        ], ReviewLeaveComponent.prototype, "confirmModal", void 0);
        ReviewLeaveComponent = __decorate([
            core_1.Component({
                selector: 'app-review-leave',
                template: __webpack_require__(/*! ./review-leave.component.html */ "./src/app/modules/leave/review-leave/review-leave.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [leave_service_1.LeaveService]
            }),
            __metadata("design:paramtypes", [leave_service_1.LeaveService,
                access_service_1.Access,
                exatask_service_1.ExaTask])
        ], ReviewLeaveComponent);
        return ReviewLeaveComponent;
    }());
    exports.ReviewLeaveComponent = ReviewLeaveComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=12.d0af51dfa64d262055f8.js.map