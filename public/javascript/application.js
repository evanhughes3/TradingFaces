// Handles all the doc ready's, ya dig? (savvy)
$(document).ready(function (argument) {
  getUser();
  $('#current-games').click( getCurrentGames );
  $('#old-games').click( getOldGames );
});