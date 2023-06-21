// cria uma variável 'menu' que procura por uma tag que tenha a class "menu" 
const menu = document.querySelector('.menu');
// cria uma variável chamada 'botao' que procura por uma tag que tenha a class "botao-hamburguer" 
const botao = document.querySelector('.botao-hamburguer');
//adiciona um evento que espera por um click e quando detectar o click vai executar uma função estilo arrow 
botao.addEventListener('click', () => {
    //cria uma variável chamada 'visibilidade' que procura pelo atributo 'data-visible' no menu (.menu)
    const visibilidade = menu.getAttribute('data-visible');
    // basicamente diz que se visibilidade (data-visible) for igual a falso, ele vai mudar os valores dos seguintes atributos:
    if (visibilidade === "false") {
        menu.setAttribute('data-visible', true);
        botao.setAttribute('aria-expanded', true);
    // aqui diz que caso contrario ele mudará o valor dos seguintes atributos:
    } else {
        menu.setAttribute('data-visible', false);
        botao.setAttribute('aria-expanded', false);
    }
});