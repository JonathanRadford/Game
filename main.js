/*take user name data, store the name and apply throughout the journey
    get element from the HTML page by using innerHTML

*/

let newName;

const inputName = document.getElementById("name-input");
const buttonInput = document.getElementById("Btn-Primary");
const Welcome = document.getElementById("Welcome");

buttonInput.addEventListener("click", () => {
  newName = inputName.value;
  Welcome.innerHTML = "Welcome, " + newName + ". We shall begin your journey!";
  console.log(newName)  
})

console.log(newName)

