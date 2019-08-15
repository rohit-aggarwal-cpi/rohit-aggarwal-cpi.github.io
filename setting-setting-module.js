(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "./src/app/config/locales/en.json":
/*!****************************************!*\
  !*** ./src/app/config/locales/en.json ***!
  \****************************************/
/*! exports provided: access_control, addon, compensatory_off, entity, feedback, leave, leave_policy, metadata, organization, department, holiday, user, wfh_policy, wfh, default */
/***/ (function(module) {

module.exports = {"access_control":{"status":{"0":"Inactive","1":"Active"},"type":{"1":"Locked Entity User","2":"Locked Entity","3":"Custom","4":"Locked User"},"operation":{"1":"Create","2":"Update"}},"addon":{"price":{"1":"Monthly","2":"Quaterly","3":"Half-Yearly","4":"Yearly","5":"One-Time"},"currency":{"INR":"INR"},"type":{"1":"Employee","2":"Module"},"status":{"0":"Inactive","1":"Active"}},"compensatory_off":{"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"},"expiry":{"1":"Never","2":"End of Leave Policy","3":"After Month(s)","4":"After Day(s)"}},"entity":{"type":{"1":"Core","2":"Addon","3":"Private"},"status":{"0":"Inactive","1":"Active"},"access":{"1":"Public","2":"Private","3":"Unrestricted","4":"Exclusive"}},"feedback":{"status":{"0":"Inactive","1":"Active"},"operation":{"1":"Create"}},"leave":{"type":{"EL":"Earned Leave","CL":"Casual Leave","SL":"Sick Leave","ML":"Maternity Leave","PL":"Paternity Leave","LWP":"Leave without Pay","COMP":"Compensatory-Off"},"duration":{"1":"Full-Day","2":"First-Half","3":"Second-Half"},"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"},"operation":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"}},"leave_policy":{"status":{"0":"Inactive","1":"Active","2":"Scheduled","3":"Expired"},"operation":{"1":"Create","2":"Activate","3":"Expire"},"allocation":{"1":"One-Time","2":"Quarterly","3":"Monthly","4":"On-Demand"}},"metadata":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"level":{"1":"High School","2":"Graduate","3":"Post-Graduate","4":"Doctorate","5":"Diploma"}},"organization":{"status":{"0":"Inactive","1":"Active","2":"Pending"},"operation":{"1":"Create","2":"Confirm","3":"Update"},"mfa":{"1":"Optional","2":"Mandatory"},"mfa_type":{"1":"QR Code","2":"Security Questions"},"auth_type":{"1":"Password","2":"OAuth","3":"SAML"}},"department":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"operation":{"1":"Create","2":"Update"}},"holiday":{"operation":{"1":"Create","2":"Update"}},"user":{"status":{"0":"Inactive","1":"Active","2":"Deleted"},"gender":{"1":"Male","2":"Female","3":"Other"},"marital_status":{"1":"Unmarried","2":"Married"},"operation":{"1":"Create","2":"Set Password","3":"Reset Password","4":"Change Password","5":"Update","6":"Assign Leaves"},"social_security":{"pan":"PAN Card","aadhaar":"Aadhaar Card","passport":"Passport"},"calendar_date":{"1":"Leave"},"mfa":{"1":"E-Mail ID","2":"QR Code","3":"Question & Answer","4":"Security Key"}},"wfh_policy":{"allowed_period":{"1":"Forever","2":"Weekly","3":"Monthly","4":"Quarterly","5":"Yearly"},"status":{"0":"Inactive","1":"Active","2":"Expired"}},"wfh":{"status":{"1":"Applied","2":"Approved","3":"Rejected","4":"Deleted"}}};

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

module.exports = "<div class=\"animated fadeIn\">\n\n  <div class=\"row\">\n    <div class=\"col-6\" *ngFor=\"let feature of featureList\">\n\n      <div class=\"card\">\n\n        <div class=\"card-header\">\n          <h2 class=\"pull-left\">{{feature.feature}}</h2>\n          <div class=\"card-header-actions\">\n            <button type=\"button\" *ngIf=\"feature.enabled\" class=\"btn btn-danger\" (click)=\"operationConfirmation(2, feature.feature_code)\" [disabled]=\"loading[feature.feature_code]\">\n              <span class=\"fa fa-spinner\" [ngClass]=\"{'fa-spin': loading[feature.feature_code]}\" *ngIf=\"loading[feature.feature_code]\"></span>\n              &nbsp;Disable\n            </button>\n            <button type=\"button\" *ngIf=\"!feature.enabled\" class=\"btn btn-success\" (click)=\"operationConfirmation(1, feature.feature_code)\" [disabled]=\"loading[feature.feature_code]\">\n              <span class=\"fa fa-spinner\" [ngClass]=\"{'fa-spin': loading[feature.feature_code]}\" *ngIf=\"loading[feature.feature_code]\"></span>\n              &nbsp;Enable\n            </button>\n          </div>\n        </div>\n\n        <div class=\"card-body\">\n\n          <dl *ngFor=\"let module of feature.modules\">\n            <dt>{{module.module}}</dt>\n\n            <ul>\n              <li *ngFor=\"let entity of module.entities\">\n                {{entity.entity}}\n\n                <ul>\n                  <li *ngFor=\"let action of entity.actions\">{{action.title}}</li>\n                </ul>\n\n              </li>\n            </ul>\n\n          </dl>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<div bsModal #confirmModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" [ngClass]=\"{'modal-success': operation === 1, 'modal-danger': operation === 2}\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <p class=\"mb-0\" *ngIf=\"operation === 1\">Confirm enable feature</p>\n          <p class=\"mb-0\" *ngIf=\"operation === 2\">Confirm disable feature</p>\n        </h4>\n        <button type=\"button\" class=\"close\" (click)=\"confirmModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h5 *ngIf=\"operation === 1\">Are you sure you would like to enable {{ feature }}?</h5>\n        <h5 *ngIf=\"operation === 2\">Are you sure you would like to disable {{ feature }}?</h5>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"operation === 1\" type=\"button\" (click)=\"enableFeature()\" class=\"btn btn-success\">Enable</button>\n        <button *ngIf=\"operation === 2\" type=\"button\" (click)=\"disableFeature()\" class=\"btn btn-danger\">Disable</button>\n        <button type=\"button\" (click)=\"confirmModal.hide()\" class=\"btn btn-link\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>{{message}}</div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>{{message}}</div>\n</app-error-modal>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/organization/setting/setting.service */ "./src/app/modules/organization/setting/setting.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/access-control/access-control.service */ "./src/app/modules/access-control/access-control.service.ts"), __webpack_require__(/*! modules/organization/organization.service */ "./src/app/modules/organization/organization.service.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, setting_service_1, success_modal_component_1, error_modal_component_1, access_control_service_1, organization_service_1, ngx_bootstrap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Feature = (function () {
        function Feature() {
            this.entity_ids = [];
            this.modules = [];
            this.enabled = false;
        }
        return Feature;
    }());
    var Operation;
    (function (Operation) {
        Operation[Operation["ENABLE"] = 1] = "ENABLE";
        Operation[Operation["DISABLE"] = 2] = "DISABLE";
    })(Operation || (Operation = {}));
    ;
    var ManageFeatureComponent = (function () {
        function ManageFeatureComponent(settingService, accessControlService, organizationService) {
            this.settingService = settingService;
            this.accessControlService = accessControlService;
            this.organizationService = organizationService;
            this.message = '';
            this.operation = Operation.ENABLE;
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
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var feature = response_1[_i];
                    var entity_ids = [];
                    for (var _a = 0, _b = feature.modules; _a < _b.length; _a++) {
                        var module_1 = _b[_a];
                        for (var _c = 0, _d = module_1.entities; _c < _d.length; _c++) {
                            var entity = _d[_c];
                            entity_ids.push(entity._id);
                        }
                    }
                    var new_feature = new Feature();
                    new_feature.feature = feature.feature;
                    new_feature.feature_code = feature.feature_code;
                    new_feature.entity_ids = entity_ids;
                    new_feature.modules = feature.modules;
                    _this.loading[feature.feature_code] = false;
                    _this.featureList.push(new_feature);
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
        ManageFeatureComponent.prototype.operationConfirmation = function (operation, feature_code) {
            this.operation = operation;
            this.feature_code = feature_code;
            var index = this.__getIndex(this.featureList, feature_code, 'feature_code');
            this.feature = this.featureList[index].feature;
            this.confirmModal.show();
        };
        ManageFeatureComponent.prototype.disableFeature = function () {
            var _this = this;
            var self = this;
            this.confirmModal.hide();
            this.loading[this.feature_code] = true;
            var index = this.__getIndex(this.featureList, this.feature_code, 'feature_code');
            this.settingService.disableFeatures(this.featureList[index].entity_ids)
                .then(function (response) {
                _this.loading[self.feature_code] = false;
                _this.featureList[index].enabled = false;
                _this.message = response.message.text;
                _this.successModal.show(function () {
                    window.location.reload();
                });
            }).catch(function (err) {
                _this.loading[self.feature_code] = false;
                _this.message = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageFeatureComponent.prototype.enableFeature = function () {
            var _this = this;
            var self = this;
            this.confirmModal.hide();
            this.loading[this.feature_code] = true;
            var index = this.__getIndex(this.featureList, this.feature_code, 'feature_code');
            this.settingService.enableFeatures(this.featureList[index].entity_ids)
                .then(function (response) {
                _this.loading[self.feature_code] = false;
                _this.featureList[index].enabled = true;
                _this.message = response.message.text;
                _this.successModal.show(function () {
                    window.location.reload();
                });
            }).catch(function (err) {
                _this.loading[self.feature_code] = false;
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
        __decorate([
            core_1.ViewChild('confirmModal'),
            __metadata("design:type", ngx_bootstrap_1.ModalDirective)
        ], ManageFeatureComponent.prototype, "confirmModal", void 0);
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

/***/ "./src/app/modules/organization/setting/manage-password-policy/manage-password-policy.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/organization/setting/manage-password-policy/manage-password-policy.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label\">Minimum password length</label>\n            <div class=\"col-1\">\n              <input type=\"text\" name=\"min-length\" class=\"form-control\" id=\"min-length\" [(ngModel)]=\"policy.minimum\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label\">Maximum password length</label>\n            <div class=\"col-1\">\n              <input type=\"text\" name=\"max-length\" class=\"form-control\" id=\"max-length\" [(ngModel)]=\"policy.maximum\">\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-6\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" name=\"lowercase\" class=\"form-check-input\" id=\"lowercase\" value=\"true\"\n                  [(ngModel)]=\"policy.lowercase\">\n                <label class=\"form-check-label\" for=\"lowercase\">Require at-least one lowercase letter</label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-6\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" name=\"uppercase\" class=\"form-check-input\" id=\"uppercase\" value=\"true\"\n                  [(ngModel)]=\"policy.uppercase\">\n                <label class=\"form-check-label\" for=\"uppercase\">Require at-least one uppercase letter</label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-6\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" name=\"numeric\" class=\"form-check-input\" id=\"numeric\" value=\"true\"\n                  [(ngModel)]=\"policy.numeric\">\n                <label class=\"form-check-label\" for=\"numeric\">Require at-least one number</label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-6\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" name=\"special\" class=\"form-check-input\" id=\"special\" value=\"true\"\n                  [(ngModel)]=\"policy.special\">\n                <label class=\"form-check-label\" for=\"special\">Require at-least one non-alphanumeric character</label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-6\">\n\n              <div class=\"form-check\">\n                <input type=\"checkbox\" name=\"expiration\" class=\"form-check-input\" id=\"expiration\" value=\"true\"\n                  [(ngModel)]=\"expiration\">\n                <label class=\"form-check-label\" for=\"expiration\">Enable password expiration</label>\n              </div>\n\n              <div class=\"row\">\n                <label class=\"offset-1 col-7 col-form-label\">Password expiration period (in days)</label>\n                <div class=\"col-2\">\n                  <input type=\"text\" name=\"expiry\" class=\"form-control\" id=\"expiry\" [(ngModel)]=\"policy.expiry\" [disabled]=\"!expiration\">\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-6\">\n\n              <div class=\"form-check\">\n                <input type=\"checkbox\" name=\"reuse\" class=\"form-check-input\" id=\"reuse\" value=\"true\"\n                  [(ngModel)]=\"reuse\">\n                <label class=\"form-check-label\" for=\"reuse\">Prevent password reuse</label>\n              </div>\n\n              <div class=\"row\">\n                <label class=\"offset-1 col-7 col-form-label\">Number of passwords to remember</label>\n                <div class=\"col-2\">\n                  <input type=\"text\" name=\"remember\" class=\"form-control\" id=\"remember\" [(ngModel)]=\"policy.remember\" [disabled]=\"!reuse\">\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <div class=\"col-6\">\n              <div class=\"form-check\">\n                <input type=\"checkbox\" name=\"mfa\" class=\"form-check-input\" id=\"mfa\" value=\"true\" [(ngModel)]=\"policy.mfa\">\n                <label class=\"form-check-label\" for=\"mfa\">Multi-factor Authentication</label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-actions row\">\n            <div class=\"col-12 text-right\">\n              <button type=\"button\" class=\"btn btn-success\" (click)=\"savePolicy()\">Submit</button>\n              <a class=\"btn btn-link\">Cancel</a>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>Password Policy updated successfully</div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n<div content>\n  <p>There was an error updating Password Policy.</p>\n  <p>{{error}}</p>\n  <ul>\n    <li *ngFor=\"let attribute of invalid_attributes\">{{attribute}}</li>\n  </ul>\n</div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/organization/setting/manage-password-policy/manage-password-policy.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/organization/setting/manage-password-policy/manage-password-policy.component.ts ***!
  \*********************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/organization/setting/setting.service */ "./src/app/modules/organization/setting/setting.service.ts"), __webpack_require__(/*! modules/organization/organization.service */ "./src/app/modules/organization/organization.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, lodash_1, success_modal_component_1, error_modal_component_1, setting_service_1, organization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var error_map = {
        'password_policy.minimum': 'Minimum password length',
        'password_policy.maximum': 'Maximum password length',
        'password_policy.expiry': 'Password expiration period',
        'password_policy.remember': 'Passwords to remember'
    };
    var ManagePasswordPolicyComponent = (function () {
        function ManagePasswordPolicyComponent(settingService, organizationService) {
            var _this = this;
            this.settingService = settingService;
            this.organizationService = organizationService;
            this.policy = new setting_service_1.PasswordPolicy();
            this.expiration = false;
            this.reuse = false;
            this.error = '';
            this.organizationService.getDetails().then(function (organization) {
                if (organization.password_policy) {
                    _this.policy = organization.password_policy;
                    if (!_this.policy.expiry) {
                        _this.policy.expiry = undefined;
                    }
                    else {
                        _this.expiration = true;
                    }
                    if (!_this.policy.remember) {
                        _this.policy.remember = undefined;
                    }
                    else {
                        _this.reuse = true;
                    }
                }
                else {
                    _this.policy.minimum = 8;
                    _this.policy.maximum = 16;
                }
            });
        }
        ManagePasswordPolicyComponent.prototype.__sanitizePolicy = function (policy) {
            if (!this.expiration) {
                policy.expiry = false;
            }
            if (!this.reuse) {
                policy.remember = false;
            }
            return policy;
        };
        ManagePasswordPolicyComponent.prototype.savePolicy = function () {
            var _this = this;
            this.error = '';
            this.invalid_attributes = [];
            var policy = lodash_1.clone(this.policy);
            policy = this.__sanitizePolicy(policy);
            this.settingService.updatePasswordPolicy(policy)
                .then(function (response) {
                _this.successModal.show();
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
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ManagePasswordPolicyComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ManagePasswordPolicyComponent.prototype, "errorModal", void 0);
        ManagePasswordPolicyComponent = __decorate([
            core_1.Component({
                selector: 'app-manage-password-policy',
                template: __webpack_require__(/*! ./manage-password-policy.component.html */ "./src/app/modules/organization/setting/manage-password-policy/manage-password-policy.component.html"),
                providers: [setting_service_1.SettingService, organization_service_1.OrganizationService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [setting_service_1.SettingService,
                organization_service_1.OrganizationService])
        ], ManagePasswordPolicyComponent);
        return ManagePasswordPolicyComponent;
    }());
    exports.ManagePasswordPolicyComponent = ManagePasswordPolicyComponent;
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./setting.routing */ "./src/app/modules/organization/setting/setting.routing.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! ./manage-feature/manage-feature.component */ "./src/app/modules/organization/setting/manage-feature/manage-feature.component.ts"), __webpack_require__(/*! ./manage-password-policy/manage-password-policy.component */ "./src/app/modules/organization/setting/manage-password-policy/manage-password-policy.component.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, setting_routing_1, application_components_module_1, application_pipes_module_1, manage_feature_component_1, manage_password_policy_component_1, ngx_bootstrap_1) {
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
                    ngx_bootstrap_1.ModalModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    manage_feature_component_1.ManageFeatureComponent,
                    manage_password_policy_component_1.ManagePasswordPolicyComponent
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./manage-feature/manage-feature.component */ "./src/app/modules/organization/setting/manage-feature/manage-feature.component.ts"), __webpack_require__(/*! ./manage-password-policy/manage-password-policy.component */ "./src/app/modules/organization/setting/manage-password-policy/manage-password-policy.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, manage_feature_component_1, manage_password_policy_component_1) {
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
                            module: 'organization',
                            entity: 'feature',
                            action: 'enable'
                        }
                    },
                    component: manage_feature_component_1.ManageFeatureComponent
                },
                {
                    path: 'password-policy',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Password Policy',
                        access: {
                            module: 'organization',
                            entity: 'organization',
                            action: 'passwordpolicy'
                        }
                    },
                    component: manage_password_policy_component_1.ManagePasswordPolicyComponent
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
    var PasswordPolicy = (function () {
        function PasswordPolicy() {
        }
        return PasswordPolicy;
    }());
    exports.PasswordPolicy = PasswordPolicy;
    var SettingService = (function (_super) {
        __extends(SettingService, _super);
        function SettingService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._base_url = '/organizations';
            _this._feature_base_url = '/organizations/features';
            return _this;
        }
        SettingService.prototype.enableFeatures = function (feature_ids) {
            return this.put(this._feature_base_url, { 'features': feature_ids })
                .then(function (response) { return response; });
        };
        SettingService.prototype.disableFeatures = function (feature_ids) {
            return this.delete(this._feature_base_url, { 'features': feature_ids })
                .then(function (response) { return response; });
        };
        SettingService.prototype.updatePasswordPolicy = function (policy) {
            return this.put(this._base_url + '/passwordpolicy', policy)
                .then(function (response) { return response; });
        };
        SettingService = __decorate([
            core_1.Injectable()
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
//# sourceMappingURL=setting-setting-module.js.map