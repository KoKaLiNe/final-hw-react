import React from "react";
import { Link } from "react-router-dom";

const User = ({ id, username }) => {
    // function showUserName(e) {
    //     e.preventDefault();
    // }

    return (
        <>
            <div className="board__item">
                <div className="user__name"
                // onClick={showUserName}
                >
                    <Link to="">
                        {username}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default User;