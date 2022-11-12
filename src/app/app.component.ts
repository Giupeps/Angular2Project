import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <section>
  <div class="example-label">Raised</div>
  <div class="example-button-row">
    <button mat-raised-button>Basic</button>
    <button mat-raised-button color="primary">Primary</button>
    <button mat-raised-button color="accent">Accent</button>
    <button mat-raised-button color="warn">Warn</button>
    <button mat-raised-button disabled>Disabled</button>
    <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>
  `,
  styles: [`section {
    display: table;
  }

  .example-label {
    display: table-cell;
    font-size: 14px;
    margin-left: 8px;
    min-width: 120px;
  }

  .example-button-row {
    display: table-cell;
    width: 490px;
  }

  .example-button-row .mat-button-base {
    margin: 8px 8px 8px 0;
  }

  .example-flex-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .example-button-container {
    display: flex;
    justify-content: center;
    width: 120px;
  }`]
})
export class AppComponent {
  constructor(){

  }
}
