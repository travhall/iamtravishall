import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ResumeComponent } from './views/resume/resume.component';
import { CollectionComponent } from './views/collection/collection.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { Project01Component } from './views/projects/project01/project01.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
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
    path: 'project01',
    component: Project01Component,
    data: { state: 'project01' }
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
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
