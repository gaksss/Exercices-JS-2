const elements = document.querySelectorAll("img");

elements.forEach((element) => {
  element.addEventListener("mouseenter", handleHoverImgIn);
  element.addEventListener("mouseout", handleHoverImgOut);
 
});
function handleHoverImgIn(event) {
  elements[1].src = "./images/image1_2.jpg";
  
}
function handleHoverImgOut(event) {
  elements[0].src = "./images/image1.jpg";
  elements[1].src = "./images/image2.jpg";
  elements[2].src = "./images/image3.jpg";
  elements[3].src = "./images/image4.jpg";
  elements[4].src = "./images/image5.jpg";
}
