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
}); // アコーディオンメニュー

$(function () {
  // .js-accordion_titleをクリックすると
  $(".accordion_title--js").click(function () {
    // クリックした次の要素を展開
    $(this).next(".accordion__inner--js").slideToggle(); // 展開するときjs-accordion_titleクラスにopenクラスを追加してアイコンを回転

    $(this).toggleClass("open"); // クリックされた.js-accordion_title以外の.js-accordion_titleに隣接する.js-accordion_innerを閉じる処理

    $(".accordion__ttl--js").not($(this)).next(".js-accordion_inner").slideUp(); // 閉じられた他の.js-accordion_title要素に追加したopenクラスを外しアイコンを元に戻す処理

    $(".accordion__ttl--js").not($(this)).removeClass("open");
  });
});