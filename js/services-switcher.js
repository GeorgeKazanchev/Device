const servicesLinks = document.querySelectorAll('.services__item a');
const services = document.querySelectorAll('.services__item-content');

for (let serviceLink of servicesLinks) {
    serviceLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        
        removeAllLinksSelection();
        hideAllServices();

        selectLink(serviceLink);

        const serviceName = serviceLink.getAttribute('data-service-name');
        showService(serviceName);
    });
}

function removeAllLinksSelection () {
    for (let serviceLink of servicesLinks) {
        serviceLink.classList.remove('services__item-active');
    }
}

function hideAllServices () {
    for (let service of services) {
        service.classList.remove('services__item-content-active');
    }
}

function selectLink (serviceLink) {
    serviceLink.classList.add('services__item-active');
}

function showService (name) {
    const service = document.querySelector(`.services__item-content-${name}`);
    if (service) {
        service.classList.add('services__item-content-active');
    }
}