import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-nav',
  template: `
    <nav class="nav" data-aos="fade-in">
      <div
        class="nav__toggle"
        (click)="menuOpen()"
        [ngClass]="status ? 'open' : 'closed'"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav__menu" [ngClass]="status ? 'open' : 'closed'">
        <a
          routerLink="/collection"
          routerLinkActive="active"
          (click)="menuOpen()"
          class="nav__item"
          title="Projects"
          >Projects</a
        >
        <a
          routerLink="/about"
          routerLinkActive="active"
          (click)="menuOpen()"
          class="nav__item"
          title="About"
          >About</a
        >
        <a
          routerLink="/resume"
          routerLinkActive="active"
          (click)="menuOpen()"
          class="nav__item"
          title="Resum&eacute;"
          >Resum&eacute;</a
        >
      </div>
    </nav>
  `,
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor() {}

  status = false;

  ngOnInit() {
    AOS.init({
      startEvent: 'load',
      easing: 'ease-in-sine',
      delay: 200,
      once: true
    });
  }

  menuOpen() {
    this.status = !this.status;
  }
}
