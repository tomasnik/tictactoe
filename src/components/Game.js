import Board from "./Board";
import React, {useEffect, useState} from "react";

function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [status, setStatus] = useState("Next: " + (isXNext ? "X" : "O"));

    useEffect(() => {
        if (calculateWinner(squares)) {
            setStatus("Winner: " + calculateWinner(squares));
        } else {
            setStatus("Next: " + (isXNext ? "X" : "O"));
        }
    }, [squares, isXNext]);

    function handleClick(i) {
        const squaresCopy = squares.slice();
        if (squaresCopy[i] === null) {
            squaresCopy[i] = isXNext ? "X" : "O";
            setSquares(squaresCopy);
            setIsXNext(!isXNext);
        }
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <div className={"game"}>
            <h1>Tic-Tac-Toe</h1>
            <p>{status}</p>
            <Board squares={squares} handleClick={handleClick}/>
        </div>
    );
}

export default Game;