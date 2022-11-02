const hideTextAboutButton = () => {
  let button = document.querySelector('[data-about-button]');
  let text = document.querySelector('[data-content-to-hide]');

  let buttonEvListener = () => button.addEventListener('click', () => {
    if (text.classList.contains('is-closed')) {
      text.classList.remove('is-closed');
      button.textContent = 'Свернуть';
    } else {
      text.classList.add('is-closed');
      button.textContent = 'Подробнее';
    }
  });
  buttonEvListener();
  removeEventListener('click', buttonEvListener);
};

export {hideTextAboutButton};
