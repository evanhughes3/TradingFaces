var closeOverlays = function() {
  $('.module-closer').on('click', function(event) {
    event.preventDefault();
    ($('#photo-overlay').css('visibility') == 'visible') ? photoOverlay() : friendsOverlay();
  });
}