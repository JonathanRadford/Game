//take user name data, store the name and apply throughout the journey
//get element from the HTML page by using innerHTML
//create an object which stores all the story data from start to finish
//call the specific story data when a button is pressed
import {StoryLine} from "./data/data.js";

const Welcome = document.getElementById("welcome");
const inputName = document.getElementById("name-input");
const button1 = document.getElementById("btn-one");
const button2 = document.getElementById("btn-two");
const gameArea = document.getElementById("game-section");
const header = document.getElementById("heading");
const music = document.getElementById("myAudio");
let newName;

const playAudio = () => {
  music.play();
}

const pauseAudio = () => {
  music.pause();
}

const prologue = () => {
  button2.addEventListener("click", rename);
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
    getStage(1, () => {getStage(3, () => {getStage(7, getEnding3, getEnding1);},
                                   () => {getStage(8, getEnding4, getEnding5);},
);},
             
                () => {getStage(4, () => {getStage(7, getEnding3, getEnding1);},
                                   () => {getStage(8, getEnding4, getEnding5);},
);},));

  button2.addEventListener("click", () =>
    getStage(2, () => {getStage(5, () => {getStage(9, getEnding4, getEnding4);},
                                   () => {getStage(10, getEnding3, getEnding3);},
);},
         
                () => {getStage(6, () => {getStage(11, getEnding2, getEnding3);},
                                   () => {getStage(12, getEnding4, getEnding4);},
);},));}


const getStage = (storyLineIndex, buttonOneAction, buttonTwoAction) => {
  button1.innerHTML = `${StoryLine[storyLineIndex].button1}`;
  button2.innerHTML = `${StoryLine[storyLineIndex].button2}`;
  header.innerHTML = `${StoryLine[storyLineIndex].header}`;
  gameArea.innerHTML = `${StoryLine[storyLineIndex].text}`;
  button1.addEventListener("click", buttonOneAction);
  button2.addEventListener("click", buttonTwoAction);
};

/*const getEnding = (storyLineIndex) => {
  button1.innerHTML = `${StoryLine[storyLineIndex].button1}`;
  button2.innerHTML = `${StoryLine[storyLineIndex].button2}`;
  header.innerHTML = `${StoryLine[storyLineIndex].header}`;
  gameArea.innerHTML = `${StoryLine[storyLineIndex].text}`;
  button1.style = "display: none"
  button2.style = "display: none"
};*/

const getEnding1 = () => {
  button1.innerHTML = `${StoryLine[13].button1}`;
  button2.innerHTML = `${StoryLine[13].button2}`;
  header.innerHTML = `${StoryLine[13].header}`;
  gameArea.innerHTML = `${StoryLine[13].text}`;
  button1.style = "display: none"
  
}

const getEnding2 = () =>{
  button1.innerHTML = `${StoryLine[14].button1}`;
  button2.innerHTML = `${StoryLine[14].button2}`;
  header.innerHTML = `${StoryLine[14].header}`;
  gameArea.innerHTML = `${StoryLine[14].text}`;
  button1.style = "display: none"
  button2.style = "display: none"
}


const getEnding3 = () => {
  button1.innerHTML = `${StoryLine[15].button1}`;
  button2.innerHTML = `${StoryLine[15].button2}`;
  header.innerHTML = `${StoryLine[15].header}`;
  gameArea.innerHTML = `${StoryLine[15].text}`;
  button1.addEventListener('click', refreshPage)
  button2.style = "display: none"
}

const getEnding4 = () =>{
  button1.innerHTML = `${StoryLine[16].button1}`;
  button2.innerHTML = `${StoryLine[16].button2}`;
  header.innerHTML = `${StoryLine[16].header}`;
  gameArea.innerHTML = `${StoryLine[16].text}`;
  button1.addEventListener('click', refreshPage)
  button2.style = "display: none"
}

const getEnding5 = () => {
  button1.innerHTML = `${StoryLine[17].button1}`;
  button2.innerHTML = `${StoryLine[17].button2}`;
  header.innerHTML = `${StoryLine[17].header}`;
  gameArea.innerHTML = `${StoryLine[17].text}`;
  button1.addEventListener('click', refreshPage)
  button2.style = "display: none"
}

const getEnding6 = () =>{
  button1.innerHTML = `${StoryLine[18].button1}`;
  button2.innerHTML = `${StoryLine[18].button2}`;
  header.innerHTML = `${StoryLine[18].header}`;
  gameArea.innerHTML = `${StoryLine[18].text}`;
  button1.addEventListener('click', refreshPage)
  button2.style = "display: none"
}

const refreshPage = () => {
  location.reload();
}
const rename = () => {
  inputName.value = ""
  console.log("THIS")
}



//initial logic
prologue();
playAudio;
