window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navDots = document.querySelectorAll('.dot');
    
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navDots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('data-section') === currentSection) {
            dot.classList.add('active');
        }
    });
});

// Optional: smooth scroll when clicking on dots
document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const sectionId = dot.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});
