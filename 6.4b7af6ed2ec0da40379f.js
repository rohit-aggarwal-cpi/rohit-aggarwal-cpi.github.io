(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/app/modules/employee/employee.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/employee/employee.module.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./employee.routing */ "./src/app/modules/employee/employee.routing.ts"), __webpack_require__(/*! ./list-employee/list-employee.component */ "./src/app/modules/employee/list-employee/list-employee.component.ts"), __webpack_require__(/*! ./manage-employee/manage-employee.component */ "./src/app/modules/employee/manage-employee/manage-employee.component.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, employee_routing_1, list_employee_component_1, manage_employee_component_1, application_components_module_1, application_pipes_module_1, ngx_bootstrap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeeModule = (function () {
        function EmployeeModule() {
        }
        EmployeeModule = __decorate([
            core_1.NgModule({
                imports: [
                    employee_routing_1.EmployeeRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule,
                    ngx_bootstrap_1.BsDropdownModule
                ],
                declarations: [
                    list_employee_component_1.ListEmployeeComponent,
                    manage_employee_component_1.ManageEmployeeComponent
                ],
                providers: []
            })
        ], EmployeeModule);
        return EmployeeModule;
    }());
    exports.EmployeeModule = EmployeeModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/employee.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/employee/employee.routing.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./manage-employee/manage-employee.component */ "./src/app/modules/employee/manage-employee/manage-employee.component.ts"), __webpack_require__(/*! ./list-employee/list-employee.component */ "./src/app/modules/employee/list-employee/list-employee.component.ts"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, manage_employee_component_1, list_employee_component_1, authentication_service_1, authorization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Employee'
            },
            children: [
                {
                    path: '',
                    redirectTo: 'list'
                },
                {
                    path: 'list',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'List',
                        access: {
                            entity: 'employee:employee',
                            action: 'find:get'
                        }
                    },
                    component: list_employee_component_1.ListEmployeeComponent
                },
                {
                    path: 'add',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Add',
                        access: {
                            entity: 'employee:employee',
                            action: 'create:post'
                        }
                    },
                    component: manage_employee_component_1.ManageEmployeeComponent
                }
            ]
        }
    ];
    var EmployeeRoutingModule = (function () {
        function EmployeeRoutingModule() {
        }
        EmployeeRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], EmployeeRoutingModule);
        return EmployeeRoutingModule;
    }());
    exports.EmployeeRoutingModule = EmployeeRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/list-employee/list-employee.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/employee/list-employee/list-employee.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\" *ngIf=\"createAllowed\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary pull-right\" role='button' type=\"button\" routerLink=\"/employee/add\">+ Add Employee</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"employees.length === 0\">\n            <h3>No Employees in organization</h3>\n          </div>\n\n          <table class=\"table table-striped\" *ngIf=\"employees.length > 0\">\n            <thead>\n              <tr>\n                <th>Employee ID</th>\n                <th>Name</th>\n                <th>Email</th>\n                <th>Department</th>\n                <th>Designation</th>\n                <th>Supervisor</th>\n                <th>Status</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let employee of employees; let i = index\">\n                <td>{{employee.employee_id}}</td>\n                <td>{{employee.name.first}} {{employee.name.middle}} {{employee.name.last}}</td>\n                <td>{{employee.email_id}}</td>\n                <td>\n                  <span *ngIf=\"employee.department\">{{employee.department.name}}</span>\n                </td>\n                <td>\n                  <span *ngIf=\"employee.designation\">{{employee.designation}}</span>\n                </td>\n                <td>\n                  <span *ngIf=\"employee.supervisor\">{{employee.supervisor.name}}</span>\n                </td>\n                <td>\n                  <span class=\"badge\" [ngClass]=\"getStatusBadge(employee.user_status)\">{{'user.status.' + employee.user_status | constants}}</span>\n                </td>\n                <td>\n                  <div class=\"btn-group\" dropdown *ngIf=\"showActions()\">\n\n                    <button id=\"actions-btn-{{i}}\" class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" dropdownToggle [attr.aria-controls]=\"'actions-' + i\" [disabled]=\"inProgress[i]\">\n                      <i class=\"fa fa-refresh fa-spin\" *ngIf=\"inProgress[i]\"></i> Actions <i class=\"caret\"></i>\n                    </button>\n\n                    <ul id=\"actions-{{i}}\" class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu role=\"menu\" [attr.aria-labeledby]=\"'actions-btn-' + i\">\n\n                      <li role=\"menuitem\" *ngIf=\"markSupervisorAllowed && !employee.is_supervisor\">\n                        <button type=\"button\" class=\"btn btn-link btn-sm dropdown-item\" (click)=\"markAsSupervisor(i)\">\n                          Mark as Supervisor\n                        </button>\n                      </li>\n\n                      <li role=\"menuitem\" *ngIf=\"unmarkSupervisorAllowed && employee.is_supervisor\">\n                        <button type=\"button\" class=\"btn btn-link btn-sm dropdown-item\" (click)=\"unmarkAsSupervisor(i)\">\n                          Unmark as Supervisor\n                        </button>\n                      </li>\n\n                    </ul>\n\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <ul class=\"pagination justify-content-end\" *ngIf=\"count > limit\">\n            <li class=\"page-item\" *ngIf=\"total_pages > 1\" [class.disabled]=\"page == 1\">\n              <button class=\"page-link\" (click)=\"getEmployees(1)\">First</button>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"page == 1\">\n              <button class=\"page-link\" (click)=\"getEmployees(page - 1)\">Prev</button>\n            </li>\n            <li class=\"page-item active\">\n              <button class=\"page-link\">{{page}}</button>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"page === total_pages\">\n              <button class=\"page-link\" (click)=\"getEmployees(page + 1)\">Next</button>\n            </li>\n            <li class=\"page-item\" *ngIf=\"page < total_pages\" [class.disabled]=\"page === total_pages\">\n              <button class=\"page-link\" (click)=\"getEmployees(total_pages)\">Last</button>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <content>{{successMessage}}</content>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <content>{{errorMessage}}</content>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/employee/list-employee/list-employee.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/employee/list-employee/list-employee.component.ts ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, employee_service_1, authorization_service_1, success_modal_component_1, error_modal_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListEmployeeComponent = (function () {
        function ListEmployeeComponent(employeeService, authorization) {
            this.employeeService = employeeService;
            this.authorization = authorization;
            this.employees = [];
            this.limit = 25;
            this.createAllowed = false;
            this.inProgress = new Array();
        }
        ListEmployeeComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.getEmployees(1);
                            _a = this;
                            return [4, this.authorization.hasAccess({
                                    entity: 'employee:employee',
                                    action: 'create:post'
                                })];
                        case 1:
                            _a.createAllowed = _d.sent();
                            _b = this;
                            return [4, this.authorization.hasAccess({
                                    entity: 'employee:supervisor',
                                    action: 'mark:patch'
                                })];
                        case 2:
                            _b.markSupervisorAllowed = _d.sent();
                            _c = this;
                            return [4, this.authorization.hasAccess({
                                    entity: 'employee:supervisor',
                                    action: 'unmark:patch'
                                })];
                        case 3:
                            _c.unmarkSupervisorAllowed = _d.sent();
                            return [2];
                    }
                });
            });
        };
        ListEmployeeComponent.prototype.showActions = function () {
            return (this.markSupervisorAllowed || this.unmarkSupervisorAllowed);
        };
        ListEmployeeComponent.prototype.getEmployees = function (page) {
            var _this = this;
            this.page = page;
            this.employeeService.getEmployees(null, this.page, this.limit).then(function (response) {
                _this.count = response.count;
                _this.employees = response.users;
                _this.total_pages = _this.count / _this.limit;
                _this.total_pages += (_this.count % _this.limit) === 0 ? 0 : 1;
            });
        };
        ListEmployeeComponent.prototype.getStatusBadge = function (status) {
            switch (status) {
                case 1: return 'badge-success';
                default: return 'badge-default';
            }
        };
        ListEmployeeComponent.prototype.markAsSupervisor = function (index) {
            this.inProgress[index] = true;
            var self = this;
            var employee_id = this.employees[index]._id;
            this.employeeService.markAsSupervisor(employee_id)
                .then(function (response) {
                self.inProgress[index] = false;
                self.employees[index].is_supervisor = true;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress[index] = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        ListEmployeeComponent.prototype.unmarkAsSupervisor = function (index) {
            this.inProgress[index] = true;
            var self = this;
            var employee_id = this.employees[index]._id;
            this.employeeService.unmarkAsSupervisor(employee_id)
                .then(function (response) {
                self.inProgress[index] = false;
                self.employees[index].is_supervisor = false;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress[index] = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ListEmployeeComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ListEmployeeComponent.prototype, "errorModal", void 0);
        ListEmployeeComponent = __decorate([
            core_1.Component({
                selector: 'app-users',
                template: __webpack_require__(/*! ./list-employee.component.html */ "./src/app/modules/employee/list-employee/list-employee.component.html"),
                providers: [employee_service_1.EmployeeService, authorization_service_1.Authorization]
            }),
            __metadata("design:paramtypes", [employee_service_1.EmployeeService, authorization_service_1.Authorization])
        ], ListEmployeeComponent);
        return ListEmployeeComponent;
    }());
    exports.ListEmployeeComponent = ListEmployeeComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/manage-employee/manage-employee.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/employee/manage-employee/manage-employee.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"offset-2 col-8\">\n              <form #myForm=\"ngForm\" (submit)=\"postEmployee()\">\n\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <label for=\"name\">Name</label>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"input-group col-4 mb-3\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">First</span>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"First Name\" name=\"first_name\"\n                      [(ngModel)]=\"employee.name.first\">\n                  </div>\n                  <div class=\"input-group col-4 mb-3\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Middle</span>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" id=\"middle-name\" placeholder=\"Middle Name\" name=\"middle_name\"\n                      [(ngModel)]=\"employee.name.middle\">\n                  </div>\n                  <div class=\"input-group col-4 mb-3\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Last</span>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Last Name\" name=\"last_name\"\n                      [(ngModel)]=\"employee.name.last\">\n                  </div>\n                </div>\n\n                <!--div class=\"row\">\n                            <div class=\"col-sm-3\">\n                              <label for=\"gender\">Gender</label>\n                              <select name=\"gender\" class=\"form-control\" [(ngModel)]=\"employee.gender\">\n                                <option value=\"Male\">Male</option>\n                                <option value=\"Female\">Female</option>\n                                <option value=\"Other\">Other</option>\n                              </select>\n                            </div>\n                          </div>\n                          <br-->\n\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <label>Contact Info</label>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"input-group col-6 mb-3\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">E-Mail ID</span>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"someone@exatask.com\"\n                      [(ngModel)]=\"employee.email_id\">\n                    <span class=\"input-group-append\">\n                      <span class=\"input-group-text\"><i class=\"fa fa-envelope-o\"></i></span>\n                    </span>\n                  </div>\n                  <!--div class=\"row col-sm-3\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\">Phone</span>\n                                <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"+91-XXXXXXXXX\" [(ngModel)]=\"employee.phone\">\n                                <span class=\"input-group-addon\">\n                                  <i class=\"fa fa-phone\"></i>\n                                </span>\n                              </div>\n                            </div-->\n                </div>\n\n                <!--label>Date Of Birth</label-->\n\n                <!--div class=\"row col-sm-6 date-picker\"-->\n\n                <!--div class=\"input-group\"-->\n                <!--span class=\"input-group-addon\">DOB</span-->\n                <!--date-picker showClearButton=\"false\" class=\"\" formControlName=\"date\"></date-picker-->\n                <!--input type=\"date\" class=\"form-control\" name=\"dob\" [(ngModel)]=\"employee.dob\"-->\n                <!--/div-->\n                <!--/div-->\n\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <label>Work Info</label>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"input-group col-6 mb-3\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Employee ID</span>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" id=\"employee_id\" name=\"employee_id\" [(ngModel)]=\"employee.employee_id\">\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"input-group col-4 mb-3\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Department</span>\n                    </span>\n                    <select class=\"form-control\" name=\"department\" [(ngModel)]=\"employee.department_id\" (change)=\"selectDepartment()\">\n                      <option *ngFor=\"let dept of departments\" [ngValue]=\"dept._id\">{{dept.name}}</option>\n                    </select>\n                  </div>\n                  <div class=\"input-group col-4 mb-3\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Designation</span>\n                    </span>\n                    <select class=\"form-control\" name=\"designation\" [(ngModel)]=\"employee.designation\" [attr.disabled]=\"employee.department_id == undefined ? 'disabled' : null\">\n                      <option *ngFor=\"let desig of designations\" [ngValue]=\"desig\">{{desig}}</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"input-group col-6 mb-3\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">Supervisor</span>\n                    </span>\n                    <select class=\"form-control\" name=\"supervisor\" [(ngModel)]=\"employee.supervisor_id\" [attr.disabled]=\"employee.department_id == undefined ? 'disabled' : null\">\n                      <option *ngFor=\"let super of supervisors\" [ngValue]=\"super._id\">\n                        {{super.name}} <{{super.email_id}}>\n                      </option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"form-actions row\">\n                  <div class=\"col-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n                    <button type=\"reset\" class=\"btn btn-danger\" (click)=\"myForm.reset()\">Reset</button>\n                  </div>\n                </div>\n\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.row-->\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <content>\n    Added new user successfully.\n  </content>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <content>\n    There was an error adding the user.\n    <br>\n    <p>Details: {{error}}</p>\n  </content>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/employee/manage-employee/manage-employee.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/employee/manage-employee/manage-employee.component.ts ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! modules/organization/department/department.service */ "./src/app/modules/organization/department/department.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, success_modal_component_1, error_modal_component_1, employee_service_1, department_service_1, profile_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ManageEmployeeComponent = (function () {
        function ManageEmployeeComponent(employeeService, departmentService) {
            var _this = this;
            this.employeeService = employeeService;
            this.departmentService = departmentService;
            this.employee = new employee_service_1.Employee();
            this.error = '';
            this.departments = new Array();
            this.designations = new Array();
            this.supervisors = new Array();
            this.allDepartmentSupervisors = new Map();
            this.departmentService.getDepartments()
                .then(function (depts) {
                _this.departments = depts;
            }, function (err) { return _this.error = 'Error getting department info'; });
        }
        ManageEmployeeComponent.prototype.postEmployee = function () {
            var _this = this;
            this.error = '';
            this.employeeService.postEmployee(this.employee)
                .then(function (response) {
                _this.employee = new employee_service_1.Employee();
                _this.successModal.show('/employee');
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageEmployeeComponent.prototype.selectDepartment = function () {
            var department_id = this.employee.department_id;
            var query = new Map();
            query.set('department_id', department_id + ',null');
            query.set('is_supervisor', true);
            var self = this;
            for (var _i = 0, _a = this.departments; _i < _a.length; _i++) {
                var department = _a[_i];
                if (department._id === department_id) {
                    this.designations = department.designations;
                    break;
                }
            }
            if (this.allDepartmentSupervisors.has(department_id)) {
                this.supervisors = this.allDepartmentSupervisors.get(department_id);
            }
            else {
                this.employeeService.getEmployees(query).then(function (response) {
                    for (var _i = 0, _a = response.users; _i < _a.length; _i++) {
                        var user = _a[_i];
                        user.name = profile_service_1.Name.getFullName(user.name);
                    }
                    self.supervisors = response.users;
                    self.allDepartmentSupervisors[department_id] = response.users;
                });
            }
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ManageEmployeeComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ManageEmployeeComponent.prototype, "errorModal", void 0);
        ManageEmployeeComponent = __decorate([
            core_1.Component({
                template: __webpack_require__(/*! ./manage-employee.component.html */ "./src/app/modules/employee/manage-employee/manage-employee.component.html"),
                providers: [employee_service_1.EmployeeService, department_service_1.DepartmentService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [employee_service_1.EmployeeService, department_service_1.DepartmentService])
        ], ManageEmployeeComponent);
        return ManageEmployeeComponent;
    }());
    exports.ManageEmployeeComponent = ManageEmployeeComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=6.4b7af6ed2ec0da40379f.js.map