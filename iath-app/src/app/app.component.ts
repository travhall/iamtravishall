import { Component } from '@angular/core';
// import { HostListener } from '@angular/core';
import { RouterTransition } from './router.animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  animations: [RouterTransition],
  template: `
    <app-header></app-header>
    <app-nav></app-nav>
    <main class="main" [@routerTransition]="getState(o)">
      <router-outlet #o="outlet"></router-outlet>
    </main>
    <app-footer></app-footer>
    <a
      class="backToTop"
      id="backToTop"
      [scrollTo]="'#top'"
      [scrollDuration]="500"
      title="Back to the top ^"
    >
      <svg class="icon -lg">
        <use xlink:href="assets/symbol-defs.svg#icon-arrow-up"></use>
      </svg>
    </a>
  `
})
export class AppComponent {
  title = 'iamtravishall.com';

  // @HostListener('document:scroll', [])
  // onWindowScroll() {
  //   const offSet = window.pageYOffset;
  //   const heroHeight = document.getElementById('hero').offsetHeight;
  //   const backBtn = document.getElementById('backToTop');
  //   if (offSet > heroHeight) {
  //     backBtn.classList.add('active');
  //   } else if (offSet < heroHeight) {
  //     backBtn.classList.remove('active');
  //   }
  // }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngOnInit() {
    AOS.init({
      startEvent: 'load',
      easing: 'ease-in-sine',
      delay: 200,
      once: true
    });
  }
}
