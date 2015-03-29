$(document).ready(function() {
  $('#old-games').click(function(event) {
    event.preventDefault()
    $.ajax({
      url: '/users/games',
      type: 'GET',
    })
    .done(function(response) {
      console.log("success old games");
      console.log(response)
    })
    .fail(function() {
      console.log("error old games");
    })

  });
});