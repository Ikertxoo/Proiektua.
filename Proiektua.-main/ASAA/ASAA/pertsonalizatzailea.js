const text = document.getElementById("text");
const bgButtons = document.querySelectorAll("#bgColors .color-btn");
const textButtons = document.querySelectorAll("#textColors .color-btn");
const sizeButtons = document.querySelectorAll("#textSize .size-btn");

// Cambiar color de fondo
bgButtons.forEach(button => {
    button.addEventListener("click", () => {
        document.body.style.backgroundColor = button.getAttribute("data-color");
    });
});

// Cambiar color de texto
textButtons.forEach(button => {
    button.addEventListener("click", () => {
        text.style.color = button.getAttribute("data-color");
    });
});

// Cambiar tamaño de texto
sizeButtons.forEach(button => {
    button.addEventListener("click", () => {
        text.style.fontSize = button.getAttribute("data-size");
    });
});
