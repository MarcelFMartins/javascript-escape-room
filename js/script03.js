// --------; SALA 03 ;-------------- //

function mostrarObjetivo() {
    var divObjetivo = document.getElementById("divObjetivo");
    if (divObjetivo.style.display === "none") {
        divObjetivo.style.display = "block";
    } else {
        divObjetivo.style.display = "none";
    }
}

function mostrarJogo() {
    var divObjetivo = document.getElementById("jogosenha");
    if (divObjetivo.style.display === "none") {
        divObjetivo.style.display = "block";
    } else {
        divObjetivo.style.display = "none";
    }
}

function AquiNaoTemNada () {
    alert("Ops! Não é aqui que você deve realizar o objetivo!");
}