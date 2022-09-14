// DELETE ME
// const testp = {
//   piece: "piece-p",
//   from: "e4",
//   to: "e5",
// };

// const testP = {
//   piece: "piece-P",
//   from: "e4",
//   to: "e5",
// };

// const testGame = {
//   pieces: {
//     "e5": "piece-p"
//   }
// };
// END DELETE

const __isLowerCase = (l) => l.toLowerCase() === l;

const __isBlack = (move) => __isLowerCase(move.piece.split("-")[1]);

const __isLegal = (move, state) =>
      __isBlack(move) === __isBlack({piece: state.pieces[move.to]}) ? true : false;

const newPosition = (move, state) => __isLegal(move, state) ? {
  ...state,
  pieces: {
    ...state.pieces,
    [move.from]: undefined,
    [move.to]: move.piece
  }
}: null;

export {newPosition};
