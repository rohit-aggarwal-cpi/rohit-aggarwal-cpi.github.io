(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./src/app/modules/employee/employee-wfh-policy/employee-wfh-policy.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/employee/employee-wfh-policy/employee-wfh-policy.module.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./employee-wfh-policy.routing */ "./src/app/modules/employee/employee-wfh-policy/employee-wfh-policy.routing.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! modules/application-directives.module */ "./src/app/modules/application-directives.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, employee_wfh_policy_routing_1, application_components_module_1, application_pipes_module_1, application_directives_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeeWfhPolicyModule = (function () {
        function EmployeeWfhPolicyModule() {
        }
        EmployeeWfhPolicyModule = __decorate([
            core_1.NgModule({
                imports: [
                    employee_wfh_policy_routing_1.EmployeeWfhPolicyRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule,
                    application_directives_module_1.ApplicationDirectivesModule
                ],
                declarations: [],
                providers: []
            })
        ], EmployeeWfhPolicyModule);
        return EmployeeWfhPolicyModule;
    }());
    exports.EmployeeWfhPolicyModule = EmployeeWfhPolicyModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/employee-wfh-policy/employee-wfh-policy.routing.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/employee/employee-wfh-policy/employee-wfh-policy.routing.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Leave Policy'
            },
            children: []
        }
    ];
    var EmployeeWfhPolicyRoutingModule = (function () {
        function EmployeeWfhPolicyRoutingModule() {
        }
        EmployeeWfhPolicyRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], EmployeeWfhPolicyRoutingModule);
        return EmployeeWfhPolicyRoutingModule;
    }());
    exports.EmployeeWfhPolicyRoutingModule = EmployeeWfhPolicyRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=22.0a9ec0b7e5693f2485ff.js.map