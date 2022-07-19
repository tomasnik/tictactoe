import Board from "./Board";

function Game() {
    return (
        <div className={"game"}>
            <h1>Tic-Tac-Toe</h1>
            <p>Your turn</p>
            <Board />
        </div>
    );
}

export default Game;