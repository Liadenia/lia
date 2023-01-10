
$(function(){
    $(document).on('touchplay',function(){});
    $('html,body').animate({scrollTop:'5px'}, 200);
    $('.play').on('click',function(){
        window.location.href="game_play.html";
    });
    $('.howtoplay').on('click',function(){
        window.location.href="game_howtoplay.html";
    });

    $("h1, h2").on("click",function () {
        window.location.href = "index.html";
    });
});