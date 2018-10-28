(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/modules/application.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/application.module.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js"), __webpack_require__(/*! ./application.routing */ "./src/app/modules/application.routing.ts"), __webpack_require__(/*! modules/core/dashboard/dashboard.component */ "./src/app/modules/core/dashboard/dashboard.component.ts"), __webpack_require__(/*! ./application-pipes.module */ "./src/app/modules/application-pipes.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, ngx_bootstrap_1, application_routing_1, dashboard_component_1, application_pipes_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApplicationModule = (function () {
        function ApplicationModule() {
        }
        ApplicationModule = __decorate([
            core_1.NgModule({
                imports: [
                    application_routing_1.ApplicationRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    ngx_bootstrap_1.CollapseModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    dashboard_component_1.DashboardComponent
                ],
                providers: []
            })
        ], ApplicationModule);
        return ApplicationModule;
    }());
    exports.ApplicationModule = ApplicationModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/application.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/application.routing.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! modules/core/dashboard/dashboard.component */ "./src/app/modules/core/dashboard/dashboard.component.ts"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, dashboard_component_1, authentication_service_1, authorization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: 'dashboard',
            canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
            component: dashboard_component_1.DashboardComponent,
            data: {
                title: 'Dashboard'
            }
        },
        {
            path: 'user',
            loadChildren: './user/user.module#UserModule'
        },
        {
            path: 'employee',
            loadChildren: './employee/employee.module#EmployeeModule'
        },
        {
            path: 'organization',
            loadChildren: './organization/organization.module#OrganizationModule'
        },
        {
            path: 'leave',
            loadChildren: './leave/leave.module#LeaveModule'
        },
        {
            path: 'work-from-home',
            loadChildren: './work-from-home/work-from-home.module#WorkFromHomeModule'
        },
        {
            path: 'access-control',
            loadChildren: './access-control/access-control.module#AccessControlModule'
        }
    ];
    var ApplicationRoutingModule = (function () {
        function ApplicationRoutingModule() {
        }
        ApplicationRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], ApplicationRoutingModule);
        return ApplicationRoutingModule;
    }());
    exports.ApplicationRoutingModule = ApplicationRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/core/dashboard/dashboard.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/dashboard/dashboard.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n\n    <div class=\"col-3\" *ngIf=\"totalEmployees > 0\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"callout callout-warning\">\n                <small class=\"text-muted\">Departments</small>\n                <br>\n                <strong class=\"h4\">{{totalDepartments}}</strong>\n              </div>\n            </div>\n            <div class=\"col-6\">\n              <div class=\"callout callout-success\">\n                <small class=\"text-muted\">Users</small>\n                <br>\n                <strong class=\"h4\">{{totalEmployees}}</strong>\n              </div>\n            </div>\n          </div>\n          <hr class=\"mt-0\">\n          <div class=\"progress-group\" *ngFor=\"let department of departments\">\n            <div class=\"progress-group-header align-items-end\">\n              <div>{{department.name}}</div>\n              <div class=\"ml-auto font-weight-bold mr-2\">{{department.count.employees}}</div>\n            </div>\n            <div class=\"progress-group-bars\">\n              <div class=\"progress progress-xs\">\n                <div class=\"progress-bar bg-success\" role=\"progressbar\" [ngStyle]=\"{width: department.count.employees / totalEmployees | percent}\" [attr.aria-valuenow]=\"department.count.employees / totalEmployees\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div><!--/.col-->\n\n    <div class=\"col-3\" *ngIf=\"leaves.length > 0\">\n\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"col-6\" *ngFor=\"let leave of leaves\">\n              <div class=\"callout callout-warning\">\n                <small class=\"text-muted\">{{leave.leave_type | constants: 'leave.type'}}</small>\n                <br>\n                <strong class=\"h4\">{{leave.leaves}}</strong>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div><!--/.row-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/modules/core/dashboard/dashboard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/dashboard/dashboard.component.ts ***!
  \***************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/organization/department/department.service */ "./src/app/modules/organization/department/department.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, department_service_1, profile_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DashboardComponent = (function () {
        function DashboardComponent(departmentService, profileService) {
            this.departmentService = departmentService;
            this.profileService = profileService;
            this.departments = [];
            this.leaves = [];
        }
        DashboardComponent.prototype.ngOnInit = function () {
            this.__getDepartments();
            this.__getLeaves();
        };
        DashboardComponent.prototype.__getDepartments = function () {
            var _this = this;
            this.totalEmployees = 0;
            this.departmentService.getDepartments().then(function (response) {
                if (response) {
                    _this.departments = response;
                    _this.totalDepartments = response.length;
                    _this.departments.forEach(function (department) {
                        _this.totalEmployees += department.count.employees;
                    });
                }
            });
        };
        DashboardComponent.prototype.__getLeaves = function () {
            var _this = this;
            this.profileService.getProfile('leaves').then(function (response) {
                if (response.leaves) {
                    _this.leaves = response.leaves;
                }
            });
        };
        DashboardComponent = __decorate([
            core_1.Component({
                selector: 'app-dashboard',
                template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/core/dashboard/dashboard.component.html"),
                providers: [
                    department_service_1.DepartmentService,
                    profile_service_1.ProfileService
                ]
            }),
            __metadata("design:paramtypes", [department_service_1.DepartmentService,
                profile_service_1.ProfileService])
        ], DashboardComponent);
        return DashboardComponent;
    }());
    exports.DashboardComponent = DashboardComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=4.22516c1f175562fd8150.js.map