(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/app/modules/leave/policy/leave-policy.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/leave/policy/leave-policy.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js"), __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js"), __webpack_require__(/*! ./leave-policy.routing */ "./src/app/modules/leave/policy/leave-policy.routing.ts"), __webpack_require__(/*! ./list-leave-policy/list-leave-policy.component */ "./src/app/modules/leave/policy/list-leave-policy/list-leave-policy.component.ts"), __webpack_require__(/*! ./manage-leave-policy/manage-leave-policy.component */ "./src/app/modules/leave/policy/manage-leave-policy/manage-leave-policy.component.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-directives.module */ "./src/app/modules/application-directives.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, datepicker_1, tooltip_1, leave_policy_routing_1, list_leave_policy_component_1, manage_leave_policy_component_1, application_components_module_1, application_directives_module_1, application_pipes_module_1, ng_select_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LeavePolicyModule = (function () {
        function LeavePolicyModule() {
        }
        LeavePolicyModule = __decorate([
            core_1.NgModule({
                imports: [
                    leave_policy_routing_1.LeavePolicyRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    datepicker_1.BsDatepickerModule,
                    tooltip_1.TooltipModule,
                    ng_select_1.NgSelectModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_directives_module_1.ApplicationDirectivesModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    list_leave_policy_component_1.ListLeavePolicyComponent,
                    manage_leave_policy_component_1.ManageLeavePolicyComponent
                ],
                providers: []
            })
        ], LeavePolicyModule);
        return LeavePolicyModule;
    }());
    exports.LeavePolicyModule = LeavePolicyModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/policy/leave-policy.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/leave/policy/leave-policy.routing.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./manage-leave-policy/manage-leave-policy.component */ "./src/app/modules/leave/policy/manage-leave-policy/manage-leave-policy.component.ts"), __webpack_require__(/*! ./list-leave-policy/list-leave-policy.component */ "./src/app/modules/leave/policy/list-leave-policy/list-leave-policy.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, manage_leave_policy_component_1, list_leave_policy_component_1) {
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
                            module: 'leave',
                            entity: 'policy',
                            action: 'find'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: list_leave_policy_component_1.ListLeavePolicyComponent
                },
                {
                    path: 'add',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Add',
                        access: {
                            module: 'leave',
                            entity: 'policy',
                            action: 'create'
                        }
                    },
                    component: manage_leave_policy_component_1.ManageLeavePolicyComponent
                }
            ]
        }
    ];
    var LeavePolicyRoutingModule = (function () {
        function LeavePolicyRoutingModule() {
        }
        LeavePolicyRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], LeavePolicyRoutingModule);
        return LeavePolicyRoutingModule;
    }());
    exports.LeavePolicyRoutingModule = LeavePolicyRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/policy/list-leave-policy/list-leave-policy.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/leave/policy/list-leave-policy/list-leave-policy.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary pull-right\" role='button' type=\"button\" routerLink=\"/leave/policy/add\" (click)=\"exatask.trackEvent('leave', 'create', 'policy')\">+ Add Leave Policy</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading Leave Policies</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && leave_policies.length == 0\">\n            <h3>No Leave Policies in organization</h3>\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" *ngIf=\"!loading && leave_policies.length > 0\">\n              <thead>\n                <tr>\n                  <th rowspan=\"2\">#</th>\n                  <th rowspan=\"2\">Title</th>\n                  <th rowspan=\"2\">Duration</th>\n                  <th rowspan=\"2\">Applies To</th>\n                  <th rowspan=\"2\">Approval</th>\n                  <th colspan=\"3\" class=\"text-center\">Leaves</th>\n                  <th rowspan=\"2\">Status</th>\n                </tr>\n                <tr>\n                  <th>Leave Type<br/>(Count)</th>\n                  <th>Allocation</th>\n                  <th>Carry Forward<br/>(Maximum Count)</th>\n                </tr>\n              </thead>\n              <tbody>\n                <ng-template ngFor let-policy [ngForOf]=\"leave_policies\" let-i=\"index\">\n                  <tr *ngFor=\"let leave of policy.leaves; let first = first\">\n                    <td>\n                      <span *ngIf=\"first\">{{i+1}}.</span>\n                    </td>\n                    <td>{{policy.title}}</td>\n                    <td>\n                      <span *ngIf=\"first\">\n                        <u>Start Date</u> - {{policy.start_date | date: 'dd MMMM, yyyy'}}\n                        <br /><u>End Date</u> - {{policy.end_date | date: 'dd MMMM, yyyy'}}\n                      </span>\n                    </td>\n                    <td *ngIf=\"first\">\n                      <span *ngIf=\"policy.applies_to.everyone\">Everyone<br/></span>\n                      <span *ngIf=\"policy.applies_to.everyone_else\">Everyone else<br/></span>\n                      <span *ngIf=\"policy.applies_to.employee_types && policy.applies_to.employee_types.length > 0\">\n                        <u>Employee Types:</u>\n                        <span *ngFor=\"let type of policy.applies_to.employee_types; let last = last\">\n                          {{type | constants: 'user.employee_type'}}<span *ngIf=\"!last\">, </span>\n                        </span>\n                        <br/>\n                      </span>\n                      <span *ngIf=\"policy.applies_to.departments && policy.applies_to.departments.length > 0\">\n                        <u>Departments:</u>\n                        <span *ngFor=\"let department of policy.applies_to.departments; let last = last\">\n                          {{department.name}}<span *ngIf=\"!last\">, </span>\n                        </span>\n                        <br/>\n                      </span>\n                    </td>\n                    <td>\n                      <span *ngIf=\"first\">\n                        <span *ngIf=\"!policy.approval || !policy.approval.required\">Not Required</span>\n                        <span *ngIf=\"policy.approval && policy.approval.required\">\n                          <span *ngIf=\"policy.approval.from_supervisor\">From Supervisor</span>\n                          <br/>\n                          <span *ngIf=\"policy.approval.users && policy.approval.users.length > 0\">From selected Users</span>\n                        </span>\n                      </span>\n                    </td>\n                    <td>{{leave.leave_type | constants: 'leave.type'}} ({{leave.count}})</td>\n                    <td>{{leave.allocation | constants: 'leave_policy.allocation'}}</td>\n                    <td>\n                      <span *ngIf=\"leave.carry_forward\">Yes ({{leave.maximum_count}})</span>\n                      <span *ngIf=\"!leave.carry_forward\">No</span>\n                    </td>\n                    <td>\n                      <span *ngIf=\"first\" class=\"badge\" [ngClass]=\"getStatusBadge(policy.leave_policy_status)\">\n                        {{policy.leave_policy_status | constants: 'leave_policy.status'}}\n                      </span>\n                    </td>\n                  </tr>\n                </ng-template>\n              </tbody>\n            </table>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/leave/policy/list-leave-policy/list-leave-policy.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/leave/policy/list-leave-policy/list-leave-policy.component.ts ***!
  \***************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/leave/policy/leave-policy.service */ "./src/app/modules/leave/policy/leave-policy.service.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! ../../../../config/constants/leave-policy */ "./src/app/config/constants/leave-policy.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, leave_policy_service_1, exatask_service_1, leave_policy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListLeavePolicyComponent = (function () {
        function ListLeavePolicyComponent(leavePolicyService, exatask) {
            this.leavePolicyService = leavePolicyService;
            this.exatask = exatask;
            this.loading = false;
            this.leave_policies = [];
            this.error = '';
            this.exatask.setTitle('Leave Policy List');
        }
        ListLeavePolicyComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.loading = true;
            this.leavePolicyService.getPolicies().then(function (policies) {
                _this.loading = false;
                _this.leave_policies = policies;
            }).catch(function (err) {
                _this.error = err;
            });
        };
        ListLeavePolicyComponent.prototype.getStatusBadge = function (status) {
            switch (status) {
                case leave_policy_1.STATUS.ACTIVE: return 'badge-success';
                case leave_policy_1.STATUS.SCHEDULED: return 'badge-warning';
                case leave_policy_1.STATUS.EXPIRED: return 'badge-danger';
                default: return 'badge-default';
            }
        };
        ListLeavePolicyComponent = __decorate([
            core_1.Component({
                selector: 'app-leave-policy-list',
                template: __webpack_require__(/*! ./list-leave-policy.component.html */ "./src/app/modules/leave/policy/list-leave-policy/list-leave-policy.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [leave_policy_service_1.LeavePolicyService]
            }),
            __metadata("design:paramtypes", [leave_policy_service_1.LeavePolicyService,
                exatask_service_1.ExaTask])
        ], ListLeavePolicyComponent);
        return ListLeavePolicyComponent;
    }());
    exports.ListLeavePolicyComponent = ListLeavePolicyComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/policy/manage-leave-policy/manage-leave-policy.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/leave/policy/manage-leave-policy/manage-leave-policy.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-3\">\n            <div class=\"col-12 text-right\">\n              <span class=\"required\">*</span> Required Fields\n            </div>\n          </div>\n\n          <form #leavePolicyForm=\"ngForm\">\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"title\">\n                <span class=\"required\">*</span> Title\n              </label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" [(ngModel)]=\"leave_policy.title\" />\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"start-date\">\n                <span class=\"required\">*</span> Start Date\n              </label>\n              <div class=\"col-md-3 input-group\">\n                <input type=\"text\" name=\"start-date\" class=\"form-control\" id=\"start-date\" [(ngModel)]=\"leave_policy.start_date\" bsDatepicker #startDate=\"bsDatepicker\" [bsConfig]=\"sdConfig\" (bsValueChange)=\"setPolicyStartDate($event)\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn\" (click)=\"startDate.show()\" [attr.aria-expanded]=\"startDate.isOpen\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n\n              <label class=\"col-md-3 col-form-label\" for=\"end-date\">\n                <span class=\"required\">*</span> End Date\n              </label>\n              <div class=\"col-md-3 input-group\">\n                <input type=\"text\" name=\"end-date\" class=\"form-control\" id=\"end-date\" [(ngModel)]=\"leave_policy.end_date\" bsDatepicker #endDate=\"bsDatepicker\" [bsConfig]=\"edConfig\">\n                <span class=\"input-group-append\">\n                  <button class=\"btn\" (click)=\"endDate.show()\" [attr.aria-expanded]=\"endDate.isOpen\">\n                    <i class=\"fa fa-calendar\"></i>\n                  </button>\n                </span>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n\n              <label class=\"col-md-3 col-form-label\">\n                <span class=\"required\">*</span> Applies To\n              </label>\n              <div class=\"col-md-9\">\n                <div class=\"row form-group\" *ngFor=\"let apply_to of applies_to; let i = index; let last = last;\">\n\n                  <div class=\"col-md-4\">\n                    <select name=\"applies-to-{{i}}\" id=\"applies-to-{{i}}\" class=\"form-control\" [(ngModel)]=\"apply_to.applies_to_type\">\n                      <option *ngFor=\"let type of 'leave_policy.applies_to_type' | constantsarray\" [value]=\"type.key\">\n                        {{ type.value }}\n                      </option>\n                    </select>\n                  </div>\n\n                  <div class=\"col-md-7\" *ngIf=\"displayAppliesToData(apply_to.applies_to_type)\">\n\n                    <ng-select name=\"employee_types\" [items]=\"'user.employee_type' | constantsarray\" [multiple]=\"true\" [addTag]=\"false\"\n                               [closeOnSelect]=\"false\" [clearable]=\"true\" [searchable]=\"true\" [clearSearchOnAdd]=\"true\" [hideSelected]=\"true\"\n                               bindLabel=\"value\" bindValue=\"key\" placeholder=\"Select Employee Types\" [(ngModel)]=\"apply_to.employee_types\"\n                               *ngIf=\"apply_to.applies_to_type == 3\">\n\n                      <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                        {{item.value}}\n                      </ng-template>\n\n                    </ng-select>\n\n                    <ng-select name=\"departments\" [loading]=\"loading_departments\" [items]=\"department_list\" [multiple]=\"true\" [addTag]=\"false\"\n                               [closeOnSelect]=\"false\" [clearable]=\"true\" [searchable]=\"true\" [clearSearchOnAdd]=\"true\" [hideSelected]=\"true\"\n                               bindLabel=\"name\" bindValue=\"department_id\" placeholder=\"Select Departments\" notFoundText=\"No department found\"\n                               [(ngModel)]=\"apply_to.departments\" *ngIf=\"apply_to.applies_to_type == 4\">\n\n                      <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                        {{item.name}}\n                      </ng-template>\n\n                    </ng-select>\n\n                  </div>\n\n                  <div class=\"col-md-1\">\n                    <button *ngIf=\"last && !appliesToDisabled()\" class=\"btn\" (click)=\"exatask.trackEvent('leave', 'add-applies-to'); addAppliesTo()\">\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button *ngIf=\"!last\" class=\"btn\" (click)=\"exatask.trackEvent('leave', 'remove-applies-to'); removeAppliesTo(i)\">\n                      <i class=\"fa fa-close\"></i>\n                    </button>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n\n              <label class=\"col-md-3 col-form-label\">\n                <span class=\"required\">*</span> Approval\n              </label>\n              <div class=\"col-md-9\">\n\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"approval-supervisor\" class=\"form-check-input\" id=\"approval-supervisor\" value=\"true\" [(ngModel)]=\"leave_policy.approval.from_supervisor\">\n                  <label class=\"form-check-label\" for=\"approval-supervisor\">Approval from Supervisor</label>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" name=\"approval-users\" class=\"form-check-input\" id=\"approval-users\" value=\"true\" [(ngModel)]=\"from_users\">\n                      <label class=\"form-check-label\" for=\"approval-users\">Approval from selected Users</label>\n                    </div>\n\n                  </div>\n                  <div class=\"col-md-8\">\n                    <ng-select name=\"users\" [loading]=\"loading_users\" [items]=\"user_list\" [multiple]=\"true\" [addTag]=\"false\" [closeOnSelect]=\"false\"\n                               [clearable]=\"true\" [searchable]=\"true\" [searchFn]=\"filterUsers\" [clearSearchOnAdd]=\"true\" [hideSelected]=\"true\" bindLabel=\"name\" bindValue=\"user_id\" placeholder=\"Select Users\" notFoundText=\"No user found\" [disabled]=\"!from_users\"\n                               [(ngModel)]=\"leave_policy.approval.users\">\n\n                      <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                        {{item.name}} <{{item.email_id}}>\n                      </ng-template>\n\n                    </ng-select>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"form-group row\">\n\n              <label class=\"col-md-3 col-form-label\" for=\"allowed-back-days\">\n                Allowed Back Days&nbsp;\n                <i class=\"fa fa-question-circle\" tooltip=\"Leaves can be applied these many days after taking leave\" placement=\"bottom\"></i>\n              </label>\n              <div class=\"col-md-3\">\n                <input type=\"text\" name=\"allowed-back-days\" id=\"allowed-back-days\" class=\"form-control\" [(ngModel)]=\"leave_policy.allowed_back_days\" />\n              </div>\n\n              <label class=\"col-md-3 col-form-label\">\n                Reiterate&nbsp;\n                <i class=\"fa fa-question-circle\" tooltip=\"Same policy will be applied again for the same time period when the current one ends\" placement=\"bottom\"></i>\n              </label>\n              <div class=\"col-md-3\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"reiterate\" class=\"form-check-input\" id=\"reiterate\" value=\"true\" [(ngModel)]=\"leave_policy.reiterate\">\n                  <label class=\"form-check-label\" for=\"reiterate\">Apply same Leave Policy in next iteration</label>\n                </div>\n              </div>\n\n            </div>\n\n            <div *ngFor=\"let leave of leave_policy.leaves; let i = index; let last = last;\" class=\"card\">\n\n              <div class=\"card-header\">\n                <div class=\"row\">\n                  <div class=\"col-9\">\n                    <h5 class=\"mt-2\">\n                      Leave :\n                      <span *ngIf=\"leave.leave_type\">{{leave.leave_type | constants: 'leave.type'}} | </span>\n                      <span *ngIf=\"leave.count\">{{leave.count}} Leave(s) | </span>\n                      <span *ngIf=\"leave.allocation\">{{leave.allocation | constants: 'leave_policy.allocation'}} | </span>\n                      <span *ngIf=\"leave.compensatory_off && leave.compensatory_off.expiry.type\">Expire: {{leave.compensatory_off.expiry.type | constants: 'compensatory_off.expiry'}} | </span>\n                    </h5>\n                  </div>\n                  <div class=\"col-3 text-right\">\n                    <button *ngIf=\"!addLeavesDisabled()\" class=\"btn\" (click)=\"exatask.trackEvent('leave', 'add-leave'); addLeave()\">\n                      <i class=\"fa fa-plus\"></i>\n                    </button>\n                    <button class=\"btn\" (click)=\"toggleLeave(i)\">\n                      <i class=\"fa\" [ngClass]=\"{'fa-caret-up': leave_block[i], 'fa-caret-down': !leave_block[i]}\"></i>\n                    </button>\n                    <button *ngIf=\"leave_policy.leaves.length > 1\" class=\"btn\" (click)=\"exatask.trackEvent('leave', 'remove-leave'); removeLeave(i)\">\n                      <i class=\"fa fa-close\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card-body\" [ngClass]=\"{'collapse': !leave_block[i]}\">\n\n                <div class=\"form-group row\">\n\n                  <label class=\"col-md-3 col-form-label\" for=\"leave-type-{{i}}\">\n                    <span class=\"required\">*</span> Leave Type\n                  </label>\n                  <div class=\"col-md-3\">\n                    <select name=\"leave-type-{{i}}\" id=\"leave-type-{{i}}\" class=\"form-control\" [(ngModel)]=\"leave.leave_type\" (change)=\"changeLeaveType(leave)\">\n                      <option *ngFor=\"let type of 'leave.type' | constantsarray\" [value]=\"type.key\" [disabled]=\"leaveTypeDisabled(type.key)\">\n                        {{ type.value }}\n                      </option>\n                    </select>\n                  </div>\n\n                  <label class=\"col-md-3 col-form-label\" [hidden]=\"isCompOff(leave)\" for=\"count-{{i}}\">\n                    <span class=\"required\">*</span> Count\n                  </label>\n                  <div class=\"col-md-3\" [hidden]=\"isCompOff(leave)\">\n                    <input type=\"text\" name=\"count-{{i}}\" id=\"count-{{i}}\" class=\"form-control\" [(ngModel)]=\"leave.count\" />\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\" [hidden]=\"isCompOff(leave)\">\n\n                  <label class=\"col-md-3 col-form-label\" for=\"allocation-{{i}}\">\n                    <span class=\"required\">*</span> Allocation\n                  </label>\n                  <div class=\"col-md-3\">\n                    <select name=\"allocation-{{i}}\" id=\"allocation-{{i}}\" class=\"form-control\" [(ngModel)]=\"leave.allocation\">\n                      <option *ngFor=\"let allocation of 'leave_policy.allocation' | constantsarray\" [value]=\"allocation.key\" [disabled]=\"leaveAllocationDisabled(allocation.key)\">\n                        {{ allocation.value }}\n                      </option>\n                    </select>\n                  </div>\n\n                  <label class=\"col-md-3 col-form-label\" for=\"loaned-count-{{i}}\">\n                    Loaned Count&nbsp;\n                    <i class=\"fa fa-question-circle\" tooltip=\"If employee runs out of leaves, these many can be loaned in advance\"\n                      placement=\"bottom\"></i>\n                  </label>\n                  <div class=\"col-md-3\">\n                    <input type=\"text\" name=\"loaned-count-{{i}}\" id=\"loaned-count-{{i}}\" class=\"form-control\" [(ngModel)]=\"leave.loaned_count\" />\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\" [hidden]=\"isCompOff(leave)\">\n\n                  <label class=\"col-md-3 col-form-label\">\n                    <span class=\"required\">*</span> Carry-Forward&nbsp;\n                    <i class=\"fa fa-question-circle\" tooltip=\"When current leave policy ends, all pending leaves will be carry-forwarded to next iteration of leave policy\" placement=\"bottom\"></i>\n                  </label>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" name=\"carry-forward-{{i}}\" class=\"form-check-input\" id=\"carry-forward-{{i}}\" value=\"true\" [(ngModel)]=\"leave.carry_forward\">\n                      <label class=\"form-check-label\" for=\"carry-forward-{{i}}\">Carry-Forward pending leaves to next iteration</label>\n                    </div>\n                  </div>\n\n                  <label class=\"col-md-3 col-form-label\" for=\"maximum-count-{{i}}\">\n                    Maximum Count&nbsp;\n                    <i class=\"fa fa-question-circle\" tooltip=\"When leaves are carry-forwarded, maximum leaves that employee can be allocated (including the ones that was carry-forward)\"\n                      placement=\"bottom\"></i>\n                  </label>\n                  <div class=\"col-md-3\">\n                    <input type=\"text\" name=\"maximum-count-{{i}}\" id=\"maximum-count-{{i}}\" class=\"form-control\" [(ngModel)]=\"leave.maximum_count\" [disabled]=\"!leave.carry_forward\" />\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <label class=\"col-md-3 col-form-label\">Sandwich</label>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" name=\"sandwich-{{i}}\" class=\"form-check-input\" id=\"sandwich-{{i}}\" value=\"true\" [(ngModel)]=\"leave.sandwich\">\n                      <label class=\"form-check-label\" for=\"sandwich-{{i}}\">Sandwich leaves on weekend and holidays</label>\n                    </div>\n                  </div>\n\n                  <label class=\"col-md-3 col-form-label\" *ngIf=\"isCompOff(leave)\" for=\"expiry-type-{{i}}\">\n                    Comp-Off Expiry\n                    <i class=\"fa fa-question-circle\" tooltip=\"Approved Comp-Offs will expire after selected time-period if not availed\"\n                      placement=\"bottom\"></i>\n                  </label>\n                  <div class=\"col-md-3\" *ngIf=\"isCompOff(leave)\">\n                    <div class=\"input-group\">\n\n                      <select name=\"expiry-type-{{i}}\" id=\"expiry-type-{{i}}\" class=\"form-control\" [(ngModel)]=\"leave.compensatory_off.expiry.type\">\n                        <option *ngFor=\"let expiry of 'compensatory_off.expiry' | constantsarray\" [value]=\"expiry.key\">\n                          {{ expiry.value }}\n                        </option>\n                      </select>\n                      <input type=\"text\" name=\"expiry-count-{{i}}\" id=\"expiry-count-{{i}}\" class=\"form-control\" [(ngModel)]=\"leave.compensatory_off.expiry.count\"\n                        [hidden]=\"!showExpiryCount(leave)\" />\n\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\" *ngIf=\"isCompOff(leave)\">\n\n                  <label class=\"col-md-3 col-form-label\">\n                    Approval\n                    <i class=\"fa fa-question-circle\" tooltip=\"Compensatory-Off must be applied for and approved before it can be availed\" placement=\"bottom\"></i>\n                  </label>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" name=\"compoff-approval-supervisor-{{i}}\" class=\"form-check-input\" id=\"compoff-approval-supervisor-{{i}}\" value=\"true\"\n                        [(ngModel)]=\"leave.compensatory_off.approval.from_supervisor\">\n                      <label class=\"form-check-label\" for=\"compoff-approval-supervisor-{{i}}\">Approval from Supervisor</label>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\" *ngIf=\"isCompOff(leave)\">\n\n                  <div class=\"offset-md-3 col-md-3\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" name=\"compoff-approval-users-{{i}}\" class=\"form-check-input\" id=\"compoff-approval-users-{{i}}\" value=\"true\"\n                        [(ngModel)]=\"from_users_compoff\">\n                      <label class=\"form-check-label\" for=\"compoff-approval-users-{{i}}\">Approval from selected Users</label>\n                    </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <ng-select name=\"compoffusers\" [loading]=\"loading_users\" [items]=\"user_list\" [multiple]=\"true\" [addTag]=\"false\"\n                      [closeOnSelect]=\"false\" [clearable]=\"true\" [searchable]=\"true\" [searchFn]=\"filterUsers\" [clearSearchOnAdd]=\"true\"\n                      [hideSelected]=\"true\" bindLabel=\"name\" bindValue=\"user_id\" placeholder=\"Select Users\" notFoundText=\"No user found\"\n                      [disabled]=\"!from_users_compoff\" [(ngModel)]=\"leave.compensatory_off.approval.users\" #compoffusers=\"ngModel\">\n\n                      <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                        {{item.name}} <{{item.email_id}}>\n                      </ng-template>\n\n                    </ng-select>\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n\n          </form>\n\n          <div class=\"form-actions row mt-4\">\n            <div class=\"col-12\">\n              <button type=\"button\" class=\"btn btn-link pull-right\" routerLink=\"/leave/policy\" (click)=\"exatask.trackEvent('leave', 'cancel')\">Cancel</button>\n              <button [disabled]=\"!leavePolicyForm.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"exatask.trackEvent('leave', 'submit'); saveLeavePolicy()\">Submit</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    {{ !updating_leave_policy ? \"Created\" : \"Updated\" }} Leave Policy Successfully\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    <p>There was an error {{ !updating_leave_policy ? \"creating\" : \"updating\" }} Leave Policy. {{error}}</p>\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes \">{{attribute}}</li>\n    </ul>\n  </div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/leave/policy/manage-leave-policy/manage-leave-policy.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/leave/policy/manage-leave-policy/manage-leave-policy.component.ts ***!
  \*******************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! config/constants/leave */ "./src/app/config/constants/leave.ts"), __webpack_require__(/*! config/constants/leave-policy */ "./src/app/config/constants/leave-policy.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/leave/policy/leave-policy.service */ "./src/app/modules/leave/policy/leave-policy.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! config/constants/compensatory-off */ "./src/app/config/constants/compensatory-off.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! ../../../organization/department/department.service */ "./src/app/modules/organization/department/department.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, lodash_1, leave_1, leave_policy_1, success_modal_component_1, error_modal_component_1, leave_policy_service_1, profile_service_1, employee_service_1, compensatory_off_1, ngx_bootstrap_1, access_service_1, exatask_service_1, department_service_1) {
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
        leave_type: 'Leave Type',
        count: 'Count',
        carry_forward: 'Carry Forward',
        maximum_count: 'Maximum Count',
        loaned_count: 'Loaned Count',
        sandwich: 'Sandwich',
        allowed_back_days: 'Allowed Back Days',
        allocation: 'Allocation'
    };
    var ManageLeavePolicyComponent = (function () {
        function ManageLeavePolicyComponent(leavePolicyService, employeeService, departmentService, datePipe, access, exatask) {
            this.leavePolicyService = leavePolicyService;
            this.employeeService = employeeService;
            this.departmentService = departmentService;
            this.datePipe = datePipe;
            this.access = access;
            this.exatask = exatask;
            this.from_users = false;
            this.from_users_compoff = false;
            this.user_list = [];
            this.department_list = [];
            this.loading_users = false;
            this.loading_departments = false;
            this.comp_off_enabled = false;
            this.exatask.setTitle('Manage Leave Policy');
            this.leave_policy = new leave_policy_service_1.LeavePolicy();
            this.leave_policy.title = 'Leave Policy dt. ' + this.datePipe.transform(new Date(), 'dd MMMM, yyyy');
            this.applies_to = new Array();
            this.applies_to.push(new AppliesToInput());
            this.error = '';
            this.leave_block = [true];
            this.updating_leave_policy = false;
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
        ManageLeavePolicyComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.__loadUsers();
                            this.__loadDepartments();
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'compensatory-off',
                                    entity: 'compensatory-off',
                                    action: 'find'
                                })];
                        case 1:
                            _a.comp_off_enabled = _b.sent();
                            return [2];
                    }
                });
            });
        };
        ManageLeavePolicyComponent.prototype.__validate = function () {
            return true;
        };
        ManageLeavePolicyComponent.prototype.__loadUsers = function () {
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
        ManageLeavePolicyComponent.prototype.__loadDepartments = function () {
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
        ManageLeavePolicyComponent.prototype.__sanitizeLeavePolicy = function (leavePolicy) {
            if (leavePolicy.start_date !== undefined) {
                leavePolicy.start_date = this.datePipe.transform(leavePolicy.start_date, 'yyyy-MM-dd');
            }
            if (leavePolicy.end_date !== undefined) {
                leavePolicy.end_date = this.datePipe.transform(leavePolicy.end_date, 'yyyy-MM-dd');
            }
            var approval = leavePolicy.approval;
            if (approval && (approval.from_supervisor || (approval.users && approval.users.length > 0))) {
                leavePolicy.approval.required = true;
            }
            else {
                leavePolicy.approval = {
                    required: false
                };
            }
            var leave_apply_to = new leave_policy_service_1.AppliesTo();
            for (var _i = 0, _a = this.applies_to; _i < _a.length; _i++) {
                var apply_to = _a[_i];
                switch (parseInt(apply_to.applies_to_type.toString(), 10)) {
                    case leave_policy_1.APPLIES_TO_TYPE.EVERYONE:
                        leave_apply_to.everyone = true;
                        break;
                    case leave_policy_1.APPLIES_TO_TYPE.EVERYONE_ELSE:
                        leave_apply_to.everyone_else = true;
                        break;
                    case leave_policy_1.APPLIES_TO_TYPE.EMPLOYEE_TYPES:
                        leave_apply_to.employee_types = apply_to.employee_types;
                        break;
                    case leave_policy_1.APPLIES_TO_TYPE.DEPARTMENTS:
                        var departments = new Array();
                        for (var _b = 0, _c = apply_to.departments; _b < _c.length; _b++) {
                            var department_id = _c[_b];
                            departments.push(lodash_1.find(this.department_list, lodash_1.matchesProperty('department_id', department_id)));
                        }
                        leave_apply_to.departments = departments;
                        break;
                }
            }
            leavePolicy.applies_to = leave_apply_to;
            return leavePolicy;
        };
        ManageLeavePolicyComponent.prototype.leaveTypeDisabled = function (leave_type) {
            var ignored_leave_types = [
                leave_1.TYPE.PL,
                leave_1.TYPE.ML,
                leave_1.TYPE.LWP
            ];
            if (!this.comp_off_enabled) {
                ignored_leave_types.push(leave_1.TYPE.COMP);
            }
            return ignored_leave_types.indexOf(leave_type) !== -1;
        };
        ManageLeavePolicyComponent.prototype.leaveAllocationDisabled = function (leave_allocation) {
            var ignored_leave_allocations = [
                leave_policy_1.ALLOCATION.ON_DEMAND
            ];
            return ignored_leave_allocations.indexOf(parseInt(leave_allocation, 10)) !== -1;
        };
        ManageLeavePolicyComponent.prototype.appliesToDisabled = function () {
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
        ManageLeavePolicyComponent.prototype.addLeavesDisabled = function () {
            var max_leaves_count = 3;
            if (this.comp_off_enabled) {
                max_leaves_count = 4;
            }
            if (this.leave_policy.leaves.length >= max_leaves_count) {
                return true;
            }
            return false;
        };
        ManageLeavePolicyComponent.prototype.displayAppliesToData = function (applies_to_type) {
            var allowed_applies_to = [
                leave_policy_1.APPLIES_TO_TYPE.EMPLOYEE_TYPES,
                leave_policy_1.APPLIES_TO_TYPE.DEPARTMENTS
            ];
            return allowed_applies_to.indexOf(parseInt(applies_to_type, 10)) !== -1;
        };
        ManageLeavePolicyComponent.prototype.saveLeavePolicy = function () {
            var _this = this;
            if (this.__validate()) {
                var leave_policy = JSON.parse(JSON.stringify(this.leave_policy));
                leave_policy = this.__sanitizeLeavePolicy(leave_policy);
                this.error = '';
                this.invalid_attributes = [];
                this.leavePolicyService.postPolicy(leave_policy).then(function (data) {
                    _this.successModal.show('/leave/policy');
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
        ManageLeavePolicyComponent.prototype.addLeave = function () {
            this.leave_policy.addLeave();
            this.leave_block.push(true);
        };
        ManageLeavePolicyComponent.prototype.removeLeave = function (index) {
            this.leave_policy.removeLeave(index);
            this.leave_block.splice(index, 1);
        };
        ManageLeavePolicyComponent.prototype.addAppliesTo = function () {
            this.applies_to.push(new AppliesToInput());
        };
        ManageLeavePolicyComponent.prototype.removeAppliesTo = function (index) {
            this.applies_to.splice(index, 1);
        };
        ManageLeavePolicyComponent.prototype.toggleLeave = function (index) {
            this.leave_block[index] = !this.leave_block[index];
        };
        ManageLeavePolicyComponent.prototype.filterUsers = function (term, item) {
            var regex = new RegExp(term, 'i');
            return item.email_id.match(regex) || item.name.match(regex);
        };
        ManageLeavePolicyComponent.prototype.changeLeaveType = function (leave) {
            if (leave.leave_type === leave_1.TYPE.COMP) {
                leave.allocation = leave_policy_1.ALLOCATION.ON_DEMAND;
                leave.count = 0;
                leave.loaned_count = 0;
                leave.compensatory_off = new leave_policy_service_1.CompensatoryOff();
            }
            else {
                leave.allocation = null;
                leave.compensatory_off = null;
            }
        };
        ManageLeavePolicyComponent.prototype.isCompOff = function (leave) {
            if (leave.leave_type === leave_1.TYPE.COMP) {
                return true;
            }
            return false;
        };
        ManageLeavePolicyComponent.prototype.showExpiryCount = function (leave) {
            var allowed_count_expiry = [compensatory_off_1.EXPIRY.AFTER_MONTH, compensatory_off_1.EXPIRY.AFTER_DAY];
            if (allowed_count_expiry.indexOf(parseInt(leave.compensatory_off.expiry.type, 10)) !== -1) {
                return true;
            }
            return false;
        };
        ManageLeavePolicyComponent.prototype.setPolicyStartDate = function (value) {
            this.edConfig['minDate'] = value;
            this.endDate.setConfig();
        };
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ManageLeavePolicyComponent.prototype, "errorModal", void 0);
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ManageLeavePolicyComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('startDate'),
            __metadata("design:type", ngx_bootstrap_1.BsDatepickerDirective)
        ], ManageLeavePolicyComponent.prototype, "startDate", void 0);
        __decorate([
            core_1.ViewChild('endDate'),
            __metadata("design:type", ngx_bootstrap_1.BsDatepickerDirective)
        ], ManageLeavePolicyComponent.prototype, "endDate", void 0);
        ManageLeavePolicyComponent = __decorate([
            core_1.Component({
                selector: 'app-manage-leaves-policy',
                template: __webpack_require__(/*! ./manage-leave-policy.component.html */ "./src/app/modules/leave/policy/manage-leave-policy/manage-leave-policy.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [leave_policy_service_1.LeavePolicyService, employee_service_1.EmployeeService, department_service_1.DepartmentService, common_1.DatePipe]
            }),
            __metadata("design:paramtypes", [leave_policy_service_1.LeavePolicyService,
                employee_service_1.EmployeeService,
                department_service_1.DepartmentService,
                common_1.DatePipe,
                access_service_1.Access,
                exatask_service_1.ExaTask])
        ], ManageLeavePolicyComponent);
        return ManageLeavePolicyComponent;
    }());
    exports.ManageLeavePolicyComponent = ManageLeavePolicyComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=17.6c44a3ac7df837bdb9bf.js.map