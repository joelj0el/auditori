// Al cargar la página, muestra el modal automáticamente
window.onload = function() {
    document.getElementById('phishing-modal').style.display = 'flex';
};

// Si quieres que el botón "CLICK AQUÍ PAR ACTUALIZAR" haga algo, puedes agregar aquí el evento:
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.actualizar-btn').onclick = function() {
        alert('¡Enlace malicioso bloqueado!');
    };
});
