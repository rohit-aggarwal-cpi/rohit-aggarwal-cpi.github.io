(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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


/***/ }),

/***/ "./src/app/modules/leave/policy/leave-policy.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/leave/policy/leave-policy.service.ts ***!
  \**************************************************************/
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
    var DepartmentAppliesTo = (function () {
        function DepartmentAppliesTo() {
        }
        return DepartmentAppliesTo;
    }());
    exports.DepartmentAppliesTo = DepartmentAppliesTo;
    var AppliesTo = (function () {
        function AppliesTo() {
        }
        return AppliesTo;
    }());
    exports.AppliesTo = AppliesTo;
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
    var LeavePolicyService = (function (_super) {
        __extends(LeavePolicyService, _super);
        function LeavePolicyService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._base_url = '/leaves/policies';
            return _this;
        }
        LeavePolicyService.prototype.getPolicies = function (filters) {
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
            core_1.Injectable()
        ], LeavePolicyService);
        return LeavePolicyService;
    }(api_service_1.Api));
    exports.LeavePolicyService = LeavePolicyService;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=3.8c745a91533cf7020c8b.js.map