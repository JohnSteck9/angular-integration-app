import { IUser } from '../../components/users/userTypes';
import { CREATE_USER, GET_USER, GET_USERS_LIST } from './usersTypes';

export function createUser(user: IUser) {
    return {
        type: CREATE_USER,
        payload: user
    }
}

export function getUser(user: IUser) {
    return {
        type: GET_USER,
        payload: user
    }
}
export function getUsersList(usersList: IUser[]) {
    return async (dispatch: any) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
        const json = await response.json()
        dispatch({type: GET_USERS_LIST, payload: json})
    }
}

export function getPosts(usersList: IUser[]) {
    return async (dispatch: any) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
        const json = await response.json()
        dispatch({type: GET_USERS_LIST, payload: json})
    }
}

