import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number;
  user: User;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.user = new User;
    this.id = this.route.snapshot.params['id'];

    this.userService.getOneUser(this.id)
    .subscribe(data => {
      console.log(data);
      this.user = data;
    }, error => console.log(error));
    
  }

  onSubmit(){
    this.userService.updateUser(this.id, this.user)
    .subscribe(data => console.log(data),
    error => console.log(error));
    this.user = new User();
    this.router.navigate(['/userList']);
  }


}
