$(function(){
    $(document).on('touchplay', function(){});
    $('html,body').animate({scrollTop:'5px'},200);

let level=0;
$('#intro_page').show();
$('#playing').hide();

$('.box>a').on('click', function(event){
    event.preventDefault();
    let index=$(this).parent().index();
    switch(index){
        case "0": level=2000; break;
        case "1": level=1500; break;
        default: level=1000; 
    }
});

$('.play').on('click', function(){
    if(level!=0){
        $('#intro_page').hide();
        $('#playing').show();
        timer=setInterval(randomTarget,level);
        counter=setInterval(countdown,1000);
    }
});


let second=10;
let score=0;
let timer;
let counter;
let num=0;
let clickable=false;
function randomTarget(){
clickable=true;
num=Math.floor(Math.random()*9);
$('.a'+num).find('img').stop().fadeIn(100).delay(600).fadeOut(100);
}
//timer=setInterval(randomTarget,level);
$('.cat').find('img').on('click',function(){
if(clickable){
    score++;
    $('#playing>.score').text('SCORE :'+score*100);
    clickable=false;
}
});


function countdown(){
    second--; console.log(second);
    $('.time').text('TIME :'+second);
    if(second==0){
        $('.popup').show();
        $('.popup>.game_over').hide();
        clearInterval(counter);
        clearInterval(timer);
        setTimeout(function(){
            $('#playing').hide();
            $('#end_page').show();
            $('#end_page').find('.score').text(score*100);
        },1500)
    }
}
clearTimeout('.popup');




$('#end_page>.replay').on('click',function(){
$('#intro_page').show();
$('#playing').hide();
$('#end_page').hide();
clearInterval(counter);
clearInterval(timer);
score=0;
$('#playing>.score').text('SCORE :'+score*10);
$('#end_page').find('.score').text(score*10);
level=0;
second=10;
});

$('#intro_page>.howtoplay').on('click',function(){
    window.location.href="game_howtoplay.html";
});
$('#end_page>.title>a').on('click',function(){
    window.location.href="game_info.html";
});

});