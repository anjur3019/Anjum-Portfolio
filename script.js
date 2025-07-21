var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        '480': { slidesPerView: 1 },
        '800': { slidesPerView: 2 },
        '1200': { slidesPerView: 3 }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // No reCAPTCHA check here—let Formspree handle it
        form.submit(); // Native submission to Formspree
    });
});
