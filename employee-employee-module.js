(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "./src/app/modules/employee/employee-detail/employee-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/employee/employee-detail/employee-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <div class=\"text-center m-5\" *ngIf=\"loading\">\n        <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading Employee Details</h3>\n      </div>\n\n      <tabset *ngIf=\"!loading\">\n\n        <tab heading=\"Employee Information\">\n          <table class=\"table table-striped\">\n\n            <tr>\n              <th>Name</th>\n              <td colspan=\"3\">{{employee.full_name}}</td>\n            </tr>\n\n            <tr>\n              <th>E-Mail ID</th>\n              <td>{{employee.email_id}}</td>\n              <th>Contact Number</th>\n              <td>\n                <span *ngIf=\"employee.contact_number\">\n                  {{employee.isd_code}}-{{employee.contact_number}}\n                </span>\n                <span *ngIf=\"!employee.contact_number\">-</span>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Employee ID</th>\n              <td>{{employee.employee_id}}</td>\n              <th>Supervisor</th>\n              <td>\n                <span *ngIf=\"employee.supervisor && !employee.is_chief_executive\">{{employee.supervisor.name}}</span>\n                <span *ngIf=\"employee.is_chief_executive\">N/A</span>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Department</th>\n              <td>\n                <span *ngIf=\"employee.department\">\n                  {{employee.department.name}}\n                </span>\n              </td>\n              <th>Designation</th>\n              <td>{{employee.designation}}</td>\n            </tr>\n\n            <tr>\n              <th>Date of Joining</th>\n              <td>{{employee.date_of_joining}}</td>\n              <th>Date of Birth</th>\n              <td>{{employee.date_of_birth}}</td>\n            </tr>\n\n          </table>\n        </tab>\n\n        <tab heading=\"Personal Information\">\n          <table class=\"table table-striped\">\n\n            <tr>\n              <th width='25%'>Gender</th>\n              <td width='25%'>{{employee.gender | constants: 'user.gender'}}</td>\n              <th width='25%'>Marital Status</th>\n              <th width='25%'>{{employee.marital_status | constants: 'user.marital_status'}}</th>\n            </tr>\n\n            <tr>\n              <th>Permanent Address</th>\n              <td>\n                <address *ngIf=\"employee.permanent_address\">\n                  {{employee.permanent_address.address}}<br />\n                  {{employee.permanent_address.locality}}<br />\n                  {{employee.permanent_address.city}}, {{employee.permanent_address.state}} -\n                  {{employee.permanent_address.postcode}}<br />\n                  Landmark: {{employee.permanent_address.landmark}}\n                  {{employee.permanent_address.country}} ({{employee.permanent_address.country_code}})\n                </address>\n              </td>\n              <th>Correspondence Address</th>\n              <td>\n                <address *ngIf=\"employee.correspondence_address\">\n                  {{employee.correspondence_address.address}}<br />\n                  {{employee.correspondence_address.locality}}<br />\n                  {{employee.correspondence_address.city}}, {{employee.correspondence_address.state}} -\n                  {{employee.correspondence_address.postcode}}<br />\n                  Landmark: {{employee.correspondence_address.landmark}}\n                  {{employee.correspondence_address.country}} ({{employee.correspondence_address.country_code}})\n                </address>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Alternate E-Mail IDs</th>\n              <td>\n                <span *ngFor=\"let email of employee.alternate_email_ids\">\n                  {{email}}<br />\n                </span>\n              </td>\n              <th>Alternate Contact Numbers</th>\n              <td>\n                <span *ngFor=\"let contact_number of employee.alternate_contact_numbers\">\n                  {{contact_number.isd_code}}-{{contact_number.contact_number}}<br />\n                </span>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Social Security</th>\n              <td colspan=\"3\">\n                <table class=\"table table-striped\">\n\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Type</th>\n                      <th>Number</th>\n                    </tr>\n                  </thead>\n\n                  <tbody>\n                    <tr *ngFor=\"let social_security of employee.social_security; let i = index\">\n                      <td>{{i + 1}}.</td>\n                      <td>{{social_security.type | constants: 'user.social_security'}}</td>\n                      <td>{{social_security.number}}</td>\n                    </tr>\n                  </tbody>\n\n                </table>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Emergency Contacts</th>\n              <td colspan=\"3\">\n                <table class=\"table table-striped\">\n\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Name</th>\n                      <th>Relation</th>\n                      <th>Contact Number</th>\n                    </tr>\n                  </thead>\n\n                  <tbody>\n                    <tr *ngFor=\"let contact of employee.emergency_contacts; let i = index\">\n                      <td>{{i + 1}}.</td>\n                      <td>{{contact.name}}</td>\n                      <td>{{contact.relation}}</td>\n                      <td>{{contact.isd_code}}-{{contact.contact_number}}</td>\n                    </tr>\n                  </tbody>\n\n                </table>\n              </td>\n            </tr>\n\n          </table>\n        </tab>\n\n        <tab heading=\"Leave Information\" *ngIf=\"employee.leaves && employee.leaves.length > 0\">\n          <table class=\"table table-striped\">\n\n            <tr>\n              <th>Leave</th>\n              <th>Count</th>\n            </tr>\n\n            <tr *ngFor=\"let leave of employee.leaves\">\n              <td>{{leave.leave_type | constants: 'leave.type'}}</td>\n              <td>{{leave.leaves}}</td>\n            </tr>\n\n          </table>\n        </tab>\n\n      </tabset>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/employee/employee-detail/employee-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/employee/employee-detail/employee-detail.component.ts ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, employee_service_1, router_1, profile_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeeDetailComponent = (function () {
        function EmployeeDetailComponent(route, employeeService) {
            this.route = route;
            this.employeeService = employeeService;
            this.employee = new employee_service_1.EmployeeDetails();
            this.loading = false;
        }
        EmployeeDetailComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.__getEmployeeDetails(this.route.snapshot.params.id);
                    return [2];
                });
            });
        };
        EmployeeDetailComponent.prototype.__getEmployeeDetails = function (id) {
            var _this = this;
            this.loading = true;
            this.employeeService.getEmployeeDetails(id)
                .then(function (response) {
                _this.loading = false;
                _this.employee = response;
                _this.employee.full_name = profile_service_1.Name.getFullName(_this.employee.name);
            });
        };
        EmployeeDetailComponent = __decorate([
            core_1.Component({
                selector: 'app-employee-detail',
                template: __webpack_require__(/*! ./employee-detail.component.html */ "./src/app/modules/employee/employee-detail/employee-detail.component.html"),
                providers: [employee_service_1.EmployeeService]
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute,
                employee_service_1.EmployeeService])
        ], EmployeeDetailComponent);
        return EmployeeDetailComponent;
    }());
    exports.EmployeeDetailComponent = EmployeeDetailComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! ./employee.routing */ "./src/app/modules/employee/employee.routing.ts"), __webpack_require__(/*! ./list-employee/list-employee.component */ "./src/app/modules/employee/list-employee/list-employee.component.ts"), __webpack_require__(/*! ./manage-employee/manage-employee.component */ "./src/app/modules/employee/manage-employee/manage-employee.component.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! ./employee-detail/employee-detail.component */ "./src/app/modules/employee/employee-detail/employee-detail.component.ts"), __webpack_require__(/*! ./upload-employee/upload-employee.component */ "./src/app/modules/employee/upload-employee/upload-employee.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, tabs_1, ngx_bootstrap_1, employee_routing_1, list_employee_component_1, manage_employee_component_1, application_components_module_1, application_pipes_module_1, employee_detail_component_1, upload_employee_component_1) {
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
                    ngx_bootstrap_1.TooltipModule,
                    common_1.CommonModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule,
                    ngx_bootstrap_1.BsDropdownModule,
                    tabs_1.TabsModule
                ],
                declarations: [
                    list_employee_component_1.ListEmployeeComponent,
                    manage_employee_component_1.ManageEmployeeComponent,
                    employee_detail_component_1.EmployeeDetailComponent,
                    upload_employee_component_1.UploadEmployeeComponent
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./manage-employee/manage-employee.component */ "./src/app/modules/employee/manage-employee/manage-employee.component.ts"), __webpack_require__(/*! ./upload-employee/upload-employee.component */ "./src/app/modules/employee/upload-employee/upload-employee.component.ts"), __webpack_require__(/*! ./list-employee/list-employee.component */ "./src/app/modules/employee/list-employee/list-employee.component.ts"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! core/services/objectid.service */ "./src/app/core/services/objectid.service.ts"), __webpack_require__(/*! ./employee-detail/employee-detail.component */ "./src/app/modules/employee/employee-detail/employee-detail.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, manage_employee_component_1, upload_employee_component_1, list_employee_component_1, authentication_service_1, authorization_service_1, objectid_service_1, employee_detail_component_1) {
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
                    path: 'feedback',
                    loadChildren: './feedback/feedback.module#FeedbackModule'
                },
                {
                    path: 'list',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'List',
                        access: {
                            module: 'employee',
                            entity: 'employee',
                            action: 'find'
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
                            module: 'employee',
                            entity: 'employee',
                            action: 'create'
                        }
                    },
                    component: manage_employee_component_1.ManageEmployeeComponent
                },
                {
                    path: 'upload',
                    canActivate: [authentication_service_1.AuthenticationGuard, authentication_service_1.AuthenticationGuard],
                    data: {
                        title: 'Upload',
                        access: {
                            module: 'employee',
                            entity: 'employee',
                            action: 'create'
                        }
                    },
                    component: upload_employee_component_1.UploadEmployeeComponent
                },
                {
                    path: 'details/:id',
                    canActivate: [authentication_service_1.AuthenticationGuard, authentication_service_1.AuthenticationGuard, objectid_service_1.ObjectidGuard],
                    data: {
                        title: 'Details',
                        access: {
                            module: 'employee',
                            entity: 'employee',
                            action: 'find'
                        }
                    },
                    component: employee_detail_component_1.EmployeeDetailComponent
                },
                {
                    path: ':id',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard, objectid_service_1.ObjectidGuard],
                    data: {
                        title: 'Update',
                        access: {
                            module: 'employee',
                            entity: 'employee',
                            action: 'update'
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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\" *ngIf=\"createAllowed\">\n            <div class=\"col-12\">\n\n              <div class=\"btn-group pull-right\" dropdown>\n                <button class=\"btn btn-primary\" role='button' type=\"button\" routerLink=\"/employee/add\">+ Add Employee</button>\n                <button id=\"add-employee-btn\" type=\"button\" class=\"btn btn-primary dropdown-toggle dropdown-toggle-split\" dropdownToggle aria-controls=\"add-employee\">\n                  <span class=\"caret\"></span>\n                  <span class=\"sr-only\">Add Employee(s)</span>\n                </button>\n                <ul id=\"add-employee\" class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu role=\"menu\" aria-labelledby=\"add-employee-btn\">\n                  <li role=\"menuitem\">\n                    <a class=\"dropdown-item\" routerLink=\"/employee/upload\">Upload Employee(s)</a>\n                  </li>\n                </ul>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading Employees</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && employees.length === 0\">\n            <h3>No Employees in organization</h3>\n          </div>\n\n          <table class=\"table table-striped\" *ngIf=\"!loading && employees.length > 0\">\n            <thead>\n              <tr>\n                <th>Employee ID</th>\n                <th>Name</th>\n                <th>E-Mail ID</th>\n                <th>Department</th>\n                <th>Designation</th>\n                <th>Supervisor</th>\n                <th>Status</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let employee of employees; let i = index\">\n                <td>{{employee.employee_id}}</td>\n                <td>{{employee.name.first}} {{employee.name.middle}} {{employee.name.last}}</td>\n                <td>{{employee.email_id}}</td>\n                <td>\n                  <span *ngIf=\"employee.department\">{{employee.department.name}}</span>\n                </td>\n                <td>\n                  <span *ngIf=\"employee.designation\">{{employee.designation}}</span>\n                </td>\n                <td>\n                  <span *ngIf=\"employee.supervisor\">{{employee.supervisor.name}}</span>\n                </td>\n                <td>\n                  <span class=\"badge\" [ngClass]=\"getStatusBadge(employee.user_status)\">{{'user.status.' + employee.user_status | constants}}</span>\n                </td>\n                <td>\n                  <div class=\"btn-group\" dropdown *ngIf=\"showActions()\">\n\n                    <button id=\"actions-btn-{{i}}\" class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" dropdownToggle [attr.aria-controls]=\"'actions-' + i\" [disabled]=\"inProgress[i]\">\n                      <i class=\"fa fa-refresh fa-spin\" *ngIf=\"inProgress[i]\"></i> Actions <i class=\"caret\"></i>\n                    </button>\n\n                    <ul id=\"actions-{{i}}\" class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu role=\"menu\" [attr.aria-labeledby]=\"'actions-btn-' + i\">\n\n                      <li role=\"menuitem\" *ngIf=\"updateAllowed\">\n                        <a class=\"btn btn-link btn-sm dropdown-item\" [routerLink]=\"['/employee', employee._id]\">Update</a>\n                      </li>\n\n                      <li role=\"menuitem\" *ngIf=\"markSupervisorAllowed && !employee.is_supervisor\">\n                        <button type=\"button\" class=\"btn btn-link btn-sm dropdown-item\" (click)=\"markAsSupervisor(i)\">\n                          Mark as Supervisor\n                        </button>\n                      </li>\n\n                      <li role=\"menuitem\" *ngIf=\"unmarkSupervisorAllowed && employee.is_supervisor\">\n                        <button type=\"button\" class=\"btn btn-link btn-sm dropdown-item\" (click)=\"unmarkAsSupervisor(i)\">\n                          Unmark as Supervisor\n                        </button>\n                      </li>\n\n                      <li role=\"menuitem\" *ngIf=\"markChiefExecutiveAllowed && !employee.is_chief_executive\">\n                        <button type=\"button\" class=\"btn btn-link btn-sm dropdown-item\" (click)=\"markAsChiefExecutive(i)\">\n                          Mark as Chief-Executive\n                        </button>\n                      </li>\n\n                      <li role=\"menuitem\" *ngIf=\"unmarkChiefExecutiveAllowed && employee.is_chief_executive\">\n                        <button type=\"button\" class=\"btn btn-link btn-sm dropdown-item\" (click)=\"unmarkAsChiefExecutive(i)\">\n                          Unmark as Chief-Executive\n                        </button>\n                      </li>\n\n                      <li role=\"menuitem\" *ngIf=\"markSuperAdminAllowed && !employee.is_super_admin\">\n                        <button type=\"button\" class=\"btn btn-link btn-sm dropdown-item\" (click)=\"markAsSuperAdmin(i)\">\n                          Mark as Super Admin\n                        </button>\n                      </li>\n\n                      <li role=\"menuitem\" *ngIf=\"unmarkSuperAdminAllowed && employee.is_super_admin\">\n                        <button type=\"button\" class=\"btn btn-link btn-sm dropdown-item\" (click)=\"unmarkAsSuperAdmin(i)\">\n                          Unmark as Super Admin\n                        </button>\n                      </li>\n\n                    </ul>\n\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <ul class=\"pagination justify-content-end\" *ngIf=\"count > limit\">\n            <li class=\"page-item\" *ngIf=\"total_pages > 1\" [class.disabled]=\"page == 1\">\n              <button class=\"page-link\" (click)=\"getEmployees(1)\">First</button>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"page == 1\">\n              <button class=\"page-link\" (click)=\"getEmployees(page - 1)\">Prev</button>\n            </li>\n            <li class=\"page-item active\">\n              <button class=\"page-link\">{{page}}</button>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"page === total_pages\">\n              <button class=\"page-link\" (click)=\"getEmployees(page + 1)\">Next</button>\n            </li>\n            <li class=\"page-item\" *ngIf=\"page < total_pages\" [class.disabled]=\"page === total_pages\">\n              <button class=\"page-link\" (click)=\"getEmployees(total_pages)\">Last</button>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>{{successMessage}}</div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>{{errorMessage}}</div>\n</app-error-modal>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, employee_service_1, success_modal_component_1, error_modal_component_1, access_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListEmployeeComponent = (function () {
        function ListEmployeeComponent(employeeService, access) {
            this.employeeService = employeeService;
            this.access = access;
            this.loading = false;
            this.employees = [];
            this.limit = 25;
            this.createAllowed = false;
            this.inProgress = new Array();
        }
        ListEmployeeComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return __generator(this, function (_j) {
                    switch (_j.label) {
                        case 0:
                            this.getEmployees(1);
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'employee',
                                    action: 'create'
                                })];
                        case 1:
                            _a.createAllowed = _j.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'employee',
                                    action: 'update'
                                })];
                        case 2:
                            _b.updateAllowed = _j.sent();
                            _c = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'supervisor',
                                    action: 'mark'
                                })];
                        case 3:
                            _c.markSupervisorAllowed = _j.sent();
                            _d = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'supervisor',
                                    action: 'unmark'
                                })];
                        case 4:
                            _d.unmarkSupervisorAllowed = _j.sent();
                            _e = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'chief-executive',
                                    action: 'mark'
                                })];
                        case 5:
                            _e.markChiefExecutiveAllowed = _j.sent();
                            _f = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'chief-executive',
                                    action: 'unmark'
                                })];
                        case 6:
                            _f.unmarkChiefExecutiveAllowed = _j.sent();
                            _g = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'super-admin',
                                    action: 'mark'
                                })];
                        case 7:
                            _g.markSuperAdminAllowed = _j.sent();
                            _h = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'super-admin',
                                    action: 'unmark'
                                })];
                        case 8:
                            _h.unmarkSuperAdminAllowed = _j.sent();
                            return [2];
                    }
                });
            });
        };
        ListEmployeeComponent.prototype.showActions = function () {
            return (this.updateAllowed
                || this.markSupervisorAllowed
                || this.unmarkSupervisorAllowed
                || this.markChiefExecutiveAllowed
                || this.unmarkChiefExecutiveAllowed
                || this.markSuperAdminAllowed
                || this.unmarkSuperAdminAllowed);
        };
        ListEmployeeComponent.prototype.getEmployees = function (page) {
            var self = this;
            this.page = page;
            this.loading = true;
            this.employeeService.getEmployees(null, this.page, this.limit).then(function (response) {
                self.loading = false;
                self.count = response.count;
                self.employees = response.users;
                self.total_pages = self.count / self.limit;
                self.total_pages += (self.count % self.limit) === 0 ? 0 : 1;
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
                self.employees[index].is_chief_executive = false;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress[index] = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        ListEmployeeComponent.prototype.markAsChiefExecutive = function (index) {
            this.inProgress[index] = true;
            var self = this;
            var employee_id = this.employees[index]._id;
            this.employeeService.markAsChiefExecutive(employee_id)
                .then(function (response) {
                self.inProgress[index] = false;
                self.employees[index].is_chief_executive = true;
                self.employees[index].is_supervisor = true;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress[index] = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        ListEmployeeComponent.prototype.unmarkAsChiefExecutive = function (index) {
            this.inProgress[index] = true;
            var self = this;
            var employee_id = this.employees[index]._id;
            this.employeeService.unmarkAsChiefExecutive(employee_id)
                .then(function (response) {
                self.inProgress[index] = false;
                self.employees[index].is_chief_executive = false;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress[index] = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        ListEmployeeComponent.prototype.markAsSuperAdmin = function (index) {
            this.inProgress[index] = true;
            var self = this;
            var employee_id = this.employees[index]._id;
            this.employeeService.markAsSuperAdmin(employee_id)
                .then(function (response) {
                self.inProgress[index] = false;
                self.employees[index].is_super_admin = true;
                self.employees[index].is_chief_executive = true;
                self.employees[index].is_supervisor = true;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress[index] = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        ListEmployeeComponent.prototype.unmarkAsSuperAdmin = function (index) {
            this.inProgress[index] = true;
            var self = this;
            var employee_id = this.employees[index]._id;
            this.employeeService.unmarkAsSuperAdmin(employee_id)
                .then(function (response) {
                self.inProgress[index] = false;
                self.employees[index].is_super_admin = false;
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
                providers: [employee_service_1.EmployeeService]
            }),
            __metadata("design:paramtypes", [employee_service_1.EmployeeService, access_service_1.Access])
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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"offset-2 col-8\">\n              <form #employeeForm=\"ngForm\">\n\n                <div class=\"form-group row\">\n                  <label for=\"first-name\" class=\"col-3 col-form-label\">\n                    Name <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"First Name\" name=\"first-name\" [(ngModel)]=\"employee.name.first\">\n                  </div>\n                  <div class=\"col-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"middle-name\" placeholder=\"Middle Name\" name=\"middle-name\" [(ngModel)]=\"employee.name.middle\">\n                  </div>\n                  <div class=\"col-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Last Name\" name=\"last-name\" [(ngModel)]=\"employee.name.last\">\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <label for=\"email-id\" class=\"col-3 col-form-label\">\n                    E-Mail ID <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"email-id\" name=\"email-id\" placeholder=\"someone@exatask.com\" [(ngModel)]=\"employee.email_id\" [attr.disabled]=\"employee_id ? 'disabled' : null\">\n                  </div>\n\n                  <label for=\"employee-id\" class=\"col-3 col-form-label\">\n                    Employee ID <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"employee-id\" name=\"employee-id\" [(ngModel)]=\"employee.employee_id\" [attr.disabled]=\"(original_employee.employee_id && employee_id) ? 'disabled' : null\">\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <label for=\"department\" class=\"col-3 col-form-label\">\n                    Department <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-3\">\n                    <select class=\"form-control\" name=\"department\" id=\"department\" [(ngModel)]=\"employee.department\" (change)=\"selectDepartment()\">\n                      <option [ngValue]=\"null\">(Select department)</option>\n                      <option *ngFor=\"let dept of departments\" [ngValue]=\"dept._id\">{{dept.name}}</option>\n                    </select>\n                  </div>\n\n                  <label for=\"department\" class=\"col-3 col-form-label\">\n                    Designation <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-3\">\n                    <select class=\"form-control\" name=\"designation\" id=\"designation\" [(ngModel)]=\"employee.designation\" [attr.disabled]=\"employee.department == undefined ? 'disabled' : null\">\n                      <option [ngValue]=\"null\">(Select designation)</option>\n                      <option *ngFor=\"let desig of designations\" [ngValue]=\"desig\">{{desig}}</option>\n                    </select>\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <label for=\"supervisor\" class=\"col-3 col-form-label\">Supervisor</label>\n                  <div class=\"col-3\">\n                    <select class=\"form-control\" name=\"supervisor\" id=\"supervisor\" [(ngModel)]=\"employee.supervisor\" [attr.disabled]=\"(employee.department == undefined || employee.is_chief_executive) ? 'disabled' : null\">\n                      <option [ngValue]=\"null\">(Select supervisor)</option>\n                      <option *ngFor=\"let super of supervisors\" [ngValue]=\"super._id\">\n                        {{super.name}} <{{super.email_id}}>\n                      </option>\n                    </select>\n                  </div>\n\n                  <label class=\"col-3 col-form-label\">Chief Executive</label>\n                  <div class=\"col-3\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" name=\"chief-executive\" class=\"form-check-input\" id=\"chief-executive\" value=\"true\" [(ngModel)]=\"employee.is_chief_executive\" [attr.disabled]=\"employee_id ? 'disabled' : null\">\n                      <label class=\"form-check-label\" for=\"chief-executive\">Is employee a chief executive?</label>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"form-actions row\">\n                  <div class=\"col-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"saveEmployee()\">Submit</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"resetEmployee()\">Reset</button>\n                  </div>\n                </div>\n\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.row-->\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    <span *ngIf=\"employee_id\">\n      Updated employee details successfully\n    </span>\n    <span *ngIf=\"!employee_id\">\n      Added new employee successfully.\n    </span>\n  </div>\n  <div *ngIf=\"!employee_id\" buttons>\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"addAnother()\">Add Another</button>\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    There was an error\n    <span *ngIf=\"employee_id\">updating</span>\n    <span *ngIf=\"!employee_id\">adding</span> the employee.\n    <br>\n    <p>Details: {{error}}</p>\n  </div>\n</app-error-modal>\n"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! modules/organization/department/department.service */ "./src/app/modules/organization/department/department.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! shared/helpers/utility */ "./src/app/shared/helpers/utility.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, lodash_1, success_modal_component_1, error_modal_component_1, employee_service_1, department_service_1, profile_service_1, utility_1, forms_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ManageEmployeeComponent = (function () {
        function ManageEmployeeComponent(route, employeeService, departmentService) {
            var _this = this;
            this.route = route;
            this.employeeService = employeeService;
            this.departmentService = departmentService;
            this.employee = new employee_service_1.Employee();
            this.original_employee = new employee_service_1.Employee();
            this.employee_id = null;
            this.error = '';
            this.departments = new Array();
            this.designations = new Array();
            this.supervisors = new Array();
            this.super_admins = new Array();
            this.allDepartmentSupervisors = new Map();
            this.departmentService.getDepartments()
                .then(function (depts) {
                _this.departments = depts;
            }, function (err) { return _this.error = 'Error getting department info'; });
            if (this.route.snapshot.params.id) {
                this.employee_id = this.route.snapshot.params.id;
            }
        }
        ManageEmployeeComponent.prototype.ngOnInit = function () {
            if (this.employee_id) {
                this.__initializeEmployee(this.employee_id);
            }
            else {
                this.employee_id = null;
            }
        };
        ManageEmployeeComponent.prototype.__initializeEmployee = function (id) {
            var _this = this;
            this.employeeService.getEmployeeDetails(id)
                .then(function (response) {
                if (response.department) {
                    response.department = response.department.department_id;
                }
                if (response.supervisor) {
                    response.supervisor = response.supervisor.supervisor_id;
                }
                _this.employee = response;
                _this.original_employee = lodash_1.cloneDeep(_this.employee);
                if (_this.employee.department) {
                    _this.selectDepartment();
                }
            });
        };
        ManageEmployeeComponent.prototype.__sanitize = function (data) {
            if (!data.supervisor) {
                data.supervisor = null;
            }
            if (!data.is_chief_executive) {
                data.is_chief_executive = false;
            }
            if (data.name && lodash_1.isEmpty(data.name.middle)) {
                data.name.middle = null;
            }
            return data;
        };
        ManageEmployeeComponent.prototype.__sanitizeUpdate = function (data) {
            if (data.name && lodash_1.isEmpty(data.name.middle)) {
                data.name.middle = null;
            }
            return data;
        };
        ManageEmployeeComponent.prototype.saveEmployee = function () {
            var _this = this;
            this.error = '';
            if (this.employee_id) {
                var employee_data = utility_1.default.compare(this.original_employee, this.employee);
                if (employee_data !== undefined) {
                    employee_data = this.__sanitizeUpdate(employee_data);
                    this.employeeService.putEmployee(this.employee_id, employee_data)
                        .then(function (response) {
                        _this.successModal.show('/employee');
                    }).catch(function (err) {
                        _this.error = err.error.message.text;
                        _this.errorModal.show();
                    });
                }
            }
            else {
                var employee_data = lodash_1.cloneDeep(this.employee);
                employee_data = this.__sanitize(employee_data);
                this.employeeService.postEmployee(employee_data)
                    .then(function (response) {
                    _this.successModal.show('/employee');
                }).catch(function (err) {
                    _this.error = err.error.message.text;
                    _this.errorModal.show();
                });
            }
        };
        ManageEmployeeComponent.prototype.resetEmployee = function () {
            if (this.employee_id) {
                this.employee = lodash_1.cloneDeep(this.original_employee);
            }
            else {
                this.employeeForm.reset();
            }
        };
        ManageEmployeeComponent.prototype.addAnother = function () {
            this.employee = new employee_service_1.Employee();
            this.successModal.hide(true);
        };
        ManageEmployeeComponent.prototype.selectDepartment = function () {
            var department_id = this.employee.department;
            var projection = ['_id', 'name', 'email_id'];
            var query1 = new Map();
            query1.set('department_id', department_id);
            query1.set('is_supervisor', true);
            var query2 = new Map();
            query2.set('is_super_admin', true);
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
                var dataPromises = [], dataPromise = void 0;
                dataPromise = this.employeeService.getEmployees(query1, 0, 0, projection).then(function (response) {
                    for (var _i = 0, _a = response.users; _i < _a.length; _i++) {
                        var user = _a[_i];
                        user.name = profile_service_1.Name.getFullName(user.name);
                    }
                    self.supervisors = response.users;
                });
                dataPromises.push(dataPromise);
                dataPromise = this.employeeService.getEmployees(query2, 0, 0, projection).then(function (response) {
                    for (var _i = 0, _a = response.users; _i < _a.length; _i++) {
                        var user = _a[_i];
                        user.name = profile_service_1.Name.getFullName(user.name);
                    }
                    self.super_admins = response.users;
                });
                Promise.all(dataPromises).then(function (response) {
                    var user_ids = [];
                    self.supervisors.forEach(function (user) {
                        user_ids.push(user._id.toString());
                    });
                    self.super_admins.forEach(function (user) {
                        if (user_ids.indexOf(user._id.toString()) === -1) {
                            self.supervisors.push(user);
                        }
                    });
                    self.allDepartmentSupervisors[department_id] = self.supervisors;
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
        __decorate([
            core_1.ViewChild('employeeForm'),
            __metadata("design:type", forms_1.NgForm)
        ], ManageEmployeeComponent.prototype, "employeeForm", void 0);
        ManageEmployeeComponent = __decorate([
            core_1.Component({
                template: __webpack_require__(/*! ./manage-employee.component.html */ "./src/app/modules/employee/manage-employee/manage-employee.component.html"),
                providers: [employee_service_1.EmployeeService, department_service_1.DepartmentService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute,
                employee_service_1.EmployeeService,
                department_service_1.DepartmentService])
        ], ManageEmployeeComponent);
        return ManageEmployeeComponent;
    }());
    exports.ManageEmployeeComponent = ManageEmployeeComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/upload-employee/upload-employee.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/employee/upload-employee/upload-employee.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\" *ngIf=\"!uploaded\">\n            <div class=\"col-6 offset-3\">\n\n              <p class=\"lead\">Instructions:</p>\n              <ul class=\"list-unstyled\">\n\n                <li>\n                  <span class=\"font-weight-bold\">Step 1</span> Download Employee details template sheet <a target=\"_blank\" [href]=\"downloadLink\">here</a>.\n                </li>\n\n                <li>\n                  <span class=\"font-weight-bold\">Step 2</span> Fill details of all employees being added in template sheet.\n\n                  <ul>\n                    <li>Don't change headers. Data will not get uploaded correctly if headers are tampered with.</li>\n                    <li>In Department, use the correct name as available from list <a target=\"_blank\" routerLink=\"/organization/department/list\">here</a>.</li>\n                    <li>In Designation, use the correct designation available under particular department.</li>\n                    <li>In Supervisor, provide registered e-mail id of supervisor.</li>\n                  </ul>\n                </li>\n\n                <li>\n                  <span class=\"font-weight-bold\">Step 3</span> Upload completed sheet and confirm to add all employees.\n                </li>\n\n              </ul>\n\n              <div class=\"mb-5 mt-5 pl-0\">\n                <div class=\"input-group \">\n                  <div class=\"custom-file\">\n                    <input type=\"file\" class=\"custom-file-input\" name=\"bulk-employee-file\" id=\"bulk-employee-file\" aria-describedby=\"bulk-employee\" [accept]=\"acceptedFormats\" (change)=\"selectFile($event)\" [disabled]=\"uploading\" />\n                    <label class=\"custom-file-label\" for=\"bulk-employee-file\">{{fileName}}</label>\n                  </div>\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" type=\"button\" id=\"bulk-employee\" (click)=\"uploadFile()\" [disabled]=\"uploading\">\n                      <i class=\"fa fa-refresh fa-spin\" *ngIf=\"uploading\"></i> Upload\n                    </button>\n                  </div>\n                </div>\n\n                <label class=\"text-danger\" [ngClass]=\"{'d-none': !error}\">{{error}}</label>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"row\" *ngIf=\"uploaded\">\n            <div class=\"col-12\">\n\n              <table class=\"table table-striped\">\n\n                <thead>\n                  <tr>\n                    <th>Employee ID</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>E-Mail ID</th>\n                    <th>Department</th>\n                    <th>Designation</th>\n                    <th>Supervisor</th>\n                    <th></th>\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr *ngFor=\"let employee of employees; let i = index\">\n                    <td>\n                      <input type=\"text\" class=\"form-control\" id=\"employee-id-{{i}}\" placeholder=\"Employee ID\" name=\"employee-id-{{i}}\" [(ngModel)]=\"employee.employee_id\" />\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" id=\"first-name-{{i}}\" placeholder=\"First Name\" name=\"first-name-{{i}}\" [(ngModel)]=\"employee.name.first\" />\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" id=\"last-name-{{i}}\" placeholder=\"Last Name\" name=\"last-name-{{i}}\" [(ngModel)]=\"employee.name.last\" />\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" id=\"email-id-{{i}}\" placeholder=\"E-Mail ID\" name=\"email-id-{{i}}\" [(ngModel)]=\"employee.email_id\" />\n                    </td>\n                    <td>\n                      <select class=\"form-control\" name=\"department-{{i}}\" id=\"department-{{i}}\" [(ngModel)]=\"employee.department\" (change)=\"selectDepartment(employee.department)\">\n                        <option *ngFor=\"let dept of departments\" [ngValue]=\"dept._id\">{{dept.name}}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <select class=\"form-control\" name=\"designation-{{i}}\" id=\"designation-{{i}}\" [(ngModel)]=\"employee.designation\" [attr.disabled]=\"employee.department == undefined ? 'disabled' : null\">\n                        <option *ngFor=\"let desig of designations[employee.department]\" [ngValue]=\"desig\">{{desig}}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <select class=\"form-control\" name=\"supervisor\" id=\"supervisor\" [(ngModel)]=\"employee.supervisor\" [attr.disabled]=\"employee.department == undefined ? 'disabled' : null\">\n                        <option *ngFor=\"let super of supervisors[employee.department]\" [ngValue]=\"super._id\">\n                          {{super.name}} <{{super.email_id}}>\n                        </option>\n                      </select>\n                    </td>\n                    <td class=\"align-middle text-center\">\n                      <i class=\"fa fa-2x fa-refresh fa-spin\" *ngIf=\"saving[i]\"></i>\n                      <i class=\"fa fa-2x fa-check-circle text-success\" *ngIf=\"!saving[i] && saved[i] && saveStatus[i].length === 0\"></i>\n                      <i class=\"fa fa-2x fa-times-circle text-danger\"\n                        *ngIf=\"!saving[i] && saved[i] && saveStatus[i].length > 0\"\n                        [tooltip]=\"saveStatus[i]\" placement=\"bottom\"></i>\n                    </td>\n                  </tr>\n                </tbody>\n\n              </table>\n\n              <div class=\"form-actions row\" *ngIf=\"!savingAll\">\n                <div class=\"col-12 text-right\">\n                  <a class=\"btn btn-link\" routerLink=\"/employee/list\">Cancel</a>\n                  <button type=\"submit\" class=\"btn btn-success\" (click)=\"saveEmployees()\">Confirm</button>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>Added all employee(s) successfully.</div>\n</app-success-modal>"

/***/ }),

/***/ "./src/app/modules/employee/upload-employee/upload-employee.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/employee/upload-employee/upload-employee.component.ts ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts"), __webpack_require__(/*! ../employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! modules/organization/department/department.service */ "./src/app/modules/organization/department/department.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, environment_1, employee_service_1, department_service_1, profile_service_1, lodash_1, success_modal_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UploadEmployeeComponent = (function () {
        function UploadEmployeeComponent(employeeService, departmentService) {
            this.employeeService = employeeService;
            this.departmentService = departmentService;
            this.downloadLink = environment_1.environment.apiServer + '/documents/Bulk Employee Upload.xlsx';
            this.acceptedFormats = '.csv,.xlsx,.xls';
            this.departments = new Array();
            this.designations = new Array();
            this.supervisors = new Array();
            this.fileName = 'Choose File';
            this.error = '';
            this.uploading = false;
            this.uploaded = false;
            this.savingAll = false;
        }
        UploadEmployeeComponent.prototype.selectFile = function ($event) {
            this.uploadedFile = $event.target.files[0];
            this.fileName = this.uploadedFile.name;
        };
        UploadEmployeeComponent.prototype.uploadFile = function () {
            var _this = this;
            if (!this.uploadedFile) {
                return;
            }
            var self = this;
            this.uploading = true;
            this.employeeService.uploadBulkEmployee(this.uploadedFile)
                .then(function (response) {
                if (response.data.length === 0) {
                    _this.error = 'No employee data was uploaded';
                    return;
                }
                self.employees = response.data;
                self.uploaded = true;
                self.saving = new Array(self.employees.length);
                self.saved = new Array(self.employees.length);
                self.saveStatus = new Array(self.employees.length);
                _this.uploading = false;
                var dataPromises = [], dataPromise;
                dataPromise = self.departmentService.getDepartments().then(function (depts) {
                    self.departments = depts;
                });
                dataPromises.push(dataPromise);
                var query = new Map();
                query.set('is_super_admin', true);
                var projection = ['_id', 'name', 'email_id'];
                dataPromise = self.employeeService.getEmployees(query, 0, 0, projection).then(function (response) {
                    for (var _i = 0, _a = response.users; _i < _a.length; _i++) {
                        var user = _a[_i];
                        user.name = profile_service_1.Name.getFullName(user.name);
                    }
                    self.super_admins = response.users;
                });
                dataPromises.push(dataPromise);
                Promise.all(dataPromises).then(function (response) {
                    self.departments.forEach(function (department) {
                        self.selectDepartment(department._id);
                    });
                });
            }).catch(function (err) {
                self.error = err.error.message.text;
                self.uploading = false;
            });
        };
        UploadEmployeeComponent.prototype.selectDepartment = function (department_id) {
            if (!this.designations[department_id]) {
                for (var _i = 0, _a = this.departments; _i < _a.length; _i++) {
                    var department = _a[_i];
                    if (department._id === department_id) {
                        this.designations[department_id] = department.designations;
                        break;
                    }
                }
            }
            if (!this.supervisors[department_id]) {
                var query = new Map();
                query.set('department_id', department_id);
                query.set('is_supervisor', true);
                var projection = ['_id', 'name', 'email_id'];
                var self_1 = this;
                this.employeeService.getEmployees(query, 0, 0, projection).then(function (response) {
                    for (var _i = 0, _a = response.users; _i < _a.length; _i++) {
                        var user = _a[_i];
                        user.name = profile_service_1.Name.getFullName(user.name);
                    }
                    self_1.supervisors[department_id] = response.users;
                    var user_ids = [];
                    response.users.forEach(function (user) {
                        user_ids.push(user._id.toString());
                    });
                    self_1.super_admins.forEach(function (user) {
                        if (user_ids.indexOf(user._id.toString()) === -1) {
                            self_1.supervisors[department_id].push(user);
                        }
                    });
                });
            }
        };
        UploadEmployeeComponent.prototype.saveEmployees = function () {
            var _this = this;
            var self = this;
            var savePromises = [];
            this.employees.forEach(function (employee, index) {
                self.saving[index] = true;
                var employee_data = lodash_1.clone(employee);
                employee_data.is_chief_executive = false;
                var savePromise = self.employeeService.postEmployee(employee_data).then(function (response) {
                    self.saving[index] = false;
                    self.saved[index] = true;
                    self.saveStatus[index] = '';
                }).catch(function (err) {
                    self.saving[index] = false;
                    self.saved[index] = true;
                    self.saveStatus[index] = err.error.message.text;
                });
                savePromises.push(savePromise);
            });
            Promise.all(savePromises).then(function (response) {
                var all_success = true;
                self.saveStatus.forEach(function (status) {
                    if (status.length !== 0) {
                        all_success = false;
                    }
                });
                if (all_success) {
                    _this.successModal.show('/employee');
                }
            });
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], UploadEmployeeComponent.prototype, "successModal", void 0);
        UploadEmployeeComponent = __decorate([
            core_1.Component({
                selector: 'app-upload-employee',
                template: __webpack_require__(/*! ./upload-employee.component.html */ "./src/app/modules/employee/upload-employee/upload-employee.component.html"),
                providers: [employee_service_1.EmployeeService, department_service_1.DepartmentService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [employee_service_1.EmployeeService,
                department_service_1.DepartmentService])
        ], UploadEmployeeComponent);
        return UploadEmployeeComponent;
    }());
    exports.UploadEmployeeComponent = UploadEmployeeComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=employee-employee-module.js.map