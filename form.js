var registroForm = document.getElementById('registroForm');
var registroButton = document.getElementById('registro');
var inicioSesionForm = document.getElementById('inicioSesionForm');
var inicioSesionButton = document.getElementById('inicioSesion');
var mensaje = document.getElementById('mensaje');

registroButton.addEventListener('click', function () {
    var nombre = registroForm.nombre.value;
    var correo = registroForm.correo.value;
    var fechaNacimiento = registroForm.fechaNacimiento.value;
    var contrasena = registroForm.contrasena.value;

    // Validar el correo electrónico
    if (!validateEmail(correo)) {
        mensaje.textContent = 'Por favor, ingresa una dirección de correo electrónico válida.';
        return;
    }

    // Validar la fecha de nacimiento
    if (!validateAge(fechaNacimiento)) {
        return;
    }

    // Validar la contraseña
    if (contrasena.length < 8 || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(contrasena)) {
        mensaje.textContent = 'La contraseña debe tener al menos 8 caracteres y contener al menos un carácter especial.';
        return;
    }

    // Comprobar si el usuario ya existe en Local Storage
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombre) {
            window.alert ('El usuario ya existe.');
            return;
        }
    }

    // Agregar nuevo usuario
    usuarios.push({ nombre: nombre, correo: correo, fechaNacimiento: fechaNacimiento, contrasena: contrasena });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    // Limpiar los campos del formulario después de un registro exitoso
    registroForm.reset();

    mensaje.textContent = 'Registro exitoso. Ahora puedes iniciar sesión.';
});

inicioSesionButton.addEventListener('click', function () {
    var nombreInicio = inicioSesionForm.nombreInicio.value;
    var contrasenaInicio = inicioSesionForm.contrasenaInicio.value;

    // Obtener usuarios registrados
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar al usuario
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombreInicio && usuarios[i].contrasena === contrasenaInicio) {
            mensaje.textContent = 'Inicio de sesión exitoso. ¡Bienvenido, ' + nombreInicio + '!';

            // Limpiar los campos del formulario después de un inicio de sesión exitoso
            inicioSesionForm.reset();

            return;
        }
    }

    mensaje.textContent = 'Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.';
});

function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

function validateAge(fechaNacimiento) {
    var fechaActual = new Date();
    var anoActual = parseInt(fechaActual.getFullYear());
    var mesActual = parseInt(fechaActual.getMonth()) + 1;
    var diaActual = parseInt(fechaActual.getDate());

    var anoNacimiento = parseInt(fechaNacimiento.substring(0, 4));
    var mesNacimiento = parseInt(fechaNacimiento.substring(5, 7));
    var diaNacimiento = parseInt(fechaNacimiento.substring(8, 10));

    var edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    if (edad < 18) {
        window.alert("Debes ser mayor de edad");
        return false;
    }

    return true;
}