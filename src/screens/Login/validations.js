export function handleValidations(text, type) {
  let phoneRegex = /^[1-9][0-9]{9,12}$/;
  let value = text;
  let status = false;
  let errorText = '';
  if (text === '') {
    errorText = 'Phone number required.';
  } else if (!phoneRegex.test(text)) {
    errorText = 'Please enter valid phone.';
  } else {
    status = true;
    errorText = '';
  }
  return {
    status: status,
    value: value,
    errorText: errorText,
  };
}
