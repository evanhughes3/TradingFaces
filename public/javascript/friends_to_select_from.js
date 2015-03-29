var getAllFriends = function() {
  return $.ajax({
    url: '/users'
  })
}

var renderUsers = function(data) {
  var context = { friends: data }
  var html = $('#friends_to_challenge_template').html();
  var friendsTemplate = Handlebars.compile(html);
  $('.friends_to_challenge').append(friendsTemplate(context));
}

$(document).ready(function() {

});
