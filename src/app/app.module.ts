import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummariesComponent } from './summaries/summaries.component';

import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SummariesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
