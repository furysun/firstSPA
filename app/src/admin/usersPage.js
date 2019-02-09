const users = [
    {
        login: 'rose',
        password: 'rose'
    },
    {
        login: 'cat',
        password: 'cat'
    },
    {
        login: 'miv',
        password: 'miv'
    }
];

export function displayUsersPage() {
    const template = `<h1>user</h1>
    <table id="users" style="border-style: dashed">
      <tr>
        <th>name</th>
        <th>password</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>
    `;

    document.getElementById("container").innerHTML = template;
    drawUserTable();
}

function drawUserTable() {
    const table = document.getElementById("users");

    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);

        let row = table.insertRow(table.rows.length); // tr
        let loginCell = row.insertCell(0);
        let passwordCell = row.insertCell(1);

        loginCell.innerText = users[i].login;
        passwordCell.innerText = users[i].password;
    }
}