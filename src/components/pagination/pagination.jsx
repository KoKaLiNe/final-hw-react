import React from "react";

const Pagination = () => {
    return (
        <>
            <div className="pagination">
                <div className="pagination__inner">
                    <button
                        className="btn-pagination  btn-prev  btn"
                        disabled
                        >
                        Назад
                    </button>
                    <button
                        className="btn-pagination  btn  active">
                        1
                    </button>
                    <button
                        className="btn-pagination  btn">
                        2
                    </button>
                    <button
                        className="btn-pagination  btn">
                        3
                    </button>
                    <button
                        className="btn-pagination  btn-next  btn">
                        Вперед
                    </button>
                </div>
                <span className="pagination__count">Показано 1 - 10 из 28</span>
            </div>
        </>
    )
}

export default Pagination;