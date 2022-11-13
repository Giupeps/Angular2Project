import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand py-4 px-5">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">
          <div><a class="navbar-brand" href="#">Hidden brand</a></div>
          <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                [routerLink]="['/']"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/active-posts']"
                routerLinkActive="active"
                >Posts attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/inactive-posts']"
                routerLinkActive="active"
                >Posts non attivi</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/users']"
                routerLinkActive="active"
                >Users</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/login']"
                routerLinkActive="active"
                >Login</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                [routerLink]="['/register']"
                routerLinkActive="active"
                >Register</a
              >
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
    nav{
      background-color: #14213d;
    }
    a{
      color: white;
    }
    nav-link ::active {
      color: red;
    }
    `
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
