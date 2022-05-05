import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";

const TaskList = () => {
    return (
        <>
            <Header />
            <section className="main__wraper">
                <Board />
            </section>
        </>
    )
}

export default TaskList;