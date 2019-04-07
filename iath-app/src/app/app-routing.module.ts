import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ResumeComponent } from './views/resume/resume.component';
import { CollectionComponent } from './views/collection/collection.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { state: 'about' }
  },
  {
    path: 'collection',
    component: CollectionComponent,
    data: { state: 'collection' }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { state: 'resume' }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
