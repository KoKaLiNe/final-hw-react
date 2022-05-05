import React from "react";
import TaskStatus from "../taskStatus/taskStatus";
import TaskPriority from "../taskPriority/taskPriority";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

const TaskItem = ({ _id, type, header, userName, status, priority }) => {

    const taskType = () => {
        if (type === false) {
            return (
                <img src="./img/icons/type-ok.svg" alt="" width='24' height='24' />
            )
        } else {
            return (
                <img src="./img/icons/type-bug.svg" alt="" width='24' height='24' />
            )
        }
    }

    return (
        <div className="board__item">
            <div className="task__type">
                {taskType()}
            </div>
            <div className="task__header">
                <Link to={`${AppRoute.TASK_LIST}/${_id}`}>
                    <h3>{header}</h3>
                </Link>
            </div>
            <div className="task__user">
                <p>{userName}</p>
            </div>
            <div className="task__status">
                <TaskStatus status={status} />
            </div>
            <div className="task__priority">
                <TaskPriority priority={priority} />
            </div>
            <div className="task__menu  dropdown">
                <div className="dropdown-btn">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1C0 0.447715 0.447715 0 1 0H9C9.55228 0 10 0.447715 10 1C10 1.55228 9.55228 2 9 2H1C0.447716 2 0 1.55228 0 1Z" fill="currentColor" />
                        <path d="M0 6C0 5.44772 0.447715 5 1 5H9C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7H1C0.447716 7 0 6.55228 0 6Z" fill="currentColor" />
                        <path d="M0 11C0 10.4477 0.447715 10 1 10H9C9.55228 10 10 10.4477 10 11C10 11.5523 9.55228 12 9 12H1C0.447716 12 0 11.5523 0 11Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="dropdown-content">
                    <Link to={`/task-list/edit/${_id}`} className="dropdown-link">Редактировать</Link>
                    <a className="dropdown-link  accent" href="#">Удалить</a>
                    <a className="dropdown-link" href="#">На тестирование</a>
                    <a className="dropdown-link" href="#">Переоткрыть</a>
                </div>

            </div>
        </div>
    )
}

export default TaskItem;