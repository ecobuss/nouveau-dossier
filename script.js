function addToCart() {
    alert("Produit ajouté au panier !");
}

function sendMessage() {
    const messageInput = document.getElementById('chat-input');
    const messages = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = messageInput.value;
    messages.appendChild(newMessage);
    messageInput.value = '';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message envoyé !");
});