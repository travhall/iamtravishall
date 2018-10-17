import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="grid -primary">
      <app-header class="header"></app-header>
      <!-- <app-main class="main"></app-main> REPLACE MAIN LATER -->
      <div class="main">
        <router-outlet></router-outlet>
      </div>
      <app-footer class="footer"></app-footer>
    </div>
  `
})
export class AppComponent {
  title =
    'iamtravishall.com | the online portfolio of UX Designer and UI Developer Travis Hall';
}
