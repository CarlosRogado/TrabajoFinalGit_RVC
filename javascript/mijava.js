document.addEventListener("DOMContentLoaded", function () {
    const botonModoOscuro = document.getElementById("modoOscuroBtn");

    botonModoOscuro.addEventListener("click", function () {
        document.body.classList.toggle("modo-oscuro");

        if (document.body.classList.contains("modo-oscuro")) {
            botonModoOscuro.value = "Modo claro";
        } else {
            botonModoOscuro.value = "Modo oscuro";
        }
    });
});
