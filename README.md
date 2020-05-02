# Mobile-Assncrono
Exercício de JS
JAVASCRIPT MOBILE - LISTA DE FUNÇÕES ASSÍNCRONAS E SÍNCRONAS
1) Crie uma função despertador que irá solicitar um tempo em ms para o usuário e irá
disparar uma alerta depois deste tempo
2) Crie uma função “Avisar para Tomar Água” que deverá exibir uma mensagem em
um alerta de 1 em um minuto para lembrar o usuário do seu aplicativo de tomar
água.
3) Crie uma página HTML com um parágrafo e um botão Carregar que ao ser clicado
adicionará uma imagem “carregando” ao parágrafo e executar uma função que após
500ms removerá a imagem carregando e adicionará a frase “Carregado com
sucesso”
4) Escreva uma função escrevaNumeros(inicio,fim) que imprima um número por
segundo começando do início e terminando no fim
5) Faça duas variantes dessa função, utilizando setInterval e utilizando setTimeout
aninhado.
6) No código abaixo tem uma função setTimeout agendada e depois um cálculo que
demora 100ms para acabar. Quando será executada a função agendada?
Depois do Loop
Antes do Loop
No começo do loop
O que a mensagem de alerta irá mostrar?
Código:
let i = 0;
setTimeout(() => alert(i), 100); // ?
// Assuma que essa função demore mais que 100ms para executar
for(let j = 0; j < 100000000; j++) {
i++;
}
7) Crie uma requisição a API
http://www.recipepuppy.com/api/?i=SEUALIMENTOPREFERIDOEMINGLÊS
utilizando o conceito de Promises e o Fetch API e renderize informações sobre
receitas dos seus alimentos no HTML.
8) Faça a mesma requisição da questão 7 utilizando o conceito de Async Await
