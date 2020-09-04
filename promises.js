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

function createPost(post){
  return new Promise((resolve, reject) =>{
    setTimeout(() =>{
        posts.push(post);

        const error = false;
        if(!error){
            resolve();
        }else{
            reject(
                'Error'
            )
        }
    }, 2000)
  })  
}

//FIRST
// createPost({
//     title: 'This is the third post',
//     body: 'The post that is'
// }).then(getPosts)

//SECOND
// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//  setTimeout(resolve, 2000, 'Good Bye')
//  );
//  const promise4 = fetch ('https://jsonplaceholder.typicode.com/users')
//  .then(res => res.json());
//  Promise.all([promise1, promise2, promise3, promise4])
//  .then(values =>
//     console.log(values)
//     )

//THIRD ASYNC/AWAIT
async function init(){
    await createPost({title: 'Post 2222', body: 'This is the secod '});
    getPosts()
}
init();



