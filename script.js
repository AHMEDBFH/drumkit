"use strict";
//using for loop to loop the button numbers and to add that an evenlistener to capture the click
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
//it captures key presses on the document
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//using switch statement to capture the click or key press and to play music when it is pressed or clicked
function makeSound(key) {
  switch (key) {
    case "b":
      let boom = new Audio("sounds/boom.wav");
      boom.play();
      break;
    case "c":
      let clap = new Audio("sounds/clap.wav");
      clap.play();
      break;
    case "h":
      let hihat = new Audio("sounds/hihat.wav");
      hihat.play();
      break;
    case "k":
      let kick = new Audio("sounds/kick.wav");
      kick.play();
      break;
    case "o":
      let openhat = new Audio("sounds/openhat.wav");
      openhat.play();
      break;
    case "r":
      let ride = new Audio("sounds/ride.wav");
      ride.play();
      break;
    case "s":
      let snare = new Audio("sounds/snare.wav");
      snare.play();
      break;
    case "x":
      let tink = new Audio("sounds/tink.wav");
      tink.play();
      break;
    case "z":
      let tom = new Audio("sounds/tom.wav");
      tom.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

//adding some animation when the button is clicked or pressed
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
