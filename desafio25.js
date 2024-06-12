// Array inicial de desenhos animados dos anos 2000
let desenhosAnimados = [
  'Bob Esponja',
  'Os Padrinhos Mágicos',
  'Kim Possible',
  'As Aventuras de Jackie Chan',
  'Hora de Aventura',
  'Avatar: A Lenda de Aang',
  'Ben 10',
  'X-Men: Evolution',
  'Duck Dodgers',
  'Danny Phantom'
];

let indiceSubstituicao = 0; // Índice para controlar a substituição

// Função para exibir a lista de desenhos animados
function exibirLista() {
  const lista = document.getElementsByClassName('lista-desenhos')[0];
  lista.innerHTML = ''; // Limpa a lista antes de preenchê-la novamente

  desenhosAnimados.forEach(desenho => {
      const item = document.createElement('li');
      item.textContent = desenho;
      lista.appendChild(item);
  });
}

// Função para adicionar um novo desenho
function adicionarDesenho() {
  const novoDesenho = document.getElementById('novo-desenho');
  if (novoDesenho.value.trim() !== '') {
      desenhosAnimados[indiceSubstituicao] = novoDesenho.value; // Substitui o elemento no índice atual
      indiceSubstituicao = (indiceSubstituicao + 1) % desenhosAnimados.length; // Atualiza o índice para a próxima substituição
      exibirLista(); // Atualiza a exibição da lista
      novoDesenho.value = ''; // Limpa o input
  }
}

// Exibe a lista inicial quando a página carrega
window.onload = exibirLista;

// primeiro erro está na array, fechasse array com [], e falta as aspas em "Ben 10"
// o segundo erro está na constante lista, o metodo é "getElementsByClassName() "
// o terceiro erro está na constante item, falta aspas em ('li')
// o quarto erro está no if, o correto é (novoDesenho.value.trim() !== '')
// o quinto erro está em "exibirLista;" o correto é exibirLista();
// o sexto erro é no final do if, o termo  "document.getElementById('novo-desenho').value = ''; " pode ser trocado por novoDesenho.value
// o setimo é window.onload, o certo é  window.onload = exibirLista;
// o oitavo erro é em " desenhosAnimados[indiceSubstituicao] = novoDesenho;" tem que colocar novoDesenho.value
// o ultimo erro é no html, em vez de "id", deve-se trocar por class