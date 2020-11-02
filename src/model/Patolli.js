import { GameBoard } from './Gameboard';
import { Player } from './Player';
export class Patolli {
	constructor(maxPlayers = 2, initialMoney = 100, piecesNumber = 2) {
		this.maxPlayers = maxPlayers; // 4
		this.initialMoney = initialMoney;
		this.piecesNumber = piecesNumber;
		this.players = [];
		this.turn = 0;
		this.board = new GameBoard(60);
	}

	getPlayers() {
		return this.players;
	}
	getBoard() {
		return this.board;
	}

	startGame() {}

	addPlayer(id, name, color, initialMoney) {
		if (this.players.length > 4) {
			return;
		} else {
			this.players.push(new Player(id, name, color, initialMoney));
		}
	}

	executeTurn(playerId) {}

	changeTurn() {
		if (this.turn < 4) {
			this.turn += 1;
		} else {
			this.turn = 0;
		}
	}
}
