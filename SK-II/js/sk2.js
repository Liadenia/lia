$(function() {
   var nav = $('header#innerbox');
   var navHeight = nav.outerHeight();
   var section1 = $('section#banner');
   
   $(window).scroll(function () {
   var scrollTop = $(header).scrollTop();

   if (scrollTop > section1.offset().top - navHeight) {
      nav.addClass('scroll');
   } else {
      nav.removeClass('scroll');
   }
   });
});
