const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const messageArea = document.querySelector(".message-area");

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {

    const message = messageInput.value.trim();

    if (!message) return;

    addUserMessage(message);

    messageInput.value = "";

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: message
                })
            }
        );

        const data = await response.json();

        addBotMessage(data.reply);

    } catch (error) {

        addBotMessage(
            "Unable to connect to AI Mentor."
        );

        console.error(error);
    }
}

function addUserMessage(text) {

    const div = document.createElement("div");

    div.classList.add(
        "message",
        "user-message"
    );

    div.textContent = text;

    messageArea.appendChild(div);

    messageArea.scrollTop =
        messageArea.scrollHeight;
}

function addBotMessage(text) {

    const div = document.createElement("div");

    div.classList.add(
        "message",
        "bot-message"
    );

    div.textContent = text;

    messageArea.appendChild(div);

    messageArea.scrollTop =
        messageArea.scrollHeight;
}
