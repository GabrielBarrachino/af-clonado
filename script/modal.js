const modal = document.querySelector('[data-js="modal"]');
const openModalButtons = document.querySelectorAll('[data-js="open-modal"]');
const closeModalButton = document.querySelector('[data-js="close-modal"]');
const overlay = document.querySelector('[data-js="overlay"]');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('show');
    });
});

closeModalButton.addEventListener('click', () => {
    modal.classList.remove('show');
});

overlay.addEventListener('click', () => {
    modal.classList.remove('show');
});


const openSubMenu = document.querySelector('[data-js="openSubMenu"]');
const subMenu = document.querySelector('[data-js="subMenu"]');
const arrow = openSubMenu.querySelector('[data-js="imgArrow"]');

openSubMenu.addEventListener('click', function() {
    subMenu.classList.toggle('active');
    arrow.classList.toggle('rotated');
});