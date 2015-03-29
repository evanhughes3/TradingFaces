function getUser (event) {

  var userPageInfo = {};

  var ajaxUser = $.ajax({
    url: '/users/show',
  });

  ajaxUser.done(function (userData) {
    userPageInfo.user = userData;


  });
}

