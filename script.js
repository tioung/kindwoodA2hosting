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

//BOIS COMPOSITE
const play=document.querySelector('.play-audio')
const audioKindwood=document.querySelector('.audio-kindwood')
let start=true
audioKindwood.addEventListener("ended", function(){
    start=true
})
play.addEventListener('click',()=>{
    if(start){
        audioKindwood.currentTime=0
        audioKindwood.play()
        start=false
    }else{
        audioKindwood.pause()
        start=true
    }
})

//CONTACT
const contactForm=document.querySelector('.contact-form')

contactForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  const name=contactForm.name.value
  const email=contactForm.email.value
  const subject=contactForm.subject.value
  const telephone=contactForm.telephone.value
  const message=contactForm.message.value

  Email.send({
    Host: "smtp.gmail.com",
    Username: "dakchoy@gmail.com",
    Password: "txscgswevqbzxhiy",
    To: 'dakchoy@gmail.com',
    From: `${email}`,
    Subject: `Kindwood: ${subject}`,
    Body: `Name: ${name}, Email: ${email}, Subject: ${subject}, Tel: ${telephone}<br><br>
          Message: ${message}`,
  })
  .then(function (message) {
    alert("Thank you for your email. We will get back to you soon")
  });

  contactForm.reset()
})
