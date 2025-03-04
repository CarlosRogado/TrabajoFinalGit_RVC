document.addEventListener("DOMContentLoaded", function () {
    const botonModoOscuro = document.getElementById("modoOscuroBtn");
    const body = document.body;

    // Verificar si hay un modo guardado en localStorage
    if (localStorage.getItem("modoOscuro") === "activado") {
        body.classList.add("modo-oscuro");
        botonModoOscuro.value = "Modo claro";
    }

    botonModoOscuro.addEventListener("click", function () {
        body.classList.toggle("modo-oscuro");

        if (body.classList.contains("modo-oscuro")) {
            localStorage.setItem("modoOscuro", "activado");
            botonModoOscuro.value = "Modo claro";
        } else {
            localStorage.setItem("modoOscuro", "desactivado");
            botonModoOscuro.value = "Modo oscuro";
        }
    });
});