export const sortList = (listToSort, sortParameter) => {
	listToSort.sort((a, b)=> {
		return a[sortParameter].localeCompare(b[sortParameter])
		});
};