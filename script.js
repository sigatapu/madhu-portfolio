document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } 
        });
    }, { threshold: 0.2 }); 

    cards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", function () {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && rect.bottom >= 0
        );
    }

    function handleScroll() {
        const aboutImg = document.querySelector(".about-img");
        if (isElementInViewport(aboutImg)) {
            aboutImg.classList.add("animate");
            window.removeEventListener("scroll", handleScroll); // Remove event after animation
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once in case the element is already in view
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutContent = document.querySelector(".about-content");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutContent.classList.add("animate");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(aboutContent);
});
