(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/app/config/constants/wfh-policy.ts":
/*!************************************************!*\
  !*** ./src/app/config/constants/wfh-policy.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var STATUS;
    (function (STATUS) {
        STATUS[STATUS["INACTIVE"] = 0] = "INACTIVE";
        STATUS[STATUS["ACTIVE"] = 1] = "ACTIVE";
        STATUS[STATUS["SCHEDULED"] = 2] = "SCHEDULED";
        STATUS[STATUS["EXPIRED"] = 3] = "EXPIRED";
        STATUS[STATUS["DELETED"] = 4] = "DELETED";
    })(STATUS = exports.STATUS || (exports.STATUS = {}));
    ;
    var OPERATION;
    (function (OPERATION) {
        OPERATION[OPERATION["CREATE"] = 1] = "CREATE";
        OPERATION[OPERATION["ACTIVATE"] = 2] = "ACTIVATE";
        OPERATION[OPERATION["EXPIRE"] = 3] = "EXPIRE";
    })(OPERATION = exports.OPERATION || (exports.OPERATION = {}));
    ;
    var PERIOD;
    (function (PERIOD) {
        PERIOD[PERIOD["FOREVER"] = 1] = "FOREVER";
        PERIOD[PERIOD["WEEKLY"] = 2] = "WEEKLY";
        PERIOD[PERIOD["MONTHLY"] = 3] = "MONTHLY";
        PERIOD[PERIOD["QUARTERLY"] = 4] = "QUARTERLY";
        PERIOD[PERIOD["YEARLY"] = 5] = "YEARLY";
    })(PERIOD = exports.PERIOD || (exports.PERIOD = {}));
    ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/config/locales/en.json":
/*!****************************************!*\
  !*** ./src/app/config/locales/en.json ***!
  \****************************************/
/*! exports provided: access_control, addon, compensatory_off, entity, feedback, leave, leave_policy, metadata, organization, department, holiday, user, wfh_policy, wfh, default */
/***/ (function(module) {

module.exports = {"access_control":{"status":{"0":"Inactive","1":"Active"},"type":{"1":"Locked Entity","2":"Custom","3":"Locked User"},"operation":{"1":"Create","2":"Update"}},"addon":{"price":{"1":"Monthly","2":"Quaterly","3":"Half-Yearly","4":"Yearly","5":"One-Time"},"currency":{"INR":"INR"},"type":{"1":"Employee","2":"Module"},"status":{"0":"Inactive","1":"Active"}},"compensatory_off":{"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"},"expiry":{"1":"Never","2":"End of Leave Policy","3":"After Month(s)","4":"After Day(s)"}},"entity":{"type":{"1":"Core","2":"Addon","3":"Private"},"status":{"0":"Inactive","1":"Active"},"access":{"1":"Public","2":"Private","3":"Unrestricted","4":"Exclusive"}},"feedback":{"status":{"0":"Inactive","1":"Active"},"operation":{"1":"Create"}},"leave":{"type":{"EL":"Earned Leave","CL":"Casual Leave","SL":"Sick Leave","ML":"Maternity Leave","PL":"Paternity Leave","LWP":"Leave without Pay","COMP":"Compensatory-Off"},"duration":{"1":"Full-Day","2":"First-Half","3":"Second-Half"},"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"},"operation":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"}},"leave_policy":{"status":{"0":"Inactive","1":"Active","2":"Scheduled","3":"Expired"},"operation":{"1":"Create","2":"Activate","3":"Expire"},"allocation":{"1":"One-Time","2":"Quarterly","3":"Monthly","4":"On-Demand"}},"metadata":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"level":{"1":"High School","2":"Graduate","3":"Post-Graduate","4":"Doctorate","5":"Diploma"}},"organization":{"status":{"0":"Inactive","1":"Active","2":"Pending"},"operation":{"1":"Create","2":"Confirm","3":"Update"}},"department":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"operation":{"1":"Create","2":"Update"}},"holiday":{"operation":{"1":"Create","2":"Update"}},"user":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"gender":{"1":"Male","2":"Female","3":"Other"},"marital_status":{"1":"Unmarried","2":"Married"},"operation":{"1":"Create","2":"Set Password","3":"Reset Password","4":"Change Password","5":"Update","6":"Assign Leaves"},"social_security":{"pan":"PAN Card","aadhaar":"Aadhaar Card","passport":"Passport"},"calendar_date":{"1":"Leave"}},"wfh_policy":{"allowed_period":{"1":"Forever","2":"Weekly","3":"Monthly","4":"Quarterly","5":"Yearly"},"status":{"0":"Inactive","1":"Active","2":"Expired"}},"wfh":{"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"}}};

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

/***/ "./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <div *ngIf=\"!activeWfhPolicy && !scheduledWfhPolicy\">\n\n          <div class=\"text-center m-5\">\n            <a [routerLink]=\"['/work-from-home/policy/manage']\" class=\"btn btn-primary btn-lg\">Create your Work from Home Policy</a>\n          </div>\n\n      </div>\n\n      <div *ngIf=\"activeWfhPolicy\" class=\"card\">\n\n        <div class=\"card-header text-white bg-success\">\n\n          Active since {{activeWfhPolicy.start_date}}\n          <span *ngIf=\"activeWfhPolicy.end_date\">till {{activeWfhPolicy.end_date}}</span>\n\n          <a *ngIf=\"!scheduledWfhPolicy\" class=\"pull-right btn btn-primary\" [routerLink]=\"['/work-from-home/policy/manage']\">Update</a>\n\n        </div>\n\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <label class=\"col-3\">Allocation Period</label>\n            <label class=\"col-3\">{{ activeWfhPolicy.allowed_period | constants: 'wfh_policy.allowed_period' }}</label>\n            <label *ngIf=\"activeWfhPolicy.allowed_period != 1\" class=\"col-3\">Allowed Count</label>\n            <label *ngIf=\"activeWfhPolicy.allowed_period != 1\" class=\"col-3\">{{activeWfhPolicy.allowed_count}}</label>\n          </div>\n\n          <div class=\"row\">\n            <label class=\"col-3\">Allowed Back Days</label>\n            <label class=\"col-3\">{{activeWfhPolicy.allowed_back_days}}</label>\n            <label class=\"col-3\">Loaned Count</label>\n            <label class=\"col-3\">{{activeWfhPolicy.loaned_count}}</label>\n          </div>\n\n          <div class=\"row\">\n            <label class=\"col-3\">Approval</label>\n            <label class=\"col-3\">\n              <span *ngIf=\"!activeWfhPolicy.approval || !activeWfhPolicy.approval.required\">Not Required</span>\n              <span *ngIf=\"activeWfhPolicy.approval && activeWfhPolicy.approval.required\">\n                <span *ngIf=\"activeWfhPolicy.approval.from_supervisor\">From Supervisor</span>\n                <br />\n                <span *ngIf=\"activeWfhPolicy.approval.users && activeWfhPolicy.approval.users.length > 0\">From selected Users</span>\n              </span>\n            </label>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div *ngIf=\"activeWfhPolicy\" class=\"card\">\n\n        <div class=\"card-header text-white bg-warning\">\n          Scheduled from {{scheduledWfhPolicy.start_date}}\n        </div>\n\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <label class=\"col-3\">Allocation Period</label>\n            <label class=\"col-3\">{{ scheduledWfhPolicy.allowed_period | constants: 'wfh_policy.allowed_period' }}</label>\n            <label *ngIf=\"scheduledWfhPolicy.allowed_period != 1\" class=\"col-3\">Allowed Count</label>\n            <label *ngIf=\"scheduledWfhPolicy.allowed_period != 1\" class=\"col-3\">{{scheduledWfhPolicy.allowed_count}}</label>\n          </div>\n\n          <div class=\"row\">\n            <label class=\"col-3\">Allowed Back Days</label>\n            <label class=\"col-3\">{{scheduledWfhPolicy.allowed_back_days}}</label>\n            <label class=\"col-3\">Loaned Count</label>\n            <label class=\"col-3\">{{scheduledWfhPolicy.loaned_count}}</label>\n          </div>\n\n          <div class=\"row\">\n            <label class=\"col-3\">Approval</label>\n            <label class=\"col-3\">\n              <span *ngIf=\"!scheduledWfhPolicy.approval || !scheduledWfhPolicy.approval.required\">Not Required</span>\n              <span *ngIf=\"scheduledWfhPolicy.approval && scheduledWfhPolicy.approval.required\">\n                <span *ngIf=\"scheduledWfhPolicy.approval.from_supervisor\">From Supervisor</span>\n                <br />\n                <span *ngIf=\"scheduledWfhPolicy.approval.users && scheduledWfhPolicy.approval.users.length > 0\">From selected Users</span>\n              </span>\n            </label>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.ts ***!
  \********************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/work-from-home/policy/wfh-policy.service */ "./src/app/modules/work-from-home/policy/wfh-policy.service.ts"), __webpack_require__(/*! config/constants/wfh-policy */ "./src/app/config/constants/wfh-policy.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, wfh_policy_service_1, wfh_policy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListWfhPolicyComponent = (function () {
        function ListWfhPolicyComponent(wfhPolicyService) {
            this.wfhPolicyService = wfhPolicyService;
            this.error = '';
        }
        ListWfhPolicyComponent.prototype.ngOnInit = function () {
            var _this = this;
            var status = [
                wfh_policy_1.STATUS.ACTIVE,
                wfh_policy_1.STATUS.SCHEDULED
            ];
            var query = new Map();
            query.set('wfh_policy_status', status.join(','));
            this.wfhPolicyService.getPolicy().then(function (policies) {
                for (var _i = 0, policies_1 = policies; _i < policies_1.length; _i++) {
                    var policy = policies_1[_i];
                    if (policy.wfh_policy_status === wfh_policy_1.STATUS.ACTIVE) {
                        _this.activeWfhPolicy = policy;
                    }
                    else if (policy.wfh_policy_status === wfh_policy_1.STATUS.SCHEDULED) {
                        _this.scheduledWfhPolicy = policy;
                    }
                }
            }).catch(function (err) {
                _this.error = err;
            });
        };
        ListWfhPolicyComponent = __decorate([
            core_1.Component({
                selector: 'app-list-wfh-policy',
                template: __webpack_require__(/*! ./list-wfh-policy.component.html */ "./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.html"),
                providers: [wfh_policy_service_1.WfhPolicyService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [wfh_policy_service_1.WfhPolicyService])
        ], ListWfhPolicyComponent);
        return ListWfhPolicyComponent;
    }());
    exports.ListWfhPolicyComponent = ListWfhPolicyComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/policy/manage-wfh-policy/manage-wfh-policy.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/work-from-home/policy/manage-wfh-policy/manage-wfh-policy.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <form #wfhPolicyForm=\"ngForm\">\n\n                <div class=\"form-group row\">\n                  <label class=\"col-form-label col-3\">\n                    <span class=\"required\">*</span>&nbsp;Effective Start Date\n                  </label>\n                  <div class=\"col-3 input-group\">\n                    <input type=\"text\" name=\"date\" class=\"form-control\" id=\"date\" [(ngModel)]=\"wfhPolicy.date\" bsDatepicker #startDate=\"bsDatepicker\" [bsConfig]=\"dateConfig\" required>\n                    <span class=\"input-group-append\">\n                      <button class=\"btn\" (click)=\"startDate.show()\" [attr.aria-expanded]=\"startDate.isOpen\">\n                        <i class=\"fa fa-calendar\"></i>\n                      </button>\n                    </span>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <label class=\"col-3 col-form-label\">\n                    <span class=\"required\">*</span>&nbsp;Allocation Period\n                  </label>\n                  <div class=\"col-3\">\n                    <select name=\"period\" id=\"period\" class=\"form-control\" [(ngModel)]=\"wfhPolicy.allowed_period\">\n                      <option *ngFor=\"let period of wfh_period | constantsarray\" [ngValue]=\"period\">\n                        {{ period | constants: 'wfh_policy.allowed_period' }}\n                      </option>\n                    </select>\n                  </div>\n\n                  <label class=\"col-3 col-form-label\">\n                    <span class=\"required\">*</span>&nbsp;Count\n                  </label>\n                  <div class=\"col-3\">\n                    <input type=\"text\" name=\"count\" id=\"count\" class=\"form-control\" [(ngModel)]=\"wfhPolicy.allowed_count\" [disabled]=\"wfhPolicy.allowed_period == 1\" />\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <label class=\"col-3 col-form-label\">\n                    Allowed Back Days&nbsp;\n                    <i class=\"fa fa-question-circle\" tooltip=\"WFH can be applied these many days after taking WFH\" placement=\"bottom\"></i>\n                  </label>\n                  <div class=\"col-3\">\n                    <input type=\"text\" name=\"allowed-back-days\" id=\"allowed-back-days\" class=\"form-control\" [(ngModel)]=\"wfhPolicy.allowed_back_days\" />\n                  </div>\n\n                  <label class=\"col-3 col-form-label\">\n                    Loaned Count&nbsp;\n                    <i class=\"fa fa-question-circle\" tooltip=\"Employee can apply for these many WFH after the limit is exhausted\" placement=\"bottom\"></i>\n                  </label>\n                  <div class=\"col-3\">\n                    <input type=\"text\" name=\"loaned-count\" id=\"loaned-count\" class=\"form-control\" [(ngModel)]=\"wfhPolicy.loaned_count\" />\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <label class=\"col-3 col-form-label\">Approval</label>\n                  <div class=\"col-3\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" name=\"approval-supervisor\" class=\"form-check-input\" id=\"approval-supervisor\" value=\"true\" [(ngModel)]=\"wfhPolicy.approval.from_supervisor\">\n                      <label class=\"form-check-label\" for=\"approval-supervisor\">Approval from Supervisor</label>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <div class=\"offset-3 col-3\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" name=\"approval-users\" class=\"form-check-input\" id=\"approval-users\" value=\"true\" [(ngModel)]=\"from_users\">\n                      <label class=\"form-check-label\" for=\"approval-users\">Approval from selected Users</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-6\">\n                    <ng-select name=\"users\" [loading]=\"loading_users\" [items]=\"user_list\" [multiple]=\"true\" [addTag]=\"false\" [closeOnSelect]=\"false\" [clearable]=\"true\" [searchable]=\"true\" [searchFn]=\"filterUsers\" [clearSearchOnAdd]=\"true\" [hideSelected]=\"true\" bindLabel=\"name\"  bindValue=\"user_id\" placeholder=\"Select Users\" notFoundText=\"No user found\" [disabled]=\"!from_users\" [(ngModel)]=\"wfhPolicy.approval.users\" #users=\"ngModel\">\n\n                      <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                        {{item.name}} <{{item.email_id}}>\n                      </ng-template>\n\n                    </ng-select>\n                  </div>\n\n                </div>\n\n                <div class=\"form-actions row mt-4\">\n                  <div class=\"col-12\">\n                    <button type=\"button\" class=\"btn btn-link pull-right\" routerLink=\"/work-from-home/policy\">Cancel</button>\n                    <button [disabled]=\"!wfhPolicyForm.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"saveWfhPolicy()\">Submit</button>\n                  </div>\n                </div>\n\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <content>\n    Updated WFH Policy Successfully!\n  </content>\n</app-success-modal>\n<app-error-modal #errorModal title=\"Error!\">\n  <content>\n    There was an error updating WFH Policy. {{error}}\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes \">{{attribute}}</li>\n    </ul>\n  </content>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/work-from-home/policy/manage-wfh-policy/manage-wfh-policy.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/work-from-home/policy/manage-wfh-policy/manage-wfh-policy.component.ts ***!
  \************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! modules/work-from-home/policy/wfh-policy.service */ "./src/app/modules/work-from-home/policy/wfh-policy.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! config/constants/wfh-policy */ "./src/app/config/constants/wfh-policy.ts"), __webpack_require__(/*! shared/helpers/utility */ "./src/app/shared/helpers/utility.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, success_modal_component_1, error_modal_component_1, employee_service_1, wfh_policy_service_1, profile_service_1, wfh_policy_1, utility_1, ngx_bootstrap_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserSearchItem = (function () {
        function UserSearchItem() {
        }
        return UserSearchItem;
    }());
    var error_map = {
        date: 'Effective Start Date',
        count: 'Allowed Count',
        allowed_period: 'Allowed Period',
        loaned_count: 'Loaned Count',
        allowed_back_days: 'Allowed Back Days'
    };
    var ManageWfhPolicyComponent = (function () {
        function ManageWfhPolicyComponent(wfhPolicyService, employeeService, datePipe) {
            this.wfhPolicyService = wfhPolicyService;
            this.employeeService = employeeService;
            this.datePipe = datePipe;
            this.from_users = false;
            this.user_list = [];
            this.loading_users = false;
            this.wfh_period = utility_1.default.copy(wfh_policy_1.PERIOD);
            this.wfhPolicy = new wfh_policy_service_1.WfhPolicy();
            this.error = '';
            this.invalid_attributes = [];
            var current_date = new Date();
            current_date.setDate(current_date.getDate() + 1);
            this.dateConfig = {
                minDate: current_date,
                dateInputFormat: 'YYYY-MM-DD',
                containerClass: 'theme-blue',
                showWeekNumbers: false
            };
        }
        ManageWfhPolicyComponent.prototype.ngOnInit = function () {
            this.__loadUsers();
        };
        ManageWfhPolicyComponent.prototype.__validate = function () {
            return true;
        };
        ManageWfhPolicyComponent.prototype.__loadUsers = function () {
            var _this = this;
            this.loading_users = true;
            this.employeeService.getEmployees(null, 0, 0, ['email_id', 'name'])
                .then(function (response) {
                _this.user_list = response.users.map(function (user) {
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
        ManageWfhPolicyComponent.prototype.__sanitizeWfhPolicy = function (wfhPolicy) {
            if (wfhPolicy.date !== undefined) {
                wfhPolicy.date = this.datePipe.transform(wfhPolicy.date, 'yyyy-MM-dd');
            }
            if (wfhPolicy.allowed_count === undefined) {
                wfhPolicy.allowed_count = null;
            }
            var approval = wfhPolicy.approval;
            if (approval && (approval.from_supervisor || (approval.users && approval.users.length > 0))) {
                wfhPolicy.approval.required = true;
            }
            else {
                wfhPolicy.approval = {
                    required: false
                };
            }
            return wfhPolicy;
        };
        ManageWfhPolicyComponent.prototype.filterUsers = function (term, item) {
            var regex = new RegExp(term, 'i');
            return item.email_id.match(regex) || item.name.match(regex);
        };
        ManageWfhPolicyComponent.prototype.saveWfhPolicy = function () {
            var _this = this;
            if (this.__validate()) {
                var wfh_policy = JSON.parse(JSON.stringify(this.wfhPolicy));
                wfh_policy = this.__sanitizeWfhPolicy(wfh_policy);
                this.error = '';
                this.invalid_attributes = [];
                this.wfhPolicyService.putPolicy(wfh_policy).then(function (data) {
                    _this.successModal.show('/work-from-home/policy');
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
        ], ManageWfhPolicyComponent.prototype, "errorModal", void 0);
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ManageWfhPolicyComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('startDate'),
            __metadata("design:type", ngx_bootstrap_1.BsDatepickerDirective)
        ], ManageWfhPolicyComponent.prototype, "startDate", void 0);
        ManageWfhPolicyComponent = __decorate([
            core_1.Component({
                selector: 'app-manage-wfh-policy',
                template: __webpack_require__(/*! ./manage-wfh-policy.component.html */ "./src/app/modules/work-from-home/policy/manage-wfh-policy/manage-wfh-policy.component.html"),
                providers: [wfh_policy_service_1.WfhPolicyService, employee_service_1.EmployeeService, common_1.DatePipe],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [wfh_policy_service_1.WfhPolicyService,
                employee_service_1.EmployeeService,
                common_1.DatePipe])
        ], ManageWfhPolicyComponent);
        return ManageWfhPolicyComponent;
    }());
    exports.ManageWfhPolicyComponent = ManageWfhPolicyComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/policy/wfh-policy.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/work-from-home/policy/wfh-policy.module.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js"), __webpack_require__(/*! ./wfh-policy.routing */ "./src/app/modules/work-from-home/policy/wfh-policy.routing.ts"), __webpack_require__(/*! ./manage-wfh-policy/manage-wfh-policy.component */ "./src/app/modules/work-from-home/policy/manage-wfh-policy/manage-wfh-policy.component.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js"), __webpack_require__(/*! ./list-wfh-policy/list-wfh-policy.component */ "./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, ngx_bootstrap_1, wfh_policy_routing_1, manage_wfh_policy_component_1, application_components_module_1, application_pipes_module_1, ng_select_1, list_wfh_policy_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WfhPolicyModule = (function () {
        function WfhPolicyModule() {
        }
        WfhPolicyModule = __decorate([
            core_1.NgModule({
                imports: [
                    wfh_policy_routing_1.WfhPolicyRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    ngx_bootstrap_1.CollapseModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule,
                    ngx_bootstrap_1.BsDatepickerModule,
                    ng_select_1.NgSelectModule,
                    ngx_bootstrap_1.TooltipModule
                ],
                declarations: [
                    manage_wfh_policy_component_1.ManageWfhPolicyComponent,
                    list_wfh_policy_component_1.ListWfhPolicyComponent
                ],
                providers: []
            })
        ], WfhPolicyModule);
        return WfhPolicyModule;
    }());
    exports.WfhPolicyModule = WfhPolicyModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/policy/wfh-policy.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/work-from-home/policy/wfh-policy.routing.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./manage-wfh-policy/manage-wfh-policy.component */ "./src/app/modules/work-from-home/policy/manage-wfh-policy/manage-wfh-policy.component.ts"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./list-wfh-policy/list-wfh-policy.component */ "./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, manage_wfh_policy_component_1, authentication_service_1, authorization_service_1, list_wfh_policy_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Policy'
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
                            entity: 'work_from_home:policy',
                            action: 'find:get'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: list_wfh_policy_component_1.ListWfhPolicyComponent
                },
                {
                    path: 'manage',
                    data: {
                        title: 'Manage',
                        access: {
                            entity: 'work_from_home:policy',
                            action: 'manage:put'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: manage_wfh_policy_component_1.ManageWfhPolicyComponent
                }
            ]
        }
    ];
    var WfhPolicyRoutingModule = (function () {
        function WfhPolicyRoutingModule() {
        }
        WfhPolicyRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], WfhPolicyRoutingModule);
        return WfhPolicyRoutingModule;
    }());
    exports.WfhPolicyRoutingModule = WfhPolicyRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/policy/wfh-policy.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/work-from-home/policy/wfh-policy.service.ts ***!
  \*********************************************************************/
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
    var WfhApproval = (function () {
        function WfhApproval() {
            this.required = false;
            this.from_supervisor = false;
        }
        return WfhApproval;
    }());
    exports.WfhApproval = WfhApproval;
    var WfhPolicy = (function () {
        function WfhPolicy() {
            this.approval = new WfhApproval();
        }
        return WfhPolicy;
    }());
    exports.WfhPolicy = WfhPolicy;
    var WfhPolicyElement = (function (_super) {
        __extends(WfhPolicyElement, _super);
        function WfhPolicyElement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return WfhPolicyElement;
    }(WfhPolicy));
    exports.WfhPolicyElement = WfhPolicyElement;
    var WfhPolicyService = (function (_super) {
        __extends(WfhPolicyService, _super);
        function WfhPolicyService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/wfhs/policies';
            return _this;
        }
        WfhPolicyService.prototype.getPolicy = function (query) {
            return this.get(this._base_url);
        };
        WfhPolicyService.prototype.putPolicy = function (policy) {
            return this.put(this._base_url + '/manage', policy)
                .then(function (response) { return response; });
        };
        WfhPolicyService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], WfhPolicyService);
        return WfhPolicyService;
    }(api_service_1.Api));
    exports.WfhPolicyService = WfhPolicyService;
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
//# sourceMappingURL=15.3510e3e09129def9838c.js.map