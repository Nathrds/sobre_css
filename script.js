var button = document.getElementById('read_button');

//ativer o leia mais
button.addEventListener('click', function() {
    var card = document.querySelector('.card');
    card.classList.toggle('active');

//mudar o nome do botão para voltar
    if (card.classList.contains('active')) {
        return button.textContent = 'Leia Menos';
    }

    button.textContent = 'Leia Mais';
});
