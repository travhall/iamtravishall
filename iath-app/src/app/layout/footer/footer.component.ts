import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
      data-aos-anchor-placement="top-bottom"
    >
      <a routerLink="/" class="logo" title="iamtravishall">
        <svg width="84" height="73">
          <use xlink:href="assets/symbol-defs.svg#icon-logo-iath-flag"></use>
        </svg>
      </a>

      <a
        href="mailto:hello@iamtravishall.com"
        class="link-icon"
        target="_blank"
        title="Email me at hello@iamtravishall.com"
      >
        <svg class="icon -sm">
          <use xlink:href="assets/symbol-defs.svg#icon-envelope"></use>
        </svg>
        hello@iamtravishall.com
      </a>
      <a
        href="Travis_Hall_CV.pdf"
        class="link-icon"
        target="_blank"
        title="Download my resum&eacute;"
      >
        <svg class="icon -sm">
          <use xlink:href="assets/symbol-defs.svg#icon-file-pdf"></use>
        </svg>
        resum&eacute;
      </a>
      <small class="copyright"
        >&copy;&nbsp;{{ year | date: 'yyyy' }} Travis Hall</small
      >
    </footer>
  `,
  styles: ['']
})
export class FooterComponent implements OnInit {
  year = Date.now();

  constructor() {}

  ngOnInit() {}
}
