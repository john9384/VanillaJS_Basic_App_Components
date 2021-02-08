// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recog = new SpeechRecognition();
// recog.interimResults = true;
// recog.start();

// let p = document.createElement("p");
// const words = document.querySelector(".words");
// words.appendChild(p);

// recog.addEventListener("results", e => {
//   console.log(e);
// });

var SpeechRecognition = window.webkitSpeechRecognition;
var SpeechGrammarList = window.webkitSpeechGrammarList;
var SpeechRecognitionEvent = window.webkitSpeechRecognitionEvent;

var colors = [
  "aqua",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "chocolate",
  "coral"
];
var grammar =
  "#JSGF V1.0; grammar colors; public <color> = " + colors.join(" | ") + " ;";

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);

recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector(".output");
var bg = document.querySelector("html");
var hints = document.querySelector(".hints");

var colorHTML = "<span></span>";
colors.forEach(function (v, i, a) {
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + " </span>";
});
hints.innerHTML = `<div>Tap/click then say a color to change the background color of the app. Try " +
  ${colorHTML}
  </div>`;

document.body.onclick = function () {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = function (event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = "Result received: " + color + ".";
  bg.style.backgroundColor = color;
  console.log("Confidence: " + event.results[0][0].confidence);
};

recognition.onspeechend = function () {
  recognition.stop();
};

recognition.onnomatch = function (event) {
  diagnostic.textContent = "I didnt recognise that color.";
};

recognition.onerror = function (event) {
  diagnostic.textContent = "Error occurred in recognition: " + event.error;
};
