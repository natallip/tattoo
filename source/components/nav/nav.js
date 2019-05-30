export const navigation = function() {
  $('.navigation__link').on('click', function() {
    
    let elementClick = $(this).attr('href');    
    let destination = $(elementClick).offset().top - 40;
              
    $('html, body').animate({scrollTop: destination},{
      duration: 500,
      easing: 'swing'
    });        

    if ($('.burger.active')) {
      $('.burger').removeClass('active');
      $('.navigation').removeClass('open');
      $('#fullpage').removeClass('no-scroll');   
    }

    return false;
  });
}