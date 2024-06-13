// --------; SALA 01 ;-------------- //

function mostrarObjetivo() {
    var divObjetivo = document.getElementById("divObjetivo");
    if (divObjetivo.style.display === "none") {
        divObjetivo.style.display = "block";
    } else {
        divObjetivo.style.display = "none";
    }
}

var arcondicionadoConsertado = false;

function PrecisaDaChave() {
    alert("Ops! Para consertar o Ar-Condicionado você precisa da chave de fenda!");
}
function NaoAchou () {
    alert("Ops! Você não achou nada, procure em outro lugar!");
}

function ChavedeFenda () {
    var chaveDeFendaEncontrada = confirm("Você encontrou uma chave de fenda. Deseja usá-la para consertar o ar-condicionado?");
    if (chaveDeFendaEncontrada) {
            arcondicionadoConsertado = true;
            document.getElementById("arcondicionadoHint").style.display = "none";
            alert("Parabéns! Você consertou o ar-condicionado e escapou do quarto!");
            window.location.replace('sala2.html');
        }
}