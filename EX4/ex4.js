var visibilidade = true;
function Ocultar() {
    if (visibilidade) {
        document.getElementById("texto").style.display = "none";
        visibilidade = false;
    } else {
        document.getElementById("texto").style.display = "block";
        visibilidade = true;
    }

}