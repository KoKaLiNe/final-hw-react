import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { observer } from "mobx-react-lite";
// import { users } from "../../store";
import { tasks, users } from "../../moсks";

const UserList = observer(() => {

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
})

export default UserList;