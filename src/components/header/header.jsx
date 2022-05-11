import React from "react";
import { AppRoute } from "../../const";
import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { loggedUser } from "../../moсks";
import { action } from "mobx";
import { observer } from "mobx-react-lite";


const Header = observer(() => {

    const { pathname } = useLocation();
    const { id } = useParams();

    const loggedOut = () => {
        localStorage.removeItem("loggedUserInfo");
        localStorage.removeItem("userPassword");
        window.location.href = `${AppRoute.LOGIN}`;
    }

    const headerInner = () => {
        if (pathname !== AppRoute.LOGIN) {
            return (
                <>
                    <section className="main__header-wrap">
                        <div className="main__header-group-link">
                            <Link to={AppRoute.TASK_LIST} className={`main__lnk  task-lnk  ${(pathname === AppRoute.TASK_LIST || pathname === `${AppRoute.TASK_LIST}/${id}` || pathname === AppRoute.ADD || pathname === `${AppRoute.ADD}/${id}`) && 'active-lnk'}`} >Задачи</Link>
                            <Link to={AppRoute.USER_LIST} className={`main__lnk  user-lnk ${(pathname === AppRoute.USER_LIST || pathname === `${AppRoute.USER_LIST}/${id}`) && 'active-lnk'}`}>Пользователи</Link>
                        </div>
                        <div className="main__user-profile  dropdown">
                            <span className="main__user-name">{loggedUser.username}</span>
                            <div className="main__user-img-wraper  ">
                                <div className="main__user-img" alt="Изображение профиля" />
                            </div>
                            <div className="main__user-list dropdown-content">
                                <Link to={`${AppRoute.USER_LIST}/${loggedUser.id}`} className="dropdown-link">Посмотреть профиль</Link>
                                <button
                                    onClick={() => loggedOut()}
                                    className="dropdown-link  accent"
                                >Выйти из системы</button>
                            </div>
                        </div>
                    </section>
                </>
            )

        }
    }

    return (
        <section className="main__header">
            <img src="../img/logo.svg" alt="логотип" />
            {headerInner()}
        </section>
    )
})

export default Header;