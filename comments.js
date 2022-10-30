//console.log('Comments File is Here')

function commentsUsers() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => displayComments(data))
}

function displayComments(data) {
    //console.log(data)
    const commentsContainer = document.getElementById('comments-container');
    for (const comment of data) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('comments');
        console.log(comment);
        postDiv.innerHTML = `
            <h3>ID: ${comment.id}</h3>
            <h4>Name: ${comment.name}</h4>
            <h5>Email: ${comment.email}</h5>
            <p>Body: ${comment.body}</p>
        `;
        commentsContainer.appendChild(postDiv);
    }
}

commentsUsers();