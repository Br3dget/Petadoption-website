# Pet Adoption Website
This project is a simple pet adoption website built using HTML,CSS and Javascript. It will display available pets for adoption and allows users to adopt a pet.

## Features
Navigation Bar; Easy navigation through different sections of the website.
Pet Gallery; Display of pets available for adoption with images.
Interactive Buttons; Buttons to view cats and dogs and to show interest in adoption.
Event Listeners; Interactive elements using JavaScript event listeners.


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
1. Homepage: The homepage displays a navigation bar and a gallery of pets available for adoption.
2. Adopt Button: Click the "ADOPT" button to show your interest in adopting a pet.
3. Cats & Dogs Button: Click the "Cats & Dogs" button to see a message showing all available cats and dogs.
4. Pet Images: Click on any pet image to see the pet's name in an alert.

## Code Explanation
## HTML Structure
The HTML file contains the structure of the web page, including the navigation bar, buttons, and pet images.
It links to an external CSS file for styling and a JavaScript file for interactivity.

## JavaScript
The JavaScript file includes three main event listeners:

1. Adopt Button: Shows an alert when the adopt button is clicked.
2. Cats & Dogs Button: Shows an alert with a message when the button is clicked.
3. Pet Images: Each pet image has an event listener that shows an alert with the pet's name when clicked.
An array iteration using the forEach method logs the names of the pets available for adoption.


## Example of Javascript Code
document.addEventListener('DOMContentLoaded', () => {
    const adoptBtn = document.getElementById('adoptBtn');
    const catsDogsBtn = document.getElementById('catsDogsBtn');
    const petImages = document.querySelectorAll('.pet img');

    adoptBtn.addEventListener('click', () => {
        alert('Thank you for your interest in adopting a pet!');
    });

    catsDogsBtn.addEventListener('click', () => {
        alert('Here are all our cats and dogs available for adoption!');
    });

    petImages.forEach((img) => {
        img.addEventListener('click', (e) => {
            const petName = e.target.alt;
            alert(`You clicked on ${petName}!`);
        });
    });

    const petNames = Array.from(petImages).map(img => img.alt);
    console.log('Available pets for adoption:');
    petNames.forEach(name => console.log(name));
});

## Author
This project was written by Bridget Njoki.

## Date
17/07/2024