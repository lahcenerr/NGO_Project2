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
  event = new Eventregistration();
  id: number;
  constructor(private eventRegistration: EventregistrationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.event = new Eventregistration;
    // this.id = this.route.snapshot.params['id'];

    // this.eventRegistration.getEventName(this.id)
    // .subscribe(data => {
    //   console.log(data);
    //   this.event = data;
    // }, error => console.log(error));

  }

  onSubmit(){
    console.log("Test")
    this.eventRegistration.registerEvent(this.event)
    .subscribe(data => console.log(data),
    error => console.log(error));
    this.router.navigate(['/eventRegistration']);
  }

}
