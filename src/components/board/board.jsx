import React from "react";
import { AppRoute } from "../../const";
import { useLocation, useParams, Link } from "react-router-dom";
import TaskStatus from "../taskStatus/taskStatus";
import TaskCard from "../taskCard/taskCard";
import UserCard from "../userCard/userCard";
import EditForm from "../editForm/editForm";
import TasksList from "../tasksList/tasksList";
import UsersList from "../usersList/usersList";
import { observer } from "mobx-react-lite";


const Board = observer(({ tasks, users }) => {

    const { pathname } = useLocation();
    const { id } = useParams();
    const { userid } = useParams();


    // СПИСОК ЗАДАЧ

    if (pathname === AppRoute.TASK_LIST) {
        return (
            <>
                <TasksList tasks={tasks} users={users} />
            </>
        )
    }

    // ВЫБРАННАЯ ЗАДАЧА

    else if (pathname === `${AppRoute.TASK_LIST}/${id}`) {

        // const currentTask = () => {
        //     if (tasks.length === 0) {
        //         return 0;
        //     } else if (tasks.length > 0) {
        //         return tasks.find(x => x.id === id);
        //     }
        // }

        const currentTask = tasks.find(x => x.id === id);

        return (
            <>
                <section className="board">

                    <div className="board__header  task-header">
                        <div className="board__header-title  task-title">
                            <h2 className="board__header-text">{currentTask.title}</h2>
                            <TaskStatus status={currentTask.status} />
                        </div>

                        <div className="board__header-btns">
                            <button className="btn-board__header  btn">
                                Взять в работу
                            </button>
                            <Link
                                to={`/edit/${id}`}
                                className="btn-board__header  btn-primary  btn">
                                Редактировать
                            </Link>
                            <button className="btn-board__header  btn-error  btn">
                                Удалить
                            </button>
                        </div>
                    </div>

                    <section className="board__content">
                        <section className="card">
                            <TaskCard tasks={tasks} users={users} />
                        </section>
                    </section>

                </section>
            </>
        )
    }

    // СПИСОК ПОЛЬЗОВАТЕЛЕЙ

    else if (pathname === AppRoute.USER_LIST) {

        return (
            <>
                <UsersList tasks={tasks} users={users} />
            </>
        )
    }

    // ВЫБРАННЫЙ ПОЛЬЗОВАТЕЛЬ

    else if (pathname === `${AppRoute.USER_LIST}/${id}`) {
        return (
            <>
                <section className="board">
                    <UserCard tasks={tasks} users={users} />
                </section>
            </>
        )
    }

    // ДОБАВЛЕНИЕ ЗАДАЧ

    else if (pathname === AppRoute.ADD || pathname === `${AppRoute.ADD}/${id}` || pathname === `${AppRoute.USER_LIST}/${userid}/add`) {
        return (
            <>
                <section className="board">
                    <EditForm
                        userId={userid}
                    />
                </section>
            </>
        )
    }
})

export default Board;