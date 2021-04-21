// HAMBURGER MENU
document.querySelector('.hamburger-menu').addEventListener("click",()=>{
  carousel.style.animation=''
  document.querySelector('.container').classList.toggle('change')
})

// CAROUSEL
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.querySelector('.carousel-button-next').addEventListener('click', moveToNextSlide);
document.querySelector('.carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slides[slidePosition].classList.remove("carousel-item-hidden");
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.remove("carousel-item-hidden");
    slides[slidePosition].classList.add("carousel-item-visible");
}

const btn=document.querySelector('.banner button')
const carousel=document.querySelector('.carousel')
const mainImg=document.querySelector('.header .img-wrapper img')
btn.addEventListener('click',()=>{
  document.querySelector('.container').classList.remove('change')
  carousel.style.animation='carouselFadeIn 0.9s forwards'
})
mainImg.addEventListener('click',()=>{
  document.querySelector('.container').classList.remove('change')
  carousel.style.animation=''
})



//NEXT
