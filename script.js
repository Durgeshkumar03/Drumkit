//for mouse point
var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleEvent);

    function handleEvent() {
        var buttonInnerHTML = this.innerHTML;

        mybutton(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    }
}

//whenever keyboard pressed
document.addEventListener("keypress", function (event) {
    mybutton(event.key);
    buttonAnimation(event.key);
});

function mybutton(key) {

    switch (key) {
        case "w":
             var audio = new Audio("sounds/sounds_tom-1.mp3");
            
            audio.play();
            break;
        case "a":
            var audio1 = new Audio("sounds/sounds_tom-2.mp3");
            audio1.play();
            break;
        case "s":
            var audio2 = new Audio("sounds/sounds_tom-3.mp3");
            audio2.play();
            break;
        case "d":
            var audio3 = new Audio("sounds/sounds_tom-4.mp3");
            audio3.play();
            break;
        case "j":
            var audio4 = new Audio("sounds/sounds_kick-bass.mp3");
            audio4.play();
            break;
        case "k":
            var audio5 = new Audio("sounds/sounds_snare.mp3");
            audio5.play();
            break;
        case "l":
            var audio6 = new Audio("sounds/sounds_crash.mp3");
            audio6.play();
            break;
        default: console.log();

    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }