import React from "react";
import Filter from "../filter/filter";
import Pagination from "../pagination/pagination";
import TaskItem from "../taskItem/taskItem";
import User from "../user/user";
import TaskCard from "../taskCard/taskCard";
import EditForm from "../editForm/editForm";
// import { tasks, users } from "../../moсks";
import { AppRoute } from "../../const";
import { useLocation, useParams } from "react-router-dom";

const BoardInner = ({ tasks, users }) => {

    const { pathname } = useLocation();
    const { id } = useParams();


    if (pathname === AppRoute.TASK_LIST) {
        return (
            <>
                <Filter />
                <div className="board__list">
                    {tasks.map(task => <TaskItem {...task} key={task.id}
                        tasks={tasks}
                        users={users}
                    />)}
                </div>
                <Pagination />
            </>
        )
    } else if (pathname === AppRoute.USERS) {
        return (
            <>
                <div className="board__list">
                    {users.map(user => <User {...user} key={user.id} />)}
                </div>
                <Pagination />
            </>
        )
    } else if (pathname === `${AppRoute.TASK_LIST}/${id}`) {
        return (
            <>
                <section className="task-card">
                    <TaskCard
                        tasks={tasks}
                        users={users}
                    />
                </section>
            </>
        )
    } else if (pathname === `${AppRoute.ADD}/${id}`) {
        return (
            <>
                <EditForm
                    tasks={tasks}
                    users={users}
                />
            </>
        )
    }
}

export default BoardInner;