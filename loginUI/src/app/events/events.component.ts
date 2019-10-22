import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events=[];

  constructor(private _event: EventsService) { }

  ngOnInit() {
    this._event.getEvents()
      .subscribe( 
        res => this.events = res,
        error => console.log(error)
      );    
  }

}
