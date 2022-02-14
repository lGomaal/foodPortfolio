const headerMobileToggle = document.getElementsByClassName('menuToggle')[0]
const navBar = document.getElementsByTagName('nav')[0]
const topScroll = document.getElementsByClassName('up-button')[0]

headerMobileToggle.addEventListener('click', ()=> {
    headerMobileToggle.firstElementChild.classList.toggle('fa-times')
    navBar.classList.toggle('active')
})



const gallery_cards_container = document.getElementById('gallery').getElementsByClassName('cards-containter')[0]
const count_gallery = 9
console.log(gallery_cards_container)
for (let index = 1; index <=count_gallery; index++) {
    gallery_cards_container.insertAdjacentHTML('beforeend', `<div class="card">
    <img src="images/g-${index}.jpg" alt="" class="img-card">
    <div class="card-container">
        <h3>Tasty Food</h3>
        <p>Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Deleniti, Ipsum.</p>
        <a href="#" class="button">order now</a>
    </div>
</div>`)
}


window.onscroll = () =>{

  headerMobileToggle.firstElementChild.classList.remove('fa-times');
  navBar.classList.remove('active');

  if(window.scrollY < 100){
    topScroll.classList.add('active');
  }else{
    topScroll.classList.remove('active');
  }

}


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 1500);
}

window.onload = fadeOut();