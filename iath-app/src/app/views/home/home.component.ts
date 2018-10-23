import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <section class="hero home">
        <div class="hero__content">
          <h2>Hello, I'm Travis</h2>
          <h3 class="h4">&hellip; and I enjoy making things for the web.</h3>
          <p>I currently oversee a team of very talented UX designers for <a href="https://www.arrow.com/" class="link" target="_blank" title="Arrow Electronics : Five Years Out">Arrow Electronics</a>. Previously, I wrote code for <a href="http://ideapark.com/" class="link" target="_blank" title="ideapark, doing good work since 1994">ideapark</a> and <a href="https://www.lacek.com/" class="link" target="_blank" title="The Lacek Group - A Specialist Brand of Company of the Ogilvy Group">The Lacek Group</a>. I’ve worked on projects for brands like, <em>Target</em>, <em>General Mills</em>, <em>Enterprise &amp; National Car Rental</em>. I’ve also worked with the fine people at <a href="http://www.playworkgroup.com/" class="link" target="_blank" title="play work group">playworkgroup</a>, <a href="https://www.adweek.com/agencyspy/denver-b2b-agency-faction-media-closes-after-12-years-in-business/135724" class="link" target="_blank" title="RIP Faction :("><del>Faction Media</del></a> and <a href="http://www.mccannmpls.com/" class="link" target="_blank" title="McCann Minneapolis">McCann</a>. Since you're here, check out what I have to offer below or drop me a line at <a href="mailto:hello@iamtravishall.com" class="link"target="_blank" title="Email me at hello@iamtravishall.com">hello@iamtravishall.com</a>.</p>
          <a href="#" class="btn -ghost" target="_blank" title="">See what I bring to the table <svg class="icon -sm">
          <use xlink:href="assets/symbol-defs.svg#icon-chevron-down"></use>
        </svg></a>
        </div>
      </section>

      <section>
        <!-- <h4>here's what I bring to the table</h4> -->
        <div class="card">
          <h4 class="display-1">End-to-End User Experience Design</h4>
          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </div>
        <div class="card">
          <h4 class="display-1">Front End &amp; User Interface Developement</h4>
          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </div>
        <div class="card">
          <h4 class="display-1">Visual / Graphic Design &amp; Creative Direction</h4>
          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        </div>
      </section>

      <section>
        <a routerLink="/arrow" routerLinkActive="active" class="link">Case Study : Arrow</a>
      </section>

      <section>
        <a routerLink="/stuntpuppy" routerLinkActive="active" class="link">Case Study : Stunt Puppy</a>
      </section>

      <section>
        <a routerLink="/lacek" routerLinkActive="active" class="link">Case Study : Lacek</a>
      </section>

      <section>
        <h3>About Section</h3>
      </section>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
