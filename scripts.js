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

/* document.querySelectorAll('.card .head-card').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector('.arrow');
        const headcard = header.querySelector('.head-card');

        if (content.style.display === 'block') {
            content.style.display = 'none';
            arrow.classList.remove('up');
            arrow.src = '../img/down-arrow.png';  // Imagem da seta para baixo
            header.classList.add('hide');
            header.classList.remove('view');
        } else {
            content.style.display = 'block';
            arrow.classList.add('up');
            arrow.src = '../img/up-arrow.png';  // Imagem da seta para cima
            header.classList.add('view');
            header.classList.remove('hide');
        }
    });
});
 */

document.querySelectorAll('.card .head-card').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const arrow = header.querySelector('.arrow');

        if (content.classList.contains('open')) {
            content.classList.remove('open');
            content.style.maxHeight = null;
            arrow.classList.remove('up');
            arrow.src = '../img/down-arrow.png';  // Imagem da seta para baixo
            header.classList.add('hide');
            header.classList.remove('view');
        } else {
            document.querySelectorAll('.content').forEach(c => {
                c.classList.remove('open');
                c.style.maxHeight = null;
            });
            content.classList.add('open');
            content.style.maxHeight = content.scrollHeight + 'px';
            arrow.classList.add('up');
            arrow.src = '../img/up-arrow.png';  // Imagem da seta para cima
            header.classList.add('view');
            header.classList.remove('hide');
        }
    });
});