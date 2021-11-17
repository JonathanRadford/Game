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


let newName;

button1.addEventListener("click", () => {
  newName = inputName.value;
  Welcome.innerHTML = "Welcome, " + newName + ". We shall begin your journey!";
  button1.innerHTML = "Path 1";
  button2.innerHTML = "Path 2";

  button1.onclick = () => {
    button1.innerHTML = `${StoryLine.Obj1.button1}` ;
    button2.innerHTML = `${StoryLine.Obj1.button2}` ;
    header.innerHTML =  `${StoryLine.Obj1.header}`  ;
    gameArea.innerHTML = `${StoryLine.Obj1.text}`   ;
 }
  button2.onclick = () => {
   button1.innerHTML = `${StoryLine.Obj2.button1}` ;
   button2.innerHTML = `${StoryLine.Obj2.button2}` ;
   header.innerHTML =  `${StoryLine.Obj2.header}`  ;
   gameArea.innerHTML = `${StoryLine.Obj2.text}`   ;
}
/*button3.onclick = () => {
   button1.innerHTML = `${StoryLine.Obj1.button1}` ;
   button2.innerHTML = `${StoryLine.Obj1.button2}` ;
   header.innerHTML =  `${StoryLine.Obj1.header}`  ;
   gameArea.innerHTML = `${StoryLine.Obj1.text}`   ;
}
  button4.onclick = () => {
   button1.innerHTML = `${StoryLine.Obj2.button1}` ;
   button2.innerHTML = `${StoryLine.Obj2.button2}` ;
   header.innerHTML =  `${StoryLine.Obj2.header}`  ;
   gameArea.innerHTML = `${StoryLine.Obj2.text}`   ;
}*/
  return newName;
})

let StoryLine = {

Obj1: {
  button1: "Here, take some gold",
  button2: "Get away you filthy oaf", 
  header: `<h2>You meet a man in the woods who looks destitute and defeated. He begs you for money!</h2>`,
  text: 
  `<img id="old-man" src="dad.png">
  <div id="welcome">
  <h2 id="main-text"> "Please help. I've got naught but the clothes on my skin!</h2>
  </div>`
},

Obj2: { 
  button1: "CURSE YOU, Cows are my mortal enemy!",
  button2: "Thank you, Kind friend",
  header: `<h2>You come across a lowly cowhand, who offers you the finest Milk in the land</h2>`, 
  text: `<img id="old-man" src="daf.png">
  <div id="welcome">
  <h2 id="main-text"> "Would you like to try the finest Milk this side of Codeshire?"</h2>
  </div>`
  },

  
Obj3: {
  button1: "Pressed",
  button2: "Thank you, Kind friend", 
  header: `<h2>"You meet a man in the woods who looks destitute and defeated. He accuses you of crying like a babe!"</h2>`,
  text: `<div id="welcome">
  <h2 id="main-text"> Here have this cow for good luck</h2>
  </div>`

  },

Obj4: {
  button1: "CURSES, Cows are my mortal enemy!",
  button2: "Thank you, Kind friend", 
  header: `<h2>"You meet a man in the woods who looks destitute and defeated. He accuses you of crying like a babe!"</h2>`,
  text: `<div id="welcome">
  <h2 id="main-text"> Here have this cow for good luck</h2>
  </div>`
  }, 
};
