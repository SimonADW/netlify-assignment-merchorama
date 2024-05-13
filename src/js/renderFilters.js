
export const renderFilterButtons = (productsArray)=> {
	const filtersContainer = document.querySelector(".shop__merch-list-filter-options");	

	const allManufacturers = productsArray.map((product)=> product.manufacturer);
	const noDuplicateManufacturers = allManufacturers.reduce((accumulator, current)=> {
		if(!accumulator.includes(current)) {
			accumulator.push(current);
		}
		return accumulator;
	}, []);

	// Render buttons

}

