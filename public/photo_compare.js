$(document).ready(function () {
	$('#compare-photo').click( comparePhotos );
});


function comparePhotos (event) {
	event.preventDefault();
	var ajaxResponse = $.ajax({
		url: '/rounds/1/compare',
	});

	ajaxResponse.done(function (serverData) {
		console.log(serverData);
	});

	ajaxResponse.fail(function (serverData) {
		console.log('YOU LOSE! YOU GET NOTHING! GOOD DAY SIR!');
	});
}