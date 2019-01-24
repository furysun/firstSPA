import {displayIndexPage} from "./src/mainPage";
import {init} from "./src/config/router";


document.addEventListener("DOMContentLoaded", function () {
    init();
    displayIndexPage();

    //
    // window.onbeforeunload = function (e) {
    //     alert(e);
    // }

    // window.addEventListener('hashchange', function (e) {
    //     alert(e);
    // })
});