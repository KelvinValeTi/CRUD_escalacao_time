/**
 * Variaveis
 */

//a escalação já inicia com alguns nomes.
let escalacao = [
    new Jogador(1, "Allisson", "Goleiro"),
    new Jogador(4, "Marquinhos", "Zagueiro"),
    new Jogador(3, "T. Silva", "Zagueiro"),
    new Jogador(2, "Danilo", "Lateral"),
    new Jogador(14, "É. Militão", "Meia"),
    new Jogador(20, "Vinicius Jr", "Atacante")
];

//construtor objeto
function Jogador(camisaJogador, nomeJogador, posicaoJogador){
    this.camisa = camisaJogador;
    this.nome= nomeJogador;
    this.posicao = posicaoJogador;
}

/**
 * FUNÇÕES
 */
function gerarTabelaEscalacao(){
    
    for(let i=0;i<escalacao.length;i++){
        const table = document.getElementById("table");
        const tableTr = document.createElement("tr");
        table.appendChild(tableTr);

        const tdCamisa = document.createElement("td");
        tdCamisa.innerText=escalacao[i].camisa;
        tableTr.appendChild(tdCamisa);

        const tdNomeJogador = document.createElement("td");
        tdNomeJogador.innerText=escalacao[i].nome;
        tableTr.appendChild(tdNomeJogador);

        const tdPosicao = document.createElement("td");
        tdPosicao.innerText=escalacao[i].posicao;
        tableTr.appendChild(tdPosicao);

        const editarIcon = document.createElement("td");
        const iTagEdit = document.createElement("i");
        iTagEdit.classList.add("fa");
        iTagEdit.classList.add("fa-pencil");
        editarIcon.appendChild(iTagEdit);
        tableTr.appendChild(editarIcon);

        const deleteIcon = document.createElement("td");
        const iTagDelete = document.createElement("i");
        iTagDelete.classList.add("fa");
        iTagDelete.classList.add("fa-trash");
        deleteIcon.appendChild(iTagDelete);
        tableTr.appendChild(deleteIcon);
    }
}




/**
 * EVENTOS
 */

window.onload = gerarTabelaEscalacao();