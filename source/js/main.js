import {iosVhFix} from './utils/ios-vh-fix';
import {hideTextAboutButton} from './modules/about/about.js';
import {phoneMask} from './utils/phone-mask.js';
import {footerAccordion} from './utils/footer-accordion.js';
import {initModals} from './modules/modals/init-modals.js';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    hideTextAboutButton();
    initModals();
    phoneMask();
    footerAccordion();
  });
});
