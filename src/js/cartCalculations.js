import { postOrderToFirebase } from "./index.js";
import { renderCartDrawer } from "./rendering.js";

export let cartContent = JSON.parse(window.localStorage.getItem("cartContent") || "[]");
export let sumTotal = null;



export const updateCartButtonBadge = ()=> {
	const cartBadge = document.querySelector(".cart-badge");
	const numberOfItemsInCart = cartContent.reduce((accumulator, currentValue)  => accumulator += currentValue.amount, 0);
	numberOfItemsInCart > 0
	? (cartBadge.style.display = "flex")
	: (cartBadge.style.display = "none")
	numberOfItemsInCart < 100
	? (cartBadge.textContent = `${numberOfItemsInCart}`)
	: (cartBadge.textContent = "");
}

export const addToCart = (item)=> {			
	const existingProduct = cartContent.find((product)=> product.id === item.id)
	if(existingProduct) {
		existingProduct.amount = (existingProduct.amount || 0) +1;
	} else {
		item.amount = 1;
		cartContent.push(item);
	};
	updateCartButtonBadge();
	window.localStorage.setItem("cartContent", JSON.stringify(cartContent));
};

export const getSumTotal = ()=> {
	sumTotal = 0;
	cartContent = JSON.parse(window.localStorage.getItem("cartContent") || "[]");	
	cartContent.forEach((item)=> {
		const itemsPrice = item.price * item.amount;
		sumTotal += itemsPrice;
	})
	return sumTotal ? sumTotal.toFixed(2) : 0;
};

export const deleteCartItem = (itemToDelete)=> {
	cartContent = cartContent.filter((product) => product.id !== itemToDelete.id);
    window.localStorage.setItem("cartContent", JSON.stringify(cartContent));
	getSumTotal()
	renderCartDrawer();
	updateCartButtonBadge();
};

export function addedToCartButtonStyling(buttonToStyle, confirmationText) {
	buttonToStyle.classList.add("add-to-cart-button__item-added");
	confirmationText.textContent = "Item added ✔︎"
	const timeout = setTimeout(()=>{ 
		buttonToStyle.classList.remove("add-to-cart-button__item-added")
		confirmationText.textContent = "Add to cart";
	}, 1000);
};

// CHECKOUT AND EMPTY CART
const checkoutButton = document.querySelector(".shop__cart__checkout-button");

const emptyCartButton = document.querySelector(".shop__cart__clear-cart-button");
const emptyCartConfirmCard = document.querySelector(".empty-cart-confirmation-card");
const emptyCartConfirmButton = document.querySelector(".empty-cart-confirmation-card__yes-button");
const emptyCartCancelButton = document.querySelector(".empty-cart-confirmation-card__cancel-button");

const checkoutConfirmCard = document.querySelector(".checkout-confirmation-card");
const checkoutConfirmButton = document.querySelector(".checkout-confirmation-card__confirm-button");
const checkoutCancelButton = document.querySelector(".checkout-confirmation-card__cancel-button");

export const emptyCart = ()=> {
	cartContent = [];
	window.localStorage.setItem("cartContent", JSON.stringify(cartContent));
	renderCartDrawer();
	updateCartButtonBadge();
}

emptyCartButton.addEventListener("click", ()=> {
	emptyCartConfirmCard.style.display = "flex";
})

emptyCartConfirmButton.addEventListener("click", ()=> {
	emptyCartConfirmCard.style.display = "none";
	emptyCart();
})

emptyCartCancelButton.addEventListener("click", ()=> {
	emptyCartConfirmCard.style.display = "none";
})

checkoutButton.addEventListener("click", ()=> {	
	if(cartContent.length > 0) {
		checkoutConfirmCard.style.display = "flex";	
	}
})

checkoutConfirmButton.addEventListener("click", ()=> {	
	checkoutConfirmCard.style.display = "none";	
	postOrderToFirebase();
})

checkoutCancelButton.addEventListener("click", ()=> {
	checkoutConfirmCard.style.display = "none";
})