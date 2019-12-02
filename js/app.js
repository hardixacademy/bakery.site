$(document).ready(function () {
  $('#toggle').on("click", function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('.header_logo_mob').toggleClass('al');
  });

  $('.header_nav_a_mob').click(function () {
    $('#toggle').removeClass('active');
    $('#overlay').removeClass('open');
  });

  $('.order').on("click", function () {
    $('.spec_order').addClass('active_order');
    $('.responsive').addClass('slider_order');
    $('.slider_active').removeAttr('id', 'first');
    if ($('.order').attr('first')) {
      $(this).removeAttr('id', 'first');
    } else {
      $(this).attr('id', 'first');
    }
  });

  $('.slider_active').click(function () {
    $('.spec_order').removeClass('active_order');
    $('.responsive').removeClass('slider_order');
    $('.order').removeAttr('id', 'first');
    $('.slider_active').removeAttr('id', 'first');
    if ($('.slider_active').attr('first')) {
      $(this).removeAttr('id', 'first');
    } else {
      $(this).attr('id', 'first');
    }
  });
  var block = ({ "display": "block"});
  var show = ({"height": "auto","visibility": "visible"});
  var none = ({ "display": "none"});
  var hide = ({ "height": "0", "visibility": "hidden"});
  
  $('.click_sl .bulka').click(function () {
    $('.bulka_slider .slick-list').css(show);
    $('.bulka_slider .slick-dots').css(block);
    $('.bulka_slider .slick-dots li button').css(block);
    $('.baget_slider .slick-list').css(hide);
    $('.baget_slider .slick-dots').css(none);
    $('.baget_slider .slick-dots li button').css(none);
    $('.all_slider .slick-list').css(hide);
    $('.all_slider .slick-dots').css(none);
    $('.all_slider .slick-dots li button').css(none);
  });

  $('.click_sl .baget').click(function () {
    $('.baget_slider .slick-list').css(show);
    $('.baget_slider .slick-dots').css(block);
    $('.baget_slider .slick-dots li button').css(block);
    $('.bulka_slider .slick-list').css(hide);
    $('.bulka_slider .slick-dots').css(none);
    $('.bulka_slider .slick-dots li button').css(none);
    $('.all_slider .slick-list').css(hide);
    $('.all_slider .slick-dots').css(none);
    $('.all_slider .slick-dots li button').css(none);
  });
  
  $('.click_sl .all').click(function () {
    $('.all_slider .slick-list').css(show);
    $('.all_slider .slick-dots').css(block);
    $('.all_slider .slick-dots li button').css(block);
    $('.bulka_slider .slick-list').css(hide);
    $('.bulka_slider .slick-dots').css(none);
    $('.bulka_slider .slick-dots li button').css(none);
    $('.baget_slider .slick-list').css(hide);
    $('.baget_slider .slick-dots').css(none);
    $('.baget_slider .slick-dots li button').css(none);
  });

  $("a[href*=#]").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
  });
  $('.tel_modal').on("click", function () {
    $('.modal').toggleClass('modal_open');
  });

  $('.close').click(function () {
    $('.modal').removeClass('modal_open');

  });
  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.responsive2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [{
        breakpoint: 1460,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1228,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 608,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});