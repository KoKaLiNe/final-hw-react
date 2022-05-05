import React from "react";
import { tasks, users } from "../../moсks";
import { useState } from "react";

const Filter = () => {
   return (
      <div className="board__filter">
         {/*     Сделать плейсходеры для селектов     */}
         <div className="board__filter-selector">
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

         <div className="board__filter-selector" id="filter-task-name">
            {/* название задачи - строка! */}
            <span>Название задачи</span>
            <img src="./img/icons/v.svg" alt="" />
         </div>

         <div className="board__filter-selector" id="filter-user">
            <span>Пользователь</span>
            <img src="./img/icons/v.svg" alt="" />
         </div>

         <div className="board__filter-selector" id="filter-status">
            <span>Статус</span>
            <img src="./img/icons/v.svg" alt="" />
         </div>

         <div className="board__filter-selector" id="filter-priority">
            <span>Приоритет</span>
            <img src="./img/icons/v.svg" alt="" />
         </div>

         <button className="btn-primary  btn">Применить</button>
      </div>
   )
}
export default Filter;