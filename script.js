document.getElementById('emailLink').addEventListener('click', function(event) {
    event.preventDefault();  // Evita que o link execute sua ação padrão
    
    // Obtém o endereço de e-mail
    var email = this.textContent;
    
    // Cria um elemento temporário para copiar o texto
    var tempInput = document.createElement('input');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    // Obtém a posição do link
    var rect = this.getBoundingClientRect();
    
    // Mostra a mensagem pop-up na posição correta
    var popup = document.getElementById('popupMessage');
    popup.style.left = (rect.right + 10) + 'px'; // 10px de margem à direita
    popup.style.top = rect.top + 'px';
    popup.style.display = 'block';
    
    // Remove a mensagem pop-up após 2 segundos
    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
});
