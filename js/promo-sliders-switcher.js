const switchers = document.querySelectorAll('.promo__slide-switcher');
const slides = document.querySelectorAll('.promo__slide');

for (let switcher of switchers) {
    switcher.addEventListener('click', () => {
        uncheckAllSwitchers();
        hideAllSlides();
        
        const slideNumber = getSlideNumberBy(switcher);
        checkSwitchersBy(slideNumber);
        showSlide(slideNumber);
    });
}

function uncheckAllSwitchers () {
    for (let label of switchers) {
        label.classList.remove('promo__slide-switcher-checked');
    }
}

function hideAllSlides () {
    for (let slide of slides) {
        slide.classList.add('visually-hidden');
    }
}

function checkSwitchersBy (slideNumber) {
    const switchersForGivenSlide = [...switchers].filter(sw => sw.getAttribute('data-slide-number') === slideNumber);
    switchersForGivenSlide.forEach(sw => sw.classList.add('promo__slide-switcher-checked'));
}

function getSlideNumberBy (switcher) {
    return switcher.getAttribute('data-slide-number');
}

function showSlide (slideNumber) {
    const slide = document.querySelector(`.promo__slide[data-slide-number="${slideNumber}"]`);
    slide.classList.remove('visually-hidden');
}