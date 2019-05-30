export const stickyHeader = function() {
  let $header = $('.header'),
      $btnUp = $('#toTop');
  
  $(window).on('scroll', function() {
    
    if ($(this).scrollTop() > $header.height()) {      
      $header.addClass('header-bg');
    } else {
      $header.removeClass('header-bg');
    }
    if ($(this).scrollTop() > $('#section-first').height() - 50) {      
      $btnUp.addClass('visible');
    } else {
      $btnUp.removeClass('visible');
    }  
  });  
}