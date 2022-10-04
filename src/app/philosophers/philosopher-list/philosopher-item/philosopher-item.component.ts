import { Component, Input, OnInit } from '@angular/core';
import { Philosopher } from '../../philosopher.model';

@Component({
  selector: 'app-philosopher-item',
  templateUrl: './philosopher-item.component.html',
  styleUrls: ['./philosopher-item.component.css']
})
export class PhilosopherItemComponent implements OnInit {

  @Input() philo: Philosopher;
  @Input() index: number;

  ngOnInit() {
  }



}
