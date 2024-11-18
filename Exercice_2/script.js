const msg = document.getElementById("lastname")

msg.addEventListener("blur", handleFocusOut);

function handleFocusOut(event) {
  alert("Merci de votre participation")
  
}
