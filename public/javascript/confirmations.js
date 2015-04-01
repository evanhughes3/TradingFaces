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

var showFailMark = function() {
  $('#failmark').show();
  setTimeout(function() {
    $('#failmark').hide();
    photoOverlay();
    console.log('reopen camera here...?')
  }, 1000);
}