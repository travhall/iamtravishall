import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';

import { ArrowComponent } from './case-studies/arrow/arrow.component';
import { StuntpuppyComponent } from './case-studies/stuntpuppy/stuntpuppy.component';
import { LacekComponent } from './case-studies/lacek/lacek.component';

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
    path: 'arrow',
    component: ArrowComponent,
    data: { state: 'arrow' }
  },
  {
    path: 'stuntpuppy',
    component: StuntpuppyComponent,
    data: { state: 'stunt-puppy' }
  },
  {
    path: 'lacek',
    component: LacekComponent,
    data: { state: 'lacek' }
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
