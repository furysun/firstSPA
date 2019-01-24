import {displayIndexPage} from "./src/mainPage";
import {routerInit} from "./src/config/router";


document.addEventListener("DOMContentLoaded", function () {
    routerInit();

    displayIndexPage();
});