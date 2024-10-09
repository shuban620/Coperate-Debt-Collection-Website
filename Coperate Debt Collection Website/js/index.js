const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'slide',
    slidesPerView: 1.5,  // Shows 1.5 slides
    spaceBetween: 30,    // Adjusts the space between the slides
    centeredSlides: true, // Centers the active slide
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Mousewheel control (optional)
    // mousewheel: {
    //   invert: false, 
    // },
    
    // Scrollbar (optional)
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      // When the screen is >= 768px, show 1.5 slides
      768: {
          slidesPerView: 1.5,
          spaceBetween: 30,
      },
      // When the screen is < 768px, show 1 slide
      0: {
          slidesPerView: 1,  // Full slide on smaller screens
          spaceBetween: 10,  // Adjust space if needed
      },
  },
});

