function toggleDarkMode() {
    isDarkMode = true;
    updateTheme();
}

function toggleLightMode() {
    isDarkMode = false;
    updateTheme();
}

function updateTheme() {
    const newTheme = isDarkMode ? 'dark' : 'light';

    document.body.dataset.bsTheme = newTheme;
    const navElement = document.querySelector('nav');
    navElement.classList.toggle('bg-dark', isDarkMode);

    const bodyDiv = document.getElementById('body');
    bodyDiv.classList.toggle('bg-dark', isDarkMode);

    const contactDiv = document.getElementById('contact');
    contactDiv.classList.toggle('bg-dark', isDarkMode);

    const contactCard = document.getElementById('contact-card');
    contactCard.classList.toggle('bg-dark', isDarkMode);

    const contactCard1 = document.getElementById('contact-card1');
    contactCard1.classList.toggle('bg-dark', isDarkMode);

    var img = document.getElementById('darkmode');
    img.src = isDarkMode ? 'sun.svg' : 'moon.svg';
}
function toggleManualMode() {
    isDarkMode = !isDarkMode;
    updateTheme();
}
// Check if the user prefers dark mode
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Function to handle changes in the user's preferred color scheme
function handleDarkModeChange(event) {
    isDarkMode = event.matches;
    updateTheme();
}

// Attach the handler to the media query
darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

// Initial check to see if the user currently prefers dark mode
handleDarkModeChange(darkModeMediaQuery);

