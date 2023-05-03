const slider1 = document.querySelector('.scenery-video-slider');
const slides1 = slider1.querySelector('.scenery-video-slides');
const slideWidth1 = slides1.firstElementChild.clientWidth;
const slideCount1 = slides1.children.length;
const controls1 = slider1.querySelector('.controls1');
const prevBtn1 = controls1.querySelector('.prev1');
const nextBtn1 = controls1.querySelector('.next1');

let currentSlide1 = 0;
prevBtn1.addEventListener('click', () => {
    currentSlide1--;
    if (currentSlide1 < 0) {
        currentSlide1 = slideCount1 - 1;
    }
    slides1.style.transform = `translateX(-${currentSlide1 * slideWidth1}px)`;
    clearInterval(autoSlideTimer);
    autoSlide();
});

nextBtn1.addEventListener('click', () => {
    currentSlide1++;
    if (currentSlide1 > slideCount1 - 1) {
        currentSlide1 = 0;
    }
    slides1.style.transform = `translateX(-${currentSlide1 * slideWidth1}px)`;
    clearInterval(autoSlideTimer);
    autoSlide();
});
function autoSlide() {
    setInterval(() => {
        currentSlide1++;
        if (currentSlide1 > slideCount1 - 1) {
            currentSlide1 = 0;
        }
        slides1.style.transform = `translateX(-${currentSlide1 * slideWidth1}px)`;
    }, 3000);
}

autoSlide();
//

