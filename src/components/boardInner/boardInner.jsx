import React from "react";
import Filter from "../filter/filter";
import Pagination from "../pagination/pagination";
import TaskItem from "../taskItem/taskItem";
import UserItem from "../userItem/userItem";
import TaskCard from "../taskCard/taskCard";
import EditForm from "../editForm/editForm";
import UserCard from "../userCard/userCard";
import { AppRoute } from "../../const";
import { useLocation, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";


const BoardInner = observer(({ tasks, users }) => {
   

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
    } else if (pathname === `${AppRoute.TASK_LIST}/${id}`) {
        return (
            <>
                <section className="card">
                    <TaskCard
                        tasks={tasks}
                        users={users}
                    />
                </section>
            </>
        )
    } else if (pathname === AppRoute.USER_LIST) {
        return (
            <>
                <div className="board__list">
                    {users.map(user => <UserItem {...user} key={user.id} />)}
                </div>
                <Pagination />
            </>
        )
    } else if (pathname === `${AppRoute.USER_LIST}/${id}`) {
        return (
            <>
                <UserCard
                    tasks={tasks}
                    users={users}
                />
            </>
        )
    } else if (pathname === AppRoute.ADD || pathname === `${AppRoute.ADD}/${id}`) {
        return (
            <>
                <EditForm
                    tasks={tasks}
                    users={users}
                />
            </>
        )
    }
})

export default BoardInner;