import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User;
  public errorMsg;
  public user = {
    id: "",
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
    Role: ""
  };
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => this.users = data,
      () => this.errorMsg="No Data Found!",
      () => console.log("success")
    )
    
  }

  deleteUser(id){
      console.log(this.user)
      this.userService.deleteUser(id).subscribe(
      (data) => this.user = data,
      () => this.errorMsg = "error",
      () => console.log('the sequence completed!')
    )
    this.router.navigate(['/userList']);
    
  }

  updateUser(id: number){
    this.router.navigate(['update', id]);
  }
}
