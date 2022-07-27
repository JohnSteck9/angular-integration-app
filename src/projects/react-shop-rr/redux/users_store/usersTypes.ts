import { Action } from 'redux';
import { IUser } from '../../components/users/userTypes';

export const GET_USER = '[USERS] Get User';
export const CREATE_USER = '[USERS] Create User';
export const UPDATE_USER = '[USERS] Update User';
export const GET_USERS_LIST = '[USERS] Get Users List';
export const GET_USERS_SUCCESS = '[USERS] Get Users Success';
export const GET_USERS_ERROR = '[USERS] Get Users Error';


export interface GetUser extends Action<typeof GET_USER> {
    payload: IUser;
}
export interface CreateUser extends Action<typeof CREATE_USER> {
    payload: IUser;
}
export interface GetUsersList extends Action<typeof GET_USERS_LIST> {
    payload: IUser[];
}

export type UsersActions =
    | GetUser
    | CreateUser
    | Action<typeof UPDATE_USER>
    | GetUsersList
    | Action<typeof GET_USERS_SUCCESS>
    | Action<typeof GET_USERS_ERROR>
    ;

export interface IUsersState {
    users: IUser[];
    fetchedUsers: any[];
    loading: boolean;
    error: string | null;
}
