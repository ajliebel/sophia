import { Component, OnInit } from '@angular/core';
import { Philosopher } from './philosopher.model';

@Component({
  selector: 'app-philosophers',
  templateUrl: './philosophers.component.html',
  styleUrls: ['./philosophers.component.css']
})
export class PhilosophersComponent implements OnInit {
  selectedPhilo: Philosopher
  constructor() { }

  ngOnInit(): void {
  }



}
