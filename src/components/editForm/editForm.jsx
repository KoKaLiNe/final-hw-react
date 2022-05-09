import React from "react";
import { AppRoute } from "../../const";
import { useLocation, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";


const EditForm = observer(({ tasks, users }) => {

    const { pathname } = useLocation();
    const { id } = useParams();


    const [form, setForm] = React.useState({
        assignedId: '',
        type: 'task',
        status: 'low'
        // date: (id && moment(currentCard.date).format('YYYY-MM-DDThh:mm')) || moment(new Date()).format('YYYY-MM-DDThh:mm')
    });

    const handleFieldChange = (evt) => {
        const { name, value } = evt.target;
        setForm({ ...form, [name]: value })
    }

    // const hist = useHistory();

    


    if (pathname === AppRoute.ADD) {
        
        return (
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
                            name="assignedUser">
                            {users.map((user) =>
                                <option
                                className=""
                                    value={user.assignedId} key={user.id}> {user.username} </option>
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
                            {/* это лучше парсить */}
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
                            name="status"
                            id="">
                            {/* это лучше парсить */}
                            <option value="">Низкий</option>
                            <option value="">Средний</option>
                            <option value="">Выокий</option>
                        </select>

                    </fieldset>

                    {/* <p className="card__title"></p>
                    <p className="card__text">
                    </p> */}

                    {/* <p className="card__title">Тип запроса</p>
                    <p className="card__text">Задача (нет автозаполнения)</p>

                    <p className="card__title">Приоритет</p>
                    <p className="card__text">
                        
                        </p> */}

                </div>


                <div className="card__col  col-2">
                    {/* <p className="card__title">Название</p> */}
                    <fieldset>
                        <label htmlFor="">
                            Название
                        </label>
                        <textarea
                            typeof="text"
                            className="input"
                            name=""
                            defaultValue="пример"
                            required
                        >
                        </textarea>
                    </fieldset>
                    <p className="card__decription">
                        {/* {currentCard.header} */}
                    </p>
                    {/* <p className="card__title">Описание</p> */}

                    <fieldset>
                        <label htmlFor="">
                            Описание
                        </label>
                        <textarea
                            typeof="text"
                            className="input"
                            name=""
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum excepturi deleniti minus assumenda iste cum, similique aspernatur, repellat nulla a quibusdam nisi nam omnis quo, ut maiores qui accusantium blanditiis.
                            "
                            required
                        >
                        </textarea>
                    </fieldset>

                </div>


                <div className="card__col  col-3">

                </div>
            </div>

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
                        {/* {users.username.map((x, y) => <option key={y}>{x}</option>)} */}
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