function getUser (event) {
  var userPageInfo = {};
  var ajaxUser = $.ajax({
    url: '/users/show',
  });

  ajaxUser.done(function (userData) {
    userPageInfo.user = userData;
  });
}

function toggleNavbarFaces() {
  $('#new-game').children().hover(function(){
    $(this).attr("src", "../images/wink_icon.png");
    }, function() {
    $(this).attr("src", "../images/smile_icon.png");
  })

  $('#current-games').children().hover(function(){
    $(this).attr("src", "../images/smile_icon.png");
    }, function() {
    $(this).attr("src", "../images/love_icon.png");
  })

  $('#old-games').children().hover(function(){
    $(this).attr("src", "../images/weird_icon.png");
    }, function() {
    $(this).attr("src", "../images/whistle_icon.png");
  })

  $('#logout').children().hover(function(){
    $(this).attr("src", "../images/angry_icon.png");
  }, function() {
    $(this).attr("src", "../images/wink_icon.png");
  })
}

