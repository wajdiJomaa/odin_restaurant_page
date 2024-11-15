import createHomeContent from "./home.js";
import createMenuContent from "./menu.js";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");


createHomeContent();

home.addEventListener("click", () => {
    createHomeContent();
});


menu.addEventListener("click", ()=>{
    createMenuContent();
});