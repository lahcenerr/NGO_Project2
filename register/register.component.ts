import { UserService } from './../user.service';
import { IUser } from './../user';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:IUser[]=[];
  user;
  firstname;
  lastname;
  email;
  password;
  role;
  
  // register:IUser[];
  // register[]
  constructor(private UserService:UserService,private router:Router) { }

  ngOnInit() {
  }
  addUser = () =>{
    this.user = {
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.email,
      password:this.password,
      role:this.role,
    }
    console.log(this.user)
    this.UserService.addUser(this.user).subscribe(
      data => {
        this.users.push(data);
      },
      error=>{
        console.log(error)
      }
    )
    this.router.navigate(['/login']);
  }

  GoToLogin(){
    this.router.navigate(['/login']);   

  }

}
// private UserService:UserService,private router:Router,private route:ActivatedRoute