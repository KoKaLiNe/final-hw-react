import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import Modal from "../modal/modal";
import { observer } from "mobx-react-lite";
import { getTasks, getUsers, addComments, getComments, deleteComment } from "../../api";
import { tasksMock } from "../../moсks";
import { action } from "mobx";

const TaskCard = observer(() => {

    const { id } = useParams();
    const [currentTask, setCurrentTask] = useState([]);
    const [users, setUsers] = useState([]);
    // const [userAssigned, setUserAssigned] = useState([]);
    // const [userAuthor, setUserAuthor] = useState([]);

    useEffect(() => {
        getTasks({}, 0, 0)
            .then((data) => setCurrentTask(data.data.find(x => x.id === id)));
        getUsers()
            .then((data) => setUsers(data));
    }, []
    );
    // console.log("currentTask", currentTask)
    // console.log("users", users)
    // console.log("users", users)


    // const [loggedUser, setLoggedUser] = useState({
    //     id: "",
    // })

    // if ((loggedUser.id === "") && (localStorage.length > 0)) {
    //     setLoggedUser(JSON.parse(localStorage.getItem("loggedUserInfo")))
    // }



    // let currentTask;

    // if (taskCards.find(x => x.id === id) === undefined) {
    //     currentTask = tasksMock
    // } 
    // else {
    //     currentTask = taskCards.find(x => x.id === id)
    // }

    // let userAssigned;
    // if (users.find(x => x.id === currentTask.assignedId) === undefined) {
    //     userAssigned = tasksMock.username
    // } else {
    //     userAssigned = users.find(x => x.id === currentTask.assignedId).username
    // }

    // let userAuthor
    // if (users.find(x => x.id === currentTask.userId) === undefined) {
    //     userAuthor = tasksMock.username
    // } else {
    //     userAuthor = users.find(x => x.id === currentTask.userId).username
    // }

    // const taskType = () => {
    //     if (currentTask === "null" || currentTask === undefined || currentTask.type === 'task') {
    //         return 'Задача'
    //     } else {
    //         return 'Ошибка'
    //     }
    // }

    // const taskRank = () => {
    //     if (currentTask === "null" || currentTask === undefined || currentTask.rank === 'low') {
    //         return ("Низкий")
    //     } else if (currentTask.rank === 'medium') {
    //         return ("Средний")
    //     } if (currentTask.rank === 'high') {
    //         return ("Высокий")
    //     }
    // }

    // const dateOfCreation = () => {
    //     if (currentTask === "null" || currentTask === undefined) {
    //         return ("...")
    //     } else {
    //         return (moment(currentTask.dateOfCreation).format('DD.MM.YYYY HH:MM'))
    //     }
    // }

    // const dateOfUpdate = () => {
    //     if (currentTask === "null" || currentTask === undefined) {
    //         return ("...")
    //     } else {
    //         return (moment(currentTask.dateOfUpdate).format('DD.MM.YYYY HH:MM'))
    //     }
    // }

    // const timeInMinutes = () => {
    //     if (currentTask === "null" || currentTask === undefined) {
    //         return (0)
    //     } else {
    //         return (currentTask.timeInMinutes)
    //     }
    // }

    // const description = () => {
    //     if (currentTask === "null" || currentTask === undefined) {
    //         return ("...")
    //     } else {
    //         return (currentTask.description)
    //     }
    // }

    // const [isModal, setModal] = React.useState(false);

    // const [commentForm, setCommentForm] = React.useState({
    //     taskId: id,
    //     userId: JSON.parse(localStorage.getItem("loggedUserInfo")).id,
    //     text: '',
    //     dateOfCreation: new Date(),
    //     dateOfUpdate: new Date()
    // });
    // const handleFieldChange = (evt) => {
    //     const { name, value } = evt.target;
    //     setCommentForm({ ...commentForm, [name]: value })
    //     console.log(commentForm)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("submit", commentForm)
    //     addComments(
    //         {
    //             "taskId": commentForm.taskId,
    //             "userId": commentForm.userId,
    //             "text": commentForm.text,
    //             "dateOfCreation": commentForm.dateOfCreation,
    //             "dateOfUpdate": commentForm.dateOfUpdate,
    //         }
    //     )

    // }


    // const [comments, setComments] = useState([])

    // useEffect(() => {
    //     getComments(id).then((data) => setComments(data))
    // }, []);

    // const handelDeletComment = action((e) => {
    //     deleteComment(e.target.value);
    //     getComments(id).then((data) => setComments(data));
    //     console.log("comments", comments)
    // })
    if ((currentTask === {})) {
        console.log("пусто currentTask", currentTask)
        console.log("пусто users", users)
        return ("")
    } else {
        return (
            <>
                <div className="card__wrap">
                    <div className="card__col  col-1">
                        <p className="card__title">Исполнитель</p>
                        <p className="card__text">
                            {/* {users.find(x => x.id === currentTask.assignedId).username} */}
                            {console.log("return currentTask", currentTask)}
                            {console.log("return users", users)}
                        </p>

                        <p className="card__title">Автор задачи</p>
                        <p className="card__text">
                            {/* {userAuthor} */}
                        </p>

                        <p className="card__title">Тип запроса</p>
                        <p className="card__text">
                            {/* {taskType()} */}
                        </p>

                        <p className="card__title">Приоритет</p>
                        <p className="card__text">
                            {/* {taskRank()} */}
                        </p>

                        <p className="card__title">Дата создания</p>
                        {/* <p className="card__text">{dateOfCreation()}</p> */}

                        <p className="card__title">Дата изменения</p>
                        {/* <p className="card__text">{dateOfUpdate()}</p> */}

                        <p className="card__title">Затрачено времени</p>
                        {/* <p className="card__text">{` ${Math.round(timeInMinutes() / 60 / 24)} дней ${Math.round(timeInMinutes() / 60)} часов ${timeInMinutes()} минут`}</p> */}

                        <button
                            className="btn-primary  btn"
                        // onClick={() => setModal(true)}
                        >Сделать запись о работе
                        </button>
                    </div>


                    <div className="card__col  col-2">
                        <p className="card__title">Описание</p>
                        <p className="card__decription">
                            {/* {description()} */}
                        </p>
                    </div>


                    <div className="card__col  col-3">
                        <form
                            className="card__form"
                            // form action="#"
                            method="post">
                            <label
                                htmlFor="comment"
                                className="card__title  label"
                            >Комментарии
                                {/* ({comments.length}) */}
                            </label>
                            <textarea
                                // onChange={handleFieldChange}
                                className="input__comment  input"
                                id="text"
                                type="text"
                                name="text"
                                placeholder="Текст комментария"
                                required
                            ></textarea>
                            <button
                                // onClick={handleSubmit}
                                className="btn-success  btn"
                                type="submit"
                            >Добавить комментарий</button>
                        </form>

                        <div className="card__comments">

                            {/* {comments.map((comment) => {
                            return (
                                <div className="card__comment  comment" key={comment.id}>
                                    <div className="comment__title">
                                        <p className="comment__user-name">{(users.find(x => x.id === comment.userId).username)} ({moment(comment.dateOfUpdate).format('DD.MM.YYYY HH:MM')})</p>

                                        {loggedUser.id === comment.userId &&
                                            <button
                                                onClick={handelDeletComment}
                                                type="button"
                                                className="btn__comment  btn-link  btn  currentUser"
                                                value={comment.id}
                                            >Удалить</button>}

                                    </div>
                                    <p className="comment__text">{comment.text}</p>
                                </div>
                            )
                        })} */}

                        </div>
                    </div>
                </div>
                {/* <Modal
                // isVisible={isModal}
                // onClose={() => setModal(false)}
                // tasks={tasks}
                // users={users}
            /> */}

            </>
        )
    }
})

export default TaskCard;