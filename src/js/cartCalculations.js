import { renderCartDrawer } from "./rendering.js";

export let cartContent = [];
export let sumTotal = null;

export const addToCart = (item)=> {		
	cartContent = JSON.parse(window.localStorage.getItem("cartContent") || "[]");
	const existingProduct = cartContent.find((product)=> product.id === item.id)
	if(existingProduct) {
		existingProduct.amount = (existingProduct.amount || 0) +1;
	} else {
		item.amount = 1;
		cartContent.push(item);
	};	
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
}


