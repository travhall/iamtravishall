import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-nav class="nav"></app-nav>
    <div class="home">
      <section class="hero home">
        <div class="hero__content">
          <h2>Hello, I'm Travis</h2>
          <h3 class="h4">&hellip; and I enjoy making things for the web.</h3>
          <p>I currently oversee a team of very talented UX designers for <a href="https://www.arrow.com/" class="link" target="_blank" title="Arrow Electronics : Five Years Out">Arrow Electronics</a>. Previously, I wrote code for <a href="http://ideapark.com/" class="link" target="_blank" title="ideapark, doing good work since 1994">ideapark</a> and <a href="https://www.lacek.com/" class="link" target="_blank" title="The Lacek Group - A Specialist Brand of Company of the Ogilvy Group">The Lacek Group</a>. I’ve worked on projects for brands like, <em>Target</em>, <em>General Mills</em>, <em>Enterprise &amp; National Car Rental</em>. I’ve also worked with the fine people at <a href="http://www.playworkgroup.com/" class="link" target="_blank" title="play work group">playworkgroup</a>, <a href="https://www.adweek.com/agencyspy/denver-b2b-agency-faction-media-closes-after-12-years-in-business/135724" class="link" target="_blank" title="RIP Faction :("><del>Faction Media</del></a> and <a href="http://www.mccannmpls.com/" class="link" target="_blank" title="McCann Minneapolis">McCann</a>. Since you're here, see what I have to offer below or drop me a line at <a href="mailto:hello@iamtravishall.com" class="link"target="_blank" title="Email me at hello@iamtravishall.com">hello@iamtravishall.com</a>.</p>
          <a [scrollTo]="'#skillz'" [scrollOffset]="-90" class="btn -ghost" title="Skillz n' stuff">
            See what I bring to the table<svg class="icon -sm">
              <use xlink:href="assets/symbol-defs.svg#icon-chevron-outline-down"></use>
            </svg>
          </a>
        </div>
      </section>

      <section class="grid -primary" id="skillz">
        <div class="card -ux">
          <h4 class="display-1">User Experience Design</h4>
          <p>I offer end-to-end user experience design. From user research to prototyping to user-centric design deliverables, I've got it covered.</p>
          <ul>
            <li>Dolor pulvinar etiam.</li>
            <li>Sagittis adipiscing.</li>
            <li>Felis enim feugiat.</li>
            <li>Etiam vel felis lorem.</li>
          </ul>
        </div>
        <div class="card -ui">
          <h4 class="display-1">Front End &amp; UI Developement</h4>
          <p>Pixel perfect may be a myth but I'm a unicorn. I can provide the next best thing, consistent, scalable, modular, responsive front end work.</p>
          <ul>
            <li>Dolor pulvinar etiam.</li>
            <li>Sagittis adipiscing.</li>
            <li>Felis enim feugiat.</li>
            <li>Etiam vel felis lorem.</li>
          </ul>
        </div>
        <div class="card -vis">
          <h4 class="display-1">Visual &amp; Graphic Design</h4>
          <p>Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
          <ul>
            <li>Dolor pulvinar etiam.</li>
            <li>Sagittis adipiscing.</li>
            <li>Felis enim feugiat.</li>
            <li>Etiam vel felis lorem.</li>
          </ul>
        </div>
      </section>

      <section class="panel__container" id="projects">

        <div class="panel -arrow">
          <div class="panel__content -center">
            <h4 class="display-1">Arrow Electronics</h4>
            <h4>UX Design Lead</h4>
            <h5>2016 - present</h5>
            <button routerLink="/arrow" routerLinkActive="active" class="btn -ghost">Read More</button>
          </div>
        </div>

        <div class="panel -stuntpuppy">
          <div class="panel__content -center">
            <h4 class="display-1">Stunt Puppy</h4>
            <h4>Shopify Theme / Microsite</h4>
            <h4>Front End Development</h4>
            <h5>2014 - 2018</h5>
            <button routerLink="/stuntpuppy" routerLinkActive="active" class="btn -ghost" disabled>Coming Soon</button>
          </div>
        </div>

        <div class="panel -lacek">
          <div class="panel__content -center">
            <h4 class="display-1">The Lacek Group</h4>
            <h4>Agency Microsite</h4>
            <h4>Front End Development</h4>
            <h5>2012 - 2014</h5>
            <button routerLink="/lacek" routerLinkActive="active" class="btn -ghost" disabled>Coming Soon</button>
          </div>
        </div>
      </section>

      <!-- <section>
        <h3>Testimonials/Hire me Section</h3>
      </section>

      <section>
        <h3>About Section</h3>
      </section> -->
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
