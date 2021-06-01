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
`Hello, my name is Forrest Richardson - I love building things, solving complex problems, and leading people to do the same.

These passions lend themselves to my main career focus of software engineering - I have worked for about two years in a full-stack role on an agile team and recently moved to a DevOps role on a systems team with a focus on CI/CD optimization.

I am a part-time Signal Officer/Platoon Leader in the Army National Guard which gives me the opportunity to lead soldiers and serve my country.`



    /*
    // I was experimenting with loading the bio from the database, but the load time added too much friction. Is reading this from JSON really my best option besides hardcoding it?
    this.dataLoaderService.getBio()
      .subscribe((bio) => {
        this.bio = bio[0].body;
      });
    */

  }

}
