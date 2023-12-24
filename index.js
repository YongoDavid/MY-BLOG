// document.addEventListener('DOMContentLoaded', function() {
//   const userSection = document.getElementsByClassName('user-section');
//   const arrowIcon = document.getElementsByClassName('arrow-icon');
//   const dropdown = document.getElementsByClassName('dropdown');

//   userSection.addEventListener('click', function() {
//     dropdown.classList.toggle('hidden');
//     arrowIcon.classList.toggle('rotated');
//   });

//   // Close the dropdown if clicked outside of it
//   document.addEventListener('click', function(event) {
//     if (!userSection.contains(event.target)) {
//       dropdown.classList.add('hidden');
//       arrowIcon.classList.remove('rotated');
//     }
//   });
// });

//   document.addEventListener('DOMContentLoaded', function () {
//     const userSection = document.querySelector('.user-section');
//     const dropdown = document.querySelector('.dropdown');

//     userSection.addEventListener('click', function () {
//       dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
//     });

//     // Close the dropdown when clicking outside the SVG
//     document.addEventListener('click', function (event) {
//       if (!userSection.contains(event.target)) {
//         dropdown.style.display = 'none';
//       }
//     });
//   });


  document.addEventListener('DOMContentLoaded', function () {
    const userSection = document.querySelector('.user-section');
    const dropdown = document.querySelector('.dropdown');
    const arrowIcon = document.querySelector('.arrow-icon');

    userSection.addEventListener('click', function () {
      dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
      // Toggle the rotation of the arrow icon
      arrowIcon.style.transform = (arrowIcon.style.transform === 'rotate(-180deg)') ? '' : 'rotate(-180deg)';
    });

    // Close the dropdown when clicking outside the SVG
    document.addEventListener('click', function (event) {
      if (!userSection.contains(event.target)) {
        dropdown.style.display = 'none';
        // Reset the rotation of the arrow icon when the dropdown is closed
        arrowIcon.style.transform = '';
      }
    });
  });


