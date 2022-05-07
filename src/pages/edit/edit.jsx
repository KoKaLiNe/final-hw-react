import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { observer } from "mobx-react-lite";

const Edit = observer(() => {
    return (
        <>
            <Header />
            <section className="main__wraper">
                <Board />
            </section>
        </>
    )
})

export default Edit;