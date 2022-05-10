import { observer } from "mobx-react-lite";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppRoute } from "../../const";
import { loggedUser } from "../../moсks";


const Modal = observer(({ isVisible = false, onClose }) => {

    const { pathname } = useLocation();
    const { id } = useParams();

    if (isVisible && pathname === `${AppRoute.USER_LIST}/${id}` && loggedUser.id) {
        return (
            <>
                <div className="modal" onClick={onClose}>
                    <div className="modal__dialog"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="modal__header">
                            <h3 className="modal__title">Редактирование пользователя</h3>
                        </div>
                        <div className="modal__body">
                            <div className="modal__content">
                                <fieldset className="modal__field  field">
                                    <label
                                        htmlFor="username"
                                        className="label__modal  label"
                                    >Имя пользователя
                                    </label>
                                    <textarea
                                        typeof="text"
                                        // onChange={}
                                        className="input__modal  input__title  input"
                                        name="username"
                                        placeholder=""
                                        defaultValue={loggedUser.username}
                                        required
                                    ></textarea>

                                    <label
                                        htmlFor="urlpicture"
                                        className="label__modal  label"
                                    >URL фотографии
                                    </label>
                                    <input
                                        typeof="url"
                                        // onChange={}
                                        className="input__modal  input__title  input"
                                        name="urlpicture"
                                        placeholder=""
                                        required
                                    ></input>

                                    <label
                                        htmlFor="status"
                                        className="label__modal  label"
                                    >О себе
                                    </label>
                                    <textarea
                                        typeof="text"
                                        // onChange={}
                                        className="modal__comment  input"
                                        name="title"
                                        placeholder="Расскажите о себе"
                                        required
                                    ></textarea>

                                </fieldset>
                            </div>
                        </div>
                        <div className="modal__footer">
                            <div className="modal__footer-buttnos">
                                <button
                                    // onClick={}
                                    className="btn-board__header  btn-primary  btn">
                                    Добавить
                                </button>
                                <button
                                    className="btn-board__header  btn"
                                    onClick={onClose}
                                >
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    } else if (isVisible && pathname === `${AppRoute.TASK_LIST}/${id}`) {
        return (
            <>
                <div className="modal" onClick={onClose}>
                    <div className="modal__dialog"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="modal__header">
                            <h3 className="modal__title">Запись о работе</h3>
                        </div>
                        <div className="modal__body">
                            <div className="modal__content">
                                <fieldset className="modal__field  field">
                                    <label
                                        htmlFor="timeSpent"
                                        className="label__modal  label"
                                    >Затраченное время
                                    </label>
                                    <textarea
                                        typeof="text"
                                        // onChange={}
                                        className="input__modal  input__title  input"
                                        name="timeSpent"
                                        placeholder=""
                                        // defaultValue={}
                                        required
                                    ></textarea>

                                    <label
                                        htmlFor="timeUnit"
                                        className="label__modal  label"
                                    >Единица измерения
                                    </label>
                                    <select
                                        className="modal__select  select"
                                        // onChange={}
                                        // defaultValue={}
                                        name="timeUnit">
                                        <option
                                            value="day"
                                        >День</option>
                                        <option
                                            value="hour"
                                        >Час</option>
                                        <option
                                            value="minute"
                                        >Минуты</option>
                                    </select>

                                    <label
                                        htmlFor="status"
                                        className="label__modal  label"
                                    >Комментарий
                                    </label>
                                    <textarea
                                        typeof="text"
                                        // onChange={}
                                        className="modal__comment  input"
                                        name="title"
                                        placeholder="Добавьте комментарий"
                                        // defaultValue={}
                                        required
                                    ></textarea>

                                </fieldset>
                            </div>
                        </div>
                        <div className="modal__footer">
                            <div className="modal__footer-buttnos">
                                <button
                                    to={`/`}
                                    className="btn-board__header  btn-primary  btn">
                                    Добавить
                                </button>
                                <button
                                    className="btn-board__header  btn"
                                    onClick={onClose}
                                >
                                    Отмена
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

});

export default Modal