/*--------------- Blog Slider ---------------*/
blogSwiper = new Swiper(".blog-slider", {
  spaceBetween: 20,
  loop: posts.length > 3, // 🔥 só ativa loop se tiver mais de 3 posts
  autoplay: posts.length > 1 ? {
    delay: 3000,
    disableOnInteraction: false,
  } : false,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});