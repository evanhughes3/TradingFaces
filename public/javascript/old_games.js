$(document).ready(function() {
  $('#old-games').click(function(event) {
    $.ajax({
      url: '',
      type: 'GET',
    })
    .done(function() {
      console.log("success old games");
    })
    .fail(function() {
      console.log("error old games");
    })

  });
});