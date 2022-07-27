import * as React from 'react';
import { FC } from 'react';
import Users from './components/users/Users/Users';
import { IUser } from './components/users/userTypes';


export const ReactShopRrProject: FC = (): JSX.Element => {

    // id?: number,
    //     nickname: string,
    //     email: string,
    //     password: string,
    //     confirmPassword?: string,

    const usersList: IUser[] = [
        {
            id: 1,
            nickname: "aaaa",
            email: "sssss",
            password: "aaaaaa",
            confirmPassword: "aaaaaa",
        },
        {
            id: 2,
            nickname: 'aaaa',
            email: 'sssss',
            password: 'aaaaaa',
            confirmPassword: 'aaaaaa',
        },

    ]

    return (
        <div>
            <h1>React Project 2</h1>
            <Users users={usersList}/>
        </div>
    );
};
