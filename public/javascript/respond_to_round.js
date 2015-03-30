var respondToChallenge = function() {
  $('.main-content').on('click', '.row div .respond-to', function(){
    hideEverything();
    appendVideoForPicture();
  });
}

$(document).ready(function(){
  respondToChallenge();
});