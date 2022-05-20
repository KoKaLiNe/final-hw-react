import React from "react";
import { AppRoute } from "../../const";
import { useLocation, useParams, Link } from "react-router-dom";
import TaskStatus from "../taskStatus/taskStatus";
import TaskCard from "../taskCard/taskCard";
import UserCard from "../userCard/userCard";
import EditForm from "../editForm/editForm";
import TasksList from "../tasksList/tasksList";
import UsersList from "../usersList/usersList";
import { tasksMock } from "../../moсks";
import { observer } from "mobx-react-lite";
import { api } from "../../api";
import { useHistory } from "react-router-dom";
import { tasks, users } from "../../store";
import { action, runInAction } from "mobx";

const Board = observer(() => {

    const { pathname } = useLocation();
    const { id } = useParams();
    const { userid } = useParams();
    const hist = useHistory();

    // СПИСОК ЗАДАЧ

    if (pathname === AppRoute.TASK_LIST) {
        return (
            <>
                <TasksList tasks={tasks.data} users={users.data} />
            </>
        )
    }

    // ВЫБРАННАЯ ЗАДАЧА

    else if (pathname === `${AppRoute.TASK_LIST}/${id}`) {

        // const currentTask = () => {
        //     if (tasks.find(x => x.id === id) === undefined) {
        //         return (tasksMock);
        //     } else {
        //         return tasks.find(x => x.id === id);
        //     }
        // }
        
        let currentTask;
        if (tasks.data.find(x => x.id === id) === undefined) {
            currentTask = tasksMock
        } else {
            currentTask = tasks.data.find(x => x.id === id)
        }

        const handleDelete = action(() => {
            tasks.deleteTask(id);
            hist.goBack();
        })

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
                            <button
                                type="submit"
                                onClick={() => { handleDelete() }}
                                className="btn-board__header  btn-error  btn">
                                Удалить
                            </button>
                        </div>
                    </div>

                    <section className="board__content">
                        <section className="card">
                            <TaskCard tasks={tasks.data} users={users.data} />
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
                <UsersList tasks={tasks.data} users={users.data} />
            </>
        )
    }

    // ВЫБРАННЫЙ ПОЛЬЗОВАТЕЛЬ

    else if (pathname === `${AppRoute.USER_LIST}/${id}`) {
        return (
            <>
                <section className="board">
                    <UserCard tasks={tasks.data} users={users.data} />
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