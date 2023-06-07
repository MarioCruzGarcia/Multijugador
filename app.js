/**
 * addEventListener('evento', funcion);
 * 
 * El metodo addEventListener relaciona la aparicion de un evento con la ejecucion de una funcion.
 * 
 * Este metodo se aplica sobre un elemento de HTML.
 * 
 * Sustituye al element.setAttribute('evento', 'funcion')
 * 
 * EVENTO LOAD
 * Evento que hace referencia a cuando la pagina web carga completamente.
 * NO AFECTA SOBRE OTROS ELEMENTOS QUE NO SEAN BODY
 * 
 */
// Localizo etiqueta main
let main = document.getElementsByTagName('main')[0];
let body = document.getElementsByTagName('body')[0];

body.addEventListener('load', pintarTablero());


function pintarTablero(){
    let posicionObjetivo = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    let posicionInicio = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    let posicionj2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    // console.log('has hecho un click')

    for (let i = 0 ; i < 10; i ++){
        for (let j = 0 ; j < 10; j ++){
            let div = document.createElement('div');
            div.classList.add('card');
            main.appendChild(div);
            /**
             * Asigno la fila y la columna como clase en mi div
             */
            div.classList.add(i+'f');
            div.classList.add(j+'c');
            /**
             * Para pintar una casilla, le damos color de fondo
             */
            if(i == posicionObjetivo[0] && j == posicionObjetivo[1]){
                div.classList.add('objetivo');
                console.log(div.classList);
                console.log('Estamos en la fila: ' + parseInt(div.classList[1]));
                console.log('Estamos en la columna: ' + parseInt(div.classList[2]));
            }
            if(i == posicionInicio[0] && j == posicionInicio[1]){
                div.classList.add('actual');
                console.log(div.classList);
                console.log('Estamos en la fila: ' + parseInt(div.classList[1]));
                console.log('Estamos en la columna: ' + parseInt(div.classList[2]));
            }
            if(i == posicionj2[0] && j == posicionj2[1]){
                div.classList.add('j2');
                console.log(div.classList);
                console.log('Estamos en la fila: ' + parseInt(div.classList[1]));
                console.log('Estamos en la columna: ' + parseInt(div.classList[2]));
            }
        }
    }
}

/**
 * Necesito cualquier evento de tecla para poder mover el color de la casilla
 * -    DONDE:                              El evento lo aplico sobre todo el documento HTML (uso document.) 
 * -    EVENTO:                             El evento elegido es 'keydown'.
 * -    FUNCION EJECUTADA:                  La funcion elegida es 'mover'.
 * -    RELACION EVENTO, FUNCION Y LUGAR:   El metodo elegido es addEventListener
 * 
*/
document.addEventListener('keydown', mover);

/**
 * Esta funcion mover recibe por parametro objeto event que referencia a la clase KeyboardEvent
 */
function mover(event){
    // console.log(event['key']);
    switch (event['key']) {
        case 'ArrowUp':
            console.log('has pulsado la tecla hacia arriba')
            break;
        case 'ArrowDown':
            console.log('has pulsado la tecla hacia abajo')
        break;
        case 'ArrowLeft':
            console.log('has pulsado la tecla hacia izquierda')
            break;
        case 'ArrowRight':
            console.log('has pulsado la tecla hacia derecha')
        break;
    
        default:
            break;
    }
}

/**
 * Creamos dos clases distintas:
 * -    objetivo:   corresponde al punto donde tengo que llegar
 * -    actual:     corresponde al punto actual
 */

/**
 * EL ALGORITMO MARIO GARCIA
 * -    En cada div necesitamos tener el valor de cada fila y cada columna en la clase.
 * -    Introducir la 'i' y 'j' en la funcion que crea el tablero (i --> fila, j --> columna).
 * -    Para recoger estas filas y columnas de cada div, utilizamos classList para recoger el valor.
 * -    Para mover las casillas compruebo el valor de estas filas y columnas y opero
 */






































// // Identifico la etiqueta main.
// // Coloco el flexbox
// let main = document.getElementsByTagName('main')[0];
// main.classList.add('container');

// // Coloco el numero de filas y columnas
// let nFilas = 5;
// let nColumnas = 5;

// let posicionObjetivo = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)];
// let posicionInicio = [Math.floor(Math.random() * 5), Math.floor(Math.random() * 5)];

// let div, objetivo, j1, j2;

// // Creamos el inicio del tablero
// document.addEventListener('load', inicio());

// /**
//  * Funcion que inicia el tablero (CON TODO LO NECESARIO)
//  */
// function inicio(){
//     // Bucles para crear filas y columas
//     for (let i = 0; i < nFilas; i++){

//         for(let j = 0;  j < nColumnas; j++){
//             if(i == posicionObjetivo[0] && j ==posicionObjetivo[1]){
//                 console.log(posicionObjetivo)
//             }
//             div = document.createElement('div'); 
//             div.classList.add('card');
//             div.setAttribute('id', `f${i}c${j}`);

//             main.appendChild(div);
//         }
//     }
//     colocarFichas();
// }

// /**
//  * Function que coloca las casillas inicialmente (ALEATORIO TODO)
//  */
// function colocarFichas(){
//     objetivo = document.getElementById('f4c4');
//     objetivo.classList.add('objetivo');

//     j1 = document.getElementById('f1c3');
//     j1.classList.add('j1');

//     j2 = document.getElementById('f3c0');
//     j2.classList.add('j2');
// }

// // Creamos el evento de escucha de tecaldo
// document.addEventListener('keydown', mover);

// /**
//  * Funcion que detecta el movimiento y ejecuta el cambio de posicion
//  * -    j1: mueve con flechas
//  * -    j2: mueve con wasd
//  * 
//  * @param {Object} event - Informacion sobre el evento que se ha ejecutado  
//  */
// function mover(event){
//     console.log(event);
//     /**
//      * Identificamos con el objeto KeyboardEvent cual es la tecla que estoy pulsando.
//      * -    key
//      * -    code
//      */
// }

// /**
//  * PENDIENTE:
//  * 1. Mover casillas.
//  * 2. Que hago con los limites.
//  * 3. (colision entre dos jugadores. QUE HAGO).
//  * 4. Que hago cuando gano.
//  * 5. OBGLITAGORIO. Boton reinicio para ejecutar de nuevo la funcion inicio.
//  * 6. Contadores para puntuacion??
//  * 7. Eliminar evento de teclado cuando hay un ganador.
//  * 8. CSS BIEN.
//  * 9. OPCIONAL. Contador de tiempo antes de poder iniciar el juego(tablero pintado pero sin posibilidad de ejecutar eventos de teclado)
//  */