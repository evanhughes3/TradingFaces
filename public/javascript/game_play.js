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

function getAllFriends() {
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

var toggleCamera = function() {
  $('#video_container').toggle();
}

var toggleOutput = function() {
  $('.output').toggle();
}

var respondToChallenge = function() {
  var roundId = $(this).data('round-id');
  var $img = $(this).siblings().find('img')
  hideEverything();
  photoOverlay();
  startRound($img, toggleCamera, openCamera);
  $('#save-photo').attr('data-round-id', roundId);
  $(this).off();
}