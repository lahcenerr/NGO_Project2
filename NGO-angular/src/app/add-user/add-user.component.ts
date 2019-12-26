import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public submmitted = false;
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
  }

  onSubmit() {
    this.submmitted = true;
    console.log(this.user);
    this.userService.postUser(this.user).subscribe(
      (data) => this.user = data,
      () => this.errorMsg = "error",
      () => console.log('success')

    )
      this.router.navigate(["/userList"]);
  }

}
