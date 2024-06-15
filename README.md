## Desafio 25 - Tema: CORREÇÃO DOS 7 ERROS

<p align="justify">

ENUNCIADO:Uma das funções de um desenvolvedor é conseguir identificar erros e consertá-los.
Você recebeu um código que possui 7 erros, encontre os erros e faça com que o código seja executado normalmente.

LINK DO DESAFIO: https://github.com/thalitaio/jogo7erros/tree/main

O objetivo deste desafio é desafiar a encontrar os erros no código, no desafio em questão realizei algumas mudanças para o código executar perfeitamente, e deixarei abaixo explicado:

1-mudança: A primeira correção foi feita na array, as arrays sempre deve colocar colchetes, no código estava em parenteses, e também faltava aspas no "Ben 10"

2-mudança: A segunda correção foi feita na constante lista, o método em questão é "getElementsByClassName()"

3-mudança: A terceiro mudança está na constante item, falta aspas em ('li')

4-mudança: A quarta mudança foi feito no if, o correto é (novoDesenho.value.trim() !== '')

5-mudança: A quinta mudança foi feita em "exibirLista;" o faltaram os parenteses para no método, exibirLista();

6-mudança: No final do if, o termo "document.getElementById('novo-desenho').value = '';" foi substituido por "novoDesenho.value"

7-mudança: A sétima mudança foi feita em "window.onload", foi substituido por "window.onload = exibirLista;"

8-mudança: Em "desenhosAnimados[indiceSubstituicao] = novoDesenho;" coloquei "novoDesenho.value"

9-mudança: A última mudança descobri muito por a caso, diria que foi muita sorte, foi de maneira sem pensar troquei "id" por "class" no html, e como consequencia o código executou.

</p>
