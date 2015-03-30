// $('#old-games').click(function(event) {
//   event.preventDefault()
//   $.ajax({
//     url: '/games/finished_games',
//     type: 'GET',
//   })
//   .done(function(response) {
//     console.log("success old games");
//     parseResponse(response)
//   })
//   .fail(function() {
//     console.log("error old games");
//   })

// });


function getOldGames (event) {
  event.preventDefault();
  $.ajax({
    url: '/games/finished_games'
  })
  .done(function(gameData) {
    console.log("success old games");
    $('.main-content').empty();
      var source   = $("#games-template").html();
      var template = Handlebars.compile(source);
      var context = {games: gameData};
      $('.main-content').append(template(context));
  })
  .fail(function() {
    console.log("error old games");
  })
}