function getCurrentGames (event) {
    event.preventDefault();
    var ajaxCurrentGames = $.ajax({
      url: '/games/current_games',
    });

    ajaxCurrentGames.done(function (gameData) {
      $('.main-content').empty();
      var source   = $("#games-template").html();
      var template = Handlebars.compile(source);
      var context = {games: gameData};
      $('.main-content').append(template(context));
    });
}

function getOldGames (event) {
  event.preventDefault();
  $.ajax({
    url: '/games/finished_games'
  })
  .done(function(gameData) {
    $('.main-content').empty();
    console.log(gameData)
      var source   = $("#games-template").html();
      var template = Handlebars.compile(source);
      var context = {games: gameData};
      $('.main-content').append(template(context));
  })
  .fail(function() {
    console.log("error old games");
  })
}