import { action } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { tasks, users } from "../../store";
import { type, status, rank } from "../../const";


const Filter = observer(() => {

   const [checkedTypeState, setCheckedTypeState] = useState(
      new Array(type.length).fill(false)
   );
   const [checkedUserState, setCheckedUserState] = useState(
      new Array(users.data.length).fill(false)
   );
   const [checkedStatusState, setCheckedStatusState] = useState(
      new Array(status.length).fill(false)
   );
   const [checkedRankState, setCheckedRankState] = useState(
      new Array(rank.length).fill(false)
   );

   const [typeCheck, setTypeCheck] = useState([]);
   const [userCheck, setUserCheck] = useState([]);
   const [statusCheck, setStatusCheck] = useState([]);
   const [rankCheck, setRankCheck] = useState([]);

   let filter = {
      "assignedUsers": userCheck,
      "type": typeCheck,
      "status": statusCheck,
      "rank": rankCheck
   }

   // Фильтрация по Типу

   const handleChangeType = (position) => {
      const updatedCheckedState = checkedTypeState.map((item, index) =>
         index === position ? !item : item
      );

      setCheckedTypeState(updatedCheckedState);

      const totalTypeFilter = updatedCheckedState.reduce(
         (sum, currentState, index) => {
            if (currentState === true) {
               sum.push(type[index].value)
               return sum;
            } else if (currentState === false && typeCheck.includes(type[index].value) && sum.includes(type[index].value)) {
               sum.splice(type[index].value)
               return sum;
            }
            return sum;
         }, []
      );
      setTypeCheck(totalTypeFilter);
   };

   // Фильтрация по Пользователю

   const handleChangeUser = (position) => {
      const updatedCheckedState = checkedUserState.map((item, index) =>
         index === position ? !item : item
      );

      setCheckedUserState(updatedCheckedState);

      const totalUserFilter = updatedCheckedState.reduce(
         (sum, currentState, index) => {
            if (currentState === true) {
               sum.push(users.data[index].id)
               return sum;
            } else if (currentState === false && userCheck.includes(users.data[index].id) && sum.includes(users.data[index].id)) {
               sum.splice(users.data[index].id)
               return sum;
            }
            return sum;
         }, []
      );
      setUserCheck(totalUserFilter);
   };

   //  Фильтрация по имени задачи!!!!!!!!!!!


   // Фильтрация по Приоритету

   const handleChangeStatus = (position) => {
      const updatedCheckedState = checkedStatusState.map((item, index) =>
         index === position ? !item : item
      );

      setCheckedStatusState(updatedCheckedState);

      const totalStatusFilter = updatedCheckedState.reduce(
         (sum, currentState, index) => {
            if (currentState === true) {
               sum.push(status[index].value)
               return sum;
            } else if (currentState === false && statusCheck.includes(status[index].value) && sum.includes(status[index].value)) {
               sum.splice(status[index].value)
               return sum;
            }
            return sum;
         }, []
      );
      setStatusCheck(totalStatusFilter);
   };

   // Фильтрация по Приоритету

   const handleChangeRank = (position) => {
      const updatedCheckedState = checkedRankState.map((item, index) =>
         index === position ? !item : item
      );

      setCheckedRankState(updatedCheckedState);

      const totalRankFilter = updatedCheckedState.reduce(
         (sum, currentState, index) => {
            if (currentState === true) {
               sum.push(rank[index].value)
               return sum;
            } else if (currentState === false && rankCheck.includes(rank[index].value) && sum.includes(rank[index].value)) {
               sum.splice(rank[index].value)
               return sum;
            }
            return sum;
         }, []
      );
      setRankCheck(totalRankFilter);
   };



   //  НЕ УДАЛЯТЬ
   const handelFilter = action(() => {
      tasks.filter = filter;
      tasks.filterTask();

   })


   return (
      <>
         <div className="board__filter  filter">

            {/*  ФИЛЬТР ПО ТИПУ  */}
            <div className="filter__item  type">
               <div className="filter__wrapper  type">
                  <div className="filter__title">
                     <p> Тип </p>
                     <svg className="filter__arrow" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.07861 6L0 0H1.82084L3.48812 3.52304C3.59537 3.74706 3.69287 3.98916 3.78062 4.24932C3.86837 4.50948 3.92931 4.72809 3.96344 4.90515H4.02194C4.05606 4.72087 4.12188 4.50045 4.21938 4.2439C4.31688 3.98374 4.41682 3.74345 4.5192 3.52304L6.18647 0H8L4.92139 6H3.07861Z" fill="#B5B5B5" />
                     </svg>
                  </div>
                  <div className="checkbox__list">
                     {type.map(({ name }, index) => {
                        return (

                           <div className="checkbox__item" key={index}>
                              <input
                                 className="filter__checkbox"
                                 type="checkbox"
                                 id={`filter-type-${index}`}
                                 name={name}
                                 value={name}
                                 checked={checkedTypeState[index]}
                                 onChange={() => handleChangeType(index)}
                              />
                              <label
                                 className="filter__label"
                                 htmlFor={`filter-type-${index}`}
                              >{name}</label>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>

            {/* ФИЛЬТР ПО НАЗВАНИЮ ЗАДАЧИ
            !!!!!!!!!!!!!!!!!!!!!!!!!! не забыть про шити инпут */}
            <div className="filter__item  task-name">
               <div className="filter__wrapper  task-name">
                  <fieldset className="filter__fieldset">
                     <textarea
                        type="text"
                        //   onChange={handleFieldChange}
                        className="input  input-filter"
                        name="filter-theme"
                        id="filter-theme"
                        placeholder="Название задачи"
                        //   defaultValue={form.theme}
                        required
                     ></textarea>
                     {/* <label className="filter__label" htmlFor="filter-theme" ></label> */}
                  </fieldset>
               </div>


            </div>

            {/* ФИЛЬТР ПО ПОЛЬЗОВАТЕЛЮ */}
            <div className="filter__item  user">
               <div className="filter__wrapper  user">
                  <div className="filter__title">
                     <p> Пользователь </p>
                     <svg className="filter__arrow" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.07861 6L0 0H1.82084L3.48812 3.52304C3.59537 3.74706 3.69287 3.98916 3.78062 4.24932C3.86837 4.50948 3.92931 4.72809 3.96344 4.90515H4.02194C4.05606 4.72087 4.12188 4.50045 4.21938 4.2439C4.31688 3.98374 4.41682 3.74345 4.5192 3.52304L6.18647 0H8L4.92139 6H3.07861Z" fill="#B5B5B5" />
                     </svg>
                  </div>
                  <div className="checkbox__list">

                     <div className="checkbox__wrapper">
                        {users.data.map(({ id, username }, index) => {
                           return (
                              <div className="checkbox__item" key={index}>
                                 <input
                                    className="filter__checkbox"
                                    type="checkbox"
                                    id={`filter-user-${index}`}
                                    name={id}
                                    value={id}
                                    checked={checkedUserState[index]}
                                    onChange={() => handleChangeUser(index)}
                                 />
                                 <label className="filter__label" htmlFor={`filter-user-${index}`}>{username}</label>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>

            </div>
            {/* ФИЛЬТР ПО СТАТУСУ */}
            <div className="filter__item  status">
               <div className="filter__wrapper  status">
                  <div className="filter__title">
                     <p> Статус </p>
                     <svg className="filter__arrow" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.07861 6L0 0H1.82084L3.48812 3.52304C3.59537 3.74706 3.69287 3.98916 3.78062 4.24932C3.86837 4.50948 3.92931 4.72809 3.96344 4.90515H4.02194C4.05606 4.72087 4.12188 4.50045 4.21938 4.2439C4.31688 3.98374 4.41682 3.74345 4.5192 3.52304L6.18647 0H8L4.92139 6H3.07861Z" fill="#B5B5B5" />
                     </svg>
                  </div>
                  <div className="checkbox__list">

                     {status.map(({ name }, index) => {
                        return (
                           <div className="checkbox__item" key={index}>
                              <div className="">
                                 <div className="">
                                    <input
                                       className="filter__checkbox"
                                       type="checkbox"
                                       id={`filter-status-${index}`}
                                       name={name}
                                       value={name}
                                       checked={checkedStatusState[index]}
                                       onChange={() => handleChangeStatus(index)}
                                    />
                                    <label
                                       className="filter__label"
                                       htmlFor={`filter-status-${index}`}
                                    >{name}</label>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>

            {/* ФИЛЬТР ПО ПРИОРИТЕТУ */}
            <div className="filter__item  rank">
               <div className="filter__wrapper  rank">
                  <div className="filter__title">
                     <p> Приоритет </p>
                     <svg className="filter__arrow" width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.07861 6L0 0H1.82084L3.48812 3.52304C3.59537 3.74706 3.69287 3.98916 3.78062 4.24932C3.86837 4.50948 3.92931 4.72809 3.96344 4.90515H4.02194C4.05606 4.72087 4.12188 4.50045 4.21938 4.2439C4.31688 3.98374 4.41682 3.74345 4.5192 3.52304L6.18647 0H8L4.92139 6H3.07861Z" fill="#B5B5B5" />
                     </svg>
                  </div>
                  <div className="checkbox__list">
                     {rank.map(({ name }, index) => {
                        return (
                           <div className="checkbox__item" key={index}>
                              <input
                                 className="filter__checkbox"
                                 type="checkbox"
                                 id={`custom-checkbox-${index}`}
                                 name={name}
                                 value={name}
                                 checked={checkedRankState[index]}
                                 onChange={() => handleChangeRank(index)}
                              />
                              <label
                                 className="filter__label"
                                 htmlFor={`custom-checkbox-${index}`}
                              >{name}</label>
                           </div>
                        );
                     })}
                  </div>
               </div>

            </div>

            <button
               className="btn-primary  btn"
               onClick={() => { handelFilter() }}
            >Применить
            </button>
         </div>
      </>
   )
})
export default Filter;