// Alternar vistas entre Login y Registro
function toggleAuthMode() {
    const loginBox = document.getElementById('login-box');
    const registerBox = document.getElementById('register-box');
    
    loginBox.classList.toggle('active');
    registerBox.classList.toggle('active');
}

// Validación estricta de mayoría de edad (18 años)
function validarRegistro(event) {
    event.preventDefault();
    
    const fechaNacimientoInput = document.getElementById('reg-date').value;
    
    if (!fechaNacimientoInput) {
        alert("Por favor, introduce tu fecha de nacimiento.");
        return;
    }

    const fechaNacimiento = new Date(fechaNacimientoInput);
    const hoy = new Date();
    
    // Calcular edad exacta
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    // Filtrado de acceso
    if (edad < 18) {
        alert("ACCESO DENEGADO: Debes ser mayor de 18 años para registrarte en esta plataforma.");
    } else {
        alert("¡Registro validado con éxito! Redirigiendo a la comunidad...");
        window.location.href = 'index.html';
    }
}
