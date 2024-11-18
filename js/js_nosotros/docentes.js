document.querySelector('.open-modal-btn').addEventListener('click', function() {
    document.getElementById('infoModal').style.display = 'flex';
});

document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('infoModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('infoModal')) {
        document.getElementById('infoModal').style.display = 'none';
    }
});
