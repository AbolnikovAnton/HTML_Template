$(document).ready(function(){
  $(".slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 700
  });

  $(".btn-nav").on("click", function(){
    let target = $(this).data("target");
    $(target).toggleClass("nav__list--open");
  });
});