// Identifico la etiqueta main.
// Coloco el flexbox
let section = document.getElementsByTagName('section')[1];
section.classList.add('container');

// Coloco el numero de filas y columnas
let nFilas = 15;
let nColumnas = 15;

let div, objetivo, j1, j2;

let filas1, columnas1; //letras
let filas2, columnas2; //flechas
let filasFinal, columnasFinal;

// Creamos el inicio del tablero
document.addEventListener('DOMContentLoaded', inicio);

/**
 * inicia el tanlero 
 */
function inicio() {
  // Bucles para crear filas y columnas
  for (let i = 0; i < nFilas; i++) {
    for (let j = 0; j < nColumnas; j++) {
      div = document.createElement('div');
      div.classList.add('card');
      div.setAttribute('id', `f${i}c${j}`);

      section.appendChild(div);
    }
  }
  colocarFichas();
}

/**
 * coloca las casillas de forma aleatoria
 */
function colocarFichas() {
  filasFinal = Math.floor(Math.random() * 15);
  columnasFinal = Math.floor(Math.random() * 15);

  objetivo = document.getElementById(`f${filasFinal}c${columnasFinal}`);
  objetivo.classList.add('objetivo');

  filas1 = Math.floor(Math.random() * 15);
  columnas1 = Math.floor(Math.random() * 15);

  j1 = document.getElementById(`f${filas1}c${columnas1}`);
  j1.classList.add('j1');

  filas2 = Math.floor(Math.random() * 15);
  columnas2 = Math.floor(Math.random() * 15);

  while (filas2 === filas1 && columnas2 === columnas1) {
    filas2 = Math.floor(Math.random() * 15);
    columnas2 = Math.floor(Math.random() * 15);
  }

  j2 = document.getElementById(`f${filas2}c${columnas2}`);
  j2.classList.add('j2');
}

document.addEventListener('keydown', mover);

/**
 * Funcion que detecta el movimiento y ejecuta el cambio de posicion
 * -    j1: mueve con flechas
 * -    j2: mueve con letras
 *
 * @param {Object} event - Informacion sobre el evento que se ha ejecutado
 */
function mover(event) {
  switch (event.key) {
    case 'w':
      moverJugador(filas1, columnas1, -1, 0, 'j1');
      break;
    case 'a':
      moverJugador(filas1, columnas1, 0, -1, 'j1');
      break;
    case 's':
      moverJugador(filas1, columnas1, 1, 0, 'j1');
      break;
    case 'd':
      moverJugador(filas1, columnas1, 0, 1, 'j1');
      break;
    case 'ArrowUp':
      moverJugador(filas2, columnas2, -1, 0, 'j2');
      break;
    case 'ArrowDown':
      moverJugador(filas2, columnas2, 1, 0, 'j2');
      break;
    case 'ArrowLeft':
      moverJugador(filas2, columnas2, 0, -1, 'j2');
      break;
    case 'ArrowRight':
      moverJugador(filas2, columnas2, 0, 1, 'j2');
      break;
  }
  ganar();
}

function moverJugador(filas, columnas, filasDelta, columnasDelta, jugadorClass) {
  const currentJugador = document.getElementById(`f${filas}c${columnas}`);
  currentJugador.classList.remove(jugadorClass);

  filas += filasDelta;
  columnas += columnasDelta;

  if (filas < 0) {
    filas = nFilas - 1;
  } else if (filas >= nFilas) {
    filas = 0;
  }

  if (columnas < 0) {
    columnas = nColumnas - 1;
  } else if (columnas >= nColumnas) {
    columnas = 0;
  }

  const newJugador = document.getElementById(`f${filas}c${columnas}`);
  newJugador.classList.add(jugadorClass);

  if (jugadorClass === 'j1') {
    filas1 = filas;
    columnas1 = columnas;
  } else if (jugadorClass === 'j2') {
    filas2 = filas;
    columnas2 = columnas;
  }
}

function ganar() {
  if (filas1 === filasFinal && columnas1 === columnasFinal) {
    alert('Ha ganado el jugador 1');
    document.removeEventListener('keydown', mover);
  } else if (filas2 === filasFinal && columnas2 === columnasFinal) {
    alert('Ha ganado el jugador 2');
    document.removeEventListener('keydown', mover);
  }
}

function reinicio() {
  document.addEventListener('keydown', mover);

  const jugador1 = document.getElementById(`f${filas1}c${columnas1}`);
  jugador1.classList.remove('j1');

  const jugador2 = document.getElementById(`f${filas2}c${columnas2}`);
  jugador2.classList.remove('j2');

  const objetivo = document.getElementById(`f${filasFinal}c${columnasFinal}`);
  objetivo.classList.remove('objetivo');

  colocarFichas();
}

document.getElementById('reiniciar').addEventListener('click', reinicio);
