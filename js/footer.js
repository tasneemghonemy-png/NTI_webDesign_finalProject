let emailUser = document.querySelector('#emailUser');
let emailError = document.querySelector('.text-danger');
let signupForm = document.querySelector('#signupForm');

signupForm.addEventListener("submit", (e) => {
    
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let inputValue = emailUser.value;

    if (emailRegex.test(inputValue)|| inputValue=="") {
        emailError.innerText = "";
    } else {
        emailError.innerText = "invalid email";
    }
});