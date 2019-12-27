import { Component, OnInit } from '@angular/core';
import { Eventregistration } from '../eventregistration.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EventregistrationService } from '../eventregistration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public event = {
    EventID: null,
    UserID: null,
    No_of_People: null
  };
  public id: number;
  submitted = false;
  constructor(private eventRegistration: EventregistrationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //  this.event = new Eventregistration;
    //  this.id = this.route.snapshot.params['id'];

    // this.eventRegistration.getEventName(this.id)
    // .subscribe(data => {
    //   console.log(data);
    //   this.event = data;
    // }, error => console.log(error));

  }

  onSubmit(){
    this.submitted = true;
    console.log(event);
    this.eventRegistration.registerEvent(this.event)
    .subscribe(response => console.log("Success", response),
    error => console.log(error));
    this.router.navigate(['/eventRegistration']);
  }
 


}
