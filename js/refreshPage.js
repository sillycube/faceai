function update_page() {
  $('body').css('background', 'url(../faceai/img/bg50transparency3-text.jpg) no-repeat center top fixed');
  $('.hiddenArea').css('visibility','hidden');
  $('#hiddenBtn').hide();
}

function update_image() {
  var desc = "Hello World";
  var desc2 =  "";

  $('#uploadedImage').attr('src','../faceai/img/demoImage.jpg');
  $('#output').css('visibility','visible');
}
