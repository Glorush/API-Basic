function postsData(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPostData(data))
}
postsData();
function displayPostData(posts){
  // console.log(posts);
  const postContainer = document.getElementById('posts');
  for(const post of posts){
    const div = document.createElement('div');
    div.classList.add('post')
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    postContainer.appendChild(div);
    console.log(post)

  }
}