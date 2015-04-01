function currentGamesEventListener (event) {
  event.preventDefault();
  loadCurrentGames();
}

function getCurrentGames() {
  return $.ajax({
    url: '/games/current_games',
  });
}

function getCurrentUser() {
  return $.ajax({
    url: '/current_user',
  })
}

Handlebars.registerHelper("notLoggedIn", function (data, responderID, currentUserId, options) {
  if (responderID === currentUserId) {
    // console.log(data);
    // console.log(options);
    return options.fn(data);
  }
});

function loadCurrentGames() {
  var currentGameData = getCurrentGames();
  currentGameData.done(function(gameData) {
    $('.main-content').empty();
    var currentUserData = getCurrentUser();
    currentUserData.done(function (userIdData) {
      var source   = $("#games-template").html();
      var template = Handlebars.compile(source);
      var context = {games: gameData, currentUserId: userIdData};
      $('.main-content').append(template(context));
      getStarRating();
    })
  });
}

function getOldGames (event) {
  event.preventDefault();
  $.ajax({
    url: '/games/finished_games'
  })
  .done(function(gameData) {
    $('.main-content').empty();
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
  var rating = $rating.getAttribute('data-rating');
  rating = (rating/20).toFixed(1)
  $(this).raty({ readOnly: true, score: rating });
  });
}