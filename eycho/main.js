(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/n3r":
/*!****************************************************!*\
  !*** ./src/app/user/store/actions/user.actions.ts ***!
  \****************************************************/
/*! exports provided: SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_WITH_TOKEN_START, SIGN_IN_WITH_TOKEN_SUCCESS, SIGN_IN_WITH_TOKEN_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, signInStart, signInSuccess, signInFailure, signUpStart, signUpSuccess, signInWithTokenStart, signInWithTokenSuccess, signInWithTokenFailure, signUpFailure, signOutStart, signOutSuccess, signOutFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_START", function() { return SIGN_IN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_SUCCESS", function() { return SIGN_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_FAILURE", function() { return SIGN_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_WITH_TOKEN_START", function() { return SIGN_IN_WITH_TOKEN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_WITH_TOKEN_SUCCESS", function() { return SIGN_IN_WITH_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_WITH_TOKEN_FAILURE", function() { return SIGN_IN_WITH_TOKEN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_START", function() { return SIGN_UP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_START", function() { return SIGN_OUT_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_SUCCESS", function() { return SIGN_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_FAILURE", function() { return SIGN_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInStart", function() { return signInStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInSuccess", function() { return signInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInFailure", function() { return signInFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpStart", function() { return signUpStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpSuccess", function() { return signUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithTokenStart", function() { return signInWithTokenStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithTokenSuccess", function() { return signInWithTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInWithTokenFailure", function() { return signInWithTokenFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpFailure", function() { return signUpFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutStart", function() { return signOutStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutSuccess", function() { return signOutSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOutFailure", function() { return signOutFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const SIGN_IN_START = 'sign in start';
const SIGN_IN_SUCCESS = 'sign in success';
const SIGN_IN_FAILURE = 'sign in failure';
const SIGN_IN_WITH_TOKEN_START = 'sign in with token start';
const SIGN_IN_WITH_TOKEN_SUCCESS = 'sign in with token success';
const SIGN_IN_WITH_TOKEN_FAILURE = 'sign in with token failure';
const SIGN_UP_START = 'sign up start';
const SIGN_UP_SUCCESS = 'sign up success';
const SIGN_UP_FAILURE = 'sign up failure';
const SIGN_OUT_START = 'sign up start';
const SIGN_OUT_SUCCESS = 'sign out success';
const SIGN_OUT_FAILURE = 'sign out failure';
const signInStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_IN_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const signInSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_IN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const signInFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_IN_FAILURE);
const signUpStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_UP_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const signUpSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_UP_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const signInWithTokenStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_IN_WITH_TOKEN_START);
const signInWithTokenSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_IN_WITH_TOKEN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const signInWithTokenFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_IN_WITH_TOKEN_FAILURE);
const signUpFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_UP_FAILURE);
const signOutStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_OUT_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const signOutSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_OUT_SUCCESS);
const signOutFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SIGN_OUT_FAILURE);
// export const changeVolume = createAction(
//   'change_volume',
//   props<{ volume: number }>()
// )
// action types


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/laudebugs/github/onthistopic/eycho/src/main.ts */"zUnb");


/***/ }),

/***/ "4K9K":
/*!*****************************************!*\
  !*** ./src/app/user/me/me.component.ts ***!
  \*****************************************/
/*! exports provided: MeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeComponent", function() { return MeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MeComponent {
    constructor() { }
    ngOnInit() {
    }
}
MeComponent.ɵfac = function MeComponent_Factory(t) { return new (t || MeComponent)(); };
MeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MeComponent, selectors: [["app-me"]], decls: 2, vars: 0, template: function MeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "me works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "6HvO":
/*!***************************!*\
  !*** ./src/libs/index.ts ***!
  \***************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material/material.module */ "oT4F");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return _material_material_module__WEBPACK_IMPORTED_MODULE_0__["Material"]; });





/***/ }),

/***/ "6ONQ":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/date/date.pipe.ts ***!
  \************************************************/
/*! exports provided: DatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePipe", function() { return DatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DatePipe {
    transform(value) {
        return this.getNiceDate(value);
    }
    getNiceDate(date) {
        return new Date(date).toDateString();
    }
}
DatePipe.ɵfac = function DatePipe_Factory(t) { return new (t || DatePipe)(); };
DatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "date", type: DatePipe, pure: true });


/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _libs_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/material/material.module */ "oT4F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "BOkJ");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "SZmd");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reducers/user.reducer */ "hP8q");
/* harmony import */ var _me_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./me/me.component */ "4K9K");
/* harmony import */ var _store_state_user_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/state/user.state */ "N9de");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _store_effects_user_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/effects/user.effects */ "rN3G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
















// import { reducers } from './store'
const routes = [
    {
        path: '',
        component: _me_me_component__WEBPACK_IMPORTED_MODULE_8__["MeComponent"]
    },
    { path: 'signin', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"] },
    { path: 'signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"] }
];
class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _libs_material_material_module__WEBPACK_IMPORTED_MODULE_2__["Material"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forFeature([_store_effects_user_effects__WEBPACK_IMPORTED_MODULE_11__["UserEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature(_store_state_user_state__WEBPACK_IMPORTED_MODULE_9__["USER_STATE_NAME"], _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_7__["userReducer"])
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], _me_me_component__WEBPACK_IMPORTED_MODULE_8__["MeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _libs_material_material_module__WEBPACK_IMPORTED_MODULE_2__["Material"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 0, vars: 0, template: function HomeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "A7YT":
/*!*******************************************************!*\
  !*** ./src/app/shared/graphql/interceptor.graphql.ts ***!
  \*******************************************************/
/*! exports provided: GraphQLInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterceptor", function() { return GraphQLInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user/store/selectors/user.selector */ "eXBj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




class GraphQLInterceptor {
    constructor(store) {
        this.store = store;
        this.token$ = this.store.select(_user_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_1__["getToken"]);
    }
    //function which will be called for all http calls
    intercept(request, next) {
        return this.token$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["concatMap"])(token => {
            if (token) {
                return next.handle(request.clone({
                    setHeaders: { Authorization: token }
                }));
            }
            return next.handle(request);
        }));
    }
}
GraphQLInterceptor.ɵfac = function GraphQLInterceptor_Factory(t) { return new (t || GraphQLInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
GraphQLInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GraphQLInterceptor, factory: GraphQLInterceptor.ɵfac });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: 'http://localhost:6500'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BOkJ":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "t5//");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");











const _c0 = function () { return ["/me/signup"]; };
class SignInComponent {
    constructor(store) {
        this.store = store;
        this.hidePassword = true;
        this.hideConfirm = true;
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(8)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(8)])
        });
    }
    ngOnInit() {
        // this.store.select(fromStore.getUser).subscribe(state => console.log(state))
    }
    signIn() {
        const username = this.signInForm.get('username').value;
        const password = this.signInForm.get('password').value;
        this.store.dispatch(_store__WEBPACK_IMPORTED_MODULE_1__["signInStart"]({ username, password }));
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 23, vars: 7, consts: [[3, "formGroup"], [1, "sub__section"], ["appearance", "fill", "floatLabel", "auto"], ["matInput", "", "formControlName", "username", "matInput", "", "placeholder", "magicmike", "required", ""], ["matInput", "", "type", "password", "formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "options"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "routerLink"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Username or Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_13_listener() { return ctx.hidePassword = !ctx.hidePassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_17_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Sign up here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], styles: ["section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 70%;\n  justify-content: center;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  height: 70%;\n  width: 15%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  font-family: highgate, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.sub__section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.sub__section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1%;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.sub__section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: highgate, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.options[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQVFBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBTko7QUFMSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU9OO0FBQUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRU47QUFETTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBR1I7QUFGUTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUlWO0FBQUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFFTjtBQURNO0VBQ0UsVUFBQTtBQUdSIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBoMiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBoaWdoZ2F0ZSwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGRpdi5zdWJfX3NlY3Rpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDElO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBoaWdoZ2F0ZSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXYub3B0aW9ucyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiA1JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Ha02":
/*!***************************************************!*\
  !*** ./src/app/shared/player/player.component.ts ***!
  \***************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _store_player_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/player.selectors */ "pUKy");
/* harmony import */ var _store_player_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/player.actions */ "LwLl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _audio_audio_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio/audio.player */ "lLkD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_time_time_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipes/time/time.pipe */ "fehW");













function PlayerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.toggleMini(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_div_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.playPause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "minimize");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, ctx_r0.queue$)[0] == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, ctx_r0.queue$)[0].episode == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, ctx_r0.queue$)[0].episode.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 8, ctx_r0.queue$).length <= 0 ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 10, ctx_r0.queue$)[0].episode == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 10, ctx_r0.queue$)[0].episode.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 12, ctx_r0.player.currentTime), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 14, ctx_r0.player.totalDuration), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 16, ctx_r0.queue$).length <= 0 ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 18, ctx_r0.queue$)[0].episode == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 18, ctx_r0.queue$)[0].episode.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getMiniPlayingIcon());
} }
function PlayerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "skip_previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "replay_30");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_div_2_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.playPause(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "forward_30");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "skip_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-slider", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PlayerComponent_div_2_Template_mat_slider_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.player.trackProgress = $event; })("change", function PlayerComponent_div_2_Template_mat_slider_change_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.player.seek($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "playlist_play");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-slider", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PlayerComponent_div_2_Template_mat_slider_change_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.player.changeVol($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PlayerComponent_div_2_Template_button_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.toggleMini(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "picture_in_picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", !!_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 18, ctx_r1.queue$) ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 20, ctx_r1.queue$)[0] == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 20, ctx_r1.queue$)[0].episode == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 20, ctx_r1.queue$)[0].episode.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 22, ctx_r1.queue$).length <= 0 ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 24, ctx_r1.queue$)[0].episode == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 24, ctx_r1.queue$)[0].episode.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 26, ctx_r1.queue$).length <= 0 ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 28, ctx_r1.queue$)[0].episode == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 28, ctx_r1.queue$)[0].episode.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getMainPlayingIcon());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 30, ctx_r1.player.currentTime), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", 0)("max", 1)("step", 0.001)("tickInterval", ctx_r1.player.seekTrack())("ngModel", ctx_r1.player.trackProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 32, ctx_r1.player.totalDuration), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getVolumeIcon());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx_r1.player.volume);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", 1)("min", 0)("step", 0.001);
} }
class PlayerComponent {
    constructor(store, player) {
        this.store = store;
        this.player = player;
    }
    ngOnInit() {
        this.playing$ = this.store.select(_store_player_selectors__WEBPACK_IMPORTED_MODULE_0__["getPlaying"]);
        this.queue$ = this.store.select(_store_player_selectors__WEBPACK_IMPORTED_MODULE_0__["getQueue"]);
        this.mini$ = this.store.select(_store_player_selectors__WEBPACK_IMPORTED_MODULE_0__["getMini"]);
    }
    playPause() {
        this.store.dispatch(_store_player_actions__WEBPACK_IMPORTED_MODULE_1__["playPause"]());
    }
    getMainPlayingIcon() {
        var _a;
        return ((_a = this.player.player) === null || _a === void 0 ? void 0 : _a.playing()) ? 'pause_circle_filled'
            : 'play_circle_filled';
    }
    getMiniPlayingIcon() {
        var _a;
        return ((_a = this.player.player) === null || _a === void 0 ? void 0 : _a.playing()) ? 'pause' : 'play_arrow';
    }
    toggleMini() {
        this.store.dispatch(_store_player_actions__WEBPACK_IMPORTED_MODULE_1__["toggleMiniPlayer"]());
    }
    getVolumeIcon() {
        if (this.player.volume == 0) {
            return 'volume_off';
        }
        if (this.player.volume < 0.5) {
            return 'volume_down';
        }
        else {
            return 'volume_up';
        }
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_audio_audio_player__WEBPACK_IMPORTED_MODULE_4__["AudioPlayer"])); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], decls: 4, vars: 6, consts: [["class", "box", "cdkDrag", "", 4, "ngIf"], ["class", "player", 3, "visibility", 4, "ngIf"], ["cdkDrag", "", 1, "box"], [1, "audio__info"], [1, "deets"], [1, "image"], [3, "src", "alt"], [1, "time"], [1, "title"], [1, "controls"], ["mat-icon-button", "", 3, "click"], ["mat-mini-fab", "", "mat-icon-button", "", "color", "warn", "aria-label", "play pause button", 1, "play", 3, "click"], ["mat-icon-button", ""], ["cdkDragHandle", "", 1, "handle"], ["width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"], [1, "player"], [1, "control__actions"], ["mat-icon-button", "", "color", "primary", "aria-label", "previous"], ["mat-icon-button", "", "color", "accent", "aria-label", "Rewind"], ["mat-icon-button", "", "color", "warn", "aria-label", "play pause button", 3, "click"], ["mat-icon-button", "", "aria-label", "Next"], [1, "slider"], [1, "duration"], ["color", "primary", "aria-label", "audio slider", 3, "min", "max", "step", "tickInterval", "ngModel", "ngModelChange", "change"], ["trackSlider", ""], [1, "options"], ["mat-icon-button", "", "aria-label", "Rewind"], [1, "volume__slider"], ["color", "primary", "aria-label", "volume slider", 3, "max", "min", "step", "value", "change"], ["volumeSlider", ""], ["mat-icon-button", "", "aria-label", "Picture in picture", 3, "click"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PlayerComponent_div_0_Template, 35, 20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PlayerComponent_div_2_Template, 53, 34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.mini$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, ctx.mini$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragHandle"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _pipes_time_time_pipe__WEBPACK_IMPORTED_MODULE_12__["TimePipe"]], styles: ["div.player[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: var(--background-medium-gray);\n  height: 9vh;\n}\ndiv.player[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%] {\n  margin-left: 0.5%;\n  width: 23%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  align-items: center;\n}\ndiv.player[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.image[_ngcontent-%COMP%] {\n  width: 20%;\n}\ndiv.player[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 5%;\n}\ndiv.player[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%] {\n  width: 80%;\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\ndiv.player[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 10pt;\n  font-family: highgate, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\ndiv.player[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n}\ndiv.player[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]   div.control__actions[_ngcontent-%COMP%] {\n  height: 40%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-end;\n}\ndiv.player[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]   div.control__actions[_ngcontent-%COMP%]   div.duration[_ngcontent-%COMP%] {\n  width: 5%;\n  display: flex;\n  justify-self: center;\n  align-items: center;\n  height: 100%;\n}\ndiv.player[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]   div.control__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--button-primary);\n}\ndiv.player[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]   div.slider[_ngcontent-%COMP%] {\n  height: 50%;\n  display: flex;\n  justify-self: center;\n  align-items: center;\n}\ndiv.player[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]   div.slider[_ngcontent-%COMP%]   div.duration[_ngcontent-%COMP%] {\n  width: 10%;\n  display: flex;\n  justify-self: center;\n  align-items: center;\n  height: 100%;\n  text-align: center;\n}\ndiv.player[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]   div.slider[_ngcontent-%COMP%]   div.duration[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n}\ndiv.player[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]   div.slider[_ngcontent-%COMP%]   mat-slider[_ngcontent-%COMP%] {\n  width: 80%;\n  color: var(--text-light);\n}\ndiv.player[_ngcontent-%COMP%]   div.options[_ngcontent-%COMP%] {\n  width: 20%;\n  display: flex;\n  height: 100%;\n  justify-content: space-around;\n  align-items: center;\n}\ndiv.player[_ngcontent-%COMP%]   div.options[_ngcontent-%COMP%]   div.volume__slider[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n}\n.box[_ngcontent-%COMP%] {\n  font-family: highgate, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  width: 250px;\n  height: 250px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: var(--background-medium-gray);\n  border-radius: 4px;\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n.box[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.deets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.box[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.deets[_ngcontent-%COMP%]   div.image[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.box[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.deets[_ngcontent-%COMP%]   div.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.box[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.deets[_ngcontent-%COMP%]   div.time[_ngcontent-%COMP%] {\n  width: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n}\n.box[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.deets[_ngcontent-%COMP%]   div.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.box[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.title[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 200px;\n  margin: 5px 10px 5px 10px;\n  font-family: highgate, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  height: 50px;\n}\n.box[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.box[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--button-primary);\n}\n.box[_ngcontent-%COMP%]   div.audio__info[_ngcontent-%COMP%]   div.controls[_ngcontent-%COMP%]   button.play[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  background-color: var(--button-primary);\n  color: var(--background-medium-gray);\n}\n.box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSwrQ0FBQTtFQUVBLFdBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBRUk7RUFDRSxVQUFBO0FBQU47QUFDTTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBQ1I7QUFFSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0FBRE47QUFFTTtFQUNFLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUlFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUZKO0FBR0k7RUFTRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFUTjtBQUpNO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtBQUtSO0FBR007RUFDRSw0QkFBQTtBQURSO0FBSUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQUdNO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFFUTtFQUNFLFdBQUE7QUFBVjtBQUdNO0VBQ0UsVUFBQTtFQUVBLHdCQUFBO0FBRlI7QUFNRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQUtJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBSE47QUFPQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHVEQUFBO0VBQ0EsK0dBQUE7QUFMRjtBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFQTjtBQVFNO0VBQ0UsWUFBQTtBQU5SO0FBT1E7RUFDRSxXQUFBO0FBTFY7QUFRTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBTlI7QUFPUTtFQUNFLFlBQUE7QUFMVjtBQVNJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBUE47QUFTSTtFQUNFLFlBQUE7RUFHQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBQVROO0FBVU07RUFDRSw0QkFBQTtBQVJSO0FBVU07RUFDRSxvQkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7QUFSUjtBQWNBO0VBQ0UscUhBQUE7QUFYRjtBQWVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFaRiIsImZpbGUiOiJwbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucGxheWVyIHtcbiAgLy8gbWFyZ2luOiA1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tZWRpdW0tZ3JheSk7XG4gIC8vIGhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiA5dmg7XG5cbiAgZGl2LmF1ZGlvX19pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMC41JTtcbiAgICB3aWR0aDogMjMlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXYuaW1hZ2Uge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgfVxuICAgIH1cbiAgICBkaXYudGl0bGUge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgZm9udC1mYW1pbHk6IGhpZ2hnYXRlLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRpdi5jb250cm9scyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZGl2LmNvbnRyb2xfX2FjdGlvbnMge1xuICAgICAgZGl2LmR1cmF0aW9uIHtcbiAgICAgICAgd2lkdGg6IDUlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIGhlaWdodDogNDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZGl2LnNsaWRlciB7XG4gICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBkaXYuZHVyYXRpb24ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtYXQtc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRpdi5vcHRpb25zIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGl2LnZvbHVtZV9fc2xpZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59XG4uYm94IHtcbiAgZm9udC1mYW1pbHk6IGhpZ2hnYXRlLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tZWRpdW0tZ3JheSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuICBkaXYuYXVkaW9fX2luZm8ge1xuICAgIGRpdi5kZWV0cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgZGl2LmltYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXYudGltZSB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGRpdi50aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgbWFyZ2luOiA1cHggMTBweCA1cHggMTBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBoaWdoZ2F0ZSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIGRpdi5jb250cm9scyB7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAgIC8vICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbi5wbGF5IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtbWVkaXVtLWdyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYm94OmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uaGFuZGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogI2NjYztcbiAgY3Vyc29yOiBtb3ZlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "HnJI":
/*!**************************************************!*\
  !*** ./src/app/shared/graphql/graphql.module.ts ***!
  \**************************************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/link/context */ "MWEN");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular/http */ "E21e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






const uri = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api}/graphql`; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    const token = localStorage.getItem('token');
    const basic = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])((operation, context) => ({
        headers: {
            Accept: 'charset=utf-8'
        }
    }));
    TODO: 'Research more into this: https://medium.com/@kctang/authenticating-apollo-graphql-requests-with-angulars-httpinterceptor-bd3373782ca2';
    const auth = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])((operation, context) => {
        if (!token) {
            return {};
        }
        else {
            return {
                headers: {
                    Authorization: `${token}`
                }
            };
        }
    });
    const http = _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"].from([basic, auth, httpLink.create({ uri })]);
    const cache = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]();
    return {
        link: http,
        headers: {
            authorization: token ? `${token}` : ''
        },
        cache,
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'network-only',
                errorPolicy: 'all'
            }
        }
    };
}
// const httpLink = new HttpLink({uri: uri})
class GraphQLModule {
}
GraphQLModule.ɵfac = function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); };
GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]]
        }
    ] });


/***/ }),

/***/ "LwLl":
/*!*******************************************************!*\
  !*** ./src/app/shared/player/store/player.actions.ts ***!
  \*******************************************************/
/*! exports provided: changeVolume, changeVolumeSuccess, changeVolumeFailure, changePlayingSpeed, changePlayingSpeedSuccess, changePlayingSpeedFailure, pauseStart, pauseSuccess, pauseFailure, playPause, playPauseStart, playPauseSuccess, playPauseFailure, stopStart, stopSuccess, stopFailure, addToBeginningOfQueueStart, addToBeginningOfQueueSuccess, addToBeginningOfQueueFailure, addToQueueStart, addToQueueSuccess, addToQueueFailure, getPlayingQueueStart, getPlayingQueueSuccess, getPlayingQueueFailure, updatePlayingQueueStart, updatePlayingQueueFailure, updatePlayingQueueSuccess, clearQueueStart, clearQueueSuccess, clearQueueFailure, updatePlayPositionStart, updatePlayPositionSuccess, updatePlayPositionFailure, rewindStart, rewindSuccess, rewindFailure, forwardStart, forwardSuccess, forwardFailure, nextStart, nextSuccess, nextFailure, prevStart, prevSuccess, prevFailure, toggleMiniPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeVolume", function() { return changeVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeVolumeSuccess", function() { return changeVolumeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeVolumeFailure", function() { return changeVolumeFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayingSpeed", function() { return changePlayingSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayingSpeedSuccess", function() { return changePlayingSpeedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayingSpeedFailure", function() { return changePlayingSpeedFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseStart", function() { return pauseStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseSuccess", function() { return pauseSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseFailure", function() { return pauseFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playPause", function() { return playPause; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playPauseStart", function() { return playPauseStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playPauseSuccess", function() { return playPauseSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playPauseFailure", function() { return playPauseFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopStart", function() { return stopStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopSuccess", function() { return stopSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopFailure", function() { return stopFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToBeginningOfQueueStart", function() { return addToBeginningOfQueueStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToBeginningOfQueueSuccess", function() { return addToBeginningOfQueueSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToBeginningOfQueueFailure", function() { return addToBeginningOfQueueFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToQueueStart", function() { return addToQueueStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToQueueSuccess", function() { return addToQueueSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToQueueFailure", function() { return addToQueueFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayingQueueStart", function() { return getPlayingQueueStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayingQueueSuccess", function() { return getPlayingQueueSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayingQueueFailure", function() { return getPlayingQueueFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayingQueueStart", function() { return updatePlayingQueueStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayingQueueFailure", function() { return updatePlayingQueueFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayingQueueSuccess", function() { return updatePlayingQueueSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearQueueStart", function() { return clearQueueStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearQueueSuccess", function() { return clearQueueSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearQueueFailure", function() { return clearQueueFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayPositionStart", function() { return updatePlayPositionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayPositionSuccess", function() { return updatePlayPositionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayPositionFailure", function() { return updatePlayPositionFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewindStart", function() { return rewindStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewindSuccess", function() { return rewindSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewindFailure", function() { return rewindFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardStart", function() { return forwardStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardSuccess", function() { return forwardSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardFailure", function() { return forwardFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextStart", function() { return nextStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSuccess", function() { return nextSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextFailure", function() { return nextFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevStart", function() { return prevStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevSuccess", function() { return prevSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevFailure", function() { return prevFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMiniPlayer", function() { return toggleMiniPlayer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const CHANGE_VOLUME_START = 'change volume start';
const CHANGE_VOLUME_SUCCESS = 'change volume success';
const CHANGE_VOLUME_FAILURE = 'change volume failure';
const changeVolume = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CHANGE_VOLUME_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const changeVolumeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CHANGE_VOLUME_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const changeVolumeFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CHANGE_VOLUME_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const CHANGE_PLAYING_SPEED_START = 'change playing speed start';
const CHANGE_PLAYING_SPEED_SUCCESS = 'change playing speed success';
const CHANGE_PLAYING_SPEED_FAILURE = 'change playing speed failure';
const changePlayingSpeed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CHANGE_PLAYING_SPEED_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const changePlayingSpeedSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CHANGE_PLAYING_SPEED_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const changePlayingSpeedFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CHANGE_PLAYING_SPEED_FAILURE);
const PAUSE_START = 'pause start';
const PAUSE_SUCCESS = 'pause success';
const PAUSE_FAILURE = 'pause failure';
const pauseStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PAUSE_START);
const pauseSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PAUSE_SUCCESS);
const pauseFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PAUSE_FAILURE);
const PLAY_PAUSE_START = 'play start';
const PLAY_PAUSE_SUCCESS = 'play success';
const PLAY_PAUSE_FAILURE = 'play failure';
const playPause = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PLAY_PAUSE_START);
const playPauseStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PLAY_PAUSE_START);
const playPauseSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PLAY_PAUSE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const playPauseFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PLAY_PAUSE_FAILURE);
const STOP_START = 'stop success';
const STOP_SUCCESS = 'stop success';
const STOP_FAILURE = 'stop failure';
const stopStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(STOP_START);
const stopSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(STOP_SUCCESS);
const stopFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(STOP_FAILURE);
const ADD_TO_BEGINNING_OF_QUEUE = 'add to beginning of queue';
const ADD_TO_BEGINNING_OF_QUEUE_SUCCESS = 'add to beginning of queue success';
const ADD_TO_BEGINNING_OF_QUEUE_FAILURE = 'add to beginning of queue failure';
const addToBeginningOfQueueStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_TO_BEGINNING_OF_QUEUE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addToBeginningOfQueueSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_TO_BEGINNING_OF_QUEUE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addToBeginningOfQueueFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_TO_BEGINNING_OF_QUEUE_FAILURE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const ADD_TO_QUEUE_START = 'add to queue';
const ADD_TO_QUEUE_SUCCESS = 'add to queue success';
const ADD_TO_QUEUE_FAILURE = 'add to queue failure';
const addToQueueStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_TO_QUEUE_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addToQueueSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_TO_QUEUE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addToQueueFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_TO_QUEUE_FAILURE);
const GET_PLAYING_QUEUE_START = 'get playing queue start';
const GET_PLAYING_QUEUE_SUCCESS = 'get playing queue success';
const GET_PLAYING_QUEUE_FAILURE = 'get playing queue failure';
const getPlayingQueueStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_PLAYING_QUEUE_START);
const getPlayingQueueSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_PLAYING_QUEUE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getPlayingQueueFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(GET_PLAYING_QUEUE_FAILURE);
const UPDATE_PLAYING_QUEUE_START = 'update playing queue start';
const UPDATE_PLAYING_QUEUE_SUCCESS = 'update playing queue success';
const UPDATE_PLAYING_QUEUE_FAILURE = 'update playing queue failure';
const updatePlayingQueueStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_PLAYING_QUEUE_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updatePlayingQueueFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_PLAYING_QUEUE_FAILURE);
const updatePlayingQueueSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_PLAYING_QUEUE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
/* Clears a user's queue */
const CLEAR_QUEUE_START = 'clear queue start';
const CLEAR_QUEUE_SUCCESS = 'clear queue success';
const CLEAR_QUEUE_FAILURE = 'clear queue failure';
const clearQueueStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLEAR_QUEUE_START);
const clearQueueSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLEAR_QUEUE_SUCCESS);
const clearQueueFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLEAR_QUEUE_FAILURE);
/* Update the play position of currently playing item */
const UPDATE_PLAY_POSITION_START = 'update play position start';
const UPDATE_PLAY_POSITION_SUCCESS = 'update play position success';
const UPDATE_PLAY_POSITION_FAILURE = 'update play position failure';
const updatePlayPositionStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_PLAY_POSITION_START, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updatePlayPositionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_PLAY_POSITION_SUCCESS);
const updatePlayPositionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_PLAY_POSITION_FAILURE);
const REWIND_START = 'rewind start';
const REWIND_SUCCESS = 'rewind success';
const REWIND_FAILURE = 'rewind failure';
const rewindStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(REWIND_START);
const rewindSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(REWIND_SUCCESS);
const rewindFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(REWIND_FAILURE);
const FORWARD_START = 'forward start';
const FORWARD_SUCCESS = 'forward success';
const FORWARD_FAILURE = 'forward failure';
const forwardStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(FORWARD_START);
const forwardSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(FORWARD_SUCCESS);
const forwardFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(FORWARD_FAILURE);
const NEXT_START = 'next start';
const NEXT_SUCCESS = 'next success';
const NEXT_FAILURE = 'next failure';
const nextStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NEXT_START);
const nextSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NEXT_SUCCESS);
const nextFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(NEXT_FAILURE);
const PREVIOUS_START = 'previous start';
const PREVIOUS_SUCCESS = 'previous success';
const PREVIOUS_FAILURE = 'previous failure';
const prevStart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PREVIOUS_START);
const prevSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PREVIOUS_SUCCESS);
const prevFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(PREVIOUS_FAILURE);
const TOGGLE_MINI_PLAYER = 'toggle mini player';
const toggleMiniPlayer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(TOGGLE_MINI_PLAYER);


/***/ }),

/***/ "N9de":
/*!************************************************!*\
  !*** ./src/app/user/store/state/user.state.ts ***!
  \************************************************/
/*! exports provided: USER_STATE_NAME, initialUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATE_NAME", function() { return USER_STATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialUserState", function() { return initialUserState; });
const USER_STATE_NAME = 'user';
const initialUserState = {
    username: 'lbugasu',
    firstname: 'lbugasu',
    lastname: 'lbugasu',
    email: 'lbugasu',
    active: false,
    likedPodcasts: [],
    likedEpisodes: [],
    bookmarkedEpisodes: [],
    plays: [],
    playingSpeed: 1,
    volume: 0.5,
    loading: false,
    loaded: false,
    authtoken: null,
    loggedIn: false,
    queue: []
};


/***/ }),

/***/ "NlLR":
/*!**********************************************************!*\
  !*** ./src/app/shared/player/services/player.service.ts ***!
  \**********************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gql */ "jozf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");



class PlayerService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    setUserVolume(volume) {
        return this.apollo.mutate({
            mutation: _gql__WEBPACK_IMPORTED_MODULE_0__["SET_VOLUME"],
            variables: { volume: volume }
        });
    }
    getPlayingQueue() {
        return this.apollo.watchQuery({
            query: _gql__WEBPACK_IMPORTED_MODULE_0__["GET_USER_PLAYING_QUEUE"]
        }).valueChanges;
    }
    addToPlayingQueue(slug) {
        return this.apollo.mutate({
            mutation: _gql__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_PLAYING_QUEUE"],
            variables: { slug: slug }
        });
    }
    addToBeginningOfQueue(slug) {
        return this.apollo.mutate({
            mutation: _gql__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_BEGINNING_OF_QUEUE"],
            variables: { slug: slug }
        });
    }
    changePlayingSpeed(speed) {
        return this.apollo.mutate({
            mutation: _gql__WEBPACK_IMPORTED_MODULE_0__["CHANGE_PLAYING_SPEED"],
            variables: { speed: speed }
        });
    }
    updatePlayPosition(position, playId) {
        return this.apollo.mutate({
            mutation: _gql__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PLAY_POSITION"],
            variables: { position: position, playId: playId }
        });
    }
    updatePlayerQueue(queue) {
        return this.apollo.mutate({
            mutation: _gql__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PLAYER_QUEUE"],
            variables: { queue: queue }
        });
    }
    clearQueue() {
        return this.apollo.mutate({
            mutation: _gql__WEBPACK_IMPORTED_MODULE_0__["CLEAR_QUEUE"]
        });
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"])); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OPzg":
/*!*******************************************************!*\
  !*** ./src/app/shared/player/store/player.effects.ts ***!
  \*******************************************************/
/*! exports provided: PlayerEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerEffects", function() { return PlayerEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _player_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.actions */ "LwLl");
/* harmony import */ var _player_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.selectors */ "pUKy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _audio_audio_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../audio/audio.player */ "lLkD");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/player.service */ "NlLR");









class PlayerEffects {
    constructor(store, actions$, player, playerService) {
        this.store = store;
        this.actions$ = actions$;
        this.player = player;
        this.playerService = playerService;
        this.changeVolume$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            // Update player volume and update on server
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_player_actions__WEBPACK_IMPORTED_MODULE_2__["changeVolume"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(action => {
                // change player volume
                this.player.changeVolume(action.volume);
                // Change the volume on the server
                return this.playerService.setUserVolume(action.volume).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'setUserVolume'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
                    return _player_actions__WEBPACK_IMPORTED_MODULE_2__["changeVolumeSuccess"]({ volume: +data });
                }));
            }));
        });
        this.playPause$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_player_actions__WEBPACK_IMPORTED_MODULE_2__["playPauseStart"]), Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["concatLatestFrom"])(action => this.store.select(_player_selectors__WEBPACK_IMPORTED_MODULE_3__["getPlayer"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([action, playerState]) => {
                if (this.player.player.playing()) {
                    this.player.player.pause();
                }
                else {
                    this.player.player.play();
                }
                return _player_actions__WEBPACK_IMPORTED_MODULE_2__["playPauseSuccess"]({ playing: !playerState.playing });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error.message);
                return [_player_actions__WEBPACK_IMPORTED_MODULE_2__["playPauseFailure"]()];
            }));
        });
        this.addToBegginingOfQueue$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            let ep;
            const request$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_player_actions__WEBPACK_IMPORTED_MODULE_2__["addToBeginningOfQueueStart"]), Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["concatLatestFrom"])(action => this.store.select(_player_selectors__WEBPACK_IMPORTED_MODULE_3__["getPlayer"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(([action, playerState]) => {
                ep = action.episode;
                const newPlay = {
                    episode: ep,
                    completed: false,
                    position: 0,
                    started: false,
                    _id: ''
                };
                if (!!this.player.player)
                    this.player.player.pause();
                this.player.defineNewState(newPlay);
                this.player.player.play();
                return this.playerService.addToBeginningOfQueue(ep.slug);
            }));
            const response$ = request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'addToBeginningOfQueue'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((play) => {
                // this.player.pause()
                // this.player.defineNewState(play)
                // this.player.play()
                return _player_actions__WEBPACK_IMPORTED_MODULE_2__["addToBeginningOfQueueSuccess"]({ play: play });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error.message);
                // On failure, still play the episode
                const newPlay = {
                    episode: ep,
                    completed: false,
                    position: 0,
                    started: false,
                    _id: ''
                };
                return [_player_actions__WEBPACK_IMPORTED_MODULE_2__["addToBeginningOfQueueFailure"]({ play: newPlay })];
            }));
            return response$;
        });
        this.addToQueue$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            const request$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_player_actions__WEBPACK_IMPORTED_MODULE_2__["addToQueueStart"]), Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["concatLatestFrom"])(action => this.store.select(_player_selectors__WEBPACK_IMPORTED_MODULE_3__["getPlayer"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(([action, playerState]) => {
                console.log(action.episode.slug);
                // Add the episode to the user's queue
                return this.playerService.addToPlayingQueue(action.episode.slug);
                // update the current queue
            }));
            const result$ = request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'addToPlayerQueue'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
                console.log(result);
                return _player_actions__WEBPACK_IMPORTED_MODULE_2__["addToQueueSuccess"]({ plays: result });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error.message);
                return [_player_actions__WEBPACK_IMPORTED_MODULE_2__["addToQueueFailure"]()];
            }));
            return result$;
        });
        this.loadPlayingQueue = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            const request$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_player_actions__WEBPACK_IMPORTED_MODULE_2__["getPlayingQueueStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(action => {
                return this.playerService.getPlayingQueue();
            }));
            const response$ = request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'getPlayingQueue'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((plays) => {
                console.log(plays);
                return _player_actions__WEBPACK_IMPORTED_MODULE_2__["getPlayingQueueSuccess"]({ plays: [] });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error.message);
                return [_player_actions__WEBPACK_IMPORTED_MODULE_2__["getPlayingQueueFailure"]()];
            }));
            return response$;
        });
        this.changePlayingSpeed$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            const request$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_player_actions__WEBPACK_IMPORTED_MODULE_2__["changePlayingSpeed"]), Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["concatLatestFrom"])(action => this.store.select(_player_selectors__WEBPACK_IMPORTED_MODULE_3__["getPlayer"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(([action, playerState]) => {
                return this.playerService.changePlayingSpeed(action.speed);
            }));
            const response$ = request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'changePlayingSpeed'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((speed) => {
                return _player_actions__WEBPACK_IMPORTED_MODULE_2__["changePlayingSpeedSuccess"]({ speed: speed });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error.message);
                return [_player_actions__WEBPACK_IMPORTED_MODULE_2__["changePlayingSpeedFailure"]()];
            }));
            return response$;
        });
        // Updates the current play position
        this.updatePlayPosition$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            const request$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_player_actions__WEBPACK_IMPORTED_MODULE_2__["updatePlayPositionStart"]), Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["concatLatestFrom"])(action => this.store.select(_player_selectors__WEBPACK_IMPORTED_MODULE_3__["getCurrentlyPlayingItem"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(1000 * 10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(([action, playerState]) => {
                console.log('updating');
                return this.playerService.updatePlayPosition(action.position, action.item._id);
            }));
            const response$ = request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'updatePlayPosition'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((play) => {
                console.log('updated playing position');
                return _player_actions__WEBPACK_IMPORTED_MODULE_2__["updatePlayPositionSuccess"]();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error.message);
                return [_player_actions__WEBPACK_IMPORTED_MODULE_2__["updatePlayingQueueFailure"]()];
            }));
            return response$;
        });
        // Updates the queue
        this.updateQueue$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            const request$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_player_actions__WEBPACK_IMPORTED_MODULE_2__["updatePlayingQueueStart"]), Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["concatLatestFrom"])(action => this.store.select(_player_selectors__WEBPACK_IMPORTED_MODULE_3__["getQueue"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(([action, playerState]) => {
                return this.playerService.updatePlayerQueue(action.queue);
            }));
            const response$ = request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'updatePlayerQueue'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((queue) => {
                console.log('updated player queue');
                return _player_actions__WEBPACK_IMPORTED_MODULE_2__["updatePlayingQueueSuccess"]({ queue: queue });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error.message);
                return [_player_actions__WEBPACK_IMPORTED_MODULE_2__["updatePlayingQueueFailure"]()];
            }));
            return response$;
        });
        // clears the queue
        this.clearQueue = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            const request$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_player_actions__WEBPACK_IMPORTED_MODULE_2__["clearQueueStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(() => {
                return this.playerService.clearQueue();
            }));
            const response$ = request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'clearQueue'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                console.log(response);
                return _player_actions__WEBPACK_IMPORTED_MODULE_2__["clearQueueSuccess"]();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error.message);
                return [_player_actions__WEBPACK_IMPORTED_MODULE_2__["clearQueueFailure"]()];
            }));
            return response$;
        });
    }
}
PlayerEffects.ɵfac = function PlayerEffects_Factory(t) { return new (t || PlayerEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_audio_audio_player__WEBPACK_IMPORTED_MODULE_6__["AudioPlayer"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_player_service__WEBPACK_IMPORTED_MODULE_7__["PlayerService"])); };
PlayerEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PlayerEffects, factory: PlayerEffects.ɵfac });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _player_store_player_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/store/player.effects */ "OPzg");
/* harmony import */ var _player_store_player_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/store/player.selectors */ "pUKy");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player/player.component */ "Ha02");
/* harmony import */ var src_libs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/libs */ "6HvO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pipes_time_time_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/time/time.pipe */ "fehW");
/* harmony import */ var _pipes_date_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/date/date.pipe */ "6ONQ");
/* harmony import */ var _pipes_wordcount_wordcount_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/wordcount/wordcount.pipe */ "SnQu");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _player_store_player_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./player/store/player.reducers */ "QMVg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            src_libs__WEBPACK_IMPORTED_MODULE_5__["Material"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_player_store_player_effects__WEBPACK_IMPORTED_MODULE_0__["PlayerEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature(_player_store_player_selectors__WEBPACK_IMPORTED_MODULE_1__["PLAYER_STATE_NAME"], _player_store_player_reducers__WEBPACK_IMPORTED_MODULE_11__["playerReducer"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"], _pipes_time_time_pipe__WEBPACK_IMPORTED_MODULE_7__["TimePipe"], _pipes_date_date_pipe__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _pipes_wordcount_wordcount_pipe__WEBPACK_IMPORTED_MODULE_9__["WordcountPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        src_libs__WEBPACK_IMPORTED_MODULE_5__["Material"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreFeatureModule"]], exports: [_player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"], _pipes_time_time_pipe__WEBPACK_IMPORTED_MODULE_7__["TimePipe"], _pipes_date_date_pipe__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _pipes_wordcount_wordcount_pipe__WEBPACK_IMPORTED_MODULE_9__["WordcountPipe"]] }); })();


/***/ }),

/***/ "PR7f":
/*!*****************************************************!*\
  !*** ./src/app/shared/player/store/player.state.ts ***!
  \*****************************************************/
/*! exports provided: initialPlayerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPlayerState", function() { return initialPlayerState; });
const initialPlayerState = {
    queue: [],
    mini: false,
    volume: 0.5,
    playing: false,
    loadedPlayingQueue: false,
    loadingPlayingQueue: false,
    speed: 1
};


/***/ }),

/***/ "QMVg":
/*!********************************************************!*\
  !*** ./src/app/shared/player/store/player.reducers.ts ***!
  \********************************************************/
/*! exports provided: playerReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerReducer", function() { return playerReducer; });
/* harmony import */ var _player_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.actions */ "LwLl");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _player_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.state */ "PR7f");



const _playerReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_player_state__WEBPACK_IMPORTED_MODULE_2__["initialPlayerState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["changeVolume"], (state, action) => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["changeVolumeSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { volume: +action.volume });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["changePlayingSpeed"], (state, action) => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["changePlayingSpeedSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { speed: +action.speed });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["changePlayingSpeedFailure"], (state, action) => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["addToQueueStart"], (state, action) => {
    console.log(state);
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["addToQueueSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { queue: !!action.plays ? [...action.plays] : [...state.queue] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["addToQueueFailure"], state => {
    // How do we deal with failure?
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["addToBeginningOfQueueStart"], (state, action) => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["addToBeginningOfQueueSuccess"], (state, action) => {
    console.log(state);
    return Object.assign(Object.assign({}, state), { queue: !!action.play ? [action.play, ...state.queue] : [...state.queue] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["addToBeginningOfQueueFailure"], (state, action) => {
    // How do we deal with failure?
    return Object.assign(Object.assign({}, state), { queue: !!action.play ? [action.play, ...state.queue] : [...state.queue] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["getPlayingQueueStart"], state => {
    return Object.assign(Object.assign({}, state), { loadingPlayPlayingQueue: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["getPlayingQueueSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { loadingPlayPlayingQueue: false, loadedPlayingQueue: true, queue: [...action.plays] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["getPlayingQueueFailure"], state => {
    return Object.assign(Object.assign({}, state), { loadingPlayPlayingQueue: false, loadedPlayingQueue: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["playPauseSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { playing: action.playing });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["playPauseFailure"], (state, action) => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["pauseStart"], state => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["stopStart"], state => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["nextStart"], state => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["prevStart"], state => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["forwardStart"], state => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["rewindStart"], state => {
    return Object.assign({}, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_player_actions__WEBPACK_IMPORTED_MODULE_0__["toggleMiniPlayer"], state => {
    return Object.assign(Object.assign({}, state), { mini: !state.mini });
}));
function playerReducer(state, action) {
    return _playerReducer(state, action);
}


/***/ }),

/***/ "SZmd":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions */ "pgYH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










const _c0 = function () { return ["/me/signin"]; };
class SignUpComponent {
    constructor(store) {
        this.store = store;
        this.hidePassword = true;
        this.hideConfirm = true;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(8)]),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(8)]),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(8)
            ])
        });
    }
    ngOnInit() { }
    signUp() {
        var _a, _b, _c, _d, _e;
        const firstname = (_a = this.signUpForm.get('firstname')) === null || _a === void 0 ? void 0 : _a.value;
        const lastname = (_b = this.signUpForm.get('lastname')) === null || _b === void 0 ? void 0 : _b.value;
        const email = (_c = this.signUpForm.get('email')) === null || _c === void 0 ? void 0 : _c.value;
        const username = (_d = this.signUpForm.get('username')) === null || _d === void 0 ? void 0 : _d.value;
        const password = (_e = this.signUpForm.get('password')) === null || _e === void 0 ? void 0 : _e.value;
        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            username: username,
            password: password
        };
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_1__["signUpStart"]({ user: user }));
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 44, vars: 11, consts: [[3, "formGroup"], [1, "sub__section"], ["appearance", "fill", "floatLabel", "auto"], ["matInput", "", "formControlName", "firstname", "matInput", "", "placeholder", "Magic"], ["matInput", "", "formControlName", "lastname", "matInput", "", "placeholder", "Mike"], ["matInput", "", "formControlName", "username", "matInput", "", "placeholder", "magicmike", "required", ""], ["matInput", "", "type", "email", "formControlName", "lastname", "matInput", "", "placeholder", "magic@mike.john", "required", ""], ["matInput", "", "type", "password", "formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "type", "password", "formControlName", "repeatPassword", "matInput", "", "required", "", 3, "type"], [1, "options"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "routerLink"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Pick Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_27_listener() { return ctx.hidePassword = !ctx.hidePassword; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_34_listener() { return ctx.hideConfirm = !ctx.hideConfirm; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_38_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Sign in instead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hidePassword ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.hideConfirm ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hideConfirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.hideConfirm ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], styles: ["section[_ngcontent-%COMP%] {\n  font-family: highgate, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  display: flex;\n  align-items: center;\n  height: 70%;\n  justify-content: center;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 35%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  font-family: highgate, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n@media only screen and (max-width: 1600px) {\n  section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n@media only screen and (max-width: 1370px) {\n  section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 50.5%;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 57.5%;\n  }\n}\n@media only screen and (max-width: 900px) {\n  section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n}\n@media only screen and (max-width: 700px) {\n  section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n}\n@media only screen and (max-width: 700px) {\n  section[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.sub__section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.sub__section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  padding: 1%;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.sub__section[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: highgate, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.options[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFBRjtBQUNFO0VBUUUsVUFBQTtFQXFCQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQTFCSjtBQUpJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTU47QUFISTtFQVRGO0lBVUksVUFBQTtFQU1KO0FBQ0Y7QUFMSTtFQVpGO0lBYUksWUFBQTtFQVFKO0FBQ0Y7QUFOSTtFQWhCRjtJQWlCSSxZQUFBO0VBU0o7QUFDRjtBQVJJO0VBbkJGO0lBb0JJLFVBQUE7RUFXSjtBQUNGO0FBVkk7RUF0QkY7SUF1QkksVUFBQTtFQWFKO0FBQ0Y7QUFaSTtFQXpCRjtJQTBCSSxVQUFBO0VBZUo7QUFDRjtBQVZJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVlOO0FBWE07RUFDRSxXQUFBO0FBYVI7QUFaUTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWNWO0FBVkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFZTjtBQVhNO0VBQ0UsVUFBQTtBQWFSIiwiZmlsZSI6InNpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBmb250LWZhbWlseTogaGlnaGdhdGUsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDcwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb3JtIHtcclxuICAgIGgyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1mYW1pbHk6IGhpZ2hnYXRlLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM3MHB4KSB7XHJcbiAgICAgIHdpZHRoOiA1MC41JTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgICB3aWR0aDogNTcuNSU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGRpdi5zdWJfX3NlY3Rpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgICBwYWRkaW5nOiAxJTtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogaGlnaGdhdGUsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGl2Lm9wdGlvbnMge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogNSU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "SnQu":
/*!**********************************************************!*\
  !*** ./src/app/shared/pipes/wordcount/wordcount.pipe.ts ***!
  \**********************************************************/
/*! exports provided: WordcountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordcountPipe", function() { return WordcountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WordcountPipe {
    transform(value) {
        if (!value)
            return '';
        const words = value.split(' ');
        if (words.length > 70) {
            const newWords = [];
            let stops = 0;
            for (let i = 0; i < words.length; i++) {
                if (stops < 3) {
                    if (words[i] == '.' || words[i][words[i].length - 1] == '.') {
                        stops++;
                    }
                    newWords.push(words[i]);
                }
            }
            return newWords.join(' ');
        }
        return value;
    }
}
WordcountPipe.ɵfac = function WordcountPipe_Factory(t) { return new (t || WordcountPipe)(); };
WordcountPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "wordcount", type: WordcountPipe, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _user_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/store/selectors/user.selector */ "eXBj");
/* harmony import */ var _user_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/store/actions/user.actions */ "/n3r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _shared_player_audio_audio_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/player/audio/audio.player */ "lLkD");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_player_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/player/player.component */ "Ha02");












const _c0 = function (a0) { return { height: a0 }; };
class AppComponent {
    constructor(router, store, player) {
        this.router = router;
        this.store = store;
        this.player = player;
        this.title = 'eycho';
        this.somethingPlaying = true;
        this.mini = false;
        this.playing = false;
        this.loggedIn = false;
    }
    navigate(path) {
        this.router.navigateByUrl(path);
    }
    ngOnInit() {
        // log in with token
        const token = localStorage.getItem('token');
        if (!!token) {
            // setTimeout(() => {
            this.store.dispatch(_user_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["signInWithTokenStart"]());
            // }, 1000)
        }
        // Logged in Status
        this.store
            .select(_user_store_selectors_user_selector__WEBPACK_IMPORTED_MODULE_0__["getUserLoggedInStatus"])
            .subscribe(state => (this.loggedIn = state));
    }
    getWindowWidth() {
        return window.innerWidth;
    }
    getUser() { }
    signIn() {
        if (this.loggedIn) {
            this.router.navigateByUrl('me');
        }
        else {
            this.router.navigateByUrl('me/signin');
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_player_audio_audio_player__WEBPACK_IMPORTED_MODULE_5__["AudioPlayer"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 37, vars: 7, consts: [["mat-mini-fab", "", "aria-label", "Menu toggle button", 3, "click"], [1, "eycho"], [1, "spacer"], ["mat-mini-fab", "", "aria-label", "User Icon", 3, "click"], [1, "example-container", 3, "ngStyle"], ["mode", "side", "opened", ""], ["drawer", ""], [1, "menu__item"], ["mat-button", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Eycho");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_8_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-drawer-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-drawer", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() { return ctx.navigate(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_20_listener() { return ctx.navigate("search"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() { return ctx.navigate("discover"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_30_listener() { return ctx.navigate("library"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "library_books");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "app-player");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.player.active ? "84vh" : "93vh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getWindowWidth() > 1200 ? "Home" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getWindowWidth() > 1200 ? "Search" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getWindowWidth() > 1200 ? "Discover" : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getWindowWidth() > 1200 ? "Library" : "", " ");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_player_player_component__WEBPACK_IMPORTED_MODULE_11__["PlayerComponent"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  height: 7vh;\n  background-color: var(--background-primary);\n}\nmat-toolbar[_ngcontent-%COMP%]   div.eycho[_ngcontent-%COMP%] {\n  margin: 0 1% 0 1%;\n}\nmat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: bd-geminis, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  color: var(--text-light);\n}\nmat-toolbar[_ngcontent-%COMP%]   span.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 84vh;\n  margin: 0;\n  padding: 0;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 100%;\n  background-color: var(--background-medium-light);\n  padding-top: 1%;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   div.menu__item[_ngcontent-%COMP%] {\n  font-family: highgate, sans-serif;\n  font-weight: 400;\n  font-style: normal;\n  width: 100%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  padding-top: 10%;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   div.menu__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Sailec Medium\";\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   div.menu__item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: var(--button-primary);\n}\n@media (max-width: 700px) {\n  mat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n    width: 12vw;\n  }\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer-content[_ngcontent-%COMP%] {\n  background-color: var(--background-light);\n  height: 100%;\n  overflow: hidden;\n}\napp-player[_ngcontent-%COMP%] {\n  height: 9vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtBQUNGO0FBQUU7RUFDRSxpQkFBQTtBQUVKO0FBQUU7RUFDRSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUVKO0FBQUU7RUFDRSxjQUFBO0FBRUo7QUFDQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVGO0FBREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsZUFBQTtBQUdKO0FBREk7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFTQSxnQkFBQTtBQU5OO0FBRk07RUFDRSw0QkFBQTtBQUlSO0FBRk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUlSO0FBQUk7RUF6QkY7SUEwQkksV0FBQTtFQUdKO0FBQ0Y7QUFERTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBR0o7QUFBQTtFQUNFLFdBQUE7QUFHRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gIGhlaWdodDogN3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xuICBkaXYuZXljaG8ge1xuICAgIG1hcmdpbjogMCAxJSAwIDElO1xuICB9XG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogYmQtZ2VtaW5pcywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIH1cbiAgc3Bhbi5zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG59XG5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogODR2aDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXQtZHJhd2VyIHtcbiAgICB3aWR0aDogMTB2dztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1tZWRpdW0tbGlnaHQpO1xuICAgIHBhZGRpbmctdG9wOiAxJTtcblxuICAgIGRpdi5tZW51X19pdGVtIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBoaWdoZ2F0ZSwgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAvLyBoZWlnaHQ6IDV2aDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2FpbGVjIE1lZGl1bSc7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICB3aWR0aDogMTJ2dztcbiAgICB9XG4gIH1cbiAgbWF0LWRyYXdlci1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuYXBwLXBsYXllciB7XG4gIGhlaWdodDogOXZoO1xuICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gIC8vIGJvdHRvbTogMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "U/Dy":
/*!************************************!*\
  !*** ./src/app/store/app.state.ts ***!
  \************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _user_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user/store/reducers/user.reducer */ "hP8q");

const appReducer = {
    user: _user_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_0__["userReducer"]
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var src_libs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/libs */ "6HvO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_graphql_graphql_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/graphql/graphql.module */ "HnJI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _store_app_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/app.state */ "U/Dy");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.module */ "7UCR");
/* harmony import */ var _shared_graphql_interceptor_graphql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/graphql/interceptor.graphql */ "A7YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _shared_graphql_interceptor_graphql__WEBPACK_IMPORTED_MODULE_18__["GraphQLInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            src_libs__WEBPACK_IMPORTED_MODULE_6__["Material"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
            _shared_graphql_graphql_module__WEBPACK_IMPORTED_MODULE_8__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__["InfiniteScrollModule"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_17__["UserModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot(_store_app_state__WEBPACK_IMPORTED_MODULE_16__["appReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["EffectsModule"].forRoot([]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        src_libs__WEBPACK_IMPORTED_MODULE_6__["Material"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
        _shared_graphql_graphql_module__WEBPACK_IMPORTED_MODULE_8__["GraphQLModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__["InfiniteScrollModule"],
        _user_user_module__WEBPACK_IMPORTED_MODULE_17__["UserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "ZNOx":
/*!********************************************!*\
  !*** ./src/app/user/services/mutations.ts ***!
  \********************************************/
/*! exports provided: SIGN_IN, SIGN_UP, SIGN_OUT, SIGN_IN_WITH_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN", function() { return SIGN_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT", function() { return SIGN_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_WITH_TOKEN", function() { return SIGN_IN_WITH_TOKEN; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");

const SIGN_IN = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation SignIn($password: String!, $username: String!) {
    signin(password: $password, username: $username) {
      firstname
      lastname
      username
      email
      contributions
      LikedPodcasts {
        title
      }
      subscribedPodcasts {
        title
      }
      likedEpisodes {
        title
      }
      bookmarkedEpisodes {
        title
      }
      queue {
        _id
        episode {
          title
          slug
          datePublished
          description
          duration
          image
          snNo
          epNo
          sourceUrl
        }
        position
        started
        completed
      }
      playingSpeed
      volume
      authtoken
      admin
    }
  }
`;
const SIGN_UP = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation SignUp($user: NewUser!) {
    signUp(user: $user) {
      firstname
      lastname
      username
      email
      password
      contributions
      LikedPodcasts {
        title
      }
      subscribedPodcasts {
        title
      }
      likedEpisodes {
        title
      }
      bookmarkedEpisodes {
        title
      }
      queue {
        _id
        episode {
          title
          slug
          datePublished
          description
          duration
          image
          snNo
          epNo
          sourceUrl
        }
        position
        started
        completed
      }
      playingSpeed
      volume
      authtoken
    }
  }
`;
const SIGN_OUT = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation {
    signOut
  }
`;
const SIGN_IN_WITH_TOKEN = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation SignInWithToken {
    signInWithToken {
      firstname
      lastname
      username
      email
      contributions
      LikedPodcasts {
        title
      }
      subscribedPodcasts {
        title
      }
      likedEpisodes {
        title
      }
      bookmarkedEpisodes {
        title
      }
      queue {
        _id
        episode {
          title
          slug
          datePublished
          description
          duration
          image
          snNo
          epNo
          sourceUrl
        }
        position
        started
        completed
      }
      playingSpeed
      volume
      authtoken
      admin
    }
  }
`;


/***/ }),

/***/ "dT4T":
/*!*************************************************************************!*\
  !*** ./src/app/components/podcast-preview/podcast-preview.component.ts ***!
  \*************************************************************************/
/*! exports provided: PodcastPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastPreviewComponent", function() { return PodcastPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PodcastPreviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
PodcastPreviewComponent.ɵfac = function PodcastPreviewComponent_Factory(t) { return new (t || PodcastPreviewComponent)(); };
PodcastPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PodcastPreviewComponent, selectors: [["app-podcast-preview"]], decls: 2, vars: 0, template: function PodcastPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "podcast-preview works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2RjYXN0LXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "eXBj":
/*!*******************************************************!*\
  !*** ./src/app/user/store/selectors/user.selector.ts ***!
  \*******************************************************/
/*! exports provided: getUser, getUserLoggedInStatus, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLoggedInStatus", function() { return getUserLoggedInStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony import */ var _state_user_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../state/user.state */ "N9de");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const getUserState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(_state_user_state__WEBPACK_IMPORTED_MODULE_0__["USER_STATE_NAME"]);
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUserState, (state) => {
    return state;
});
const getUserLoggedInStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUser, state => state.loggedIn);
const getToken = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getUser, state => {
    return state.authtoken;
});


/***/ }),

/***/ "fehW":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/time/time.pipe.ts ***!
  \************************************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TimePipe {
    transform(value) {
        return this.toHHMMSS(value);
    }
    toHHMMSS(duration) {
        if (`${duration}`.split(":").length > 1) {
            return duration;
        }
        const secs = +duration;
        ;
        var hours = Math.floor(secs / 3600);
        var minutes = Math.floor(secs / 60) % 60;
        var seconds = secs % 60;
        return [hours, minutes, seconds]
            .map((v) => (v < 10 ? "0" + v : v))
            .filter((v, i) => v !== "00" || i > 0)
            .join(":");
    }
    getNiceDuration(duration) {
        if (duration.split(":").length == 1) {
            return new Date(+duration * 1000).toISOString().substr(11, 8);
        }
        return duration;
    }
}
TimePipe.ɵfac = function TimePipe_Factory(t) { return new (t || TimePipe)(); };
TimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "time", type: TimePipe, pure: true });


/***/ }),

/***/ "hP8q":
/*!*****************************************************!*\
  !*** ./src/app/user/store/reducers/user.reducer.ts ***!
  \*****************************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "pgYH");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_user_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/user.state */ "N9de");



const _userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_user_state__WEBPACK_IMPORTED_MODULE_2__["initialUserState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_0__["signInStart"], state => {
    return Object.assign(Object.assign({}, state), { loading: true, loaded: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_0__["signInWithTokenStart"], state => {
    return Object.assign(Object.assign({}, state), { loading: true, loaded: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_0__["signInSuccess"], (state, action) => {
    return Object.assign(Object.assign(Object.assign({}, state), { loading: false, loaded: true, loggedIn: true }), action.user);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_0__["signInWithTokenSuccess"], (state, action) => {
    return Object.assign(Object.assign(Object.assign({}, state), { loading: false, loaded: true, loggedIn: true }), action.user);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_0__["signInWithTokenFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { loading: false, loaded: false, loggedIn: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_0__["signInFailure"], state => {
    return Object.assign(Object.assign({}, state), { loading: false, loaded: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_0__["signUpStart"], state => {
    return Object.assign(Object.assign({}, state), { loading: true, loaded: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_0__["signUpSuccess"], (state, action) => {
    return Object.assign(Object.assign(Object.assign({}, state), action.user), { loading: false, loaded: true, loggedIn: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_0__["signUpFailure"], state => {
    return Object.assign(Object.assign({}, state), { loading: false, loaded: false });
}));
function userReducer(state, action) {
    return _userReducer(state, action);
}
// export interface UserState {
//   data: User[]
//   loaded: boolean
//   loading: boolean
// }
// export const initialState: UserState = {
//   data: [],
//   loaded: false,
//   loading: false
// }
// export function reducer (
//   state = initialState,
//   action: fromUser.UserAction
// ): UserState {
//   switch (action.type) {
//     case fromUser.SIGN_IN: {
//       return {
//         ...state,
//         loading: true,
//         loaded: false
//       }
//     }
//     case fromUser.SIGN_IN_SUCCESS: {
//       return {
//         ...state,
//         loading: false,
//         loaded: true
//       }
//     }
//     case fromUser.SIGN_IN_FAILURE: {
//       return {
//         ...state,
//         loading: false,
//         loaded: false
//       }
//     }
//   }
//   return state
// }
// // Selectors
// export const getUserLoading = (state: UserState) => {
//   return state.loading
// }
// export const getUserLoaded = (state: UserState) => {
//   return state.loaded
// }
// export const getUser = (state: UserState) => {
//   return state.data
// }
// // case fromUser.SIGN_UP: {
// //   return {
// //     ...state,
// //     loading: true,
// //     loaded: false
// //   }
// // }
// // case fromUser.SIGN_UP_SUCCESS: {
// //   return {
// //     ...state,
// //     loading: false,
// //     loaded: true
// //   }
// // }
// // case fromUser.SIGN_UP_FAILURE: {
// //   return {
// //     ...state,
// //     loading: false,
// //     loaded: false
// //   }
// // }


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _podcast_preview_podcast_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./podcast-preview/podcast-preview.component */ "dT4T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_podcast_preview_podcast_preview_component__WEBPACK_IMPORTED_MODULE_1__["PodcastPreviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_podcast_preview_podcast_preview_component__WEBPACK_IMPORTED_MODULE_1__["PodcastPreviewComponent"]] }); })();


/***/ }),

/***/ "jozf":
/*!***********************************************!*\
  !*** ./src/app/shared/player/services/gql.ts ***!
  \***********************************************/
/*! exports provided: SET_VOLUME, GET_USER_PLAYING_QUEUE, ADD_TO_PLAYING_QUEUE, ADD_TO_BEGINNING_OF_QUEUE, CHANGE_PLAYING_SPEED, UPDATE_PLAY_POSITION, UPDATE_PLAYER_QUEUE, CLEAR_QUEUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_VOLUME", function() { return SET_VOLUME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_PLAYING_QUEUE", function() { return GET_USER_PLAYING_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_PLAYING_QUEUE", function() { return ADD_TO_PLAYING_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_BEGINNING_OF_QUEUE", function() { return ADD_TO_BEGINNING_OF_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PLAYING_SPEED", function() { return CHANGE_PLAYING_SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PLAY_POSITION", function() { return UPDATE_PLAY_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PLAYER_QUEUE", function() { return UPDATE_PLAYER_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_QUEUE", function() { return CLEAR_QUEUE; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");

const SET_VOLUME = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation SetUserVolume($volume: Float!) {
    setUserVolume(volume: $volume)
  }
`;
const GET_USER_PLAYING_QUEUE = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query GetQueue {
    getUserQueue {
      _id
      episode {
        title
        slug
        datePublished
        description
        duration
        image
        snNo
        epNo
        sourceUrl
      }
      position
      started
      completed
    }
  }
`;
const ADD_TO_PLAYING_QUEUE = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation AddToQueue($slug: String!) {
    addToPlayerQueue(slug: $slug) {
      _id
      episode {
        title
        slug
        datePublished
        description
        duration
        image
        snNo
        epNo
        sourceUrl
      }
      position
      started
      completed
    }
  }
`;
const ADD_TO_BEGINNING_OF_QUEUE = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation AddToBeginningOfQueue($slug: String!) {
    addToBeginningOfQueue(slug: $slug) {
      _id
      episode {
        title
        slug
        datePublished
        description
        duration
        image
        snNo
        epNo
        sourceUrl
      }
      position
      started
      completed
    }
  }
`;
const CHANGE_PLAYING_SPEED = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation ChangePlayingSpeed($speed: Float!) {
    changePlayingSpeed(speed: $speed)
  }
`;
const UPDATE_PLAY_POSITION = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation UpdatePosition($position: Float!, $playId: String!) {
    updatePosition(position: $position, playId: $playId) {
      _id
      episode {
        title
        slug
        datePublished
        description
        duration
        image
        snNo
        epNo
      }
      position
      started
      completed
    }
  }
`;
const UPDATE_PLAYER_QUEUE = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation updatePlayerQueue($queue: [String]!) {
    updatePlayerQueue(queue: $queue) {
      _id
      episode {
        title
        slug
        datePublished
        description
        duration
        image
        snNo
        epNo
        sourceUrl
      }
      position
      started
      completed
    }
  }
`;
const CLEAR_QUEUE = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  mutation ClearQueue {
    clearQueue
  }
`;


/***/ }),

/***/ "lLkD":
/*!*****************************************************!*\
  !*** ./src/app/shared/player/audio/audio.player.ts ***!
  \*****************************************************/
/*! exports provided: AudioPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayer", function() { return AudioPlayer; });
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_player_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/player.selectors */ "pUKy");
/* harmony import */ var _store_player_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/player.actions */ "LwLl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





class AudioPlayer {
    constructor(store) {
        this.store = store;
        this.player = null;
        this.queue = [];
        this.totalDuration = 0;
        this.currentTime = 0;
        this.trackProgress = 0;
        this.volume = 0.5;
        this.step = () => {
            this.totalDuration = Math.floor(this.player.duration());
            this.currentTime = Math.floor(this.player.seek());
            if (this.player.playing()) {
                this.store.dispatch(_store_player_actions__WEBPACK_IMPORTED_MODULE_2__["updatePlayPositionStart"]({
                    position: this.currentTime,
                    item: this.queue.length > 0 ? this.queue[0] : null
                }));
            }
            requestAnimationFrame(this.step);
        };
        this.store.select(_store_player_selectors__WEBPACK_IMPORTED_MODULE_1__["getQueue"]).subscribe(queue => {
            var _a;
            this.queue = queue;
            if (((_a = this.queue) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                this.active = true;
                if (!this.player) {
                    this.defineNewState(this.queue[0]);
                }
            }
        });
        this.store.select(_store_player_selectors__WEBPACK_IMPORTED_MODULE_1__["getPlayerVolume"]).subscribe(volume => {
            if (!!this.player)
                this.player.volume(volume);
            this.volume = volume;
        });
    }
    changeVolume(volume) {
        if (!!this.player)
            this.player.volume(volume);
    }
    stop() {
        this.player.stop();
    }
    defineNewState(item) {
        this.currentlyPlaying = item;
        this.player = new howler__WEBPACK_IMPORTED_MODULE_0__["Howl"]({
            html5: true,
            src: [item.episode.sourceUrl],
            preload: 'metadata',
            onplay: () => {
                // playerStore.updateState({ playingState: true })
                requestAnimationFrame(this.step);
            },
            onpause: () => {
                // this.playing = false
            },
            onseek: () => {
                this.step();
            },
            onplayerror: () => {
                console.log(new Error('playback error'));
            },
            onend: () => {
                // playerStore.updateState({ playingState: false })
                // this.playing = true
            },
            onstop: () => {
                // this.playing = true
            }
        });
        this.player.seek(item.position);
    }
    seek(change) {
        const position = change.value;
        const goTo = position * this.totalDuration;
        this.player.seek(goTo);
    }
    seekTrack() {
        this.trackProgress = this.currentTime / this.totalDuration;
        return 0;
    }
    changeVol($event) {
        this.store.dispatch(_store_player_actions__WEBPACK_IMPORTED_MODULE_2__["changeVolume"]({ volume: $event.value }));
    }
}
AudioPlayer.ɵfac = function AudioPlayer_Factory(t) { return new (t || AudioPlayer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AudioPlayer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AudioPlayer, factory: AudioPlayer.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oT4F":
/*!**********************************************!*\
  !*** ./src/libs/material/material.module.ts ***!
  \**********************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/core */ "fXoL");













































class Material {
}
Material.ɵfac = function Material_Factory(t) { return new (t || Material)(); };
Material.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineNgModule"]({ type: Material });
Material.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"],
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵsetNgModuleScope"](Material, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]] }); })();


/***/ }),

/***/ "pUKy":
/*!*********************************************************!*\
  !*** ./src/app/shared/player/store/player.selectors.ts ***!
  \*********************************************************/
/*! exports provided: PLAYER_STATE_NAME, getPlayer, getPlayerVolume, getPlaying, getQueue, getCurrentlyPlayingItem, getMini */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_STATE_NAME", function() { return PLAYER_STATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayer", function() { return getPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayerVolume", function() { return getPlayerVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaying", function() { return getPlaying; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueue", function() { return getQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentlyPlayingItem", function() { return getCurrentlyPlayingItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMini", function() { return getMini; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const PLAYER_STATE_NAME = 'player';
const getPlayerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(PLAYER_STATE_NAME);
const getPlayer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayerState, (state) => {
    return state;
});
const getPlayerVolume = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayer, state => state.volume);
const getPlaying = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayer, state => state.playing);
const getQueue = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayer, state => {
    return state.queue;
});
const getCurrentlyPlayingItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getQueue, state => {
    return state[0];
});
const getMini = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPlayer, state => {
    return state.mini;
});


/***/ }),

/***/ "pfZ0":
/*!***********************************************!*\
  !*** ./src/app/user/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mutations */ "ZNOx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");



class AuthService {
    constructor(apollo) {
        this.apollo = apollo;
    }
    signIn(username, password) {
        return this.apollo.mutate({
            mutation: _mutations__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN"],
            variables: { username: username, password: password }
        });
    }
    signUp(user) {
        return this.apollo.mutate({
            mutation: _mutations__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP"],
            variables: { user: user }
        });
    }
    signOut() {
        return this.apollo.mutate({
            mutation: _mutations__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT"]
        });
    }
    signInWithToken() {
        return this.apollo.mutate({
            mutation: _mutations__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_WITH_TOKEN"]
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pgYH":
/*!*********************************************!*\
  !*** ./src/app/user/store/actions/index.ts ***!
  \*********************************************/
/*! exports provided: SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_WITH_TOKEN_START, SIGN_IN_WITH_TOKEN_SUCCESS, SIGN_IN_WITH_TOKEN_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, signInStart, signInSuccess, signInFailure, signUpStart, signUpSuccess, signInWithTokenStart, signInWithTokenSuccess, signInWithTokenFailure, signUpFailure, signOutStart, signOutSuccess, signOutFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "/n3r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_START", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_SUCCESS", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_FAILURE", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_WITH_TOKEN_START", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_WITH_TOKEN_START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_WITH_TOKEN_SUCCESS", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_WITH_TOKEN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_WITH_TOKEN_FAILURE", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_WITH_TOKEN_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_START", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_START", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT_START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_SUCCESS", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_FAILURE", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInStart", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signInStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInSuccess", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInFailure", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signInFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUpStart", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signUpStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUpSuccess", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signUpSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithTokenStart", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signInWithTokenStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithTokenSuccess", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signInWithTokenSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithTokenFailure", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signInWithTokenFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUpFailure", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signUpFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signOutStart", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signOutStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signOutSuccess", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signOutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signOutFailure", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["signOutFailure"]; });




/***/ }),

/***/ "rN3G":
/*!****************************************************!*\
  !*** ./src/app/user/store/effects/user.effects.ts ***!
  \****************************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user.actions */ "/n3r");
/* harmony import */ var _shared_player_store_player_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/player/store/player.actions */ "LwLl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "pfZ0");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-angular */ "/IUn");









class UserEffects {
    constructor(actions$, authService, store, apollo) {
        this.actions$ = actions$;
        this.authService = authService;
        this.store = store;
        this.apollo = apollo;
        this.signIn$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signInStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(action => {
                return this.authService.signIn(action.username, action.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'signin'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                    const user = data;
                    // Save the auth token to the local storage.
                    localStorage.setItem('token', user.authtoken);
                    this.store.dispatch(_shared_player_store_player_actions__WEBPACK_IMPORTED_MODULE_3__["getPlayingQueueSuccess"]({ plays: user.queue }));
                    this.store.dispatch(_shared_player_store_player_actions__WEBPACK_IMPORTED_MODULE_3__["changeVolumeSuccess"]({ volume: user.volume }));
                    return _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signInSuccess"]({ user: user });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
                    console.log(error.message);
                    return [_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signInFailure"]()];
                }));
            }));
        });
        this.signInWithtoken$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            const req$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signInWithTokenStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(action => {
                return this.authService.signInWithToken();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
                return [_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signInFailure"]()];
            }));
            const res$ = req$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'signInWithToken'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
                this.store.dispatch(_shared_player_store_player_actions__WEBPACK_IMPORTED_MODULE_3__["getPlayingQueueSuccess"]({ plays: user.queue }));
                this.store.dispatch(_shared_player_store_player_actions__WEBPACK_IMPORTED_MODULE_3__["changeVolumeSuccess"]({ volume: user.volume }));
                return _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signInWithTokenSuccess"]({ user: user });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
                console.log(error.message);
                return [_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signInWithTokenFailure"]()];
            }));
            return res$;
        });
        this.signOut$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signOutStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(action => {
                return this.authService.signOut().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'signout'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
                    return _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signOutSuccess"]();
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
                    console.log(error.message);
                    return [_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signOutFailure"]()];
                }));
            }));
        });
        this.signUp$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["createEffect"])(() => {
            const request$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signUpStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["exhaustMap"])(action => {
                return this.authService.signUp(Object.assign({}, action.user));
            }));
            const result$ = request$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pluck"])('data', 'signup'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((result) => {
                return _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signUpSuccess"]({ user: result });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(error => {
                console.log(error.message);
                return [_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["signInFailure"]];
            }));
            return result$;
        });
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_0__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_7__["Apollo"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });


/***/ }),

/***/ "t5//":
/*!*************************************!*\
  !*** ./src/app/user/store/index.ts ***!
  \*************************************/
/*! exports provided: SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_WITH_TOKEN_START, SIGN_IN_WITH_TOKEN_SUCCESS, SIGN_IN_WITH_TOKEN_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_OUT_START, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE, signInStart, signInSuccess, signInFailure, signUpStart, signUpSuccess, signInWithTokenStart, signInWithTokenSuccess, signInWithTokenFailure, signUpFailure, signOutStart, signOutSuccess, signOutFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "pgYH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_START", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_WITH_TOKEN_START", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_WITH_TOKEN_START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_WITH_TOKEN_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_WITH_TOKEN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_IN_WITH_TOKEN_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_IN_WITH_TOKEN_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_START", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_START", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT_START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SIGN_OUT_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["SIGN_OUT_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInStart", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signInStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signInSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signInFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUpStart", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signUpStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUpSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signUpSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithTokenStart", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signInWithTokenStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithTokenSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signInWithTokenSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signInWithTokenFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signInWithTokenFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signUpFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signUpFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signOutStart", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signOutStart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signOutSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signOutSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signOutFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["signOutFailure"]; });

// export * from './reducers'



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() | search-search-module */ "search-search-module").then(__webpack_require__.bind(null, /*! ./search/search.module */ "RmqX")).then(m => m.SearchModule)
    },
    {
        path: 'me',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then(m => m.UserModule)
    },
    {
        path: 'podcast/:slug',
        loadChildren: () => Promise.all(/*! import() | podcast-podcast-module */[__webpack_require__.e("common"), __webpack_require__.e("podcast-podcast-module")]).then(__webpack_require__.bind(null, /*! ./podcast/podcast.module */ "ZeBp")).then(m => m.PodcastModule)
    },
    {
        path: 'discover',
        loadChildren: () => Promise.all(/*! import() | discover-discover-module */[__webpack_require__.e("common"), __webpack_require__.e("discover-discover-module")]).then(__webpack_require__.bind(null, /*! ./discover/discover.module */ "y6lh")).then(m => m.DiscoverModule)
    },
    {
        path: 'library',
        loadChildren: () => __webpack_require__.e(/*! import() | your-library-your-library-module */ "your-library-your-library-module").then(__webpack_require__.bind(null, /*! ./your-library/your-library.module */ "6GIs")).then(m => m.YourLibraryModule)
    }
    // {
    //   path: 'signin',
    //   component: SignInComponent
    // },
    // {
    //   path: 'signup',
    //   component: SignUpComponent
    // }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map