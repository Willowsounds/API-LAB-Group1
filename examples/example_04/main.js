//The MIT License (MIT)

//Copyright (c) 2016 Tal Ater ??

//defining functions for OPENING A WEBSITE IN NEW WINDOW on voice command via DOM
//function for OPENING NEW WINDOW
function openWin() {
  myWindow = window.open("https://en.wikipedia.org/wiki/List_of_cats", "myWindow", "width=1000, height=800");   // Opens a new window
}

if (annyang) {
  var commands = {
    'show cats': function() {
      openWin();
      console.log("This works"); //Just for checking
    }
  }

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start({
    autoRestart: true
  });

}