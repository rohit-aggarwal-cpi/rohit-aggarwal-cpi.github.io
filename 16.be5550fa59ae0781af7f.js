(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./src/app/modules/employee/employee-access-control/employee-access-control.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/employee/employee-access-control/employee-access-control.module.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js"), __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js"), __webpack_require__(/*! ./employee-access-control.routing */ "./src/app/modules/employee/employee-access-control/employee-access-control.routing.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! modules/application-directives.module */ "./src/app/modules/application-directives.module.ts"), __webpack_require__(/*! ./manage-employee-access-control/manage-employee-access-control.component */ "./src/app/modules/employee/employee-access-control/manage-employee-access-control/manage-employee-access-control.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, ngx_treeview_1, ng_select_1, employee_access_control_routing_1, application_components_module_1, application_pipes_module_1, application_directives_module_1, manage_employee_access_control_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeeAccessControlModule = (function () {
        function EmployeeAccessControlModule() {
        }
        EmployeeAccessControlModule = __decorate([
            core_1.NgModule({
                imports: [
                    employee_access_control_routing_1.EmployeeAccessControlRoutingModule,
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
                    manage_employee_access_control_component_1.ManageEmployeeAccessControlComponent
                ],
                providers: []
            })
        ], EmployeeAccessControlModule);
        return EmployeeAccessControlModule;
    }());
    exports.EmployeeAccessControlModule = EmployeeAccessControlModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/employee-access-control/employee-access-control.routing.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/employee/employee-access-control/employee-access-control.routing.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./manage-employee-access-control/manage-employee-access-control.component */ "./src/app/modules/employee/employee-access-control/manage-employee-access-control/manage-employee-access-control.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, manage_employee_access_control_component_1) {
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
                    path: 'edit/:id',
                    data: {
                        title: 'Update',
                        access: {
                            module: 'employee',
                            entity: 'access-control',
                            action: 'update'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: manage_employee_access_control_component_1.ManageEmployeeAccessControlComponent
                }
            ]
        }
    ];
    var EmployeeAccessControlRoutingModule = (function () {
        function EmployeeAccessControlRoutingModule() {
        }
        EmployeeAccessControlRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], EmployeeAccessControlRoutingModule);
        return EmployeeAccessControlRoutingModule;
    }());
    exports.EmployeeAccessControlRoutingModule = EmployeeAccessControlRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/employee-access-control/employee-access-control.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/employee/employee-access-control/employee-access-control.service.ts ***!
  \*********************************************************************************************/
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
    var UserAccessControlAttribute = (function () {
        function UserAccessControlAttribute() {
        }
        return UserAccessControlAttribute;
    }());
    exports.UserAccessControlAttribute = UserAccessControlAttribute;
    var UserAccessControlUpdateAttributes = (function () {
        function UserAccessControlUpdateAttributes() {
        }
        return UserAccessControlUpdateAttributes;
    }());
    exports.UserAccessControlUpdateAttributes = UserAccessControlUpdateAttributes;
    var UserAccessControl = (function () {
        function UserAccessControl() {
        }
        return UserAccessControl;
    }());
    exports.UserAccessControl = UserAccessControl;
    var UserAccessControlUpdate = (function () {
        function UserAccessControlUpdate() {
        }
        return UserAccessControlUpdate;
    }());
    exports.UserAccessControlUpdate = UserAccessControlUpdate;
    var EmployeeAccessControlService = (function (_super) {
        __extends(EmployeeAccessControlService, _super);
        function EmployeeAccessControlService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._base_url = '/employees/accesscontrols';
            return _this;
        }
        EmployeeAccessControlService.prototype.getEmployeeAccessControl = function (id) {
            return this.get(this._base_url + '/' + id)
                .then(function (response) { return response; });
        };
        EmployeeAccessControlService.prototype.patchAccessControl = function (user_id, user_access_control) {
            return this.patch(this._base_url + '/' + user_id.toString(), user_access_control)
                .then(function (response) { return response; });
        };
        EmployeeAccessControlService = __decorate([
            core_1.Injectable()
        ], EmployeeAccessControlService);
        return EmployeeAccessControlService;
    }(api_service_1.Api));
    exports.EmployeeAccessControlService = EmployeeAccessControlService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/employee/employee-access-control/manage-employee-access-control/manage-employee-access-control.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/employee/employee-access-control/manage-employee-access-control/manage-employee-access-control.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"offset-2 col-8\">\n              <form #userAccessControlForm=\"ngForm\">\n\n                <div class=\"form-group row\">\n                  <label for=\"name\" class=\"col-md-3 col-form-label\">Name</label>\n                  <div class=\"col-md-9\">\n                    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\" name=\"name\" [disabled]=\"true\" [(ngModel)]=\"user_details.name\" />\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label for=\"email-id\" class=\"col-md-3 col-form-label\">E-Mail ID</label>\n                  <div class=\"col-md-9\">\n                    <input type=\"text\" class=\"form-control\" id=\"email-id\" placeholder=\"E-Mail ID\" name=\"email-id\" [disabled]=\"true\" [(ngModel)]=\"user_details.email_id\" />\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\">Entities</label>\n\n                  <div class=\"col-md-9\">\n\n                    <ngx-treeview [config]=\"entitiesConfig\" [items]=\"entityList\" (selectedChange)=\"selectedEntity($event)\">\n                    </ngx-treeview>\n\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3 col-form-label\">Attributes</label>\n\n                  <div class=\"col-md-9\">\n                    <ngx-treeview [config]=\"attributesConfig\" [items]=\"attributeList\" (selectedChange)=\"selectedAttribute($event)\">\n                    </ngx-treeview>\n                    <input type=\"hidden\" name=\"attributes\" [(ngModel)]=\"user_access_control.attributes\" #attributes=\"ngModel\" />\n                  </div>\n                </div>\n\n                <div class=\"form-actions row\">\n                  <div class=\"col-12 text-right\">\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"exatask.trackEvent('user-access-control', 'submit', user_access_control._id.toString()); submitUserAccessControl()\">Submit</button>\n                    <button type=\"reset\" class=\"btn btn-link\" routerLink=\"/employee\" (click)=\"exatask.trackEvent('user-access-control', 'cancel', user_access_control._id.toString())\">Cancel</button>\n                  </div>\n                </div>\n\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    Update Access Control successfully.\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    There was an error&nbsp;updating the access control.\n    <br>\n    <p>Details: {{error}}</p>\n  </div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/employee/employee-access-control/manage-employee-access-control/manage-employee-access-control.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/employee/employee-access-control/manage-employee-access-control/manage-employee-access-control.component.ts ***!
  \*************************************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/employee/employee-access-control/employee-access-control.service */ "./src/app/modules/employee/employee-access-control/employee-access-control.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js"), __webpack_require__(/*! ../../../access-control/access-control.service */ "./src/app/modules/access-control/access-control.service.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! ../../../../core/providers/user.service */ "./src/app/core/providers/user.service.ts"), __webpack_require__(/*! ../../employee.service */ "./src/app/modules/employee/employee.service.ts"), __webpack_require__(/*! ../../../user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, employee_access_control_service_1, success_modal_component_1, error_modal_component_1, router_1, ngx_treeview_1, access_control_service_1, lodash_1, user_service_1, employee_service_1, profile_service_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ManageEmployeeAccessControlComponent = (function () {
        function ManageEmployeeAccessControlComponent(route, userAccessControlService, accessControlService, employeeService, user, exatask) {
            this.route = route;
            this.userAccessControlService = userAccessControlService;
            this.accessControlService = accessControlService;
            this.employeeService = employeeService;
            this.user = user;
            this.exatask = exatask;
            this.access_controls = new Array();
            this.user_access_control = new employee_access_control_service_1.UserAccessControl();
            this.user_access_control_update = new employee_access_control_service_1.UserAccessControlUpdate();
            this.inherited_actions = [];
            this.inherited_attributes = [];
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
            this.exatask.setTitle('Manage Employee ACL');
            this.user_details = user;
            if (this.route.snapshot.params.id) {
                this.user_id = this.route.snapshot.params.id;
            }
        }
        ManageEmployeeAccessControlComponent.prototype.ngOnInit = function () {
            this.__loadUserAccessControl();
            this.__loadUser();
        };
        ManageEmployeeAccessControlComponent.prototype.__checked = function (action_id) {
            return this.user_access_control.actions.indexOf(action_id) !== -1 || this.inherited_actions.indexOf(action_id) !== -1;
        };
        ManageEmployeeAccessControlComponent.prototype.__disabled = function (action_id) {
            return this.inherited_actions.indexOf(action_id) !== -1;
        };
        ManageEmployeeAccessControlComponent.prototype.__getTreeviewItem = function (value, text, disabled, checked) {
            checked = !!checked;
            disabled = !!disabled;
            return new ngx_treeview_1.TreeviewItem({
                value: value,
                text: text,
                collapsed: true,
                disabled: disabled,
                checked: checked
            });
        };
        ManageEmployeeAccessControlComponent.prototype.__prepareAttributeItem = function (type, data, attribute, model) {
            var checked = false, disabled = false;
            if (data.default && data.default.indexOf(attribute.attribute) !== -1) {
                checked = true;
                disabled = true;
            }
            if (this.user_access_control.attributes.length !== 0) {
                for (var _i = 0, _a = this.user_access_control.attributes; _i < _a.length; _i++) {
                    var attr = _a[_i];
                    if (attr.model === model && (attr[type + '_all'] === true || attr[type].indexOf(attribute) !== -1)) {
                        checked = true;
                    }
                }
                for (var _b = 0, _c = this.inherited_attributes; _b < _c.length; _b++) {
                    var attr = _c[_b];
                    if (attr.model === model && (attr[type + '_all'] === true || attr[type].indexOf(attribute) !== -1)) {
                        checked = true;
                        disabled = true;
                    }
                }
            }
            var treeitem_value = model + '--' + type + '--' + attribute.attribute;
            return this.__getTreeviewItem(treeitem_value, attribute.name, disabled, checked);
        };
        ManageEmployeeAccessControlComponent.prototype.__loadUser = function () {
            var _this = this;
            this.employeeService.getEmployeeDetails(this.user_id)
                .then(function (user) {
                _this.user_details = user;
                _this.user_details.name = profile_service_1.Name.getFullName(user.name);
                _this.exatask.setTitle('Manage Employee ACL : ' + _this.user_details.name);
            });
        };
        ManageEmployeeAccessControlComponent.prototype.__prepareAttributes = function (attributes) {
            attributes.forEach(function (attribute, index) {
                if (attribute.assigned_find) {
                    if (!attribute.assigned_find || attribute.assigned_find.length === 0) {
                        delete attribute.assigned_find;
                    }
                }
                if (attribute.assigned_update) {
                    if (!attribute.assigned_update || attribute.assigned_update.length === 0) {
                        delete attribute.assigned_update;
                    }
                }
                if (!attribute.assigned_find && !attribute.assigned_update) {
                    delete attributes[index];
                }
            });
            attributes = attributes.filter(function (attribute) {
                return !!attribute;
            });
            return attributes;
        };
        ManageEmployeeAccessControlComponent.prototype.__loadUserAccessControl = function () {
            var _this = this;
            var dataPromises = [], self = this;
            var dataPromise;
            this.userAccessControlService.getEmployeeAccessControl(this.user_id)
                .then(function (user_access_control) {
                self.user_access_control = user_access_control;
                for (var _i = 0, _a = self.user_access_control.access_controls; _i < _a.length; _i++) {
                    var access_control_id = _a[_i];
                    dataPromise = self.accessControlService.getAccessControl(access_control_id)
                        .then(function (access_control) {
                        self.inherited_actions = lodash_1.union(self.inherited_actions, access_control.actions);
                        self.inherited_attributes = lodash_1.union(self.inherited_attributes, access_control.attributes);
                        self.access_controls.push(access_control);
                    });
                    dataPromises.push(dataPromise);
                }
                Promise.all(dataPromises).then(function (response) {
                    self.inherited_actions = lodash_1.uniq(_this.inherited_actions);
                    var preparedInheritedAttributes = {};
                    for (var _i = 0, _a = self.inherited_attributes; _i < _a.length; _i++) {
                        var attribute = _a[_i];
                        if (!preparedInheritedAttributes[attribute.model]) {
                            preparedInheritedAttributes[attribute.model] = new access_control_service_1.AccessControlAttribute();
                            preparedInheritedAttributes[attribute.model].model = attribute.model;
                        }
                        preparedInheritedAttributes[attribute.model].find =
                            lodash_1.union(preparedInheritedAttributes[attribute.model].find, attribute.find);
                        preparedInheritedAttributes[attribute.model].update =
                            lodash_1.union(preparedInheritedAttributes[attribute.model].update, attribute.update);
                        if (attribute.find_all) {
                            preparedInheritedAttributes[attribute.model].find_all = attribute.find_all;
                        }
                        if (attribute.update_all) {
                            preparedInheritedAttributes[attribute.model].update_all = attribute.update_all;
                        }
                    }
                    self.inherited_attributes = [];
                    for (var attribute in preparedInheritedAttributes) {
                        if (preparedInheritedAttributes.hasOwnProperty(attribute)) {
                            preparedInheritedAttributes[attribute].find = lodash_1.uniq(preparedInheritedAttributes[attribute].find);
                            preparedInheritedAttributes[attribute].update = lodash_1.uniq(preparedInheritedAttributes[attribute].update);
                            self.inherited_attributes.push(preparedInheritedAttributes[attribute]);
                        }
                    }
                    _this.__loadEntities();
                    _this.__loadAttributes();
                });
            });
        };
        ManageEmployeeAccessControlComponent.prototype.__loadEntities = function () {
            var _this = this;
            this.accessControlService.getEntities()
                .then(function (response) {
                var entityList = new Array();
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var module_1 = response_1[_i];
                    var module_disabled = true;
                    var tree_entities = new Array();
                    for (var _a = 0, _b = module_1.entities; _a < _b.length; _a++) {
                        var entity = _b[_a];
                        var entity_disabled = true;
                        var tree_actions = new Array();
                        for (var _c = 0, _d = entity.actions; _c < _d.length; _c++) {
                            var action = _d[_c];
                            var action_disabled = _this.__disabled(action.action_id);
                            tree_actions.push(_this.__getTreeviewItem(action.action_id, action.title, action_disabled, _this.__checked(action.action_id)));
                            entity_disabled = entity_disabled && action_disabled;
                        }
                        var entity_tree_item = _this.__getTreeviewItem(entity._id, entity.entity, entity_disabled, true);
                        entity_tree_item.children = tree_actions;
                        tree_entities.push(entity_tree_item);
                        module_disabled = module_disabled && entity_disabled;
                    }
                    var module_tree_item = _this.__getTreeviewItem(module_1.module_code, module_1.module, module_disabled, true);
                    module_tree_item.children = tree_entities;
                    entityList.push(module_tree_item);
                }
                _this.entityList = entityList;
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        ManageEmployeeAccessControlComponent.prototype.__loadAttributes = function () {
            var _this = this;
            this.accessControlService.getAttributes()
                .then(function (response) {
                var attributeList = new Array();
                var findAttribute, updateAttribute;
                for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                    var row = response_2[_i];
                    var allowedAttributeDetails = {
                        model: row.model,
                        find: [],
                        update: []
                    };
                    var newAttributeChildren = [];
                    var rowDisabled = true;
                    if (row.find) {
                        var findDisabled = true;
                        var findAttributeChildren = [];
                        for (var _a = 0, _b = row.attributes; _a < _b.length; _a++) {
                            var attribute = _b[_a];
                            var attributeItem = _this.__prepareAttributeItem('find', row.find, attribute, row.model);
                            findAttributeChildren.push(attributeItem);
                            findDisabled = findDisabled && attributeItem.disabled;
                            if ((row.find.default && row.find.default.indexOf(attribute.attribute) === -1) ||
                                (row.find.blocked && row.find.blocked.indexOf(attribute.attribute) === -1) && !attributeItem.disabled) {
                                allowedAttributeDetails.find.push(attribute.attribute);
                            }
                        }
                        rowDisabled = rowDisabled && findDisabled;
                        findAttribute = _this.__getTreeviewItem(row.model + '--find', 'Retrieve', findDisabled, true);
                        newAttributeChildren.push(findAttribute);
                        findAttribute.children = findAttributeChildren;
                    }
                    if (row.update) {
                        var updateDisabled = true;
                        var updateAttributeChildren = [];
                        for (var _c = 0, _d = row.attributes; _c < _d.length; _c++) {
                            var attribute = _d[_c];
                            var attributeItem = _this.__prepareAttributeItem('update', row.update, attribute, row.model);
                            updateAttributeChildren.push(attributeItem);
                            updateDisabled = updateDisabled && attributeItem.disabled;
                            if ((row.update.default && row.update.default.indexOf(attribute.attribute) === -1) ||
                                (row.update.blocked && row.update.blocked.indexOf(attribute.attribute) === -1) && !attributeItem.disabled) {
                                allowedAttributeDetails.update.push(attribute.attribute);
                            }
                        }
                        rowDisabled = rowDisabled && updateDisabled;
                        updateAttribute = _this.__getTreeviewItem(row.model + '--update', 'Update', updateDisabled, true);
                        newAttributeChildren.push(updateAttribute);
                        updateAttribute.children = updateAttributeChildren;
                    }
                    var newAttribute = _this.__getTreeviewItem(row.model, row.name, rowDisabled, true);
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
        ManageEmployeeAccessControlComponent.prototype.selectedEntity = function (event) {
            var self = this;
            self.user_access_control_update.assigned_actions = [];
            event.map(function (entity) {
                if (self.inherited_actions.indexOf(entity) === -1) {
                    self.user_access_control_update.assigned_actions.push(entity);
                    self.user_access_control_update.assigned_actions = lodash_1.uniq(self.user_access_control_update.assigned_actions);
                }
            });
        };
        ManageEmployeeAccessControlComponent.prototype.selectedAttribute = function (event) {
            var self = this;
            self.user_access_control_update.attributes = [];
            event.map(function (attribute) {
                var attributeComponents = attribute.split('--');
                var model = attributeComponents[0], operation = attributeComponents[1], attr = attributeComponents[2];
                var index = lodash_1.findIndex(self.user_access_control_update.attributes, ['model', model]);
                var attribute_index = lodash_1.findIndex(self.allowedAttributes, ['model', model]);
                if (index === -1) {
                    self.user_access_control_update.attributes.push({
                        model: model,
                        find_all: false,
                        assigned_find: [],
                        revoked_find: [],
                        update_all: false,
                        assigned_update: [],
                        revoked_update: []
                    });
                    index = self.user_access_control_update.attributes.length - 1;
                }
                var allowed_attribute = self.allowedAttributes[attribute_index][operation];
                if (allowed_attribute.indexOf(attr) !== -1) {
                    self.user_access_control_update.attributes[index]['assigned_' + operation].push(attr);
                }
                if (allowed_attribute.length > 0 &&
                    allowed_attribute.length === self.user_access_control_update.attributes[index]['assigned_' + operation].length) {
                    self.user_access_control_update.attributes[index][operation + '_all'] = true;
                }
            });
        };
        ManageEmployeeAccessControlComponent.prototype.submitUserAccessControl = function () {
            var _this = this;
            this.error = '';
            this.user_access_control_update.attributes = this.__prepareAttributes(this.user_access_control_update.attributes);
            this.userAccessControlService.patchAccessControl(this.user_id, this.user_access_control_update)
                .then(function (response) {
                _this.successModal.show('/employee');
            }).catch(function (err) {
                _this.error = err.error.message.text;
                _this.errorModal.show();
            });
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ManageEmployeeAccessControlComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ManageEmployeeAccessControlComponent.prototype, "errorModal", void 0);
        __decorate([
            core_1.ViewChild('userAccessControlForm'),
            __metadata("design:type", Object)
        ], ManageEmployeeAccessControlComponent.prototype, "userAccessControlForm", void 0);
        ManageEmployeeAccessControlComponent = __decorate([
            core_1.Component({
                selector: 'app-update-user-access-control',
                template: __webpack_require__(/*! ./manage-employee-access-control.component.html */ "./src/app/modules/employee/employee-access-control/manage-employee-access-control/manage-employee-access-control.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [employee_access_control_service_1.EmployeeAccessControlService, access_control_service_1.AccessControlService, employee_service_1.EmployeeService]
            }),
            __metadata("design:paramtypes", [router_1.ActivatedRoute,
                employee_access_control_service_1.EmployeeAccessControlService,
                access_control_service_1.AccessControlService,
                employee_service_1.EmployeeService,
                user_service_1.User,
                exatask_service_1.ExaTask])
        ], ManageEmployeeAccessControlComponent);
        return ManageEmployeeAccessControlComponent;
    }());
    exports.ManageEmployeeAccessControlComponent = ManageEmployeeAccessControlComponent;
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


/***/ })

}]);
//# sourceMappingURL=16.be5550fa59ae0781af7f.js.map