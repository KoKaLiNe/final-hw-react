import React from "react";

const User = ({ _id, userName }) => {
function showUserName(e) {
    e.preventDefault();
    console.log(userName);
}

    return (
        <>
            <div className="board__item">
                <div className="user__name"
                onClick={showUserName}
                >
                    {userName}
                </div>
            </div>
        </>
    )
}

export default User;