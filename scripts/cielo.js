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
    const anchoInput = document.getElementById("anchoMetrosCielo");
    const largoInput = document.getElementById("largoMetrosCielo");
    const anchoValue = anchoInput.value.trim(); // Eliminar espacios en blanco
    const largoValue = largoInput.value.trim(); // Eliminar espacios en blanco

    // Verificar si el valor es un número válido
    if ((anchoValue === "")||(largoValue === "")) {
        // Si el campo está vacío, muestra un mensaje en blanco o un mensaje predeterminado
        document.getElementById("plancha-result").textContent = "0";
        document.getElementById("angular-result").textContent = "0";
        document.getElementById("m-tee-result").textContent = "0";
        document.getElementById("c-tee-result").textContent = "0";
        document.getElementById("tachuelon-result").textContent = "0";
    } else {
        const largo = parseFloat(largoValue);
        const ancho = parseFloat(anchoValue);
        /*
        var ladoMenor = ancho;
        var ladoMayor = largo;

        if(ladoMenor > largo){
            ladoMenor = largo;
            ladoMayor = ancho;
        }*/

        var nTee_1 = ancho ;
        var nTee_2 = largo ;

        var teeOptima = 0;
        var crossTee = 0;

        if (Math.ceil(nTee_1) < Math.ceil(nTee_2)){
            teeOptima = Math.ceil(nTee_2);
            crossTee = nTee_1;
        }else{
            teeOptima = Math.ceil(nTee_1);
            crossTee = nTee_2;
        }

        const metrosCuadrados = parseFloat(anchoValue * largoValue);

        if (!isNaN(metrosCuadrados)) {
            // Si el valor es válido, realizar los cálculos
            const plancha = (metrosCuadrados / 0.72) ; 
            const angular = ((largo + ancho) * 2) / 3;
            const mTee = (Math.ceil(teeOptima / 1.20)) - 1;//((Math.ceil(crossTee / 1.20))) * teeOptima ;
            const cTee = ((Math.ceil(crossTee / 0.60)) - 1)* (Math.ceil(teeOptima / 1.20)); //(crossTee/0.60) * (Math.ceil(crossTee / 1.20)); 
            const tachuelon =  angular * 4; 

            // Mostrar los resultados en el HTML
            document.getElementById("plancha-result").textContent = plancha.toFixed(2);
            document.getElementById("angular-result").textContent = angular.toFixed(2);
            document.getElementById("m-tee-result").textContent = mTee.toFixed(2);
            document.getElementById("c-tee-result").textContent = cTee.toFixed(2);
            document.getElementById("tachuelon-result").textContent = tachuelon.toFixed(2);
        } else {
            // Si el valor no es válido y no está vacío, mostrar un mensaje de error
            alert("Por favor, ingresa un valor válido para metros cuadrados.");
        }
    }

    // Puedes agregar aquí la lógica para enviar los datos a tu base de datos

    // Puedes agregar un botón de "Calcular nuevamente" si lo deseas
});






