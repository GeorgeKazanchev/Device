const map = document.querySelector('.contacts__map a');
const mapModalWrapper = document.querySelector('.modal-wrapper-map');
const mapModalWindow = document.querySelector('.modal-map');
const closeMapButton = mapModalWindow.querySelector('.modal-close');

map.addEventListener('click', (evt) => {
    evt.preventDefault();
    mapModalWrapper.classList.add('modal-wrapper-show');
    mapModalWindow.classList.add('modal-show');
});

closeMapButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    mapModalWrapper.classList.remove('modal-wrapper-show');
    mapModalWindow.classList.remove('modal-show');
});