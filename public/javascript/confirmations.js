var toggleLoadingGif = function() {
  $('#loader').toggle();
}

var showCheckMark = function() {
  $('#checkmark').show();
  setTimeout(function() {
    $('#checkmark').hide();
    photoOverlay();
    loadCurrentGames();
  }, 1000);
}

var showFailMark = function() {
  $('#failmark').show();
  setTimeout(function() {
    $('#failmark').hide();
    toggleCamera();
    openCamera();
  }, 1000);
}