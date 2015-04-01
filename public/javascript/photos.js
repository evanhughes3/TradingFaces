var width = 320;    // We will scale the photo width to this
var height = 0;     // This will be computed based on the input stream
var streaming = false;

var video = null;
var canvas = null;
var photo = null;
var startbutton = null;
var $savebutton = null;

function openCamera() {
  // Need to update to current HTML setup
    video = document.getElementById('camera-stream');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('take-photo');
    $savebutton = $('#save-photo');

    navigator.getMedia = ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

    navigator.getMedia(
          {
            video: true,
          },
          function (stream) {
            if (navigator.mozGetUserMedia) {
              video.mozSrcObject = stream;
            } else {
              var vendorURL = window.URL || window.webkitURL;
              video.src = vendorURL.createObjectURL(stream);
            }
            video.play();
            video.addEventListener('canplay', function(ev){
                  if (!streaming) {
                    height = video.videoHeight / (video.videoWidth/width);

                    // Firefox currently has a bug where the height can't be read from
                    // the video, so we will make assumptions if this happens.

                    if (isNaN(height)) {
                      height = width / (4/3);
                    }

                    video.setAttribute('width', width);
                    video.setAttribute('height', height);
                    canvas.setAttribute('width', width);
                    canvas.setAttribute('height', height);
                    streaming = true;
                  }
                }, false);

            startbutton.addEventListener('click', takePicture, false);

            $('#save-photo').on('click', function (event) {
              savePhoto();
              stream.stop();
              event.preventDefault();
              $(this).off();
            });

          },
          function (err) {
            console.log("An error occured! " + err);
            console.log("The computer does not have a camera.");
          }
        );
clearPhoto();
}

function clearPhoto() {
  var context = canvas.getContext('2d');
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  var data = canvas.toDataURL('image/png');
  photo.setAttribute('src', data);
}

function takePicture(event) {
  event.preventDefault();
  toggleCamera();
  toggleOutput();
  var context = canvas.getContext('2d');
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  } else {
    clearPhoto();
  }
}

function savePhoto (event) {
  toggleOutput();
  var imageData = $('#photo').attr('src');
  var roundId = $('#save-photo').attr('data-round-id');
  var opponentClass = $('#save-photo').attr('data-opponent');
  if ( roundId ) {
    createPhotoAjax(roundId, imageData);
    $(this).off();
  } else {
    var ajaxGame = $.ajax({
      url: '/games',
      type: 'post',
      data: {opponent_class: opponentClass},
    });

    ajaxGame.done(function (gameData) {
      roundId = gameData.round.id;
      createPhotoAjax(roundId, imageData);
      $(this).off();
    });

    ajaxGame.fail(function () {
      console.log("Failed to create a game.");
    });
  }
}

function createPhotoAjax (roundId, imageData) {
  toggleLoadingGif();
  var ajaxPhoto = $.ajax({
    url: '/rounds/' + roundId + '/photos',
    type: 'post',
    data: {image_data: imageData},
  });

  ajaxPhoto.done(function (serverData) {
    console.log('Successfully saved photo.');
    $savebutton.attr('data-round-id', '');
    toggleLoadingGif();
    showCheckMark();
  });

  ajaxPhoto.fail(function () {
    console.log('Failed to save photo.');
    toggleLoadingGif();
    showFailMark();
  });
}

var retakePhotoListener = function() {
  $('#retake-photo').on('click', function() {
    toggleOutput();
    toggleCamera();
  })
}











