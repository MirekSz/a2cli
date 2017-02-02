import {Component, OnInit} from '@angular/core';
import {Reaction} from "../jobs-details/jobs-details.component";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  name: string;

  constructor() {
  }

  apply(event: Reaction) {
    this.name = event.newValue;
  }

  ngOnInit() {
  }

}
