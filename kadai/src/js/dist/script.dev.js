"use strict";

$(function () {
  // ボタン消す
  $(".pagetop").hide(); // スクロールしたらボタン現れる
  // 上に戻ったらボタン消える

  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $(".pagetop").fadeIn();
    } else {
      $(".pagetop").fadeOut();
    }
  }); // ボタン押されたら

  $(".pagetop").click(function () {
    $("body, html").animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});