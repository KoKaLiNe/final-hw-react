import React, { useState } from "react";
import Pagination from "../pagination/pagination";
import TaskItem from "../taskItem/taskItem";
import { Link, useParams } from "react-router-dom";
import { AppRoute } from "../../const";

const UserCard = ({ tasks, users }) => {
    const { id } = useParams();

    const currentUser = () => {
        if (users.length === 0) {
            return 0;
        } else if (users.length > 0) {
            return users.find(x => x.id === id);
        }
    }

    const [startStep, setStartStep] = useState(1)
    const [endStep, setEndStep] = useState(10)
    const [currentPage, setCurrentPage] = useState(1);
    const arrayLength = tasks.length

    const props = {
        arrayLength,
        startStep,
        setStartStep,
        endStep,
        setEndStep,
        currentPage,
        setCurrentPage
    }



    //     console.log('id', id)
    // console.log('currentUserTasks', currentUserTasks)
    // console.log('tasks.assinedId', tasks.assignedId)
    // console.log('tasks.userId', tasks.userId)
    console.log('startStep', startStep)
    console.log('endStep', endStep)

    return (
        <>
            <div className="board__header">

                <h2 className="board__header-title  user-title">{currentUser().username}</h2>
                <div className="board__header-btns">
                    <Link to="#"
                        className="btn-board__header  btn">
                        Добавить задачу
                    </Link>
                    <Link
                        to='#'
                        className="btn-board__header  btn-primary  btn">
                        Редактировать
                    </Link>
                </div>
            </div>

            <section className="board__content">

                <div className="card__wrap">
                    <div className="card__col  col-1">
                        <div className="card__user-img-wraper  ">
                            <div className="card__user-img" alt="Изображение профиля" />
                        </div>
                        <p className="card__title">{currentUser().about}</p>
                    </div>
                    <div className="card__col  col-2">
                        <p className="card__title">Задачи</p>
                        <div className="board__list">
                            {tasks.filter(x => x.assignedId === id).slice(startStep - 1, endStep).map(task => <TaskItem {...task} key={task.id}
                                tasks={tasks}
                                users={users}
                            />)}
                        </div>
                        <Pagination props={props} />
                    </div>

                </div>

            </section>
        </>
    )
}

export default UserCard;