import React from "react";
import Pagination from "../pagination/pagination";
import TaskItem from "../taskItem/taskItem";
import { Link, useParams } from "react-router-dom";

const UserCard = ({ tasks, users }) => {
    const { id } = useParams();

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

            <section className="board__content">

                <div className="card__wrap">
                    <div className="card__col  col-1">
                        <div className="card__user-img-wraper  ">
                            <div className="card__user-img" alt="Изображение профиля" />
                        </div>
                        <p className="card__title">О себе</p>
                        <p>Разработчик.<br />
                            Реалист.<br />
                            Очаровательное маленькое дерево.</p>
                    </div>
                    <div className="card__col  col-2">
                        <p className="card__title">Задачи</p>
                        <div className="board__list">
                            {tasks.filter(x => x.userId === id).map(task => <TaskItem {...task} key={task.id}
                                tasks={tasks}
                                users={users}
                            />)}
                        </div>
                        <Pagination />
                    </div>

                </div>

            </section>
        </>
    )
}

export default UserCard;