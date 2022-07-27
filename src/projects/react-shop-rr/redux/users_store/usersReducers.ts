import { CREATE_USER, GET_USER, GET_USERS_LIST, IUsersState, UsersActions } from './usersTypes';

const initState = {
    users: [],
    fetchedUsers: [],
    loading: false,
    error: null,
} as IUsersState;

export const usersReducers = (state = initState, action: UsersActions): IUsersState => {
    switch (action.type) {
        // case EUserActions.GET_USER:
        case GET_USER:
            return {
                ...state,
                fetchedUsers: [...state.fetchedUsers, action.payload]
            };
        case CREATE_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case GET_USERS_LIST:
            return {
                ...state,
                fetchedUsers: [...state.fetchedUsers, ...action.payload]
            };
        // case EUserActions.UPDATE_USER:
        // case EUserActions.GET_USERS_SUCCESS:
        // case EUserActions.GET_USERS_ERROR:
        default:
            return state;

    }
};
