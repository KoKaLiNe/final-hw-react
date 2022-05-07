import React from "react";
import Header from "../../components/header/header";
import Board from "../../components/board/board";
import { observer } from "mobx-react-lite";
import { tasks, users } from "../../moсks";
// import { tasks, users } from "../../store/index";


const TaskList = observer(() => {
    // console.log('users.data', users.data)
    // console.log('tasks.data', tasks.data)


    // const url = 'http://93.95.97.34/api';
    // const request = async (url, method = 'GET', body) => {
    //     const response = await fetch(url, {
    //         method,
    //         body: JSON.stringify(body),
    //         headers: new Headers({
    //             'Content-type': 'application/json'
    //         })
    //     });
    //     return await response.json();
    // }

    // const getUsers = () => {
    //     return request(`${url}/users/all`);
    // }
    // console.log(users.data)
    // console.log(users.data)
    // console.log("getUsers", getUsers())


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

export default TaskList;