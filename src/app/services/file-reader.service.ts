import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from './stub-local-files.json';


@Injectable({
  providedIn: 'root'
})
export class FileReaderService {

  constructor() { }

  GetBioParagraphs(): String[] {
    return data["Biography"];
  }

}
