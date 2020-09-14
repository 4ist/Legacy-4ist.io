import { Component, OnInit } from '@angular/core';
import { FileReaderService } from '../../services/file-reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bioParagraphs : String[];

  constructor(private fileReaderService : FileReaderService) { }

  ngOnInit(): void {
    this.bioParagraphs = this.fileReaderService.GetBioParagraphs();
  }

}
