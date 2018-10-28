(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-control-access-control-module"],{

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./list-access-control/list-access-control.component */ "./src/app/modules/access-control/list-access-control/list-access-control.component.ts"), __webpack_require__(/*! ./manage-access-control/manage-access-control.component */ "./src/app/modules/access-control/manage-access-control/manage-access-control.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, list_access_control_component_1, manage_access_control_component_1) {
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
                            entity: 'access_control:access_control',
                            action: 'find:get'
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
                            entity: 'access_control:access_control',
                            action: 'create:post'
                        }
                    },
                    component: manage_access_control_component_1.ManageAccessControlComponent
                },
                {
                    path: 'edit/:id',
                    data: {
                        title: 'Edit',
                        access: {
                            entity: 'access_control:access_control',
                            action: 'update:put'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\" *ngIf=\"createAllowed\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary pull-right\" role='button' type=\"button\" routerLink=\"/access-control/add\">+ Add Access Control</button>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"access_controls.length === 0\">\n            <h3>No Access Controls in organization</h3>\n          </div>\n\n          <table class=\"table table-striped\" *ngIf=\"access_controls.length > 0\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>Description</th>\n                <th>Status</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let access_control of access_controls\">\n                <td>{{access_control.title}}</td>\n                <td>{{access_control.description}}</td>\n                <td>{{access_control.access_control_status | constants: 'access_control.status'}}</td>\n                <td class=\"text-center\">\n                  <button class=\"btn btn-primary btn-sm\" role=\"button\" type=\"button\" routerLink=\"/access-control/edit/{{access_control._id.toString()}}\" *ngIf=\"editAllowed\">Edit</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <ul class=\"pagination justify-content-end\" *ngIf=\"count > limit\">\n            <li class=\"page-item\" *ngIf=\"total_pages > 1\" [class.disabled]=\"page == 1\">\n              <button class=\"page-link\" (click)=\"getAccessControls(1)\">First</button>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"page == 1\">\n              <button class=\"page-link\" (click)=\"getAccessControls(page - 1)\">Prev</button>\n            </li>\n            <li class=\"page-item active\">\n              <button class=\"page-link\">{{page}}</button>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"page === total_pages\">\n              <button class=\"page-link\" (click)=\"getAccessControls(page + 1)\">Next</button>\n            </li>\n            <li class=\"page-item\" *ngIf=\"page < total_pages\" [class.disabled]=\"page === total_pages\">\n              <button class=\"page-link\" (click)=\"getAccessControls(total_pages)\">Last</button>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/access-control/access-control.service */ "./src/app/modules/access-control/access-control.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, access_control_service_1, authorization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListAccessControlComponent = (function () {
        function ListAccessControlComponent(accessControlService, authorization) {
            this.accessControlService = accessControlService;
            this.authorization = authorization;
            this.editAllowed = false;
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
                            return [4, this.authorization.hasAccess({
                                    entity: 'access_control:access_control',
                                    action: 'create:post'
                                })];
                        case 1:
                            _a.createAllowed = _c.sent();
                            _b = this;
                            return [4, this.authorization.hasAccess({
                                    entity: 'access_control:access_control',
                                    action: 'update:put'
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
            this.page = page;
            this.accessControlService.getAccessControls(this.page, this.limit).then(function (response) {
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
                providers: [access_control_service_1.AccessControlService, authorization_service_1.Authorization]
            }),
            __metadata("design:paramtypes", [access_control_service_1.AccessControlService, authorization_service_1.Authorization])
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

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"offset-2 col-8\">\n              <form #accessControlForm=\"ngForm\">\n\n                <div class=\"form-group row\">\n                  <label class=\"col-3 col-form-label\">\n                    <span class=\"required\">*</span> Title\n                  </label>\n                  <div class=\"col-9\">\n                    <input type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" [(ngModel)]=\"access_control.title\" #title=\"ngModel\" required minlength=\"3\" [attr.disabled]=\"access_control.access_control_type != 2\" />\n                    <app-inline-error [control]=\"title\"></app-inline-error>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-3 col-form-label\">Description</label>\n                  <div class=\"col-9\">\n                    <textarea name=\"description\" class=\"form-control\" id=\"description\" [(ngModel)]=\"access_control.description\"></textarea>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-3 col-form-label\">\n                    <span class=\"required\">*</span> Entities\n                  </label>\n\n                  <div class=\"col-9\">\n\n                    <ngx-treeview [config]=\"entitiesConfig\" [items]=\"entityList\" (selectedChange)=\"selectedEntity($event)\">\n                    </ngx-treeview>\n                    <input type=\"hidden\" name=\"entities\" [(ngModel)]=\"access_control.entities\" #entities=\"ngModel\" app-minitems=\"1\" />\n                    <app-inline-error [control]=\"entities\"></app-inline-error>\n\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-3 col-form-label\">\n                    <span class=\"required\">*</span> Users\n                  </label>\n\n                  <div class=\"col-9\">\n\n                    <ng-select name=\"users\" [loading]=\"loadingUsers\" [items]=\"userList\" [multiple]=\"true\" [addTag]=\"false\" [closeOnSelect]=\"false\" [clearable]=\"true\" [searchable]=\"true\" [searchFn]=\"filterUsers\" [clearSearchOnAdd]=\"true\" [hideSelected]=\"true\" [disabled]=\"disableUsers\" bindLabel=\"name\" bindValue=\"user_id\" placeholder=\"Select Users\" notFoundText=\"No user found\" [(ngModel)]=\"access_control.users\" #users=\"ngModel\" required>\n\n                      <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\" let-search=\"searchTerm\">\n                        {{item.name}} <{{item.email_id}}>\n                      </ng-template>\n\n                    </ng-select>\n                    <app-inline-error [control]=\"users\"></app-inline-error>\n\n                  </div>\n\n                </div>\n\n                <div class=\"form-actions row\">\n                  <div class=\"col-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"postAccessControl()\">Submit</button>\n                    <button type=\"reset\" class=\"btn btn-link\" routerLink=\"/access-control\">Cancel</button>\n                  </div>\n                </div>\n\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <content>\n    <span *ngIf=\"!access_control._id || !access_control._id.toString()\">Added</span>\n    <span *ngIf=\"access_control._id && access_control._id.toString()\">Updated</span>\n    <span>&nbsp;Access Control successfully.</span>\n  </content>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <content>\n    <span>There was an error&nbsp;</span>\n    <span *ngIf=\"!access_control._id || !access_control._id.toString()\">creating</span>\n    <span *ngIf=\"access_control._id && access_control._id.toString()\">updating</span>\n    <span>&nbsp;the access control.</span>\n    <br>\n    <p>Details: {{error}}</p>\n  </content>\n</app-error-modal>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/access-control/access-control.service */ "./src/app/modules/access-control/access-control.service.ts"), __webpack_require__(/*! modules/employee/employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! config/constants/access-control */ "./src/app/config/constants/access-control.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! shared/helpers/utility */ "./src/app/shared/helpers/utility.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, ngx_treeview_1, router_1, success_modal_component_1, error_modal_component_1, access_control_service_1, employee_service_1, access_control_1, profile_service_1, utility_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserSearchItem = (function () {
        function UserSearchItem() {
        }
        return UserSearchItem;
    }());
    var ManageAccessControlComponent = (function () {
        function ManageAccessControlComponent(route, accessControlService, employeeService) {
            this.route = route;
            this.accessControlService = accessControlService;
            this.employeeService = employeeService;
            this.access_control = new access_control_service_1.AccessControl();
            this.disableUsers = false;
            this.disableEntities = false;
            this.loadingUsers = false;
            this.userList = [];
            this.entitiesConfig = {
                hasAllCheckBox: false,
                hasFilter: false,
                hasDivider: false,
                hasCollapseExpand: false,
                decoupleChildFromParent: false,
                maxHeight: 500
            };
            this.error = '';
            if (this.route.snapshot.params['id']) {
                this.access_control._id = this.route.snapshot.params['id'];
            }
        }
        ManageAccessControlComponent.prototype.ngOnInit = function () {
            if (this.access_control._id) {
                this.__loadAccessControl();
            }
            else {
                this.__loadEntities();
                this.__loadUsers();
            }
        };
        ManageAccessControlComponent.prototype.__getIndex = function (list, value, key) {
            var index = -1;
            for (var i in list) {
                if (list[i][key] === value) {
                    index = parseInt(i, 10);
                    break;
                }
            }
            return index;
        };
        ManageAccessControlComponent.prototype.__checked = function (id, action, method) {
            if (this.access_control.entities.length === 0) {
                return false;
            }
            var action_method = action + ':' + method;
            for (var _i = 0, _a = this.access_control.entities; _i < _a.length; _i++) {
                var entity = _a[_i];
                if (entity.entity_id === id) {
                    if (entity.actions.indexOf(action_method) !== -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
            return false;
        };
        ManageAccessControlComponent.prototype.__loadEntities = function () {
            var _this = this;
            var create = utility_1.default.empty(this.access_control._id);
            this.accessControlService.getEntities()
                .then(function (response) {
                var entityList = new Array();
                var i, j, module_id, entity_id;
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var row = response_1[_i];
                    module_id = 'all-' + row.module.toLowerCase();
                    i = _this.__getIndex(entityList, module_id, 'value');
                    if (i === -1) {
                        var newEntity = new ngx_treeview_1.TreeviewItem({
                            value: module_id,
                            text: row.module,
                            collapsed: true,
                            disabled: _this.disableEntities
                        });
                        if (create) {
                            newEntity.checked = false;
                        }
                        entityList.push(newEntity);
                        i = entityList.length - 1;
                    }
                    entity_id = row.module.toLowerCase() + '--' + row._id;
                    j = _this.__getIndex(entityList[i].children, entity_id, 'value');
                    if (j === -1) {
                        var entityItem = new ngx_treeview_1.TreeviewItem({
                            value: row.module.toLowerCase() + '--' + row._id,
                            text: row.entity,
                            collapsed: true,
                            disabled: _this.disableEntities
                        });
                        if (create) {
                            entityItem.checked = false;
                        }
                        if (entityList[i].children) {
                            entityList[i].children.push(entityItem);
                        }
                        else {
                            entityList[i].children = new Array(entityItem);
                        }
                        j = entityList[i].children.length - 1;
                    }
                    for (var _a = 0, _b = row.actions; _a < _b.length; _a++) {
                        var action = _b[_a];
                        var actionItem = new ngx_treeview_1.TreeviewItem({
                            value: row._id + '--' + action.action + ':' + action.method,
                            text: action.title,
                            checked: _this.__checked(row._id, action.action, action.method),
                            disabled: _this.disableEntities
                        });
                        if (entityList[i].children[j].children) {
                            entityList[i].children[j].children.push(actionItem);
                        }
                        else {
                            entityList[i].children[j].children = new Array(actionItem);
                        }
                    }
                }
                _this.entityList = entityList;
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageAccessControlComponent.prototype.selectedEntity = function (event) {
            var self = this;
            self.access_control.entities = [];
            this.accessControlForm.controls.entities.markAsTouched();
            event.map(function (entity) {
                var entityComponents = entity.split('--');
                var index = self.__getIndex(self.access_control.entities, entityComponents[0], 'entity_id');
                if (index === -1) {
                    self.access_control.entities.push({
                        entity_id: entityComponents[0],
                        actions: []
                    });
                    index = self.access_control.entities.length - 1;
                }
                self.access_control.entities[index].actions.push(entityComponents[1]);
            });
        };
        ManageAccessControlComponent.prototype.__loadUsers = function () {
            var _this = this;
            this.loadingUsers = true;
            this.employeeService.getEmployees(null, 0, 0, ['email_id', 'name'])
                .then(function (response) {
                _this.userList = response.users.map(function (user) {
                    var item = new UserSearchItem();
                    item.user_id = user._id;
                    item.email_id = user.email_id;
                    item.name = profile_service_1.Name.getFullName(user.name);
                    return item;
                });
                _this.loadingUsers = false;
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageAccessControlComponent.prototype.__loadAccessControl = function () {
            var _this = this;
            this.accessControlService.getAccessControl(this.access_control._id)
                .then(function (access_control) {
                _this.access_control.title = access_control.title;
                _this.access_control.description = access_control.description;
                _this.access_control.access_control_type = access_control.access_control_type;
                _this.access_control.users = access_control.users.map(function (user) {
                    return user.user_id;
                });
                _this.access_control.entities = access_control.entities.map(function (entity) {
                    var newEntity = new access_control_service_1.Entity();
                    newEntity.entity_id = entity.entity_id;
                    newEntity.actions = entity.actions.map(function (action) {
                        return action.action + ':' + action.method;
                    });
                    return newEntity;
                });
                if (access_control.access_control_type === access_control_1.TYPE.LOCKED_ENTITY) {
                    _this.disableEntities = true;
                }
                else if (access_control.access_control_type === access_control_1.TYPE.LOCKED_USER) {
                    _this.disableUsers = true;
                }
                _this.__loadEntities();
                if (access_control.access_control_type !== access_control_1.TYPE.LOCKED_USER) {
                    _this.__loadUsers();
                }
                else {
                    _this.userList = access_control.users.map(function (user) {
                        var item = new UserSearchItem();
                        item.name = user.name;
                        item.user_id = user.user_id;
                        return item;
                    });
                }
            });
        };
        ManageAccessControlComponent.prototype.postAccessControl = function () {
            var _this = this;
            this.error = '';
            if (this.access_control._id && this.access_control._id.toString()) {
                this.accessControlService.putAccessControl(this.access_control)
                    .then(function (response) {
                    _this.successModal.show('/access-control');
                }).catch(function (err) {
                    _this.error = err.error.message.text;
                    _this.errorModal.show();
                });
            }
            else {
                this.accessControlService.postAccessControl(this.access_control)
                    .then(function (response) {
                    _this.successModal.show('/access-control');
                }).catch(function (err) {
                    _this.error = err.error.message.text;
                    _this.errorModal.show();
                });
            }
        };
        ManageAccessControlComponent.prototype.filterUsers = function (term, item) {
            var regex = new RegExp(term, 'i');
            return item.email_id.match(regex) || item.name.match(regex);
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
                providers: [access_control_service_1.AccessControlService, employee_service_1.EmployeeService],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute, access_control_service_1.AccessControlService, employee_service_1.EmployeeService])
        ], ManageAccessControlComponent);
        return ManageAccessControlComponent;
    }());
    exports.ManageAccessControlComponent = ManageAccessControlComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=access-control-access-control-module.js.map