/*

Template: NFT Marketplace HTML Template
Author: potenzaglobalsolutions
Design and Developed by: potenzaglobalsolutions.com

NOTE: This file contains all scripts for the actual Template.

*/

/*================================================
[  Table of contents  ]
================================================

:: Menu
:: Sticky
:: Countdown
:: Like
:: Follow
:: Counter
:: Owl carousel
:: Swiper slider
:: Swiper Vertical
:: Slickslider
:: Shuffle
:: Datetimepicker
:: Select2
:: Range Slider
:: Tooltip
:: Back to top

======================================
[ End table content ]
======================================*/
//POTENZA var

(function ($) {
  "use strict";
  var POTENZA = {};

  /*************************
    Predefined Variables
  *************************/
  var $window = $(window),
    $document = $(document),
    $body = $('body'),
    $countdownTimer = $('.countdown'),
    $counter = $('.counter');
  //Check if function exists
  $.fn.exists = function () {
    return this.length > 0;
  };

  /*************************
    Menu
  *************************/
  POTENZA.dropdownmenu = function () {
    if ($('.navbar').exists()) {
      $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
      });
    }
  };

  /*************************
    Sticky
  *************************/

  POTENZA.isSticky = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $('.header-sticky').addClass('is-sticky');
      } else {
        $('.header-sticky').removeClass('is-sticky');
      }
    });
  };

  /*************************
    Countdown
  *************************/
  POTENZA.countdownTimer = function () {
    $('[data-countdown]').each(function () {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('<span>%Dd </span> : <span>%Hh </span>  : <span>%Mm </span>  : <span>%Ss </span>'));
      });
    });
  }

  /*************************
    Like
  *************************/
  POTENZA.like = function () {
    $(".like").click(function () {
      $(this).toggleClass("active");
    });
  }

  /*************************
    Follow
  *************************/
  POTENZA.follow = function () {
    $(".follow-btn").click(function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
      if ($(this).text() == 'Follow') {
        $(this).text('Following');
      }
      else {
        $(this).text('Follow');
      }
    });
  }

  /*************************
    Counter
  *************************/
  POTENZA.counters = function () {
    var counter = jQuery(".counter");
    if (counter.length > 0) {
      $counter.each(function () {
        var $elem = $(this);
        $elem.appear(function () {
          $elem.find('.timer').countTo();
        });
      });
    }
  };


  /*************************
    Owl carousel
  *************************/
  POTENZA.carousel = function () {
    var owlslider = jQuery("div.owl-carousel");
    if (owlslider.length > 0) {
      owlslider.each(function () {
        var $this = $(this),
          $items = ($this.data('items')) ? $this.data('items') : 1,
          $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
          $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
          $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
          $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
          $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
          $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
          $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
          $space = ($this.attr('data-space')) ? $this.data('space') : 30,
          $animateOut = ($this.attr('data-animateOut')) ? $this.data('animateOut') : false;
        $(this).owlCarousel({
          loop: $loop,
          items: $items,
          responsive: {
            0: {
              items: $this.data('xx-items') ? $this.data('xx-items') : 1
            },
            480: {
              items: $this.data('xs-items') ? $this.data('xs-items') : 1
            },
            768: {
              items: $this.data('sm-items') ? $this.data('sm-items') : 2
            },
            980: {
              items: $this.data('md-items') ? $this.data('md-items') : 3
            },
            1200: {
              items: $this.data('lg-items') ? $this.data('lg-items') : 4
            },
            1300: {
              items: $this.data('xl-items') ? $this.data('xl-items') : 5
            },
            1400: {
              items: $items
            }

          },
          dots: $navdots,
          autoplayTimeout: $autospeed,
          smartSpeed: $smartspeed,
          autoHeight: $autohgt,
          margin: $space,
          nav: $navarrow,
          navText: ["<i class='fas fa-arrow-left-long'></i>", "<i class='fas fa-arrow-right-long'></i>"],
          autoplay: $autoplay,
          autoplayHoverPause: true
        });
      });
    }
  }

  /*************************
    Swiper slider
  *************************/

  POTENZA.swiperAnimation = function () {
    if ($(".swiper-container")[0]) {
      var siperslider = jQuery(".swiper-container");
      if (siperslider.length > 0) {
        var swiperAnimation = new SwiperAnimation();
        var swiper = new Swiper(".swiper-container", {
          init: true,
          direction: "horizontal",
          effect: "fade",
          loop: true,

          keyboard: {
            enabled: true,
            onlyInViewport: true
          },
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          on: {
            init: function () {
              swiperAnimation.init(this).animate();
            },
            slideChange: function () {

              swiperAnimation.init(this).animate();
            }
          }
        });
      }
    }
  }


  /*************************
    Swiper Vertical
  *************************/
  POTENZA.swiperVertical = function () {
    if ($(".swiper-vertical-1")[0]) {
      var swiper = new Swiper(".swiper-vertical-1", {
        loop: true,
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 1000,
        },
        speed: 2000,
      });
      $(".swiper-vertical-1").hover(function () {
        (this).swiper.autoplay.stop();
      }, function () {
        (this).swiper.autoplay.start();
      });

      var swiper = new Swiper(".swiper-vertical-2", {
        loop: true,
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 800,
          reverseDirection: true,
        },
        speed: 2000,
      });
      $(".swiper-vertical-2").hover(function () {
        (this).swiper.autoplay.stop();
      }, function () {
        (this).swiper.autoplay.start();
      });

      var swiper = new Swiper(".swiper-vertical-3", {
        loop: true,
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 1000,
        },
        speed: 2000,
      });
      $(".swiper-vertical-3").hover(function () {
        (this).swiper.autoplay.stop();
      }, function () {
        (this).swiper.autoplay.start();
      });

    };
  }




  /*************************
    Slickslider
  *************************/
  POTENZA.slickslider = function () {
    if ($('.slider-for').exists()) {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
      });
    }
  };


  /*************************
    Slickslider Vertical
  *************************/
  POTENZA.slickVertical = function () {
    var titleMain = $("#animatedHeading,#animatedHeading02,#animatedHeading03");
    var titleSubs = titleMain.find("slick-active");

    if (titleMain.length) {
      titleMain.slick({
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        centerPadding: "10px",
        draggable: false,
        infinite: true,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        vertical: true,
        speed: 1000,
        autoplaySpeed: 2000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
        // slidesToScroll: -1,
      });

      // On init
      $(".slick-dupe").each(function (index, el) {
        $("#animatedHeading").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
      });

      // On init
      $(".slick-dupe-02").each(function (index, el) {
        $("#animatedHeading02").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
      });

      // On init
      $(".slick-dupe-03").each(function (index, el) {
        $("#animatedHeading03").slick('slickAdd', "<div>" + el.innerHTML + "</div>");
      });

      // Manually refresh positioning of slick
      titleMain.slick('slickPlay');
    };

  };

  /*************************
    Shuffle
  *************************/
  POTENZA.shuffle = function () {
    if ($('.my-shuffle-container').exists()) {
      var Shuffle = window.Shuffle;
      var element = document.querySelector('.my-shuffle-container');
      var sizer = element.querySelector('.my-sizer-element');
      var shuffleInstance = new Shuffle(element, {
        itemSelector: '.grid-item',
        sizer: sizer, // could also be a selector: '.my-sizer-element'
        speed: 700,
        columnThreshold: 0
      });
      jQuery(document).ready(function () {
        jQuery(".btn-filter").on('click', function () {
          var data_group = jQuery(this).attr('data-group');
          if (data_group != 'all') {
            shuffleInstance.filter([data_group]);
          } else {
            shuffleInstance.filter();
          }
        });
        $(".filters-group .btn-filter").on('click', function () {
          $(".filters-group .btn-filter").removeClass("active");
          $(this).addClass("active");
        });
      });
    }
  }


  /*************************
     Datetimepicker
   *************************/
  POTENZA.datetimepickers = function () {
    if ($('.datetimepickers').exists()) {
      $('#datetimepicker-01, #datetimepicker-02').datetimepicker({
        format: 'L'
      });
      $('#datetimepicker-03, #datetimepicker-04').datetimepicker({
        format: 'LT'
      });
    }
  };

  /*************************
    Select2
  *************************/
  POTENZA.select2 = function () {
    if ($('.basic-select').exists()) {
      var select = jQuery(".basic-select");
      if (select.length > 0) {
        $('.basic-select').select2({ dropdownCssClass: 'bigdrop' });
      }
    }
  };

  /*************************
    Range Slider
  *************************/
  POTENZA.rangesliders = function () {
    if ($('.property-price-slider').exists()) {
      var rangeslider = jQuery(".rangeslider-wrapper");
      $("#property-price-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 10000,
        from: 1000,
        to: 8000,
        prefix: "$",
        hide_min_max: true,
        hide_from_to: false
      });
    }
  };

  /*************************
    Tooltip
  *************************/
  POTENZA.tooltip = function () {
    $(document).ready(function () {
      $('[data-bs-toggle="tooltip"]').tooltip()
    })
  }

  /*************************
       Back to top
  *************************/
  POTENZA.goToTop = function () {
    var $goToTop = $('#back-to-top');
    $goToTop.hide();
    $window.scroll(function () {
      if ($window.scrollTop() > 100) $goToTop.fadeIn();
      else $goToTop.fadeOut();
    });
    $goToTop.on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  }



  /****************************************************
       POTENZA Window load and functions
  ****************************************************/
  //Window load functions
  $window.on("load", function () {
  });
  //Document ready functions
  $document.ready(function () {
    POTENZA.isSticky(),
      POTENZA.slickslider(),
      POTENZA.carousel(),
      POTENZA.swiperAnimation(),
      POTENZA.swiperVertical(),
      POTENZA.counters(),
      POTENZA.countdownTimer(),
      POTENZA.like(),
      POTENZA.follow(),
      POTENZA.shuffle(),
      POTENZA.datetimepickers(),
      POTENZA.select2(),
      POTENZA.rangesliders(),
      POTENZA.tooltip(),
      POTENZA.slickVertical(),
      POTENZA.goToTop();
  });
})(jQuery);
