import { Component, Input, OnInit } from '@angular/core';
import { Philosopher } from '../../philosopher.model';
import { PhilosopherService } from '../../philosopher.service';

@Component({
  selector: 'app-philosopher-item',
  templateUrl: './philosopher-item.component.html',
  styleUrls: ['./philosopher-item.component.css']
})
export class PhilosopherItemComponent implements OnInit {

  @Input() philo: Philosopher;

  constructor(private philosopherService: PhilosopherService) { }

  ngOnInit(): void {
  }

  onSelected() {
     this.philosopherService.philosopherSelected.emit(this.philo);
  }

}
