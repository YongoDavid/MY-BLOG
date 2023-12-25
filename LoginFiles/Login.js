document.addEventListener('DOMContentLoaded', function() {
    const processForm = () => {
        let Email = document.getElementById('email').value;
        console.log(Email);
        let Password = document.getElementById('Password').value;
        console.log(Password);
        displayData(Email, Password);
    };

    function displayData(email, password) {
        console.log('Submitted:');
        console.log('Email:', email);
        console.log('Password:', password);
    }

    let submit = document.getElementById('Formbtn');
    submit.addEventListener('click', processForm);

    // You can also use the following line instead of the above two lines:
    // document.getElementById('Formbtn').addEventListener('click', processForm);
});
