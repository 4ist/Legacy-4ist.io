import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevBlogsComponent } from './components/dev-blogs/dev-blogs.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: 'DevBlogs', component: DevBlogsComponent },
  { path: 'Projects', component: ProjectsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
