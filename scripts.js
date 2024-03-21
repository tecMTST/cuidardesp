var toggleBtn = document.querySelector('.header__toggle')

var menuId = toggleBtn.getAttribute('aria-controls');
var expanded = toggleBtn.getAttribute('aria-expanded') === 'true';

var menu = document.querySelector('#' + menuId);
var links = menu.querySelectorAll('a');

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

toggleBtn.addEventListener('click', handleToggle);
links.forEach(function (link) {
    link.addEventListener('click', handleLink);
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.no-click').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Isso impede o comportamento padrão do clique
        });
    });
});