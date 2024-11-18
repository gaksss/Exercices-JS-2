const input = document.getElementById("lastname");

input.addEventListener("keydown", handleKeyboardDown);

function handleKeyboardDown(event) {
  console.log(event.key);
}
