document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contact-modal");
  const btn = document.querySelector(".contact-button-container");

  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".interactive-block");
  const image = document.getElementById("interactive-image");
  const activeBlock = document.querySelector(".interactive-block.active");

  if (activeBlock) {
    image.src = activeBlock.getAttribute("data-image");
  } else {
    image.src = "assets/default-image.png";
  }

  blocks.forEach((block) => {
    block.addEventListener("click", () => {
      blocks.forEach((b) => b.classList.remove("active"));
      block.classList.add("active");
      image.src = block.getAttribute("data-image");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlides() {
    slides.forEach((slide, index) => {
      if (index >= slideIndex && index < slideIndex + 4) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });

    dots.forEach((dot, index) => {
      dot.classList.remove("active");
      dot.src = "assets/2.svg";
    });

    const activeDotIndex = Math.floor(slideIndex);
    if (dots[activeDotIndex]) {
      dots[activeDotIndex].classList.add("active");
      dots[activeDotIndex].src = "assets/1.svg";
    }

    slideIndex = (slideIndex + 1) % (slides.length - 3);
  }

  showSlides();
  setInterval(showSlides, 3000);
});
