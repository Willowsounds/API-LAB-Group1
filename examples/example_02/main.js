//The MIT License (MIT)

//Copyright (c) 2016 Tal Ater ??

//defining functions for PLAYING AND PAUSING A VIDEO on voice command via DOM

var video = document.getElementById("vid");

//function for PLAYING A VIDEO
function Play() {
  video.play();
}

//function for PAUSING A VIDEO
function Pause() {
  video.pause();
}
//setting commands for the annyang library to identify words and then call the function that were defined above
if (annyang) {
  var commands = {
    "play video": function() {
      vid.play();
      console.log("this works"); //just for testing
    },
    "pause video": function() {
      vid.pause();
      console.log("this pauses"); //just for testing
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start({
    autoRestart: true
  });
}
