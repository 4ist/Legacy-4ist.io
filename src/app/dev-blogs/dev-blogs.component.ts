import { Component, OnInit } from '@angular/core';
import { DevBlog } from '../models/dev-blog';
import { DataLoaderService } from '../services/data-loader.service';

@Component({
  selector: 'app-dev-blogs',
  templateUrl: './dev-blogs.component.html',
  styleUrls: ['./dev-blogs.component.css']
})
export class DevBlogsComponent implements OnInit {

  devBlogs: DevBlog[];

  constructor(private dataLoaderService: DataLoaderService) { }

  ngOnInit(): void {
    this.devBlogs = this.dataLoaderService.getDevBlogs();
  }

}
