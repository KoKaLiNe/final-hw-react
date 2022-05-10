import React, { useState } from "react";
import Pagination from "../pagination/pagination";
import TaskItem from "../taskItem/taskItem";
import { Link, useParams } from "react-router-dom";
import { AppRoute } from "../../const";
import Modal from "../modal/modal";
import { loggedUser } from "../../moсks";


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
    const arrayLength = tasks.filter(x => x.assignedId === id).length
    const [isModal, setModal] = React.useState(false);

    const props = {
        arrayLength,
        startStep,
        setStartStep,
        endStep,
        setEndStep,
        currentPage,
        setCurrentPage
    }
    console.log(loggedUser.id)

    return (
        <>
            <div className="board__header">

                <h2 className="board__header-title  user-title">{currentUser().username}</h2>
                <div className="board__header-btns">
                    <Link to={AppRoute.ADD}
                        className="btn-board__header  btn">
                        Добавить задачу
                    </Link>
                    <button
                        onClick={() => setModal(true)}
                        className="btn-board__header  btn-primary  btn"
                        disabled={loggedUser.id === undefined || loggedUser.id !== id}
                    >Редактировать
                    </button>
                </div>
            </div>

            <section className="board__content">

                <div className="card__wrap">
                    <div className="card__col  col-1">
                        <div className="card__user-img-wraper  ">
                            <div className="card__user-img" alt="Изображение профиля" />
                        </div>
                        <h4 className="card__title">О себе</h4>
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

            <Modal
                isVisible={isModal}
                title="Редактирование пользователя"
                onClose={() => setModal(false)}
            />
        </>
    )
}

export default UserCard;