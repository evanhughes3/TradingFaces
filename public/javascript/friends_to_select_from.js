var turnOffClickListener = function(target, action) {
  $(target).off(action)
  $(target).on(action, function(event){
    event.preventDefault();
  })
}

var getAllFriends = function() {
  return $.ajax({
    url: '/friends',
    method: 'get'
  });
}

var renderUsers = function(data) {
  var context = { friends: data }
  var html = $('#friends_to_challenge_template').html();
  var friendsTemplate = Handlebars.compile(html);
  $('.friends_to_challenge').append(friendsTemplate(context));
}

$(document).ready(function() {

  $('.start_game').on('submit', function(event){
    console.log('winning');
    event.preventDefault();
    friends = getAllFriends();

    friends.done(function(response){
      renderUsers(response);
      turnOffClickListener('.start_game', 'submit');
    });
  });

});
