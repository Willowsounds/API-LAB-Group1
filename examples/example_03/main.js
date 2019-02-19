//The MIT License (MIT)

//Copyright (c) 2016 Tal Ater ??

//defining functions for CHANGING TEXT ATTRIBUTES on voice command via DOM
//function for ENLARGING TEXT
function makeTextBigger(){
  document.getElementById('catstory').style.fontSize = "30px";
}

//function for MAKING TEXT UPPERCASE
function makeTextUppercase(){
  document.getElementById('catstory').style.textTransform ="uppercase"
}

//function for SCROLLING TEXT
function pageScroll(){
  window.scrollBy(0,1);
  scrolldelay = setTimeout(pageScroll,10);
}

if (annyang) {
  var commands = {
    'bigger text': function() {
      makeTextBigger();
      console.log("This works"); //Just for checking
    },

    'scroll down': function() {
      pageScroll();
      console.log("This works"); //Just for checking
    },

    'uppercase': function() {
      makeTextUppercase();
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