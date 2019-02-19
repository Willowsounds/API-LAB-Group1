//The MIT License (MIT)

//Copyright (c) 2016 Tal Ater ??

//This Javascript code was taken from https://www.jumpingrivers.com/blog/voice-control-your-shiny-apps/
//Credits to Jumping Rivers

// detect whether it is supported in the browser
if (annyang) {
  // define some commands
  var commands = {
    // on hearing "Jumping Rivers", call this function
    "Jumping Rivers": function() {
      //opens a new tab with this website
      window.open("https://www.jumpingrivers.com", "_blank");
      console.log("this works"); //Just for checking
    }
  };
  // register the defined commands
  annyang.addCommands(commands);
  // start listening
  annyang.start();
}
