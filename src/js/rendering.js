import products from "../assets/data/products.js";
import { selectedCategory } from "./app.js";
let currentFilterOption = "";
let currentSortOption = "title";

// RENDER FILTERBUTTONS BASED ON LIST CONTENT

const listContainer = document.querySelector(".shop__merch-list__items");
const listInputWrapper = document.querySelector(".shop__merch-input-wrapper");
const itemPage = document.querySelector(".shop__item-page");
// let currentItemId = null;

export const renderFilterButtons = (productsArray) => {
	const filterOptionsList = document.querySelector(".shop__merch-list-filter-options");
	// Get array of brands
	const allManufacturers = productsArray.map((product) => product.manufacturer);
	const noDuplicateManufacturers = allManufacturers.reduce((accumulator, current) => {
		if (!accumulator.includes(current)) {
			accumulator.push(current);
		}
		return accumulator;
	}, []);

	// Render checkbox for each brand	
	filterOptionsList.textContent = "";
	const filterByHeading = "Filter by: ";	
	filterOptionsList.append(filterByHeading);

	noDuplicateManufacturers.forEach(manufacturer => {
		const label = document.createElement("label");
		label.for = "fruit_of_the_loom";
		label.classList.add("filter-checkbox-label")
		const checkboxInput = document.createElement("input");
		label.textContent = manufacturer;
		checkboxInput.type = "radio";
		checkboxInput.value = manufacturer;
		checkboxInput.id = manufacturer;
		checkboxInput.name = "filter-radio-button";
		label.appendChild(checkboxInput);

		filterOptionsList.append(label);

		checkboxInput.addEventListener("change", (event) => {
			renderList(filterProducts(products, event.target.value))	
			if(window.innerWidth < 481) {
				filterMobileDrawer.style.display = "none";
			} 
		})
	});
}


// RENDER LIST OF PRODUCTS

export const renderList = (listToRender) => {
	const currentList = listToRender.filter((product) => product.type === selectedCategory.toString());
	listContainer.textContent = "";

	currentList.forEach(product => {
		const listItemCard = document.createElement("button");
		listItemCard.classList.add("shop__merch-list__items__card");
		listContainer.appendChild(listItemCard);

		// Open item on click
		listItemCard.addEventListener("click", ()=> {
			renderItem(product.id)
			console.log("Open item card");
		})

		const cardImage = document.createElement("img");

		// Image based on type:
		product.type === "t-shirt" ?
			cardImage.src = "./assets/images/tee-concretewall-haryo-setyadi.jpg"
			:
			cardImage.src = "./assets/images/hoodie-whereslugo.jpg";

		cardImage.alt = `${product.title} image`;
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
		addToCartButton.classList.add("shop__merch-list__item__cart-button");
		addToCartButton.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
			<path d="M18.1384 2.93441L16.3051 9.35107H5.65041M17.2218 13.0177H6.22176L4.38843 1.10107H1.63843M13.5551 3.39274H11.2634M11.2634 3.39274H8.97176M11.2634 3.39274V5.68441M11.2634 3.39274V1.10107M7.13843 16.6844C7.13843 17.1907 6.72802 17.6011 6.22176 17.6011C5.7155 17.6011 5.30509 17.1907 5.30509 16.6844C5.30509 16.1781 5.7155 15.7677 6.22176 15.7677C6.72802 15.7677 7.13843 16.1781 7.13843 16.6844ZM17.2218 16.6844C17.2218 17.1907 16.8114 17.6011 16.3051 17.6011C15.7988 17.6011 15.3884 17.1907 15.3884 16.6844C15.3884 16.1781 15.7988 15.7677 16.3051 15.7677C16.8114 15.7677 17.2218 16.1781 17.2218 16.6844Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`
		addToCartButton.classList.add("add-to-cart-button");
		cardRightContainer.append(itemPrice, addToCartButton, "Add to cart");

		addToCartButton.addEventListener("click", (event)=> {
			event.stopPropagation()
			console.log("Added to cart");
		})
	});
}

// FILTERING

function filterProducts(listToFilter, filterCondition) {
	currentFilterOption = filterCondition;
	const filteredList = filterCondition
		? listToFilter.filter((product) => product.manufacturer === currentFilterOption.toString())
		: listToFilter;
	return sortList(filteredList, currentSortOption);
};

// SORTING
function sortList(listToSort, sortParameter) {	
	const filteredList = currentFilterOption 
	? listToSort.filter((product) => product.manufacturer === currentFilterOption.toString())
	: listToSort;
	return filteredList.sort((a, b) => {
		return a[[sortParameter]].localeCompare(b[[sortParameter]])
	});
};

const sortRadioButtons = document.querySelectorAll('input[name="sort-radio-button"]');
const filterMobileDrawer = document.querySelector(".shop__merch-list__filter-drawer");

sortRadioButtons.forEach((button) => {
	button.addEventListener("change", (event) => {
		currentSortOption = event.target.id;
		renderList(sortList(products, event.target.id));
	
	})
});

// SEARCH FUNCTION

function submitSearch(currentList, inputvalue) {
	const filteredListToSearch = currentFilterOption ? filterProducts(currentList, currentFilterOption) : currentList;
	const sortedListToSearch = sortList(filteredListToSearch, currentSortOption);

	const inputToCompare = inputvalue.trim().toString().toLowerCase()
	const searchResult = sortedListToSearch.filter((product) => {
		return product.title.toLowerCase().includes(inputToCompare)
			|| product.artist.toLowerCase().includes(inputToCompare)
			|| product.manufacturer.toLowerCase().includes(inputToCompare)
	});

	renderList(searchResult);
	return searchResult;
}

const searchInput = document.querySelector(".shop__merch-search-input");

searchInput.addEventListener("keyup", () => {
	submitSearch(products, searchInput.value)
})

// CLEAR FILTERS
const filterClearButton = document.querySelector(".shop__merch-list__filter-clear-button");
filterClearButton.addEventListener("click", ()=> {
	renderList(filterProducts(products, ""));
	filterOptionsList.reset();
})

// ITEM CARD LINKS

const renderItem = (currentItemId)=> {
	itemPage.textContent = "";

	listContainer.style.display = "none";
	listInputWrapper.style.display = "none";
	itemPage.style.display = "flex";
		
	const currentProduct = products.find((product)=> product.id === currentItemId);
	// find object with currentItemId and render:	
	const itemContainer = document.createElement("div");
	itemContainer.classList.add("shop__item-container");
	itemPage.appendChild(itemContainer);

	const itemCloseButton = document.createElement("button");
	itemCloseButton.classList.add("item__close__card");
	itemCloseButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
		<path d="M6 6L18 18M18 6L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`;
	itemCloseButton.addEventListener("click", ()=> {
		listContainer.style.display = "flex";
		listInputWrapper.style.display = "flex";
		itemPage.style.display = "none";
	})

	const itemImage = document.createElement("img");
	itemImage.src = "./assets/images/tee-concretewall-haryo-setyadi.jpg";
	itemImage.alt = `${currentItemId.title} image`
	
	const itemContentWrapper = document.createElement("div");
	itemContentWrapper.classList.add("shop-item-content-wrapper");

	const itemLeftContainer = document.createElement("div");
	itemLeftContainer.classList.add("shop__item__left-container");
	const itemRightContainer = document.createElement("div");
	itemRightContainer.classList.add("shop__item__right-container");
	itemContentWrapper.append(itemLeftContainer, itemRightContainer);	

	// Item left container
	const itemLeftContainerContent = document.createElement("div");
	itemLeftContainerContent.classList.add("shop__item__left-container__content");
	itemLeftContainer.append(itemLeftContainerContent)
	
	const itemName = document.createElement("h4");
	itemName.classList.add("shop__item__name");
	itemName.textContent = currentProduct.title;

	const itemManufacturer = document.createElement("div");
	itemManufacturer.classList.add("shop__item__manufacturer");
	itemManufacturer.textContent = currentProduct.manufacturer;

	const itemArtist = document.createElement("div");
	itemArtist.classList.add("shop__item__artist");
	itemArtist.textContent = currentProduct.artist;
	
	itemLeftContainerContent.append(itemName, itemManufacturer, itemArtist);	

	// Item right container
	const itemPrice = document.createElement("div");
	itemPrice.classList.add("shop__item-price");
	itemPrice.textContent = currentProduct.price;
	
	const itemAddToCartButton = document.createElement("button");
	itemAddToCartButton.classList.add("add-to-cart-button");
	itemAddToCartButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
		<path d="M18.1384 2.93441L16.3051 9.35107H5.65041M17.2218 13.0177H6.22176L4.38843 1.10107H1.63843M13.5551 3.39274H11.2634M11.2634 3.39274H8.97176M11.2634 3.39274V5.68441M11.2634 3.39274V1.10107M7.13843 16.6844C7.13843 17.1907 6.72802 17.6011 6.22176 17.6011C5.7155 17.6011 5.30509 17.1907 5.30509 16.6844C5.30509 16.1781 5.7155 15.7677 6.22176 15.7677C6.72802 15.7677 7.13843 16.1781 7.13843 16.6844ZM17.2218 16.6844C17.2218 17.1907 16.8114 17.6011 16.3051 17.6011C15.7988 17.6011 15.3884 17.1907 15.3884 16.6844C15.3884 16.1781 15.7988 15.7677 16.3051 15.7677C16.8114 15.7677 17.2218 16.1781 17.2218 16.6844Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`
	
	const addToCartText = document.createElement("div");
	addToCartText.textContent = "Add to cart";
	itemRightContainer.append(itemPrice, itemAddToCartButton, addToCartText);
	itemContainer.append(itemCloseButton, itemImage, itemContentWrapper);	
}


