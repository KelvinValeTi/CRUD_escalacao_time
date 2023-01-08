/**
 * Variaveis
 */

//botões
const btnApagarTodos = document.getElementById("apagar-todos");
const btnAlterarNomeTime = document.getElementById("btn-alterar-nome-time");
const btnEscalarJogador = document.getElementById("escalar-jogador");

//inputs


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
        tableTr.classList.add("tr-control");
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

function apagarTodos(){
    const linha = document.querySelectorAll(".tr-control");
    const table = document.getElementById("table");

    for(let i=0;i<escalacao.length;i++){
        table.removeChild(linha[i]);
    }

    escalacao=[];
    gerarTabelaEscalacao();
}

function alteraTituloTabela(){
    const titleTable = document.getElementById("title-table");
    const inputNomeTime = document.getElementById("input-nome-time");

    //mandar validar este antes
    titleTable.innerText = inputNomeTime.value;
}

function escalarJogador(){
    const inputNomeJogador = document.getElementById("input-nome-jogador");
    const posicao = document.getElementById("posicao");
    const numCamisa = document.getElementById("camisa");
    
    let posicaoEscolhida = posicao.options[posicao.selectedIndex].text;

    let jogador = new Jogador(numCamisa.value, inputNomeJogador.value, posicaoEscolhida);

    /*console.log(numCamisa.value);
    console.log(inputNomeJogador.value); //nome jogador
    console.log(posicaoEscolhida); //posicao
*/
    escalacao.push(jogador);
    console.log(escalacao[escalacao.length -1])
    incluirApenasUmJogador();

    console.table(escalacao);
    //gerarTabelaEscalacao();
}

function incluirApenasUmJogador(){
    const table = document.getElementById("table");
    const tableTr = document.createElement("tr");
    tableTr.classList.add("tr-control");
    table.appendChild(tableTr);

    const tdCamisa = document.createElement("td");
    tdCamisa.innerText=escalacao[escalacao.length -1].camisa;
    tableTr.appendChild(tdCamisa);

    const tdNomeJogador = document.createElement("td");
    tdNomeJogador.innerText=escalacao[escalacao.length -1].nome;
    tableTr.appendChild(tdNomeJogador);

    const tdPosicao = document.createElement("td");
    tdPosicao.innerText=escalacao[escalacao.length -1].posicao;
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

/**
 * EVENTOS
 */

window.onload = gerarTabelaEscalacao();

btnApagarTodos.addEventListener("click",()=>{
    apagarTodos();
});

btnAlterarNomeTime.addEventListener("click",()=>{
    alteraTituloTabela();
});

btnEscalarJogador.addEventListener("click",()=>{
    escalarJogador();
});




