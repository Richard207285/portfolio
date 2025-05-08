// bact to top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//call to action button
const heroHeader = document.querySelector('.hero_header');

const moveBtn = (e) => {
    const heroBtn = document.querySelector('.hero_btn');
    if(!e[0].isIntersecting){
        heroBtn.classList.add('floating');
    }
    if(e[0].isIntersecting){
        heroBtn.classList.remove('floating');
    }
}

const moveBtnInersectionObs = new IntersectionObserver(moveBtn);
moveBtnInersectionObs.observe(heroHeader);

//message
function txtMessage(){
  alert('Your message have been sent');
}
