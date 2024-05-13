import { renderList } from "./renderList.js";
import { sortList } from "./sortList.js";
import products from "../assets/data/products.js";
import { renderFilterButtons } from "./renderFilters.js";


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
	renderList(products.filter((product)=> product.type.toString() === selectedCategory.toString()));
})

shopMenuHoodiesLink.addEventListener("click", () => {
	selectedCategory = "hoodie"
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	renderList(products.filter((product)=> product.type.toString() === selectedCategory.toString()));
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
	renderList(products.filter((product)=> product.type.toString() === selectedCategory.toString()));
})

shopFrontHoodiesLink.addEventListener("click", (e) => {
	e.preventDefault();
	selectedCategory = "hoodie"
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	renderList(products.filter((product)=> product.type.toString() === selectedCategory.toString()));
});

// DISPLAY CART DRAWER

const headerCartButton = document.querySelector(".header__cart-button");
const cartDrawer = document.querySelector(".shop__cart-drawer");
const cartDrawerClose = document.querySelector(".cart-drawer__close");

headerCartButton.addEventListener("click", ()=> {
	cartDrawer.style.display = "flex";
})

cartDrawerClose.addEventListener("click", ()=> {
	cartDrawer.style.display = "none";
})

// RENDER LIST OF PRODUCT


// render whit selected category	
	



// RENDER FILTERBUTTONS
