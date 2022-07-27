import { combineReducers } from 'redux';
import { usersReducers } from './users_store/usersReducers';
import { postsReducers } from './posts_store/postsReducers';


export const rootReducers = combineReducers({
    users: usersReducers,
    posts: postsReducers,
});
