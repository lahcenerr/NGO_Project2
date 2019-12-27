import { UserService } from './../user.service';
import { element } from 'protractor';
import { IUser } from './../user';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router'
import { Observable,throwError } from 'rxjs';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { stringify } from 'querystring';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:IUser[];
  user;
  allUsers;
  firstname;
  lastname;
  email;
  password;
  role;
  private _url:string = 'http://127.0.0.1:8000/user/'

  constructor(private UserService:UserService,private http:HttpClient,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.UserService.getAllUsers().subscribe(
      data => this.allUsers=data,
      error =>(console.log(error))
    )
    // this.allUsers = this.http.get<any>(this._url)
  }
  GoToRegister(){
    this.router.navigate(['/register']);   
  }
  authenticate(email: string, password: string) {
    const data = { 'Email': email, 'Password': password };
    return this.http.post(this._url, data)
  }
  Login(){
    var flag=false;
    for (var user of this.allUsers){
      if(this.email == user.Email){
        if(this.password == user.Password)
        {
          flag = true
          this.role=user.role;
          localStorage.setItem('currentUser',JSON.stringify({Email:this.email,Password:this.password,Role:this.role}));
          this.router.navigate(['/home']);
          break;
        }
      }
      }
      if (flag==false)
      {
        alert('Email or Password is not correct! Please try again!')

      }
      // window.location.reload()
  }
  Logout(){
    this.router.navigate(['/login']);
  }


  


}
