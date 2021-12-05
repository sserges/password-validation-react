class PasswordValidator {
  constructor(password) {
    this.password = password
  }

  hasValidLength() {
    return this.password.length >= 8
  }

  hasLowerCaseLetter() {
    return /[a-z]/.test(this.password)
  }

  hasUpperCaseLetter() {
    return /[A-Z]/.test(this.password)
  }

  hasSpecialCharacter() {
    return /[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/.test(this.password)
  }

  hasDigit() {
    return /[0-9]/.test(this.password)
  }
}

export default PasswordValidator
