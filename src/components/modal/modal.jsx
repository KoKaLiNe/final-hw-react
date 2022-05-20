import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppRoute } from "../../const";
import { editUser } from "../../api";
import { action } from "mobx";
import { tasksMock } from "../../moсks";
import { users } from "../../store";

const Modal = observer(({ isVisible = false, onClose, tasks, loggedUser, userPassword }) => {

    const { pathname } = useLocation();
    const { id } = useParams();

    let currentUser;
    let currentTask;

    if (pathname === `${AppRoute.USER_LIST}/${id}`) {
        if (users.data.find(x => x.id === id) === undefined) {
            currentUser = tasksMock
        } else {
            currentUser = users.data.find(x => x.id === id)
        }
    } else if (pathname === `${AppRoute.TASK_LIST}/${id}`) {

        if (tasks.find(x => x.id === id) === undefined) {
            currentTask = tasksMock
        } else {
            currentTask = tasks.find(x => x.id === id)
        }
    }


    // console.log("currentUser", currentUser)
    // console.log("currentTask", currentTask)


    // const [loggedUser, setLoggedUser] = useState({
    //     id: ""
    // })

    // if ((loggedUser.id === "") && (localStorage.length > 0)) {
    //     setLoggedUser(JSON.parse(localStorage.getItem("loggedUserInfo")))
    // }

    // console.log("loggedUser", loggedUser)
    // console.log("localStorage", localStorage.getItem("loggedUserInfo",))

    const [userForm, setUserForm] = useState({
        username: (pathname === `${AppRoute.USER_LIST}/${id}` && currentUser.username),
        about: (pathname === `${AppRoute.USER_LIST}/${id}` && currentUser.about),
        photoUrl: (pathname === `${AppRoute.USER_LIST}/${id}` && currentUser.photoUrl),

    })
    const [timeForm, setTimeForm] = useState({
        timeInMinutes: (pathname === `${AppRoute.TASK_LIST}/${id}` && currentTask.timeInMinutes),
        // comment:(pathname === `${AppRoute.TASK_LIST}/${id}` && currentTask.comment),
        // currentUser: (pathname === `${AppRoute.TASK_LIST}/${id}` && currentTask.currentUser)
    })

    // console.log(currentTask.timeInMinutes)

    const handleFieldChange = action((e) => {
        if (pathname === `${AppRoute.USER_LIST}/${id}`) {
            const { name, value } = e.target;
            setUserForm({ ...userForm, [name]: value })

        } else if (pathname === `${AppRoute.TASK_LIST}/${id}`) {
            const { name, value } = e.target;
            setTimeForm({ ...timeForm, [name]: value })
        }
    })

    const handleSubmit = action(() => {
        if (pathname === `${AppRoute.USER_LIST}/${id}`) {
            users.editUser({
                "id": loggedUser.id,
                "login": loggedUser.login,
                "username": userForm.username,
                "about": userForm.about,
                "photoUrl": `${userForm.photoUrl}`,
                "password": `${userPassword}`
            });
            onClose();
        }

    })

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
                                        onChange={handleFieldChange}
                                        className="input__modal  input__title  input"
                                        name="username"
                                        placeholder=""
                                        defaultValue={userForm.username}
                                        required
                                    ></textarea>

                                    <label
                                        htmlFor="urlpicture"
                                        className="label__modal  label"
                                    >URL фотографии
                                    </label>
                                    <input
                                        typeof="url"
                                        onChange={handleFieldChange}
                                        className="input__modal  input__title  input"
                                        name="photoUrl"
                                        placeholder=""
                                        defaultValue={userForm.photoUrl}
                                        required
                                    ></input>

                                    <label
                                        htmlFor="status"
                                        className="label__modal  label"
                                    >О себе
                                    </label>
                                    <textarea
                                        typeof="text"
                                        onChange={handleFieldChange}
                                        className="input__modal-comment  input"
                                        name="about"
                                        placeholder="Расскажите о себе"
                                        defaultValue={userForm.about}
                                        required
                                    ></textarea>

                                </fieldset>
                            </div>
                        </div>
                        <div className="modal__footer">
                            <div className="modal__footer-buttnos">
                                <button
                                    typeof="submit"
                                    onClick={handleSubmit}
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
                                        htmlFor="timeInMinutes"
                                        className="label__modal  label"
                                    >Затраченное время
                                    </label>
                                    <textarea
                                        typeof="text"
                                        onChange={handleFieldChange}
                                        className="input__modal  input__title  input"
                                        name="timeInMinutes"
                                        placeholder="Введите количество затраченного времени"
                                        defaultValue={timeForm.timeInMinutes}
                                        required
                                    ></textarea>

                                    <label
                                        htmlFor="timeUnit"
                                        className="label__modal  label"
                                    >Единица измерения
                                    </label>
                                    <select
                                        className="modal__select  select"
                                        onChange={handleFieldChange}
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
                                        onChange={handleFieldChange}
                                        className="input__modal-comment  input"
                                        name="title"
                                        placeholder="Добавьте комментарий"
                                    // defaultValue={}
                                    ></textarea>

                                </fieldset>
                            </div>
                        </div>
                        <div className="modal__footer">
                            <div className="modal__footer-buttnos">
                                <button
                                    to={`/`}
                                    onClick={handleSubmit}
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