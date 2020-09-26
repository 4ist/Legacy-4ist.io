import { Injectable } from '@angular/core';
import { DevBlog } from '../models/dev-blog';
import { StubDevBlogs } from './stub-dev-blogs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DataLoaderService {
  response;
  //constructor() {}
  constructor(private http: HttpClient) {}

  getDevBlogs():Observable<DevBlog[]> {

    return this.http.get<DevBlog[]>('http://localhost:3001/api/DevBlogs');
  }
}
