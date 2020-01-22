(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./src/app/modules/organization/organization-tree/organization-tree.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/organization/organization-tree/organization-tree.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <ngx-treeview [config]=\"treeConfig\" [items]=\"employeeTree\">\n          </ngx-treeview>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/organization/organization-tree/organization-tree.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/organization/organization-tree/organization-tree.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-organization-tree .treeview-container {\n  max-height: 100% !important; }\n\napp-organization-tree .treeview-item .form-check .form-check-input {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hpdC1hZ2cvbXktd29yay9leGF0YXNrL2FwcC5leGF0YXNrL3NyYy9hcHAvbW9kdWxlcy9vcmdhbml6YXRpb24vb3JnYW5pemF0aW9uLXRyZWUvb3JnYW5pemF0aW9uLXRyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSwyQkFBMkIsRUFBQTs7QUFIL0I7RUFTUSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24tdHJlZS9vcmdhbml6YXRpb24tdHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1vcmdhbml6YXRpb24tdHJlZSB7XG5cbiAgLnRyZWV2aWV3LWNvbnRhaW5lciB7XG4gICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRyZWV2aWV3LWl0ZW0ge1xuICAgIC5mb3JtLWNoZWNrIHtcbiAgICAgIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/organization/organization-tree/organization-tree.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/organization/organization-tree/organization-tree.component.ts ***!
  \***************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/organization/organization.service */ "./src/app/modules/organization/organization.service.ts"), __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! ../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, organization_service_1, ngx_treeview_1, profile_service_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrganizationTreeComponent = (function () {
        function OrganizationTreeComponent(organizationService, exatask) {
            this.organizationService = organizationService;
            this.exatask = exatask;
            this.treeConfig = ngx_treeview_1.TreeviewConfig.create({
                hasAllCheckBox: false,
                hasFilter: false,
                hasCollapseExpand: false,
                decoupleChildFromParent: false
            });
            this.exatask.setTitle('Organization Tree');
        }
        OrganizationTreeComponent.prototype.ngOnInit = function () {
            this.__loadTree();
        };
        OrganizationTreeComponent.prototype.__populateTreeItems = function (items) {
            var tree = new Array();
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                var text = profile_service_1.Name.getFullName(item.name) + ', ' + item.designation;
                var treeitem = new ngx_treeview_1.TreeviewItem({
                    text: text,
                    value: item._id
                });
                if (item.subordinates) {
                    treeitem.collapsed = true;
                    treeitem.children = this.__populateTreeItems(item.subordinates);
                }
                tree.push(treeitem);
            }
            return tree;
        };
        OrganizationTreeComponent.prototype.__loadTree = function () {
            var _this = this;
            this.organizationService.getTree()
                .then(function (response) {
                _this.employeeTree = _this.__populateTreeItems(response.tree);
            });
        };
        OrganizationTreeComponent = __decorate([
            core_1.Component({
                selector: 'app-organization-tree',
                template: __webpack_require__(/*! ./organization-tree.component.html */ "./src/app/modules/organization/organization-tree/organization-tree.component.html"),
                providers: [organization_service_1.OrganizationService],
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [__webpack_require__(/*! ./organization-tree.component.scss */ "./src/app/modules/organization/organization-tree/organization-tree.component.scss")]
            }),
            __metadata("design:paramtypes", [organization_service_1.OrganizationService,
                exatask_service_1.ExaTask])
        ], OrganizationTreeComponent);
        return OrganizationTreeComponent;
    }());
    exports.OrganizationTreeComponent = OrganizationTreeComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/organization.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/organization/organization.module.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./organization.routing */ "./src/app/modules/organization/organization.routing.ts"), __webpack_require__(/*! ./organization-tree/organization-tree.component */ "./src/app/modules/organization/organization-tree/organization-tree.component.ts"), __webpack_require__(/*! ngx-treeview */ "./node_modules/ngx-treeview/src/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, organization_routing_1, organization_tree_component_1, ngx_treeview_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrganizationModule = (function () {
        function OrganizationModule() {
        }
        OrganizationModule = __decorate([
            core_1.NgModule({
                imports: [
                    organization_routing_1.OrganizationRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    ngx_treeview_1.TreeviewModule
                ],
                declarations: [
                    organization_tree_component_1.OrganizationTreeComponent
                ],
                providers: []
            })
        ], OrganizationModule);
        return OrganizationModule;
    }());
    exports.OrganizationModule = OrganizationModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/organization.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/organization/organization.routing.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./organization-tree/organization-tree.component */ "./src/app/modules/organization/organization-tree/organization-tree.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, organization_tree_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Organization'
            },
            children: [
                {
                    path: 'tree',
                    data: {
                        title: 'Tree',
                        access: {
                            module: 'organization',
                            entity: 'organization',
                            action: 'tree'
                        }
                    },
                    component: organization_tree_component_1.OrganizationTreeComponent
                },
                {
                    path: 'department',
                    loadChildren: './department/department.module#DepartmentModule'
                },
                {
                    path: 'holiday',
                    loadChildren: './holiday/holiday.module#HolidayModule'
                },
                {
                    path: 'setting',
                    loadChildren: './setting/setting.module#SettingModule'
                }
            ]
        }
    ];
    var OrganizationRoutingModule = (function () {
        function OrganizationRoutingModule() {
        }
        OrganizationRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], OrganizationRoutingModule);
        return OrganizationRoutingModule;
    }());
    exports.OrganizationRoutingModule = OrganizationRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=20.2248bfc18c4f17139ba0.js.map