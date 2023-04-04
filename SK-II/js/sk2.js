// ----------------aside tab 스크롤시 움직임---------------------------------
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

// --------------------------------


// $('.sub').hide();

// $('.gnb>li').on('mouseenter', function () {
// if ($(this).children('.sub').is(':hidden')) {
//    $('.sub:visible').hide();
//    $(this).children('.sub').stop().slideDown(200);
// }
// });

// $('.gnb>li').on('mouseleave', function () {
// $(this).children('.sub').stop().slideUp(200);
// });

// $('.gnb').on('mouseleave', function () {
// $('.sub').stop().slideUp(200);
// });

let mouseoverstate = false;

$('.sub').hide();
$('.gnb>li>a>span').hide();

$('.gnb>li').on('mouseenter', function () {
  console.log('a mouseenter');
  if (!mouseoverstate) {
    $('.sub', this).stop().slideDown(200);
    $('> a > span', this).show();
  } else { // li간 이동진입
    $('.sub:visible').hide(); //.stop().fadeIn(150);
    $('.sub', this).show();
    $('> a > span', this).show();
  }
  mouseoverstate = true;
});

$('.gnb>li').on('mouseleave', function () {
  $('.sub', this).stop().slideUp(200);
  $('> a > span').hide();
  mouseoverstate = false;
});

$('.gnb').on('mouseleave', function () {
  $('.sub').stop().slideUp(200)
  $('.gnb>li>a>span').hide();
  mouseoverstate = false;
});
