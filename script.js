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

        const recaptchaResponse = grecaptcha.getResponse();

        if (!recaptchaResponse) {
            thankYouMessage.textContent = "Please complete the CAPTCHA.";
            thankYouMessage.style.color = "red";
            thankYouMessage.classList.remove("d-none");
            return;
        }

        // Add reCAPTCHA token to a hidden input and submit natively
        const recaptchaInput = document.createElement("input");
        recaptchaInput.type = "hidden";
        recaptchaInput.name = "g-recaptcha-response";
        recaptchaInput.value = recaptchaResponse;
        form.appendChild(recaptchaInput);
        form.submit();
    });
});
