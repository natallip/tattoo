require('../OwlCarousel2-2.3.4/dist/owl.carousel.min.js');

export const sliderStaff = function () {  
  $('#slider-staff').owlCarousel({
    loop:true,  
    nav:false,  
    responsive:{
      0:{
        items:1,
        dots:true,
        autoplay:false
      },
      480:{
        items:2,
        margin:20,
      },
      980:{
        items:3,
        dots:false,        
        margin:20,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
      }
    }
  })
}