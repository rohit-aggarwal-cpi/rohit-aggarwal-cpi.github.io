(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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
    var OPERATION;
    (function (OPERATION) {
        OPERATION[OPERATION["CREATE"] = 1] = "CREATE";
        OPERATION[OPERATION["ACTIVATE"] = 2] = "ACTIVATE";
        OPERATION[OPERATION["EXPIRE"] = 3] = "EXPIRE";
    })(OPERATION = exports.OPERATION || (exports.OPERATION = {}));
    var PERIOD;
    (function (PERIOD) {
        PERIOD[PERIOD["FOREVER"] = 1] = "FOREVER";
        PERIOD[PERIOD["WEEKLY"] = 2] = "WEEKLY";
        PERIOD[PERIOD["MONTHLY"] = 3] = "MONTHLY";
        PERIOD[PERIOD["QUARTERLY"] = 4] = "QUARTERLY";
        PERIOD[PERIOD["YEARLY"] = 5] = "YEARLY";
    })(PERIOD = exports.PERIOD || (exports.PERIOD = {}));
    var APPLIES_TO_TYPE;
    (function (APPLIES_TO_TYPE) {
        APPLIES_TO_TYPE[APPLIES_TO_TYPE["EVERYONE"] = 1] = "EVERYONE";
        APPLIES_TO_TYPE[APPLIES_TO_TYPE["EVERYONE_ELSE"] = 2] = "EVERYONE_ELSE";
        APPLIES_TO_TYPE[APPLIES_TO_TYPE["EMPLOYEE_TYPES"] = 3] = "EMPLOYEE_TYPES";
        APPLIES_TO_TYPE[APPLIES_TO_TYPE["DEPARTMENTS"] = 4] = "DEPARTMENTS";
    })(APPLIES_TO_TYPE = exports.APPLIES_TO_TYPE || (exports.APPLIES_TO_TYPE = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary pull-right\" role='button' type=\"button\" routerLink=\"/work-from-home/policy/add\" (click)=\"exatask.trackEvent('work-from-home', 'create', 'policy')\">+ Add WFH Policy</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading WFH Policies</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && wfh_policies.length == 0\">\n            <h3>No Work from Home Policies in organization</h3>\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" *ngIf=\"!loading && wfh_policies.length > 0\">\n              <thead>\n              <tr>\n                <th>#</th>\n                <th>Title</th>\n                <th>Duration</th>\n                <th>Applies To</th>\n                <th>Approval</th>\n                <th>Allocation Period<br/>(Count)</th>\n                <th>Status</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr *ngFor=\"let policy of wfh_policies; let i = index\">\n                <td>\n                  <span>{{i+1}}.</span>\n                </td>\n                <td>{{policy.title}}</td>\n                <td>\n                    <u>Start Date</u> - {{policy.start_date | date: 'dd MMMM, yyyy'}}\n                    <br /><u>End Date</u> - {{policy.end_date | date: 'dd MMMM, yyyy'}}\n                </td>\n                <td>\n                  <span *ngIf=\"policy.applies_to.everyone\">Everyone<br/></span>\n                  <span *ngIf=\"policy.applies_to.everyone_else\">Everyone else<br/></span>\n                  <span *ngIf=\"policy.applies_to.employee_types && policy.applies_to.employee_types.length > 0\">\n                      <u>Employee Types:</u>\n                      <span *ngFor=\"let type of policy.applies_to.employee_types; let last = last\">\n                        {{type | constants: 'user.employee_type'}}<span *ngIf=\"!last\">, </span>\n                      </span>\n                      <br/>\n                    </span>\n                  <span *ngIf=\"policy.applies_to.departments && policy.applies_to.departments.length > 0\">\n                      <u>Departments:</u>\n                      <span *ngFor=\"let department of policy.applies_to.departments; let last = last\">\n                        {{department.name}}<span *ngIf=\"!last\">, </span>\n                      </span>\n                      <br/>\n                    </span>\n                </td>\n                <td>\n                    <span *ngIf=\"!policy.approval || !policy.approval.required\">Not Required</span>\n                    <span *ngIf=\"policy.approval && policy.approval.required\">\n                      <span *ngIf=\"policy.approval.from_supervisor\">From Supervisor</span>\n                      <br/>\n                      <span *ngIf=\"policy.approval.users && policy.approval.users.length > 0\">From selected Users</span>\n                    </span>\n                </td>\n                <td>\n                  {{ policy.allowed_period | constants: 'wfh_policy.allowed_period' }}\n                  <span *ngIf=\"policy.allowed_period != 1\">({{policy.allowed_count}})</span>\n                </td>\n                <td>\n                    <span class=\"badge\" [ngClass]=\"getStatusBadge(policy.wfh_policy_status)\">\n                      {{policy.wfh_policy_status | constants: 'wfh_policy.status'}}\n                    </span>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/work-from-home/policy/wfh-policy.service */ "./src/app/modules/work-from-home/policy/wfh-policy.service.ts"), __webpack_require__(/*! config/constants/wfh-policy */ "./src/app/config/constants/wfh-policy.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, wfh_policy_service_1, wfh_policy_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListWfhPolicyComponent = (function () {
        function ListWfhPolicyComponent(wfhPolicyService, exatask) {
            this.wfhPolicyService = wfhPolicyService;
            this.exatask = exatask;
            this.loading = false;
            this.error = '';
            this.exatask.setTitle('WFH Policy List');
        }
        ListWfhPolicyComponent.prototype.ngOnInit = function () {
            var _this = this;
            var status = [
                wfh_policy_1.STATUS.ACTIVE,
                wfh_policy_1.STATUS.SCHEDULED
            ];
            var query = new Map();
            query.set('wfh_policy_status', status.join(','));
            this.loading = true;
            this.wfhPolicyService.getPolicy().then(function (policies) {
                _this.loading = false;
                _this.wfh_policies = policies;
            }).catch(function (err) {
                _this.error = err;
            });
        };
        ListWfhPolicyComponent.prototype.getStatusBadge = function (status) {
            switch (status) {
                case wfh_policy_1.STATUS.ACTIVE: return 'badge-success';
                case wfh_policy_1.STATUS.SCHEDULED: return 'badge-warning';
                case wfh_policy_1.STATUS.EXPIRED: return 'badge-danger';
                default: return 'badge-default';
            }
        };
        ListWfhPolicyComponent = __decorate([
            core_1.Component({
                selector: 'app-list-wfh-policy',
                template: __webpack_require__(/*! ./list-wfh-policy.component.html */ "./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.html"),
                providers: [wfh_policy_service_1.WfhPolicyService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [wfh_policy_service_1.WfhPolicyService,
                exatask_service_1.ExaTask])
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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-3\">\n            <div class=\"col-12 text-right\">\n              <span class=\"required\">*</span> Required Fields\n            </div>\n          </div>\n\n          <form #wfhPolicyForm=\"ngForm\">\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"title\">\n                <span class=\"required\">*</span> Title\n              </label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" [(ngModel)]=\"wfhPolicy.title\" />\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-form-label col-md-3\" for=\"start-date\">\n                <span class=\"required\">*</span>&nbsp;Start Date\n              </label>\n              <div class=\"col-md-3 input-group\">\n                <input type=\"text\" name=\"date\" class=\"form-control\" id=\"start-date\" [(ngModel)]=\"wfhPolicy.start_date\" bsDatepicker #startDate=\"bsDatepicker\" [bsConfig]=\"sdConfig\" required>\n                <span class=\"input-group-append\">\n                  <button class=\"btn\" (click)=\"startDate.show()\" [attr.aria-expanded]=\"startDate.isOpen\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n              <label class=\"col-md-3 col-form-label\" for=\"end-date\">\n                <span class=\"required\">*</span> End Date\n              </label>\n              <div class=\"col-md-3 input-group\">\n                <input type=\"text\" name=\"end-date\" class=\"form-control\" id=\"end-date\" [(ngModel)]=\"wfhPolicy.end_date\" bsDatepicker #endDate=\"bsDatepicker\" [bsConfig]=\"edConfig\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn\" (click)=\"endDate.show()\" [attr.aria-expanded]=\"endDate.isOpen\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n\n              <label class=\"col-md-3 col-form-label\">\n                <span class=\"required\">*</span> Applies To\n              </label>\n              <div class=\"col-md-9\">\n                <div class=\"row form-group\" *ngFor=\"let apply_to of applies_to; let i = index; let last = last;\">\n\n                  <div class=\"col-md-4\">\n                    <select name=\"applies-to-{{i}}\" id=\"applies-to-{{i}}\" class=\"form-control\" [(ngModel)]=\"apply_to.applies_to_type\">\n                      <option *ngFor=\"let type of 'wfh_policy.applies_to_type' | constantsarray\" [value]=\"type.key\">\n                        {{ type.value }}\n                      </option>\n                    </select>\n                  </div>\n\n                  <div class=\"col-md-7\" *ngIf=\"displayAppliesToData(apply_to.applies_to_type)\">\n\n                    <ng-select name=\"employee_types\" [items]=\"'user.employee_type' | constantsarray\" [multiple]=\"true\" [addTag]=\"false\"\n                               [closeOnSelect]=\"false\" [clearable]=\"true\" [searchable]=\"true\" [clearSearchOnAdd]=\"true\" [hideSelected]=\"true\"\n                               bindLabel=\"value\" bindValue=\"key\" placeholder=\"Select Employee Types\" [(ngModel)]=\"apply_to.employee_types\"\n                               *ngIf=\"apply_to.applies_to_type == 3\">\n\n                      <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                        {{item.value}}\n                      </ng-template>\n\n                    </ng-select>\n\n                    <ng-select name=\"departments\" [loading]=\"loading_departments\" [items]=\"department_list\" [multiple]=\"true\" [addTag]=\"false\"\n                               [closeOnSelect]=\"false\" [clearable]=\"true\" [searchable]=\"true\" [clearSearchOnAdd]=\"true\" [hideSelected]=\"true\"\n                               bindLabel=\"name\" bindValue=\"department_id\" placeholder=\"Select Departments\" notFoundText=\"No department found\"\n                               [(ngModel)]=\"apply_to.departments\" *ngIf=\"apply_to.applies_to_type == 4\">\n\n                      <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                        {{item.name}}\n                      </ng-template>\n\n                    </ng-select>\n\n                  </div>\n\n                  <div class=\"col-md-1\">\n                    <button *ngIf=\"last && !appliesToDisabled()\" class=\"btn\" (click)=\"exatask.trackEvent('work-from-home', 'add-applies-to'); addAppliesTo()\">\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button *ngIf=\"!last\" class=\"btn\" (click)=\"exatask.trackEvent('work-from-home', 'remove-applies-to'); removeAppliesTo(i)\">\n                      <i class=\"fa fa-close\"></i>\n                    </button>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n\n              <label class=\"col-md-3 col-form-label\" for=\"period\">\n                <span class=\"required\">*</span>&nbsp;Allocation Period\n              </label>\n              <div class=\"col-md-3\">\n                <select name=\"period\" id=\"period\" class=\"form-control\" [(ngModel)]=\"wfhPolicy.allowed_period\">\n                  <option *ngFor=\"let period of 'wfh_policy.allowed_period' | constantsarray\" [value]=\"period.key\">\n                    {{ period.value }}\n                  </option>\n                </select>\n              </div>\n\n              <label class=\"col-md-3 col-form-label\" for=\"count\">\n                <span class=\"required\">*</span>&nbsp;Count\n              </label>\n              <div class=\"col-md-3\">\n                <input type=\"text\" name=\"count\" id=\"count\" class=\"form-control\" [(ngModel)]=\"wfhPolicy.allowed_count\" [disabled]=\"wfhPolicy.allowed_period == 1\" />\n              </div>\n\n            </div>\n\n            <div class=\"form-group row\">\n\n              <label class=\"col-md-3 col-form-label\" for=\"allowed-back-days\">\n                Allowed Back Days&nbsp;\n                <i class=\"fa fa-question-circle\" tooltip=\"WFH can be applied these many days after taking WFH\" placement=\"bottom\"></i>\n              </label>\n              <div class=\"col-md-3\">\n                <input type=\"text\" name=\"allowed-back-days\" id=\"allowed-back-days\" class=\"form-control\" [(ngModel)]=\"wfhPolicy.allowed_back_days\" />\n              </div>\n\n              <label class=\"col-md-3 col-form-label\" for=\"loaned-count\">\n                Loaned Count&nbsp;\n                <i class=\"fa fa-question-circle\" tooltip=\"Employee can apply for these many WFH after the limit is exhausted\" placement=\"bottom\"></i>\n              </label>\n              <div class=\"col-md-3\">\n                <input type=\"text\" name=\"loaned-count\" id=\"loaned-count\" class=\"form-control\" [(ngModel)]=\"wfhPolicy.loaned_count\" />\n              </div>\n\n            </div>\n\n            <div class=\"form-group row\">\n\n              <label class=\"col-md-3 col-form-label\">Approval</label>\n              <div class=\"col-md-3\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"approval-supervisor\" class=\"form-check-input\" id=\"approval-supervisor\" value=\"true\" [(ngModel)]=\"wfhPolicy.approval.from_supervisor\">\n                  <label class=\"form-check-label\" for=\"approval-supervisor\">Approval from Supervisor</label>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"form-group row\">\n\n              <div class=\"offset-md-3 col-md-3\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"approval-users\" class=\"form-check-input\" id=\"approval-users\" value=\"true\" [(ngModel)]=\"from_users\">\n                  <label class=\"form-check-label\" for=\"approval-users\">Approval from selected Users</label>\n                </div>\n              </div>\n\n              <div class=\"col-md-6\">\n                <ng-select name=\"users\" [loading]=\"loading_users\" [items]=\"user_list\" [multiple]=\"true\" [addTag]=\"false\" [closeOnSelect]=\"false\" [clearable]=\"true\" [searchable]=\"true\" [searchFn]=\"filterUsers\" [clearSearchOnAdd]=\"true\" [hideSelected]=\"true\" bindLabel=\"name\"  bindValue=\"user_id\" placeholder=\"Select Users\" notFoundText=\"No user found\" [disabled]=\"!from_users\" [(ngModel)]=\"wfhPolicy.approval.users\" #users=\"ngModel\">\n\n                  <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                    {{item.name}} <{{item.email_id}}>\n                  </ng-template>\n\n                </ng-select>\n              </div>\n\n            </div>\n\n            <div class=\"form-actions row mt-4\">\n              <div class=\"col-12\">\n                <button type=\"button\" class=\"btn btn-link pull-right\" routerLink=\"/work-from-home/policy\" (click)=\"exatask.trackEvent('work-from-home', 'cancel', 'policy')\">Cancel</button>\n                <button [disabled]=\"!wfhPolicyForm.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"exatask.trackEvent('work-from-home', 'submit', 'policy'); saveWfhPolicy()\">Submit</button>\n              </div>\n            </div>\n\n          </form>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    Updated WFH Policy Successfully!\n  </div>\n</app-success-modal>\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    There was an error updating WFH Policy. {{error}}\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes \">{{attribute}}</li>\n    </ul>\n  </div>\n</app-error-modal>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! modules/work-from-home/policy/wfh-policy.service */ "./src/app/modules/work-from-home/policy/wfh-policy.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! ../../../../config/constants/leave-policy */ "./src/app/config/constants/leave-policy.ts"), __webpack_require__(/*! ../../../organization/department/department.service */ "./src/app/modules/organization/department/department.service.ts"), __webpack_require__(/*! ../../../leave/policy/leave-policy.service */ "./src/app/modules/leave/policy/leave-policy.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, success_modal_component_1, error_modal_component_1, lodash_1, employee_service_1, wfh_policy_service_1, profile_service_1, ngx_bootstrap_1, common_1, exatask_service_1, leave_policy_1, department_service_1, leave_policy_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserSearchItem = (function () {
        function UserSearchItem() {
        }
        return UserSearchItem;
    }());
    var DepartmentSearchItem = (function () {
        function DepartmentSearchItem() {
        }
        return DepartmentSearchItem;
    }());
    var AppliesToInput = (function () {
        function AppliesToInput() {
        }
        return AppliesToInput;
    }());
    var error_map = {
        start_date: 'Start Date',
        end_date: 'End Date',
        count: 'Allowed Count',
        allowed_period: 'Allowed Period',
        loaned_count: 'Loaned Count',
        allowed_back_days: 'Allowed Back Days'
    };
    var ManageWfhPolicyComponent = (function () {
        function ManageWfhPolicyComponent(wfhPolicyService, employeeService, departmentService, datePipe, exatask) {
            this.wfhPolicyService = wfhPolicyService;
            this.employeeService = employeeService;
            this.departmentService = departmentService;
            this.datePipe = datePipe;
            this.exatask = exatask;
            this.from_users = false;
            this.user_list = [];
            this.department_list = [];
            this.loading_users = false;
            this.loading_departments = false;
            this.exatask.setTitle('Manage WFH Policy');
            this.wfhPolicy = new wfh_policy_service_1.WfhPolicy();
            this.wfhPolicy.title = 'WFH Policy dt. ' + this.datePipe.transform(new Date(), 'dd MMMM, yyyy');
            this.error = '';
            this.applies_to = new Array();
            this.applies_to.push(new AppliesToInput());
            this.invalid_attributes = [];
            var current_date = new Date();
            current_date.setDate(current_date.getDate() + 1);
            this.sdConfig = {
                minDate: current_date,
                dateInputFormat: 'YYYY-MM-DD',
                containerClass: 'theme-blue',
                showWeekNumbers: false
            };
            this.edConfig = {
                minDate: current_date,
                dateInputFormat: 'YYYY-MM-DD',
                containerClass: 'theme-blue',
                showWeekNumbers: false
            };
        }
        ManageWfhPolicyComponent.prototype.ngOnInit = function () {
            this.__loadUsers();
            this.__loadDepartments();
        };
        ManageWfhPolicyComponent.prototype.__validate = function () {
            return true;
        };
        ManageWfhPolicyComponent.prototype.__loadUsers = function () {
            var _this = this;
            this.loading_users = true;
            this.employeeService.getEmployees(null, 0, 0, ['_id', 'email_id', 'name'])
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
        ManageWfhPolicyComponent.prototype.__loadDepartments = function () {
            var _this = this;
            this.loading_departments = true;
            this.departmentService.getDepartments(null, ['_id', 'name'])
                .then(function (response) {
                _this.department_list = response.map(function (department) {
                    var item = new DepartmentSearchItem();
                    item.department_id = department._id;
                    item.name = department.name;
                    return item;
                });
                console.log(_this.department_list);
                _this.loading_departments = false;
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageWfhPolicyComponent.prototype.__sanitizeWfhPolicy = function (wfhPolicy) {
            if (wfhPolicy.start_date !== undefined) {
                wfhPolicy.start_date = this.datePipe.transform(wfhPolicy.start_date, 'yyyy-MM-dd');
            }
            if (wfhPolicy.end_date !== undefined) {
                wfhPolicy.end_date = this.datePipe.transform(wfhPolicy.end_date, 'yyyy-MM-dd');
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
            var wfh_apply_to = new leave_policy_service_1.AppliesTo();
            for (var _i = 0, _a = this.applies_to; _i < _a.length; _i++) {
                var apply_to = _a[_i];
                switch (parseInt(apply_to.applies_to_type.toString(), 10)) {
                    case leave_policy_1.APPLIES_TO_TYPE.EVERYONE:
                        wfh_apply_to.everyone = true;
                        break;
                    case leave_policy_1.APPLIES_TO_TYPE.EVERYONE_ELSE:
                        wfh_apply_to.everyone_else = true;
                        break;
                    case leave_policy_1.APPLIES_TO_TYPE.EMPLOYEE_TYPES:
                        wfh_apply_to.employee_types = apply_to.employee_types;
                        break;
                    case leave_policy_1.APPLIES_TO_TYPE.DEPARTMENTS:
                        var departments = new Array();
                        for (var _b = 0, _c = apply_to.departments; _b < _c.length; _b++) {
                            var department_id = _c[_b];
                            departments.push(lodash_1.find(this.department_list, lodash_1.matchesProperty('department_id', department_id)));
                        }
                        wfh_apply_to.departments = departments;
                        break;
                }
            }
            wfhPolicy.applies_to = wfh_apply_to;
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
                this.wfhPolicyService.postPolicy(wfh_policy).then(function (data) {
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
        ManageWfhPolicyComponent.prototype.displayAppliesToData = function (applies_to_type) {
            var allowed_applies_to = [
                leave_policy_1.APPLIES_TO_TYPE.EMPLOYEE_TYPES,
                leave_policy_1.APPLIES_TO_TYPE.DEPARTMENTS
            ];
            return allowed_applies_to.indexOf(parseInt(applies_to_type, 10)) !== -1;
        };
        ManageWfhPolicyComponent.prototype.appliesToDisabled = function () {
            if (this.applies_to.length >= 4) {
                return true;
            }
            for (var _i = 0, _a = this.applies_to; _i < _a.length; _i++) {
                var applies_to = _a[_i];
                if (!applies_to.applies_to_type) {
                    continue;
                }
                if (parseInt(applies_to.applies_to_type.toString(), 10) === leave_policy_1.APPLIES_TO_TYPE.EVERYONE ||
                    parseInt(applies_to.applies_to_type.toString(), 10) === leave_policy_1.APPLIES_TO_TYPE.EVERYONE_ELSE) {
                    return true;
                }
            }
            return false;
        };
        ManageWfhPolicyComponent.prototype.addAppliesTo = function () {
            this.applies_to.push(new AppliesToInput());
        };
        ManageWfhPolicyComponent.prototype.removeAppliesTo = function (index) {
            this.applies_to.splice(index, 1);
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
        __decorate([
            core_1.ViewChild('endDate'),
            __metadata("design:type", ngx_bootstrap_1.BsDatepickerDirective)
        ], ManageWfhPolicyComponent.prototype, "endDate", void 0);
        ManageWfhPolicyComponent = __decorate([
            core_1.Component({
                selector: 'app-manage-wfh-policy',
                template: __webpack_require__(/*! ./manage-wfh-policy.component.html */ "./src/app/modules/work-from-home/policy/manage-wfh-policy/manage-wfh-policy.component.html"),
                providers: [wfh_policy_service_1.WfhPolicyService, employee_service_1.EmployeeService, department_service_1.DepartmentService, common_1.DatePipe],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [wfh_policy_service_1.WfhPolicyService,
                employee_service_1.EmployeeService,
                department_service_1.DepartmentService,
                common_1.DatePipe,
                exatask_service_1.ExaTask])
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! ./wfh-policy.routing */ "./src/app/modules/work-from-home/policy/wfh-policy.routing.ts"), __webpack_require__(/*! ./manage-wfh-policy/manage-wfh-policy.component */ "./src/app/modules/work-from-home/policy/manage-wfh-policy/manage-wfh-policy.component.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js"), __webpack_require__(/*! ./list-wfh-policy/list-wfh-policy.component */ "./src/app/modules/work-from-home/policy/list-wfh-policy/list-wfh-policy.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, ngx_bootstrap_1, wfh_policy_routing_1, manage_wfh_policy_component_1, application_components_module_1, application_pipes_module_1, ng_select_1, list_wfh_policy_component_1) {
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
                            module: 'work-from-home',
                            entity: 'policy',
                            action: 'find'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: list_wfh_policy_component_1.ListWfhPolicyComponent
                },
                {
                    path: 'add',
                    data: {
                        title: 'Add',
                        access: {
                            module: 'work-from-home',
                            entity: 'policy',
                            action: 'create'
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
    var WfhApproval = (function () {
        function WfhApproval() {
            this.required = false;
            this.from_supervisor = false;
        }
        return WfhApproval;
    }());
    exports.WfhApproval = WfhApproval;
    var AppliesTo = (function () {
        function AppliesTo() {
        }
        return AppliesTo;
    }());
    exports.AppliesTo = AppliesTo;
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
        function WfhPolicyService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._base_url = '/wfhs/policies';
            return _this;
        }
        WfhPolicyService.prototype.getPolicy = function (query) {
            return this.get(this._base_url, query)
                .then(function (response) { return response['data']; });
        };
        WfhPolicyService.prototype.postPolicy = function (policy) {
            return this.post(this._base_url, policy)
                .then(function (response) { return response; });
        };
        WfhPolicyService = __decorate([
            core_1.Injectable()
        ], WfhPolicyService);
        return WfhPolicyService;
    }(api_service_1.Api));
    exports.WfhPolicyService = WfhPolicyService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=11.e545aca0f1bf710c9801.js.map