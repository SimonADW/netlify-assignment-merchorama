import { firebaseConfig } from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs  } from "firebase/firestore";
import { renderList, renderFilterButtons, renderCartDrawer } from "./rendering.js";
// import { signOutUser } from "./index.js";

import products from "../assets/data/products.js";
import { cartContent } from "./cartCalculations.js";

// ----------- FIREBASE AUTH SIGN OUT ----------------------------------------
// TODO: Fix signout and auth on shop page load

// const signOutButton = document.querySelector(".menu-sign-out-button");
// signOutButton.addEventListener("click", ()=> {
// 	signOutUser();
// });




export const signOutButton = document.querySelector(".menu-sign-out-button");

// ----------- FIREBASE FIRESTORE ----------------------------------------
// TODO: Set firebase to production mode
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

const errorMessageCard = document.querySelector(".error-card");
const errorMessageContent = document.querySelector(".error-card p");
const errorMessageDismissButton = document.querySelector(".error-card button");

const setProductsListToDatabase = async ()=> {
	try {
		await products.forEach((product)=> {
			addDoc(collection(database, "merch-products"), product)
		})
	} catch (error) {
		console.log(error.message);
	}
}

// setProductsListToDatabase();  Done once to store in firestore

export const getProductsFromDatabase = async () => {
    try {
        const fetchedDocs = await getDocs(collection(database, "merch-products"))
		fetchedDocs.forEach((doc)=> {
			products.push(doc.data());
		})
		renderFilterButtons(products);
    } catch (error) {
		// @TODO: user feedback
		errorMessageCard.style.display = "block";
		errorMessageContent.textContent = `Something went wrong - Sorry for the inconvenience. Error: ${error.message}`;
        console.log(error.message);
    }
}

errorMessageDismissButton.addEventListener("click", ()=> {
	errorMessageCard.style.display = "none";
	errorMessageContent.textContent = "";
})


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
const filterOptionsList = document.querySelector(".shop__merch-list-filter-options");

shopMenuTeesLink.addEventListener("click", () => {
	selectedCategory = "t-shirt"

	shopFrontSection.style.display = "none";
	shopMerchListSection.style.display = "flex";
	shopMenuDrawer.style.display = "none";

	itemPage.style.display = "none";
	listContainer.style.display = "flex";
	listInputWrapper.style.display = "flex";

	filterOptionsList.reset()
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

	filterOptionsList.reset()
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
	renderCartDrawer();
	cartDrawer.classList.toggle("cart-visible");
})

cartDrawerClose.addEventListener("click", () => {
	cartDrawer.classList.remove("cart-visible");
})



