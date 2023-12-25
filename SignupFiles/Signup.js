// document.addEventListener('DOMContentLoaded', function () {
//     const processForm = () => {
//         let firstname = document.getElementById('Fname').value;
//         let lastname = document.getElementById('Lname').value;
//         let email = document.getElementById('email').value;
//         let password = document.getElementById('Password').value;
//         let conPassword = document.getElementById('password').value;
//     };

//     function displayData(firstname,lastname , email , password , conPassword) {
//         console.log('Signup complete')
//     }

//     let submit = document.getElementsByClassName('Formbtn');
//     submit.addEventListener('click',processForm)
// })



document.addEventListener('DOMContentLoaded', function () {
    const processForm = () => {
        let firstname = document.getElementById('Fname').value;
        let lastname = document.getElementById('Lname').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('Password').value;
        let conPassword = document.getElementById('password').value; // Corrected the ID

        // Call the displayData function with the collected data
        displayData(firstname, lastname, email, password, conPassword);
    };

    function displayData(firstname, lastname, email, password, conPassword) {
        console.log('Signup complete');
        console.log('First Name:', firstname);
        console.log('Last Name:', lastname);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', conPassword);
    }

    // Use querySelector to select the element by class
    let submit = document.querySelector('.Formbtn');
    submit.addEventListener('click', processForm);
});