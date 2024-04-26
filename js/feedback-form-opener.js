const writeUsButton = document.querySelector('.contacts .btn');
const modalWrapper = document.querySelector('.modal-wrapper-feedback');
const modalWindow = document.querySelector('.modal-feedback');
const closeModalButton = modalWindow.querySelector('.modal-close');

writeUsButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalWrapper.classList.add('modal-wrapper-show');
    modalWindow.classList.add('modal-show');
});

closeModalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalWrapper.classList.remove('modal-wrapper-show');
    modalWindow.classList.remove('modal-show');
});