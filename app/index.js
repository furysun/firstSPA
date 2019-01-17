// import {functionOne} from "./js/fileOne";

import {displayIndexPage} from "./src/indexPage";

document.getElementById("content").innerHTML = displayIndexPage();

window.onhashchange = function () {
    var oldHash = window.location.hash;
    console.log(oldHash);
};
