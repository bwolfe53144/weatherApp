import "./styles.css";
import { homePage } from "./home.js";
import { myMenu } from "./myMenu.js";
import { contact } from "./contact.js";

/*Handles all onclick events*/
var theParent = document.querySelector("nav");
theParent.addEventListener("click", wasClicked, false);

function wasClicked(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        if (clickedItem == "home") {
            clear();
            homePage();
        } else if (clickedItem == "contact") {
            clear();
            contact();
        } else if (clickedItem == "menu") {
            clear();
            myMenu();
        }
    }
    e.stopPropagation();
}

homePage();

function clear() {
    var element = document.getElementById("content");
    while (element.firstChild) {
        element.firstChild.remove();
    }
}
