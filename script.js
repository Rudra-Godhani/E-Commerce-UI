// for carousal

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


// for togglemenu

function toggleMenu() {
    const mobileLinks = document.querySelector('.mobile-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    mobileLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    if (mobileLinks.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-xmark');
    } else {
        hamburgerIcon.classList.remove('fa-xmark');
        hamburgerIcon.classList.add('fa-bars');
    }
}


// for hero-b sliders

const b_slides = document.querySelectorAll(".hero-b-container");
var b_counter = 0;

b_slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

const b_first = document.querySelector(".b-first");
const b_second = document.querySelector(".b-second");

console.log(b_slides.length)
console.log(b_slides)
const goPrevb = () => {
    console.log("pres prev")
    console.log(b_counter)
    if (b_counter == 0) {
        return;
    }
    b_counter--;
    b_slideImage();
    b_updateActiveClass();
}

const goNextb = () => {
    console.log(b_counter)
    console.log("pres next")
    if (b_counter === b_slides.length - 1) {
        b_counter = 0;
    } else {
        b_counter++;
    }
    b_slideImage();
    b_updateActiveClass();
}

const b_updateActiveClass= () => {
    if (b_counter === 0) {
        b_first.classList.add("active");
        b_second.classList.remove("active");
    } else if (b_counter === 1) {
        b_second.classList.add("active");
        b_first.classList.remove("active");
    }
};

const b_slideImage = () => {
    b_slides.forEach((slide) => {
        slide.style.transform = `translateX(-${b_counter * 100}%)`
    })
}