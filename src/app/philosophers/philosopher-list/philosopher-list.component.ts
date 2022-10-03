import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Philosopher } from '../philosopher.model';
import { PhilosopherService } from '../philosopher.service';

@Component({
  selector: 'app-philosopher-list',
  templateUrl: './philosopher-list.component.html',
  styleUrls: ['./philosopher-list.component.css']
})
export class PhilosopherListComponent implements OnInit {
   
   philosophers: Philosopher[];

  constructor(private philosopherService: PhilosopherService) { }

  ngOnInit(): void {
    this.philosophers = this.philosopherService.getPhilosophers();
  }
}
