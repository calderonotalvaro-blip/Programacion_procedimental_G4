function ValidarDatos() {
    // 1. Declaración de variables obteniendo los valores del HTML
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let tipoDocumento = document.getElementById("txtTipoDoc").value;
    let numeroDocumento = document.getElementById("txtNumDoc").value;
    let telefono = document.getElementById("txtTelefono").value;
    let correo = document.getElementById("txtCorreo").value;
    let genero = document.getElementById("txtGenero").value;
    let cargo = document.getElementById("txtCargo").value;
    let fechaNacimiento = document.getElementById("txtFechaNac").value;
    let contrasena = document.getElementById("txtContrasena").value;

    // 2. Validación de Campos Vacíos
    if (!nombre.trim() || !apellido.trim() || !tipoDocumento.trim() || !numeroDocumento.trim() || 
        !telefono.trim() || !correo.trim() || !genero.trim() || !cargo.trim() || 
        !fechaNacimiento.trim() || !contrasena.trim()) {
        
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacíos',
            text: 'Por favor, complete todos los campos del formulario de usuarios.'
        });
        return; // Detiene la ejecución aquí si falta algo
    }

    // 3. Expresiones Regulares para las restricciones de texto y números
    const soloNumeros = /^[0-9]+$/;
    const sinNumeros = /^[^0-9]+$/;

    // Validación: Nombre (No debe permitir números)
    if (!sinNumeros.test(nombre)) {
        Swal.fire({
            icon: 'warning',
            title: 'Nombre Inválido',
            text: 'El nombre no debe contener números.'
        });
        return;
    }

    // Validación: Apellido (No debe permitir números)
    if (!sinNumeros.test(apellido)) {
        Swal.fire({
            icon: 'warning',
            title: 'Apellido Inválido',
            text: 'El apellido no debe contener números.'
        });
        return;
    }

    // Validación: Número de Documento (No debe permitir letras)
    if (!soloNumeros.test(numeroDocumento)) {
        Swal.fire({
            icon: 'warning',
            title: 'Documento Inválido',
            text: 'El número de documento solo debe contener números.'
        });
        return;
    }

    // Validación: Teléfono (Debe contener 10 caracteres y No debe permitir letras)
    if (!soloNumeros.test(telefono) || telefono.length !== 10) {
        Swal.fire({
            icon: 'warning',
            title: 'Teléfono Inválido',
            text: 'El teléfono debe tener exactamente 10 dígitos numéricos.'
        });
        return;
    }

    // Validación: Correo Electrónico (Debe Contener @)
    if (!correo.includes("@")) {
        Swal.fire({
            icon: 'warning',
            title: 'Correo Inválido',
            text: 'El correo electrónico debe contener el carácter "@".'
        });
        return;
    }

    // Validación: Contraseña (Mínimo debe Contener 8 Caracteres)
    if (contrasena.length < 8) {
        Swal.fire({
            icon: 'warning',
            title: 'Contraseña Corta',
            text: 'La contraseña debe tener una longitud mínima de 8 caracteres.'
        });
        return;
    }

    // 4. Muestra de éxito en pantalla si pasa todos los filtros
    Swal.fire({
        icon: 'success',
        title: '¡Validación Exitosa!',
        text: 'Los datos del usuario han sido verificados correctamente.'
    });

    // 5. Imprimir el reporte ordenado en la consola del navegador (F12)
    console.group("=== DATOS RECOPILADOS DE USUARIOS ===");
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`);
    console.log(`Tipo Documento: ${tipoDocumento}`);
    console.log(`Número Documento: ${numeroDocumento}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Correo: ${correo}`);
    console.log(`Género: ${genero}`);
    console.log(`Cargo: ${cargo}`);
    console.log(`Fecha Nacimiento: ${fechaNacimiento}`);
    console.log(`Contraseña: ${"*".repeat(contrasena.length)}`); // Oculta los caracteres reales en la consola por seguridad
    console.groupEnd();
}