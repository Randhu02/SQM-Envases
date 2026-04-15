// ==================== CONFIGURACIÓN DE FIREBASE ====================
// ⚠️ IMPORTANTE: Reemplaza estos valores con los de tu NUEVO proyecto Firebase para SQM
const firebaseConfig = {
  apiKey: "AIzaSyAkJtmDSk6YE0mvlq_ynTXm9SCjzO7ugV0",
  authDomain: "sqm-envases.firebaseapp.com",
  databaseURL: "https://sqm-envases-default-rtdb.firebaseio.com",
  projectId: "sqm-envases",
  storageBucket: "sqm-envases.firebasestorage.app",
  messagingSenderId: "645033649101",
  appId: "1:645033649101:web:70ca7dc882a048a8749a84"
};

// Inicializar Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase inicializado correctamente - SQM Envases");
} catch (error) {
    console.error("Error al inicializar Firebase:", error);
}

const database = firebase.database();
const auth = firebase.auth();

// ==================== PRODUCTOS SQM (42 items) ====================
const productosItem = {
    "Etiquetas circulares ProP - 25 kg": 1,
    "Etiqueta Tira Ultrasol Micro Rexene Apn de 15kg": 2,
    "Etiquetas 100 x 150 mm 1 Sal-Tuco 3¨ Poliolefina": 3,
    "Etiqueta Rotulos para Ultrasol Micro Rexene APN de 15kg": 4,
    "Etiqueta Retira Ultrasol Micro Rexene Apn de 15kg": 5,
    "Etiqueta Ultrasolution Calcium ZeroN - 20 Lt.": 6,
    "Sacos vacios FertyBase Magnit Flakes * 25Kg": 7,
    "Sacos vacios FertyBase Sulfato de Magnesio Heptahidratado * 25Kg": 8,
    "Sacos vacios NMg Fertybase * 25Kg": 9,
    "Sacos vacios Qrop Boro * 25 Kg": 10,
    "Sacos vacios Qrop K * 50Kg": 11,
    "Sacos vacíos Qrop KS (Premium Prill) * 50Kg - POLIPROPILENO": 12,
    "Sacos vacíos Qrop Magsul * 50Kg": 13,
    "Sacos vacios Qrop Mop G * 50Kg": 14,
    "Sacos vacios Qrop Sop G * 50Kg": 15,
    "Sacos vacios Qrop Top K *25Kg": 16,
    "Sacos vacios Ultrasol Calcium * 25Kg": 17,
    "Sacos vacios Ultrasol crecimiento * 25Kg": 18,
    "Sacos vacios Ultrasol desarrollo * 25Kg": 19,
    "Sacos vacios Ultrasol especial * 25Kg": 20,
    "Sacos vacios Ultrasol generico * 25Kg": 21,
    "Sacos vacios Ultrasol inicial * 25Kg": 22,
    "Sacos vacios Ultrasol K * 25Kg": 23,
    "Sacos vacios Ultrasol K-acid * 25Kg": 24,
    "Sacos vacios Ultrasol Map * 25Kg": 25,
    "Sacos vacios Ultrasol SOP 52 * 25Kg": 26,
    "Sacos vacios Ultrasol SOP * 25Kg": 27,
    "Sacos vacíos Qrop KS (Premium Prill) *50 Kg - POLIETILENO": 28,
    "Sacos vacios Ultrasol Micronutriente FQ48 * 25 Kg": 29,
    "Sacos vacios Cloruro Potasio Slb - Qrop MOP S * 50 Kg": 30,
    "Sacos vacios FertyBase SOP 50 * 25 Kg.": 31,
    "Sacos vacios Cloruro Potasio Granulado * 50 Kg.": 32,
    "Sacos vacios Fertibase MAP * 25 Kg.": 33,
    "Sacos vacios Ultrasol SOP 51 * 25 Kg.": 34,
    "Sacos vacíos Ultrasol Magsul * 25Kg": 35,
    "Sacos vacíos Ultrasoline K Plus * 25Kg": 36,
    "Sacos vacios Ultrasol Micronutriente ZN15 * 25Kg": 37,
    "Sacos vacios Qrop Mix Faster * 50 Kg": 38,
    "Sacos vacíos NPC Fertybase * 25Kg": 39,
    "Sacos vacíos Ultrasol Color Rosa * 25Kg": 40,
    "Sacos vacíos Ultrasol Color Amarillo * 25Kg": 41,
    "Sacos vacíos Ultrasol Color Verde * 25Kg": 42
};

// ==================== STOCK INICIAL AL 31/01/2026 ====================
const stockInicialSQM = {
    1: 116,   // Etiquetas circulares ProP - 25 kg
    2: 5,     // Etiqueta Tira Ultrasol Micro Rexene Apn de 15kg
    3: 375,   // Etiquetas 100 x 150 mm 1 Sal-Tuco 3¨ Poliolefina
    4: 10,    // Etiqueta Rotulos para Ultrasol Micro Rexene APN de 15kg
    5: 5,     // Etiqueta Retira Ultrasol Micro Rexene Apn de 15kg
    6: 25,    // Etiqueta Ultrasolution Calcium ZeroN - 20 Lt.
    7: 15,    // Sacos vacios FertyBase Magnit Flakes * 25Kg
    8: 405,   // Sacos vacios FertyBase Sulfato de Magnesio Heptahidratado * 25Kg
    9: 1007,  // Sacos vacios NMg Fertybase * 25Kg
    10: 100,  // Sacos vacios Qrop Boro * 25 Kg
    11: 416,  // Sacos vacios Qrop K * 50Kg
    12: 13,   // Sacos vacíos Qrop KS (Premium Prill) * 50Kg - POLIPROPILENO
    13: 151,  // Sacos vacíos Qrop Magsul * 50Kg
    14: 174,  // Sacos vacios Qrop Mop G * 50Kg
    15: 125,  // Sacos vacios Qrop Sop G * 50Kg
    16: 208,  // Sacos vacios Qrop Top K *25Kg
    17: 448,  // Sacos vacios Ultrasol Calcium * 25Kg
    18: 100,  // Sacos vacios Ultrasol crecimiento * 25Kg
    19: 23,   // Sacos vacios Ultrasol desarrollo * 25Kg
    20: 94,   // Sacos vacios Ultrasol especial * 25Kg
    21: 559,  // Sacos vacios Ultrasol generico * 25Kg
    22: 174,  // Sacos vacios Ultrasol inicial * 25Kg
    23: 918,  // Sacos vacios Ultrasol K * 25Kg
    24: 243,  // Sacos vacios Ultrasol K-acid * 25Kg
    25: 244,  // Sacos vacios Ultrasol Map * 25Kg
    26: 119,  // Sacos vacios Ultrasol SOP 52 * 25Kg
    27: 609,  // Sacos vacios Ultrasol SOP * 25Kg
    28: 288,  // Sacos vacíos Qrop KS (Premium Prill) *50 Kg - POLIETILENO
    29: 4,    // Sacos vacios Ultrasol Micronutriente FQ48 * 25 Kg
    30: 32,   // Sacos vacios Cloruro Potasio Slb - Qrop MOP S * 50 Kg
    31: 200,  // Sacos vacios FertyBase SOP 50 * 25 Kg.
    32: 37,   // Sacos vacios Cloruro Potasio Granulado * 50 Kg.
    33: 39,   // Sacos vacios Fertibase MAP * 25 Kg.
    34: 352,  // Sacos vacios Ultrasol SOP 51 * 25 Kg.
    35: 103,  // Sacos vacíos Ultrasol Magsul * 25Kg
    36: 124,  // Sacos vacíos Ultrasoline K Plus * 25Kg
    37: 34,   // Sacos vacios Ultrasol Micronutriente ZN15 * 25Kg
    38: 367,  // Sacos vacios Qrop Mix Faster * 50 Kg
    39: 40,   // Sacos vacíos NPC Fertybase * 25Kg
    40: 5,    // Sacos vacíos Ultrasol Color Rosa * 25Kg
    41: 10,   // Sacos vacíos Ultrasol Color Amarillo * 25Kg
    42: 10    // Sacos vacíos Ultrasol Color Verde * 25Kg
};

// Función para inicializar stock inicial si está vacío
async function inicializarStockInicial() {
    console.log("Verificando stock inicial SQM...");
    
    for (const [descripcion, itemId] of Object.entries(productosItem)) {
        const snapshot = await database.ref("inventario/" + itemId).once("value");
        const movimientos = snapshot.val();
        
        // Si no hay movimientos, crear registro inicial con stock del 31/01/2026
        if (!movimientos || movimientos.length === 0) {
            const stockInicial = stockInicialSQM[itemId] || 0;
            
            const registroInicial = {
                item: itemId,
                descripcion: descripcion,
                fecha: "2026-01-31",
                operacion: "Stock inicial SQM",
                ingreso: stockInicial,
                salida: 0,
                stock: stockInicial,
                observaciones: `Stock inicial al 31/01/2026`,
                usuario: "sistema",
                timestamp: firebase.database.ServerValue.TIMESTAMP
            };
            
            await database.ref("inventario/" + itemId).set([registroInicial]);
            console.log(`✅ Inicializado: ${descripcion} - Stock: ${stockInicial}`);
        } else {
            console.log(`✓ Ya existe: ${descripcion}`);
        }
    }
    console.log("Verificación de stock inicial completada");
}

// Variables globales
let usuarioAutenticado = null;
let modoActual = 'vista';
let stockResumen = {};
let sortableInstance = null;
let movimientosActuales = [];
let itemProductoActual = null;

// ==================== FUNCIONES DE VISUALIZACIÓN ====================

function mostrarInicio() {
    document.getElementById('inicioContainer').style.display = 'flex';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('mainContainer').style.display = 'none';
}

function mostrarLogin() {
    document.getElementById('inicioContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'flex';
    document.getElementById('mainContainer').style.display = 'none';
}

function mostrarApp(modo) {
    modoActual = modo;
    document.getElementById('inicioContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('mainContainer').style.display = 'block';
    
    actualizarInterfazSegunModo();
    cargarResumenStock();
    
    // Verificar/Inicializar stock inicial solo una vez
    if (modoActual === 'admin') {
        inicializarStockInicial();
    }
}

function actualizarInterfazSegunModo() {
    const userEmail = document.getElementById('userEmail');
    const formContainer = document.getElementById('formContainer');
    const btnLogout = document.getElementById('btnLogout');
    const btnCambiar = document.getElementById('btnCambiarModo');
    const infoModo = document.getElementById('infoModo');
    const btnRecalcular = document.getElementById('btnRecalcular');
    
    if (modoActual === 'admin' && usuarioAutenticado) {
        userEmail.textContent = `Modo: Administrador (${usuarioAutenticado.email})`;
        formContainer.style.display = 'block';
        btnLogout.style.display = 'inline-block';
        btnCambiar.textContent = 'Cambiar a Modo Vista';
        btnCambiar.style.background = '#2C5F8A';
        
        infoModo.innerHTML = `
            <div class="admin-message">
                ✅ <strong>Estás en modo Administrador</strong><br>
                Puedes agregar, editar y eliminar registros.
            </div>
        `;
    } else {
        userEmail.textContent = 'Modo: Visitante (Solo lectura)';
        formContainer.style.display = 'none';
        btnLogout.style.display = 'none';
        btnCambiar.textContent = 'Cambiar a Modo Admin';
        btnCambiar.style.background = '#0047AB';
        
        infoModo.innerHTML = `
            <div class="vista-message">
                👁️ <strong>Estás en modo Vista</strong><br>
                Solo puedes consultar el inventario.
            </div>
        `;
    }
    
    if (btnRecalcular) {
        btnRecalcular.style.display = 'none';
    }
}

// ==================== FUNCIONES DE UTILIDAD ====================

function formatearNumero(num) {
    if (num === undefined || num === null) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatearFecha(fechaStr) {
    if (!fechaStr) return '-';
    
    try {
        const partes = fechaStr.split('-');
        if (partes.length === 3) {
            const fechaUTC = new Date(Date.UTC(
                parseInt(partes[0]),
                parseInt(partes[1]) - 1,
                parseInt(partes[2])
            ));
            
            return fechaUTC.toLocaleDateString('es-PE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                timeZone: 'UTC'
            });
        }
        
        const fecha = new Date(fechaStr);
        if (isNaN(fecha.getTime())) {
            return fechaStr;
        }
        
        return fecha.toLocaleDateString('es-PE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        
    } catch (error) {
        console.error("Error formateando fecha:", fechaStr, error);
        return fechaStr;
    }
}

function fechaParaInputDate(fechaStr) {
    if (!fechaStr) return '';
    
    try {
        const fecha = new Date(fechaStr);
        if (isNaN(fecha.getTime())) {
            return fechaStr;
        }
        
        const fechaAjustada = new Date(fecha.getTime() - (fecha.getTimezoneOffset() * 60000));
        return fechaAjustada.toISOString().split('T')[0];
        
    } catch (error) {
        console.error("Error convirtiendo fecha para input:", fechaStr, error);
        return fechaStr;
    }
}

// ==================== FUNCIÓN PARA RECALCULAR STOCK ====================

async function recalcularStock(itemProducto, nuevosMovimientos) {
    if (!confirm("⚠️ ¿Estás seguro de recalcular el stock?\n\nEsto actualizará todos los stocks según el orden actual de las filas. ¿Deseas continuar?")) {
        return false;
    }
    
    let stockAcumulado = 0;
    const movimientosRecalculados = nuevosMovimientos.map((mov, idx) => {
        stockAcumulado = stockAcumulado + mov.ingreso - mov.salida;
        const movActualizado = { 
            ...mov, 
            stock: stockAcumulado,
            ordenManual: idx,
            fechaOriginal: mov.fecha
        };
        console.log(`${idx + 1}. ${mov.fecha} - ${mov.operacion} | Ingreso: ${mov.ingreso} | Salida: ${mov.salida} | Stock: ${stockAcumulado}`);
        return movActualizado;
    });
    
    try {
        await database.ref("inventario/" + itemProducto).set(movimientosRecalculados);
        alert("✅ Stock recalculado correctamente!");
        
        await mostrarTablaConOrdenManual(itemProducto, movimientosRecalculados);
        cargarResumenStock();
        return true;
    } catch (error) {
        alert("❌ Error al guardar: " + error.message);
        return false;
    }
}

async function mostrarTablaConOrdenManual(itemProducto, movimientosGuardados) {
    const descripcion = Object.keys(productosItem).find(key => productosItem[key] === itemProducto);
    const contenedor = document.getElementById("contenedorTablas");
    const btnRecalcular = document.getElementById("btnRecalcular");
    
    if (btnRecalcular) {
        btnRecalcular.style.display = 'none';
    }
    
    if (!contenedor) return;
    
    contenedor.innerHTML = "";
    
    let movimientos = [...movimientosGuardados];
    
    if (movimientos[0] && movimientos[0].ordenManual !== undefined) {
        movimientos.sort((a, b) => (a.ordenManual || 0) - (b.ordenManual || 0));
    } else {
        movimientos.sort((a, b) => {
            const fechaA = new Date(a.fecha);
            const fechaB = new Date(b.fecha);
            if (fechaA.getTime() !== fechaB.getTime()) {
                return fechaB - fechaA;
            }
            const tsA = a.timestamp || 0;
            const tsB = b.timestamp || 0;
            return tsA - tsB;
        });
    }
    
    const titulo = document.createElement("h3");
    titulo.textContent = `${descripcion} (Orden manual - arrastra las filas)`;
    contenedor.appendChild(titulo);
    
    if (modoActual === 'admin' && usuarioAutenticado) {
        const instruccion = document.createElement("p");
        instruccion.innerHTML = "💡 <strong>Modo administrador:</strong> Arrastra las filas usando las ⋮⋮ para reordenar, luego haz clic en 'Recalcular Stock'";
        instruccion.style.backgroundColor = "#e7f3ff";
        instruccion.style.padding = "8px";
        instruccion.style.borderRadius = "5px";
        instruccion.style.fontSize = "14px";
        contenedor.appendChild(instruccion);
    }
    
    const tabla = document.createElement("table");
    tabla.border = "1";
    tabla.style.width = "100%";
    tabla.style.borderCollapse = "collapse";
    
    let cabecera = `
        <thead>
            <tr>
                <th style="width: 40px;">⋮⋮</th>
                <th>Item</th>
                <th>Fecha</th>
                <th>Operación</th>
                <th>Ingreso</th>
                <th>Salida</th>
                <th>Stock</th>
                <th>Observaciones</th>`;
    
    if (modoActual === 'admin' && usuarioAutenticado) {
        cabecera += `<th>Acción</th>`;
    }
    
    cabecera += `</thead><tbody></tbody>`;
    tabla.innerHTML = cabecera;
    
    const tbody = tabla.querySelector("tbody");
    
    movimientos.forEach((item, index) => {
        const esPrimero = (index === 0);
        const claseDestacada = esPrimero ? 'ultimo-stock' : '';
        
        let fila = `
            <td style="cursor: grab; text-align: center; ${claseDestacada ? 'background-color: #e8f5e9;' : ''}">⋮⋮</td>
            <td class="numero-formateado ${claseDestacada}">${item.item}</td>
            <td ${claseDestacada ? 'class="ultimo-stock"' : ''}>${formatearFecha(item.fecha)}</td>
            <td ${claseDestacada ? 'class="ultimo-stock"' : ''}>${item.operacion}</td>
            <td class="numero-formateado ${claseDestacada}">${formatearNumero(item.ingreso)}</td>
            <td class="numero-formateado ${claseDestacada}">${formatearNumero(item.salida)}</td>
            <td class="numero-formateado ${claseDestacada}"><strong>${formatearNumero(item.stock)}</strong></td>
            <td ${claseDestacada ? 'class="ultimo-stock"' : ''}>${item.observaciones || '-'}</td>`;
        
        if (modoActual === 'admin' && usuarioAutenticado) {
            fila += `
            <td ${claseDestacada ? 'class="ultimo-stock"' : ''}>
                <button class="btn-editar" data-item="${itemProducto}" data-index="${index}">
                    Editar
                </button>
                <button class="btn-eliminar" data-item="${itemProducto}" data-index="${index}">
                    Eliminar
                </button>
             </td>`;
        }
        
        const tr = document.createElement("tr");
        if (claseDestacada) tr.className = claseDestacada;
        tr.setAttribute('data-original-item', JSON.stringify(item));
        tr.innerHTML = fila;
        tbody.appendChild(tr);
    });
    
    contenedor.appendChild(tabla);
    
    if (modoActual === 'admin' && usuarioAutenticado) {
        activarDragAndDrop();
        if (btnRecalcular) {
            btnRecalcular.style.display = 'inline-block';
        }
    }
    
    if (modoActual === 'admin' && usuarioAutenticado) {
        document.querySelectorAll(".btn-editar").forEach(btn => {
            btn.addEventListener("click", function() {
                const itemProd = this.getAttribute("data-item");
                const idx = this.getAttribute("data-index");
                mostrarModalEditar(parseInt(itemProd), parseInt(idx));
            });
        });
        
        document.querySelectorAll(".btn-eliminar").forEach(btn => {
            btn.addEventListener("click", function() {
                const itemProd = this.getAttribute("data-item");
                const idx = this.getAttribute("data-index");
                eliminarRegistro(parseInt(itemProd), parseInt(idx));
            });
        });
    }
}

function activarDragAndDrop() {
    const tbody = document.querySelector("#contenedorTablas table tbody");
    if (!tbody) return;
    
    if (sortableInstance) {
        sortableInstance.destroy();
    }
    
    sortableInstance = new Sortable(tbody, {
        animation: 300,
        handle: 'td:first-child',
        ghostClass: 'sortable-ghost',
        dragClass: 'sortable-drag',
        onEnd: function() {
            const btnRecalcular = document.getElementById("btnRecalcular");
            if (btnRecalcular) {
                btnRecalcular.style.display = 'inline-block';
                btnRecalcular.style.animation = 'pulse 0.5s';
            }
        }
    });
}

function mostrarTabla() {
    console.log("Función mostrarTabla() ejecutada - Modo:", modoActual);
    
    const descripcion = document.getElementById("productoFiltro").value;
    const contenedor = document.getElementById("contenedorTablas");
    const btnRecalcular = document.getElementById("btnRecalcular");
    
    if (btnRecalcular) {
        btnRecalcular.style.display = 'none';
    }
    
    if (!contenedor) {
        console.error("ERROR: contenedorTablas no encontrado");
        return;
    }
    
    contenedor.innerHTML = "";

    if (!descripcion) {
        alert("Por favor seleccione un producto");
        return;
    }

    const itemProducto = productosItem[descripcion];
    itemProductoActual = itemProducto;

    database.ref("inventario/" + itemProducto).once("value", snapshot => {
        let movimientos = snapshot.val();

        if (!movimientos || movimientos.length === 0) {
            contenedor.innerHTML = `
                <div class="info-box">
                    <h3>${descripcion}</h3>
                    <p>No hay registros para este producto.</p>
                </div>`;
            return;
        }

        if (!Array.isArray(movimientos)) {
            movimientos = Object.values(movimientos);
        }
        
        movimientosActuales = [...movimientos];
        
        const tieneOrdenManual = movimientos.some(m => m.ordenManual !== undefined);

        if (tieneOrdenManual) {
            movimientos.sort((a, b) => (a.ordenManual || 0) - (b.ordenManual || 0));
            console.log("📌 Usando orden manual para mostrar");
        } else {
            movimientos.sort((a, b) => {
                const fechaA = new Date(a.fecha);
                const fechaB = new Date(b.fecha);
                if (fechaA.getTime() !== fechaB.getTime()) {
                    return fechaA - fechaB;
                }
                const tsA = a.timestamp || 0;
                const tsB = b.timestamp || 0;
                return tsA - tsB;
            });
            console.log("📅 Usando orden por fecha ascendente para mostrar");
        }

        const titulo = document.createElement("h3");
        titulo.textContent = tieneOrdenManual ? 
            `${descripcion} (Orden manual - arrastra las filas)` : 
            `${descripcion} (Historial - más reciente primero)`;
        contenedor.appendChild(titulo);
        
        if (modoActual === 'admin' && usuarioAutenticado) {
            const instruccion = document.createElement("p");
            instruccion.innerHTML = "💡 <strong>Modo administrador:</strong> Arrastra las filas usando las ⋮⋮ para reordenar, luego haz clic en 'Recalcular Stock'";
            instruccion.style.backgroundColor = "#e7f3ff";
            instruccion.style.padding = "8px";
            instruccion.style.borderRadius = "5px";
            instruccion.style.fontSize = "14px";
            contenedor.appendChild(instruccion);
        }

        const tabla = document.createElement("table");
        tabla.border = "1";
        tabla.style.width = "100%";
        tabla.style.borderCollapse = "collapse";
        
        let cabecera = `
            <thead>
                <tr>
                    <th style="width: 40px;">⋮⋮</th>
                    <th>Item</th>
                    <th>Fecha</th>
                    <th>Operación</th>
                    <th>Ingreso</th>
                    <th>Salida</th>
                    <th>Stock</th>
                    <th>Observaciones</th>`;
        
        if (modoActual === 'admin' && usuarioAutenticado) {
            cabecera += `<th>Acción</th>`;
        }
        
        cabecera += `</thead><tbody></tbody>`;
        tabla.innerHTML = cabecera;

        const tbody = tabla.querySelector("tbody");

        movimientos.forEach((item, index) => {
            const esUltimo = (index === movimientos.length - 1);
            const claseDestacada = esUltimo ? 'ultimo-stock' : '';
            
            let fila = `
                <td style="cursor: grab; text-align: center; ${claseDestacada ? 'background-color: #e8f5e9;' : ''}">⋮⋮</td>
                <td class="numero-formateado ${claseDestacada}">${item.item}</td>
                <td ${claseDestacada ? 'class="ultimo-stock"' : ''}>${formatearFecha(item.fecha)}</td>
                <td ${claseDestacada ? 'class="ultimo-stock"' : ''}>${item.operacion}</td>
                <td class="numero-formateado ${claseDestacada}">${formatearNumero(item.ingreso)}</td>
                <td class="numero-formateado ${claseDestacada}">${formatearNumero(item.salida)}</td>
                <td class="numero-formateado ${claseDestacada}"><strong>${formatearNumero(item.stock)}</strong></td>
                <td ${claseDestacada ? 'class="ultimo-stock"' : ''}>${item.observaciones || '-'}</td>`;
            
            if (modoActual === 'admin' && usuarioAutenticado) {
                fila += `
                <td ${claseDestacada ? 'class="ultimo-stock"' : ''}>
                    <button class="btn-editar" data-item="${itemProducto}" data-index="${index}">
                        Editar
                    </button>
                    <button class="btn-eliminar" data-item="${itemProducto}" data-index="${index}">
                        Eliminar
                    </button>
                </td>`;
            }
            
            const tr = document.createElement("tr");
            if (claseDestacada) tr.className = claseDestacada;
            tr.setAttribute('data-original-item', JSON.stringify(item));
            tr.innerHTML = fila;
            tbody.appendChild(tr);
        });

        contenedor.appendChild(tabla);
        
        if (modoActual === 'admin' && usuarioAutenticado) {
            activarDragAndDrop();
            if (btnRecalcular) {
                btnRecalcular.style.display = 'inline-block';
            }
        }
        
        if (modoActual === 'admin' && usuarioAutenticado) {
            document.querySelectorAll(".btn-editar").forEach(btn => {
                btn.addEventListener("click", function() {
                    const itemProd = this.getAttribute("data-item");
                    const idx = this.getAttribute("data-index");
                    mostrarModalEditar(parseInt(itemProd), parseInt(idx));
                });
            });
            
            document.querySelectorAll(".btn-eliminar").forEach(btn => {
                btn.addEventListener("click", function() {
                    const itemProd = this.getAttribute("data-item");
                    const idx = this.getAttribute("data-index");
                    eliminarRegistro(parseInt(itemProd), parseInt(idx));
                });
            });
        }
    });
}

function eliminarRegistro(itemProducto, index) {
    if (modoActual !== 'admin' || !usuarioAutenticado) {
        alert("Debe estar en modo Administrador para eliminar registros");
        return;
    }
    
    if (!confirm("¿Seguro que deseas eliminar este registro?")) return;

    database.ref("inventario/" + itemProducto).once("value", snapshot => {
        let movimientos = snapshot.val() || [];

        movimientos.splice(index, 1);

        let stock = 0;
        movimientos = movimientos.map(m => {
            stock = stock + m.ingreso - m.salida;
            return { ...m, stock };
        });

        database.ref("inventario/" + itemProducto).set(movimientos, () => {
            mostrarTabla();
            cargarResumenStock();
        });
    });
}

let registroEditando = null;

function mostrarModalEditar(itemProducto, index) {
    if (modoActual !== 'admin' || !usuarioAutenticado) {
        alert("Debe estar en modo Administrador para editar registros");
        return;
    }
    
    registroEditando = { itemProducto, index };
    
    database.ref("inventario/" + itemProducto).once("value", snapshot => {
        const movimientos = snapshot.val() || [];
        
        if (index >= movimientos.length) {
            alert("Registro no encontrado");
            return;
        }
        
        const registro = movimientos[index];
        
        document.getElementById("editItemProducto").value = itemProducto;
        document.getElementById("editIndex").value = index;
        document.getElementById("editDescripcion").value = registro.descripcion;
        document.getElementById("editFecha").value = fechaParaInputDate(registro.fecha);
        document.getElementById("editOperacion").value = registro.operacion;
        document.getElementById("editIngreso").value = registro.ingreso;
        document.getElementById("editSalida").value = registro.salida;
        document.getElementById("editObservaciones").value = registro.observaciones || '';
        
        document.getElementById("modalEditar").style.display = 'flex';
    });
}

function cerrarModalEditar() {
    document.getElementById("modalEditar").style.display = 'none';
    registroEditando = null;
}

function guardarEdicion(e) {
    e.preventDefault();
    
    if (!registroEditando) return;
    
    const itemProducto = parseInt(document.getElementById("editItemProducto").value);
    const index = parseInt(document.getElementById("editIndex").value);
    const fecha = document.getElementById("editFecha").value;
    const operacion = document.getElementById("editOperacion").value;
    const ingreso = Number(document.getElementById("editIngreso").value);
    const salida = Number(document.getElementById("editSalida").value);
    const observaciones = document.getElementById("editObservaciones").value;
    const descripcion = document.getElementById("editDescripcion").value;
    
    database.ref("inventario/" + itemProducto).once("value", snapshot => {
        let movimientos = snapshot.val() || [];
        
        if (index >= movimientos.length) {
            alert("Error: registro no encontrado");
            return;
        }
        
        const usuarioOriginal = movimientos[index].usuario;
        
        movimientos[index] = {
            ...movimientos[index],
            descripcion,
            fecha,
            operacion,
            ingreso,
            salida,
            observaciones: observaciones || '',
            usuario: usuarioOriginal,
            editadoPor: usuarioAutenticado.email,
            editadoEn: firebase.database.ServerValue.TIMESTAMP
        };
        
        let stock = 0;
        if (index > 0) {
            stock = movimientos[index - 1].stock;
        }
        
        for (let i = index; i < movimientos.length; i++) {
            stock = stock + movimientos[i].ingreso - movimientos[i].salida;
            movimientos[i].stock = stock;
        }
        
        database.ref("inventario/" + itemProducto).set(movimientos, () => {
            alert("✅ Registro actualizado correctamente!");
            cerrarModalEditar();
            mostrarTabla();
            cargarResumenStock();
        });
    });
}

function cargarResumenStock() {
    console.log("Cargando resumen de stock SQM...");
    const container = document.getElementById("tablaResumenContainer");
    
    if (!container) {
        console.error("ERROR: tablaResumenContainer no encontrado");
        return;
    }
    
    container.innerHTML = '<p>Cargando resumen...</p>';
    
    const promesas = Object.keys(productosItem).map(descripcion => {
        const itemProducto = productosItem[descripcion];
        return database.ref("inventario/" + itemProducto).once("value")
            .then(snapshot => {
                const movimientos = snapshot.val();
                let stockActual = 0;
                
                if (movimientos && movimientos.length > 0) {
                    stockActual = movimientos[movimientos.length - 1].stock;
                }
                
                return {
                    item: itemProducto,
                    descripcion: descripcion,
                    stock: stockActual
                };
            });
    });
    
    Promise.all(promesas)
        .then(datos => {
            datos.sort((a, b) => a.item - b.item);
            stockResumen = datos;
            
            const tabla = document.createElement("table");
            tabla.innerHTML = `
                <thead>
                    <tr><th>ITEM</th><th>DESCRIPCIÓN DEL ARTICULO</th><th>STOCK ACTUALIZADO</th></tr>
                </thead>
                <tbody></tbody>
            `;
            
            const tbody = tabla.querySelector("tbody");
            let totalStock = 0;
            
            datos.forEach(item => {
                totalStock += item.stock;
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td class="numero-formateado">${item.item}</td>
                    <td>${item.descripcion}</td>
                    <td class="numero-formateado"><strong>${formatearNumero(item.stock)}</strong></td>
                `;
                tbody.appendChild(fila);
            });
            
            const filaTotal = document.createElement("tr");
            filaTotal.className = "resumen-total";
            filaTotal.innerHTML = `
                <td colspan="2"><strong>TOTAL GENERAL</strong></td>
                <td class="numero-formateado"><strong>${formatearNumero(totalStock)}</strong></td>
            `;
            tbody.appendChild(filaTotal);
            
            container.innerHTML = '';
            container.appendChild(tabla);
        })
        .catch(error => {
            console.error("Error al cargar resumen:", error);
            container.innerHTML = '<p class="error-message">Error al cargar el resumen</p>';
        });
}

async function exportarExcel() {
    console.log("Exportando a Excel SQM...");
    
    try {
        const btnExportar = document.getElementById("btnExportarExcel");
        const textoOriginal = btnExportar.textContent;
        btnExportar.textContent = "⏳ Generando Excel...";
        btnExportar.disabled = true;
        
        const wb = XLSX.utils.book_new();
        
        const datosResumen = [];
        datosResumen.push(["STOCK DE ENVASES SQM"]);
        datosResumen.push([]);
        datosResumen.push(["Fecha de exportación:", new Date().toLocaleString('es-PE')]);
        datosResumen.push([]);
        datosResumen.push(["ITEM", "DESCRIPCIÓN DEL ARTICULO", "STOCK ACTUALIZADO"]);
        
        let totalStock = 0;
        const productosKeys = Object.keys(productosItem);
        
        for (let i = 0; i < productosKeys.length; i++) {
            const descripcion = productosKeys[i];
            const itemProducto = i + 1;
            
            const snapshot = await database.ref("inventario/" + itemProducto).once("value");
            const movimientos = snapshot.val() || [];
            
            let stockActual = 0;
            if (movimientos.length > 0) {
                stockActual = movimientos[movimientos.length - 1].stock;
            }
            
            totalStock += stockActual;
            datosResumen.push([itemProducto, descripcion, stockActual]);
        }
        
        datosResumen.push([]);
        datosResumen.push(["TOTAL GENERAL", "", totalStock]);
        
        const wsResumen = XLSX.utils.aoa_to_sheet(datosResumen);
        wsResumen['!cols'] = [{wch: 8}, {wch: 70}, {wch: 18}];
        XLSX.utils.book_append_sheet(wb, wsResumen, "RESUMEN");
        
        for (let i = 0; i < productosKeys.length; i++) {
            const descripcion = productosKeys[i];
            const itemProducto = i + 1;
            
            const snapshot = await database.ref("inventario/" + itemProducto).once("value");
            const movimientos = snapshot.val() || [];
            
            const datosProducto = [];
            datosProducto.push([`INVENTARIO: ${descripcion}`]);
            datosProducto.push([]);
            
            if (movimientos.length > 0) {
                datosProducto.push(["ITEM", "FECHA", "OPERACIÓN", "INGRESO", "SALIDA", "STOCK", "OBSERVACIONES", "USUARIO"]);
                
                const movimientosOrdenados = [...movimientos].sort((a, b) => {
                    return new Date(a.fecha) - new Date(b.fecha);
                });
                
                movimientosOrdenados.forEach(mov => {
                    datosProducto.push([
                        mov.item,
                        formatearFecha(mov.fecha),
                        mov.operacion,
                        mov.ingreso,
                        mov.salida,
                        mov.stock,
                        mov.observaciones || '-',
                        mov.usuario || 'N/A'
                    ]);
                });
                
                datosProducto.push([]);
                const ultimoStock = movimientos[movimientos.length - 1].stock;
                datosProducto.push(["STOCK FINAL:", "", "", "", "", ultimoStock, "", ""]);
            } else {
                datosProducto.push(["NO HAY REGISTROS PARA ESTE PRODUCTO"]);
            }
            
            const wsProducto = XLSX.utils.aoa_to_sheet(datosProducto);
            wsProducto['!cols'] = [{wch: 8}, {wch: 12}, {wch: 30}, {wch: 10}, {wch: 10}, {wch: 10}, {wch: 35}, {wch: 25}];
            XLSX.utils.book_append_sheet(wb, wsProducto, `ITEM ${itemProducto}`);
        }
        
        const datosIndice = [];
        datosIndice.push(["REPORTE COMPLETO DE INVENTARIO - SQM ENVASES"]);
        datosIndice.push([]);
        datosIndice.push(["Fecha de generación:", new Date().toLocaleString('es-PE')]);
        datosIndice.push([]);
        datosIndice.push(["HOJA", "CONTENIDO", "CANTIDAD DE REGISTROS"]);
        datosIndice.push(["RESUMEN", "Resumen general de stock", productosKeys.length]);
        
        for (let i = 0; i < productosKeys.length; i++) {
            const descripcion = productosKeys[i];
            const itemProducto = i + 1;
            const snapshot = await database.ref("inventario/" + itemProducto).once("value");
            const movimientos = snapshot.val() || [];
            datosIndice.push([`ITEM ${itemProducto}`, descripcion, movimientos.length]);
        }
        
        const wsIndice = XLSX.utils.aoa_to_sheet(datosIndice);
        wsIndice['!cols'] = [{wch: 10}, {wch: 70}, {wch: 20}];
        XLSX.utils.book_append_sheet(wb, wsIndice, "ÍNDICE");
        
        const fecha = new Date();
        const fechaStr = fecha.toISOString().slice(0,10).replace(/-/g, '');
        const horaStr = fecha.getHours().toString().padStart(2, '0') + fecha.getMinutes().toString().padStart(2, '0');
        const nombreArchivo = `Inventario_SQM_${fechaStr}_${horaStr}.xlsx`;
        
        XLSX.writeFile(wb, nombreArchivo);
        
        btnExportar.textContent = textoOriginal;
        btnExportar.disabled = false;
        
        alert(`✅ Archivo "${nombreArchivo}" exportado exitosamente!`);
        
    } catch (error) {
        console.error("Error al exportar Excel:", error);
        alert("❌ Error al exportar a Excel: " + error.message);
        
        const btnExportar = document.getElementById("btnExportarExcel");
        if (btnExportar) {
            btnExportar.textContent = "📊 Exportar a Excel";
            btnExportar.disabled = false;
        }
    }
}

// ==================== EVENTOS DEL DOM ====================

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente cargado - SQM Envases");
    
    document.getElementById("btnModoVista").addEventListener("click", function() {
        modoActual = 'vista';
        usuarioAutenticado = null;
        mostrarApp('vista');
    });
    
    document.getElementById("btnModoAdmin").addEventListener("click", function() {
        mostrarLogin();
    });
    
    document.getElementById("btnVolverInicio").addEventListener("click", function() {
        mostrarInicio();
    });
    
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                document.getElementById("loginError").style.display = 'none';
                modoActual = 'admin';
                mostrarApp('admin');
            })
            .catch((error) => {
                document.getElementById("loginError").textContent = error.message;
                document.getElementById("loginError").style.display = 'block';
            });
    });
    
    document.getElementById("btnCambiarModo").addEventListener("click", function() {
        if (modoActual === 'admin') {
            auth.signOut();
            modoActual = 'vista';
            usuarioAutenticado = null;
            mostrarApp('vista');
        } else {
            mostrarLogin();
        }
    });
    
    document.getElementById("btnLogout").addEventListener("click", function() {
        if (confirm("¿Cerrar sesión de administrador?")) {
            auth.signOut();
            modoActual = 'vista';
            mostrarApp('vista');
        }
    });
    
    document.getElementById("formInventario").addEventListener("submit", function(e) {
        e.preventDefault();
        
        if (modoActual !== 'admin' || !usuarioAutenticado) {
            alert("Debe estar en modo Administrador para agregar registros");
            return;
        }
        
        const descripcion = document.getElementById("descripcion").value;
        const fecha = document.getElementById("fecha").value;
        const operacion = document.getElementById("operacion").value;
        const ingreso = Number(document.getElementById("ingreso").value);
        const salida = Number(document.getElementById("salida").value);
        const observaciones = document.getElementById("observaciones").value;
        const itemProducto = productosItem[descripcion];

        if (!itemProducto) {
            alert("Por favor seleccione una descripción válida");
            return;
        }

        database.ref("inventario/" + itemProducto).once("value", snapshot => {
            let movimientos = snapshot.val() || [];
            
            const nuevoRegistro = {
                item: itemProducto,
                descripcion,
                fecha,
                operacion,
                ingreso,
                salida,
                stock: 0,
                observaciones: observaciones || '',
                usuario: usuarioAutenticado.email,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            };
            
            movimientos.push(nuevoRegistro);
            
            movimientos.sort((a, b) => {
                const fechaA = new Date(a.fecha);
                const fechaB = new Date(b.fecha);
                return fechaA - fechaB;
            });
            
            let stockAcumulado = 0;
            movimientos = movimientos.map(mov => {
                stockAcumulado = stockAcumulado + mov.ingreso - mov.salida;
                return { ...mov, stock: stockAcumulado };
            });
            
            database.ref("inventario/" + itemProducto).set(movimientos, () => {
                alert("✅ Registro agregado correctamente!");
                document.getElementById("formInventario").reset();
                cargarResumenStock();
                mostrarTabla();
            });
        });
    });
    
    document.getElementById("btnMostrar").addEventListener("click", mostrarTabla);
    document.getElementById("btnExportarExcel").addEventListener("click", exportarExcel);
    
    const btnRecalcular = document.getElementById("btnRecalcular");
    if (btnRecalcular) {
        btnRecalcular.addEventListener("click", async function() {
            if (!itemProductoActual) return;
            
            const tbody = document.querySelector("#contenedorTablas table tbody");
            if (!tbody) return;
            
            const filas = tbody.querySelectorAll("tr");
            const nuevoOrden = [];
            
            for (let i = 0; i < filas.length; i++) {
                const fila = filas[i];
                const datosOriginales = fila.getAttribute('data-original-item');
                if (datosOriginales) {
                    nuevoOrden.push(JSON.parse(datosOriginales));
                }
            }
            
            if (nuevoOrden.length > 0) {
                await recalcularStock(itemProductoActual, nuevoOrden);
            }
        });
    }
    
    document.getElementById("btnCerrarModal").addEventListener("click", cerrarModalEditar);
    document.getElementById("btnCancelarEditar").addEventListener("click", cerrarModalEditar);
    document.getElementById("formEditar").addEventListener("submit", guardarEdicion);
    
    document.getElementById("modalEditar").addEventListener("click", function(e) {
        if (e.target.id === "modalEditar") {
            cerrarModalEditar();
        }
    });
});

auth.onAuthStateChanged((user) => {
    usuarioAutenticado = user;
    
    if (user && modoActual === 'admin') {
        mostrarApp('admin');
    }
});



