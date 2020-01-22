(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/app/modules/access-control/access-control.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/access-control/access-control.module.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js"), __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js"), __webpack_require__(/*! ./access-control.routing */ "./src/app/modules/access-control/access-control.routing.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! modules/application-directives.module */ "./src/app/modules/application-directives.module.ts"), __webpack_require__(/*! ./list-access-control/list-access-control.component */ "./src/app/modules/access-control/list-access-control/list-access-control.component.ts"), __webpack_require__(/*! ./manage-access-control/manage-access-control.component */ "./src/app/modules/access-control/manage-access-control/manage-access-control.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, ngx_treeview_1, ng_select_1, access_control_routing_1, application_components_module_1, application_pipes_module_1, application_directives_module_1, list_access_control_component_1, manage_access_control_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccessControlModule = (function () {
        function AccessControlModule() {
        }
        AccessControlModule = __decorate([
            core_1.NgModule({
                imports: [
                    access_control_routing_1.AccessControlRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_pipes_module_1.ApplicationPipesModule,
                    application_directives_module_1.ApplicationDirectivesModule,
                    ngx_treeview_1.TreeviewModule,
                    ng_select_1.NgSelectModule
                ],
                declarations: [
                    list_access_control_component_1.ListAccessControlComponent,
                    manage_access_control_component_1.ManageAccessControlComponent
                ],
                providers: []
            })
        ], AccessControlModule);
        return AccessControlModule;
    }());
    exports.AccessControlModule = AccessControlModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/access-control/access-control.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/access-control/access-control.routing.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./list-access-control/list-access-control.component */ "./src/app/modules/access-control/list-access-control/list-access-control.component.ts"), __webpack_require__(/*! ./manage-access-control/manage-access-control.component */ "./src/app/modules/access-control/manage-access-control/manage-access-control.component.ts"), __webpack_require__(/*! core/services/objectid.service */ "./src/app/core/services/objectid.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, list_access_control_component_1, manage_access_control_component_1, objectid_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Access Control'
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
                            module: 'access-control',
                            entity: 'access-control',
                            action: 'find'
                        }
                    },
                    component: list_access_control_component_1.ListAccessControlComponent
                },
                {
                    path: 'add',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Add',
                        access: {
                            module: 'access-control',
                            entity: 'access-control',
                            action: 'create'
                        }
                    },
                    component: manage_access_control_component_1.ManageAccessControlComponent
                },
                {
                    path: 'edit/:id',
                    data: {
                        title: 'Edit',
                        access: {
                            module: 'access-control',
                            entity: 'access-control',
                            action: 'update'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard, objectid_service_1.ObjectidGuard],
                    component: manage_access_control_component_1.ManageAccessControlComponent
                }
            ]
        }
    ];
    var AccessControlRoutingModule = (function () {
        function AccessControlRoutingModule() {
        }
        AccessControlRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], AccessControlRoutingModule);
        return AccessControlRoutingModule;
    }());
    exports.AccessControlRoutingModule = AccessControlRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/access-control/list-access-control/list-access-control.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/access-control/list-access-control/list-access-control.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\" *ngIf=\"createAllowed\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary pull-right\" role='button' type=\"button\" routerLink=\"/access-control/add\" (click)=\"exatask.trackEvent('access-control', 'add')\">+ Add Access Control</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"loading\">\n            <h3><i class=\"fa fa-refresh fa-spin\"></i> Loading Access Controls</h3>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"!loading && access_controls.length === 0\">\n            <h3>No Access Controls in organization</h3>\n          </div>\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\" *ngIf=\"!loading && access_controls.length > 0\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Description</th>\n                  <th>Status</th>\n                  <th></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let access_control of access_controls\">\n                  <td>{{access_control.title}}</td>\n                  <td>{{access_control.description}}</td>\n                  <td>{{access_control.access_control_status | constants: 'access_control.status'}}</td>\n                  <td class=\"text-center\">\n                    <button class=\"btn btn-primary btn-sm\" role=\"button\" type=\"button\" routerLink=\"/access-control/edit/{{access_control._id.toString()}}\" *ngIf=\"editAllowed\" (click)=\"exatask.trackEvent('access-control', 'edit', access_control._id.toString())\">Edit</button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n\n          <ul class=\"pagination justify-content-end\" *ngIf=\"count > limit\">\n            <li class=\"page-item\" *ngIf=\"total_pages > 1\" [class.disabled]=\"page == 1\">\n              <button class=\"page-link\" (click)=\"exatask.trackEvent('access-control', 'first', 'list'); getAccessControls(1)\">First</button>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"page == 1\">\n              <button class=\"page-link\" (click)=\"exatask.trackEvent('access-control','previous', 'list', page - 1); getAccessControls(page - 1)\">Previous</button>\n            </li>\n            <li class=\"page-item active\">\n              <button class=\"page-link\">{{page}}</button>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"page === total_pages\">\n              <button class=\"page-link\" (click)=\"exatask.trackEvent('access-control', 'next', 'list', page + 1); getAccessControls(page + 1)\">Next</button>\n            </li>\n            <li class=\"page-item\" *ngIf=\"page < total_pages\" [class.disabled]=\"page === total_pages\">\n              <button class=\"page-link\" (click)=\"exatask.trackEvent('button', 'last', 'list'); getAccessControls(total_pages)\">Last</button>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/access-control/list-access-control/list-access-control.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/access-control/list-access-control/list-access-control.component.ts ***!
  \*********************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/access-control/access-control.service */ "./src/app/modules/access-control/access-control.service.ts"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, access_control_service_1, access_service_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListAccessControlComponent = (function () {
        function ListAccessControlComponent(accessControlService, access, exatask) {
            this.accessControlService = accessControlService;
            this.access = access;
            this.exatask = exatask;
            this.loading = false;
            this.editAllowed = false;
            this.exatask.setTitle('Access Control List');
            this.access_controls = [];
            this.limit = 25;
            this.createAllowed = false;
        }
        ListAccessControlComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.getAccessControls(1);
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'access-control',
                                    entity: 'access-control',
                                    action: 'create'
                                })];
                        case 1:
                            _a.createAllowed = _c.sent();
                            _b = this;
                            return [4, this.access.hasAccess({
                                    module: 'access-control',
                                    entity: 'access-control',
                                    action: 'update'
                                })];
                        case 2:
                            _b.editAllowed = _c.sent();
                            return [2];
                    }
                });
            });
        };
        ListAccessControlComponent.prototype.getAccessControls = function (page) {
            var _this = this;
            var self = this;
            this.loading = true;
            this.page = page;
            this.accessControlService.getAccessControls(this.page, this.limit).then(function (response) {
                self.loading = false;
                _this.count = response.count;
                _this.access_controls = response.access_controls;
                _this.total_pages = _this.count / _this.limit;
                _this.total_pages += (_this.count % _this.limit) === 0 ? 0 : 1;
            });
        };
        ListAccessControlComponent = __decorate([
            core_1.Component({
                selector: 'app-access-controls',
                template: __webpack_require__(/*! ./list-access-control.component.html */ "./src/app/modules/access-control/list-access-control/list-access-control.component.html"),
                providers: [access_control_service_1.AccessControlService]
            }),
            __metadata("design:paramtypes", [access_control_service_1.AccessControlService,
                access_service_1.Access,
                exatask_service_1.ExaTask])
        ], ListAccessControlComponent);
        return ListAccessControlComponent;
    }());
    exports.ListAccessControlComponent = ListAccessControlComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/access-control/manage-access-control/manage-access-control.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/access-control/manage-access-control/manage-access-control.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"offset-2 col-8\">\n              <form #accessControlForm=\"ngForm\">\n\n                <div class=\"form-group row\">\n                  <label for=\"title\" class=\"col-md-3 col-form-label\">\n                    <span class=\"required\">*</span> Title\n                  </label>\n                  <div class=\"col-md-9\">\n                    <input type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" [(ngModel)]=\"access_control.title\" #title=\"ngModel\" required minlength=\"3\" [attr.disabled]=\"access_control_id ? 'disabled' : null\" />\n                    <app-inline-error [control]=\"title\"></app-inline-error>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"description\" class=\"col-md-3 col-form-label\">Description</label>\n                  <div class=\"col-md-9\">\n                    <textarea name=\"description\" class=\"form-control\" id=\"description\" [(ngModel)]=\"access_control.description\"></textarea>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\">\n                    <span class=\"required\">*</span> Entities\n                  </label>\n\n                  <div class=\"col-md-9\">\n\n                    <ngx-treeview [config]=\"entitiesConfig\" [items]=\"entityList\" (selectedChange)=\"selectedEntity($event)\">\n                    </ngx-treeview>\n                    <input type=\"hidden\" name=\"entities\" [(ngModel)]=\"access_control.actions\" #entities=\"ngModel\" app-minitems=\"1\" />\n                    <app-inline-error [control]=\"entities\"></app-inline-error>\n\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\">Attributes</label>\n\n                  <div class=\"col-md-9\">\n                    <ngx-treeview [config]=\"attributesConfig\" [items]=\"attributeList\" (selectedChange)=\"selectedAttribute($event)\">\n                    </ngx-treeview>\n                    <input type=\"hidden\" name=\"attributes\" [(ngModel)]=\"access_control.attributes\" #attributes=\"ngModel\" />\n                  </div>\n                </div>\n\n                <div class=\"form-actions row\">\n                  <div class=\"col-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"exatask.trackEvent('access-control', 'submit'); postAccessControl()\">Submit</button>\n                    <button type=\"reset\" class=\"btn btn-link\" routerLink=\"/access-control\" (click)=\"exatask.trackEvent('access-control', 'cancel')\">Cancel</button>\n                  </div>\n                </div>\n\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    <span *ngIf=\"!access_control._id || !access_control._id.toString()\">Added</span>\n    <span *ngIf=\"access_control._id && access_control._id.toString()\">Updated</span>\n    <span>&nbsp;Access Control successfully.</span>\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    <span>There was an error&nbsp;</span>\n    <span *ngIf=\"!access_control._id || !access_control._id.toString()\">creating</span>\n    <span *ngIf=\"access_control._id && access_control._id.toString()\">updating</span>\n    <span>&nbsp;the access control.</span>\n    <br>\n    <p>Details: {{error}}</p>\n  </div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/access-control/manage-access-control/manage-access-control.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/access-control/manage-access-control/manage-access-control.component.ts ***!
  \*************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/access-control/access-control.service */ "./src/app/modules/access-control/access-control.service.ts"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, ngx_treeview_1, router_1, lodash_1, success_modal_component_1, error_modal_component_1, access_control_service_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ManageAccessControlComponent = (function () {
        function ManageAccessControlComponent(route, accessControlService, exatask) {
            this.route = route;
            this.accessControlService = accessControlService;
            this.exatask = exatask;
            this.access_control = new access_control_service_1.AccessControl();
            this.allowedAttributes = new Array();
            this.entitiesConfig = {
                hasAllCheckBox: false,
                hasFilter: false,
                hasDivider: false,
                hasCollapseExpand: false,
                decoupleChildFromParent: false,
                maxHeight: 500
            };
            this.attributesConfig = {
                hasAllCheckBox: false,
                hasFilter: false,
                hasDivider: false,
                hasCollapseExpand: false,
                decoupleChildFromParent: false,
                maxHeight: 500
            };
            this.error = '';
            this.exatask.setTitle('Manage Access Control');
            if (this.route.snapshot.params.id) {
                this.access_control_id = this.route.snapshot.params.id;
            }
        }
        ManageAccessControlComponent.prototype.ngOnInit = function () {
            if (this.access_control_id) {
                this.__loadAccessControl();
            }
            else {
                this.access_control_id = null;
                this.__loadEntities();
                this.__loadAttributes();
            }
        };
        ManageAccessControlComponent.prototype.__checked = function (action_id) {
            if (this.access_control.actions.indexOf(action_id) === -1) {
                return false;
            }
            return true;
        };
        ManageAccessControlComponent.prototype.__getTreeviewItem = function (value, text, disabled, checked) {
            disabled = !!disabled;
            checked = !!checked;
            return new ngx_treeview_1.TreeviewItem({
                value: value,
                text: text,
                collapsed: true,
                disabled: disabled,
                checked: checked
            });
        };
        ManageAccessControlComponent.prototype.__prepareAttributeItem = function (type, data, attribute, model) {
            var disabled = false, checked = false;
            if (data.default && data.default.indexOf(attribute.attribute) !== -1) {
                checked = true;
                disabled = true;
            }
            if (data.blocked && data.blocked.indexOf(attribute.attribute) !== -1) {
                disabled = true;
            }
            if (this.access_control.attributes.length !== 0) {
                for (var _i = 0, _a = this.access_control.attributes; _i < _a.length; _i++) {
                    var attr = _a[_i];
                    if (attr.model === model && (attr[type + '_all'] === true || attr[type].indexOf(attribute) !== -1)) {
                        checked = true;
                    }
                }
            }
            var treeitem_value = model + '--' + type + '--' + attribute.attribute;
            return this.__getTreeviewItem(treeitem_value, attribute.name, !this.access_control.update.attributes || disabled, checked);
        };
        ManageAccessControlComponent.prototype.__loadEntities = function () {
            var _this = this;
            var create = lodash_1.isEmpty(this.access_control._id);
            this.accessControlService.getEntities()
                .then(function (response) {
                var entityList = new Array();
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var module_1 = response_1[_i];
                    var tree_entities = new Array();
                    for (var _a = 0, _b = module_1.entities; _a < _b.length; _a++) {
                        var entity = _b[_a];
                        var tree_actions = new Array();
                        for (var _c = 0, _d = entity.actions; _c < _d.length; _c++) {
                            var action = _d[_c];
                            var treeitem_checked = _this.__checked(action.action_id);
                            tree_actions.push(_this.__getTreeviewItem(action.action_id, action.title, !_this.access_control.update.actions, treeitem_checked));
                        }
                        var entity_tree_item = _this.__getTreeviewItem(entity._id, entity.entity, !_this.access_control.update.actions, create);
                        entity_tree_item.children = tree_actions;
                        tree_entities.push(entity_tree_item);
                    }
                    var module_tree_item = _this.__getTreeviewItem(module_1.module_code, module_1.module, !_this.access_control.update.actions, create);
                    module_tree_item.children = tree_entities;
                    entityList.push(module_tree_item);
                }
                _this.entityList = entityList;
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageAccessControlComponent.prototype.__loadAttributes = function () {
            var _this = this;
            var create = lodash_1.isEmpty(this.access_control._id);
            this.accessControlService.getAttributes()
                .then(function (response) {
                var attributeList = new Array();
                var findAttribute, updateAttribute;
                for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                    var row = response_2[_i];
                    var newAttribute = _this.__getTreeviewItem(row.model, row.name, !_this.access_control.update.attributes, create);
                    var allowedAttributeDetails = {
                        model: row.model,
                        find: [],
                        update: []
                    };
                    var newAttributeChildren = [];
                    if (row.find) {
                        findAttribute = _this.__getTreeviewItem(row.model + '--find', 'Retrieve', !_this.access_control.update.attributes, create);
                        newAttributeChildren.push(findAttribute);
                        var findAttributeChildren = [];
                        for (var _a = 0, _b = row.attributes; _a < _b.length; _a++) {
                            var attribute = _b[_a];
                            findAttributeChildren.push(_this.__prepareAttributeItem('find', row.find, attribute, row.model));
                            if ((row.find.default && row.find.default.indexOf(attribute.attribute) === -1) ||
                                (row.find.blocked && row.find.blocked.indexOf(attribute.attribute) === -1)) {
                                allowedAttributeDetails.find.push(attribute.attribute);
                            }
                        }
                        findAttribute.children = findAttributeChildren;
                    }
                    if (row.update) {
                        updateAttribute = _this.__getTreeviewItem(row.model + '--update', 'Update', !_this.access_control.update.attributes, create);
                        newAttributeChildren.push(updateAttribute);
                        var updateAttributeChildren = [];
                        for (var _c = 0, _d = row.attributes; _c < _d.length; _c++) {
                            var attribute = _d[_c];
                            updateAttributeChildren.push(_this.__prepareAttributeItem('update', row.update, attribute, row.model));
                            if ((row.update.default && row.update.default.indexOf(attribute.attribute) === -1) ||
                                (row.update.blocked && row.update.blocked.indexOf(attribute.attribute) === -1)) {
                                allowedAttributeDetails.update.push(attribute.attribute);
                            }
                        }
                        updateAttribute.children = updateAttributeChildren;
                    }
                    newAttribute.children = newAttributeChildren;
                    attributeList.push(newAttribute);
                    _this.allowedAttributes.push(allowedAttributeDetails);
                }
                _this.attributeList = attributeList;
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageAccessControlComponent.prototype.__loadAccessControl = function () {
            var _this = this;
            this.accessControlService.getAccessControl(this.access_control_id)
                .then(function (access_control) {
                _this.access_control = access_control;
                _this.exatask.setTitle('Manage Access Control : ' + _this.access_control.title);
                _this.__loadEntities();
                _this.__loadAttributes();
            });
        };
        ManageAccessControlComponent.prototype.__prepareAccessControl = function (access_control) {
            if (access_control.attributes) {
                access_control.attributes.forEach(function (attribute, index) {
                    if (attribute.find) {
                        if (!attribute.find || attribute.find.length === 0) {
                            delete attribute.find;
                        }
                    }
                    if (attribute.update) {
                        if (!attribute.update || attribute.update.length === 0) {
                            delete attribute.update;
                        }
                    }
                    if (!attribute.find && !attribute.update && !attribute.find_all && !attribute.update_all) {
                        delete access_control.attributes[index];
                    }
                });
                access_control.attributes = access_control.attributes.filter(function (attribute) {
                    return !!attribute;
                });
            }
            return access_control;
        };
        ManageAccessControlComponent.prototype.selectedEntity = function (event) {
            var self = this;
            self.access_control.actions = [];
            this.accessControlForm.controls.entities.markAsTouched();
            event.map(function (entity) {
                self.access_control.actions.push(entity);
                self.access_control.actions = lodash_1.uniq(self.access_control.actions);
            });
        };
        ManageAccessControlComponent.prototype.selectedAttribute = function (event) {
            var self = this;
            self.access_control.attributes = [];
            event.map(function (attribute) {
                var attributeComponents = attribute.split('--');
                var model = attributeComponents[0], operation = attributeComponents[1], attr = attributeComponents[2];
                var index = lodash_1.findIndex(self.access_control.attributes, ['model', model]);
                var attribute_index = lodash_1.findIndex(self.allowedAttributes, ['model', model]);
                if (index === -1) {
                    self.access_control.attributes.push({
                        model: model,
                        find: [],
                        find_all: false,
                        update: [],
                        update_all: false
                    });
                    index = self.access_control.attributes.length - 1;
                }
                var allowed_attribute = self.allowedAttributes[attribute_index][operation];
                if (allowed_attribute.indexOf(attr) !== -1) {
                    self.access_control.attributes[index][operation].push(attr);
                }
                if (allowed_attribute.length > 0 &&
                    allowed_attribute.length === self.access_control.attributes[index][operation].length) {
                    self.access_control.attributes[index][operation] = [];
                    self.access_control.attributes[index][operation + '_all'] = true;
                }
            });
        };
        ManageAccessControlComponent.prototype.postAccessControl = function () {
            var _this = this;
            this.error = '';
            var access_control = lodash_1.clone(this.access_control);
            access_control = this.__prepareAccessControl(access_control);
            if (this.access_control._id && this.access_control._id.toString()) {
                this.accessControlService.putAccessControl(access_control)
                    .then(function (response) {
                    _this.successModal.show('/access-control');
                }).catch(function (err) {
                    _this.error = err.error.message.text;
                    _this.errorModal.show();
                });
            }
            else {
                this.accessControlService.postAccessControl(access_control)
                    .then(function (response) {
                    _this.successModal.show('/access-control');
                }).catch(function (err) {
                    _this.error = err.error.message.text;
                    _this.errorModal.show();
                });
            }
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ManageAccessControlComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ManageAccessControlComponent.prototype, "errorModal", void 0);
        __decorate([
            core_1.ViewChild('accessControlForm'),
            __metadata("design:type", Object)
        ], ManageAccessControlComponent.prototype, "accessControlForm", void 0);
        ManageAccessControlComponent = __decorate([
            core_1.Component({
                template: __webpack_require__(/*! ./manage-access-control.component.html */ "./src/app/modules/access-control/manage-access-control/manage-access-control.component.html"),
                providers: [access_control_service_1.AccessControlService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute,
                access_control_service_1.AccessControlService,
                exatask_service_1.ExaTask])
        ], ManageAccessControlComponent);
        return ManageAccessControlComponent;
    }());
    exports.ManageAccessControlComponent = ManageAccessControlComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=15.52091ae65b48270a914a.js.map