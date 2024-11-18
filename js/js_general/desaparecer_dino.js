window.addEventListener('scroll', () => {
    const container = document.getElementById('specialDiv');
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const screenWidth = window.innerWidth;

    if (screenWidth < 1130) {
        if (scrollPosition >= pageHeight - 10) { // Agregamos los 50px
            container.classList.add('hidden');
        } else {
            container.classList.remove('hidden');
        }
    } else {
        container.classList.remove('hidden');
    }
});
