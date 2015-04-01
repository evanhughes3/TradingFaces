function currentGamesEventListener (event) {
  event.preventDefault();
  loadCurrentGames();
}

function oldGamesEventListener (event) {
  event.preventDefault();
  loadOldGames();
}

function getCurrentUser() {
  return $.ajax({
    url: '/current_user',
  })
}

function getGames(url) {
  return $.ajax({
    url: url
  });
};

Handlebars.registerHelper("notLoggedIn", function (data, responderID, currentUserId, options) {
  if (responderID === currentUserId) {
    return options.fn(data);
  }
});

Handlebars.registerHelper("loggedIn", function (data, responderID, currentUserId, options) {
  if (responderID !== currentUserId) {
    return options.fn(data);
  }
});

function loadCurrentGames() {
  var currentGameData = getGames('/games/current_games');
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

function loadOldGames () {
  var oldGamesResponse = getGames('/games/finished_games');
  oldGamesResponse.done(function(gameData) {
    $('.main-content').empty();
    var source   = $("#games-template").html();
    var template = Handlebars.compile(source);
    var context = {games: gameData};
    $('.main-content').append(template(context));
    getStarRating();
    declareWinners(gameData);
  });

  oldGamesResponse.fail(function(){
    console.log("failed old games");
  });
}

function declareWinners (gameData) {
  $.each(gameData, function(index, game) {
     var gameID = game.id;
     var winnerID;
     if ( game.players[0].winner ) {
      winnerID = game.players[0].user_id;
     } else if ( game.players[1].winner ) {
      winnerID = game.players[1].user_id;
     }
    $('.main-content #game-' + gameID + ' #player-' + winnerID).append("<h4 class='winner'>Winner!</h4>");
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