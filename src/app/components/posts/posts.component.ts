import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as PostsActions from '../../store/posts/posts.actions';
import { Post } from 'src/app/store/posts/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('postsList').subscribe((data) => {
      this.posts = data.posts;
    });
  }

  getPosts() {
    this.store.dispatch(PostsActions.GET_POSTS());
  }
}
