import { Component, OnInit } from '@angular/core';
import {UserService} from './service/user.service'
import {User} from './model/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Queue Implementation';
  user:User[];

  constructor(private userService : UserService){}

  ngOnInit(){
    this.getAllUsers();
  }

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  getAllUsers(){
   this.userService.getAllUsers().subscribe(
     data =>{
       console.log(data)
       this.user=data;
     }
   );
  }
}
