function getCurrentGames (argument) {

	var ajaxUser = $.ajax({
	  url: '/users/show',
	});

	ajaxUser.done(function (userData) {
	  var id = userData.id;
	  var ajaxCurrentGames = $.ajax({
	  	url: '/users/' + id + '/games',
	  });

	  ajaxCurrentGames.done(function (gameData) {
	  	console.log(gameData);
	  });

	});
}