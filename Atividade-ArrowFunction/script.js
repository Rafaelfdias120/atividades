// criar os preços
const precoGasolina = 6.4;
const precoEtanol = 5.2;
const precoDiesel = 5.8;

// pegar elementos
const tipoCombustivel = document.getElementById("combustivel");
const litrosInput = document.getElementById("litros");

// bloquear caracteres inválidos
litrosInput.addEventListener("input", () => {
  litrosInput.value = litrosInput.value.replace(/[^0-9.]/g, "");
});

// função principal
const atualizarValor = () => {
  let tipo = tipoCombustivel.value;
  console.log(tipo);

  let litros = parseFloat(litrosInput.value);

  const precos = {
    gasolina: precoGasolina,
    etanol: precoEtanol,
    diesel: precoDiesel,
  };

  const precoPorLitro = precos[tipo];

  if (precoPorLitro === undefined) {
    console.log("Escolha uma opção");
    return;
  }

  if (isNaN(litros) || litros <= 0) {
    document.getElementById("resultado").textContent =
      "Insira quantidade válida";
    return;
  }

  console.log(precoPorLitro);
  calcularValorAbastecimento(precoPorLitro, litros);
};

// função de cálculo
const calcularValorAbastecimento = (precoCombustivel, litros) => {
  let valorTotal = precoCombustivel * litros;

  document.getElementById("resultado").textContent =
    `Valor ${formatarMoeda(valorTotal)}`;
};

// eventos
tipoCombustivel.addEventListener("change", atualizarValor);
litrosInput.addEventListener("input", atualizarValor);

litrosInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    atualizarValor();
  }
});

// formatar moeda
const formatarMoeda = (valor) => {
  return (
    "R$ " +
    valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};