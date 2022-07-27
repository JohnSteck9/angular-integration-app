import { applyMiddleware, createStore } from 'redux';
import { rootReducers } from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IUsersState } from './users_store/usersTypes';
import thunk from 'redux-thunk';
import { IPostsState } from './posts_store/postsTypes';

export const STORE = createStore(rootReducers, composeWithDevTools(
    // TODO: read 'https://rajdee.gitbooks.io/redux-in-russian/content/docs/api/applyMiddleware.html'
    applyMiddleware(
        thunk
    )
    // other store enhancers if any
));

export interface IRootStore {
    users: IUsersState,
    posts: IPostsState,
}
