document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");
    const commentsContainer = document.querySelector(".comments");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value;
        const comment = commentInput.value;
        const date = new Date().toLocaleString();

        if (name && comment) {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `
                <strong>${name}</strong> - ${date}<br>
                ${comment}
            `;
            commentsContainer.appendChild(commentElement);

            nameInput.value = "";
            commentInput.value = "";
        }
    });
});

/*const enviarMensajeBtn = document.getElementById('enviarMensaje');
const mensajeInput = document.getElementById('mensaje');
const cuerpoChat = document.querySelector('.cuerpo-chat');
const ventanaEmergente = document.getElementById('ventanaEmergente');
const cerrarVentanaBtn = document.getElementById('cerrarVentana');*/


/*Chat Emergente*/

/*const mostrarChat1 = document.getElementById('mostrarChat');


let ventanaVisible = false;

mostrarChat1.addEventListener('click', () => {
    if (!ventanaVisible) {
        ventanaEmergente.style.display = 'block';
    } else {
        ventanaEmergente.style.display = 'none';
    }
    ventanaVisible = !ventanaVisible;
});

function agregarTimestamp() {
    const timestamp = new Date().toLocaleString();
    const timestampElement = document.createElement('span');
    timestampElement.classList.add('timestamp');
    timestampElement.textContent = timestamp;
    return timestampElement;
}

const URL = "https://api.openai.com/v1/chat/completions"
const MODEL = "gpt-3.5-turbo"
const TOKEN = "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"
let body = {
    model: MODEL,
    messages: [{ role: "system", content: "eres un guía turístico colombiano y tienes que ayudar a las personas que te escriban" }]
}

function enviarMensaje() {
    const mensaje = mensajeInput.value.trim(); // Tratar el mensaje de entrada

    // Evitar enviar mensajes vacíos
    if (mensaje === '') {
        return;
    }

    let header = {
        "Authorization": "Bearer " + TOKEN,
        "Content-Type": "application/json"
    };

    let mensajeUsuario = {
        role: "user",
        content: mensaje
    };

    body.messages.push(mensajeUsuario);

    // Crear elementos para el nuevo mensaje
    const nuevoMensaje = document.createElement('h7');
    const mensajeTexto = document.createElement('h6');
    mensajeTexto.textContent = mensaje;
    mensajeTexto.classList.add('mensaje_chat');
    const timestampElement = agregarTimestamp();

    nuevoMensaje.appendChild(mensajeTexto);
    nuevoMensaje.appendChild(timestampElement);

    // Realizar la solicitud a la API
    fetch(URL, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    })
        .then(res => res.json()) // Parsear la respuesta JSON
        .then(data => {
            // Manejar la respuesta de la API
            console.log(data);

            const respuestaMensaje = document.createElement('p');
            respuestaMensaje.textContent = data.choices[0].message.content;
            respuestaMensaje.classList.add('mensaje_chat');

            nuevoMensaje.appendChild(respuestaMensaje);
            cuerpoChat.appendChild(nuevoMensaje);
            cuerpoChat.scrollTop = cuerpoChat.scrollHeight;
            mensajeInput.value = '';
        })
        .catch(error => {
            // Manejar errores
            console.error("Error en la solicitud a la API:", error);
        });
}

// Asociar función a eventos
enviarMensajeBtn.addEventListener('click', enviarMensaje);

mensajeInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        enviarMensaje();
    }
});

cerrarVentanaBtn.addEventListener('click', () => {
    ventanaEmergente.style.display = 'none';
    ventanaVisible = false;
});*/







/*const URL = "https://api.openai.com/v1/chat/completions"
const MODEL = "gpt-3.5-turbo"
const TOKEN = "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"
let body = {
    model: MODEL,
    messages: [{ role: "system", content: "eres un guia turisitco Colombiano y tienes que ayudar a las personas que te escriban" }]
}

function enviarMensaje() {
    let header = {
        "Authorization": "Bearer " + TOKEN,
        "Content-Type": "application/json"
    };

    const mensaje = mensajeInput.value.trim(); // Tratar el mensaje de entrada

    // Evitar enviar mensajes vacíos
    if (mensaje === '') {
        return;
    }

    let mensajeUsuario = {
        role: "user",
        content: mensaje
    };

    body.messages.push(mensajeUsuario);
    console.log(body.messages);

    // Crear elementos para el nuevo mensaje
    const nuevoMensaje = document.createElement('h7'); // Cambiado de 'h7' a 'div' para la estructura HTML válida
    const mensajeTexto = document.createElement('p');
    mensajeTexto.textContent = mensaje;
    mensajeTexto.classList.add('mensaje_chat');
    const timestampElement = agregarTimestamp();

    nuevoMensaje.appendChild(mensajeTexto);
    nuevoMensaje.appendChild(timestampElement);

    // Realizar la solicitud a la API
    fetch(URL, {
        method: "POST",
        headers: header,
        body: JSON.stringify(body)
    })
        .then(res => res.json()) // Parsear la respuesta JSON
        .then(data => {
            // Manejar la respuesta de la API
            console.log(data);

            const respuestaMensaje = document.createElement('p'); // Cambiado de 'h6' a 'p' para la estructura HTML válida
            respuestaMensaje.textContent = data.choices[0].message.content;
            respuestaMensaje.classList.add('mensaje_chat');

            nuevoMensaje.appendChild(respuestaMensaje);
            cuerpoChat.appendChild(nuevoMensaje);
            cuerpoChat.scrollTop = cuerpoChat.scrollHeight;
            mensajeInput.value = '';
        })
        .catch(error => {
            // Manejar errores
            console.error("Error en la solicitud a la API:", error);
        });
}

// Asociar función a eventos
enviarMensajeBtn.addEventListener('click', enviarMensaje);

mensajeInput.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        enviarMensaje();
    }
});

cerrarVentanaBtn.addEventListener('click', () => {
    ventanaEmergente.style.display = 'none';
    ventanaVisible = false;
});*/

const mostrarChat1 = document.getElementById("mostrarChat");
const enviarMensajeBtn = document.getElementById("enviarMensaje");
const mensajeInput = document.getElementById("mensaje");
const cuerpoChat = document.querySelector(".cuerpo-chat");
const ventanaEmergente = document.getElementById("ventanaEmergente");
const cerrarVentanaBtn = document.getElementById("cerrarVentana");

let ventanaVisible = false;
mostrarChat1.addEventListener("click", () => {
    if (!ventanaVisible) {
        ventanaEmergente.style.display = "block";
        ventanaVisible = true;
    } else {
        ventanaEmergente.style.display = "none";
        ventanaVisible = false;
    }
});


function agregarTimestamp() {
    const timestamp = new Date().toLocaleString();
    const timestampElement = document.createElement("span");
    timestampElement.classList.add("timestamp");
    timestampElement.textContent = timestamp;
    return timestampElement;
}

const URL = "https://api.openai.com/v1/chat/completions"
const MODEL = "gpt-3.5-turbo"
const TOKEN = "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"
let body = {
    model: MODEL,
    messages: [{ role: "system", content: "eres un guía turístico colombiano y tienes que ayudar a las personas que te escriban. Limita tu respuesta a quinientos caracteres" }]
}

function enviarMensaje() {
    let header = {
        "Authorization": "Bearer " + TOKEN,
        "Content-Type": "application/json"
    }
    const mensaje = mensajeInput.value;

    let mensajeUsuario = {
        role: "user", content: mensaje
    }

    body.messages.push(mensajeUsuario)
    
    if (mensaje.trim() !== "") {
        mensajeInput.value = ""

        const nuevoMensaje = document.createElement("h7");
        const mensajeTexto = document.createElement("p");
        mensajeTexto.textContent = mensaje;
        mensajeTexto.classList.add("mensaje_chat");
        const timestampElement = agregarTimestamp();
        nuevoMensaje.appendChild(mensajeTexto);
        nuevoMensaje.appendChild(timestampElement);
        cuerpoChat.appendChild(nuevoMensaje)
        cuerpoChat.scrollTop = cuerpoChat.scrollHeight;

        fetch(URL, { method: "POST", headers: header, body: JSON.stringify(body) }).then(res => {
            res.json().then(jsonData => {

                let mensajeChatGPT = jsonData.choices[0].message.content
                body.messages.push(jsonData.choices[0].message)

                const respuestaMensaje = document.createElement("h6");
                respuestaMensaje.textContent = mensajeChatGPT
                respuestaMensaje.classList.add("mensaje_chat")
                cuerpoChat.appendChild(respuestaMensaje)
                cuerpoChat.scrollTop = cuerpoChat.scrollHeight;
            })
        })

        
    }
}

enviarMensajeBtn.addEventListener("click", enviarMensaje);
mensajeInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        enviarMensaje();
    }
});

cerrarVentanaBtn.addEventListener("click", () => {
    ventanaEmergente.style.display = "none";
    ventanaVisible = false;
});

