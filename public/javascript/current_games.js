function getCurrentGames (argument) {

	  var ajaxCurrentGames = $.ajax({
	  	url: '/games/current_games',
	  });

	  ajaxCurrentGames.done(function (gameData) {
	  	// console.log(gameData);
	  	$('.main-content').empty();
	  	var source   = $("#current-games-template").html();
	  	var template = Handlebars.compile(source);
	  	var context = {games: gameData};
	  	$('.main-content').append(template(context));
	  });

}