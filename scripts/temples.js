// Set the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Set the last modified date in the footerjhbj
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

// Select the elements
const mainnav = document.querySelector('nav'); // Select the nav element
const hamButton = document.querySelector('#menu');

// Add click event listener
hamButton.addEventListener('click', () => {
    // Toggle the 'open' class on the nav to show/hide it
    mainnav.classList.toggle('open');

    // Toggle the 'open' class on the button to change the icon (optional)
    hamButton.classList.toggle('open');
});