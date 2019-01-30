import {navigate} from "../config/router";
import {getHeader} from "../shared/header";
import {getFooter} from "../shared/footer";

export function displayRegistrationPage() {
    var header = getHeader();
    var footer = getFooter();

    var template = `
${header}
<h1>registration</h1>
                    <button class="style-button" id="goToSuccess">ok</button>
${footer}`;
    document.getElementById("container").innerHTML = template;
    document.getElementById("goToSuccess").onclick = goToSuccess;

}

function goToSuccess() {
    navigate("/success");
}