const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

const first = document.querySelector(".first");
const second = document.querySelector(".second");

console.log(slides.length)
const goPrev = () => {
    if (counter == 0) {
        return;
    }
    counter--;
    slideImage();
    updateActiveClass();
}

const goNext = () => {
    console.log(counter);
    if (counter === slides.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImage();
    updateActiveClass();
}

const updateActiveClass = () => {
    if (counter === 0) {
        first.classList.add("active");
        second.classList.remove("active");
    } else if (counter === 1) {
        second.classList.add("active");
        first.classList.remove("active");
    }
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

const openMenu = () => {
    const menu = document.querySelector(".mobile-links");
    menu.classList.add("open");
}

const closeMenu = () => {
    const menu = document.querySelector(".mobile-links");
    menu.classList.remove("open");
}