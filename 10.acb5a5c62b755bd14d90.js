(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/app/config/locales/en.json":
/*!****************************************!*\
  !*** ./src/app/config/locales/en.json ***!
  \****************************************/
/*! exports provided: access_control, addon, compensatory_off, entity, feedback, leave, leave_policy, metadata, organization, department, holiday, user, wfh_policy, wfh, default */
/***/ (function(module) {

module.exports = {"access_control":{"status":{"0":"Inactive","1":"Active"},"type":{"1":"Locked Entity","2":"Custom","3":"Locked User"},"operation":{"1":"Create","2":"Update"}},"addon":{"price":{"1":"Monthly","2":"Quaterly","3":"Half-Yearly","4":"Yearly","5":"One-Time"},"currency":{"INR":"INR"},"type":{"1":"Employee","2":"Module"},"status":{"0":"Inactive","1":"Active"}},"compensatory_off":{"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"},"expiry":{"1":"Never","2":"End of Leave Policy","3":"After Month(s)","4":"After Day(s)"}},"entity":{"type":{"1":"Core","2":"Addon","3":"Private"},"status":{"0":"Inactive","1":"Active"},"access":{"1":"Public","2":"Private","3":"Unrestricted","4":"Exclusive"}},"feedback":{"status":{"0":"Inactive","1":"Active"},"operation":{"1":"Create"}},"leave":{"type":{"EL":"Earned Leave","CL":"Casual Leave","SL":"Sick Leave","ML":"Maternity Leave","PL":"Paternity Leave","LWP":"Leave without Pay","COMP":"Compensatory-Off"},"duration":{"1":"Full-Day","2":"First-Half","3":"Second-Half"},"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"},"operation":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"}},"leave_policy":{"status":{"0":"Inactive","1":"Active","2":"Scheduled","3":"Expired"},"operation":{"1":"Create","2":"Activate","3":"Expire"},"allocation":{"1":"One-Time","2":"Quarterly","3":"Monthly","4":"On-Demand"}},"metadata":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"level":{"1":"High School","2":"Graduate","3":"Post-Graduate","4":"Doctorate","5":"Diploma"}},"organization":{"status":{"0":"Inactive","1":"Active","2":"Pending"},"operation":{"1":"Create","2":"Confirm","3":"Update"}},"department":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"operation":{"1":"Create","2":"Update"}},"holiday":{"operation":{"1":"Create","2":"Update"}},"user":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"gender":{"1":"Male","2":"Female","3":"Other"},"marital_status":{"1":"Unmarried","2":"Married"},"operation":{"1":"Create","2":"Set Password","3":"Reset Password","4":"Change Password","5":"Update","6":"Assign Leaves"},"social_security":{"pan":"PAN Card","aadhaar":"Aadhaar Card","passport":"Passport"},"calendar_date":{"1":"Leave"}},"wfh_policy":{"allocation":{"1":"No Limit","2":"Weekly","3":"Monthly"},"status":{"0":"Inactive","1":"Active","2":"Discontinued"},"operation":{"1":"Create","2":"Discontinue"}},"wfh":{"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"},"operation":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"}}};

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

/***/ "./src/app/modules/organization/setting/manage-feature/manage-feature.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/organization/setting/manage-feature/manage-feature.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n\n  <div class=\"row\">\n    <div class=\"col-6\" *ngFor=\"let feature of featureList\">\n\n      <div class=\"card\">\n\n        <div class=\"card-header\">\n          <h2 class=\"pull-left\">{{feature.name}}</h2>\n          <div class=\"card-header-actions\">\n            <button type=\"button\" *ngIf=\"feature.enabled\" class=\"btn btn-danger\" (click)=\"disableFeature(feature.entity_ids, feature.name)\" [disabled]=\"loading[feature.name]\">\n              <span class=\"fa fa-spinner\" [ngClass]=\"{'fa-spin': loading[feature.name]}\" *ngIf=\"loading[feature.name]\"></span>\n              &nbsp;Disable\n            </button>\n            <button type=\"button\" *ngIf=\"!feature.enabled\" class=\"btn btn-success\" (click)=\"enableFeature(feature.entity_ids, feature.name)\" [disabled]=\"loading[feature.name]\">\n              <span class=\"fa fa-spinner\" [ngClass]=\"{'fa-spin': loading[feature.name]}\" *ngIf=\"loading[feature.name]\"></span>\n              &nbsp;Enable\n            </button>\n          </div>\n        </div>\n\n        <div class=\"card-body\">\n\n          <dl *ngFor=\"let module of feature.modules\">\n            <dt>{{module.name}}</dt>\n\n            <ul>\n              <li *ngFor=\"let entity of module.entities\">\n                {{entity.name}}\n\n                <ul>\n                  <li *ngFor=\"let action of entity.actions\">{{action}}</li>\n                </ul>\n\n              </li>\n            </ul>\n\n          </dl>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <content>{{message}}</content>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <content>{{message}}</content>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/organization/setting/manage-feature/manage-feature.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/organization/setting/manage-feature/manage-feature.component.ts ***!
  \*****************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/organization/setting/setting.service */ "./src/app/modules/organization/setting/setting.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/access-control/access-control.service */ "./src/app/modules/access-control/access-control.service.ts"), __webpack_require__(/*! modules/organization/organization.service */ "./src/app/modules/organization/organization.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, setting_service_1, success_modal_component_1, error_modal_component_1, access_control_service_1, organization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Module = (function () {
        function Module() {
            this.entities = [];
        }
        return Module;
    }());
    var Entity = (function () {
        function Entity() {
            this.actions = [];
        }
        return Entity;
    }());
    var Feature = (function () {
        function Feature() {
            this.entity_ids = [];
            this.modules = [];
            this.enabled = false;
        }
        return Feature;
    }());
    var ManageFeatureComponent = (function () {
        function ManageFeatureComponent(settingService, accessControlService, organizationService) {
            this.settingService = settingService;
            this.accessControlService = accessControlService;
            this.organizationService = organizationService;
            this.message = '';
            this.featureList = new Array();
            this.loading = [];
        }
        ManageFeatureComponent.prototype.ngOnInit = function () {
            this.__loadEntities();
        };
        ManageFeatureComponent.prototype.__getIndex = function (list, value, key) {
            var index = -1;
            for (var i in list) {
                if (list[i][key] === value) {
                    index = parseInt(i, 10);
                    break;
                }
            }
            return index;
        };
        ManageFeatureComponent.prototype.__loadEntities = function () {
            var _this = this;
            this.accessControlService.getFeatureEntities()
                .then(function (response) {
                var i, j;
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var row = response_1[_i];
                    i = _this.__getIndex(_this.featureList, row.feature, 'name');
                    if (i === -1) {
                        var feature = new Feature();
                        feature.name = row.feature;
                        _this.loading[feature.name] = false;
                        _this.featureList.push(feature);
                        i = _this.featureList.length - 1;
                    }
                    _this.featureList[i].entity_ids.push(row._id.toString());
                    j = _this.__getIndex(_this.featureList[i].modules, row.module, 'name');
                    if (j === -1) {
                        var module_1 = new Module();
                        module_1.name = row.module;
                        _this.featureList[i].modules.push(module_1);
                        j = _this.featureList[i].modules.length - 1;
                    }
                    var entity = new Entity();
                    entity.name = row.entity;
                    for (var _a = 0, _b = row.actions; _a < _b.length; _a++) {
                        var action = _b[_a];
                        entity.actions.push(action.title);
                    }
                    _this.featureList[i].modules[j].entities.push(entity);
                }
                _this.__loadOrganization();
            }).catch(function (err) {
                _this.message = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageFeatureComponent.prototype.__loadOrganization = function () {
            var _this = this;
            this.organizationService.getDetails()
                .then(function (response) {
                if (!response.features || !Array.isArray(response.features)) {
                    return;
                }
                var organization_features = response.features;
                for (var _i = 0, _a = _this.featureList; _i < _a.length; _i++) {
                    var feature = _a[_i];
                    for (var _b = 0, _c = feature.entity_ids; _b < _c.length; _b++) {
                        var entity_id = _c[_b];
                        if (organization_features.indexOf(entity_id) !== -1) {
                            feature.enabled = true;
                        }
                    }
                }
            }).catch(function (err) {
                _this.message = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageFeatureComponent.prototype.disableFeature = function (entity_ids, name) {
            var _this = this;
            this.loading[name] = true;
            this.settingService.disableFeatures(entity_ids)
                .then(function (response) {
                _this.loading[name] = false;
                var index = _this.__getIndex(_this.featureList, name, 'name');
                _this.featureList[index].enabled = false;
                _this.message = response.message.text;
                _this.successModal.show();
            }).catch(function (err) {
                _this.loading[name] = false;
                _this.message = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageFeatureComponent.prototype.enableFeature = function (entity_ids, name) {
            var _this = this;
            this.loading[name] = true;
            this.settingService.enableFeatures(entity_ids)
                .then(function (response) {
                _this.loading[name] = false;
                var index = _this.__getIndex(_this.featureList, name, 'name');
                _this.featureList[index].enabled = true;
                _this.message = response.message.text;
                _this.successModal.show();
            }).catch(function (err) {
                _this.loading[name] = false;
                _this.message = err.error.message.text;
                _this.errorModal.show();
            });
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ManageFeatureComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ManageFeatureComponent.prototype, "errorModal", void 0);
        ManageFeatureComponent = __decorate([
            core_1.Component({
                selector: 'app-manage-feature',
                template: __webpack_require__(/*! ./manage-feature.component.html */ "./src/app/modules/organization/setting/manage-feature/manage-feature.component.html"),
                providers: [setting_service_1.SettingService, access_control_service_1.AccessControlService, organization_service_1.OrganizationService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [setting_service_1.SettingService,
                access_control_service_1.AccessControlService,
                organization_service_1.OrganizationService])
        ], ManageFeatureComponent);
        return ManageFeatureComponent;
    }());
    exports.ManageFeatureComponent = ManageFeatureComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/setting/setting.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/organization/setting/setting.module.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./setting.routing */ "./src/app/modules/organization/setting/setting.routing.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! ./manage-feature/manage-feature.component */ "./src/app/modules/organization/setting/manage-feature/manage-feature.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, setting_routing_1, application_components_module_1, application_pipes_module_1, manage_feature_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SettingModule = (function () {
        function SettingModule() {
        }
        SettingModule = __decorate([
            core_1.NgModule({
                imports: [
                    setting_routing_1.SettingRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    manage_feature_component_1.ManageFeatureComponent
                ],
                providers: []
            })
        ], SettingModule);
        return SettingModule;
    }());
    exports.SettingModule = SettingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/setting/setting.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/organization/setting/setting.routing.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./manage-feature/manage-feature.component */ "./src/app/modules/organization/setting/manage-feature/manage-feature.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, manage_feature_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Setting'
            },
            children: [
                {
                    path: '',
                    redirectTo: 'dashboard'
                },
                {
                    path: 'feature',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Feature',
                        access: {
                            entity: 'organization:feature',
                            action: 'enable:put'
                        }
                    },
                    component: manage_feature_component_1.ManageFeatureComponent
                }
            ]
        }
    ];
    var SettingRoutingModule = (function () {
        function SettingRoutingModule() {
        }
        SettingRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], SettingRoutingModule);
        return SettingRoutingModule;
    }());
    exports.SettingRoutingModule = SettingRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/setting/setting.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/organization/setting/setting.service.ts ***!
  \*****************************************************************/
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
    var SettingService = (function (_super) {
        __extends(SettingService, _super);
        function SettingService(http) {
            var _this = _super.call(this, http) || this;
            _this._feature_base_url = '/organizations/features';
            return _this;
        }
        SettingService.prototype.enableFeatures = function (feature_ids) {
            return this.put(this._feature_base_url + '/enable', { 'features': feature_ids })
                .then(function (response) { return response; });
        };
        SettingService.prototype.disableFeatures = function (feature_ids) {
            return this.delete(this._feature_base_url + '/disable', { 'features': feature_ids })
                .then(function (response) { return response; });
        };
        SettingService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], SettingService);
        return SettingService;
    }(api_service_1.Api));
    exports.SettingService = SettingService;
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
//# sourceMappingURL=10.acb5a5c62b755bd14d90.js.map