import React from "react";
// import { tasks, users } from "../../moсks";
import { useParams } from "react-router-dom";

const TaskCard = ({ tasks, users }) => {

    // console.log('tasks', tasks)
    // console.log('users', users)

    const { id } = useParams();
    
    const currentCard = tasks.find(x => x.id === id);
    const userName = users.find(x => x.id === currentCard.userId).username

    const taskType = () => {
        return currentCard.type === 'task' ? "Задача" : "Ошибка"
    }

    const taskRank = () => {
        if (currentCard.rank === 'low') {
            return ("Низкий")
        } else if (currentCard.rank === 'medium') {
            return ("Средний")
        } if (currentCard.rank === 'high') {
            return ("Высокий")
        }
    }

    return (
        <div className="task-card__wrap">
            <div className="task-card__col  col-1">
                <p className="task-card__title">Исполнитель</p>
                <p className="task-card__text">{userName}</p>

                <p className="task-card__title">Автор задачи</p>
                <p className="task-card__text">Доктор Ватсон (нет автозаполнения)</p>

                <p className="task-card__title">Тип запроса</p>
                <p className="task-card__text">
                    {taskType()}
                </p>

                <p className="task-card__title">Приоритет</p>
                <p className="task-card__text">
                    {taskRank()}
                </p>

                <p className="task-card__title">Дата создания</p>
                <p className="task-card__text">{currentCard.dateOfCreation}</p>

                <p className="task-card__title">Дата изменения</p>
                <p className="task-card__text">{currentCard.dateOfUpdate}</p>

                <p className="task-card__title">Затрачено времени</p>
                <p className="task-card__text">{currentCard.timeInMinutes}</p>

                <button className="btn-primary  btn">
                    Сделать запись о работе
                </button>
            </div>


            <div className="task-card__col  col-2">
                <p className="task-card__title">Описание</p>
                <p className="task-card__decription">
                    {currentCard.description}
                </p>
            </div>


            <div className="task-card__col  col-3">
                <p className="task-card__title">Комментарии (1)</p>
                <form
                    className="task-card__form"
                    form action="#"
                    method="post">
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

                <div className="task-card__commets">

                    <div className="task-card__comment  comment">
                        <div className="comment__title">
                            <p className="comment__user-name">Шерлок Холмс (27.03.22 17:42)</p>
                        </div>
                        <p className="comment__text">Я так не думаю</p>
                    </div>

                    <div className="task-card__comment  comment">
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
    )
}

export default TaskCard;