function fetchAndInjectHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(elementId);
            element.innerHTML = data;

            const scripts = element.getElementsByTagName('script');
            for (let script of scripts) {
                const newScript = document.createElement('script');
                newScript.src = script.src;
                newScript.defer = true;  // Defer script execution
                document.body.appendChild(newScript);
            }
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}

// Llamadas para cargar el contenido
fetchAndInjectHTML('./pages/header.html', 'header');
fetchAndInjectHTML('./pages/footer.html', 'footer');
fetchAndInjectHTML('./pages/dino_redes.html', 'dino_cetis');
