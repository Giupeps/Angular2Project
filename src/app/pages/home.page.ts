import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
<h1  class="text-center mt-5">Benvenuto sulla home page</h1>
  <div class=" mt-5 d-flex justify-content-evenly">
    <button (click)="gotoActivePosts()" class="btn" >vai a post attivi</button>
    <button (click)="gotoInactivePosts()" class="btn" >vai a post non attivi</button>
  </div>
  `,
  styles: [
      `
      h1{
        color: #e5e5e5;
        font-size: 3rem;
        text-transform: uppercase;
      }

      button{
         background-color: #fca311;
         color: black;
         border: none;
         padding: 2vh;
         text-transform: uppercase;
      }

      .btn:hover{
        background-color: #14213d;  
        color: #e5e5e5;   
      }
      `
  ]
})
export class HomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoInactivePosts(){
    this.router.navigate(['/inactive-posts'])
  }
  gotoActivePosts(){
    this.router.navigate(['/active-posts'])
  }

}
