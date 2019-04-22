import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer
      class="footer"
      data-aos="fade-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-once="true"
    >
      <a routerLink="/" class="logo" title="iamtravishall">
        <svg width="84" height="73">
          <use xlink:href="assets/symbol-defs.svg#icon-logo-iath-flag"></use>
        </svg>
      </a>

      <ul>

      <li>
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
      </li>

      <li>
        <a
          href="https://www.instagram.com/trebor_hass/"
          class="link-icon"
          target="_blank"
          title="Find me on Instagram"
        >
          <svg class="icon">
            <use xlink:href="assets/symbol-defs.svg#icon-instagram"></use>
          </svg>
        </a>
      </li>

        <li>
          <a
            href="Travis_Hall_CV.pdf"
            class="link-icon"
            target="_blank"
            title="Download my resum&eacute;"
          >
            <svg class="icon -sm">
              <use xlink:href="assets/symbol-defs.svg#icon-file-pdf"></use>
            </svg> resum&eacute;
          </a>
        </li>

        <li>
          <a
            href="mailto:hello@iamtravishall.com"
            class="link-icon"
            target="_blank"
            title="Email me at hello@iamtravishall.com"
          >
            <svg class="icon -sm">
              <use xlink:href="assets/symbol-defs.svg#icon-envelope"></use>
            </svg> hello@iamtravishall.com
          </a>
        </li>

        <li>
          <small class="copyright">
            Website design and content &copy;&nbsp;{{ year | date: 'yyyy' }} Travis Hall.
          </small>
        </li>

      </ul>
    </footer>
  `,
  styles: ['']
})
export class FooterComponent implements OnInit {
  year = Date.now();

  constructor() {}

  ngOnInit() {}
}
