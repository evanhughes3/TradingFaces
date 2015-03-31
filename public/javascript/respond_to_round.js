var respondToChallenge = function() {
  var roundId = $(this).data('round-id');
  hideEverything();
  photoOverlay();
  appendVideoForPicture();
  $('#save-photo').attr('data-round-id', roundId);
  $(this).off();
}