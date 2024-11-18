let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;

document.getElementById('nextBtn').addEventListener('click', showNextSlide);
document.getElementById('prevBtn').addEventListener('click', showPrevSlide);
dots.forEach(dot => dot.addEventListener('click', showSpecificSlide));

function showNextSlide() {
    slides[currentSlide].classList.remove('active', 'enter-right', 'enter-left');
    slides[currentSlide].classList.add('right');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.remove('right', 'left');
    slides[currentSlide].classList.add('active', 'enter-right');
    dots[currentSlide].classList.add('active');
}

function showPrevSlide() {
    slides[currentSlide].classList.remove('active', 'enter-right', 'enter-left');
    slides[currentSlide].classList.add('left');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    
    slides[currentSlide].classList.remove('right', 'left');
    slides[currentSlide].classList.add('active', 'enter-left');
    dots[currentSlide].classList.add('active');
}

function showSpecificSlide(event) {
    let slideIndex = parseInt(event.target.getAttribute('data-slide'));
    if (slideIndex !== currentSlide) {
        slides[currentSlide].classList.remove('active', 'enter-right', 'enter-left');
        if (slideIndex > currentSlide) {
            slides[currentSlide].classList.add('right');
            slides[slideIndex].classList.remove('right', 'left');
            slides[slideIndex].classList.add('active', 'enter-right');
        } else {
            slides[currentSlide].classList.add('left');
            slides[slideIndex].classList.remove('right', 'left');
            slides[slideIndex].classList.add('active', 'enter-left');
        }
        dots[currentSlide].classList.remove('active');
        dots[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    }
}

// Automático: Cambia de imagen cada 10 segundos
setInterval(showNextSlide, 10000);
