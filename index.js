// 顶部轮播图
const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
const slideWidth = slider.clientWidth;
let currentIndex = 0;
let intervalId;

function goToSlide(index) {
    slides.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
}

function autoPlay() {
    intervalId = setInterval(() => {
        let nextIndex = currentIndex + 1;
        if (nextIndex > 2) {
            nextIndex = 0;
        }
        goToSlide(nextIndex);
    }, 8000);
}

function pausePlay() {
    clearInterval(intervalId);
}

prevBtn.addEventListener('click', () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
        prevIndex = 2;
    }
    goToSlide(prevIndex);
});

nextBtn.addEventListener('click', () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex > 2) {
        nextIndex = 0;
    }
    goToSlide(nextIndex);
});

slider.addEventListener('mouseover', () => {
    pausePlay();
    slider.querySelector('.controls').style.opacity = 1;
});

slider.addEventListener('mouseout', () => {
    autoPlay();
    slider.querySelector('.controls').style.opacity = 0;
});

autoPlay();


