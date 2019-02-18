import {getHeader} from "../shared/header";
import {getFooter} from "../shared/footer";
import {navigate} from "../config/router";


const user = {
    login: 'admin',
    password: 'admin'
};

export function displayLoginPage() {
    const header = getHeader();
    const footer = getFooter();

    const template = `
    ${header}
    <form>
    <div id="loginPage">
        <p>
            <input id="loginInput" placeholder=" login"  type="text" />
        </p>
        <p>
            <input id="passwordInput" placeholder=" password"  type="password" />
        </p>
        <input class="style-button" id="goToUsers" value="ok" name="ok"/>
        <p hidden id="error-message">wrong login/password</p>
    </form>
    ${footer}
    </div>`;


    document.getElementById("container").innerHTML = template;
    document.getElementById("goToUsers").onclick = verify;
}

function verify() {

    const login = document.getElementById("loginInput").value;
    const password = document.getElementById("passwordInput").value;

    if (user.login === login && user.password === password) {
        goToUsers();
    } else {
        document.getElementById("error-message").hidden = false;
    }
}

function goToUsers() {
    navigate("/users");
}