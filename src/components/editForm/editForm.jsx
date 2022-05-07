import React from "react";
import { tasks } from "../../moсks";
import { useParams } from "react-router-dom";


const EditForm = ({  users }) => {


    console.log(tasks)
    console.log(users)

    const { id } = useParams();

    // const currentCard = tasks.find(x => x._id === id);

    return (
        <div className="card__wrap">
            <div className="card__col  col-1">

                {/* <fieldset className="card__field">
                    <label
                        htmlFor="userName"
                        className="card__label  label"
                    >Исполнитель
                    </label>
                    <textarea
                        typeof="text"
                        className="input"
                        name="userName"
                        defaultValue={currentCard.userName}
                        required
                        >
                    </textarea>

                </fieldset> */}

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

export default EditForm;