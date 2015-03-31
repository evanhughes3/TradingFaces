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

var appendVideoForPicture = function() {
  // $('.main-content').empty();
  $('#video_container').show();
  $('.output').show();
  openCamera();
}

var respondToChallenge = function() {
  var roundId = $(this).data('round-id');
  hideEverything();
  photoOverlay();
  appendVideoForPicture();
  $('#save-photo').attr('data-round-id', roundId);
  $(this).off();
}