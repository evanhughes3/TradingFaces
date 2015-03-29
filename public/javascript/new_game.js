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

var startNewGameListener = function() {
  $('#new-game').on('click', function(event){
    event.preventDefault();
    friends = getAllFriends();

    friends.done(function(response){
      renderUsers(response);
      turnOffClickListener('.start_game', 'submit');
    });
  });
}

$(document).ready(function() {
  startNewGameListener();

  $('.friends_to_challenge').on('click', '.friend_data form', function(event){
    event.preventDefault();
    console.log('winning');
  });

});
