var animateButton = function(e) {
  e.preventDefault;
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};
var bubblyButtons = document.getElementsByClassName("tab_btn1");
for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

var animateButtoner = function(e) {
  e.preventDefault;
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};
var bubblyButtonser = document.getElementsByClassName("tab_btn2");
for (var i = 0; i < bubblyButtonser.length; i++) {
  bubblyButtonser[i].addEventListener('click', animateButtoner, false);
}