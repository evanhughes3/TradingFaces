var toggleLoadingGif = function() {
  $('#loader').toggle();
}

var showCheckMark = function() {
  $('#checkmark').show();
  $('#checkmark').fadeOut(1000, function() {
    photoOverlay();
    loadCurrentGames();
  });
}