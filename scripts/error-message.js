document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = form.querySelector("#username").value;
        const password = form.querySelector("#password").value;

        // En este ejemplo, verifica las credenciales (reemplaza con tu lógica)
        if (username === "tu_usuario" && password === "tu_contraseña") {
            window.location.href = "userview.php";
        } else {
            errorMessage.textContent = "Usuario o contraseña incorrecta";
        }
    });
});





