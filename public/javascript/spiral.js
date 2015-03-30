$(document).ready(function() {
  $('.save-photo').click(function(event) {
    checkMark();
  });
})




var showSpiral = function() {
  $('#loading-gif').addClass("fa fa-spinner fa-pulse fa-3x")
}

var hideSpiral = function() {
  $('#loading-gif').removeClass("fa fa-spinner fa-pulse fa-3x")
}

var checkMark = function() {
  $('#loading-gif').addClass("fa fa-check fa-3x").delay(1000).removeClass("fa fa-check fa-3x")
}