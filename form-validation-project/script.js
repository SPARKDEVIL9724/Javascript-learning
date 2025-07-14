const form = document.getElementById('form-container');
const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-email');
const passwordInput = document.querySelector('.input-password');
const confirmPassword = document.querySelector('.input-confirm-password');
const submitBtn = document.querySelector('.submit-btn');
const resetBtn = document.querySelector('.reset-btn');

submitBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    let formValid = true;
    // checking name
    if(nameInput.value.trim() === ''){
        formValid = false;
        nameInput.style.border = 'red solid 1px';
        document.getElementById('name-err').innerText = 'Name Required';
    }
    else{
        nameInput.style.border = '1px solid #ccc';
        document.getElementById('name-err').innerText = '';
    }
    
    // checking email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // ^ --> start of string
    // [a-zA-Z0-9._%+-] -->matches one or more characters that are letter or symbols or numbers
    // $ --> end of the string
    // @[a-zA-Z0-9.-] --> matches domain name with characters and digits , '.' , '-'
    // \.[a-zA-Z]{2,} --> should have a dot(\.), at least 2 characters({2,})
    if (!emailRegex.test(emailInput.value.trim())){
        emailInput.style.border = '2px solid red';
        document.getElementById('email-err').innerText = 'Invalid Email';
        formValid = false;
    }
    else{
        emailInput.style.border = '1px solid #ccc';
        document.getElementById('email-err').innerText = '';
    }
    
    // checking password
    if(passwordInput.value.length < 8){
        passwordInput.style.border = '2px solid red';
        document.getElementById('password-err').innerText = 'Password should be at least 8 characters';
        formValid = false;
    }
    else{
        passwordInput.style.border = '1px solid #ccc';
        document.getElementById('password-err').innerText = '';
    }
    
    // confirming password
    if(passwordInput.value.trim() !== confirmPassword.value.trim()){
        formValid = false;
        confirmPassword.style.border = 'red solid 2px';
        document.getElementById('confirm-password-err').innerText = 'Password Doesnot Match';
    }
    else{
        confirmPassword.style.border = '1px solid #ccc';
        document.getElementById('confirm-password-err').innerText = '';
    }
    
    // checking form validation
    if(formValid === false){
        e.preventDefault();
    }
});

resetBtn.addEventListener('click', () => {
    nameInput.style.border = '1px solid #ccc';
    emailInput.style.border = '1px solid #ccc';
    passwordInput.style.border = '1px solid #ccc';
    confirmPassword.style.border = '1px solid #ccc';
    document.getElementById('confirm-password-err').innerText = '';    
    document.getElementById('password-err').innerText = '';    
    document.getElementById('email-err').innerText = '';    
    document.getElementById('name-err').innerText = '';    
});