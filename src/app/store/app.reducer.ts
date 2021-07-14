import { ActionReducerMap } from '@ngrx/store';
import { postsReducer, PostsState } from './posts/posts.reducer';

export interface AppState {
  postsList: PostsState;
}

export const appReducer: ActionReducerMap<AppState> = {
  postsList: postsReducer,
};
