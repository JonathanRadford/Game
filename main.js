//take user name data, store the name and apply for the journey
//get elements from the HTML page by using innerHTML
//create the story structure so that each story has specific elements to call upon
//call a specific story on each button click
//create a restart application that refreshes the page so that you can start again
//create a button link so that the music can be toggled on and off

import { StoryLine } from "./data/data.js";

const welcome = document.getElementById("welcome");
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

//function that begins the Game
const prologue = () => {
  button2.addEventListener("click", rename);
  button1.addEventListener("click", () => {
    newName = inputName.value;
    getStart();
    return newName;
  });
};

//takes the player to the path split and prints their name
//button functions act on each new click by returning story information to the HTML
const getStart = () => {
  welcome.innerHTML = "Welcome, " + newName + ". We shall begin your journey!";
  button1.innerHTML = "Path 1";
  button2.innerHTML = "Path 2";
  button1.addEventListener("click", () =>
    getStage(
      1,
      () => {
        getStage(
          3,
          () => {
            getStage(
              7,
              () => {
                getEnding(13);
              },
              () => {
                getEnding(14);
              }
            );
          },
          () => {
            getStage(
              8,
              () => {
                getEnding(15);
              },
              () => {
                getEnding(16);
              }
            );
          }
        );
      },

      () => {
        getStage(
          4,
          () => {
            getStage(
              7,
              () => {
                getEnding(13);
              },
              () => {
                getEnding(14);
              }
            );
          },
          () => {
            getStage(
              8,
              () => {
                getEnding(15);
              },
              () => {
                getEnding(16);
              }
            );
          }
        );
      }
    )
  );

  button2.addEventListener("click", () =>
    getStage(
      2,
      () => {
        getStage(
          5,
          () => {
            getStage(
              9,
              () => {
                getEnding(19);
              },
              () => {
                getEnding(17);
              }
            );
          },
          () => {
            getStage(
              10,
              () => {
                getEnding(18);
              },
              () => {
                getEnding(20);
              }
            );
          }
        );
      },

      () => {
        getStage(
          6,
          () => {
            getStage(
              11,
              () => {
                getEnding(17);
              },
              () => {
                getEnding(22);
              }
            );
          },
          () => {
            getStage(
              12,
              () => {
                getEnding(21);
              },
              () => {
                getEnding(22);
              }
            );
          }
        );
      }
    )
  );
};

const getStage = (storyLineIndex, buttonOneAction, buttonTwoAction) => {
  button1.innerHTML = `${StoryLine[storyLineIndex].button1}`;
  button2.innerHTML = `${StoryLine[storyLineIndex].button2}`;
  header.innerHTML = `${StoryLine[storyLineIndex].header}`;
  gameArea.innerHTML = `${StoryLine[storyLineIndex].text}`;
  button1.addEventListener("click", buttonOneAction);
  button2.addEventListener("click", buttonTwoAction);
};

const getEnding = (storyLineIndex) => {
  button1.innerHTML = `${StoryLine[storyLineIndex].button1}`;
  button2.innerHTML = `${StoryLine[storyLineIndex].button2}`;
  header.innerHTML = `${StoryLine[storyLineIndex].header}`;
  gameArea.innerHTML = `${StoryLine[storyLineIndex].text}`;
  button1.addEventListener("click", refreshPage);
  button2.style = "display: none";
};

const refreshPage = () => {
  location.reload();
};

const rename = () => {
  inputName.value = "";
  console.log("THIS");
};

//initial logic
playAudio();
prologue();
