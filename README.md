# Pet Adoption Website
This project is a simple pet adoption website built using HTML,CSS and Javascript. It will display available pets for adoption and allows users to view available pets, adopt them, and see adopted pets all within one page.

## Features
Navigation Bar: Navigate between different sections like Home, About, Services, Booking, and Contact.
Home Section: Display available pets for adoption with their images.
Adopt Pets: Users can select and adopt pets, and the adopted pets will be displayed in a dedicated section.
Interactive Buttons: Buttons for adopting pets and viewing all available cats and dogs.
Single Page Application: All interactions and content updates happen on a single page.

## Project Structure 
The project consists of three main files:

index.html: The main HTML file that structures the webpage.
styles.css: The CSS file that styles the webpage.
scripts.js: The JavaScript file that handles the dynamic behavior of the webpage.

## Getting Started
Prerequisites.
To run this project one requires a web browser.

## Installation
1. Clone the repository:
git@github.com:Br3dget/Petadoption-website.git
cd Petadoption-website

## Running the application
1. Start the server DB
json-server --watch db.json

2. Open Your Browser
Navigate to http://localhost:3000/

## Usage 
1. Open index.html in a web browser.
2. Navigate using the Navbar: Click on HOME, ABOUT, SERVICES, BOOKING, or CONTACT to navigate between sections.
3. Adopt a Pet:
Click on a pet image to select it.
Click the "ADOPT" button to confirm the adoption.
The adopted pet will appear in the "Adopted Pets" section.
5.View All Cats & Dogs: Click the "Cats & Dogs" button to see a message listing all available pets.

## Code Explanation
## HTML Structure
Provides the basic structure and content for the web application.
Includes a navigation bar, a home section with available pets, and sections for about, services, booking, and contact.
The home section has buttons for adopting pets and viewing all cats and dogs, and it displays pets available for adoption.

## CSS
1. Styles the entire web application, including the navigation bar, buttons, pet images, and the layout.
2. Uses Flexbox for the layout and provides hover effects for pet images.

## JavaScript
Adds interactivity to the web application.
Listens for the DOMContentLoaded event to ensure the DOM is fully loaded before executing the script.
Handles pet selection, adoption confirmation, and displays the adopted pets.
Manages the navigation between different sections without reloading the page.

## Example of Javascript Code
document.addEventListener('DOMContentLoaded', () => {
    const adoptBtn = document.getElementById('adoptBtn');
    const catsDogsBtn = document.getElementById('catsDogsBtn');
    const petImages = document.querySelectorAll('.pet img');
    let selectedPet = null;

    petImages.forEach((img) => {
        img.addEventListener('click', (e) => {
            petImages.forEach(image => image.classList.remove('selected'));
            e.target.classList.add('selected');
            selectedPet = e.target;
        });
    });

    adoptBtn.addEventListener('click', () => {
        if (selectedPet) {
            const confirmAdopt = confirm(`Are you sure you want to adopt ${selectedPet.alt}?`);
            if (confirmAdopt) {
                alert(`Congratulations! You have adopted ${selectedPet.alt}.`);
                adoptPet(selectedPet);
                selectedPet.classList.remove('selected');
                selectedPet = null;
            }
        } else {
            alert('Please select a pet to adopt.');
        }
    });

    catsDogsBtn.addEventListener('click', () => {
        alert('Here are all our cats and dogs available for adoption!');
    });

    const links = document.querySelectorAll('.navbar ul li a');
    const sections = document.querySelectorAll('.content > div');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = e.target.getAttribute('data-section');
            
            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });

            links.forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    function adoptPet(pet) {
        const adoptedPetsList = document.querySelector('.adopted-pets-list');
        const petContainer = document.createElement('div');
        petContainer.classList.add('adopted-pet');
        const petImage = document.createElement('img');
        petImage.src = pet.src;
        petImage.alt = pet.alt;
        petContainer.appendChild(petImage);
        adoptedPetsList.appendChild(petContainer);
    }
});


## Author
This project was written by Bridget Njoki.

## Date
17/07/2024