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

// for hero

let adIndex = 1;
let firstLoad = true;
let adInterval = setInterval(() => changeAdSlide(1), 3000);
function changeAdSlide(n) {
    showAdSlides(adIndex += n, n);
    resetAdTimer();
}
function goToAdSlide(n) {
    showAdSlides(adIndex = n, 1);
    resetAdTimer();
}
function resetAdTimer() {
    clearInterval(adInterval);
    adInterval = setInterval(() => changeAdSlide(1), 3000);
}
document.querySelector("#hero .prev").addEventListener("click", () => changeAdSlide(-1));
document.querySelector("#hero .next").addEventListener("click", () => changeAdSlide(1));

document.addEventListener("DOMContentLoaded", () => {
    showAdSlides(1, 0);
    firstLoad = false;
});

function showAdSlides(n, indicator = 0) {
    let ads = document.getElementsByClassName("slide");
    let pages = document.querySelectorAll("#hero .page div");

    if (n > ads.length) adIndex = 1;
    if (n < 1) adIndex = ads.length;

    for (let i = 0; i < ads.length; i++) {
        ads[i].style.display = "none";
        ads[i].classList.remove("slide-left", "slide-right");
    }

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }

    if (!firstLoad) {
        if (indicator === -1) {
            ads[adIndex - 1].classList.add("slide-left");
        } else if (indicator === 1) {
            ads[adIndex - 1].classList.add("slide-right");
        }
    }

    ads[adIndex - 1].style.display = "flex";
    pages[adIndex - 1].classList.add("active");
}


// for hero-b 

let b_adIndex = 1;
let b_firstLoad = true;
let b_adInterval = setInterval(() => b_changeAdSlide(1), 3000);
function b_changeAdSlide(n) {
    b_showAdSlides(b_adIndex += n, n);
    b_resetAdTimer();
}
function b_goToAdSlide(n) {
    b_showAdSlides(b_adIndex = n, 1);
    b_resetAdTimer();
}

function b_resetAdTimer() {
    clearInterval(b_adInterval);
    b_adInterval = setInterval(() => b_changeAdSlide(1), 3000);
}
document.addEventListener("DOMContentLoaded", () => {
    b_showAdSlides(1, 0);
    b_firstLoad = false;
});

document.querySelector("#hero-b .prev").addEventListener("click", () => b_changeAdSlide(-1));
document.querySelector("#hero-b .next").addEventListener("click", () => b_changeAdSlide(1));

function b_showAdSlides(n, indicator = 0) {
    let ads = document.getElementsByClassName("hero-b-container");
    let pages = document.querySelectorAll("#hero-b .b-page div");

    if (n > ads.length) b_adIndex = 1;
    if (n < 1) b_adIndex = ads.length;

    for (let i = 0; i < ads.length; i++) {
        ads[i].style.display = "none";
        ads[i].classList.remove("slide-left", "slide-right");
    }

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }
    if (!b_firstLoad) {
        if (indicator === -1) {
            ads[b_adIndex - 1].classList.add("slide-left");
        } else if (indicator === 1) {
            ads[b_adIndex - 1].classList.add("slide-right");
        }
    }

    ads[b_adIndex - 1].style.display = "flex";
    pages[b_adIndex - 1].classList.add("active");
}
