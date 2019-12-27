import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public events: Event;
  public errorMsg;
  public event = {
    id: "",
    Name: "",
    Date: "",
    Location: "",
    Status: "",
  };
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      (data) => this.events = data,
      () => this.errorMsg="No Data Found!",
      () => console.log(this.events)
    );

  }

  deleteEvent(id){
      console.log(this.event)
      this.eventService.deleteEvent(id).subscribe(
      (data) => this.event = data,
      () => this.errorMsg = "error",
      () => console.log('the sequence completed!')
    )
    this.router.navigate(['/eventList']);

  }

  updateEvent(id){
    this.router.navigate(['updateevent', id])
  }


}
