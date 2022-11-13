import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UsersService } from '../users.service';

@Component({
  template: `
  <div class="py-5 px-2 mt-3 text-center">
    <ng-container  *ngIf="user; else elseTemplate">
      <h3>{{user.firstname}} {{user.lastname}}</h3>
      <p>email: {{user.email}}</p>
      <p>ruolo: {{user.role}}</p>
    </ng-container>
    <ng-template #elseTemplate>
      <p>utente non trovato</p>
    </ng-template>
  </div>
  `,
  styles: [
    `
    div{
      background-color:#fca311;
      border-radius: 1em;
    }

   
    `
  ]
})
export class UsersDetailsPage implements OnInit {
user:User|undefined
  constructor(private router:ActivatedRoute, private userSrv:UsersService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params=>{
      const id = +params['id']
      //this.user = this.userSrv.getUser(id)
      this.userSrv.getUser(id).subscribe(data => this.user = data);
    })
  }

}
