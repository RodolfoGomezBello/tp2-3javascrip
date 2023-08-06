document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const message = messageInput.value.trim();
        if (message !== "") {
            const messageElement = document.createElement("div");
            messageElement.className = "message";
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);

            // Limpiar el campo de entrada
            messageInput.value = "";

            // Desplazar el chat hacia abajo para mostrar el último mensaje
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
});
