function sendPosition(slider, value) {
  console.log(slider+": "+value);

  var request = new XMLHttpRequest();
  request.open("POST", "http://smiw.cba.pl/"); // Add the right URI
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(encodeURI(slider)+"="+value);
}

function center() {
  var slider = document.getElementById('servo');
  if(slider.value == 12)
    return;
  slider.value = 12;
  sendPosition(slider.id, slider.value);
}

window.onload = center;