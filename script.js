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