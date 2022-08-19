$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".menu").addClass("menu-fix")
  }
  else{
    $(".menu").removeClass("menu-fix")
  }
  if($(window).scrollTop() > 1000){
    $(".backtotop").fadeIn()
  }
  else{
    $(".backtotop").fadeOut()
  }
});

//banner slider
$('.banner-under-slider').slick({
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

$('.banner-top-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-chevron-left banner-prev"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right banner-next"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //company-logo slider
$('.logo-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  //gallery slider
$('.gallery-slider').slick({
  centerMode: true,
  centerPadding: '',
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-chevron-left banner-prev"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right banner-next"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

  //client review slider
$('.client-slider').slick({
  dots: true,
  arrows: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fa-solid fa-chevron-left banner-prev"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right banner-next"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// counter part
jQuery(document).ready(function($) {
  $('.number').counterUp({
      delay: 10,
      time: 1000
  });
});

$(document).ready(function() {

  $(".desktop").click(function() {
    
    $(".desktop-img").removeClass("d-none");
    $(".desktop-img").addClass("d-block");
    $(".tablet-img").removeClass("d-block");
    $(".phone-img").removeClass("d-block");
  });
  $(".tablet").click(function() {
    $(".tablet-img").addClass("d-block");
    $(".desktop-img").addClass("d-none");
    $(".desktop-img").removeClass("d-block");
    $(".phone-img").removeClass("d-block");
  });
  $(".phone").click(function() {
    $(".phone-img").addClass("d-block");
    $(".desktop-img").addClass("d-none");
    $(".tablet-img").removeClass("d-block");
    $(".desktop-img").removeClass("d-block");
  });
});