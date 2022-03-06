
function loadData(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}

function loadUser(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}
function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}
function displayUser(data){
  const ul = document.getElementById('users');
  for(const user of data){
    // console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    console.log(li);
    ul.appendChild(li);
  }
}