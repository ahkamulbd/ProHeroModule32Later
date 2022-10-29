// JSON Placeholder Users API

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => displayUsers2(data))
}

// function displayUsers2(data) {
//     for (const user of data) {
//         //console.log(user);
//         console.log(user.name);
//         //console.log(user.email);
//         //console.log(user.website);
//     }
// }

// Append Element from API

function displayUsers2(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}