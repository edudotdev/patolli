export class Box {
	constructor(id, type, piece = null) {
		this.id = id;
		this.type = type;
		this.piece = piece;
	}

	getId() {
		return this.id;
	}

	setId(id) {
		this.id = id;
	}

	getType() {
		return this.type;
	}

	setType(type) {
		this.type = type;
	}

	getPiece() {
		return this.piece;
	}

	setPiece(piece) {
		this.piece = piece;
	}

	applyEffect(piece) {}
}
