// -------------------------------------------------
$(function(){
   // const headerH=$('header').outerHeight();
   const defaultTop=parseInt($('aside').css('top'));
   let targetPosition=0;
   $(window).scroll(function(){
      targetPosition=$(document).scrollTop()+150;
      if(targetPosition<=defaultTop){
         targetPosition=defaultTop;
      }
      $('aside').stop().animate({top:targetPosition},800)
   });
});