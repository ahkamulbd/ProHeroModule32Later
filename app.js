//console.log("APP File ");

// JSON Placeholder Default API

// function loadData2() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(res => res.json())
//         .then(data => console.log(data))
// }

// JSON Placeholder Users API

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    console.log(data);
}

