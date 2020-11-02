//Main Container

import { Patolli } from '../model/Patolli.js';
import { Player } from '../model/Player.js';

//Main Menu
const divMainMenu = document.querySelector('.mainMenu');
const createRoomButton = document.querySelector('#createRoomButton');
const joinRoomButton = document.querySelector('#joinRoomButton');
const mainContainer = document.querySelector('.mainContainer');
//
// Lanzar Canas
const btnLanzarCanas = document.createElement('button')
const btnCanas = document.createElement('div');
const divCanas = document.createElement('div');

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
        <div class="createRoomDiv container">
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
	patolli.addPlayer(1, 'Edu', 'verde', 1000)
	patolli.addPlayer(2, 'Adal', 'rojo', 1000)

	const boxes = patolli.getBoard().getBoxes();
	const divTableroJugadores = document.createElement('div');
	const divBoardLimit = document.createElement('div');
	const divBoard = document.createElement('div'); 
	const divJugadores = document.createElement('div'); 
	
	divTableroJugadores.classList.add('tablero-jugadores');
	divBoardLimit.classList.add('tableroLimite');
	divBoard.classList.add('tablero');
	divJugadores.classList.add('divJugadores');

	const boxesMapeadas = boxes.map(
		(box) => `<div class='${box.getType()}'> ${box.getId()}</div>`
	);
	boxes.forEach(
		(box) =>
			(divBoard.innerHTML += `<div class='${box.getType()}'> ${box.getId()}</div>`)
	);

	mainContainer.appendChild(divTableroJugadores); 
	divTableroJugadores.appendChild(divBoardLimit);
	divTableroJugadores.appendChild(divJugadores);
	divBoardLimit.appendChild(divBoard);

	mainContainer.appendChild(btnCanas)

	btnLanzarCanas.innerText = 'Lanzar Canas' 

	btnLanzarCanas.classList.add('btnMainMenu')
	btnCanas.classList.add('btnCanas');
	divCanas.classList.add('divCanas');

	btnCanas.appendChild(btnLanzarCanas)

	btnLanzarCanas.addEventListener('click', () => {
        
		btnCanas.appendChild(divCanas)
		const jugador = patolli.getPlayers()
		divCanas.innerHTML = `<p class="numCanas">${jugador[0].rollDice()}</p>`
        
		setTimeout( () => {
			divCanas.remove()
		}, 1000)
		
	})

	const boxStart = document.querySelectorAll('.start')
	console.log(boxStart);

	boxStart.forEach(ele =>  {
		ele.addEventListener('click', () =>  {
			ele.innerHTML = 'Verga'
		})
	})
};
 




