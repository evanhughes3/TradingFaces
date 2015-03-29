function getCurrentGames (argument) {
	var currentGameData = {};

	var ajaxUser = $.ajax({
	  url: '/users/show',
	});

	ajaxUser.done(function (userData) {
	  var userId = userData.id;
	  currentGameData.user = userData;
	  var ajaxCurrentGames = $.ajax({
	  	url: '/users/' + userId + '/games',
	  });

	  ajaxCurrentGames.done(function (gameData) {
	  	currentGameData.games = gameData;
	  	console.log(currentGameData);

	  });

	});
}