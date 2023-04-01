const inputNombre = document.getElementById("mi-input"); // Aquí va a escribir su nombre en el cuadro de texto
const btn = document.getElementById("agregarNombre"); // nombre del boton :)
const nombreTuyo = document.getElementById("nombreTuyo"); // el nombre que va a imprimr en pantalla

btn.onclick = function() {
    if (inputNombre.value === "") return
    const inputValue = inputNombre.value;
    const li = document.createElement("li");
    li.textContent = `Hola, ${inputValue} ¡Bienvenida!`;
    nombreTuyo.appendChild(li);
    inputNombre.value = "";
}

