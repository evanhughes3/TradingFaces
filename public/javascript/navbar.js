$(document).ready(function() {
  $('#new-game').children().hover(function(){
    $(this).attr("src", "../images/tongue_icon.png");
    }, function() {
    $(this).attr("src", "../images/smile_icon.png");
  })

  $('#current-games').children().hover(function(){
    $(this).attr("src", "../images/smile_icon.png");
    }, function() {
    $(this).attr("src", "../images/tongue_icon.png");
  })

  $('#old-games').children().hover(function(){
    $(this).attr("src", "../images/tongue_icon.png");
    }, function() {
    $(this).attr("src", "../images/whistle_icon.png");
  })

  $('#logout').children().hover(function(){
    $(this).attr("src", "../images/tongue_icon.png");
  }, function() {
    $(this).attr("src", "../images/wink_icon.png");
  })

});