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
  $('.friend-box').append(friendsTemplate(context));
}

var appendVideoForPicture = function() {
  // $('.main-content').empty();
  $('#video_container').show();
  $('.output').show();
  openCamera();
}

// var createNewGameListener = function() {
//   $('.start-game').on('click', '.friend_data form', function(event){
//     event.preventDefault();

//     var opponentClass = event.target.id
//     $('#save-photo').attr('data-opponent', opponentClass );

//     friendsOverlay();
//     appendVideoForPicture();
//     $(this).off();
//   });
// }
