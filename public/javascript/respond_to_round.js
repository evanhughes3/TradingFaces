var respondToChallenge = function() {
  $('.main-content').on('click', '.row div .respond-to', function(){
    var roundId = $(this).data('round-id');
    console.log(roundId);
    hideEverything();
    appendVideoForPicture();
    $('#save-photo').attr('data-round-id', roundId);
  });
}

$(document).ready(function(){
  respondToChallenge();
});