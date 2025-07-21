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

        const formData = new FormData(form);
        formData.append("g-recaptcha-response", recaptchaResponse);

        fetch(form.action, {
            method: "POST",
            body: formData,
            mode: "no-cors" 
        })
        .then(response => {
            if (response.type === "opaque" || response.status === 200) { 
                thankYouMessage.textContent = "Thank you! Your message has been sent.";
                thankYouMessage.style.color = "black";
                thankYouMessage.classList.remove("d-none");
                form.reset();
                grecaptcha.reset();
            } else {
                throw new Error("Submission failed");
            }
        })
        .catch(() => {
            thankYouMessage.textContent = "Something went wrong. Please try again.";
            thankYouMessage.style.color = "red";
            thankYouMessage.classList.remove("d-none");
        });
    });
});
