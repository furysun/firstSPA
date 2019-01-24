import {displayIndexPage} from "../mainPage";
import {displayLoginPage} from "../login/loginPage";
import {displayRegistrationPage} from "../reg/registration";

var routs = {
    "/": displayIndexPage,
    "/login":displayLoginPage,
    "/registration":displayRegistrationPage
};

export function init() {
    window.addEventListener('popstate', function (event) {
        routs[event.currentTarget.location.pathname]();
    });
}

export function navigate(url) {
    history.pushState({}, "", url);
    routs[url]();
}
