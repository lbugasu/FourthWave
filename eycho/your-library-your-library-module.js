(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["your-library-your-library-module"],{

/***/ "6GIs":
/*!*****************************************************!*\
  !*** ./src/app/your-library/your-library.module.ts ***!
  \*****************************************************/
/*! exports provided: YourLibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourLibraryModule", function() { return YourLibraryModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _your_library_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./your-library.component */ "C8ke");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _your_library_component__WEBPACK_IMPORTED_MODULE_1__["YourLibraryComponent"]
    }
];
class YourLibraryModule {
}
YourLibraryModule.ɵfac = function YourLibraryModule_Factory(t) { return new (t || YourLibraryModule)(); };
YourLibraryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: YourLibraryModule });
YourLibraryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](YourLibraryModule, { declarations: [_your_library_component__WEBPACK_IMPORTED_MODULE_1__["YourLibraryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "C8ke":
/*!********************************************************!*\
  !*** ./src/app/your-library/your-library.component.ts ***!
  \********************************************************/
/*! exports provided: YourLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourLibraryComponent", function() { return YourLibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class YourLibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
YourLibraryComponent.ɵfac = function YourLibraryComponent_Factory(t) { return new (t || YourLibraryComponent)(); };
YourLibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YourLibraryComponent, selectors: [["app-your-library"]], decls: 2, vars: 0, template: function YourLibraryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "your-library works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5b3VyLWxpYnJhcnkuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=your-library-your-library-module.js.map