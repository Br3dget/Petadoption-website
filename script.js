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



   