export const renderList = (currentList)=> {
	const listContainer = document.querySelector(".shop__merch-list__items");

	currentList.forEach(product => {
		const listItemCard = document.createElement("div");
		listItemCard.classList.add("shop__merch-list__items__card");
		listContainer.appendChild(listItemCard);

		const cardImage = document.createElement("img");
		cardImage.src = "./assets/images/tee-concretewall-haryo-setyadi.jpeg";
		cardImage.alt = "current product image";
		listItemCard.appendChild(cardImage);
		
		const cardContentWrapper = document.createElement("div");
		cardContentWrapper.classList.add("shop__merch-list__items__card-content-wrapper");
		listItemCard.appendChild(cardContentWrapper);



		const cardLeftContainer = document.createElement("div");
		cardLeftContainer.classList.add("shop__merch-list__items__card__left-container");
		cardContentWrapper.appendChild(cardLeftContainer);

		const leftContainerContent = document.createElement("div");
		leftContainerContent.classList.add("shop__merch-list__items__card__left-container__content");
		cardLeftContainer.appendChild(leftContainerContent);

		const itemTitle = document.createElement("h4");
		itemTitle.textContent = product.title;
		const itemManufacturer = document.createElement("div");
		itemManufacturer.textContent = product.manufacturer;
		leftContainerContent.append(itemTitle, itemManufacturer);
		
		const cardRightContainer = document.createElement("div");
		cardRightContainer.classList.add("shop__merch-list__items__card__right-container");
		cardContentWrapper.appendChild(cardRightContainer);

		const itemPrice = document.createElement("div");
		itemPrice.textContent = product.price;
		itemPrice.classList.add("shop__merch-list__item-price");
		const addToCartButton = document.createElement("button");
		addToCartButton.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
			<path d="M18.1384 2.93441L16.3051 9.35107H5.65041M17.2218 13.0177H6.22176L4.38843 1.10107H1.63843M13.5551 3.39274H11.2634M11.2634 3.39274H8.97176M11.2634 3.39274V5.68441M11.2634 3.39274V1.10107M7.13843 16.6844C7.13843 17.1907 6.72802 17.6011 6.22176 17.6011C5.7155 17.6011 5.30509 17.1907 5.30509 16.6844C5.30509 16.1781 5.7155 15.7677 6.22176 15.7677C6.72802 15.7677 7.13843 16.1781 7.13843 16.6844ZM17.2218 16.6844C17.2218 17.1907 16.8114 17.6011 16.3051 17.6011C15.7988 17.6011 15.3884 17.1907 15.3884 16.6844C15.3884 16.1781 15.7988 15.7677 16.3051 15.7677C16.8114 15.7677 17.2218 16.1781 17.2218 16.6844Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`
		addToCartButton.classList.add("add-to-cart-button");
		cardRightContainer.append(itemPrice, addToCartButton, "Add to cart");				
	});

}