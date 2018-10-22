import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header class="header"></app-header>
    <main class="main">
      <router-outlet></router-outlet>
    </main>
    <app-footer class="footer"></app-footer>
  `
})
export class AppComponent {
  title =
    'iamtravishall.com | the online portfolio of UX Designer and UI Developer Travis Hall';
}
