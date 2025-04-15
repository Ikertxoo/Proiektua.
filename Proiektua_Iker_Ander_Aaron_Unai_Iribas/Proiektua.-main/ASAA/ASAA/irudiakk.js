function aldatuIrudia() {
    const irudia = document.getElementById("aldatuImg");
    irudia.src = irudia.src.includes("css_logo.png") ? "html_logo.png" : "css_logo.png";
}

function aukeraAldatu() {
    const selectBox = document.getElementById("irudiAukera");
    const aukeratutakoIrudia = selectBox.value;
    document.getElementById("aukeraImg").src = aukeratutakoIrudia;
}
