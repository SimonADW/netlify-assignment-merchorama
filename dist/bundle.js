/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/js/home.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop */ \"./src/js/shop.js\");\n/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shop__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://4-assignment-final/./src/js/app.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ (function() {

eval("const homeMainSection = document.querySelector(\".home__main-section\");\n\n// DISPLAY INDEX MENU\nconst homeMenuButton = document.querySelector(\".header__menu-button\");\nconst homeMenuDrawer = document.querySelector(\".menudrawer\");\nconst homeDrawerCloseButton = document.querySelector(\".menudrawer__close\");\nhomeMenuButton.addEventListener(\"click\", () => {\n  homeMenuDrawer.style.display = \"flex\";\n});\nhomeDrawerCloseButton.addEventListener(\"click\", () => {\n  homeMenuDrawer.style.display = \"none\";\n});\n\n// DISPLAY SIGN IN FORM\nconst signInSection = document.querySelector(\".sign-in\");\nconst signInSectionClose = document.querySelector(\".sign-in__close\");\nconst homeSignInLink = document.querySelector(\".home-sign-in-link\");\nconst menuSignInLink = document.querySelector(\".menu-sign-in-link\");\nhomeSignInLink.addEventListener(\"click\", () => {\n  signInSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n});\nmenuSignInLink.addEventListener(\"click\", () => {\n  signInSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n  homeMenuDrawer.style.display = \"none\";\n  signUpSection.style.display = \"none\";\n});\nsignInSectionClose.addEventListener(\"click\", () => {\n  signInSection.style.display = \"none\";\n  homeMainSection.style.display = \"flex\";\n});\n\n// DISPLAY SIGN UP FORM - CREATE ACCOUNT FORM\nconst signUpSection = document.querySelector(\".sign-up\");\nconst signUpSectionClose = document.querySelector(\".sign-up__close\");\nconst homeSignUpLink = document.querySelector(\".home-sign-up-link\");\nconst menuSignUpLink = document.querySelector(\".menu-sign-up-link\");\nhomeSignUpLink.addEventListener(\"click\", () => {\n  signUpSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n});\nmenuSignUpLink.addEventListener(\"click\", () => {\n  signUpSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n  homeMenuDrawer.style.display = \"none\";\n  signInSection.style.display = \"none\";\n});\nsignUpSectionClose.addEventListener(\"click\", () => {\n  signUpSection.style.display = \"none\";\n  homeMainSection.style.display = \"flex\";\n});\n\n//# sourceURL=webpack://4-assignment-final/./src/js/home.js?");

/***/ }),

/***/ "./src/js/shop.js":
/*!************************!*\
  !*** ./src/js/shop.js ***!
  \************************/
/***/ (function() {

eval("const liveWatch = document.querySelector(\".live-watch\");\nconst shopFrontSection = document.querySelector(\".shop__front-section\");\nconst shopMerchListSection = document.querySelector(\".shop__merch-list-container\");\nlet selectedCategory = \"tees\";\n\n// DISPLAY SHOP MENU\n\nconst shopMenuButton = document.querySelector(\".header__menu-button\");\nconst shopMenuDrawer = document.querySelector(\".menudrawer\");\nconst shopDrawerCloseButton = document.querySelector(\".menudrawer__close\");\nshopMenuButton.addEventListener(\"click\", () => {\n  shopMenuDrawer.style.display = \"flex\";\n});\nshopDrawerCloseButton.addEventListener(\"click\", () => {\n  shopMenuDrawer.style.display = \"none\";\n});\n\n// MENU LINKS\n\nconst shopMenuTeesLink = document.querySelector(\".menu-tees-link\");\nconst shopMenuHoodiesLink = document.querySelector(\".menu-hoodies-link\");\nshopMenuTeesLink.addEventListener(\"click\", () => {\n  shopFrontSection.style.display = \"none\";\n  shopMerchListSection.style.display = \"flex\";\n  shopMenuDrawer.style.display = \"none\";\n  selectedCategory = \"tees\";\n});\nshopMenuHoodiesLink.addEventListener(\"click\", () => {\n  shopFrontSection.style.display = \"none\";\n  shopMerchListSection.style.display = \"flex\";\n  shopMenuDrawer.style.display = \"none\";\n  selectedCategory = \"hoodies\";\n});\n\n// SHOP FRONT LINKS\n\nconst shopFrontTeesLink = document.querySelector(\".shop__tees-link\");\nconst shopFrontHoodiesLink = document.querySelector(\".shop__hoodies-link\");\nshopFrontTeesLink.addEventListener(\"click\", e => {\n  e.preventDefault();\n  shopFrontSection.style.display = \"none\";\n  shopMerchListSection.style.display = \"flex\";\n  shopMenuDrawer.style.display = \"none\";\n  selectedCategory = \"tees\";\n});\nshopFrontHoodiesLink.addEventListener(\"click\", e => {\n  e.preventDefault();\n  shopFrontSection.style.display = \"none\";\n  shopMerchListSection.style.display = \"flex\";\n  shopMenuDrawer.style.display = \"none\";\n  selectedCategory = \"hoodies\";\n});\n\n// DISPLAY CART DRAWER\n\nheaderCartButton = document.querySelector(\".header__cart-button\");\ncartDrawer = document.querySelector(\".shop__cart-drawer\");\ncartDrawerClose = document.querySelector(\".cart-drawer__close\");\nheaderCartButton.addEventListener(\"click\", () => {\n  cartDrawer.style.display = \"flex\";\n});\ncartDrawerClose.addEventListener(\"click\", () => {\n  cartDrawer.style.display = \"none\";\n});\n\n//# sourceURL=webpack://4-assignment-final/./src/js/shop.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;