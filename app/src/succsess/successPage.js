import {getHeader} from "../shared/header";
import {getFooter} from "../shared/footer";

export function displaySuccessPage(){
    var header = getHeader();
    var footer = getFooter();

    var template = `
${header} 
<h1>SuccessPage</h1>
${footer} `;
    document.getElementById("container").innerHTML = template;
}