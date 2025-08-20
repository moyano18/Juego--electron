// Constantes para los elementos del DOM
const contenedorJuego = document.getElementById('contenedor-juego');
const mensajeEstado = document.getElementById('mensaje-estado');
const selectorJugador = document.getElementById('selector-jugador');
const botonX = document.getElementById('boton-x');
const botonO = document.getElementById('boton-o');
const botonReiniciar = document.getElementById('boton-reiniciar');
const victoriasXElemento = document.getElementById('victorias-x');
const victoriasOElemento = document.getElementById('victorias-o');
const empatesElemento = document.getElementById('empates');
const contenedorJuegoYMarcador = document.getElementById('contenedor-juego-y-marcador');
const botonReiniciarMarcador = document.getElementById('boton-reiniciar-marcador');
const botonModoOscuro = document.getElementById('boton-modo-oscuro');

// Estado del juego
let tablero = ['', '', '', '', '', '', '', '', ''];
let jugadorActual = '';
let juegoActivo = false;

// Marcador de resultados
let marcador = {
    victoriasX: 0,
    victoriasO: 0,
    empates: 0
};

// Mensajes de la aplicación
const mensajes = {
    ganador: () => `¡El jugador ${jugadorActual} ha ganado!`,
    empate: () => `¡El juego ha terminado en empate!`,
    turno: () => `Es el turno del jugador ${jugadorActual}`
};

// Función para crear el tablero
function crearTablero() {
    for (let i = 0; i < 9; i++) {
        const casilla = document.createElement('div');
        casilla.classList.add('casilla');
        casilla.dataset.indice = i;
        casilla.addEventListener('click', manejarClicCasilla);
        contenedorJuego.appendChild(casilla);
    }
}

// Función para manejar los clics en las casillas
function manejarClicCasilla(evento) {
    const casillaClickeada = evento.target;
    const indiceCasillaClickeada = parseInt(casillaClickeada.dataset.indice);

    if (tablero[indiceCasillaClickeada] !== '' || !juegoActivo) {
        return;
    }

    tablero[indiceCasillaClickeada] = jugadorActual;
    casillaClickeada.textContent = jugadorActual;
    
    if (jugadorActual === 'X') {
        casillaClickeada.classList.add('x');
    } else {
        casillaClickeada.classList.add('circulo');
    }

    verificarResultado();
}

// Lógica de verificación de resultados
function verificarResultado() {
    const condicionesVictoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    let rondaGanada = false;
    let casillasGanadoras = [];

    for (let i = 0; i < condicionesVictoria.length; i++) {
        const condicionVictoria = condicionesVictoria[i];
        let a = tablero[condicionVictoria[0]];
        let b = tablero[condicionVictoria[1]];
        let c = tablero[condicionVictoria[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            rondaGanada = true;
            casillasGanadoras = condicionVictoria;
            break;
        }
    }

    if (rondaGanada) {
        mensajeEstado.textContent = mensajes.ganador();
        mensajeEstado.classList.add('ganador');
        juegoActivo = false;
        
        if (jugadorActual === 'X') {
            marcador.victoriasX++;
        } else {
            marcador.victoriasO++;
        }
        actualizarMarcador();

        // Resalta las casillas ganadoras
        casillasGanadoras.forEach(indice => {
            const casilla = contenedorJuego.querySelector(`[data-indice='${indice}']`);
            casilla.classList.add('ganadora');
        });

        botonReiniciar.style.display = 'block';
        return;
    }

    let rondaEmpatada = !tablero.includes('');
    if (rondaEmpatada) {
        mensajeEstado.textContent = mensajes.empate();
        juegoActivo = false;
        
        marcador.empates++;
        actualizarMarcador();
        
        botonReiniciar.style.display = 'block';
        return;
    }

    jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
    mensajeEstado.textContent = mensajes.turno();
}

// Función para actualizar el marcador en la pantalla
function actualizarMarcador() {
    victoriasXElemento.textContent = marcador.victoriasX;
    victoriasOElemento.textContent = marcador.victoriasO;
    empatesElemento.textContent = marcador.empates;
}

// Función para iniciar el juego con el jugador seleccionado
function iniciarJuego(jugador) {
    jugadorActual = jugador;
    juegoActivo = true;
    selectorJugador.style.display = 'none';
    contenedorJuegoYMarcador.style.display = 'flex';
    mensajeEstado.textContent = mensajes.turno();
    crearTablero();
}

// Función para reiniciar el juego
function reiniciarJuego() {
    tablero = ['', '', '', '', '', '', '', '', ''];
    juegoActivo = false;
    contenedorJuego.innerHTML = '';
    selectorJugador.style.display = 'flex';
    contenedorJuegoYMarcador.style.display = 'none';
    botonReiniciar.style.display = 'none';
    mensajeEstado.textContent = '';
    mensajeEstado.classList.remove('ganador');
}

// Función para reiniciar solo el marcador
function reiniciarMarcador() {
    marcador.victoriasX = 0;
    marcador.victoriasO = 0;
    marcador.empates = 0;
    actualizarMarcador();
}

// Función para cambiar el modo (oscuro/claro)
function cambiarModo() {
    document.body.classList.toggle('modo-oscuro');
}

// Event Listeners para los botones de selección y reinicio
botonX.addEventListener('click', () => iniciarJuego('X'));
botonO.addEventListener('click', () => iniciarJuego('O'));
botonReiniciar.addEventListener('click', reiniciarJuego);
botonReiniciarMarcador.addEventListener('click', reiniciarMarcador);
botonModoOscuro.addEventListener('click', cambiarModo);