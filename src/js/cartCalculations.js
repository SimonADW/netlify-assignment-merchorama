import { renderCartDrawer } from "./rendering.js";

export let cartContent = [];
export let sumTotal = null;

const updateCartButtonBadge = ()=> {
	const cartBadge = document.querySelector(".cart-badge");
	const numberOfItemsInCart = cartContent.reduce((accumulator, currentValue)  => accumulator += currentValue.amount, 0);
	numberOfItemsInCart > 0
	? (cartBadge.style.display = "flex")
	: (cartBadge.style.display = "none")
	numberOfItemsInCart < 100
	? (cartBadge.textContent = `${numberOfItemsInCart}`)
	: (cartBadge.textContent = "");
	console.log(numberOfItemsInCart);
}

export const addToCart = (item)=> {		
	cartContent = JSON.parse(window.localStorage.getItem("cartContent") || "[]");
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
	const cartContentToKeep = cartContent.filter((product)=> {
	return product.id !== itemToDelete.id;
	}) 		
	window.localStorage.setItem("cartContent", JSON.stringify(cartContentToKeep));
	getSumTotal()
	renderCartDrawer();
	updateCartButtonBadge();
}


export function addedToCartButtonStyling(buttonToStyle, confirmationText) {
	buttonToStyle.classList.add("add-to-cart-button__item-added");
	confirmationText.textContent = "Item added ✔︎"
	const timeout = setTimeout(()=>{ 
		buttonToStyle.classList.remove("add-to-cart-button__item-added")
		confirmationText.textContent = "Add to cart";

	}, 1000);
	// clearTimeout(timeout);
}