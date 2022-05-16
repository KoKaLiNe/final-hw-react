import React from "react";
import TaskStatus from "../taskStatus/taskStatus";
import TaskRank from "../taskRank/taskRank";
import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../../const";
import { observer } from "mobx-react-lite";
import TaskDropdown from "../taskDropdown/taskDropdown";


const TaskItem = observer(({ users, id, assignedId, title, type, status, rank }) => {

    const { pathname } = useLocation();

    // const assignedUserName = () => {
    //     if (pathname === AppRoute.TASK_LIST) {
    //         if (users.length === 0) {
    //             return '...';
    //         } else if (users.length > 0) {
    //             return users.find(x => x.id === assignedId).username;
    //         }
    //     }
    // }

    const assignedUserName = users.find(x => x.id === assignedId).username;

    const taskItemMenu = () => {
        if (pathname === AppRoute.TASK_LIST) {
            return (
                <>
                    <TaskDropdown props={props} />
                </>
            )
        }
    }

    const [startStatus, setStartStatus] = React.useState(status)

    const props = { startStatus, setStartStatus, id }

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
            <Link className="board__task-link" to={`${AppRoute.TASK_LIST}/${id}`}>
                <div className="board__task-type">
                    {taskType()}
                </div>
                <div className="board__task-header">

                    <h3>{title}</h3>

                </div>
                <div className="board__task-user">
                    <p>
                        {assignedUserName}
                    </p>
                </div>
                <div className="board__task-status">
                    <TaskStatus status={startStatus} />
                </div>
                <div className="board__task-rank">
                    <TaskRank rank={rank} />
                </div>
            </Link>
            {taskItemMenu()}
        </div>
    )
})

export default TaskItem;