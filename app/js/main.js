$(function () {
  $(".header__slider-dots").slick({
    asNavFor: ".header__slider",
    arrows: false,
    dots: false,
    slidesToShow: 4,
    focusOnSelect: true,
  });

  $(".header__slider").slick({
    arrows: false,
    dots: false,
    asNavFor: ".header__slider-dots",
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    speed: 550,
    draggable: false,
    waitForAnimate: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });

  $(window).on("resize", function () {
    $(".header__slider-dots")[0].slick.refresh();
  });

  $(".header__slider-dots").on("afterChange", function (event, slick, currentSlide) {
    if (currentSlide == "1") {
      $(".line, .dot , .shore-title").removeClass("_active");
      $(".east-shore-line, .east-shore-title, .east-shore-dot ").addClass("_active");
    }
    if (currentSlide == "2") {
      $(".line, .dot , .shore-title").removeClass("_active");
      $(".north-shore-line, .north-shore-title, .north-shore-dot ").addClass("_active");
    }
    if (currentSlide == "3") {
      $(".line, .dot , .shore-title").removeClass("_active");
      $(".south-shore-line, .south-shore-title, .south-shore-dot ").addClass("_active");
    }
    if (currentSlide == "0") {
      $(".line, .dot , .shore-title").removeClass("_active");
      $(".west-shore-line, .west-shore-title, .west-shore-dot ").addClass("_active");
    }
  });

  $(".header__search").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("_active");
    $(".header__search-button").toggleClass("_active");
    $(".header__input").toggleClass("_active");
  });

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = `<span>${dd}</span>` + "" + mm + " | " + yyyy;
  $(".header__date").html(today);

  $(".surf__slider").slick({
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    draggable: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  //-- оптимизировать --
  $(".dot1").on("click", function () {
    $(".map-dot").not($(this)).removeClass("_active");
    $(".surf__map-info-box").not($(".box1")).removeClass("_active");
    $(this).toggleClass("_active");
    $(".box1").toggleClass("_active");
  });
  $(".dot2").on("click", function () {
    $(".map-dot").not($(this)).removeClass("_active");
    $(".surf__map-info-box").not($(".box2")).removeClass("_active");
    $(this).toggleClass("_active");
    $(".box2").toggleClass("_active");
  });
  $(".dot3").on("click", function () {
    $(".map-dot").not($(this)).removeClass("_active");
    $(".surf__map-info-box").not($(".box3")).removeClass("_active");
    $(this).toggleClass("_active");
    $(".box3").toggleClass("_active");
  });
  $(".dot4").on("click", function () {
    $(".map-dot").not($(this)).removeClass("_active");
    $(".surf__map-info-box").not($(".box4")).removeClass("_active");
    $(this).toggleClass("_active");
    $(".box4").toggleClass("_active");
  });
  $(".dot5").on("click", function () {
    $(".map-dot").not($(this)).removeClass("_active");
    $(".surf__map-info-box").not($(".box5")).removeClass("_active");
    $(this).toggleClass("_active");
    $(".box5").toggleClass("_active");
  });
  $(".dot6").on("click", function () {
    $(".map-dot").not($(this)).removeClass("_active");
    $(".surf__map-info-box").not($(".box6")).removeClass("_active");
    $(this).toggleClass("_active");
    $(".box6").toggleClass("_active");
  });
  $(".dot7").on("click", function () {
    $(".map-dot").not($(this)).removeClass("_active");
    $(".surf__map-info-box").not($(".box7")).removeClass("_active");
    $(this).toggleClass("_active");
    $(".box7").toggleClass("_active");
  });
  $(".dot8").on("click", function () {
    $(".map-dot").not($(this)).removeClass("_active");
    $(".surf__map-info-box").not($(".box8")).removeClass("_active");
    $(this).toggleClass("_active");
    $(".box8").toggleClass("_active");
  });

  $(".slider").slick({
    arrows: true,
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    fade: true,
  });

  //-- оптимизировать --
  $(".nights-plus").on("click", function () {
    if ($(".nights-amount").attr("value") < $(".nights-amount").data("max")) {
      $(".nights-amount").attr("value", parseInt($(".nights-amount").val()) + 1);
    }
  });
  $(".nights-minus").on("click", function () {
    if ($(".nights-amount").attr("value") > $(".nights-amount").data("min")) {
      $(".nights-amount").attr("value", parseInt($(".nights-amount").val()) - 1);
    }
  });
  //-- оптимизировать --
  $(".guests-plus").on("click", function () {
    if ($(".guests-amount").attr("value") < $(".guests-amount").data("max")) {
      $(".guests-amount").attr("value", parseInt($(".guests-amount").val()) + 1);
    }
  });
  $(".guests-minus").on("click", function () {
    if ($(".guests-amount").attr("value") > $(".guests-amount").data("min")) {
      $(".guests-amount").attr("value", parseInt($(".guests-amount").val()) - 1);
    }
  });

  $(".count-button").on("click", function () {
    let sum = $(".nights-amount").val() * $(".sum").data("nights") + $(".guests-amount").val() * $(".sum").data("guests");
    $(".sum").html("$" + sum);
  });
  $(".shop__surfboard-spoiler").on("click", function () {
    $(this).toggleClass("_active");
    $(this).prev().toggleClass("_active");
  });
  $(".menu-burger").on("click", function () {
    $(this).toggleClass("_active");
    $(".header__menu").toggleClass("_active");
  });
  new WOW().init();
});
