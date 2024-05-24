import { getProductsFromDatabase } from "../../js/index.js";

let products = [];

window.addEventListener("DOMContentLoaded", ()=> {
    getProductsFromDatabase();
}) 

export default products;