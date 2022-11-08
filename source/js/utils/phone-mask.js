export const phoneMask = () => {
  document.querySelector('[data-phone-input]').addEventListener('input', function (e) {
    let x = e.target.value.replace(/[a-z\(\)\+\-[+7(]/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '+7(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
  });
};
