document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail)
    const passwordlField = document.getElementById('user-password');
    const userPassword = passwordlField.value;
    // console.log(userPassword);

    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        // console.log('valid pass');
        window.location.href = 'banking.html'
    }

})

