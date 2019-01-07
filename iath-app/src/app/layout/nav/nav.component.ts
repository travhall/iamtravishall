import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav>
      <a [scrollTo]="'#projects'" class="nav__item" title="Case Studies"
        >Case Studies</a
      >
    </nav>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
