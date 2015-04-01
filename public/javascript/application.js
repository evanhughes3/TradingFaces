// Handles all the doc ready's, ya dig? (savvy)
$(document).ready(function () {
  toggleNavbarFaces();
  getUser();
  $('.main-content').on('click', '.row div .respond-to', respondToChallenge );
  $('#current-games').click( currentGamesEventListener );
  $('#old-games').click( getOldGames );
  selectFriendToChallenge();
  closeOverlays();
  loadNewGameOverlay();
  retakePhotoListener();
  $('.game-info').click( gameInstructionsOverlay )
});