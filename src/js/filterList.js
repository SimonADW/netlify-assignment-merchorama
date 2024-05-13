export const filterProducts = (listToFilter, filterCondition) => {
	return listToFilter.map((product) => product.manufacturer === filterCondition)
}