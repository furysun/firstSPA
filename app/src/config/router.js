import {displayIndexPage} from "../mainPage";
import {displayLoginPage} from "../login/loginPage";
import {displayRegistrationPage} from "../registration/registration";
import {displaySuccessPage} from "../registration/succsess/successPage";

var routs = {
    "/": displayIndexPage,
    "/login": displayLoginPage,
    "/registration": displayRegistrationPage,
    "/success": displaySuccessPage
};

export function routerInit() {
    window.addEventListener('popstate', function (event) {
        let url = event.currentTarget.location.pathname;
        routs[url]();
    });
}

export function navigate(url) {
    history.pushState({}, "", url);
    routs[url]();
}
