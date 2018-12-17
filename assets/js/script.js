// JS by Jan Andreassen
// UCN MMD 2018
//
// function alertMe(event) {
//   event.preventDefault();
//   alert('så er der kage');
// }

// function showBox(event) {
//   event.preventDefault();
//   document.getElementById('box').style="display:block";
// }
// function hideBox(event) {
//   event.preventDefault();
//   document.getElementById('box').style="display:none";
// }
// function changeColor() {
//
//   document.getElementById('box').style="background-color:#ee5253";
// }
window.onload = function() {

  document.getElementById('btnAlert').addEventListener('click', function() {
    alert('hey')
  });

  var elmbox = document.getElementById('box');

  document.getElementById('btnBoxShow').addEventListener('click', function() {
    elmbox.classList.add('show');
  });
  document.getElementById('btnBoxHide').addEventListener('click', function() {
    elmbox.classList.remove('show');
  });

  document.getElementById('btnBoxToggle').addEventListener('click', function() {
    elmbox.classList.toggle('show');
  });
elmbox.addEventListener('mouseover', function() {
  elmbox.classList.toggle('changecolor')

});
elmbox.addEventListener('mouseout', function() {
  elmbox.classList.toggle('changecolor')

});



}
