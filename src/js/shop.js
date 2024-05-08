
const liveWatch = document.querySelector(".live-watch");
const shopFrontSection = document.querySelector(".shop__front-section");
const shopMerchListSection = document.querySelector(".shop__merch-list-container");

let selectedCategory = "tees";

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
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	selectedCategory = "tees"
})

shopMenuHoodiesLink.addEventListener("click", () => {
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	selectedCategory = "hoodies"
});

// SHOP FRONT LINKS

const shopFrontTeesLink = document.querySelector(".shop__tees-link");
const shopFrontHoodiesLink = document.querySelector(".shop__hoodies-link");

shopFrontTeesLink.addEventListener("click", (e) => {
	e.preventDefault();
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	selectedCategory = "tees"
})

shopFrontHoodiesLink.addEventListener("click", (e) => {
	e.preventDefault();
	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";
	selectedCategory = "hoodies"
});

// DISPLAY CART DRAWER

headerCartButton = document.querySelector(".header__cart-button");
cartDrawer = document.querySelector(".shop__cart-drawer");
cartDrawerClose = document.querySelector(".cart-drawer__close");

headerCartButton.addEventListener("click", ()=> {
	cartDrawer.style.display = "flex";
})

cartDrawerClose.addEventListener("click", ()=> {
	cartDrawer.style.display = "none";
})