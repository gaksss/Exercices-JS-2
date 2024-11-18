const elements = document.querySelectorAll("img");

elements.forEach((element) => {
  element.addEventListener("mouseenter", handleHoverImg);
  element.addEventListener("mouseout", handleHoverImg);
});
function handleHoverImg(event) {
  let element = event.target;
  if (event.type == "mouseenter") {
    element.src = "./images/" + element.id + "_2.jpg";
  } else {
    element.src = "./images/" + element.id + ".jpg";
  }
}
