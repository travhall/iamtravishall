import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home">
      <section class="hero home" id="hero">
        <div class="hero__content">
          <h2>Hello, I'm Travis</h2>
          <h3 class="h4">&hellip; and I enjoy making things for the web.</h3>
          <p>
            I'm a Denver based designer/developer, currently leading a team of
            very talented UX designers for
            <a
              href="https://www.arrow.com/"
              class="link"
              target="_blank"
              title="Arrow Electronics : Five Years Out"
              >Arrow Electronics</a
            >. Previously, I wrote code for
            <a
              href="http://ideapark.com/"
              class="link"
              target="_blank"
              title="ideapark, doing good work since 1994"
              >ideapark</a
            >
            and
            <a
              href="https://www.lacek.com/"
              class="link"
              target="_blank"
              title="The Lacek Group - A Specialist Brand of Company of the Ogilvy Group"
              >The Lacek Group</a
            >, to name a few.
          </p>
          <a
            [scrollTo]="'#uxexpertise'"
            [scrollDuration]="500"
            [scrollOffset]="-20"
            class="btn -ghost"
            title="A very particular set of skills"
          >
            Read More<svg class="icon -sm">
              <use
                xlink:href="assets/symbol-defs.svg#icon-chevron-outline-down"
              ></use>
            </svg>
          </a>
          <!-- <a
            [scrollTo]="'#projects'"
            [scrollDuration]="500"
            [scrollOffset]="-90"
            class="btn -ghost"
            title="The proof is in the pudding"
          >
            Case Studies<svg class="icon -sm">
              <use
                xlink:href="assets/symbol-defs.svg#icon-chevron-outline-down"
              ></use>
            </svg>
          </a> -->
        </div>
      </section>

      <section id="expertise">
        <div class="grid -primary">
          <div class="card -ux" id="uxexpertise">
            <svg class="icon -graphic">
              <use xlink:href="assets/symbol-defs.svg#icon-ux-design"></use>
            </svg>
            <h4 class="display-1">User Experience Design</h4>
            <div class="paragraph">
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Nullam quis risus eget urna mollis ornare vel eu
                leo. Vestibulum id ligula porta felis euismod semper. Curabitur
                blandit tempus porttitor.
              </p>
              <a
                [scrollTo]="'#uiexpertise'"
                [scrollDuration]="500"
                [scrollOffset]="-20"
                title="Front End &amp; UI Development"
                >Read More
                <svg class="icon -sm">
                  <use
                    xlink:href="assets/symbol-defs.svg#icon-chevron-outline-down"
                  ></use></svg
              ></a>
            </div>
          </div>
          <div class="card -ui" id="uiexpertise">
            <svg class="icon -graphic">
              <use xlink:href="assets/symbol-defs.svg#icon-ui-dev"></use>
            </svg>
            <h4 class="display-1">Front End &amp; UI Dev</h4>
            <div class="paragraph">
              <p>
                Vestibulum id ligula porta felis euismod semper. Maecenas
                faucibus mollis interdum. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem
                lacinia quam venenatis vestibulum. Nulla vitae elit libero, a
                pharetra augue.
              </p>
              <a
                [scrollTo]="'#visexpertise'"
                [scrollDuration]="500"
                [scrollOffset]="-20"
                title="Visual &amp; Graphic Design"
                >Read More
                <svg class="icon -sm">
                  <use
                    xlink:href="assets/symbol-defs.svg#icon-chevron-outline-down"
                  ></use></svg
              ></a>
            </div>
          </div>
          <div class="card -vis" id="visexpertise">
            <svg class="icon -graphic">
              <use xlink:href="assets/symbol-defs.svg#icon-vis-design"></use>
            </svg>
            <h4 class="display-1">Visual &amp; Graphic Design</h4>
            <div class="paragraph">
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Cras mattis consectetur purus sit amet fermentum. Cum
                sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Integer posuere erat a ante venenatis
                dapibus posuere velit aliquet. Donec sed odio dui.
              </p>
              <a
                [scrollTo]="'#projects'"
                [scrollDuration]="500"
                title="View Case Studies"
                >Case Studies
                <svg class="icon -sm">
                  <use
                    xlink:href="assets/symbol-defs.svg#icon-chevron-outline-down"
                  ></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="panel__container" id="projects">
        <div class="panel -arrow" id="uxwork">
          <div class="panel__content">
            <h4 class="h6">User Experience Design</h4>
            <h4 class="display-1">Arrow Electronics</h4>
            <h4>UX Design Lead</h4>
            <h6>2016 - present</h6>
            <button
              routerLink="/arrow"
              routerLinkActive="active"
              class="btn -white"
            >
              Read More
            </button>
            <button
              class="btn -ghost"
              [scrollTo]="'#fework'"
              [scrollDuration]="500"
              [scrollOffset]="45"
              title="Stunt Puppy"
            >
              Next Case Study
              <svg class="icon -sm">
                <use
                  xlink:href="assets/symbol-defs.svg#icon-chevron-outline-down"
                ></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="panel -stuntpuppy" id="fework">
          <div class="panel__content">
            <h4 class="h6">Front End Developer</h4>
            <h4 class="display-1">Stunt Puppy</h4>
            <h4>Shopify Theme / Microsite</h4>
            <h6>2014 - 2018</h6>
            <button
              routerLink="/stuntpuppy"
              routerLinkActive="active"
              class="btn -white"
              disabled
            >
              Coming Soon
            </button>
            <button
              class="btn -ghost"
              [scrollTo]="'#viswork'"
              [scrollDuration]="500"
              [scrollOffset]="45"
              title="The Lacek Group"
            >
              Next Case Study
              <svg class="icon -sm">
                <use
                  xlink:href="assets/symbol-defs.svg#icon-chevron-outline-down"
                ></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="panel -lacek" id="viswork">
          <div class="panel__content">
            <h4 class="h6">Front End Developer</h4>
            <h4 class="display-1">The Lacek Group</h4>
            <h4>Agency Microsite</h4>
            <h6>2012 - 2014</h6>
            <button
              routerLink="/lacek"
              routerLinkActive="active"
              class="btn -white"
              disabled
            >
              Coming Soon
            </button>
            <button
              class="btn -ghost"
              [scrollTo]="'#about'"
              [scrollDuration]="500"
              [scrollOffset]="45"
              title="Say hi!"
            >
              Get to know me
              <svg class="icon -sm">
                <use
                  xlink:href="assets/symbol-defs.svg#icon-chevron-outline-down"
                ></use>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section class="about" id="about">
        <h3>&hellip; like I said, I'm Travis.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula
          porta felis euismod semper. Etiam porta sem malesuada magna mollis
          euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
      </section>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
