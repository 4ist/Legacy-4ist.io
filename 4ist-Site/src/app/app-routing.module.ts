import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevBlogsComponent } from './components/dev-blogs/dev-blogs.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  //{ path: 'DevBlogs', component: DevBlogsComponent }
  { path: '', component: HomeComponent },
  { path: 'DevBlogs', component: DevBlogsComponent },
  { path: 'Projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
