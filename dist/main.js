(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-control/access-control.module": [
		"./src/app/modules/access-control/access-control.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~f90f94eb",
		"default~access-control-access-control-module~leave-leave-module~policy-leave-policy-module~user-user~46dc3552",
		"common",
		"access-control-access-control-module"
	],
	"./comp-off/comp-off.module": [
		"./src/app/modules/leave/comp-off/comp-off.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~f90f94eb",
		"common",
		"comp-off-comp-off-module"
	],
	"./department/department.module": [
		"./src/app/modules/organization/department/department.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~f90f94eb",
		"default~department-department-module~employee-employee-module~modules-application-module",
		"common",
		"department-department-module"
	],
	"./employee/employee.module": [
		"./src/app/modules/employee/employee.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~f90f94eb",
		"default~department-department-module~employee-employee-module~modules-application-module",
		"common",
		"employee-employee-module"
	],
	"./holiday/holiday.module": [
		"./src/app/modules/organization/holiday/holiday.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~f90f94eb",
		"common",
		"holiday-holiday-module"
	],
	"./leave/leave.module": [
		"./src/app/modules/leave/leave.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~f90f94eb",
		"default~access-control-access-control-module~leave-leave-module~policy-leave-policy-module~user-user~46dc3552",
		"common",
		"leave-leave-module"
	],
	"./modules/application.module": [
		"./src/app/modules/application.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"default~department-department-module~employee-employee-module~modules-application-module",
		"common",
		"modules-application-module"
	],
	"./organization/organization.module": [
		"./src/app/modules/organization/organization.module.ts",
		"organization-organization-module"
	],
	"./policy/leave-policy.module": [
		"./src/app/modules/leave/policy/leave-policy.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~f90f94eb",
		"default~access-control-access-control-module~leave-leave-module~policy-leave-policy-module~user-user~46dc3552",
		"common",
		"policy-leave-policy-module"
	],
	"./setting/setting.module": [
		"./src/app/modules/organization/setting/setting.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~f90f94eb",
		"common",
		"setting-setting-module"
	],
	"./user/user.module": [
		"./src/app/modules/user/user.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~f90f94eb",
		"default~access-control-access-control-module~leave-leave-module~policy-leave-policy-module~user-user~46dc3552",
		"common",
		"user-user-module"
	],
	"./work-from-home/work-from-home.module": [
		"./src/app/modules/work-from-home/work-from-home.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"common",
		"work-from-home-work-from-home-module"
	],
	"modules/work-from-home/policy/wfh-policy.module": [
		"./src/app/modules/work-from-home/policy/wfh-policy.module.ts",
		"default~access-control-access-control-module~comp-off-comp-off-module~department-department-module~e~5a147644",
		"common",
		"modules-work-from-home-policy-wfh-policy-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/analytics/google.service */ "./src/app/core/services/analytics/google.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, google_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppComponent = (function () {
        function AppComponent(router, analytics) {
            this.router = router;
            this.analytics = analytics;
        }
        AppComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.router.events.subscribe(function (event) {
                if (event instanceof router_1.NavigationEnd) {
                    window.scrollTo(0, 0);
                    _this.analytics.pageview(event.urlAfterRedirects);
                }
            });
        };
        AppComponent = __decorate([
            core_1.Component({
                selector: 'body',
                template: '<router-outlet></router-outlet>',
                providers: [google_service_1.Google]
            }),
            __metadata("design:paramtypes", [router_1.Router, google_service_1.Google])
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js"), __webpack_require__(/*! @coreui/angular */ "./node_modules/@coreui/angular/fesm5/coreui-angular.js"), __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js"), __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js"), __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js"), __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js"), __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js"), __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js"), __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts"), __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./layouts/full-layout.component */ "./src/app/layouts/full-layout.component.ts"), __webpack_require__(/*! modules/core/login/login.component */ "./src/app/modules/core/login/login.component.ts"), __webpack_require__(/*! modules/core/logout/logout.component */ "./src/app/modules/core/logout/logout.component.ts"), __webpack_require__(/*! modules/core/register/register.component */ "./src/app/modules/core/register/register.component.ts"), __webpack_require__(/*! modules/core/forgot-password/forgot-password.component */ "./src/app/modules/core/forgot-password/forgot-password.component.ts"), __webpack_require__(/*! modules/core/reset-password/reset-password.component */ "./src/app/modules/core/reset-password/reset-password.component.ts"), __webpack_require__(/*! modules/core/set-password/set-password.component */ "./src/app/modules/core/set-password/set-password.component.ts"), __webpack_require__(/*! ./core/404/404.component */ "./src/app/core/404/404.component.ts"), __webpack_require__(/*! ./core/500/500.component */ "./src/app/core/500/500.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, platform_browser_1, core_1, common_1, forms_1, http_1, ngx_perfect_scrollbar_1, angular_1, dropdown_1, tabs_1, datepicker_1, tooltip_1, ngx_treeview_1, ng_select_1, app_component_1, app_routing_1, profile_service_1, authentication_service_1, authorization_service_1, full_layout_component_1, login_component_1, logout_component_1, register_component_1, forgot_password_component_1, reset_password_component_1, set_password_component_1, _404_component_1, _500_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
    };
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            core_1.NgModule({
                imports: [
                    platform_browser_1.BrowserModule,
                    app_routing_1.AppRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    angular_1.AppAsideModule,
                    angular_1.AppBreadcrumbModule.forRoot(),
                    angular_1.AppFooterModule,
                    angular_1.AppHeaderModule,
                    angular_1.AppSidebarModule,
                    ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                    dropdown_1.BsDropdownModule.forRoot(),
                    tabs_1.TabsModule.forRoot(),
                    datepicker_1.BsDatepickerModule.forRoot(),
                    tooltip_1.TooltipModule.forRoot(),
                    ngx_treeview_1.TreeviewModule.forRoot(),
                    ng_select_1.NgSelectModule
                ],
                declarations: [
                    app_component_1.AppComponent,
                    full_layout_component_1.FullLayoutComponent,
                    login_component_1.LoginComponent,
                    logout_component_1.LogoutComponent,
                    register_component_1.RegisterComponent,
                    forgot_password_component_1.ForgotPasswordComponent,
                    reset_password_component_1.ResetPasswordComponent,
                    set_password_component_1.SetPasswordComponent,
                    _404_component_1.P404Component,
                    _500_component_1.P500Component
                ],
                providers: [
                    {
                        provide: common_1.LocationStrategy,
                        useClass: common_1.PathLocationStrategy,
                    },
                    {
                        provide: ngx_perfect_scrollbar_1.PERFECT_SCROLLBAR_CONFIG,
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    },
                    authentication_service_1.AuthenticationGuard,
                    authorization_service_1.AuthorizationGuard,
                    authorization_service_1.Authorization,
                    profile_service_1.ProfileService
                ],
                bootstrap: [app_component_1.AppComponent]
            })
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./layouts/full-layout.component */ "./src/app/layouts/full-layout.component.ts"), __webpack_require__(/*! modules/core/login/login.component */ "./src/app/modules/core/login/login.component.ts"), __webpack_require__(/*! modules/core/logout/logout.component */ "./src/app/modules/core/logout/logout.component.ts"), __webpack_require__(/*! modules/core/register/register.component */ "./src/app/modules/core/register/register.component.ts"), __webpack_require__(/*! modules/core/forgot-password/forgot-password.component */ "./src/app/modules/core/forgot-password/forgot-password.component.ts"), __webpack_require__(/*! modules/core/reset-password/reset-password.component */ "./src/app/modules/core/reset-password/reset-password.component.ts"), __webpack_require__(/*! modules/core/set-password/set-password.component */ "./src/app/modules/core/set-password/set-password.component.ts"), __webpack_require__(/*! ./core/404/404.component */ "./src/app/core/404/404.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, full_layout_component_1, login_component_1, logout_component_1, register_component_1, forgot_password_component_1, reset_password_component_1, set_password_component_1, _404_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.routes = [
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
        },
        {
            path: '',
            component: full_layout_component_1.FullLayoutComponent,
            data: {
                title: 'Home'
            },
            loadChildren: './modules/application.module#ApplicationModule'
        },
        {
            path: 'login',
            component: login_component_1.LoginComponent,
            data: {
                title: 'Login Page'
            }
        },
        {
            path: 'logout',
            component: logout_component_1.LogoutComponent,
            data: {
                title: 'Logged Out'
            }
        },
        {
            path: 'register',
            component: register_component_1.RegisterComponent,
            data: {
                title: 'Register Page'
            }
        },
        {
            path: 'forgotPassword',
            component: forgot_password_component_1.ForgotPasswordComponent,
            data: {
                title: 'Forgot Password'
            }
        },
        {
            path: 'resetPassword/:passKey',
            component: reset_password_component_1.ResetPasswordComponent,
            data: {
                title: 'Reset Password'
            }
        },
        {
            path: 'setPassword/:passKey',
            component: set_password_component_1.SetPasswordComponent,
            data: {
                title: 'Set Password'
            }
        },
        {
            path: '**',
            component: _404_component_1.P404Component,
            data: {
                title: 'Page 404'
            }
        }
    ];
    var AppRoutingModule = (function () {
        function AppRoutingModule() {
        }
        AppRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forRoot(exports.routes)],
                exports: [router_1.RouterModule]
            })
        ], AppRoutingModule);
        return AppRoutingModule;
    }());
    exports.AppRoutingModule = AppRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/404/404.component.html":
/*!*********************************************!*\
  !*** ./src/app/core/404/404.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <h1 class=\"float-left display-3 mr-4\">404</h1>\n        <h4 class=\"pt-3\">Oops! You're lost.</h4>\n        <p class=\"text-muted\">The page you are looking for was not found.</p>\n        <a class=\"btn btn-link pull-right\" (click)=\"navigateBack()\">Back</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/core/404/404.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/404/404.component.ts ***!
  \*******************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, common_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var P404Component = (function () {
        function P404Component(router, location) {
            this.router = router;
            this.location = location;
        }
        P404Component.prototype.navigateBack = function () {
            this.location.back();
            var url = this.location.path();
            this.router.navigateByUrl(url);
        };
        P404Component = __decorate([
            core_1.Component({
                selector: 'app-404',
                template: __webpack_require__(/*! ./404.component.html */ "./src/app/core/404/404.component.html")
            }),
            __metadata("design:paramtypes", [router_1.Router,
                common_1.Location])
        ], P404Component);
        return P404Component;
    }());
    exports.P404Component = P404Component;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/500/500.component.html":
/*!*********************************************!*\
  !*** ./src/app/core/500/500.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-2\">500</h1>\n          <h4 class=\"pt-1\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>  \n"

/***/ }),

/***/ "./src/app/core/500/500.component.ts":
/*!*******************************************!*\
  !*** ./src/app/core/500/500.component.ts ***!
  \*******************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var P500Component = (function () {
        function P500Component() {
        }
        P500Component = __decorate([
            core_1.Component({
                selector: 'app-500',
                template: __webpack_require__(/*! ./500.component.html */ "./src/app/core/500/500.component.html")
            }),
            __metadata("design:paramtypes", [])
        ], P500Component);
        return P500Component;
    }());
    exports.P500Component = P500Component;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/services/analytics/google.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/analytics/google.service.ts ***!
  \***********************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Google = (function () {
        function Google() {
            ga('create', environment_1.environment.google.analytics.trackingId, 'auto');
        }
        Google.prototype.pageview = function (url) {
            ga('set', 'page', url);
            ga('send', 'pageview');
        };
        Google.prototype.event = function (category, action, label, value) {
            if (label === void 0) { label = null; }
            if (value === void 0) { value = null; }
            ga('send', 'event', {
                eventCategory: category,
                eventAction: action,
                eventLabel: label,
                eventValue: value
            });
        };
        Google = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [])
        ], Google);
        return Google;
    }());
    exports.Google = Google;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ./app-http.service */ "./src/app/core/services/app-http.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, http_1, app_http_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Api = (function (_super) {
        __extends(Api, _super);
        function Api(http) {
            var _this = _super.call(this, http) || this;
            _this.http = http;
            return _this;
        }
        Api.prototype.__checkTokens = function () {
            if (this.headers.has('x-session-token') && this.headers.has('x-access-token')) {
                return;
            }
            if (localStorage.getItem('sessionToken') !== null) {
                this.headers = this.headers.delete('x-session-token');
                this.headers = this.headers.set('x-session-token', localStorage.getItem('sessionToken'));
            }
            if (sessionStorage.getItem('accessToken') !== null) {
                this.headers = this.headers.delete('x-acess-token');
                this.headers = this.headers.set('x-access-token', sessionStorage.getItem('accessToken'));
            }
        };
        Api.prototype.resetLocalStorage = function () {
            localStorage.removeItem('userId');
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('sessionToken');
        };
        Api.prototype.resetSessionStorage = function () {
            sessionStorage.removeItem('accessToken');
            sessionStorage.removeItem('accessTokenTime');
        };
        Api.prototype.get = function (url, query) {
            this.__checkTokens();
            return _super.prototype.get.call(this, url, query);
        };
        Api.prototype.put = function (url, data, query) {
            this.__checkTokens();
            return _super.prototype.put.call(this, url, data, query);
        };
        Api.prototype.patch = function (url, data, query) {
            this.__checkTokens();
            return _super.prototype.patch.call(this, url, data, query);
        };
        Api.prototype.post = function (url, data, query) {
            this.__checkTokens();
            return _super.prototype.post.call(this, url, data, query);
        };
        Api.prototype.delete = function (url, data, query) {
            this.__checkTokens();
            return _super.prototype.delete.call(this, url, data, query);
        };
        Api = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], Api);
        return Api;
    }(app_http_service_1.AppHttp));
    exports.Api = Api;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/services/app-http.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/app-http.service.ts ***!
  \***************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, http_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppHttp = (function () {
        function AppHttp(http) {
            this.http = http;
            this.http = http;
            this.headers = new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });
            if (localStorage.getItem('sessionToken') !== null) {
                this.headers = this.headers.delete('x-session-token');
                this.headers = this.headers.set('x-session-token', localStorage.getItem('sessionToken'));
            }
            if (sessionStorage.getItem('accessToken') !== null) {
                this.headers = this.headers.delete('x-access-token');
                this.headers = this.headers.set('x-access-token', sessionStorage.getItem('accessToken'));
            }
        }
        AppHttp.prototype.resetHeaders = function () {
            this.headers = this.headers.delete('x-session-token');
            this.headers = this.headers.delete('x-access-token');
        };
        AppHttp.prototype.prepareParameters = function (query) {
            var params = new http_1.HttpParams();
            if (typeof query === 'undefined') {
                return params;
            }
            query.forEach(function (value, key) {
                params = params.set(key, value);
            });
            return params;
        };
        AppHttp.prototype.handleError = function (error, url, data) {
            console.error('URL: ' + url);
            console.error('Data: ', data);
            console.error('Error: ', error);
            return Promise.reject(error);
        };
        AppHttp.prototype.get = function (url, query) {
            var _this = this;
            return this.http.get(environment_1.environment.apiServer + url, {
                headers: this.headers,
                params: this.prepareParameters(query)
            }).toPromise()
                .catch(function (error) { return _this.handleError(error, url, { query: query }); });
        };
        AppHttp.prototype.put = function (url, data, query) {
            var _this = this;
            return this.http.put(environment_1.environment.apiServer + url, data, {
                headers: this.headers,
                params: this.prepareParameters(query)
            }).toPromise()
                .catch(function (error) { return _this.handleError(error, url, { query: query, data: data }); });
        };
        AppHttp.prototype.post = function (url, data, query) {
            var _this = this;
            return this.http.post(environment_1.environment.apiServer + url, data, {
                headers: this.headers,
                params: this.prepareParameters(query)
            }).toPromise()
                .catch(function (error) { return _this.handleError(error, url, { query: query, data: data }); });
        };
        AppHttp.prototype.patch = function (url, data, query) {
            var _this = this;
            return this.http.request('patch', environment_1.environment.apiServer + url, {
                headers: this.headers,
                params: this.prepareParameters(query),
                body: data
            }).toPromise()
                .catch(function (error) { return _this.handleError(error, url, { query: query }); });
        };
        AppHttp.prototype.delete = function (url, data, query) {
            var _this = this;
            return this.http.request('delete', environment_1.environment.apiServer + url, {
                headers: this.headers,
                params: this.prepareParameters(query),
                body: data
            }).toPromise()
                .catch(function (error) { return _this.handleError(error, url, { query: query }); });
        };
        AppHttp = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], AppHttp);
        return AppHttp;
    }());
    exports.AppHttp = AppHttp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/services/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/authentication.service.ts ***!
  \*********************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, environment_1, profile_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthenticationGuard = (function () {
        function AuthenticationGuard(router, profileService) {
            this.router = router;
            this.profileService = profileService;
        }
        AuthenticationGuard.prototype.canActivate = function (route, state) {
            var _this = this;
            if (!localStorage.getItem('sessionToken')) {
                this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
                return false;
            }
            var stale_access_token_time = new Date();
            stale_access_token_time.setMinutes(stale_access_token_time.getMinutes() - environment_1.environment.accessTokenLifetime);
            var access_token_time = undefined;
            if (sessionStorage.getItem('accessTokenTime')) {
                access_token_time = new Date(sessionStorage.getItem('accessTokenTime'));
            }
            if (!sessionStorage.getItem('accessToken') || !access_token_time || access_token_time < stale_access_token_time) {
                return this.profileService.me()
                    .then(function () {
                    return true;
                })
                    .catch(function () {
                    _this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
                    return false;
                });
            }
            else {
                return true;
            }
        };
        AuthenticationGuard = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [router_1.Router, profile_service_1.ProfileService])
        ], AuthenticationGuard);
        return AuthenticationGuard;
    }());
    exports.AuthenticationGuard = AuthenticationGuard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/services/authorization.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/authorization.service.ts ***!
  \********************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! ./app-http.service */ "./src/app/core/services/app-http.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, http_1, app_http_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccessibleEntity = (function () {
        function AccessibleEntity() {
        }
        return AccessibleEntity;
    }());
    var Authorization = (function (_super) {
        __extends(Authorization, _super);
        function Authorization(http) {
            var _this = _super.call(this, http) || this;
            _this.http = http;
            _this._access_url = '/profile/access';
            _this.global_routes = [
                'dashboard'
            ];
            return _this;
        }
        Authorization_1 = Authorization;
        Authorization.resetAccess = function () {
            Authorization_1.profile_access = {};
        };
        Authorization.prototype._loadAccess = function () {
            if (Object.keys(Authorization_1.profile_access).length > 0) {
                return new Promise(function (resolve) { return resolve(true); });
            }
            this.resetHeaders();
            if (localStorage.getItem('sessionToken') !== null) {
                this.headers = this.headers.delete('x-session-token');
                this.headers = this.headers.set('x-session-token', localStorage.getItem('sessionToken'));
            }
            if (sessionStorage.getItem('accessToken') !== null) {
                this.headers = this.headers.delete('x-acess-token');
                this.headers = this.headers.set('x-access-token', sessionStorage.getItem('accessToken'));
            }
            return this.get(this._access_url)
                .then(function (response) {
                response = response.data;
                var profile_access = {};
                response.forEach(function (module) {
                    module.entities.forEach(function (entity) {
                        var _module = module.module.replace(' ', '_'), _entity = entity.entity.replace(' ', '_');
                        profile_access[_module + ':' + _entity] = [];
                        entity.actions.forEach(function (action) {
                            profile_access[_module + ':' + _entity].push(action);
                        });
                    });
                });
                Authorization_1.profile_access = profile_access;
                return true;
            });
        };
        Authorization.prototype.hasAccess = function (access, path) {
            var _this = this;
            if (Object.keys(Authorization_1.profile_access).length > 0) {
                if (path !== undefined && this.global_routes.indexOf(path) !== -1) {
                    return true;
                }
                else if (access === undefined || access.entity === undefined) {
                    return false;
                }
            }
            return this._loadAccess().then(function (response) {
                if (path !== undefined && _this.global_routes.indexOf(path) !== -1) {
                    return true;
                }
                else if (access === undefined || access.entity === undefined) {
                    return false;
                }
                else if (Authorization_1.profile_access[access.entity] === undefined) {
                    return false;
                }
                else if (access.action === undefined) {
                    return true;
                }
                else if (Authorization_1.profile_access[access.entity].indexOf(access.action) === -1) {
                    return false;
                }
                return true;
            });
        };
        var Authorization_1;
        Authorization.profile_access = {};
        Authorization = Authorization_1 = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], Authorization);
        return Authorization;
    }(app_http_service_1.AppHttp));
    exports.Authorization = Authorization;
    var AuthorizationGuard = (function () {
        function AuthorizationGuard(router, authorization) {
            this.router = router;
            this.authorization = authorization;
        }
        AuthorizationGuard.prototype.canActivate = function (route, state) {
            return this.authorization.hasAccess(route.data.access, route.routeConfig.path);
        };
        AuthorizationGuard = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [router_1.Router, Authorization])
        ], AuthorizationGuard);
        return AuthorizationGuard;
    }());
    exports.AuthorizationGuard = AuthorizationGuard;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/core/services/otp.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/otp.service.ts ***!
  \**********************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! core/services/app-http.service */ "./src/app/core/services/app-http.service.ts"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, app_http_service_1, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OtpService = (function (_super) {
        __extends(OtpService, _super);
        function OtpService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/otp/generate';
            return _this;
        }
        OtpService.prototype.sendOtp = function (type, data) {
            return this.post(this._base_url + '?type=' + type, data)
                .then(function (response) { return response; });
        };
        ;
        OtpService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], OtpService);
        return OtpService;
    }(app_http_service_1.AppHttp));
    exports.OtpService = OtpService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/layouts/full-layout.component.html":
/*!****************************************************!*\
  !*** ./src/app/layouts/full-layout.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [fixed]=\"true\"\n  [navbarBrandFull]=\"{src: '/assets/img/logo.png', width: 125, height: 25, alt: 'ExaTask'}\"\n  [navbarBrandMinimized]=\"{src: '/assets/img/favicon.png', width: 30, height: 25, alt: 'ExaTask'}\"\n  [sidebarToggler]=\"'lg'\"\n  [asideMenuToggler]=\"false\">\n\n  <ul class=\"nav navbar-nav ml-auto px-4\">\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle\n        (click)=\"false\">\n        <img src=\"/assets/img/user-ico.png\" class=\"img-avatar\" alt=\"contact@exatask.com\" />\n        <span class=\"hidden-md-down\">{{this.userName}}</span>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n        <!-- <div class=\"dropdown-header text-center\"><strong>Organization</strong></div>\n              <a class=\"dropdown-item\" [routerLink]=\"['/organization/profile']\"><i class=\"fa fa-user\"></i> Profile</a> -->\n\n        <div class=\"dropdown-header text-center\">\n          <strong>Account</strong>\n        </div>\n        <a class=\"dropdown-item\" [routerLink]=\"['/user/profile']\">\n          <i class=\"fa fa-user\"></i> Personal Profile\n        </a>\n        <a class=\"dropdown-item\" [routerLink]=\"['/user/change-password']\">\n          <i class=\"fa fa-lock\"></i> Change Password\n        </a>\n        <a class=\"dropdown-item\" (click)=\"logout()\">\n          <i class=\"fa fa-sign-out\"></i> Logout\n        </a>\n\n      </div>\n    </li>\n  </ul>\n\n</app-header>\n\n<div class=\"app-body\">\n\n  <app-sidebar [fixed]=\"true\" [display]=\"'lg'\">\n    <app-sidebar-nav [navItems]=\"navMenu\" [perfectScrollbar] [disabled]=\"sidebarMinimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n\n  <!-- Main content -->\n  <main class=\"main\">\n    <!-- Breadcrumb -->\n    <ol class=\"breadcrumb\">\n      <app-breadcrumb></app-breadcrumb>\n    </ol>\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- /.container-fluid -->\n  </main>\n\n</div>\n\n<app-footer>\n  <span class=\"ml-auto\">Copyright &copy; 2017 ExaTask. All Rights Reserved</span>\n</app-footer>\n"

/***/ }),

/***/ "./src/app/layouts/full-layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/full-layout.component.ts ***!
  \**************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! shared/helpers/utility */ "./src/app/shared/helpers/utility.ts"), __webpack_require__(/*! ./full-layout.navigation */ "./src/app/layouts/full-layout.navigation.ts"), __webpack_require__(/*! modules/user/user.service */ "./src/app/modules/user/user.service.ts"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, authorization_service_1, utility_1, full_layout_navigation_1, user_service_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FullLayoutComponent = (function () {
        function FullLayoutComponent(authorization, userService, router) {
            var _this = this;
            this.authorization = authorization;
            this.userService = userService;
            this.router = router;
            this.disabled = false;
            this.sidebarMinimized = true;
            this.element = document.body;
            this.logoutUrl = '/logout';
            this.userName = localStorage.getItem('userName');
            this.userEmail = localStorage.getItem('userEmail');
            this.changes = new MutationObserver(function (mutations) {
                _this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
            });
            this.changes.observe(this.element, {
                attributes: true
            });
        }
        FullLayoutComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var nav_menu, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            nav_menu = utility_1.default.copy(full_layout_navigation_1.NAV_MENU);
                            _a = this;
                            return [4, this._prepareNavigation(nav_menu)];
                        case 1:
                            _a.navMenu = _b.sent();
                            return [2];
                    }
                });
            });
        };
        FullLayoutComponent.prototype._prepareNavigation = function (nav_menu) {
            return __awaiter(this, void 0, void 0, function () {
                var hasAccess, children, accessMenu, _i, nav_menu_1, item;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accessMenu = [];
                            _i = 0, nav_menu_1 = nav_menu;
                            _a.label = 1;
                        case 1:
                            if (!(_i < nav_menu_1.length)) return [3, 6];
                            item = nav_menu_1[_i];
                            if (!(item.children === undefined)) return [3, 3];
                            return [4, this.authorization.hasAccess(item.access, item.url.substring(1))];
                        case 2:
                            hasAccess = _a.sent();
                            if (hasAccess) {
                                delete item.access;
                                accessMenu.push(item);
                            }
                            return [3, 5];
                        case 3: return [4, this._prepareNavigation(item.children)];
                        case 4:
                            children = _a.sent();
                            if (children.length > 0) {
                                item.children = children;
                                accessMenu.push(item);
                            }
                            _a.label = 5;
                        case 5:
                            _i++;
                            return [3, 1];
                        case 6: return [2, accessMenu];
                    }
                });
            });
        };
        FullLayoutComponent.prototype.logout = function () {
            this.userService.logout();
            this.router.navigateByUrl(this.logoutUrl);
        };
        FullLayoutComponent = __decorate([
            core_1.Component({
                selector: 'app-root',
                template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/layouts/full-layout.component.html"),
                providers: [authorization_service_1.Authorization, user_service_1.UserService]
            }),
            __metadata("design:paramtypes", [authorization_service_1.Authorization,
                user_service_1.UserService,
                router_1.Router])
        ], FullLayoutComponent);
        return FullLayoutComponent;
    }());
    exports.FullLayoutComponent = FullLayoutComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/layouts/full-layout.navigation.ts":
/*!***************************************************!*\
  !*** ./src/app/layouts/full-layout.navigation.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NAV_MENU = [
        {
            name: 'Dashboard',
            icon: 'fa fa-dashboard',
            url: '/dashboard'
        },
        {
            name: 'Employees',
            icon: 'fa fa-users',
            url: '/employee/list',
            access: {
                entity: 'employee:employee',
                action: 'find:get'
            }
        },
        {
            name: 'Access Control',
            icon: 'fa fa-universal-access',
            url: '/access-control/list',
            access: {
                entity: 'access_control:access_control',
                action: 'find:get'
            }
        },
        {
            name: 'Departments',
            icon: 'fa fa-home',
            url: '/organization/department/list',
            access: {
                entity: 'organization:department',
                action: 'find:get'
            }
        },
        {
            name: 'Holidays',
            icon: 'fa fa-calendar',
            url: '/organization/holiday/list',
            access: {
                entity: 'organization:holiday',
                action: 'find:get'
            }
        },
        {
            name: 'Leaves',
            icon: 'fa fa-cubes',
            url: '/leave',
            children: [
                {
                    name: 'Leaves',
                    icon: 'fa fa-gear',
                    url: '/leave/list',
                    access: {
                        entity: 'leave:leave',
                        action: 'find:get'
                    }
                },
                {
                    name: 'Comp-Offs',
                    icon: 'fa fa-gear',
                    url: '/leave/comp-off/list',
                    access: {
                        entity: 'leave:compensatory_off',
                        action: 'find:get'
                    }
                }
            ]
        },
        {
            name: 'Policies',
            icon: 'fa fa-gear',
            url: '/policy',
            children: [
                {
                    name: 'Leave',
                    icon: 'fa fa-gear',
                    url: '/leave/policy/list',
                    access: {
                        entity: 'leave:policy',
                        action: 'find:get'
                    }
                },
                {
                    name: 'Work from Home',
                    icon: 'fa fa-gear',
                    url: '/work-from-home/policy/list',
                    access: {
                        entity: 'wfh:policy',
                        action: 'find:get'
                    }
                }
            ]
        },
        {
            name: 'Settings',
            icon: 'fa fa-cogs',
            url: '/organization/setting',
            children: [
                {
                    name: 'Features',
                    icon: 'fa fa-star',
                    url: '/organization/setting/feature',
                    access: {
                        entity: 'organization:feature',
                        action: 'enable:put'
                    }
                }
            ]
        }
    ];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/core/forgot-password/forgot-password.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/core/forgot-password/forgot-password.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n\n                <h1>Forgot Password?</h1>\n                <p class=\"text-muted\">Reset your account's password</p>\n                <label class=\"text-danger\" [ngClass]=\"{'d-none': !error && success}\">{{error}}</label>\n\n                <div *ngIf=\"!success\">\n\n                  <div class=\"input-group mb-3\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fa fa-at\"></i>\n                      </span>\n                    </span>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"E-Mail ID\" [(ngModel)]=\"data.email_id\">\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-12\">\n                      <button type=\"button\" class=\"btn btn-block btn-success\" (click)=\"resetPassword()\">Reset Password</button>\n                    </div>\n                  </div>\n\n                  <div class=\"row mt-3\">\n                    <div class=\"col-12 text-right\">\n                      <a routerLink='/login'>Login into existing account</a>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div *ngIf=\"success\">\n                    <div class=\"row justify-content-md-center mt-4\">\n                      <div class=\"col-12\">\n                        <h4 class=\"align-items-center text-success\">Password reset instructions have been successfully sent to your registered E-Mail ID.</h4>\n                      </div>\n                    </div>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/core/forgot-password/forgot-password.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/core/forgot-password/forgot-password.component.ts ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/user/user.service */ "./src/app/modules/user/user.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, user_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ForgotPassword = (function () {
        function ForgotPassword() {
            this.email_id = '';
        }
        return ForgotPassword;
    }());
    var ForgotPasswordComponent = (function () {
        function ForgotPasswordComponent(userService) {
            this.userService = userService;
            this.data = new ForgotPassword();
            this.error = '';
            this.success = false;
        }
        ForgotPasswordComponent.prototype.resetPassword = function () {
            var _this = this;
            if (!this.data.email_id) {
                this.error = 'Please provide E-Mail ID for resetting password';
                return;
            }
            this.userService.forgotPassword(this.data.email_id)
                .then(function (response) {
                if (response.status === true) {
                    _this.success = true;
                }
                ;
            })
                .catch(function (err) {
                _this.error = err.error.message.text;
            });
        };
        ForgotPasswordComponent = __decorate([
            core_1.Component({
                selector: 'app-root',
                template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/modules/core/forgot-password/forgot-password.component.html"),
                providers: [user_service_1.UserService]
            }),
            __metadata("design:paramtypes", [user_service_1.UserService])
        ], ForgotPasswordComponent);
        return ForgotPasswordComponent;
    }());
    exports.ForgotPasswordComponent = ForgotPasswordComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/core/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n\n                <form #loginForm=\"ngForm\" (submit)=\"login()\">\n                  <h1>Login</h1>\n                  <p class=\"text-muted\">Sign In to your account</p>\n                  <label class=\"text-danger\" [ngClass]=\"{'d-none': !error}\">{{error}}</label>\n                  <div class=\"input-group mb-3\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fa fa-user\"></i>\n                      </span>\n                    </span>\n                    <input type=\"text\" name=\"email_id\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"data.email_id\">\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <span class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"fa fa-lock\"></i>\n                      </span>\n                    </span>\n                    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"data.password\">\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"submit\" class=\"btn btn-primary px-4\">Login</button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <a routerLink='/forgotPassword' class=\"btn btn-link px-0\">Forgot password?</a>\n                    </div>\n                  </div>\n                </form>\n\n              </div>\n            </div>\n            <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-block text-center\">\n                <div>\n                  <h2>Sign up</h2>\n                  <p>Create your organization's account</p>\n                  <a routerLink='/register' class=\"btn btn-primary active mt-3\">Register Now!</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/core/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/core/login/login.component.ts ***!
  \*******************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! modules/user/user.service */ "./src/app/modules/user/user.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, user_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Login = (function () {
        function Login() {
            this.email_id = '';
            this.password = '';
        }
        return Login;
    }());
    var LoginComponent = (function () {
        function LoginComponent(route, router, userService) {
            this.route = route;
            this.router = router;
            this.userService = userService;
            this.data = new Login();
            this.error = '';
        }
        LoginComponent.prototype.ngOnInit = function () {
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.error = '';
        };
        LoginComponent.prototype.login = function () {
            var _this = this;
            if (!this.data.email_id || this.data.email_id.length < 3) {
                this.error = 'Please enter a valid username';
                return;
            }
            else if (!this.data.password || this.data.password.length < 5) {
                this.error = 'Please enter a valid password';
                return;
            }
            this.error = '';
            this.userService.login(this.data.email_id, this.data.password)
                .then(function (data) {
                _this.router.navigateByUrl(_this.returnUrl);
            }).catch(function (err) {
                _this.error = err.error.message.text;
            });
        };
        LoginComponent = __decorate([
            core_1.Component({
                selector: 'app-root',
                template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/core/login/login.component.html"),
                providers: [user_service_1.UserService]
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute,
                router_1.Router,
                user_service_1.UserService])
        ], LoginComponent);
        return LoginComponent;
    }());
    exports.LoginComponent = LoginComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/core/logout/logout.component.html":
/*!***********************************************************!*\
  !*** ./src/app/modules/core/logout/logout.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <h1>Logged Out</h1>\n                <p class=\"text-muted\">You have been successfully logged out.</p>\n              </div>\n              <div class=\"card-footer text-right\">\n                <a routerLink='/login'>Login Again</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/core/logout/logout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/core/logout/logout.component.ts ***!
  \*********************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LogoutComponent = (function () {
        function LogoutComponent() {
            this.element = document.body;
            this.element.className = 'app';
        }
        LogoutComponent = __decorate([
            core_1.Component({
                selector: 'app-root',
                template: __webpack_require__(/*! ./logout.component.html */ "./src/app/modules/core/logout/logout.component.html"),
                providers: []
            }),
            __metadata("design:paramtypes", [])
        ], LogoutComponent);
        return LogoutComponent;
    }());
    exports.LogoutComponent = LogoutComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/core/register/register.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/register/register.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card mx-4\">\n            <div class=\"card-body p-4\">\n\n              <h1>Register</h1>\n\n              <div *ngIf=\"!success\">\n\n                <p class=\"text-muted\">Create your organization's account</p>\n\n                <div class=\"form-group\" *ngIf=\"error\">\n                  <div class=\"col-12 text-danger\">\n                    <p class=\"mb-0\">{{error}}</p>\n                    <ul class=\"mb-0\" *ngIf=\"invalidAttributes\">\n                      <li *ngFor=\"let attribute of invalid_attributes\">{{attribute}}</li>\n                    </ul>\n                  </div>\n                </div>\n\n                <div class=\"input-group mb-3\">\n                  <span class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-rocket\"></i></span>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Organization Name\" [(ngModel)]=\"data.name\">\n                </div>\n\n                <div class=\"input-group mb-3\">\n                  <span class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" [(ngModel)]=\"data.admin.name.first\">\n                </div>\n\n                <div class=\"input-group mb-3\">\n                  <span class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Middle Name\" [(ngModel)]=\"data.admin.name.middle\">\n                </div>\n\n                <div class=\"input-group mb-3\">\n                  <span class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"data.admin.name.last\">\n                </div>\n\n                <div class=\"input-group mb-3\">\n                  <span class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-at\"></i></span>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"E-Mail ID\" [(ngModel)]=\"data.admin.email_id\">\n                </div>\n\n                <div class=\"input-group mb-3\" *ngIf=\"otpSent\">\n                  <span class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"OTP\" [(ngModel)]=\"data.otp\">\n                </div>\n\n                <div class=\"row\" *ngIf=\"!otpSent\">\n                  <div class=\"offset-6 col-6\">\n                    <button type=\"button\" class=\"btn btn-block btn-primary\" (click)=\"sendOtp()\">Send OTP</button>\n                  </div>\n                </div>\n\n                <div class=\"row\" *ngIf=\"otpSent\">\n                  <div class=\"col-6\">\n                    <button type=\"button\" class=\"btn btn-block btn-link\" (click)=\"sendOtp()\">Re-Send OTP</button>\n                  </div>\n                  <div class=\"col-6\">\n                    <button type=\"button\" class=\"btn btn-block btn-success\" (click)=\"register()\">Create Account</button>\n                  </div>\n                </div>\n\n                <div class=\"row mt-3\">\n                  <div class=\"col-12 text-right\">\n                    <a routerLink='/login'>Login into existing account</a>\n                  </div>\n                </div>\n\n              </div>\n\n              <div *ngIf=\"success\">\n\n                <div class=\"row justify-content-md-center mt-5 mb-5\">\n                  <img height=\"150\" width=\"150\" src=\"assets/img/thumbs-up.png\">\n                </div>\n\n                <div class=\"row justify-content-md-center\">\n                  <h5 class=\"text-center text-success\">\n                    Registration done successfully.\n                    <br>Please check your mail for setting-up password to your ExaTask account.\n                  </h5>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/core/register/register.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/register/register.component.ts ***!
  \*************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/organization/organization.service */ "./src/app/modules/organization/organization.service.ts"), __webpack_require__(/*! core/services/otp.service */ "./src/app/core/services/otp.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, organization_service_1, otp_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ERROR_MAP = {
        'first': 'First Name',
        'middle': 'Middle Name',
        'last': 'Last Name',
        'email_id': 'E-Mail ID'
    };
    var Name = (function () {
        function Name() {
        }
        return Name;
    }());
    var Admin = (function () {
        function Admin() {
            this.name = new Name();
        }
        return Admin;
    }());
    var Register = (function () {
        function Register() {
            this.name = '';
            this.otp = '';
            this.admin = new Admin();
        }
        return Register;
    }());
    var RegisterComponent = (function () {
        function RegisterComponent(organizationService, otpService) {
            this.organizationService = organizationService;
            this.otpService = otpService;
            this.data = new Register();
            this.error = '';
            this.success = false;
            this.otpSent = false;
            this.invalidAttributes = [];
        }
        RegisterComponent.prototype.register = function () {
            var _this = this;
            this.error = '';
            this.invalidAttributes = [];
            this.organizationService.postOrg(this.data).then(function () {
                _this.success = true;
            }).catch(function (err) {
                _this.error = err.error.message.text;
                if (err.error.invalid_attributes) {
                    for (var key in err.error.invalid_attributes) {
                        if (err.error.invalid_attributes.hasOwnProperty(key)) {
                            _this.invalidAttributes.push(ERROR_MAP[key] ? ERROR_MAP[key] : err.error.invalid_attributes[key]);
                        }
                    }
                }
            });
        };
        RegisterComponent.prototype.sendOtp = function () {
            var _this = this;
            if (!this.data.admin.email_id) {
                this.error = 'Provide E-Mail ID before sending OTP';
                return;
            }
            this.error = '';
            this.otpService.sendOtp('organization', { email_id: this.data.admin.email_id })
                .then(function (response) {
                if (response.status === true) {
                    _this.otpSent = true;
                }
            });
        };
        RegisterComponent = __decorate([
            core_1.Component({
                selector: 'app-root',
                template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/core/register/register.component.html"),
                providers: [otp_service_1.OtpService, organization_service_1.OrganizationService]
            }),
            __metadata("design:paramtypes", [organization_service_1.OrganizationService,
                otp_service_1.OtpService])
        ], RegisterComponent);
        return RegisterComponent;
    }());
    exports.RegisterComponent = RegisterComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/core/reset-password/reset-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/core/reset-password/reset-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n\n                <h1>Reset Password</h1>\n                <p class=\"text-muted\">&nbsp;</p>\n                <label class=\"text-danger\" [ngClass]=\"{'d-none': !error && success}\">{{error}}</label>\n\n                <div *ngIf=\"!success\">\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-4 col-form-label\" for=\"new-password\">New Password</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control\" id=\"new-password\" name=\"new_password\" type=\"password\" [ngModel]=\"data.password\" (ngModelChange)=\"onPasswordChange($event)\">\n                    </div>\n\n                    <div class=\"offset-4 col-8\" *ngIf=\"passwordError\">\n                      <label class=\"text-danger\">Password should be of minimum 8 characters with atleast 1 number and 1 special character.</label>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-4 col-form-label\" for=\"retype-password\">Retype Password</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control\" id=\"retype-password\" name=\"retype_password\" type=\"password\" [ngModel]=\"data.verifyPassword\" (ngModelChange)=\"onVerifyPasswordChange($event)\">\n                    </div>\n\n                    <div class=\"offset-4 col-8\" *ngIf=\"verifyPasswordError\">\n                      <label class=\"text-danger\">Passwords don't match.</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-12\">\n                      <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"resetPassword()\" [disabled]=\"passwordError || verifyPasswordError\">Set Password</button>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div *ngIf=\"success\">\n\n                  <div class=\"row justify-content-md-center\">\n                    <h3 class=\"align-items-center text-success\">Password reset successfully.</h3>\n                  </div>\n\n                  <div class=\"row justify-content-md-center\">\n                    <h5 class=\"align-items-center\">You'll now be redirected...</h5>\n                  </div>\n\n                  <div class=\"row justify-content-md-center\">\n                    <img class=\"align middle\" src=\"assets/img/loading.gif\">\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/core/reset-password/reset-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/core/reset-password/reset-password.component.ts ***!
  \*************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! modules/user/user.service */ "./src/app/modules/user/user.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, user_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResetPassword = (function () {
        function ResetPassword() {
            this.password = '';
            this.verifyPassword = '';
            this.resetPasswordKey = '';
        }
        return ResetPassword;
    }());
    var ResetPasswordComponent = (function () {
        function ResetPasswordComponent(route, router, userService) {
            this.route = route;
            this.router = router;
            this.userService = userService;
            this.data = new ResetPassword();
            this.passwordError = false;
            this.verifyPasswordError = false;
            this.error = '';
            this.success = false;
            this.data.resetPasswordKey = this.route.snapshot.params['passKey'];
        }
        ResetPasswordComponent.prototype.onPasswordChange = function (value) {
            this.data.password = value;
            this.passwordError = !this.validatePassword(this.data.password);
        };
        ResetPasswordComponent.prototype.onVerifyPasswordChange = function (value) {
            this.data.verifyPassword = value;
            this.verifyPasswordError = (this.data.password !== this.data.verifyPassword);
        };
        ResetPasswordComponent.prototype.resetPassword = function () {
            var _this = this;
            this.userService.resetPassword(this.data.resetPasswordKey, this.data.password)
                .then(function (a) {
                _this.success = true;
                setTimeout(function () {
                    _this.router.navigateByUrl('/login');
                }, 4000);
            })
                .catch(function (err) {
                _this.error = 'Some error occurred while setting password.\n' + err.error.message.text;
            });
        };
        ResetPasswordComponent.prototype.validatePassword = function (password) {
            var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[.,_()@*&^%$#!?~:;<>\[\]\-])[a-zA-Z\d.,_()@*&^%$#!?~:;<>\[\]\-]*$/;
            return password.length >= 8 && passwordRegex.test(password);
        };
        ResetPasswordComponent = __decorate([
            core_1.Component({
                selector: 'app-root',
                template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/modules/core/reset-password/reset-password.component.html"),
                providers: [user_service_1.UserService]
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute,
                router_1.Router,
                user_service_1.UserService])
        ], ResetPasswordComponent);
        return ResetPasswordComponent;
    }());
    exports.ResetPasswordComponent = ResetPasswordComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/core/set-password/set-password.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/set-password/set-password.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n\n                <h1>Set Password</h1>\n                <p class=\"text-muted\">&nbsp;</p>\n                <label class=\"text-danger\" [ngClass]=\"{'d-none': !error && success}\">{{error}}</label>\n\n                <div *ngIf=\"!success\">\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-4 col-form-label\" for=\"password\">Password</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control\" id=\"password\" name=\"password\" type=\"password\" [ngModel]=\"data.password\" (ngModelChange)=\"onPasswordChange($event)\">\n                    </div>\n\n                    <div class=\"offset-4 col-8\" *ngIf=\"passwordError\">\n                      <label class=\"text-danger\">Password should be of minimum 8 characters with atleast 1 number and 1 special character.</label>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group row\">\n                    <label class=\"col-4 col-form-label\" for=\"verify-password\">Verify Password</label>\n                    <div class=\"col-8\">\n                      <input class=\"form-control\" id=\"verify-password\" name=\"verify_password\" type=\"password\" [ngModel]=\"data.verifyPassword\" (ngModelChange)=\"onVerifyPasswordChange($event)\">\n                    </div>\n\n                    <div class=\"offset-4 col-8\" *ngIf=\"verifyPasswordError\">\n                      <label class=\"text-danger\">Passwords don't match.</label>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-12\">\n                      <button type=\"button\" class=\"btn btn-success float-right\" (click)=\"setPassword()\" [disabled]=\"passwordError || verifyPasswordError\">Set Password</button>\n                    </div>\n                  </div>\n\n                </div>\n\n                <div *ngIf=\"success\">\n\n                  <div class=\"row justify-content-md-center\">\n                    <h3 class=\"align-items-center text-success\">Password set successfully.</h3>\n                  </div>\n\n                  <div class=\"row justify-content-md-center\">\n                    <h5 class=\"align-items-center\">You'll now be redirected...</h5>\n                  </div>\n\n                  <div class=\"row justify-content-md-center\">\n                    <img class=\"align middle\" src=\"assets/img/loading.gif\">\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/core/set-password/set-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/set-password/set-password.component.ts ***!
  \*********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! modules/user/user.service */ "./src/app/modules/user/user.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, user_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SetPassword = (function () {
        function SetPassword() {
            this.password = '';
            this.verifyPassword = '';
            this.setPasswordKey = '';
        }
        return SetPassword;
    }());
    var SetPasswordComponent = (function () {
        function SetPasswordComponent(route, router, userService) {
            this.route = route;
            this.router = router;
            this.userService = userService;
            this.data = new SetPassword();
            this.error = '';
            this.success = false;
            this.passwordError = false;
            this.verifyPasswordError = false;
            this.data.setPasswordKey = this.route.snapshot.params['passKey'];
        }
        SetPasswordComponent.prototype.onPasswordChange = function (value) {
            this.data.password = value;
            this.passwordError = !this.validatePassword(this.data.password);
        };
        SetPasswordComponent.prototype.onVerifyPasswordChange = function (value) {
            this.data.verifyPassword = value;
            this.verifyPasswordError = (this.data.password !== this.data.verifyPassword);
        };
        SetPasswordComponent.prototype.setPassword = function () {
            var _this = this;
            this.userService.setPassword(this.data.setPasswordKey, this.data.password)
                .then(function (a) {
                _this.success = true;
                setTimeout(function () {
                    _this.router.navigateByUrl('/login');
                }, 5000);
            })
                .catch(function (err) {
                _this.error = 'Some error occurred while setting password.\n' + err.error.message.text;
            });
        };
        SetPasswordComponent.prototype.validatePassword = function (password) {
            var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[.,_()@*&^%$#!?~:;<>\[\]\-])[a-zA-Z\d.,_()@*&^%$#!?~:;<>\[\]\-]*$/;
            return password.length >= 8 && passwordRegex.test(password);
        };
        SetPasswordComponent = __decorate([
            core_1.Component({
                selector: 'app-root',
                template: __webpack_require__(/*! ./set-password.component.html */ "./src/app/modules/core/set-password/set-password.component.html"),
                providers: [user_service_1.UserService]
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute,
                router_1.Router,
                user_service_1.UserService])
        ], SetPasswordComponent);
        return SetPasswordComponent;
    }());
    exports.SetPasswordComponent = SetPasswordComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/organization.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/organization/organization.service.ts ***!
  \**************************************************************/
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
    var OrganizationService = (function (_super) {
        __extends(OrganizationService, _super);
        function OrganizationService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/organizations';
            return _this;
        }
        OrganizationService.prototype.postOrg = function (organization) {
            return this.post(this._base_url, organization)
                .then(function (response) { return response; });
        };
        ;
        OrganizationService.prototype.getDetails = function () {
            return this.get(this._base_url)
                .then(function (response) { return response; });
        };
        OrganizationService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], OrganizationService);
        return OrganizationService;
    }(api_service_1.Api));
    exports.OrganizationService = OrganizationService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/user/profile/profile.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/user/profile/profile.service.ts ***!
  \*********************************************************/
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
    var Name = (function () {
        function Name() {
            this.first = '';
            this.last = '';
        }
        Name.getFullName = function (name) {
            var fullName = name.first;
            if (name.middle) {
                fullName += ' ' + name.middle;
            }
            fullName += ' ' + name.last;
            return fullName;
        };
        Name.prototype.name = function () {
            return this.first + ' ' + this.last;
        };
        Name.prototype.fullName = function () {
            return Name.getFullName(this);
        };
        return Name;
    }());
    exports.Name = Name;
    var Address = (function () {
        function Address() {
            this.address = '';
            this.locality = '';
            this.landmark = '';
            this.postcode = '';
            this.city = '';
            this.state = '';
            this.state_code = '';
            this.country = '';
            this.country_code = '';
        }
        return Address;
    }());
    exports.Address = Address;
    var EmergencyContact = (function () {
        function EmergencyContact() {
            this.name = '';
            this.relation = '';
            this.isd_code = '';
            this.contact_number = '';
        }
        return EmergencyContact;
    }());
    exports.EmergencyContact = EmergencyContact;
    var ContactNumber = (function () {
        function ContactNumber() {
            this.isd_code = '';
            this.contact_number = '';
        }
        return ContactNumber;
    }());
    exports.ContactNumber = ContactNumber;
    var SocialSecurity = (function () {
        function SocialSecurity() {
            this.type = '';
            this.number = '';
            this.file = '';
            this.verified = false;
        }
        return SocialSecurity;
    }());
    exports.SocialSecurity = SocialSecurity;
    var Qualification = (function () {
        function Qualification() {
            this.degree_id = '';
            this.institution_id = '';
            this.degree = '';
            this.level = '';
            this.specialization = '';
            this.institution = '';
            this.university = '';
            this.passing_year = 0;
            this.marks = 0;
        }
        return Qualification;
    }());
    exports.Qualification = Qualification;
    var Leave = (function () {
        function Leave() {
        }
        return Leave;
    }());
    exports.Leave = Leave;
    var Profile = (function () {
        function Profile() {
            this.id = '';
            this.name = new Name();
            this.email_id = '';
            this.contact_number = '';
            this.isd_code = '';
            this.date_of_birth = '';
            this.gender = '';
            this.gender_id = 0;
            this.permanent_address = new Address();
            this.alternate_email_ids = new Array();
            this.alternate_contact_numbers = new Array();
            this.marital_status = '';
            this.marital_status_id = 0;
            this.social_security = new Array();
            this.correspondence_address = new Address();
            this.qualification = new Array();
            this.emergency_contacts = new Array();
            this.leaves = new Array();
        }
        return Profile;
    }());
    exports.Profile = Profile;
    ;
    var ProfileService = (function (_super) {
        __extends(ProfileService, _super);
        function ProfileService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/profile';
            return _this;
        }
        ProfileService.prototype.me = function () {
            this.resetSessionStorage();
            this.resetHeaders();
            return this.get(this._base_url + '/me')
                .then(function (response) {
                var data = response['data'];
                sessionStorage.setItem('accessToken', data.access_token);
                sessionStorage.setItem('accessTokenTime', new Date().toString());
                return data;
            });
        };
        ProfileService.prototype.access = function () {
            return this.get(this._base_url + '/access')
                .then(function (response) { return response['data']; });
        };
        ProfileService.prototype.getProfile = function (details) {
            var query = new Map();
            query.set('details', details);
            return this.get(this._base_url, query)
                .then(function (response) { return response; });
        };
        ProfileService.prototype.updateProfile = function (profile) {
            return this.put(this._base_url, profile)
                .then(function (response) { return response; });
        };
        ProfileService.prototype.changePassword = function (password) {
            return this.put(this._base_url + '/changePassword', password)
                .then(function (response) { return response; });
        };
        ProfileService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], ProfileService);
        return ProfileService;
    }(api_service_1.Api));
    exports.ProfileService = ProfileService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/user/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/user/user.service.ts ***!
  \**********************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! core/services/api.service */ "./src/app/core/services/api.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, http_1, api_service_1, authorization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserService = (function (_super) {
        __extends(UserService, _super);
        function UserService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/users';
            return _this;
        }
        UserService.prototype.login = function (email_id, password) {
            var _this = this;
            this.resetLocalStorage();
            this.resetSessionStorage();
            var data = {
                'email_id': email_id,
                'password': password
            };
            return this.post(this._base_url + '/login', data)
                .then(function (result) {
                result = result['data'];
                localStorage.setItem('userId', result.user_id);
                localStorage.setItem('userName', result.name);
                localStorage.setItem('userEmail', result.email_id);
                localStorage.setItem('sessionToken', result.session_token);
                _this.resetHeaders();
                return data;
            });
        };
        UserService.prototype.logout = function () {
            this.resetLocalStorage();
            this.resetSessionStorage();
            authorization_service_1.Authorization.resetAccess();
            this.resetHeaders();
        };
        UserService.prototype.forgotPassword = function (email_id) {
            return this.get(this._base_url + '/resetPassword?email_id=' + email_id)
                .then(function (response) { return response; });
        };
        UserService.prototype.resetPassword = function (resetPasswordKey, password) {
            var data = {
                'reset_password_key': resetPasswordKey,
                'password': password
            };
            return this.put(this._base_url + '/resetPassword', data)
                .then(function (response) { return response['data']; });
        };
        UserService.prototype.setPassword = function (setPasswordKey, password) {
            var data = {
                'set_password_key': setPasswordKey,
                'password': password
            };
            return this.post(this._base_url + '/setPassword', data)
                .then(function (response) { return response['data']; });
        };
        UserService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], UserService);
        return UserService;
    }(api_service_1.Api));
    exports.UserService = UserService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/shared/helpers/utility.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/helpers/utility.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! deep-diff */ "./node_modules/deep-diff/index.js"), __webpack_require__(/*! clone */ "./node_modules/clone/clone.js"), __webpack_require__(/*! has-value */ "./node_modules/has-value/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, diff, clone, has) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utility = (function () {
        function Utility() {
        }
        Utility.compare = function (base, data) {
            return diff(base, data);
        };
        Utility.copy = function (source) {
            return clone(source);
        };
        Utility.empty = function (source) {
            return !has(source);
        };
        return Utility;
    }());
    exports.default = Utility;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.environment = {
        production: false,
        apiServer: 'http://localhost:8002',
        accessTokenLifetime: 5,
        google: {
            analytics: {
                trackingId: 'UA-100830185-1'
            }
        }
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js"), __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts"), __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, platform_browser_dynamic_1, app_module_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/lib/jenkins/workspace/api-exatask-develop/app.exatask/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map