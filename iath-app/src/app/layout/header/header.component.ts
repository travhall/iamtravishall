import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1 class="hide">
        iamtravishall.com | portfolio of UX Designer and UI Developer Travis
        Hall
      </h1>
      <a routerLink="/" class="logo">
        <svg width="100" height="83">
          <use xlink:href="assets/symbol-defs.svg#icon-logo-iath"></use>
        </svg>
      </a>
      <!-- <div class="links">
        <a
          href="mailto:hello@iamtravishall.com"
          class="link-icon"
          target="_blank"
          title="Email me at hello@iamtravishall.com"
        >
          <svg class="icon">
            <use xlink:href="assets/symbol-defs.svg#icon-envelope"></use>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/travhall/"
          class="link-icon"
          target="_blank"
          title="Find me on Linkedin"
        >
          <svg class="icon">
            <use xlink:href="assets/symbol-defs.svg#icon-linkedin"></use>
          </svg>
        </a>
      </div> -->
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
