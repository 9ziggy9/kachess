import newPosition from "../rules";

const NEW_GAME = "game/NEW_GAME";
const MOVE = "game/MOVE";

// USEFUL
const __initialPieces = {
    "a8": "piece-r", "b8": "piece-n",
    "c8": "piece-b", "d8": "piece-q",
    "e8": "piece-k", "f8": "piece-b",
    "g8": "piece-n", "h8": "piece-r",
    "a7": "piece-p", "b7": "piece-p",
    "c7": "piece-p", "d7": "piece-p",
    "e7": "piece-p", "f7": "piece-p",
    "g7": "piece-p", "h7": "piece-p",
    "a2": "piece-P", "b2": "piece-P",
    "c2": "piece-P", "d2": "piece-P",
    "e2": "piece-P", "f2": "piece-P",
    "g2": "piece-P", "h2": "piece-P",
    "a1": "piece-R", "b1": "piece-N",
    "c1": "piece-B", "d1": "piece-Q",
    "e1": "piece-K", "f1": "piece-B",
    "g1": "piece-N", "h1": "piece-R",
};

export const newGame = () => ({
  type: NEW_GAME,
  payload: {
    pieces: __initialPieces,
    castledBlack: false,
    castledWhite: false,
  }
});

export const movePiece = (piece, from, to) => ({
  type: MOVE,
  payload: {piece, from, to}
});

export default function reducer(state, action) {
  switch(action.type) {
  case NEW_GAME: return {...state, ...action.payload};
  case MOVE:
    return {
      ...state,
      pieces: {
	...state.pieces,
	[action.payload.from]: undefined,
	[action.payload.to]: action.payload.piece
      }
    };
  default: return {error: "nopers"};
  }
}
