var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1111.jpg') {
      myImage.setAttribute ('src','images/1111-negate.jpg');
    } else {
      myImage.setAttribute ('src','images/1111.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'DnB Picture for, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'DnB Picture for, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}