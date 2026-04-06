// MENU
let opcao = parseInt(
  prompt(
    `Escolha o exercício:
1 - Adivinhar número
2 - Pedra, Papel ou Tesoura
3 - Tabuada
4 - Triângulo de asteriscos
5 - Soma da série`,
  ),
);

// ==========================
// 1 - ADIVINHAR NÚMERO
// ==========================
if (opcao === 1) {
  const numeroSecreto = Math.floor(Math.random() * 20) + 1;
  let tentativa;

  while (tentativa !== numeroSecreto) {
    tentativa = parseInt(prompt("Adivinhe o número de 1 a 20:"));

    if (tentativa > numeroSecreto) {
      console.log("Muito alto!");
    } else if (tentativa < numeroSecreto) {
      console.log("Muito baixo!");
    } else {
      console.log("Acertou! 🎉");
    }
  }
}

// ==========================
// 2 - PEDRA PAPEL TESOURA
// ==========================
else if (opcao === 2) {
  const opcoes = ["pedra", "papel", "tesoura"];

  const usuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();
  const computador = opcoes[Math.floor(Math.random() * 3)];

  console.log("Computador escolheu:", computador);

  if (usuario === computador) {
    console.log("Empate!");
  } else if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "papel" && computador === "pedra") ||
    (usuario === "tesoura" && computador === "papel")
  ) {
    console.log("Você venceu! 🎉");
  } else {
    console.log("Você perdeu 😢");
  }
}

// ==========================
// 3 - TABUADA
// ==========================
else if (opcao === 3) {
  const numero = parseInt(prompt("Digite um número:"));

  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// ==========================
// 4 - TRIÂNGULO
// ==========================
else if (opcao === 4) {
  const linhas = parseInt(prompt("Digite o número de linhas:"));

  for (let i = 1; i <= linhas; i++) {
    let linha = "";

    for (let j = 1; j <= i; j++) {
      linha += "*";
    }

    console.log(linha);
  }
}

// ==========================
// 5 - SOMA DA SÉRIE
// ==========================
else if (opcao === 5) {
  const termos = parseInt(prompt("Digite a quantidade de termos:"));

  let numero = "";
  let soma = 0;
  let expressao = "";

  for (let i = 1; i <= termos; i++) {
    numero += "1";
    let valor = parseInt(numero);

    soma += valor;
    expressao += valor;

    if (i < termos) {
      expressao += " + ";
    }
  }

  console.log(expressao);
  console.log("A soma é:", soma.toLocaleString("pt-BR"));
}

// ==========================
// OPÇÃO INVÁLIDA
// ==========================
else {
  console.log("Opção inválida");
}
