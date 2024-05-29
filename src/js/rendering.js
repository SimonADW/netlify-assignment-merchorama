import products from "../assets/data/products.js";
import { selectedCategory } from "./index.js";
import { addToCart, addedToCartButtonStyling, deleteCartItem, getSumTotal } from "./cartCalculations.js";
import icons from "../assets/icons/iconSvgs.js";
import { teesImages, hoodieImages } from "../assets/data/imagePaths.js";

let currentFilterOption = "";
let currentSortOption = "title";

// RENDER FILTERBUTTONS BASED ON LIST CONTENT

const listContainer = document.querySelector(".shop__merch-list__items");
const listInputWrapper = document.querySelector(".shop__merch-input-wrapper");
const itemPage = document.querySelector(".shop__item-page");
const filterOptionsList = document.querySelector(".shop__merch-list-filter-options");

export const renderFilterButtons = (productsArray) => {
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
			if (window.innerWidth < 481) {
				filterMobileDrawer.style.display = "none";
			}
		})
	});
};


// RENDER LIST OF PRODUCTS

export const renderList = (listToRender) => {
	const currentList = listToRender.filter((product) => product.type === selectedCategory.toString());
	listContainer.textContent = "";

	currentList.forEach(product => {
		const listItemCard = document.createElement("button");
		listItemCard.classList.add("shop__merch-list__items__card");
		listContainer.appendChild(listItemCard);

		// Open item on click
		listItemCard.addEventListener("click", () => {
			renderItem(product.id)
		})

		const cardImage = document.createElement("img");

		// Image based on type:
		product.type === "t-shirt" ?
			cardImage.src = `../src/assets/images/t-shirts/${teesImages[product.id]}`
			:
			cardImage.src = `../src/assets/images/hoodies/${hoodieImages[product.id]}`;

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
		itemPrice.textContent = `$ ${product.price}`;
		itemPrice.classList.add("shop__merch-list__item-price");
		const addToCartButton = document.createElement("button");
		addToCartButton.classList.add("shop__merch-list__item__cart-button");
		addToCartButton.innerHTML = icons.cartPlus;
		addToCartButton.classList.add("add-to-cart-button");

		const addToCartText = document.createElement("div");
		addToCartText.textContent = "Add to cart";

		cardRightContainer.append(itemPrice, addToCartButton, addToCartText);

		addToCartButton.addEventListener("click", (event) => {
			event.stopPropagation()
			addToCart(product);
			addedToCartButtonStyling(addToCartButton, addToCartText);	
		})
	});
};

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
};

const searchInput = document.querySelector(".shop__merch-search-input");

searchInput.addEventListener("keyup", () => {
	submitSearch(products, searchInput.value)
});

// CLEAR FILTERS
const filterClearButton = document.querySelector(".shop__merch-list__filter-clear-button");
filterClearButton.addEventListener("click", () => {
	renderList(filterProducts(products, ""));
	filterOptionsList.reset();
});

// ITEM CARD LINKS

const renderItem = (currentItemId) => {
	itemPage.textContent = "";

	const shopMerchListSection = document.querySelector(".shop__merch-list-container");
	shopMerchListSection.style.display = "none";
	listInputWrapper.style.display = "none";
	itemPage.style.display = "flex";

	const currentProduct = products.find((product) => product.id === currentItemId);
	// find object with currentItemId and render:	
	const itemContainer = document.createElement("div");
	itemContainer.classList.add("shop__item-container");
	itemPage.appendChild(itemContainer);

	const itemCloseButton = document.createElement("button");
	itemCloseButton.classList.add("item__close__card");
	itemCloseButton.innerHTML = icons.xMark;
	itemCloseButton.addEventListener("click", () => {
		shopMerchListSection.style.display = "flex";
		listInputWrapper.style.display = "flex";
		itemPage.style.display = "none";
	})

	const itemImage = document.createElement("img");
	if(currentProduct.type === "t-shirt") {
		itemImage.src = `../src/assets/images/t-shirts/${teesImages[currentProduct.id]}`
	} else {
		itemImage.src = `../src/assets/images/hoodies/${hoodieImages[currentProduct.id]}`;
	}
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
	itemPrice.textContent = `$ ${currentProduct.price}`;

	const addToCartText = document.createElement("div");
	addToCartText.textContent = "Add to cart";

	const itemAddToCartButton = document.createElement("button");
	itemAddToCartButton.classList.add("add-to-cart-button");
	itemAddToCartButton.innerHTML = icons.cartPlus;
	itemAddToCartButton.addEventListener("click", ()=> {
		addToCart(currentProduct);
		addedToCartButtonStyling(itemAddToCartButton, addToCartText);
	})

	itemRightContainer.append(itemPrice, itemAddToCartButton, addToCartText);
	itemContainer.append(itemCloseButton, itemImage, itemContentWrapper);
};


export const renderCartDrawer = ()=> {
	const cartContent = JSON.parse(window.localStorage.getItem("cartContent") || "[]");
	const cartItemsContainer = document.querySelector(".shop__cart-items");
	cartItemsContainer.textContent = "";	
	cartContent.forEach((cartItem)=> {
		const cartItemLi = document.createElement("li");
		cartItemsContainer.append(cartItemLi);

		const itemName = document.createElement("span");		
		itemName.textContent = cartItem.title;

		const itemAmount = document.createElement("span");
		itemAmount.className = "cart-item__amount";
		itemAmount.textContent = cartItem.amount > 1 ? cartItem.amount +"x": "";
		
		const itemPrice = document.createElement("span");		
		itemPrice.textContent = cartItem.price;

		const deleteCartItemButton = document.createElement("button");
		deleteCartItemButton.innerHTML = icons.trash;
		deleteCartItemButton.addEventListener("click", ()=> {
			deleteCartItem(cartItem);
		})

		cartItemLi.append(itemName, itemAmount, itemPrice, deleteCartItemButton);
	});

	const sumTotalSpan = document.querySelector(".shop__cart-sum");
	sumTotalSpan.textContent = getSumTotal();

	const checkoutButton = document.querySelector(".shop__cart__checkout-button");
	const clearCartButton = document.querySelector(".shop__cart__clear-cart-button");
	if(cartContent.length === 0) {
		checkoutButton.classList.add("disabled");
		clearCartButton.style.visibility = "hidden";
		
	} else {
		checkoutButton.classList.remove("disabled");
		clearCartButton.style.visibility = "visible";
	}
};