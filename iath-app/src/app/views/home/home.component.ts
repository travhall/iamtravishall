import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <section class="hero home">
        <div class="hero__content">
          <h2 class="h3">Hello, I'm Travis</h2>
          <h3 class="h5">&hellip; and I enjoy making things for the web.</h3>
          <p>I currently oversee a team of very talented UX designers for <a href="https://www.arrow.com/" class="link" target="_blank" title="Arrow Electronics : Five Years Out">Arrow Electronics</a>. Previously, I wrote code for <a href="http://ideapark.com/" class="link" target="_blank" title="ideapark, doing good work since 1994">ideapark</a> and <a href="https://www.lacek.com/" class="link" target="_blank" title="The Lacek Group - A Specialist Brand of Company of the Ogilvy Group">The Lacek Group</a>. In the past I’ve worked on projects for <em>Target</em>, <em>General Mills</em>, <em>Enterprise &amp; National Car Rental</em>, and <em>Ra’mon Lawrence Designs</em>, to name a few. I’ve also worked with the fine people at <a href="http://www.playworkgroup.com/" class="link" target="_blank" title="play work group">playworkgroup</a>, <a href="https://www.adweek.com/agencyspy/denver-b2b-agency-faction-media-closes-after-12-years-in-business/135724" class="link" target="_blank" title="RIP Faction :("><del>Faction Media</del></a> and <a href="http://www.mccannmpls.com/" class="link" target="_blank" title="McCann Minneapolis">McCann</a>. Since you're here, check out some of my work below or drop me a line at <a href="mailto:hello@iamtravishall.com" class="link"target="_blank" title="Email me at hello@iamtravishall.com">hello@iamtravishall.com</a>.</p>
          <a href="#" class="link-icon" target="_blank" title="">But wait, there's more &hellip;</a>
        </div>
      </section>

      <section class="skillset">
        <h4 class="title -right">Here's what I bring to the table &hellip;</h4>
        <div class="card">
          <h4 class="display-1">End-to-End User Experience Design</h4>
        </div>
        <div class="card">
          <h4 class="display-1">Front End &amp; User Interface Developement</h4>
        </div>
        <div class="card">
          <h4 class="display-1">Visual Design &amp; Creative Direction</h4>
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
