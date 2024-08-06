// Para começar a escrever, precisamos trazer os elementos que criamos no HTML para o JavaScript. 
// Para fazer isso, utilizamos uma constante (const), porque este valor não vai mudar mais.
// dentro dos [], cada {} é um objeto
const caixaPrincipal = document.querySelector(".caixa-principal"); //constante caixa-principal do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas"); //constante caixa-perguntas do HTML
const caixaAlternativas = document.querySelector(".caixa-alternativas"); //constante caixa-alternativas do HTML
const caixaResultado = document.querySelector(".caixa-resultado"); //constante caixa-resultado do HTML
const textoResultado = document.querySelector(".texto-resultado"); //constante texto-resultado do HTML

const perguntas = [ //abre uma lista de perguntas
    { //abre objeto de pergunta
        enunciado: "Por qual motivo você ficaria na detenção em Hogwarts?",
        alternativas: [
        { //alternativa 1
            texto: "Por bater em colega para defender um amigo.",
            afirmacao: "Grifinória",
        },
        { //alternativa 2
            texto: "Por invadir a seção restrita da biblioteca.",
            afirmacao: "Corvinal",
        },
        { //alternativa 3
            texto: "Por zombar seu rival.",
            afirmacao: "Sonserina",
        },
        { //alternativa 4
            texto: "Por tentar explorar a floresta proibida.",
            afirmacao: "Lufa-Lufa",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "No seu primeiro ano em Hogwarts, a que tipo de aluno vocẽ se juntaria?",
        alternativas: [
        {//alternativa 1
            texto: "Aos mais populares.",
            afirmacao: "Grifinória",
        },
        { //alternativa 2
            texto: "Aos que parecem mais inteligentes.",
            afirmacao: "Corvinal",
        },
        { //alternativa 3
            texto: "Aos que primeiro te acolherem.",
            afirmacao: "Lufa-Lufa",
        },
        { //alternativa 4
            texto: "Não se juntaria a ninguém, pois não precisa de ninguém.",
            afirmacao: "Sonserina",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Se na sua sala de aula, houvesse um colega excluído por ser diferente e tivesse faltando uma pessoa para preencher seu grupo, o que você faria?",
        alternativas: [
        {//alternativa 1
            texto: "Teria pena e o chamaria para compor seu grupo.",
            afirmacao: "Lufa-Lufa",
        },
        { //alternativa 2
            texto: "Preferiria ficar com o número de pessoas reduzido.",
            afirmacao: "Corvinal",
        },
        { //alternativa 3
            texto: "Chamaria o colega, mas seria bem rígido durante as atividades.",
            afirmacao: "Grifinória",
        },
        { //alternativa 4
            texto: "Não chamaria e torceria para que ninguém o chamasse.",
            afirmacao: "Sonserina",
        },
    ]
    } //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "No seu grupo de amigos, você é:",
        alternativas: [
        {//alternativa 1
            texto: "O sociável.",
            afirmacao: "Lufa-Lufa",
        },
        { //alternativa 2
            texto: "O assertivo.",
            afirmacao: "Sonserina",
        },
        { //alternativa 3
            texto: "O inteligente.",
            afirmacao: "Corvinal",
        },
        { //alternativa 4
            texto: "O leal.",
            afirmacao: "Grifinória",
        },
    ]
    } //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Você recebeu sua carta de admissão em Hogwarts. Qual a sua reação?",
        alternativas: [
        {//alternativa 1
            texto: "Fica estressado.",
            afirmacao: "Sonserina",
        },
        { //alternativa 2
            texto: "Fica lisonjeado.",
            afirmacao: "Grifinória",
        },
        { //alternativa 3
            texto: "Indiferente.",
            afirmacao: "Corvinal",
        },
        { //alternativa 4
            texto: "Pula de alegria.",
            afirmacao: "Lufa-Lufa",
        },
    ]
    } //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Você acabou de comprar seu animal de estimação, qual você escolheu?",
        alternativas: [
        {//alternativa 1
            texto: "Uma coruja.",
            afirmacao: "Grifinória",
        },
        { //alternativa 2
            texto: "Um rato.",
            afirmacao: "Corvinal",
        },
        { //alternativa 3
            texto: "Um gato.",
            afirmacao: "Lufa-Lufa",
        },
        { //alternativa 4
            texto: "Uma cobra.",
            afirmacao: "Sonserina",
        },
    ]
    { //abre objeto de pergunta
        enunciado: "Você vê Harry Potter pela primeira vez, qual sua reação?",
        alternativas: [
        {//alternativa 1
            texto: "Peço um autógrafo e fotos.",
            afirmacao: "Grifinória",
        },
        { //alternativa 2
            texto: "Ele tem sangue impuro, é melhor ficar longe.",
            afirmacao: "Sonserina",
        },
        { //alternativa 3
            texto: "Sou tímido demais para falar com ele.",
            afirmacao: "Lufa-Lufa",
        },
        { //alternativa 4
            texto: "Fico admirada.",
            afirmacao: "Corvinal",
        },
    ]
    { //abre objeto de pergunta
        enunciado: "O que você veria no espelho de Oesed?",
        alternativas: [
        {//alternativa 1
            texto: "Eu rodeado de riqueza.",
            afirmacao: "Sonserina",
        },
        { //alternativa 2
            texto: "Eu rodeado de amigos e família.",
            afirmacao: "Lufa-Lufa",
        },
        { //alternativa 3
            texto: "Eu sabendo de tudo.",
            afirmacao: "Corvinal",
        },
        { //alternativa 4
            texto: "Eu vivendo grandes aventuras.",
            afirmacao: "Grifinória",
        },
    ]
    } //fecha objeto de pergunta
]; //fecha lista de pergunta

//Declaração de variáveis
let atual = 0; //variável que mantem o inice da pergunta atual no array 'perguntas'
let perguntaAtual; // variável que armazena a pergunta atual
let historiaFinal = ""; //String que acumula as afirmações selecionadas pelo usuário, formando uma narrativa final.

//Essa função tem como objetivo exibir a pergunta atual ou o resultado final se todas as perguntas tiverem sido respondidas.
function mostraPergunta() {
    if (atual >= perguntas.length) { //Verifica se o índice atual excede o número de perguntas disponíveis. Se sim, chama mostraResultado e retorna, encerrando a função.
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual]; //Atribui à variável perguntaAtual a pergunta atual do array perguntas.
    caixaPerguntas.textContent = perguntaAtual.enunciado; //Define o conteúdo de texto do elemento caixaPerguntas como o enunciado da pergunta atual.
    caixaAlternativas.textContent = ""; //Limpa o conteúdo do elemento caixaAlternativas.
    mostraAlternativas(); //Chama a função mostraAlternativas para exibir as alternativas da pergunta atual.
}

//Essa função tem como cobjetivo exibir as alternativas da pergunta atual como botões e definir a ação ao clicar neles.
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) { // Itera sobre cada alternativa da pergunta atual.
        const botaoAlternativas = document.createElement("button"); //Cria um novo elemento de botão para cada alternativa.
        botaoAlternativas.textContent = alternativa.texto; //Define o texto do botão como o texto da alternativa.
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); //Adiciona um ouvinte de eventos ao botão, que chama a função respostaSelecionada passando a alternativa selecionada quando o botão é clicado.
        caixaAlternativas.appendChild(botaoAlternativas); //Adiciona o botão ao elemento caixaAlternativas.
    }
}

//Essa função tem como objetivo processar a resposta selecionada, atualizar a narrativa final e avançar para a próxima pergunta.
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao; //Obtém a afirmação associada à alternativa selecionada.
    historiaFinal += afirmacoes + " "; //Adiciona a afirmação à historiaFinal.
    atual++; //Incrementa o índice da pergunta atual.
    mostraPergunta(); //Chama a função mostraPergunta para exibir a próxima pergunta.
}

//Essa função tem como objetivo exibir a narrativa final baseada nas respostas do usuário.
function mostraResultado() {
    caixaPerguntas.textContent = "De acordo com suas respostas, este é seu..."; //Define o conteúdo de texto do elemento caixaPerguntas para informar o usuário sobre o resultado.
    textoResultado.textContent = historiaFinal; //Define o conteúdo de texto do elemento textoResultado como a narrativa final acumulada.
    caixaAlternativas.textContent = ""; // Limpa o conteúdo do elemento caixaAlternativas.
}

mostraPergunta(); //Chama a função mostraPergunta para iniciar o questionário exibindo a primeira pergunta.