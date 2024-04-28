const switchersLabels = document.querySelectorAll('.promo__slide-switcher');
const slides = document.querySelectorAll('.promo__slide');

for (let label of switchersLabels) {
    label.addEventListener('click', () => {
        uncheckAllLabels();
        hideAllSlides();
        
        const switcherId = label.getAttribute('for');
        checkRadioButtonBy(switcherId);
        checkSwitcherLabels(switcherId);
        
        const slideNumber = getSlideNumberBy(switcherId);
        showSlide(slideNumber);
    });
}

function uncheckAllLabels () {
    for (let label of switchersLabels) {
        label.classList.remove('promo__slide-switcher-checked');
    }
}

function hideAllSlides () {
    for (let slide of slides) {
        slide.classList.add('visually-hidden');
    }
}

function checkRadioButtonBy (switcherId) {
    const switcher = document.getElementById(switcherId);
    switcher.setAttribute('checked', true);
}

function checkSwitcherLabels (switcherId) {
    const labels = document.querySelectorAll(`.promo__slide-switcher[for="${switcherId}"]`);
    for (let label of labels) {
        label.classList.add('promo__slide-switcher-checked');
    }
}

function getSlideNumberBy (switcherId) {
    return switcherId.split('-')[1];
}

function showSlide (slideNumber) {
    const slide = document.querySelector(`.promo__slide[data-slide-number="${slideNumber}"]`);
    slide.classList.remove('visually-hidden');
}