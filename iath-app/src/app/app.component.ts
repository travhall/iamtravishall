import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import * as AOS from 'aos';

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
      <a
        class="backToTop"
        id="backToTop"
        [scrollTo]="'#site-wrapper'"
        [scrollDuration]="500"
        title="Up, up and away!"
      >
        <svg class="icon -lg">
          <use xlink:href="assets/symbol-defs.svg#icon-arrow-up"></use>
        </svg>
      </a>
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

  @HostListener('document:scroll', [])
  onWindowScroll() {
    const offSet = window.pageYOffset;
    const heroHeight = document.getElementById('hero').offsetHeight;
    const expertiseHeight = document.getElementById('uxexpertise').offsetHeight;
    const uxexpertise = document.getElementById('uxexpertise');
    const backBtn = document.getElementById('backToTop');
    if (offSet > heroHeight) {
      backBtn.classList.add('active');
    } else if (offSet < heroHeight) {
      backBtn.classList.remove('active');
    }
    if (offSet > expertiseHeight) {
      uxexpertise.classList.add('active');
    } else if (offSet < expertiseHeight) {
      uxexpertise.classList.remove('active');
    }
  }

  ngOnInit() {
    AOS.init({
      duration: 700,
      easing: 'ease-out-back'
    });
  }
}
