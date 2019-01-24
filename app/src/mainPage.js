import css from './mainPage.css';
import {displayLoginPage} from "./login/loginPage";
import {displayRegistrationPage} from "./reg/registration";
import {navigate} from "./config/router";


export function displayIndexPage() {

    var user = {
        name: 'cat',
        age: 12,
        money: 10
    };

    var template = `
    <h1>Hello, ${user.name} ${user.age + user.money}</h1>

    <button id="goToLogin">login</button>
    <button id="goToRegistration">registration</button>
    <p> test1 </p>
    <p id="demo"></p>
    
    
    <input type="text" id="testButton"/>
    
    <button id="clickMe">click me </button>;`;

    document.getElementById("content").innerHTML = template;

    document.getElementById("goToLogin").onclick = function () {
        navigate("/login")
    };

    document.getElementById("goToRegistration").onclick = function () {
        navigate("/registration")
    };
}
