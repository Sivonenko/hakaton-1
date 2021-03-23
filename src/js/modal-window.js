'use strict';

const openModaDivlRef = document.querySelector('div[data-action="open-modal"]');
const closeModalBtnRef = document.querySelector(
  'button[data-action="close-modal"]',
);
const menuItemRef = document.querySelectorAll('.modal-menu__item-link-js');
const consultationLinkRef = document.querySelector(
  '.modal-consultation__link-js',
);

openModaDivlRef.addEventListener('click', onShowModal);

closeModalBtnRef.addEventListener('click', onCloseModal);

consultationLinkRef.addEventListener('click', onCloseModal);

function onShowModal() {
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  document.body.classList.remove('show-modal');
}

function onCloseModalandMove() {
  for (let i = 0; i < menuItemRef.length; i += 1) {
    menuItemRef[i].addEventListener('click', onCloseModal);
  }
}

onCloseModalandMove();
