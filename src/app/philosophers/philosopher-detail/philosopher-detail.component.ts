import { Component, OnInit } from '@angular/core';
import { Philosopher } from '../philosopher.model';
import { PhilosopherService } from '../philosopher.service';

@Component({
  selector: 'app-philosopher-detail',
  templateUrl: './philosopher-detail.component.html',
  styleUrls: ['./philosopher-detail.component.css']
})
export class PhilosopherDetailComponent implements OnInit {

  philo: Philosopher;

  constructor(private philosopherService: PhilosopherService) { }

  ngOnInit(): void {
  }

}
