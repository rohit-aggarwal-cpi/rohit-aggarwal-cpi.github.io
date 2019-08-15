(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/app/modules/user/profile/profile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/user/profile/profile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <form #myForm=\"ngForm\">\n        <tabset>\n\n          <tab heading=\"Personal Information\">\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Name</label>\n              <div class=\"col-3\">\n                <input type=\"text\" name=\"first-name\" class=\"form-control\" id=\"first-name\" placeholder=\"First Name\" [(ngModel)]=\"profile.name.first\">\n              </div>\n              <div class=\"col-3\">\n                <input type=\"text\" name=\"middle-name\" class=\"form-control\" id=\"middle-name\" placeholder=\"Middle Name\" [(ngModel)]=\"profile.name.middle\">\n              </div>\n              <div class=\"col-3\">\n                <input type=\"text\" name=\"last-name\" class=\"form-control\" id=\"last-name\" placeholder=\"Last Name\" [(ngModel)]=\"profile.name.last\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">E-Mail ID</label>\n              <div class=\"col-3\">\n                <input type=\"text\" name=\"email-id\" class=\"form-control\" id=\"email-id\" [(ngModel)]=\"profile.email_id\" readonly>\n              </div>\n              <label class=\"col-3 col-form-label\">Contact Number</label>\n              <div class=\"col-3\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-prepend\"><span class=\"input-group-text\">+91</span></span>\n                  <input type=\"text\" name=\"contact-number\" class=\"form-control\" id=\"contact-number\" placeholder=\"Contact Number\" [(ngModel)]=\"profile.contact_number\">\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Permanent Address</label>\n              <div class=\"col-9\">\n                <app-address name=\"permanent-address\" id=\"permanent-address\" [(address)]=\"profile.permanent_address\"></app-address>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Date of Birth</label>\n              <div class=\"col-3\">\n                <div class=\"input-group\">\n                  <input type=\"text\" name=\"date-of-birth\" class=\"form-control\" id=\"date-of-birth\" [(ngModel)]=\"profile.date_of_birth\" bsDatepicker #dob=\"bsDatepicker\" [bsConfig]=\"dobConfig\">\n                  <span class=\"input-group-append\">\n                    <button type=\"button\" class=\"btn\" (click)=\"dob.show($event);\" [attr.aria-expanded]=\"dob.isOpen\">\n                      <i class=\"fa fa-calendar\"></i>\n                    </button>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Gender</label>\n              <div class=\"col-3\">\n                <select name=\"gender\" id=\"gender\" class=\"form-control\" [(ngModel)]=\"profile.gender\">\n                  <option *ngFor=\"let gender of genders | constantsarray\" [ngValue]=\"profile.gender\">\n                    {{ gender | constants: 'user.gender' }}\n                  </option>\n                </select>\n              </div>\n              <label class=\"col-3 col-form-label\">Marital Status</label>\n              <div class=\"col-3\">\n                <select name=\"marital-status\" id=\"marital-status\" class=\"form-control\" [(ngModel)]=\"profile.marital_status\">\n                  <option *ngFor=\"let marital_status of marital_statuses | constantsarray\" [ngValue]=\"profile.marital_status\">\n                    {{ marital_status | constants: 'user.marital_status' }}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </tab>\n\n          <tab heading=\"Additional Information\">\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Correspondence Address</label>\n              <div class=\"col-9\">\n                <app-address name=\"correspondence-address\" id=\"correspondace-address\" [(address)]=\"profile.correspondence_address\"></app-address>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Alternate E-Mail ID's</label>\n              <div class=\"col-6\">\n                <div class=\"row\">\n                  <div class=\"col-6 form-group\" *ngFor=\"let email_id of alternate_email_ids; let i = index\">\n                    <div class=\"input-group\">\n                      <input type=\"email\" class=\"form-control\" name=\"alternate-email-id-{{i}}\" id=\"alternate-email-id-{{i}}\" placeholder=\"Alternate E-Mail ID\"\n                        [(ngModel)]=\"email_id.email_id\">\n                      <span class=\"input-group-append\">\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeEmailId(i)\">\n                          <i class=\"fa fa-remove\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"addEmailId()\">Add</button>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-3 col-form-label\">Alternate Contact Number's</label>\n              <div class=\"col-6\">\n                <div class=\"row\">\n                  <div class=\"col-6 form-group\" *ngFor=\"let contact_number of profile.alternate_contact_numbers; let i = index\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">{{contact_number.isd_code}}</span>\n                      </span>\n                      <input type=\"text\" class=\"form-control\" name=\"alternate-contact-number-{{i}}\" id=\"alternate-contact-number-{{i}}\" placeholder=\"Alternate Contact Number\"\n                        [(ngModel)]=\"contact_number.contact_number\">\n                      <span class=\"input-group-append\">\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeContactNumber(i)\">\n                          <i class=\"fa fa-remove\"></i>\n                        </button>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-3\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"addContactNumber()\">Add</button>\n              </div>\n            </div>\n          </tab>\n\n          <tab heading=\"Social Security\">\n\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th width=\"10%\">#</th>\n                  <th width=\"40%\">Type</th>\n                  <th width=\"40%\">Number</th>\n                  <th>\n                    <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addSocialSecurity()\" [hidden]=\"maxSocialSecurityTypes\">Add</button>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let social_security of profile.social_security; let i = index\">\n                  <td>{{i + 1}}.</td>\n                  <td>\n                    <select name=\"social-security-type-{{i}}\" id=\"social-security-type-{{i}}\" class=\"form-control\" [(ngModel)]=\"social_security.type\">\n                      <option *ngFor=\"let social_type of social_security_types | constantsarray\" [ngValue]=\"social_type\">\n                        {{ social_type | constants:'user.social_security' }}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <input type=\"text\" class=\"form-control\" name=\"social-security-number-{{i}}\" id=\"social-security-number-{{i}}\"\n                      placeholder=\"Number\" [(ngModel)]=\"social_security.number\">\n                  </td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeSocialSecurity(i)\">\n                      <i class=\"fa fa-remove\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n\n          </tab>\n\n          <tab heading=\"Emergency Contacts\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th width=\"5%\">#</th>\n                  <th width=\"30%\">Name</th>\n                  <th width=\"30%\">Relation</th>\n                  <th width=\"30%\">Contact Number</th>\n                  <th>\n                    <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addEmergencyContact()\">Add</button>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let emergency_contact of profile.emergency_contacts; let i = index\">\n                  <td>{{i + 1}}.</td>\n                  <td>\n                    <input type=\"text\" class=\"form-control\" name=\"emergency-contact-name-{{i}}\" id=\"emergency-contact-name-{{i}}\"\n                      placeholder=\"Name\" [(ngModel)]=\"emergency_contact.name\">\n                  </td>\n                  <td>\n                    <input type=\"text\" class=\"form-control\" name=\"emergency-contact-relation-{{i}}\" id=\"emergency-contact-relation-{{i}}\"\n                      placeholder=\"Relation\" [(ngModel)]=\"emergency_contact.relation\">\n                  </td>\n                  <td>\n                    <div class=\"input-group\">\n                      <span class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">{{emergency_contact.isd_code}}</span>\n                      </span>\n                      <input type=\"text\" class=\"form-control\" name=\"emergency-contact-number-{{i}}\" id=\"emergency-contact-number-{{i}}\" placeholder=\"Contact Number\"\n                        [(ngModel)]=\"emergency_contact.contact_number\">\n                    </div>\n                  </td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeEmergencyContact(i)\">\n                      <i class=\"fa fa-remove\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </tab>\n        </tabset>\n\n        <div class=\"form-actions mb-4 mt-4\">\n          <div class=\"col-12 text-right\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateProfile($event)\">Submit</button>\n            <button type=\"button\" class=\"btn btn-link\" routerLink=\"/dashboard\">Cancel</button>\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    Profile updated successfully.\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    <p>There was an error updating profile. {{error}}</p>\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes \">{{attribute}}</li>\n    </ul>\n  </div>\n</app-error-modal>"

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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! config/constants/user */ "./src/app/config/constants/user.ts"), __webpack_require__(/*! modules/user/profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! shared/helpers/utility */ "./src/app/shared/helpers/utility.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, lodash_1, user_1, profile_service_1, utility_1, success_modal_component_1, error_modal_component_1) {
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
            this.profile = new profile_service_1.Profile();
            this.maxSocialSecurityTypes = false;
            this.dobConfig = {
                maxDate: new Date(),
                dateInputFormat: 'YYYY-MM-DD',
                containerClass: 'theme-blue',
                showWeekNumbers: false
            };
            this.genders = lodash_1.clone(user_1.GENDER);
            this.marital_statuses = lodash_1.clone(user_1.MARITAL_STATUS);
            this.social_security_types = lodash_1.clone(user_1.SOCIAL_SECURITY_TYPE);
            this.error = '';
            this.invalid_attributes = [];
        }
        ProfileComponent.prototype.__validate = function () {
            return true;
        };
        ProfileComponent.prototype.__sanitizeUpdate = function (profile) {
            if (profile.permanent_address && profile.permanent_address.postcode) {
                profile.permanent_address = this.profile.permanent_address;
            }
            else {
                profile.permanent_address = undefined;
            }
            if (profile.correspondence_address && profile.correspondence_address.postcode) {
                profile.correspondence_address = this.profile.correspondence_address;
            }
            else {
                profile.correspondence_address = undefined;
            }
            if (profile.date_of_birth) {
                var date_of_birth = new Date(profile.date_of_birth.toString());
                profile.date_of_birth = {
                    day: date_of_birth.getDate(),
                    month: date_of_birth.getMonth() + 1,
                    year: date_of_birth.getFullYear()
                };
            }
            else {
                profile.date_of_birth = undefined;
            }
            return profile;
        };
        ProfileComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.profileService.getProfile('profile1,profile2,profile3')
                .then(function (profile) {
                _this.profile = lodash_1.clone(profile);
                _this.original_profile = lodash_1.clone(_this.profile);
                if (!_this.profile.alternate_email_ids) {
                    _this.profile.alternate_email_ids = new Array();
                }
                if (!_this.profile.alternate_contact_numbers) {
                    _this.profile.alternate_contact_numbers = new Array();
                }
                if (!_this.profile.social_security) {
                    _this.profile.social_security = new Array();
                }
                if (!_this.profile.emergency_contacts) {
                    _this.profile.emergency_contacts = new Array();
                }
                if (!_this.profile.permanent_address) {
                    _this.profile.permanent_address = new profile_service_1.Address();
                }
                if (!_this.profile.correspondence_address) {
                    _this.profile.correspondence_address = new profile_service_1.Address();
                }
                if (_this.profile.date_of_birth) {
                    var date_of_birth = _this.profile.date_of_birth;
                    _this.profile.date_of_birth = date_of_birth.year + '-' + date_of_birth.month + '-' + date_of_birth.day;
                    _this.original_profile.date_of_birth = _this.profile.date_of_birth;
                }
                _this.maxSocialSecurityTypes = (_this.profile.social_security.length === Object.keys(user_1.SOCIAL_SECURITY_TYPE).length);
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
                        _this.original_profile = lodash_1.clone(_this.profile);
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

/***/ "./src/app/modules/user/security/security.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/security/security.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n\n          <form #passwordForm=\"ngForm\">\n\n            <h2>Change Password</h2>\n\n            <div class=\"form-group row\">\n              <label class=\"col-2 col-form-label\">Current Password</label>\n              <div class=\"col-4\">\n                <input type=\"password\" name=\"current-password\" class=\"form-control\" id=\"current-password\" placeholder=\"Current Password\" [(ngModel)]=\"password.current_password\" #currentPassword=\"ngModel\" required minlength=\"3\">\n                <app-inline-error [control]=\"currentPassword\"></app-inline-error>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-2 col-form-label\">New Password</label>\n              <div class=\"col-4\">\n                <input type=\"password\" name=\"new-password\" class=\"form-control\" id=\"new-password\" placeholder=\"New Password\" [(ngModel)]=\"password.new_password\" #newPassword=\"ngModel\" required minlength=\"3\" app-exactmatch=\"confirm-password\" app-exactmatch-text=\"New Password\" app-exactmatch-reverse=\"true\">\n                <app-inline-error [control]=\"newPassword\"></app-inline-error>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-2 col-form-label\">Confirm Password</label>\n              <div class=\"col-4\">\n                <input type=\"password\" name=\"confirm-password\" class=\"form-control\" id=\"comfirm-password\" placeholder=\"Confirm Password\" [(ngModel)]=\"password.confirm_password\" #confirmPassword=\"ngModel\" required minlength=\"3\" app-exactmatch=\"new-password\" app-exactmatch-text=\"New Password\">\n                <app-inline-error [control]=\"confirmPassword\"></app-inline-error>\n              </div>\n            </div>\n\n            <div class=\"row form-group mt-4\">\n              <div class=\"offset-3 col-3 text-right\">\n                <button type=\"button\" class=\"btn btn-link pull-right\" routerLink=\"/dashboard\">Cancel</button>\n                <button [disabled]=\"!passwordForm.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"changePassword()\">Change Password</button>\n              </div>\n            </div>\n\n          </form>\n\n          <div *ngIf=\"mfaAllowed\" class=\"mt-5\">\n\n            <h2>Two-factor authentication</h2>\n            <p>Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</p>\n\n            <ul class=\"list-group mb-3\">\n              <li class=\"list-group-item list-group-item-secondary\">\n                <b>Two-factor methods</b>\n              </li>\n              <li class=\"list-group-item\">\n                Authenticator app\n                <span class=\"pull-right\">\n                  <div *ngIf=\"qrCode\">\n                    <label class=\"col-form-label mr-3\">Configured</label>\n                    <a class=\"btn btn-outline-dark\" [routerLink]=\"['/user/multi-factor/qr-code']\">Edit</a>\n                  </div>\n                  <div *ngIf=\"!qrCode\">\n                    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/user/multi-factor/qr-code']\">Configure</a>\n                  </div>\n                </span>\n              </li>\n              <li class=\"list-group-item\">\n                Question & Answer\n                <span class=\"pull-right\">\n                  <div *ngIf=\"questionAnswer\">\n                    <label class=\"col-form-label mr-3\">Configured</label>\n                    <a class=\"btn btn-outline-dark\" [routerLink]=\"['/user/multi-factor/question-answer']\">Edit</a>\n                  </div>\n                  <div *ngIf=\"!questionAnswer\">\n                    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/user/multi-factor/question-answer']\">Configure</a>\n                  </div>\n                </span>\n              </li>\n            </ul>\n            <ul class=\"list-group\" *ngIf=\"qrCode\">\n              <li class=\"list-group-item list-group-item-secondary\">\n                <b>Recovery options</b>\n              </li>\n              <li class=\"list-group-item\" *ngIf=\"qrCode\">\n                Recovery codes\n                <span class=\"pull-right\">\n                  <a class=\"btn btn-outline-primary\" [routerLink]=\"['/user/multi-factor/recovery-codes']\">Show</a>\n                </span>\n              </li>\n            </ul>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>\n    Password changed successfully.\n  </div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>\n    <p>There was an error updating password. {{error}}</p>\n    <ul>\n      <li *ngFor=\"let attribute of invalid_attributes \">{{attribute}}</li>\n    </ul>\n  </div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/user/security/security.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user/security/security.component.ts ***!
  \*************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/providers/access.service */ "./src/app/core/providers/access.service.ts"), __webpack_require__(/*! config/constants/user */ "./src/app/config/constants/user.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, profile_service_1, success_modal_component_1, error_modal_component_1, router_1, access_service_1, user_1) {
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
    var SecurityComponent = (function () {
        function SecurityComponent(profileService, route, access) {
            this.profileService = profileService;
            this.route = route;
            this.access = access;
            this.qrCode = false;
            this.questionAnswer = false;
            this.securityKey = false;
            this.mfaAllowed = false;
            this.password = new ChangePassword();
            this.error = '';
            this.invalid_attributes = [];
        }
        SecurityComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
                            _a = this;
                            return [4, this.access.hasAccess({
                                    module: 'user',
                                    entity: 'mfa',
                                    action: 'enable'
                                })];
                        case 1:
                            _a.mfaAllowed = _b.sent();
                            if (this.mfaAllowed) {
                                this.__loadMfa();
                            }
                            return [2];
                    }
                });
            });
        };
        SecurityComponent.prototype.__validate = function () {
            return true;
        };
        SecurityComponent.prototype.__loadMfa = function () {
            var _this = this;
            this.profileService.getProfile('mfa').then(function (data) {
                if (data.mfa) {
                    for (var _i = 0, _a = data.mfa; _i < _a.length; _i++) {
                        var mfa = _a[_i];
                        switch (mfa.mfa_type) {
                            case user_1.MFA.QR_CODE:
                                _this.qrCode = true;
                                break;
                            case user_1.MFA.QUESTION_ANSWER:
                                _this.questionAnswer = true;
                                break;
                        }
                    }
                }
            }).catch(function (err) {
                _this.error = err;
                _this.errorModal.show();
            });
        };
        SecurityComponent.prototype.changePassword = function () {
            var _this = this;
            if (this.__validate()) {
                var change_password = {
                    current_password: this.password.current_password,
                    new_password: this.password.new_password
                };
                this.profileService.changePassword(change_password).then(function (data) {
                    _this.successModal.show(_this.returnUrl);
                    sessionStorage.removeItem('restrict');
                    sessionStorage.removeItem('url');
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
        ], SecurityComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], SecurityComponent.prototype, "errorModal", void 0);
        SecurityComponent = __decorate([
            core_1.Component({
                selector: 'app-security',
                template: __webpack_require__(/*! ./security.component.html */ "./src/app/modules/user/security/security.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [profile_service_1.ProfileService]
            }),
            __metadata("design:paramtypes", [profile_service_1.ProfileService,
                router_1.ActivatedRoute,
                access_service_1.Access])
        ], SecurityComponent);
        return SecurityComponent;
    }());
    exports.SecurityComponent = SecurityComponent;
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js"), __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js"), __webpack_require__(/*! ./user.routing */ "./src/app/modules/user/user.routing.ts"), __webpack_require__(/*! ./profile/profile.component */ "./src/app/modules/user/profile/profile.component.ts"), __webpack_require__(/*! ./security/security.component */ "./src/app/modules/user/security/security.component.ts"), __webpack_require__(/*! modules/application-directives.module */ "./src/app/modules/application-directives.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, tabs_1, datepicker_1, user_routing_1, profile_component_1, security_component_1, application_directives_module_1, application_pipes_module_1, application_components_module_1, ngx_bootstrap_1) {
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
                    ngx_bootstrap_1.ModalModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_directives_module_1.ApplicationDirectivesModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    profile_component_1.ProfileComponent,
                    security_component_1.SecurityComponent
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! ./profile/profile.component */ "./src/app/modules/user/profile/profile.component.ts"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! ./security/security.component */ "./src/app/modules/user/security/security.component.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, profile_component_1, authentication_service_1, security_component_1, authorization_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: 'profile',
            canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
            data: {
                title: 'Profile',
                access: {
                    module: 'user',
                    entity: 'profile',
                    action: 'update'
                }
            },
            component: profile_component_1.ProfileComponent
        },
        {
            path: 'security',
            canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
            data: {
                title: 'Security',
                access: {
                    module: 'user',
                    entity: 'profile',
                    action: 'changepassword'
                }
            },
            component: security_component_1.SecurityComponent
        },
        {
            path: 'multi-factor',
            loadChildren: './multi-factor/multi-factor.module#MultiFactorModule'
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
//# sourceMappingURL=18.47af9c1e8777ffeb01cf.js.map