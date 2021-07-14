import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const GET_POSTS = createAction('[Post] Get Posts');

export const GET_POSTS_SUCCESS = createAction(
  '[Post] Get Posts Success',
  props<{ posts: Post[] }>()
);
export const GET_POSTS_FAILED = createAction('[Post] Get Post Failed');

export const ADD_POST = createAction(
  '[Post] Add New Post',
  props<{ newPost: Post }>()
);
export const ADD_POST_SUCCESS = createAction('[Post] Post Added');
export const DELETE_POST = createAction(
  '[Post] Delete Post',
  props<{ postId: number }>()
);

export const DELETE_POST_SUCCESS = createAction('[Post] Post Deleted');
