document.addEventListener('DOMContentLoaded', () => {
    const adoptBtn = document.getElementById('adoptBtn');
    const catsDogsBtn = document.getElementById('catsDogsBtn');
    const petImages = document.querySelectorAll('.pet img');

    adoptBtn.addEventListener('click', () => {
        const confirmAdopt = confirm('Are you sure you want to adopt this pet?');
        if (confirmAdopt) {
            alert('Congratulations! You have adopted a pet.');
            
        }
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
});


   