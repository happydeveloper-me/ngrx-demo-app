import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../store/posts/post.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsHttpService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(environment.apiUrl);
  }
}
