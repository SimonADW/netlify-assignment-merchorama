/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/formValidation.js":
/*!**********************************!*\
  !*** ./src/js/formValidation.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearErrorsOnInputChange: function() { return /* binding */ clearErrorsOnInputChange; },\n/* harmony export */   validateForm: function() { return /* binding */ validateForm; }\n/* harmony export */ });\n// export const validateSignUpForm = (fullNameInput, emailInput, passwordInput, confirmPasswordInput, fullNameError, emailError, passwordError, confirmPasswordError)=> {\n// \tlet errors = {\n// \t\terrorStatus: false,\n// \t\tfullNameError: \"\",\n// \t\temailError: \"\",\n// \t}\n\n// \tif(!fullNameInput && !emailInput && !passwordInput && !confirmPasswordInput) {\n// \t\terrors = {\n// \t\t\terrorStatus: true,\n// \t\t\tfullNameError: \"Please enter your full name ⚠️\",\n// \t\t\temailError: \"Please enter a valid email adress\",\n// \t\t\tpasswordError: \"Please enter a password\",\n// \t\t\tconfirmPasswordError: \"Please enter a password\",\n// \t\t}\n\n// \t\tfullNameError.style.visibility = \"visible\";\n// \t\temailError.style.visibility = \"visible\";\n// \t\tpasswordError.style.visibility = \"visible\";\n// \t\tconfirmPasswordError.style.visibility = \"visible\";\n\n// \t\tfullNameError.textContent = errors.fullNameError;\n// \t\temailError.textContent = errors.emailError;\n// \t\tpasswordError.textContent = errors.passwordError;\n// \t\tconfirmPasswordError.textContent = errors.confirmPasswordError;\n// \t} else if(!fullNameInput) {\n// \t\terrors = {\n// \t\t\terrorStatus: true,\n// \t\t\tfullNameError: \"Please enter your full name ⚠️\",\n// \t\t\temailError: \"\",\n// \t\t}\n// \t\tfullNameError.style.visibility = \"visible\";\n// \t\temailError.style.visibility = \"hidden\";\n// \t\tfullNameError.textContent = errors.fullNameError;\n// \t\temailError.textContent = errors.emailError;\n// \t} else if(!emailInput) {\n// \t\terrors = {\n// \t\t\terrorStatus: true,\n// \t\t\tfullNameError: \"\",\n// \t\t\temailError: \"Please enter a valid email adress\",\n// \t\t}\n// \t\tfullNameError.style.visibility = \"hidden\";\n// \t\temailError.style.visibility = \"visible\";\n// \t\tfullNameError.textContent = errors.fullNameError;\n// \t\temailError.textContent = errors.emailError;\t\t\n// \t} else {\n// \t\terrors = {\n// \t\t\terrorStatus: false,\n// \t\t\tfullNameError: \"\",\n// \t\t\temailError: \"\",\n// \t\t}\n// \t\tfullNameError.style.visibility = \"hidden\";\n// \t\temailError.style.visibility = \"hidden\";\n// \t\tfullNameError.textContent = errors.fullNameError;\n// \t\temailError.textContent = errors.dateError;\n// \t}\n// \tconst formErrorStatus = ()=> {\n// \t\treturn errors.errorStatus;\n// \t}\n\n// \treturn {formErrorStatus};\n// };\n\nconst validateForm = formElementClassName => {\n  const formElement = document.querySelector(`.${formElementClassName}`);\n  const formInputs = document.querySelectorAll(`.${formElementClassName} input`);\n  let errors = {\n    errorStatus: false,\n    fullnameError: \"Please enter your full name ⚠️\",\n    emailError: \"Please enter a valid email adress\",\n    passwordError: \"Please enter a password\",\n    confirmPasswordError: \"Please enter a password\",\n    passwordMismatchError: \"Password are not matching\"\n  };\n  formInputs.forEach(input => {\n    // Find error element corresponding to the input\n    const errorElement = document.querySelector(`.${formElementClassName} .${input.name}Error`);\n    const signUpPasswordElement = document.querySelector(\".sign-up__password\");\n    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\n    errorElement.textContent = \"\";\n    if (!input.value) {\n      errors.errorStatus = true;\n      if (errorElement) {\n        errorElement.style.visibility = \"visible\";\n        errorElement.textContent = errors[`${input.name}Error`];\n      }\n      // Check password match\n    } else if (input.name === \"confirmPassword\" && input.value !== signUpPasswordElement.value) {\n      errors.errorStatus = true;\n      if (errorElement) {\n        errorElement.style.visibility = \"visible\";\n        errorElement.textContent = errors.passwordMismatchError;\n      }\n      // Check email-format\n    } else if (input.name === \"email\" && !emailRegex.test(input.value.trim())) {\n      errors.errorStatus = true;\n      if (errorElement) {\n        errorElement.style.visibility = \"visible\";\n        errorElement.textContent = errors.emailError;\n      }\n    }\n  });\n  !errors.errorStatus && formElement.reset();\n  return !errors.errorStatus;\n};\nconst clearErrorsOnInputChange = formElementClassName => {\n  const formElement = document.querySelectorAll(`.${formElementClassName} input`);\n  formElement.forEach(input => {\n    input.addEventListener(\"keyup\", () => {\n      console.log(\"changed\");\n      input.nextSibling.nextSibling.textContent = \"\";\n    });\n  });\n};\n\n//# sourceURL=webpack://4-assignment-final/./src/js/formValidation.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formValidation */ \"./src/js/formValidation.js\");\n\n\n// --------- LANDING PAGE (INDEX.HTML) ----------\n\nconst homeMainSection = document.querySelector(\".home__main-section\");\n\n// DISPLAY INDEX MENU\nconst homeMenuButton = document.querySelector(\".header__menu-button\");\nconst homeMenuDrawer = document.querySelector(\".menudrawer\");\nconst homeDrawerCloseButton = document.querySelector(\".menudrawer__close\");\nhomeMenuButton.addEventListener(\"click\", () => {\n  homeMenuDrawer.style.display = \"flex\";\n});\nhomeDrawerCloseButton.addEventListener(\"click\", () => {\n  homeMenuDrawer.style.display = \"none\";\n});\n\n// DISPLAY SIGN IN FORM\nconst signInSection = document.querySelector(\".sign-in\");\nconst signInSectionClose = document.querySelector(\".sign-in__close\");\nconst homeSignInLink = document.querySelector(\".home-sign-in-link\");\nconst menuSignInLink = document.querySelector(\".menu-sign-in-link\");\nconst signInButton = document.querySelector(\".sign-in__button\");\nconst signUpButton = document.querySelector(\".sign-up__button\");\nhomeSignInLink.addEventListener(\"click\", () => {\n  signInSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n});\nmenuSignInLink.addEventListener(\"click\", () => {\n  signInSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n  homeMenuDrawer.style.display = \"none\";\n  signUpSection.style.display = \"none\";\n});\nsignInSectionClose.addEventListener(\"click\", () => {\n  signInSection.style.display = \"none\";\n  homeMainSection.style.display = \"flex\";\n});\nsignInButton.addEventListener(\"click\", event => {\n  event.preventDefault();\n  // @TODO:  If authorized\n  if ((0,_formValidation__WEBPACK_IMPORTED_MODULE_0__.validateForm)(\"sign-in__form\")) {\n    window.location.href = \"shop.html\";\n  }\n});\n(0,_formValidation__WEBPACK_IMPORTED_MODULE_0__.clearErrorsOnInputChange)(\"sign-in__form\");\n\n// DISPLAY SIGN UP FORM - CREATE ACCOUNT FORM\nconst signUpSection = document.querySelector(\".sign-up\");\nconst signUpSectionClose = document.querySelector(\".sign-up__close\");\nconst homeSignUpLink = document.querySelector(\".home-sign-up-link\");\nconst menuSignUpLink = document.querySelector(\".menu-sign-up-link\");\nhomeSignUpLink.addEventListener(\"click\", () => {\n  signUpSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n});\nmenuSignUpLink.addEventListener(\"click\", () => {\n  signUpSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n  homeMenuDrawer.style.display = \"none\";\n  signInSection.style.display = \"none\";\n});\nsignUpSectionClose.addEventListener(\"click\", () => {\n  signUpSection.style.display = \"none\";\n  homeMainSection.style.display = \"flex\";\n});\nsignUpButton.addEventListener(\"click\", event => {\n  event.preventDefault();\n  // @TODO:  If authorized\n  if ((0,_formValidation__WEBPACK_IMPORTED_MODULE_0__.validateForm)(\"sign-up__form\")) {\n    window.location.href = \"shop.html\";\n  }\n});\n(0,_formValidation__WEBPACK_IMPORTED_MODULE_0__.clearErrorsOnInputChange)(\"sign-up__form\");\n\n//# sourceURL=webpack://4-assignment-final/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;