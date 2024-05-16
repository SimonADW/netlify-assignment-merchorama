import products from "../assets/data/products.js";
import { renderList, renderFilterButtons } from "./rendering.js";

// --------- SHOP PAGE (SHOP.HTML) ---------------------------------------

const liveWatch = document.querySelector(".live-watch");
const shopFrontSection = document.querySelector(".shop__front-section");
const shopMerchListSection = document.querySelector(".shop__merch-list-container");

export let selectedCategory = "hoodie";

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

const itemPage = document.querySelector(".shop__item-page");
const listContainer = document.querySelector(".shop__merch-list__items");
const listInputWrapper = document.querySelector(".shop__merch-input-wrapper");

shopMenuTeesLink.addEventListener("click", () => {
	selectedCategory = "t-shirt"

	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";

	itemPage.style.display = "none";
	listContainer.style.display = "flex";
	listInputWrapper.style.display = "flex";

	renderList(products);	
})

shopMenuHoodiesLink.addEventListener("click", () => {
	selectedCategory = "hoodie"
	
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";

	itemPage.style.display = "none";
	listContainer.style.display = "flex";
	listInputWrapper.style.display = "flex";

	renderList(products);
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
	renderList(products);
})

shopFrontHoodiesLink.addEventListener("click", (e) => {
	e.preventDefault();
	selectedCategory = "hoodie"
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	renderList(products);
});

// DISPLAY FILTER DRAWER
const filterMobileButton = document.querySelector(".shop__merch-list-filter-button");
const filterMobileDrawer = document.querySelector(".shop__merch-list__filter-drawer");
const filterMobileDrawerClose = document.querySelector(".item__close");
filterMobileButton.addEventListener("click", ()=> {	
	filterMobileDrawer.style.display = "flex";	
})

filterMobileDrawerClose.addEventListener("click", ()=> {
	filterMobileDrawer.style.display = "none";
})

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

