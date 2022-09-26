'use strict';
let lastPage = "about-me-section";
function AboutMe() {
    document.getElementById(lastPage).classList.add("hidden");
    document.getElementById("about-me-section").classList.remove("hidden");
    lastPage = "about-me-section";
}
function PersonalInterest() {
    document.getElementById(lastPage).classList.add("hidden");
    document.getElementById("personal-interest-section").classList.remove("hidden");
    lastPage = "personal-interest-section";
}
function ProfessionalInterest() {
    document.getElementById(lastPage).classList.add("hidden");
    document.getElementById("professional-interest-section").classList.remove("hidden");
    lastPage = "professional-interest-section";
}
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark Mode";
    } else {
        this.textContent = "Light Mode";
    }
    console.log('current class name: ' + className);
});