import { Injectable } from '@angular/core';
import { DevBlog } from '../models/dev-blog';
import { StubDevBlogs } from './stub-dev-blogs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from '../../config.json';

@Injectable({
  providedIn: 'root',
})

export class DataLoaderService {
  backendServiceEndpoint = config.endpoints.backendServiceEndpoint;
  constructor(private http: HttpClient) {}

  getDevBlogs():Observable<DevBlog[]> {

    return this.http.get<DevBlog[]>(`${this.backendServiceEndpoint}api/DevBlogs`);
  }
}
