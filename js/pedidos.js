function ValidarDatos() {
    // 1. Capturar los valores del HTML usando los IDs únicos
    let codigoProd = document.getElementById("txtCodigoProd").value;
    let nombreProd = document.getElementById("txtNombreProd").value;
    let direccion = document.getElementById("txtDireccion").value;
    let nombreUser = document.getElementById("txtNombreUser").value;
    let cantidad = document.getElementById("txtCantidad").value;
    let metodoPago = document.getElementById("txtMetodoPago").value;
    let valorCancelar = document.getElementById("txtValorCancelar").value;
    let telefono = document.getElementById("txtTelefono").value;

    // 2. Validación de Campos Vacíos (.trim() limpia los espacios fantasmas)
    if (!codigoProd.trim() || !nombreProd.trim() || !direccion.trim() || !nombreUser.trim() || 
        !cantidad.trim() || !metodoPago.trim() || !valorCancelar.trim() || !telefono.trim()) {
        
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacíos',
            text: 'Por favor, complete todos los campos del formulario de pedidos.'
        });
        return; // Detiene el código si falta llenar algún campo
    }

    // 3. Moldes de validación con Expresiones Regulares (RegEx)
    const soloNumeros = /^[0-9]+$/;
    const sinNumeros = /^[^0-9]+$/;

    // Validación: Código Producto (No debe permitir letras)
    if (!soloNumeros.test(codigoProd)) {
        Swal.fire({ icon: 'warning', title: 'Código Inválido', text: 'El código del producto solo debe contener números.' });
        return;
    }

    // Validación: Nombre del Producto (No debe permitir números)
    if (!sinNumeros.test(nombreProd)) {
        Swal.fire({ icon: 'warning', title: 'Producto Inválido', text: 'El nombre del producto no debe contener números.' });
        return;
    }

    // Validación: Nombre del usuario (No debe permitir números)
    if (!sinNumeros.test(nombreUser)) {
        Swal.fire({ icon: 'warning', title: 'Usuario Inválido', text: 'El nombre del usuario no debe contener números.' });
        return;
    }

    // Validación: Cantidad (No debe permitir letras)
    if (!soloNumeros.test(cantidad)) {
        Swal.fire({ icon: 'warning', title: 'Cantidad Inválida', text: 'La cantidad del pedido solo debe contener números.' });
        return;
    }

    // Validación: Valor a Cancelar (No debe permitir letras)
    if (!soloNumeros.test(valorCancelar)) {
        Swal.fire({ icon: 'warning', title: 'Valor Inválido', text: 'El valor a cancelar solo debe contener números.' });
        return;
    }

    // Validación: Teléfono (No debe permitir letras)
    if (!soloNumeros.test(telefono)) {
        Swal.fire({ icon: 'warning', title: 'Teléfono Inválido', text: 'El número de teléfono solo debe contener números.' });
        return;
    }

    // 4. Ventana emergente de Éxito si pasa todos los filtros
    Swal.fire({
        icon: 'success',
        title: '¡Pedido Validado!',
        text: 'Todos los datos del pedido son correctos.'
    });

    // 5. Reporte completo ordenado en la Consola (F12)
    console.group("🧾 RESUMEN DE COMPRA / PEDIDO");
    console.log(`Código Ref: ${codigoProd}`);
    console.log(`Producto: ${nombreProd}`);
    console.log(`Cantidad: ${cantidad}`);
    console.log(`Cliente: ${nombreUser}`);
    console.log(`Dirección Entrega: ${direccion}`);
    console.log(`Teléfono Contacto: ${telefono}`);
    console.log(`Método de Pago: ${metodoPago}`);
    console.log(`Total Neto a Pagar: $${valorCancelar}`);
    console.groupEnd();
}