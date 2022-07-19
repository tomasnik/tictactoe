import Square from "./Square";

function Board() {
    const squares = Array.from({length: 9}, (_, i) => <Square key={i}/>);

    return (
        <div className={"board"}>
            {squares}
        </div>
    );
}

export default Board;