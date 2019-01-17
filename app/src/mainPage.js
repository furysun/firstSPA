import css from './mainPage.css';

export function displayIndexPage() {

    var template = `
    <button>login</button>
    <button>registration</button>
    <p> test1 </p>
    <p id="demo"></p>
    
    
    <input type="text" id="testButton"/>
    
    <button id="clickMe">click me </button>
    
    `;

    document.getElementById("content").innerHTML = template;
    document.getElementById("demo").innerHTML = "Hello World!";
    document.write(Date());
    document.write('asdasdasdasdas');

    document.getElementById("clickMe").onclick = click;
}

function click(){
    console.log('click');
}
