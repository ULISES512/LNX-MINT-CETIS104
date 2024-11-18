fetch('./header.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('header').innerHTML = data;

                const scripts = document.getElementById('header').getElementsByTagName('script');
                for (let script of scripts) {
                    const newScript = document.createElement('script');
                    newScript.src = script.src;
                    document.body.appendChild(newScript);
                }
            });


fetch('./footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;

                const scripts = document.getElementById('footer').getElementsByTagName('script');
                for (let script of scripts) {
                    const newScript = document.createElement('script');
                    newScript.src = script.src;
                    document.body.appendChild(newScript);
                }
            });


fetch('./dino_redes.html')
.then(response => response.text())
.then(data => {
    document.getElementById('dino_cetis').innerHTML = data;

    const scripts = document.getElementById('dino_cetis').getElementsByTagName('script');
    for (let script of scripts) {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        document.body.appendChild(newScript);
    }
});

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



          
