function getUser () {
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
    $(this).attr("src", "https://res.cloudinary.com/hvytc53yh/image/upload/v1427915724/wink_icon_s3oyss.png");
    }, function() {
    $(this).attr("src", "https://res.cloudinary.com/hvytc53yh/image/upload/v1427915724/smile_icon_knje1j.png");
  })

  $('#current-games').children().hover(function(){
    $(this).attr("src", "https://res.cloudinary.com/hvytc53yh/image/upload/v1427915724/tongue_icon_y3i0t3.png");
    }, function() {
    $(this).attr("src", "https://res.cloudinary.com/hvytc53yh/image/upload/v1427915723/love_icon_idmzkn.png");
  })

  $('#old-games').children().hover(function(){
    $(this).attr("src", "https://res.cloudinary.com/hvytc53yh/image/upload/v1427915723/laugh_icon_ik6was.png");
    }, function() {
    $(this).attr("src", "https://res.cloudinary.com/hvytc53yh/image/upload/v1427915724/whistle_icon_egojo8.png");
  })

  $('#logout').children().hover(function(){
    $(this).attr("src", "https://res.cloudinary.com/hvytc53yh/image/upload/v1427915723/angry_icon_evxunp.png");
  }, function() {
    $(this).attr("src", "https://res.cloudinary.com/hvytc53yh/image/upload/v1427915724/wink_icon_s3oyss.png");
  })
}

