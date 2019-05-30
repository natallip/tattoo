export const parallax = function() {
  $(window).on('scroll',function(){
    parallaxScroll();
  });
 
  function parallaxScroll(){
    let $scrolled = $('html, body').scrollTop();
    
    if ($scrolled < $('.section-first').height()) {
      let shift1 = 0-($scrolled*.03);
      let shift2 = 0+($scrolled*.03);
      
      $('#photo1').stop().animate({top: shift1}, 1000, "swing");
      $('#photo2').stop().animate({top: shift2}, 1000, "swing");
    }      
  }
}