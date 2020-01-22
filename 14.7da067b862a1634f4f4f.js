(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./src/app/modules/organization/setting/manage-feature/manage-feature.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/organization/setting/manage-feature/manage-feature.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\" *ngFor=\"let feature of featureList\">\n\n      <div class=\"card\">\n\n        <div class=\"card-header\">\n          <h2 class=\"pull-left\">{{feature.feature}}</h2>\n          <div class=\"card-header-actions\">\n            <button type=\"button\" *ngIf=\"feature.enabled\" class=\"btn btn-danger\" (click)=\"exatask.trackEvent('feature', 'confirmation', feature.feature_code); operationConfirmation(2, feature.feature_code)\" [disabled]=\"loading[feature.feature_code]\">\n              <span class=\"fa fa-spinner\" [ngClass]=\"{'fa-spin': loading[feature.feature_code]}\" *ngIf=\"loading[feature.feature_code]\"></span>\n              &nbsp;Disable\n            </button>\n            <button type=\"button\" *ngIf=\"!feature.enabled\" class=\"btn btn-success\" (click)=\"exatask.trackEvent('feature', 'confirmation', feature.feature_code); operationConfirmation(1, feature.feature_code)\" [disabled]=\"loading[feature.feature_code]\">\n              <span class=\"fa fa-spinner\" [ngClass]=\"{'fa-spin': loading[feature.feature_code]}\" *ngIf=\"loading[feature.feature_code]\"></span>\n              &nbsp;Enable\n            </button>\n          </div>\n        </div>\n\n        <div class=\"card-body\">\n\n          <dl *ngFor=\"let module of feature.modules\">\n            <dt>{{module.module}}</dt>\n\n            <ul>\n              <li *ngFor=\"let entity of module.entities\">\n                {{entity.entity}}\n\n                <ul>\n                  <li *ngFor=\"let action of entity.actions\">{{action.title}}</li>\n                </ul>\n\n              </li>\n            </ul>\n\n          </dl>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<div bsModal #confirmModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" [ngClass]=\"{'modal-success': operation === 1, 'modal-danger': operation === 2}\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <span class=\"mb-0\" *ngIf=\"operation === 1\">Confirm enable feature</span>\n          <span class=\"mb-0\" *ngIf=\"operation === 2\">Confirm disable feature</span>\n        </h4>\n        <button type=\"button\" class=\"close\" (click)=\"exatask.trackEvent('feature', 'confirmation', 'close', feature); confirmModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h5 *ngIf=\"operation === 1\">Are you sure you would like to enable {{ feature }}?</h5>\n        <h5 *ngIf=\"operation === 2\">Are you sure you would like to disable {{ feature }}?</h5>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"operation === 1\" type=\"button\" (click)=\"exatask.trackEvent('feature', 'enable', feature); enableFeature()\" class=\"btn btn-success\">Enable</button>\n        <button *ngIf=\"operation === 2\" type=\"button\" (click)=\"exatask.trackEvent('feature', 'disable', feature); disableFeature()\" class=\"btn btn-danger\">Disable</button>\n        <button type=\"button\" (click)=\"exatask.trackEvent('feature', 'confirmation', 'cancel', feature); confirmModal.hide()\" class=\"btn btn-link\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>{{message}}</div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>{{message}}</div>\n</app-error-modal>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/organization/setting/setting.service */ "./src/app/modules/organization/setting/setting.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/access-control/access-control.service */ "./src/app/modules/access-control/access-control.service.ts"), __webpack_require__(/*! modules/organization/organization.service */ "./src/app/modules/organization/organization.service.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, setting_service_1, success_modal_component_1, error_modal_component_1, access_control_service_1, organization_service_1, ngx_bootstrap_1, exatask_service_1, lodash_1) {
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
    var ManageFeatureComponent = (function () {
        function ManageFeatureComponent(settingService, accessControlService, organizationService, exatask) {
            this.settingService = settingService;
            this.accessControlService = accessControlService;
            this.organizationService = organizationService;
            this.exatask = exatask;
            this.message = '';
            this.operation = Operation.ENABLE;
            this.featureList = new Array();
            this.loading = [];
            this.exatask.setTitle('Manage Feature');
        }
        ManageFeatureComponent.prototype.ngOnInit = function () {
            this.__loadEntities();
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
            var feature_details = lodash_1.find(this.featureList, lodash_1.matchesProperty('feature_code', feature_code));
            this.feature = feature_details.feature;
            this.confirmModal.show();
        };
        ManageFeatureComponent.prototype.disableFeature = function () {
            var _this = this;
            var self = this;
            this.confirmModal.hide();
            this.loading[this.feature_code] = true;
            var index = lodash_1.findIndex(this.featureList, ['feature_code', this.feature_code]);
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
            var index = lodash_1.findIndex(this.featureList, ['feature_code', this.feature_code]);
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
                organization_service_1.OrganizationService,
                exatask_service_1.ExaTask])
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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <form #passwordPolicyForm=\"ngForm\">\n            <div class=\"form-group row\">\n              <label class=\"col-md-4 col-form-label\" for=\"min-length\">Minimum password length</label>\n              <div class=\"col-md-1 col-4\">\n                <input type=\"text\" name=\"min-length\" class=\"form-control\" id=\"min-length\" [(ngModel)]=\"policy.minimum\">\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-md-4 col-form-label\" for=\"max-length\">Maximum password length</label>\n              <div class=\"col-md-1 col-4\">\n                <input type=\"text\" name=\"max-length\" class=\"form-control\" id=\"max-length\" [(ngModel)]=\"policy.maximum\">\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"lowercase\" class=\"form-check-input\" id=\"lowercase\" value=\"true\"\n                         [(ngModel)]=\"policy.lowercase\">\n                  <label class=\"form-check-label\" for=\"lowercase\">Require at-least one lowercase letter</label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"uppercase\" class=\"form-check-input\" id=\"uppercase\" value=\"true\"\n                         [(ngModel)]=\"policy.uppercase\">\n                  <label class=\"form-check-label\" for=\"uppercase\">Require at-least one uppercase letter</label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"numeric\" class=\"form-check-input\" id=\"numeric\" value=\"true\"\n                         [(ngModel)]=\"policy.numeric\">\n                  <label class=\"form-check-label\" for=\"numeric\">Require at-least one number</label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"special\" class=\"form-check-input\" id=\"special\" value=\"true\"\n                         [(ngModel)]=\"policy.special\">\n                  <label class=\"form-check-label\" for=\"special\">Require at-least one non-alphanumeric character</label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"expiration\" class=\"form-check-input\" id=\"expiration\" value=\"true\"\n                         [(ngModel)]=\"expiration\">\n                  <label class=\"form-check-label\" for=\"expiration\">Enable password expiration</label>\n                </div>\n\n                <div class=\"row\">\n                  <label class=\"offset-1 col-md-7 col-form-label\" for=\"expiry\">Password expiration period (in days)</label>\n                  <div class=\"offset-1 offset-md-0 col-md-2 col-4\">\n                    <input type=\"text\" name=\"expiry\" class=\"form-control\" id=\"expiry\" [(ngModel)]=\"policy.expiry\" [disabled]=\"!expiration\">\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"reuse\" class=\"form-check-input\" id=\"reuse\" value=\"true\"\n                         [(ngModel)]=\"reuse\">\n                  <label class=\"form-check-label\" for=\"reuse\">Prevent password reuse</label>\n                </div>\n\n                <div class=\"row\">\n                  <label class=\"offset-1 col-md-7 col-form-label\" for=\"remember\">Number of passwords to remember</label>\n                  <div class=\"offset-1 offset-md-0 col-md-2 col-4\">\n                    <input type=\"text\" name=\"remember\" class=\"form-control\" id=\"remember\" [(ngModel)]=\"policy.remember\" [disabled]=\"!reuse\">\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" name=\"mfa\" class=\"form-check-input\" id=\"mfa\" value=\"true\" [(ngModel)]=\"policy.mfa\">\n                  <label class=\"form-check-label\" for=\"mfa\">Multi-factor Authentication</label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-actions row\">\n              <div class=\"col-12 text-right\">\n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"exatask.trackEvent('password-policy', 'submit'); savePolicy()\">Submit</button>\n                <a class=\"btn btn-link\" [routerLink]=\"['/dashboard']\" (click)=\"exatask.trackEvent('password-policy', 'cancel')\">Cancel</a>\n              </div>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>Password Policy updated successfully</div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n<div content>\n  <p>There was an error updating Password Policy.</p>\n  <p>{{error}}</p>\n  <ul>\n    <li *ngFor=\"let attribute of invalid_attributes\">{{attribute}}</li>\n  </ul>\n</div>\n</app-error-modal>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/organization/setting/setting.service */ "./src/app/modules/organization/setting/setting.service.ts"), __webpack_require__(/*! modules/organization/organization.service */ "./src/app/modules/organization/organization.service.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, lodash_1, success_modal_component_1, error_modal_component_1, setting_service_1, organization_service_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var error_map = {
        'password_policy.minimum': 'Minimum password length',
        'password_policy.maximum': 'Maximum password length',
        'password_policy.expiry': 'Password expiration period',
        'password_policy.remember': 'Passwords to remember'
    };
    var ManagePasswordPolicyComponent = (function () {
        function ManagePasswordPolicyComponent(settingService, organizationService, exatask) {
            this.settingService = settingService;
            this.organizationService = organizationService;
            this.exatask = exatask;
            this.policy = new setting_service_1.PasswordPolicy();
            this.expiration = false;
            this.reuse = false;
            this.error = '';
            this.exatask.setTitle('Password Policy');
        }
        ManagePasswordPolicyComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
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
                    return [2];
                });
            });
        };
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
                organization_service_1.OrganizationService,
                exatask_service_1.ExaTask])
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


/***/ })

}]);
//# sourceMappingURL=14.7da067b862a1634f4f4f.js.map