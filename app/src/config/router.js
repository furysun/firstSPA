import {displayIndexPage} from "../mainPage";
import {displayLoginPage} from "../login/loginPage";
import {displayRegistrationPage} from "../registration/registration";
import {displaySuccessPage} from "../succsess/successPage";
import {displayUsersPage} from "../admin/usersPage";

var routes = {
    "/": displayIndexPage,
    "/login": displayLoginPage,
    "/registration": displayRegistrationPage,
    "/success": displaySuccessPage,
    "/users": displayUsersPage

};

export function routerInit() {
    window.addEventListener('popstate', function (event) {
        let url = event.currentTarget.location.pathname;
        routes[url]();
    });
}

export function navigate(url) {
    history.pushState({}, "", url);
    routes[url]();
}
