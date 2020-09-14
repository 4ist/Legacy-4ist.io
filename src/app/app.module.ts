import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DevBlogsComponent } from './components/dev-blogs/dev-blogs.component';

import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DevBlogsComponent,
    HeaderComponent,
    ProjectsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
