import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CsStuntpuppyComponent } from './case-studies/cs-stuntpuppy/cs-stuntpuppy.component';
import { CsArrowComponent } from './case-studies/cs-arrow/cs-arrow.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { state: 'home' }
  },
  {
    path: 'cs-arrow',
    component: CsArrowComponent,
    data: { state: 'arrow' }
  },
  {
    path: 'cs-stuntpuppy',
    component: CsStuntpuppyComponent,
    data: { state: 'stunt-puppy' }
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
