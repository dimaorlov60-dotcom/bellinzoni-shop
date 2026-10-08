document.addEventListener("DOMContentLoaded", () => {
  // 1. LANGUAGE SWITCHER
  let currentLang = "IT";

  const btnIt = document.getElementById("btn-it");
  const btnEn = document.getElementById("btn-en");
  const waBtn1 = document.getElementById("wa-btn-1");
  const waBtn2 = document.getElementById("wa-btn-2");

  const phone = "393516351937";

  function updateWhatsAppLinks() {
    if (currentLang === "IT") {
      waBtn1.href = `https://wa.me/${phone}?text=` + encodeURIComponent("Buongiorno, sono interessato al prodotto Bellinzoni B.GTX Pulitore Fughe.");
      waBtn2.href = `https://wa.me/${phone}?text=` + encodeURIComponent("Buongiorno, sono interessato al prodotto Bellinzoni B-DESCALIX 100 Detergente Acido.");
    } else {
      waBtn1.href = `https://wa.me/${phone}?text=` + encodeURIComponent("Hello, I am interested in the Bellinzoni B.GTX Grout Cleaner.");
      waBtn2.href = `https://wa.me/${phone}?text=` + encodeURIComponent("Hello, I am interested in the Bellinzoni B-DESCALIX 100 Acid Cleaner.");
    }
  }

  function setLanguage(lang) {
    currentLang = lang;
    
    if (lang === "IT") {
      btnIt.classList.add("active");
      btnEn.classList.remove("active");
    } else {
      btnEn.classList.add("active");
      btnIt.classList.remove("active");
    }

    document.querySelectorAll("[data-it]").forEach((el) => {
      const text = lang === "IT" ? el.getAttribute("data-it") : el.getAttribute("data-en");
      if (el.tagName === "UL") {
        el.innerHTML = text;
      } else {
        el.innerHTML = text;
      }
    });

    updateWhatsAppLinks();
  }

  btnIt.addEventListener("click", () => setLanguage("IT"));
  btnEn.addEventListener("click", () => setLanguage("EN"));

  updateWhatsAppLinks();

  // 2. CAROUSEL
  const track = document.getElementById("carouselTrack");
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsContainer = document.getElementById("carouselDots");
  const dots = Array.from(dotsContainer.children);

  let currentIndex = 0;

  function moveToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    track.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  nextBtn.addEventListener("click", () => moveToSlide(currentIndex + 1));
  prevBtn.addEventListener("click", () => moveToSlide(currentIndex - 1));

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => moveToSlide(index));
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    moveToSlide(currentIndex + 1);
  }, 5000);
});
