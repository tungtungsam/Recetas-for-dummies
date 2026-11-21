
const buscar = document.getElementById("buscar");
const tarjetas = document.querySelectorAll(".tarjeta");
buscar.addEventListener("input", function() {
    let texto = buscar.value.toLowerCase();
    tarjetas.forEach(function(tarjeta) {
        let nombre = tarjeta.querySelector("h2").textContent.toLowerCase();
        if (nombre.includes(texto)) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }

    });

});
// FAVORITOS
const botones = document.querySelectorAll(".favorito");
botones.forEach(function(boton, i) {
    let favorito = localStorage.getItem("receta" + i);
    if (favorito === "si") {
        boton.textContent = "♥ Favorito";
    }

    boton.addEventListener("click", function() {
        if (localStorage.getItem("receta" + i) === "si") {
            localStorage.removeItem("receta" + i);
            boton.textContent = "♡ Favoritos";
        } else {
            localStorage.setItem("receta" + i, "si");
            boton.textContent = "♥ Favorito";

        }

    });

});
