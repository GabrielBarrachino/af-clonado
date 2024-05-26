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
    // arrow.classList.toggle('rotated');
});

const openSubMenuChange = document.querySelector('[data-js="openSubMenuChange"]');
const subMenuChange = document.querySelector('[data-js="subMenuChange"]');
const arrowChange = openSubMenu.querySelector('[data-js="imgArrowChange"]');

openSubMenuChange.addEventListener('click', function() {
    subMenuChange.classList.toggle('active');
    // arrowChange.classList.toggle('rotated');
});

const openSubMenuMisc = document.querySelector('[data-js="openSubMenuMisc"]');
const subMenuMisc = document.querySelector('[data-js="subMenuMisc"]');
const arrowMisc = openSubMenu.querySelector('[data-js="imgArrowMisc"]');

openSubMenuMisc.addEventListener('click', function() {
    subMenuMisc.classList.toggle('active');
    // arrowMisc.classList.toggle('rotated');
});

const openSubMenuReport = document.querySelector('[data-js="openSubMenuReport"]');
const subMenuReport = document.querySelector('[data-js="subMenuReport"]');
const arrowReport = openSubMenu.querySelector('[data-js="imgArrowReport"]');

openSubMenuReport.addEventListener('click', function() {
    subMenuReport.classList.toggle('active');
    // arrowReport.classList.toggle('rotated');
});