// --------; SALA 02 ;-------------- //

function mostrarObjetivo() {
    var divObjetivo = document.getElementById("divObjetivo");
    if (divObjetivo.style.display === "none") {
        divObjetivo.style.display = "block";
    } else {
        divObjetivo.style.display = "none";
    }
}

var peca1Colocada = false;
var peca2Colocada = false;
var peca3Colocada = false;

// Função para permitir o drop (soltar) dos elementos na área de drop
function allowDrop(ev) {
    ev.preventDefault(); // Evita o comportamento padrão do navegador ao arrastar e soltar
}

// Função para iniciar o drag (arrastar) dos elementos
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id); // Define os dados sendo arrastados
}

// Função para o drop (soltar) dos elementos na área de drop
function drop(ev) {
    ev.preventDefault(); // Evita o comportamento padrão do navegador ao arrastar e soltar
    var data = ev.dataTransfer.getData("text"); // Obtém os dados arrastados
    var draggedElement = document.getElementById(data); // Obtém o elemento arrastado
    ev.target.appendChild(draggedElement); // Adiciona o elemento arrastado ao alvo do drop
    draggedElement.style.left = ev.offsetX + 'px'; // Define a posição esquerda do elemento no drop
    draggedElement.style.top = ev.offsetY + 'px'; // Define a posição superior do elemento no drop

    // Verifica qual peça da geladeira foi solta no drop
    if (draggedElement.id === 'geladeira-peca1') {
        peca1Colocada = true; // Marca a peça 1 como colocada corretamente
    } else if (draggedElement.id === 'geladeira-peca2') {
        peca2Colocada = true; // Marca a peça 2 como colocada corretamente
    } else if (draggedElement.id === 'geladeira-peca3') {
        peca3Colocada = true; // Marca a peça 3 como colocada corretamente
    }

    verificarConserto(); // Verifica se todas as peças foram colocadas corretamente
}

function verificarConserto() {
    if (peca1Colocada && peca2Colocada && peca3Colocada) {
        alert('Parabéns! Você consertou a geladeira!'); // Exibe um alerta parabenizando o jogador
        console.log('Geladeira consertada!'); // Registra uma mensagem no console indicando que a geladeira foi consertada
        window.location.replace('sala3.html'); 
    }
}

function AquiNaoTemNada () {
    alert("Ops! Não é aqui que você deve realizar o objetivo!");
}

function Geladeria () {
    alert("Arraste as peças até a geladeira para consertá-la");
}