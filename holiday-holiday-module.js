(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["holiday-holiday-module"],{

/***/ "./src/app/modules/metadata/holiday.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/metadata/holiday.service.ts ***!
  \*****************************************************/
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
    var Holiday = (function () {
        function Holiday() {
        }
        return Holiday;
    }());
    exports.Holiday = Holiday;
    ;
    var HolidayService = (function (_super) {
        __extends(HolidayService, _super);
        function HolidayService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/holidays';
            return _this;
        }
        HolidayService.prototype.getHolidays = function (year) {
            return this.get(this._base_url + '/' + year)
                .then(function (response) { return response['data']; });
        };
        HolidayService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], HolidayService);
        return HolidayService;
    }(api_service_1.Api));
    exports.HolidayService = HolidayService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/holiday/holiday.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/organization/holiday/holiday.module.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./holiday.routing */ "./src/app/modules/organization/holiday/holiday.routing.ts"), __webpack_require__(/*! ./manage-holiday/manage-holiday.component */ "./src/app/modules/organization/holiday/manage-holiday/manage-holiday.component.ts"), __webpack_require__(/*! ./list-holiday/list-holiday.component */ "./src/app/modules/organization/holiday/list-holiday/list-holiday.component.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, holiday_routing_1, manage_holiday_component_1, list_holiday_component_1, application_components_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HolidayModule = (function () {
        function HolidayModule() {
        }
        HolidayModule = __decorate([
            core_1.NgModule({
                imports: [
                    holiday_routing_1.HolidayRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    application_components_module_1.ApplicationComponentsModule
                ],
                declarations: [
                    list_holiday_component_1.ListHolidayComponent,
                    manage_holiday_component_1.ManageHolidayComponent
                ],
                providers: []
            })
        ], HolidayModule);
        return HolidayModule;
    }());
    exports.HolidayModule = HolidayModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/holiday/holiday.routing.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/organization/holiday/holiday.routing.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./list-holiday/list-holiday.component */ "./src/app/modules/organization/holiday/list-holiday/list-holiday.component.ts"), __webpack_require__(/*! ./manage-holiday/manage-holiday.component */ "./src/app/modules/organization/holiday/manage-holiday/manage-holiday.component.ts"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, list_holiday_component_1, manage_holiday_component_1, authentication_service_1, authorization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Holiday'
            },
            children: [
                {
                    path: '',
                    redirectTo: 'list'
                },
                {
                    path: 'list',
                    data: {
                        title: 'List',
                        access: {
                            entity: 'organization:holiday',
                            action: 'find:get'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: list_holiday_component_1.ListHolidayComponent
                },
                {
                    path: 'manage',
                    data: {
                        title: 'Manage',
                        access: {
                            entity: 'organization:holiday',
                            action: 'update:put'
                        }
                    },
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    component: manage_holiday_component_1.ManageHolidayComponent
                }
            ]
        }
    ];
    var HolidayRoutingModule = (function () {
        function HolidayRoutingModule() {
        }
        HolidayRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], HolidayRoutingModule);
        return HolidayRoutingModule;
    }());
    exports.HolidayRoutingModule = HolidayRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/holiday/holiday.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/organization/holiday/holiday.service.ts ***!
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
    var Holiday = (function () {
        function Holiday() {
        }
        return Holiday;
    }());
    exports.Holiday = Holiday;
    ;
    var HolidayService = (function (_super) {
        __extends(HolidayService, _super);
        function HolidayService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/organizations/holidays';
            return _this;
        }
        HolidayService.prototype.getHolidays = function (year) {
            return this.get(this._base_url + '/' + year.toString())
                .then(function (response) { return response['data']; });
        };
        HolidayService.prototype.putHolidays = function (year, holidays) {
            return this.put(this._base_url + '/' + year.toString(), {
                'holidays': holidays
            }).then(function (response) { return response['data']; });
        };
        HolidayService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], HolidayService);
        return HolidayService;
    }(api_service_1.Api));
    exports.HolidayService = HolidayService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/holiday/list-holiday/list-holiday.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/organization/holiday/list-holiday/list-holiday.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\" *ngIf=\"manageAllowed\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-primary pull-right\" role='button' type=\"button\" routerLink=\"/organization/holiday/manage\">Manage Holidays</button>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-group col-3 mb-3\">\n              <span class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Year</span>\n              </span>\n              <select type=\"number\" class=\"form-control\" [(ngModel)]=\"selectedYear\" (ngModelChange)=\"loadHolidays(selectedYear)\">\n                <option *ngFor=\"let year of years\">{{year}}</option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"text-center m-5\" *ngIf=\"holidays.length == 0\">\n            <h3>No Holidays configured for organization</h3>\n          </div>\n\n          <table class=\"table table-striped\" *ngIf=\"holidays.length > 0\">\n            <thead>\n              <tr>\n                <th width=\"10%\">#</th>\n                <th width=\"20%\">Date</th>\n                <th width=\"20%\">Day</th>\n                <th>Holiday</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let holiday of holidays; let i = index\">\n                <td>{{i+1}}.</td>\n                <td>{{holiday.date | date: 'dd-MM-yyyy'}}</td>\n                <td>{{holiday.date | date: 'EEEE'}}</td>\n                <td>{{holiday.title}}</td>\n              </tr>\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/organization/holiday/list-holiday/list-holiday.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/organization/holiday/list-holiday/list-holiday.component.ts ***!
  \*************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! modules/organization/holiday/holiday.service */ "./src/app/modules/organization/holiday/holiday.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, holiday_service_1, authorization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListHolidayComponent = (function () {
        function ListHolidayComponent(holidayService, authorization) {
            this.holidayService = holidayService;
            this.authorization = authorization;
            this.holidays = Array();
            this.years = new Set();
            this.manageAllowed = false;
            var currentYear = new Date().getFullYear();
            var tillYears = currentYear;
            for (var year = 2018; year <= tillYears; year++) {
                this.years.add(year);
            }
            this.selectedYear = currentYear;
        }
        ListHolidayComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.authorization.hasAccess({
                                    entity: 'organization:department',
                                    action: 'update:put'
                                })];
                        case 1:
                            _a.manageAllowed = _b.sent();
                            this.loadHolidays(this.selectedYear);
                            return [2];
                    }
                });
            });
        };
        ListHolidayComponent.prototype.loadHolidays = function (year) {
            var _this = this;
            this.holidayService.getHolidays(this.selectedYear).then(function (holidays) { return _this.holidays = holidays; });
        };
        ListHolidayComponent = __decorate([
            core_1.Component({
                selector: 'app-list-holiday',
                template: __webpack_require__(/*! ./list-holiday.component.html */ "./src/app/modules/organization/holiday/list-holiday/list-holiday.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [holiday_service_1.HolidayService]
            }),
            __metadata("design:paramtypes", [holiday_service_1.HolidayService, authorization_service_1.Authorization])
        ], ListHolidayComponent);
        return ListHolidayComponent;
    }());
    exports.ListHolidayComponent = ListHolidayComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/organization/holiday/manage-holiday/manage-holiday.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/organization/holiday/manage-holiday/manage-holiday.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row\">\n            <div class=\"input-group col-3 mb-3\">\n              <span class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Year</span>\n              </span>\n              <select type=\"number\" class=\"form-control\" [(ngModel)]=\"selectedYear\" (ngModelChange)=\"updateHolidaysOnYearChange($event)\">\n                <option *ngFor=\"let year of years\">{{year}}</option>\n              </select>\n            </div>\n          </div>\n\n          <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th width=\"5%\">#</th>\n                  <th width=\"5%\"></th>\n                  <th width=\"50%\">Name</th>\n                  <th width=\"20%\">Date</th>\n                  <th width=\"20%\">Day</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let holiday of holidays;let i = index\">\n                  <td>\n                    {{i + 1}}.\n                  </td>\n                  <td>\n                    <input type=\"checkbox\" id=\"holiday-{{i}}\" [disabled]=\"holiday.mandatory || isWeekend(holiday.date)\" [checked]=\"holiday.selected || holiday.mandatory\" (change)=\"holiday.selected = !holiday.selected\">\n                  </td>\n                  <td>\n                    <label class=\"m-0\" for=\"holiday-{{i}}\">{{holiday.title}}</label>\n                  </td>\n                  <td>\n                    {{holiday.date | date: 'dd-MM-yyyy'}}\n                  </td>\n                  <td>\n                    {{holiday.date | date: 'EEEE'}}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n            <div class=\"card-body\">\n              <button class=\"btn btn-primary btn-lg btn-block\">Submit</button>\n            </div>\n\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Submit\">\n  <content>\n    Updated Holidays Successfully!\n  </content>\n</app-success-modal>\n<app-error-modal #errorModal title=\"Submit Error\">\n  <content>\n    There was an error updating holidays.\n    <br>\n    Details: {{error}}\n  </content>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/organization/holiday/manage-holiday/manage-holiday.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/organization/holiday/manage-holiday/manage-holiday.component.ts ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! modules/metadata/holiday.service */ "./src/app/modules/metadata/holiday.service.ts"), __webpack_require__(/*! modules/organization/holiday/holiday.service */ "./src/app/modules/organization/holiday/holiday.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, success_modal_component_1, error_modal_component_1, holiday_service_1, holiday_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ManageHolidayComponent = (function () {
        function ManageHolidayComponent(holidayService, metaHolidayService) {
            this.holidayService = holidayService;
            this.metaHolidayService = metaHolidayService;
            this.holidays = Array();
            this.years = new Set();
            this.orgHolidays = Array();
            this.error = '';
            var currentYear = new Date().getFullYear();
            var tillYears = currentYear + (new Date().getMonth() > 10 ? 1 : 0);
            for (var year = 2018; year <= tillYears; year++) {
                this.years.add(year);
            }
            this.selectedYear = currentYear;
            this.updateHolidaysOnYearChange();
        }
        ManageHolidayComponent.prototype.ngOnInit = function () { };
        ManageHolidayComponent.prototype.isWeekend = function (date) {
            var parsed_date = new Date(date);
            return parsed_date.getDay() === 0;
        };
        ManageHolidayComponent.prototype.updateHolidaysOnYearChange = function () {
            var _this = this;
            this.holidays = Array();
            this.orgHolidays = Array();
            var holidayPromise = this.metaHolidayService.getHolidays(this.selectedYear)
                .then(function (holidays) { return _this.holidays = holidays; })
                .catch(function (err) {
                if (err.status === 404) {
                    return;
                }
                _this.error = err;
                _this.errorModal.show();
            });
            var orgHolidayPromise = this.holidayService.getHolidays(this.selectedYear)
                .then(function (holidays) {
                if (holidays === undefined) {
                    return;
                }
                holidays.forEach(function (holiday) {
                    _this.orgHolidays.push({
                        date: holiday.date,
                        title: holiday.title
                    });
                });
            })
                .catch(function (err) {
                if (err.status === 404) {
                    return;
                }
                _this.error = err;
                _this.errorModal.show();
            });
            Promise.all([holidayPromise, orgHolidayPromise])
                .then(function () {
                if (_this.orgHolidays.length === 0) {
                    return;
                }
                _this.orgHolidays.forEach(function (orgHoliday) {
                    var selectedHoliday = _this.holidays.find(function (holiday) { return holiday.date === orgHoliday.date; });
                    if (selectedHoliday === undefined) {
                        return;
                    }
                    selectedHoliday.selected = true;
                });
            });
        };
        ManageHolidayComponent.prototype.onSubmit = function () {
            var _this = this;
            this.error = '';
            var holidays = this.holidays.filter(function (holiday) { return holiday.selected === true; })
                .map(function (holiday) {
                return holiday.date;
            });
            this.holidayService.putHolidays(this.selectedYear, holidays)
                .then(function (x) {
                _this.successModal.show('/organization/holiday');
            })
                .catch(function (err) {
                _this.error = err;
                _this.errorModal.show();
            });
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ManageHolidayComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ManageHolidayComponent.prototype, "errorModal", void 0);
        ManageHolidayComponent = __decorate([
            core_1.Component({
                selector: 'app-manage-holiday',
                template: __webpack_require__(/*! ./manage-holiday.component.html */ "./src/app/modules/organization/holiday/manage-holiday/manage-holiday.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [holiday_service_2.HolidayService, holiday_service_1.HolidayService]
            }),
            __metadata("design:paramtypes", [holiday_service_2.HolidayService, holiday_service_1.HolidayService])
        ], ManageHolidayComponent);
        return ManageHolidayComponent;
    }());
    exports.ManageHolidayComponent = ManageHolidayComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=holiday-holiday-module.js.map