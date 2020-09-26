import { Component, OnInit } from '@angular/core';
import { DevBlog } from '../../models/dev-blog';
import { DataLoaderService } from '../../services/data-loader.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-dev-blogs',
  templateUrl: './dev-blogs.component.html',
  styleUrls: ['./dev-blogs.component.css']
})
export class DevBlogsComponent implements OnInit {

  devBlogs: DevBlog[];
  months : string[] = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  constructor(private dataLoaderService: DataLoaderService) { }

  ngOnInit(): void {
    this.dataLoaderService.getDevBlogs()
      .subscribe((devBlogs) => {
        this.devBlogs = devBlogs.sort((a, b) =>
          b.date.valueOf() > a.date.valueOf() ? 1 : -1
        );
      });

  }

  getFormattedDate(date: Date): String{
    if (date != null){

      var dateComponents : string[] = date.toString().split('T')[0].split('-'); //2020-09-22T04:00:00.000Z

      const year : string = dateComponents[0];

      const monthInt = parseInt(dateComponents[1]);
      const fullMonth : string = this.months[monthInt - 1];
      const day : string = dateComponents[2];

      const formattedDate: String = `${day} ${fullMonth} ${year}`;
      return formattedDate;
    }
    else{
      return '';
    }
  }

}
