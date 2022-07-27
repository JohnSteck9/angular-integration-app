import React, { FC } from 'react';

interface IUserViewProps {
    nickname: string,
    email: string,
}

const User: FC<IUserViewProps> = ({ nickname, email }) => {

    return (
        <div className="border-2 border-neutral-500 m-2">
            <h3 className="text-center font-bold text-2xl">User</h3>
            <div className="bg-gray-400 p-3 ">
                <h4>
                    Nickname: {nickname}
                </h4>
                <h5>
                    Email: {email}
                </h5>
            </div>
        </div>
    );
};

export default User;
