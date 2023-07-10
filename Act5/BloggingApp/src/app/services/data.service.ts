import { Injectable } from '@angular/core';

import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts: Post[] = [];

  constructor() { }
  getPosts(): Post[] {
    return this.posts;
  }
}
