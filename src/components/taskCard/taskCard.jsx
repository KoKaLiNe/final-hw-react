import React from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import Modal from "../modal/modal";


const TaskCard = ({ tasks, users }) => {

    const { id } = useParams();

    const currentTask = () => {
        if (tasks.length === 0) {
            return '...';
        } else if (tasks.length > 0) {
            return tasks.find(x => x.id === id);
        }
    }

    const userAssigned = () => {
        if ((users.length > 0) && (currentTask() !== '...')) {
            return users.find(x => x.id === currentTask().assignedId).username
        } else {
            return '...';
        }
    }

    const userAuthor = () => {
        if ((users.length > 0) && (currentTask() !== '...')) {
            return users.find(x => x.id === currentTask().userId).username
        } else {
            return '...';
        }
    }

    const taskType = () => {
        if ((tasks.length > 0) && (currentTask() !== '...')) {
            if (currentTask().type === 'task') {
                return 'Задача'
            } else {
                return 'Ошибка'
            }
        } else {
            return '...';
        }
    }

    const taskRank = () => {
        if ((tasks.length > 0) && (currentTask() !== '...')) {
            if (currentTask().rank === 'low') {
                return ("Низкий")
            } else if (currentTask().rank === 'medium') {
                return ("Средний")
            } if (currentTask().rank === 'high') {
                return ("Высокий")
            }
        } else {
            return '...';
        }
    }

    const [isModal, setModal] = React.useState(false);

    return (
        <>
            <div className="card__wrap">
                <div className="card__col  col-1">
                    <p className="card__title">Исполнитель</p>
                    <p className="card__text">{userAssigned()}</p>

                    <p className="card__title">Автор задачи</p>
                    <p className="card__text">{userAuthor()}</p>

                    <p className="card__title">Тип запроса</p>
                    <p className="card__text">{taskType()}
                    </p>

                    <p className="card__title">Приоритет</p>
                    <p className="card__text">{taskRank()}
                    </p>

                    <p className="card__title">Дата создания</p>
                    <p className="card__text">{moment(currentTask().dateOfCreation).format('DD.MM.YYYY HH:MM')}</p>

                    <p className="card__title">Дата изменения</p>
                    <p className="card__text">{moment(currentTask().dateOfUpdate).format('DD.MM.YYYY HH:MM')}</p>

                    <p className="card__title">Затрачено времени</p>
                    <p className="card__text">{currentTask().timeInMinutes}</p>

                    <button
                        className="btn-primary  btn"
                        onClick={() => setModal(true)}
                    >Сделать запись о работе
                    </button>
                </div>


                <div className="card__col  col-2">
                    <p className="card__title">Описание</p>
                    <p className="card__decription">
                        {currentTask().description}
                    </p>
                </div>


                <div className="card__col  col-3">
                    <form
                        className="card__form"
                        form action="#"
                        method="post">
                        <label
                            htmlFor="comment"
                            className="card__title  label"
                        >Комментарии (1)
                        </label>
                        <textarea
                            className="input__comment  input"
                            id="comment"
                            type="text"
                            name="comment"
                            placeholder="Текст комментария"
                            required
                        ></textarea>
                        <button
                            className="btn-success  btn"
                            type="submit">Добавить комментарий</button>
                    </form>

                    <div className="card__commets">

                        <div className="card__comment  comment">
                            <div className="comment__title">
                                <p className="comment__user-name">Шерлок Холмс (27.03.22 17:42)</p>
                            </div>
                            <p className="comment__text">Я так не думаю</p>
                        </div>

                        <div className="card__comment  comment">
                            <div className="comment__title">
                                <p className="comment__user-name">Малыш грут (26.03.22 12:00)</p>
                                <button className="btn__comment  btn-link  btn  currentUser">Удалить</button>
                            </div>

                            <p className="comment__text">Самый лучший комментарий...</p>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>

            </div>
            <Modal
                isVisible={isModal}
                onClose={() => setModal(false)}
            />

        </>
    )
}

export default TaskCard;