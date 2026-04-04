const contador = document.getElementById("contador");
const btnMais = document.getElementById("incrementar");
const btnMenos = document.getElementById("decrementar");

const inputTexto = document.getElementById("texto");
const qtdCaracteres = document.getElementById("qtdCaracteres");
const areaTextos = document.getElementById("areaTextos");

const tipoLista = document.getElementById("tipoLista");
const btnLista = document.getElementById("criarLista");
const areaListas = document.getElementById("areaListas");

const btnReset = document.getElementById("resetar");

let valor = 0;

// Incrementar
btnMais.addEventListener("click", () => {
  valor++;
  contador.textContent = valor;
});

// Decrementar
btnMenos.addEventListener("click", () => {
  if (valor > 0) {
    valor--;
    contador.textContent = valor;
  } else {
    alert("O contador já está em zero!");
  }
});

// Adicionar texto ao pressionar Enter
inputTexto.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (inputTexto.value.trim() !== "") { // evita vazio
      const p = document.createElement("p");
      p.textContent = inputTexto.value;

      areaTextos.appendChild(p);
      inputTexto.value = "";
    }
  }
});

// Contador de caracteres (sem espaço)
inputTexto.addEventListener("input", () => {
  let texto = inputTexto.value.replace(/\s/g, "");
  qtdCaracteres.textContent = texto.length;
});

// Criar lista dinâmica
btnLista.addEventListener("click", () => {
  const tipo = tipoLista.value; // "ul" ou "ol"

  const lista = document.createElement(tipo);
  const item = document.createElement("li");

  item.textContent = "Novo item";

  lista.appendChild(item);
  areaListas.appendChild(lista);
});

// Reset
btnReset.addEventListener("click", () => {
  valor = 0;
  contador.textContent = 0;

  areaTextos.innerHTML = "";
  areaListas.innerHTML = "";

  qtdCaracteres.textContent = 0;
  inputTexto.value = "";
});