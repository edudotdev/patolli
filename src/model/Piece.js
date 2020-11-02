export class Piece {
	constructor(id) {
		this.id = id;
		this.position = 0;
		this.isInGame = false;
		this.isEliminated = false;
	}

	isOnBoard() {
		return this.position !== 0 ? true : false;
	}

	getId() {
		return this.id;
	}

	getPosition() {
		return this.position;
	}

	setPosition(steps) {
		this.position += steps;
	}

	getIsInGame() {
		return this.isInGame;
	}

	getIsEliminated() {
		return this.isEliminated;
	}
}
