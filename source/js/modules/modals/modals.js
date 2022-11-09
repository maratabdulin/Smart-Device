
export const initModal = () => {
  const openModalButton = document.querySelector('[data-open-modal]');
  const closeModalButton = document.querySelector('[data-modal-button]');
  const modal = document.querySelector('[data-modal]');
  let modalOverlay = document.querySelector('[data-close-modal]');

  if (modal.classList.contains('modal--preload')) {
    modal.classList.remove('modal--preload');
  }

  openModalButton.addEventListener('click', function () {
    modal.classList.add('is-active');
  });

  closeModalButton.addEventListener('click', function () {
    modal.classList.remove('is-active');
  });

  modalOverlay.addEventListener('click', function () {
    modal.classList.remove('is-active');
  });

  modal.addEventListener('click', function (e) {
    e.stopPropagation();
  });

};

