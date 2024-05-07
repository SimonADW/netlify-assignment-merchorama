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
/***/ (function() {

eval("const homeMainSection = document.querySelector(\".home__main-section\");\n\n// DISPLAY INDEX MENU\nconst homeMenuButton = document.querySelector(\".header__menu-button\");\nconst homeMenuDrawer = document.querySelector(\".menudrawer\");\nconst homeDrawerCloseButton = document.querySelector(\".menudrawer__close\");\nhomeMenuButton.addEventListener(\"click\", () => {\n  homeMenuDrawer.style.display = \"flex\";\n});\nhomeDrawerCloseButton.addEventListener(\"click\", () => {\n  homeMenuDrawer.style.display = \"none\";\n});\n\n// DISPLAY SIGN IN FORM\nconst signInSection = document.querySelector(\".sign-in\");\nconst signInSectionClose = document.querySelector(\".sign-in__close\");\nconst homeSignInLink = document.querySelector(\".home-sign-in-link\");\nconst menuSignInLink = document.querySelector(\".menu-sign-in-link\");\nhomeSignInLink.addEventListener(\"click\", () => {\n  signInSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n});\nmenuSignInLink.addEventListener(\"click\", () => {\n  signInSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n  homeMenuDrawer.style.display = \"none\";\n  signUpSection.style.display = \"none\";\n});\nsignInSectionClose.addEventListener(\"click\", () => {\n  signInSection.style.display = \"none\";\n  homeMainSection.style.display = \"flex\";\n});\n\n// DISPLAY SIGN UP FORM - CREATE ACCOUNT FORM\nconst signUpSection = document.querySelector(\".sign-up\");\nconst signUpSectionClose = document.querySelector(\".sign-up__close\");\nconst homeSignUpLink = document.querySelector(\".home-sign-up-link\");\nconst menuSignUpLink = document.querySelector(\".menu-sign-up-link\");\nhomeSignUpLink.addEventListener(\"click\", () => {\n  signUpSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n});\nmenuSignUpLink.addEventListener(\"click\", () => {\n  signUpSection.style.display = \"flex\";\n  homeMainSection.style.display = \"none\";\n  homeMenuDrawer.style.display = \"none\";\n  signInSection.style.display = \"none\";\n});\nsignUpSectionClose.addEventListener(\"click\", () => {\n  signUpSection.style.display = \"none\";\n  homeMainSection.style.display = \"flex\";\n});\n\n//# sourceURL=webpack://4-assignment-final/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"]();
/******/ 	
/******/ })()
;