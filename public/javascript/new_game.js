 var hideEverything = function() {
  $('.main-content').empty()
  $('#video_container').hide();
  $('.output').hide();
}

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
  hideEverything();
  var context = { friends: data }
  var html = $('#friends_to_challenge_template').html();
  var friendsTemplate = Handlebars.compile(html);
  $('.main-content').append(friendsTemplate(context));
}

var startNewGameListener = function() {
  $('#new-game').on('click', function(event){
    event.preventDefault();
    var getFriends = getAllFriends();

    friendsOverlay();

    getFriends.done(function(response){
      renderUsers(response);
      turnOffClickListener('.start_game', 'submit');
    });
  });
}

var createNewGame = function(myUrl, opponentClass) {
  return $.ajax({
    url: myUrl,
    method: 'post',
    data: { opponent_class: opponentClass }
  });
}

var appendVideoForPicture = function() {
  $('.main-content').empty();
  $('#video_container').show();
  $('.output').show();
  openCamera();
}

var createNewGameListener = function() {
  $('.main-content').on('click', '.friend_data form', function(event){
    event.preventDefault();

    var myUrl = this.action
    var opponentClass = event.target.id

    var getNewGame = createNewGame(myUrl, opponentClass)

    getNewGame.done(function(){
      appendVideoForPicture();
    });

    getNewGame.fail(function(){
      console.log('creating game fails');
    })
  });
}
