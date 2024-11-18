const erase = document.querySelector("button");
const lastname = document.getElementById("lastname");
const firstname = document.getElementById("firstname");
const city = document.getElementById("city");

erase.addEventListener("click", handleClickedButton)


function handleClickedButton(event) {
  
 
 lastname.value = "";
 firstname.value = "";
 city.value = "";
 
 
}