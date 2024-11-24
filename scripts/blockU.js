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
    const metrosLinealesInput = document.getElementById("metros-cuadrados-block");
    const metrosLinealesValue = metrosLinealesInput.value.trim(); // Eliminar espacios en blanco

    // Verificar si el valor es un número válido
    if (metrosLinealesValue === "") {
        // Si el campo está vacío, muestra un mensaje en blanco o un mensaje predeterminado
        document.getElementById("block-result").textContent = "0";
        document.getElementById("cemento-result").textContent = "0";
        document.getElementById("arena-result").textContent = "0";
        document.getElementById("piedrin-result").textContent = "0";
        document.getElementById("hierro3-result").textContent = "0";
        document.getElementById("hierro2-result").textContent = "0";
    } else {
        const metrosLineales = parseFloat(metrosLinealesValue);

        if (!isNaN(metrosLineales)) {
            // Si el valor es válido, realizar los cálculos
            const blockRequerido = (metrosLineales * 2.5); // Ejemplo: 2.5 por cada metro 
            const unidadProporcion = (((metrosLineales * 0.10 * 0.16) * 1000 )*1.40) / 5; //Proporcion 1:2:3
            const cementoRequerido = (unidadProporcion * 1.2) / 42.5; // Ejemplo: 5 bolsas de cemento por metro cuadrado
            const arenaRequerida =  (unidadProporcion * 2) / 1000; // Ejemplo: 2 unidades de arena por cada uno de cemento
            const piedrinRequerido =  (unidadProporcion * 3) / 1000; // Ejemplo: 3 unidades de piedrin por cada uno de cemento

            const hierro3Requerido = (metrosLineales / 5.5) * 2; // Ejemplo: 5.5 utiles en la varilla de redes
            const hierro2Requerido = (hierro3Requerido * 33 ); // Ejemplo: 5.5 utiles en la varilla de redes


            // Mostrar los resultados en el HTML
            document.getElementById("block-result").textContent = blockRequerido.toFixed(2);
            document.getElementById("cemento-result").textContent = cementoRequerido.toFixed(2);
            document.getElementById("arena-result").textContent = arenaRequerida.toFixed(2);
            document.getElementById("piedrin-result").textContent = piedrinRequerido.toFixed(2);

            document.getElementById("hierro3-result").textContent = hierro3Requerido.toFixed(2);
            document.getElementById("hierro2-result").textContent = hierro2Requerido.toFixed(2);
        } else {
            // Si el valor no es válido y no está vacío, mostrar un mensaje de error
            alert("Por favor, ingresa un valor válido para metros cuadrados.");
        }
    }

    // Puedes agregar aquí la lógica para enviar los datos a tu base de datos

    // Puedes agregar un botón de "Calcular nuevamente" si lo deseas
});






