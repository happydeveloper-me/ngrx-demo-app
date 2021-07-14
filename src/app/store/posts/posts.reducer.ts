import { createReducer, on } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { Post } from './post.model';
import * as PostsActions from './posts.actions';

export interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const postsReducer = createReducer(
  initialState,
  on(PostsActions.GET_POSTS_SUCCESS, (state, { posts }) => {
    let newState: PostsState = {
      posts: posts,
    };
    return newState;
  })
);
