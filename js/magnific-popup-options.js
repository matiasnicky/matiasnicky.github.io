$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function(className) {
    $(className).magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out',
        opener: function(openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };

  // Call the function for each gallery class if you add more classname, you have to change the css for templatemo-first-portfolio-style aswell
  magnifPopup('.gallery');
  magnifPopup('.gallery-1');
  magnifPopup('.gallery-2');
  magnifPopup('.gallery-3');
  magnifPopup('.gallery-4');
  magnifPopup('.gallery-5');
  magnifPopup('.gallery-6');
});