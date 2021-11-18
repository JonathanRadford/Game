//take user name data, store the name and apply throughout the journey
//get element from the HTML page by using innerHTML
//create an object which stores all the story data from start to finish
//call the specific story data when a button is pressed 


let Welcome = document.getElementById("welcome");
let inputName = document.getElementById("name-input");
let button1 = document.getElementById("btn-one");
let button2 = document.getElementById("btn-two");
let text = document.getElementById("main-text");
let gameArea = document.getElementById("game-section")
let header = document.getElementById("heading")

let StoryLine = 
{
1: {
  button1: "Here, take some gold",
  button2: "Get away you filthy oaf", 
  header: `<h2>You meet a man in the woods who looks destitute and defeated. He begs you for money!</h2>`,
  text: 
  `<img id="old-man" src="./imagesfolder/path1.png">
  <div id="welcome">
  <h2 id="main-text"> "Please help. I've got naught but the clothes on my skin!</h2>
  </div>`
},

2: { 
  button1: "CURSE YOU, Cows are my mortal enemy!",
  button2: "Thank you, Kind friend",
  header: `<h2>You come across a lowly cowhand, who offers you the finest Milk in the land</h2>`, 
  text: `<img id="old-man" src="./imagesfolder/path2.png">
  <div id="welcome">
  <h2 id="main-text"> "Would you like to try the finest Milk this side of Codeshire?"</h2>
  </div>`
  },

3: {
  button1: "Go left",
  button2: "Go right",
  header: `<h2>The man accepts your gold, blesses you, then points in two directions.</h2>`, 
  text: `<img id="old-man" src="./imagesfolder/daf.png">
  <div id="welcome">
  <h2 id="main-text"> *whispers* "Go left to find beauty, go right to find power"</h2>
  </div>`
},

4: {
  button1: "Go right",
  button2: "Go left", 
  header: `<h2>The old man, terrified and upset, points you in two directions.</h2>`,
  text: `<img id="old-man" src="daf.png">
  <div id="welcome">
  <h2 id="main-text"> "Go right to find beauty, go left to find power"</h2>
  </div>`
  },

5: {
    button1: "Bad milk gave me flatulence!",
    button2: "It all began long ago...", 
    header: `<h2>The cowhand is dumfounded that a human could have a cow as a mortal enemy.</h2>`,
    text: 
    `<img id="old-man" src="./imagesfolder/path2.1.png">
    <div id="welcome">
    <h2 id="main-text"> "What couldst a cow have done to ye?"</h2>
    </div>`
  },
  
  6: { 
    button1: "*Continues drinking!*",
    button2: "This will not end well for ye!",
    header: `<h2>You take the bottle in haste without realising the cowhand has become a great Witch!"</h2>`, 
    text: `<img id="old-man" src="./imagesfolder/path2.2.png">
    <div id="welcome">
    <h2 id="main-text"> "You FOOL! That milk? POISONED!" *Maniacal laugh*</h2>
    </div>`
    },
  7: {
      button1: "...",
  button2: "I will defeat you, you brute!",
  header: `<h2>You witness a strong man throw rocks across the riverbed. He approaches...</h2>`, 
  text: `<img id="old-man" src="./imagesfolder/daf.png">
  <div id="welcome">
  <h2 id="main-text"> "Care to challenge me and prove your mettle?"</h2>
  </div>`
    },
   8: { 
      button1: "Beauty",
      button2: "Power!",
      header: `<h2>After taking directions from the old man, you stumble upon a beautiful Elf </h2>`, 
      text: `<img id="old-man" src="./imagesfolder/right(evil).png">
      <div id="welcome">
      <h2 id="main-text">"I am Sona. What do you wish for?"</h2>
      </div>`
      },
    9: { 
        button1: "9",
        button2: "9",
        header: `<h2>9</h2>`, 
        text: `<img id="old-man" src="daf.png">
        <div id="welcome">
        <h2 id="main-text"> 9</h2>
        </div>`
        },
  10: { 
       button1: "10",
       button2: "10",
       header: `<h2>You have died of dysentery</h2>`, 
       text: `<img id="old-man" src="./imagesfolder/game_over.png">`
            },
}

prologue()

function prologue(){
  button2.addEventListener("click", prologue)
  button1.addEventListener("click", () => {
    newName = inputName.value;
    start();
  return newName
})}

function start(){
  Welcome.innerHTML = "Welcome, " + newName + ". We shall begin your journey!";
  button1.innerHTML = "Path 1";
  button2.innerHTML = "Path 2";
  button1.addEventListener("click", stageOne)
  button2.addEventListener("click", stageTwo)
  
}

function stageOne() {
  button1.innerHTML = `${StoryLine[1].button1}` ;
  button2.innerHTML = `${StoryLine[1].button2}` ;
  header.innerHTML =  `${StoryLine[1].header}`  ;
  gameArea.innerHTML = `${StoryLine[1].text}`   ;
  button1.addEventListener("click", stageThree)
  button2.addEventListener("click", stageFour)
}

function stageTwo() {
  button1.innerHTML = `${StoryLine[2].button1}` ;
  button2.innerHTML = `${StoryLine[2].button2}` ;
  header.innerHTML =  `${StoryLine[2].header}`  ;
  gameArea.innerHTML = `${StoryLine[2].text}`   ;
  button1.addEventListener("click", stageFive)
  button2.addEventListener("click", stageSix)
} 

function stageThree() {
  button1.innerHTML = `${StoryLine[3].button1}` ;
  button2.innerHTML = `${StoryLine[3].button2}` ;
  header.innerHTML =  `${StoryLine[3].header}`  ;
  gameArea.innerHTML = `${StoryLine[3].text}`   ;
  button1.addEventListener("click", stageSeven)
  button2.addEventListener("click", stageEight)
}

function stageFour() {
 button1.innerHTML = `${StoryLine[4].button1}` ;
 button2.innerHTML = `${StoryLine[4].button2}` ;
 header.innerHTML =  `${StoryLine[4].header}`  ;
 gameArea.innerHTML = `${StoryLine[4].text}`   ;
 button1.addEventListener("click", stageFour)
 button2.addEventListener("click", stageFour)
}

function stageFive() {
  button1.innerHTML = `${StoryLine[5].button1}` ;
  button2.innerHTML = `${StoryLine[5].button2}` ;
  header.innerHTML =  `${StoryLine[5].header}`  ;
  gameArea.innerHTML = `${StoryLine[5].text}`   ;
  button1.addEventListener("click", stageFive)
 button2.addEventListener("click", stageFive)
}

function stageSix() {
 button1.innerHTML = `${StoryLine[6].button1}` ;
 button2.innerHTML = `${StoryLine[6].button2}` ;
 header.innerHTML =  `${StoryLine[6].header}`  ;
 gameArea.innerHTML = `${StoryLine[6].text}`   ;
 button1.addEventListener("click", stageDeath)
 button2.addEventListener("click", stageDeath)
}

function stageSeven() {
  button1.innerHTML = `${StoryLine[7].button1}` ;
  button2.innerHTML = `${StoryLine[7].button2}` ;
  header.innerHTML =  `${StoryLine[7].header}`  ;
  gameArea.innerHTML = `${StoryLine[7].text}`   ;
  button1.addEventListener("click", stageSeven)
  button2.addEventListener("click", stageSeven)
}

function stageEight() {
 button1.innerHTML = `${StoryLine[8].button1}` ;
 button2.innerHTML = `${StoryLine[8].button2}` ;
 header.innerHTML =  `${StoryLine[8].header}`  ;
 gameArea.innerHTML = `${StoryLine[8].text}`   ;
 button1.addEventListener("click", stageSuccess)
 button2.addEventListener("click", stageDeath)
 
}

function stageSuccess() {
  button1.innerHTML = `${StoryLine[9].button1}` ;
  button2.innerHTML = `${StoryLine[9].button2}` ;
  header.innerHTML =  `${StoryLine[9].header}`  ;
  gameArea.innerHTML = `${StoryLine[9].text}`   ;
  button1.style= "display: none"
  button2.style= "display: none"
}
function stageDeath() {
  button1.innerHTML = `${StoryLine[10].button1}` ;
  button2.innerHTML = `${StoryLine[10].button2}` ;
  header.innerHTML =  `${StoryLine[10].header}`  ;
  gameArea.innerHTML = `${StoryLine[10].text}`   ;
  button1.style= "display: none"
  button2.style= "display: none"
}

const music = document.getElementById("myAudio"); 
function playAudio() { 
  music.play(); 
} 

function pauseAudio() { 
  music.pause(); 
} 