function estaEnViewport(elemento) {
    const rect = elemento.getBoundingClientRect();
    const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
    
    // Calcula el umbral para que al menos el 10% del elemento esté en el viewport
    const umbral = viewportHeight * 0.1;

    return (
        rect.top <= viewportHeight - umbral &&
        rect.bottom >= umbral
    );
}

function activarElementos() {
    const elementos = document.querySelectorAll('.aparecer');
    elementos.forEach(function(elemento) {
        if (estaEnViewport(elemento)) {
            elemento.classList.add('activo');
        } else {
            elemento.classList.remove('activo');
        }
    });
}

// Activa los elementos cuando se carga la página y cuando se desplaza
document.addEventListener('DOMContentLoaded', activarElementos);
window.addEventListener('scroll', activarElementos);
