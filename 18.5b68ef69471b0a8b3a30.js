(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/app/modules/organization/department/department.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/organization/department/department.module.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./department.routing */ "./src/app/modules/organization/department/department.routing.ts"), __webpack_require__(/*! ./list-department/list-department.component */ "./src/app/modules/organization/department/list-department/list-department.component.ts"), __webpack_require__(/*! ./manage-department/manage-department.component */ "./src/app/modules/organization/department/manage-department/manage-department.component.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, department_routing_1, list_department_component_1, manage_department_component_1, application_components_module_1, application_pipes_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DepartmentModule = (function () {
        function DepartmentModule() {
        }
        DepartmentModule = __decorate([
            core_1.NgModule({
                imports: [
                    department_routing_1.DepartmentRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    list_department_component_1.ListDepartmentComponent,
                    manage_department_component_1.ManageDepartmentComponent
                ],
                providers: []
            })
        ], DepartmentModule);
        return DepartmentModule;
    }());
    exports.DepartmentModule = DepartmentModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/department/department.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/organization/department/department.routing.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./list-department/list-department.component */ "./src/app/modules/organization/department/list-department/list-department.component.ts"), __webpack_require__(/*! ./manage-department/manage-department.component */ "./src/app/modules/organization/department/manage-department/manage-department.component.ts"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! core/services/objectid.service */ "./src/app/core/services/objectid.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, list_department_component_1, manage_department_component_1, authentication_service_1, authorization_service_1, objectid_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Department'
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
                            module: 'organization',
                            entity: 'department',
                            action: 'find'
                        }
                    },
                    component: list_department_component_1.ListDepartmentComponent
                },
                {
                    path: 'add',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Add',
                        access: {
                            module: 'organization',
                            entity: 'department',
                            action: 'create'
                        }
                    },
                    component: manage_department_component_1.ManageDepartmentComponent
                },
                {
                    path: 'edit/:id',
                    data: {
                        title: 'Edit',
                        access: {
                            module: 'organization',
                            entity: 'department',
                            action: 'update'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard, objectid_service_1.ObjectidGuard],
                    component: manage_department_component_1.ManageDepartmentComponent
                }
            ]
        }
    ];
    var DepartmentRoutingModule = (function () {
        function DepartmentRoutingModule() {
        }
        DepartmentRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], DepartmentRoutingModule);
        return DepartmentRoutingModule;
    }());
    exports.DepartmentRoutingModule = DepartmentRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/department/list-department/list-department.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/organization/department/list-department/list-department.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\" *ngIf=\"createAllowed\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary pull-right\" role='button' type=\"button\" routerLink=\"/organization/department/add\" (click)=\"exatask.trackEvent('department', 'add')\">+ Add Department</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading Departments</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && departments.length == 0\">\n            <h3>No Departments in organization</h3>\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" *ngIf=\"!loading && departments.length > 0\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Name</th>\n                  <th>No. of Employees</th>\n                  <th>Status</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let dept of departments; let i = index\">\n                  <td>{{i+1}}.</td>\n                  <td>{{dept.name}}</td>\n                  <td>{{dept.count.employees}}</td>\n                  <td>{{dept.department_status | constants: 'department.status'}}</td>\n                  <td class=\"text-center\">\n                    <button class=\"btn btn-primary btn-sm\" role=\"button\" type=\"button\" routerLink=\"/organization/department/edit/{{dept._id.toString()}}\" *ngIf=\"editAllowed\" (click)=\"exatask.trackEvent('department', 'edit', dept._id.toString())\">Edit</button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/organization/department/list-department/list-department.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/organization/department/list-department/list-department.component.ts ***!
  \**********************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/organization/department/department.service */ "./src/app/modules/organization/department/department.service.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, department_service_1, access_service_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListDepartmentComponent = (function () {
        function ListDepartmentComponent(departmentService, access, exatask) {
            this.departmentService = departmentService;
            this.access = access;
            this.exatask = exatask;
            this.loading = false;
            this.createAllowed = false;
            this.editAllowed = false;
            this.departments = [];
            this.exatask.setTitle('Department List');
        }
        ListDepartmentComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.loading = true;
                            this.departmentService.getDepartments().then(function (depts) {
                                _this.loading = false;
                                _this.departments = depts;
                            });
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'organization',
                                    entity: 'department',
                                    action: 'create'
                                })];
                        case 1:
                            _a.createAllowed = _c.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'organization',
                                    entity: 'department',
                                    action: 'update'
                                })];
                        case 2:
                            _b.editAllowed = _c.sent();
                            return [2];
                    }
                });
            });
        };
        ListDepartmentComponent.prototype.noOfDesignations = function () {
            var total = 0;
            this.departments.forEach(function (x) { return total += x.designations.length; });
            return total;
        };
        ListDepartmentComponent = __decorate([
            core_1.Component({
                selector: 'app-departments',
                template: __webpack_require__(/*! ./list-department.component.html */ "./src/app/modules/organization/department/list-department/list-department.component.html"),
                providers: [department_service_1.DepartmentService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [department_service_1.DepartmentService,
                access_service_1.Access,
                exatask_service_1.ExaTask])
        ], ListDepartmentComponent);
        return ListDepartmentComponent;
    }());
    exports.ListDepartmentComponent = ListDepartmentComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/department/manage-department/manage-department.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/organization/department/manage-department/manage-department.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n\n          <form #departmentForm=\"ngForm\">\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\" for=\"name\">Department Name</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Department Name\" [(ngModel)]=\"data.name\" #name=\"ngModel\" required minlength=\"3\">\n                <app-inline-error [control]=\"name\"></app-inline-error>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-3 col-form-label\">Designations</label>\n              <div class=\"col-md-6\">\n                <div class=\"row\">\n                  <div class=\"col-md-6 form-group\" *ngFor=\"let designation of data.designations; let i = index; trackBy: trackByIndex\">\n                    <div class=\"input-group\">\n                      <input type=\"text\" class=\"form-control\" name=\"designation-{{i}}\" placeholder=\"Designation\" [(ngModel)]=\"data.designations[i]\" #designation=\"ngModel\" required minlength=\"3\">\n                        <span class=\"input-group-append\">\n                          <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeDesignation(i)\">\n                            <i class=\"fa fa-remove\"></i>\n                          </button>\n                        </span>\n                    </div>\n                    <app-inline-error [control]=\"designation\"></app-inline-error>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <button class=\"btn btn-outline-success\" (click)=\"addNewDesignation()\" type=button>+ Add Designation</button>\n              </div>\n            </div>\n\n            <div class=\"form-actions row\">\n              <div class=\"col-12 text-right\">\n                <button [disabled]=\"!departmentForm.valid\" type=\"submit\" class=\"btn btn-primary\" (click)=\"exatask.trackEvent('department', 'submit'); postDepartment()\">Submit</button>\n                <button type=\"button\" class=\"btn btn-link\" routerLink=\"/organization/department\" (click)=\"exatask.trackEvent('department', 'cancel')\">Cancel</button>\n              </div>\n            </div>\n\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    <span *ngIf=\"!data._id || !data._id.toString()\">Created</span>\n    <span *ngIf=\"data._id && data._id.toString()\">Updated</span> Department Successfully\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"\">\n  <div content>\n    There was an error\n    <span *ngIf=\"!data._id || !data._id.toString()\">creating</span>\n    <span *ngIf=\"data._id && data._id.toString()\">updating</span>\n    this department.\n    <br>\n    <p>Details: {{error}}</p>\n  </div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/organization/department/manage-department/manage-department.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/organization/department/manage-department/manage-department.component.ts ***!
  \**************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! modules/organization/department/department.service */ "./src/app/modules/organization/department/department.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, department_service_1, success_modal_component_1, error_modal_component_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ManageDepartmentComponent = (function () {
        function ManageDepartmentComponent(route, departmentService, exatask) {
            this.route = route;
            this.departmentService = departmentService;
            this.exatask = exatask;
            this.data = new department_service_1.Department();
            this.error = '';
            this.exatask.setTitle('Manage Department');
            if (this.route.snapshot.params['id']) {
                this.data._id = this.route.snapshot.params['id'];
            }
        }
        ManageDepartmentComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.data._id) {
                this.departmentService.getDepartment(this.data._id)
                    .then(function (department) {
                    _this.data = department;
                    _this.exatask.setTitle('Manage Department : ' + _this.data.name);
                });
            }
            else {
                this.addNewDesignation();
            }
        };
        ManageDepartmentComponent.prototype.addNewDesignation = function () {
            this.data.designations.push('');
            this.data.designations = this.data.designations.slice();
        };
        ManageDepartmentComponent.prototype.removeDesignation = function (i) {
            this.data.designations.splice(i, 1);
        };
        ManageDepartmentComponent.prototype.postDepartment = function () {
            var _this = this;
            this.error = '';
            if (this.data._id && this.data._id.toString()) {
                this.departmentService.putDepartment(this.data).then(function (response) {
                    _this.successModal.show('/organization/department');
                }).catch(function (err) {
                    _this.error = err.error.message.text;
                    _this.errorModal.show();
                });
            }
            else {
                this.departmentService.postDepartment(this.data).then(function (response) {
                    _this.successModal.show('/organization/department');
                }).catch(function (err) {
                    _this.error = err.error.message.text;
                    _this.errorModal.show();
                });
            }
        };
        ManageDepartmentComponent.prototype.trackByIndex = function (index, value) {
            return index;
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ManageDepartmentComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ManageDepartmentComponent.prototype, "errorModal", void 0);
        ManageDepartmentComponent = __decorate([
            core_1.Component({
                selector: 'app-manage-department',
                template: __webpack_require__(/*! ./manage-department.component.html */ "./src/app/modules/organization/department/manage-department/manage-department.component.html"),
                providers: [department_service_1.DepartmentService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute,
                department_service_1.DepartmentService,
                exatask_service_1.ExaTask])
        ], ManageDepartmentComponent);
        return ManageDepartmentComponent;
    }());
    exports.ManageDepartmentComponent = ManageDepartmentComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=18.5b68ef69471b0a8b3a30.js.map