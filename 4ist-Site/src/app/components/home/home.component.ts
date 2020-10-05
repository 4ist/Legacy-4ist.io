import { Component, OnInit } from '@angular/core';
import { FileReaderService } from '../../services/file-reader.service';
import { DataLoaderService } from 'src/app/services/data-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bioParagraphs : String[];
  bio : String;

  constructor(private dataLoaderService: DataLoaderService) { }

  ngOnInit(): void {
    this.bio =
`Hello, my name is Forrest Richardson and I love building software.

I work full-time as a software engineer at FIS Global and part-time as a Network Operations officer (25A) in the Army National Guard.

In my current role I work on a full-stack application utilizing C# and the ASP.NET framework. On the personal side I have been exploring other development stacks; my recent projects (including this site) have been in the Angular and NodeJS frameworks with MongoDB databases.

This site's purpose is to serve as a platform for me to formally document my side projects; this site is my current side project so expect the content to be pretty meta.`

    /*
    // I was experimenting with loading the bio from the database, but the load time added too much friction. Is reading this from JSON really my best option besides hardcoding it?
    this.dataLoaderService.getBio()
      .subscribe((bio) => {
        this.bio = bio[0].body;
      });
    */

  }

}
