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

const contenedor = document.getElementById("contenedor");
const imagen = document.createElement("img");

imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsc0I5OqWF00NnEL-9xCC_ZF0cPHg7Qvog87lL_KOeBw&s=10.jpg";
imagen.width = 300; // opcional

contenedor.appendChild(imagen);
