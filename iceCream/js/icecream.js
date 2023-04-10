
// ----------------------------event page scroll js-----
let newsWrapper = document.querySelector('.news_wrapper');
let controlBar = document.querySelector('.control_bar');
let ctrBtn = document.querySelector('.ctr_btn');

newsWrapper.addEventListener('scroll', function() {
  let scrollPercentage = newsWrapper.scrollTop / (newsWrapper.scrollHeight - newsWrapper.clientHeight);
  let controlBarHeight = newsWrapper.clientHeight * scrollPercentage;
  let ctrBtnTop = newsWrapper.clientHeight * scrollPercentage - ctrBtn.clientHeight / 2;

  controlBar.style.height = '680px';
  controlBar.style.top = '0px';
  controlBar.style.position = 'relative';

  let maxBtnTop = 680 - ctrBtn.clientHeight;
  let btnTop = Math.min(maxBtnTop, scrollPercentage * maxBtnTop);
  ctrBtn.style.top = btnTop + 'px';
  ctrBtn.style.position = 'relative';
});

// ----------------------------swiper js-----

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  autoHeight: false,
  centeredSlides: true,
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
