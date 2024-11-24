// Obtén referencias a los elementos del DOM
const calcularBtn = document.getElementById("calcular-btn");
const respuestas = document.querySelectorAll(".resp");

// Agrega un manejador de eventos para el botón de calcular
calcularBtn.addEventListener("click", function () {

    respuestas.forEach(function (resp) {
        resp.style.animation = 'none';
        void resp.offsetWidth;
        resp.style.animation = 'slide-right 0.4s linear both';
    });

    // Obtiene el valor de metros cuadrados
    const metrosCuadradosInput = document.getElementById("metros-cuadrados-block");
    const metrosCuadradosValue = metrosCuadradosInput.value.trim(); // Eliminar espacios en blanco

    // Verificar si el valor es un número válido
    if (metrosCuadradosValue === "") {
        // Si el campo está vacío, muestra un mensaje en blanco o un mensaje predeterminado
        document.getElementById("block-result").textContent = "0";
        document.getElementById("cemento-result").textContent = "0";
        document.getElementById("arena-result").textContent = "0";
    } else {
        const metrosCuadrados = parseFloat(metrosCuadradosValue);

        if (!isNaN(metrosCuadrados)) {
            // Si el valor es válido, realizar los cálculos
            const blockRequerido = ((metrosCuadrados * 12.5) * 1.10) ; // Ejemplo: 10 block por metro cuadrado
            const unidadProporcion = (metrosCuadrados * 25) / 4
            const cementoRequerido = (unidadProporcion * 1.2) / 42.5; // Ejemplo: 5 bolsas de cemento por metro cuadrado
            const arenaRequerida =  (unidadProporcion * 3) / 1000; // Ejemplo: 3 metros cúbicos de arena por metro cuadrado

            // Mostrar los resultados en el HTML
            document.getElementById("block-result").textContent = blockRequerido.toFixed(2);
            document.getElementById("cemento-result").textContent = cementoRequerido.toFixed(2);
            document.getElementById("arena-result").textContent = arenaRequerida.toFixed(2);
        } else {
            // Si el valor no es válido y no está vacío, mostrar un mensaje de error
            alert("Por favor, ingresa un valor válido para metros cuadrados.");
        }
    }

    // Puedes agregar aquí la lógica para enviar los datos a tu base de datos

    // Puedes agregar un botón de "Calcular nuevamente" si lo deseas
});






