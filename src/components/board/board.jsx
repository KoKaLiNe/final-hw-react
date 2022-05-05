import React from "react";
import BoardHeader from "../boardHeader/boardHeader";
import BoardInner from "../boardInner/boardInner";


const Board = () => {
    return (
        <>
            <section className="board">
                <BoardHeader />
                <section className="board__content">
                    <BoardInner />
                </section>
            </section>
        </>
    )
}

export default Board;