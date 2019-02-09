import {navigate} from "./config/router";
import {getHeader} from "./shared/header";
import {getFooter} from "./shared/footer";


export function displayIndexPage() {
    var header = getHeader();
    var footer = getFooter();

    const user = {
        name: 'cat',
        age: 12,
        money: 10
    };

    var template = `
${header} 
    <div id="content">
    <h1>Hello, ${user.name} ${user.age + user.money}</h1>

    <button class="style-button" id="goToLogin">login</button>
    <p>
    <button class="style-button" id="goToRegistration">registration</button>
    <p id="demo"></p>
    </div>\`;
${footer} `;

    document.getElementById("container").innerHTML = template;
    document.getElementById("goToLogin").onclick = goToLogin;
    document.getElementById("goToRegistration").onclick = goToRegistration;
}

function goToLogin() {
    navigate("/login");
}

function goToRegistration() {
    navigate("/registration");
}


