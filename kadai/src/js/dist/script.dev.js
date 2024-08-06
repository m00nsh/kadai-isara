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
  // 最初の項目を開いた状態にする
  $(".accordion__container:first-child .accordion__inner").show();
  $(".accordion__container:first-child .accordion__ttl").addClass("open");
  $(".accordion__ttl--js").click(function () {
    var $this = $(this); // クリックされた項目が既に開いている場合は何もしない

    if ($this.hasClass("open")) {
      return;
    } // 全ての項目を閉じる


    $(".accordion__inner--js").slideUp();
    $(".accordion__ttl--js").removeClass("open"); // クリックされた項目を開く

    $this.next(".accordion__inner--js").slideDown();
    $this.addClass("open");
  });
});