// Handles all the doc ready's, ya dig? (savvy)
$(document).ready(function () {
  getUser();
  $('.main-content').on('click', '.row div .respond-to', respondToChallenge );
  $('#current-games').click( getCurrentGames );
  $('#old-games').click( getOldGames );
  selectFriendToChallenge();
  closeOverlays();
  loadNewGameOverlay();
});