function ValidarDatos() {
    // 1. Capturar los valores del HTML usando los IDs únicos
    let ventas = document.getElementById("txtVentas").value;
    let fecha = document.getElementById("txtFecha").value;
    let ingresos = document.getElementById("txtIngresos").value;
    let egresos = document.getElementById("txtEgresos").value;
    let concepto = document.getElementById("txtConcepto").value;
    let valor = document.getElementById("txtValor").value;

    // 2. Validación de Campos Vacíos (.trim() limpia espacios en blanco)
    if (!ventas.trim() || !fecha.trim() || !ingresos.trim() || !egresos.trim() || 
        !concepto.trim() || !valor.trim()) {
        
        Swal.fire({
            icon: 'error',
            title: 'Campos Vacíos',
            text: 'Por favor, complete todos los campos del módulo financiero.'
        });
        return; // Frena el código si falta llenar algún campo
    }

    // 3. Moldes de validación con Expresiones Regulares (RegEx)
    const soloNumeros = /^[0-9]+$/;

    // Validación: Ventas (No debe permitir letras)
    if (!soloNumeros.test(ventas)) {
        Swal.fire({ icon: 'warning', title: 'Ventas Inválidas', text: 'El campo Ventas solo debe contener números.' });
        return;
    }

    // Validación: Ingresos (No debe permitir letras)
    if (!soloNumeros.test(ingresos)) {
        Swal.fire({ icon: 'warning', title: 'Ingresos Inválidos', text: 'El campo Ingresos solo debe contener números.' });
        return;
    }

    // Validación: Egresos (No debe permitir letras)
    if (!soloNumeros.test(egresos)) {
        Swal.fire({ icon: 'warning', title: 'Egresos Inválidos', text: 'El campo Egresos solo debe contener números.' });
        return;
    }

    // Validación: Valor (No debe permitir letras)
    if (!soloNumeros.test(valor)) {
        Swal.fire({ icon: 'warning', title: 'Valor Inválido', text: 'El campo Valor solo debe contener números.' });
        return;
    }

    // 4. Ventana emergente de Éxito si pasa todos los filtros
    Swal.fire({
        icon: 'success',
        title: '¡Cierre Validado!',
        text: 'Todos los datos financieros son correctos.'
    });

    // 5. Reporte completo ordenado en la Consola (F12)
    console.group("💰 REPORTE DE CAJA / FINANZAS");
    console.log(`Fecha del registro: ${fecha}`);
    console.log(`Total Ventas: $${ventas}`);
    console.log(`Total Ingresos: $${ingresos}`);
    console.log(`Total Egresos: $${egresos}`);
    console.log(`Concepto/Motivo: ${concepto}`);
    console.log(`Valor del Movimiento: $${valor}`);
    console.groupEnd();
}