(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js":
/*!***********************************************************!*\
  !*** ./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js ***!
  \***********************************************************/
/*! exports provided: ClipboardService, ClipboardDirective, ClipboardModule, ClipboardIfSupportedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function() { return ClipboardIfSupportedDirective; });
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-window-token */ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The following code is heavily copy from https://github.com/zenorocha/clipboard.js
var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
        this.config = {};
        this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.copyResponse$ = this.copySubject.asObservable();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    ClipboardService.prototype.configure = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = config;
    };
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    ClipboardService.prototype.isTargetValid = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * copyFromInputElement
     */
    /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    ClipboardService.prototype.copyFromInputElement = /**
     * copyFromInputElement
     * @param {?} targetElm
     * @return {?}
     */
    function (targetElm) {
        try {
            this.selectTarget(targetElm);
            /** @type {?} */
            var re = this.copyText();
            this.clearSelection(targetElm, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    };
    // this is for IE11 return true even if copy fail
    // this is for IE11 return true even if copy fail
    /**
     * @return {?}
     */
    ClipboardService.prototype.isCopySuccessInIE11 = 
    // this is for IE11 return true even if copy fail
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.copyFromContent = /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     * @param {?} content
     * @param {?=} container
     * @return {?}
     */
    function (content, container) {
        if (container === void 0) { container = this.window.document.body; }
        // check if the temp textarea still belongs to the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        /** @type {?} */
        var toReturn = this.copyFromInputElement(this.tempTextArea);
        if (this.config.cleanUpAfterCopy) {
            this.destroy(this.tempTextArea.parentElement);
        }
        return toReturn;
    };
    // remove temporary textarea if any
    // remove temporary textarea if any
    /**
     * @param {?=} container
     * @return {?}
     */
    ClipboardService.prototype.destroy = 
    // remove temporary textarea if any
    /**
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        if (container === void 0) { container = this.window.document.body; }
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    };
    // select the target html input element
    // select the target html input element
    /**
     * @private
     * @param {?} inputElement
     * @return {?}
     */
    ClipboardService.prototype.selectTarget = 
    // select the target html input element
    /**
     * @private
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    /**
     * @private
     * @return {?}
     */
    ClipboardService.prototype.copyText = /**
     * @private
     * @return {?}
     */
    function () {
        return this.document.execCommand('copy');
    };
    // Moves focus away from `target` and back to the trigger, removes current selection.
    // Moves focus away from `target` and back to the trigger, removes current selection.
    /**
     * @private
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.clearSelection = 
    // Moves focus away from `target` and back to the trigger, removes current selection.
    /**
     * @private
     * @param {?} inputElement
     * @param {?} window
     * @return {?}
     */
    function (inputElement, window) {
        // tslint:disable-next-line:no-unused-expression
        inputElement && inputElement.focus();
        window.getSelection().removeAllRanges();
    };
    // create a fake textarea for copy command
    // create a fake textarea for copy command
    /**
     * @private
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    ClipboardService.prototype.createTempTextArea = 
    // create a fake textarea for copy command
    /**
     * @private
     * @param {?} doc
     * @param {?} window
     * @return {?}
     */
    function (doc, window) {
        /** @type {?} */
        var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        /** @type {?} */
        var ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        /** @type {?} */
        var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     * @param {?} response
     * @return {?}
     */
    ClipboardService.prototype.pushCopyReponse = /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     * @param {?} response
     * @return {?}
     */
    function (response) {
        this.copySubject.next(response);
    };
    ClipboardService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_0__["WINDOW"],] }] }
    ]; };
    /** @nocollapse */ ClipboardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ClipboardService_Factory() { return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_0__["WINDOW"], 8)); }, token: ClipboardService, providedIn: "root" });
    return ClipboardService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    // tslint:disable-next-line:no-empty
    // tslint:disable-next-line:no-empty
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnInit = 
    // tslint:disable-next-line:no-empty
    /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ClipboardDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clipboardSrv.destroy(this.container);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param succeeded
     */
    /**
     * Fires an event based on the copy operation result.
     * @private
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    ClipboardDirective.prototype.handleResult = /**
     * Fires an event based on the copy operation result.
     * @private
     * @param {?} succeeded
     * @param {?} copiedContent
     * @param {?} event
     * @return {?}
     */
    function (succeeded, copiedContent, event) {
        /** @type {?} */
        var response = {
            isSuccess: succeeded,
            event: event
        };
        if (succeeded) {
            response = Object.assign(response, {
                content: copiedContent,
                successMessage: this.cbSuccessMsg
            });
            this.cbOnSuccess.emit(response);
        }
        else {
            this.cbOnError.emit(response);
        }
        this.clipboardSrv.pushCopyReponse(response);
    };
    ClipboardDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[ngxClipboard]'
                },] }
    ];
    /** @nocollapse */
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService }
    ]; };
    ClipboardDirective.propDecorators = {
        targetElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['ngxClipboard',] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cbContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cbSuccessMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        cbOnSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        cbOnError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click', ['$event.target'],] }]
    };
    return ClipboardDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClipboardIfSupportedDirective = /** @class */ (function () {
    function ClipboardIfSupportedDirective(_clipboardService, _viewContainerRef, _templateRef) {
        this._clipboardService = _clipboardService;
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
    }
    /**
     * @return {?}
     */
    ClipboardIfSupportedDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this._clipboardService.isSupported) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    };
    ClipboardIfSupportedDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[ngxClipboardIfSupported]'
                },] }
    ];
    /** @nocollapse */
    ClipboardIfSupportedDirective.ctorParameters = function () { return [
        { type: ClipboardService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    return ClipboardIfSupportedDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
    ClipboardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
                    exports: [ClipboardDirective, ClipboardIfSupportedDirective]
                },] }
    ];
    return ClipboardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-clipboard.js.map

/***/ }),

/***/ "./node_modules/ngx-print/fesm5/ngx-print.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-print/fesm5/ngx-print.js ***!
  \***************************************************/
/*! exports provided: NgxPrintDirective, NgxPrintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintDirective", function() { return NgxPrintDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintModule", function() { return NgxPrintModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/ngx-print/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPrintDirective = /** @class */ (function () {
    function NgxPrintDirective() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    Object.defineProperty(NgxPrintDirective.prototype, "printStyle", {
        /**
         *
         *
         * @memberof NgxPrintDirective
         */
        set: /**
         *
         *
         * \@memberof NgxPrintDirective
         * @param {?} values
         * @return {?}
         */
        function (values) {
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
                }
            }
            this.returnStyleValues();
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *
     * @returns the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    NgxPrintDirective.prototype.returnStyleValues = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    function () {
        return "<style> " + this._printStyle.join(' ').replace(/,/g, ';') + " </style>";
    };
    Object.defineProperty(NgxPrintDirective.prototype, "styleSheetFile", {
        /**
         * @memberof NgxPrintDirective
         * @param cssList
         */
        set: /**
         * \@memberof NgxPrintDirective
         * @param {?} cssList
         * @return {?}
         */
        function (cssList) {
            var e_1, _a;
            /** @type {?} */
            var linkTagFn = (/**
             * @param {?} cssFileName
             * @return {?}
             */
            function (cssFileName) {
                return "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFileName + "\">";
            });
            if (cssList.indexOf(',') !== -1) {
                /** @type {?} */
                var valueArr = cssList.split(',');
                try {
                    for (var valueArr_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(valueArr), valueArr_1_1 = valueArr_1.next(); !valueArr_1_1.done; valueArr_1_1 = valueArr_1.next()) {
                        var val = valueArr_1_1.value;
                        this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (valueArr_1_1 && !valueArr_1_1.done && (_a = valueArr_1.return)) _a.call(valueArr_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this._styleSheetFile = linkTagFn(cssList);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    NgxPrintDirective.prototype.returnStyleSheetLinkTags = /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    function () {
        return this._styleSheetFile;
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    NgxPrintDirective.prototype.getElementTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var html = [];
        /** @type {?} */
        var elements = document.getElementsByTagName(tag);
        for (var index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    };
    /**
     *
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    NgxPrintDirective.prototype.print = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    function () {
        /** @type {?} */
        var printContents;
        /** @type {?} */
        var popupWin;
        /** @type {?} */
        var styles = '';
        /** @type {?} */
        var links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=100%,width=auto");
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>" + (this.printTitle ? this.printTitle : "") + "</title>\n          " + this.returnStyleValues() + "\n          " + this.returnStyleSheetLinkTags() + "\n          " + styles + "\n          " + links + "\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    NgxPrintDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "button[ngxPrint]"
                },] }
    ];
    NgxPrintDirective.propDecorators = {
        printSectionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        useExistingCss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        styleSheetFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        print: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
    };
    return NgxPrintDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPrintModule = /** @class */ (function () {
    function NgxPrintModule() {
    }
    NgxPrintModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [NgxPrintDirective],
                    imports: [],
                    exports: [NgxPrintDirective]
                },] }
    ];
    return NgxPrintModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-print.js.map

/***/ }),

/***/ "./node_modules/ngx-print/node_modules/tslib/tslib.es6.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-print/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/ngx-window-token/fesm5/ngx-window-token.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-window-token/fesm5/ngx-window-token.js ***!
  \*****************************************************************/
/*! exports provided: WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document ? { providedIn: 'root', factory: (/**
     * @return {?}
     */
    function () { return window; }) } : undefined);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-window-token.js.map

/***/ }),

/***/ "./src/app/modules/user/multi-factor/multi-factor.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/user/multi-factor/multi-factor.module.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js"), __webpack_require__(/*! ./multi-factor.routing */ "./src/app/modules/user/multi-factor/multi-factor.routing.ts"), __webpack_require__(/*! modules/application-directives.module */ "./src/app/modules/application-directives.module.ts"), __webpack_require__(/*! modules/application-pipes.module */ "./src/app/modules/application-pipes.module.ts"), __webpack_require__(/*! modules/application-components.module */ "./src/app/modules/application-components.module.ts"), __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js"), __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js"), __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js"), __webpack_require__(/*! ./qr-code/qr-code.component */ "./src/app/modules/user/multi-factor/qr-code/qr-code.component.ts"), __webpack_require__(/*! ./question-answer/question-answer.component */ "./src/app/modules/user/multi-factor/question-answer/question-answer.component.ts"), __webpack_require__(/*! ./recovery-codes/recovery-codes.component */ "./src/app/modules/user/multi-factor/recovery-codes/recovery-codes.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, http_1, forms_1, multi_factor_routing_1, application_directives_module_1, application_pipes_module_1, application_components_module_1, ngx_bootstrap_1, ngx_print_1, ngx_clipboard_1, qr_code_component_1, question_answer_component_1, recovery_codes_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MultiFactorModule = (function () {
        function MultiFactorModule() {
        }
        MultiFactorModule = __decorate([
            core_1.NgModule({
                imports: [
                    multi_factor_routing_1.MultiFactorRoutingModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    common_1.CommonModule,
                    ngx_bootstrap_1.ModalModule,
                    ngx_print_1.NgxPrintModule,
                    ngx_clipboard_1.ClipboardModule,
                    application_components_module_1.ApplicationComponentsModule,
                    application_directives_module_1.ApplicationDirectivesModule,
                    application_pipes_module_1.ApplicationPipesModule
                ],
                declarations: [
                    qr_code_component_1.QrCodeComponent,
                    question_answer_component_1.QuestionAnswerComponent,
                    recovery_codes_component_1.RecoveryCodesComponent
                ],
                providers: []
            })
        ], MultiFactorModule);
        return MultiFactorModule;
    }());
    exports.MultiFactorModule = MultiFactorModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/user/multi-factor/multi-factor.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/user/multi-factor/multi-factor.routing.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js"), __webpack_require__(/*! core/services/authentication.service */ "./src/app/core/services/authentication.service.ts"), __webpack_require__(/*! core/services/authorization.service */ "./src/app/core/services/authorization.service.ts"), __webpack_require__(/*! ./qr-code/qr-code.component */ "./src/app/modules/user/multi-factor/qr-code/qr-code.component.ts"), __webpack_require__(/*! ./question-answer/question-answer.component */ "./src/app/modules/user/multi-factor/question-answer/question-answer.component.ts"), __webpack_require__(/*! ./recovery-codes/recovery-codes.component */ "./src/app/modules/user/multi-factor/recovery-codes/recovery-codes.component.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, authentication_service_1, authorization_service_1, qr_code_component_1, question_answer_component_1, recovery_codes_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var routes = [
        {
            path: '',
            data: {
                title: 'Multi-factor'
            },
            children: [
                {
                    path: 'qr-code',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Authenticator App',
                        access: {
                            module: 'user',
                            entity: 'mfa',
                            action: 'enable'
                        }
                    },
                    component: qr_code_component_1.QrCodeComponent
                },
                {
                    path: 'question-answer',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Question & Answer',
                        access: {
                            module: 'user',
                            entity: 'mfa',
                            action: 'enable'
                        }
                    },
                    component: question_answer_component_1.QuestionAnswerComponent
                },
                {
                    path: 'recovery-codes',
                    canActivate: [authentication_service_1.AuthenticationGuard, authorization_service_1.AuthorizationGuard],
                    data: {
                        title: 'Recovery Codes',
                        access: {
                            module: 'user',
                            entity: 'mfa',
                            action: 'enable'
                        }
                    },
                    component: recovery_codes_component_1.RecoveryCodesComponent
                }
            ]
        }
    ];
    var MultiFactorRoutingModule = (function () {
        function MultiFactorRoutingModule() {
        }
        MultiFactorRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            })
        ], MultiFactorRoutingModule);
        return MultiFactorRoutingModule;
    }());
    exports.MultiFactorRoutingModule = MultiFactorRoutingModule;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/user/multi-factor/qr-code/qr-code.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/user/multi-factor/qr-code/qr-code.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"offset-md-3 col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <form #qrCodeForm=\"ngForm\">\n            <div *ngIf=\"!profile_mfa || reconfigure\">\n\n              <h3 class=\"mb-5\">Setup Virtual MFA Device</h3>\n              <ol>\n\n                <li>\n                  <p class=\"font-weight-bold\">\n                    Install a compatible app on your mobile device or computer\n                  </p>\n                  <dl class=\"row\">\n\n                    <dt class=\"col-md-3\">Android</dt>\n                    <dd class=\"col-md-9\">\n                      <a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2\">Google Authenticator</a>\n                      <span class=\"d-none d-md-inline\">&nbsp;|&nbsp;</span>\n                      <span class=\"d-block d-md-none\"></span>\n                      <a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.authy.authy\">Authy 2-Factor Authentication</a>\n                    </dd>\n\n                    <dt class=\"col-md-3\">iPhone</dt>\n                    <dd class=\"col-md-9\">\n                      <a target=\"_blank\" href=\"http://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8\">Google Authenticator</a>\n                      <span class=\"d-none d-md-inline\">&nbsp;|&nbsp;</span>\n                      <span class=\"d-block d-md-none\"></span>\n                      <a target=\"_blank\" href=\"https://itunes.apple.com/us/app/authy/id494168017?mt=8\">Authy 2-Factor Authentication</a>\n                    </dd>\n\n                    <dt class=\"col-md-3\">Windows Phone</dt>\n                    <dd class=\"col-md-9\">\n                      <a target=\"_blank\" href=\"http://www.windowsphone.com/en-us/store/app/authenticator/e7994dbc-2336-4950-91ba-ca22d653759b\">Authenticator</a>\n                    </dd>\n\n                  </dl>\n                </li>\n\n                <li class=\"mb-4\">\n                  <p class=\"font-weight-bold\">\n                    Use your virtual MFA app and your device's camera to scan the QR code\n                  </p>\n                  <p *ngIf=\"qr_code_loading\">\n                    <i class=\"fa fa-refresh fa-spin\"></i> Loading QR code\n                  </p>\n                  <img *ngIf=\"!qr_code_loading && qr_code\" [src]=\"qr_code\" class=\"border\" alt=\"QR code loading...\" />\n                </li>\n\n                <li>\n                  <p class=\"font-weight-bold\">\n                    Type MFA code as shown on your virtual MFA app\n                  </p>\n                  <div class=\"form-group row\">\n                    <label class=\"col-md-2 col-form-label\" for=\"mfa-code\">MFA Code</label>\n                    <div class=\"col-md-4\">\n                      <input type=\"text\" name=\"mfa-code\" class=\"form-control\" id=\"mfa-code\" [(ngModel)]=\"mfa_code\">\n                    </div>\n                  </div>\n                </li>\n\n              </ol>\n\n              <div class=\"row\">\n                <div class=\"col-12 text-right\">\n                  <a class=\"btn btn-link\" [routerLink]=\"['/user/security']\" (click)=\"exatask.trackEvent('qr-code', 'cancel')\">Cancel</a>\n                  <button type=\"button\" (click)=\"exatask.trackEvent('qr-code', 'activate'); activate()\" class=\"btn btn-primary\" *ngIf=\"!reconfigure\">Activate</button>\n                  <button type=\"button\" (click)=\"exatask.trackEvent('qr-code', 'reactivate'); activate()\" class=\"btn btn-primary\" *ngIf=\"reconfigure\">Re-activate</button>\n                </div>\n              </div>\n\n            </div>\n\n            <div *ngIf=\"profile_mfa && !reconfigure\">\n\n              <h3 class=\"mb-5\">Virtual MFA Device configured</h3>\n\n              <h4>Recovery codes</h4>\n              <p>Treat your recovery codes with the same level of attention as you would your password!</p>\n\n              <div class=\"row mt-md-5 ml-md-5 mb-3\">\n                <li class=\"col-md-6\" *ngFor=\"let code of recovery_codes\">\n                  <h4 class=\"d-inline\">{{code}}</h4>\n                </li>\n              </div>\n\n              <div class=\"card d-none\" id=\"recovery-codes\">\n                <div class=\"card-body\">\n                  <h1 class=\"mb-5\">ExaTask Recovery Codes ({{user_details.email_id}})</h1>\n\n                  <div class=\"row\">\n                    <li class=\"col-6\" *ngFor=\"let code of recovery_codes\">\n                      <h3 class=\"d-inline\">{{code}}</h3>\n                    </li>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row mb-5 ml-md-5\">\n                <div class=\"col-12\">\n                  <button type=\"button\" class=\"btn btn-secondary mr-2\" (click)=\"exatask.trackEvent('qr-code', 'download', 'recovery-code'); downloadRecoveryCodes()\">\n                    <i class=\"fa fa-download\"></i> Download</button>\n                  <button type=\"button\" class=\"btn btn-secondary mr-2\" ngxPrint printTitle=\"ExaTask Recovery Codes\" printSectionId=\"recovery-codes\" [useExistingCss]=\"true\">\n                    <i class=\"fa fa-print\"></i> Print\n                  </button>\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"exatask.trackEvent('qr-code', 'copy', 'recovery-code'); copyRecoveryCodes()\">\n                    <i class=\"fa fa-copy\"></i> Copy</button>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-12 text-right\">\n                  <a class=\"btn btn-link\" [routerLink]=\"['/user/security']\" (click)=\"exatask.trackEvent('mfa', 'cancel', 'qr-code')\">Cancel</a>\n                  <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"exatask.trackEvent('mfa', 'reconfigure', 'qr-code'); reconfigureMfa()\">Re-configure MFA</button>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"exatask.trackEvent('mfa', 'deactivate', 'qr-code'); deactivate()\">Deactivate MFA</button>\n                </div>\n              </div>\n\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>{{message}}</div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>{{message}}</div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/user/multi-factor/qr-code/qr-code.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/user/multi-factor/qr-code/qr-code.component.ts ***!
  \************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! ../../user.service */ "./src/app/modules/user/user.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! config/constants/user */ "./src/app/config/constants/user.ts"), __webpack_require__(/*! core/providers/user.service */ "./src/app/core/providers/user.service.ts"), __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, profile_service_1, user_service_1, success_modal_component_1, error_modal_component_1, user_1, user_service_2, ngx_clipboard_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QrCodeComponent = (function () {
        function QrCodeComponent(profileService, userService, clipboardService, user, exatask) {
            this.profileService = profileService;
            this.userService = userService;
            this.clipboardService = clipboardService;
            this.user = user;
            this.exatask = exatask;
            this.profile_mfa = false;
            this.reconfigure = false;
            this.qr_code_loading = false;
            this.user_details = user;
            this.exatask.setTitle('QR Code');
        }
        QrCodeComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.profileService.getProfile('auth').then(function (response) {
                if (response.mfa) {
                    for (var _i = 0, _a = response.mfa; _i < _a.length; _i++) {
                        var mfa = _a[_i];
                        switch (mfa.mfa_type) {
                            case user_1.MFA.QR_CODE:
                                _this.profile_mfa = true;
                                _this.recovery_codes = response.recovery_codes;
                                break;
                        }
                    }
                }
                if (!_this.profile_mfa) {
                    _this.initiate();
                }
            });
        };
        QrCodeComponent.prototype.initiate = function () {
            var self = this;
            this.qr_code_loading = true;
            this.userService.initiateMfa(user_1.MFA.QR_CODE).then(function (response) {
                self.qr_code = response.qr_code;
                self.qr_code_loading = false;
            }).catch(function (err) {
                self.message = err.error.message.text;
                self.errorModal.show();
            });
        };
        QrCodeComponent.prototype.activate = function () {
            var _this = this;
            var data = {
                mfa_type: user_1.MFA.QR_CODE,
                code: this.mfa_code
            };
            this.userService.enableMfa(data).then(function (response) {
                if (response.recovery_codes) {
                    _this.recovery_codes = response.recovery_codes;
                }
                _this.profile_mfa = true;
                _this.reconfigure = false;
                _this.message = response.message.text;
                _this.successModal.show();
            }).catch(function (err) {
                _this.message = err.error.message.text;
                _this.errorModal.show();
            });
        };
        QrCodeComponent.prototype.deactivate = function () {
            var _this = this;
            var data = {
                mfa_type: user_1.MFA.QR_CODE
            };
            this.userService.disableMfa(data).then(function (response) {
                _this.profile_mfa = false;
                _this.reconfigure = false;
                _this.mfa_code = '';
                _this.initiate();
                _this.message = response.message.text;
                _this.successModal.show();
            }).catch(function (err) {
                _this.message = err.error.message.text;
                _this.errorModal.show();
            });
        };
        QrCodeComponent.prototype.downloadRecoveryCodes = function () {
            if (!this.recovery_codes || this.recovery_codes.length <= 0) {
                return;
            }
            var download_text = 'ExaTask Recovery Codes (' + this.user.email_id + ')\n\n';
            for (var _i = 0, _a = this.recovery_codes; _i < _a.length; _i++) {
                var code = _a[_i];
                download_text += code + '\n';
            }
            var download_file_name = 'exatask-recovery-codes.txt', donwload_file = new Blob([download_text], { type: 'text' });
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(donwload_file, download_file_name);
            }
            else {
                var download_link = document.createElement('a');
                download_link.href = URL.createObjectURL(donwload_file);
                download_link.download = download_file_name;
                document.body.appendChild(download_link);
                download_link.click();
                document.body.removeChild(download_link);
            }
        };
        QrCodeComponent.prototype.copyRecoveryCodes = function () {
            var copy_text = '';
            for (var _i = 0, _a = this.recovery_codes; _i < _a.length; _i++) {
                var code = _a[_i];
                copy_text += code + '\n';
            }
            this.clipboardService.copyFromContent(copy_text);
        };
        QrCodeComponent.prototype.reconfigureMfa = function () {
            this.reconfigure = true;
            this.initiate();
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], QrCodeComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], QrCodeComponent.prototype, "errorModal", void 0);
        QrCodeComponent = __decorate([
            core_1.Component({
                selector: 'app-qr-code',
                template: __webpack_require__(/*! ./qr-code.component.html */ "./src/app/modules/user/multi-factor/qr-code/qr-code.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [profile_service_1.ProfileService, user_service_1.UserService]
            }),
            __metadata("design:paramtypes", [profile_service_1.ProfileService,
                user_service_1.UserService,
                ngx_clipboard_1.ClipboardService,
                user_service_2.User,
                exatask_service_1.ExaTask])
        ], QrCodeComponent);
        return QrCodeComponent;
    }());
    exports.QrCodeComponent = QrCodeComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/user/multi-factor/question-answer/question-answer.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/user/multi-factor/question-answer/question-answer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"offset-md-3 col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <form #questionAnswerForm=\"ngForm\">\n            <h4 class=\"mb-5\" >\n              <span *ngIf=\"!profile_mfa || reconfigure\">Setup Security Questions</span>\n              <span *ngIf=\"profile_mfa && !reconfigure\">Security Questions configured</span>\n            </h4>\n\n            <div class=\"table-responsive\">\n              <table class=\"table mb-5\">\n\n                <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Question</th>\n                  <th>Answer</th>\n                </tr>\n                </thead>\n\n                <tbody>\n                <tr *ngFor=\"let counter of questionCount(); let i = index;\">\n                  <td>\n                    <label class=\"col-form-label\" for=\"question-{{i}}\">{{ i + 1 }}.</label>\n                  </td>\n                  <td>\n                    <select class=\"form-control\" name=\"question-{{i}}\" id=\"question-{{i}}\" [(ngModel)]=\"answers[i].question_id\" [attr.disabled]=\"(profile_mfa && !reconfigure) ? 'disabled' : null\">\n                      <option [ngValue]=\"null\">Select Question</option>\n                      <option *ngFor=\"let question of questions\" [ngValue]=\"question.question_id\">\n                        {{ question.question }}\n                      </option>\n                    </select>\n                  </td>\n                  <td>\n                    <input type=\"text\" name=\"answer-{{i}}\" placeholder=\"Answer for question\" class=\"form-control\" id=\"answer-{{i}}\" [(ngModel)]=\"answers[i].answer\" />\n                  </td>\n                </tr>\n                </tbody>\n\n              </table>\n            </div>\n\n            <label *ngIf=\"question_error\" class=\"text-danger inline-errors\">{{question_error}}</label>\n\n            <div class=\"row\" *ngIf=\"!profile_mfa || reconfigure\">\n              <div class=\"col-12 text-right\">\n                <a class=\"btn btn-link\" [routerLink]=\"['/user/security']\">Cancel</a>\n                <button type=\"button\" (click)=\"exatask.trackEvent('question-answer', 'activate'); activate()\" class=\"btn btn-primary\" *ngIf=\"!reconfigure\">Assign Questions</button>\n                <button type=\"button\" (click)=\"exatask.trackEvent('question-answer', 'reactivate'); activate()\" class=\"btn btn-primary\" *ngIf=\"reconfigure\">Re-assign Questions</button>\n              </div>\n            </div>\n\n            <div class=\"row\" *ngIf=\"profile_mfa && !reconfigure\">\n              <div class=\"col-12 text-right\">\n                <a class=\"btn btn-link\" [routerLink]=\"['/user/security']\" (click)=\"exatask.trackEvent('mfa', 'cancel', 'question-answer')\">Cancel</a>\n                <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"exatask.trackEvent('mfa', 'reconfigure', 'question-answer'); reconfigureMfa()\">Re-assign Questions</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"exatask.trackEvent('mfa', 'deactivate', 'question-answer'); deactivate()\">Deactivate MFA</button>\n              </div>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-success-modal #successModal title=\"Success!\">\n  <div content>{{message}}</div>\n</app-success-modal>\n\n<app-error-modal #errorModal title=\"Error!\">\n  <div content>{{message}}</div>\n</app-error-modal>"

/***/ }),

/***/ "./src/app/modules/user/multi-factor/question-answer/question-answer.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user/multi-factor/question-answer/question-answer.component.ts ***!
  \****************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! ../../user.service */ "./src/app/modules/user/user.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! config/constants/user */ "./src/app/config/constants/user.ts"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, profile_service_1, user_service_1, success_modal_component_1, error_modal_component_1, lodash_1, user_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var QuestionAnswerComponent = (function () {
        function QuestionAnswerComponent(profileService, userService, exatask) {
            this.profileService = profileService;
            this.userService = userService;
            this.exatask = exatask;
            this.profile_mfa = false;
            this.reconfigure = false;
            this.question_loading = false;
            this.exatask.setTitle('Question / Answer');
            this.answers = new Array(5);
            for (var i = 0; i < 5; i++) {
                this.answers[i] = new profile_service_1.Answer();
            }
        }
        QuestionAnswerComponent.prototype.ngOnInit = function () {
            var self = this;
            this.initiate();
            this.profileService.getProfile('auth').then(function (response) {
                if (response.mfa) {
                    for (var _i = 0, _a = response.mfa; _i < _a.length; _i++) {
                        var mfa = _a[_i];
                        switch (mfa.mfa_type) {
                            case user_1.MFA.QUESTION_ANSWER:
                                self.profile_mfa = true;
                                mfa.questions.forEach(function (question, i) {
                                    self.answers[i].question_id = question.question_id;
                                    self.answers[i].answer = '**********';
                                });
                                break;
                        }
                    }
                }
            });
        };
        QuestionAnswerComponent.prototype.__validateQuestions = function () {
            var question_ids = [], answers = [];
            var result = true;
            this.question_error = '';
            this.answers.forEach(function (answer) {
                if (answer.question_id) {
                    question_ids.push(answer.question_id);
                }
                if (answer.answer) {
                    answers.push(answer.answer);
                }
            });
            if (lodash_1.uniq(question_ids).length !== 5) {
                this.question_error = 'Select 5 unique security questions';
                result = false;
            }
            else if (answers.length !== 5) {
                this.question_error = 'Select 5 security questions and provide answer for all';
                result = false;
            }
            return result;
        };
        QuestionAnswerComponent.prototype.initiate = function () {
            var self = this;
            this.question_loading = true;
            this.userService.initiateMfa(user_1.MFA.QUESTION_ANSWER).then(function (response) {
                self.questions = response.questions;
                self.question_loading = false;
            }).catch(function (err) {
                self.message = err.error.message.text;
                self.errorModal.show();
            });
        };
        QuestionAnswerComponent.prototype.activate = function () {
            var _this = this;
            if (!this.__validateQuestions()) {
                return;
            }
            var data = {
                mfa_type: user_1.MFA.QUESTION_ANSWER,
                questions: this.answers
            };
            this.userService.enableMfa(data).then(function (response) {
                _this.profile_mfa = true;
                _this.reconfigure = false;
                _this.answers.forEach(function (answer) {
                    answer.answer = '**********';
                });
                _this.message = response.message.text;
                _this.successModal.show();
            }).catch(function (err) {
                _this.message = err.message.text;
                _this.errorModal.show();
            });
        };
        QuestionAnswerComponent.prototype.deactivate = function () {
            var _this = this;
            var data = {
                mfa_type: user_1.MFA.QUESTION_ANSWER
            };
            this.userService.disableMfa(data).then(function (response) {
                _this.profile_mfa = false;
                _this.reconfigure = false;
                _this.answers.forEach(function (answer) {
                    answer.answer = '';
                });
                _this.message = response.message.text;
                _this.successModal.show();
            }).catch(function (err) {
                _this.message = err.error.message.text;
                _this.errorModal.show();
            });
        };
        QuestionAnswerComponent.prototype.questionCount = function () {
            return Array(5);
        };
        QuestionAnswerComponent.prototype.reconfigureMfa = function () {
            this.reconfigure = true;
            this.answers.forEach(function (answer) {
                answer.answer = '';
            });
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], QuestionAnswerComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], QuestionAnswerComponent.prototype, "errorModal", void 0);
        QuestionAnswerComponent = __decorate([
            core_1.Component({
                selector: 'app-question-answer',
                template: __webpack_require__(/*! ./question-answer.component.html */ "./src/app/modules/user/multi-factor/question-answer/question-answer.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [profile_service_1.ProfileService, user_service_1.UserService]
            }),
            __metadata("design:paramtypes", [profile_service_1.ProfileService,
                user_service_1.UserService,
                exatask_service_1.ExaTask])
        ], QuestionAnswerComponent);
        return QuestionAnswerComponent;
    }());
    exports.QuestionAnswerComponent = QuestionAnswerComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/modules/user/multi-factor/recovery-codes/recovery-codes.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user/multi-factor/recovery-codes/recovery-codes.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"offset-md-3 col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n\n          <div class=\"row mb-4\">\n            <div class=\"col-12 text-right\">\n              <button class=\"btn btn-link\" type=\"button\" [routerLink]=\"['/user/security']\" (click)=\"exatask.trackEvent('recovery-code', 'back')\">Back</button>\n            </div>\n          </div>\n\n          <h4>Recovery codes</h4>\n          <p>Treat your recovery codes with the same level of attention as you would your password!</p>\n\n          <div class=\"row mt-md-5 ml-md-5 mb-3\">\n            <li class=\"col-md-6\" *ngFor=\"let code of recovery_codes\">\n              <h4 class=\"d-inline\">{{code}}</h4>\n            </li>\n          </div>\n\n          <div class=\"card d-none\" id=\"recovery-codes\">\n            <div class=\"card-body\">\n              <h1 class=\"mb-5\">ExaTask Recovery Codes ({{user_details.email_id}})</h1>\n\n              <div class=\"row\">\n                <li class=\"col-6\" *ngFor=\"let code of recovery_codes\">\n                  <h3 class=\"d-inline\">{{code}}</h3>\n                </li>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row mb-5 ml-md-5\">\n            <div class=\"col-12\">\n              <button type=\"button\" class=\"btn btn-secondary mr-2\" (click)=\"exatask.trackEvent('recovery-code', 'download'); downloadRecoveryCodes()\">\n                <i class=\"fa fa-download\"></i> Download</button>\n              <button type=\"button\" class=\"btn btn-secondary mr-2\" ngxPrint printTitle=\"ExaTask Recovery Codes\" printSectionId=\"recovery-codes\" [useExistingCss]=\"true\">\n                <i class=\"fa fa-print\"></i> Print\n              </button>\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"exatask.trackEvent('recovery-code', 'copy'); copyRecoveryCodes()\">\n                <i class=\"fa fa-copy\"></i> Copy</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/user/multi-factor/recovery-codes/recovery-codes.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/user/multi-factor/recovery-codes/recovery-codes.component.ts ***!
  \**************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"), __webpack_require__(/*! ../../profile/profile.service */ "./src/app/modules/user/profile/profile.service.ts"), __webpack_require__(/*! shared/components/success-modal/success-modal.component */ "./src/app/shared/components/success-modal/success-modal.component.ts"), __webpack_require__(/*! shared/components/error-modal/error-modal.component */ "./src/app/shared/components/error-modal/error-modal.component.ts"), __webpack_require__(/*! config/constants/user */ "./src/app/config/constants/user.ts"), __webpack_require__(/*! core/providers/user.service */ "./src/app/core/providers/user.service.ts"), __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js"), __webpack_require__(/*! ../../../../core/providers/exatask.service */ "./src/app/core/providers/exatask.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, profile_service_1, success_modal_component_1, error_modal_component_1, user_1, user_service_1, ngx_clipboard_1, exatask_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RecoveryCodesComponent = (function () {
        function RecoveryCodesComponent(profileService, clipboardService, user, exatask) {
            this.profileService = profileService;
            this.clipboardService = clipboardService;
            this.user = user;
            this.exatask = exatask;
            this.user_details = user;
            this.exatask.setTitle('Recovery Codes');
        }
        RecoveryCodesComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.profileService.getProfile('auth').then(function (response) {
                if (response.mfa) {
                    for (var _i = 0, _a = response.mfa; _i < _a.length; _i++) {
                        var mfa = _a[_i];
                        switch (mfa.mfa_type) {
                            case user_1.MFA.QR_CODE:
                                _this.recovery_codes = response.recovery_codes;
                                break;
                        }
                    }
                }
            });
        };
        RecoveryCodesComponent.prototype.downloadRecoveryCodes = function () {
            if (!this.recovery_codes || this.recovery_codes.length <= 0) {
                return;
            }
            var download_text = 'ExaTask Recovery Codes (' + this.user.email_id + ')\n\n';
            for (var _i = 0, _a = this.recovery_codes; _i < _a.length; _i++) {
                var code = _a[_i];
                download_text += code + '\n';
            }
            var download_file_name = 'exatask-recovery-codes.txt', donwload_file = new Blob([download_text], { type: 'text' });
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(donwload_file, download_file_name);
            }
            else {
                var download_link = document.createElement('a');
                download_link.href = URL.createObjectURL(donwload_file);
                download_link.download = download_file_name;
                document.body.appendChild(download_link);
                download_link.click();
                document.body.removeChild(download_link);
            }
        };
        RecoveryCodesComponent.prototype.copyRecoveryCodes = function () {
            var copy_text = '';
            for (var _i = 0, _a = this.recovery_codes; _i < _a.length; _i++) {
                var code = _a[_i];
                copy_text += code + '\n';
            }
            this.clipboardService.copyFromContent(copy_text);
        };
        __decorate([
            core_1.ViewChild('successModal'),
            __metadata("design:type", success_modal_component_1.SuccessModalComponent)
        ], RecoveryCodesComponent.prototype, "successModal", void 0);
        __decorate([
            core_1.ViewChild('errorModal'),
            __metadata("design:type", error_modal_component_1.ErrorModalComponent)
        ], RecoveryCodesComponent.prototype, "errorModal", void 0);
        RecoveryCodesComponent = __decorate([
            core_1.Component({
                selector: 'app-recovery-codes',
                template: __webpack_require__(/*! ./recovery-codes.component.html */ "./src/app/modules/user/multi-factor/recovery-codes/recovery-codes.component.html"),
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [profile_service_1.ProfileService]
            }),
            __metadata("design:paramtypes", [profile_service_1.ProfileService,
                ngx_clipboard_1.ClipboardService,
                user_service_1.User,
                exatask_service_1.ExaTask])
        ], RecoveryCodesComponent);
        return RecoveryCodesComponent;
    }());
    exports.RecoveryCodesComponent = RecoveryCodesComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=7.04b083acb81a50089b58.js.map