$(document).ready(function() {
  $('#old-games').click(function(event) {
    event.preventDefault()
    $.ajax({
      url: '/games/finished_games',
      type: 'GET',
    })
    .done(function(response) {
      console.log("success old games");
      parseResponse(response)
    })
    .fail(function() {
      console.log("error old games");
    })

  });
});
