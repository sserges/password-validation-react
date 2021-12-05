import React from 'react'

const PasswordValidatorStatusViewer = ({ validator }) => {
    return (
        <ul>
            <li style={{ color: validator.hasLowerCaseLetter() ? 'green' : 'red' }}>One lowercase letter</li>
            <li style={{ color: validator.hasUpperCaseLetter() ? 'green' : 'red' }}>One uppercase letter</li>
            <li style={{ color: validator.hasSpecialCharacter() ? 'green' : 'red' }}>One special character</li>
            <li style={{ color: validator.hasDigit() ? 'green' : 'red' }}>One number</li>
            <li style={{ color: validator.hasValidLength() ? 'green' : 'red' }}>Minimum 8 characters</li>
        </ul>
    )
}

export default PasswordValidatorStatusViewer
