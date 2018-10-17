import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="hero">
      <div class="banner">
        <h2 class="h3">Hello, I'm Travis</h2>
        <p>I currently oversee a team of very talented UX designers for Arrow Electronics. I’m also in the midst of
          building a new site &hellip; obviously, right? Drop me a line if you’d like to see some of my work.<br>You can
          reach me at <a href="https://www.linkedin.com/in/travhall/">LinkedIn</a> or <a href="mailto:hello@iamtravishall.com">hello@iamtravishall.com</a>.</p>
      </div>
    </div>
    <section>
      <a routerLink="/cs-arrow">CS1</a>
      <a routerLink="/cs-stuntpuppy">CS2</a>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
