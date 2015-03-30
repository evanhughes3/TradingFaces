$(document).ready(function() {
  $('#save-photo').click(function(event) {
  console.log("ahahah")
    showSpiral();
  });
});

var showSpiral = function() {
  $('loading-gif').addClass("fa fa-cog fa-spin")
}

var hideSpiral = function() {
}