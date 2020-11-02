//Main Container

import { Patolli } from '../model/Patolli.js';

//Main Menu
const divMainMenu = document.querySelector('.mainMenu');
const createRoomButton = document.querySelector('#createRoomButton');
const joinRoomButton = document.querySelector('#joinRoomButton');
const mainContainer = document.querySelector('.mainContainer');
//
createRoomButton.addEventListener('click', () => {
	divMainMenu.style.display = 'none';
	showCreateRoom();

	const createButton = document.querySelector('.btnComenzar');
	createButton.addEventListener('click', (e) => {
		e.preventDefault();

		const nJugadores = document.querySelector('#nJugadores');
		const nFichas = document.querySelector('#nFichas');
		const nApuesta = document.querySelector('#nApuesta');

		if (
			nJugadores.value.trim() === '' ||
			nFichas.value.trim() === '' ||
			nApuesta.value.trim() === ''
		) {
			alert('Llena todos los campos');
			return;
		}

		showPatolliGame(
			parseInt(nJugadores.value),
			parseInt(nFichas.value),
			parseInt(nApuesta.value)
		);
	});
});

//CreateRoom
const showCreateRoom = () => {
	const createRoomDiv = document.createElement('div');
	createRoomDiv.innerHTML = `
        <div class="createRoomDiv">
            <h2 class="title">Configurar Juego</h2>  
            <form class="formulario">            
                <input id="nJugadores" type="number" placeholder="Numero de Jugadores" min="2" max="4" />
                <input id="nFichas" type="number" placeholder="Numero de Fichas" min="2" max="5" />
                <input id="nApuesta" type="number" placeholder="Apuesta Inicial" />
                <button class="btnComenzar btnMainMenu" id="btnComenzar">Comenzar</button>
            </form>
        </div>
    `;

	mainContainer.appendChild(createRoomDiv);
};

//JoinRoom
const showJoinRoom = (e) => {
	e.preventDefault();
	const joinRoomDiv = document.createElement('div');
	joinRoomDiv.innerHTML = `
        <div class="joinRoomDiv">
            <h2 class="title">Unirse a partida</h2>  
            <form class="formulario">            
                <input id="nombreJugador" type="text" placeholder="Nombre del Usuario" />
                <input id="idRoom" type="number" placeholder="Numero de Sala"/>
                <button class="btnUnirse btnMainMenu" id="btnComenzar">Unirse</button>
            </form>
        </div>
    `;
	mainContainer.appendChild(createRoomDiv);
};

//Patolli Board

const showPatolliGame = (maxPlayers, initialMoney, piecesNumber) => {
	const patolli = new Patolli(maxPlayers, initialMoney, piecesNumber);
	const boxes = patolli.getBoard().getBoxes();
	const divBoard = document.createElement('div');
	divBoard.classList.add('tablero');
	const boxesMapeadas = boxes.map(
		(box) => `<div class='${box.getType()}'> ${box.getId()}</div>`
	);
	boxes.forEach(
		(box) =>
			(divBoard.innerHTML += `<div class='${box.getType()}'> ${box.getId()}</div>`)
	);

	mainContainer.appendChild(divBoard);
};
