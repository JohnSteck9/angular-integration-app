import React, { FC } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IUser } from '../userTypes';
import User from '../User/User';
import { IRootStore } from '../../../redux/rootStore';

interface IUserListProps {
    users: IUser[]
}

// type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = IUserListProps

// const connector = connect((state: IRootStore) => ({ syncUsers: state.users.users }));

const Users: FC<Props> = ({ users }): JSX.Element => {
    return (
        <>
            <div>
                <div className="text-center font-bold">
                    Users
                </div>
                {!users.length &&  <h3 className="text-center underline font-bold">No Users</h3>}
                <div>
                    {users.map((user) => <User nickname={user.nickname} email={user.email} key={user.id}/>)}
                </div>
            </div>
        </>
    );
};

export default Users;
