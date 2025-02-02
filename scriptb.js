//updated code

const slides = document.querySelectorAll(".slide");
const slideContainer = document.querySelector("#hero");
let counter = 0;
let isTransitioning = false; // Prevents spamming clicks

// Clone first slide and append it at the end
const firstClone = slides[0].cloneNode(true);
slideContainer.appendChild(firstClone);

// Get updated slides list
const allSlides = document.querySelectorAll(".slide");

// Set initial position
allSlides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const first = document.querySelector(".first");
const second = document.querySelector(".second");

const goNext = () => {
    if (isTransitioning) return; // Prevent multiple clicks
    isTransitioning = true;

    counter++;
    slideImage();

    if (counter === slides.length) {
        setTimeout(() => {
            counter = 0;
            resetSlidePosition();
        }, 900); // Wait for transition to finish
    }

    updateActiveClass();
};

const goPrev = () => {
    if (isTransitioning) return;
    isTransitioning = true;

    if (counter === 0) {
        counter = slides.length;
        resetSlidePosition();
    }

    counter--;
    slideImage();
    updateActiveClass();
};

const slideImage = () => {
    allSlides.forEach((slide) => {
        slide.style.transition = "transform 0.9s ease-in-out";
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });

    setTimeout(() => {
        isTransitioning = false;
    }, 900);
};

const resetSlidePosition = () => {
    allSlides.forEach((slide) => {
        slide.style.transition = "none";
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });

    setTimeout(() => {
        isTransitioning = false;
    }, 50);
};

const updateActiveClass = () => {
    if (counter % 2 === 0) {
        first.classList.add("active");
        second.classList.remove("active");
    } else {
        second.classList.add("active");
        first.classList.remove("active");
    }
};