//take user name data, store the name and apply throughout the journey
//get element from the HTML page by using innerHTML
//create an object which stores all the story data from start to finish
//call the specific story data when a button is pressed
import {StoryLine} from "./data/data.js";

const Welcome = document.getElementById("welcome");
const inputName = document.getElementById("name-input");
const button1 = document.getElementById("btn-one");
const button2 = document.getElementById("btn-two");
const text = document.getElementById("main-text");
const gameArea = document.getElementById("game-section");
const header = document.getElementById("heading");
const music = document.getElementById("myAudio");
let newName;

const prologue = () => {
  button2.addEventListener("click", prologue);
  button1.addEventListener("click", () => {
    newName = inputName.value;
    getStart();
    return newName;
  });
};

const getStart = () => {
  Welcome.innerHTML = "Welcome, " + newName + ". We shall begin your journey!";
  button1.innerHTML = "Path 1";
  button2.innerHTML = "Path 2";
  button1.addEventListener("click", () =>
    getStage(1, () => {getStage(3, () => {getStage(7, getEnding2, getEnding2);},
                                   () => {getStage(8, getEnding2, getEnding2);},
);},
             
                () => {getStage(4, () => {getStage(7, getEnding2, getEnding2);},
                                   () => {getStage(8, getEnding2, getEnding2);},
);},));

    button2.addEventListener("click", () => 

    getStage(2, () => {getStage(5, getEnding2, getEnding2);}, () => {getStage(6, getEnding2, getEnding2);},));
}

const getStage = (storyLineIndex, buttonOneAction, buttonTwoAction) => {
  button1.innerHTML = `${StoryLine[storyLineIndex].button1}`;
  button2.innerHTML = `${StoryLine[storyLineIndex].button2}`;
  header.innerHTML = `${StoryLine[storyLineIndex].header}`;
  gameArea.innerHTML = `${StoryLine[storyLineIndex].text}`;
  button1.addEventListener("click", buttonOneAction);
  button2.addEventListener("click", buttonTwoAction);
};

const getEnding1 = () => {
  button1.innerHTML = `${StoryLine[9].button1}`;
  button2.innerHTML = `${StoryLine[9].button2}`;
  header.innerHTML = `${StoryLine[9].header}`;
  gameArea.innerHTML = `${StoryLine[9].text}`;
  button1.style = "display: none";
  button2.style = "display: none";
}

const getEnding2 = () =>{
  button1.innerHTML = `${StoryLine[10].button1}`;
  button2.innerHTML = `${StoryLine[10].button2}`;
  header.innerHTML = `${StoryLine[10].header}`;
  gameArea.innerHTML = `${StoryLine[10].text}`;
  button1.style = "display: none";
  button2.style = "display: none";
}

function playAudio() {
  music.play();
}

function pauseAudio() {
  music.pause();
}

//initial logic
prologue();
