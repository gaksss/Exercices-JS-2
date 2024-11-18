const img = document.getElementById("image1");
img.src = "./images/image1.jpg";

img.addEventListener("mouseenter", handleHoverImgIn);
img.addEventListener("mouseout", handleHoverImgOut);
function handleHoverImgIn(event) {
  img.src = "./images/image1_2.jpg";
}
function handleHoverImgOut(event) {
  img.src = "./images/image1.jpg";
}
