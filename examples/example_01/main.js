//The MIT License (MIT)

//Copyright (c) 2016 Tal Ater ??

//defining functions for PRINTING TEXT TO A DIV AND MAKING DIV APPEAR on voice command via DOM
//function for PRINTING TEXT OUTPUT TO DIV
function showAnswerOne(){
  document.getElementById('speech-bubble1').innerHTML = "Hello Human!";
  document.getElementById('speech-bubble1:after'); // adds triangle to speech bubble
  var bubbleOne = document.getElementById("speech-bubble1");
  if (bubbleOne.style.display === "none") {
    bubbleOne.style.display = "block";
  } else {
    bubbleOne.style.display = "none";
  }
};

//function for PRINTING TEXT OUTPUT TO DIV
function showAnswerTwo(){
  document.getElementById('speech-bubble2').innerHTML = "Meow LOL... Go to example 2!";
  document.getElementById('speech-bubble2:after'); // adds triangle to speech bubble
  var bubbleTwo = document.getElementById("speech-bubble2");
  if (bubbleTwo.style.display === "none") {
    bubbleTwo.style.display = "block";
  } else {
    bubbleTwo.style.display = "none";
  }
};

if (annyang) {
  var commands = {
    'hello cat': function() {
      showAnswerOne();
      console.log("This works"); //Just for checking
    },

    'meow': function() {
      showAnswerTwo();
      console.log("This works"); //Just for checking
    },
  }

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start({
    autoRestart: true
  });

}