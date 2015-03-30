function getCurrentGames (argument) {

	  var ajaxCurrentGames = $.ajax({
	  	url: '/games/current_games',
	  });

	  ajaxCurrentGames.done(function (gameData) {
	  	// console.log(gameData);
	  	$('.main-content').empty();
	  	var source   = $("#games-template").html();
	  	var template = Handlebars.compile(source);
	  	var context = {games: gameData, roundNum: [1,2]};
	  	$('.main-content').append(template(context));
	  	console.log(gameData);
	  });

}