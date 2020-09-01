import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DevBlogsComponent } from './dev-blogs/dev-blogs.component';

import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DevBlogsComponent,
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
