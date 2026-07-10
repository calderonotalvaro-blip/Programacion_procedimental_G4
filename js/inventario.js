function ValidarDatos() {
    // 1. Declaración de variables obteniendo los valores del HTML
    let codigoProducto = document.getElementById("txtCodigo").value;
    let nombreProducto = document.getElementById("txtNombre").value;
    let cantidadProducto = document.getElementById("txtCantidad").value;
    let descripcionProducto = document.getElementById("txtDescripcion").value;
    let marcaProducto = document.getElementById("txtMarca").value;
    let valorUnitario = document.getElementById("txtValorUnitario").value;
    let categoriaProducto = document.getElementById("txtCategoria").value;
    let ubicacionProducto = document.getElementById("txtUbicacion").value;

    // 2. Validación de campos vacíos
    if (!codigoProducto.trim() || !nombreProducto.trim() || !cantidadProducto.trim() || 
        !descripcionProducto.trim() || !marcaProducto.trim() || !valorUnitario.trim() || 
        !categoriaProducto.trim() || !ubicacionProducto.trim()) {
        
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacíos',
            text: 'Por favor, complete todos los campos del módulo de inventario.'
        });
        return;
    }

    // 3. Expresiones Regulares para restricciones de tipo de dato
    const soloNumeros = /^[0-9]+$/;
    const sinNumeros = /^[^0-9]+$/;

    // Validación: Código del Producto (No debe permitir Letras)
    if (!soloNumeros.test(codigoProducto)) {
        Swal.fire({
            icon: 'warning',
            title: 'Código Inválido',
            text: 'El código del producto solo debe contener números.'
        });
        return;
    }

    // Validación: Nombre del Producto (No debe permitir números)
    if (!sinNumeros.test(nombreProducto)) {
        Swal.fire({
            icon: 'warning',
            title: 'Nombre Inválido',
            text: 'El nombre del producto no debe contener números.'
        });
        return;
    }

    // Validación: Cantidad del Producto (No debe permitir letras)
    if (!soloNumeros.test(cantidadProducto)) {
        Swal.fire({
            icon: 'warning',
            title: 'Cantidad Inválida',
            text: 'La cantidad del producto solo debe contener números.'
        });
        return;
    }

    // Validación: Marca del Producto (No debe permitir números)
    if (!sinNumeros.test(marcaProducto)) {
        Swal.fire({
            icon: 'warning',
            title: 'Marca Inválida',
            text: 'La marca del producto no debe contener números.'
        });
        return;
    }

    // Validación: Valor Unitario (No debe permitir letras)
    if (!soloNumeros.test(valorUnitario)) {
        Swal.fire({
            icon: 'warning',
            title: 'Valor Unitario Inválido',
            text: 'El valor unitario solo debe contener números.'
        });
        return;
    }

    // Validación: Categoría del Producto (No debe permitir números)
    if (!sinNumeros.test(categoriaProducto)) {
        Swal.fire({
            icon: 'warning',
            title: 'Categoría Inválida',
            text: 'La categoría del producto no debe contener números.'
        });
        return;
    }

    // 4. Muestra de éxito en pantalla y datos recopilados en consola
    Swal.fire({
        icon: 'success',
        title: '¡Validación Exitosa!',
        text: 'Todos los datos del inventario son válidos.'
    });

    console.group("=== DATOS RECOPILADOS DEL INVENTARIO ===");
    console.log(`Código: ${codigoProducto}`);
    console.log(`Nombre: ${nombreProducto}`);
    console.log(`Cantidad: ${cantidadProducto}`);
    console.log(`Descripción: ${descripcionProducto}`);
    console.log(`Marca: ${marcaProducto}`);
    console.log(`Valor Unitario: $${valorUnitario}`);
    console.log(`Categoría: ${categoriaProducto}`);
    console.log(`Ubicación: ${ubicacionProducto}`);
    console.groupEnd();
}