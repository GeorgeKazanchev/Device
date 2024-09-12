(function () {
    const writeUsButton = document.querySelector('.contacts .btn');
    const modalWrapper = document.querySelector('.modal-wrapper-feedback');
    const modal = document.querySelector('.modal-feedback');
    const closeButton = modal.querySelector('.modal-close');
    const form = modal.querySelector('.feedback__form');
    const usernameField = modal.querySelector('.feedback__form-field-username input');
    const emailField = modal.querySelector('.feedback__form-field-email input');
    const contentField = modal.querySelector('.feedback__form-field-textarea textarea');

    const USERNAME_KEY_IN_STORAGE = 'username';
    const EMAIL_KEY_IN_STORAGE = 'email';

    let isStorageSupported = true;
    let usernameInStorage = null;
    let emailInStorage = null;

    try {
        usernameInStorage = localStorage.getItem(USERNAME_KEY_IN_STORAGE);
        emailInStorage = localStorage.getItem(EMAIL_KEY_IN_STORAGE);
    } catch (err) {
        isStorageSupported = false;
    }

    writeUsButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modalWrapper.classList.add('modal-wrapper-show');
        modal.classList.add('modal-show');

        if (usernameInStorage) {
            usernameField.value = usernameInStorage;
            contentField.focus();
        } else {
            usernameField.focus();
        }

        if (emailInStorage) {
            emailField.value = emailInStorage;
        }
    });

    form.addEventListener('submit', (evt) => {
        if (!usernameField.value || !emailField.value || !contentField.value) {
            evt.preventDefault();
            modal.classList.remove('modal-error');
            modal.offsetWidth = modal.offsetWidth;
            modal.classList.add('modal-error');
        } else {
            if (isStorageSupported) {
                localStorage.setItem(USERNAME_KEY_IN_STORAGE, usernameField.value);
                localStorage.setItem(EMAIL_KEY_IN_STORAGE, emailField.value);
            }
        }
    })

    const closeModal = () => {
        modalWrapper.classList.remove('modal-wrapper-show');
        modal.classList.remove('modal-show');
        modal.classList.remove('modal-error');
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