import React from "react";
import Pagination from "../pagination/pagination";
import TaskItem from "../taskItem/taskItem";
import { useParams } from "react-router-dom";

const UserCard = ({ tasks, users }) => {
    const { id } = useParams();


    return (
        <>
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
        </>
    )
}

export default UserCard;