var closeOverlays = function() {
  $('.module-closer').on('click', function(event) {
    event.preventDefault();
    ($('#photo-overlay').css('visibility') == 'visible') ? photoOverlay() : friendsOverlay();
    renderGameInstructions();
  });
}

var friendsOverlay = function() {
  $('.friend-box').empty();
  el = document.getElementById("friends-overlay");
  el.style.visibility = (el.style.visibility == "visible") ?
  "hidden" : "visible";
}

var selectFriendToChallenge = function() {
  $('#new-game').on('click', function(event){
    event.preventDefault();
    var getFriends = getAllFriends();

    friendsOverlay();

    getFriends.done(function(response){
      renderUsers(response);
      turnOffClickListener('.start-game', 'submit');
    });
  });
}

var photoOverlay = function() {
  var $el = $('#photo-overlay')
  var newVisibility = $el.css('visibility') == 'visible' ? 'hidden' : 'visible';
  $el.css('visibility', newVisibility);
}

var loadNewGameOverlay = function() {
  $('.start-game').on('click', '.challenge_friend', function(event){
    event.preventDefault();
    // refactor opponent class to be a data tag
    var opponentClass = event.target.id
    friendsOverlay();
    photoOverlay();
    toggleCamera();
    openCamera();
    $('#save-photo').attr('data-opponent', opponentClass );
  });
}

var startRound = function(img, toggleCamera, openCamera) {
  $('.opponent_image').html(img)
  setTimeout(function() {
    $('.opponent_image').hide();
    toggleCamera();
    openCamera();
  }, 5000)
}

var gameInstructionsOverlay = function() {
  $('.main-content').empty();
  renderGameInstructions();
}

var renderGameInstructions = function() {
  var html = $('#game-instructions-template').html();
  var gameInfoTemplate = Handlebars.compile(html);
  $('.main-content').append(gameInfoTemplate());
}