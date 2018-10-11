import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="grid -main">
      <div class="grid -container">
        <app-header></app-header>
        <app-main></app-main>
        <!-- <router-outlet></router-outlet> REPLACE MAIN LATER -->
        <app-footer></app-footer>
      </div>
    </div>
  `
})
export class AppComponent {
  title =
    'iamtravishall.com | the online portfolio of UX Designer and UI Developer Travis Hall';
}
