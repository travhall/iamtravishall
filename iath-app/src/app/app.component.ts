import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="site-wrapper">
      <div [ngClass]="displayMenu" id="site-canvas" class="--root">
        <app-header class="header"></app-header>
        <app-nav class="nav"></app-nav>
        <main class="main"><router-outlet></router-outlet></main>
        <app-footer class="footer"></app-footer>
      </div>
      <!-- <button (click)="toggle()" class="toggle">&#9776;</button> -->
    </div>
  `
})
export class AppComponent {
  title = 'iamtravishall.com';
  displayMenu = 'hide';
  menuVisible = false;

  toggle() {
    this.menuVisible = !this.menuVisible;
    this.displayMenu = this.menuVisible ? 'show' : 'hide';
  }
}
