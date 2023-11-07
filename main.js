const form = document.getElementById('form-contato'); /*criacao de variavel 'form' usando id do form*/
const nome = []; /* para calcular a media, vamos precisar adicionar em 2 arrays todas as atividade e notas que o usuario digitou */
const numero = []; /* para calcular a media, vamos precisar adicionar em 2 arrays todas as atividade e notas que o usuario digitou */

let linhas = ''; /* se adicionado no nivel global, mantem conteudo e adiciona uma nova linha*/

form.addEventListener('submit', function(e) { /*criacao do evento de sumbmit , remover comportamento do formulario de quando ser submetido atualizar a tela > para isso cria uma funcao que recebe um parametro que eh o proprio evento e para remover o comportamento de atualizar a pagina chamamos a funcaco (e) preventDefault*/
    e.preventDefault();

    adicionaLinha(); /*chama a funcao criada 'adicionaLinha*/
    atualizaTabela(); /*chama a funcao criada 'atualizaTabela*/
}); 

/* ESSA FUNCAO APENAS ADICIONA UMA LINHA NOVA A VARIAVEL 'LINHAS' */
function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato'); /*capturar campos, Nome do contato*/
    const inputNumeroContato = document.getElementById('numero-contato'); /*capturar campos, Telefone do contato*/

    /* impossibilita adicionar atividades duplicadas com o mesmo nome */
    if (nome.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} ja foi inserido`);
    } else {
        /* foi usado parseFloat para transformar os valores do array que estavam em STRING em NUMERO - caso continuasse em STRING, ao somar ocorreria uma concatenacao ('10'+'3'='103') e agora (10+3=13) */
        nome.push(inputNomeContato.value); /* toda vez que a funcao adicionaLinha for chamada, vamos fazer um push(adicionar) nos arrays para adicionar o conteudo */
        numero.push(parseFloat(inputNumeroContato.value)); /* toda vez que a funcao adicionaLinha for chamada, vamos fazer um push(adicionar) nos arrays para adicionar o conteudo */
    
        /*adicionar informacoes nome da atividade, nota e se o aluno foi aprovado ou nao ao corpo da tabela como uma linha*/
        let linha = '<tr>'; //*criando variavel 'linha' que vai receber o codigo HTML como uma string > para criar linha, usasse o <tr> */
        linha += `<td>${inputNomeContato.value}</td>`; /* += significa "concatenacao" >> criando coluna > para criar coluna, usasse o <td> >> isso significa que a linha vai ser composta da concatenacao de 3 colunas IMPORTANTE USAR CRASE */
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha /*concatenando 'linha' dentro da variavel 'linhas', assim podesse adicionar quantas 'linha' quiser dentro de 'linhas'*/
    }

    inputNomeContato.value = ''; /* limpar campo depois de adicionar conteudo */
    inputNumeroContato.value = ''; /* limpar campo depois de adicionar conteudo */
}

/* ESSA FUNCAO APENAS ATUALIZA O CONTEUDO DA TABELA */
function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody'); /* insersao do conteudo dentro do corpo da tabela - para isso, criar uma constante (corpoTabela) e usar o seletor querySelector chamando o corpo da tabela (tbody) */
    corpoTabela.innerHTML = linhas; /* para inserir um conteudo dentro de uma tag HTML, usamos o atributo innerHTML */
}
