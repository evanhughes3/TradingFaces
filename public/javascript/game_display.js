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
      getStarRating();
    });
}

function getOldGames (event) {
  event.preventDefault();
  $.ajax({
    url: '/games/finished_games'
  })
  .done(function(gameData) {
    $('.main-content').empty();
    console.log(gameData);
    var source   = $("#games-template").html();
    var template = Handlebars.compile(source);
    var context = {games: gameData};
    $('.main-content').append(template(context));
    getStarRating();
    declareWinners(gameData);
  })
  .fail(function() {
    console.log("error old games");
  })
}

function declareWinners (gameData) {
  $.each(gameData, function(index, game) {
     /* iterate through array or object */
     var gameID = game.id;
     var winnerID;
     if ( game.players[0].winner ) {
      winnerID = game.players[0].user_id;
     } else if ( game.players[1].winner ) {
      winnerID = game.players[1].user_id;
     }
    $('.main-content #game-' + gameID + ' #player-' + winnerID + ' p').append( ' won!');
  });
}

function getStarRating() {
  var ratings = $('.star-rating');
  $.each(ratings, function(index, $rating) {
  console.log($rating)
  debugger
  var rating = $rating.getAttribute('data-rating');
  rating = (rating/20).toFixed(1)
  console.log(rating)
  console.log(this)
  $(this).raty({ readOnly: true, score: rating });
  });
}