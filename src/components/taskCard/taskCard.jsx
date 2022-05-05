import React from "react";
import { tasks } from "../../moсks";
import { useParams } from "react-router-dom";

const TaskCard = () => {

    const { id } = useParams();

    const currentCard = tasks.find(x => x._id === id);

    return (
        <div className="task-card__wrap">
            <div className="task-card__col  col-1">
                <p className="task-card__title">Исполнитель</p>
                <p className="task-card__text">{currentCard.user}</p>

                <p className="task-card__title">Автор задачи</p>
                <p className="task-card__text">Доктор Ватсон (нет автозаполнения)</p>

                <p className="task-card__title">Тип запроса</p>
                <p className="task-card__text">Задача (нет автозаполнения)</p>

                <p className="task-card__title">Приоритет</p>
                <p className="task-card__text">{currentCard.priority}</p>

                <p className="task-card__title">Дата создания</p>
                <p className="task-card__text">01.12.2021 12:01 (нет автозаполнения)</p>

                <p className="task-card__title">Дата изменения</p>
                <p className="task-card__text">01.12.2021 12:20 (нет автозаполнения)</p>

                <p className="task-card__title">Затрачено времени</p>
                <p className="task-card__text">0 часов 0 минут (нет автозаполнения)</p>

                <button className="btn-primary  btn">
                    Сделать запись о работе
                </button>
            </div>


            <div className="task-card__col  col-2">
                <p className="task-card__title">Описание</p>
                <p className="task-card__decription">
                    Какой-то текст задачи, например, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet consectetur dolor, nec consectetur nisl mattis ut. Proin ac sapien at elit lacinia semper. Nullam vestibulum rutrum efficitur. Sed et egestas ante, id ullamcorper ante. Maecenas porta sem ultrices libero tempus, eu laoreet turpis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed laoreet est et nisi tristique, ut hendrerit tellus pulvinar. Proin eget elit a mauris convallis molestie nec vel nisi. Etiam accumsan porta velit et convallis. Maecenas euismod scelerisque lectus, non varius velit condimentum non. Vestibulum luctus risus et metus volutpat, at sodales massa gravida.
                </p>
                <p className="task-card__decription">
                    Praesent finibus, velit ut luctus dictum, felis nibh sodales dui, nec aliquam ipsum arcu tempor ante. Aliquam gravida lorem quis egestas varius. Quisque cursus est vitae ipsum iaculis, sed convallis massa efficitur. In vestibulum, sapien et consequat luctus, arcu neque pretium justo, nec ullamcorper tortor nulla id nunc. Suspendisse eleifend gravida tortor, sit amet porta lorem posuere sed. Vivamus est neque, varius id sagittis sit amet, blandit eget odio. Fusce egestas elit nec arcu mollis mattis. In porta dapibus lectus in elementum. Nunc non varius ante. Suspendisse sit amet purus ex. Phasellus aliquet ac tortor eu mattis. Suspendisse eget lectus et massa ultricies feugiat.
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