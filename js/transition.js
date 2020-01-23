$(function(){
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      
      let div = $(this).attr("href"),
          divPosition = $(div).offset().top;
      $('html, body').animate({scrollTop: divPosition}, 1000);
    });
  });