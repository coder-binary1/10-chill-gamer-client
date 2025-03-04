function passwordValidation(password) {
  if (password.length < 6) {
    return {
      isValid: false,
      message: ["password must be more than 6 character"],
    };
  }
  if (!/[a-z]/.test(password)) {
    return { isValid: false, message: ["password must have 1 lower case"] };
  }
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, message: ["password must have 1 upper case"] };
  }

  return { isValid: true, message: [] };
}

function nameValidation(name) {
  if (name.length < 3) {
    return { isValid: false, message: ["enter a valid name"] };
  }
  return { isValid: true, message: [] };
}

function emailValidation(email) {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return { isValid: false, message: ["enter a valid email"] };
  }
  return { isValid: true, message: [] };
}

export { passwordValidation, nameValidation, emailValidation };
