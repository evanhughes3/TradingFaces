var photoOverlay = function() {
  friendsOverlay();
  var $el = $('#photo-overlay')
  var newVisibility = $el.css('visibility') == 'visible' ? 'hidden' : 'visible';
  $el.css('visibility', newVisibility);
}

$(document).ready(function() {
  $('.start-game').on('click', '.friend_data form', function(event){
    event.preventDefault();

    // refactor opponent class to be a data tag
    var opponentClass = event.target.id
    friendsOverlay();
    debugger
    photoOverlay();
    $('#save-photo').attr('data-opponent', opponentClass );
    appendVideoForPicture();
  });
});