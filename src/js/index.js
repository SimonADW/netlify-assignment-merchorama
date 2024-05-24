import { firebaseConfig } from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs  } from "firebase/firestore";
import { clearErrorsOnInputChange, validateForm } from "./formValidation.js";
import { renderList, renderFilterButtons, renderCartDrawer } from "./rendering.js";

import products from "../assets/data/products.js";

const homeMainSection = document.querySelector(".home__main-section");
const shopMainSection = document.querySelector(".shop__main-section");

// ----------- FIREBASE AUTH ----------------------------------------

const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
const signInForm = document.querySelector(".sign-in__form");
const signUpForm = document.querySelector(".sign-up__form");
const headerButtonContainer = document.querySelector(".home-header__container-rigth");

export const checkAuthStateAndRenderShop = ()=> {
	onAuthStateChanged(authService, (user)=> {	
		if(user) {
			homeMainSection.style.display = "none";
			liveWatch.style.display = "none"
			shopMainSection.style.display = "flex"			
			headerButtonContainer.style.display = "flex";
		} else {
			shopMainSection.style.display = "none"
			liveWatch.style.display = "flex"
			homeMainSection.style.display = "flex";
			headerButtonContainer.style.display = "none";
		}
	})
}

export const signOutUser = async ()=> {
	try {
		await signOut(authService)
		checkAuthStateAndRenderShop();
	} catch {
		console.log("Log out failed");
	}
}
	
// --------- LANDING PAGE (INDEX.HTML) ----------


// DISPLAY SIGN IN FORM
const signInSection = document.querySelector(".sign-in");
const signInSectionClose = document.querySelector(".sign-in__close");
const homeSignInLink = document.querySelector(".home-sign-in-link");
const signInButton = document.querySelector(".sign-in__button");
const signUpButton = document.querySelector(".sign-up__button");


homeSignInLink.addEventListener("click", () => {
	signInSection.style.display = "flex";
	homeMainSection.style.display = "none";
})

signInSectionClose.addEventListener("click", () => {
	signInSection.style.display = "none";
	homeMainSection.style.display = "flex";
})

signInButton.addEventListener("click", (event)=> {
	event.preventDefault();
	if(validateForm("sign-in__form")) {
		signInWithEmailAndPassword(authService, signInForm.email.value, signInForm.password.value )
		.then(()=> {
			checkAuthStateAndRenderShop();
			signInButton.parentElement.reset();
			signInSection.style.display = "none";
		})
	}
})

clearErrorsOnInputChange("sign-in__form");

// DISPLAY SIGN UP FORM - CREATE ACCOUNT FORM
const signUpSection = document.querySelector(".sign-up");
const signUpSectionClose = document.querySelector(".sign-up__close");
const homeSignUpLink = document.querySelector(".home-sign-up-link");
// const menuSignUpLink = document.querySelector(".menu-sign-up-link");

homeSignUpLink.addEventListener("click", () => {
	signUpSection.style.display = "flex";
	homeMainSection.style.display = "none";
});

signUpSectionClose.addEventListener("click", () => {
	signUpSection.style.display = "none";
	homeMainSection.style.display = "flex";
});

signUpButton.addEventListener("click", (event)=> {
	event.preventDefault();
	if(validateForm("sign-up__form")) {
		createUserWithEmailAndPassword(authService, signUpForm.email.value, signUpForm.password.value)
		.then(()=> {
			checkAuthStateAndRenderShop();
			signUpButton.parentElement.reset();
			signUpSection.style.display = "none";
		})
	}
});

clearErrorsOnInputChange("sign-up__form");

// _____________********** Moved from App.js after switch to SPA ***********_____________ //

// ----------- FIREBASE AUTH SIGN OUT ----------------------------------------
// TODO: Fix signout and auth on shop page load

const signOutButton = document.querySelector(".menu-sign-out-button");
signOutButton.addEventListener("click", ()=> {
	shopMenuDrawer.style.display = "none";
	signOutUser();
});

// ----------- FIREBASE FIRESTORE ----------------------------------------
// TODO: Set firebase to production mode
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
};

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

shopMenuButton.addEventListener("click", (event) => {
	event.stopPropagation()
	shopMenuDrawer.style.display = "flex";
});

shopDrawerCloseButton.addEventListener("click", () => {
	shopMenuDrawer.style.display = "none";
});

// TODO: Fix close menu on click outside
// window.addEventListener("click", (event)=> {
// 	if(shopMenuDrawer.style.display !== "none" && event.target.className !== "menudrawer") {
// 		shopMenuDrawer.style.display = "none";
// 		console.log(event.target);
// 	}
// })

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

headerCartButton.addEventListener("click", (event) => {
	event.stopPropagation()
	renderCartDrawer();
	cartDrawer.classList.toggle("cart-visible");
})

cartDrawerClose.addEventListener("click", () => {
	cartDrawer.classList.remove("cart-visible");
})

// TODO: Fix close menu on click outside
// window.addEventListener("click", (event)=> {
// 	if(cartDrawer.style.display !== "none" && event.target.className !== "shop__cart-drawer") {
// 		cartDrawer.classList.remove("cart-visible");
// 		console.log(event.target.className);
// 	}
// });

const fetchLiveWatchInfo = async ()=> {
	try {
		const response = await fetch("http://localhost:4000/");
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);		
	}

}

fetchLiveWatchInfo();
checkAuthStateAndRenderShop();