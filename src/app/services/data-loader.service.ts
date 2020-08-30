import { Injectable } from '@angular/core';
import { Summary } from '../models/summary';
import { StubSummaries } from './stub-summaries';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor() { }
   getSummaries(): Summary[]{
    return StubSummaries;
  }
}
