import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevBlogsComponent } from './components/dev-blogs/dev-blogs.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  // { path: 'DevBlogs', component: DevBlogsComponent }, // Disabled while not maintained
  // { path: 'Projects', component: ProjectsComponent }  // Disabled while not maintained
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
