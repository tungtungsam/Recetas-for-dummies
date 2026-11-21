const buscar = document.getElementById("buscar");
const tarjetas = document.querySelectorAll(".tarjeta");

buscar.addEventListener("input", function() {
    let texto = buscar.value.toLowerCase();

    tarjetas.forEach(function(tarjeta) {
        let nombre = tarjeta.querySelector("h2").textContent.toLowerCase();

        if (nombre.includes(texto)) {
            tarjeta.style.display = "";
        } else {
            tarjeta.style.display = "none";
        }
    });
});
