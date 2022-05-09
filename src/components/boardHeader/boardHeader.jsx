import React from "react";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import TaskStatus from "../taskStatus/taskStatus";


const BoardHeader = ({ tasks, users }) => {

    const { pathname } = useLocation();
    const { id } = useParams();

    // ЗАГОЛОВОК ДЛЯ СПИСКА ЗАДАЧ

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
    }

    // ЗАГОЛОВОК ДЛЯ ВЫБРАННОЙ ЗАДАЧИ

    else if (pathname === `${AppRoute.TASK_LIST}/${id}`) {

        const currentTask = () => {
            if (tasks.length === 0) {
                return 0;
            } else if (tasks.length > 0) {
                return tasks.find(x => x.id === id);
            }
        }

        return (
            <>
                <div className="board__header  task-header">
                    <div className="board__header-title  task-title">
                        <h2 className="board__header-text">{currentTask().title}</h2>
                        <TaskStatus status={currentTask().status} />
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
            </>
        )
    }

    // ЗАГОЛОВОК ДЛЯ СПИСКА ПОЛЬЗОВАТЕЛЕЙ

    else if (pathname === AppRoute.USER_LIST) {
        return (
            <>
                <div className="board__header">
                    <h2 className="board__header-title  user-title">Пользователи</h2>
                </div>
            </>
        )
    }

    // ЗАГОЛОВОК ДЛЯ ВЫБРАННОГО ПОЛЬЗОВАТЕЛЯ

    else if (pathname === `${AppRoute.USER_LIST}/${id}`) {

        const currentUser = () => {
            if (users.length === 0) {
                return 0;
            } else if (users.length > 0) {
                return users.find(x => x.id === id);
            }
        }

        return (
            <>
                <div className="board__header">
                    <h2 className="board__header-title  user-title">{currentUser().username}</h2>

                    <div className="board__header-btns">
                        <button className="btn-board__header  btn">
                            Добавить задачу
                        </button>
                        <Link
                            to={`/task-list/edit/${id}`}
                            className="btn-board__header  btn-primary  btn">
                            Редактировать
                        </Link>
                    </div>
                </div>
            </>
        )
    }

    // ЗАГОЛОВОК ДЛЯ ДОБАВЛЕНИЯ ЗАДАЧИ
    else if (pathname === AppRoute.ADD) {

        return (
            <>
                <div className="board__header">
                    <h2 className="board__header-title  user-title">Создание</h2>
                    <div className="board__header-btns">
                        <Link
                            to='#'
                            className="btn-board__header  btn-primary  btn">
                            Сохранить
                        </Link>
                        <button
                            // onClick={handleSubmit}
                            className="btn-board__header  btn-default  btn">
                            Отмена
                        </button>
                    </div>
                </div>
            </>
        )
    }

    // ЗАГОЛОВОК ДЛЯ РЕДАКТИРОВАНИЯ ЗАДАЧИ

    else if (pathname === `${AppRoute.ADD}/${id}`) {
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
    }


}

export default BoardHeader;