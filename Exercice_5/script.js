const elements = document.querySelectorAll("img");

elements.forEach((element) => {
  element.addEventListener("mouseenter", handleHoverImgIn);
  element.addEventListener("mouseout", handleHoverImgOut);
 
});
function handleHoverImgIn(event) {
  let element = event.target
  element.src = "./images/"+ element.id +"_2.jpg";
  
  
  
  
}
function handleHoverImgOut(event) {
  let element = event.target
  element.src = "./images/"+ element.id +".jpg";
}
