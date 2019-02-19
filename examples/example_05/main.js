//The MIT License (MIT)

//Copyright (c) 2016 Tal Ater ??

//defining functions for MAKING DIV APPEAR on voice command via DOM
//function for MAKING A DIV WITH EMBEDDED GAME APPEAR ON THE SCREEN
function openGame() {
  var nyanCat = document.getElementById("gameBox");
  if (nyanCat.style.display === "none") {
    nyanCat.style.display = "block";
  } else {
    nyanCat.style.display = "none";
  }
}

if (annyang) {
  var commands = {
      'play game': function() {
      openGame();
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