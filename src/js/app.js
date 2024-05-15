import products from "../assets/data/products.js";
import { renderList, renderFilterButtons, sortList } from "./rendering.js";


// --------- LANDING PAGE (INDEX.HTML) ----------


// const homeMainSection = document.querySelector(".home__main-section");

// // DISPLAY INDEX MENU
// const homeMenuButton = document.querySelector(".header__menu-button");
// const homeMenuDrawer = document.querySelector(".menudrawer");
// const homeDrawerCloseButton = document.querySelector(".menudrawer__close");

// homeMenuButton.addEventListener("click", () => {
// 	homeMenuDrawer.style.display = "flex";
// })

// homeDrawerCloseButton.addEventListener("click", () => {
// 	homeMenuDrawer.style.display = "none";
// })

// // DISPLAY SIGN IN FORM
// const signInSection = document.querySelector(".sign-in");
// const signInSectionClose = document.querySelector(".sign-in__close");
// const homeSignInLink = document.querySelector(".home-sign-in-link");
// const menuSignInLink = document.querySelector(".menu-sign-in-link");

// homeSignInLink.addEventListener("click", () => {
// 	signInSection.style.display = "flex";
// 	homeMainSection.style.display = "none";
// })

// menuSignInLink.addEventListener("click", () => {
// 	signInSection.style.display = "flex";
// 	homeMainSection.style.display = "none";
// 	homeMenuDrawer.style.display = "none";
// 	signUpSection.style.display = "none";

// })

// signInSectionClose.addEventListener("click", () => {
// 	signInSection.style.display = "none";
// 	homeMainSection.style.display = "flex";
// })

// // DISPLAY SIGN UP FORM - CREATE ACCOUNT FORM
// const signUpSection = document.querySelector(".sign-up");
// const signUpSectionClose = document.querySelector(".sign-up__close");
// const homeSignUpLink = document.querySelector(".home-sign-up-link");
// const menuSignUpLink = document.querySelector(".menu-sign-up-link");

// homeSignUpLink.addEventListener("click", () => {
// 	signUpSection.style.display = "flex";
// 	homeMainSection.style.display = "none";
// })

// menuSignUpLink.addEventListener("click", () => {
// 	signUpSection.style.display = "flex";
// 	homeMainSection.style.display = "none";
// 	homeMenuDrawer.style.display = "none";
// 	signInSection.style.display = "none";
// })

// signUpSectionClose.addEventListener("click", () => {
// 	signUpSection.style.display = "none";
// 	homeMainSection.style.display = "flex";
// })


// --------- SHOP PAGE (SHOP.HTML) ---------------------------------------

const liveWatch = document.querySelector(".live-watch");
const shopFrontSection = document.querySelector(".shop__front-section");
const shopMerchListSection = document.querySelector(".shop__merch-list-container");

let selectedCategory = "hoodie";

// DISPLAY SHOP MENU

const shopMenuButton = document.querySelector(".header__menu-button");
const shopMenuDrawer = document.querySelector(".menudrawer");
const shopDrawerCloseButton = document.querySelector(".menudrawer__close");

shopMenuButton.addEventListener("click", () => {
	shopMenuDrawer.style.display = "flex";
});

shopDrawerCloseButton.addEventListener("click", () => {
	shopMenuDrawer.style.display = "none";
});

// MENU LINKS

const shopMenuTeesLink = document.querySelector(".menu-tees-link");
const shopMenuHoodiesLink = document.querySelector(".menu-hoodies-link");


shopMenuTeesLink.addEventListener("click", () => {
	selectedCategory = "t-shirt"
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	renderList(products.filter((product) => product.type.toString() === selectedCategory.toString()));
	console.log("shopmenutees");
})

shopMenuHoodiesLink.addEventListener("click", () => {
	selectedCategory = "hoodie"
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	renderList(products.filter((product) => product.type.toString() === selectedCategory.toString()));
});

// SHOP FRONT LINKS

const shopFrontTeesLink = document.querySelector(".shop__tees-link");
const shopFrontHoodiesLink = document.querySelector(".shop__hoodies-link");

shopFrontTeesLink.addEventListener("click", (e) => {
	e.preventDefault();
	selectedCategory = "t-shirt"
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	renderList(products.filter((product) => product.type.toString() === selectedCategory.toString()));
})

shopFrontHoodiesLink.addEventListener("click", (e) => {
	e.preventDefault();
	selectedCategory = "hoodie"
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	renderList(products.filter((product) => product.type.toString() === selectedCategory.toString()));
});

// DISPLAY CART DRAWER

const headerCartButton = document.querySelector(".header__cart-button");
const cartDrawer = document.querySelector(".shop__cart-drawer");
const cartDrawerClose = document.querySelector(".cart-drawer__close");

headerCartButton.addEventListener("click", () => {
	cartDrawer.style.display = "flex";
})

cartDrawerClose.addEventListener("click", () => {
	cartDrawer.style.display = "none";
})


// RENDER SHOP ELEMENTS ---------–––––---------------------------
renderFilterButtons(products);

