export function displayLoginPage() {
    var headerTemplate = `<h1>Header</h1>`;

    var template = `
    <form >
        <p>
            <input id="login" placeholder=" login"  type="text" />
        </p>
        <p>
            <input id="password" placeholder=" password"  type="password" />
        </p>

        <input type="submit" value="ok" name="ok"/>
    </form>`;


    document.getElementById("container").innerHTML = template;
}