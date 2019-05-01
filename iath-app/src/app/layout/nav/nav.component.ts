import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="nav" data-aos="fade-in" data-aos-once="true">
      <div class="nav__toggle" (click)="menuOpen()" [ngClass]="status ? 'open' : 'closed'">
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
  `
})
export class NavComponent implements OnInit {
  constructor() { }

  status = false;

  ngOnInit() { }

  menuOpen() {
    this.status = !this.status;
    document.body.classList.toggle('fixed');
  }
}
