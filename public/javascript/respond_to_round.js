var respondToChallenge = function() {
  var roundId = $(this).data('round-id');
  hideEverything();
  appendVideoForPicture();
  $('#save-photo').attr('data-round-id', roundId);
  $(this).off();
}

// $(document).ready(function(){
//   respondToChallenge();
// });