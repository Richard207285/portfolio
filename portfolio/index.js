
// words.forEach(word => {
//     let letters = word.textContent.split("");
//     word.textContent = "";
//     letters.forEach(letter => {
//       let span = document.createElement("span");
//       span.textContent = letter;
//       span.className = "letter";
//       word.append(span);
//     });
//   });
  
//   let currentWordIndex = 0;
//   let maxWordIndex = words.length - 1;
//   (words[currentWordIndex] as HTMLElement).style.opacity = "1";
  
//   let rotateText = () => {
//     let currentWord = words[currentWordIndex];
//     let nextWord =
//       currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
//     // rotate out letters of current word
//     Array.from(currentWord.children).forEach((letter, i) => {
//       setTimeout(() => {
//         letter.className = "letter out";
//       }, i * 80);
//     });
//     // reveal and rotate in letters of next word
//     (nextWord as HTMLElement).style.opacity = "1";
//     Array.from(nextWord.children).forEach((letter, i) => {
//       letter.className = "letter behind";
//       setTimeout(() => {
//         letter.className = "letter in";
//       }, 340 + i * 80);
//     });
//     currentWordIndex =
//       currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
//   };
  
//   rotateText();
//   setInterval(rotateText, 4000);


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