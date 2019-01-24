import {navigate} from "../config/router";

export function displayRegistrationPage() {
    var template = `<h1>registration</h1>
                    <button id="goToSuccess">ok</button>`;
    document.getElementById("content").innerHTML = template;
    document.getElementById("goToSuccess").onclick = goToSuccess;

}

function goToSuccess() {
    navigate("/success");
}