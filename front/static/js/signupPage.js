const password = document.getElementById("password");
const confirm_password = document.getElementById("confirmPassword");
function validatePassword(){
    if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    }
    else {
        confirm_password.setCustomValidity('');
    }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function validateEmail(email)
{
    if(email.validity.patternMismatch)
        email.setCustomValidity('Please input correct email');
    else
        email.setCustomValidity('');
}