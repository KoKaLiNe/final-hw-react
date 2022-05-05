import React from "react";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { tasks } from "../../moсks";
import TaskStatus from "../taskStatus/taskStatus";

const BoardHeader = () => {

    const { pathname } = useLocation();
    const { id } = useParams();

    const currentTask = tasks.find(x => x._id === id);

    if (pathname === AppRoute.TASK_LIST) {
        return (
            <>
                <div className="board__header">
                    <h2 className="board__header-title">Задачи</h2>
                    <button className="btn-primary  btn">
                        <Link to={AppRoute.ADD} className="btn-link">Добавить задачу</Link>
                    </button>
                </div>

            </>
        )
    } else if (pathname === AppRoute.USERS) {
        return (
            <>
                <div className="board__header">
                    <h2 className="board__header-title  user-title">Пользователи</h2>
                </div>
            </>
        )
    } else if (pathname === `${AppRoute.TASK_LIST}/${id}`) {
        return (
            <>
                <div className="board__header  task-header">
                    <div className="board__header-title  task-title">
                        <h2 className="board__header-text">{`${currentTask.header}`}</h2>
                        <TaskStatus status={currentTask.status} />
                    </div>

                    <div className="board__header-btns">
                        <button className="btn-board__header  btn">
                            Взять в работу
                        </button>
                        <Link
                            to={`/task-list/edit/${id}`}
                            className="btn-board__header  btn-primary  btn">
                            Редактировать
                        </Link>
                        <button className="btn-board__header  btn-error  btn">
                            Удалить
                        </button>
                    </div>

                </div>
            </>
        )
    } else if (pathname === `${AppRoute.ADD}/${id}`) {
        return (
            <>
                <div className="board__header">
                    <h2 className="board__header-title  user-title">Редактирование</h2>

                    <div className="board__header-btns">
                        <Link
                            to={`/task-list/${id}/edit`}
                            className="btn-board__header  btn-primary  btn">
                            Сохранить
                        </Link>
                        <button className="btn-board__header  btn-default  btn">
                            Отмена
                        </button>
                    </div>
                </div>
            </>
        )
    } else if (pathname === AppRoute.ADD) {
        return (
            <>
                <div className="board__header">
                    <h2 className="board__header-title  user-title">Редактирование</h2>

                    <div className="board__header-btns">
                        <Link
                            to={`/task-list/edit/${id}`}
                            className="btn-board__header  btn-primary  btn">
                            Сохранить
                        </Link>
                        <button className="btn-board__header  btn-default  btn">
                            Отмена
                        </button>
                    </div>
                </div>
            </>
        )
    }

}

export default BoardHeader;