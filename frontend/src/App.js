import "./index.css";
import Board from "./components/Board";

function App() {
  return (
    <>
      <div id="app-wrapper">
        <div id="game-area">
          <div id="board-area">
            <Board />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
