export function handleOTPValidations(
  text,
  type,
  index,
  prevInputRef,
  nextInputRef,
) {
  if (text === '') {
    prevInputRef.focus();
    return {
      status: false,
      value: text,
      errorText: '*required.',
    };
  } else {
    if (nextInputRef) {
      nextInputRef.focus();
      return {
        value: text,
        status: true,
        errorText: '',
      };
    } else {
      return {
        value: text,
        status: true,
        errorText: '',
      };
    }
  }
}
