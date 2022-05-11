import { action } from "mobx";
import { observer } from "mobx-react-lite";
import React from "react";

const StatusBtn = observer(({ props }) => {

    // const { startStatus, setStartStatus, id } = props
    // const setStatus = (id, value) => {
    //     setStartStatus(value);
    //     console.log(startStatus)
    //     // editStatus(id, value);
    // }

    // const handleChangeStatus = action((e) => {
    //     e.preventDefault();
    //     if (e.target.value === 'inProgress') {
    //         if (startStatus === 'opened') {
    //             setStatus(id, e.target.value);
    //         }
    //     } else if (e.target.value === `testing`) {
    //         if (startStatus === 'inProgress') {
    //             setStatus(id, e.target.value);
    //         }
    //     } else if (e.target.value === `opened`) {
    //         if (startStatus === 'inProgress' || startStatus === 'testing' || startStatus === 'complete') {
    //             setStatus(id, e.target.value);
    //         }
    //     } else if (e.target.value === `complete`) {
    //         if (startStatus === 'opened' || startStatus === 'inProgress' || startStatus === 'testing') {
    //             setStatus(id, e.target.value);
    //         }
    //     }
    // })

    // const inProgressBtn = () => {
    //     if (startStatus === 'opened') {
    //         return (
    //             <>
    //                 <button
    //                     className="btn-board__header  btn"
    //                     onClick={handleChangeStatus}
    //                     value="inProgress"
    //                 >Взять в работу</button>
    //             </>
    //         )
    //     }
    // }

    // const testingBttn = () => {
    //     if (startStatus === 'inProgress') {
    //         return (
    //             <>
    //                 <button
    //                     className="btn-board__header  btn"
    //                     onClick={handleChangeStatus}
    //                     value="testing"
    //                 >На тестирование</button>
    //             </>
    //         )

    //     }
    // }

    // const completeBtn = () => {
    //     if (startStatus === 'opened' || startStatus === 'testing' || startStatus === 'inProgress') {
    //         return (
    //             <>
    //                 <button
    //                     className="btn-board__header  btn"
    //                     onClick={handleChangeStatus}
    //                     value="complete"
    //                 >Сделано</button>
    //             </>
    //         )

    //     }
    // }

    // const openedBtn = () => {
    //     if (startStatus === 'complete' || startStatus === 'inProgress' || startStatus === 'testing') {
    //         return (
    //             <>
    //                 <button
    //                     className="btn-board__header  btn"
    //                     onClick={handleChangeStatus}
    //                     value="opened"
    //                 >Переоткрыть</button>
    //             </>
    //         )

    //     }
    // }



    return (
        <>
            {/* {inProgressBtn()}
            {testingBttn()}
            {completeBtn()}
            {openedBtn()} */}
            {/* <button className="btn-board__header  btn">
                Взять в работу
            </button> */}
        </>
    )
})

export default StatusBtn