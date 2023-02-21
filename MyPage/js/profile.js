// -----------------------------첫번째 페이지 가로 스크롤-----------------------
const scroll=()=>{
    let scrollTop = window.pageYOffset;
    let offset1 = scrollTop - document.querySelector('#page1').offsetTop;
    if(scrollTop>=document.querySelector('#page1').offsetTop){
        document.querySelector('.main_info').style.left=`-${offset1}px`;
    }


// ----------------------------마지막 페이지 가로 스크롤------------------------

    let offset2 = scrollTop - document.querySelector('#page5').offsetTop;
    console.log(scrollTop, offset2);
    if(scrollTop>=document.querySelector('#page5').offsetTop){
        document.querySelector('#last_wrapper').style.left=`+${offset2}px`;
    }


}
window.addEventListener('scroll',()=>(
    scroll()
))

// ---------------------포트폴리오 버튼 클릭시 이동 및 사이즈 조절--------------

const portfolio = document.querySelector("#portfolio");
let portfolioClicked = false;

portfolio.addEventListener("click", function(event) {
event.preventDefault();
portfolioClicked = true;
window.scrollTo({
top: document.querySelector("#page1").offsetTop + 300 * window.innerWidth / 100,
left: 0,
behavior: 'smooth'
});
});


//-------------------------------contact GNB 클릭시 토글 페이지 보이기----------
$(function(){
    $('.contact').on('click', function(){
        $('.con-txt, .con-bg').toggleClass('on');
        $('.con-bg').fadeToggle(400)
    });

    $('.con-bg').on('click', function(){
        $('.con-txt, .con-bg').removeClass('on');
        $('.con-bg').fadeOut(400)
    });
});

// ------------------------page1 -2 intro page accordion----------------

const card = document.querySelectorAll('.card');

cards.forEach(card => {
    const header = card.querySelector('.card-header');
    const content = card.querySelector('.card-content');

header.addEventListener('click', () => {
    card.classList.toggle('open');
});
});