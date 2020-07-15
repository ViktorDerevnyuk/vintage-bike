function toggleMobileMenu(){
    document.querySelector('#menu').classList.toggle('active');
    document.querySelector('.mobile-bar').classList.toggle('active');

}

arrowTop.onclick = function() {
    window.scrollTo(pageXOffset, 0);
    // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
  };
  window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
  });