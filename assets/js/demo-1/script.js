
// Fancybox Configuration image gallery popup
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
  "slideShow",
  "thumbs",
  "zoom",
  "fullScreen",
  "share",
  "close"
  ],
  loop: false,
  protect: true
});

// Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});