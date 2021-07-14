import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsHttpService } from 'src/app/http/posts-http.service';
import * as PostsActions from './posts.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PostsEffects {
  constructor(
    private postsService: PostsHttpService,
    private actions$: Actions
  ) {}

  getPosts = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.GET_POSTS),
      mergeMap(() => {
        return this.postsService.getPosts().pipe(
          map((response) =>
            PostsActions.GET_POSTS_SUCCESS({ posts: response })
          ),
          catchError(() => {
            return of(PostsActions.GET_POSTS_FAILED);
          })
        );
      })
    )
  );
}
