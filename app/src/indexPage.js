import css from './indexPage.css';

export function displayIndexPage() {
    var template = `
    <button>login</button>
    <button>registration</button>
    <p> test1 </p>
    
    <p id="demo"></p>
    `;

    document.getElementById("content").innerHTML = template;
    document.getElementById("demo").innerHTML = "Hello World!";
}