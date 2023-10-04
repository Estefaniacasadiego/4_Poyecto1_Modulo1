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


/*Chat Emergente*/

const mostrarChat1 = document.getElementById('mostrarChat');
const enviarMensajeBtn = document.getElementById('enviarMensaje');
const mensajeInput = document.getElementById('mensaje');
const cuerpoChat = document.querySelector('.cuerpo-chat');
const ventanaEmergente = document.getElementById('ventanaEmergente');
const cerrarVentanaBtn = document.getElementById('cerrarVentana');

let ventanaVisible = false;

mostrarChat1.addEventListener('click', () => {
    if (!ventanaVisible) {
        ventanaEmergente.style.display = 'block';
        ventanaVisible = true;
    } else {
        ventanaEmergente.style.display = 'none';
        ventanaVisible = false;
    }
});

function agregarTimestamp() {
    const timestamp = new Date().toLocaleString();
    const timestampElement = document.createElement('span');
    timestampElement.classList.add('timestamp');
    timestampElement.textContent = timestamp;
    return timestampElement;
}

function enviarMensaje() {
    const mensaje = mensajeInput.value;
    if (mensaje.trim() !== '') {
        const nuevoMensaje = document.createElement('h7');
        const mensajeTexto = document.createElement('p');
        mensajeTexto.textContent = mensaje;
        mensajeTexto.classList.add('mensaje_chat');
        const timestampElement = agregarTimestamp();
        nuevoMensaje.appendChild(mensajeTexto);
        nuevoMensaje.appendChild(timestampElement);

        if (mensaje.trim() == '1') {
            const respuestaMensaje = document.createElement('h6');
            const link = document.createElement('a');            
            link.href = 'https://maps.app.goo.gl/dZHZehJbmSgHkq8D9';
            link.textContent = 'Esta es su ubicación para Caño Cristales';
            link.target = 'https://maps.app.goo.gl/dZHZehJbmSgHkq8D9';            
            respuestaMensaje.appendChild(link);
            nuevoMensaje.appendChild(respuestaMensaje);
        } else if (mensaje.trim() == '2') {
            const respuestaMensaje = document.createElement('h6');
            const link = document.createElement('a');
            link.href = 'https://maps.app.goo.gl/Suk7ZxKYN5y7P57EA';
            link.textContent = 'Esta es su ubicación para Piedra Peñol';
            link.target = 'https://maps.app.goo.gl/Suk7ZxKYN5y7P57EA';
            respuestaMensaje.appendChild(link);
            nuevoMensaje.appendChild(respuestaMensaje);
        } else if (mensaje.trim() == '3') {          
            const respuestaMensaje = document.createElement('h6');
            const link = document.createElement('a');
            link.href = 'https://maps.app.goo.gl/WspG3Z8vjCGMSsMFA';
            link.textContent = 'Esta es su ubicación para Monserrate';
            link.target = 'https://maps.app.goo.gl/WspG3Z8vjCGMSsMFA';
            respuestaMensaje.appendChild(link);
            nuevoMensaje.appendChild(respuestaMensaje);
        } else {
            const respuestaMensaje = document.createElement('h6');
            respuestaMensaje.textContent = 'Inténtalo de nuevo';
            nuevoMensaje.appendChild(respuestaMensaje);
        }

        cuerpoChat.appendChild(nuevoMensaje);
        cuerpoChat.scrollTop = cuerpoChat.scrollHeight;
        mensajeInput.value = '';
    }
}
enviarMensajeBtn.addEventListener('click', enviarMensaje);

mensajeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        enviarMensaje();
    }
});

cerrarVentanaBtn.addEventListener('click', () => {
    ventanaEmergente.style.display = 'none';
    ventanaVisible = false;
});