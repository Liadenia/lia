$(function(){
// -------------------------------loading page----------------------------
    // $(window).container(function() { $(".container").hide();});


/*---------------------------Gnb desk-menu------------------------- */
    let mouseoverstate=false;
    $('.sub').hide();
    $('.gnb>li').on('mouseenter',function(){
        if(!mouseoverstate){
            $(this).children('.sub').stop().slideDown(200);
            $('.sub_bg').stop().slideDown(200);
        }else{ // li간 이동진입
            $('.sub:visible').hide(); //.stop().fadeIn(150);
            $(this).children('.sub').show();
        }
        mouseoverstate=true;
    });
    $('.gnb').on('mouseleave',function(){
        $(this).find('.sub').stop().slideUp(200);
        $('.sub_bg').stop().slideUp(200)
        mouseoverstate=false;
    });
/*---------------------------Gnb desk-menu finish------------------- */
/*---------------------------Gnb side-menu-------------------------- */ 
    $('.sub_m').hide();
    $('.gnb_menu>li').on('mouseenter',function(){
        if(!mouseoverstate){
            $(this).children('.sub_m').stop().show(200);
        }else{
            $('.sub_m:visible').hide(); //.stop().fadeIn(150);
            $(this).children('.sub_m').show();
        }
        mouseoverstate=true;
    });
    $('.gnb_menu').on('mouseleave',function(){
        $(this).find('.sub_m').stop().hide(200);
        mouseoverstate=false;
    });
/*---------------------------Gnb side-menu finish----------------- */ 
/*----------------------------Toggle menu------------------------- */    
    $('.toggle').on('click', function(){
        $(this).toggleClass('on');
        $('#nav_menu').toggleClass('on');
        $('.bg_menu').fadeToggle(400)
    });

    $('.close_btn').on('click', function(){
        $(this).toggleClass('off');
        $('#nav_menu').toggleClass('off');
        $('.bg_menu').fadeToggle(400)
    });
/*----------------------------Toggle menu finish------------------ */
/*---------------------------flip-card---------------------------- */
    
    
    for(let i=0; i<3; i++ ){
        document.querySelectorAll('.card')[i].addEventListener('click',function(event){
            let elem=event.currentTarget;
        if (elem.style.transform == "rotateY(180deg)") {
                elem.style.transform = "rotateY(0deg)";
            } else {
                elem.style.transform = "rotateY(180deg)";
            }
        })
    }

    // let card = document.querySelector('.card');
    
    // card.addEventListener('click', click);
    // function click(event) {
    // let elem=event.currentTarget;
    //     if (elem.style.transform == "rotateY(180deg)") {
    //             elem.style.transform = "rotateY(0deg)";
    //         } else {
    //             elem.style.transform = "rotateY(180deg)";
    //         }
    // }
    
    // $(function(){
    //     $('.front').quickFlip('.back');
    // });



/*---------------------------flip-card finish--------------------- */
/*--------------------------Gallery Sub 연결----------------------*/
/*
    $('h1').on('click',function(){
        window.location.href="../gallery_index.html";
    });
    $('.sub1-1').on('click',function(){
        window.location.href="../Gallery/gallery_intro.html";
    });
    $('.sub2-1').on('click',function(){
        window.location.href="../Art_space/gallery_space.html";
    });
    $('.sub4-1').on('click',function(){
        window.location.href="../Artist/gallery_artist.html";
    });
*/
/*--------------------------Gallery Sub 끝----------------------*/
});




