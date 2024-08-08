$(function () {
  // ボタン消す
  $(".pagetop").hide();

  // スクロールしたらボタン現れる
  // 上に戻ったらボタン消える
  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
      $(".pagetop").fadeIn();
    } else {
      $(".pagetop").fadeOut();
    }
  });

  // ボタン押されたら
  $(".pagetop").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});

// アコーディオンメニュー
$(function () {
  // 最初の項目を開いた状態にする
  $(".accordion__container:first-child .accordion__inner--js").show();
  $(".accordion__container:first-child .accordion__ttl--js").addClass("open");
  $(".accordion__ttl--js").click(function () {
    var $this = $(this);
    $this.next(".accordion__inner--js").slideToggle();
    $this.toggleClass("open");
  });
  $(".accordion__ttl--js").click(function () {
    $(".accordion__ttl--js").not($this).next(".accordion__inner--js").slideUp();
    $(".accordion__ttl--js").not($this).removeClass("open");
  });
});
