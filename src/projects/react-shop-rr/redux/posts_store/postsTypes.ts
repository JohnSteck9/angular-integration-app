import { Action } from 'redux';
import { IUser } from '../../components/users/userTypes';
import { IPostDTO } from '../../components/posts/postTypes';
import { CreateUser, GET_USERS_ERROR, GET_USERS_SUCCESS, GetUser, GetUsersList, UPDATE_USER } from '../users_store/usersTypes';

export interface IPost extends IPostDTO {}


export const GET_POST = '[POSTS] Get Post';
export const CREATE_POST = '[POSTS] Create Post';
export const UPDATE_POST = '[POSTS] Update Post';

export const GET_POSTS_LIST = '[POSTS] Get Posts List';
export const GET_POSTS_SUCCESS = '[POSTS] Get Posts Success';
export const GET_POSTS_ERROR = '[POSTS] Get Posts Error';


export interface GetPost extends Action<typeof GET_POST> {
    payload: IPost;
}
export interface CreatePost extends Action<typeof CREATE_POST> {
    payload: IPost;
}
export interface GetPostsList extends Action<typeof GET_POSTS_LIST> {
    payload: IPost[];
}

export type PostsActions =
    | GetPost
    | CreatePost
    | Action<typeof UPDATE_POST>
    | GetPostsList
    | Action<typeof GET_POSTS_SUCCESS>
    | Action<typeof GET_POSTS_ERROR>
    ;

export interface IPostsState {
    posts: IPost[];
    fetchedPosts: any[];
    loading: boolean;
    error: string | null;
}
