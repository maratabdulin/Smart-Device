export const phoneMask = () => {
  const inputs = document.querySelectorAll('[data-phone-input]');

  for (let i = 0; i < inputs.length; i++) {

    const prefixNumber = (str) => {
      if (str === '7') {
        return '7(';
      }
      if (str === '8') {
        return '8(';
      }
      if (str === '9') {
        return '7(9';
      }
      return '7(';
    };

    inputs[i].addEventListener('input', () => {
      const value = inputs[i].value.replace(/\D+/g, '');
      const numberLength = 11;

      let result;
      if (inputs[i].value.includes('+8') || inputs[i].value[0] === '8') {
        result = '';
      } else {
        result = '+';
      }

      for (let j = 0; j < value.length && j < numberLength; j++) {
        switch (j) {
          case 0:
            result += prefixNumber(value[j]);
            continue;
          case 4:
            result += ')';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[j];
      }
      //
      inputs[i].value = result;
    });
  }
};
