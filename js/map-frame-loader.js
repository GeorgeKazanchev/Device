const mapFrame = document.querySelector('.modal-map__map iframe');

window.addEventListener('load', () => {
    mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.1125477584787!2d37.529618!3d55.687031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54cf65f5c8955%3A0x694710ccd55501e!2z0YPQuy4g0KHRgtGA0L7QuNGC0LXQu9C10LksIDE1LCDQnNC-0YHQutCy0LAsIDExOTMxMQ!5e0!3m2!1sru!2sru!4v1714284507428!5m2!1sru!2sru";
});