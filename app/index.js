import {displayIndexPage} from "./src/mainPage";
import {navigate, routerInit} from "./src/config/router";


document.addEventListener("DOMContentLoaded", function () {
    routerInit();
    // console.log(window.location.href.split("/")[3]);
    // displayIndexPage();
    navigate("/"+window.location.href.split("/")[3])
});