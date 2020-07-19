'use strict';
{
  $(function(){

    //Q&Aアコーディオン
    const $question = $('.c-question');//questionを取得

    $('.c-answer:first-of-type').css('display','block')//最初のquestionを表示
    $question.on("click", function() {
    $(this).next().slideToggle();
    });
    });
}