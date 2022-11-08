export const footerAccordion = () => {
  let buttonAddress = document.querySelector('[data-nav-address-button]');
  let buttonSite = document.querySelector('[data-nav-site-button]');
  let listAddress = document.querySelector('[data-nav-address-list]');
  let listSite = document.querySelector('[data-nav-site-list]');

  buttonAddress.classList.remove('nojs');
  buttonSite.classList.remove('nojs');
  listAddress.classList.remove('nojs');
  listSite.classList.remove('nojs');

  buttonAddress.classList.add('isClosed');
  buttonSite.classList.add('isClosed');
  listAddress.classList.add('isClosed');
  listSite.classList.add('isClosed');

  buttonAddress.addEventListener('click', function () {
    if (buttonAddress.classList.contains('isClosed')) {
      buttonAddress.classList.remove('isClosed');
      listAddress.classList.remove('isClosed');
      buttonSite.classList.add('isClosed');
      listSite.classList.add('isClosed');
    } else {
      buttonAddress.classList.add('isClosed');
      listAddress.classList.add('isClosed');
    }
  });

  buttonSite.addEventListener('click', function () {
    if (buttonSite.classList.contains('isClosed')) {
      buttonSite.classList.remove('isClosed');
      listSite.classList.remove('isClosed');
      buttonAddress.classList.add('isClosed');
      listAddress.classList.add('isClosed');
    } else {
      buttonSite.classList.add('isClosed');
      listSite.classList.add('isClosed');
    }
  });
};
