let registroForm = document.getElementById("registroForm");
let registroButton = document.getElementById("registro");
let inicioSesionForm = document.getElementById("inicioSesionForm");
let inicioSesionButton = document.getElementById("inicioSesion");
let mensaje = document.getElementById("mensaje");

registroButton.addEventListener("click", function () {
    let nombre = registroForm.nombre.value;
    let correo = registroForm.correo.value;
    let fechaNacimiento = registroForm.fechaNacimiento.value;
    let contrasena = registroForm.contrasena.value;

    if (!validateEmail(correo)) {
        mensaje.textContent = "Por favor, ingresa una dirección de correo electrónico válida.";
        return;
    }

    if (!validateAge(fechaNacimiento)) {
        return;
    }

    if (contrasena.length < 8 || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(contrasena)) {
        mensaje.textContent = "La contraseña debe tener al menos 8 caracteres y contener al menos un carácter especial.";
        return;
    }


    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombre) {
            window.alert ("El usuario ya existe.");
            return;
        }
    }

    usuarios.push({ nombre: nombre, correo: correo, fechaNacimiento: fechaNacimiento, contrasena: contrasena });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    registroForm.reset();

    mensaje.textContent = "Registro exitoso. Ahora puedes iniciar sesión.";
});

inicioSesionButton.addEventListener("click", function () {
    let nombreInicio = inicioSesionForm.nombreInicio.value;
    let contrasenaInicio = inicioSesionForm.contrasenaInicio.value;


    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombreInicio && usuarios[i].contrasena === contrasenaInicio) {
            mensaje.textContent = "Inicio de sesión exitoso. ¡Bienvenido, " + nombreInicio + "!";


            inicioSesionForm.reset();

            let paginaIndexButton = document.getElementById("paginaIndexButton");
            paginaIndexButton.style.display = "block";
            paginaIndexButton.addEventListener("click", function () {
            window.location.href = "grupo4.html"; 
            });
            

            inicioSesionForm.reset();
            

            return;
        }
    }

    mensaje.textContent = "Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
});

function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

function validateAge(fechaNacimiento) {
    let fechaActual = new Date();
    let anoActual = parseInt(fechaActual.getFullYear());
    let mesActual = parseInt(fechaActual.getMonth()) + 1;
    let diaActual = parseInt(fechaActual.getDate());

    let anoNacimiento = parseInt(fechaNacimiento.substring(0, 4));
    let mesNacimiento = parseInt(fechaNacimiento.substring(5, 7));
    let diaNacimiento = parseInt(fechaNacimiento.substring(8, 10));

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    if (edad < 18) {
        window.alert("Debes ser mayor de edad");
        return false;
    }

    return true;
}