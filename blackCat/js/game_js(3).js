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
        life=3;
    }
});


let second=10;
let score=0;
let timer;
let counter;
let num=0;
let clickable=false;
let changeNum=0;
let life=3;
function randomTarget(){
clickable=true;
    num=Math.floor(Math.random()*9);
    changeNum=Math.floor(Math.random()*4);
    $('.a'+num).find('img').attr('src','img/item'+changeNum+'.png').stop().fadeIn(100).delay(600).fadeOut(100);
    // $('.cat>img').attr('src','img/item'+changeNum+'.png');
}
    $('.cat').on('click',function(){
        if(clickable){
            if(changeNum==0){
                life--;
                $('.star').text('LIFE x'+ life);
                $('.star>img').eq($('.star>img').length-1).remove();
            }else if(changeNum==1){
                score+=100;
            }else if(changeNum==2){
                score+=150;
            }else if(changeNum==3){
                score-=100;
            }
            if(life==0){
                $('.popup').show();
                $('.popup>.game_over').show();
                $('.popup>.times_up').hide();
                clearInterval(counter);
                clearInterval(timer);
                setTimeout(function(){
                    $('#playing').hide();
                    $('#end_page').show();
                    $('#end_page').find('h2').empty().text('GAMEOVER...');
                },1500)
            }else{
                $('#playing>.score').text('SCORE :'+score);
                clickable=false;
            }
            
        }
        });
// let cat=new Array;

    
//     // if(cat.indexOf(changeNum)===-1){
//     //     // cat.push(changeNum);
//     //     $('.a'+num).find('img').eq(changeNum).attr('src','img/item'+num+'.png');
//     // }else{
//     //     i--;
//     // }
    
// }



function countdown(){
    second--; console.log(second);
    $('.time').text('TIME :'+second);
    if(second==0){
        $('.popup').show();
        $('.popup>.times_up').show();
        $('.popup>.game_over').hide();
        clearInterval(counter);
        clearInterval(timer);
        setTimeout(function(){
            $('#playing').hide();
            $('#end_page').show();
            $('#end_page').find('.score').text(score*100);
            $('.popup').hide();
        },1500)
    }
}


        $('#end_page>.replay').on('click',function(){
        $('#intro_page').show();
        $('#playing').hide();
        $('#end_page').hide();
        $('.popup').hide();
        life=3;
        score=0;
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