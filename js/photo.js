function loadPhoto(){
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(Images => displayPhoto(Images))
}
loadPhoto();

function displayPhoto(photos){
  const photoContainer = document.getElementById('photoalbums');
  const div = document.createElement('div');
  div.classList.add("photoParent");
  photoContainer.appendChild(div);
  for(const photo of photos){
    const div2 = document.createElement('div');
    div2.innerHTML = `
      <img src= "${photo.thumbnailUrl}" >
    `
    div.appendChild(div2);
    console.log(photo);
  }
}