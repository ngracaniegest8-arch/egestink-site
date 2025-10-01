document.addEventListener('DOMContentLoaded', () => {
    // Zgjedhim elementin login-box
    const loginBox = document.querySelector('.login-box');
    if (!loginBox) return;

    // Vendosim fillimisht që të jetë invisible dhe lart
    loginBox.style.opacity = '0';
    
    loginBox.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    // Vendosim një delay të vogël për animacion
    setTimeout(() => {
        loginBox.style.opacity = '1';
        loginBox.style.transform = 'translateY(-500px)';
        loginBox.style.transform = 'translatex(-500px)';
        
    }, 100); // mund të ndryshosh delay sipas dëshirës
});


//scripti qe me rregulom fotot ne gallery

const overlays = document.querySelectorAll('.photo .overlay');

overlays.forEach((overlay, i) => {
  setTimeout(() => {
    overlay.style.transition = "transform 1.5s ease";
    overlay.style.transform = "translateX(100%)";
  }, i * 300);
});
// script kur klikon hapet fotoja
// Merr elementët
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

// Klikimi mbi foto e hap në modal
document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Klikimi tek X e mbyll
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Klikimi jashtë fotos e mbyll
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
//mbrpa para
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll(".gallery-grid .photo img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  // Hap lightbox kur klikohet një foto
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      updateLightbox();
      lightbox.style.display = "flex";
    });
  });

  function updateLightbox() {
    lightboxImg.src = images[currentIndex].src;
  }

  // Mbyll lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Prev / Next
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  });

  // Mbyll kur klikohet jashtë fotos
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });

  // Navigim me tastierë
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
      }
      if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
      }
      if (e.key === "Escape") lightbox.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Pas 1s delay të slide-in / progress-bar
  setTimeout(() => {
    const galleryImages = document.querySelectorAll(".photo img");
    galleryImages.forEach(img => {
      img.classList.add('zoomed'); // aktivizon zoom + levizje
    });
  }, 1000); // 1000ms = 1s delay
});


//shrmimi ne animacion 
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".gallery-header h2");
  const text = title.textContent;
  title.textContent = ""; // boshatis tekstin

  // krijo span për çdo shkronjë (edhe hapësirat)
  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char; // hapësira ruhet
    span.style.opacity = 0;
    span.style.display = "inline-block";
    span.style.transition = "opacity 0.3s ease";

    title.appendChild(span);

    // delay për çdo shkronjë
    setTimeout(() => {
      span.style.opacity = 1;
    }, i * 150);
  });
});

//pjesa like koment




