import { getProductsFromDatabase } from "../../js/app";

let products = [];

window.addEventListener("DOMContentLoaded", ()=> {
    getProductsFromDatabase();
}) 

export default products;