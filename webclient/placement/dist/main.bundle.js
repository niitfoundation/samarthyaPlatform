webpackJsonp([1,4],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UiDetails = (function () {
    function UiDetails(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.url = '/api/layout/navigationlinks';
    }
    ;
    UiDetails.prototype.getMenuDetails = function (token) {
        return this.http.get(this.url, this.authoriZation(token))
            .map(function (response) {
            var body = response.json();
            return body;
        });
    };
    UiDetails.prototype.authoriZation = function (userToken) {
        if (userToken) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': userToken });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UiDetails = __decorate([
        // map operatror for observable
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], UiDetails);
    return UiDetails;
    var _a, _b;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/uidetails.service.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// auhentication gaurd if without login user will try to access differnt menu links navigate it to login page
var AuthGuard = (function () {
    function AuthGuard(router, data) {
        this.router = router;
        this.data = data;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            //logged in user return true
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            //this.data.openSnackBar('Please Login!!',"OK");
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* Data */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/auth.guard.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementRegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {CandidateRegister} from '../modal/candidate-register.modal';
var PlacementRegisterService = (function () {
    function PlacementRegisterService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.url = '';
    }
    PlacementRegisterService.prototype.add = function (userdata) {
        this.url = '/coordinates';
        return this.http.post(this.url, userdata).map(function (response) { return response.json(); });
    };
    PlacementRegisterService.prototype.verifyToken = function (token) {
        this.url = "/auth/verify-email";
        return this.http.post(this.url, { token: token }).map(function (response) { return response.json(); });
    };
    PlacementRegisterService.prototype.handleError = function (error) {
        return false;
    };
    PlacementRegisterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PlacementRegisterService);
    return PlacementRegisterService;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/placement-register.service.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//  this service is used to pass the data between components
var Data = (function () {
    function Data(snackBar) {
        this.snackBar = snackBar;
    }
    Data.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    Data = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === 'function' && _a) || Object])
    ], Data);
    return Data;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/data.service.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__(814),
            styles: [__webpack_require__(833)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/about-us.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_data_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_json_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_email_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_placement_register_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var AdminRegistrationComponent = (function () {
    function AdminRegistrationComponent(fb, authenticationService, data, JsonDataService, emailService, PlacementRegisterService, route, router) {
        this.authenticationService = authenticationService;
        this.data = data;
        this.JsonDataService = JsonDataService;
        this.emailService = emailService;
        this.PlacementRegisterService = PlacementRegisterService;
        this.route = route;
        this.router = router;
        this.disabled = "false";
        this.areaList = [];
        this.emailDisable = false;
        //building the form using FormBuilder and FormGroup
        this.userForm = fb.group({
            firstNameControl: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].pattern('[A-Za-z]{2,}')]],
            lastNameControl: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].pattern('[A-Za-z ]{1,}')]],
            genderControl: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            registrationControl: [''],
            emailControl: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            aadharControl: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].pattern(/^\d{12}$/)]],
            passwordControl: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required]],
            confirmPasswordControl: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, this.matchPassword()]],
            mobileControl: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].pattern('[0-9]{10}')]],
            roleControl: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            professionControl: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            pincodeControl: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].pattern('[0-9]{6}')]],
            locationControl: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            placementControl: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
            languageControl: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required],
        });
    }
    AdminRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.JsonDataService.getPlacementCenter().subscribe(function (resJsonData) { return _this.placementCenters = resJsonData; });
        this.JsonDataService.getRoles().subscribe(function (resJsonData) { return _this.roles = resJsonData; });
        this.JsonDataService.getJsonData().subscribe(function (resJsonData) { return _this.languages = resJsonData; });
        this.JsonDataService.getProfession().subscribe(function (resJsonData) { return _this.professions = resJsonData; });
        this.createdUser = this.authenticationService.getCreatedBy();
        if (this.createdUser) {
            this.title = "Admin";
            this.disabled = "false";
            this.hiddenRole = false;
            this.hiddenParticularRole = true;
        }
        else {
            this.PlacementRegisterService.verifyToken(this.route.snapshot.queryParams['confirm']).subscribe(function (res) {
                if (res.msg != 'Session Expired') {
                    if (res.data.username) {
                        _this.userForm.patchValue({
                            'emailControl': res.data.username
                        });
                        _this.emailDisable = true;
                        _this.title = res.data.title;
                        if (_this.title.toLowerCase() == 'coordinator') {
                            _this.userForm.patchValue({
                                roleControl: "Coordinator"
                            });
                            _this.hiddenRole = true;
                            _this.hiddenParticularRole = false;
                            _this.disabled = "true";
                        }
                        else if (_this.title.toLowerCase() == 'supervisor') {
                            _this.userForm.patchValue({
                                roleControl: "Supervisor"
                            });
                            _this.hiddenRole = true;
                            _this.hiddenParticularRole = false;
                            _this.disabled = "true";
                        }
                        else if (_this.title.toLowerCase() == 'admin') {
                            _this.title = "Admin";
                            _this.disabled = "false";
                            _this.hiddenRole = false;
                            _this.hiddenParticularRole = true;
                        }
                        _this.emailService.sendEmail({ username: _this.userForm.get('emailControl').value }).subscribe(function (resJsonData) {
                        }, function (error) {
                            _this.data.openSnackBar('Already Registered', 'Please Login');
                            _this.router.navigate(['/login']);
                        });
                    }
                }
                else {
                    _this.router.navigate(['/login']);
                    _this.data.openSnackBar(res.msg['msg'], "OK");
                }
            }, function (err) {
                _this.router.navigate(['/login']);
                _this.data.openSnackBar("Session Expired", "OK");
            });
        }
    };
    //password validation which is calling from form building of passwordControl
    AdminRegistrationComponent.prototype.passwordValidator = function () {
        var _this = this;
        return function (c) {
            if (_this.userForm && _this.userForm.get('confirmPasswordControl').value) {
                if (_this.userForm.get('passwordControl').value == _this.userForm.get('confirmPasswordControl').value) {
                    return null;
                }
                else {
                    return { valid: false };
                }
            }
        };
    };
    //password validation which is calling from form building of confirmPasswordControl
    AdminRegistrationComponent.prototype.matchPassword = function () {
        var _this = this;
        return function (c) {
            if (_this.userForm && _this.userForm.get('passwordControl').value) {
                if (_this.userForm.get('passwordControl').value == _this.userForm.get('confirmPasswordControl').value) {
                    return null;
                }
                else {
                    return { valid: false };
                }
            }
        };
    };
    //user choose the location by pincode which is calling from close dialog and it should set location to the entered pincode
    AdminRegistrationComponent.prototype.getPincode = function () {
        var _this = this;
        if (this.userForm.get('pincodeControl').value.length == 6 && this.userForm.get('pincodeControl').valid) {
            this.JsonDataService.getPincode(this.userForm.get('pincodeControl').value).subscribe(function (resPincodeData) { return [_this.pincodeLocation = resPincodeData.records, _this.getPincodeLocation()]; });
        }
        else {
            this.areaList = [];
            this.userForm.patchValue({
                'locationControl': ''
            });
        }
    };
    // get pincode locations after checking pincode
    AdminRegistrationComponent.prototype.getPincodeLocation = function () {
        var _this = this;
        this.userForm.value.locationControl = '';
        this.areaList = [];
        this.pincodeLocation.forEach(function (element) {
            _this.areaList.push(element['officename'] + ', ' + element['Districtname'] + ', ' + element['statename']);
        });
        if (this.areaList.length === 0) {
            this.data.openSnackBar('No Location Found', 'Please Try again');
        }
        else {
            this.data.openSnackBar(this.areaList.length + ' Locations Found', 'Please Select');
        }
    };
    AdminRegistrationComponent.prototype.save = function (userdata) {
        var _this = this;
        if (this.createdUser) {
            this.createdBy = this.createdUser;
        }
        else {
            this.createdBy = userdata.get('emailControl').value;
        }
        this.landmark = userdata.get('locationControl').value.split(',')[0];
        this.district = userdata.get('locationControl').value.split(',')[1];
        this.state = userdata.get('locationControl').value.split(',')[2];
        var userData = {
            profileData: { fname: userdata.get('firstNameControl').value, lname: userdata.get('lastNameControl').value,
                gender: userdata.get('genderControl').value, email: userdata.get('emailControl').value,
                mobileNumber: userdata.get('mobileControl').value, role: userdata.get('roleControl').value,
                profession: userdata.get('professionControl').value,
                pincode: userdata.get('pincodeControl').value,
                district: this.district,
                landmark: this.landmark,
                state: this.state,
                identity: [{ type: "Aadhar", value: userdata.get('aadharControl').value },
                    { type: "RegNum", value: userdata.get('registrationControl').value }],
                location: userdata.get('locationControl').value,
                placementCenter: userdata.get('placementControl').value,
                language: userdata.get('languageControl').value,
                createdBy: this.createdBy
            },
            userCredentialsData: {
                username: userdata.get('emailControl').value, password: userdata.get('passwordControl').value,
                role: userdata.get('roleControl').value,
            }
        };
        this.PlacementRegisterService.add(userData).subscribe(function (resJsonData) {
            if (resJsonData['success'] == true) {
                _this.userForm.reset();
                _this.router.navigate(['/login']);
                _this.data.openSnackBar(resJsonData['msg'], "OK");
                return true;
            }
            else {
                _this.data.openSnackBar(resJsonData['msg'], "OK");
            }
        }, function (error) {
            _this.data.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
        });
        return true;
    };
    AdminRegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["c" /* Component */])({
            selector: 'app-admin-registration',
            template: __webpack_require__(815),
            styles: [__webpack_require__(834)],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_placement_register_service__["a" /* PlacementRegisterService */]]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["w" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* Data */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_json_data_service__["a" /* JsonDataService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_email_service__["a" /* EmailService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_placement_register_service__["a" /* PlacementRegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_placement_register_service__["a" /* PlacementRegisterService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === 'function' && _h) || Object])
    ], AdminRegistrationComponent);
    return AdminRegistrationComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/admin-registration.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CandidateRegisterComponent = (function () {
    function CandidateRegisterComponent() {
    }
    CandidateRegisterComponent.prototype.ngOnInit = function () {
    };
    CandidateRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-candidate-register',
            template: __webpack_require__(816),
            styles: [__webpack_require__(835)]
        }), 
        __metadata('design:paramtypes', [])
    ], CandidateRegisterComponent);
    return CandidateRegisterComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/candidate-register.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandidateSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CandidateSearchComponent = (function () {
    function CandidateSearchComponent(fb) {
        this.cls = 'search-box big-res';
        this.lengthOfProfile = 10;
        this.loopingCount = Math.ceil(10 / 3);
        this.resultProfile = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.arr = new Array(this.loopingCount);
        this.count = 0;
        this.loops = -1;
        this.message = "";
        this.searchForm = fb.group({
            searchControl: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
        });
    }
    CandidateSearchComponent.prototype.getArray = function () {
        for (var obj in this.resultProfile) {
            if (this.count % 3 == 0) {
                this.arr[++this.loops] = new Array(3);
            }
            this.arr[this.loops][this.count] = obj;
            this.count++;
        }
        console.log(this.arr);
    };
    CandidateSearchComponent.prototype.ngOnInit = function () {
        this.getArray();
    };
    CandidateSearchComponent.prototype.getSearch = function () {
        console.log(this.searchForm.value.searchControl);
    };
    CandidateSearchComponent.prototype.change = function () {
        this.cls = 'expand-out search-box big-res';
    };
    CandidateSearchComponent.prototype.fullView = function () {
        this.cls = 'expand search-box big-res';
    };
    CandidateSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-candidate-search',
            template: __webpack_require__(817),
            styles: [__webpack_require__(836)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object])
    ], CandidateSearchComponent);
    return CandidateSearchComponent;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/candidate-search.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uidetails_service__ = __webpack_require__(174);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(route, data, uiDetails, router) {
        this.route = route;
        this.data = data;
        this.uiDetails = uiDetails;
        this.router = router;
        // this.dataByRole=JSON.stringify(this.data.storage);
        //  this.title=this.dataByRole;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // let tokenVerification=JSON.parse(localStorage.getItem('currentUser'))["token"];
        //  this.uiDetails.getMenuDetails(tokenVerification)
        //     .subscribe(
        //     role => {
        //       if (role["success"]) {
        //         this.title = role["object"].Role;
        //       }
        //       else {
        //         tokenVerification=null;
        //          localStorage.removeItem('currentUser');
        //           this.router.navigate(['/login']);
        //        this.data.openSnackBar(role["message"], 'Ok');
        //       }
        //     }, error => {
        //       console.log(error);
        //     }
        //     )
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(818),
            styles: [__webpack_require__(837)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* Data */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_uidetails_service__["a" /* UiDetails */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_uidetails_service__["a" /* UiDetails */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/dashboard.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventPostComponent = (function () {
    function EventPostComponent() {
    }
    EventPostComponent.prototype.ngOnInit = function () {
    };
    EventPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-event-post',
            template: __webpack_require__(820),
            styles: [__webpack_require__(839)]
        }), 
        __metadata('design:paramtypes', [])
    ], EventPostComponent);
    return EventPostComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/event-post.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_email_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(fb, emailservice, snackBar, viewContainerRef, router, emailService) {
        this.emailservice = emailservice;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.emailService = emailService;
        this.emailId = '';
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        // this.emailService.getRegister()
        //   .subscribe(resEmployeeData => {
        //     this.emailId = resEmployeeData.usermail2;
        //     console.log(this.emailId);
        //   });
    };
    // snackBar for notification
    ForgotPasswordComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    // verify user if already exist or not for password Reset
    // verifyUserReset() {
    //   if (this.candidates.length!=0) {
    //     let link="";
    //     this.emailservice.postdata(this.infoobj).subscribe(data => this.postobject = data,
    //       error => [this.openSnackBar('PASSWORD RESET LINK SENT', 'Please Check your mail'),
    //       this.timer = setTimeout(() => this.router.navigate(['/login']), 500)
    //       ], () => console.log('finished'));
    //   } else {
    //     this.openSnackBar('User not Registered', 'Please Register');
    //   }
    // }
    // on password reset submit
    ForgotPasswordComponent.prototype.onResetLink = function () {
        var _this = this;
        this.infoobj = {
            'title': '',
            'username': this.userForm.value.email,
            'subject': 'Password Reset',
        };
        this.emailService.sendResetPasswordEmail(this.infoobj).subscribe(function (resEmailData) {
            _this.openSnackBar(resEmailData.msg, 'ok'),
                _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500);
        }, function (error) {
            console.log(error);
            _this.openSnackBar("User Doesn't exist", 'ok');
        });
    };
    ForgotPasswordComponent.prototype.onBack = function () {
        this.router.navigate(['/login']);
    };
    ForgotPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__(821),
            styles: [__webpack_require__(840)],
            providers: []
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_email_service__["a" /* EmailService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* ViewContainerRef */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_email_service__["a" /* EmailService */]) === 'function' && _f) || Object])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/forgetPassword.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImportComponent = (function () {
    function ImportComponent(http) {
        this.http = http;
        this.importButton = true;
        this.filesToUpload = [];
    }
    ImportComponent.prototype.ngOnInit = function () {
    };
    ImportComponent.prototype.upload = function () {
        console.log(this.formFileData);
        this.http.post('/coordinates/upload', this.formFileData)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) { return console.log('response', data); });
    };
    //  return this.http.post('/coordinates/upload',this.filesToUpload)
    //          .subscribe((response) => {
    //         // login successful if there's a jwt token in the response
    //       console.log(response.json());
    //     });
    //  this.makeFileRequest("/coordinates/upload", [], this.filesToUpload).then((result) => {
    //         console.log(result);
    //     }, (error) => {
    //         console.error(error);
    //     });
    ImportComponent.prototype.openFile = function (event) {
        var _this = this;
        console.log("ggg" + event.target.files + "ss");
        var files = event.target.files;
        if (files.length > 0) {
            var file = void 0;
            var formData = new FormData();
            for (var i = 0; i < files.length; i++) {
                file = files[i];
                formData.append('userfile', file, file.name);
            }
            this.formFileData = formData;
            var input = event.target;
            var text = "";
            var _loop_1 = function() {
                var reader = new FileReader();
                reader.onload = function () {
                    // this 'text' is the content of the file
                    text = reader.result;
                    console.log(typeof text);
                    try {
                        var res = JSON.parse(text);
                        _this.importButton = false;
                        _this.error = "";
                    }
                    catch (e) {
                        _this.error += e;
                        _this.importButton = true;
                    }
                };
                reader.readAsText(input.files[index]);
            };
            for (var index = 0; index < input.files.length; index++) {
                _loop_1();
            }
        }
    };
    ImportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-job-post',
            template: __webpack_require__(822),
            styles: [__webpack_require__(841)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ImportComponent);
    return ImportComponent;
    var _a;
}());
//  fileChangeEvent(fileInput: any){
//         this.filesToUpload = <Array<File>> fileInput.target.files;
//     }
//      makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
//         return new Promise((resolve, reject) => {
//             var formData: any = new FormData();
//             var xhr = new XMLHttpRequest();
//             for(var i = 0; i < files.length; i++) {
//                 formData.append("uploads[]", files[i], files[i].name);
//             }
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState == 4) {
//                     if (xhr.status == 200) {
//                         resolve(JSON.parse(xhr.response));
//                     } else {
//                         reject(xhr.response);
//                     }
//                 }
//             }
//             console.log(formData+"sendddd");
//             xhr.open("POST", url, true);
//             xhr.send(formData);
//         });
//     }
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/importCandidates.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobPostComponent = (function () {
    function JobPostComponent() {
    }
    JobPostComponent.prototype.ngOnInit = function () {
    };
    JobPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-job-post',
            template: __webpack_require__(823),
            styles: [__webpack_require__(842)]
        }), 
        __metadata('design:paramtypes', [])
    ], JobPostComponent);
    return JobPostComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/job-post.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = (function () {
    function LandingPageComponent() {
        this.headingTitle = "Samarthya";
        this.subtitleDetails = "Reach out directly to most relevant job consultants and recruiters across India.";
        this.aboutus = ["Sam", "John", "Karol"];
    }
    LandingPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'landing-page',
            template: __webpack_require__(824),
            styles: [__webpack_require__(843)],
        }), 
        __metadata('design:paramtypes', [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/landing-page.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_json_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_email_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_uidetails_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var LoginComponent = (function () {
    function LoginComponent(fb, emailservice, JsonDataService, snackBar, viewContainerRef, router, route, authenticationService, uiDetails, data) {
        this.emailservice = emailservice;
        this.JsonDataService = JsonDataService;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.uiDetails = uiDetails;
        this.data = data;
        this.candidates = [];
        this.user = {};
        this.menuLinks = [];
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].pattern("[A-Za-z0-9.@!$*&]{6,}")]]
        });
    }
    // on login submit
    LoginComponent.prototype.onSubmit = function () {
    };
    LoginComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.queryParams['message'])
            this.data.openSnackBar(this.route.snapshot.queryParams['message'], 'ok');
    };
    LoginComponent.prototype.forgotPassword = function () {
        this.router.navigate(['/forgotPassword']);
    };
    LoginComponent.prototype.verifyEmail = function () {
        this.router.navigate(['/verifyEmail']);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var value = this.userForm.value;
        this.authenticationService.login(value["email"], value["password"])
            .subscribe(function (res) {
            _this.data.openSnackBar("Welcome back", 'Ok');
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.data.openSnackBar("Invalid username or password", 'Try again');
            _this.router.navigate(['/login']);
        });
    };
    LoginComponent.prototype.socialAuthentication = function (socialSite) {
        var _this = this;
        this.authenticationService.socialAuthentication(socialSite).subscribe(function (data) {
            _this.data.openSnackBar(data["message"], 'Ok');
            _this.router.navigate(['/home']);
        }, function (error) {
            console.log(error);
        });
    };
    LoginComponent.prototype.redirect = function () {
        this.router.navigate(['/home']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(825),
            styles: [__webpack_require__(844)],
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_email_service__["a" /* EmailService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_json_data_service__["a" /* JsonDataService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["i" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_core__["i" /* ViewContainerRef */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__services_uidetails_service__["a" /* UiDetails */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__services_uidetails_service__["a" /* UiDetails */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* Data */]) === 'function' && _k) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/login.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_email_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_json_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








// declare var $: any;
var PasswordResetComponent = (function () {
    function PasswordResetComponent(fb, backLocation, Data, AuthenticationService, JsonDataService, route, router, emailService) {
        this.backLocation = backLocation;
        this.Data = Data;
        this.AuthenticationService = AuthenticationService;
        this.JsonDataService = JsonDataService;
        this.route = route;
        this.router = router;
        this.emailService = emailService;
        this.jsonObj = {};
        this.languages = [];
        this.emailId = '';
        this.password = '';
        this.passwordMatchWarning = '';
        // register candidate form
        this.userForm = fb.group({
            email: [{ value: '', disabled: true }],
            password: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].pattern('[A-Za-z0-9.@!$*&]{6,24}')]],
            conPassword: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* Validators */].pattern('[A-Za-z0-9.@!$*&]{6,24}')]],
        });
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.reset = params['reset']; });
        if (this.reset == 'reset') {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.userForm.patchValue({
                'email': currentUser.username
            });
        }
        else {
            this.token = this.route.snapshot.queryParams['confirm'];
            // this.route.params.subscribe(params => this.token = params['confirm']);
            var email_1;
            this.AuthenticationService.getEmail(this.token).subscribe(function (res) {
                email_1 = res.data['username'];
                _this.userForm.patchValue({
                    'email': email_1
                });
            });
        }
    };
    PasswordResetComponent.prototype.getdata = function (jsonData) {
        this.jsonObj = jsonData;
        this.languages = this.jsonObj['languages'];
    };
    // password confirm Validators
    PasswordResetComponent.prototype.passwordValue = function (pass) {
        this.password = pass;
    };
    PasswordResetComponent.prototype.conPasswordValue = function (conPass, pass) {
        if (pass !== conPass) {
            this.passwordMatchWarning = 'Password Not Match';
            document.getElementById('resetBtn').disabled = true;
        }
        else {
            this.passwordMatchWarning = '';
            document.getElementById('resetBtn').disabled = false;
        }
    };
    // on form submit
    PasswordResetComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.reset == 'reset') {
            this.AuthenticationService.passwordChange(this.userForm.get('email').value, this.userForm.get('password').value).subscribe(function (res) {
                if (res.success == true) {
                    _this.router.navigate(['/home']);
                    _this.Data.openSnackBar(res.msg, 'OK');
                }
                else {
                    _this.Data.openSnackBar(res.msg, 'OK');
                    _this.router.navigate(['/home']);
                }
            });
        }
        else {
            this.AuthenticationService.passwordChange(this.userForm.get('email').value, this.userForm.get('password').value).subscribe(function (res) {
                if (res.success == true) {
                    _this.router.navigate(['/login']);
                    _this.Data.openSnackBar(res.msg, 'OK');
                }
                else {
                    _this.Data.openSnackBar(res.msg, 'OK');
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    // on back button
    PasswordResetComponent.prototype.onBack = function () {
        this.backLocation.back();
    };
    PasswordResetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["c" /* Component */])({
            selector: 'app-password-reset',
            template: __webpack_require__(826),
            styles: [__webpack_require__(845)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["w" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_common__["c" /* Location */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* Data */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_json_data_service__["a" /* JsonDataService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_email_service__["a" /* EmailService */]) === 'function' && _h) || Object])
    ], PasswordResetComponent);
    return PasswordResetComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/passwordReset.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_data_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_json_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterLoginHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AfterLoginHeaderComponent = (function () {
    function AfterLoginHeaderComponent(JsonDataService, AuthenticationService, data, router) {
        this.JsonDataService = JsonDataService;
        this.AuthenticationService = AuthenticationService;
        this.data = data;
        this.router = router;
        this.languages = [];
        this.navList = [];
        this.isDarkTheme = false;
    }
    AfterLoginHeaderComponent.prototype.ngOnInit = function () {
        // getting languages form json file
        var _this = this;
        this.JsonDataService.getJsonData().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
        var tokenVerification = JSON.parse(localStorage.getItem('currentUser'))["token"];
        this.JsonDataService.getJsonNavList(tokenVerification)
            .subscribe(function (role) {
            if (role.success) {
                _this.getNavList(role.data);
            }
            else {
                tokenVerification = null;
                localStorage.removeItem('currentUser');
                _this.router.navigate(['/login']);
                _this.data.openSnackBar(role["message"], 'Ok');
            }
        }, function (error) {
            console.log(error);
        });
    };
    AfterLoginHeaderComponent.prototype.toggleTheme = function () {
        if (this.isDarkTheme === true) {
            this.isDarkTheme = false;
        }
        else {
            this.isDarkTheme = true;
        }
    };
    AfterLoginHeaderComponent.prototype.getdata = function (jsonData) {
        this.languages = jsonData;
    };
    AfterLoginHeaderComponent.prototype.getNavList = function (navListItem) {
        this.navList = navListItem;
    };
    AfterLoginHeaderComponent.prototype.logoutUser = function () {
        this.AuthenticationService.logout();
        this.data.openSnackBar("logged out successfully", "OK");
    };
    AfterLoginHeaderComponent.prototype.changePassword = function () {
        this.router.navigate(['/home/passwordReset/reset']);
    };
    AfterLoginHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["c" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(828),
            styles: [__webpack_require__(847)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_json_data_service__["a" /* JsonDataService */], __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* Data */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], AfterLoginHeaderComponent);
    return AfterLoginHeaderComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/headerLayout.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_data_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_email_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var VerifyEmailComponent = (function () {
    function VerifyEmailComponent(fb, data, emailservice, snackBar, viewContainerRef, router) {
        this.data = data;
        this.emailservice = emailservice;
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        // getting login form data
        this.userForm = fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
            role: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]]
        });
    }
    VerifyEmailComponent.prototype.ngOnInit = function () { };
    // on create account submit
    VerifyEmailComponent.prototype.onVerifyLink = function () {
        var _this = this;
        this.infoobj = {
            'title': this.userForm.value.role,
            'username': this.userForm.value.email,
            'subject': 'Email verification'
        };
        this.emailservice.sendEmail(this.infoobj).subscribe(function (resJsonData) {
            _this.data.openSnackBar('mail sent succefully', 'Please Check your MAIL');
            _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500);
        }, function (error) {
            _this.data.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time');
            _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 500);
        });
    };
    // go back to login
    VerifyEmailComponent.prototype.onBack = function () {
        this.router.navigate(['/login']);
    };
    VerifyEmailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Component */])({
            selector: 'app-verify-email',
            template: __webpack_require__(832),
            styles: [__webpack_require__(851)],
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["w" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* Data */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_data_service__["a" /* Data */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_email_service__["a" /* EmailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_email_service__["a" /* EmailService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSnackBar */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["i" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_core__["i" /* ViewContainerRef */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]) === 'function' && _f) || Object])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/verifyEmail.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// this service is used to authenticate the current user is logged in or not
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('/auth', { username: username, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json().authToken;
            if (token) {
                console.log(token);
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token, role: response.json().role }));
                // return true to indicate successful login
                return response.json();
            }
            else {
                // return false to indicate failed login
                return response.json();
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    };
    AuthenticationService.prototype.getPasswordResetToken = function (token, username) {
        var _this = this;
        return this.http.post('/emailverify/passwordResetToken', { username: username, token: token })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json().authToken;
            if (token) {
                // set token property
                _this.token = token;
                // return true to indicate successful login
                return response.json();
            }
            else {
                // return false to indicate failed login
                return response.json();
            }
        });
    };
    //change password for existing placement role user
    AuthenticationService.prototype.passwordChange = function (email, password) {
        return this.http.post('/auth/reset-password', { username: email, password: password })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    AuthenticationService.prototype.socialAuthentication = function (socialSite) {
        return this.http.get('/auth/facebook', this.authoriZation())
            .map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    AuthenticationService.prototype.getEmail = function (token) {
        return this.http.post('/auth/verify-email', { token: token })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    AuthenticationService.prototype.getCreatedBy = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            return currentUser.username;
        }
        else {
            return currentUser;
        }
    };
    AuthenticationService.prototype.authoriZation = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Access-Control-Allow-Origin': "*", "Access-Control-Allow-Headers": "X-Requested-With" });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    AuthenticationService = __decorate([
        // map operatror for observable
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/authentication.service.js.map

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 540;


/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(721);




if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/main.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JsonDataService = (function () {
    function JsonDataService(http, snackBar, router) {
        this.http = http;
        this.snackBar = snackBar;
        this.router = router;
        // url to store data from json file for Registration details
        this.urlRegister = '';
        // url to retrive data from json file for languages
        this.url = "";
        this.mygovKey = 'bb69790db92cb17b4b5c8b3bf4f9fc02';
        this.urlPincode = 'https://data.gov.in/api/datastore/resource.json?resource_id=6176ee09-3d56-4a3b-8115-21841576b2f6&api-key='
            + this.mygovKey + '&filters[pincode]=';
        // url to get profession
        this.urlProfession = 'resources/profession';
        // url to get locations
        this.urlLocations = 'resources/locations';
        this.urlRole = 'resources/roles';
        // url to get placementCenter
        this.urlPlacementCenter = 'resources/placementCenter';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    //snackBar for notification
    JsonDataService.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 5000,
        });
    };
    // Store Registration details in json file
    JsonDataService.prototype.create = function (formData) {
        var _this = this;
        this.http.post(this.urlRegister, formData).subscribe(function (data) {
            _this.openSnackBar(formData.email, 'Register Successfully');
            _this.timer = setTimeout(function () { return _this.router.navigate(['/login']); }, 4000);
        }, function (error) {
            console.log(error.json());
        });
    };
    // get json data for langauges and dropdown
    JsonDataService.prototype.getJsonData = function () {
        this.url = "resources/languages";
        return this.http.get(this.url).map(function (response) { return response.json(); });
    };
    ;
    JsonDataService.prototype.getJsonNavList = function (tokenVerification) {
        console.log(tokenVerification);
        this.url = '/auth/nav-menus';
        return this.http.get(this.url, this.authoriZation(tokenVerification))
            .map(function (response) {
            return response.json();
        });
    };
    JsonDataService.prototype.authoriZation = function (userToken) {
        if (userToken) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': userToken });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    JsonDataService.prototype.getPincode = function (pincode) {
        return this.http.get(this.urlPincode + pincode)
            .map(function (response) { return response.json(); });
    };
    ;
    JsonDataService.prototype.getRoles = function () {
        return this.http.get(this.urlRole).map(function (response) { return response.json(); });
    };
    JsonDataService.prototype.getProfession = function () {
        return this.http.get(this.urlProfession).map(function (response) { return response.json(); });
    };
    ;
    // get json data for placementCenter
    JsonDataService.prototype.getPlacementCenter = function () {
        return this.http.get(this.urlPlacementCenter).map(function (response) { return response.json(); });
    };
    ;
    JsonDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdSnackBar */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], JsonDataService);
    return JsonDataService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/json-data.service.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_us_about_us_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_candidate_search_candidate_search_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_candidate_register_candidate_register_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_event_post_event_post_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_job_post_job_post_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_registration_admin_registration_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_postlogin_registration_layout_header_layout_headerLayout_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_verify_email_verifyEmail_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_forget_password_forgetPassword_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_password_reset_passwordReset_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_landing_page_landing_page_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_import_candidates_importCandidates_component__ = __webpack_require__(468);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















// routes
var routes = [
    { path: '', redirectTo: '/samarthya', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'samarthya', component: __WEBPACK_IMPORTED_MODULE_15__components_landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'verifyEmail', component: __WEBPACK_IMPORTED_MODULE_12__components_verify_email_verifyEmail_component__["a" /* VerifyEmailComponent */] },
    { path: 'forgotPassword', component: __WEBPACK_IMPORTED_MODULE_13__components_forget_password_forgetPassword_component__["a" /* ForgotPasswordComponent */] },
    { path: 'passwordReset', component: __WEBPACK_IMPORTED_MODULE_14__components_password_reset_passwordReset_component__["a" /* PasswordResetComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */] },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__components_postlogin_registration_layout_header_layout_headerLayout_component__["a" /* AfterLoginHeaderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'import', component: __WEBPACK_IMPORTED_MODULE_16__components_import_candidates_importCandidates_component__["a" /* ImportComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'aboutUs', component: __WEBPACK_IMPORTED_MODULE_3__components_about_us_about_us_component__["a" /* AboutUsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'candidateRegister/:location', component: __WEBPACK_IMPORTED_MODULE_6__components_candidate_register_candidate_register_component__["a" /* CandidateRegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'candidateSearch', component: __WEBPACK_IMPORTED_MODULE_5__components_candidate_search_candidate_search_component__["a" /* CandidateSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'eventPost', component: __WEBPACK_IMPORTED_MODULE_7__components_event_post_event_post_component__["a" /* EventPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'jobPost', component: __WEBPACK_IMPORTED_MODULE_8__components_job_post_job_post_component__["a" /* JobPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'passwordReset/:reset', component: __WEBPACK_IMPORTED_MODULE_14__components_password_reset_passwordReset_component__["a" /* PasswordResetComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: 'register/:title', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_auth_guard__["a" /* AuthGuard */]] },
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true }),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
;
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/app-routing.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployersComponent = (function () {
    function EmployersComponent() {
    }
    EmployersComponent.prototype.ngOnInit = function () {
    };
    EmployersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-employers',
            template: __webpack_require__(819),
            styles: [__webpack_require__(838)]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployersComponent);
    return EmployersComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/employers.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(827),
            styles: [__webpack_require__(846)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/footer.component.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_json_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFooterComponent = (function () {
    function LoginFooterComponent(JsonDataService) {
        this.JsonDataService = JsonDataService;
        this.languages = [];
    }
    LoginFooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.JsonDataService.getJsonData().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
    };
    LoginFooterComponent.prototype.getdata = function (jsonData) {
        this.languages = jsonData;
    };
    LoginFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
            selector: 'app-login-footer',
            template: __webpack_require__(829),
            styles: [__webpack_require__(848)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object])
    ], LoginFooterComponent);
    return LoginFooterComponent;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/login-footer.component.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_json_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginHeaderComponent = (function () {
    function LoginHeaderComponent(JsonDataService, router) {
        this.JsonDataService = JsonDataService;
        this.router = router;
        this.languages = [];
    }
    LoginHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting languages form json file
        this.JsonDataService.getJsonData().subscribe(function (resJsonData) { return _this.getdata(resJsonData); });
    };
    LoginHeaderComponent.prototype.getdata = function (jsonData) {
        this.languages = jsonData;
    };
    LoginHeaderComponent.prototype.login = function () {
        this.router.navigate(['/login']);
    };
    LoginHeaderComponent.prototype.verifyEmail = function () {
        this.router.navigate(['/verifyEmail']);
    };
    LoginHeaderComponent.prototype.samarthya = function () {
        this.router.navigate(['/samarthya']);
    };
    LoginHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
            selector: 'app-login-header',
            template: __webpack_require__(830),
            styles: [__webpack_require__(849)],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_json_data_service__["a" /* JsonDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_json_data_service__["a" /* JsonDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_json_data_service__["a" /* JsonDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LoginHeaderComponent);
    return LoginHeaderComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/login-header.component.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileCardComponent = (function () {
    function ProfileCardComponent() {
        this.flip1 = "unflip";
        this.age = 22;
        this.email = "gowthamjeeva55@gmail.com";
        this.mobileNumber = "8220002829";
        this.experience = "5";
        this.skills = ['Java', 'JavaScript'];
        this.qualifications = ['Electronics', 'Master in Electronics'];
        this.location = "Bangalore";
        this.communications = ['English', 'Tamil', 'Hindi'];
    }
    ProfileCardComponent.prototype.changeCard = function () {
        if (this.flip1 == 'unflip')
            this.flip1 = "flip";
        else {
            this.flip1 = 'unflip';
        }
    };
    ProfileCardComponent.prototype.ngOnInit = function () {
    };
    ProfileCardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'profile-card',
            template: __webpack_require__(831),
            styles: [__webpack_require__(850)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileCardComponent);
    return ProfileCardComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/profileCard.component.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return placementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var placementComponent = (function () {
    function placementComponent() {
        this.title = 'Samarthya Placement';
    }
    placementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'placement-component',
            template: '<router-outlet></router-outlet>',
        }), 
        __metadata('design:paramtypes', [])
    ], placementComponent);
    return placementComponent;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/placementComponent.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_uidetails_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_placement_register_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_json_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_email_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_md2__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_verify_email_verifyEmail_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_card_profileCard_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_prelogin_registration_layout_login_header_login_header_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_prelogin_registration_layout_login_footer_login_footer_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_postlogin_registration_layout_header_layout_headerLayout_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_postlogin_registration_layout_footer_layout_footer_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_password_reset_passwordReset_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_landing_page_landing_page_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_job_post_job_post_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_forget_password_forgetPassword_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_event_post_event_post_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_employers_employers_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__placementComponent__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_candidate_search_candidate_search_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_candidate_register_candidate_register_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_admin_registration_admin_registration_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_about_us_about_us_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_import_candidates_importCandidates_component__ = __webpack_require__(468);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return placementmodule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




































var placementmodule = (function () {
    function placementmodule() {
    }
    placementmodule.forRoot = function () {
        return {
            ngModule: placementmodule,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* Data */],
                __WEBPACK_IMPORTED_MODULE_3__services_email_service__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_2__services_json_data_service__["a" /* JsonDataService */],
                __WEBPACK_IMPORTED_MODULE_1__services_placement_register_service__["a" /* PlacementRegisterService */],
                __WEBPACK_IMPORTED_MODULE_0__services_uidetails_service__["a" /* UiDetails */]
            ]
        };
    };
    placementmodule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_md2__["a" /* Md2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__["FlexLayoutModule"],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_34__components_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_candidate_register_candidate_register_component__["a" /* CandidateRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_candidate_search_candidate_search_component__["a" /* CandidateSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_employers_employers_component__["a" /* EmployersComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_event_post_event_post_component__["a" /* EventPostComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_forget_password_forgetPassword_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_job_post_job_post_component__["a" /* JobPostComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_password_reset_passwordReset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_postlogin_registration_layout_footer_layout_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_postlogin_registration_layout_header_layout_headerLayout_component__["a" /* AfterLoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_prelogin_registration_layout_login_footer_login_footer_component__["a" /* LoginFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_prelogin_registration_layout_login_header_login_header_component__["a" /* LoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_profile_card_profileCard_component__["a" /* ProfileCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_verify_email_verifyEmail_component__["a" /* VerifyEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_30__placementComponent__["a" /* placementComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_import_candidates_importCandidates_component__["a" /* ImportComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_30__placementComponent__["a" /* placementComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_34__components_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_admin_registration_admin_registration_component__["a" /* AdminRegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_candidate_register_candidate_register_component__["a" /* CandidateRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_candidate_search_candidate_search_component__["a" /* CandidateSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_employers_employers_component__["a" /* EmployersComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_event_post_event_post_component__["a" /* EventPostComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_forget_password_forgetPassword_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_job_post_job_post_component__["a" /* JobPostComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_password_reset_passwordReset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_postlogin_registration_layout_footer_layout_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_postlogin_registration_layout_header_layout_headerLayout_component__["a" /* AfterLoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_prelogin_registration_layout_login_footer_login_footer_component__["a" /* LoginFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_prelogin_registration_layout_login_header_login_header_component__["a" /* LoginHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_profile_card_profileCard_component__["a" /* ProfileCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_verify_email_verifyEmail_component__["a" /* VerifyEmailComponent */],
                __WEBPACK_IMPORTED_MODULE_30__placementComponent__["a" /* placementComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_import_candidates_importCandidates_component__["a" /* ImportComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], placementmodule);
    return placementmodule;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/placementmodule.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_placementmodule_services_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.loading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.doLogOut = function () {
        this.authService.logout();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(853),
            styles: [__webpack_require__(852)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_placementmodule_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_placementmodule_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/app.component.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_placementmodule_services_data_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_placementmodule_services_uidetails_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_placementmodule_services_email_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_placementmodule_services_json_data_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_placementmodule_services_auth_guard__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_placementmodule_services_authentication_service__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_placementmodule_services_placement_register_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_placementmodule_placementmodule__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_md2__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_flex_layout__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(720);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_flex_layout__["FlexLayoutModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14_md2__["a" /* Md2Module */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_placementmodule_placementmodule__["a" /* placementmodule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6_placementmodule_services_placement_register_service__["a" /* PlacementRegisterService */], __WEBPACK_IMPORTED_MODULE_5_placementmodule_services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4_placementmodule_services_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_3_placementmodule_services_json_data_service__["a" /* JsonDataService */], __WEBPACK_IMPORTED_MODULE_2_placementmodule_services_email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_1_placementmodule_services_uidetails_service__["a" /* UiDetails */], __WEBPACK_IMPORTED_MODULE_0_placementmodule_services_data_service__["a" /* Data */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/app.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/environment.js.map

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<p>\n    About us\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<app-login-header *ngIf=\"title=='Coordinator' || title=='Supervisor'\">\n</app-login-header>\n<app-header *ngIf=\"title=='Admin'\"></app-header>\n\n<!--Register card-->\n<md-grid-list cols=\"1\" rowHeight=\"1750\">\n  <md-grid-tile>\n    <!--card Start-->\n    <md-card class=\"loginCard\">\n      <md-card-title>\n        <h2 class=\"text-center title\">{{title}} Registration</h2>\n      </md-card-title>\n      <md-card-content>\n        <form [formGroup]=\"userForm\">\n          <!--Credentials division-->\n          <div class=\"division\">\n            Credential Details\n          </div>\n          <!--Email-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">mail</i>\n            </div>\n\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n\n                <input formControlName=\"emailControl\" mdInput placeholder=\"Email\" [readonly]=\"emailDisable\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Email required validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('emailControl').hasError('required') && userForm.get('emailControl').touched\">\n                    Email is required\n                  </div>\n                  <!-- Email pattern validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('emailControl').hasError('pattern') && userForm.get('emailControl').touched\">\n                    Invalid email\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--passowrd-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">lock</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"passwordControl\" minlength=\"8\" type=\"password\" class=\"validate\" placeholder=\"Password\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Password required validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('passwordControl').hasError('required') && userForm.get('passwordControl').touched\">\n                    Password is required\n                  </div>\n                  <!--Password length validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('passwordControl').hasError('minlength') && userForm.get('passwordControl').touched\">\n                    Password should more than 7 character\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--confirm password-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">lock</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"confirmPasswordControl\" minlength=\"8\" type=\"password\" class=\"validate\" placeholder=\"Confirm Password\"\n                />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Confirm password required validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('confirmPasswordControl').hasError('required') && userForm.get('confirmPasswordControl').touched\">\n                    Confirm Password is required\n                  </div>\n                  <!--Confirm Password length validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('confirmPasswordControl').hasError('minlength') && userForm.get('confirmPasswordControl').touched\">\n                    Password should more than 7 character\n                  </div>\n                  <!-- Matching password  validation-->\n                  <div class=\"errorStyle\" *ngIf=\"(!userForm.get('confirmPasswordControl').valid) && !userForm.get('confirmPasswordControl').hasError('required') &&!userForm.get('passwordControl').hasError('required') && userForm.get('confirmPasswordControl').touched\">\n                    Mismatch Password\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n\n          <!--Personal info division-->\n          <div class=\"division\">\n            Personal Details\n          </div>\n\n          <!--First Name-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">perm_identity</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"firstNameControl\" id=\"fname\" type=\"text\" class=\"validate\" placeholder=\"First Name\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Name required validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('firstNameControl').hasError('required') && userForm.get('firstNameControl').touched\">\n                    Name is required\n                  </div>\n                  <!-- Name pattern validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('firstNameControl').hasError('pattern') && userForm.get('firstNameControl').touched\">\n                    Name should be more than 2 alphabets\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--Last Name-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">perm_identity</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"lastNameControl\" type=\"text\" class=\"validate\" placeholder=\"Last Name\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Name pattern validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('lastNameControl').hasError('pattern') && userForm.get('lastNameControl').touched\">\n                    Name should be more than 2 alphabets\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--Gender-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"gender\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons levelIcon\">wc</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\" class=\"full-width\">\n              <md-radio-group formControlName=\"genderControl\">\n                <md-radio-button value=\"male\">Male</md-radio-button>\n                <md-radio-button value=\"female\">Female</md-radio-button>\n              </md-radio-group><br>\n              <!-- Name required validation-->\n              <div class=\"errorStyle\" *ngIf=\"userForm.get('genderControl').hasError('required') && userForm.get('genderControl').touched\">\n                Gender is required\n              </div>\n            </div>\n          </div>\n\n          <!--Adhar-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">chrome_reader_mode</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"aadharControl\" type=\"text\" class=\"validate\" placeholder=\"Aadhar No. (Optional)\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!--<div *ngIf=\"userForm.get('aadharControl').hasError('pattern')\" class=\"errorStyle\">Invaild Aadhar</div>-->\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n\n\n          <!--Date of Birth-->\n          <!--<div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex>\n              <md2-datepicker formControlName=\"dob\" [(ngModel)]=\"date\" class=\"full-width\">date</md2-datepicker>\n            </div>\n          </div>-->\n\n          <!--Contact info division-->\n          <div class=\"division\">\n            Contact Details\n          </div>\n\n          <!--Mobile No-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">call</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"mobileControl\" type=\"text\" class=\"validate\" placeholder=\"Mobile No.\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <!-- Mobile number required validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('mobileControl').hasError('required') && userForm.get('mobileControl').touched\">\n                    Mobile Number is required\n                  </div>\n                  <!-- Mobile number pattern validation-->\n                  <div class=\"errorStyle\" *ngIf=\"userForm.get('mobileControl').hasError('pattern') && userForm.get('mobileControl').touched\">\n                    Mobile Number should be 10 digit\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--location Pincode-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">dialpad</i>\n            </div>\n            <div fxFlex>\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"pincodeControl\" type=\"text\" class=\"validate\" placeholder=\"Pincode\" (keyup)=\"getPincode()\"\n                />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"userForm.get('pincodeControl').hasError('pattern')\" class=\"errorStyle\">Invaild Pincode</div>\n                  <div *ngIf=\"userForm.get('pincodeControl').hasError('required') && userForm.get('pincodeControl').touched\" class=\"errorStyle\">\n                    Pincode is required\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--location area-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons levelIcon\">my_location</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-select formControlName=\"locationControl\" placeholder=\"Select Area*\" class=\"full-width\">\n                <md-option *ngFor=\"let area of areaList\" [value]=\"area\">\n                  {{ area }}\n                </md-option>\n              </md-select>\n              <!-- Location required validation-->\n              <div class=\"errorStyle\" *ngIf=\"userForm.get('locationControl').hasError('required') && userForm.get('locationControl').touched\">\n                Location is required\n              </div>\n            </div>\n          </div>\n\n          <!--Placement division-->\n          <div class=\"division\">\n            Placement Details\n          </div>\n          <!--Profession-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons \">layers</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md2-select formControlName=\"professionControl\" placeholder=\"Profession*\" [multiple]=\"true\" #selectMultipleControl>\n                <md2-option color=\"accent\" *ngFor=\"let currentProfession of professions\" value=\"{{currentProfession.name}}\">{{currentProfession.name}}</md2-option>\n              </md2-select>\n              <!-- Profession required validation-->\n              <div class=\"errorStyle\" *ngIf=\"userForm.get('professionControl').hasError('required') && userForm.get('professionControl').touched\">\n                Profession is required\n              </div>\n\n\n            </div>\n          </div>\n\n          <div [hidden]=\"hiddenParticularRole\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n              <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                <i class=\"material-icons formIcons levelIcon\">supervisor_account</i>\n              </div>\n              <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                <md-input-container class=\"full-width\">\n                  <input formControlName=\"roleControl\" mdInput placeholder=\"Role*\" [readonly]=\"disabled\" />\n                </md-input-container>\n                <!-- Role required validation-->\n                <div class=\"errorStyle\" *ngIf=\"userForm.get('roleControl').hasError('required') && userForm.get('roleControl').touched\">\n                  Role is required\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div [hidden]=\"hiddenRole\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n              <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n                <i class=\"material-icons formIcons levelIcon\">supervisor_account</i>\n              </div>\n              <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n                <md2-select formControlName=\"roleControl\" placeholder=\"Role*\" [multiple]=\"true\" #selectMultipleControl>\n                  <md2-option *ngFor=\"let currentRole of roles\" value=\"{{currentRole.name}}\">{{currentRole.name}}</md2-option>\n                </md2-select>\n\n                <!-- Role required validation-->\n                <div class=\"errorStyle\" *ngIf=\"userForm.get('roleControl').hasError('required') && userForm.get('roleControl').touched\">\n                  Role is required\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!--Registration ID-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">assignment_ind</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"registrationControl\" type=\"text\" class=\"validate\" placeholder=\"Registration Id\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"userForm.get('registrationControl').hasError('required') && userForm.get('registrationControl').touched\" class=\"errorStyle\">\n                    Registration ID is required\n                  </div>\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--placementCenter-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons levelIcon\">person_pin_circle</i>\n            </div>\n            <div fxFlex.xs=\"90\" fxFlex.gt-xs=\"93\">\n              <md-select formControlName=\"placementControl\" ng-model=\"placementSelect\" #placementCenterId class=\"full-width\" placeholder=\"Placement Center*\">\n                <md-option *ngFor=\"let center of placementCenters\" value=\"{{center.name}}\">{{center.name}}</md-option>\n              </md-select>\n              <!-- Placement center required validation-->\n              <div class=\"errorStyle\" *ngIf=\"userForm.get('placementControl').hasError('required') && userForm.get('placementControl').touched\">\n                Placement is required\n              </div>\n            </div>\n          </div>\n\n          <!--Langyuage-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\" class=\"dropdown\">\n            <div fxFlex.xs=\"10\" fxFlex.gt-xs=\"7\">\n              <i class=\"material-icons formIcons\">language</i>\n            </div>\n            <div fxFlex>\n              <md2-select formControlName=\"languageControl\" placeholder=\"Language*\" [multiple]=\"true\" #selectMultipleControl>\n                <md2-option *ngFor=\"let language of languages\" value=\"{{language.name}}\">{{language.name}}\n\n                </md2-option>\n              </md2-select>\n              <!-- Name required validation-->\n              <div class=\"errorStyle\" *ngIf=\"userForm.get('languageControl').hasError('required') && userForm.get('languageControl').touched\">\n                Language is required\n              </div>\n            </div>\n          </div>\n\n          <!--Register Button-->\n          <div fxLayout=\"row\">\n            <button md-raised-button color=\"primary\" class=\"full-width registerBtn\" type=\"button\" (click)=\"save(userForm)\" [disabled]=\"!userForm.valid\">Register</button>\n          </div>\n        </form>\n      </md-card-content>\n    </md-card>\n  </md-grid-tile>\n</md-grid-list>\n<!--\n<app-footer *ngIf=\"title=='Admin'\" class=\"adminFooter\"></app-footer>\n<app-login-footer *ngIf=\"title=='Coordinator' || title=='Supervisor'\"></app-login-footer>-->"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<p>\n    Candidate Register page\n</p>\n<p>\n    Coming soon...\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container paddings\"\n     fxLayout\n     fxLayout.xs=\"column\"\n     fxLayoutAlign=\"center\"\n         fxLayoutGap.xs=\"0\">\n\n  <div  fxFlex  fxFlexOffset.xs=\"0\" class=\"full-width form-style\">\n    \n <form [formGroup]=\"searchForm\" class={{cls}}>\n\n                <md-input-container class=\"full-width\">\n                    <input formControlName=\"searchControl\" mdInput placeholder=\"Search Candidate\" (focus)=\"change()\" (blur)=\"fullView()\" (keyup.enter)=\"getSearch() \" />\n                    <md-hint>\n                    <p class=\"error-style\">\n                    {{message}}\n                  </p>\n                  </md-hint>\n                  </md-input-container>\n                </form>\n              </div>\n\n</div>\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<p>\n    {{title}} Dashboard\n</p>\n<p>\n    Coming soon..\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<p>\n  employers works!\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<p>\n  event-post works!\n</p>\n<app-footer></app-footer>"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--login card-->\n<md-grid-list cols=\"1\" rowHeight=\"350px\">\n    <md-grid-tile>\n        <md-card class=\"loginCard\">\n            <md-card-title>Password Reset</md-card-title>\n            <md-card-content>\n                <form [formGroup]=\"userForm\" (ngSubmit)=\"onResetLink()\">\n\n                    <!--Email input-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">email</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\" class=\"errorStyle\">\n                                        Email is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('email').hasError('pattern') && userForm.get('email')\" class=\"errorStyle\">\n                                        Invalid email\n                                    </div>\n                                    <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Reset Password button-->\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"accent\" class=\"full-width\" [disabled]=\"!userForm.valid\">Send Reset Link</button>\n                        </div>\n                        <div fxFlex></div>\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"warn\" (click)=onBack() class=\"full-width\">Back</button>\n                        </div>\n                    </div>\n\n                </form>\n            </md-card-content>\n        </md-card>\n        <!--card-ends-->\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<!--<input type=\"file\" (change)=\"openFile($event)\" placeholder=\"Upload file...\" />\n<button type=\"button\" [disabled]=\"importButton\" (click)=\"upload()\">Import Candidates</button>\n<div *ngIf=\"error\">{{error}}</div>-->\n\n\n<!--\n<form method=\"post\"  enctype=\"multipart/form-data\">\n    <input type=\"file\" (change)=\"openFile($event)\" placeholder=\"Upload file...\" />\n<button type=\"button\" [disabled]=\"importButton\"  (click)=\"upload()\">Import Candidates</button>\n<div *ngIf=\"error\">{{error}}</div>\n  </form>-->\n<div class=\"container width-75 margin-auto paddings margin-top\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap.xs=\"0\">\n    <div fxFlex class=\"margin-auto import-file \">\n        <form method=\"post\" enctype=\"multipart/form-data\">\n            <input class=\"file-style\" type=\"file\" (change)=\"openFile($event)\" placeholder=\"Choose file...\" />\n        </form>\n    </div>\n</div>\n<!--import-button-->\n<div class=\"container width-75 margin-auto paddings\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap.xs=\"0\">\n    <div fxFlex class=\"margin-auto  text-center \">\n        <button md-button type=\"button\" [disabled]=\"importButton\" (click)=\"upload()\">Import Candidates</button>\n    </div>\n</div>\n<!--error message-->\n<div class=\"container width-75  margin-auto paddings\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap.xs=\"0\">\n    <div fxFlex class=\"margin-auto  error-style\"  *ngIf=\"error\">{{error}}\n    \n</div>\n</div>\n\n<label class=\"uploader\" ondragover=\"return false;\"\n    [class.loaded]=\"loaded\" \n    [style.outlineColor]=\"dragging ? activeColor : baseColor\"\n    (dragenter)=\"handleDragEnter()\"\n    (dragleave)=\"handleDragLeave()\"\n    (drop)=\"handleDrop($event)\">\n    \n    <i class=\"icon icon-upload\" \n        [style.color]=\"dragging \n            ? ((imageSrc.length > 0) ? overlayColor : activeColor)\n            : ((imageSrc.length > 0) ? overlayColor : baseColor)\"></i>\n    \n    <img \n        [src]=\"imageSrc\" \n        (load)=\"handleImageLoad()\" \n        [class.loaded]=\"imageLoaded\"/>\n    \n    <input type=\"file\" name=\"file\" accept=\"image/*\"\n        (change)=\"handleInputChange($event)\">\n</label>\n\n\n\n<app-footer></app-footer>"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<p>\n  job-post works!\n</p>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<app-login-header></app-login-header>\n<!-- container for herosection -->\n<div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutGap=\"30px\" fxLayoutGap.xs=\"10px\">\n  <div class=\"item item1  max-height change-hero-background\" fxFlex=\"100%\">\n    <!-- logo -->\n    <img src=\" \" width=\"10%\">\n    <!-- login and register button-->\n     <button md-raised-button color=\"secondary\" class=\"btn-lg pull-right\" >Take A Tour</button>\n    <!-- headings -->\n      <svg >\n    <symbol id=\"s-text\">\n\t\t<text  y=\"80%\"> {{headingTitle}} </text>\n\t</symbol>\n\t<g class = \"g-ants\">\n\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n\t\t<use xlink:href=\"#s-text\" class=\"text-copy\"></use>\n\t</g>\n</svg>\n     \n  <!-- sub headings-->\n    <h1 class=\"color-violet subtitleDetails\">\n      {{subtitleDetails}}\n    </h1>\n    <!--take a tour button -->\n  </div>\n</div>\n<!-- end container for herosection -->\n\n<!-- containter for about items -->\n<div class=\"container container-padding about-item\" fxLayout fxLayout.xs=\"column\" fxLayoutGap=\"30px\" fxLayoutGap.xs=\"10px\">\n  <div fxFlex=\"33%\" class=\"item card-item center\" *ngFor=\"let about of aboutus\">\n    <div class=\"item-back\">\n      <img src=\"http://gulfinity.com/wp-content/themes/jobboard/images/default.jpg\" class=\"img-circle item-back blinkimg\" align=\"middle\">\n    </div>\n    <div>\n      <h2>{{about}}\n      </h2>\n      <hr>\n    </div>\n    <div class=\"item-padding\">\n      <p class=\"textalign-left\">\n        Nassau saw service in the North Sea at the beginning of World War I, in the II Division of the I Battle Squadron of the German\n        High Seas Fleet.permitted to remain in German ports.\n      </p>\n    </div>\n    <div>\n      <button md-button class=\"translate\">Know More>>></button>\n    </div>\n\n  </div>\n</div>\n<!-- end conatiner for about items-->\n<app-login-footer></app-login-footer>\n"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--login card-->\n<div *ngIf=\"showProgress\" class=\"progressBar\">\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\n</div>\n<md-grid-list cols=\"1\" rowHeight=\"600px\">\n  <md-grid-tile>\n    <md-card class=\"loginCard\">\n      <md-card-title>LOGIN</md-card-title>\n      <md-card-content>\n\n        <form [formGroup]=\"userForm\" (ngSubmit)=\"login()\">\n          <!--Email input-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex>\n              <i class=\"material-icons formIcons\">mail</i>\n            </div>\n            <div fxFlex=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput formControlName=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\" class=\"errorStyle\">\n                    Email is required\n                  </div>\n                  <div *ngIf=\"userForm.get('email').hasError('pattern') && userForm.get('email')\" class=\"errorStyle\">\n                    Invalid email\n                  </div>\n                  <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--passowrd input-->\n          <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n            <div fxFlex>\n              <i class=\"material-icons formIcons\">lock</i>\n            </div>\n            <div fxFlex=\"93\">\n              <md-input-container class=\"full-width\">\n                <input mdInput id=\"password\" type=\"password\" class=\"validate\" formControlName=\"password\" placeholder=\"Password\">\n                <md-hint align=\"start\" class=\"full-width\">\n                  <div *ngIf=\"userForm.get('password').hasError('required') && userForm.get('password').touched\" class=\"errorStyle\">\n                    Password is required\n                  </div>\n                  <div *ngIf=\"userForm.get('password').hasError('pattern')\" class=\"errorStyle\">\n                    Invalid password. Password must be at least 6 characters long, and contain a number\n                  </div>\n                  <!--<app-control-messages [control]=\"userForm.controls.password\" class=\"errorStyle\"></app-control-messages>-->\n                </md-hint>\n              </md-input-container>\n            </div>\n          </div>\n\n          <!--sign in button-->\n          <div fxLayout=\"row\">\n            <div fxFlex=\"100\">\n              <button md-raised-button color=\"primary\" type=\"submit\" class=\"full-width largeBtn\" [disabled]=\"!userForm.valid\">Sign in</button>\n            </div>\n          </div>\n        </form>\n\n        <!--forgot Password button-->\n        <div fxLayout=\"row\">\n          <div fxFlex=\"100\" fxLayoutAlign=\"center center\">\n            <button md-button color=\"primary\" (click)=\"forgotPassword()\" class=\"\">Forgot Password ?</button>\n          </div>\n        </div>\n\n        <!--social media button-->\n        <!--<div fxLayout.gt-sm=\"row\" fxLayout.sm=\"column\" fxHide.sm>-->\n        <div fxLayout=\"row\" fxLayout.xs=\"column\">\n          <div fxFlex=\"48\">\n                        <button md-button color=\"primary\" (click)=\"socialAuthentication('google')\" class=\"full-width largeBtn googleBtn\">  <i class=\"zmdi zmdi-google zmdi-hc-lg\"></i> Login with Google</button>\n\n        \n          </div>\n          <div fxFlex></div>\n          <div fxFlex=\"48\">\n                                    <button md-button color=\"primary\" (click)=\"socialAuthentication('facebook')\" class=\"full-width largeBtn fbBtn\">  <i class=\"zmdi zmdi-facebook zmdi-hc-lg\"></i> Login with Google</button>\n\n          \n          </div>\n        </div>\n      </md-card-content>\n    </md-card>\n    <!--card-ends-->\n  </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header *ngIf=\"reset!='reset'\"></app-login-header>\n\n<!--Reset Password card-->\n<md-grid-list cols=\"1\" rowHeight=\"600\">\n    <md-grid-tile>\n        <!--card Start-->\n        <md-card class=\"loginCard blue-grey-text\">\n            <md-card-title>Password Reset</md-card-title>\n            <md-card-content>\n                <form class=\"col s12\" [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n\n                    <!--Email-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">email</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\"  placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <!--<app-control-messages [control]=\"userForm.controls.email\" class=\"errorStyle\"></app-control-messages>-->\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--passowrd-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">lock</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"password\" id=\"password\" type=\"password\" class=\"validate\" #password (blur)=\"passwordValue(password.value)\" placeholder=\"Password\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('password').hasError('required') && userForm.get('password').touched\" class=\"errorStyle\">\n                                        Password is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('password').hasError('pattern')\" class=\"errorStyle\">\n                                        Invalid password. Password must be at least 6 characters long, and contain a number\n                                    </div>\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--confirm password-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">lock</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"conPassword\" id=\"conPassword\" type=\"password\" class=\"validate\" #conPassword (keyup)=\"conPasswordValue(conPassword.value,password.value)\" placeholder=\"Confirm Password\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('conPassword').hasError('required') && userForm.get('conPassword').touched\" class=\"errorStyle\">\n                                        Confirm Password is required\n                                    </div>\n                                    <div *ngIf=\"passwordMatchWarning\" class=\"errorStyle\">{{passwordMatchWarning}}</div>\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Reset Button-->\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"accent\" class=\"full-width\" type=\"submit\" id=\"resetBtn\" [disabled]=\"!userForm.valid\">Reset</button>\n                        </div>\n                        <div fxFlex></div>\n                        <div fxFlex=\"48\">\n                            <button type=\"button\" md-raised-button color=\"warn\" (click)=onBack() class=\"full-width\">Back</button>\n                        </div>\n                    </div>\n                </form>\n            </md-card-content>\n        </md-card>\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer *ngIf=\"reset!='reset'\"></app-login-footer>\n\n<app-footer *ngIf=\"reset=='reset'\"></app-footer>"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<md-toolbar  color=\"primary\" class=\"copyright\" >\n    <p class=\"center\"> © Copyright Samarthya 2017</p>\n</md-toolbar>"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<!--sidenav and toolbar with content-->\n<md-sidenav-container fullscreen [class.m2app-dark]=\"isDarkTheme\">\n\n    <!--sidenav starts here..-->\n    <md-sidenav #sidenav mode=\"over\" opened=\"false\">\n\n        <!--sidenav toobar-->\n        <md-toolbar color=\"primary\" class=\"toolbar\">\n            <b>Samarthya</b>\n        </md-toolbar>\n\n        <!--sidenav ites list-->\n        <md-nav-list>\n          \n            <md-list-item *ngFor=\"let navItem of navList\" routerLink={{navItem.path}} routerLinkActive=\"active\" (click)=\"sidenav.toggle()\">\n                 <i class=\"material-icons\">{{navItem.icon}}</i>  \n                <p class=\"navItem\"> {{navItem.name}}</p>\n            </md-list-item>\n        </md-nav-list>\n    </md-sidenav>\n    <!--sidenav ends-->\n\n    <!--main appbar starts-->\n    <md-toolbar color=\"primary\" class=\"toolbar\">\n\n        <button md-icon-button (click)=\"sidenav.toggle()\" #myButton id=\"sidebarButton\">\n                <i class=\"material-icons\">menu</i>\n            </button>\n        <span><b>Samarthya Placement Portal</b></span>\n\n \n        <span class=\"fill-remaining-space\"></span>\n        <!--appbar buttons-->                          <md-slide-toggle (click)=\"toggleTheme()\"></md-slide-toggle>\n\n        <span> \n\n            <!--notification button-->\n            <button md-icon-button [mdMenuTriggerFor]=\"menuNotification\">\n                 <i class=\"material-icons\">notifications_active</i>  \n            </button>\n            <md-menu #menuNotification x-position=\"before\">\n               <md-list>\n                    <md-list-item>\n                        <p md-line>No new Notification</p>\n                    </md-list-item>\n                </md-list>\n            </md-menu>\n\n            <!--user account button-->\n            <button md-icon-button [mdMenuTriggerFor]=\"menuAccount\">\n                <i class=\"material-icons\">account_circle</i>  \n            </button>\n            <md-menu class=\"menu\" #menuAccount x-position=\"before\">\n                <md-nav-list>\n                    <md-list-item>\n    \n                        <p md-line><b>User</b></p>\n                    </md-list-item>\n                   \n                    <md-list-item>\n                         <i class=\"material-icons\">face</i> \n                        <p>Profile</p>\n                    </md-list-item>\n                    <md-list-item (click)=\"changePassword()\" routerLinkActive=\"active\">\n                        <i class=\"material-icons\">lock</i> \n                        <p>Change Password</p>\n                    </md-list-item>\n                    <md-list-item (click)=\"logoutUser()\" routerLinkActive=\"active\">\n                        <i class=\"material-icons\">power_settings_new</i> \n                        <p>Log Out</p>\n                    </md-list-item>\n                </md-nav-list>\n            </md-menu>\n        </span>\n    </md-toolbar>\n    <div class=\"langBar\" fxFlex fxHide.xs>\n    <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\n   <div> {{lang.nativeName}}</div>\n    </button>\n</div>\n    <!--main appbar starts-->\n\n    <!--main ceiontent goes here-->\n \n                <!--routing outlet-->\n                <router-outlet></router-outlet>\n     \n\n    <!--add the components tags here....-->\n\n    <!--main content ends here-->\n</md-sidenav-container>\n<!--sidenav and toolbar with content ends-->\n\n"

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "<!--footer starts-->\n<div class=\"langBar\" fxFlex fxHide.gt-xs>\n  <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\n   <div> {{lang.nativeName}}</div>\n    </button>\n</div>\n<md-toolbar color=\"primary\" class=\"footer\" fxLayout=\"column\">\n    <div fxFlex=\"50\" class=\"footerHead\">\n        <h5>Samarthya</h5>\n    </div>\n    <div fxFlex></div>\n    <div fxFlex=\"50\" class=\"footerLinks\">\n        <ul>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">Samarthya Candidate</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">Samarthya Placement</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">FAQ</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#\">About Us</a></li>\n        </ul>\n    </div>\n</md-toolbar>\n<md-toolbar color=\"primary\" class=\"copyright\">\n    <p> © Copyright Samarthya 2017</p>\n</md-toolbar>"

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "<!--Header start-->\n<md-toolbar color=\"primary\" class=\"mainHeader\">\n  <!--<a href=\"/\">-->\n  <button md-button  (click)=\"samarthya()\" class=\"logo\">Samarthya</button>\n  <!--</a>-->\n  <span class=\"fill-remaining-space\"></span>\n\n  <!--login button-->\n  <div fxLayout=\"row\">\n    <div fxFlex=\"100\">\n      <button md-button color=\"accent\" (click)=\"login()\" class=\"full-width largeBtn\">Login</button>\n    </div>\n  </div>\n  <!--create account button-->\n  <div fxLayout=\"row\">\n    <div fxFlex=\"100\">\n      <button md-button color=\"accent\" (click)=\"verifyEmail()\" class=\"full-width largeBtn\">Sign Up</button>\n    </div>\n  </div>\n</md-toolbar>\n<div class=\"langBar\" fxFlex fxHide.xs>\n  <button *ngFor=\"let lang of languages\" title={{lang.name}} class=\"langBtn\" md-button>\n   <div> {{lang.nativeName}}</div>\n    </button>\n</div>"

/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<div [class]=\"flip1\">\n\n    <md-card class=\"cardColor profile-card\">\n        <md-card-title *ngIf=\"flip1 !='flip'\">\n\n            <!-- here’s the avatar -->\n            <a target=\"_blank\" href=\"#\">\n                <img src=\"http://images.indianexpress.com/2016/06/viratkohlil.jpg\" class=\"hoverZoomLink\">\n            </a>\n\n            <!-- the username -->\n            <h1>\n                Virat Kohli\n            </h1>\n\n            <!-- and role or location -->\n            <h2>\n                Full Stack Developer\n            </h2>\n\n        </md-card-title>\n        <div class=\"fli  profile-bio\" *ngIf=\"flip1 =='flip'\">\n            <h3>Skills</h3>\n            <p *ngFor=\"let skill of skills\">\n                {{skill}}<br>\n            </p>\n\n            <h3>Qualifications</h3>\n            <p *ngFor=\"let qualification of qualifications\">\n                {{qualification}}<br>\n            </p>\n            <h3>Communications</h3>\n            <p *ngFor=\"let communication of communications\">\n                {{communication}}<br>\n            </p>\n            <h3>Location</h3>\n            <p>\n                {{location}}<br>\n            </p>\n\n            <button md-button (click)=\"changeCard()\"><i class=\"material-icons\">rotate_left</i></button>\n        </div>\n\n        <!-- bit of a bio; who are you? -->\n        <div *ngIf=\"flip1 !='flip'\" class=\"profile-bio\">\n            <p>\n                Experience:{{experience}} years\n            </p>\n            <p>\n                Age: {{age}} years old\n            </p>\n            <h3>Contact Details</h3>\n            <p>\n                {{mobileNumber}}\n            </p>\n            <p>\n                {{email}}\n            </p>\n\n            <button md-button (click)=\"changeCard()\"><i class=\"material-icons\">rotate_left</i>      \n</button>\n\n        </div>\n\n        <!-- some social links to show off -->\n        <div class=\"cardColor profile-social-links\">\n        <md-card-actions  layout=\"row\" layout-align=\"end center\" *ngIf=\"flip1 !='flip'\">\n            <button md-button class=\"right\"><i class=\"material-icons\">share</i>      \n</button>\n            <button md-button class=\"right\"> <i class=\"material-icons\">file_download</i></button>\n        </md-card-actions>\n        </div>\n    </md-card>\n</div>"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<!--login Header-->\n<app-login-header></app-login-header>\n\n<!--login card-->\n<md-grid-list cols=\"1\" rowHeight=\"600px\">\n    <md-grid-tile>\n        <md-card class=\"loginCard\">\n            <md-card-title>Verify Email</md-card-title>\n            <md-card-content>\n                <form class=\"col s12\" [formGroup]=\"userForm\" (ngSubmit)=\"onVerifyLink()\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start none\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">supervisor_account</i>\n                        </div>\n                        <div fxFlex=\"93\" >\n                            <md-radio-group formControlName=\"role\" class=\"full-width\">\n                                <md-radio-button value=\"Coordinator\">Coordinator</md-radio-button>\n                                <md-radio-button value=\"Supervisor\">Supervisor</md-radio-button>\n                            </md-radio-group>\n                        <div *ngIf=\"userForm.get('role').hasError('required') && userForm.get('role').touched\" class=\"errorStyle full-width\">\n                            Email is required\n                        </div>\n                          </div>\n                    </div>\n                    <!--Email input-->\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start end\">\n                        <div fxFlex>\n                            <i class=\"material-icons formIcons\">email</i>\n                        </div>\n                        <div fxFlex=\"93\">\n                            <md-input-container class=\"full-width\">\n                                <input mdInput formControlName=\"email\" id=\"email\" type=\"text\" class=\"validate\" placeholder=\"Email\" />\n                                <md-hint align=\"start\" class=\"full-width\">\n                                    <div *ngIf=\"userForm.get('email').hasError('required') && userForm.get('email').touched\" class=\"errorStyle\">\n                                        Email is required\n                                    </div>\n                                    <div *ngIf=\"userForm.get('email').hasError('pattern') && userForm.get('email')\" class=\"errorStyle\">\n                                        Invalid email\n                                    </div>\n                                </md-hint>\n                            </md-input-container>\n                        </div>\n                    </div>\n\n                    <!--Reset in button-->\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\">\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"primary\" class=\"full-width\" type=\"submit\" [disabled]=\"!userForm.valid\">Verify</button>\n                        </div>\n                        <div fxFlex></div>\n                        <div fxFlex=\"48\">\n                            <button md-raised-button color=\"warn\" class=\"full-width\" (click)=onBack()>Back</button>\n                        </div>\n                    </div>\n                </form>\n            </md-card-content>\n        </md-card>\n        <!--card-ends-->\n    </md-grid-tile>\n</md-grid-list>\n\n<!--footer-->\n<app-login-footer></app-login-footer>"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 600px;\n}\n\n.formIcons {\n    padding-bottom: 25px;\n    color: gray;\n}\n\n.loading {\n    position: fixed;\n    z-index: 100000;\n    background-color: black;\n    display: block;\n    height: 100%;\n    width: 100%;\n    opacity: .5;\n}\n.adminFooter{\n    position: relative\n}\n.division{\n    /*margin:10px;*/\n    text-shadow: 2px 2px 5px gray;\n    margin-bottom: 10px;\n    margin-top: 30px;\n    padding-bottom: 10px;\n    font-size: 18px;\n    color:dimgray;\n    /*border-bottom: 2px solid lightgray;*/\n}\n\n.gender {\n    height: 70px;\n    padding-bottom: 15px;\n}\n\n.dropdown {\n    height: 70px;\n    padding-bottom: 15px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.findAreaBtn {\n    padding: 10px;\n    height: 70px;\n    line-height: unset;\n}\n\n.location {\n    margin-top: 10px;\n}\n\n.levelIcon {\n    padding-top: 0px;\n    padding-bottom: 12px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.registerBtn {\n    margin-top: 50px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n    .loading {\n        padding-left: 40%;\n        padding-top: 50%;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n    .loading {\n        padding-left: 40%;\n        padding-top: 50%;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n    .loading {\n        padding-left: 47%;\n        padding-top: 10%;\n    }\n}"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "\n.full-width {\n    width: 100%;\n    margin: auto;\n}\n.error-style {\n    \n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n.view{\n    position: fixed;\n\n}\n.search-icon {\n    position: absolute;\n    top: 50%;\n    right: 25px;\n    margin-top: -10px;\n}\n\n.loginCard{\n    text-align: center;\n}\n\nbutton\n{\n    margin:0px 5px;\n}\n.pull-right\n{\n    float: right;\n\n}\n.search-box\n{\n    width:80%;\n    margin:auto;\n        }\n\n.width-75\n{\n    width:75%;\n    margin:auto;\n}\n.pull-left\n{\n    float: left;\n}\n.expand{\n\n  -webkit-animation: moveDown 1s .1s ease forwards;\n  animation: moveDown 1s .1s ease forwards;\n}\n\n \n@-webkit-keyframes moveDown {\n  \n  \n  100% {\n   width:65%;\n  }\n}\n\n@keyframes moveDown {\n\n  100% {\n   width:65%;\n  }\n}\n\n.expand-out{\n\n  -webkit-animation: moveDowns 1s .1s ease forwards;\n  animation: moveDowns 1s .1s ease forwards;\n}\n\n\n@-webkit-keyframes moveDowns {\n  0% {\n   }\n  50% {\n    \n  }\n  100% {\n   width:100%;\n  }\n}\n\n@keyframes moveDowns {\n  0% {\n   }\n  50% {\n    \n  }\n  100% {\n\n   width:100%;\n  }\n}\n \n.paddings\n{\n    padding:1% 5%;\n    \n}\n.big-res\n{\n    font-size: 40px;\n}\n.form-style\n{  \n  box-shadow:         3px 3px 5px 6px #ccc; \n  -webkit-animation: blink 1s linear infinite; \n          animation: blink 1s linear infinite;\n}\n\n@-webkit-keyframes blink\n{\n    50%{  \n  box-shadow:         3px 3px 5px 6px #6d587a; \n    }\n}\n\n@keyframes blink\n{\n    50%{  \n  box-shadow:         3px 3px 5px 6px #6d587a; \n    }\n}\n\n\n@media (max-width: 400px) {\n.big-res\n    {\n    font-size: 25px;\n}\n    \n}\n\n@media (max-width: 551px) {\n.big-res\n    {\n    font-size: 30px;\n}\n    \n}\n\n\n\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n}"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = ".full-width {\n    width: 100%;\n    margin: auto;\n}\n.pull-right\n{\n    float: right;\n\n}\n.width-35\n{\n\n    width:35%;\n    margin:auto;\n\n}\n.width-75\n{\n    width:75%;\n    margin:auto;\n}\n.pull-left\n{\n    float: left;\n}\n\n.box-style\n{  \n  box-shadow:         3px 3px 5px 6px #ccc; \n\n  /*animation: blink 1s linear infinite;*/\n}\n\n@-webkit-keyframes blink\n{\n    50%{  \n  box-shadow:         3px 3px 5px 6px #6d587a; \n    }\n}\n\n@keyframes blink\n{\n    50%{  \n  box-shadow:         3px 3px 5px 6px #6d587a; \n    }\n}\n\n.paddings\n{\n  padding: 5px 1%;\n\n}\nmd-card\n{\n  width:25%;\n}\n\n\n.text-center\n{\n  text-align: center;\n}\n.margin-auto\n{\n  margin: auto;\n\n}\n.none\n{\n  display: none;\n}\n.import-file\n{  \n box-shadow:         3px 3px 5px 6px #6d587a; \n  border: 1px dotted #6d587a ;\n  \n}\n.file-style\n{\n   outline: none;\n   font-size:30px;\n   text-align: center; \n     opacity:5;\n     width:100%;\n}\n.font-size-big\n{\n  font-size: 80px;\n  padding: 5px;\n  text-align:center;\n  margin: 10px;\n}\n.z-index\n{\n  z-index:-111;\n  position: relative;\n  top:0;\n}\nform,input\n{\n  margin:0;\n  padding: 0;\n}\n.margin-top\n{\n  margin-top: 1%;\n}\n.error-style\n{\n  color: #D8000C;\n  background-color: #FFBABA;\n  word-wrap: break-word;\n  font-size: 22px;\n  padding: 10px;\n  border-radius:20px; \n}"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = ".item\n{\npadding: 10px;\nmargin: 5px;\nword-wrap: break-word;\nbox-shadow: -2px -1px 29px 2px rgba(135,118,135,0.95);\n}\n.item1\n{\n    background: url('https://tctechcrunch2011.files.wordpress.com/2013/04/job_search.jpg');\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    -webkit-animation: changebackground 5s infinite;\n            animation: changebackground 5s infinite;\n    \n}\n\n@-webkit-keyframes changebackground {\n  0% {\n    background:url('http://www.arnoldgroup.com.au/blog/wp-content/uploads/2015/09/job-search-1030x496.jpg');\n     background-repeat: no-repeat;\n    background-size: 100% 100%;\n  }\n  80% {\n    background: url('http://paazy.in/wp-content/uploads/2016/03/job-search.jpg');\n     background-repeat: no-repeat;\n     background-size: 100% 100%;\n  }\n}\n\n@keyframes changebackground {\n  0% {\n    background:url('http://www.arnoldgroup.com.au/blog/wp-content/uploads/2015/09/job-search-1030x496.jpg');\n     background-repeat: no-repeat;\n    background-size: 100% 100%;\n  }\n  80% {\n    background: url('http://paazy.in/wp-content/uploads/2016/03/job-search.jpg');\n     background-repeat: no-repeat;\n     background-size: 100% 100%;\n  }\n}\n\n\n.herosection\n{\npadding:20px;\nmargin:10px;\nmargin-top: 20px;\nword-wrap: break-word;\nbox-shadow: -2px -1px 29px 2px rgba(135,118,135,0.95);\n}\n.pull-right\n{\nfloat: right;\n}\n.pull-left\n{\n    float: left;\n}\n.pull-top\n{\nfloat:top;\n}\n.pull-bottom\n{\n    float:bottom;\n}\n.blink\n{\n/*-webkit-box-shadow: 0px 31px 32px 8px rgba(0,0,0,0.88);\n-moz-box-shadow: 0px 31px 32px 8px rgba(0,0,0,0.88);\nbox-shadow: 0px 31px 32px 8px rgba(0,0,0,0.88);*/\nbox-shadow: -2px -1px 29px 4px rgba(0,0,0,0.88);\n-webkit-animation: blinker 1s linear infinite;\n        animation: blinker 1s linear infinite;\n}\n@-webkit-keyframes blinker {  \n  50% {\nbox-shadow: -2px -1px 29px 0px rgba(135,118,135,0.95);\n   }\n}\n@keyframes blinker {  \n  50% {\nbox-shadow: -2px -1px 29px 0px rgba(135,118,135,0.95);\n   }\n}\n\n.footer-section\n{  \npadding:20px;\nmargin:10px;\nmargin-top: 20px;\nword-wrap: break-word;\nbox-shadow: -2px -1px 29px 1px  rgba(0,0,0,0.55);\n\n}\n\n\n.colorWhite\n{\n    color:white;\n}\n.img-circle\n{\n    border-radius: 75%;\n   width:120px;\n   height:120px;\n    \n    \n}\n.center\n{\ntext-align:center;   \n}\n\n.item-back\n{\n    background:url(\"./../..//images/mentor.jpg\");\n    background-repeat: no-repeat;\n    background-size:100% 100%; \n}\n.blinkimg\n{\n    -webkit-animation: blinkerimg 5s linear infinite;\n            animation: blinkerimg 5s linear infinite;\n}\n@-webkit-keyframes blinkerimg {  \n  50% { \n      opacity: 0;\n   }\n}\n@keyframes blinkerimg {  \n  50% { \n      opacity: 0;\n   }\n}\n.textalign-left\n{\n    text-align: left;\n}\n.item-padding\n{\n    padding:10px 15px;\n}\n.card-item\n{\n    padding: 20px;\n    border-radius: 15px;\n    background: url(\"./../..//images/cardback.jpg\");\n    \n\n}\n.container-padding\n{\n    padding: 20px;\n    \n}\n\n.rotate-translate\n{\n    -webkit-animation: infinite-spinning 5s linear infinite;\n            animation: infinite-spinning 5s linear infinite;\n}\n\n@-webkit-keyframes infinite-spinning {\n \n  50% {\n    -webkit-transform: translate(50px) rotate(360deg);\n            transform: translate(50px) rotate(360deg);\n  }\n  \n}\n\n@keyframes infinite-spinning {\n \n  50% {\n    -webkit-transform: translate(50px) rotate(360deg);\n            transform: translate(50px) rotate(360deg);\n  }\n  \n}\n\n.rotate\n{\n    -webkit-animation: infinite-spinning1 5s linear infinite;\n            animation: infinite-spinning1 5s linear infinite;\n}\n\n@-webkit-keyframes infinite-spinning1 {\n \n  50% {\n    -webkit-transform:  rotate(360deg);\n            transform:  rotate(360deg);\n  }\n  \n}\n\n@keyframes infinite-spinning1 {\n \n  50% {\n    -webkit-transform:  rotate(360deg);\n            transform:  rotate(360deg);\n  }\n  \n}\n\n.translate\n{\n    -webkit-animation: infinite-spinning2 5s linear infinite;\n            animation: infinite-spinning2 5s linear infinite;\n}\n\n@-webkit-keyframes infinite-spinning2 {\n \n  50% {\n    -webkit-transform: translate(40px) ;\n            transform: translate(40px) ;\n  }\n  \n}\n\n@keyframes infinite-spinning2 {\n \n  50% {\n    -webkit-transform: translate(40px) ;\n            transform: translate(40px) ;\n  }\n  \n}\n.about-item\n{\nbackground:#666;\nbackground-repeat: no-repeat;\nbackground-size: 100% 100%;\n}\n\n\n.btn-lg\n{\n    width:25%;\n}\n\n\n\n\n\n\nsvg {\n    \n    font: 10.5em 'Noto Serif';\n    width: 100%;\n    text-align: center;\n    \n}\n\n.text-copy {\n    fill: none;\n    stroke: white;\n    stroke-dasharray: 6% 29%;\n    stroke-width: 5px;\n    stroke-dashoffset: 0%;\n    -webkit-animation: stroke-offset 5.5s infinite linear;\n            animation: stroke-offset 5.5s infinite linear;\n}\n\n.text-copy:nth-child(1){\n    stroke: #4D163D;\n\t-webkit-animation-delay: -1;\n\t        animation-delay: -1;\n}\n\n.text-copy:nth-child(2){\n\tstroke: #840037;\n\t-webkit-animation-delay: -2s;\n\t        animation-delay: -2s;\n}\n\n.text-copy:nth-child(3){\n\tstroke: #BD0034;\n\t-webkit-animation-delay: -3s;\n\t        animation-delay: -3s;\n}\n\n.text-copy:nth-child(4){\n\tstroke: #BD0034;\n\t-webkit-animation-delay: -4s;\n\t        animation-delay: -4s;\n}\n\n.text-copy:nth-child(5){\n\tstroke: #FDB731;\n\t-webkit-animation-delay: -5s;\n\t        animation-delay: -5s;\n}\n\n@-webkit-keyframes stroke-offset{\n\t100% {stroke-dashoffset: -35%;}\n}\n\n@keyframes stroke-offset{\n\t100% {stroke-dashoffset: -35%;}\n}\n\n\n\nh1{\n    font-size:65px;\n}\n\n\n.btn-lg\n{\n    width:150px;\n    height:50px;\n}\n\n\n.max-height\n{\n height:700px;\n}\n\n.responsive-text\n{\n    font-size:30px;\n}\n@media (max-width: 599px){\n.img-circle\n{\n    border-radius: 50%;\n    width:100px;\n    height:100px;\n    padding: 10px;\n    \n}\n\n\n.max-height\n{\n height:100%;\n}\n\n\n.btn-lg\n{\n    width:100px;\n    height:50px;\n}\n\n\nsvg\n{\n      display: block;\n      font-size: 60px;\n}\n\n.text-copy\n{\n      stroke-width: 2px;\n\n}\nh1\n{\n    font-size:35px;\n}\n\n.responsive-text\n{\n    font-size:18px;\n}\n\n}\n@media (max-width: 800px) and (min-width:600px){\n\n.img-circle\n{\n    border-radius: 50%;\n    width:100px;\n    height:100px;\n    \n    \n}\n.btn-lg\n{\n    width:150px;\n    height:50px;\n}\n\n.max-height\n{\n height:500px;\n}\n\nsvg\n{\n      display: block;\n      font-size:80px;\n}\n\n.text-copy\n{\n    stroke-width: 2px;\n}\nh1\n{\n    font-size:50px;\n}\n\n\n.responsive-text\n{\n    font-size:20px;\n}\n}\n\n.color-violet\n{\n    color:#BD0034;\n}\n\n.subtitleDetails{\n        color: white;\n        text-shadow: 5px 5px 3px black;\n}\n\n\n\n\n\n\n"

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n    /*background-color: white;\n    color: #F44336;*/\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n    /*color: #3f51b5;\n    background-color: white;*/\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n}"

/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}"

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = ".copyright {\n   \n  position: absolute;\n  \n  bottom: 0;\n  text-align: center;\n}\n   \n  \n\n\n.copyright p {\n    font-size: 15px;\n    padding: 0px;\n    margin: auto;\n}\n\n"

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto;\n}\n\nmd-toolbar {\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    .toolbar {\n        font-size: 13px;\n    }\n    .navItem {\n        font-size: 13px;\n    }\n    md-sidenav {\n        width: 150px;\n    }\n}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    .toolbar {\n        font-size: 15px;\n    }\n    .navItem {\n        font-size: 15px;\n    }\n    md-sidenav {\n        width: 200px;\n    }\n}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {\n    .toolbar {\n        font-size: 22px;\n    }\n    .navItem {\n        font-size: 18px;\n    }\n    md-sidenav {\n        width: 250px;\n    }\n}\n.formIcons {\n    line-height: unset;\n}\n\n.mainHeader {\n    top: 0px;\n    position: fixed;\n    z-index: 1000;\n}\n\n.langBar {\n   \n    background-color: #EEEEEE;\n    padding-left: 50px;\n    padding-right: 50px;\n    text-align: center;\n}\n\n.langBtn {\n    color: white;\n    color: #616161;\n    margin: 1px;\n}\n\n.logo {\n    text-align: center;\n    margin: auto;\n    font-size: 30px;\n    font-weight: bold;\n    color: whitesmoke;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none\n}\n\n.center {\n    margin: auto;\n    text-align: center;\n}\n\nmd-select {\n    color: red;\n}\n\n.logo:hover {\n    color: white;\n}\n\n.footer {\n    margin-top: 100px;\n    opacity: .9;\n    display: block;\n    max-height: unset;\n    height: 150px;\n    /*display: block;*/\n    /*position: relative;*/\n}\n\n.footerHead {\n    margin: auto;\n    font-size: 20px;\n    text-align: center;\n    color: white;\n}\n\n.footerLinks {\n    color: white;\n}\n\n.footerLinks ul li a {\n    color: white;\n    font-size: 15px;\n    text-decoration: unset;\n}\n\n.footerLinks ul li {\n    list-style: none;\n}\n\n.copyright {\n    display: block;\n}\n\n.copyright p {\n    font-size: 15px;\n    padding: 0px;\n    margin: auto;\n}\n.material-icons{\n    font-weight: normal;\n    padding-right: 8px;\n}\nmd-nav-list{\n    width: 200px;\n}\n\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {}\n\n\n/*\n@media (min-height: 10px) {\n.page-footer {\nmargin: 0px;\ntext-align: center;\n}\n}\n\n@media (min-height: 1000px) {\n.page-footer {\nmargin: 0px;\nposition: absolute;\nbottom: 0px;\ntext-align: center;\nwidth: 100%;\n}\n}*/"

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = ".formIcons {\n    line-height: unset;\n}\n\n.fill-remaining-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.mainHeader {\n    top: 0px;\n    position: fixed;\n    z-index: 1000;\n}\n\n.langBar {\n    margin-top: 64px;\n    background-color: white;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n    overflow: scroll;\n    height: 90px;\n}\n\n.langBtn {\n    color: white;\n    color: #616161;\n    margin: 5px;\n}\n\n.logo {\n    text-align: center;\n    margin: auto;\n    font-size: 30px;\n    font-weight: bold;\n    color: whitesmoke;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none\n}\n\n.center {\n    margin: auto;\n    text-align: center;\n}\n\nmd-select {\n    color: red;\n}\n\n.logo:hover {\n    color: white;\n}\n\n.footer {\n    opacity: .9;\n    display: block;\n    max-height: unset;\n    height: 150px;\n    width: 100%;\n    /*margin-top: 80px;*/\n    /*display: block;*/\n    /*position: relative;*/\n}\n\n.footerHead {\n    /*margin: auto;*/\n    font-size: 20px;\n    text-align: center;\n    color: white;\n    /*margin: auto;*/\n    margin-top: 80px;\n    margin-left: 10%;\n}\n\n.footerLinks {\n    margin-top: 80px;\n    color: white;\n    margin-right: 10%;\n}\n\n.footerLinks ul li a {\n    color: white;\n    font-size: 15px;\n    text-decoration: unset;\n}\n\n.footerLinks ul li {\n    list-style: none;\n}\n\n.copyright {\n    display: block;\n}\n\n.copyright p {\n    font-size: 15px;\n    padding: 0px;\n    margin: auto;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    .footer {\n        margin-top: 0;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    .footer {\n        margin-top: 0;\n    }\n}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {\n    .footer {\n        margin-top: 0px;\n    }\n}\n\n\n/*\n@media (min-height: 10px) {\n.page-footer {\nmargin: 0px;\ntext-align: center;\n}\n}\n\n@media (min-height: 1000px) {\n.page-footer {\nmargin: 0px;\nposition: absolute;\nbottom: 0px;\ntext-align: center;\nwidth: 100%;\n}\n}*/"

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = ".formIcons {\n    line-height: unset;\n}\n\n* {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.fill-remaining-space {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n\n.mainHeader {\n    top: 0px;\n    position: fixed;\n    z-index: 1000;\n}\n\n.langBar {\n    margin-top: 64px;\n    /*background-color: #EEEEEE;*/\n    background-color: white;\n    padding-left: 50px;\n    padding-right: 50px;\n    text-align: center;\n}\n\n.langBtn {\n    color: white;\n    color: #616161;\n    margin: 1px;\n}\n\n.logo {\n    /*text-align: center;*/\n    /*margin: auto;*/\n    font-size: 20px;\n    font-weight: bold;\n    color: whitesmoke;\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none\n}\n\n.center {\n    margin: auto;\n    text-align: center;\n}\n\nmd-select {\n    color: red;\n}\n\n.logo:hover {\n    color: white;\n}\n\n.footer {\n    opacity: .9;\n    display: block;\n    max-height: unset;\n    height: 150px;\n    /*display: block;*/\n    /*position: relative;*/\n}\n\n.footerHead {\n    margin: auto;\n    font-size: 20px;\n    text-align: center;\n    color: white;\n}\n\n.footerLinks {\n    /*padding-left: 30%;*/\n    color: white;\n}\n\n.footerLinks ul li a {\n    color: white;\n    font-size: 15px;\n    text-decoration: unset;\n}\n\n.footerLinks ul li {\n    list-style: none;\n}\n\n.copyright {\n    display: block;\n}\n\n.copyright p {\n    font-size: 15px;\n    padding: 0px;\n    margin: auto;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {}\n\n\n/*\nfor large screens*/\n\n@media (min-width: 768px) {}\n\n\n/*\n@media (min-height: 10px) {\n.page-footer {\nmargin: 0px;\ntext-align: center;\n}\n}\n@media (min-height: 1000px) {\n.page-footer {\nmargin: 0px;\nposition: absolute;\nbottom: 0px;\ntext-align: center;\nwidth: 100%;\n}\n}*/"

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = ".mat-card{\n    padding: 0px;\n}\n\nh1,\nh2 {\n  font-weight: 500;\n  margin: 0px 0px 5px 0px;\n}\n\nh1 {\n  font-size: 24px;\n}\n\nh2 {\n  font-size: 16px;\n}\n\np {\n  margin: 0px;\n}\n.cardColor{\n      background-color: #5F9EA0;\n\n}\n.profile-card {\n  background: #5F9EA0;\n  width: 56px;\n  height: 700px;\n  /*position: absolute;*/\n  left: 50%;\n  top: 50%;\n  z-index: 2;\n  overflow: hidden;\n  opacity: 0;\n  margin-top: 70px;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);\n  -webkit-animation: init 0s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 0s 0s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 0s 0s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0s 0s cubic-bezier(0.86, 0, 0.07, 1) forwards;\n          animation: init 0s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards, moveDown 0s 0s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards, moveUp 0s 0s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards, materia 0s 0s cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n\n.profile-card md-card-title {\n  width: 179px;\n  height: 100px;\n  padding: 40px 20px 30px 20px;\n  display: inline-block;\n  float: left;\n  border-right: 2px dashed #EEEEEE;\n  background: #FFF0F5;\n  color: #000000;\n  margin-top: 50px;\n  opacity: 0;\n  text-align: center;\n  -webkit-animation: moveIn 1s 3.1s ease forwards;\n  animation: moveIn 1s 3.1s ease forwards;\n}\n\n.profile-card md-card-title h1 {\n  color: #FF5722;\n}\n\n.profile-card md-card-title a {\n  display: inline-block;\n  text-align: center;\n  margin: 25px 30px;\n}\n\n.profile-card md-card-title a:after {\n  content: \"\";\n  bottom: 3px;\n  right: 3px;\n  width: 20px;\n  height: 20px;\n  border: 4px solid #FFFFFF;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  background: -webkit-linear-gradient(top, #2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);\n  background: -webkit-linear-gradient(#2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);\n  background: linear-gradient(#2196F3 0%, #2196F3 50%, #FFC107 50%, #FFC107 100%);\n  border-radius: 50%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-animation: scaleIn 0.3s 3.5s ease forwards;\n  animation: scaleIn 0.3s 3.5s ease forwards;\n}\n\n.profile-card md-card-title a > img {\n  width: 200px;\n  max-width: 100%;\n  border-radius: 50%;\n  -webkit-transition: -webkit-box-shadow 0.3s ease;\n  -webkit-transition: box-shadow 0.3s ease;\n  transition: box-shadow 0.3s ease;\n  box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.06);\n}\n\n.profile-card md-card-title a:hover > img {\n  box-shadow: 0px 0px 0px 12px rgba(0, 0, 0, 0.1);\n}\n\n.profile-card .profile-bio {\n  width: 175px;\n  height: 400px;\n  display: inline-block;\n  float: right;\n  padding: 50px 20px 30px 20px;\n  background: #FFFFFF;\n  color: #333333;\n  margin-top: 50px;\n  text-align: center;\n  opacity: 0;\n  -webkit-animation: moveIn 1s 3.1s ease forwards;\n  animation: moveIn 1s 3.1s ease forwards;\n}\n\n.profile-social-links {\n  width: 218px;\n  display: inline-block;\n  float: right;\n  margin: 0px;\n  padding: 15px 20px;\n  background: #FFFFFF;\n  margin-top: 50px;\n  text-align: center;\n  opacity: 0;\n  box-sizing: border-box;\n  -webkit-animation: moveIn 1s 3.1s ease forwards;\n  animation: moveIn 1s 3.1s ease forwards;\n}\n\n@-webkit-keyframes init {\n  0% {\n    width: 0px;\n    height: 0px;\n  }\n  100% {\n    width: 56px;\n    height: 56px;\n    margin-top: 0px;\n    opacity: 1;\n  }\n}\n\n@keyframes init {\n  0% {\n    width: 0px;\n    height: 0px;\n  }\n  100% {\n    width: 56px;\n    height: 56px;\n    margin-top: 0px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes puff {\n  0% {\n    top: 100%;\n    height: 0px;\n    padding: 0px;\n  }\n  100% {\n    top: 50%;\n    height: 100%;\n    padding: 0px 100%;\n  }\n}\n\n@keyframes puff {\n  0% {\n    top: 100%;\n    height: 0px;\n    padding: 0px;\n  }\n  100% {\n    top: 50%;\n    height: 100%;\n    padding: 0px 100%;\n  }\n}\n\n@-webkit-keyframes borderRadius {\n  0% {\n    -webkit-border-radius: 50%;\n  }\n  100% {\n    -webkit-border-radius: 0px;\n  }\n}\n\n@keyframes borderRadius {\n  0% {\n    -webkit-border-radius: 50%;\n  }\n  100% {\n    border-radius: 0px;\n  }\n}\n\n@-webkit-keyframes moveDown {\n  0% {\n    top: 50%;\n  }\n  50% {\n    top: 40%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n\n@keyframes moveDown {\n  0% {\n    top: 50%;\n  }\n  50% {\n    top: 40%;\n  }\n  100% {\n    top: 100%;\n  }\n}\n\n\n@-webkit-keyframes moveUp {\n  0% {\n    background: #FFB300;\n    top: 100%;\n  }\n  50% {\n    top: 40%;\n  }\n  100% {\n    top: 50%;\n    background: #E0E0E0;\n  }\n}\n\n\n@keyframes moveUp {\n  0% {\n    background: #FFB300;\n    top: 100%;\n  }\n  50% {\n    top: 40%;\n  }\n  100% {\n    top: 50%;\n    background: #E0E0E0;\n  }\n}\n\n@-webkit-keyframes materia {\n  0% {\n    background: #E0E0E0;\n  }\n  50% {\n    -webkit-border-radius: 4px;\n  }\n  100% {\n    width: 440px;\n    height: 280px;\n    background: #FFFFFF;\n    -webkit-border-radius: 4px;\n  }\n}\n\n@keyframes materia {\n  0% {\n    background: #E0E0E0;\n  }\n  50% {\n    border-radius: 4px;\n  }\n  100% {\n    height: 280px;\n    background: #FFFFFF;\n    border-radius: 4px;\n  }\n}\n\n@-webkit-keyframes moveIn {\n  0% {\n    margin-top: 50px;\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    margin-top: -20px;\n  }\n}\n\n@keyframes moveIn {\n  0% {\n    margin-top: 50px;\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    margin-top: -20px;\n  }\n}\n\n@-webkit-keyframes scaleIn {\n  0% {\n    -webkit-transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes scaleIn {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n.right{\n    float: right\n}\n\n@-webkit-keyframes ripple {\n  0% {\n    -webkit-transform: scale3d(0, 0, 0);\n            transform: scale3d(0, 0, 0);\n  }\n  50%,\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes ripple {\n  0% {\n    -webkit-transform: scale3d(0, 0, 0);\n            transform: scale3d(0, 0, 0);\n  }\n  50%,\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@media screen and (min-aspect-ratio: 4/3) {\n  body {\n    background-size: cover;\n  }\n  body:before {\n    width: 0px;\n  }\n  @-webkit-keyframes puff {\n    0% {\n      top: 100%;\n      width: 0px;\n      padding-bottom: 0px;\n    }\n    100% {\n      top: 50%;\n      width: 100%;\n      padding-bottom: 100%;\n    }\n  }\n  @keyframes puff {\n    0% {\n      top: 100%;\n      width: 0px;\n      padding-bottom: 0px;\n    }\n    100% {\n      top: 50%;\n      width: 100%;\n      padding-bottom: 100%;\n    }\n  }\n}\n\n@media screen and (min-height: 480px) {\n  .profile-card md-card-title {\n    width: auto;\n    height: auto;\n    padding: 30px 20px;\n    display: block;\n    float: none;\n    border-right: none;\n  }\n  .profile-card .profile-bio {\n    width: auto;\n    height: auto;\n    padding: 15px 20px 30px 20px;\n    display: block;\n    float: none;\n  }\n \n  @-webkit-keyframes materia {\n    0% {\n      background: #E0E0E0;\n    }\n    50% {\n      -webkit-border-radius: 4px;\n    }\n    100% {\n      width: 280px;\n      height: 440px;\n      background: #FFFFFF;\n      -webkit-border-radius: 4px;\n    }\n  }\n  @keyframes materia {\n    0% {\n      background: #E0E0E0;\n    }\n    50% {\n      border-radius: 4px;\n    }\n    100% {\n      width: 300px;\n      height: 550px;\n      background: #FFFFFF;\n      border-radius: 4px;\n    }\n  }\n}\n\n.fli{\n     -webkit-transform: rotateY(180deg);\n   transform: rotateY(180deg);\n     background: #FFB300;\n\n}\n\n.flip {\n \n   -webkit-transform: rotateY(180deg);\n   transform: rotateY(180deg);\n   -webkit-transition: 1.6s;\n   -webkit-transform-style: preserve-3d;\n   -moz-transition: 1.6s;\n   -moz-transform-style: preserve-3d;\n   -o-transition: 1.6s;\n   -o-transform-style: preserve-3d;\n   transition: 1.6s;\n   transform-style: preserve-3d;\n   position: relative;\n   top:500px;\n}\n\n.unflip {\n   -webkit-perspective: 1000;\n   -o-perspective: 1000;\n   perspective: 1000;\n   -webkit-transform: rotateY(360deg);\n   transform: rotateY(360deg);\n   -webkit-transition: 1.6s;\n   -webkit-transform-style: preserve-3d;\n   -moz-transition: 1.6s;\n   -moz-transform-style: preserve-3d;\n   -o-transition: 1.6s;\n   -o-transform-style: preserve-3d;\n   transition: 1.6s;\n   transform-style: preserve-3d;\n   position: relative;\n   top:500px;\n}"

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = "md-card {\n    width: 500px;\n}\nbody{\n    -webkit-box-align: none;\n        -ms-flex-align: none;\n            align-items: none;\n}\n\n\n.formIcons {\n    padding-bottom: 30px;\n    color: gray;\n}\n\nform {\n    font-size: 17px;\n}\n\nbutton {\n    font-size: 15px;\n}\n\nmd-card-title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 25px;\n}\n\n.full-width {\n    width: 100%;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.errorStyle {\n    position: absolute;\n    font-size: 12px;\n    -webkit-transition: all .7s;\n    transition: all .7s;\n    color: #F44336;\n}\n\n.googleBtn {\n    background-color: #F44336;\n    color: white;\n}\n\n.fbBtn {\n    background-color: #3f51b5;\n    color: white;\n}\n\n\n/*for smaller screens*/\n\n@media (min-width: 10px) {\n    md-card {\n        top: 56px;\n    }\n}\n\n@media (min-width: 370px) {}\n\n\n/*for Medium screens*/\n\n@media (min-width: 480px) {\n    md-card {\n        top: 0px;\n    }\n}\n\n\n/*for large screens*/\n\n@media (min-width: 768px) {\n    md-card {\n        top: 0px;\n    }\n}"

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = "<!--routing outlet-->\n<!--<router-outlet></router-outlet>-->\n<placement-component></placement-component>"

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = (function () {
    //   public data2 :LoginComponent  ;
    function EmailService(http) {
        this.http = http;
        this.url = "";
    }
    EmailService.prototype.sendEmail = function (mailObj) {
        this.url = '/auth/register-email';
        return this.http.post(this.url, mailObj).map(function (response) { return response.json(); });
    };
    ;
    EmailService.prototype.sendResetPasswordEmail = function (mailObj) {
        this.url = '/auth/verify-reset-email';
        return this.http.post(this.url, mailObj).map(function (response) { return response.json(); });
    };
    ;
    EmailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], EmailService);
    return EmailService;
    var _a;
}());
//# sourceMappingURL=/home/gowtham/Desktop/Projectgit_final/Project_final/samarthyaPlatform/webclient/placement/src/email.service.js.map

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(541);


/***/ })

},[893]);
//# sourceMappingURL=main.bundle.map