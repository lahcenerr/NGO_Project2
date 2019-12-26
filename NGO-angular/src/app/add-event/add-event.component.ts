import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  public submmitted = false;
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
  }

  onSubmit() {
    this.submmitted = true;
    console.log(this.event);
    this.eventService.postEvent(this.event).subscribe(
      (data) => this.event = data,
      () => this.errorMsg = "error",
      () => console.log('success')

    )
      this.router.navigate(["/eventList"]);
  }

}
