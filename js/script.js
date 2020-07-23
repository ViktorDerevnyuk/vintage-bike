arrowTop.onclick = function () {
  window.scrollTo(pageXOffset, 0);
  // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
};
window.addEventListener('scroll', function () {
  arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});

//по умолчанию активен первый твит
let slideIndex = 1;
showSlides(slideIndex);
function currentTwit(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let slides = document.getElementsByClassName("slider__content");
  let dots = document.getElementsByClassName("slider__dot");
  //все остальные твиты скрыты
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* Open/close overlay navigation */
function openNav() {
  document.getElementById("top-navigation").classList.toggle("active");
  document.getElementById("menu-icon__top").classList.toggle("active");
  document.getElementById("menu-icon__middle").classList.toggle("active");
  document.getElementById("menu-icon__bottom").classList.toggle("active");
}

// уменьшение размера навигации при скролле
window.addEventListener('scroll', function () {
  if (pageYOffset > 99) {
    document.getElementById("header__logo").classList.add('scrolled');
  } else {
    document.getElementById("header__logo").classList.remove('scrolled');
  }
});