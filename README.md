# memory-game
Desafio Jogo da Memória - DIO
🧠 Jogo da Memória

Desenvolvi este projeto como forma de praticar conceitos de HTML, CSS e JavaScript, criando um jogo da memória interativo e divertido.
O objetivo é simples: encontrar todos os pares de emojis iguais no menor tempo possível.

⚙️ O que eu fiz

Criei a estrutura principal do projeto com um arquivo index.html, onde coloquei o título do jogo, o tabuleiro das cartas e um botão para reiniciar a partida.
Toda a lógica do jogo foi desenvolvida no arquivo engine.js, que controla o embaralhamento dos emojis, o clique nas cartas, a verificação de pares e a exibição da mensagem de vitória.

Também adicionei efeitos sonoros para deixar a experiência mais envolvente — agora, sempre que uma carta é virada ou desvirada, o jogador ouve um som correspondente.

Os sons que usei foram:

flip.m4a → toca quando uma carta é virada;

flipback.m4a → toca quando as cartas não coincidem e são fechadas novamente.

Esses arquivos de áudio ficam dentro da pasta src/sounds, e são chamados diretamente pelo JavaScript.

🎨 Estilo e animação

Usei dois arquivos de estilo:

reset.css para padronizar margens e espaçamentos;

main.css para definir o layout, as cores e a animação das cartas com transform: rotateY().

As classes .boxOpen e .boxMatch controlam o comportamento visual das cartas, mostrando quando uma carta está virada e quando um par foi encontrado.

🕹️ Como o jogo funciona

Assim que a página é carregada, os emojis são embaralhados e distribuídos nas cartas.
Cada vez que eu clico em uma carta:

Ela vira e toca um som;

Quando duas cartas estão abertas, o jogo verifica se são iguais;

Se forem diferentes, elas voltam para a posição inicial com um som de “flipback”;

Quando todos os pares são encontrados, aparece a mensagem “Você venceu!”.

Também adicionei um botão “RESET GAME” para reiniciar o jogo a qualquer momento.

🚀 Tecnologias que utilizei

HTML5 → estrutura do jogo

CSS3 → design e animações

JavaScript (ES6) → lógica, manipulação do DOM e controle dos sons
