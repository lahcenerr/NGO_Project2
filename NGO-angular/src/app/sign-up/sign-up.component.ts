import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService} from './../user.service'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public submitted = false;
  public user: User;
  public errorMsg;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserService, private router: Router) {  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.submitted = true;
    console.log(this.user)
    this.userService.postUser(form.value).subscribe(
    
    () => this.errorMsg = "error",
    () => console.log('the sequence completed!')
  )
  this.router.navigate(['']);


  }

}
