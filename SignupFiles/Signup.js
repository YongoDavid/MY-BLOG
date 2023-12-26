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



// document.addEventListener('DOMContentLoaded', function () {
//     const processForm = () => {
//         let firstname = document.getElementById('Fname').value;
//         let lastname = document.getElementById('Lname').value;
//         let email = document.getElementById('email').value;
//         let password = document.getElementById('Password').value;
//         let conPassword = document.getElementById('password').value; // Corrected the ID

//         // Call the displayData function with the collected data
//         displayData(firstname, lastname, email, password, conPassword);
//     };

//     function displayData(firstname, lastname, email, password, conPassword) {
//         console.log('Signup complete');
//         console.log('First Name:', firstname);
//         console.log('Last Name:', lastname);
//         console.log('Email:', email);
//         console.log('Password:', password);
//         console.log('Confirm Password:', conPassword);
//     }

//     // Use querySelector to select the element by class
//     let submit = document.querySelector('.Formbtn');
//     submit.addEventListener('click', processForm);
// });

// document.addEventListener('DOMContentLoaded', function () {

//     const processForm = () => {
//         let firstname = document.getElementById('Fname').value;
//         let lastname = document.getElementById('Lname').value;
//         let email = document.getElementById('email').value;
//         let password = document.getElementById('Password').value;
//         let conPassword = document.getElementById('password').value;
//         const btn = document.getElementsByClassName('Formbtn')
//         const ermsg = document.getElementById('ermsg')

//         btn.addEventListener('click', (e) => {
//             e.preventDefault();

//             ermsg.innText = '';

//             if (!firstname.value || !lastname.value || !email.value || !password.value || !conPassword) {
//                 ermsg.innText = 'Please fill in your infoormation'
//             } else {
//                 displayData(firstname.value, lastname.value, email.value, password.value, conPassword.value);
//                 console.log('Submitted')


//                 let formData = {
//                     Firstname: firstname,
//                     lastname: lastname,
//                     email: email,
//                     password: password,
//                     conPassword: conPassword
//                 };
//                 localStorage.setItem('formData', JSON.stringify(formData))
//             }

//         });
//     };
    

//     // function displayData(firstname, lastname, email, password, conPassword) {
//     //     console.log('SIgnup comolete')
//     // }

//     function displayData() {
//         let GetStoreData = localStorage.getItem('formData');

//         let formData = JSON.parse(GetStoreData);

//         console.log('Stored Data' ,formData);
//     }
//  processForm()
// });



document.addEventListener('DOMContentLoaded', function () {

    const processForm = () => {
        const firstname = document.getElementById('Fname');
        const lastname = document.getElementById('Lname');
        const email = document.getElementById('email');
        const password = document.getElementById('Password');
        const conPassword = document.getElementById('password');
        const btn = document.getElementById('Formbtn'); // Assuming you have an element with this ID
        const ermsg = document.getElementById('ermsg');

        btn.addEventListener('click', (e) => {
            e.preventDefault();

            ermsg.innerText = '';

            if (!firstname.value || !lastname.value || !email.value || !password.value || !conPassword.value) {
                ermsg.innerText = 'Please fill all fields';
            } else {
                displayData(firstname.value, lastname.value, email.value, password.value, conPassword.value);
                console.log('Submitted');

                let formData = {
                    Firstname: firstname.value,
                    lastname: lastname.value,
                    email: email.value,
                    password: password.value,
                    conPassword: conPassword.value
                };
                localStorage.setItem('formData', JSON.stringify(formData));
            }
        });
    };

    function displayData(firstname, lastname, email, password, conPassword) {
        console.log('Signup complete:',);
    }

    processForm();
});
