import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Philosopher } from '../../philosopher.model';

@Component({
  selector: 'app-philosopher-item',
  templateUrl: './philosopher-item.component.html',
  styleUrls: ['./philosopher-item.component.css']
})
export class PhilosopherItemComponent implements OnInit {

  @Input() philo: Philosopher;
  @Output() philosopherSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
      this.philosopherSelected.emit();
  }

}
