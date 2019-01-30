import {getHeader} from "../shared/header";
import {getFooter} from "../shared/footer";

export function displayLoginPage() {

    var header = getHeader();
    var footer = getFooter();


    var template = `
${header}
    <form >
        <p>
            <input id="login" placeholder=" login"  type="text" />
        </p>
        <p>
            <input id="password" placeholder=" password"  type="password" />
        </p>

        <input class="style-button" type="submit" value="ok" name="ok"/>
    </form>
${footer}`;


    document.getElementById("container").innerHTML = template;
}