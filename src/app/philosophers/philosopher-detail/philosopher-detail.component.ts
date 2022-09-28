import { Component, Input, OnInit } from '@angular/core';
import { Philosopher } from '../philosopher.model';

@Component({
  selector: 'app-philosopher-detail',
  templateUrl: './philosopher-detail.component.html',
  styleUrls: ['./philosopher-detail.component.css']
})
export class PhilosopherDetailComponent implements OnInit {

  @Input() philo: Philosopher;

  constructor() { }

  ngOnInit(): void {
  }

}
