import React from "react";
import BoardHeader from "../boardHeader/boardHeader";
import BoardInner from "../boardInner/boardInner";


const Board = ({ tasks, users }) => {
    return (
        <>
            <section className="board">
                <BoardHeader
                    tasks={tasks}
                    users={users}
                />
                <section className="board__content">
                    <BoardInner
                        tasks={tasks}
                        users={users}
                    />
                </section>
            </section>
        </>
    )
}

export default Board;