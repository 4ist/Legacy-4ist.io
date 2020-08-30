import { Injectable } from '@angular/core';
import { Summary } from '../models/summary';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor() { }

  private summaries: Summary[] = [
    {date: new Date("2019-01-16"), summary: "summary of a first project" },
    {date: new Date("2020-01-16"), summary: "a second project's summary here" },
    {date: new Date("2020-01-16"), summary: "here is a third summary" },
    {date: new Date("2020-08-30"), summary: "this is a summary for this portfolio site" }
  ];

  getSummaries(): Summary[]{
    return this.summaries
  }
}
