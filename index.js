let nav_bar  = document.querySelector(".nav-bar");

document.getElementById('menu').onclick = ()=> {
    nav_bar.classList.toggle('nav-bar--active')
}


let search  = document.querySelector(".search-cont");

document.getElementById('search').onclick = ()=> {
    search.classList.toggle('search-cont--active')
}


/*swiper JS Code stars here*/
var swiper = new Swiper(".product-row", {
    // slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  /*swiper JS Code ends here*/