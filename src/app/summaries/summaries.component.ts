import { Component, OnInit } from '@angular/core';
import { Summary } from '../models/summary';
import { DataLoaderService } from '../services/data-loader.service';

@Component({
  selector: 'app-summaries',
  templateUrl: './summaries.component.html',
  styleUrls: ['./summaries.component.css']
})
export class SummariesComponent implements OnInit {

  summaries: Summary[];

  constructor(private dataLoaderService: DataLoaderService) { }

  ngOnInit(): void {
    this.summaries = this.dataLoaderService.getSummaries();
  }

}
