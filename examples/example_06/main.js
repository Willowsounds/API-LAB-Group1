//The MIT License (MIT)

//Copyright (c) 2016 Tal Ater ??

//This js code was taken from CodePen. Credits to Alexander Salas Bastidas.

if (annyang) {
  // Let's define a command.The command here you need to say would be "Hello World".
  var commands = {
    "Hello world": function() {
    //The alert window will pop out.The console will log "this works"
      alert("Welcome!");
      console.log("this works"); //Just for checking
    }
  };
  //annyang.debug(true);
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
