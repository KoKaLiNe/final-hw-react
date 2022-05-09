import React from "react";


const Filter = () => {
   return (
      <div className="board__filter">
         {/*     Сделать плейсходеры для селектов     */}
         <div className="board__filter-selector  type" id="filter-type">
            {/* <select
               className="board__filter-selector"
               name="type"
               id="filterType">

               <option value="task">Задача</option>
               <option value="error">Ошибка</option>

            </select> */}
            <span className="board__filter-select">Тип</span>
            <img src="./img/icons/select-arrow.svg" alt="" />
         </div>

         <div className="board__filter-selector  title" id="filter-task-name">
            {/* название задачи - строка! */}
            <span>Название задачи</span>
         </div>

         <div className="board__filter-selector  username" id="filter-user">
            <span>Пользователь</span>
            <img src="./img/icons/select-arrow.svg" alt="" />
         </div>

         <div className="board__filter-selector  status" id="filter-status">
            <span>Статус</span>
            <img src="./img/icons/select-arrow.svg" alt="" />
         </div>

         <div className="board__filter-selector  rank" id="filter-priority">
            <span>Приоритет</span>
            <img src="./img/icons/select-arrow.svg" alt="" />
         </div>

         <button className="btn-primary  btn">Применить</button>
      </div>
   )
}
export default Filter;