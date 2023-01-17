$(function () {
  $(document).on("touchplay", function () {});
  $("html,body").animate({ scrollTop: "5px" }, 200);

  let level = 0;
  $("#intro_page").show();
  $("#playing").hide();

  $(".box>a").on("click", function (event) {
    event.preventDefault();
    let index = $(this).parent().index();
    switch (index) {
      case "0":
        level = 2000;
        break;
      case "1":
        level = 1500;
        break;
      default:
        level = 1000;
    }
  });

  $(".play").on("click", function () {
    if (level != 0) {
      $("#intro_page").hide();
      $("#playing").show();
      timer = setInterval(randomTarget, level);
      counter = setInterval(countdown, 1000);
      life = 3;
    }
  });

  let second = 10;
  let score = 0;
  let timer;
  let counter;
  let num = 0;
  let clickable = false;
  let changeNum = 0;
  let life = 3;


  function randomTarget() {
    clickable = true;
    num = Math.floor(Math.random() * 9);
    changeNum = Math.floor(Math.random() * 4);
    $(".a" + num)
      .find("img")
      .attr("src", "img/item" + changeNum + ".png")
      .stop()
      .fadeIn(100)
      .delay(600)
      .fadeOut(100);
    // $('.cat>img').attr('src','img/item'+changeNum+'.png');
  }

  // replace - attr.src 변수하나 추가, 함수 이용해서 이미지 클릭시 변환 - 곧 다시 원래의 이미지로 변환하기 하는 것 //
  $(".cat").on("click", function () {
    // console.log('src');
    if (clickable) {
      if (changeNum == 0) {
        life--;
        $(".life").text("LIFE x " + life);
        $(".life>img")
          .eq($(".life>img").length - 1)
          .remove();
        $(".cat_box").find("img").attr("src", "blackcat_img/cat_head3.png").show();
        $(".cat_talk").text("폭탄! ㅠㅜㅠㅠㅠ").show();
      } else if (changeNum == 1) {
        score += 100;
        $(".cat_box").find("img").attr("src", "blackcat_img/cat_head0.png").show();
        $(".cat_talk").text("털실 너무 좋아!!").show();
      } else if (changeNum == 2) {
        score += 150;
        $(".cat_box").find("img").attr("src", "blackcat_img/cat_head2.png").show();
        $(".cat_talk").text("재밌다! 더 놀아줘!").show();
      } else if (changeNum == 3) {
        score -= 100;
        $(".cat_box").find("img").attr("src", "blackcat_img/cat_head1.png").show();
        $(".cat_talk").text("배불러요..").show();
      }
      if (life == 0) {
        $(".popup").show();
        $(".popup>.game_over").show();
        $(".popup>.times_up").hide();
        clearInterval(counter);
        clearInterval(timer);
        setTimeout(function () {
          $("#playing").hide();
          $("#end_page").show();
          $("#end_page").find("h2").empty().text("GAMEOVER...");
          $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/cat4.png").show();
        }, 1500);
      } else {
        $("#playing>.score").text("SCORE :" + score);
        clickable = false;
      }
    }
});

  
let LifeS;
let ScoreN;

  function countdown() {
    second--;
    console.log(second);
    $(".time").text("TIME :" + second);
    //console.log(life, score);
    if (second == 0) {
      $(".popup").show();
      $(".popup>.times_up").show();
      $(".popup>.game_over").hide();
      clearInterval(counter);
      clearInterval(timer);
      setTimeout(function () {
        $("#playing").hide();
        $("#end_page").show();
        $("#end_page").find("h2").text("MY SCORE : "+score);
        $(".popup").hide();     
        if(life>=3){
          LifeS=1;
        }else if(life>=2){
          LifeS=2;
        }else if(life>=1){
          LifeS=3;
        }
        if(score>=800){
          ScoreN=4;
        }else if(score>=600){
          ScoreN=3;
        }else if(score>=400){
          ScoreN=2;
        }else if(score>=200){
          ScoreN=1;
        }else if(score>=0){
          ScoreN=0;
        }
        //console.log(life, score);
        //console.log(LifeS, ScoreN);
        let url = 'blackcat_img/costume'+LifeS+'-'+ScoreN+'.png';
        $("#end_page").find(".score_cat>img").attr('src', url).show()
  
      
        
        // let url = `blackcat_img/costume${LifeS}_${ScoreN}.png`;


        /* 노가다 if문
        if (score > 800 && life==3){
          $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume1-4.png").show();
        }else if (score > 600 && life==3){
          $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume1-2.png").show();
        }else if (score > 400 && life==3){
          $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume1-1.png").show();
        }else if (score < 200 && life==3){
        $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume1-0.png").show();
      }

       else if (score > 800 && life==2){
        $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume2-4.png").show();
      }else if (score > 600 && life==2){
        $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume2-2.png").show();
      }else if (score > 400 && life==2){
        $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume2-1.png").show();
      }else if (score < 200 && life==2){
      $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume2-0.png").show();
    }

     else if (score > 800 && life==1){
      $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume3-4.png").show();
    }else if(score > 600 && life==1){
      $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume3-2.png").show();
    }else if(score > 400 && life==1){
      $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume3-1.png").show();
    }else if(score < 200 && life==1){
    $('#end_page').find('.score_cat>img').attr("src", "blackcat_img/costume3-0.png").show();
  };
  */
      }, 1500);
    }
  }






  $("#end_page>.replay").on("click", function () {
    $("#intro_page").show();
    $("#playing").hide();
    $("#end_page").hide();
    $(".popup").hide();
    life = 3;
    score = 0;
    level = 0;
    second = 10;
    
    $("#playing>.score").text("SCORE :" + score);
    $(".time").text("TIME :" + second);
    $(".life").text("LIFE x " + life);
    $(".cat_box").find("img").attr("src", "blackcat_img/cat_head0.png");
    $(".cat_talk").text("나랑 같이 놀아요!");
  });

  
  $("h1, h2").on("click",function () {
    window.location.href = "game_intro.html";
    window.location.href = "index.html";
  });
  /*--------------- 게임 인덱스 - 인트로 페이지 링크연결 -------------*/


  $("#intro_page>.howtoplay").on("click", function () {
    window.location.href = "game_howtoplay.html";
  });
  $("#end_page>.title>a").on("click", function () {
    window.location.href = "game_info.html";
  });
});
