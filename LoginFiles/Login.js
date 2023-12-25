// document.addEventListener('DOMContentLoaded', function() {
//     const processForm = () => {
//         let Email = document.getElementById('email').value;
//         console.log(Email);
//         let Password = document.getElementById('Password').value;
//         console.log(Password);
//         displayData(Email, Password);
//     };

// const { json } = require("express");

//     function displayData(email, password) {
//         console.log('Submitted:');
//         console.log('Email:', email);
//         console.log('Password:', password);
//     }

//     let submit = document.getElementById('Formbtn');
//     submit.addEventListener('click', processForm);

//     // You can also use the following line instead of the above two lines:
//     // document.getElementById('Formbtn').addEventListener('click', processForm);
// });


document.addEventListener('DOMContentLoaded', function () {
    const processLoginForm = () => {
        let Email = document.getElementById('email')
        let Password = document.getElementById('Password')

        displayData(Email, Password); {
            console.log('Login succesful')
        }

        let StoreLoginData = {
            Email: Email,
            Password: Password,
        };

        localStorage.setItem('StoreLoginData', JSON.stringify(StoreLoginData))
    };

    processLoginForm()
    
    function displayData() {
        let GetLoginData = localStorage.getItem('StoreLoginData');

        let StoreLoginData = JSON.parse(GetLoginData);

        console.log('Login succesful' , StoreLoginData)
    }

    let submit = document.querySelector('#Formbtn')
    submit.addEventListener('click', processLoginForm)
    
    displayData()
})

// FIGURE OUT WHY THW LOGIN DATA IS NOT SAVING 
