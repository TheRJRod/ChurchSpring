// Declaring Variables for use

const Image1 = document.querySelector(".cardImg1");
const reviewLeft1 = document.querySelector(".reviewLeft1");
const Image2 = document.querySelector(".cardImg2");
const reviewLeft2 = document.querySelector(".reviewLeft2");
const Image3 = document.querySelector(".cardImg3");
const reviewRight = document.querySelector(".reviewRight");

// Event Listeners

Image1.addEventListener("mouseover", () => {
  reviewLeft1.style.opacity = "100%";
  reviewLeft1.style.transform = "translateY(0px)";
});

Image1.addEventListener("mouseout", () => {
  reviewLeft1.style.opacity = "0%";
  reviewLeft1.style.transform = "translateY(40px)";
});

Image2.addEventListener("mouseover", () => {
  reviewLeft2.style.opacity = "100%";
  reviewLeft2.style.transform = "translateY(0px)";
});

Image2.addEventListener("mouseout", () => {
  reviewLeft2.style.opacity = "0%";
  reviewLeft2.style.transform = "translateY(40px)";
});

Image3.addEventListener("mouseover", () => {
  reviewRight.style.opacity = "100%";
  reviewRight.style.transform = "translateY(0px)";
});

Image3.addEventListener("mouseout", () => {
  reviewRight.style.opacity = "0%";
  reviewRight.style.transform = "translateY(40px)";
});
