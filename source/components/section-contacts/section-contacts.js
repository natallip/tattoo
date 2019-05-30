export let initMap = function () {
  // yandex map
  ymaps.ready(function () {
    const myMap = new ymaps.Map("map", {
      center: [38.835395, -77.118184], 
      zoom: 11,
      controls: []
    });
    myMap.behaviors.disable(['rightMouseButtonMagnifier', 'ruler']);    
    
    const myPlacemark = new ymaps.Placemark([38.835395, -77.118184], {}, {  
      iconLayout: 'default#image',
      iconImageHref: '/images/pin.svg',
      iconImageSize: [40, 50],
      iconImageOffset: [-50, -40]
    });
    myMap.geoObjects.add(myPlacemark);  
    
    myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
  }); 
  
  // animation photos
  $(window).scroll(function() { 
     
    if ($(window).scrollTop() + 300 > $('.section-contacts').offset().top) { 
      $('.section-contacts__img').addClass('visible');
    }  
  }); 
  
  // send form
  $('#formContacts').submit(function(e) { 
    e.preventDefault();
    
    if ($(this)[0].name.value == '' || $(this)[0].email.value == '' || $(this)[0].phone.value == '' || $(this)[0].message.value == '' ) {
      let valid = false;
      return valid;
    }
    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: $(this).serialize()
    }).done(function() {  
      $('.js-thank-you').text('success');  
      $('.js-overlay-thank-you').fadeIn(200);
      setTimeout(function() {
        $('.js-overlay-thank-you').fadeOut(200); 
      }, 2000);      
      $('#formContacts').trigger('reset');
    }).fail(function() {
      $('.js-thank-you').text('error');  
      $('.js-overlay-thank-you').fadeIn(200);
      setTimeout(function() {
        $('.js-overlay-thank-you').fadeOut(200); 
      }, 2000);   
    });    
  });
}  
