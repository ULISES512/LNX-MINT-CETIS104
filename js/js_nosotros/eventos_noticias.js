function ctcShowNews(titulo) {
    const tituloNoticia = document.querySelector('.ctc-news-title');
    const textoNoticia = document.querySelector('.ctc-news-text');

    // Aquí podrías agregar la lógica para cargar el contenido de la noticia seleccionada
    tituloNoticia.innerText = titulo;
    textoNoticia.innerText = 'Contenido actualizado para ' + titulo;
}

const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('hidden'); // Desaparece al hacer scroll hacia abajo
    } else {
        header.classList.remove('hidden'); // Vuelve a aparecer al estar en la parte superior
    }
});

