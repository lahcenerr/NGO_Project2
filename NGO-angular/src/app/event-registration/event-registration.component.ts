import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Event} from '../event.model';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {
  public events: Event;
  public errorMsg;
  public event = {
    id: "",
    Name: "",
    Date: "",
    Location: "",
    Status: "",
  };

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      (data) => this.events = data,
      () => this.errorMsg="No Data Found!",
      () => console.log("success")
    )
  }

  register(){
    this.router.navigate(['registration'], {relativeTo: this.route})
  }

}
