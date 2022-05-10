import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { observer } from "mobx-react-lite";

const Main = observer(({tasks, users}) => {

    return (
        <>
            <Header />
            <section className="main__wraper">
                <Board
                    tasks={tasks}
                    users={users}
                />
            </section>
        </>
    )
});

export default Main;