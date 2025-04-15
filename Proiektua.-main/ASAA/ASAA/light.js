function aldatuModua() {
    const body = document.body;
    const button = document.getElementById("modeButton");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        button.textContent = "Light";
    } else {
        button.textContent = "Dark";
    }
}
