let jogadores = [];
let editIndex = null;

const form = document.getElementById("formJogador");
const tabela = document.getElementById("tabelaJogadores");
const totalCaixa = document.getElementById("totalCaixa");
const modoSelect = document.getElementById("modo");
const addonSection = document.getElementById("addonSection");
const addonEditContainer = document.getElementById("addonEditContainer");

modoSelect.addEventListener("change", () => {
  const modo = modoSelect.value;
  addonSection.style.display = modo === "torneio" ? "block" : "none";
  addonEditContainer.style.display = modo === "torneio" ? "block" : "none";
  renderizar();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const pix = document.getElementById("pix").value.trim();
  const entrada = parseFloat(document.getElementById("entradaPadrao").value) || 0;

  if (!nome || !pix) return;

  jogadores.push({ nome, pix, entrada, reentradas: 0, addon: false, saida: 0 });
  form.reset();
  renderizar();
});

function renderizar() {
  tabela.innerHTML = "";
  let total = 0;
  const modo = modoSelect.value;
  const valorReentrada = parseFloat(document.getElementById("reentradaPadrao").value) || 0;
  const valorAddon = parseFloat(document.getElementById("addonPadrao").value) || 0;

  jogadores.forEach((jogador, index) => {
    const { nome, pix, entrada, reentradas, addon, saida } = jogador;
    const totalEntrada = entrada + (reentradas * valorReentrada) + (addon ? valorAddon : 0);
    const lucro = saida - totalEntrada;
    total += totalEntrada;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${nome}</td>
      <td>${pix}</td>
      <td>R$ ${entrada.toFixed(2)}</td>
      <td>${reentradas}</td>
      <td>${modo === "torneio" ? (addon ? "Sim" : "Não") : "-"}</td>
      <td>R$ ${saida.toFixed(2)}</td>
      <td class="${lucro >= 0 ? 'text-success' : 'text-danger'}">R$ ${lucro.toFixed(2)}</td>
      <td><button class="btn btn-warning btn-sm" onclick="abrirModal(${index})">Editar</button></td>
    `;
    tabela.appendChild(tr);
  });
  totalCaixa.textContent = `R$ ${total.toFixed(2)}`;
}

function abrirModal(index) {
  editIndex = index;
  const jogador = jogadores[index];
  document.getElementById("reentradasEdit").value = jogador.reentradas;
  document.getElementById("saidaEdit").value = jogador.saida;
  document.getElementById("addonEdit").checked = jogador.addon;

  const modo = modoSelect.value;
  addonEditContainer.style.display = modo === "torneio" ? "block" : "none";

  const modal = new bootstrap.Modal(document.getElementById("modalEditar"));
  modal.show();
}

document.getElementById("salvarEdicao").addEventListener("click", () => {
  const reentradas = parseInt(document.getElementById("reentradasEdit").value) || 0;
  const addon = document.getElementById("addonEdit").checked;
  const saida = parseFloat(document.getElementById("saidaEdit").value) || 0;
  if (editIndex !== null) {
    jogadores[editIndex].reentradas = reentradas;
    jogadores[editIndex].addon = addon;
    jogadores[editIndex].saida = saida;
    renderizar();
    bootstrap.Modal.getInstance(document.getElementById("modalEditar")).hide();
  }
});

// Evento para excluir jogador
document.getElementById("excluirJogador").addEventListener("click", () => {
    if (editIndex !== null) {
      if (confirm("Tem certeza que deseja remover este jogador?")) {
        jogadores.splice(editIndex, 1);
        renderizar();
        bootstrap.Modal.getInstance(document.getElementById("modalEditar")).hide();
      }
    }
  });
  