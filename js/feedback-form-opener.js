const writeUsButton = document.querySelector('.contacts .btn');
const feedbackModalWrapper = document.querySelector('.modal-wrapper-feedback');
const feedbackModalWindow = document.querySelector('.modal-feedback');
const closeFeedbackButton = feedbackModalWindow.querySelector('.modal-close');

writeUsButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    feedbackModalWrapper.classList.add('modal-wrapper-show');
    feedbackModalWindow.classList.add('modal-show');
});

closeFeedbackButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    feedbackModalWrapper.classList.remove('modal-wrapper-show');
    feedbackModalWindow.classList.remove('modal-show');
});