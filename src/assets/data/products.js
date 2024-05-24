import { getProductsFromDatabase } from "../../js/index";

let products = [];

window.addEventListener("DOMContentLoaded", ()=> {
    getProductsFromDatabase();
}) 

export default products;