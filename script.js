const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
  button.addEventListener('click', () => {
    const atual = document.querySelector('.ativo');
    const proximo = document.getElementById('passo-' + button.dataset.proximo);
    atual.classList.remove('ativo');
    proximo.classList.add('ativo');
  });
});