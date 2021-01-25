
//switch code: to play the sound for each case, based on the keyValue of click, keyDown

function initiateSwitch(keyValue){
  switch (keyValue) {
    //in the case that buttonInnterHTML equals "w" as designated by class
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
    console.log("null")
}}

//deterimine number of drum buttons to inform for
var numberOfDrumButtons = document.querySelectorAll(".drum").length;


//loop: for all query selector buttons,
//              1  add event listenerFunction and
//              2  collect innerHTML as currentKey
//until i is equal to number of buttons (".drum".length)

for (var i = 0; i < numberOfDrumButtons; i++) {

  //document.querySelectorAll("button")[i] identifies each button with position [i]

  //target.addEventListener(“type”, listenerFunction [, useCapture]);
  //function(){} = anonymous function INSIDE the rest of the document query
  //[i] is for the incremental marker for the button

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    //identify and store innerHTML for button selected
    var buttonInnerHTML = this.innerHTML;

    //start function initiateSwitch with var buttonInnerHTML
    initiateSwitch(buttonInnerHTML);

    //store var currentKey for buttonAnimation
    var currentKey = buttonInnerHTML;
    buttonAnimation(currentKey)

  })
}

document.addEventListener("keydown", function(keyCode) {

  // var buttonPressed = this.;
  console.log(keyCode.key);
  initiateSwitch(keyCode.key);

  // initiateSwitch(buttonPressed) for buttonAnimation
  var currentKey = keyCode.key;
  buttonAnimation(currentKey)
})

//add animation to the  buttonPressed
function buttonAnimation(currentKey){

      //add .pressed style to activeButton, defined by keyCode and click
      var activeButton = document.querySelector("." + currentKey);
      activeButton.classList.add("pressed");

      //after 100ms delay, remove .pressed from activeButton
      setTimeout(function() {activeButton.classList.remove("pressed");}, 100)

}
