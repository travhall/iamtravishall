import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1 class="hide">
        iamtravishall.com | portfolio of UX Designer and UI Developer Travis
        Hall
      </h1>
      <a routerLink="/" class="logo" title="iamtravishall" data-aos="fade-in">
        <svg width="100" height="83">
          <use xlink:href="assets/symbol-defs.svg#icon-logo-iath"></use>
        </svg>
      </a>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    AOS.init({
      startEvent: 'load',
      easing: 'ease-in-sine',
      delay: 200,
      once: true
    });
  }
}
