// $(function() {
//    var nav = $('header#innerbox');
//    var navHeight = nav.outerHeight();
//    var section1 = $('section#banner');
   
//    $(window).scroll(function () {
//    var scrollTop = $(header).scrollTop();

//    if (scrollTop > section1.offset().top - navHeight) {
//       nav.addClass('scroll');
//    } else {
//       nav.removeClass('scroll');
//    }
//    });
// });

window.addEventListener('scroll', function() {
   var nav = document.getElementById('navigation');
   var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
   
   if (scrollPos >= window.innerHeight) {
   nav.classList.add('scrolled');
   } else {
   nav.classList.remove('scrolled');
   }
});