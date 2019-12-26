import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  id: number;
  event: Event;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.event = new Event;
    this.id = this.route.snapshot.params['id'];

    this.eventService.getOneEvent(this.id)
    .subscribe(data => {
      console.log(data);
      this.event = data;
    }, error => console.log(error));

  }

  onSubmit(){
    this.eventService.updateEvent(this.id, this.event)
    .subscribe(data => console.log(data),
    error => console.log(error));
    this.event = new Event();
    this.router.navigate(['/eventList']);
  }

}
