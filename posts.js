function loadPosts() {
    //console.log('Loading Posts')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

// function displayPosts(data) {
//     //console.log(data);
//     for (const post of data) {
//         console.log(post);
//     }
// }

// Done by myself
// function displayPosts(data) {
//     const div = document.getElementById('posts-container');
//     for (const post of data) {
//         console.log(post.title);
//         const p = document.createElement('p');
//         p.innerText = post.title;
//         div.appendChild(p)
//     }
// }

// Done according to Lecture in Module

function displayPosts(posts) {
    const postContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        console.log(post);
        postDiv.innerHTML = `
            <h4>User - ${post.userId}</h4>
            <h5>Post - ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
    }
}

loadPosts();