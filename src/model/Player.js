import { Piece } from './Piece.js';

export class Player {
	constructor(id, name, color, initialMoney) {
		this.id = id;
		this.name = name;
		this.color = color;
		this.initialMoney = initialMoney;
		this.score = 0;
		this.isEliminated = false;
		this.pieces = this.createPieces();
	}

	createPieces() {
		const pieces = [];
		for (let i = 0; i < 5; i++) {
			pieces.push(new Piece(i));
		}

		return pieces;
	}

	executeTurn() {
		const roll = this.rollDice();

		if (roll !== 0) {
		} else {
		}
	}

	putPieceOnBoard() {
		const pieceToOut = this.pieces().find(
			(piece) => !piece.isOnBoard() && piece
		);
	}

	havePiecesOnBoard() {
		return this.getPieces().filter((piece) => piece.isOnBoard() && piece);
	}

	rollDice() {
		console.log('dado lanzado');
		return Math.floor(Math.random() * 6);
	}

	movePiece(pieceId, to) {
		/*
            pieceId: str
            to: int
        */

		this.pieces.find(
			(piece) => pieceId === piece.getId() && piece.setPosition(to)
		);
	}

	payBet(quantity, toPlayer) {
		/*
            pieceId: str
            to: int
        */
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	getInitialMoney() {
		return this.initialMoney;
	}


	getPieces() {
		return this.pieces;
	}
}
