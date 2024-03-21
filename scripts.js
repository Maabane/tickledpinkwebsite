// Function to show the home page
function showHome() {
    hideAllSections();
    document.getElementById('home').style.display = 'block';
}

// Function to show the corporate gifts page
function showCorporateGifts() {
    hideAllSections();
    document.getElementById('corporate-gifts').style.display = 'block';
}

// Function to show the Valentine's Day gifts page
function showValentinesGifts() {
    hideAllSections();
    document.getElementById('valentines-gifts').style.display = 'block';
}

// Function to show the personalized cakes page
function showPersonalizedCakes() {
    hideAllSections();
    document.getElementById('personalized-cakes').style.display = 'block';
}

// Function to show the about page
function showAbout() {
    hideAllSections();
    document.getElementById('about').style.display = 'block';
}

// Function to show the contact page
function showContact() {
    hideAllSections();
    document.getElementById('contact').style.display = 'block';
}

// Function to hide all sections
function hideAllSections() {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
}

// Initially show the home page
showHome();
