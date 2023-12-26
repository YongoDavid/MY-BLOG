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


// document.addEventListener('DOMContentLoaded', function () {
//     const processLoginForm = () => {
//         let Email = document.getElementById('email').value;
//         let Password = document.getElementById('Password').value;

//         const errmsg = document.getElementsByClassName('message')
//         const btn = document.getElementById('Formbtn')

//         btn.addEventListener('click', (e) => {
//         e.preventDefault()
//         errmsg.innerText = ''

//         if (!Email.value || !Password.value) {
//             errmsg.innerText= 'Please fill in your information'
//         }
//     })
        

//         displayData(Email, Password); {
//             console.log('Login succesful')
//         }

//         let StoreLoginData = {
//             Email: Email,
//             Password: Password,
//         };

//         localStorage.setItem('StoreLoginData', JSON.stringify(StoreLoginData))
//     };
    
//     function displayData() {
//         let GetLoginData = localStorage.getItem('StoreLoginData');
//         let StoreLoginData = JSON.parse(GetLoginData);

//         console.log('Login succesful', StoreLoginData)
//     };
//     processLoginForm()
    
    


// });




document.addEventListener('DOMContentLoaded', function () {
    const processLoginForm = () => {
        const Email = document.getElementById('email');
        const Password = document.getElementById('Password');
        const errmsg = document.getElementById('errorMessage'); // Assuming you have an element with this ID for displaying errors
        const btn = document.getElementById('Formbtn');

        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // Clear previous error message
            errmsg.innerText = '';

            if (!Email.value || !Password.value) {
                errmsg.innerText = 'Please fill in your information';
            } else {
                // If the form is valid, proceed with processing and displaying data
                displayData(Email.value, Password.value);
                console.log('Login successful');
                
                let storeLoginData = {
                    Email: Email.value,
                    Password: Password.value,
                };

                localStorage.setItem('StoreLoginData', JSON.stringify(storeLoginData));
            }
        });
    };

    function displayData(email, password) {
        let getLoginData = localStorage.getItem('StoreLoginData');
        let storeLoginData = JSON.parse(getLoginData);

        console.log('Login successful', storeLoginData);
    }

    processLoginForm();
});




// FIGURE OUT WHY THW LOGIN DATA IS NOT SAVING 
