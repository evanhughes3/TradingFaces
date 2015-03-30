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
	  $(this).off();
}