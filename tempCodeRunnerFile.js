const modal = document.getElementById("contact-modal");
// const btn = document.querySelector(".contact-button-container");
// const span = document.querySelector(".close");

// btn.addEventListener("click", () => {
//   modal.style.display = "block";
// });

// span.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });

// const blocks = document.querySelectorAll(".interactive-block");
// const image = document.getElementById("interactive-image");
// image.src = document
//   .querySelector(".interactive-block.active")
//   .getAttribute("data-image");

// blocks.forEach((block) => {
//   block.addEventListener("click", () => {
//     console.log("Clicker");
//     blocks.forEach((b) => b.classList.remove("active"));
//     block.classList.add("active");
//     image.src = block.getAttribute("data-image");
//   });
// });

// let slideIndex = 0;
// const slides = document.querySelectorAll(".slide");
// const dots = document.querySelectorAll(".dot");

// function showSlides() {
//   slides.forEach((slide, index) => {
//     slide.style.transform = `translateX(${-slideIndex * 100}%)`;
//     dots[index].classList.remove("active");
//     dots[index].src = "assets/unselected-dot.svg";
//   });
//   dots[slideIndex].classList.add("active");
//   dots[slideIndex].src = "assets/selected-dot.svg";
//   slideIndex = (slideIndex + 1) % slides.length;
// }

// setInterval(showSlides, 3000);