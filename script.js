document.getElementById('meuBotao').addEventListener('click', function() {
  const msg = document.getElementById('mensagem');
  msg.innerText = 'Você clicou no botão!';
  msg.style.color = '#4CAF50';
  msg.style.fontWeight = 'bold';
});
