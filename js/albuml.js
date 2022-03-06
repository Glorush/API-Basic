function loardAlbums(){
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loardAlbums();

function displayAlbums(albums){
  const albumsContainer = document.getElementById('albums');
  for(const album of albums){
    const div = document.createElement('div');
    div.classList.add('albums_item');
    div.innerHTML = `
      <h4>${album.id}</h4>
      <h2>${album.title}</h2>
    `
    albumsContainer.appendChild(div);
    console.log(album);
  }
}