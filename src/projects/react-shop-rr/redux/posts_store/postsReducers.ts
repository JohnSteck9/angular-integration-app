import { CREATE_POST, GET_POST, GET_POSTS_LIST, IPostsState, PostsActions } from './postsTypes';

const initPostsState = {
    posts: [],
    fetchedPosts: [],
    loading: false,
    error: null,
} as IPostsState;

export const postsReducers = (state = initPostsState, action: PostsActions): IPostsState => {
    switch (action.type) {
        // case EUserActions.GET_USER:
        case GET_POST:
            return {
                ...state,
                fetchedPosts: [...state.fetchedPosts, action.payload]
            };
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case GET_POSTS_LIST:
            return {
                ...state,
                fetchedPosts: [...state.fetchedPosts, ...action.payload]
            };
        // case EUserActions.UPDATE_USER:
        // case EUserActions.GET_USERS_SUCCESS:
        // case EUserActions.GET_USERS_ERROR:
        default:
            return state;
    }
};
