const swiperEl = document.querySelector("swiper-container");

const swiperParams = {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next-circulate",
    prevEl: ".swiper-button-prev-circulate",
  },
  grid: {
    fill: "row",
    rows: 2,
  },
  breakpoints: {
    1050: {
      slidesPerView: 10,
      grid: {
        fill: "row",
        rows: 2,
      },
    },
    770: {
      slidesPerView: 6,
      grid: {
        fill: "row",
        rows: 2,
      },
    },
    550: {
      slidesPerView: 4,
      grid: {
        fill: "row",
        rows: 2,
      },
    },
    350: {
      slidesPerView: 2.5,
      grid: {
        fill: "row",
        rows: 2,
      },
    },
  },
};

Object.assign(swiperEl, swiperParams);
swiperEl.initialize();
export { swiperEl };
