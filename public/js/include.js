jQuery(function ($) {
  (function () {
    $(" #nav ul ").css({ display: "none" });
    $(" #nav li").hover(
      function () {
        $(this)
          .find("ul:first")
          .css({ visibility: "visible", display: "none" })
          .fadeIn(300);
      },
      function () {
        $(this).find("ul:first").css({ display: "none" });
      },
    );
  })();
  (function () {
    $(".tabs").each(function () {
      var $tabLis = $(this).find("li");
      var $tabContent = $(this).next(".tab-content-wrap").find(".tab-content");
      $tabContent.hide();
      $tabLis.first().addClass("active").show();
      $tabContent.first().show();
    });
    $(".tabs").on("click", "li", function (e) {
      var $this = $(this);
      var parentUL = $this.parent();
      var tabContent = parentUL.next(".tab-content-wrap");
      parentUL.children().removeClass("active");
      $this.addClass("active");
      tabContent.find(".tab-content").hide();
      var showById = $($this.find("a").attr("href"));
      tabContent.find(showById).fadeIn();
      e.preventDefault();
    });
  })();
  (function () {
    "use strict";
    $(".accordion").on("click", ".title", function (event) {
      event.preventDefault();
      $(this).siblings(".accordion .active").next().slideUp("normal");
      $(this).siblings(".accordion .title").removeClass("active");
      if ($(this).next().is(":hidden") === true) {
        $(this).next().slideDown("normal");
        $(this).addClass("active");
      }
    });
    $(".accordion .content").hide();
    $(".accordion .active").next().slideDown("normal");
  })();
  (function () {
    $(".information-boxes .close").on("click", function () {
      $(this).parent().slideUp(300);
    });
  })();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-up").stop(true, true).fadeIn();
    } else {
      $(".scroll-up").stop(true, true).fadeOut();
    }
  });
  $(".scroll-up").click(function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
  if (!is_touch_device()) {
    if ($(".animated")[0]) {
      jQuery(".animated").css("opacity", "0");
    }
  }
  function is_touch_device() {
    return "ontouchstart" in window || "onmsgesturechange" in window;
  }
});
