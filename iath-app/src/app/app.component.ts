import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="grid -main">
      <app-header></app-header>
      <app-main></app-main>
      <!-- <router-outlet></router-outlet> -->
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {
  title =
    'iamtravishall.com | the online portfolio of UX Designer and UI Developer Travis Hall';
}
