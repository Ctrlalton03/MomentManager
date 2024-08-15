document.addEventListener("DOMContentLoaded", function() {
    // Ensure the sidebar remains hidden
    document.querySelector('.sidebar').style.display = 'none';
});

function showSidebar() {
          const sidebar = document.querySelector(".sidebar");
          sidebar.style.display = "flex";
        }
  
function hideSidebar() {
          const sidebar = document.querySelector(".sidebar");
          sidebar.style.display = "none";
        }


document.getElementById("GetStartedButton").addEventListener("click", function() {
  window.location.href = "signupuser.html";
});

function loginButton(){
  window.location.href = "signin.html";
}



let swiperCards = new Swiper('.card--content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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