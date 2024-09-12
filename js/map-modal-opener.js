(function () {
    const map = document.querySelector('.contacts__map a');
    const modalWrapper = document.querySelector('.modal-wrapper-map');
    const modal = document.querySelector('.modal-map');
    const closeButton = modal.querySelector('.modal-close');

    map.addEventListener('click', (evt) => {
        evt.preventDefault();
        modalWrapper.classList.add('modal-wrapper-show');
        modal.classList.add('modal-show');
    });

    const closeModal = () => {
        modalWrapper.classList.remove('modal-wrapper-show');
        modal.classList.remove('modal-show');
    };

    closeButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        closeModal();
    });

    window.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            if (modal.classList.contains('modal-show')) {
                evt.preventDefault();
                closeModal();
            }
        }
    });
})();