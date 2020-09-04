const posts = [
    {title: 'First Post', body: 'This is the body'},
    {title: 'Second Post', body: 'This is the second body'}
];

function getPosts(){
    setTimeout(() =>{
    let output = '';
    posts.forEach((post, index) =>{
        output += `<li> ${post.title} </li>`;
    });
    document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(() =>{
        posts.push(post);
        callback();
    }, 2000)
}
getPosts();

createPost({
    title: 'This is the third post',
    body: 'The post that is'
}, getPosts)