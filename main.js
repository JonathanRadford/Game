//take user name data, store the name and apply throughout the journey
//get element from the HTML page by using innerHTML
//

let newName;

let Welcome = document.getElementById("welcome");
let inputName = document.getElementById("name-input");
let button1 = document.getElementById("btn-one");
let button2 = document.getElementById("btn-two");
let text = document.getElementById("main-text");
let gameArea = document.getElementById("game-section")
let header = document.getElementById("heading")

button1.addEventListener("click", () => {
  newName = inputName.value;
  Welcome.innerHTML = "Welcome, " + newName + ". We shall begin your journey!";

 
  button1.onclick = () => {
    button1.innerHTML = "How dare you accuse me of such folly!";
    button2.innerHTML = "Do you believe such lies?";
    header.innerHTML =  `<h2>You meet a man in the woods who looks destitute and defeated. He accuses you of crying like a babe!</h2>`
    gameArea.innerHTML = `
    <img id="old-man" src="dad.png">
    <div id="welcome">
    <h2 id="main-text"> When the angel of Doom came near, whence did you cry like a baby?</h2>
    </div>`
  }
  
button2.onclick = () => {
  button1.innerHTML = "CURSES, Cows are my mortal enemy!";
  button2.innerHTML = "Thank you, Kind friend";
  Welcome.innerHTML = `
  <div id="welcome">
  <h2 id="main-text"> Here have this cow for good luck</h2>
  </div>`
}

  })


