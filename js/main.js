const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    loop: false,

    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    direction: "horizontal",

    slidesPerView: 5,
  
    // And if we need scrollbar
    scrollbar: {
      el: false,
    },
  });


let elHeader = document.querySelector(".header")
let elBtn = document.querySelector(".header__button")

elBtn.addEventListener("click", function() {
  elHeader.classList.toggle("active-nav")
  
})