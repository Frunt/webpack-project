$(document).ready(() => {
  $('.burger').on('click', () => {
    $(this).toggleClass('opened');
    $(this).next('.main-menu').slideToggle();
  });

  $('.main-menu > li .plus-icon').on('click', () => {
    $(this).next('.main-menu__sub').slideToggle();
    $(this).parent().toggleClass('opened');
  });

  $('.main-menu__sub > li .plus-icon').on('click', () => {
    $(this).next('.main-menu__sub2').slideToggle();
    $(this).parent().toggleClass('shown');
  });

  $('.main-menu .plus-icon').on('click', () => {
    $(this).toggleClass('opened');
  });

  $('#services').on('click',  (e) => {
    e.preventDefault();
    $('.online-block-holder').removeClass('hid');
  });

  $('#updates-more').on('click',  (e) => {
    e.preventDefault();
    $('.fix-update').removeClass('hid');
  });

  $('#updates-hidden').on('click',  (e) => {
    e.preventDefault();
    $('.fix-update').addClass('hid');
  });

  $('.event-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });
  const body = $('body');
  $('#increase').on('click', (e) => {
    e.preventDefault();
    body.css('font-size', Number($('body').css('font-size').split('px')[0]) + 1);
  });
  $('#decrease').on('click', (e) => {
    e.preventDefault();
    body.css('font-size', Number($('body').css('font-size').split('px')[0]) - 1);
  });
  $('#default').on('click', (e) => {
    e.preventDefault();
    $('body').css('font-size', 15);
  });
  if (window.innerWidth < 1024) $('#collapseTwo2').removeClass('show');
  $(window).resize(() => {
    if (window.innerWidth < 1024) $('#collapseTwo2').removeClass('show');
    else $('#collapseTwo2').addClass('show');
  });
});
