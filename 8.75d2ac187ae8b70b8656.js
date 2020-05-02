(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/app/modules/employee/employee-detail/employee-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/employee/employee-detail/employee-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <div class=\"text-center m-5\" *ngIf=\"loading\">\n        <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading Employee Details</h3>\n      </div>\n\n      <tabset *ngIf=\"!loading\">\n\n        <tab heading=\"Employee Information\">\n          <table class=\"table table-striped\">\n\n            <tr>\n              <th>Name</th>\n              <td>{{employee.full_name}}</td>\n              <th>Type</th>\n              <td>{{employee.employee_type | constants:'user.employee_type'}}</td>\n              <td rowspan=\"5\">\n                <img class=\"img-thumbnail mx-auto d-block\" [src]=\"employee.profile_picture\" [alt]=\"employee.full_name\" />\n              </td>\n            </tr>\n\n            <tr>\n              <th>E-Mail ID</th>\n              <td>{{employee.email_id}}</td>\n              <th>Contact Number</th>\n              <td>\n                <span *ngIf=\"employee.contact_number\">\n                  {{employee.isd_code}}-{{employee.contact_number}}\n                </span>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Employee ID</th>\n              <td>{{employee.employee_id}}</td>\n              <th>Supervisor</th>\n              <td>\n                <span *ngIf=\"employee.supervisor && !employee.is_chief_executive\">{{employee.supervisor.name}}</span>\n                <span *ngIf=\"employee.is_chief_executive\">N/A</span>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Department</th>\n              <td>\n                <span *ngIf=\"employee.department\">\n                  {{employee.department.name}}\n                </span>\n              </td>\n              <th>Designation</th>\n              <td>{{employee.designation}}</td>\n            </tr>\n\n            <tr>\n              <th>Date of Joining</th>\n              <td>{{employee.date_of_joining}}</td>\n              <th>Date of Birth</th>\n              <td>{{employee.date_of_birth}}</td>\n            </tr>\n\n            <tr>\n              <th>Added By</th>\n              <td>\n                <span *ngIf=\"employee.added_by\">{{ employee.added_by.name }}</span>\n              </td>\n              <th>Timezone</th>\n              <td>{{employee.timezone}}</td>\n            </tr>\n\n            <tr>\n              <th>Last Login</th>\n              <td>{{employee.last_login | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n              <td colspan=\"2\"></td>\n            </tr>\n\n          </table>\n        </tab>\n\n        <tab heading=\"Personal Information\">\n          <table class=\"table table-striped\">\n\n            <tr>\n              <th>Gender</th>\n              <td>{{employee.gender | constants: 'user.gender'}}</td>\n              <th>Marital Status</th>\n              <th>{{employee.marital_status | constants: 'user.marital_status'}}</th>\n            </tr>\n\n            <tr>\n              <th>Permanent Address</th>\n              <td>\n                <address *ngIf=\"employee.permanent_address\">\n                  {{employee.permanent_address.address}}<br />\n                  {{employee.permanent_address.locality}}<br />\n                  {{employee.permanent_address.city}}, {{employee.permanent_address.state}} -\n                  {{employee.permanent_address.postcode}}<br />\n                  Landmark: {{employee.permanent_address.landmark}}\n                  {{employee.permanent_address.country}} ({{employee.permanent_address.country_code}})\n                </address>\n              </td>\n              <th>Correspondence Address</th>\n              <td>\n                <address *ngIf=\"employee.correspondence_address\">\n                  {{employee.correspondence_address.address}}<br />\n                  {{employee.correspondence_address.locality}}<br />\n                  {{employee.correspondence_address.city}}, {{employee.correspondence_address.state}} -\n                  {{employee.correspondence_address.postcode}}<br />\n                  Landmark: {{employee.correspondence_address.landmark}}\n                  {{employee.correspondence_address.country}} ({{employee.correspondence_address.country_code}})\n                </address>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Alternate E-Mail IDs</th>\n              <td>\n                <span *ngFor=\"let email of employee.alternate_email_ids\">\n                  {{email}}<br />\n                </span>\n              </td>\n              <th>Alternate Contact Numbers</th>\n              <td>\n                <span *ngFor=\"let contact_number of employee.alternate_contact_numbers\">\n                  {{contact_number.isd_code}}-{{contact_number.contact_number}}<br />\n                </span>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Social Security</th>\n              <td colspan=\"3\">\n                <span *ngIf=\"!employee.social_security || employee.social_security.length == 0\">No details available</span>\n                <table class=\"table table-striped\" *ngIf=\"employee.social_security && employee.social_security.length > 0\">\n\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Type</th>\n                      <th>Number</th>\n                    </tr>\n                  </thead>\n\n                  <tbody>\n                    <tr *ngFor=\"let social_security of employee.social_security; let i = index\">\n                      <td>{{i + 1}}.</td>\n                      <td>{{social_security.type | constants: 'user.social_security'}}</td>\n                      <td>{{social_security.number}}</td>\n                    </tr>\n                  </tbody>\n\n                </table>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Emergency Contacts</th>\n              <td colspan=\"3\">\n                <span *ngIf=\"!employee.emergency_contacts || employee.emergency_contacts.length == 0\">No details available</span>\n                <table class=\"table table-striped\" *ngIf=\"employee.emergency_contacts && employee.emergency_contacts.length > 0\">\n\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Name</th>\n                      <th>Relation</th>\n                      <th>Contact Number</th>\n                    </tr>\n                  </thead>\n\n                  <tbody>\n                    <tr *ngFor=\"let contact of employee.emergency_contacts; let i = index\">\n                      <td>{{i + 1}}.</td>\n                      <td>{{contact.name}}</td>\n                      <td>{{contact.relation}}</td>\n                      <td>{{contact.isd_code}}-{{contact.contact_number}}</td>\n                    </tr>\n                  </tbody>\n\n                </table>\n              </td>\n            </tr>\n\n            <tr>\n              <th>Qualification</th>\n              <td colspan=\"3\">\n                <span *ngIf=\"!employee.qualification || employee.qualification.length == 0\">No details available</span>\n                <table class=\"table table-striped\" *ngIf=\"employee.qualification && employee.qualification.length > 0\">\n\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>Degree</th>\n                      <th>Institution</th>\n                      <th>Specialization</th>\n                      <th>Passing Year</th>\n                      <th>Marks</th>\n                    </tr>\n                  </thead>\n\n                  <tbody>\n                    <tr *ngFor=\"let qualification of employee.qualification; let i = index\">\n                      <td>{{i + 1}}.</td>\n                      <td>{{qualification.degree}}</td>\n                      <td>{{qualification.institution}} ({{qualification.university}})</td>\n                      <td>{{qualification.specialization}}</td>\n                      <td>{{qualification.passing_year}}</td>\n                      <td>{{qualification.marks}}</td>\n                    </tr>\n                  </tbody>\n\n                </table>\n              </td>\n            </tr>\n\n          </table>\n        </tab>\n\n        <tab heading=\"Leave Information\" *ngIf=\"employee.leaves && employee.leaves.length > 0\">\n          <table class=\"table table-striped\">\n\n            <tr>\n              <th>Leave</th>\n              <th>Count</th>\n            </tr>\n\n            <tr *ngFor=\"let leave of employee.leaves\">\n              <td>{{leave.leave_type | constants: 'leave.type'}}</td>\n              <td>{{leave.leaves}}</td>\n            </tr>\n\n          </table>\n        </tab>\n\n        <tab heading=\"Actions\">\n          <table class=\"table table-striped\">\n\n            <thead>\n              <tr>\n                <th>Action</th>\n                <th></th>\n              </tr>\n            </thead>\n\n            <tbody>\n\n              <tr *ngIf=\"updateAllowed\">\n                <td>Update Details</td>\n                <td>\n                  <button class=\"btn btn-primary\" [routerLink]=\"['/employee/edit', employee._id]\" (click)=\"exatask.trackEvent('employee', 'update', employee._id.toString())\">Update</button>\n                </td>\n              </tr>\n\n              <tr *ngIf=\"accessControlAllowed\">\n                <td>Update Access Control</td>\n                <td>\n                  <button class=\"btn btn-primary\" [routerLink]=\"['/employee/access-control/edit/', employee._id]\" (click)=\"exatask.trackEvent('employee', 'update-access-control', employee._id.toString())\">Update Access Control</button>\n                </td>\n              </tr>\n\n              <tr *ngIf=\"employee.user_status == 3 && unlockUserAllowed\">\n                <td>Unlock User</td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"inProgress.unlockUser\" (click)=\"exatask.trackEvent('employee', 'unlock', employee._id.toString()); unlockUser()\">\n                    <i class=\"fa fa-refresh fa-spin\" *ngIf=\"inProgress.unlockUser\"></i> Unlock\n                  </button>\n                </td>\n              </tr>\n\n              <tr *ngIf=\"resetPasswordAllowed\">\n                <td>Reset Password</td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"inProgress.resetPassword\" (click)=\"exatask.trackEvent('employee', 'reset-password', employee._id.toString()); resetPassword()\">\n                    <i class=\"fa fa-refresh fa-spin\" *ngIf=\"inProgress.resetPassword\"></i> Reset Password\n                  </button>\n                </td>\n              </tr>\n\n              <tr *ngIf=\"markSupervisorAllowed && !employee.is_supervisor\">\n                <td>Mark as Supervisor</td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"inProgress.markAsSupervisor\" (click)=\"exatask.trackEvent('employee', 'mark-supervisor', employee._id.toString()); markAsSupervisor()\">\n                    <i class=\"fa fa-refresh fa-spin\" *ngIf=\"inProgress.markAsSupervisor\"></i> Mark as Supervisor\n                  </button>\n                </td>\n              </tr>\n\n              <tr *ngIf=\"unmarkSupervisorAllowed && employee.is_supervisor\">\n                <td>Unmark as Supervisor</td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"inProgress.unmarkAsSupervisor\" (click)=\"exatask.trackEvent('employee', 'unmark-supervisor', employee._id.toString()); unmarkAsSupervisor()\">\n                    <i class=\"fa fa-refresh fa-spin\" *ngIf=\"inProgress.unmarkAsSupervisor\"></i> Unmark as Supervisor\n                  </button>\n                </td>\n              </tr>\n\n              <tr *ngIf=\"markChiefExecutiveAllowed && !employee.is_chief_executive\">\n                <td>Mark as Chief-Executive</td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"inProgress.markAsChiefExecutive\" (click)=\"exatask.trackEvent('employee', 'mark-chief-executive', employee._id.toString()); markAsChiefExecutive()\">\n                    <i class=\"fa fa-refresh fa-spin\" *ngIf=\"inProgress.markAsChiefExecutive\"></i> Mark as Chief-Executive\n                  </button>\n                </td>\n              </tr>\n\n              <tr *ngIf=\"unmarkChiefExecutiveAllowed && employee.is_chief_executive\">\n                <td>Unmark as Chief-Executive</td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"inProgress.unmarkAsChiefExecutive\" (click)=\"exatask.trackEvent('employee', 'unmark-chief-executive', employee._id.toString()); unmarkAsChiefExecutive()\">\n                    <i class=\"fa fa-refresh fa-spin\" *ngIf=\"inProgress.unmarkAsChiefExecutive\"></i> Unmark as Chief-Executive\n                  </button>\n                </td>\n              </tr>\n\n              <tr *ngIf=\"markSuperAdminAllowed && !employee.is_super_admin\">\n                <td>Mark as Super Admin</td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"inProgress.markAsSuperAdmin\" (click)=\"exatask.trackEvent('employee', 'mark-super-admin', employee._id.toString()); markAsSuperAdmin()\">\n                    <i class=\"fa fa-refresh fa-spin\" *ngIf=\"inProgress.markAsSuperAdmin\"></i> Mark as Super Admin\n                  </button>\n                </td>\n              </tr>\n\n              <tr *ngIf=\"unmarkSuperAdminAllowed && employee.is_super_admin\">\n                <td>Unmark as Super Admin</td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"inProgress.unmarkAsSuperAdmin\" (click)=\"exatask.trackEvent('employee', 'unmark-super-admin', employee._id.toString()); unmarkAsSuperAdmin()\">\n                    <i class=\"fa fa-refresh fa-spin\" *ngIf=\"inProgress.unmarkAsSuperAdmin\"></i> Unmark as Super Admin\n                  </button>\n                </td>\n              </tr>\n\n            </tbody>\n\n          </table>\n        </tab>\n\n      </tabset>\n\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>{{successMessage}}</div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>{{errorMessage}}</div>\n</app-error-modal>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! ../../../core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! ../../user/user.service */ "./src/app/modules/user/user.service.ts"), __webpack_require__(/*! ../../../shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! ../../../shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! ../../../config/constants/user */ "./src/app/config/constants/user.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, employee_service_1, router_1, profile_service_1, exatask_service_1, access_service_1, user_service_1, success_modal_component_1, error_modal_component_1, user_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeeDetailComponent = (function () {
        function EmployeeDetailComponent(route, employeeService, userService, access, exatask) {
            this.route = route;
            this.employeeService = employeeService;
            this.userService = userService;
            this.access = access;
            this.exatask = exatask;
            this.employee = new employee_service_1.EmployeeDetails();
            this.loading = false;
            this.exatask.setTitle('Employee Details');
            this.employee_id = this.route.snapshot.params.id;
            this.inProgress = {
                unlockUser: false,
                markAsSupervisor: false,
                unmarkAsSupervisor: false,
                markAsChiefExecutive: false,
                unmarkAsChiefExecutive: false,
                markAsSuperAdmin: false,
                unmarkAsSuperAdmin: false,
                resetPassword: false
            };
        }
        EmployeeDetailComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                return __generator(this, function (_l) {
                    switch (_l.label) {
                        case 0:
                            this.__getEmployeeDetails(this.employee_id);
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'employee',
                                    action: 'update'
                                })];
                        case 1:
                            _a.updateAllowed = _l.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'access-control',
                                    action: 'update'
                                })];
                        case 2:
                            _b.accessControlAllowed = _l.sent();
                            _c = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'supervisor',
                                    action: 'mark'
                                })];
                        case 3:
                            _c.markSupervisorAllowed = _l.sent();
                            _d = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'supervisor',
                                    action: 'unmark'
                                })];
                        case 4:
                            _d.unmarkSupervisorAllowed = _l.sent();
                            _e = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'chief-executive',
                                    action: 'mark'
                                })];
                        case 5:
                            _e.markChiefExecutiveAllowed = _l.sent();
                            _f = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'chief-executive',
                                    action: 'unmark'
                                })];
                        case 6:
                            _f.unmarkChiefExecutiveAllowed = _l.sent();
                            _g = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'super-admin',
                                    action: 'mark'
                                })];
                        case 7:
                            _g.markSuperAdminAllowed = _l.sent();
                            _h = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'super-admin',
                                    action: 'unmark'
                                })];
                        case 8:
                            _h.unmarkSuperAdminAllowed = _l.sent();
                            _j = this;
                            return [4, this.access.hasAccess({
                                    module: 'user',
                                    entity: 'user',
                                    action: 'unlock'
                                })];
                        case 9:
                            _j.unlockUserAllowed = _l.sent();
                            _k = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'employee',
                                    action: 'reset'
                                })];
                        case 10:
                            _k.resetPasswordAllowed = _l.sent();
                            return [2];
                    }
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
                _this.exatask.setTitle('Employee Details : ' + _this.employee.full_name);
            });
        };
        EmployeeDetailComponent.prototype.unlockUser = function () {
            this.inProgress.unlockUser = true;
            var self = this;
            this.userService.unlockUser(this.employee_id)
                .then(function (response) {
                self.employee.user_status = user_1.STATUS.ACTIVE;
                self.inProgress.unlockUser = false;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress.unlockUser = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        EmployeeDetailComponent.prototype.markAsSupervisor = function () {
            this.inProgress.markAsSupervisor = true;
            var self = this;
            this.employeeService.markAsSupervisor(this.employee_id)
                .then(function (response) {
                self.inProgress.markAsSupervisor = false;
                self.employee.is_supervisor = true;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress.markAsSupervisor = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        EmployeeDetailComponent.prototype.unmarkAsSupervisor = function () {
            this.inProgress.unmarkAsSupervisor = true;
            var self = this;
            this.employeeService.unmarkAsSupervisor(this.employee_id)
                .then(function (response) {
                self.inProgress.unmarkAsSupervisor = false;
                self.employee.is_supervisor = false;
                self.employee.is_chief_executive = false;
                self.employee.is_super_admin = false;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress.unmarkAsSupervisor = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        EmployeeDetailComponent.prototype.markAsChiefExecutive = function () {
            this.inProgress.markAsChiefExecutive = true;
            var self = this;
            this.employeeService.markAsChiefExecutive(this.employee_id)
                .then(function (response) {
                self.inProgress.markAsChiefExecutive = false;
                self.employee.is_chief_executive = true;
                self.employee.is_supervisor = true;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress.markAsChiefExecutive = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        EmployeeDetailComponent.prototype.unmarkAsChiefExecutive = function () {
            this.inProgress.unmarkAsChiefExecutive = true;
            var self = this;
            this.employeeService.unmarkAsChiefExecutive(this.employee_id)
                .then(function (response) {
                self.inProgress.unmarkAsChiefExecutive = false;
                self.employee.is_chief_executive = false;
                self.employee.is_super_admin = false;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress.unmarkAsChiefExecutive = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        EmployeeDetailComponent.prototype.markAsSuperAdmin = function () {
            this.inProgress.markAsSuperAdmin = true;
            var self = this;
            this.employeeService.markAsSuperAdmin(this.employee_id)
                .then(function (response) {
                self.inProgress.markAsSuperAdmin = false;
                self.employee.is_super_admin = true;
                self.employee.is_chief_executive = true;
                self.employee.is_supervisor = true;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress.markAsSuperAdmin = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        EmployeeDetailComponent.prototype.unmarkAsSuperAdmin = function () {
            this.inProgress.unmarkAsSuperAdmin = true;
            var self = this;
            this.employeeService.unmarkAsSuperAdmin(this.employee_id)
                .then(function (response) {
                self.inProgress.unmarkAsSuperAdmin = false;
                self.employee.is_super_admin = false;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress.unmarkAsSuperAdmin = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        EmployeeDetailComponent.prototype.resetPassword = function () {
            this.inProgress.resetPassword = true;
            var self = this;
            this.employeeService.resetPassword(this.employee_id)
                .then(function (response) {
                self.inProgress.resetPassword = false;
                self.successMessage = response.message.text;
                self.successModal.show();
            }).catch(function (err) {
                self.inProgress.resetPassword = false;
                self.errorMessage = err.error.message.text;
                self.errorModal.show();
            });
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], EmployeeDetailComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], EmployeeDetailComponent.prototype, "errorModal", void 0);
        EmployeeDetailComponent = __decorate([
            core_1.Component({
                selector: 'app-employee-detail',
                template: __webpack_require__(/*! ./employee-detail.component.html */ "./src/app/modules/employee/employee-detail/employee-detail.component.html"),
                providers: [employee_service_1.EmployeeService, user_service_1.UserService]
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute,
                employee_service_1.EmployeeService,
                user_service_1.UserService,
                access_service_1.Access,
                exatask_service_1.ExaTask])
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
                    path: 'access-control',
                    loadChildren: './employee-access-control/employee-access-control.module#EmployeeAccessControlModule'
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
                    path: ':id',
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
                    path: 'edit/:id',
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


/***/ }),

/***/ "./src/app/modules/employee/list-employee/list-employee.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/employee/list-employee/list-employee.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\" *ngIf=\"createAllowed\">\n            <div class=\"col-12 text-right\">\n\n              <button class=\"btn btn-primary mr-3\" role=\"button\" type=\"button\" (click)=\"exatask.trackEvent('employee', 'export'); exportEmployees()\">Export</button>\n\n              <div class=\"btn-group\" dropdown>\n                <button class=\"btn btn-primary\" role='button' type=\"button\" routerLink=\"/employee/add\" (click)=\"exatask.trackEvent('employee', 'add')\">+ Add Employee</button>\n                <button id=\"add-employee-btn\" type=\"button\" class=\"btn btn-primary dropdown-toggle dropdown-toggle-split\" dropdownToggle aria-controls=\"add-employee\">\n                  <span class=\"caret\"></span>\n                  <span class=\"sr-only\">Add Employee(s)</span>\n                </button>\n                <ul id=\"add-employee\" class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu role=\"menu\" aria-labelledby=\"add-employee-btn\">\n                  <li role=\"menuitem\">\n                    <a class=\"dropdown-item\" routerLink=\"/employee/upload\" (click)=\"exatask.trackEvent('employee', 'upload')\">Upload Employee(s)</a>\n                  </li>\n                </ul>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading Employees</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && employees.length === 0\">\n            <h3>No Employees in organization</h3>\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" *ngIf=\"!loading && employees.length > 0\">\n              <thead>\n                <tr>\n                  <th>Employee ID</th>\n                  <th>Name</th>\n                  <th>E-Mail ID</th>\n                  <th>Type</th>\n                  <th>Department</th>\n                  <th>Designation</th>\n                  <th>Supervisor</th>\n                  <th>Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let employee of employees; let i = index\">\n                  <td>\n                    <a [routerLink]=\"['/employee', employee._id]\">{{employee.employee_id}}</a>\n                  </td>\n                  <td>\n                    <a [routerLink]=\"['/employee', employee._id]\">{{employee.name.first}} {{employee.name.middle}} {{employee.name.last}}</a>\n                  </td>\n                  <td>\n                    <a [routerLink]=\"['/employee', employee._id]\">{{employee.email_id}}</a>\n                  </td>\n                  <td>{{'user.employee_type.' + employee.employee_type | constants}}</td>\n                  <td>\n                    <span *ngIf=\"employee.department\">{{employee.department.name}}</span>\n                  </td>\n                  <td>\n                    <span *ngIf=\"employee.designation\">{{employee.designation}}</span>\n                  </td>\n                  <td>\n                    <span *ngIf=\"employee.supervisor\">{{employee.supervisor.name}}</span>\n                  </td>\n                  <td>\n                    <span class=\"badge\" [ngClass]=\"getStatusBadge(employee.user_status)\">{{'user.status.' + employee.user_status | constants}}</span>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          <ul class=\"pagination justify-content-end\" *ngIf=\"count > limit\">\n            <li class=\"page-item\" *ngIf=\"total_pages > 1\" [class.disabled]=\"page == 1\">\n              <button class=\"page-link\" (click)=\"exatask.trackEvent('employee', 'first', 'list'); getEmployees(1)\">First</button>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"page == 1\">\n              <button class=\"page-link\" (click)=\"exatask.trackEvent('employee', 'previous', 'list', page - 1); getEmployees(page - 1)\">Previous</button>\n            </li>\n            <li class=\"page-item active\">\n              <button class=\"page-link\">{{page}}</button>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"page === total_pages\">\n              <button class=\"page-link\" (click)=\"exatask.trackEvent('employee', 'next', 'list', page + 1); getEmployees(page + 1)\">Next</button>\n            </li>\n            <li class=\"page-item\" *ngIf=\"page < total_pages\" [class.disabled]=\"page === total_pages\">\n              <button class=\"page-link\" (click)=\"exatask.trackEvent('employee', 'last', 'list'); getEmployees(total_pages)\">Last</button>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>{{successMessage}}</div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>{{errorMessage}}</div>\n</app-error-modal>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! ../../../config/constants/user */ "./src/app/config/constants/user.ts"), __webpack_require__(/*! ../../user/user.service */ "./src/app/modules/user/user.service.ts"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, employee_service_1, success_modal_component_1, error_modal_component_1, access_service_1, user_1, user_service_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListEmployeeComponent = (function () {
        function ListEmployeeComponent(employeeService, userService, access, exatask) {
            this.employeeService = employeeService;
            this.userService = userService;
            this.access = access;
            this.exatask = exatask;
            this.loading = false;
            this.employees = [];
            this.limit = 25;
            this.createAllowed = false;
            this.inProgress = new Array();
            this.exatask.setTitle('Employee List');
        }
        ListEmployeeComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.getEmployees(1);
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'employee',
                                    action: 'create'
                                })];
                        case 1:
                            _a.createAllowed = _c.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'employee',
                                    entity: 'employee',
                                    action: 'export'
                                })];
                        case 2:
                            _b.exportAllowed = _c.sent();
                            return [2];
                    }
                });
            });
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
        ListEmployeeComponent.prototype.exportEmployees = function () {
            var _this = this;
            var self = this;
            this.employeeService.exportEmployees().then(function (response) {
                _this.successMessage = response.message.text;
                _this.successModal.show('/employee');
            }).catch(function (err) {
                _this.errorMessage = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ListEmployeeComponent.prototype.getStatusBadge = function (status) {
            switch (status) {
                case user_1.STATUS.ACTIVE: return 'badge-success';
                case user_1.STATUS.LOCKED: return 'badge-warning';
                default: return 'badge-default';
            }
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
                providers: [employee_service_1.EmployeeService, user_service_1.UserService]
            }),
            __metadata("design:paramtypes", [employee_service_1.EmployeeService,
                user_service_1.UserService,
                access_service_1.Access,
                exatask_service_1.ExaTask])
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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"offset-md-2 col-md-8\">\n              <form #employeeForm=\"ngForm\">\n\n                <div class=\"form-group row\">\n                  <label for=\"employee-type\" class=\"col-md-3 col-form-label\">\n                    Employee Type <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-md-3\">\n                    <select name=\"employee-type\" id=\"employee-type\" class=\"form-control\" [(ngModel)]=\"employee.employee_type\">\n                      <option [value]=\"null\">(Select employee type)</option>\n                      <option *ngFor=\"let type of 'user.employee_type' | constantsarray\" [value]=\"type.key\">\n                        {{ type.value }}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"first-name\" class=\"col-md-3 col-form-label\">\n                    Name <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-md-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"First Name\" name=\"first-name\" [(ngModel)]=\"employee.name.first\">\n                  </div>\n                  <div class=\"col-md-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"middle-name\" placeholder=\"Middle Name\" name=\"middle-name\" [(ngModel)]=\"employee.name.middle\">\n                  </div>\n                  <div class=\"col-md-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Last Name\" name=\"last-name\" [(ngModel)]=\"employee.name.last\">\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <label for=\"email-id\" class=\"col-md-3 col-form-label\">\n                    E-Mail ID <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-md-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"email-id\" name=\"email-id\" placeholder=\"someone@exatask.com\" [(ngModel)]=\"employee.email_id\" [attr.disabled]=\"employee_id ? 'disabled' : null\">\n                  </div>\n\n                  <label for=\"employee-id\" class=\"col-md-3 col-form-label\">\n                    Employee ID <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-md-3\">\n                    <input type=\"text\" class=\"form-control\" id=\"employee-id\" name=\"employee-id\" [(ngModel)]=\"employee.employee_id\" [attr.disabled]=\"(original_employee.employee_id && employee_id) ? 'disabled' : null\">\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <label for=\"department\" class=\"col-md-3 col-form-label\">\n                    Department <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-md-3\">\n                    <select class=\"form-control\" name=\"department\" id=\"department\" [(ngModel)]=\"employee.department\" (change)=\"selectDepartment()\">\n                      <option [value]=\"null\">(Select department)</option>\n                      <option *ngFor=\"let dept of departments\" [value]=\"dept._id\">{{dept.name}}</option>\n                    </select>\n                  </div>\n\n                  <label for=\"designation\" class=\"col-md-3 col-form-label\">\n                    Designation <span class=\"required\">*</span>\n                  </label>\n                  <div class=\"col-md-3\">\n                    <select class=\"form-control\" name=\"designation\" id=\"designation\" [(ngModel)]=\"employee.designation\" [attr.disabled]=\"employee.department == undefined ? 'disabled' : null\">\n                      <option [value]=\"null\">(Select designation)</option>\n                      <option *ngFor=\"let desig of designations\" [value]=\"desig\">{{desig}}</option>\n                    </select>\n                  </div>\n\n                </div>\n\n                <div class=\"form-group row\">\n\n                  <label for=\"supervisor\" class=\"col-md-3 col-form-label\">Supervisor</label>\n                  <div class=\"col-md-3\">\n                    <select class=\"form-control\" name=\"supervisor\" id=\"supervisor\" [(ngModel)]=\"employee.supervisor\" [attr.disabled]=\"(employee.department == undefined || employee.is_chief_executive) ? 'disabled' : null\">\n                      <option [ngValue]=\"null\">(Select supervisor)</option>\n                      <option *ngFor=\"let supervisor of supervisors\" [ngValue]=\"supervisor._id\">\n                        {{supervisor.name}} <{{supervisor.email_id}}>\n                      </option>\n                    </select>\n                  </div>\n\n                  <label class=\"col-md-3 col-form-label\">Chief Executive</label>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" name=\"chief-executive\" class=\"form-check-input\" id=\"chief-executive\" value=\"true\" [(ngModel)]=\"employee.is_chief_executive\" [attr.disabled]=\"employee_id ? 'disabled' : null\">\n                      <label class=\"form-check-label\" for=\"chief-executive\">Is employee a chief executive?</label>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div class=\"form-actions row\">\n                  <div class=\"col-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"exatask.trackEvent('employee', 'save'); saveEmployee()\">Submit</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"exatask.trackEvent('employee', 'cancel'); resetEmployee()\">Reset</button>\n                  </div>\n                </div>\n\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/.row-->\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    <span *ngIf=\"employee_id\">\n      Updated employee details successfully\n    </span>\n    <span *ngIf=\"!employee_id\">\n      Added new employee successfully.\n    </span>\n  </div>\n  <div *ngIf=\"!employee_id\" buttons>\n    <button class=\"btn btn-success\" type=\"button\" (click)=\"addAnother()\">Add Another</button>\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    There was an error\n    <span *ngIf=\"employee_id\">updating</span>\n    <span *ngIf=\"!employee_id\">adding</span> the employee.\n    <br>\n    <p>Details: {{error}}</p>\n  </div>\n</app-error-modal>\n"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! modules/organization/department/department.service */ "./src/app/modules/organization/department/department.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! shared/helpers/utility */ "./src/app/shared/helpers/utility.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, lodash_1, success_modal_component_1, error_modal_component_1, employee_service_1, department_service_1, profile_service_1, utility_1, forms_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ManageEmployeeComponent = (function () {
        function ManageEmployeeComponent(route, employeeService, departmentService, exatask) {
            var _this = this;
            this.route = route;
            this.employeeService = employeeService;
            this.departmentService = departmentService;
            this.exatask = exatask;
            this.employee = new employee_service_1.Employee();
            this.original_employee = new employee_service_1.Employee();
            this.employee_id = null;
            this.error = '';
            this.departments = new Array();
            this.designations = new Array();
            this.supervisors = new Array();
            this.super_admins = new Array();
            this.allDepartmentSupervisors = new Map();
            this.exatask.setTitle('Manage Employee');
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
                _this.exatask.setTitle('Manage Employee : ' + profile_service_1.Name.getFullName(_this.employee.name));
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
        ManageEmployeeComponent.prototype.__sanitizeUpdate = function (data, original_data) {
            if (data.name) {
                if (!data.name.first) {
                    data.name.first = original_data.name.first;
                }
                if (!data.name.last) {
                    data.name.last = original_data.name.last;
                }
                if (data.name.middle === original_data.name.middle) {
                    data.name.middle = original_data.name.middle;
                }
            }
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
                    employee_data = this.__sanitizeUpdate(employee_data, this.original_employee);
                    if (Object.keys(employee_data).length === 0) {
                        return;
                    }
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
                var dataPromises = [];
                var dataPromise = void 0;
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
                dataPromises.push(dataPromise);
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
                department_service_1.DepartmentService,
                exatask_service_1.ExaTask])
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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\" *ngIf=\"!uploaded\">\n            <div class=\"col-md-6 offset-md-3\">\n\n              <p class=\"lead\">Instructions:</p>\n              <ul class=\"list-unstyled\">\n\n                <li>\n                  <span class=\"font-weight-bold\">Step 1</span> Download Employee details template sheet <a target=\"_blank\" [href]=\"downloadLink\" (click)=\"exatask.trackEvent('upload-employee', 'download')\">here</a>.\n                </li>\n\n                <li>\n                  <span class=\"font-weight-bold\">Step 2</span> Fill details of all employees being added in template sheet.\n\n                  <ul>\n                    <li>Don't change headers. Data will not get uploaded correctly if headers are tampered with.</li>\n                    <li>In Department, use the correct name as available from list <a target=\"_blank\" routerLink=\"/organization/department/list\" (click)=\"exatask.trackEvent('upload-employee', 'department-list')\">here</a>.</li>\n                    <li>In Designation, use the correct designation available under particular department.</li>\n                    <li>In Supervisor, provide registered e-mail id of supervisor.</li>\n                  </ul>\n                </li>\n\n                <li>\n                  <span class=\"font-weight-bold\">Step 3</span> Upload completed sheet and confirm to add all employees.\n                </li>\n\n              </ul>\n\n              <div class=\"mb-5 mt-5 pl-0\">\n                <div class=\"input-group \">\n                  <div class=\"custom-file\">\n                    <input type=\"file\" class=\"custom-file-input\" name=\"bulk-employee-file\" id=\"bulk-employee-file\" aria-describedby=\"bulk-employee\" [accept]=\"acceptedFormats\" (change)=\"selectFile($event)\" [disabled]=\"uploading\" />\n                    <label class=\"custom-file-label\" for=\"bulk-employee-file\">{{fileName}}</label>\n                  </div>\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-primary\" type=\"button\" id=\"bulk-employee\" (click)=\"exatask.trackEvent('upload-employee', 'upload'); uploadFile()\" [disabled]=\"uploading\">\n                      <i class=\"fa fa-refresh fa-spin\" *ngIf=\"uploading\"></i> Upload\n                    </button>\n                  </div>\n                </div>\n\n                <label class=\"text-danger\" [ngClass]=\"{'d-none': !error}\">{{error}}</label>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"row\" *ngIf=\"uploaded\">\n            <div class=\"col-12 table-responsive\">\n\n              <table class=\"table table-striped\">\n\n                <thead>\n                  <tr>\n                    <th>Employee ID</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>E-Mail ID</th>\n                    <th>Department</th>\n                    <th>Designation</th>\n                    <th>Supervisor</th>\n                    <th></th>\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr *ngFor=\"let employee of employees; let i = index\">\n                    <td>\n                      <input type=\"text\" class=\"form-control\" id=\"employee-id-{{i}}\" placeholder=\"Employee ID\" name=\"employee-id-{{i}}\" [(ngModel)]=\"employee.employee_id\" />\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" id=\"first-name-{{i}}\" placeholder=\"First Name\" name=\"first-name-{{i}}\" [(ngModel)]=\"employee.name.first\" />\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" id=\"last-name-{{i}}\" placeholder=\"Last Name\" name=\"last-name-{{i}}\" [(ngModel)]=\"employee.name.last\" />\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" id=\"email-id-{{i}}\" placeholder=\"E-Mail ID\" name=\"email-id-{{i}}\" [(ngModel)]=\"employee.email_id\" />\n                    </td>\n                    <td>\n                      <select class=\"form-control\" name=\"department-{{i}}\" id=\"department-{{i}}\" [(ngModel)]=\"employee.department\" (change)=\"selectDepartment(employee.department)\">\n                        <option *ngFor=\"let dept of departments\" [ngValue]=\"dept._id\">{{dept.name}}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <select class=\"form-control\" name=\"designation-{{i}}\" id=\"designation-{{i}}\" [(ngModel)]=\"employee.designation\" [attr.disabled]=\"employee.department == undefined ? 'disabled' : null\">\n                        <option *ngFor=\"let desig of designations[employee.department]\" [ngValue]=\"desig\">{{desig}}</option>\n                      </select>\n                    </td>\n                    <td>\n                      <select class=\"form-control\" name=\"supervisor\" id=\"supervisor\" [(ngModel)]=\"employee.supervisor\" [attr.disabled]=\"employee.department == undefined ? 'disabled' : null\">\n                        <option *ngFor=\"let supervisor of supervisors[employee.department]\" [ngValue]=\"supervisor._id\">\n                          {{supervisor.name}} <{{supervisor.email_id}}>\n                        </option>\n                      </select>\n                    </td>\n                    <td class=\"align-middle text-center\">\n                      <i class=\"fa fa-2x fa-refresh fa-spin\" *ngIf=\"saving[i]\"></i>\n                      <i class=\"fa fa-2x fa-check-circle text-success\" *ngIf=\"!saving[i] && saved[i] && saveStatus[i].length === 0\"></i>\n                      <i class=\"fa fa-2x fa-times-circle text-danger\"\n                        *ngIf=\"!saving[i] && saved[i] && saveStatus[i].length > 0\"\n                        [tooltip]=\"saveStatus[i]\" placement=\"bottom\"></i>\n                    </td>\n                  </tr>\n                </tbody>\n\n              </table>\n\n              <div class=\"form-actions row\" *ngIf=\"!savingAll\">\n                <div class=\"col-12 text-right\">\n                  <a class=\"btn btn-link\" routerLink=\"/employee/list\">Cancel</a>\n                  <button type=\"submit\" class=\"btn btn-success\" (click)=\"exatask.trackEvent('upload-employee', 'submit'); saveEmployees()\">Confirm</button>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>Added all employee(s) successfully.</div>\n</app-success-modal>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts"), __webpack_require__(/*! ../employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! modules/organization/department/department.service */ "./src/app/modules/organization/department/department.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, environment_1, employee_service_1, department_service_1, profile_service_1, lodash_1, success_modal_component_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UploadEmployeeComponent = (function () {
        function UploadEmployeeComponent(employeeService, departmentService, exatask) {
            this.employeeService = employeeService;
            this.departmentService = departmentService;
            this.exatask = exatask;
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
            this.exatask.setTitle('Upload Employee');
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
                var dataPromises = [];
                var dataPromise;
                dataPromise = self.departmentService.getDepartments().then(function (depts) {
                    self.departments = depts;
                });
                dataPromises.push(dataPromise);
                var query = new Map();
                query.set('is_super_admin', true);
                var projection = ['_id', 'name', 'email_id'];
                dataPromise = self.employeeService.getEmployees(query, 0, 0, projection).then(function (employee_response) {
                    for (var _i = 0, _a = employee_response.users; _i < _a.length; _i++) {
                        var user = _a[_i];
                        user.name = profile_service_1.Name.getFullName(user.name);
                    }
                    self.super_admins = employee_response.users;
                });
                dataPromises.push(dataPromise);
                Promise.all(dataPromises).then(function () {
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
                department_service_1.DepartmentService,
                exatask_service_1.ExaTask])
        ], UploadEmployeeComponent);
        return UploadEmployeeComponent;
    }());
    exports.UploadEmployeeComponent = UploadEmployeeComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=8.75d2ac187ae8b70b8656.js.map