import { Component, OnInit } from '@angular/core';
import { DevBlog } from '../../models/dev-blog';
import { DataLoaderService } from '../../services/data-loader.service';

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

  getFormattedDate(date: Date): String{
    if (date != null){
      const ye: String = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
      const mo: String = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
      const da: String = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
      const formattedDate: String = `${da} ${mo} ${ye}`;
      return formattedDate;
    }
    else{
      return "date not set";
    }
  }

}
