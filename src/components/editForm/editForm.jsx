import React from "react";
import { AppRoute } from "../../const";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { tasks, users } from "../../store";


const EditForm = observer(() => {

    const { pathname } = useLocation();
    const { id } = useParams();

    const defaultUserId = () => {
        return users.data.length > 0 ? users.data[0].id : ''
    }

    const loggedUser = '6273dd20d09b551dca8762a5' // мой ID временно 

    const [form, setForm] = React.useState({
        userId: loggedUser,
        assignedId: defaultUserId(),
        title: '',
        description: '',
        type: 'task',
        rank: 'low',
        dateOfCreation: new Date(),
    })

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const hist = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit form', form);
        tasks.addTask({
            userId: form.userId,
            assignedId: form.assignedId,
            title: form.title,
            description: form.description,
            type: form.type,
            rank: form.rank,
        })
        hist.goBack();
        // if (id) {
        //     evt.preventDefault();
        //     events.editEvent({
        //         id: id,
        //         theme: form.theme,
        //         comment: form.comment,
        //         date: form.date,
        //         archive: currentCard.archive,
        //         favorite: currentCard.favorite,
        //     })
        //     hist.goBack();
        // } else if (!id) {
        //     evt.preventDefault();
        //     events.addEvent({
        //         theme: form.theme,
        //         comment: form.comment,
        //         date: form.date,
        //         favorite: false,
        //         archive: false,
        //     })
        //     hist.goBack();
        // }
    }


    if (pathname === AppRoute.ADD) {

        return (
            <>
                <div className="board__header">
                    <h2 className="board__header-title  user-title">Создание</h2>
                    <div className="board__header-btns">
                        <button
                            onClick={handleSubmit}
                            className="btn-board__header  btn-primary  btn">
                            Сохранить
                        </button>
                        <button
                            className="btn-board__header  btn-default  btn">
                            Отмена
                        </button>
                    </div>
                </div>

                <section className="board__content">

                    <div className="card__wrap">
                        <div className="card__col  col-1">

                            <fieldset className="card__field">
                                <label
                                    htmlFor="assignedUser"
                                    className="card__label  label"
                                >Исполнитель
                                </label>
                                <select
                                    className="card__select"
                                    onChange={handleFieldChange}
                                    name="assignedId"
                                >{users.data.map((user) =>
                                    <option
                                        className=""
                                        name="assignedId"
                                        value={user.id}
                                        key={user.id}
                                    > {user.username} </option>
                                )}
                                </select>

                                <label
                                    htmlFor="type"
                                    className="card__label  label"
                                >Тип запроса
                                </label>
                                <select
                                    onChange={handleFieldChange}
                                    name="type">
                                    <option value="task">Задача</option>
                                    <option value="bug">Ошибка</option>
                                </select>

                                <label
                                    htmlFor="status"
                                    className="card__label  label"
                                >Приоритет
                                </label>
                                <select
                                    onChange={handleFieldChange}
                                    name="rank">
                                    <option value="low">Низкий</option>
                                    <option value="medium">Средний</option>
                                    <option value="high">Высокий</option>
                                </select>

                            </fieldset>
                        </div>

                        <div className="card__col  col-2">
                            <fieldset>
                                <label htmlFor="">
                                    Название
                                </label>
                                <textarea
                                    typeof="text"
                                    onChange={handleFieldChange}
                                    className="input"
                                    name="title"
                                    placeholder="Введите название задачи"
                                    defaultValue=""
                                    required
                                >
                                </textarea>
                            </fieldset>
                            <p className="card__decription">
                                {/* {currentCard.header} */}
                            </p>

                            <fieldset>
                                <label htmlFor="">
                                    Описание
                                </label>
                                <textarea
                                    typeof="text"
                                    onChange={handleFieldChange}
                                    className="input"
                                    name="description"
                                    placeholder="Введите описание задачи"
                                    defaultValue=""
                                    required
                                >
                                </textarea>
                            </fieldset>

                        </div>


                        <div className="card__col  col-3">

                        </div>
                    </div>

                </section>

            </>
        )


    } else if (pathname === `${AppRoute.ADD}/${id}`) {


        // const [form, setForm] = React.useState({
        //     theme: (id && currentCard.theme) || '',
        //     comment: (id && currentCard.comment) || '',
        //     date: (id && moment(currentCard.date).format('YYYY-MM-DDThh:mm')) || moment(new Date()).format('YYYY-MM-DDThh:mm')
        // });

        // const handleFieldChange = (evt) => {
        //     const { name, value } = evt.target;
        //     setForm({ ...form, [name]: value })
        // }

        // const hist = useHistory();


        return (
            <div className="card__wrap">
                <div className="card__col  col-1">

                    <select name="" id="">
                    </select>

                    <fieldset className="card__field">
                        <label
                            htmlFor="userName"
                            className="card__label  label"
                        >Исполнитель
                        </label>
                        <textarea
                            typeof="text"
                            className="input"
                            name="userName"
                            // defaultValue={currentCard.userName}
                            required
                        >
                        </textarea>

                    </fieldset>

                    <p className="card__title"></p>
                    <p className="card__text">
                        {/* {currentCard.user} */}
                    </p>

                    <p className="card__title">Тип запроса</p>
                    <p className="card__text">Задача (нет автозаполнения)</p>

                    <p className="card__title">Приоритет</p>
                    <p className="card__text">
                        {/* {currentCard.priority} */}
                    </p>

                </div>


                <div className="card__col  col-2">
                    <p className="card__title">Название</p>
                    <p className="card__decription">
                        {/* {currentCard.header} */}
                    </p>
                    <p className="card__title">Описание</p>
                    <p className="card__decription">
                        Praesent finibus, velit ut luctus dictum, felis nibh sodales dui, nec aliquam ipsum arcu tempor ante. Aliquam gravida lorem quis egestas varius. Quisque cursus est vitae ipsum iaculis, sed convallis massa efficitur. In vestibulum, sapien et consequat luctus, arcu neque pretium justo, nec ullamcorper tortor nulla id nunc. Suspendisse eleifend gravida tortor, sit amet porta lorem posuere sed. Vivamus est neque, varius id sagittis sit amet, blandit eget odio. Fusce egestas elit nec arcu mollis mattis. In porta dapibus lectus in elementum. Nunc non varius ante. Suspendisse sit amet purus ex. Phasellus aliquet ac tortor eu mattis. Suspendisse eget lectus et massa ultricies feugiat.
                    </p>
                </div>


                <div className="card__col  col-3">

                </div>
            </div>
        )

    }

})

export default EditForm;