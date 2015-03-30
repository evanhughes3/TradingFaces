// NOT WORKING - will return if we have time
$(document).ready(function() {

  // $('#fb_login').on('click', function(event, callback){
  //   event.preventDefault();
  //   console.log('Team Trading Faces is Badass');

  //   var myUrl = event.target.href

  //   var request = $.ajax({
  //     url: myUrl,
  //     type: 'get'
  //   });

  //   request.done(function(response){
  //     console.log(response.user);
  //     console.log('winning');
  //   });
  // });
 $('#facebook_button').hover(function() {
   $('#landing-body').css('background-image', 'url(../images/tongue_icon.png)')
 }, function() {
   $('#landing-body').css('background-image', 'url(../images/wink_icon.png)')
 });

});