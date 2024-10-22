// Seletor do botão para abrir o modal
const btnAbrirModal = document.getElementById('btn-abrir-modal');

// Seletor do modal
const modal = document.getElementById('modal');

// Seletor do botão para fechar o modal
const closeBtn = document.querySelector('.close');
const closeBtnConfirm = document.querySelector('.closeConfirm');
const closeBtnView = document.querySelector('.closeView');

// Função para abrir o modal
function abrirModal() {
  modal.style.display = 'block'; // Exibe o modal
}

// Função para fechar o modal
function fecharModal() {
  modal.style.display = 'none'; // Oculta o modal
  modalConfirm.style.display = 'none';
  modalView.style.display = 'none';
}

// Adiciona evento de clique ao botão para abrir o modal
btnAbrirModal.addEventListener('click', abrirModal);

// Adiciona evento de clique ao botão para fechar o modal
closeBtn.addEventListener('click', fecharModal);
closeBtnConfirm.addEventListener('click', fecharModal);
closeBtnView.addEventListener('click', fecharModal);

// Adiciona evento de clique fora do modal para fechar o modal
window.addEventListener('click', function(event) {
  if (event.target == modal || event.target == modalConfirm || event.target == modalView) {
    fecharModal();
  }
});