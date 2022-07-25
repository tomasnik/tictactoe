import Square from "./Square";

function Board({squares, handleClick}) {
    const squareElements = Array.from({length: 9}, (_, i) =>
        <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />);

    return (
        <div className={"board"}>
            {squareElements}
        </div>
    );
}

export default Board;