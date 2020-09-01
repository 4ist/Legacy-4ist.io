import { Injectable } from '@angular/core';
import { DevBlog } from '../models/dev-blog';
import { StubDevBlogs } from './stub-dev-blogs';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor() { }
   getDevBlogs(): DevBlog[]{
    return StubDevBlogs;
  }
}
