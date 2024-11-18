document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item-custom');
    let isTransitioning = false;

    function closeAllNews(callback) {
        newsItems.forEach(item => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                const button = item.querySelector('.learn-more .button-text');
                button.textContent = 'Leer más'; // Cambiar texto a "Leer más" al cerrar
            }
        });
        if (callback) {
            setTimeout(callback, 300);
        }
    }

    newsItems.forEach(item => {
        const button = item.querySelector('.learn-more');

        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar el cierre de la noticia

            if (isTransitioning) return;
            isTransitioning = true;

            const buttonText = button.querySelector('.button-text');
            const url = item.getAttribute('data-url'); // Obtener la URL de data-url

            if (item.classList.contains('active')) {
                // Si está activo y el texto es "Completa", redirigir
                if (buttonText.textContent === 'Completa') {
                    window.location.href = url; // Redirigir a la página de la noticia
                } else {
                    item.classList.remove('active');
                    buttonText.textContent = 'Leer más'; // Cambiar texto a "Leer más" al cerrar
                    isTransitioning = false;
                }
            } else {
                closeAllNews(() => {
                    item.classList.add('active');
                    buttonText.textContent = 'Completa'; // Cambiar texto al abrir
                    isTransitioning = false;
                });
            }
        });
    });

    document.addEventListener('click', function() {
        closeAllNews();
    });
});
