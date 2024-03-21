var toggleBtn = document.querySelector('.header__toggle')

var menuId = toggleBtn.getAttribute('aria-controls');
var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';

var menu = document.querySelector('#' + menuId);
var links = menu.querySelectorAll('a');

var modal = document.querySelector('.modal')
var modalBtn = document.querySelector('.modal__trigger')
var modalClose = document.querySelector('.modal__close')

function toggleElements() {
    if (expanded) {
        toggleBtn.setAttribute('aria-label', 'Fechar menu');
        toggleBtn.setAttribute('aria-expanded', 'true');
        menu.removeAttribute('hidden');
    } else {
        toggleBtn.setAttribute('aria-label', 'Abrir menu');
        toggleBtn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('hidden', true);
    }
}

function handleToggle() {
    expanded = !expanded;
    toggleElements()
}

function handleLink() {
    expanded = false;
    handleToggle();
}

if (toggleBtn) toggleBtn.addEventListener('click', handleToggle);
if (links) links.forEach(function (link) {
    link.addEventListener('click', handleLink);
});

if (modal && modalBtn) {
    modal.addEventListener('click', function (event) {
        event.stopPropagation();
        modal.setAttribute('hidden', true);
    });
    modalBtn.addEventListener('click', function () {
        modal.removeAttribute('hidden');
    });
}

document.querySelectorAll('.no-click').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Isso impede o comportamento padrão do clique
    });
});
