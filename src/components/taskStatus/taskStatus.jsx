import React from "react";

const TaskStatus = ({ status }) => {
    if (status === 'Открыто') {
        return (
            <div className="task-status  open">
                <p>Открыто</p>
            </div>
        )
    } else if (status === 'В работе') {
        return (
            <span className="task-status  working">В работе</span>
        )
    } else if (status === 'Тестирование') {
        return (
            <span className="task-status  testing">Тестирование</span>
        )
    } else if (status === 'Сделано') {
        return (
            <span className="task-status  complite">Сделано</span>
        )
    }
}

export default TaskStatus;