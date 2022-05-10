import React from "react";
import TaskStatus from "../taskStatus/taskStatus";
import TaskRank from "../taskRank/taskRank";
import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../../const";
import { observer } from "mobx-react-lite";


const TaskItem = observer(({ tasks, users, id, userId, assignedId, title, description, type, dateOfCreation, dateOfUpdate, timeInMinutes, status, rank, }) => {

    const { pathname } = useLocation();

    console.log(pathname)

    const assignedUserName = () => {
        if (pathname === AppRoute.TASK_LIST) {
            if (users.length === 0) {
                return 'загружаем...';
            } else if (users.length > 0) {
                return users.find(x => x.id === assignedId).username;
            }
        }
    }

    const taskItemMenu = () => {
        if (pathname === AppRoute.TASK_LIST) {
            return (
                <div className="task__menu  dropdown">
                    <div className="dropdown-btn">
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1C0 0.447715 0.447715 0 1 0H9C9.55228 0 10 0.447715 10 1C10 1.55228 9.55228 2 9 2H1C0.447716 2 0 1.55228 0 1Z" fill="currentColor" />
                            <path d="M0 6C0 5.44772 0.447715 5 1 5H9C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7H1C0.447716 7 0 6.55228 0 6Z" fill="currentColor" />
                            <path d="M0 11C0 10.4477 0.447715 10 1 10H9C9.55228 10 10 10.4477 10 11C10 11.5523 9.55228 12 9 12H1C0.447716 12 0 11.5523 0 11Z" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-link">
                            <Link to={`/edit/${id}`} >Редактировать</Link>
                        </button>
                        <button className="dropdown-link  accent">Удалить</button>
                        <button className="dropdown-link">На тестирование</button>
                        <button className="dropdown-link">Переоткрыть</button>
                    </div>
                </div>
            )
        }
    }

    const taskType = () => {
        if (type === 'task') {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5Z" fill="#00D1FF" />
                    <circle cx="12" cy="12" r="6" fill="white" />
                </svg>
            )
        } else if (type === 'bug') {
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5Z" fill="#EB4F4F" />
                    <circle cx="12" cy="12" r="6" fill="white" />
                </svg>
            )
        }
    }

    return (
        <div className="board__item">
            <div className="task__type">
                {taskType()}
            </div>
            <div className="task__header">
                <Link to={`${AppRoute.TASK_LIST}/${id}`}>
                    <h3>{title}</h3>
                </Link>
            </div>
            <div className="task__user">
                <p>
                    {assignedUserName()}
                </p>
            </div>
            <div className="task__status">
                <TaskStatus status={status} />
            </div>
            <div className="task__rank">
                <TaskRank rank={rank} />
            </div>
            {taskItemMenu()}
        </div>
    )
})

export default TaskItem;