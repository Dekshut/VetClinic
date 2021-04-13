$(function () {

  $('.header-top__btn').on('click', function(){
    $('.header-content__menu').toggleClass('header-content__menu--active');
    $('.header-top__wrapper').toggleClass('header-top__wrapper--active');
    $('.header-top__wrapper').css('background-color','#fff');
    $('.header-top__wrapper').css('opacity','80%'); 
    $('.header-top__wrapper').css('box-shadow','0 0px 3px 0px #5a5959');
    $('.header-top__btn').toggleClass('header-top__btn--active');
    
  });

  $(window).scroll(function(){ 
   if ( $(window).scrollTop() >= 1 ){                   
     $('.header-top__wrapper').css('background-color','#fff');
     $('.header-top__wrapper').css('opacity','80%'); 
     $('.header-top__wrapper').css('box-shadow','0 0px 3px 0px #5a5959');
    }
    else {
      $('.header-top__wrapper').css('background-color','transparent');
      $('.header-top__wrapper').css('opacity','100%');
      $('.header-top__wrapper').css('box-shadow','none');
      $('.header-content__menu--active, .header-top__wrapper--active').css('background-color','#fff');
      $('.header-top__wrapper--active').css('opacity','80%');
      $('.header-top__wrapper--active').css('box-shadow','0 0px 3px 0px #5a5959');
    }
  });

  
  $('.review__items').slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
     responsive: [
    {
      breakpoint: 1251,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 981,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  })

  $('.team__items').slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 981,
      settings: {
        arrows: false
      }
    }
  ]
  })

  $('.offer__items').slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
       responsive: [
    {
      breakpoint: 1251,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false
      }
    },
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
  })

  $('.header-content__slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1301,
      settings: {
        arrows: false
      }
    },
    {
      breakpoint: 1251,
      settings: {
        dots: false,
        arrows: false
      }
    }
  ]
  })

  $(".header-top__box a, .header-content__menu a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-130}, 1500);
	});

})