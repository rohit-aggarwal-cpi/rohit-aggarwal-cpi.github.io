(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/app/config/constants/user.ts":
/*!******************************************!*\
  !*** ./src/app/config/constants/user.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var STATUS;
    (function (STATUS) {
        STATUS[STATUS["INACTIVE"] = 0] = "INACTIVE";
        STATUS[STATUS["ACTIVE"] = 1] = "ACTIVE";
        STATUS[STATUS["DELETED"] = 2] = "DELETED";
    })(STATUS = exports.STATUS || (exports.STATUS = {}));
    ;
    var GENDER;
    (function (GENDER) {
        GENDER[GENDER["MALE"] = 1] = "MALE";
        GENDER[GENDER["FEMALE"] = 2] = "FEMALE";
        GENDER[GENDER["OTHER"] = 3] = "OTHER";
    })(GENDER = exports.GENDER || (exports.GENDER = {}));
    ;
    var MARITAL_STATUS;
    (function (MARITAL_STATUS) {
        MARITAL_STATUS[MARITAL_STATUS["UNMARRIED"] = 1] = "UNMARRIED";
        MARITAL_STATUS[MARITAL_STATUS["MARRIED"] = 2] = "MARRIED";
    })(MARITAL_STATUS = exports.MARITAL_STATUS || (exports.MARITAL_STATUS = {}));
    ;
    var OPERATION;
    (function (OPERATION) {
        OPERATION[OPERATION["CREATE"] = 1] = "CREATE";
        OPERATION[OPERATION["SET_PASSWORD"] = 2] = "SET_PASSWORD";
        OPERATION[OPERATION["RESET_PASSWORD"] = 3] = "RESET_PASSWORD";
        OPERATION[OPERATION["CHANGE_PASSWORD"] = 4] = "CHANGE_PASSWORD";
        OPERATION[OPERATION["UPDATE"] = 5] = "UPDATE";
        OPERATION[OPERATION["ASSIGN_LEAVES"] = 6] = "ASSIGN_LEAVES";
    })(OPERATION = exports.OPERATION || (exports.OPERATION = {}));
    ;
    var SOCIAL_SECURITY_TYPE;
    (function (SOCIAL_SECURITY_TYPE) {
        SOCIAL_SECURITY_TYPE["PAN"] = "pan";
        SOCIAL_SECURITY_TYPE["AADHAAR"] = "aadhaar";
        SOCIAL_SECURITY_TYPE["PASSPORT"] = "passport";
    })(SOCIAL_SECURITY_TYPE = exports.SOCIAL_SECURITY_TYPE || (exports.SOCIAL_SECURITY_TYPE = {}));
    ;
    var CALENDAR_DATE_TYPE;
    (function (CALENDAR_DATE_TYPE) {
        CALENDAR_DATE_TYPE[CALENDAR_DATE_TYPE["LEAVE"] = 1] = "LEAVE";
    })(CALENDAR_DATE_TYPE = exports.CALENDAR_DATE_TYPE || (exports.CALENDAR_DATE_TYPE = {}));
    ;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/user/change-password/change-password.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/change-password/change-password.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n\n          <form #passwordForm=\"ngForm\">\n\n            <div class=\"form-group row\">\n              <label class=\"offset-3 col-2 col-form-label\">Current Password</label>\n              <div class=\"col-4\">\n                <input type=\"password\" name=\"current-password\" class=\"form-control\" id=\"current-password\" placeholder=\"Current Password\" [(ngModel)]=\"password.current_password\" #currentPassword=\"ngModel\" required minlength=\"3\">\n                <app-inline-error [control]=\"currentPassword\"></app-inline-error>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"offset-3 col-2 col-form-label\">New Password</label>\n              <div class=\"col-4\">\n                <input type=\"password\" name=\"new-password\" class=\"form-control\" id=\"new-password\" placeholder=\"New Password\" [(ngModel)]=\"password.new_password\" #newPassword=\"ngModel\" required minlength=\"3\" app-exactmatch=\"confirm-password\" app-exactmatch-text=\"New Password\" app-exactmatch-reverse=\"true\">\n                <app-inline-error [control]=\"newPassword\"></app-inline-error>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"offset-3 col-2 col-form-label\">Confirm Password</label>\n              <div class=\"col-4\">\n                <input type=\"password\" name=\"confirm-password\" class=\"form-control\" id=\"comfirm-password\" placeholder=\"Confirm Password\" [(ngModel)]=\"password.confirm_password\" #confirmPassword=\"ngModel\" required minlength=\"3\" app-exactmatch=\"new-password\" app-exactmatch-text=\"New Password\">\n                <app-inline-error [control]=\"confirmPassword\"></app-inline-error>\n              </div>\n            </div>\n\n            <div class=\"row form-group mt-4\">\n              <div class=\"offset-6 col-3 text-right\">\n                <button type=\"button\" class=\"btn btn-link pull-right\" routerLink=\"/dashboard\">Cancel</button>\n                <button [disabled]=\"!passwordForm.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"changePassword()\">Submit</button>\n              </div>\n            </div>\n\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <content>\n    Password changed successfully.\n  </content>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <content>\n    <p>There was an error updating password. {{error}}</p>\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes \">{{attribute}}</li>\n    </ul>\n  </content>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/user/change-password/change-password.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user/change-password/change-password.component.ts ***!
  \***************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, profile_service_1, success_modal_component_1, error_modal_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChangePassword = (function () {
        function ChangePassword() {
            this.current_password = '';
            this.new_password = '';
            this.confirm_password = '';
        }
        return ChangePassword;
    }());
    var error_map = {};
    var ChangePasswordComponent = (function () {
        function ChangePasswordComponent(profileService) {
            this.profileService = profileService;
            this.password = new ChangePassword();
            this.error = '';
            this.invalid_attributes = [];
        }
        ChangePasswordComponent.prototype.ngOnInit = function () {
        };
        ChangePasswordComponent.prototype.__validate = function () {
            return true;
        };
        ChangePasswordComponent.prototype.changePassword = function () {
            var _this = this;
            if (this.__validate()) {
                var change_password = {
                    current_password: this.password.current_password,
                    new_password: this.password.new_password
                };
                this.profileService.changePassword(change_password).then(function (data) {
                    _this.successModal.show('/dashboard');
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
            }
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ChangePasswordComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ChangePasswordComponent.prototype, "errorModal", void 0);
        ChangePasswordComponent = __decorate([
            core_1.Component({
                selector: 'app-change-password',
                template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/modules/user/change-password/change-password.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [profile_service_1.ProfileService]
            }),
            __metadata("design:paramtypes", [profile_service_1.ProfileService])
        ], ChangePasswordComponent);
        return ChangePasswordComponent;
    }());
    exports.ChangePasswordComponent = ChangePasswordComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/user/profile/profile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/user/profile/profile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <form #myForm=\"ngForm\">\n        <tabset>\n\n          <tab heading=\"Personal Information\">\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Name</label>\n              <div class=\"col-3\">\n                <input type=\"text\" name=\"first-name\" class=\"form-control\" id=\"first-name\" placeholder=\"First Name\" [(ngModel)]=\"profile.name.first\">\n              </div>\n              <div class=\"col-3\">\n                <input type=\"text\" name=\"middle-name\" class=\"form-control\" id=\"middle-name\" placeholder=\"Middle Name\" [(ngModel)]=\"profile.name.middle\">\n              </div>\n              <div class=\"col-3\">\n                <input type=\"text\" name=\"last-name\" class=\"form-control\" id=\"last-name\" placeholder=\"Last Name\" [(ngModel)]=\"profile.name.last\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">E-Mail ID</label>\n              <div class=\"col-3\">\n                <input type=\"text\" name=\"email-id\" class=\"form-control\" id=\"email-id\" [(ngModel)]=\"profile.email_id\" readonly>\n              </div>\n              <label class=\"col-3 col-form-label\">Contact Number</label>\n              <div class=\"col-3\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\"><span class=\"input-group-text\">+91</span></span>\n                  <input type=\"text\" name=\"contact-number\" class=\"form-control\" id=\"contact-number\" placeholder=\"Contact Number\" [(ngModel)]=\"profile.contact_number\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Permanent Address</label>\n              <div class=\"col-9\">\n                <app-address name=\"permanent-address\" id=\"permanent-address\" [(address)]=\"profile.permanent_address\"></app-address>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Date of Birth</label>\n              <div class=\"col-3\">\n                <div class=\"input-group\">\n                  <input type=\"text\" name=\"date-of-birth\" class=\"form-control\" id=\"date-of-birth\" [(ngModel)]=\"profile.date_of_birth\" bsDatepicker #dob=\"bsDatepicker\" [bsConfig]=\"dobConfig\">\n                  <span class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn\" (click)=\"dob.show($event);\" [attr.aria-expanded]=\"dob.isOpen\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </button>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Gender</label>\n              <div class=\"col-3\">\n                <select name=\"gender\" id=\"gender\" class=\"form-control\" [(ngModel)]=\"profile.gender_id\">\n                  <option *ngFor=\"let gender of genders | constantsarray\" [ngValue]=\"gender\">\n                    {{ gender | constants: 'user.gender' }}\n                  </option>\n                </select>\n              </div>\n              <label class=\"col-3 col-form-label\">Marital Status</label>\n              <div class=\"col-3\">\n                <select name=\"marital-status\" id=\"marital-status\" class=\"form-control\" [(ngModel)]=\"profile.marital_status_id\">\n                  <option *ngFor=\"let marital_status of marital_statuses | constantsarray\" [ngValue]=\"marital_status\">\n                    {{ marital_status | constants: 'user.marital_status' }}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </tab>\n\n          <tab heading=\"Additional Information\">\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Correspondence Address</label>\n              <div class=\"col-9\">\n                <app-address name=\"correspondence-address\" id=\"correspondace-address\" [(address)]=\"profile.correspondence_address\"></app-address>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Alternate E-Mail ID's</label>\n              <div class=\"col-6\">\n                <div class=\"row\">\n                  <div class=\"col-6 form-group\" *ngFor=\"let email_id of alternate_email_ids; let i = index\">\n                    <div class=\"input-group\">\n                      <input type=\"email\" class=\"form-control\" name=\"alternate-email-id-{{i}}\" id=\"alternate-email-id-{{i}}\" placeholder=\"Alternate E-Mail ID\"\n                        [(ngModel)]=\"email_id.email_id\">\n                      <span class=\"input-group-append\">\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeEmailId(i)\">\n                          <i class=\"fa fa-remove\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"addEmailId()\">Add</button>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Alternate Contact Number's</label>\n              <div class=\"col-6\">\n                <div class=\"row\">\n                  <div class=\"col-6 form-group\" *ngFor=\"let contact_number of profile.alternate_contact_numbers; let i = index\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">{{contact_number.isd_code}}</span>\n                      </span>\n                      <input type=\"text\" class=\"form-control\" name=\"alternate-contact-number-{{i}}\" id=\"alternate-contact-number-{{i}}\" placeholder=\"Alternate Contact Number\"\n                        [(ngModel)]=\"contact_number.contact_number\">\n                      <span class=\"input-group-append\">\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeContactNumber(i)\">\n                          <i class=\"fa fa-remove\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"addContactNumber()\">Add</button>\n              </div>\n            </div>\n          </tab>\n\n          <tab heading=\"Social Security\">\n\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th width=\"10%\">#</th>\n                  <th width=\"40%\">Type</th>\n                  <th width=\"40%\">Number</th>\n                  <th>\n                    <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addSocialSecurity()\" [hidden]=\"maxSocialSecurityTypes\">Add</button>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let social_security of profile.social_security; let i = index\">\n                  <td>{{i + 1}}.</td>\n                  <td>\n                    <select name=\"social-security-type-{{i}}\" id=\"social-security-type-{{i}}\" class=\"form-control\" [(ngModel)]=\"social_security.type\">\n                      <option *ngFor=\"let social_type of social_security_types | constantsarray\" [ngValue]=\"social_type\">\n                        {{ social_type | constants:'user.social_security' }}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <input type=\"text\" class=\"form-control\" name=\"social-security-number-{{i}}\" id=\"social-security-number-{{i}}\"\n                      placeholder=\"Number\" [(ngModel)]=\"social_security.number\">\n                  </td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeSocialSecurity(i)\">\n                      <i class=\"fa fa-remove\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n          </tab>\n\n          <tab heading=\"Emergency Contacts\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th width=\"5%\">#</th>\n                  <th width=\"30%\">Name</th>\n                  <th width=\"30%\">Relation</th>\n                  <th width=\"30%\">Contact Number</th>\n                  <th>\n                    <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addEmergencyContact()\">Add</button>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let emergency_contact of profile.emergency_contacts; let i = index\">\n                  <td>{{i + 1}}.</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control\" name=\"emergency-contact-name-{{i}}\" id=\"emergency-contact-name-{{i}}\"\n                      placeholder=\"Name\" [(ngModel)]=\"emergency_contact.name\">\n                  </td>\n                  <td>\n                    <input type=\"text\" class=\"form-control\" name=\"emergency-contact-relation-{{i}}\" id=\"emergency-contact-relation-{{i}}\"\n                      placeholder=\"Relation\" [(ngModel)]=\"emergency_contact.relation\">\n                  </td>\n                  <td>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">{{emergency_contact.isd_code}}</span>\n                      </span>\n                      <input type=\"text\" class=\"form-control\" name=\"emergency-contact-number-{{i}}\" id=\"emergency-contact-number-{{i}}\" placeholder=\"Contact Number\"\n                        [(ngModel)]=\"emergency_contact.contact_number\">\n                    </div>\n                  </td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeEmergencyContact(i)\">\n                      <i class=\"fa fa-remove\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </tab>\n        </tabset>\n\n        <div class=\"form-actions mb-4 mt-4\">\n          <div class=\"col-12 text-right\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateProfile($event)\">Submit</button>\n            <button type=\"button\" class=\"btn btn-link\" routerLink=\"/dashboard\">Cancel</button>\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <content>\n    Profile updated successfully.\n  </content>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <content>\n    <p>There was an error updating profile. {{error}}</p>\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes \">{{attribute}}</li>\n    </ul>\n  </content>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/user/profile/profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/user/profile/profile.component.ts ***!
  \***********************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! config/constants/user */ "./src/app/config/constants/user.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! shared/helpers/utility */ "./src/app/shared/helpers/utility.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, user_1, profile_service_1, utility_1, success_modal_component_1, error_modal_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmailId = (function () {
        function EmailId() {
        }
        return EmailId;
    }());
    var error_map = {
        first: 'First Name',
        middle: 'Middle Name',
        last: 'Last Name',
        locality: 'Locality (Address)',
        contact_number: 'Contact Number',
        name: 'Name'
    };
    var ProfileComponent = (function () {
        function ProfileComponent(profileService) {
            this.profileService = profileService;
            this.genders = user_1.GENDER;
            this.marital_statuses = user_1.MARITAL_STATUS;
            this.social_security_types = user_1.SOCIAL_SECURITY_TYPE;
            this.profile = new profile_service_1.Profile();
            this.maxSocialSecurityTypes = false;
            this.dobConfig = {
                maxDate: new Date(),
                dateInputFormat: 'YYYY-MM-DD',
                containerClass: 'theme-blue',
                showWeekNumbers: false
            };
            this.error = '';
            this.invalid_attributes = [];
        }
        ProfileComponent.prototype.__validate = function () {
            return true;
        };
        ProfileComponent.prototype.__sanitizeUpdate = function (profile) {
            var mapping = {
                'gender_id': 'gender',
                'marital_status_id': 'marital_status'
            };
            for (var i in profile) {
                if (mapping[i] !== undefined) {
                    profile[mapping[i]] = profile[i];
                    delete profile[i];
                }
            }
            if (profile.permanent_address !== undefined) {
                profile.permanent_address = this.profile.permanent_address;
            }
            if (profile.correspondence_address !== undefined) {
                profile.correspondence_address = this.profile.correspondence_address;
            }
            if (profile.date_of_birth !== undefined) {
                var date_of_birth = new Date(profile.date_of_birth);
                profile.date_of_birth = {
                    day: date_of_birth.getDate(),
                    month: date_of_birth.getMonth() + 1,
                    year: date_of_birth.getFullYear()
                };
            }
            return profile;
        };
        ProfileComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.profileService.getProfile('profile1,profile2,profile3')
                .then(function (profile) {
                _this.profile = utility_1.default.copy(profile);
                _this.original_profile = utility_1.default.copy(_this.profile);
                if (_this.profile.alternate_email_ids === undefined) {
                    _this.profile.alternate_email_ids = new Array();
                }
                if (_this.profile.alternate_contact_numbers === undefined) {
                    _this.profile.alternate_contact_numbers = new Array();
                }
                if (_this.profile.social_security === undefined) {
                    _this.profile.social_security = new Array();
                }
                if (_this.profile.emergency_contacts === undefined) {
                    _this.profile.emergency_contacts = new Array();
                }
                _this.maxSocialSecurityTypes = _this.profile.social_security.length === Object.keys(user_1.MARITAL_STATUS).length;
                _this.alternate_email_ids = new Array();
                for (var _i = 0, _a = _this.profile.alternate_email_ids; _i < _a.length; _i++) {
                    var i = _a[_i];
                    var emailId = new EmailId();
                    emailId.email_id = i;
                    _this.alternate_email_ids.push(emailId);
                }
            });
        };
        ProfileComponent.prototype.addEmailId = function () {
            var emailId = new EmailId();
            emailId.email_id = '';
            this.alternate_email_ids.push(emailId);
        };
        ProfileComponent.prototype.removeEmailId = function (index) {
            this.alternate_email_ids.splice(index, 1);
        };
        ProfileComponent.prototype.addContactNumber = function () {
            var contactNumber = new profile_service_1.ContactNumber();
            contactNumber.isd_code = '+91';
            contactNumber.contact_number = '';
            this.profile.alternate_contact_numbers.push(contactNumber);
        };
        ProfileComponent.prototype.removeContactNumber = function (index) {
            this.profile.alternate_contact_numbers.splice(index, 1);
        };
        ProfileComponent.prototype.addSocialSecurity = function () {
            var socialSecurity = new profile_service_1.SocialSecurity();
            socialSecurity.type = '';
            socialSecurity.number = '';
            this.profile.social_security.push(socialSecurity);
            this.maxSocialSecurityTypes = this.profile.social_security.length === Object.keys(user_1.MARITAL_STATUS).length;
        };
        ProfileComponent.prototype.removeSocialSecurity = function (index) {
            this.profile.social_security.splice(index, 1);
            this.maxSocialSecurityTypes = this.profile.social_security.length === Object.keys(user_1.MARITAL_STATUS).length;
        };
        ProfileComponent.prototype.addEmergencyContact = function () {
            var emergencyContact = new profile_service_1.EmergencyContact();
            emergencyContact.name = '';
            emergencyContact.relation = '';
            emergencyContact.isd_code = '+91';
            emergencyContact.contact_number = '';
            this.profile.emergency_contacts.push(emergencyContact);
        };
        ProfileComponent.prototype.removeEmergencyContact = function (index) {
            this.profile.emergency_contacts.splice(index, 1);
        };
        ProfileComponent.prototype.updateProfile = function () {
            var _this = this;
            this.profile.alternate_email_ids = new Array();
            for (var _i = 0, _a = this.alternate_email_ids; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.email_id.length > 0) {
                    this.profile.alternate_email_ids.push(i.email_id);
                }
            }
            this.profile.alternate_email_ids = Array.from(new Set(this.profile.alternate_email_ids));
            var social_security = {};
            for (var _b = 0, _c = this.profile.social_security; _b < _c.length; _b++) {
                var social = _c[_b];
                if (social.type.length > 0 && social.number.length > 0) {
                    social.verified = false;
                    social_security[social.type] = social;
                }
            }
            this.profile.social_security = new Array();
            for (var key in social_security) {
                if (social_security.hasOwnProperty(key)) {
                    this.profile.social_security.push(social_security[key]);
                }
            }
            var emergency_contacts = new Array();
            for (var _d = 0, _e = this.profile.emergency_contacts; _d < _e.length; _d++) {
                var contact = _e[_d];
                if (contact.name.length > 0 && contact.relation.length > 0 && contact.contact_number.length > 0) {
                    emergency_contacts.push(contact);
                }
            }
            this.profile.emergency_contacts = Array.from(new Set(emergency_contacts));
            if (this.__validate()) {
                var profile = utility_1.default.compare(this.original_profile, this.profile);
                if (profile !== undefined) {
                    profile = this.__sanitizeUpdate(profile);
                    this.error = '';
                    this.invalid_attributes = [];
                    this.profileService.updateProfile(profile).then(function (data) {
                        _this.original_profile = utility_1.default.copy(_this.profile);
                        _this.successModal.show('/dashboard');
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
                }
            }
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], ProfileComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], ProfileComponent.prototype, "errorModal", void 0);
        ProfileComponent = __decorate([
            core_1.Component({
                selector: 'app-profile',
                template: __webpack_require__(/*! ./profile.component.html */ "./src/app/modules/user/profile/profile.component.html"),
                providers: [profile_service_1.ProfileService]
            }),
            __metadata("design:paramtypes", [profile_service_1.ProfileService])
        ], ProfileComponent);
        return ProfileComponent;
    }());
    exports.ProfileComponent = ProfileComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/user/user.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js"), __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js"), __webpack_require__(/*! ./user.routing */ "./src/app/modules/user/user.routing.ts"), __webpack_require__(/*! ./profile/profile.component */ "./src/app/modules/user/profile/profile.component.ts"), __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/modules/user/change-password/change-password.component.ts"), __webpack_require__(/*! modules/application-directives.module */ "./src/app/modules/application-directives.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, tabs_1, datepicker_1, user_routing_1, profile_component_1, change_password_component_1, application_directives_module_1, application_pipes_module_1, application_components_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserModule = (function () {
        function UserModule() {
        }
        UserModule = __decorate([
            core_1.NgModule({
                imports: [
                    user_routing_1.UserRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    tabs_1.TabsModule,
                    datepicker_1.BsDatepickerModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_directives_module_1.ApplicationDirectivesModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    profile_component_1.ProfileComponent,
                    change_password_component_1.ChangePasswordComponent
                ],
                providers: []
            })
        ], UserModule);
        return UserModule;
    }());
    exports.UserModule = UserModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/user/user.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/user/user.routing.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./profile/profile.component */ "./src/app/modules/user/profile/profile.component.ts"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/modules/user/change-password/change-password.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, profile_component_1, authentication_service_1, change_password_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: 'profile',
            canActivate: [authentication_service_1.AuthenticationGuard],
            data: {
                title: 'Profile'
            },
            component: profile_component_1.ProfileComponent
        },
        {
            path: 'change-password',
            canActivate: [authentication_service_1.AuthenticationGuard],
            data: {
                title: 'Change Password'
            },
            component: change_password_component_1.ChangePasswordComponent
        }
    ];
    var UserRoutingModule = (function () {
        function UserRoutingModule() {
        }
        UserRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], UserRoutingModule);
        return UserRoutingModule;
    }());
    exports.UserRoutingModule = UserRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=5.745ffc5033eed70c3db1.js.map