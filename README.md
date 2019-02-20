# API Lab using Annyang Voice Recognition Library


Annyang is The MIT License (MIT)
Copyright (c) 2016 Tal Ater

**What the project does**

[Annyang] is a tiny JavaScript speech recognition library that lets users control a website with voice commands. Annyang has no dependencies, weighs just 2 KB, and is free to use and modify. 
Our group has used Annyang to integrate the speech recognition property as a way of accesing content. The examples presented include different content types: text output to screen, text manipualation, playing a video, opening a game, getting alert pop-ups and calling a website in new window as well as in new tab.



**Why the project is useful**

Voice-controlled technologies are being developed implemented on common devices by many major companies. Alexa and Siri are pioneer products that already demonstrate how the new form of communicating with devices is becoming a norm. In a few years speech recognition will most likely be implemented in our everyday lives. As human-computer interactions are one of the main fields in interaction design, voice-controlled interfaces are seen as a growing opportunity for IxD designers. Moreover, such interfaces can promote inclusivenes for people with various disabilities.



**What is the project exploring (remember you are prototyping)**

The project explores an intuitive way of communicating with common blocks of websites and how to command these with voice control.

  - the given examples can be used as templates to implement voice control to a website
  - showing a simple approach to voice-control interfaces and that annyang as a library is useful

**How users can get started with the project, How to use your code**

Annyang is a simple library that enables you to call any JavaScript function with a voice command. Some things that you might want to implement can be difficult and need a little more investigation, like making a video play and pause.
  
Start by linking your **annyang.min.js** file in your index.html along with your **main.js**:
```sh
<script src="../../build/annyang.min.js"></script>
<script src="main.js"></script>
```

Then, put this code at the bottom of your **main.js**:
```sh
  annyang.addCommands(commands);

  annyang.start({
    autoRestart: true
  });

```

Define a function:
```sh
$ karma test
```

Tell annyang to call that function on your chosen voice command:
```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```
Blabla:

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Have fun with voice recognition that Annyang to easily allows you to do!

**Who maintains and contributes**

  - Veronika Bendoriūtė
  - Viviana Pohl
  - Julija Rukanskaitė
  - Weronika Wierzba

License
----

MIT

   [Annyang]: <https://www.talater.com/annyang/>
