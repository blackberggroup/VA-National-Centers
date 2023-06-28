$('.vha-video__play-action').magnificPopup({
    type: 'iframe', 
    
    iframe: {
       markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '<div class="mfp-title">Some caption</div>'+
                '</div>'
    }
});


$(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive:{
      0: {
        items: 2,
        nav: true
      },
      800: {
        items: 3,
        nav: false
      },
      1000: {
        items: 6,
        nav: true,
        loop: true
      }
    }
  });
});



