function getCurrentGames (argument) {

	  var ajaxCurrentGames = $.ajax({
	  	url: '/games/current_games',
	  });

	  ajaxCurrentGames.done(function (gameData) {
	  	console.log(gameData);

	  });

}