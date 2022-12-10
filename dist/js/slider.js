let swiper = new Swiper(".certificates-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".certificates-swiper__next",
    prevEl: ".certificates-swiper__prev",
  },
});
let achievementsSwiper = new Swiper(".achievements-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 30,
  grabCursor: true,
  navigation: {
    nextEl: ".achievements-swiper__next",
    prevEl: ".achievements-swiper__prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
