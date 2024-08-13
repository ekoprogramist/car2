const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');

overlayBtn.addEventListener('click', () => {
    container.classList.toggle('right-panel-active');
});



document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector('.sign-up-container button');
    const signInButton = document.querySelector('.sign-in-container button');
    const emailInputSignUp = document.querySelector('.sign-up-container input[name="email"]');
    const passwordInputSignUp = document.querySelector('.sign-up-container input[type="password"]');
    const emailInputSignIn = document.querySelector('.sign-in-container input[name="email"]');
    const passwordInputSignIn = document.querySelector('.sign-in-container input[type="password"]');
    const messageElement = document.createElement('p');
    
    document.querySelector('.sign-in-container form').appendChild(messageElement);

    // Save input values to localStorage when signing up
    signUpButton.addEventListener('click', (event) => {
        event.preventDefault(); // prevent the form from submitting

        const email = emailInputSignUp.value;
        const password = passwordInputSignUp.value;

        if (email === '' || password === '') {
            alert('Please fill in all fields!');
            if (email === '') {
                emailInputSignUp.style.borderColor = 'red';
            }
            if (password === '') {
                passwordInputSignUp.style.borderColor = 'red';
            }
        } else {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert('Account created successfully!');
            emailInputSignUp.style.borderColor = ''; // reset border color
            passwordInputSignUp.style.borderColor = ''; // reset border color
        }
    });

    // Validate login inputs when signing in
    signInButton.addEventListener('click', (event) => {
        event.preventDefault(); // prevent the form from submitting

        const emailLogin = emailInputSignIn.value;
        const passwordLogin = passwordInputSignIn.value;

        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (emailLogin === storedEmail && passwordLogin === storedPassword) {
            window.location.href = '/cars brending/lenguage.html'; // redirect to the desired page
        } else {
            messageElement.innerText = 'Incorrect email or password';
            messageElement.style.color = 'red';
        }
    });
});
