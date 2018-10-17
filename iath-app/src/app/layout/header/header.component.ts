import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1 class="hide">iamtravishall.com | the online portfolio of UX Designer and UI Developer Travis Hall</h1>
      <a routerLink="/">
        <svg class="logo" width="100" height="83">
          <use xlink:href="assets/symbol-defs.svg#icon-logo-iath"></use>
        </svg>
      </a>
      <a href="mailto:hello@iamtravishall.com" class="link -email"target="_blank" title="Email me at hello@iamtravishall.com">
        <svg class="icon">
          <use xlink:href="assets/symbol-defs.svg#icon-envelope"></use>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/travhall/" class="link -linkedin" target="_blank" title="Find me on Linkedin">
        <svg class="icon">
          <use xlink:href="assets/symbol-defs.svg#icon-linkedin"></use>
        </svg>
      </a>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
