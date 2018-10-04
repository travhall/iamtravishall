import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <span>&copy; {{year | date:'yyyy'}} Travis Hall</span>
      <a href="mailto:hello@iamtravishall.com" target="_blank">hello@iamtravishall.com</a>
      <a href="Travis_Hall_CV.pdf" target="_blank">resum&eacute;</a>
    </footer>
  `
})
export class FooterComponent implements OnInit {
  year = Date.now();

  constructor() {}

  ngOnInit() {}
}
