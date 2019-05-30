require('../OwlCarousel2-2.3.4/dist/owl.carousel.min.js');

export const sliderGallery = function () {  
  $('#slider-gallery').owlCarousel({
    loop:true,  
    nav:true,  
    dots:false,
    margin:0,
    responsive:{
      0:{
        items:1,        
      },
      480:{
        items:2
      },
      768:{
        items:3
      }
    }
  })
}