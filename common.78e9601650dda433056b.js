(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/config/constants/access-control.ts":
/*!****************************************************!*\
  !*** ./src/app/config/constants/access-control.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var STATUS;
    (function (STATUS) {
        STATUS[STATUS["INACTIVE"] = 0] = "INACTIVE";
        STATUS[STATUS["ACTIVE"] = 1] = "ACTIVE";
    })(STATUS = exports.STATUS || (exports.STATUS = {}));
    ;
    var TYPE;
    (function (TYPE) {
        TYPE[TYPE["LOCKED_ENTITY"] = 1] = "LOCKED_ENTITY";
        TYPE[TYPE["CUSTOM"] = 2] = "CUSTOM";
        TYPE[TYPE["LOCKED_USER"] = 3] = "LOCKED_USER";
    })(TYPE = exports.TYPE || (exports.TYPE = {}));
    ;
    var OPERATION;
    (function (OPERATION) {
        OPERATION[OPERATION["CREATE"] = 1] = "CREATE";
        OPERATION[OPERATION["UPDATE"] = 2] = "UPDATE";
    })(OPERATION = exports.OPERATION || (exports.OPERATION = {}));
    ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/config/constants/compensatory-off.ts":
/*!******************************************************!*\
  !*** ./src/app/config/constants/compensatory-off.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var STATUS;
    (function (STATUS) {
        STATUS[STATUS["APPLIED"] = 1] = "APPLIED";
        STATUS[STATUS["APPROVED"] = 2] = "APPROVED";
        STATUS[STATUS["REJECTED"] = 3] = "REJECTED";
        STATUS[STATUS["DELETED"] = 4] = "DELETED";
    })(STATUS = exports.STATUS || (exports.STATUS = {}));
    ;
    var EXPIRY;
    (function (EXPIRY) {
        EXPIRY[EXPIRY["NEVER"] = 1] = "NEVER";
        EXPIRY[EXPIRY["POLICY_END"] = 2] = "POLICY_END";
        EXPIRY[EXPIRY["AFTER_MONTH"] = 3] = "AFTER_MONTH";
        EXPIRY[EXPIRY["AFTER_DAY"] = 4] = "AFTER_DAY";
    })(EXPIRY = exports.EXPIRY || (exports.EXPIRY = {}));
    ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/config/constants/leave.ts":
/*!*******************************************!*\
  !*** ./src/app/config/constants/leave.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TYPE;
    (function (TYPE) {
        TYPE["EL"] = "EL";
        TYPE["CL"] = "CL";
        TYPE["SL"] = "SL";
        TYPE["ML"] = "ML";
        TYPE["PL"] = "PL";
        TYPE["LWP"] = "LWP";
        TYPE["COMP"] = "COMP";
    })(TYPE = exports.TYPE || (exports.TYPE = {}));
    ;
    var DURATION;
    (function (DURATION) {
        DURATION[DURATION["FULL_DAY"] = 1] = "FULL_DAY";
        DURATION[DURATION["FIRST_HALF"] = 2] = "FIRST_HALF";
        DURATION[DURATION["SECOND_HALF"] = 3] = "SECOND_HALF";
    })(DURATION = exports.DURATION || (exports.DURATION = {}));
    ;
    var STATUS;
    (function (STATUS) {
        STATUS[STATUS["APPLIED"] = 1] = "APPLIED";
        STATUS[STATUS["APPROVED"] = 2] = "APPROVED";
        STATUS[STATUS["REJECTED"] = 3] = "REJECTED";
        STATUS[STATUS["DELETED"] = 4] = "DELETED";
    })(STATUS = exports.STATUS || (exports.STATUS = {}));
    ;
    var OPERATION;
    (function (OPERATION) {
        OPERATION[OPERATION["APPLIED"] = 1] = "APPLIED";
        OPERATION[OPERATION["APPROVED"] = 2] = "APPROVED";
        OPERATION[OPERATION["REJECTED"] = 3] = "REJECTED";
        OPERATION[OPERATION["DELETED"] = 4] = "DELETED";
    })(OPERATION = exports.OPERATION || (exports.OPERATION = {}));
    ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/access-control/access-control.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/access-control/access-control.service.ts ***!
  \******************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! core/services/api.service */ "./src/app/core/services/api.service.ts"), __webpack_require__(/*! config/constants/access-control */ "./src/app/config/constants/access-control.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, http_1, api_service_1, access_control_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AccessControlDetailUser = (function () {
        function AccessControlDetailUser() {
        }
        return AccessControlDetailUser;
    }());
    var AccessControlDetailEntityAction = (function () {
        function AccessControlDetailEntityAction() {
        }
        return AccessControlDetailEntityAction;
    }());
    var AccessControlDetailEntity = (function () {
        function AccessControlDetailEntity() {
            this.actions = new Array();
        }
        return AccessControlDetailEntity;
    }());
    var Actions = (function () {
        function Actions() {
        }
        return Actions;
    }());
    var Entity = (function () {
        function Entity() {
            this.entity_id = '';
            this.actions = new Array();
        }
        return Entity;
    }());
    exports.Entity = Entity;
    var Entities = (function () {
        function Entities() {
        }
        return Entities;
    }());
    exports.Entities = Entities;
    ;
    var AccessControl = (function () {
        function AccessControl() {
            this.title = '';
            this.entities = new Array();
            this.users = new Array();
        }
        return AccessControl;
    }());
    exports.AccessControl = AccessControl;
    var AccessControlDetail = (function () {
        function AccessControlDetail() {
            this.title = '';
            this.entities = new Array();
            this.users = new Array();
        }
        return AccessControlDetail;
    }());
    exports.AccessControlDetail = AccessControlDetail;
    var AccessControlService = (function (_super) {
        __extends(AccessControlService, _super);
        function AccessControlService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/accesscontrols';
            _this._entities_base_url = '/entities';
            return _this;
        }
        AccessControlService.prototype.getEntities = function () {
            return this.get(this._entities_base_url)
                .then(function (response) {
                return response['data'];
            });
        };
        AccessControlService.prototype.getFeatureEntities = function () {
            return this.get(this._entities_base_url + '/features')
                .then(function (response) {
                return response['data'];
            });
        };
        AccessControlService.prototype.getAccessControls = function (page, limit) {
            var query = new Map();
            if (page > 0) {
                query.set('page', page);
            }
            if (limit > 0) {
                query.set('limit', limit);
            }
            return this.get(this._base_url, query)
                .then(function (response) {
                return {
                    count: response['count'],
                    access_controls: response['data']
                };
            });
        };
        AccessControlService.prototype.getAccessControl = function (id) {
            return this.get(this._base_url + '/' + id)
                .then(function (response) { return response; });
        };
        AccessControlService.prototype.postAccessControl = function (access_control) {
            return this.post(this._base_url, access_control)
                .then(function (response) { return response; });
        };
        AccessControlService.prototype.putAccessControl = function (access_control) {
            var updateData = new AccessControl();
            updateData.title = access_control.title;
            updateData.description = access_control.description;
            if (access_control.access_control_type !== access_control_1.TYPE.LOCKED_ENTITY) {
                updateData.entities = access_control.entities;
            }
            else {
                delete updateData.entities;
            }
            if (access_control.access_control_type !== access_control_1.TYPE.LOCKED_USER) {
                updateData.users = access_control.users;
            }
            else {
                delete updateData.users;
            }
            return this.put(this._base_url + '/' + access_control._id.toString(), updateData)
                .then(function (response) { return response; });
        };
        AccessControlService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], AccessControlService);
        return AccessControlService;
    }(api_service_1.Api));
    exports.AccessControlService = AccessControlService;
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! core/services/api.service */ "./src/app/core/services/api.service.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, http_1, api_service_1, profile_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Supervisor = (function () {
        function Supervisor() {
        }
        return Supervisor;
    }());
    exports.Supervisor = Supervisor;
    var Employee = (function () {
        function Employee() {
            this.name = new profile_service_1.Name();
            this.email_id = '';
        }
        return Employee;
    }());
    exports.Employee = Employee;
    var EmployeeService = (function (_super) {
        __extends(EmployeeService, _super);
        function EmployeeService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/employees';
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
        EmployeeService.prototype.markAsSupervisor = function (employee_id) {
            return this.patch(this._base_url + '/supervisors/mark/' + employee_id)
                .then(function (response) { return response; });
        };
        EmployeeService.prototype.unmarkAsSupervisor = function (employee_id) {
            return this.patch(this._base_url + '/supervisors/unmark/' + employee_id)
                .then(function (response) { return response; });
        };
        EmployeeService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], EmployeeService);
        return EmployeeService;
    }(api_service_1.Api));
    exports.EmployeeService = EmployeeService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/leave/policy/leave-policy.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/leave/policy/leave-policy.service.ts ***!
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
    var LeaveApproval = (function () {
        function LeaveApproval() {
            this.required = false;
            this.from_supervisor = false;
        }
        return LeaveApproval;
    }());
    exports.LeaveApproval = LeaveApproval;
    var CompensatoryOffExpiry = (function () {
        function CompensatoryOffExpiry() {
        }
        return CompensatoryOffExpiry;
    }());
    exports.CompensatoryOffExpiry = CompensatoryOffExpiry;
    var CompensatoryOffApproval = (function () {
        function CompensatoryOffApproval() {
            this.from_supervisor = false;
        }
        return CompensatoryOffApproval;
    }());
    exports.CompensatoryOffApproval = CompensatoryOffApproval;
    var CompensatoryOff = (function () {
        function CompensatoryOff() {
            this.expiry = new CompensatoryOffExpiry();
            this.approval = new CompensatoryOffApproval();
        }
        return CompensatoryOff;
    }());
    exports.CompensatoryOff = CompensatoryOff;
    var Leave = (function () {
        function Leave() {
            this.carry_forward = false;
            this.sandwich = false;
        }
        return Leave;
    }());
    exports.Leave = Leave;
    var LeavePolicy = (function () {
        function LeavePolicy() {
            this.approval = new LeaveApproval();
            this.reiterate = false;
            this.leaves = [];
            this.leaves.push(new Leave());
        }
        LeavePolicy.prototype.addLeave = function () {
            this.leaves.push(new Leave());
        };
        LeavePolicy.prototype.removeLeave = function (index) {
            this.leaves.splice(index, 1);
        };
        return LeavePolicy;
    }());
    exports.LeavePolicy = LeavePolicy;
    var LeavePolicyElement = (function (_super) {
        __extends(LeavePolicyElement, _super);
        function LeavePolicyElement() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.reiterate = false;
            _this.carry_forward = false;
            _this.sandwich = false;
            _this.approval = new LeaveApproval();
            return _this;
        }
        return LeavePolicyElement;
    }(LeavePolicy));
    exports.LeavePolicyElement = LeavePolicyElement;
    var LeavePolicyService = (function (_super) {
        __extends(LeavePolicyService, _super);
        function LeavePolicyService(http) {
            var _this = _super.call(this, http) || this;
            _this._base_url = '/leaves/policies';
            return _this;
        }
        LeavePolicyService.prototype.getPolicy = function (filters) {
            return this.get(this._base_url, filters)
                .then(function (response) { return response['data']; });
        };
        LeavePolicyService.prototype.postPolicy = function (policy) {
            return this.post(this._base_url, policy)
                .then(function (response) { return response; });
        };
        LeavePolicyService.prototype.putPolicy = function (policy) {
            return this.put(this._base_url + '/' + policy._id, policy)
                .then(function (response) { return response; });
        };
        LeavePolicyService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.HttpClient])
        ], LeavePolicyService);
        return LeavePolicyService;
    }(api_service_1.Api));
    exports.LeavePolicyService = LeavePolicyService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=common.78e9601650dda433056b.js.map