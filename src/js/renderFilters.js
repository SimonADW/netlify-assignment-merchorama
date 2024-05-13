import { renderList } from "./renderList.js";
import { filterProducts } from "./filterList.js";
import products from "../assets/data/products.js";

export const renderFilterButtons = (productsArray)=> {
	// Get array of brands
	const allManufacturers = productsArray.map((product)=> product.manufacturer);
	const noDuplicateManufacturers = allManufacturers.reduce((accumulator, current)=> {
		if(!accumulator.includes(current)) {
			accumulator.push(current);
		}
		return accumulator;
	}, []);

	// Render checkbox for each brand
	const filterOptionsList = document.querySelector(".shop__merch-list-filter-options");
	const filterByHeading = "Filter by: ";
	filterOptionsList.append(filterByHeading);

	noDuplicateManufacturers.forEach(manufacturer => {
		const label = document.createElement("label");
		label.for = "fruit_of_the_loom";
		label.classList.add("filter-checkbox-label")
		const checkboxInput = document.createElement("input");
		label.textContent = manufacturer;
		checkboxInput.type = "checkbox";
		checkboxInput.value = manufacturer;
		checkboxInput.name = manufacturer;
		label.appendChild(checkboxInput);
		
		filterOptionsList.append(label);
		
		checkboxInput.addEventListener("change", (event)=> {
			renderList(filterProducts(products, event.target.value))		
		})
	});


}

