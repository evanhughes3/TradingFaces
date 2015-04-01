var toggleLoadingGif = function() {
  $('#loader').toggle();
}

var showCheckMark = function(serverData) {
  $('#checkmark').show();
  setTimeout(function() {
    $('#checkmark').hide();
    photoOverlay();
    if (serverData.finished_game) {
      loadOldGames();
    } else {
      loadCurrentGames();
    }
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