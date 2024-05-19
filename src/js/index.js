import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { clearErrorsOnInputChange, validateForm } from "./formValidation";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// ----------- FIREBASE AUTH ----------------------------------------

const app = initializeApp(firebaseConfig);
export const authService = getAuth(app);
const signInForm = document.querySelector(".sign-in__form");
const signUpForm = document.querySelector(".sign-up__form");

export const checkAuthStateAndRedirect = ()=> {
	onAuthStateChanged(authService, (user)=> {	
		if(user) {
			window.location.href = "shop.html"
		} else {
			window.location.href = "index.html"
		}
	})
}

export const signOutUser = async ()=> {
	try {
		await signOut(authService)
		checkAuthStateAndRedirect();
	} catch {
		console.log("Log out failed");
	}
}
	
// --------- LANDING PAGE (INDEX.HTML) ----------


const homeMainSection = document.querySelector(".home__main-section");

// DISPLAY INDEX MENU
const homeMenuButton = document.querySelector(".header__menu-button");
const homeMenuDrawer = document.querySelector(".menudrawer");
const homeDrawerCloseButton = document.querySelector(".menudrawer__close");

homeMenuButton.addEventListener("click", () => {
	homeMenuDrawer.style.display = "flex";
})

homeDrawerCloseButton.addEventListener("click", () => {
	homeMenuDrawer.style.display = "none";
})

// DISPLAY SIGN IN FORM
const signInSection = document.querySelector(".sign-in");
const signInSectionClose = document.querySelector(".sign-in__close");
const homeSignInLink = document.querySelector(".home-sign-in-link");
const menuSignInLink = document.querySelector(".menu-sign-in-link");
const signInButton = document.querySelector(".sign-in__button");
const signUpButton = document.querySelector(".sign-up__button");


homeSignInLink.addEventListener("click", () => {
	signInSection.style.display = "flex";
	homeMainSection.style.display = "none";
})

menuSignInLink.addEventListener("click", () => {
	signInSection.style.display = "flex";
	homeMainSection.style.display = "none";
	homeMenuDrawer.style.display = "none";
	signUpSection.style.display = "none";

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
			checkAuthStateAndRedirect();
			signInButton.parentElement.reset();
		})
	}
})

clearErrorsOnInputChange("sign-in__form");

// DISPLAY SIGN UP FORM - CREATE ACCOUNT FORM
const signUpSection = document.querySelector(".sign-up");
const signUpSectionClose = document.querySelector(".sign-up__close");
const homeSignUpLink = document.querySelector(".home-sign-up-link");
const menuSignUpLink = document.querySelector(".menu-sign-up-link");

homeSignUpLink.addEventListener("click", () => {
	signUpSection.style.display = "flex";
	homeMainSection.style.display = "none";
})

menuSignUpLink.addEventListener("click", () => {
	signUpSection.style.display = "flex";
	homeMainSection.style.display = "none";
	homeMenuDrawer.style.display = "none";
	signInSection.style.display = "none";
})

signUpSectionClose.addEventListener("click", () => {
	signUpSection.style.display = "none";
	homeMainSection.style.display = "flex";
})

signUpButton.addEventListener("click", (event)=> {
	event.preventDefault();
	if(validateForm("sign-up__form")) {
		createUserWithEmailAndPassword(authService, signUpForm.email.value, signUpForm.password.value)
		.then(()=> {
			checkAuthStateAndRedirect();
			signUpButton.parentElement.reset();
		})
	}
})

clearErrorsOnInputChange("sign-up__form");

