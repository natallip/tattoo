require('../OwlCarousel2-2.3.4/dist/owl.carousel.min.js');

export const sliderTestimonials = function () {  
  $('#slider-testimonials').owlCarousel({
    loop:true,   
    nav:false, 
    responsive:{
      0:{
        items:1,
        dots:true,
        autoplay:false
      },
      768:{
        items:2,
        dots:true,        
        margin:20,
      },
      980:{
        items:2,
        dots:false,
        margin:20,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
      }
    }
  })
}  