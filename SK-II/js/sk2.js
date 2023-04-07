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

// ---------------gnb mouseenter시 sub show -----------------


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

// -----------------------------
$(function(){
   // 스크롤 시 header fade-in
   $(document).on('scroll', function(){
      if($(window).scrollTop() > 100){
         $("#header").removeClass("deactive");
         $("#header").addClass("active");
         $('.gnb').addClass('scrolled');
         $('h1 img').attr('src','attr/logo/logo-pink.png');
      }else{
         $("#header").removeClass("active");
         $("#header").addClass("deactive");
         $('.gnb').removeClass('scrolled');
         $('h1 img').attr('src','attr/logo/logo-white.png');
      }
   })
   
});
