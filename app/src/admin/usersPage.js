const users = [
    {
        id: '0',
        login: 'rose',
        password: 'rose',
        firstName: 'Rose',
        dateOfBirth: '1993-03-25',
        gender: 'm',
        active: true
    },
    {
        id: '1',
        login: 'cat',
        password: 'cat',
        firstName: 'Cat',
        dateOfBirth: '1995-01-26',
        gender: 'f',
        active: false
    },
    {
        id: '2',
        login: 'miv',
        password: 'miv',
        firstName: 'Niv',
        dateOfBirth: '1978-01-26',
        gender: 'f',
        active: true
    }
];

export function displayUsersPage() {
    const template = `<h1>user</h1>
    <table id="users" style="border-style: dashed">
    </table>
    
    <form>
        <input id="id" type="text"/>
        <input id="login" type="text"/>
        <input id="password" type="text"/>
        <input id="firstName" type="text"/>
        <input id="dateOfBirth" type="date"/>
        
            <select id="gender">
              <option value="f">f</option>
              <option value="m">m</option>
            </select>
        
        <form action="/action_page.php">
            <input id="active" type="checkbox" name="vehicle1" value="active"> active<br>
        </form>
        
        <input type="button" id="add" value="add"/>
    </form>    
    `;

    document.getElementById("container").innerHTML = template;
    document.getElementById("add").onclick = addUser;
    drawUserTable();
}


function drawUserTable() {
    const table = document.getElementById("users");
    const headers = `   
     <tr>
        <th> Id</th>
        <th> Name</th>
        <th> Password</th>
        <th> FirstName</th>
        <th> Date Of Birth</th>
        <th> Gender</th>
        <th> Active</th>
     </tr>
      <tr>
        <td></td>
        <td></td>
      </tr>
    `;

    table.innerHTML = headers;

    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);

        let row = table.insertRow(table.rows.length); // tr

        let idCell = row.insertCell(0);
        let loginCell = row.insertCell(1);
        let passwordCell = row.insertCell(2);
        let firstNameCell = row.insertCell(3);
        let dateOfBirthCell = row.insertCell(4);
        let genderCell = row.insertCell(5);
        let active = row.insertCell(6);

        idCell.innerText = users[i].id;
        loginCell.innerText = users[i].login;
        passwordCell.innerText = users[i].password;
        firstNameCell.innerText = users[i].firstName;
        dateOfBirthCell.innerText = users[i].dateOfBirth;
        genderCell.innerText = users[i].gender;
        active.innerText = users[i].active;
    }
}

function addUser() {
    const id = document.getElementById("id").value;
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("firstName").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const gender = document.getElementById("gender").value;
    const active = document.getElementById("active").value;

    const newUser = {
        id: id,
        login: login,
        password: password,
        firstName: firstName,
        dateOfBirth: dateOfBirth,
        gender: gender,
        active: active
    };

    users.push(newUser);
    drawUserTable();
    document.getElementById("id").value = '';
    document.getElementById("login").value = '';
    document.getElementById("password").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById("dateOfBirth").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("active").value = '';
}